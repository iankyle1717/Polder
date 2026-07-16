import { useEffect, useState } from "react";
import profile from "../assets/pc.jpg";
import profileShade from "../assets/pc-shades.png";

function Header({ onOpenEMS }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.body.classList.add("dark-mode");
      setDark(true);
    }
  }, []);

  const toggle = () => {
    const newMode = !dark;
    setDark(newMode);
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-left">
            <div className="hero-badge">
              <span className="dot"></span>
              Available for opportunities
            </div>
            <h1>
              Ian Kyle<br />
              <span className="highlight">Felix Maghinay</span>
            </h1>
            <div className="hero-role">System Developer &middot; Web Developer</div>
            <div className="hero-location">
              <i className="fa-solid fa-location-dot"></i>
              Cabangan, Zambales, Philippines
            </div>
            <div className="hero-actions">
              <a href="mailto:iankyle1717@gmail.com" className="btn btn-primary">
                <i className="fa-solid fa-envelope"></i> Contact Me
              </a>
              <a href="/Ian_Kyle_Maghinay_CV.pdf" download className="btn btn-outline">
                <i className="fa-solid fa-download"></i> Download CV
              </a>
              <button className="btn btn-outline" onClick={onOpenEMS}>
                <i className="fa-solid fa-folder-open"></i> View Projects
              </button>
            </div>
            <div className="hero-socials">
              <a href="https://github.com/" target="_blank" rel="noopener" aria-label="GitHub">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="https://www.facebook.com/Ian%20Kyle%20Felix%20Maghinay" target="_blank" rel="noopener" aria-label="Facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/kyleeeese" target="_blank" rel="noopener" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className="hero-right">
            <div className="profile-frame">
             <img src={dark ? profileShade : profile} />
            </div>
            <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme">
              <i className={`fa-solid ${dark ? "fa-sun" : "fa-moon"}`}></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;