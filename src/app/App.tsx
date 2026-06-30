import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

import { EPCMCastStudyPage } from "../pages/case-studies/EPCMCaseStudyPage";
import { MunicipalCaseStudyPage } from "../pages/case-studies/MunicipalCaseStudyPage";
import { AirGappedCaseStudyPage } from "../pages/case-studies/AirGappedCaseStudyPage";

export function App() {
    return (
        <Router>
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
                    <Route path="/case-studies/epcm-standards-assistant" element={<EPCMCastStudyPage />} />
                    <Route path="/case-studies/municipal-policy-automation" element={<MunicipalCaseStudyPage />} />
                    <Route path="/case-studies/air-gapped-sandbox" element={<AirGappedCaseStudyPage />} />
                </Routes>
            </Layout>
        </Router>
    );
}
