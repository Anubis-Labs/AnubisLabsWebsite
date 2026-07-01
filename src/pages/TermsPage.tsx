export function TermsPage() {
    return (
        <div className="w-full">
            <section className="container mx-auto px-4 py-24 max-w-4xl relative z-10">
                <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms of Service</h1>
                <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
                    <p>Last updated: June 2026</p>

                    <h2 className="text-2xl font-semibold text-foreground mt-8">1. Acceptance of Terms</h2>
                    <p>
                        By accessing or using the Anubis Labs website and associated services, you agree to be bound by these Terms of Service. If you are entering into these terms on behalf of an enterprise or organization, you represent that you have the authority to bind that entity to these conditions.
                    </p>

                    <h2 className="text-2xl font-semibold text-foreground mt-8">2. Software and Solutions</h2>
                    <p>
                        Anubis Labs builds governed, custom AI systems, including agent runtimes, knowledge platforms, and compliance intelligence tools. General access to these systems is controlled and provided following qualification, architecture review, and mutual execution of the relevant commercial agreements.
                    </p>

                    <h2 className="text-2xl font-semibold text-foreground mt-8">3. Confidentiality and Intellectual Property</h2>
                    <p>
                        Both parties agree to protect proprietary architecture concepts, source code, data sets, and business logic disclosed during evaluation, pilot, or production deployment phases. Formal confidentiality terms may be documented in the relevant engagement agreements.
                    </p>

                    <h2 className="text-2xl font-semibold text-foreground mt-8">4. Liability Limitations</h2>
                    <p>
                        Generative models are inherently probabilistic. While Anubis Labs designs policy gates, evaluations, and review workflows, clients remain responsible for validating systems against their operational requirements before production use.
                    </p>

                    <h2 className="text-2xl font-semibold text-foreground mt-8">5. Amendments</h2>
                    <p>
                        We reserve the right to amend these Terms at any time by updating this document and adjusting the "Last updated" date. Continued engagement following any changes indicates your acceptance of the revised Terms.
                    </p>
                </div>
            </section>
        </div>
    )
}
