import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useSpring } from "framer-motion"

const phases = [
    {
        id: "discovery",
        title: "Discovery & Metrics",
        shortTitle: "Discovery",
        description: "We map your operational bottlenecks to clear, testable AI opportunities. We define success criteria and establish how value will be measured at the end of the engagement.",
        number: "01",
    },
    {
        id: "governance",
        title: "Data Access & Governance",
        shortTitle: "Governance",
        description: "Before writing code, we map data ingestion pipes. We evaluate RBAC models, establish PII handling rules, and formally agree on the infrastructure constraints.",
        number: "02",
    },
    {
        id: "prototype",
        title: "Prototype & Evaluate",
        shortTitle: "Prototype",
        description: "Rapid build of the core workflow. We develop evaluation harnesses to test model behavior, evidence quality, and failure modes against your specific tasks.",
        number: "03",
    },
    {
        id: "harden",
        title: "Control Hardening",
        shortTitle: "Harden",
        description: "The prototype is wrapped in defensive architecture. Policy engines, rate limits, token budgets, and human-in-the-loop approval workflows are added where the workflow needs them.",
        number: "04",
    },
    {
        id: "deploy",
        title: "Deploy to Target",
        shortTitle: "Deploy",
        description: "We package the system for the target environment: managed cloud, client VPC, on-prem, or offline/local-first deployment where appropriate.",
        number: "05",
    },
    {
        id: "operate",
        title: "Operate & Audit",
        shortTitle: "Operate",
        description: "Day-2 operations. We verify trace logging, hand over incident and support runbooks, and monitor performance against the initial metrics.",
        number: "06",
    }
]

