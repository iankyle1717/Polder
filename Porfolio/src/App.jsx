import Header from "./Components/Header.jsx";
import About from "./Components/About.jsx";
import TechStack from "./Components/TechStack.jsx";
import Projects from "./Components/Projects.jsx";
import Sidebar from "./Components/Sidebar.jsx";
import Footer from "./Components/Footer.jsx";
import "./App.css";

function App() {
  return (
    <div className="portfolio">
      <Header />

      <div className="content-grid">
        <div>
          <About />
          <TechStack />
          <Projects />
        </div>

        <Sidebar />
      </div>

      <Footer />
    </div>
  );
}

export default App;