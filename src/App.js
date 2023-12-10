import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";


import { Index } from "./components/ui/major-components/Index";
// import { NotFound } from "./components/ui/major-components/extra-pages/404";

import "./components/fontawesomeIcons"
import { Contact } from "./components/ui/major-components/Contact";
import { Blog } from "./components/ui/major-components/Blog";
import { About } from "./components/ui/major-components/About";
import { BlogDetail } from "./components/ui/major-components/project-blog/ProjectBlogDetail";
import { Portfolio } from "./components/ui/major-components/Portfoilo";
import { PortfoiloDetails } from "./components/ui/major-components/company-portfoilo/PortfoiloDetails";


function App() {
  return (
      <Routes >
        {/* <Route path="*" element={<NotFound />} /> */}
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Index />} />
          <Route  path="/contact" element={<Contact/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/about" element={<About/>}/>
          <Route path="/blogdetail" element={<BlogDetail/>} />
          <Route path="/portfoilo" element={<Portfolio/>}/>
          <Route path="/portfoilodetail" element={<PortfoiloDetails/>}/>
          
        </Route>    
      </Routes>
  );
}

export default App;
