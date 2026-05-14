import { useState } from "react";

import Header from "./Components/Header.jsx";
import About from "./Components/About.jsx";
import TechStack from "./Components/TechStack.jsx";
import Projects from "./Components/Projects.jsx";
import Sidebar from "./Components/Sidebar.jsx";
import Footer from "./Components/Footer.jsx";
import EMSOverlay from "./Components/EMSOverlay.jsx";

import "./App.css";

function App() {

  const [openEMS, setOpenEMS] = useState(false);

  return (
    <div className="portfolio">

      <Header onOpenEMS={() => setOpenEMS(true)} />

      <div className="content-grid">

        <div>
          <About />
          <TechStack />

          <Projects onOpenEMS={() => setOpenEMS(true)} />
        </div>

        <Sidebar />

      </div>

      <Footer />

      {/* GLOBAL EMS OVERLAY */}
      <EMSOverlay
        show={openEMS}
        onClose={() => setOpenEMS(false)}
      />

    </div>
  );
}

export default App;