import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import { HomePage } from "../pages/HomePage";
import { SecurityPage } from "../pages/SecurityPage";
import { CaseStudiesPage } from "../pages/CaseStudiesPage";
import { ServicesPage } from "../pages/ServicesPage";
import { ProcessPage } from "../pages/ProcessPage";
import { AboutPage } from "../pages/AboutPage";
import { PrivacyPage } from "../pages/PrivacyPage";
import { TermsPage } from "../pages/TermsPage";
import { ContactPage } from "../pages/ContactPage";
import { SolutionsPage } from "../pages/SolutionsPage";
import { PrimitivesSpecPage } from "../pages/PrimitivesSpecPage";

import { AgentRuntimePage } from "../pages/solutions/AgentRuntimePage";
import { KnowledgePlatformPage } from "../pages/solutions/KnowledgePlatformPage";
import { ComplianceIntelligencePage } from "../pages/solutions/ComplianceIntelligencePage";

import { MunicipalCaseStudyPage } from "../pages/case-studies/MunicipalCaseStudyPage";
import { AirGappedCaseStudyPage } from "../pages/case-studies/AirGappedCaseStudyPage";
import { IndustrialVisualDeliveryCaseStudyPage } from "../pages/case-studies/IndustrialVisualDeliveryCaseStudyPage";
import { EarlyLanguageIPadCompanionCaseStudyPage } from "../pages/case-studies/EarlyLanguageIPadCompanionCaseStudyPage";
import { RealLifeMandarinLearningCaseStudyPage } from "../pages/case-studies/RealLifeMandarinLearningCaseStudyPage";
import {
    AIAssistedDocumentReviewCaseStudyPage,
    EnterprisePursuitIntelligenceCaseStudyPage,
    EvidenceBackedStaffIntelligenceCaseStudyPage,
    GovernedCorporateKnowledgeAssistantCaseStudyPage,
    ProjectExperienceRetrievalCaseStudyPage,
} from "../pages/case-studies/EnterpriseCaseStudyPages";

function ScrollToTop() {
    const { pathname, search } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, [pathname, search]);

    return null;
}

export function App() {
    return (
        <Router>
            <ScrollToTop />
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/solutions" element={<SolutionsPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/security" element={<SecurityPage />} />
                    <Route path="/case-studies" element={<CaseStudiesPage />} />
                    <Route path="/process" element={<ProcessPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/privacy" element={<PrivacyPage />} />
                    <Route path="/terms" element={<TermsPage />} />
                    <Route path="/ui-primitives" element={<PrimitivesSpecPage />} />

                    {/* Solution Detail Pages */}
                    <Route path="/solutions/agent-runtime" element={<AgentRuntimePage />} />
                    <Route path="/solutions/knowledge-platform" element={<KnowledgePlatformPage />} />
                    <Route path="/solutions/compliance-intelligence" element={<ComplianceIntelligencePage />} />

                    {/* Case Study Detail Pages */}
                    <Route path="/case-studies/enterprise-pursuit-intelligence" element={<EnterprisePursuitIntelligenceCaseStudyPage />} />
                    <Route path="/case-studies/evidence-backed-staff-intelligence" element={<EvidenceBackedStaffIntelligenceCaseStudyPage />} />
                    <Route path="/case-studies/project-experience-retrieval" element={<ProjectExperienceRetrievalCaseStudyPage />} />
                    <Route path="/case-studies/governed-corporate-knowledge-assistant" element={<GovernedCorporateKnowledgeAssistantCaseStudyPage />} />
                    <Route path="/case-studies/ai-assisted-document-review" element={<AIAssistedDocumentReviewCaseStudyPage />} />
                    <Route path="/case-studies/epcm-standards-assistant" element={<GovernedCorporateKnowledgeAssistantCaseStudyPage />} />
                    <Route path="/case-studies/permit-intelligence-platform" element={<MunicipalCaseStudyPage />} />
                    <Route path="/case-studies/air-gapped-sandbox" element={<AirGappedCaseStudyPage />} />
                    <Route path="/case-studies/industrial-visual-delivery-platform" element={<IndustrialVisualDeliveryCaseStudyPage />} />
                    <Route path="/case-studies/early-language-ipad-companion" element={<EarlyLanguageIPadCompanionCaseStudyPage />} />
                    <Route path="/case-studies/real-life-mandarin-learning-app" element={<RealLifeMandarinLearningCaseStudyPage />} />
                </Routes>
            </Layout>
        </Router>
    );
}
