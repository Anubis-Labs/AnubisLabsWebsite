
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Link } from "react-router-dom"
import { solutions } from "@/content/site"

export function SolutionsPage() {
    return (
        <div className="w-full">
            <section className="container mx-auto px-4 py-24 relative overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6">
                            Built for regulated environments and real operations.
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            Deterministic controls. Hard policy enforcement. Immutable traces.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button asChild size="lg" className="h-12 px-8">
                                <Link to="?contact=true">Talk to us</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="h-12 px-8 glass interactive">
                                <Link to="?contact=true">Request architectural review</Link>
                            </Button>
                        </div>
                    </div>

                    <div className="relative hidden lg:block h-[500px] w-full">
                        <svg viewBox="0 0 800 800" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">

                            {/* Background Sacred Geometry */}
                            <g className="origin-center animate-[spin_120s_linear_infinite]" stroke="hsl(var(--secondary))" strokeOpacity="0.3" strokeWidth="1" fill="none">
                                {/* Intersecting circles forming Seed of Life */}
                                <circle cx="400" cy="400" r="200" strokeWidth="2" strokeDasharray="2 18" />
                                <circle cx="400" cy="200" r="200" strokeOpacity="0.1" />
                                <circle cx="400" cy="600" r="200" strokeOpacity="0.1" />
                                <circle cx="226.8" cy="300" r="200" strokeOpacity="0.1" />
                                <circle cx="573.2" cy="300" r="200" strokeOpacity="0.1" />
                                <circle cx="226.8" cy="500" r="200" strokeOpacity="0.1" />
                                <circle cx="573.2" cy="500" r="200" strokeOpacity="0.1" />
                                {/* Metatron's Cube Outer Hexagon */}
                                <polygon points="400,60 694.4,230 694.4,570 400,740 105.6,570 105.6,230" strokeWidth="1.5" strokeOpacity="0.5" />
                                <circle cx="400" cy="400" r="340" strokeWidth="0.5" strokeDasharray="4 8" strokeOpacity="0.3" />
                            </g>

                            <g className="origin-center animate-[spin_180s_linear_infinite_reverse]" stroke="hsl(var(--primary))" strokeOpacity="0.4" strokeWidth="1.5" fill="none">
                                {/* Merkaba / Intersecting Star Tetrahedrons */}
                                <polygon points="400,100 660,550 140,550" className="animate-[pulse_8s_ease-in-out_infinite]" />
                                <polygon points="400,700 660,250 140,250" className="animate-[pulse_8s_ease-in-out_infinite_4s]" />
                                <circle cx="400" cy="400" r="300" strokeDasharray="5 45" strokeWidth="3" />
                            </g>

                            {/* Hieroglyphic / Tech Ring */}
                            <g stroke="white" strokeWidth="1" fill="none" strokeOpacity="0.4" className="origin-center animate-[spin_60s_linear_infinite]">
                                <circle cx="400" cy="400" r="160" strokeDasharray="4 8 2 12" />
                            </g>

                            {/* Anubis Geometric Center */}
                            <g stroke="white" strokeWidth="3" fill="none" transform="translate(0, 30)">
                                {/* Background Shell/Halo */}
                                <path d="M 400 30 L 300 200 L 250 450 L 400 580 L 550 450 L 500 200 Z" stroke="hsl(var(--secondary))" strokeOpacity="0.2" strokeWidth="2" strokeDasharray="4 4" />

                                {/* Tall Ears */}
                                <path d="M 360 250 L 320 60 L 340 270 Z" stroke="hsl(var(--primary))" strokeWidth="2" fill="hsl(var(--primary))" fillOpacity="0.05" />
                                <path d="M 440 250 L 480 60 L 460 270 Z" stroke="hsl(var(--primary))" strokeWidth="2" fill="hsl(var(--primary))" fillOpacity="0.05" />

                                {/* Inner Ear Circuitry */}
                                <path d="M 335 120 L 345 230 M 465 120 L 455 230" stroke="hsl(var(--secondary))" strokeWidth="1" strokeDasharray="4 2" />

                                {/* Diamond third eye */}
                                <polygon points="400,240 380,275 400,310 420,275" stroke="hsl(var(--primary))" strokeWidth="3" className="animate-[pulse_3s_infinite]" fill="white" fillOpacity="0.1" />
                                {/* Cyber-pupil */}
                                <circle cx="400" cy="275" r="4" fill="hsl(var(--primary))" stroke="none" />

                                {/* Main Snout Structure */}
                                <path d="M 370 250 L 430 250 L 470 350 L 400 530 L 330 350 Z" stroke="white" strokeWidth="3" fill="none" />

                                {/* Snout Ridge */}
                                <path d="M 380 290 L 400 530 L 420 290" stroke="hsl(var(--primary))" strokeWidth="2" />
                                {/* Nostril / Tip */}
                                <polygon points="400,530 385,490 415,490" fill="white" stroke="none" />

                                {/* Cheek Plates */}
                                <path d="M 330 350 L 400 420 L 470 350" stroke="hsl(var(--secondary))" strokeWidth="2" />
                                <path d="M 310 400 L 400 480 L 490 400" stroke="hsl(var(--secondary))" strokeWidth="1" strokeDasharray="2 4" />

                                {/* Glowing Eyes */}
                                <path d="M 340 310 L 370 320 L 350 330 L 320 315 Z" fill="hsl(var(--primary))" stroke="none" className="animate-pulse" />
                                <path d="M 460 310 L 430 320 L 450 330 L 480 315 Z" fill="hsl(var(--primary))" stroke="none" className="animate-pulse" />

                                {/* Eye Trails (Eye of Horus style markings) */}
                                <path d="M 320 315 L 290 350" stroke="white" strokeWidth="3" />
                                <path d="M 480 315 L 510 350" stroke="white" strokeWidth="3" />
                                <path d="M 350 330 L 350 380 Q 350 400 320 420" stroke="hsl(var(--primary))" strokeWidth="2" />
                                <path d="M 450 330 L 450 380 Q 450 400 480 420" stroke="hsl(var(--primary))" strokeWidth="2" />

                                {/* Cyber Neck/Collar */}
                                <path d="M 320 460 Q 400 510 480 460" stroke="white" strokeWidth="3" />
                                <path d="M 340 490 Q 400 530 460 490" stroke="hsl(var(--primary))" strokeWidth="2" />
                                <path d="M 300 520 Q 400 570 500 520" stroke="hsl(var(--secondary))" strokeWidth="2" strokeDasharray="6 6" />
                            </g>

                            {/* Circuit nodes / Stars */}
                            <g fill="white">
                                <circle cx="400" cy="90" r="4" className="animate-ping" style={{ animationDuration: '4s' }} />
                                <circle cx="100" cy="570" r="5" className="animate-ping" style={{ animationDuration: '3s', animationDelay: '1s' }} />
                                <circle cx="700" cy="570" r="5" className="animate-ping" style={{ animationDuration: '5s', animationDelay: '2s' }} />
                                <circle cx="400" cy="740" r="4" className="animate-ping" style={{ animationDuration: '4.5s', animationDelay: '0.5s' }} />

                                {/* Orb of Ra / Data Core (above head) */}
                                <circle cx="400" cy="150" r="12" fill="hsl(var(--primary))" stroke="none" className="animate-[pulse_6s_infinite]" />
                                <circle cx="400" cy="150" r="4" fill="white" stroke="none" />

                                {/* Floating energy nodes */}
                                <circle cx="280" cy="180" r="3" className="animate-bounce" style={{ animationDuration: '4s' }} />
                                <circle cx="520" cy="180" r="3" className="animate-bounce" style={{ animationDuration: '5s', animationDelay: '1s' }} />
                                <circle cx="200" cy="380" r="3.5" fill="hsl(var(--secondary))" className="animate-bounce" style={{ animationDuration: '6s', animationDelay: '2s' }} />
                                <circle cx="600" cy="380" r="3.5" fill="hsl(var(--secondary))" className="animate-bounce" style={{ animationDuration: '4.5s', animationDelay: '1.5s' }} />
                            </g>
                        </svg>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4 py-16">
                <div className="grid lg:grid-cols-3 gap-8 mb-24">
                    {solutions.map((sol) => {
                        const Icon = sol.icon
                        return (
                            <Card key={sol.title} className="glass flex flex-col hover:-translate-y-1 transition-transform group">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <CardTitle className="text-2xl">{sol.title}</CardTitle>
                                    <CardDescription>{sol.tagline}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1 flex flex-col justify-between">
                                    <div className="mb-6">
                                        <p className="font-semibold mb-2">Capabilities:</p>
                                        <ul className="space-y-2 mb-6">
                                            {sol.details.map((detail, idx) => (
                                                <li key={idx} className="flex gap-2 text-sm text-muted-foreground items-start">
                                                    <span className="text-primary mt-0.5">•</span> {detail}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="flex flex-wrap gap-2">
                                            <Badge variant="secondary">Cloud</Badge>
                                            <Badge variant="secondary">VPC</Badge>
                                            <Badge variant="secondary">Offline</Badge>
                                        </div>
                                    </div>
                                    <Button asChild variant="secondary" className="w-full">
                                        <Link to={sol.href}>See details</Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </section>

            <section className="bg-white/5 py-24">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center">Governance Primitives</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="font-semibold mb-2 text-primary">Policy gates</h3>
                            <p className="text-sm text-muted-foreground">Deterministic rule engines that intercept and evaluate all inputs/outputs before proceeding.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2 text-primary">Approvals</h3>
                            <p className="text-sm text-muted-foreground">Human-in-the-loop workflows for sensitive or high-risk actions to ensure continuous oversight.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2 text-primary">Budgets</h3>
                            <p className="text-sm text-muted-foreground">Hard limits on usage, API calls, and context token expenditures to cap cost risk.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2 text-primary">Trace logs</h3>
                            <p className="text-sm text-muted-foreground">Immutable forensic streams recording every step, tool invocation, and generated token.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 text-center">
                <div className="container mx-auto px-4 max-w-2xl">
                    <h2 className="text-3xl font-bold mb-6">Not sure which solution fits?</h2>
                    <p className="text-lg text-muted-foreground mb-8">Discuss your operational constraints with our architecture team.</p>
                    <Button asChild size="lg" className="h-14 px-8">
                        <Link to="?contact=true">Book a 20 Min Consultation</Link>
                    </Button>
                </div>
            </section>
        </div>
    )
}
