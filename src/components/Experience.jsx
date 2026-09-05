
// import React from "react";

// const experiences = [
//   {
//     company: "Company Name",
//     role: "Software Engineer",
//     period: "2024 — Present",
//     location: "India",
//     description:
//       "Building scalable web applications and user-focused features while working across frontend, backend, APIs, and performance optimization.",
//     achievements: [
//       "Developed responsive and reusable UI components using React and modern frontend practices.",
//       "Built and integrated REST APIs to support production application workflows.",
//       "Improved application performance, usability, and overall user experience.",
//       "Collaborated with cross-functional teams to deliver features from development to production.",
//     ],
//     technologies: [
//       "React",
//       "Next.js",
//       "TypeScript",
//       "Node.js",
//       "REST APIs",
//       "Git",
//     ],
//   },
//   {
//     company: "Previous Company",
//     role: "Software Engineering Intern",
//     period: "2023 — 2024",
//     location: "India",
//     description:
//       "Contributed to production applications while gaining hands-on experience in frontend development, backend integration, debugging, and deployment.",
//     achievements: [
//       "Implemented new features and reusable components based on product requirements.",
//       "Worked with APIs and databases to build end-to-end application functionality.",
//       "Resolved bugs and improved reliability across different application modules.",
//       "Worked closely with senior developers during development, testing, and releases.",
//     ],
//     technologies: [
//       "JavaScript",
//       "React",
//       "PHP",
//       "MySQL",
//       "Docker",
//       "Git",
//     ],
//   },
// ];

// const Experience = () => {
//   return (
//     <section
//       id="experience"
//       className="relative overflow-hidden bg-background px-4 py-24 sm:px-6 lg:px-8"
//     >
//       {/* Background decoration */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
//         <div className="absolute -right-20 top-1/3 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
//       </div>

//       <div className="relative mx-auto max-w-6xl">
//         {/* Section heading */}
//         <div className="mb-16 max-w-2xl">
//           <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
//             Career Journey
//           </p>

//           <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
//             Experience that
//             <span className="text-primary"> delivers.</span>
//           </h2>

//           <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
//             A look at the work, technologies, and problems I've been solving
//             throughout my software engineering journey.
//           </p>
//         </div>

//         {/* Timeline */}
//         <div className="relative">
//           {/* Timeline line */}
//           <div className="absolute left-[11px] top-2 hidden h-[calc(100%-8px)] w-px bg-border md:block" />

//           <div className="space-y-12">
//             {experiences.map((experience, index) => (
//               <article
//                 key={`${experience.company}-${index}`}
//                 className="relative md:pl-12"
//               >
//                 {/* Timeline dot */}
//                 <div className="absolute left-0 top-1 hidden h-6 w-6 items-center justify-center rounded-full border-4 border-background bg-primary shadow-[0_0_0_4px] shadow-primary/20 md:flex">
//                   <div className="h-1.5 w-1.5 rounded-full bg-white" />
//                 </div>

//                 {/* Experience card */}
//                 <div className="group rounded-2xl border border-border bg-card/70 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 sm:p-8">
//                   {/* Top row */}
//                   <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
//                     <div>
//                       <p className="mb-1 text-sm font-medium text-primary">
//                         {experience.company}
//                       </p>

//                       <h3 className="text-2xl font-bold tracking-tight text-foreground">
//                         {experience.role}
//                       </h3>
//                     </div>

//                     <div className="w-fit rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-muted-foreground">
//                       {experience.period}
//                     </div>
//                   </div>

//                   {/* Location */}
//                   <p className="mt-3 text-sm text-muted-foreground">
//                     {experience.location}
//                   </p>

//                   {/* Description */}
//                   <p className="mt-6 max-w-3xl leading-7 text-muted-foreground">
//                     {experience.description}
//                   </p>

//                   {/* Achievements */}
//                   <div className="mt-7">
//                     <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
//                       Key Contributions
//                     </p>

