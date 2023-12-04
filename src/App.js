import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";


import { Index } from "./components/ui/major-components/Index";
// import { NotFound } from "./components/ui/major-components/extra-pages/404";

import "./components/fontawesomeIcons"

function App() {
  return (
      <Routes >
        {/* <Route path="*" element={<NotFound />} /> */}
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Index />} />
        </Route>    
      </Routes>
  );
}

export default App;
