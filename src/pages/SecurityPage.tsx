import { Link } from "react-router-dom"
import { Shield, Lock, FileText, CheckCircle2, ShieldCheck, Fingerprint, Eye, Server, Layers, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"
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
        transition: { staggerChildren: 0.1 }
    }
}

const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
}

const securityPillars = [
    {
        title: "Data Handling",
        icon: <ShieldCheck className="w-8 h-8 text-primary" />,
        content: "We do not use customer data to train generalized models. All data processed through our infrastructure remains entirely within your control. We support stringent retention policies, automated PII redaction heuristics, and tokenization at the edge prior to model invocation."
    },
    {
        title: "Identity & Access",
        icon: <Fingerprint className="w-8 h-8 text-secondary" />,
        content: "Full integration with your existing Identity Providers (SSO/SAML/OIDC). We enforce granular Role-Based Access Control (RBAC) across all systems, ensuring retrieval and execution workflows abide by the principle of least privilege natively."
    },
    {
        title: "Auditability",
        icon: <Eye className="w-8 h-8 text-primary" />,
        content: "Every prompt, piece of retrieved context, generated token, and tool invocation is logged to an immutable forensic stream. Organizations have complete traceability into exactly why a decision was made or an action was automated."
    },
    {
        title: "Execution Controls",
        icon: <Server className="w-8 h-8 text-secondary" />,
        content: "Our agentic systems run behind hard policy gates. Budgets and rate limits prevent runaway execution scenarios, while human-in-the-loop approval workflows restrict high-risk operations natively."
    },
    {
        title: "Sandboxing & Egress",
        icon: <Layers className="w-8 h-8 text-primary" />,
        content: "Runtime environments are heavily sandboxed with restricted egress. We enforce tight network controls, interacting only with pre-allowlisted endpoints to drastically reduce the potential blast radius."
    },
    {
        title: "Deployment Models",
        icon: <Cpu className="w-8 h-8 text-secondary" />,
        content: "We deploy where you demand. Utilize our managed, single-tenant cloud infrastructure, deploy directly into your VPC, or run completely air-gapped utilizing performant local-first LLMs."
    }
]

export function SecurityPage() {
    return (
        <div className="w-full relative overflow-hidden min-h-screen">
            {/* Background Effects */}
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute top-[30%] left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

            {/* HERO */}
            <section className="container mx-auto px-4 pt-8 pb-24 lg:pt-16 lg:pb-32 relative z-10">
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={staggerContainer}
                    className="max-w-4xl relative z-10"
                >
                    <motion.div variants={staggerItem} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm mb-6 font-medium text-white/80">
                        <Lock className="w-4 h-4 text-primary" /> Enterprise Grade
                    </motion.div>

                    <motion.h1 variants={staggerItem} className="text-5xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
                        AI treated as <br className="hidden md:block" />
                        <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">critical infrastructure.</span>
                    </motion.h1>

                    <motion.p variants={staggerItem} className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-2xl font-light">
                        Our systems are built on a <strong className="text-white font-medium">deny-by-default posture</strong>. We prioritize controls, auditability, and isolated execution over unconstrained capability expansion.
                    </motion.p>

                    <motion.div variants={staggerItem} className="flex flex-wrap gap-4">
                        <Button asChild size="lg" className="h-14 px-8 text-md rounded-full shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] transition-shadow">
                            <Link to="?contact=true">Book Security Review</Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="h-14 px-8 text-md rounded-full border-white/10 hover:border-white/20 hover:bg-white/5 transition-all">
                            <a href="/security-baseline.pdf" download>
                                <FileText className="w-5 h-5 mr-2" /> Download Baseline
                            </a>
                        </Button>
                    </motion.div>
                </motion.div>
            </section>

            {/* SECTIONS GRID */}
            <section className="container mx-auto px-4 pb-32 relative z-10">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {securityPillars.map((pillar, idx) => (
                        <motion.div
                            key={idx}
                            variants={staggerItem}
                            className="glass p-8 rounded-3xl border border-white/10 bg-card/40 backdrop-blur-md relative overflow-hidden group hover:border-white/20 transition-all duration-500 hover:-translate-y-1 shadow-lg"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[40px] pointer-events-none group-hover:bg-primary/20 transition-colors duration-700" />

                            <div className="mb-6 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500">
                                {pillar.icon}
                            </div>

                            <h3 className="text-2xl font-bold mb-4 text-white/90 group-hover:text-primary transition-colors duration-300">
                                {pillar.title}
                            </h3>

                            <p className="text-muted-foreground leading-relaxed text-sm">
                                {pillar.content}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* SECURITY CHECKLIST */}
            <section className="py-32 relative border-y border-white/5 bg-black/40 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div {...fadeUp} className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center justify-center p-4 rounded-full bg-primary/10 mb-6 border border-primary/20 shadow-[0_0_30px_rgba(255,215,0,0.15)]">
                                <Shield className="w-12 h-12 text-primary" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Security & Governance Baseline</h2>
                            <p className="text-xl text-muted-foreground font-light">Standard controls baked into every deployment by default.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                "PII scrubbing & tokenization",
                                "Granular RBAC enforcement",
                                "Rate limiting & cost budgets",
                                "Prompt injection heuristics",
                                "Immutable forensic logs",
                                "Human-in-the-loop approval gates",
                                "Restricted egress environments",
                                "Secrets rotation and hygiene",
                                "SOC-2 incident response baselines"
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05, duration: 0.4 }}
                                    className="flex items-center gap-4 p-5 rounded-2xl bg-card/60 border border-white/5 glass hover:border-primary/30 transition-colors group shadow-md"
                                >
                                    <CheckCircle2 className="w-6 h-6 text-primary/70 shrink-0 group-hover:text-primary transition-colors" />
                                    <span className="font-medium text-sm text-white/80 group-hover:text-white transition-colors">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 text-center relative">
                <motion.div {...fadeUp} className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Procurement shouldn't block innovation.</h2>
                    <p className="text-xl text-muted-foreground mb-10 font-light leading-relaxed">We are experienced in answering strict InfoSec questionnaires and architecting systems that adhere to rigorous compliance frameworks.</p>
                    <Button asChild size="lg" className="h-16 px-10 text-lg rounded-full shadow-[0_0_20px_rgba(255,215,0,0.2)] hover:shadow-[0_0_40px_rgba(255,215,0,0.4)] transition-shadow">
                        <Link to="?contact=true">Book a Review Call</Link>
                    </Button>
                </motion.div>
            </section>
        </div>
    )
}
