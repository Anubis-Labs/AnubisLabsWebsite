import { useState } from "react"
import { Shield, CheckCircle2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useLocation } from "react-router-dom"

export function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitSuccess, setSubmitSuccess] = useState(false)
    const location = useLocation()

    // Parse inquiry from URL if coming from case studies
    const queryParams = new URLSearchParams(location.search)
    const defaultInquiry = queryParams.get("inquiry") || "Project setup"

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)

        setTimeout(() => {
            setIsSubmitting(false)
            setSubmitSuccess(true)
        }, 1500)
    }

    return (
        <div className="w-full relative min-h-screen pb-24">


            <section className="container mx-auto px-4 py-16 relative z-10 max-w-3xl">
                <div className="mb-12 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm mb-6 text-primary">
                        <Shield className="w-4 h-4" /> Start Delivering
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Request Access</h1>
                    <p className="text-lg text-muted-foreground">
                        We maintain limited client intake to preserve engineering quality.
                        Provide details on your intended workflow and infrastructure constraints.
                    </p>
                </div>

                {submitSuccess ? (
                    <div className="py-24 flex flex-col items-center justify-center text-center space-y-4 bg-white/5 rounded-2xl border border-white/10 p-12 glass">
                        <div className="w-20 h-20 bg-primary/20 text-primary rounded-full flex items-center justify-center mb-4">
                            <CheckCircle2 className="w-10 h-10" />
                        </div>
                        <h3 className="text-3xl font-bold">Request Received</h3>
                        <p className="text-muted-foreground max-w-sm text-lg">
                            Our architecture team will review your requirements and reach out within 24 hours to schedule a discovery call.
                        </p>
                    </div>
                ) : (
                    <div className="bg-card glass border-white/10 p-8 rounded-2xl shadow-2xl">
                        <form onSubmit={handleFormSubmit} className="space-y-6">
                            <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Name *</Label>
                                    <Input id="name" name="name" required placeholder="Jane Doe" className="bg-background/50 h-12" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Work Email *</Label>
                                    <Input id="email" name="email" type="email" required placeholder="jane@company.com" className="bg-background/50 h-12" />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="company">Company</Label>
                                    <Input id="company" name="company" placeholder="Acme Corp" className="bg-background/50 h-12" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="role">Role</Label>
                                    <Input id="role" name="role" placeholder="Director of Engineering" className="bg-background/50 h-12" />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="inquiry">Inquiry Type</Label>
                                    <Select name="inquiry" defaultValue={defaultInquiry.includes("Case Study") ? "General" : "Pilot discussion"}>
                                        <SelectTrigger className="bg-background/50 h-12">
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
                                    <Label htmlFor="deployment">Target Deployment</Label>
                                    <Select name="deployment" defaultValue="VPC">
                                        <SelectTrigger className="bg-background/50 h-12">
                                            <SelectValue placeholder="Select platform" />
                                        </SelectTrigger>
                                        <SelectContent className="glass">
                                            <SelectItem value="Cloud">Managed Cloud</SelectItem>
                                            <SelectItem value="VPC">VPC (AWS/GCP/Azure)</SelectItem>
                                            <SelectItem value="On-prem">On-premise</SelectItem>
                                            <SelectItem value="Local">Local/Air-gapped</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message">Message *</Label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    required
                                    placeholder="Tell us about your use case and current architecture..."
                                    className="min-h-[150px] bg-background/50 resize-y"
                                    defaultValue={defaultInquiry.includes("Case Study") ? `I'm interested in learning more about the ${defaultInquiry}.` : ""}
                                />
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="timeline">Timeline (Optional)</Label>
                                    <Input id="timeline" name="timeline" placeholder="e.g. Q3 2024" className="bg-background/50 h-12" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="budget">Budget Range (Optional)</Label>
                                    <Input id="budget" name="budget" placeholder="e.g. $50k-$100k" className="bg-background/50 h-12" />
                                </div>
                            </div>

                            <Button type="submit" size="lg" className="w-full mt-8 h-14 text-lg" disabled={isSubmitting}>
                                {isSubmitting ? "Submitting..." : "Submit Request"}
                            </Button>
                        </form>
                    </div>
                )}
            </section>
        </div>
    )
}
