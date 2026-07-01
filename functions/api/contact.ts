import { Resend } from "resend"

type Env = {
    RESEND_API_KEY?: string
    CONTACT_EMAIL?: string
    RESEND_FROM?: string
}

const escapeHtml = (value = "") =>
    value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;")

const clean = (value?: string) => value?.toString().trim() || ""

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

const json = (body: unknown, init?: ResponseInit) =>
    new Response(JSON.stringify(body), {
        ...init,
        headers: {
            "Content-Type": "application/json",
            ...init?.headers,
        },
    })

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
    try {
        const body = await request.json<Record<string, string>>()
        const name = clean(body.name)
        const email = clean(body.email)
        const company = clean(body.company)
        const role = clean(body.role)
        const inquiry = clean(body.inquiry)
        const deployment = clean(body.deployment)
        const message = clean(body.message)
        const timeline = clean(body.timeline)
        const budget = clean(body.budget)
        const gotcha = clean(body._gotcha)

        if (gotcha) {
            return json({ message: "Request received" })
        }

        if (!name || !email || !message) {
            return json({ error: "Name, email, and message are required" }, { status: 400 })
        }

        if (!isValidEmail(email)) {
            return json({ error: "A valid email address is required" }, { status: 400 })
        }

        const missingConfig = [
            !env.RESEND_API_KEY && "RESEND_API_KEY",
            !env.CONTACT_EMAIL && "CONTACT_EMAIL",
            !env.RESEND_FROM && "RESEND_FROM",
        ].filter(Boolean)

        if (missingConfig.length > 0) {
            console.error(`Contact form missing configuration: ${missingConfig.join(", ")}`)
            return json({ error: "Contact form email delivery is not configured" }, { status: 500 })
        }

        const resend = new Resend(env.RESEND_API_KEY)
        const recipientEmail = env.CONTACT_EMAIL!
        const fromEmail = env.RESEND_FROM!
        const subjectInquiry = inquiry || "Website"

        const fields = [
            ["Name", name],
            ["Email", email],
            ["Company", company || "N/A"],
            ["Role", role || "N/A"],
            ["Inquiry Type", inquiry || "N/A"],
            ["Target Deployment", deployment || "N/A"],
            ["Message", message],
            ["Timeline", timeline || "N/A"],
            ["Budget Range", budget || "N/A"],
        ]

        const htmlRows = fields
            .map(([label, value]) => {
                const formattedValue = label === "Message"
                    ? escapeHtml(value).replace(/\n/g, "<br />")
                    : escapeHtml(value)
                return `<p><strong>${escapeHtml(label)}:</strong><br />${formattedValue}</p>`
            })
            .join("")

        const text = fields
            .map(([label, value]) => `${label}: ${value}`)
            .join("\n\n")

        const { data, error } = await resend.emails.send({
            from: fromEmail,
            to: [recipientEmail],
            replyTo: email,
            subject: `New Anubis Labs inquiry from ${name} - ${subjectInquiry}`,
            text,
            html: `
                <h2>New Contact Request</h2>
                ${htmlRows}
            `,
        })

        if (error) {
            console.error("Error sending email via Resend:", error)
            return json({ error: error.message || "Unable to send email" }, { status: 400 })
        }

        return json({ message: "Email sent successfully", data })
    } catch (error) {
        console.error("Contact function error:", error)
        const message = error instanceof Error ? error.message : String(error)
        return json({ error: message }, { status: 500 })
    }
}

export const onRequest: PagesFunction<Env> = async () => {
    return json({ error: "Method Not Allowed" }, { status: 405 })
}