//                     <ul className="space-y-3">
//                       {experience.achievements.map((achievement) => (
//                         <li
//                           key={achievement}
//                           className="flex gap-3 text-sm leading-6 text-muted-foreground sm:text-base"
//                         >
//                           <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
//                           <span>{achievement}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   {/* Technologies */}
//                   <div className="mt-8 flex flex-wrap gap-2">
//                     {experience.technologies.map((technology) => (
//                       <span
//                         key={technology}
//                         className="rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors duration-200 group-hover:border-primary/20 group-hover:text-foreground"
//                       >
//                         {technology}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>

//         {/* Bottom statement */}
//         <div className="mt-16 rounded-2xl border border-border bg-card/50 p-6 text-center sm:p-8">
//           <p className="text-sm text-muted-foreground">
//             Always learning. Always building. Always looking for the next
//             problem worth solving.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;


// import React from "react";

// const experiences = [
//   {
//     number: "01",
//     year: "2024",
//     period: "2024 — PRESENT",
//     company: "Company Name",
//     role: "Software Engineer",
//     type: "Full-time",
//     description:
//       "Building production-ready web applications with a focus on performance, scalability, clean architecture, and user experience.",
//     impact: [
//       {
//         value: "20+",
//         label: "Features shipped",
//       },
//       {
//         value: "35%",
//         label: "Performance improvement",
//       },
//       {
//         value: "5+",
//         label: "Systems / modules",
//       },
//     ],
//     technologies: [
//       "React",
//       "Next.js",
//       "TypeScript",
//       "Node.js",
//       "REST APIs",
//       "Docker",
//     ],
//   },
//   {
//     number: "02",
//     year: "2023",
//     period: "2023 — 2024",
//     company: "Previous Company",
//     role: "Software Engineering Intern",
//     type: "Internship",
//     description:
//       "Worked on production applications, contributing to frontend development, backend integration, debugging, and feature delivery.",
//     impact: [
//       {
//         value: "10+",
//         label: "Features delivered",
//       },
//       {
//         value: "4+",
//         label: "Core modules",
//       },
//       {
//         value: "100%",
//         label: "Production focused",
//       },
//     ],
//     technologies: [
//       "JavaScript",
//       "React",
//       "PHP",
//       "MySQL",
//       "Git",
//       "Docker",
//     ],
//   },
// ];

// const Experience = () => {
//   return (
//     <section
//       id="experience"
//       className="relative overflow-hidden bg-background px-4 py-24 sm:px-6 lg:px-8"
//     >
//       {/* Subtle grid */}
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
//         {/* Header */}
//         <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:items-end">
//           <div>
//             <div className="mb-6 flex items-center gap-3">
//               <span className="h-px w-10 bg-primary" />

//               <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
//                 02 / Experience
//               </span>
//             </div>

//             <h2 className="max-w-xl text-5xl font-bold tracking-[-0.04em] text-foreground sm:text-6xl lg:text-7xl">
//               Where I've
//               <br />
//               <span className="text-primary">made an impact.</span>
//             </h2>
//           </div>

//           <div className="max-w-xl lg:justify-self-end">
//             <p className="text-lg leading-8 text-muted-foreground">
//               My experience is shaped by building real products, solving
//               complex problems, and continuously improving how software is
//               designed, developed, and delivered.
//             </p>
//           </div>
//         </div>

//         {/* Experience */}
//         <div className="mt-24">
//           {experiences.map((experience, index) => (
//             <article
//               key={experience.number}
//               className="group border-t border-border py-12 lg:py-16"
//             >
//               <div className="grid gap-10 lg:grid-cols-[100px_1fr_280px]">
//                 {/* Number */}
//                 <div>
//                   <span className="font-mono text-sm text-muted-foreground">
//                     {experience.number}
//                   </span>

//                   <div className="mt-6 hidden h-px w-8 bg-border lg:block transition-all duration-500 group-hover:w-16 group-hover:bg-primary" />
//                 </div>

//                 {/* Main content */}
//                 <div>
//                   <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
//                     <span className="text-sm font-medium uppercase tracking-wider text-primary">
//                       {experience.company}
//                     </span>

//                     <span className="text-muted-foreground">/</span>

//                     <span className="text-sm text-muted-foreground">
//                       {experience.type}
//                     </span>
//                   </div>

