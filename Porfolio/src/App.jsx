import { useEffect, useState } from "react";
import NavBar from "./Components/NavBar.jsx";
import Header from "./Components/Header.jsx";
import About from "./Components/About.jsx";
import TechStack from "./Components/TechStack.jsx";
import Projects from "./Components/Projects.jsx";
import Experience from "./Components/Experience.jsx";
import Certifications from "./Components/Certifications.jsx";
import Footer from "./Components/Footer.jsx";
import EMSOverlay from "./Components/EMSOverlay.jsx";

function App() {
  const [showEMS, setShowEMS] = useState(false);

  // Scroll reveal — replaces the old vanilla JS IntersectionObserver
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <NavBar />
      <Header onOpenEMS={() => setShowEMS(true)} />
      <About />
      <TechStack />
      <Projects onOpenEMS={() => setShowEMS(true)} />
      <Experience />
      <Certifications />
      <Footer />
      <EMSOverlay show={showEMS} onClose={() => setShowEMS(false)} />
    </>
  );
}

export default App;