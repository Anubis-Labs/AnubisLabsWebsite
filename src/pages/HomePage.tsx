import { motion } from "framer-motion"
import { ArrowRight, Zap, CheckCircle2, Lock, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Link } from "react-router-dom"
import { solutions, caseStudies } from "@/content/site"

export function HomePage() {
    return (
        <div className="w-full relative">
            {/* HERO SECTION */}
            <section id="top" className="relative min-h-[85vh] flex items-center justify-center p-4 pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-white/5 overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px] pointer-events-none z-10" />

                {/* Right Background Image */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 z-0 flex justify-end pointer-events-none"
                >
                    <div className="relative w-full lg:w-[65%] h-full opacity-40 lg:opacity-100">
                        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent z-10" />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background z-10" />
                        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-transparent z-10" />
                        <img
                            src="/anubus-hero.jpg"
                            className="w-full h-full object-cover object-[center_right]"
                            style={{ mixBlendMode: 'screen' }}
                            alt="Hero background"
                        />
                    </div>
                </motion.div>

                <div className="container mx-auto flex flex-col lg:flex-row gap-12 items-center relative z-20">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full lg:max-w-[55%] space-y-10 relative z-10 py-10"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="inline-block"
                        >
                            <Badge variant="secondary" className="px-4 py-1.5 bg-primary/10 text-primary border-primary/20 backdrop-blur-md text-sm font-medium tracking-wide shadow-[0_0_15px_rgba(234,179,8,0.2)]">
                                <Shield className="w-4 h-4 mr-2 inline-block" /> Built for auditability, governance, and real delivery
                            </Badge>
                        </motion.div>

                        <h1 className="text-6xl lg:text-8xl font-black tracking-tighter leading-[1.1]">
                            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/70">
                                Secure AI
                            </span>
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/40 drop-shadow-lg">
                                systems that ship.
                            </span>
                        </h1>

                        <p className="text-2xl text-muted-foreground/90 max-w-2xl leading-relaxed font-medium">
                            Anubis Labs builds governed RAG, knowledge graphs, and agent runtimes with policy gates, approvals, and <span className="text-foreground">forensic traceability</span>. No hype. Just systems your org can trust.
                        </p>

                        <div className="flex flex-wrap items-center gap-6 pt-4">
                            <Button asChild size="lg" className="rounded-full shadow-[0_0_30px_rgba(234,179,8,0.3)] hover:shadow-[0_0_40px_rgba(234,179,8,0.5)] transition-all duration-300 font-bold text-lg py-7 px-10 h-auto group relative overflow-hidden">
                                <Link to="?contact=true">
                                    <span className="relative z-10 flex items-center">
                                        Talk to us <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-yellow-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="rounded-full border-white/20 hover:bg-white/5 font-semibold text-lg py-7 px-10 h-auto backdrop-blur-sm transition-all duration-300 hover:border-white/40 group">
                                <Link to="/security">
                                    See Security
                                    <Shield className="ml-2 w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
                                </Link>
                            </Button>
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* OUTCOMES STRIP */}
            <section className="py-12 border-y border-white/5 bg-white/[0.02]">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center text-center space-y-4">
                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <Zap className="h-6 w-6" />
                            </div>
                            <h3 className="font-semibold">Minutes → seconds on standards lookup</h3>
                        </div>
                        <div className="flex flex-col items-center text-center space-y-4">
                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <CheckCircle2 className="h-6 w-6" />
                            </div>
                            <h3 className="font-semibold">Audit-ready traces for every answer and action</h3>
                        </div>
                        <div className="flex flex-col items-center text-center space-y-4">
                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <Lock className="h-6 w-6" />
                            </div>
                            <h3 className="font-semibold">Deployable in VPC or fully offline</h3>
                        </div>
                    </div>
                </div>
            </section >

            {/* SOLUTIONS PREVIEW */}
            < section className="py-24 relative overflow-hidden" >
                <div className="container mx-auto px-4 relative z-10">
                    <div className="mb-16 max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Core Solutions</h2>
                        <p className="text-lg text-muted-foreground">Purpose-built platforms for regulated data and automated workflows.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {solutions.map((sol) => {
                            const Icon = sol.icon
                            return (
                                <Card key={sol.title} className="glass hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(234,179,8,0.08)] transition-all duration-300 group">
                                    <CardHeader>
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 border border-transparent group-hover:border-primary/30">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <CardTitle className="text-xl">{sol.title}</CardTitle>
                                        <CardDescription>{sol.tagline}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-foreground mb-4"><strong>For:</strong> {sol.whoItIsFor}</p>
                                        <Button asChild variant="link" className="px-0">
                                            <Link to={sol.href}>View solution <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </section >

            {/* HOW WE WORK (SHORT) */}
            < section className="py-24 bg-white/[0.02]" >
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">How We Work</h2>
                        <p className="text-muted-foreground max-w-xl mx-auto">A proven delivery playbook minimizing hallucination risk.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="bg-card glass p-6 rounded-xl border border-white/5 text-center">
                            <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4 font-bold">1</div>
                            <h3 className="font-semibold mb-2">Pilot Scope</h3>
                            <p className="text-sm text-muted-foreground">Rapidly iterate an architecture mapping to your precise pain points.</p>
                        </div>
                        <div className="bg-card glass p-6 rounded-xl border border-white/5 text-center">
                            <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4 font-bold">2</div>
                            <h3 className="font-semibold mb-2">Build + Harden</h3>
                            <p className="text-sm text-muted-foreground">Implement production-grade rails with strict security compliance.</p>
                        </div>
                        <div className="bg-card glass p-6 rounded-xl border border-white/5 text-center">
                            <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4 font-bold">3</div>
                            <h3 className="font-semibold mb-2">Rollout + Operate</h3>
                            <p className="text-sm text-muted-foreground">Deploy to VPC/Cloud and equip your team with forensic traces.</p>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <Button asChild>
                            <Link to="/process">View full delivery process</Link>
                        </Button>
                    </div>
                </div>
            </section >

            {/* PROOF PREVIEW (CASE STUDIES) */}
            < section className="py-24" >
                <div className="container mx-auto px-4">
                    <div className="mb-16 flex flex-col md:flex-row items-end justify-between gap-6">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl md:text-5xl font-bold mb-4">Proof of Execution</h2>
                            <p className="text-lg text-muted-foreground">We partner with enterprise teams to automate their highest-stakes workflows.</p>
                        </div>
                        <Button asChild variant="outline">
                            <Link to="/case-studies">View all case studies</Link>
                        </Button>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {caseStudies.map((study) => (
                            <Card key={study.title} className="glass border-white/10 group cursor-pointer" onClick={() => window.location.href = study.href}>
                                <CardHeader>
                                    <div className="flex gap-2 mb-4">
                                        {study.tags.map(tag => (
                                            <Badge key={tag} variant="secondary" className="bg-white/5">{tag}</Badge>
                                        ))}
                                    </div>
                                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{study.title}</CardTitle>
                                    <CardDescription className="font-medium text-foreground">{study.outcome}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{study.details}</p>
                                    <ul className="space-y-3">
                                        {study.bullets?.map((bullet, idx) => (
                                            <li key={idx} className="flex gap-3 text-sm text-muted-foreground items-start">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div>
                                                <span className="leading-snug line-clamp-2">{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section >

            {/* CONTACT PREVIEW */}
            < section className="py-24 bg-white/[0.02] border-t border-white/5 text-center" >
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-6">Start Delivering.</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">We limit our client intake to maintain obsessive engineering quality. Reach out to start a conversation.</p>
                    <div className="flex gap-4 justify-center">
                        <Button asChild size="lg" className="h-14 px-8 text-lg">
                            <Link to="?contact=true">Get in Touch</Link>
                        </Button>
                    </div>
                </div>
            </section >

        </div >
    )
}
