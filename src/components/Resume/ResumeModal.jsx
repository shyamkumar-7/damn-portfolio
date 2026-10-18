import React from "react";
import resumePdf from "../../assets/resume/Shyam-Resume-2026-sept.pdf";
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

        <div className="resume-modal-content">
          {/* Header */}
          <div className="resume-header">
            <div>
              <h3>My Resume</h3>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close resume"
              className="resume-close"
            >
              ×
            </button>
          </div>

          {/* Scrollable Resume */}
          <div className="resume-scroll">
            <article className="resume-paper">
              {/* Decorative wood knots */}
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

              {/* Introduction */}
              <header className="resume-intro">
                <h1>Shyam Kumar</h1>

                <p className="resume-role">
                  Software Engineer — Backend & Full-Stack Developer
                </p>

                <div className="resume-contact">
                  <p >
                    +91-8953886302
                  </p>

                  <span>•</span>

                  <a href="mailto:kumarshyam03662@gmail.com">
                    kumarshyam03662@gmail.com
                  </a>

                  <span>•</span>

                  <a
                    href="https://github.com/shyamkumar-7"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>

                  <span>•</span>

                  <a
                    href="https://linkedin.com/in/shyam-kumar-enigma007"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </div>
              </header>

              {/* Professional Summary */}
              <ResumeSection title="Professional Summary">
                <p>
                  I’m a Software Engineer who works across the entire
                  product lifecycle: translating requirements into
                  working software, building reliable APIs, developing
                  scalable architectures, and deploying systems that
                  teams actually use in day-to-day operations.
                </p>
              </ResumeSection>

              {/* Skills */}
              <ResumeSection title="Skills">
                <ResumeItem
                  label="Programming Languages"
                  text="JavaScript, Python, C++, SQL, HTML5, CSS3, Object-Oriented Programming, Data Structures and Algorithms"
                />

                <ResumeItem
                  label="Frameworks & Libraries"
                  text="Node.js, React.js, Next.js, Express.js, FastAPI, Tailwind CSS, React Router"
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
                {/* Current Role */}
                <div className="resume-position">
                  <div>
                    <h3>
                      Full Stack Developer | Kaam Career Pvt Ltd
                    </h3>
                  </div>

                  <span>March 2026 – Present</span>
                </div>

                <ResumeBullet>
                  Contributed to Kaabil Program, a production job-seeker
                  platform for women candidates developed as part of a
                  Mahindra K.C. Group and Gates Foundation initiative
                  powered by Mahindra Rise.
                </ResumeBullet>

                <ResumeBullet>
                  Developed and maintained full-stack features using
                  Next.js and Node.js, working across frontend interfaces,
                  backend services, API integrations, and production
                  application workflows.
                </ResumeBullet>

                <ResumeBullet>
                  Enhanced the existing job-matching algorithm by
                  improving matching logic, data handling, and backend
                  workflows to deliver more relevant job recommendations
                  based on candidate profiles and job requirements.
                </ResumeBullet>

                <ResumeBullet>
                  Improved SEO and search engine indexing across the
                  Next.js application by optimizing metadata, page
                  structure, crawlability, and indexable content to
                  strengthen organic discoverability.
                </ResumeBullet>

                <ResumeBullet>
                  Enhanced the Super Admin Panel and Recruiter Dashboard,
                  implementing new features and improving workflows for
                  managing job postings, recruitment operations,
                  candidates, and platform data.
                </ResumeBullet>

                <ResumeBullet>
                  Maintained GitLab CI/CD pipelines and supported
                  production deployments on AWS.
                </ResumeBullet>

                <ResumeBullet>
                  Leveraged AI-assisted development tools, including
                  Claude Code, for code generation, debugging,
                  refactoring, and development workflows while reviewing
                  and validating generated code before production use.
                </ResumeBullet>

                {/* Previous Role */}
                <div className="resume-position">
                  <div>
                    <h3>
                      Software Engineer | Kolors India Pvt Ltd
                    </h3>
                  </div>

                  <span>Feb 2025 – Feb 2026</span>
                </div>

                <ResumeBullet>
                  Developed a B2C order management system for client
                  customers, taking ownership of application features
                  across frontend development, REST API development,
                  business workflows, and production deployment.
                </ResumeBullet>

                <ResumeBullet>
                  Built responsive customer-facing interfaces using
                  React.js and initially developed REST APIs using
                  Node.js, implementing backend workflows for order
                  placement and customer operations.
                </ResumeBullet>

                <ResumeBullet>
                  Migrated backend API development from Node.js to
                  FastAPI to align with the existing mobile application
                  services, which were already built using FastAPI,
                  while maintaining consistent business logic across
                  web and mobile platforms.
                </ResumeBullet>

                <ResumeBullet>
                  Developed and integrated FastAPI REST APIs with the
                  React.js frontend and implemented application
                  workflows for order management, customer data,
                  invoices, ledgers, and outstanding reports.
                </ResumeBullet>

                <ResumeBullet>
                  Containerized backend services using Docker and
                  deployed applications on Linux-based production
                  servers, ensuring consistent environments across
                  development and production.
                </ResumeBullet>

                <ResumeBullet>
                  Improved system reliability and maintainability by
                  structuring APIs with clean architecture principles
                  and participating in code reviews and Agile
                  development cycles.
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
                      Bachelor of Technology in Computer Science
                      Engineering
                    </p>
                  </div>

                  <span>2020 – 2024</span>
                </div>

                <p>
                  <strong>Relevant Coursework:</strong>{" "}
                  Computer Programming, Object-Oriented Programming,
                  Software Development Life Cycle (SDLC), Data
                  Structures and Algorithms, Operating Systems,
                  Database Management Systems
                </p>
              </ResumeSection>

              {/* Achievements and Certifications */}
              <ResumeSection title="Achievements & Certifications">
                <ResumeBullet>
                  Certified in Python Programming: A Concise
                  Introduction (Wesleyan University, Coursera) and
                  Meta Professional Certificates in Front-End and
                  Back-End Development.
                </ResumeBullet>

                <ResumeBullet>
                  Solved 300+ DSA and SQL problems on LeetCode,
                  strengthening problem-solving and analytical skills.
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
/* Reusable Components            */
/* ----------------------------- */

const ResumeSection = ({ title, children }) => {
  return (
    <section className="resume-section">
      <h2>{title}</h2>

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
