import { Link } from "react-router-dom"
import { Shield, Target, Lock, Activity, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AboutPage() {
    return (
        <div className="w-full">
            <section className="container mx-auto px-4 pt-8 pb-24 relative lg:pt-16 lg:pb-32">

                <div className="max-w-3xl relative z-10 mb-16">
                    <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6">
                        No hype. <span className="text-primary">Just systems.</span>
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                        Anubis Labs was founded on a simple premise: enterprise organizations cannot deploy probabilistic AI without deterministic guardrails.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 bg-card glass border border-white/5 p-8 rounded-2xl shadow-xl relative z-10">
                    <div>
                        <h2 className="text-3xl font-bold mb-4 flex items-center gap-2"><Target className="text-primary w-6 h-6" /> Mission</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            To build and deploy governed AI runtimes that adhere to stringent regulatory, infosec, and operational standards. We ensure every output is auditable, every action is permitted, and every risk is mitigated natively in the architecture.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-4 flex items-center gap-2"><Globe className="text-primary w-6 h-6" /> Operating Model</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Based in Calgary, AB, we operate dynamically alongside enterprise IT and security teams globally. We maintain limited concurrent engagements, prioritizing obsessive engineering quality and long-term defensibility over rapid scale.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white/[0.02]">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Engineering Principles</h2>
                        <p className="text-muted-foreground text-lg">The constraints we enforce on every architecture we touch.</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <div className="flex gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                <Activity className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Systems that Ship</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    We don't build vaporware or infinite proof-of-concepts. We construct bounded MVP pipelines that can pass security reviews and enter production environments within weeks, not years.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                <Shield className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Defend & Govern</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Trust is established through hard rules. We enforce RBAC directly into retrieval workflows and place deterministic policy engines in front of all probabilistic generation.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                <FileText className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Forensic Auditability</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Every agent invocation must leave an immutable trace. If a compliance officer asks why the system produced a specific output, we ensure the infrastructure holds the exact answer.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                <Lock className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Minimize Blast Radius</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Systems should fail gracefully and securely. We enforce rate and token budgets, restrict egress connectivity, and construct isolated sandboxes natively.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 text-center">
                <div className="container mx-auto px-4 max-w-2xl">
                    <h2 className="text-3xl font-bold mb-6">Build with a technical team.</h2>
                    <p className="text-lg text-muted-foreground mb-8">Discuss architectures, infrastructure challenges, and your regulatory posture directly with our engineering staff.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="h-14 px-8 text-lg">
                            <Link to="?contact=true">Request Engineering Sync</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}

function FileText(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" x2="8" y1="13" y2="13" />
            <line x1="16" x2="8" y1="17" y2="17" />
            <line x1="10" x2="8" y1="9" y2="9" />
        </svg>
    )
}
