import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"

export function MunicipalCaseStudyPage() {
    return (
        <div className="w-full">
            <section className="container mx-auto px-4 pt-8 pb-24 lg:pt-16 lg:pb-32 max-w-4xl relative z-10">
                <div className="mb-8">
                    <Link to="/case-studies" className="text-primary hover:underline font-medium">&larr; Back to Case Studies</Link>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                    AI-Powered Permit Intelligence Platform
                </h1>
                <p className="text-2xl text-primary font-medium mb-12">Outcome: Fragmented municipal data &rarr; actionable lead intelligence signals</p>

                <div className="space-y-16">
                    {/* SUMMARY & CLIENT PROFILE */}
                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        <div>
                            <h2 className="text-2xl font-bold border-b border-white/10 pb-2 mb-4">Summary</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We designed and built a permit intelligence platform for contractors, developers, and construction-adjacent teams who need to understand municipal activity before it becomes obvious to the market. The product turns fragmented public permit data into a searchable, filterable, and actionable business tool, turning permits into early market signals.
                            </p>
                        </div>
                        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                            <h2 className="text-xl font-bold mb-4">Client Profile</h2>
                            <ul className="space-y-2 text-muted-foreground text-sm">
                                <li className="flex gap-2 items-start">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                    Contractors, builders, and material suppliers
                                </li>
                                <li className="flex gap-2 items-start">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                    Developers and real estate investors tracking trends
                                </li>
                                <li className="flex gap-2 items-start">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                    Sales teams searching for early-stage construction leads
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* WHAT WE BUILT */}
                    <div>
                        <h2 className="text-2xl font-bold border-b border-white/10 pb-2 mb-6 text-foreground">What We Built</h2>
                        <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                            The platform ingests permit data from multiple municipal sources and normalizes it into a clean, structured data layer. Each record can be searched, filtered, enriched, and categorized so users can quickly evaluate the opportunity.
                        </p>
                        <div className="bg-card glass border border-white/5 p-6 rounded-xl">
                            <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-sm text-muted-foreground">
                                <li className="flex gap-2 items-start">
                                    <span className="text-primary shrink-0">&rarr;</span>
                                    <span><strong>Multi-city ingestion:</strong> Ingests public permit feeds across multiple municipal jurisdictions.</span>
                                </li>
                                <li className="flex gap-2 items-start">
                                    <span className="text-primary shrink-0">&rarr;</span>
                                    <span><strong>Searchable database:</strong> Location, project type, value, applicant, contractor, and status queries.</span>
                                </li>
                                <li className="flex gap-2 items-start">
                                    <span className="text-primary shrink-0">&rarr;</span>
                                    <span><strong>AI classification:</strong> Interprets messy, vague permit descriptions into project categories.</span>
                                </li>
                                <li className="flex gap-2 items-start">
                                    <span className="text-primary shrink-0">&rarr;</span>
                                    <span><strong>Lead scoring:</strong> Ranks leads based on project value, geography, timing, and permit types.</span>
                                </li>
                                <li className="flex gap-2 items-start">
                                    <span className="text-primary shrink-0">&rarr;</span>
                                    <span><strong>Map explorer:</strong> Spot activity clusters and neighborhood development trends.</span>
                                </li>
                                <li className="flex gap-2 items-start">
                                    <span className="text-primary shrink-0">&rarr;</span>
                                    <span><strong>Relationship mapping:</strong> Lookup views for contractors, applicants, and builders.</span>
                                </li>
                                <li className="flex gap-2 items-start">
                                    <span className="text-primary shrink-0">&rarr;</span>
                                    <span><strong>Alerting workflows:</strong> Instant notifications for new permits matching saved criteria.</span>
                                </li>
                                <li className="flex gap-2 items-start">
                                    <span className="text-primary shrink-0">&rarr;</span>
                                    <span><strong>Admin tooling:</strong> Backoffice tools for reviewing, correcting, and enriching raw permit records.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* THE CHALLENGE */}
                    <div>
                        <h2 className="text-2xl font-bold border-b border-white/10 pb-2 mb-6 text-foreground">The Challenge</h2>
                        <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                            Municipal permit data is valuable, but it is rarely clean. Every city publishes information differently. Some use open data portals. Some expose partial datasets. Some bury key information in PDFs, tables, or inconsistent field names.
                        </p>
                        <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                            Descriptions can be vague, duplicated, abbreviated, or written in a way that only makes sense to local permit office staff. The challenge was to turn that mess into a product that felt fast, simple, and obvious to the user.
                        </p>

                        <h3 className="text-xl font-bold mb-4 text-foreground">Data Constraints & Obstacles</h3>
                        <ul className="grid sm:grid-cols-2 gap-4 text-muted-foreground">
                            <li className="bg-background border border-white/5 p-4 rounded-lg">Pipelines must normalize fields across inconsistent schemas</li>
                            <li className="bg-background border border-white/5 p-4 rounded-lg">Identify and deduplicate partial or overlapping records</li>
                            <li className="bg-background border border-white/5 p-4 rounded-lg">Reconcile vague municipal descriptions without losing details</li>
                            <li className="bg-background border border-white/5 p-4 rounded-lg">Provide instant, fast search queries over large geo-datasets</li>
                        </ul>
                    </div>

                    {/* AI AND AUTOMATION LAYER */}
                    <div>
                        <h2 className="text-2xl font-bold border-b border-white/10 pb-2 mb-6 text-foreground">AI and Automation Layer</h2>
                        <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                            AI was used where it actually added value: interpreting messy human-written descriptions, classifying project types, extracting useful signals, and helping users filter out noise. Rather than a product gimmick, AI functions as an invisible intelligence layer behind the workflows.
                        </p>
                        <div className="bg-card glass border border-white/5 p-6 rounded-xl">
                            <h3 className="text-lg font-bold mb-4 text-primary">Targeted Pattern Identification</h3>
                            <ul className="grid sm:grid-cols-2 gap-4 text-sm text-muted-foreground leading-relaxed">
                                <li className="flex gap-2 items-start">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                    <span><strong>Renovations vs. New Construction</strong> classification.</span>
                                </li>
                                <li className="flex gap-2 items-start">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                    <span><strong>Residential vs. Commercial</strong> work divisions.</span>
                                </li>
                                <li className="flex gap-2 items-start">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                    <span><strong>High-Value Opportunity</strong> extraction and scoring.</span>
                                </li>
                                <li className="flex gap-2 items-start">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                    <span><strong>Contractor Relevant</strong> project filtering.</span>
                                </li>
                                <li className="flex gap-2 items-start">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                    <span><strong>Geographic clusters</strong> of neighborhood development activity.</span>
                                </li>
                                <li className="flex gap-2 items-start">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                    <span><strong>Relationship tracking</strong> on builders, owners, and applicants.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* PRODUCT DESIGN */}
                    <div>
                        <h2 className="text-2xl font-bold border-b border-white/10 pb-2 mb-6 text-foreground">Product Design</h2>
                        <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                            The interface was designed for busy users who do not want another complicated enterprise tool. The dashboard prioritizes quick scanning, strong filters, and immediate answers:
                        </p>
                        <div className="grid sm:grid-cols-3 gap-6">
                            <div className="bg-white/5 p-5 rounded-lg border border-white/10">
                                <h4 className="font-semibold text-primary mb-2">Recency & Area</h4>
                                <p className="text-xs text-muted-foreground">What was filed recently? Is it close to my service area?</p>
                            </div>
                            <div className="bg-white/5 p-5 rounded-lg border border-white/10">
                                <h4 className="font-semibold text-primary mb-2">Value & Fit</h4>
                                <p className="text-xs text-muted-foreground">Is the project valuable enough to chase? What work is likely happening?</p>
                            </div>
                            <div className="bg-white/5 p-5 rounded-lg border border-white/10">
                                <h4 className="font-semibold text-primary mb-2">Relationships & Timing</h4>
                                <p className="text-xs text-muted-foreground">Who is attached to it? Should I follow up now?</p>
                            </div>
                        </div>
                    </div>

                    {/* TECHNICAL SCOPE */}
                    <div>
                        <h2 className="text-2xl font-bold border-b border-white/10 pb-2 mb-6 text-foreground">Technical Scope</h2>
                        <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                            The build included a modern full-stack architecture with structured data ingestion, background processing, database-backed search, AI enrichment, and a polished user-facing dashboard:
                        </p>
                        <div className="bg-card glass border border-white/5 p-6 rounded-xl">
                            <ul className="space-y-4 text-muted-foreground text-sm">
                                <li><strong>Automated Ingestion:</strong> Continuous collection and refresh workflows across municipal API portals and scraping services.</li>
                                <li><strong>Data Normalization:</strong> Custom schema translation maps irregular inputs into standardized fields.</li>
                                <li><strong>AI Classification Pipeline:</strong> Asynchronous queuing of raw descriptions to a specialized LLM for parsing and project category tagging.</li>
                                <li><strong>Geospatial Processing:</strong> PostGIS spatial indices to enable fast neighborhood radius search and geographic clustering.</li>
                                <li><strong>Scale-out Architecture:</strong> Standardized ingestion templates that make it simple to add new cities, regions, and data providers.</li>
                            </ul>
                        </div>
                    </div>

                    {/* OUTCOME */}
                    <div className="grid md:grid-cols-2 gap-8 items-stretch">
                        <div>
                            <h2 className="text-2xl font-bold border-b border-white/10 pb-2 mb-4">Outcome</h2>
                            <p className="mb-4 text-muted-foreground leading-relaxed">
                                The result was a market-ready permit intelligence platform that transformed raw public data into a practical business development engine.
                            </p>
                            <p className="text-muted-foreground leading-relaxed text-sm">
                                Instead of forcing users to hunt through municipal portals one by one, the product gave them a centralized view of new construction activity, emerging opportunities, and local market movement.
                            </p>
                        </div>
                        <div className="bg-primary/5 p-6 rounded-xl border border-primary/20 flex flex-col justify-center text-center">
                            <h3 className="text-xl font-bold mb-4 text-foreground">Why It Matters</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Practical AI systems that sit on top of messy real-world data and turn it into something people can actually use. That is the kind of product Anubis Labs is built for.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-24 pt-12 border-t border-white/5 text-center">
                    <h2 className="text-3xl font-bold mb-6">Need a custom intelligence platform?</h2>
                    <Button asChild size="lg" className="h-14 px-8 text-lg">
                        <Link to="/contact?inquiry=Case%20Study%3A%20Permit%20Intelligence">Request a demo or discuss your data challenge</Link>
                    </Button>
                </div>
            </section>
        </div>
    )
}
