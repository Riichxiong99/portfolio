function Projects() {
  return (
    <div id="projects" className="fade-section" style={{ minHeight: '100vh', padding: '100px 48px' }}>
      <h2>Projects</h2>


      <a href="https://github.com/Riichxiong99/Job-Application-Tracker-API-" target="_blank" rel="noreferrer" className="project-card">
        <h3>Job Application Tracker API <i className="fa-brands fa-github"></i></h3>
        <p>A JWT-secured RESTful API for tracking job applications through the hiring process, with per-resource ownership checks and a validated 9-state application lifecycle that rejects invalid status transitions. Tested with JUnit, Mockito, and TestContainers against a live Dockerized PostgreSQL instance, automated through a GitHub Actions CI/CD pipeline, and deployed to Railway with a managed database.</p>
        <div className="tags">
          <span className="tag">Java</span>
          <span className="tag">Spring Boot</span>
          <span className="tag">PostgreSQL</span>
          <span className="tag">Docker</span>
          <span className="tag">CI/CD</span>
        </div>
      </a>



      <a href="https://github.com/Riichxiong99/FocusLauncher" target="_blank" rel="noreferrer" className="project-card">
        <h3>Focus Launcher <i className="fa-brands fa-github"></i></h3>
        <p>  A custom Android home screen launcher built as a distraction-blocking productivity tool. Features timed focus sessions that actively monitor foreground apps via UsageStatsManager and intercept blocked apps in real time.
          Supports per-app friction gates, including forced delays, name typing, and guided breathing, to add intentional resistance before opening distracting apps.</p>
        <div className="tags">
          <span className="tag">Kotlin</span>
          <span className="tag">Jetpack Compose</span>
          <span className="tag">MVVM</span>
          <span className="tag">Android</span>
        </div>
      </a>

      <a href="https://github.com/Riichxiong99/dash-cdn-proxy" target="_blank" rel="noreferrer" className="project-card">
        <h3>DASH CDN Proxy <i className="fa-brands fa-github"></i></h3>
        <p>A content delivery network implementing dynamic adaptive streaming (DASH) with an intelligent source-selection proxy that routes client requests to the optimal server based on real-time bandwidth and latency measurements, supporting up to 100 concurrent users with zero failures after threading and streaming optimizations.</p>
        <div className="tags">
          <span className="tag">Python</span>
          <span className="tag">HTTP</span>
          <span className="tag">Locust</span>
          <span className="tag">Load Balancing</span>

        </div>
      </a>



      <a href="https://github.com/Riichxiong99/Multithreaded-HTTP-1.1-Server-Caching-Proxy-over-TCP-Sockets" target="_blank" rel="noreferrer" className="project-card">
        <h3> Multithreaded HTTP/1.1 Server & Caching Proxy over TCP Sockets <i className="fa-brands fa-github"></i></h3>
        <p>Built from scratch using raw TCP sockets and no external libraries, implementing a multithreaded HTTP/1.1 server that serves static files with conditional request support, path traversal protection, and proper status code handling. Paired with a multithreaded caching proxy that forwards requests to origin servers, maintains a thread-safe in-memory cache, and revalidates stale entries via If-Modified-Since to reduce redundant transfers.</p>
        <div className="tags">
          <span className="tag">Python</span>
          <span className="tag">Socket Programming</span>
          <span className="tag">Multithreading</span>
          <span className="tag">HTTP/1.1</span>
        </div>
      </a>



      <a href="https://github.com/Riichxiong99/LemonStudies" target="_blank" rel="noreferrer" className="project-card">
        <h3>Lemon Studies <i className="fa-brands fa-github"></i></h3>
        <p>A study app with a Pomodoro timer, task-based to-do list, and background music integration to support focused study sessions. Built with a SQLite backend for persistent storage and designed in Figma.</p>
        <div className="tags">
          <span className="tag">C++</span>
          <span className="tag">QML</span>
          <span className="tag">SQLite</span>
          <span className="tag">Figma</span>
        </div>
      </a>


      <a href="https://github.com/Riichxiong99/Bug-Tracker" target="_blank" rel="noreferrer" className="project-card">
        <h3>Bug Tracking Program <i className="fa-brands fa-github"></i></h3>
        <p>A console-based bug and feature tracking system for managing bugs, feature requests, products, and stakeholder contacts. Built in C++ with a menu-driven interface and binary file persistence for fast, structured data storage.</p>
        <div className="tags">
          <span className="tag">C++</span>
          <span className="tag">CMake</span>
          <span className="tag">File I/O</span>
        </div>
      </a>



      <a href="https://github.com/Riichxiong99/One-vs.-N-battleship" target="_blank" rel="noreferrer" className="project-card">
        <h3>One-vs.-N Battleship <i className="fa-brands fa-github"></i></h3>
        <p>A Java battleship game where one player simultaneously competes against up to N computer opponents. Uses a backtracking algorithm to guarantee valid, non-overlapping ship placements across all boards, with a GUI and configurable opponent count via command-line arguments.</p>
        <div className="tags">
          <span className="tag">Java</span>
          <span className="tag">GUI</span>
          <span className="tag">Algorithms</span>
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



      <a href="https://github.com/beigahmadi/Anomalies_Detection_using_HMM" target="_blank" rel="noreferrer" className="project-card">
        <h3>Cybersecurity Anomaly Detection <i className="fa-brands fa-github"></i></h3>
        <p>Applied multivariate Hidden Markov Models (HMM) to detect anomalies in household electricity consumption time-series data. Used PCA to reduce 7 features to 2 key signals, trained models across 4–13 hidden states, and selected the optimal 7-state model via Bayesian Information Criterion (BIC). Achieved reliable anomaly detection with log-likelihood deviations of 4.8–10.0 units above threshold.</p>
        <div className="tags">
          <span className="tag">R</span>
          <span className="tag">HMM</span>
          <span className="tag">PCA</span>
          <span className="tag">Time-Series</span>
        </div>
      </a>

      {/* <a href="https://github.com/rxa14" target="_blank" rel="noreferrer" className="project-card">
        <h3>Cybersecurity Engineering <i className="fa-brands fa-github"></i></h3>
        <p>A collection of security projects including a stateful firewall using Scapy, Android APK reverse engineering, a padding oracle attack implementation, and a mock stack buffer overflow exploit.</p>
        <div className="tags">
          <span className="tag">Python</span>
          <span className="tag">Scapy</span>
          <span className="tag">Android</span>
          <span className="tag">Linux</span>
        </div>
      </a> */}









    </div>
  )
}

export default Projects