import React from "react";
import resumePdf from "../../assets/resume/Shyam_Resume.pdf";
import "./ResumeModal.css";

const ResumeModal = ({ onClose }) => {
  return (
    <div className="resume-overlay" onClick={onClose}>
      <div
        className="resume-modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Natural wood texture */}
        <div className="wood-texture" />

        {/* Wooden screws */}
        <span className="wood-screw screw-top-left" />
        <span className="wood-screw screw-top-right" />
        <span className="wood-screw screw-bottom-left" />
        <span className="wood-screw screw-bottom-right" />

        {/* Content */}
        <div className="resume-modal-content">

          {/* Header */}
          <div className="resume-header">
            <div>
              {/* <p className="resume-label">
                Resume
              </p> */}

              <h3> My Resume </h3>
            </div>

            <button
              type="button" onClick={onClose} aria-label="Close resume" className="resume-close" >
              ×
            </button>
          </div>

          {/* Scrollable resume */}
          <div className="resume-scroll">

            <article className="resume-paper">
              <span className="wood-knot knot-1" aria-hidden="true" />
              <span className="wood-knot knot-2" aria-hidden="true" />
              <span className="wood-knot knot-3" aria-hidden="true" />
              <span className="wood-knot knot-4" aria-hidden="true" />
              <span className="wood-knot knot-5" aria-hidden="true" />
              <span className="wood-knot knot-6" aria-hidden="true" />
              <span className="wood-knot knot-7" aria-hidden="true" />
              <span className="wood-knot knot-8" aria-hidden="true" />
              <span className="wood-knot knot-9" aria-hidden="true" />
              <span className="wood-knot knot-10" aria-hidden="true" />

              {/* Name */}
              <header className="resume-intro">
                <h1>
                  Shyam Kumar
                </h1>

                <p className="resume-role">
                  Software Engineer — Backend & Full-Stack Developer
                </p>

                <div className="resume-contact">
                  <span>+91-8953886302</span>
                  <span>•</span>
                  <span>kumarshyam03662@gmail.com</span>
                  <span>•</span>
                  <span>GitHub</span>
                  <span>•</span>
                  <span><a href="https://linkedin.com/in/shyam-kumar-enigma007" target="_blank" >linkedin.com/in/shyam-kumar-enigma007</a></span>
                </div>

                {/* <div className="resume-contact">
                  <span>GitHub</span>
                  <span>•</span>
                  <span>linkedin.com/in/shyam-kumar-enigma007</span>
                </div> */}
              </header>

              {/* Professional Summary */}
              <ResumeSection title="Professional Summary">
                <p>
                  I don’t just write code, I ship things that work in
                  production.
                </p>

                <p>
                  I’m a Software Engineer who works across the entire product
                  lifecycle: translating requirements into working software,
                  building reliable APIs, developing scalable architectures,
                  and deploying systems that teams actually use in day-to-day
                  operations.
                </p>
              </ResumeSection>

              {/* Skills */}
              <ResumeSection title="Skills">

                <ResumeItem
                  label="Programming Languages"
                  text="C++, Python, JavaScript, SQL, HTML5, CSS3, Object-Oriented Programming, Data Structures and Algorithms"
                />

                <ResumeItem
                  label="Frameworks & Libraries"
                  text="React.js, Next.js, Node.js, Express.js, FastAPI, Tailwind CSS, React Router"
                />

                <ResumeItem
                  label="Backend & Web Technologies"
                  text="RESTful APIs, API Development, Nginx, Server-Side Rendering (SSR), SEO"
                />

                <ResumeItem
                  label="Databases"
                  text="MySQL, Microsoft SQL Server (MSSQL), MongoDB"
                />

                <ResumeItem
                  label="Developer Tools & Platforms"
                  text="Git, GitHub, GitLab, Docker, Postman, VS Code, Jupyter, Microsoft SQL Server Management Studio, Excel, Google Analytics"
                />

                <ResumeItem
                  label="Engineering Practices"
                  text="Agile/Scrum, Clean Architecture, Code Review, Debugging, System Design, End-to-End Ownership, Cross-Functional Collaboration"
                />

                <ResumeItem
                  label="Soft Skills"
                  text="Problem-Solving, Analytical Thinking, Communication, Collaboration, Adaptability"
                />

              </ResumeSection>

              {/* Professional Experience */}
              <ResumeSection title="Professional Experience">

                <div className="resume-position">
                  <div>
                    <h3>
                      Software Programmer | Kolors India Pvt Ltd
                    </h3>
                  </div>

                  <span>
                    Feb 2025 – Present
                  </span>
                </div>

                <ResumeBullet>
                  Took end-to-end ownership of a scalable web application for
                  order placement, from system design to production deployment
                  on company servers using Dockerized infrastructure.
                </ResumeBullet>

                <ResumeBullet>
                  Built and deployed backend services using FastAPI, developing
                  RESTful APIs and integrating them with a React.js frontend for
                  reliable application workflows.
                </ResumeBullet>

                <ResumeBullet>
                  Containerized backend applications using Docker, ensuring
                  consistent environments across development and production,
                  and deployed services on Linux-based company servers.
                </ResumeBullet>

                <ResumeBullet>
                  Configured Nginx as a reverse proxy to route traffic
                  efficiently between web and mobile services, improving
                  performance and request handling.
                </ResumeBullet>

                <ResumeBullet>
                  Designed and implemented modular features enabling customers
                  to view and download invoices, orders, ledgers, and
                  outstanding reports using a scalable application architecture.
                </ResumeBullet>

                <ResumeBullet>
                  Improved system reliability and maintainability by
                  structuring APIs with clean architecture principles and
                  participating in code reviews and Agile development cycles.
                </ResumeBullet>

              </ResumeSection>

              {/* Personal Projects */}
              <ResumeSection title="Personal Projects">

                <div className="resume-position">
                  <div>
                    <h3>
                      E-Commerce Application Development
                    </h3>

                    <p className="resume-tech">
                      React.js • Firebase • Tailwind CSS • Node.js • Express.js
                    </p>
                  </div>

                  <span>
                    Oct 2023
                  </span>
                </div>

                <ResumeBullet>
                  Developed a high-performance e-commerce web application using
                  Vite and React.js, implementing reusable components and
                  responsive application workflows.
                </ResumeBullet>

                <ResumeBullet>
                  Designed a mobile-responsive user interface using Tailwind
                  CSS, improving usability across desktop and mobile devices.
                </ResumeBullet>

                <ResumeBullet>
                  Implemented client-side state management and component-based
                  architecture to maintain consistent data flow across the
                  application.
                </ResumeBullet>

                <ResumeBullet>
                  Integrated Firebase Authentication and real-time database
                  services to securely manage user access and application data.
                </ResumeBullet>

                <ResumeBullet>
                  Implemented seamless page navigation using React Router and
                  developed a QR-based digital payment solution for easy and
                  secure transactions.
                </ResumeBullet>

              </ResumeSection>

              {/* Education */}
              <ResumeSection title="Education">

                <div className="resume-position">
                  <div>
                    <h3>
                      Indian Institute of Information Technology, Pune
                    </h3>

                    <p className="resume-tech">
                      Bachelor of Technology in Computer Science Engineering
                    </p>
                  </div>

                  <span>
                    2020 – 2024
                  </span>
                </div>

                <p>
                  Relevant Coursework: Computer Programming, Object-Oriented
                  Programming, Software Development Life Cycle (SDLC), Data
                  Structures and Algorithms, Operating Systems, Database
                  Management Systems
                </p>

              </ResumeSection>

              {/* Achievements */}
              <ResumeSection title="Achievements & Certifications">

                <ResumeBullet>
                  Certified in Python Programming: A Concise Introduction
                  (Wesleyan University, Coursera) and Meta Professional
                  Certificates in Front-End and Back-End Development.
                </ResumeBullet>

                <ResumeBullet>
                  Solved 300+ DSA and SQL problems on LeetCode, strengthening
                  problem-solving and analytical skills.
                </ResumeBullet>

              </ResumeSection>

            </article>
          </div>

          {/* Footer */}
          <div className="resume-footer">
            <a
              href={resumePdf}
              download="Shyam_Kumar_Resume.pdf"
              className="resume-download"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M12 3v12"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />

                <path
                  d="m7 10 5 5 5-5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path
                  d="M5 21h14"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>

              Download Resume
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};


/* ----------------------------- */
/* Reusable components            */
/* ----------------------------- */

const ResumeSection = ({ title, children }) => {
  return (
    <section className="resume-section">
      <h2>
        {title}
      </h2>

      <div className="resume-section-content">
        {children}
      </div>
    </section>
  );
};


const ResumeItem = ({ label, text }) => {
  return (
    <p className="resume-item">
      <strong>{label}:</strong> {text}
    </p>
  );
};


const ResumeBullet = ({ children }) => {
  return (
    <div className="resume-bullet">
      <span>•</span>
      <p>{children}</p>
    </div>
  );
};


export default ResumeModal;