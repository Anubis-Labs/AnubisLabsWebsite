const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const componentsDir = path.join(srcDir, 'components');
const layoutDir = path.join(componentsDir, 'layout');
const pagesDir = path.join(srcDir, 'pages');
const solutionsDir = path.join(pagesDir, 'solutions');
const caseDir = path.join(pagesDir, 'case-studies');

fs.mkdirSync(layoutDir, { recursive: true });
fs.mkdirSync(solutionsDir, { recursive: true });
fs.mkdirSync(caseDir, { recursive: true });

function write(p, content) {
    fs.writeFileSync(p, content, 'utf8');
}

// 1. App setup
write(path.join(srcDir, 'app', 'App.tsx'), `import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import { HomePage } from "../pages/HomePage";
import { SecurityPage } from "../pages/SecurityPage";
import { CaseStudiesPage } from "../pages/CaseStudiesPage";
import { ServicesPage } from "../pages/ServicesPage";
import { ProcessPage } from "../pages/ProcessPage";
import { AboutPage } from "../pages/AboutPage";
import { PrivacyPage } from "../pages/PrivacyPage";
import { TermsPage } from "../pages/TermsPage";

export function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/solutions" element={<div className="container mx-auto px-4 py-24">Solutions Page coming soon</div>} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/security" element={<SecurityPage />} />
                    <Route path="/case-studies" element={<CaseStudiesPage />} />
                    <Route path="/process" element={<ProcessPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/privacy" element={<PrivacyPage />} />
                    <Route path="/terms" element={<TermsPage />} />
                    
                    {/* Solution Detail Pages */}
                    <Route path="/solutions/agent-runtime" element={<div className="container mx-auto px-4 py-24">Agent Runtime</div>} />
                    <Route path="/solutions/knowledge-platform" element={<div className="container mx-auto px-4 py-24">Knowledge Platform</div>} />
                    <Route path="/solutions/compliance-intelligence" element={<div className="container mx-auto px-4 py-24">Compliance Intelligence</div>} />

                    {/* Case Study Detail Pages */}
                    <Route path="/case-studies/epcm-standards-assistant" element={<div className="container mx-auto px-4 py-24">Case Study 1</div>} />
                    <Route path="/case-studies/municipal-policy-automation" element={<div className="container mx-auto px-4 py-24">Case Study 2</div>} />
                    <Route path="/case-studies/air-gapped-sandbox" element={<div className="container mx-auto px-4 py-24">Case Study 3</div>} />
                </Routes>
            </Layout>
        </Router>
    );
}
`);

