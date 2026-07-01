export function PrivacyPage() {
    return (
        <div className="w-full">
            <section className="container mx-auto px-4 py-24 max-w-4xl relative z-10">
                <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
                <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
                    <p>Last updated: June 2026</p>

                    <h2 className="text-2xl font-semibold text-foreground mt-8">1. Information we collect</h2>
                    <p>
                        We collect information you provide directly to us when you request access to our systems, subscribe to notifications, or communicate with us. This includes your name, corporate email address, role, company details, and the content of your messages.
                    </p>

                    <h2 className="text-2xl font-semibold text-foreground mt-8">2. How we use your information</h2>
                    <p>
                        We use the information we collect to communicate with you about your infrastructure requirements, coordinate architecture reviews, qualify your team for our limited pilot intake program, and provide the services you request. We do not sell your personal information.
                    </p>

                    <h2 className="text-2xl font-semibold text-foreground mt-8">3. Infrastructure deployment data</h2>
                    <p>
                        Data processed by Anubis Labs during an active engagement is governed by the applicable statement of work, deployment model, and data processing terms agreed with the client. We do not use customer data, log streams, or PII to train foundational or generalized machine learning models.
                    </p>

                    <h2 className="text-2xl font-semibold text-foreground mt-8">4. Data retention</h2>
                    <p>
                        We retain personal information for as long as necessary to provide our services, maintain required records, and fulfill the business purposes outlined in this policy. Client data handling and deletion practices are governed by the agreed-upon statement of work or data processing terms.
                    </p>

                    <h2 className="text-2xl font-semibold text-foreground mt-8">5. Contact us</h2>
                    <p>
                        If you have questions about this Privacy Policy, your rights concerning your personal data, or our data handling practices, please contact us at hello@anubislabs.ca.
                    </p>
                </div>
            </section>
        </div>
    )
}
