function Sidebar() {
  return (
    <div className="sidebar">

      {/* EXPERIENCE */}

      <div className="sidebar-card">

        <h3>Experience</h3>

        <div className="timeline">

          <div className="timeline-item">
            <h4>
              Production Engineer / Full-Stack System Developer
            </h4>

            <span>
              Sanyo Denki Philippines
            </span>
          </div>

          <div className="timeline-item">
            <h4>
              Computer Programming Teacher
            </h4>

            <span>
              MACSAT Inc.
            </span>
          </div>

          <div className="timeline-item">
            <h4>
              Guest Speaker
            </h4>

            <span>
              PRMSU Iba Campus
            </span>
          </div>

        </div>

      </div>

      {/* ACHIEVEMENTS */}

      <div className="sidebar-card">

        <h3>Achievements</h3>

        <div className="timeline">

          <div className="timeline-item">

            <h4>
              Technical Speaker
            </h4>

            <span>
              Conducted seminar on C# and CRUD operations
              for students.
            </span>

          </div>

          <div className="timeline-item">

            <h4>
              Paperless Workflow System
            </h4>

            <span>
              Successfully digitized engineering operations
              using EMS platform.
            </span>

          </div>

        </div>

      </div>

      {/* CONTACT */}

      <div className="sidebar-card">

        <h3>Contact</h3>

        <div className="contact-list">

          <div className="contact-item">

            <label>Email</label>

            <br />

            <a href="mailto:iankyle1717@gmail.com">
              iankyle1717@gmail.com
            </a>

          </div>

          <div className="contact-item">
          
            <label>Phone</label>

               <br />

            <a href="tel:09695202982">
              09695202982
            </a>

          </div>

          <div className="contact-item">

            <label>Location</label>
                 <br />
                 
            <span>
              Cabangan, Zambales
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Sidebar;