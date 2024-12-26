import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";


import { Index } from "./components/ui/major-components/Index";
// import { NotFound } from "./components/ui/major-components/extra-pages/404";

import "./components/fontawesomeIcons"
import { Contact } from "./components/ui/major-components/Contact";
import { Blog } from "./components/ui/major-components/blogs/Blog";
import { About } from "./components/ui/major-components/About";
import { BlogDetail } from "./components/ui/major-components/project-blog/ProjectBlogDetail";
import { Portfolio } from "./components/ui/major-components/Portfoilo";
import { PortfoiloDetails } from "./components/ui/major-components/company-portfoilo/PortfoiloDetails";
import { FAQ } from "./components/ui/major-components/faqs/FAQ";
import { PrivacyPolicy } from "./components/ui/major-components/privacy-policy/PrivacyPolicy";
import { Services } from "./components/ui/major-components/services/Services";
import { ServicesIndex } from "./components/ui/major-components/services/Index";
import { WebDevelopment } from "./components/ui/major-components/services/WebDevelopment";
import { MobileAppDevelopment } from "./components/ui/major-components/services/MobileAppDevelopment";
import { CustomDevelopment } from "./components/ui/major-components/services/CustomDevelopment";
import { DevOps } from "./components/ui/major-components/services/DevOps";
import { ApiIntegration } from "./components/ui/major-components/services/ApiIntegration";
import { ArtificialIntelligence } from "./components/ui/major-components/services/ArtificialIntelligence";
import { DigitalTransformation } from "./components/ui/major-components/services/DigitalTransformation";
import { UIUXDesign } from "./components/ui/major-components/services/UiUxDesign";
import { CloudMigrationManagement } from "./components/ui/major-components/services/CloudMigrationManagement";
import { QualityAssurance } from "./components/ui/major-components/services/QualityAssurance";
import { MicrosoftDynamics365BusinessSolutions } from "./components/ui/major-components/services/MicrosoftDynamics365BusniessSolutions";


function App() {
  return (
      <Routes >
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Index />} />
          <Route  path="/contact-us" element={<Contact/>} />
          <Route path="/about-us" element={<About/>}/>
          <Route path="/case-studies" element={<Portfolio/>}/>
          <Route path="/services" element={<ServicesIndex/>}/>
          <Route path="/services/web-development" element={<WebDevelopment />}/>
          <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />}/>
          <Route path="/services/custom-development" element={<CustomDevelopment />}/>
          <Route path="/services/devops" element={<DevOps />}/>
          <Route path="/services/api-integration" element={<ApiIntegration />}/>
          <Route path="/services/artificial-intelligence" element={<ArtificialIntelligence />}/>
          <Route path="/services/digital-transformation" element={<DigitalTransformation />}/>
          <Route path="/services/ui-ux" element={<UIUXDesign />}/>
          <Route path="/services/cloud-migration-management" element={<CloudMigrationManagement />}/>
          <Route path="/services/quality-assurance" element={<QualityAssurance />}/>
          <Route path="/services/microsoft-dynamics-365-business-solutions" element={<MicrosoftDynamics365BusinessSolutions />}/>
          <Route path="/faq" element={<FAQ/>}/>
          <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
        </Route>    
      </Routes>
  );
}

export default App;
