import { useState } from "react"
import { Shield, Sparkles, Copy, Check, Info, ArrowRight, ChevronDown, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export function PrimitivesSpecPage() {
    const [copiedText, setCopiedText] = useState<string | null>(null)
    const [faqOpen, setFaqOpen] = useState<string | null>("q1")

    const copyToClipboard = (text: string, id: string) => {
        navigator.clipboard.writeText(text)
        setCopiedText(id)
        setTimeout(() => setCopiedText(null), 2000)
    }

    const ColorChip = ({ name, variable, description, hsl }: { name: string, variable: string, description: string, hsl: string }) => (
        <div className="glass p-4 rounded-xl border border-white/5 bg-card/20 flex flex-col gap-3">
            <div className="h-16 w-full rounded-lg border border-white/10" style={{ backgroundColor: `hsl(var(${variable}))` }} />
            <div>
                <h4 className="font-bold text-white text-sm">{name}</h4>
                <code className="text-xs text-primary block mt-0.5">{variable}</code>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{description}</p>
                <code className="text-[10px] text-muted-foreground/50 block mt-1 font-mono">{hsl}</code>
            </div>
        </div>
    )

    const CodeBlock = ({ code, id }: { code: string, id: string }) => (
        <div className="relative mt-3 group/code">
            <pre className="p-4 bg-[#09090b] rounded-lg border border-white/5 font-mono text-xs text-muted-foreground overflow-x-auto">
                {code}
            </pre>
            <button
                onClick={() => copyToClipboard(code, id)}
                className="absolute right-3 top-3 p-1.5 rounded bg-white/5 border border-white/10 text-muted-foreground hover:text-white transition-colors"
                aria-label="Copy code"
            >
                {copiedText === id ? <Check className="w-3.5 h-3.5 text-primary" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
        </div>
    )

    return (
        <div className="w-full relative min-h-screen pb-32">
            <div className="absolute top-12 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <section className="container mx-auto px-4 pt-8 pb-12 relative z-10">
                <div className="max-w-4xl mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm mb-6 text-primary">
                        <Sparkles className="w-4 h-4" /> Design System Spec
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-4">
                        UI Primitives <span className="text-primary">Specification.</span>
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        The architectural core of Anubis Labs' interface design. Standardized CSS custom properties, buttons, forms, and interactive layout layers.
                    </p>
                </div>
            </section>

            <section className="container mx-auto px-4 space-y-16 relative z-10">
                {/* 1. COLORS */}
                <div>
                    <h2 className="text-2xl font-bold border-b border-white/10 pb-2 mb-6 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                        Color System Variables
                    </h2>
                    <p className="text-muted-foreground mb-6 text-sm">
                        Mapped to CSS HSL color tokens. Colors are dynamic, tailored to Egyptian Gold aesthetics with deep black surfaces.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <ColorChip name="Egyptian Gold (Primary)" variable="--primary" hsl="47.9 95.8% 49%" description="Used for core actions, branding highlights, and accent glows." />
                        <ColorChip name="Icy Cyan (Secondary)" variable="--secondary" hsl="190 70% 40%" description="Used for technical indicators, active logs, and secondary accents." />
                        <ColorChip name="Deep Charcoal Background" variable="--background" hsl="240 10% 3.9%" description="The base page canvas layer. Deep and non-reflective." />
                        <ColorChip name="Surface Glass (Card)" variable="--card" hsl="240 10% 3.9% / 0.4" description="Semi-transparent cards with backdrop filter blur." />
                    </div>
                </div>

                {/* 2. TYPOGRAPHY */}
                <div>
                    <h2 className="text-2xl font-bold border-b border-white/10 pb-2 mb-6 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                        Typography Hierarchy
                    </h2>
                    <div className="glass p-6 rounded-xl border border-white/5 space-y-6">
                        <div>
                            <span className="text-xs text-muted-foreground font-mono block mb-2">[H1 - Heading Extra Large]</span>
                            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white">
                                Policy-Gated <span className="text-primary">Agent Runtime.</span>
                            </h1>
                            <CodeBlock id="typo-h1" code={`<h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white">\n  Policy-Gated <span className="text-primary">Agent Runtime.</span>\n</h1>`} />
                        </div>

                        <div>
                            <span className="text-xs text-muted-foreground font-mono block mb-2">[H2 - Heading Medium]</span>
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                                Scope a Pilot Architecture.
                            </h2>
                            <CodeBlock id="typo-h2" code={`<h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">\n  Scope a Pilot Architecture.\n</h2>`} />
                        </div>

                        <div>
                            <span className="text-xs text-muted-foreground font-mono block mb-2">[Body - Leading Large]</span>
                            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                                Automation with approvals, budgets, and reviewable traces. Build agents that can take bounded action without bypassing enterprise controls.
                            </p>
                            <CodeBlock id="typo-body" code={`<p className="text-lg md:text-xl text-muted-foreground leading-relaxed">\n  Automation with approvals, budgets, and reviewable traces.\n</p>`} />
                        </div>
                    </div>
                </div>

                {/* 3. BUTTONS PLAYGROUND */}
                <div>
                    <h2 className="text-2xl font-bold border-b border-white/10 pb-2 mb-6 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                        Buttons Playground
                    </h2>
                    <div className="glass p-6 rounded-xl border border-white/5 grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div>
                                <span className="text-xs text-muted-foreground font-mono block mb-2">[Variant: Default (Gold)]</span>
                                <Button size="lg">Talk to us</Button>
                                <CodeBlock id="btn-default" code={`<Button size="lg">Talk to us</Button>`} />
                            </div>

                            <div>
                                <span className="text-xs text-muted-foreground font-mono block mb-2">[Variant: Gold Outline (Custom)]</span>
                                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 bg-transparent">
                                    See details
                                </Button>
                                <CodeBlock id="btn-gold-outline" code={`<Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 bg-transparent">\n  See details\n</Button>`} />
                            </div>

                            <div>
                                <span className="text-xs text-muted-foreground font-mono block mb-2">[Variant: Ghost Case Study Outline]</span>
                                <Button variant="outline" className="justify-between border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group bg-transparent">
                                    Request Details <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                                <CodeBlock id="btn-ghost-outline" code={`<Button variant="outline" className="justify-between border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group bg-transparent">\n  Request Details <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />\n</Button>`} />
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <span className="text-xs text-muted-foreground font-mono block mb-2">[Variant: Link (Yellow Accent)]</span>
                                <Button variant="link" className="px-0">
                                    View solution <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                                <CodeBlock id="btn-link" code={`<Button variant="link" className="px-0">\n  View solution <ArrowRight className="ml-2 w-4 h-4" />\n</Button>`} />
                            </div>

                            <div>
                                <span className="text-xs text-muted-foreground font-mono block mb-2">[Size: Compact Mobile Header]</span>
                                <Button className="h-8 px-3 text-xs sm:h-9 sm:px-4 sm:text-sm">Talk to us</Button>
                                <CodeBlock id="btn-compact" code={`<Button className="h-8 px-3 text-xs sm:h-9 sm:px-4 sm:text-sm">Talk to us</Button>`} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* 4. BADGES */}
                <div>
                    <h2 className="text-2xl font-bold border-b border-white/10 pb-2 mb-6 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                        Badges & Indicators
                    </h2>
                    <div className="glass p-6 rounded-xl border border-white/5 flex flex-wrap gap-6 items-center">
                        <div className="flex flex-col gap-2">
                            <span className="text-xs text-muted-foreground font-mono">[Hero Badge]</span>
                            <Badge variant="secondary" className="px-4 py-1.5 bg-primary/10 text-primary border-primary/20 backdrop-blur-md text-sm font-medium tracking-wide shadow-[0_0_15px_rgba(234,179,8,0.2)] w-max">
                                Secure Execution
                            </Badge>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-xs text-muted-foreground font-mono">[Category Active Badge]</span>
                            <Badge variant="secondary" className="bg-primary/10 text-primary border-none w-max">
                                Engineering
                            </Badge>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-xs text-muted-foreground font-mono">[Category Muted Badge]</span>
                            <Badge variant="secondary" className="bg-white/5 text-muted-foreground w-max">
                                Cloud
                            </Badge>
                        </div>
                    </div>
                    <CodeBlock id="badges-all" code={`<!-- Hero Highlight -->\n<Badge variant="secondary" className="px-4 py-1.5 bg-primary/10 text-primary border-primary/20 backdrop-blur-md text-sm font-medium tracking-wide shadow-[0_0_15px_rgba(234,179,8,0.2)]">\n  Secure Execution\n</Badge>\n\n<!-- Category Badge -->\n<Badge variant="secondary" className="bg-primary/10 text-primary border-none">\n  Engineering\n</Badge>`} />
                </div>

                {/* 5. GLASS CARDS */}
                <div>
                    <h2 className="text-2xl font-bold border-b border-white/10 pb-2 mb-6 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                        Card Layout Systems
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="glass hover:-translate-y-1 transition-all duration-300 border border-white/5 bg-card/40 backdrop-blur-md shadow-xl group">
                            <CardHeader>
                                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
                                    <Shield className="w-6 h-6" />
                                </div>
                                <CardTitle className="text-xl font-bold">Egyptian Glass Card</CardTitle>
                                <CardDescription className="text-sm text-muted-foreground">Standardized glass container styling.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Uses a translucent background combined with a thin border and high-radius blur filter. Includes a subtle translate transition on hover.
                                </p>
                            </CardContent>
                        </Card>

                        <div>
                            <span className="text-xs text-muted-foreground font-mono block mb-2">[Structure Code]</span>
                            <CodeBlock id="card-glass" code={`<Card className="glass hover:-translate-y-1 transition-all duration-300 border border-white/5 bg-card/40 backdrop-blur-md shadow-xl group">\n  <CardHeader>\n    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">\n      <Icon className="w-6 h-6" />\n    </div>\n    <CardTitle>Egyptian Glass Card</CardTitle>\n    <CardDescription>Description</CardDescription>\n  </CardHeader>\n  <CardContent>\n    <p>Card Content text...</p>\n  </CardContent>\n</Card>`} />
                        </div>
                    </div>
                </div>

                {/* 6. FORM CONTROLS */}
                <div>
                    <h2 className="text-2xl font-bold border-b border-white/10 pb-2 mb-6 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                        Forms & Inputs Specification
                    </h2>
                    <div className="glass p-6 rounded-xl border border-white/5 grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="spec-name">Input Label *</Label>
                                <Input id="spec-name" placeholder="Text input placeholder" className="bg-background/50 h-12" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="spec-select">Select Dropdown</Label>
                                <Select defaultValue="VPC">
                                    <SelectTrigger id="spec-select" className="bg-background/50 h-12">
                                        <SelectValue placeholder="Select platform" />
                                    </SelectTrigger>
                                    <SelectContent className="glass">
                                        <SelectItem value="Cloud">Managed Cloud</SelectItem>
                                        <SelectItem value="VPC">VPC Network</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="spec-message">Message Box</Label>
                                <Textarea id="spec-message" placeholder="Textarea message box" className="min-h-[100px] bg-background/50" />
                            </div>
                        </div>

                        <div>
                            <span className="text-xs text-muted-foreground font-mono block mb-2">[HTML & Tailwind Form Elements Code]</span>
                            <CodeBlock id="form-controls" code={`<!-- Text Input -->\n<div className="space-y-2">\n  <Label htmlFor="name">Name *</Label>\n  <Input id="name" placeholder="Jane Doe" className="bg-background/50 h-12" />\n</div>\n\n<!-- Select Dropdown -->\n<div className="space-y-2">\n  <Label htmlFor="deployment">Deployment</Label>\n  <Select defaultValue="VPC">\n    <SelectTrigger className="bg-background/50 h-12">\n      <SelectValue placeholder="Select platform" />\n    </SelectTrigger>\n    <SelectContent className="glass">\n      <SelectItem value="VPC">VPC (AWS/GCP)</SelectItem>\n    </SelectContent>\n  </Select>\n</div>`} />
                        </div>
                    </div>
                </div>

                {/* 7. ALERTS */}
                <div>
                    <h2 className="text-2xl font-bold border-b border-white/10 pb-2 mb-6 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                        Alert Layouts
                    </h2>
                    <div className="space-y-4">
                        <div className="flex gap-4 p-5 rounded-xl border border-primary/20 bg-primary/5 shadow-md relative overflow-hidden">
                            <Info className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                            <div>
                                <h4 className="font-bold text-white mb-1">NOTE Alert primitive</h4>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Used to highlight background context, specific rules configurations, or documentation links. Mapped to gold border strokes and gold background glows.
                                </p>
                            </div>
                        </div>

                        <CodeBlock id="alert-note" code={`<div className="flex gap-4 p-5 rounded-xl border border-primary/20 bg-primary/5 shadow-md relative overflow-hidden">\n  <Info className="w-6 h-6 text-primary shrink-0 mt-0.5" />\n  <div>\n    <h4 className="font-bold text-white mb-1">Title</h4>\n    <p className="text-muted-foreground text-sm">Alert message...</p>\n  </div>\n</div>`} />
                    </div>
                </div>

                {/* 8. TERMINALS & LOG STREAM */}
                <div>
                    <h2 className="text-2xl font-bold border-b border-white/10 pb-2 mb-6 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                        Log Stream & Console Terminal
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-[#09090b] rounded-xl border border-white/5 overflow-hidden shadow-2xl relative">
                            {/* Header bar */}
                            <div className="flex items-center justify-between px-4 py-3 bg-white/[0.02] border-b border-white/5">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                </div>
                                <span className="text-xs text-muted-foreground font-mono flex items-center gap-2">
                                    <Terminal className="w-3.5 h-3.5 text-primary" /> audit_stream.log
                                </span>
                            </div>
                            {/* Terminal content */}
                            <div className="p-5 font-mono text-xs space-y-2 text-left">
                                <p className="text-muted-foreground">[INFO] REQ_ID: arq_09b4xyz USER: engineer_77</p>
                                <p className="text-primary">&gt; Executing semantic search: "ASME pressure vessel limits"</p>
                                <p className="text-secondary">&gt; Vector chunks retrieved: 4 chunks (similarity &gt; 0.88)</p>
                                <p className="text-green-400">&gt; Policy gate status: PASSED (all audit trails active)</p>
                            </div>
                        </div>

                        <div>
                            <span className="text-xs text-muted-foreground font-mono block mb-2">[Code Terminal & Status Streams Code]</span>
                            <CodeBlock id="console-terminal" code={`<div className="bg-[#09090b] rounded-xl border border-white/5 overflow-hidden shadow-2xl relative">\n  <div className="flex items-center justify-between px-4 py-3 bg-white/[0.02] border-b border-white/5">\n    <div className="flex gap-2">\n      <div className="w-3 h-3 rounded-full bg-red-500/80" />\n      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />\n      <div className="w-3 h-3 rounded-full bg-green-500/80" />\n    </div>\n    <span className="text-xs text-muted-foreground font-mono">console.log</span>\n  </div>\n  <div className="p-5 font-mono text-xs space-y-2 text-left">\n    <p className="text-muted-foreground">[INFO] Logs...</p>\n    <p className="text-primary">> Commands...</p>\n  </div>\n</div>`} />
                        </div>
                    </div>
                </div>

                {/* 9. DATA TABLES & COMPARISON MATRIX */}
                <div>
                    <h2 className="text-2xl font-bold border-b border-white/10 pb-2 mb-6 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                        Data Tables & Feature Comparison
                    </h2>
                    <div className="glass p-6 rounded-xl border border-white/5 space-y-6">
                        <div className="overflow-x-auto w-full rounded-xl border border-white/5 bg-card/20 backdrop-blur-md">
                            <table className="w-full text-left text-sm border-collapse">
                                <thead>
                                    <tr className="border-b border-white/10 bg-white/[0.02]">
                                        <th className="p-4 font-bold text-white">Feature</th>
                                        <th className="p-4 font-bold text-white">Managed Cloud</th>
                                        <th className="p-4 font-bold text-white">VPC Deployment</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-white/5 hover:bg-white/[0.01] transition-colors">
                                        <td className="p-4 font-medium text-white">Data Retention</td>
                                        <td className="p-4 text-muted-foreground">Encryption at rest</td>
                                        <td className="p-4 text-primary font-medium">100% Client-Owned</td>
                                    </tr>
                                    <tr className="border-b border-white/5 hover:bg-white/[0.01] transition-colors">
                                        <td className="p-4 font-medium text-white">Policy Gating</td>
                                        <td className="p-4 text-muted-foreground">Standard RBAC</td>
                                        <td className="p-4 text-primary font-medium">Custom Rules Engine</td>
                                    </tr>
                                    <tr className="hover:bg-white/[0.01] transition-colors">
                                        <td className="p-4 font-medium text-white">Air-Gapped Option</td>
                                        <td className="p-4 text-muted-foreground">No</td>
                                        <td className="p-4 text-primary font-medium">Yes (Fully Offline)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <CodeBlock id="comparison-table" code={`<div className="overflow-x-auto w-full rounded-xl border border-white/5 bg-card/20 backdrop-blur-md">\n  <table className="w-full text-left text-sm border-collapse">\n    <thead>\n      <tr className="border-b border-white/10 bg-white/[0.02]">\n        <th className="p-4 text-white">Header</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr className="border-b border-white/5 hover:bg-white/[0.01] transition-colors">\n        <td className="p-4">Value</td>\n      </tr>\n    </tbody>\n  </table>\n</div>`} />
                    </div>
                </div>

                {/* 10. FAQ ACCORDION ITEMS */}
                <div>
                    <h2 className="text-2xl font-bold border-b border-white/10 pb-2 mb-6 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                        Interactive FAQ Accordion
                    </h2>
                    <div className="glass p-6 rounded-xl border border-white/5 space-y-6">
                        <div className="space-y-3 max-w-3xl">
                            {[
                                { id: "q1", q: "Where is our data processed?", a: "All reasoning, caching, and document indexing occur strictly inside your virtual boundaries (VPC or local servers), leaving zero footprints on external servers." },
                                { id: "q2", q: "Does the system support offline operations?", a: "Yes, we ship containerized setups equipped with local, highly optimized open LLMs that run entirely air-gapped without internet." }
                            ].map(item => {
                                const isOpen = faqOpen === item.id
                                return (
                                    <div key={item.id} className="border border-white/5 bg-card/10 rounded-xl overflow-hidden">
                                        <button
                                            onClick={() => setFaqOpen(isOpen ? null : item.id)}
                                            className="w-full flex items-center justify-between p-5 text-left text-white font-bold hover:bg-white/5 transition-colors"
                                        >
                                            <span>{item.q}</span>
                                            <ChevronDown className={`w-4 h-4 text-primary transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                                        </button>
                                        <div className={`transition-all duration-300 overflow-hidden ${isOpen ? "max-h-[200px]" : "max-h-0"}`}>
                                            <p className="p-5 pt-0 text-sm text-muted-foreground border-t border-white/5 bg-white/[0.01] leading-relaxed">
                                                {item.a}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <CodeBlock id="faq-accordion" code={`<!-- Accordion Node (mapped or single) -->\n<div className="border border-white/5 bg-card/10 rounded-xl overflow-hidden">\n  <button onClick={() => setOpen(!isOpen)} className="w-full flex justify-between p-5 text-white font-bold">\n    <span>Question?</span>\n    <ChevronDown className={\`transition-transform \${isOpen ? "rotate-180" : ""}\`} />\n  </button>\n  <div className={\`transition-all duration-300 overflow-hidden \${isOpen ? "max-h-[200px]" : "max-h-0"}\`}>\n    <p className="p-5 pt-0 text-muted-foreground border-t border-white/5 bg-white/[0.01]">Answer...</p>\n  </div>\n</div>`} />
                    </div>
                </div>

                {/* 11. STAT METRICS WIDGET BLOCKS */}
                <div>
                    <h2 className="text-2xl font-bold border-b border-white/10 pb-2 mb-6 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                        Stat Metrics Blocks
                    </h2>
                    <div className="glass p-6 rounded-xl border border-white/5 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="glass p-6 rounded-xl border border-white/5 text-center">
                                <span className="text-4xl md:text-5xl font-black text-primary block mb-2">95%</span>
                                <span className="text-sm font-bold text-white block mb-1">Queue Reduction</span>
                                <p className="text-xs text-muted-foreground">Permit screening processed autonomously.</p>
                            </div>
                            <div className="glass p-6 rounded-xl border border-white/5 text-center">
                                <span className="text-4xl md:text-5xl font-black text-primary block mb-2">100%</span>
                                <span className="text-sm font-bold text-white block mb-1">Audit-Ready</span>
                                <p className="text-xs text-muted-foreground">Every model response is traced back to source.</p>
                            </div>
                            <div className="glass p-6 rounded-xl border border-white/5 text-center">
                                <span className="text-4xl md:text-5xl font-black text-primary block mb-2">1-2 Wks</span>
                                <span className="text-sm font-bold text-white block mb-1">Pilot Phase</span>
                                <p className="text-xs text-muted-foreground">From initial scoping to working prototype.</p>
                            </div>
                        </div>

                        <CodeBlock id="stat-metrics" code={`<div className="grid grid-cols-1 md:grid-cols-3 gap-6">\n  <div className="glass p-6 rounded-xl border border-white/5 text-center">\n    <span className="text-4xl md:text-5xl font-black text-primary block mb-2">95%</span>\n    <span className="text-sm font-bold text-white block mb-1">Title</span>\n    <p className="text-xs text-muted-foreground">Description...</p>\n  </div>\n</div>`} />
                    </div>
                </div>

                {/* 12. TIMELINE PHASE NODES */}
                <div>
                    <h2 className="text-2xl font-bold border-b border-white/10 pb-2 mb-6 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                        Timeline Phase Nodes
                    </h2>
                    <div className="glass p-6 rounded-xl border border-white/5 space-y-6">
                        <div className="relative pl-8 border-l border-white/5 space-y-8 max-w-md">
                            <div className="relative">
                                <div className="absolute -left-[37px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_rgba(255,215,0,0.8)]" />
                                <span className="text-xs font-bold text-primary tracking-wider uppercase block mb-1">Step 01</span>
                                <h4 className="text-lg font-bold text-white mb-2">Discovery Scoping</h4>
                                <p className="text-xs text-muted-foreground">We outline the workflow nodes and quantify operational targets.</p>
                            </div>
                            <div className="relative">
                                <div className="absolute -left-[37px] top-1.5 w-2.5 h-2.5 rounded-full bg-white/20 border border-white/10" />
                                <span className="text-xs font-bold text-muted-foreground tracking-wider uppercase block mb-1">Step 02</span>
                                <h4 className="text-lg font-bold text-white mb-2">Access Scaffolding</h4>
                                <p className="text-xs text-muted-foreground">Data ingest mapping and system access definitions.</p>
                            </div>
                        </div>

                        <CodeBlock id="timeline-node" code={`<!-- Vertical Timeline Container -->\n<div className="relative pl-8 border-l border-white/5 space-y-8">\n  <div className="relative">\n    <!-- Active node dot -->\n    <div className="absolute -left-[37px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_rgba(255,215,0,0.8)]" />\n    <span className="text-xs font-bold text-primary block mb-1">Step 01</span>\n    <h4 className="text-lg font-bold text-white">Title</h4>\n    <p className="text-xs text-muted-foreground">Description...</p>\n  </div>\n</div>`} />
                    </div>
                </div>
            </section>
        </div>
    )
}
