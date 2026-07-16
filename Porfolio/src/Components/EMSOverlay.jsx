import EMS from "../assets/EMS.png";

function EMSOverlay({ show, onClose }) {
  if (!show) return null;

  return (
    <div className="modal-overlay active" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-hero">
          <img src={EMS} alt="EMS Project" className="modal-img" />
        </div>
        <div className="modal-body">
          <h2>Engineering Management System</h2>
          <p>
            A high-performance enterprise web platform engineered for manufacturing operations,
            structural workflow automation, and real-time production tracking. Built to comprehensively
            replace legacy documentation with digital processes.
          </p>
          <h3 className="modal-subtitle">Core Implementations:</h3>
          <div className="project-features" style={{ padding: "0 0 24px" }}>
            <span className="feature-tag">Machine Monitoring</span>
            <span className="feature-tag">Engineering Reports</span>
            <span className="feature-tag">Inventory Tracking</span>
            <span className="feature-tag">Weekly Recording</span>
            <span className="feature-tag">Fabrication Monitoring</span>
            <span className="feature-tag">Trouble Handling</span>
            <span className="feature-tag">Preventive Maintenance</span>
            <span className="feature-tag">Paperless Approval</span>
          </div>
          <button className="modal-close" onClick={onClose}>Close Project</button>
        </div>
      </div>
    </div>
  );
}

export default EMSOverlay;