function Projects() {
  return (
    <div id="projects" className="fade-section" style={{ minHeight: '100vh', padding: '100px 48px' }}>
      <h2>Projects</h2>

      <a href="https://github.com/rxa14/MyStudyTrackingApp" target="_blank" rel="noreferrer" className="project-card">
        <h3>Lemon Studies <i className="fa-brands fa-github"></i></h3>
        <p>A study app with a Pomodoro timer, task-based to-do list, and background music integration to support focused study sessions. Built with a SQLite backend for persistent storage and designed in Figma before implementation.</p>
        <div className="tags">
          <span className="tag">C++</span>
          <span className="tag">QML</span>
          <span className="tag">SQLite</span>
          <span className="tag">Figma</span>
        </div>
      </a>

      <a href="https://github.com/rxa14" target="_blank" rel="noreferrer" className="project-card">
        <h3>Focus Launcher <i className="fa-brands fa-github"></i></h3>
        <p>A custom Android home screen launcher built as a distraction-blocking productivity tool. Architected with MVVM and Clean Architecture, using UsageStatsManager to monitor per-app usage and enforce configurable time limits.</p>
        <div className="tags">
          <span className="tag">Kotlin</span>
          <span className="tag">Jetpack Compose</span>
          <span className="tag">MVVM</span>
          <span className="tag">Android</span>
        </div>
      </a>

      <a href="https://github.com/rxa14" target="_blank" rel="noreferrer" className="project-card">
        <h3>Task Manager REST API <i className="fa-brands fa-github"></i></h3>
        <p>A production-style RESTful API built with Spring Boot 3.x following three-layer architecture with full CRUD operations. Tested all endpoints with Postman and implemented PostgreSQL persistence using Spring Data JPA.</p>
        <div className="tags">
          <span className="tag">Java</span>
          <span className="tag">Spring Boot</span>
          <span className="tag">PostgreSQL</span>
          <span className="tag">Maven</span>
        </div>
      </a>

      <a href="https://github.com/rxa14" target="_blank" rel="noreferrer" className="project-card">
        <h3>Multi-threaded TCP/HTTP Server <i className="fa-brands fa-github"></i></h3>
        <p>A concurrent TCP server handling multiple simultaneous client connections through multi-threading. Features an HTTP request parser and a caching mechanism that improved response times by 50%.</p>
        <div className="tags">
          <span className="tag">Python</span>
          <span className="tag">Socket Programming</span>
          <span className="tag">Multithreading</span>
        </div>
      </a>

      <a href="https://github.com/rxa14" target="_blank" rel="noreferrer" className="project-card">
        <h3>Cybersecurity Engineering <i className="fa-brands fa-github"></i></h3>
        <p>A collection of security projects including a stateful firewall using Scapy, Android APK reverse engineering, a padding oracle attack implementation, and a mock stack buffer overflow exploit.</p>
        <div className="tags">
          <span className="tag">Python</span>
          <span className="tag">Scapy</span>
          <span className="tag">Android</span>
          <span className="tag">Linux</span>
        </div>
      </a>

      <a href="https://github.com/rxa14" target="_blank" rel="noreferrer" className="project-card">
        <h3>Cybersecurity Anomaly Detection <i className="fa-brands fa-github"></i></h3>
        <p>Anomaly detection on household electricity consumption data using z-score analysis and correlation-based filtering, with visualizations to enable interpretability for non-technical stakeholders.</p>
        <div className="tags">
          <span className="tag">Python</span>
          <span className="tag">Data Analysis</span>
        </div>
      </a>

      <a href="https://github.com/rxa14" target="_blank" rel="noreferrer" className="project-card">
        <h3>Bug Tracking Program <i className="fa-brands fa-github"></i></h3>
        <p>A C++-based bug tracking system with black-box and white-box testing, fixed-length binary record storage for fast random access, and comprehensive documentation including UML diagrams.</p>
        <div className="tags">
          <span className="tag">C++</span>
          <span className="tag">UML</span>
          <span className="tag">Unit Testing</span>
        </div>
      </a>

    </div>
  )
}

export default Projects