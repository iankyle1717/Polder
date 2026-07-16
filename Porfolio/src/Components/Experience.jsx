function Experience() {
  const experiences = [
    {
      title: "Production Engineer / Full-Stack System Developer",
      company: "Sanyo Denki Philippines",
      period: "Subic, Zambales · 2025 – 2026",
      desc: "Developed and maintained complex enterprise workflow systems and custom machine monitoring applications. Built and deployed an end-to-end Engineering Management System (EMS) resulting in completely paperless operations and accelerated automated workflows. Optimized enterprise SQL Server databases, architecture, stored procedures, and production reporting."
    },
    {
      title: "Computer Programming Teacher",
      company: "MACSAT Inc.",
      period: "Zambales, Philippines · 2024",
      desc: "Instructed students in structural programming fundamentals, object-oriented C# concepts, advanced CRUD operations, and foundational web development."
    },
    {
      title: "Guest Speaker",
      company: "PRMSU Iba Campus",
      period: "Iba, Zambales · 2025",
      desc: "Conducted a comprehensive technical seminar focusing on robust C# enterprise development, clean data architectures, and optimized CRUD operations for computing students."
    }
  ];

  const education = [
    {
      title: "BS in Computer Science",
      company: "President Ramon Magsaysay State University (PRMSU)",
      period: "Main Campus, Iba, Zambales · 2020 – 2024"
    },
    {
      title: "Technical & Administrative Support Specialist (Practicum)",
      company: "PRMSU Operations Division",
      period: "Iba, Zambales · June 2023 – August 2023",
      desc: "Maintained enterprise internal systems, troubleshot high-availability computing infrastructures, and processed strategic institutional data."
    }
  ];

  return (
    <section className="section section-alt" id="experience">
      <div className="container">
        <div className="section-header reveal">
          <h2>Experience & Background</h2>
          <p>Professional journey and accomplishments</p>
          <div className="section-line"></div>
        </div>
        <div className="two-col">
          <div>
            <h3 className="col-title"><i className="fa-solid fa-briefcase"></i> Work Experience</h3>
            {experiences.map((exp, i) => (
              <div className="timeline-card reveal" key={i}>
                <h4>{exp.title}</h4>
                <div className="company">{exp.company}</div>
                <div className="period">{exp.period}</div>
                {exp.desc && <div className="desc">{exp.desc}</div>}
              </div>
            ))}

            <h3 className="col-title"><i className="fa-solid fa-graduation-cap"></i> Education</h3>
            {education.map((edu, i) => (
              <div className="timeline-card reveal" key={i}>
                <h4>{edu.title}</h4>
                <div className="company">{edu.company}</div>
                <div className="period">{edu.period}</div>
                {edu.desc && <div className="desc">{edu.desc}</div>}
              </div>
            ))}
          </div>

          <div>
            <div className="sidebar-card reveal">
              <h3><i className="fa-solid fa-address-card"></i> Contact</h3>
              <div className="contact-item">
                <label>Email</label>
                <a href="mailto:iankyle1717@gmail.com">iankyle1717@gmail.com</a>
              </div>
              <div className="contact-item">
                <label>Phone</label>
                <a href="tel:09695202982">0969 520 2982</a>
              </div>
              <div className="contact-item">
                <label>Location</label>
                <span>Cabangan, Zambales, Philippines</span>
              </div>
              <div className="contact-item">
                <label>Social Links</label>
                <div className="social-row">
                  <a href="https://www.facebook.com/Ian%20Kyle%20Felix%20Maghinay" target="_blank" rel="noopener" aria-label="Facebook">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="https://www.instagram.com/kyleeeese" target="_blank" rel="noopener" aria-label="Instagram">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="https://github.com/" target="_blank" rel="noopener" aria-label="GitHub">
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a href="https://www.linkedin.com/" target="_blank" rel="noopener" aria-label="LinkedIn">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="sidebar-card reveal">
              <h3><i className="fa-solid fa-trophy"></i> Achievements</h3>
              <div className="achievement-item">
                <h4>Technical Speaker</h4>
                <p>Conducted seminar on C# and CRUD operations for PRMSU students.</p>
              </div>
              <div className="achievement-item">
                <h4>Paperless Workflow System</h4>
                <p>Successfully digitized engineering operations using the EMS platform at Sanyo Denki.</p>
              </div>
              <div className="achievement-item">
                <h4>Industry Guest Lecturer</h4>
                <p>Designated by PRMSU CCIT-DIGITS Student Organization.</p>
              </div>
              <div className="achievement-item">
                <h4>Technical Workshop Facilitator</h4>
                <p>Lead instructor for DevDuos Workshop — WinForms CRUD and Enterprise Development.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;