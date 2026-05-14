import { useState } from "react";
import EMS from "../assets/EMS.png";
import EMSOverlay from "./EMSOverlay";

function Projects() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <div className="section">

      <div className="section-title">
        <h2>Projects</h2>
      </div>

      <div className="projects-grid">

        <div className="stack-card project-card" onClick={handleClick}>

          <div className="project-header">
            <h3>Engineering Management System</h3>

            <span className="project-badge">
              Enterprise System
            </span>
          </div>

          <p className="project-desc">
            EMS Web is designed to support engineering and production improvements across the organization. It provides a centralized platform for machine registration, monitoring, and preventive maintenance scheduling. The system enhances transparency by logging operator actions and ensuring traceability of every workflow. EMS Web also includes additional tools and modules that improve operational efficiency, collaboration, and paperless workflow management across departments.
          </p>

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
            <span>Fabrication Requests</span>
            <span>Preventive Maintenance</span>
            <span>Inventory Tracking</span>
            <span>Operator Logs</span>
            <span>Workflow Automation</span>
            <span>Production Monitoring</span>
            <span>Data Analytics</span>
            <span>Reporting System</span>
            <span>Department Management</span>
            <span>Machine Registration</span>
            <span>Etc.</span>

          </div>

        </div>

      </div>

      {/* FIXED: USE EMSOverlay */}
      <EMSOverlay show={open} onClose={() => setOpen(false)} />

    </div>
  );
}

export default Projects;