// 2. Simple layout
write(path.join(layoutDir, 'Layout.tsx'), `import React, { useState } from "react"
import { Shield, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { nav, footerNav } from "@/content/site"
import { Link } from "react-router-dom"

const ALogo = () => (
    <img src="/anubislogo.svg" alt="Anubis Labs Logo" className="w-8 h-8" />
)

export function Layout({ children }: { children: React.ReactNode }) {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitSuccess, setSubmitSuccess] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)

        setTimeout(() => {
            setIsSubmitting(false)
            setSubmitSuccess(true)
            setTimeout(() => {
                setModalOpen(false)
                setTimeout(() => setSubmitSuccess(false), 500)
            }, 2000)
        }, 1500)
    }

    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground flex flex-col">
            <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 cursor-pointer">
                        <ALogo />
                        <span className="font-bold tracking-tight text-lg hidden sm:block">Anubis Labs</span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-6">
                        {nav.map(item => (
                            <Link
                                key={item.label}
                                to={item.href}
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    <Dialog open={modalOpen} onOpenChange={setModalOpen}>
                        <DialogTrigger asChild>
                            <Button>Talk to us</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[600px] glass border-white/10 bg-background/80 p-0 overflow-hidden shadow-[0_0_100px_rgba(255,255,255,0.05)]">
                            <div className="absolute top-0 right-0 p-32 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
                            <div className="p-8 relative z-10">
                                <DialogHeader>
                                    <DialogTitle className="text-2xl flex items-center gap-2"><Shield className="w-6 h-6 text-primary" /> Start Delivering</DialogTitle>
                                    <DialogDescription className="text-base text-muted-foreground">
                                        We maintain limited client intake to ensure engineering quality. Tell us about your project.
                                    </DialogDescription>
                                </DialogHeader>
                                {submitSuccess ? (
                                    <div className="py-24 flex flex-col items-center justify-center text-center space-y-4">
                                        <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mb-2">
                                            <CheckCircle2 className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-2xl font-bold">Request Received</h3>
                                        <p className="text-muted-foreground max-w-sm">Our engineering team will review your requirements and reach out within 24 hours.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleFormSubmit} className="space-y-4 mt-6">
                                        {/* Honeypot field for spam protection */}
                                        <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
                                        
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="name">Name *</Label>
                                                <Input id="name" name="name" required placeholder="Jane Doe" className="bg-background/50" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="email">Email *</Label>
                                                <Input id="email" name="email" type="email" required placeholder="jane@company.com" className="bg-background/50" />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="company">Company</Label>
                                                <Input id="company" name="company" placeholder="Acme Corp" className="bg-background/50" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="role">Role</Label>
                                                <Input id="role" name="role" placeholder="CTO" className="bg-background/50" />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="inquiry">Inquiry Type</Label>
                                                <Select name="inquiry" defaultValue="Pilot discussion">
                                                    <SelectTrigger className="bg-background/50">
                                                        <SelectValue placeholder="Select type" />
                                                    </SelectTrigger>
                                                    <SelectContent className="glass">
                                                        <SelectItem value="Architectural review">Architectural review</SelectItem>
                                                        <SelectItem value="Security review">Security review</SelectItem>
                                                        <SelectItem value="Pilot discussion">Pilot discussion</SelectItem>
                                                        <SelectItem value="General">General</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="deployment">Deployment</Label>
                                                <Select name="deployment" defaultValue="Cloud">
                                                    <SelectTrigger className="bg-background/50">
                                                        <SelectValue placeholder="Select platform" />
                                                    </SelectTrigger>
                                                    <SelectContent className="glass">
                                                        <SelectItem value="Cloud">Cloud</SelectItem>
                                                        <SelectItem value="VPC">VPC</SelectItem>
                                                        <SelectItem value="On-prem">On-prem</SelectItem>
                                                        <SelectItem value="Local">Local</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="message">Message *</Label>
                                            <Textarea id="message" name="message" required placeholder="Tell us about your use case and current architecture..." className="min-h-[100px] bg-background/50" />
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="timeline">Timeline (Optional)</Label>
                                                <Input id="timeline" name="timeline" placeholder="e.g. Q3 2024" className="bg-background/50" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="budget">Budget Range (Optional)</Label>
                                                <Input id="budget" name="budget" placeholder="e.g. $50k-$100k" className="bg-background/50" />
                                            </div>
                                        </div>

                                        <Button type="submit" className="w-full mt-6" disabled={isSubmitting || submitSuccess}>
                                            {isSubmitting ? "Submitting..." : submitSuccess ? "Message Sent!" : "Submit Request"}
                                        </Button>
                                    </form>
                                )}
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
            </header>

            <main className="flex-1 pt-24 pb-16">
                {children}
            </main>

            <footer className="border-t border-white/5 py-12 mt-auto">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-2">
                        <ALogo />
                        <span className="font-semibold">Anubis Labs</span>
                    </div>
                    <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                        {footerNav.map(item => (
                            <Link key={item.label} to={item.href} className="hover:text-foreground transition-colors">
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>
                <div className="container mx-auto px-4 mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground/60 border-t border-white/5 pt-8">
                    <span>© {new Date().getFullYear()} Anubis Labs. All rights reserved.</span>
                    <span>Calgary, AB</span>
                </div>
            </footer>
        </div>
    )
}
`);
