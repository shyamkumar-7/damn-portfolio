// import React from "react";

// const projects = [
//   {
//     number: "01",
//     category: "AI / WEB APPLICATION",
//     title: "AI Portfolio Assistant",
//     description:
//       "An intelligent portfolio experience that allows visitors to interact with a personal AI assistant and explore professional information through natural language.",
//     technologies: [
//       "React",
//       "Python",
//       "NLP",
//       "FastAPI",
//       "Machine Learning",
//     ],
//     year: "2026",
//     featured: true,
//   },

//   {
//     number: "02",
//     category: "FULL-STACK APPLICATION",
//     title: "Job Platform",
//     description:
//       "A production-focused job platform designed around job discovery, candidate profiles, applications, and recruiter workflows.",
//     technologies: [
//       "Next.js",
//       "TypeScript",
//       "PHP",
//       "MySQL",
//       "Docker",
//     ],
//     year: "2025",
//     featured: true,
//   },

//   {
//     number: "03",
//     category: "WEB APPLICATION",
//     title: "Recruitment Platform",
//     description:
//       "A scalable recruitment application with structured workflows for recruiters, candidates, job management, and application processing.",
//     technologies: [
//       "React",
//       "Node.js",
//       "REST API",
//       "MySQL",
//       "Docker",
//     ],
//     year: "2025",
//     featured: false,
//   },
// ];

// const Projects = () => {
//   return (
//     <section
//       id="projects"
//       className="relative overflow-hidden bg-background px-4 py-24 text-foreground sm:px-6 sm:py-32 lg:px-8"
//     >
//       {/* Background */}
//       <div
//         className="pointer-events-none absolute inset-0 opacity-[0.025]"
//         style={{
//           backgroundImage: `
//             linear-gradient(to right, currentColor 1px, transparent 1px),
//             linear-gradient(to bottom, currentColor 1px, transparent 1px)
//           `,
//           backgroundSize: "48px 48px",
//         }}
//       />

//       <div className="relative mx-auto max-w-7xl">

//         {/* ================================================
//             HEADER
//         ================================================= */}

//         <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">

//           <div>

//             <div className="mb-8 flex items-center gap-4">
//               <span className="h-px w-12 bg-primary" />

//               <span className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-primary">
//                 03 / Selected Work
//               </span>
//             </div>

//             <h2 className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-[-0.06em] sm:text-6xl md:text-7xl lg:text-8xl">
//               Things I've
//               <br />

//               <span className="text-primary">
//                 built.
//               </span>
//             </h2>

//           </div>

//           <p className="max-w-md text-base leading-8 text-muted-foreground sm:text-lg lg:justify-self-end">
//             A selection of projects where engineering meets product thinking,
//             experimentation, and real-world problem solving.
//           </p>

//         </div>

//         {/* ================================================
//             PROJECT LIST
//         ================================================= */}

//         <div className="mt-24">

//           {projects.map((project, index) => (

//             <article
//               key={project.number}
//               className="group border-t border-border py-12 sm:py-16 lg:py-20"
//             >

//               <div
//                 className={`
//                   grid gap-10 lg:grid-cols-12 lg:items-center
//                   ${index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""}
//                 `}
//               >

//                 {/* =========================================
//                     PROJECT PREVIEW
//                 ========================================== */}

//                 <div className="lg:col-span-7">

//                   <div className="relative aspect-[16/10] overflow-hidden border border-border bg-card">

//                     {/* Fake browser */}
//                     <div className="absolute left-0 right-0 top-0 z-10 flex h-10 items-center gap-2 border-b border-border bg-background/80 px-4 backdrop-blur-md">

//                       <span className="h-2 w-2 rounded-full bg-muted-foreground/30" />
//                       <span className="h-2 w-2 rounded-full bg-muted-foreground/30" />
//                       <span className="h-2 w-2 rounded-full bg-muted-foreground/30" />

//                       <div className="ml-4 h-4 flex-1 rounded bg-muted-foreground/10" />

//                     </div>

//                     {/* Preview content */}
//                     <div className="flex h-full items-center justify-center pt-10">

//                       <div className="text-center transition-transform duration-700 ease-out group-hover:scale-105">

//                         <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
//                           {project.category}
//                         </span>

//                         <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
//                           {project.title}
//                         </h3>

//                         <div className="mx-auto mt-6 h-px w-16 bg-primary transition-all duration-700 group-hover:w-32" />

//                       </div>

//                     </div>

//                     {/* Hover overlay */}
//                     <div className="absolute inset-0 bg-primary/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

//                     {/* Corner number */}
//                     <span className="absolute bottom-5 right-5 font-mono text-xs text-muted-foreground">
//                       {project.year}
//                     </span>

