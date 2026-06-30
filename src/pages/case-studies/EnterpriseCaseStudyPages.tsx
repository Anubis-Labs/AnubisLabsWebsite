import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"

type CaseStudy = {
    title: string
    outcome: string
    context: string[]
    applied: string[]
    shows: string
    matters: string
    profile: string[]
    constraints: string[]
    architecture: string[]
    cta: string
    inquiry: string
}

const cases: Record<string, CaseStudy> = {
    pursuit: {
        title: "Enterprise Pursuit Intelligence for Complex Bid Packages",
        outcome: "Large RFP packages transformed into structured pursuit requirements, risks, milestones, and source-backed answers",
        context: [
            "A technical services organization needed a better way to handle large pursuit packages. RFPs often arrived as multi-file collections containing specifications, schedules, forms, drawings, legal language, requirements, constraints, and supporting reference material.",
            "Teams had to manually sort what mattered, identify risks, extract obligations, and turn the package into something proposal teams could act on."
        ],
        applied: [
            "Anubis Labs designed an AI-assisted document intelligence workflow that ingests bid packages, classifies documents by business relevance, extracts usable text and metadata, and indexes the right material for retrieval.",
            "The system separates high-value technical and commercial content from administrative noise, then produces structured artifacts such as requirements, milestones, scope items, risks, interfaces, constraints, and compliance references.",
            "Users can ask questions against the uploaded package and receive answers grounded in source material, with references back to the originating document, page, or content segment where available."
        ],
        shows: "This work demonstrates applied AI beyond summarization. The useful part is not just reading documents; it is deciding what should be trusted, what should be ignored, what needs human review, and how extracted obligations can become part of a real pursuit workflow.",
        matters: "Proposal teams do not need another generic assistant. They need a system that reduces triage time, preserves source traceability, and helps teams understand what a pursuit actually requires before they commit people, schedule, and commercial effort.",
        profile: [
            "Technical services or EPC-style pursuit teams",
            "Multi-file RFP and bid package workflows",
            "Proposal teams balancing scope, risk, compliance, and schedule pressure"
        ],
        constraints: [
            "Separate business-critical pursuit content from administrative noise",
            "Preserve source traceability for every useful answer or extracted obligation",
            "Support human review instead of treating AI extraction as final truth",
            "Turn unstructured package content into workflow-ready artifacts"
        ],
        architecture: [
            "Document ingestion and package normalization",
            "Document classification by business relevance",
            "Text and metadata extraction across specifications, forms, schedules, and reference material",
            "Retrieval index scoped to the uploaded pursuit package",
            "Structured artifact generation for requirements, risks, interfaces, and compliance references"
        ],
        cta: "Need pursuit packages turned into actionable intelligence?",
        inquiry: "Case Study: Enterprise Pursuit Intelligence"
    },
    staff: {
        title: "Evidence-Backed Staff Intelligence for Proposal Teams",
        outcome: "Distributed staff experience converted into reviewable, proposal-ready expertise signals",
        context: [
            "A project-based organization had valuable staff experience spread across resumes, questionnaires, project records, time history, manager knowledge, and prior project narratives.",
            "This made it difficult for proposal and management teams to quickly answer practical questions: Who has done this before? What evidence supports that? Which profiles are ready for external use?"
        ],
        applied: [
            "Anubis Labs built a governed staff intelligence layer that combines structured profile data, original source resumes, questionnaire responses, project history, deliverable evidence, and curated project narratives into reviewable proposal-ready profiles.",
            "The system distinguishes between authoritative business data, locally curated information, source-resume evidence, and AI-derived suggestions. It does not treat AI output as truth by default.",
            "Instead, it creates evidence-backed signals: skills, domains, project exposure, client experience, deliverables, leadership indicators, and proposal proof points."
        ],
        shows: "This case study shows how AI can make enterprise knowledge more useful without flattening everything into an opaque answer. The system is designed around provenance, review, and defensible evidence, so teams can see why a person or profile is being recommended.",
        matters: "In proposal work, the difference between 'someone remembers this person might fit' and 'here is the evidence that supports this person's fit' is enormous. This kind of system helps organizations move from memory-based staffing and resume hunting toward searchable, source-backed expertise.",
        profile: [
            "Proposal and management teams in project-based organizations",
            "Staff profiles assembled from resumes, questionnaires, time history, and project evidence",
            "Organizations that need external-ready profile material with review controls"
        ],
        constraints: [
            "Do not treat AI-derived suggestions as authoritative business data",
            "Keep original source evidence visible for review",
            "Support profile readiness and proposal-use decisions",
            "Preserve distinctions between curated, imported, and inferred information"
        ],
        architecture: [
            "Profile data model spanning structured fields, resumes, questionnaires, and project evidence",
            "Evidence extraction for skills, domains, clients, deliverables, and leadership indicators",
            "Reviewable recommendation layer with provenance",
            "Proposal-ready profile assembly workflow",
            "Governance controls for source quality and externally usable content"
        ],
        cta: "Need staff expertise to become searchable proposal evidence?",
        inquiry: "Case Study: Staff Intelligence"
    },
    projects: {
        title: "Project Experience Retrieval for Business Development",
        outcome: "Prior project experience made searchable, reusable, and evidence-backed for pursuit work",
        context: [
            "Business development and proposal teams often need to find relevant prior work quickly: similar projects, comparable clients, matching technical scope, key challenges, and value delivered.",
            "The information may exist, but it is usually scattered across project sheets, narratives, archives, and individual memory."
        ],
        applied: [
            "Anubis Labs created a project experience retrieval system that combines structured portfolio filters with semantic search over project narratives.",
            "Teams can search by client, market, category, phase, location, project type, technical scope, challenges, and delivered value.",
            "The system indexes project information at the section level, allowing it to retrieve not only the right project, but the right evidence inside the project. This supports proposal teams looking for proof points, comparable experience, project summaries, and language that can be adapted for pursuit work."
        ],
        shows: "This work demonstrates how AI retrieval can support business development without inventing claims. The system helps surface existing evidence and make it reusable, while still keeping human teams responsible for final wording and judgment.",
        matters: "Prior project experience is one of the strongest assets a services firm has, but only if teams can find and use it. A searchable project evidence layer helps organizations respond faster, tell stronger stories, and reuse their own institutional knowledge more effectively.",
        profile: [
            "Business development and proposal teams",
            "Project-based firms with valuable but scattered experience records",
            "Organizations that need reusable proof points and comparable project evidence"
        ],
        constraints: [
            "Surface existing evidence without inventing claims",
            "Support structured filters and semantic narrative search together",
            "Retrieve the relevant section or proof point, not just the project title",
            "Keep final pursuit wording under human judgment"
        ],
        architecture: [
            "Structured portfolio filters for market, client, category, phase, location, and scope",
            "Section-level indexing of project narratives",
            "Semantic retrieval over challenges, delivered value, and technical scope",
            "Evidence snippets for comparable experience and proposal proof points",
            "Reusable search layer for business development workflows"
        ],
        cta: "Need prior project experience to become a searchable advantage?",
        inquiry: "Case Study: Project Experience Retrieval"
    },
    knowledge: {
        title: "Governed Corporate Knowledge Assistant",
        outcome: "Internal standards, procedures, and templates turned into cited answers staff can trust",
        context: [
            "A technical organization relied on internal standards, procedures, templates, deliverable rules, revision practices, folder structures, and approval workflows.",
            "The knowledge existed, but it was distributed across documents and repositories. Staff needed fast answers, but incorrect answers could create operational risk."
        ],
        applied: [
            "Anubis Labs developed a governed retrieval system that combines semantic search, structured knowledge relationships, deterministic routing, document-version awareness, citation controls, and evidence-quality checks.",
            "Instead of sending every question to a general-purpose model, the system first determines whether the question belongs in the governed knowledge workflow.",
            "It then retrieves relevant internal source material, filters for stronger evidence, prefers current or authoritative references, and returns answers with citation context. For weak or missing evidence, the system can avoid over-answering and ask for clarification."
        ],
        shows: "This is enterprise retrieval treated as an operational system, not a novelty search box. The important design choices are citation governance, retrieval controls, source confidence, user feedback, and refusal behavior when the evidence is not strong enough.",
        matters: "Internal knowledge systems are only useful if people can trust them. By grounding answers in governed material and exposing where answers come from, organizations can make standards and procedures easier to use without losing control over quality or accountability.",
        profile: [
            "Technical organizations with standards, procedures, templates, and approval rules",
            "Teams that need quick answers without accepting unsupported model output",
            "Operational environments where incorrect guidance creates risk"
        ],
        constraints: [
            "Route only appropriate questions into the governed knowledge flow",
            "Prefer current and authoritative source material",
            "Expose citation context and evidence quality",
            "Refuse or clarify when evidence is weak"
        ],
        architecture: [
            "Semantic search over governed knowledge corpuses",
            "Structured knowledge relationships and document-version awareness",
            "Deterministic routing before retrieval",
            "Citation controls and evidence-quality checks",
            "Feedback and clarification paths for weak or missing evidence"
        ],
        cta: "Need internal knowledge that staff can actually trust?",
        inquiry: "Case Study: Governed Corporate Knowledge"
    },
    review: {
        title: "AI-Assisted Document Review and Comparison",
        outcome: "Evolving files translated into meaningful change summaries and focused review paths",
        context: [
            "Technical and commercial teams often need to compare evolving documents: draft agreements, specifications, procedures, spreadsheets, proposal language, and working files.",
            "Manual comparison can be slow, error-prone, and difficult to summarize for reviewers who only need to understand the meaningful changes."
        ],
        applied: [
            "Anubis Labs built an AI-assisted document review workflow that helps users compare versions, surface changes, summarize differences, and focus attention on areas that may require review.",
            "The system is designed to support human reviewers by organizing change information into clearer views, rather than replacing the reviewer's judgment.",
            "It can support side-by-side review, change summaries, risk-focused observations, and conversational exploration of document differences. The goal is to help teams understand what changed, why it may matter, and where they should look next."
        ],
        shows: "This case study shows how AI can be applied to document-heavy review work in a practical way. The value is not simply detecting text changes; it is helping users interpret those changes in context and move through review work with less friction.",
        matters: "Document review is a recurring cost inside technical organizations. By making differences easier to find, summarize, and discuss, teams can reduce review fatigue, catch important changes earlier, and keep human attention focused where it matters most.",
        profile: [
            "Technical, commercial, legal, and proposal reviewers",
            "Teams comparing specifications, procedures, spreadsheets, agreements, and working drafts",
            "Organizations with recurring review cycles and high reviewer fatigue"
        ],
        constraints: [
            "Assist human reviewers without replacing their judgment",
            "Separate meaningful changes from formatting or low-value noise",
            "Support risk-focused summaries and side-by-side review",
            "Make review findings easy to discuss and trace"
        ],
        architecture: [
            "Version comparison workflow for document-heavy files",
            "Change detection and summarization layer",
            "Risk-focused observation generation",
            "Side-by-side and conversational review surfaces",
            "Reviewer-first workflow design with human decision control"
        ],
        cta: "Need document review to move faster without losing judgment?",
        inquiry: "Case Study: Document Review and Comparison"
    }
}

