import { useState, useEffect } from "react";
import Header from "./Components/Header.jsx";
import About from "./Components/About.jsx";
import TechStack from "./Components/TechStack.jsx";
import Projects from "./Components/Projects.jsx";
import Experience from "./Components/Experience.jsx";
import Certifications from "./Components/Certifications.jsx";
import Footer from "./Components/Footer.jsx";
import EMSOverlay from "./Components/EMSOverlay.jsx";
import NavBar from "./Components/NavBar.jsx";
import "./App.css";

function App() {
  const [openEMS, setOpenEMS] = useState(false);

  return (
    <div className="portfolio">
      <NavBar />
      <Header onOpenEMS={() => setOpenEMS(true)} />

      <main>
        <About />
        <TechStack />
        <Projects onOpenEMS={() => setOpenEMS(true)} />
        <Experience />
        <Certifications />
      </main>

      <Footer />

      <EMSOverlay
        show={openEMS}
        onClose={() => setOpenEMS(false)}
      />
    </div>
  );
}

export default App;