//                   <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-baseline sm:justify-between">
//                     <h3 className="text-3xl font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary sm:text-4xl">
//                       {experience.role}
//                     </h3>

//                     <span className="font-mono text-xs tracking-wider text-muted-foreground">
//                       {experience.period}
//                     </span>
//                   </div>

//                   <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
//                     {experience.description}
//                   </p>

//                   {/* Technologies */}
//                   <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3">
//                     {experience.technologies.map((technology) => (
//                       <span
//                         key={technology}
//                         className="text-xs font-medium uppercase tracking-wider text-muted-foreground transition-colors duration-300 group-hover:text-foreground"
//                       >
//                         {technology}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Impact */}
//                 <div className="lg:border-l lg:border-border lg:pl-8">
//                   <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
//                     Selected impact
//                   </p>

//                   <div className="space-y-5">
//                     {experience.impact.map((item) => (
//                       <div
//                         key={item.label}
//                         className="flex items-baseline justify-between gap-4"
//                       >
//                         <span className="text-2xl font-bold tracking-tight text-foreground">
//                           {item.value}
//                         </span>

//                         <span className="text-right text-xs leading-5 text-muted-foreground">
//                           {item.label}
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* Hover indicator */}
//               <div className="mt-10 h-px w-0 bg-primary transition-all duration-700 group-hover:w-full" />
//             </article>
//           ))}
//         </div>

//         {/* Closing statement */}
//         <div className="grid gap-6 border-t border-border pt-12 sm:grid-cols-2 sm:items-end">
//           <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
//             Continuous growth
//           </p>

//           <p className="text-right text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
//             Every project is another opportunity to build something better.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;



// import React from "react";

// const experiences = [
//   {
//     id: "01",
//     year: "2024",
//     period: "2024 — PRESENT",
//     company: "Company Name",
//     role: "Software Engineer",
//     type: "Full-time",
//     location: "India",

//     description:
//       "Building production-ready web applications with a focus on performance, scalability, clean architecture, and thoughtful user experiences.",

//     achievements: [
//       "Developed and maintained scalable frontend applications using React and Next.js.",
//       "Designed reusable components and improved consistency across product interfaces.",
//       "Integrated REST APIs and backend services to deliver end-to-end features.",
//       "Worked on performance optimization, debugging, testing, and production releases.",
//     ],

//     impact: [
//       { value: "20+", label: "Features shipped" },
//       { value: "35%", label: "Performance improvement" },
//       { value: "5+", label: "Major modules" },
//     ],

//     technologies: [
//       "React",
//       "Next.js",
//       "TypeScript",
//       "Node.js",
//       "REST APIs",
//       "Docker",
//     ],
//   },

//   {
//     id: "02",
//     year: "2023",
//     period: "2023 — 2024",
//     company: "Previous Company",
//     role: "Software Engineering Intern",
//     type: "Internship",
//     location: "India",

//     description:
//       "Contributed to real-world software products while working across frontend development, backend integration, debugging, and feature implementation.",

//     achievements: [
//       "Built responsive interfaces and reusable components based on product requirements.",
//       "Integrated APIs and worked with databases to support application workflows.",
//       "Investigated bugs and implemented fixes across multiple application modules.",
//       "Collaborated with developers during development, testing, and deployment cycles.",
//     ],

//     impact: [
//       { value: "10+", label: "Features delivered" },
//       { value: "4+", label: "Core modules" },
//       { value: "100%", label: "Production focused" },
//     ],

//     technologies: [
//       "JavaScript",
//       "React",
//       "PHP",
//       "MySQL",
//       "Git",
//       "Docker",
//     ],
//   },
// ];

// const Experience = () => {
//   return (
//     <section
//       id="experience"
//       className="relative overflow-hidden bg-background px-4 py-24 text-foreground sm:px-6 sm:py-32 lg:px-8"
//     >
//       {/* =========================================================
//           BACKGROUND GRID
//       ========================================================= */}
//       <div
//         className="pointer-events-none absolute inset-0 opacity-[0.035]"
//         style={{
//           backgroundImage: `
//             linear-gradient(to right, currentColor 1px, transparent 1px),
//             linear-gradient(to bottom, currentColor 1px, transparent 1px)
//           `,
//           backgroundSize: "48px 48px",
//         }}
//       />

