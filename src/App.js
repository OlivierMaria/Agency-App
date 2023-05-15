import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Works from "./pages/Works.js";
import StudyCasePage from "./pages/StudyCasePage.js";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/works/:client" element={<StudyCasePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
