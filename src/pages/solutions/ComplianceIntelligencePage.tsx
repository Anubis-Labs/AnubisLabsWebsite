import { Link } from "react-router-dom"
import { Scale, CheckCircle2, ShieldAlert, Cpu, Database, Network } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ComplianceIntelligencePage() {
    return (
        <div className="w-full">
            {/* HERO */}
            <section className="container mx-auto px-4 pt-8 pb-24 lg:pt-16 lg:pb-32 relative">

                <div className="max-w-3xl relative z-10 mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm mb-6 text-primary">
                        <Scale className="w-4 h-4" /> Deterministic Logic
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6">
                        Compliance <span className="text-primary">Intelligence.</span>
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8">
                        Deterministic checks first. Generative synthesis second. Radically accelerate policy and QA reviews without sacrificing accuracy.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Button asChild size="lg">
                            <Link to="?contact=true">Discuss Your Workflow</Link>
                        </Button>
                        <Button asChild variant="outline" size="lg">
                            <Link to="/process">View Implementation Process</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* PHILOSOPHY */}
            <section className="bg-card glass border-y border-white/5 py-16 text-center">
                <div className="container mx-auto px-4 max-w-4xl">
                    <ShieldAlert className="w-12 h-12 text-primary mx-auto mb-6" />
                    <h2 className="text-3xl font-bold mb-4">Philosophy: Rules-first, AI second.</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        LLMs are probabilistic and prone to hallucination. When evaluating high-stakes compliance—from municipal building codes to global supply chain ESG criteria—you cannot rely on guessing. We build systems that extract structured data securely, then pass it through hardcoded, deterministic rules engines. AI handles the ambiguity; code handles the compliance.
                    </p>
                </div>
            </section>

            {/* CAPABILITIES */}
            <section className="container mx-auto px-4 py-24">
                <h2 className="text-3xl font-bold mb-12 text-center">Engine Capabilities</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    <div className="bg-background/50 border border-white/5 p-6 rounded-2xl shadow-xl flex flex-col gap-4">
                        <CheckCircle2 className="w-8 h-8 text-primary shrink-0" />
                        <h3 className="text-xl font-bold">Deterministic Checks</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed flex-1">Translate complex manuals into absolute logic gates (If X &gt; Y, FAIL). The system evaluates extracted parameters perfectly every time.</p>
                    </div>
                    <div className="bg-background/50 border border-white/5 p-6 rounded-2xl shadow-xl flex flex-col gap-4">
                        <Database className="w-8 h-8 text-primary shrink-0" />
                        <h3 className="text-xl font-bold">Evidence Capture</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed flex-1">Every compliance decision is packaged with the exact paragraph, image, or table cell used to justify the pass/fail state.</p>
                    </div>
                    <div className="bg-background/50 border border-white/5 p-6 rounded-2xl shadow-xl flex flex-col gap-4">
                        <Network className="w-8 h-8 text-primary shrink-0" />
                        <h3 className="text-xl font-bold">Jurisdiction Awareness</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed flex-1">Code requirements shift by geography and project phase. The engine dynamically maps requirements based on incoming metadata.</p>
                    </div>
                    <div className="bg-background/50 border border-white/5 p-6 rounded-2xl shadow-xl flex flex-col gap-4">
                        <Cpu className="w-8 h-8 text-primary shrink-0" />
                        <h3 className="text-xl font-bold">Risk Scoring</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed flex-1">Flag edge cases for human review immediately. Prioritize human-in-the-loop bandwidth on the 5% of ambiguous applications, automating the 95% standard approvals.</p>
                    </div>
                </div>
            </section>

            {/* USE CASES & DEPLOYMENT */}
            <section className="py-24 bg-white/[0.02] border-y border-white/5">
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 max-w-5xl">
                    <div>
                        <h2 className="text-3xl font-bold mb-8">Deployment</h2>
                        <ul className="space-y-6 text-muted-foreground">
                            <li className="flex gap-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                                <div>
                                    <strong className="text-foreground block mb-1">Local/VPC Execution</strong>
                                    Process sensitive citizen data, PII, and proprietary designs entirely behind your existing firewall.
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                                <div>
                                    <strong className="text-foreground block mb-1">Redaction Proxies</strong>
                                    If utilizing cloud intelligence, automatically strip sensitive entities locally before transmitting context to external models.
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-8">Supported Workflows</h2>
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Municipal Policy Review</h3>
                                <p className="text-sm text-muted-foreground">Halve permit processing times. Ingest application packages and evaluate them rigorously against local bylaws, creating audit trails for citizens.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Internal Procedure Audits</h3>
                                <p className="text-sm text-muted-foreground">Scan internal communications, action logs, or purchasing requests to determine compliance against corporate governance rules natively.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Engineering QA Gates</h3>
                                <p className="text-sm text-muted-foreground">Establish automated checks on preliminary drawings and specifications to ensure they meet the master contract requirements before human review.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 text-center">
                <div className="container mx-auto px-4 max-w-2xl">
                    <h2 className="text-3xl font-bold mb-6">Stop rubber-stamping.</h2>
                    <p className="text-lg text-muted-foreground mb-8">Reduce your QA backlog by implementing deterministic AI evaluation pipelines.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="h-14 px-8 text-lg">
                            <Link to="?contact=true">Scope a Pilot Architecture</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
