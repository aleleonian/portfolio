import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Fragment } from 'react';
import { About } from "./Pages/About";

import './index.css'
import "nes.css/css/nes.min.css";

function App() {

  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route index element={<About />} />
          {/* <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="about" element={<About />} /> */}
          {/* <Route path="projects" element={<Projects />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App