//                   </div>

//                 </div>

//                 {/* =========================================
//                     PROJECT DETAILS
//                 ========================================== */}

//                 <div className="lg:col-span-5">

//                   <div className="flex items-center gap-4">

//                     <span className="font-mono text-xs text-primary">
//                       {project.number}
//                     </span>

//                     <span className="h-px w-8 bg-border transition-all duration-500 group-hover:w-16 group-hover:bg-primary" />

//                   </div>

//                   <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
//                     {project.category}
//                   </p>

//                   <h3 className="mt-3 text-3xl font-bold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
//                     {project.title}
//                   </h3>

//                   <p className="mt-6 text-base leading-8 text-muted-foreground">
//                     {project.description}
//                   </p>

//                   {/* Technologies */}
//                   <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3">

//                     {project.technologies.map((technology) => (
//                       <span
//                         key={technology}
//                         className="font-mono text-xs text-muted-foreground transition-colors duration-300 hover:text-primary"
//                       >
//                         {technology}
//                       </span>
//                     ))}

//                   </div>

//                   {/* CTA */}
//                   <button
//                     type="button"
//                     className="group/button mt-10 inline-flex items-center gap-4 border-b border-foreground pb-2 text-sm font-medium transition-all duration-300 hover:border-primary hover:text-primary"
//                   >
//                     View case study

//                     <span className="transition-transform duration-300 group-hover/button:translate-x-2">
//                       ↗
//                     </span>
//                   </button>

//                 </div>

//               </div>

//             </article>

//           ))}

//         </div>

//         {/* ================================================
//             MORE PROJECTS
//         ================================================= */}

//         <div className="border-t border-border pt-12">

//           <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

//             <div>

//               <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
//                 More work
//               </p>

//               <p className="mt-2 text-sm text-muted-foreground">
//                 More experiments, side projects, and open-source work.
//               </p>

//             </div>

//             <button
//               type="button"
//               className="group inline-flex items-center gap-4 text-sm font-medium"
//             >
//               View all projects

//               <span className="transition-transform duration-300 group-hover:translate-x-2 group-hover:text-primary">
//                 →
//               </span>
//             </button>

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default Projects;


// import React, { useMemo, useState } from "react";

// const projects = [
//   {
//     id: "01",
//     title: "AI Portfolio Assistant",
//     category: "AI",
//     year: "2026",
//     description:
//       "An intelligent portfolio experience that allows visitors to interact with professional information through natural language.",
//     technologies: [
//       "React",
//       "Python",
//       "NLP",
//       "FastAPI",
//       "Machine Learning",
//     ],
//     featured: true,
//     status: "Building",
//   },

//   {
//     id: "02",
//     title: "Job Platform",
//     category: "FULL-STACK",
//     year: "2025",
//     description:
//       "A production job platform focused on job discovery, candidate profiles, applications, and recruiter workflows.",
//     technologies: [
//       "Next.js",
//       "TypeScript",
//       "PHP",
//       "MySQL",
//       "Docker",
//     ],
//     featured: true,
//     status: "Production",
//   },

//   {
//     id: "03",
//     title: "Recruitment Platform",
//     category: "FULL-STACK",
//     year: "2025",
//     description:
//       "A recruitment system designed to support job management, candidate workflows, recruiter operations, and application processing.",
//     technologies: [
//       "React",
//       "Node.js",
//       "REST API",
//       "MySQL",
//       "Docker",
//     ],
//     featured: false,
//     status: "Production",
//   },

//   {
//     id: "04",
//     title: "Analytics Dashboard",
//     category: "FRONTEND",
//     year: "2025",
//     description:
//       "A data-rich analytics interface designed to make complex product usage information easier to understand.",
//     technologies: [
//       "React",
//       "TypeScript",
//       "Tailwind",
//       "Charts",
//     ],
//     featured: false,
//     status: "Completed",
//   },
// ];

// const categories = [
//   "ALL",
//   "AI",
//   "FULL-STACK",
//   "FRONTEND",
// ];

// const Projects = () => {
//   const [activeCategory, setActiveCategory] = useState("ALL");
//   const [activeProject, setActiveProject] = useState(null);

//   const filteredProjects = useMemo(() => {
//     if (activeCategory === "ALL") {
//       return projects;
//     }

//     return projects.filter(
//       (project) => project.category === activeCategory
//     );
//   }, [activeCategory]);

//   const featuredProject = projects.find(
//     (project) => project.featured
//   );

//   return (
//     <section
//       id="projects"
//       className="relative overflow-hidden bg-background px-4 py-24 text-foreground sm:px-6 sm:py-32 lg:px-8"
//     >

