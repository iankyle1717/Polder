import { useEffect, useState } from "react";

function NavBar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "stack", "projects", "experience", "certs"];
      let current = "home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop - 200 <= window.scrollY) {
          current = id;
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "stack", label: "Stack" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "certs", label: "Certs" }
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="nav-bar">
      {links.map(link => (
        <a
          key={link.id}
          href={`#${link.id}`}
          className={active === link.id ? "active" : ""}
          onClick={(e) => { e.preventDefault(); scrollTo(link.id); }}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}

export default NavBar;