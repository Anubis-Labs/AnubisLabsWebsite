import { BookOpen, Lock, Shield, Settings, Server, Zap, Terminal, Archive } from "lucide-react";

export const nav = [
    { label: "Home", href: "/" },
    { label: "Solutions", href: "/solutions" },
    { label: "Services", href: "/services" },
    { label: "Security", href: "/security" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Process", href: "/process" },
    { label: "Contact", href: "?contact=true" },
];

export const footerNav = [
    { label: "About", href: "/about" },
    { label: "Resources", href: "/resources" },
    { label: "FAQ", href: "/faq" },
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
];

export const solutions = [
    {
        title: "Policy-Gated Agent Runtime",
        tagline: "Automation with approvals, budgets, and traceability.",
        href: "/solutions/agent-runtime",
        whoItIsFor: "Security-sensitive teams, Ops teams automating repeat workflows",
        details: [
            "Tool execution with policy gating",
            "Approval workflows for high-risk steps",
            "Budget controls / rate limiting",
            "Forensic run logs and artifacts"
        ],
        icon: Terminal
    },
    {
        title: "Enterprise Knowledge Platform",
        tagline: "Governed search + Q&A with citation chains.",
        href: "/solutions/knowledge-platform",
        whoItIsFor: "EPCM, engineering standards, project execution teams",
        details: [
            "Governed search + Q&A",
            "Citation chains",
            "RBAC enforced retrieval",
            "Knowledge graph enrichment"
        ],
        icon: Settings
    },
    {
        title: "Compliance Intelligence",
        tagline: "Deterministic checks and AI for ambiguity.",
        href: "/solutions/compliance-intelligence",
        whoItIsFor: "Regulated environments, legal, QA",
        details: [
            "Deterministic checks",
            "Evidence capture",
            "Risk scoring",
            "Jurisdiction/policy awareness"
        ],
        icon: BookOpen
    }
];

export const services = [
    {
        title: "Pilot (1–2 weeks)",
        details: [
            "Scope & architecture",
            "Risk map",
            "Prototype implementation",
        ],
        outcomes: "Tangible MVP",
        icon: Zap
    },
    {
        title: "Build + Harden (4–8 weeks)",
        details: [
            "Productionization",
            "Security baseline",
            "Evaluation & monitoring",
        ],
        outcomes: "Audit-ready AI",
        icon: Shield
    },
    {
        title: "Security/Architecture Review",
        details: [
            "Threat model",
            "Controls mapping",
            "Rollout plan",
        ],
        outcomes: "Clear roadmap",
        icon: Settings
    }
];

export const securityPillars = [
    {
        title: "Fail-closed by default",
        description: "Systems deny actions when confidence is low or policies block.",
        icon: Lock
    },
    {
        title: "Forensic Auditability",
        description: "Immutable logs of inputs, context, and generated outputs.",
        icon: Archive
    },
    {
        title: "Deployment flexibility",
        description: "Run in your VPC or entirely offline with local LLMs.",
        icon: Server
    }
];

export const caseStudies = [
    {
        title: "Enterprise Pursuit Intelligence",
        outcome: "Complex bid packages -> structured pursuit requirements, risks, milestones, and source-backed answers",
        details: "AI-assisted document intelligence for classifying multi-file RFP packages, extracting obligations, and turning pursuit material into usable proposal workflow artifacts.",
        bullets: [
            "Classifies specifications, schedules, forms, drawings, legal language, constraints, and supporting material by business relevance",
            "Extracts requirements, milestones, scope items, risks, interfaces, constraints, and compliance references",
            "Grounded Q&A returns answers with references back to source documents, pages, or content segments where available"
        ],
        tags: ["RFPs", "Retrieval", "Traceability", "Workflows"],
        href: "/case-studies/enterprise-pursuit-intelligence"
    },
    {
        title: "Evidence-Backed Staff Intelligence",
        outcome: "Scattered staff evidence -> reviewable proposal-ready expertise signals",
        details: "A governed staff intelligence layer that combines resumes, questionnaire responses, project history, deliverable evidence, and curated narratives into defensible profile recommendations.",
        bullets: [
            "Separates authoritative business data, curated profile data, source-resume evidence, and AI-derived suggestions",
            "Surfaces skills, domains, project exposure, client experience, deliverables, leadership indicators, and proposal proof points",
            "Keeps recommendations reviewable by showing why a person or profile is being suggested"
        ],
        tags: ["Staffing", "Evidence", "Profiles", "Governance"],
        href: "/case-studies/evidence-backed-staff-intelligence"
    },
    {
        title: "Project Experience Retrieval",
        outcome: "Institutional project memory -> searchable business development evidence",
        details: "A project evidence layer combining structured portfolio filters with semantic search over project narratives for faster pursuit research and stronger proof points.",
        bullets: [
            "Search by client, market, phase, location, project type, technical scope, challenges, and delivered value",
            "Retrieves the right evidence inside each project, not just the right project record",
            "Helps teams reuse prior work without inventing claims or losing human review"
        ],
        tags: ["Business Development", "Semantic Search", "Evidence", "Proposals"],
        href: "/case-studies/project-experience-retrieval"
    },
    {
        title: "Governed Corporate Knowledge Assistant",
        outcome: "Distributed standards and procedures -> cited, governed answers staff can trust",
        details: "Enterprise retrieval built around semantic search, structured knowledge relationships, deterministic routing, citation controls, and evidence-quality checks.",
        bullets: [
            "Routes questions into the governed workflow before retrieval, instead of sending everything to a generic model",
            "Prefers current and authoritative references with citation context and document-version awareness",
            "Avoids over-answering when evidence is weak, missing, or ambiguous"
        ],
        tags: ["RAG", "Citations", "Governance", "Knowledge Graph"],
        href: "/case-studies/governed-corporate-knowledge-assistant"
    },
    {
        title: "AI-Assisted Document Review",
        outcome: "Evolving documents -> focused change summaries and review-ready observations",
        details: "A practical document review workflow that helps users compare versions, surface meaningful changes, and focus attention on areas that may require review.",
        bullets: [
            "Supports side-by-side review, change summaries, risk-focused observations, and conversational exploration",
            "Organizes change information into clearer views without replacing reviewer judgment",
            "Helps teams understand what changed, why it may matter, and where to look next"
        ],
        tags: ["Document Review", "Comparison", "Risk", "Workflow"],
        href: "/case-studies/ai-assisted-document-review"
    },
    {
        title: "Air-Gapped Sandbox",
        outcome: "Deployable in VPC or fully offline, zero cloud dependency",
        details: "A hardened agent runtime for restricted workloads with approvals, budgets, and sandboxed tool execution.",
        bullets: [
            "Fully offline runtime with strict egress and allowlisted integrations (when permitted)",
            "Approval gates for high-risk actions and auditable tool calls",
            "Predictable usage controls with budgets and rate limits"
        ],
        tags: ["Local Models", "Air-gapped", "Approvals", "Sandbox"],
        href: "/case-studies/air-gapped-sandbox"
    },
    {
        title: "Industrial Visual Delivery Platform",
        outcome: "CAD/BIM screenshots -> decision-grade renders, videos, and project deliverables",
        details: "A production AI workflow platform for turning technical project visuals into polished client-facing assets without losing geometry, workspace controls, or delivery traceability.",
        bullets: [
            "Orb-based render intake with preflight validation, idempotent uploads, workspace scoping, and structured error handling",
            "Project-aware visual history: anchor views, additional views, revisions, masked edits, downloads, and delivery links",
            "Industrial delivery layer spanning construction sequences, flythrough assembly, CAD plugins, desktop studio tooling, and branded artifacts"
        ],
        tags: ["Agent", "Cloud", "Industrial", "Delivery"],
        href: "/case-studies/industrial-visual-delivery-platform"
    },
    {
        title: "Early-Language iPad Companion",
        outcome: "A local-first speech and communication app for toddler-scale interaction",
        details: "A native iPad companion combining AAC-style cards, parent-recorded voice, phrase ladders, routines, progress signals, and play-based speech practice in a child-safe interface.",
        bullets: [
            "Toddler-readable world navigation with giant tap targets, calm visuals, and parent controls gated away from kid mode",
            "Local-first media layer for photos, recordings, bundled voice, system TTS fallback, routines, and card grids",
            "Speech-growth loop spanning AAC cards, phrase ladders, routine boards, progress logs, weekly digests, and play activities"
        ],
        tags: ["Offline", "SwiftUI", "Privacy", "Family"],
        href: "/case-studies/early-language-ipad-companion"
    },
    {
        title: "Real-Life Mandarin Learning App",
        outcome: "Offline-first spoken-language coaching with guided practice, review, and real-world conversation flows",
        details: "A mobile learning product that turns beginner Mandarin practice into a calm daily habit built around short lessons, native audio, forgiving speech checks, review gates, and practical situations.",
        bullets: [
            "Atlas model organizes content by real-life use cases instead of dumping a curriculum at the learner",
            "Offline Android spine with packaged content, audio assets, Room persistence, review state, rewards, analytics, and resume cursors",
            "Speech practice includes partial-result fallback, no-speech recovery, unavailable-recognizer handling, duplicate-start protection, and an escape path"
        ],
        tags: ["Android", "Offline", "Speech", "Learning"],
        href: "/case-studies/real-life-mandarin-learning-app"
    }
];