function EnterpriseCaseStudy({ study }: { study: CaseStudy }) {
    return (
        <div className="w-full">
            <section className="container mx-auto px-4 pt-8 pb-24 lg:pt-16 lg:pb-32 max-w-4xl relative z-10">
                <div className="mb-8">
                    <Link to="/case-studies" className="text-primary hover:underline font-medium">&larr; Back to Case Studies</Link>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                    {study.title}
                </h1>
                <p className="text-2xl text-primary font-medium mb-12">Outcome: {study.outcome}</p>

                <div className="space-y-16">
                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        <div>
                            <h2 className="text-2xl font-bold border-b border-white/10 pb-2 mb-4">Context</h2>
                            {study.context.map((paragraph) => (
                                <p key={paragraph} className="text-muted-foreground leading-relaxed mb-4 last:mb-0">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                            <h2 className="text-xl font-bold mb-4">Client Profile</h2>
                            <ul className="space-y-2 text-muted-foreground text-sm">
                                {study.profile.map((item) => (
                                    <li key={item} className="flex gap-2 items-start">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold border-b border-white/10 pb-2 mb-6 text-foreground">How The Technology Is Applied</h2>
                        {study.applied.map((paragraph) => (
                            <p key={paragraph} className="text-muted-foreground leading-relaxed text-lg mb-4 last:mb-0">
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold border-b border-white/10 pb-2 mb-6 text-foreground">Constraints</h2>
                        <ul className="grid sm:grid-cols-2 gap-4 text-muted-foreground">
                            {study.constraints.map((item) => (
                                <li key={item} className="bg-background border border-white/5 p-4 rounded-lg">{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-card glass border border-white/5 p-6 rounded-xl">
                            <h2 className="text-2xl font-bold mb-4 text-foreground">What It Shows</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                {study.shows}
                            </p>
                        </div>
                        <div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
                            <h2 className="text-2xl font-bold mb-4 text-foreground">Why It Matters</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                {study.matters}
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold border-b border-white/10 pb-2 mb-4">Architecture Breakdown</h2>
                        <ul className="space-y-3 text-sm text-foreground bg-background border border-white/5 p-6 rounded-xl">
                            {study.architecture.map((item) => (
                                <li key={item} className="flex gap-2 items-center">
                                    <span className="text-primary shrink-0">&rarr;</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-24 pt-12 border-t border-white/5 text-center">
                    <h2 className="text-3xl font-bold mb-6">{study.cta}</h2>
                    <Button asChild size="lg" className="h-14 px-8 text-lg">
                        <Link to={`/contact?inquiry=${encodeURIComponent(study.inquiry)}`}>Request the full case study</Link>
                    </Button>
                </div>
            </section>
        </div>
    )
}

export function EnterprisePursuitIntelligenceCaseStudyPage() {
    return <EnterpriseCaseStudy study={cases.pursuit} />
}

export function EvidenceBackedStaffIntelligenceCaseStudyPage() {
    return <EnterpriseCaseStudy study={cases.staff} />
}

export function ProjectExperienceRetrievalCaseStudyPage() {
    return <EnterpriseCaseStudy study={cases.projects} />
}

export function GovernedCorporateKnowledgeAssistantCaseStudyPage() {
    return <EnterpriseCaseStudy study={cases.knowledge} />
}

export function AIAssistedDocumentReviewCaseStudyPage() {
    return <EnterpriseCaseStudy study={cases.review} />
}
