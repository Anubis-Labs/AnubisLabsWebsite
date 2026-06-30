import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { caseStudies } from "@/content/site"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"

const filters = {
    Industry: ["EPCM", "Gov", "Regulated"],
    Deployment: ["VPC", "Offline", "Cloud"],
    Capability: ["RAG", "Compliance", "Agent"]
}

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
}

export function CaseStudiesPage() {
    const [activeFilter, setActiveFilter] = useState<string | null>(null)
    const navigate = useNavigate()

    const handleRequestDetails = (e: React.MouseEvent, title: string) => {
        e.stopPropagation()
        navigate(`/contact?inquiry=${encodeURIComponent(title)}`)
    }

    return (
        <div className="w-full">
            <section className="container mx-auto px-4 py-32 relative min-h-screen">
                <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mb-16 relative z-10"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm mb-6 font-medium text-muted-foreground">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        Proven Results
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
                        Proof of <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">Execution.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                        Learn how we deliver robust, governed AI workflows for highly regulated clients.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="flex flex-wrap gap-8 mb-16 p-8 glass rounded-3xl border border-white/5 bg-card/40 backdrop-blur-md relative z-10"
                >
                    {Object.entries(filters).map(([category, items]) => (
                        <div key={category} className="space-y-3">
                            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground/80">{category}</span>
                            <div className="flex flex-wrap gap-2">
                                {items.map(item => {
                                    const isActive = activeFilter === item;
                                    return (
                                        <Badge
                                            key={item}
                                            variant={isActive ? "default" : "secondary"}
                                            className={`cursor-pointer transition-all duration-300 border ${isActive ? "bg-primary hover:bg-primary/90 text-primary-foreground border-primary shadow-[0_0_15px_rgba(255,215,0,0.5)] scale-105" : "bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-white border-white/10"}`}
                                            onClick={() => setActiveFilter(isActive ? null : item)}
                                        >
                                            {item}
                                        </Badge>
                                    )
                                })}
                            </div>
                        </div>
                    ))}
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
                >
                    <AnimatePresence mode="popLayout">
                        {caseStudies
                            .filter(study => !activeFilter || study.tags.includes(activeFilter))
                            .map((study) => (
                                <motion.div
                                    key={study.title}
                                    variants={itemVariants}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                                    className="group relative flex flex-col h-full cursor-pointer rounded-3xl"
                                    onClick={() => navigate(study.href)}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

                                    <div className="glass flex flex-col h-full p-8 rounded-3xl border border-white/10 group-hover:border-primary/50 transition-all duration-500 bg-card/60 relative overflow-hidden group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)] hover:-translate-y-2">
                                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {study.tags.map(tag => (
                                                <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary border-none">{tag}</Badge>
                                            ))}
                                        </div>

                                        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                                            {study.title}
                                        </h3>

                                        <p className="font-semibold text-white/90 mb-4 text-lg line-clamp-2">
                                            {study.outcome}
                                        </p>

                                        <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow">
                                            {study.details}
                                        </p>

                                        {study.bullets && (
                                            <ul className="space-y-4 mb-8">
                                                {study.bullets.map((bullet, idx) => (
                                                    <li key={idx} className="flex gap-3 text-sm text-muted-foreground/80 items-start">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 shrink-0 group-hover:bg-primary transition-colors"></div>
                                                        <span className="leading-snug">{bullet}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        <div className="mt-auto pt-6 border-t border-white/5">
                                            <Button
                                                variant="outline"
                                                className="w-full justify-between border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group/btn bg-transparent"
                                                onClick={(e) => handleRequestDetails(e, `Case Study: ${study.title}`)}
                                            >
                                                Request Details
                                                <ArrowRight className="w-4 h-4 ml-2 opacity-50 text-primary group-hover/btn:opacity-100 group-hover/btn:translate-x-1 group-hover/btn:scale-110 transition-all" />
                                            </Button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                    </AnimatePresence>
                </motion.div>
            </section>
        </div>
    )
}
