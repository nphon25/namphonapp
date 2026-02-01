import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Work from "./pages/Work";
import Archive from "./pages/Archive";
import About from "./pages/About";
import ProjectPage from "./pages/ProjectPage";

// Import styles
import "./styles/global.css";
import "./styles/Footer.css"; 

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Work />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/about" element={<About />} />
          <Route path="/project/:projectId" element={<ProjectPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;