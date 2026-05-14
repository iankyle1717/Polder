import { useState } from "react";
import EMS from "../assets/EMS.png";

function Projects({ onOpenEMS }) {

  const [expanded, setExpanded] = useState(false);

  return (
    <div className="section">

      <div className="section-title">
        <h2>Projects</h2>
      </div>

      <div className="projects-grid">

        <div className="stack-card project-card">

          {/* CLICKABLE AREA */}
          <div onClick={onOpenEMS} style={{ cursor: "pointer" }}>

            <div className="project-header">

              <h3>Engineering Management System</h3>

              <span className="project-badge">
                Enterprise System
              </span>

            </div>

            <p className={`project-desc ${expanded ? "expanded" : ""}`}>

              EMS Web started from a simple observation inside engineering
              operations — too many critical processes were still dependent on
              paper forms, manual monitoring, scattered files, and delayed
              communication between departments.

              <br /><br />

              What began as a machine monitoring and registration tool gradually
              evolved into a full engineering management ecosystem designed to
              simplify daily operations, improve traceability, and modernize the
              workflow of the entire PE environment.

              <br /><br />

              One of the biggest challenges was visibility. Machine histories,
              preventive maintenance schedules, fabrication requests, and operator
              activities were difficult to track in real time.

              <br /><br />

              EMS Web was built to solve those operational gaps by creating a
              centralized digital platform where engineering teams could manage
              workflows in one place with better speed, transparency, and accuracy.

              <br /><br />

              The system introduced paperless fabrication requests, real-time
              machine monitoring, preventive maintenance scheduling, inventory
              tracking, department expense monitoring, operator logging, and
              engineering reporting tools.

              <br /><br />

              Today, EMS Web continues to serve as a centralized enterprise system
              supporting engineering productivity, operational visibility, and the
              company’s long-term paperless transformation goals.

            </p>

          </div>

          {/* READ MORE BUTTON */}
          <button
            className="read-more-btn"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Show Less" : "Read More"}
          </button>

          {/* FEATURES */}
          <div className="project-features">

            <span>Machine Monitoring</span>
            <span>Weekly Recording</span>
            <span>Trouble Handling</span>
            <span>Engineering Reports</span>
            <span>Fabrication Monitoring</span>
            <span>Department Expenses</span>
            <span>Task Management</span>
            <span>Stock Management</span>
            <span>Paperless Workflow</span>
            <span>Preventive Maintenance</span>
                <span>ETC.</span>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Projects;