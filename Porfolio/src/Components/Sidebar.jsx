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
          <br />

          <div className="timeline-item">
            <h4>
              Computer Programming Teacher
            </h4>

            <span>
              MACSAT Inc.
            </span>
          </div>
          <br />
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
     <br /> 
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
      
         <br /> 

      {/* CONTACT */}

 <div className="sidebar-card">

  <h3>Contact</h3>

  <div className="contact-list">

    {/* EMAIL */}
    <div className="contact-item">
      <label>Email</label>
      <br />
      <a href="mailto:iankyle1717@gmail.com">
        iankyle1717@gmail.com
      </a>
    </div>

    {/* PHONE */}
    <div className="contact-item">
      <label>Phone</label>
      <br />
      <a href="tel:09695202982">
        09695202982
      </a>
    </div>

    {/* LOCATION */}
    <div className="contact-item">
      <label>Location</label>
      <br />
      <span>Cabangan, Zambales</span>
    </div>

    {/* SOCIAL ICONS */}
    <div className="contact-item">
      <label>Social Links</label>

      <div className="social-icons">

        {/* FACEBOOK */}
        <a
          href="https://www.facebook.com/Ian Kyle Felix Maghinay"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icons/facebook.svg" alt="Facebook" />
        </a>

        {/* INSTAGRAM */}
        <a
          href="https://www.instagram.com/kyleeeese"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icons/instagram.svg" alt="Instagram" />
        </a>

        {/* LINKEDIN (using Gmail as your LinkedIn identity) */}
        <a
          href="mailto:iankyle1717@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icons/linkedin.svg" alt="LinkedIn" />
        </a>

      </div>
    </div>

  </div>

</div>


    </div>
  );
}

export default Sidebar;