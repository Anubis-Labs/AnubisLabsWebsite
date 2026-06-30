import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"

export function MunicipalCaseStudyPage() {
    return (
        <div className="w-full">
            <section className="container mx-auto px-4 pt-8 pb-24 lg:pt-16 lg:pb-32 max-w-4xl relative z-10">
                <div className="mb-8">
                    <Link to="/case-studies" className="text-primary hover:underline font-medium">&larr; Back to Case Studies</Link>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                    Municipal Policy Automation
                </h1>
                <p className="text-2xl text-primary font-medium mb-12">Outcome: Audit-ready traces for every decision in the pipeline</p>

                <div className="space-y-16">
                    {/* SUMMARY & CLIENT PROFILE */}
                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        <div>
                            <h2 className="text-2xl font-bold border-b border-white/10 pb-2 mb-4">Summary</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Municipal permitting workflows are policy-heavy and require defensible decisions. This system automated preliminary permit screening using deterministic rules first, with AI only used to resolve ambiguity. Every decision created an evidence trail that could be audited.
                            </p>
                        </div>
                        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                            <h2 className="text-xl font-bold mb-4">Client Profile</h2>
                            <ul className="space-y-2 text-muted-foreground text-sm">
                                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div> Municipal or policy-heavy organization</li>
                                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div> High volume of applications with repetitive screening steps</li>
                                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div> Strict need for decision defensibility and consistent outcomes</li>
                            </ul>
                        </div>
                    </div>

                    {/* THE PROBLEM & CONSTRAINTS */}
                    <div>
                        <h2 className="text-2xl font-bold border-b border-white/10 pb-2 mb-6 text-foreground">The Problem</h2>
                        <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                            Preliminary reviews were slow and inconsistent. Applicants received vague rejections and staff spent time repeating the same checks. Pure AI approaches were not acceptable because they could not reliably explain "why" a permit was denied or required revision.
                        </p>

                        <h2 className="text-2xl font-bold border-b border-white/10 pb-2 mb-6 text-foreground">Constraints</h2>
                        <ul className="grid sm:grid-cols-2 gap-4 text-muted-foreground">
                            <li className="bg-background border border-white/5 p-4 rounded-lg">Rules must be first-class and explainable</li>
                            <li className="bg-background border border-white/5 p-4 rounded-lg">AI cannot be the primary authority for pass/fail</li>
                            <li className="bg-background border border-white/5 p-4 rounded-lg">Every result must include traceable evidence: inputs, triggered rules, decision outputs</li>
                            <li className="bg-background border border-white/5 p-4 rounded-lg">Must support jurisdiction-specific policy variation</li>
                        </ul>
                    </div>

                    {/* SOLUTION */}
                    <div>
                        <h2 className="text-2xl font-bold border-b border-white/10 pb-2 mb-6 text-foreground">The Solution</h2>
                        <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                            We architected a <strong>policy-gated pipeline</strong> that explicitly separates hardcoded rules from generative synthesis.
                        </p>

                        <div className="space-y-4">
                            <div className="bg-card glass border border-white/5 p-6 rounded-xl">
                                <ol className="space-y-6 list-decimal list-inside text-muted-foreground">
                                    <li className="text-foreground font-medium text-lg border-b border-white/5 pb-4"><span className="text-muted-foreground text-base font-normal">Deterministic checks (rules engine) runs first</span></li>
                                    <li className="text-foreground font-medium text-lg border-b border-white/5 pb-4"><span className="text-muted-foreground text-base font-normal">Evidence capture: tracks what rules ran, what inputs were used, what thresholds applied</span></li>
                                    <li className="text-foreground font-medium text-lg border-b border-white/5 pb-4"><span className="text-muted-foreground text-base font-normal">Escalation only when ambiguity remains</span></li>
                                    <li className="text-foreground font-medium text-lg border-b border-white/5 pb-4"><span className="text-muted-foreground text-base font-normal">AI assists only in narrow, bounded tasks (classification, extraction, summarization), never as the final authority</span></li>
                                    <li className="text-foreground font-medium text-lg"><span className="text-muted-foreground text-base font-normal">Immutable decision log recorded end-to-end</span></li>
                                </ol>
                            </div>
                        </div>
                    </div>

                    {/* EXECUTION & RESULTS */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h2 className="text-2xl font-bold border-b border-white/10 pb-2 mb-4">What It Delivered</h2>
                            <p className="mb-4 text-muted-foreground">A structured <strong>"pre-check report"</strong> that includes:</p>
                            <ul className="space-y-2 text-sm text-foreground bg-background border border-white/5 p-6 rounded-xl">
                                <li className="flex gap-2 items-center"><span className="text-primary shrink-0">&rarr;</span> Pass/fail per rule</li>
                                <li className="flex gap-2 items-center"><span className="text-primary shrink-0">&rarr;</span> What specific data was used</li>
                                <li className="flex gap-2 items-center"><span className="text-primary shrink-0">&rarr;</span> What the applicant must change to pass</li>
                                <li className="flex gap-2 items-center pt-4 mt-2 border-t border-white/10 text-muted-foreground">Trace artifacts that can be reviewed later for disputes or audits</li>
                                <li className="flex gap-2 items-center text-muted-foreground">Faster turnaround and fewer back-and-forth interactions</li>
                            </ul>
                        </div>
                        <div className="bg-primary/5 p-6 rounded-xl border border-primary/20 flex flex-col justify-center">
                            <h2 className="text-2xl font-bold mb-6 text-foreground text-center">Outcome</h2>
                            <ul className="space-y-6 text-center text-foreground font-medium">
                                <li>
                                    <span className="text-primary text-2xl font-black block">Significantly Reduced</span>
                                    Permit processing queue time
                                </li>
                                <li>
                                    <span className="text-primary text-2xl font-black block">100% Audit-Ready</span>
                                    Traces available for every answer
                                </li>
                                <li className="text-sm font-normal text-muted-foreground mt-4">
                                    Reduced rework loops by returning clear fix instructions early in the pipeline.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-24 pt-12 border-t border-white/5 text-center">
                    <h2 className="text-3xl font-bold mb-6">Need a defensible automation pipeline?</h2>
                    <Button asChild size="lg" className="h-14 px-8 text-lg">
                        <Link to="/contact?inquiry=Case%20Study%3A%20Municipal%20Policy">Request the full municipal automation case study and sample output report</Link>
                    </Button>
                </div>
            </section>
        </div>
    )
}
