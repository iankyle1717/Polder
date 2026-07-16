function TechStack() {
  const stacks = [
    {
      title: "Frontend",
      icon: "fa-code",
      techs: ["HTML5", "CSS3", "JavaScript", "React", "Bootstrap", "Tailwind CSS", "Responsive UI"]
    },
    {
      title: "Backend",
      icon: "fa-server",
      techs: ["C#", "VB.NET", "ASP.NET MVC", ".NET Core API", "Node.js", "WinForms"]
    },
    {
      title: "Database",
      icon: "fa-database",
      techs: ["SQL Server", "SSMS", "Stored Procedures", "Database Design"]
    },
    {
      title: "Tools",
      icon: "fa-toolbox",
      techs: ["Visual Studio", "VS Code", "GitHub", "REST APIs"]
    }
  ];

  return (
    <section className="section section-alt" id="stack">
      <div className="container">
        <div className="section-header reveal">
          <h2>Tech Stack</h2>
          <p>Technologies I work with daily</p>
          <div className="section-line"></div>
        </div>
        <div className="stack-grid">
          {stacks.map((stack, i) => (
            <div className="stack-card reveal" key={stack.title} style={{ animationDelay: `${i * 0.1}s` }}>
              <h3><i className={`fa-solid ${stack.icon}`}></i> {stack.title}</h3>
              <div className="tech-list">
                {stack.techs.map(tech => (
                  <span className="tech-tag" key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;