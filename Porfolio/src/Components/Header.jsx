import { useEffect, useState } from "react";
import profile from "../assets/pc.jpg";
import profileShade from "../assets/pc-shades.png";

function Header() {
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
    <div className="top-section">
      <div className="profile-header">

        <div className="profile-left">

          <div className="profile-container">
            <img src={profile} className="profile-img" alt="profile" />
            <img src={profileShade} className="profile-shades" alt="shade" />
          </div>

          <div className="profile-info">
            <h1>Ian Kyle Felix. Maghinay</h1>
            <div className="role">System Developer • Web Developer</div>
            <div className="location">📍 Cabangan, Zambales</div>

            <div className="action-buttons">
              <button className="btn btn-dark">Contact Me</button>
              <button className="btn btn-light">View Full Details</button>
              <button className="btn btn-light">View Projects</button>
            </div>
          </div>

        </div>

        <div className="theme-switch" onClick={toggle}>
          <div className="switch-circle">
            <i className={`fa-solid ${dark ? "fa-sun" : "fa-moon"}`}></i>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Header;