import { NavLink } from "react-router-dom";
import githubLogo from '../assets/icons/github-logo.png';

const PROJECTS = [
  {
    number: "01",
    title: "E-Commerce Application",
    category: "Full-Stack Web Application",
    description:
      "A responsive e-commerce application built with React and Vite, featuring Firebase authentication, real-time data, reusable components, and a QR-based digital payment flow.",
    technologies: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Firebase",
      "React Router",
    ],
    features: [
      "Responsive and mobile-first interface",
      "Firebase authentication",
      "Real-time database integration",
      "Component-based architecture",
      "Client-side state management",
      "QR-based digital payment flow",
    ],
    github: "https://github.com/shyamkumar-7/e-store",
    live: "",
  },

  {
    number: "02",
    title: "Personal Portfolio",
    category: "Frontend Application",
    description:
      "A modern developer portfolio designed to showcase professional experience, technical skills, projects, and an interactive AI assistant(under development).",
    technologies: [
      "React",
      "React Router",
      "Tailwind CSS",
      "JavaScript",
      "REST APIs",
    ],
    features: [
      "Responsive portfolio interface",
      "Multi-page navigation",
      "Dynamic theme system",
      "Mobile navigation",
      "Reusable component architecture",
      "AI assistant integration",
    ],
    github: "https://github.com/shyamkumar-7/damn-portfolio",
    live: "https://damn-portfolio.vercel.app",
  },
];

function ProjectCard({ project }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-border bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg">
      {/* Project visual */}
      <div className="relative flex h-56 items-center justify-center overflow-hidden border-b border-border bg-background">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute left-1/4 top-1/4 h-32 w-32 rounded-full bg-primary/20 blur-3xl transition-transform duration-500 group-hover:scale-150" />

          <div className="absolute bottom-0 right-1/4 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
        </div>

        <div className="relative text-center">
          <span className="text-6xl font-bold tracking-tighter text-primary/20">
            {project.number}
          </span>

          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.25em] text-foreground-muted">
            {project.category}
          </p>
        </div>
      </div>

      {/* Project content */}
      <div className="p-6 sm:p-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Project {project.number}
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground">
              {project.title}
            </h2>
          </div>
        </div>

        <p className="mt-4 text-sm leading-7 text-foreground-muted">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground-muted transition-colors duration-200 group-hover:border-primary/30"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Features */}
        <div className="mt-7 border-t border-border pt-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-foreground">
            Key Features
          </p>

          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 text-sm leading-6 text-foreground-muted"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Links */}
        {(project.github || project.live) && (
          <div className="mt-7 flex gap-3 border-t border-border pt-6">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-foreground-inverse transition-colors duration-200 hover:bg-primary-hover"
              >
                Live Demo
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-semibold text-foreground transition-colors duration-200 hover:bg-surface-hover"
              >
                <span>GitHub</span>
                <img
                  src={githubLogo}
                  alt="GitHub"
                  className="h-5 w-5"
                />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <main className="min-h-[calc(100vh-73px)] bg-background text-foreground transition-colors duration-300">
      {/* Header */}
      <section className="mx-auto max-w-7xl px-4 pb-14 pt-16 sm:px-6 sm:pb-16 sm:pt-20 lg:px-8 lg:pt-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Selected Work
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Projects I&apos;ve built.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground-muted">
            A collection of applications and engineering projects where I
            worked on frontend development, backend integration, architecture,
            and user experience.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8 lg:pb-24">
        <div className="grid gap-6 lg:grid-cols-2">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-surface transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Let&apos;s connect
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Interested in working together?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-foreground-muted">
            I&apos;m always open to discussing software engineering
            opportunities, interesting projects, and new ideas.
          </p>

          <NavLink
            to="/contact"
            className="mt-8 inline-flex rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-foreground-inverse transition-colors duration-200 hover:bg-primary-hover"
          >
            Get in Touch
          </NavLink>
        </div>
      </section>
    </main>
  );
}

