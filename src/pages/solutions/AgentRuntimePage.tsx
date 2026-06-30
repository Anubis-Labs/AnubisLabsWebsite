import { Link } from "react-router-dom"
import { Terminal, Shield, ListChecks, Server, Search, FileText, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AgentRuntimePage() {
    return (
        <div className="w-full">
            {/* HERO */}
            <section className="container mx-auto px-4 pt-8 pb-24 lg:pt-16 lg:pb-32 relative">

                <div className="max-w-3xl relative z-10 mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm mb-6">
                        <Terminal className="w-4 h-4 text-primary" /> Architecture Blueprint
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6">
                        Policy-Gated <span className="text-primary">Agent Runtime.</span>
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8">
                        Automation with approvals, budgets, and absolute traceability. Build agents that can take action without compromising enterprise security.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Button asChild size="lg">
                            <Link to="?contact=true">Request a Pilot</Link>
                        </Button>
                        <Button asChild variant="outline" size="lg">
                            <Link to="/security">See Security Posture</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* TWO COL: WHO IT'S FOR & CAPABILITIES */}
            <section className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-6 bg-card glass border border-white/5 p-8 rounded-2xl shadow-xl">
                        <h2 className="text-2xl font-bold flex items-center gap-2"><CheckCircle2 className="w-6 h-6 text-primary" /> Who it's for</h2>
                        <ul className="space-y-4">
                            <li className="flex gap-3 text-muted-foreground"><div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div> Security-sensitive teams operating in regulated environments</li>
                            <li className="flex gap-3 text-muted-foreground"><div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div> IT and Ops teams automating repetitive ticketing workflows</li>
                            <li className="flex gap-3 text-muted-foreground"><div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div> Engineering (EPCM) organizations requiring internal, domain-specific copilots</li>
                        </ul>
                    </div>
                    <div className="space-y-6 bg-card glass border border-white/5 p-8 rounded-2xl shadow-xl">
                        <h2 className="text-2xl font-bold flex items-center gap-2"><Shield className="w-6 h-6 text-primary" /> Capabilities</h2>
                        <ul className="space-y-4">
                            <li className="flex gap-3 text-muted-foreground"><div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div> Tool execution restricted by deterministic policy gates</li>
                            <li className="flex gap-3 text-muted-foreground"><div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div> Human-in-the-loop approval blocks for high-risk execution paths</li>
                            <li className="flex gap-3 text-muted-foreground"><div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div> Hardened budget controls and API rate limiting</li>
                            <li className="flex gap-3 text-muted-foreground"><div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div> Immutable forensic logs covering context, reasoning, and tool artifacts</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* WHERE IT FITS DIAGRAM */}
            <section className="py-24 bg-white/[0.02]">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-12 text-center">Where it fits in your stack</h2>
                    <div className="grid md:grid-cols-5 gap-4">
                        <div className="col-span-1 flex flex-col items-center text-center space-y-4 pt-4">
                            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center border border-white/10 shrink-0">
                                <FileText className="w-6 h-6 text-muted-foreground" />
                            </div>
                            <span className="font-semibold text-sm">Inputs</span>
                            <p className="text-xs text-muted-foreground">Docs, tickets, core systems</p>
                        </div>
                        <div className="col-span-1 flex flex-col items-center text-center space-y-4 mt-8 md:mt-0 pt-4 relative md:before:absolute md:before:w-16 md:before:h-[2px] md:before:bg-white/10 md:before:-left-8 md:before:top-12">
                            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center border border-white/10 shrink-0">
                                <Search className="w-6 h-6 text-muted-foreground" />
                            </div>
                            <span className="font-semibold text-sm">Retrieval</span>
                            <p className="text-xs text-muted-foreground">Vector memory (optional)</p>
                        </div>
                        <div className="col-span-1 flex flex-col items-center text-center space-y-4 mt-8 md:mt-0 pt-4 relative md:before:absolute md:before:w-16 md:before:h-[2px] md:before:bg-primary/50 md:before:-left-8 md:before:top-12">
                            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center border border-primary shrink-0 relative">
                                <ListChecks className="w-6 h-6 text-primary" />
                            </div>
                            <span className="font-semibold text-sm">Action Layer</span>
                            <p className="text-xs text-primary font-medium">Policy Gated Tools</p>
                        </div>
                        <div className="col-span-1 flex flex-col items-center text-center space-y-4 mt-8 md:mt-0 pt-4 relative md:before:absolute md:before:w-16 md:before:h-[2px] md:before:bg-primary/50 md:before:-left-8 md:before:top-12">
                            <div className="w-16 h-16 bg-secondary/80 rounded-full flex items-center justify-center border border-white/10 shrink-0 relative">
                                <Shield className="w-6 h-6 text-foreground" />
                            </div>
                            <span className="font-semibold text-sm">Policy Engine</span>
                            <p className="text-xs text-muted-foreground">Approval Rules & RBAC</p>
                        </div>
                        <div className="col-span-1 flex flex-col items-center text-center space-y-4 mt-8 md:mt-0 pt-4 relative md:before:absolute md:before:w-16 md:before:h-[2px] md:before:bg-white/10 md:before:-left-8 md:before:top-12">
                            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center border border-white/10 shrink-0">
                                <Terminal className="w-6 h-6 text-muted-foreground" />
                            </div>
                            <span className="font-semibold text-sm">Logs / Traces</span>
                            <p className="text-xs text-muted-foreground">Immutable forensic streams</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* USE CASES & DEPLOYMENT */}
            <section className="container mx-auto px-4 py-24">
                <div className="grid md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl font-bold mb-8">Common Use Cases</h2>
                        <div className="space-y-6">
                            <div className="bg-card glass p-6 border border-white/5 rounded-xl">
                                <h3 className="text-xl font-semibold mb-2">Internal IT/Ops Automation</h3>
                                <p className="text-sm text-muted-foreground">Resolve Tier 1 and Tier 2 support tickets autonomously, pausing for human approval strictly when mutating critical systems.</p>
                            </div>
                            <div className="bg-card glass p-6 border border-white/5 rounded-xl">
                                <h3 className="text-xl font-semibold mb-2">Standards Q&A + Actions</h3>
                                <p className="text-sm text-muted-foreground">Query thousands of engineering standards and generate spec-compliant boilerplates that are checked definitively against the baseline.</p>
                            </div>
                            <div className="bg-card glass p-6 border border-white/5 rounded-xl">
                                <h3 className="text-xl font-semibold mb-2">Audit Report Generation</h3>
                                <p className="text-sm text-muted-foreground">Synthesize risk compliance reports requiring complex chained logic, backed natively by exact citations and deterministic rules.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-8">Deployment Focus</h2>
                        <div className="space-y-6">
                            <div className="flex gap-4 items-start">
                                <Server className="w-6 h-6 text-primary shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold mb-1">Offline & Local-First</h4>
                                    <p className="text-sm text-muted-foreground">Operate the entire stack in fully air-gapped environments utilizing highly optimized local LLMs, guaranteeing zero external data transit.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <Shield className="w-6 h-6 text-primary shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold mb-1">VPC Installations</h4>
                                    <p className="text-sm text-muted-foreground">Container orchestration directly inside your AWS, Azure, or GCP Virtual Private Cloud, retaining infrastructure compliance natively.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <Terminal className="w-6 h-6 text-primary shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold mb-1">Hybrid Cloud Control</h4>
                                    <p className="text-sm text-muted-foreground">Deploy policy engines and data layers on-prem while securely bridging non-sensitive reasoning tasks to powerful cloud APIs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 text-center border-t border-white/5 bg-white/[0.02]">
                <div className="container mx-auto px-4 max-w-2xl">
                    <h2 className="text-3xl font-bold mb-6">Validate the architecture.</h2>
                    <p className="text-lg text-muted-foreground mb-8">Speak with our engineers to map our runtime capabilities against your most complex manual workflows.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="h-14 px-8 text-lg">
                            <Link to="/contact?inquiry=Architectural%20review">Book Architectural Review</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