//       {/* Ambient accent */}
//       <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />

//       <div className="relative mx-auto max-w-7xl">

//         {/* =========================================================
//             HEADER
//         ========================================================= */}
//         <header className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">

//           <div>
//             {/* Section label */}
//             <div className="mb-8 flex items-center gap-4">
//               <span className="h-px w-12 bg-primary" />

//               <span className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-primary">
//                 02 / Experience
//               </span>
//             </div>

//             {/* Main heading */}
//             <h2 className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-[-0.06em] sm:text-6xl md:text-7xl lg:text-8xl">
//               Where I've
//               <br />

//               <span className="text-primary">
//                 made an impact.
//               </span>
//             </h2>
//           </div>

//           {/* Intro */}
//           <div className="max-w-md lg:justify-self-end">
//             <p className="text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
//               A collection of roles, products, problems, and lessons that
//               have shaped the way I approach software engineering.
//             </p>

//             <div className="mt-8 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
//               <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
//               Open to interesting problems
//             </div>
//           </div>
//         </header>

//         {/* =========================================================
//             EXPERIENCE LIST
//         ========================================================= */}
//         <div className="mt-24">

//           {experiences.map((experience) => (
//             <article
//               key={experience.id}
//               className="group relative border-t border-border py-12 sm:py-16 lg:py-20"
//             >
//               {/* Hover background */}
//               <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full origin-left scale-x-0 bg-primary/[0.025] transition-transform duration-700 ease-out group-hover:scale-x-100" />

//               <div className="grid gap-10 lg:grid-cols-[90px_minmax(0,1fr)_280px] lg:gap-14">

//                 {/* =================================================
//                     NUMBER
//                 ================================================= */}
//                 <div className="flex items-start justify-between lg:block">
//                   <span className="font-mono text-sm text-muted-foreground transition-colors duration-300 group-hover:text-primary">
//                     {experience.id}
//                   </span>

//                   <span className="font-mono text-xs text-muted-foreground lg:mt-10 lg:block">
//                     {experience.year}
//                   </span>
//                 </div>

//                 {/* =================================================
//                     MAIN CONTENT
//                 ================================================= */}
//                 <div>

//                   {/* Company / Type */}
//                   <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em]">

//                     <span className="text-primary">
//                       {experience.company}
//                     </span>

//                     <span className="text-border">
//                       /
//                     </span>

//                     <span className="text-muted-foreground">
//                       {experience.type}
//                     </span>

//                     <span className="text-border">
//                       /
//                     </span>

//                     <span className="text-muted-foreground">
//                       {experience.location}
//                     </span>
//                   </div>

//                   {/* Role + Date */}
//                   <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">

//                     <h3 className="text-3xl font-semibold tracking-[-0.03em] transition-all duration-500 group-hover:translate-x-1 sm:text-4xl lg:text-5xl">
//                       {experience.role}
//                     </h3>

//                     <span className="font-mono text-xs tracking-wider text-muted-foreground">
//                       {experience.period}
//                     </span>
//                   </div>

//                   {/* Description */}
//                   <p className="mt-7 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
//                     {experience.description}
//                   </p>

//                   {/* =================================================
//                       ACHIEVEMENTS
//                   ================================================= */}
//                   <div className="mt-10 max-w-3xl">

//                     <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
//                       What I worked on
//                     </p>

//                     <div className="space-y-4">

//                       {experience.achievements.map((achievement, index) => (
//                         <div
//                           key={achievement}
//                           className="group/item flex gap-4"
//                         >
//                           <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-border transition-all duration-300 group-hover/item:bg-primary group-hover/item:shadow-[0_0_0_4px] group-hover/item:shadow-primary/10" />

//                           <p className="text-sm leading-7 text-muted-foreground transition-colors duration-300 group-hover/item:text-foreground sm:text-base">
//                             {achievement}
//                           </p>
//                         </div>
//                       ))}

