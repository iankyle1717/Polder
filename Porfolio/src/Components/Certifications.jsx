
function Certifications() {
  const certs = [
    {
      icon: "fa-certificate",
      title: "Certificate of Recognition",
      desc: "Development of the Automatic Stamping Machine Jig Checker Web Application"
    },
    {
      icon: "fa-award",
      title: "Official Recognition Award",
      desc: "Design and Implementation of the Engineering Documents Online Approval and Stamping System"
    },
    {
      icon: "fa-chalkboard-user",
      title: "Industry Guest Lecturer Designation",
      desc: "PRMSU CCIT-DIGITS Student Organization"
    },
    {
      icon: "fa-users-gear",
      title: "Technical Workshop Facilitator",
      desc: "Lead Instructor for DevDuos Workshop — WinForms CRUD and Enterprise Development"
    }
  ];

  return (
    <section className="section" id="certs">
      <div className="container">
        <div className="section-header reveal">
          <h2>Certifications & Recognition</h2>
          <p>Awards and official recognitions</p>
          <div className="section-line"></div>
        </div>
        <div className="certs-grid">
          {certs.map((cert, i) => (
            <div className="cert-card reveal" key={i}>
              <div className="cert-icon"><i className={`fa-solid ${cert.icon}`}></i></div>
              <div>
                <h4>{cert.title}</h4>
                <p>{cert.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;