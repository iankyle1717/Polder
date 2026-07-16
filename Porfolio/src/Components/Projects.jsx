import { useState } from "react";

function Projects({ onOpenEMS }) {
  const [expanded, setExpanded] = useState({});

  const toggle = (id) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const projects = [
    {
      id: "ems",
      title: "Engineering Management System",
      badge: "Enterprise",
      desc: `EMS Web started from a simple observation inside engineering operations — too many critical processes were still dependent on paper forms, manual monitoring, scattered files, and delayed communication between departments. What began as a machine monitoring and registration tool gradually evolved into a full engineering management ecosystem designed to simplify daily operations, improve traceability, and modernize the workflow of the entire PE environment.

One of the biggest challenges was visibility. Machine histories, preventive maintenance schedules, fabrication requests, and operator activities were difficult to track in real time. EMS Web was built to solve those operational gaps by creating a centralized digital platform where engineering teams could manage workflows in one place with better speed, transparency, and accuracy.

The system introduced paperless fabrication requests, real-time machine monitoring, preventive maintenance scheduling, inventory tracking, department expense monitoring, operator logging, and engineering reporting tools. Today, EMS Web continues to serve as a centralized enterprise system supporting engineering productivity, operational visibility, and the company's long-term paperless transformation goals.`,
      features: ["Machine Monitoring", "Weekly Recording", "Trouble Handling", "Engineering Reports", "Fabrication Monitoring", "Department Expenses", "Task Management", "Stock Management", "Paperless Workflow", "Preventive Maintenance"],
      onClick: onOpenEMS
    },
    {
      id: "jig",
      title: "Automatic Stamping Machine Jig Checker",
      badge: "Manufacturing",
      desc: "A customized manufacturing validation web application developed to check and audit automatic stamping machine jigs. Built to mitigate operational risks by ensuring jig compliance before production runs, reducing downtime and quality defects.",
      features: ["Jig Validation", "Quality Audit", "Manufacturing", "Web Application"]
    },
    {
      id: "approval",
      title: "Engineering Documents Online Approval",
      badge: "Workflow",
      desc: "A modern automation platform designed to streamline digital review cycles, enforce strict internal approval routing, and enable secure electronic stamping. Replaced manual document approval processes with a fully paperless digital workflow.",
      features: ["Digital Approval", "Electronic Stamping", "Routing", "Paperless"]
    },
    {
      id: "acts",
      title: "Acts Church Management System",
      badge: "Web App",
      desc: "A modern web application designed for church management, streamlining administrative tasks, member tracking, and event coordination. Built with a focus on usability and clean design for non-technical users.",
      features: ["Member Management", "Event Coordination", "Admin Dashboard", "Modern UI"],
      link: "https://modernacts.vercel.app"
    }
  ];

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header reveal">
          <h2>Featured Projects</h2>
          <p>Enterprise systems and web applications I've built</p>
          <div className="section-line"></div>
        </div>
        <div className="projects-grid">
          {projects.map((project, i) => (
            <div className="project-card reveal" key={project.id} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="project-header" onClick={project.onClick} style={project.onClick ? { cursor: "pointer" } : {}}>
                <div className="project-title-row">
                  <h3>{project.title}</h3>
                  <span className="project-badge">{project.badge}</span>
                </div>
                <p className={`project-desc ${expanded[project.id] ? "expanded" : "collapsed"}`}>
                  {project.desc}
                </p>
              </div>
              <button className="read-more-btn" onClick={() => toggle(project.id)}>
                <span>{expanded[project.id] ? "Show Less" : "Read More"}</span>
                <i className={`fa-solid ${expanded[project.id] ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
              </button>
              <div className="project-features">
                {project.features.map(f => (
                  <span className="feature-tag" key={f}>{f}</span>
                ))}
              </div>
              {project.link && (
                <div className="project-features" style={{ paddingTop: 0 }}>
                  <a href={project.link} target="_blank" rel="noopener" className="project-link">
                    <i className="fa-solid fa-external-link-alt"></i> Live Demo
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;