//       {/* Background Grid */}
//       <div
//         className="pointer-events-none absolute inset-0 opacity-[0.025]"
//         style={{
//           backgroundImage: `
//             linear-gradient(to right, currentColor 1px, transparent 1px),
//             linear-gradient(to bottom, currentColor 1px, transparent 1px)
//           `,
//           backgroundSize: "56px 56px",
//         }}
//       />

//       <div className="relative mx-auto max-w-7xl">

//         {/* Header */}
//         <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">

//           <div>

//             <div className="mb-8 flex items-center gap-4">
//               <span className="h-px w-12 bg-primary" />

//               <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
//                 03 / Selected Work
//               </span>
//             </div>

//             <h2 className="text-5xl font-bold leading-[0.9] tracking-[-0.07em] sm:text-6xl md:text-7xl lg:text-8xl">
//               Things
//               <br />

//               <span className="text-primary">
//                 I've built.
//               </span>
//             </h2>

//           </div>

//           <div className="max-w-md lg:justify-self-end">

//             <p className="text-base leading-8 text-muted-foreground sm:text-lg">
//               Projects built to solve problems, explore ideas, and push my
//               understanding of software engineering.
//             </p>

//             <div className="mt-7 flex items-center gap-3">

//               <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />

//               <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
//                 {projects.length} projects
//               </span>

//             </div>

//           </div>

//         </div>

//         {/* Featured Project */}
//         {featuredProject && (
//           <div className="mt-24">

//             <div className="mb-5 flex items-center justify-between">

//               <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
//                 Featured project
//               </span>

//               <span className="font-mono text-xs text-muted-foreground">
//                 {featuredProject.year}
//               </span>

//             </div>

//             <div
//               onMouseEnter={() =>
//                 setActiveProject(featuredProject.id)
//               }
//               onMouseLeave={() => setActiveProject(null)}
//               className="group relative overflow-hidden border border-border"
//             >

//               <div className="grid lg:grid-cols-[1.3fr_0.7fr]">

//                 {/* Visual */}
//                 <div className="relative min-h-[420px] overflow-hidden bg-card lg:min-h-[520px]">

//                   {/* Grid */}
//                   <div
//                     className="absolute inset-0 opacity-[0.04]"
//                     style={{
//                       backgroundImage: `
//                         linear-gradient(to right, currentColor 1px, transparent 1px),
//                         linear-gradient(to bottom, currentColor 1px, transparent 1px)
//                       `,
//                       backgroundSize: "40px 40px",
//                     }}
//                   />

//                   {/* Giant Number */}
//                   <span className="absolute -left-6 -top-16 select-none text-[220px] font-bold leading-none text-muted-foreground/[0.035] transition-transform duration-1000 group-hover:translate-x-5 group-hover:translate-y-5">
//                     {featuredProject.id}
//                   </span>

//                   {/* Project Title */}
//                   <div className="absolute inset-0 flex items-center justify-center">

//                     <div className="text-center transition-transform duration-700 group-hover:scale-105">

//                       <span className="font-mono text-xs uppercase tracking-[0.35em] text-primary">
//                         {featuredProject.category}
//                       </span>

//                       <h3 className="mt-5 max-w-lg text-4xl font-bold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
//                         {featuredProject.title}
//                       </h3>

//                       <div className="mx-auto mt-7 h-px w-12 bg-primary transition-all duration-700 group-hover:w-32" />

//                     </div>

//                   </div>

//                   {/* Status */}
//                   <div className="absolute bottom-6 left-6 flex items-center gap-3">

//                     <span className="h-2 w-2 rounded-full bg-primary" />

//                     <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
//                       {featuredProject.status}
//                     </span>

//                   </div>

//                 </div>

//                 {/* Details */}
//                 <div className="flex flex-col justify-between border-t border-border p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">

//                   <div>

//                     <div className="flex items-center justify-between">

//                       <span className="font-mono text-xs text-primary">
//                         {featuredProject.id}
//                       </span>

//                       <span className="font-mono text-xs text-muted-foreground">
//                         {featuredProject.year}
//                       </span>

//                     </div>

//                     <h3 className="mt-12 text-3xl font-semibold tracking-[-0.04em]">
//                       {featuredProject.title}
//                     </h3>

//                     <p className="mt-6 text-sm leading-7 text-muted-foreground sm:text-base">
//                       {featuredProject.description}
//                     </p>

//                     {/* Technologies */}
//                     <div className="mt-8 flex flex-wrap gap-3">

//                       {featuredProject.technologies.map(
//                         (technology) => (
//                           <span
//                             key={technology}
//                             className="border border-border px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
//                           >
//                             {technology}
//                           </span>
//                         )
//                       )}

