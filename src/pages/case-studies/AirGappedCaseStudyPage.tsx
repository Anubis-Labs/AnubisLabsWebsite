import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"

export function AirGappedCaseStudyPage() {
    return (
        <div className="w-full">
            <section className="container mx-auto px-4 py-24 max-w-4xl relative z-10">
                <div className="mb-8">
                    <Link to="/case-studies" className="text-primary hover:underline font-medium">&larr; Back to Case Studies</Link>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                    Air-Gapped Sandbox
                </h1>
                <p className="text-2xl text-primary font-medium mb-12">Outcome: Deployable in VPC or fully offline, zero cloud dependency</p>

                <div className="space-y-16">
                    {/* SUMMARY & CLIENT PROFILE */}
                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        <div>
                            <h2 className="text-2xl font-bold border-b border-white/10 pb-2 mb-4">Summary</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                A restricted environment required an automation assistant with zero cloud dependency. The solution was a local-first agent runtime that can operate fully offline with sandboxed tool execution, approvals for risky actions, and comprehensive run traces.
                            </p>
                        </div>
                        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                            <h2 className="text-xl font-bold mb-4">Client Profile</h2>
                            <ul className="space-y-2 text-muted-foreground text-sm">
                                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div> Security-restricted workloads</li>
                                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div> Offline or VPC-bound environments</li>
                                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div> Needs tool execution controls, not just text generation</li>
                            </ul>
                        </div>
                    </div>

                    {/* THE PROBLEM & CONSTRAINTS */}
                    <div>
                        <h2 className="text-2xl font-bold border-b border-white/10 pb-2 mb-6 text-foreground">The Problem</h2>
                        <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                            They needed productivity gains but could not send data to external services. They also needed guardrails because "agents" can do unpredictable and destructive things if not gated.
                        </p>

                        <h2 className="text-2xl font-bold border-b border-white/10 pb-2 mb-6 text-foreground">Constraints</h2>
                        <ul className="grid sm:grid-cols-2 gap-4 text-muted-foreground">
                            <li className="bg-background border border-white/5 p-4 rounded-lg">Zero cloud dependency option</li>
                            <li className="bg-background border border-white/5 p-4 rounded-lg">Strict egress control</li>
                            <li className="bg-background border border-white/5 p-4 rounded-lg">Actions must be explicitly policy-gated</li>
                            <li className="bg-background border border-white/5 p-4 rounded-lg">Traceability must be complete for review and governance</li>
                        </ul>
                    </div>

                    {/* SOLUTION */}
                    <div>
                        <h2 className="text-2xl font-bold border-b border-white/10 pb-2 mb-6 text-foreground">The Solution</h2>
                        <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                            We provided a hardened runtime focusing on deterministic operational controls and isolation.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-card glass border border-white/5 p-6 rounded-xl">
                                <h3 className="text-xl font-bold mb-3 text-primary">Execution Controls</h3>
                                <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                                    <li><strong className="text-foreground">Tool registry with schemas:</strong> Tools must strictly declare what they do.</li>
                                    <li><strong className="text-foreground">Policy engine:</strong> Rules configured to allow, deny, or require explicit human approval applied prior to tool calls.</li>
                                    <li><strong className="text-foreground">Budget controls:</strong> Hard limits to cap computation usage and prevent runaway behaviors or cost/resource spikes.</li>
                                </ul>
                            </div>

                            <div className="bg-card glass border border-white/5 p-6 rounded-xl">
                                <h3 className="text-xl font-bold mb-3 text-primary">Isolation & Telemetry</h3>
                                <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                                    <li><strong className="text-foreground">Sandbox execution:</strong> Reduces blast radius by siloing executions away from critical on-prem systems.</li>
                                    <li><strong className="text-foreground">Full run records:</strong> Comprehensive offline telemetry captures all inputs, tool calls, model outputs, and generated artifacts.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* EXECUTION & RESULTS */}
                    <div className="grid md:grid-cols-2 gap-8 items-center bg-primary/5 p-8 rounded-2xl border border-primary/20">
                        <div>
                            <h2 className="text-2xl font-bold mb-2 text-foreground">The Results</h2>
                            <p className="text-muted-foreground">Controlled automation delivered exactly within the security envelope.</p>
                        </div>
                        <div>
                            <ul className="space-y-4 font-black text-xl text-foreground">
                                <li className="flex gap-3"><span className="text-primary">&rarr;</span> Deployable in VPC or fully offline</li>
                                <li className="flex gap-3"><span className="text-primary">&rarr;</span> Zero cloud exposure</li>
                                <li className="flex gap-3"><span className="text-primary">&rarr;</span> Controlled automation with auditable actions</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-24 pt-12 border-t border-white/5 text-center">
                    <h2 className="text-3xl font-bold mb-6">Need secure automation?</h2>
                    <Button asChild size="lg" className="h-14 px-8 text-lg">
                        <Link to="/contact?inquiry=Case%20Study%3A%20Air-Gapped">Request the air-gapped deployment case study and control checklist</Link>
                    </Button>
                </div>
            </section>
        </div>
    )
}
