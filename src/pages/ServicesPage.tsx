import { Link } from "react-router-dom"
import { FileText, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { services } from "@/content/site"
import { motion } from "framer-motion"

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
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 200, damping: 20 } }
}

export function ServicesPage() {
    return (
        <div className="w-full relative overflow-hidden min-h-screen">
            {/* Ambient Background Effects */}
            <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

            {/* HERO */}
            <section className="container mx-auto px-4 py-32 relative z-10">
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={staggerContainer}
                    className="max-w-4xl relative z-10 mb-20"
                >
                    <motion.div variants={staggerItem} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm mb-8 font-medium text-primary">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Deterministic Delivery
                    </motion.div>

                    <motion.h1 variants={staggerItem} className="text-6xl lg:text-8xl font-black tracking-tighter mb-8 leading-[1]">
                        Structured <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary/80 to-primary">Engagements.</span>
                    </motion.h1>

                    <motion.p variants={staggerItem} className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-2xl font-light">
                        Deploying production AI requires rigid methodology. We don't do endless consulting; we sell <strong className="text-white font-medium">high-velocity, deterministic delivery packages</strong> that end in audit-ready systems.
                    </motion.p>

                    <motion.div variants={staggerItem} className="flex flex-wrap gap-4">
                        <Button asChild size="lg" className="h-14 px-8 text-md rounded-full shadow-[0_0_20px_rgba(255,215,0,0.2)] hover:shadow-[0_0_40px_rgba(255,215,0,0.4)] transition-shadow">
                            <Link to="?contact=true">Discuss Engagement <ArrowRight className="w-4 h-4 ml-2" /></Link>
                        </Button>
                    </motion.div>
                </motion.div>

                {/* SERVICES GRID */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid lg:grid-cols-3 gap-8 relative z-10"
                >
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.title}
                                variants={staggerItem}
                                className="glass p-8 flex flex-col rounded-[2rem] border border-white/10 bg-card/40 backdrop-blur-md group hover:-translate-y-2 transition-all duration-500 hover:border-primary/40 shadow-xl relative overflow-hidden"
                            >
                                {/* Card Hover Glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-700 opacity-0 group-hover:opacity-100" />

                                <div className="relative z-10 flex-1 flex flex-col">
                                    <div className="flex items-center justify-between mb-8">
                                        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                                            <Icon className="w-8 h-8 text-primary/80 group-hover:text-primary transition-colors" />
                                        </div>
                                        <div className="text-6xl font-black text-white/[0.03] select-none group-hover:text-white/[0.08] transition-colors duration-500">
                                            0{index + 1}
                                        </div>
                                    </div>

                                    <h3 className="text-3xl font-bold mb-3 text-white/90 group-hover:text-white transition-colors">
                                        {service.title.split(' (')[0]}
                                    </h3>

                                    {service.title.includes('(') && (
                                        <div className="inline-block px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-muted-foreground mb-6 w-max border border-white/5">
                                            {service.title.match(/\((.*?)\)/)?.[1]}
                                        </div>
                                    )}

                                    <div className="w-full h-px bg-gradient-to-r from-white/10 to-transparent my-6" />

                                    <ul className="space-y-4 mb-8 flex-1">
                                        {service.details.map((detail, idx) => (
                                            <li key={idx} className="flex gap-4 text-muted-foreground items-start group-hover:text-white/80 transition-colors">
                                                <div className="mt-1">
                                                    <CheckCircle2 className="w-5 h-5 text-primary/50 group-hover:text-primary transition-colors duration-300" />
                                                </div>
                                                <span className="leading-relaxed">{detail}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="glass mt-auto p-4 rounded-xl border border-white/5 bg-black/20 flex flex-col gap-1 items-center justify-center text-center group-hover:border-primary/20 transition-colors">
                                        <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Deliverable</span>
                                        <span className="text-primary font-bold text-lg">{service.outcomes}</span>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </section>

            {/* DELIVERABLES SECTION */}
            <section className="py-32 relative border-y border-white/5 bg-black/40 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div {...fadeUp} className="max-w-4xl mx-auto text-center mb-20">
                        <div className="inline-flex items-center justify-center p-4 rounded-full bg-white/5 border border-white/10 mb-6 shadow-xl">
                            <FileText className="w-8 h-8 text-primary" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Standard Deliverables</h2>
                        <p className="text-muted-foreground text-xl font-light">Every production engagement concludes with formal documentation naturally sculpted for rigid InfoSec review and seamless operations handoff.</p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {[
                            { title: "Architecture Blueprint", desc: "System components, APIs, data flow" },
                            { title: "Security Baseline", desc: "Controls mapping & threat models" },
                            { title: "Evaluation Plan", desc: "Metrics, rubrics, & datasets" },
                            { title: "Rollout Plan", desc: "Phased deployment & change prep" },
                            { title: "Incident Runbook", desc: "Escalation procedures & fail-safes" },
                            { title: "Compliance Trace", desc: "Immutable logs of build decisions" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5, type: "spring", stiffness: 200 }}
                                className="glass p-6 rounded-2xl border border-white/5 bg-card/60 hover:bg-white-[0.03] transition-colors cursor-default group hover:border-white/20"
                            >
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <FileText className="w-5 h-5 text-primary" />
                                    </div>
                                    <h3 className="font-bold text-white/90 group-hover:text-white transition-colors">{item.title}</h3>
                                </div>
                                <p className="text-sm text-muted-foreground pl-14">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
                <motion.div {...fadeUp} className="container mx-auto px-4 max-w-3xl relative z-10">
                    <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tighter">Need a custom scope?</h2>
                    <p className="text-xl text-muted-foreground mb-12 font-light leading-relaxed">If your regulatory requirements demand specific delivery models, our engineering team is built to adapt without compromising rigor.</p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Button asChild size="lg" className="h-16 px-10 text-lg rounded-full shadow-[0_0_20px_rgba(255,215,0,0.2)] hover:shadow-[0_0_40px_rgba(255,215,0,0.4)] transition-all hover:-translate-y-1 w-full sm:w-auto">
                            <Link to="?contact=true">Discuss Engagement</Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="h-16 px-10 text-lg rounded-full border-white/10 hover:border-white/20 hover:bg-white/5 transition-all hover:-translate-y-1 w-full sm:w-auto">
                            <Link to="/process">View Delivery Process</Link>
                        </Button>
                    </div>
                </motion.div>
            </section>
        </div>
    )
}