//                     </div>
//                   </div>

//                   {/* =================================================
//                       TECHNOLOGIES
//                   ================================================= */}
//                   <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">

//                     {experience.technologies.map((technology) => (
//                       <span
//                         key={technology}
//                         className="font-mono text-xs text-muted-foreground transition-colors duration-300 hover:text-primary"
//                       >
//                         {technology}
//                       </span>
//                     ))}

//                   </div>
//                 </div>

//                 {/* =================================================
//                     IMPACT PANEL
//                 ================================================= */}
//                 <aside className="lg:border-l lg:border-border lg:pl-8">

//                   <p className="mb-7 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
//                     Selected impact
//                   </p>

//                   <div className="space-y-7">

//                     {experience.impact.map((item) => (
//                       <div
//                         key={item.label}
//                         className="group/stat"
//                       >
//                         <div className="flex items-baseline gap-3">

//                           <span className="text-3xl font-bold tracking-[-0.04em] transition-colors duration-300 group-hover/stat:text-primary sm:text-4xl">
//                             {item.value}
//                           </span>

//                           <span className="text-xs uppercase tracking-wider text-muted-foreground">
//                             {item.label}
//                           </span>

//                         </div>

//                         <div className="mt-3 h-px w-full bg-border">
//                           <div className="h-px w-0 bg-primary transition-all duration-700 group-hover/stat:w-full" />
//                         </div>
//                       </div>
//                     ))}

//                   </div>
//                 </aside>
//               </div>

//               {/* Bottom hover indicator */}
//               <div className="absolute bottom-0 left-0 h-px w-0 bg-primary transition-all duration-700 group-hover:w-full" />
//             </article>
//           ))}
//         </div>

//         {/* =========================================================
//             CAREER SUMMARY
//         ========================================================= */}
//         <div className="border-t border-border pt-14">

//           <div className="grid gap-8 sm:grid-cols-2 sm:items-end">

//             <div>
//               <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
//                 Continuous growth
//               </p>

//               <div className="mt-4 flex items-center gap-3">
//                 <span className="h-px w-8 bg-primary" />
//                 <span className="text-sm text-muted-foreground">
//                   2023 — Present
//                 </span>
//               </div>
//             </div>

//             <p className="max-w-xl text-left text-2xl font-medium leading-tight tracking-[-0.03em] sm:justify-self-end sm:text-right sm:text-3xl">
//               Learning from every project.
//               <span className="text-muted-foreground">
//                 {" "}
//                 Building something better with every iteration.
//               </span>
//             </p>

//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Experience;



import { NavLink } from "react-router-dom";

const TECHNOLOGIES = [
  "FastAPI",
  "React.js",
  "Docker",
  "Nginx",
  "Linux",
  "REST APIs",
];

const AREAS = [
  {
    title: "Backend Development",
    description:
      "Designed and developed backend services using FastAPI, building RESTful APIs that support reliable application workflows.",
    technologies: ["FastAPI", "REST APIs", "Python"],
  },
  {
    title: "Frontend Integration",
    description:
      "Integrated backend services with React.js applications and developed workflows for customer-facing functionality.",
    technologies: ["React.js", "API Integration"],
  },
  {
    title: "Infrastructure & Deployment",
    description:
      "Containerized applications with Docker and deployed backend services on Linux-based company servers.",
    technologies: ["Docker", "Linux"],
  },
  {
    title: "Web Infrastructure",
    description:
      "Configured Nginx as a reverse proxy to efficiently route traffic between web and mobile services.",
    technologies: ["Nginx", "Reverse Proxy"],
  },
];

const RESPONSIBILITIES = [
  "Took end-to-end ownership of a scalable web application for order placement, from system design through production deployment.",
  "Built and deployed backend services using FastAPI and developed RESTful APIs for application workflows.",
  "Integrated backend APIs with a React.js frontend to provide reliable and maintainable application functionality.",
  "Containerized backend applications using Docker to maintain consistent development and production environments.",
  "Deployed services on Linux-based company servers and worked with production infrastructure.",
  "Configured Nginx as a reverse proxy to route traffic efficiently between web and mobile services.",
  "Designed and implemented modular features for customers to view and download invoices, orders, ledgers, and outstanding reports.",
  "Applied clean architecture principles to improve code organization, maintainability, and system reliability.",
  "Participated in code reviews and Agile development cycles while collaborating across development workflows.",
];

