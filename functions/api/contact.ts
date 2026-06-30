import { Resend } from "resend"

type Env = {
    RESEND_API_KEY?: string
    CONTACT_EMAIL?: string
    RESEND_FROM?: string
}

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
        const { name, email, company, role, inquiry, deployment, message, timeline, budget, _gotcha } = body

        if (_gotcha) {
            return json({ message: "Request received" })
        }

        if (!name || !email || !message) {
            return json({ error: "Name, email, and message are required" }, { status: 400 })
        }

        if (!env.RESEND_API_KEY) {
            return json({ error: "RESEND_API_KEY is not configured" }, { status: 500 })
        }

        const resend = new Resend(env.RESEND_API_KEY)
        const recipientEmail = env.CONTACT_EMAIL || "your-email@example.com"
        const fromEmail = env.RESEND_FROM || "Anubis Labs <onboarding@resend.dev>"

        const { data, error } = await resend.emails.send({
            from: fromEmail,
            to: [recipientEmail],
            replyTo: email,
            subject: `New Inquiry from ${name} - ${inquiry || "Website"}`,
            html: `
                <h2>New Contact Request</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Company:</strong> ${company || "N/A"}</p>
                <p><strong>Role:</strong> ${role || "N/A"}</p>
                <p><strong>Inquiry Type:</strong> ${inquiry || "N/A"}</p>
                <p><strong>Target Deployment:</strong> ${deployment || "N/A"}</p>
                <p><strong>Message:</strong><br/> ${message}</p>
                <p><strong>Timeline:</strong> ${timeline || "N/A"}</p>
                <p><strong>Budget Range:</strong> ${budget || "N/A"}</p>
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
