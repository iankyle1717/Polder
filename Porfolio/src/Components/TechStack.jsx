function TechStack() {
  return (
    <div className="section">

      <div className="section-title">
        <h2>Tech Stack</h2>
      </div>

      <div className="stack-grid">

        {/* FRONTEND */}

        <div className="stack-card">

          <h3>Frontend</h3>

          <div className="tech-list">

            <div className="tech">HTML5</div>
            <div className="tech">CSS3</div>
            <div className="tech">JavaScript</div>
            <div className="tech">React</div>
            <div className="tech">Bootstrap</div>
            <div className="tech">Tailwind CSS</div>
            <div className="tech">Responsive UI</div>

          </div>

        </div>

        {/* BACKEND */}

        <div className="stack-card">

          <h3>Backend</h3>

          <div className="tech-list">

            <div className="tech">C#</div>
            <div className="tech">VB.NET</div>
            <div className="tech">ASP.NET MVC</div>
            <div className="tech">.NET Core API</div>
            <div className="tech">Node.js</div>
            <div className="tech">WinForms</div>

          </div>

        </div>

        {/* DATABASE */}

        <div className="stack-card">

          <h3>Database</h3>

          <div className="tech-list">

            <div className="tech">SQL Server</div>
            <div className="tech">SSMS</div>
            <div className="tech">Stored Procedures</div>
            <div className="tech">Database Design</div>

          </div>

        </div>

        {/* TOOLS */}

        <div className="stack-card">

          <h3>Tools</h3>

          <div className="tech-list">

            <div className="tech">Visual Studio</div>
            <div className="tech">VS Code</div>
            <div className="tech">GitHub</div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default TechStack;