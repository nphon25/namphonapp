import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Work from "./pages/Work";
// import Play from "./pages/Play";
import About from "./pages/About";
// import Resume from "./pages/Resume";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Work />} />
          {/* <Route path="/play" element={<Play />} /> */}
          <Route path="/about" element={<About />} />
          {/* <Route path="/resume" element={<Resume />} /> */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;