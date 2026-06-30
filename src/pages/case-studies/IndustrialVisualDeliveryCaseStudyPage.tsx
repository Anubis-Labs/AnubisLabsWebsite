import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"

export function IndustrialVisualDeliveryCaseStudyPage() {
    return (
        <div className="w-full">
            <section className="container mx-auto px-4 pt-8 pb-24 lg:pt-16 lg:pb-32 max-w-4xl relative z-10">
                <div className="mb-8">
                    <Link to="/case-studies" className="text-primary hover:underline font-medium">&larr; Back to Case Studies</Link>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                    Industrial Visual Delivery Platform
                </h1>
                <p className="text-2xl text-primary font-medium mb-12">Outcome: CAD/BIM screenshots transformed into decision-grade renders, videos, and delivery assets</p>

                <div className="space-y-16">
                    {/* SUMMARY & CLIENT PROFILE */}
                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        <div>
                            <h2 className="text-2xl font-bold border-b border-white/10 pb-2 mb-4">Summary</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                A visual AI product was built for industrial, construction, and technical sales teams that need polished project imagery without sending every screenshot through a manual rendering workflow. The system converts CAD, Navisworks, Revit, BIM, and field-style screenshots into controlled visual deliverables while preserving project context, geometry intent, workspace access, and output history.
                            </p>
                        </div>
                        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                            <h2 className="text-xl font-bold mb-4">Client Profile</h2>
                            <ul className="space-y-2 text-muted-foreground text-sm">
                                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div> Industrial and EPC project teams working from technical model screenshots</li>
                                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div> Proposal, pursuit, and stakeholder teams needing presentation-ready visuals quickly</li>
                                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div> Multi-user workspaces requiring auth, billing, project history, and controlled delivery links</li>
                            </ul>
                        </div>
                    </div>

                    {/* THE PROBLEM & CONSTRAINTS */}
                    <div>
                        <h2 className="text-2xl font-bold border-b border-white/10 pb-2 mb-6 text-foreground">The Problem</h2>
                        <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                            Industrial visuals are usually trapped between two bad options: raw model screenshots that undersell the work, or expensive manual rendering cycles that are too slow for fast proposals and internal reviews. Generic image generation was not enough because the camera, routing, equipment placement, and industrial object identity all had to remain credible.
                        </p>

                        <h2 className="text-2xl font-bold border-b border-white/10 pb-2 mb-6 text-foreground">Constraints</h2>
                        <ul className="grid sm:grid-cols-2 gap-4 text-muted-foreground">
                            <li className="bg-background border border-white/5 p-4 rounded-lg">Preserve camera viewpoint, equipment layout, and major geometry from the source image</li>
                            <li className="bg-background border border-white/5 p-4 rounded-lg">Handle large technical uploads without duplicate jobs, stale state, or lost history</li>
                            <li className="bg-background border border-white/5 p-4 rounded-lg">Support project/team scoping, billing entitlements, and production-safe error traces</li>
                            <li className="bg-background border border-white/5 p-4 rounded-lg">Extend beyond a single render into sequences, videos, plugins, and client deliverables</li>
                        </ul>
                    </div>

                    {/* SOLUTION */}
                    <div>
                        <h2 className="text-2xl font-bold border-b border-white/10 pb-2 mb-6 text-foreground">The Solution</h2>
                        <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                            We built a full-stack product platform around a guided Orb intake flow, a Gemini-backed render pipeline, workspace-aware storage, and a delivery layer for turning generated images into project assets.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-card glass border border-white/5 p-6 rounded-xl">
                                <h3 className="text-xl font-bold mb-3 text-primary">Controlled Render Pipeline</h3>
                                <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                                    <li><strong className="text-foreground">Guided intake:</strong> Orb prompts capture use case, location, materials, and freeform direction before job creation.</li>
                                    <li><strong className="text-foreground">Preflight and upload safety:</strong> File constraints, signed uploads, commit steps, and idempotency protect users from failed or duplicate submissions.</li>
                                    <li><strong className="text-foreground">Geometry-aware prompting:</strong> The backend enforces camera, layout, and object-identity locks so industrial details stay recognizable.</li>
                                </ul>
                            </div>

                            <div className="bg-card glass border border-white/5 p-6 rounded-xl">
                                <h3 className="text-xl font-bold mb-3 text-primary">Project Delivery System</h3>
                                <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                                    <li><strong className="text-foreground">Workspace model:</strong> Firebase auth, team scope, Firestore job records, and Cloud Storage outputs keep work organized and access-controlled.</li>
                                    <li><strong className="text-foreground">Project continuity:</strong> Projects support anchor views, additional views, render history, revisions, masked edits, downloads, and shareable delivery links.</li>
                                    <li><strong className="text-foreground">Commercial rails:</strong> Stripe-backed subscriptions, usage checks, notifications, admin routes, and support-friendly request IDs.</li>
                                </ul>
                            </div>

                            <div className="bg-card glass border border-white/5 p-6 rounded-xl">
                                <h3 className="text-xl font-bold mb-3 text-primary">Beyond Still Images</h3>
                                <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                                    <li><strong className="text-foreground">Construction sequences:</strong> Anchor and phase-image workflows compile staged construction progressions into MP4 outputs.</li>
                                    <li><strong className="text-foreground">Flythrough studio:</strong> Timeline-driven video assembly normalizes clips, overlays assets, and exports project-ready video.</li>
                                    <li><strong className="text-foreground">Deliverables:</strong> Scope sheets, general notes, legend blocks, equipment cards, BOM previews, and branded material generation extend the platform into sales collateral.</li>
                                </ul>
                            </div>

                            <div className="bg-card glass border border-white/5 p-6 rounded-xl">
                                <h3 className="text-xl font-bold mb-3 text-primary">Native Workflow Reach</h3>
                                <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                                    <li><strong className="text-foreground">Desktop studio:</strong> A Windows companion app connects Navisworks runtime context, project selection, shot metadata, and uploadable studio bundles.</li>
                                    <li><strong className="text-foreground">CAD plugins:</strong> Navisworks and AutoCAD integrations capture the working viewport and send render intent directly from the tools teams already use.</li>
                                    <li><strong className="text-foreground">Operator assistant:</strong> The in-app assistant can understand active routes and help move users through the product surface.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* ARCHITECTURE & RESULTS */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h2 className="text-2xl font-bold border-b border-white/10 pb-2 mb-4">Architecture</h2>
                            <ul className="space-y-3 text-sm text-foreground bg-background border border-white/5 p-6 rounded-xl">
                                <li className="flex gap-2 items-center"><span className="text-primary shrink-0">&rarr;</span> React, TypeScript, Vite, Tailwind, Zustand, and Firebase Auth on the frontend</li>
                                <li className="flex gap-2 items-center"><span className="text-primary shrink-0">&rarr;</span> FastAPI on Cloud Run with thin routers and service-layer render, billing, project, storage, and delivery logic</li>
                                <li className="flex gap-2 items-center"><span className="text-primary shrink-0">&rarr;</span> Firestore for users, teams, jobs, submissions, notifications, projects, and feature records</li>
                                <li className="flex gap-2 items-center"><span className="text-primary shrink-0">&rarr;</span> Google Cloud Storage for uploads, generated outputs, signed URLs, bundles, and downloadable assets</li>
                                <li className="flex gap-2 items-center"><span className="text-primary shrink-0">&rarr;</span> Gemini image generation, image editing, environment inference, and structured prompt conditioning</li>
                            </ul>
                        </div>
                        <div className="bg-primary/5 p-6 rounded-xl border border-primary/20 flex flex-col justify-center">
                            <h2 className="text-2xl font-bold mb-6 text-foreground text-center">What It Delivered</h2>
                            <ul className="space-y-6 text-center text-foreground font-medium">
                                <li>
                                    <span className="text-primary text-2xl font-black block">From Screenshot To Asset</span>
                                    Render outputs, revisions, masked edits, downloads, and share links in one flow
                                </li>
                                <li>
                                    <span className="text-primary text-2xl font-black block">Project-Native Visual History</span>
                                    Multiple views, anchor consistency, construction sequencing, and video assembly
                                </li>
                                <li>
                                    <span className="text-primary text-2xl font-black block">Production Rails</span>
                                    Auth, teams, billing, storage, notifications, test coverage, and deployment runbooks
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-24 pt-12 border-t border-white/5 text-center">
                    <h2 className="text-3xl font-bold mb-6">Need technical visuals turned into a real workflow?</h2>
                    <Button asChild size="lg" className="h-14 px-8 text-lg">
                        <Link to="/contact?inquiry=Case%20Study%3A%20Industrial%20Visual%20Delivery">Request the visual delivery platform case study</Link>
                    </Button>
                </div>
            </section>
        </div>
    )
}