//                     </div>

//                   </div>

//                   <button
//                     type="button"
//                     className="group/button mt-12 flex w-fit items-center gap-5 border-b border-foreground pb-2 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
//                   >
//                     Explore project

//                     <span className="text-lg transition-transform duration-300 group-hover/button:translate-x-2">
//                       ↗
//                     </span>
//                   </button>

//                 </div>

//               </div>

//             </div>
//           </div>
//         )}

//         {/* Filter */}
//         <div className="mt-24 flex flex-col gap-6 border-y border-border py-6 sm:flex-row sm:items-center sm:justify-between">

//           <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
//             Project archive
//           </span>

//           <div className="flex flex-wrap gap-2">

//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setActiveCategory(category)}
//                 className={`px-4 py-2 font-mono text-[10px] uppercase tracking-wider transition-all duration-300 ${
//                   activeCategory === category
//                     ? "bg-primary text-primary-foreground"
//                     : "border border-border text-muted-foreground hover:border-primary hover:text-primary"
//                 }`}
//               >
//                 {category}
//               </button>
//             ))}

//           </div>

//         </div>

//         {/* Project Archive */}
//         <div>

//           {filteredProjects.map((project) => (
//             <article
//               key={project.id}
//               onMouseEnter={() => setActiveProject(project.id)}
//               onMouseLeave={() => setActiveProject(null)}
//               className="group relative border-b border-border py-8 transition-all duration-500"
//             >

//               <div className="grid items-center gap-6 md:grid-cols-[70px_1fr_180px_40px]">

//                 {/* Number */}
//                 <span
//                   className={`font-mono text-xs transition-colors duration-300 ${
//                     activeProject === project.id
//                       ? "text-primary"
//                       : "text-muted-foreground"
//                   }`}
//                 >
//                   {project.id}
//                 </span>

//                 {/* Project */}
//                 <div>

//                   <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
//                     {project.category}
//                   </p>

//                   <h3
//                     className={`text-2xl font-semibold tracking-[-0.03em] transition-all duration-300 sm:text-3xl ${
//                       activeProject === project.id
//                         ? "translate-x-2 text-primary"
//                         : ""
//                     }`}
//                   >
//                     {project.title}
//                   </h3>

//                 </div>

//                 {/* Year */}
//                 <span className="font-mono text-xs text-muted-foreground">
//                   {project.year}
//                 </span>

//                 {/* Arrow */}
//                 <span
//                   className={`text-xl transition-all duration-300 ${
//                     activeProject === project.id
//                       ? "translate-x-1 text-primary opacity-100"
//                       : "opacity-30"
//                   }`}
//                 >
//                   ↗
//                 </span>

//               </div>

//               {/* Expanded Details */}
//               <div
//                 className={`grid transition-all duration-500 ${
//                   activeProject === project.id
//                     ? "grid-rows-[1fr] opacity-100"
//                     : "grid-rows-[0fr] opacity-0"
//                 }`}
//               >
//                 <div className="overflow-hidden">

//                   <div className="grid gap-8 pb-5 pt-8 md:grid-cols-[70px_1fr_220px]">

//                     <div />

//                     <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
//                       {project.description}
//                     </p>

//                     <div className="flex flex-wrap content-start gap-2">

//                       {project.technologies.map(
//                         (technology) => (
//                           <span
//                             key={technology}
//                             className="font-mono text-[10px] text-muted-foreground"
//                           >
//                             {technology}
//                           </span>
//                         )
//                       )}

//                     </div>

//                   </div>

//                 </div>
//               </div>

//             </article>
//           ))}

//         </div>

//         {/* Footer */}
//         <div className="mt-16 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

//           <div>

//             <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
//               More experiments
//             </p>

//             <p className="mt-2 text-sm text-muted-foreground">
//               Side projects, experiments, and things currently in progress.
//             </p>

//           </div>

//           <button
//             type="button"
//             className="group flex items-center gap-4 text-sm font-medium"
//           >
//             View GitHub

//             <span className="transition-transform duration-300 group-hover:translate-x-2 group-hover:text-primary">
//               ↗
//             </span>
//           </button>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default Projects;


import { NavLink } from "react-router-dom";

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
    github: "",
    live: "",
  },

  {
    number: "02",
    title: "Personal Portfolio",
    category: "Frontend Application",
    description:
      "A modern developer portfolio designed to showcase professional experience, technical skills, projects, and an interactive AI assistant.",
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
    github: "",
    live: "",
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
                className="rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-semibold text-foreground transition-colors duration-200 hover:bg-surface-hover"
              >
                GitHub
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