export function ProcessPage() {
    const [activePhase, setActivePhase] = useState("discovery")
    const containerRef = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    })

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntries = entries.filter((entry) => entry.isIntersecting)
                if (visibleEntries.length > 0) {
                    const bestMatch = visibleEntries.reduce((prev, current) => {
                        return (prev.intersectionRatio > current.intersectionRatio) ? prev : current
                    })
                    if (bestMatch.isIntersecting) {
                        setActivePhase(bestMatch.target.id)
                    }
                }
            },
            {
                rootMargin: "-25% 0px -25% 0px",
                threshold: [0, 0.25, 0.5, 0.75, 1]
            }
        )

        phases.forEach((phase) => {
            const el = document.getElementById(phase.id)
            if (el) observer.observe(el)
        })

        return () => observer.disconnect()
    }, [])

    return (
        <div className="w-full">
            <section className="container mx-auto px-4 pt-8 pb-24 lg:pt-16 lg:pb-32 relative overflow-hidden">
                {/* Background accents for hero */}
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl max-w-3xl mb-12 relative z-10"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm mb-6 font-medium text-muted-foreground">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        Our Methodology
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
                        Delivery <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">Playbook.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                        The path we use to turn governed AI ideas into secure production systems with clear evidence, controls, and handoff.
                    </p>
                </motion.div>
            </section>

            <section className="container mx-auto px-4 pb-32">
                <div className="grid md:grid-cols-[1fr_2fr] gap-16 max-w-6xl mx-auto items-start relative" ref={containerRef}>

                    {/* Left Sticky Sidebar */}
                    <div className="sticky top-32 hidden md:block w-full">
                        <div className="relative pl-8 py-2">
                            {/* Static line */}
                            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-white/5 rounded-full" />

                            {/* Animated line */}
                            <motion.div
                                className="absolute left-0 top-0 w-[2px] bg-primary origin-top rounded-full shadow-[0_0_10px_rgba(255,215,0,0.5)]"
                                style={{ scaleY, height: "100%" }}
                            />

                            <ul className="space-y-8 font-medium relative">
                                {phases.map((phase) => {
                                    const isActive = activePhase === phase.id
                                    return (
                                        <li
                                            key={phase.id}
                                            className={`transition-all duration-500 ease-out relative cursor-default ${isActive ? "text-white scale-105 translate-x-2" : "text-muted-foreground/50 hover:text-muted-foreground"}`}
                                        >
                                            <div className={`absolute -left-[37px] top-1/2 -translate-y-1/2 w-[10px] h-[10px] rounded-full transition-all duration-500 ${isActive ? "bg-primary shadow-[0_0_15px_rgba(255,215,0,0.8)] scale-125" : "bg-[#111] border border-white/20"}`} />
                                            <span className={`text-xs mr-3 font-mono opacity-50`}>{phase.number}.</span>
                                            <span className={isActive ? "font-bold tracking-wide" : ""}>{phase.shortTitle}</span>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="space-y-40 md:space-y-48 pb-[30vh]">
                        {phases.map((phase, idx) => {
                            const isActive = activePhase === phase.id
                            return (
                                <motion.div
                                    key={phase.id}
                                    id={phase.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ margin: "-20% 0px -20% 0px", once: true }}
                                    transition={{ duration: 0.7, ease: "easeOut" }}
                                    className={`relative group transition-opacity duration-700 ${isActive ? "opacity-100" : "opacity-40"}`}
                                >
                                    {/* Mobile connector line & dot */}
                                    {idx < phases.length - 1 && (
                                        <div className="md:hidden absolute left-[15px] top-8 bottom-[-160px] w-px bg-white/10" />
                                    )}
                                    <div className="md:hidden absolute w-3 h-3 rounded-full left-[10px] top-2 transition-colors duration-500 bg-primary shadow-[0_0_10px_rgba(255,215,0,0.5)] z-10" />

                                    <div className="pl-12 md:pl-0">
                                        <div className="mb-4 inline-flex items-center gap-3">
                                            <span className={`text-sm font-bold tracking-widest uppercase transition-colors duration-500 ${isActive ? "text-primary" : "text-muted-foreground"}`}>
                                                Phase {phase.number}
                                            </span>
                                        </div>

                                        <h3 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white/90">
                                            {phase.title}
                                        </h3>

                                        <div className="glass p-8 md:p-10 rounded-2xl border border-white/5 relative overflow-hidden group-hover:border-white/10 transition-colors duration-500 shadow-xl bg-card/40 backdrop-blur-md">
                                            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent pointer-events-none" />
                                            {isActive && <div className="absolute -inset-1 bg-primary/5 blur-2xl rounded-3xl opacity-50 pointer-events-none" />}
                                            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed relative z-10">
                                                {phase.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section className="bg-black/40 border-y border-white/5 py-32 mb-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto"
                    >
                        <div className="glass p-10 rounded-2xl border border-white/5 hover:border-white/10 transition-colors bg-card/60">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                                What we need from you
                            </h3>
                            <ul className="space-y-4 text-muted-foreground">
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" />
                                    <span>Subject matter experts for workflow validation</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" />
                                    <span>Clear direction on RBAC and data boundaries</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" />
                                    <span>A champion internal to the affected team</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" />
                                    <span>Compute environment availability</span>
                                </li>
                            </ul>
                        </div>
                        <div className="glass p-10 rounded-2xl border border-white/5 hover:border-white/10 transition-colors bg-card/60">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <span className="w-1.5 h-6 bg-secondary rounded-full"></span>
                                Typical Timelines
                            </h3>
                            <ul className="space-y-6 text-muted-foreground">
                                <li className="flex justify-between items-center border-b border-white/5 pb-4">
                                    <span className="text-lg">Pilot Engagement</span>
                                    <span className="text-white font-medium bg-white/5 px-3 py-1 rounded-full text-sm">1-2 Weeks</span>
                                </li>
                                <li className="flex justify-between items-center border-b border-white/5 pb-4">
                                    <span className="text-lg">Production Build</span>
                                    <span className="text-white font-medium bg-white/5 px-3 py-1 rounded-full text-sm">4-8 Weeks</span>
                                </li>
                                <li className="flex justify-between items-center">
                                    <span className="text-lg">Architecture Review</span>
                                    <span className="text-white font-medium bg-white/5 px-3 py-1 rounded-full text-sm">1 Week</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-32 text-center relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="container mx-auto px-4 max-w-2xl relative z-10"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to execute?</h2>
                    <p className="text-xl text-muted-foreground mb-10">Schedule a discovery call to audit your workflow viability.</p>
                    <Button asChild size="lg" className="h-14 px-10 text-lg rounded-full">
                        <Link to="/contact">Start a Pilot</Link>
                    </Button>
                </motion.div>
            </section>
        </div>
    )
}
