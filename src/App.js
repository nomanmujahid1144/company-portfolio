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


function App() {
  return (
      <Routes >
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Index />} />
          <Route  path="/contact-us" element={<Contact/>} />
          <Route path="/about-us" element={<About/>}/>
          <Route path="/blogdetail" element={<BlogDetail/>} />
          <Route path="/case-studies" element={<Portfolio/>}/>
          <Route path="/faq" element={<FAQ/>}/>
          <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
        </Route>    
      </Routes>
  );
}

export default App;
