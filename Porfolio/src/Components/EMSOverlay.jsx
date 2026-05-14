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

    <h2>
      Engineering Management System
    </h2>

      <p>
        Enterprise-level engineering workflow platform
        designed for machine monitoring, preventive
        maintenance, inventory tracking, fabrication
        requests, reporting systems, and complete
        paperless operations across departments.
      </p>

      <button
        className="ems-close"
        onClick={onClose}
      >
        Close Project
      </button>

    </div>

      </div>
    </div>
  );
}

export default EMSOverlay;