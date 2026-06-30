import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.7, ease: "easeOut" as const }
}

const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
}

const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
}

export function EPCMCastStudyPage() {
    return (
        <div className="w-full relative overflow-hidden min-h-screen">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute top-[40%] left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

            <section className="container mx-auto px-4 pt-8 pb-24 lg:pt-16 lg:pb-32 max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <Link to="/case-studies" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Case Studies
                    </Link>
                </motion.div>

                <motion.div initial="hidden" animate="show" variants={staggerContainer} className="mb-20">
                    <motion.div variants={staggerItem} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm mb-6 font-medium text-muted-foreground">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        Engineering & Construction
                    </motion.div>
                    <motion.h1 variants={staggerItem} className="text-5xl md:text-7xl font-bold mb-8 text-foreground tracking-tight leading-[1.1]">
                        EPCM Standards <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">Assistant.</span>
                    </motion.h1>
                    <motion.div variants={staggerItem} className="glass p-6 md:p-8 rounded-2xl border border-white/10 bg-card/40 backdrop-blur-md inline-block max-w-3xl border-l-[4px] border-l-primary shadow-xl">
                        <p className="text-2xl text-white/90 font-medium">Outcome: <span className="text-primary">Minutes &rarr; seconds</span> on standards lookup</p>
                    </motion.div>
                </motion.div>

                <div className="space-y-24">
                    {/* SUMMARY & CLIENT PROFILE */}
                    <div className="grid md:grid-cols-[1fr_400px] gap-12 items-start">
                        <motion.div {...fadeUp}>
                            <h2 className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-4">Summary</h2>
                            <p className="text-xl text-white/80 leading-relaxed font-light">
                                A large EPCM environment needed standards answers that engineers could trust, cite, and defend. "Search" was not enough. They needed a governed knowledge platform that fits how EPCM teams actually work: RBAC, provenance, reusable corpuses, and workflows tied to execution and delivery.
                            </p>
                        </motion.div>
                        <motion.div {...fadeUp} className="glass p-8 rounded-3xl border border-white/10 bg-card/60 shadow-xl relative overflow-hidden group hover:border-white/20 transition-all duration-500 hover:-translate-y-1">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[40px] pointer-events-none group-hover:bg-primary/20 transition-colors" />
                            <h2 className="text-lg font-bold mb-6 flex items-center gap-3">
                                <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                                Client Profile
                            </h2>
                            <ul className="space-y-4 text-muted-foreground">
                                <li className="flex gap-3 items-start"><div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 shrink-0 group-hover:bg-primary transition-colors"></div> Large EPCM organization</li>
                                <li className="flex gap-3 items-start"><div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 shrink-0 group-hover:bg-primary transition-colors"></div> Thousands of internal and external standards</li>
                                <li className="flex gap-3 items-start"><div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 shrink-0 group-hover:bg-primary transition-colors"></div> Multiple departments with rigid boundaries</li>
                                <li className="flex gap-3 items-start"><div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 shrink-0 group-hover:bg-primary transition-colors"></div> Strict requirements for defensible outputs</li>
                            </ul>
                        </motion.div>
                    </div>

                    {/* THE PROBLEM & CONSTRAINTS */}
                    <motion.div {...fadeUp} className="relative">
                        <div className="absolute -left-8 top-0 bottom-0 w-px bg-white/10 hidden md:block" />
                        <h2 className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-6 md:pl-0">The Problem</h2>
                        <p className="text-muted-foreground leading-relaxed text-xl mb-12 max-w-3xl font-light">
                            Engineers were losing time hunting for clauses, cross-referencing standards, and answering the same questions repeatedly. Existing document stores were fragmented and not permission-aware at answer time. <strong className="text-white font-medium">The organization also had a governance issue: AI outputs without citations or traceability were unusable for real engineering decisions.</strong>
                        </p>

                        <h2 className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-6 md:pl-0">Design Constraints</h2>
                        <ul className="grid sm:grid-cols-2 gap-4 text-muted-foreground max-w-4xl">
                            <li className="glass p-6 rounded-2xl border border-white/5 bg-background/50 flex gap-4">
                                <div className="text-primary font-mono text-xs mt-1">01</div>
                                <span>RBAC enforced at retrieval time, not after the fact</span>
                            </li>
                            <li className="glass p-6 rounded-2xl border border-white/5 bg-background/50 flex gap-4">
                                <div className="text-primary font-mono text-xs mt-1">02</div>
                                <span>Defensible answers with citations back to source text</span>
                            </li>
                            <li className="glass p-6 rounded-2xl border border-white/5 bg-background/50 flex gap-4">
                                <div className="text-primary font-mono text-xs mt-1">03</div>
                                <span>Support both "quick answer" and "show me the context"</span>
                            </li>
                            <li className="glass p-6 rounded-2xl border border-white/5 bg-background/50 flex gap-4">
                                <div className="text-primary font-mono text-xs mt-1">04</div>
                                <span>Adoption required a workflow-ready UI, not just a demo</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* SOLUTION Grid */}
                    <motion.div {...fadeUp}>
                        <h2 className="text-3xl font-bold mb-6 text-foreground tracking-tight">The Solution</h2>
                        <p className="text-muted-foreground leading-relaxed text-xl mb-12 max-w-3xl font-light">
                            We deployed our enterprise knowledge platform built specifically around governed retrieval, provenance, knowledge graph enrichment, and end-to-end RBAC enforcement.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                {
                                    title: "Knowledge & Retrieval",
                                    icon: "🔍",
                                    items: [
                                        "Hybrid retrieval combining semantic search with structured signals",
                                        "Source-grounded answers with full citation chains",
                                        "Chunking strategy natively designed for standards (section-aware, headings, tables)"
                                    ]
                                },
                                {
                                    title: "Knowledge Graph Layer",
                                    icon: "🕸️",
                                    items: [
                                        "Entity extraction and normalization (organizations, specs, equipment classes)",
                                        "Relationship mapping for navigable context (standard → section → clause)",
                                        "Provenance preserved so graph links trace back to document source"
                                    ]
                                },
                                {
                                    title: "Governance & Identity",
                                    icon: "🛡️",
                                    items: [
                                        "Azure AD RBAC integration matching enterprise identity",
                                        "Retrieval natively filtered by permissions, not merely UI masking",
                                        "Audit-ready traces for queries and outputs (asked, retrieved, answered)"
                                    ]
                                },
                                {
                                    title: "Operational Modules",
                                    icon: "⚙️",
                                    items: [
                                        "Standards assistant as one module within a broader execution platform",
                                        "Modules for adjacent workflows like RFP knowledge reuse",
                                        "Central knowledge spine shared across silos"
                                    ]
                                }
                            ].map((card, idx) => (
                                <motion.div
                                    key={card.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                                    className="glass p-8 rounded-3xl border border-white/5 bg-card/30 hover:bg-card/50 transition-colors group"
                                >
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-full glass bg-white/5 flex items-center justify-center text-xl shadow-inner border border-white/10 group-hover:scale-110 transition-transform duration-500">
                                            {card.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-white/90">{card.title}</h3>
                                    </div>
                                    <ul className="space-y-4 text-muted-foreground text-sm">
                                        {card.items.map((item, i) => (
                                            <li key={i} className="flex gap-3 leading-relaxed text-white/60">
                                                <span className="text-primary/60">&rarr;</span> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* ARCHITECTURE & RESULTS */}
                    <motion.div {...fadeUp} className="bg-black/40 rounded-[40px] border border-white/5 p-8 md:p-16 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                        <div className="grid md:grid-cols-2 gap-16 relative z-10">
                            <div>
                                <h2 className="text-xl font-bold tracking-widest uppercase text-muted-foreground mb-8">Architecture Breakdown</h2>
                                <ul className="space-y-6 text-sm text-white/70">
                                    <li className="flex items-center justify-between border-b border-white/5 pb-4">
                                        <strong className="text-white">Frontend</strong>
                                        <span className="bg-white/5 px-3 py-1 rounded-full text-xs font-mono">React/Vite (Modular)</span>
                                    </li>
                                    <li className="flex items-center justify-between border-b border-white/5 pb-4">
                                        <strong className="text-white">Backend</strong>
                                        <span className="bg-white/5 px-3 py-1 rounded-full text-xs font-mono">FastAPI + Postgres</span>
                                    </li>
                                    <li className="flex items-center justify-between border-b border-white/5 pb-4">
                                        <strong className="text-white">Retrieval</strong>
                                        <span className="bg-white/5 px-3 py-1 rounded-full text-xs font-mono">Hybrid Vector + Lexical</span>
                                    </li>
                                    <li className="flex items-center justify-between border-b border-white/5 pb-4">
                                        <strong className="text-white">Graph</strong>
                                        <span className="bg-white/5 px-3 py-1 rounded-full text-xs font-mono">Knowledge Graph DB</span>
                                    </li>
                                    <li className="flex items-center justify-between">
                                        <strong className="text-white">Identity</strong>
                                        <span className="bg-white/5 px-3 py-1 rounded-full text-xs font-mono mt-1 text-primary">Azure AD RBAC</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="relative">
                                <div className="absolute -inset-8 bg-primary/10 rounded-full blur-[60px] pointer-events-none" />
                                <div className="glass p-8 md:p-10 rounded-3xl border border-primary/20 bg-primary/5 shadow-2xl relative h-full flex flex-col justify-center">
                                    <h2 className="text-2xl font-bold mb-8 text-white">Impact</h2>
                                    <div className="space-y-8">
                                        <div>
                                            <span className="text-primary text-4xl font-black block mb-2 tracking-tight">Minutes &rarr; Seconds</span>
                                            <span className="text-white/80 font-medium">Standards lookup time</span>
                                        </div>
                                        <div className="border-t border-primary/10 pt-8">
                                            <span className="text-primary text-4xl font-black block mb-2 tracking-tight">45% Reduction</span>
                                            <span className="text-white/80 font-medium">In repeat questions to SMEs</span>
                                        </div>
                                    </div>
                                    <p className="mt-8 text-sm text-primary/60 font-medium leading-relaxed">
                                        Improved confidence and adoption because answers always show citations. Faster onboarding for new engineers via self-serve Q&A.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div {...fadeUp} className="mt-32 pt-16 border-t border-white/5 text-center relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Want to see the architecture breakdown?</h2>
                    <p className="text-muted-foreground text-xl mb-10 font-light">Get the full whitepaper on how we built this module.</p>
                    <Button asChild size="lg" className="h-16 px-10 text-lg rounded-full">
                        <Link to="/contact?inquiry=Case%20Study%3A%20EPCM%20Assistant">Request Case Study Demo</Link>
                    </Button>
                </motion.div>
            </section>
        </div>
    )
}
