import React, { useState, useEffect } from "react"
import { Shield, CheckCircle2, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { nav, footerNav } from "@/content/site"
import { Link, useLocation, useNavigate } from "react-router-dom"

const ALogo = () => (
    <img src="/anubislogo.svg" alt="Anubis Labs Logo" className="w-8 h-8" />
)

export function Layout({ children }: { children: React.ReactNode }) {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitSuccess, setSubmitSuccess] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()
    const searchParams = new URLSearchParams(location.search)
    const isContactOpen = searchParams.get("contact") === "true"
    const [modalOpen, setModalOpen] = useState(isContactOpen)
    const [mobileNavOpen, setMobileNavOpen] = useState(false)

    useEffect(() => {
        if (isContactOpen) {
            setModalOpen(true)
        }
    }, [isContactOpen])

    const handleModalOpenChange = (open: boolean) => {
        setModalOpen(open)
        if (!open && isContactOpen) {
            // Remove the ?contact=true from the URL cleanly
            const newSearchParams = new URLSearchParams(location.search)
            newSearchParams.delete("contact")
            const newSearch = newSearchParams.toString()
            navigate(`${location.pathname}${newSearch ? `?${newSearch}` : ''}`, { replace: true })
        }
    }

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const formData = new FormData(e.currentTarget)
            const data = Object.fromEntries(formData.entries())

            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })

            const responseData = await response.json().catch(() => ({}))

            if (!response.ok) {
                throw new Error(responseData.error || 'Failed to submit form')
            }

            setSubmitSuccess(true)
            setTimeout(() => {
                handleModalOpenChange(false)
                setTimeout(() => setSubmitSuccess(false), 500)
            }, 3000)
        } catch (error: any) {
            console.error('Submission error:', error)
            alert(`Failed to send message: ${error.message || 'Please try again.'}`)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground flex flex-col">
            <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 cursor-pointer">
                        <ALogo />
                        <span className="font-bold tracking-tight text-lg">Anubis Labs</span>
                    </Link>

                    <nav className="hidden lg:flex items-center gap-6">
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

                    <div className="flex items-center gap-4">
                        <Dialog open={modalOpen} onOpenChange={handleModalOpenChange}>
                            <DialogTrigger asChild>
                                <Button className="h-8 px-3 text-xs sm:h-9 sm:px-4 sm:text-sm">Talk to us</Button>
                            </DialogTrigger>
                            <DialogContent className="w-[95vw] sm:max-w-[600px] max-h-[90vh] overflow-y-auto glass border-white/10 bg-background/80 p-0 shadow-[0_0_100px_rgba(255,255,255,0.05)]">

                                <div className="p-5 sm:p-8 relative z-10">
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

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="name">Name *</Label>
                                                    <Input id="name" name="name" required placeholder="Jane Doe" className="bg-background/50" />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="email">Email *</Label>
                                                    <Input id="email" name="email" type="email" required placeholder="jane@company.com" className="bg-background/50" />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="company">Company</Label>
                                                    <Input id="company" name="company" placeholder="Acme Corp" className="bg-background/50" />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="role">Role</Label>
                                                    <Input id="role" name="role" placeholder="CTO" className="bg-background/50" />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

                        <button
                            onClick={() => setMobileNavOpen(!mobileNavOpen)}
                            className="p-2 text-muted-foreground hover:text-foreground lg:hidden focus:outline-none z-50 relative"
                            aria-label="Toggle Menu"
                        >
                            {mobileNavOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </header>

            <AnimatePresence>
                {mobileNavOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg lg:hidden pt-24 px-6 flex flex-col justify-between pb-8"
                    >
                        <nav className="flex flex-col gap-6 text-lg font-medium mt-8">
                            {nav.map((item, idx) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                >
                                    <Link
                                        to={item.href}
                                        onClick={() => setMobileNavOpen(false)}
                                        className="text-muted-foreground hover:text-foreground transition-colors py-2 block border-b border-white/5"
                                    >
                                        {item.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        <div className="border-t border-white/5 pt-6 text-xs text-muted-foreground/60 flex flex-col gap-2">
                            <span>© {new Date().getFullYear()} Anubis Labs. All rights reserved.</span>
                            <span>Calgary, AB</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <main className="flex-1 pt-24 pb-16 overflow-x-hidden">
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