export default function Experience() {
  return (
    <main className="min-h-[calc(100vh-73px)] bg-background text-foreground transition-colors duration-300">
      {/* Header */}
      <section className="mx-auto max-w-7xl px-4 pb-14 pt-16 sm:px-6 sm:pb-16 sm:pt-20 lg:px-8 lg:pt-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Experience
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Building software for production.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground-muted">
            My professional experience spans backend development, frontend
            integration, infrastructure, deployment, and end-to-end ownership
            of production applications.
          </p>
        </div>
      </section>

      {/* Main experience */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8 lg:pb-24">
        <div className="overflow-hidden rounded-3xl border border-border bg-surface shadow-sm">
          {/* Company header */}
          <div className="border-b border-border p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                  Professional Experience
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Software Programmer
                </h2>

                <p className="mt-2 text-lg font-medium text-foreground-muted">
                  Kolors India Pvt Ltd
                </p>
              </div>

              <div className="rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground-muted">
                Feb 2025 — Present
              </div>
            </div>

            {/* Technologies */}
            <div className="mt-7 flex flex-wrap gap-2">
              {TECHNOLOGIES.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground-muted"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          {/* Overview */}
          <div className="grid gap-10 p-6 sm:p-8 lg:grid-cols-[0.75fr_1.25fr] lg:p-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Overview
              </p>

              <h3 className="mt-3 text-2xl font-bold tracking-tight">
                End-to-end engineering
              </h3>

              <p className="mt-4 leading-7 text-foreground-muted">
                Working across the complete application lifecycle — from
                understanding requirements and designing systems to developing
                APIs, integrating frontend applications, containerizing
                services, and deploying them to production.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Key Responsibilities
              </p>

              <ul className="mt-5 space-y-4">
                {RESPONSIBILITIES.map((responsibility) => (
                  <li
                    key={responsibility}
                    className="flex gap-3 text-sm leading-6 text-foreground-muted"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />

                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of work */}
      <section className="border-y border-border bg-surface transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              What I Work On
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Across the stack
            </h2>

            <p className="mt-4 leading-7 text-foreground-muted">
              My role involves more than writing backend code. I work across
              application development, infrastructure, and production
              deployment.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {AREAS.map((area, index) => (
              <article
                key={area.title}
                className="group rounded-2xl border border-border bg-background p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-md sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-primary">
                    0{index + 1}
                  </span>

                  <span className="h-px w-12 bg-border transition-all duration-300 group-hover:w-20 group-hover:bg-primary" />
                </div>

                <h3 className="mt-7 text-xl font-semibold">
                  {area.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-foreground-muted">
                  {area.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {area.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-foreground-muted"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering approach */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Engineering Approach
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Focused on maintainable systems.
            </h2>

            <p className="mt-5 leading-7 text-foreground-muted">
              I aim to build systems that are understandable, maintainable,
              and reliable beyond the initial implementation. My development
              approach includes clean architecture, modular design, debugging,
              code reviews, and iterative development.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {[
              "Clean Architecture",
              "System Design",
              "Code Review",
              "Debugging",
              "Agile / Scrum",
              "End-to-End Ownership",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-border bg-surface p-4 text-sm font-medium text-foreground shadow-sm transition-colors duration-300 hover:border-primary/50"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-surface transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Explore More
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            See what I&apos;ve built.
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-foreground-muted">
            Explore my projects and technical skills to get a better look at
            the technologies I work with.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <NavLink
              to="/projects"
              className="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-foreground-inverse transition-colors duration-200 hover:bg-primary-hover"
            >
              View Projects
            </NavLink>

            <NavLink
              to="/contact"
              className="rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition-colors duration-200 hover:bg-surface-hover"
            >
              Get in Touch
            </NavLink>
          </div>
        </div>
      </section>
    </main>
  );
}



