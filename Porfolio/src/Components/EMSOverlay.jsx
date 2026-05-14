import EMS from "../assets/EMS.png";

function EMSOverlay({ show, onClose }) {
  if (!show) return null;

  return (
    <div className="ems-overlay" onClick={onClose}>

      <div className="ems-modal" onClick={(e) => e.stopPropagation()}>

        <div className="ems-image-wrapper">
          <img src={EMS} alt="EMS Project" />
        </div>

        <div className="ems-content">
          <h2>Engineering Management System</h2>

          <p>
            A full-scale enterprise system built for engineering workflow automation,
            machine monitoring, preventive maintenance, and paperless operations.
          </p>

          <div className="ems-tags">
            <span>Machine Monitoring</span>
            <span>Workflow Automation</span>
            <span>Reports</span>
            <span>Inventory</span>
          </div>

          <button className="ems-close" onClick={onClose}>
            Close
          </button>
        </div>

      </div>
    </div>
  );
}

export default EMSOverlay;