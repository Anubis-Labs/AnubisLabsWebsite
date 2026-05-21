import { Resend } from 'resend';

// Vercel Serverless Function
export default async function handler(req: any, res: any) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
        const { name, email, company, role, inquiry, deployment, message, timeline, budget } = body || {};

        if (!process.env.RESEND_API_KEY) {
            throw new Error("RESEND_API_KEY is not configured in Vercel Environment Variables");
        }

        const resend = new Resend(process.env.RESEND_API_KEY);

        // Who the email is sent to (you)
        const recipientEmail = process.env.CONTACT_EMAIL || 'your-email@example.com';

        const { data, error } = await resend.emails.send({
            from: 'Anubis Labs <onboarding@resend.dev>',
            to: [recipientEmail],
            subject: `New Inquiry from ${name} - ${inquiry}`,
            html: `
                <h2>New Contact Request</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Company:</strong> ${company || 'N/A'}</p>
                <p><strong>Role:</strong> ${role || 'N/A'}</p>
                <p><strong>Inquiry Type:</strong> ${inquiry || 'N/A'}</p>
                <p><strong>Target Deployment:</strong> ${deployment || 'N/A'}</p>
                <p><strong>Message:</strong><br/> ${message}</p>
                <p><strong>Timeline:</strong> ${timeline || 'N/A'}</p>
                <p><strong>Budget Range:</strong> ${budget || 'N/A'}</p>
            `,
        });

        if (error) {
            console.error('Error sending email via Resend:', error);
            // Return stringified version of Error object explicitly
            return res.status(400).json({ error: error.message || error });
        }

        return res.status(200).json({ message: 'Email sent successfully!', data });
    } catch (error: any) {
        console.error('Server error detail:', error);
        return res.status(500).json({ error: error.message || String(error) });
    }
}
