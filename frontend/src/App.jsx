import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Work from "./pages/Work";
import Play from "./pages/Play";
import About from "./pages/About";
import ProjectPage from "./pages/ProjectPage";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Work />} />
          <Route path="/play" element={<Play />} />
          <Route path="/about" element={<About />} />
          <Route path="/project/:projectId" element={<ProjectPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;