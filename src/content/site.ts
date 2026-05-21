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
        title: "EPCM Standards Assistant",
        outcome: "Minutes → seconds on standards and project execution answers",
        details: "A governed enterprise knowledge platform that unifies standards search, citations, and execution workflows under RBAC.",
        bullets: [
            "Search across 10,000+ standards and internal procedures with RBAC enforced retrieval",
            "Explicit citation chains for every answer, plus traceable context used to generate it",
            "Adoption-ready UX: standards Q&A plus workflows that plug into execution (not just search)"
        ],
        tags: ["Knowledge Graph", "RBAC", "Citations", "Auditability"],
        href: "/case-studies/epcm-standards-assistant"
    },
    {
        title: "Municipal Policy Automation",
        outcome: "Audit-ready traces for every decision in the pipeline",
        details: "Automated preliminary permit screening with rules-first checks, evidence capture, and policy-gated escalation.",
        bullets: [
            "Deterministic checks first, AI only when ambiguity remains",
            "Immutable decision log that records inputs, rules triggered, and outcomes",
            "Reduced back-and-forth by returning “why” and “what to fix” with every result"
        ],
        tags: ["Compliance", "Evidence Logs", "Policy Gates"],
        href: "/case-studies/municipal-policy-automation"
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
    }
];
