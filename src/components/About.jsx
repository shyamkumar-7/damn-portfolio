// import React from "react";

// const stats = [
//   {
//     value: "1+",
//     label: "Years",
//     description: "Professional experience",
//   },
//   {
//     value: "10+",
//     label: "Projects",
//     description: "Built & shipped",
//   },
//   {
//     value: "15+",
//     label: "Technologies",
//     description: "Worked with",
//   },
// ];

// const capabilities = [
//   "Frontend Engineering",
//   "Backend Development",
//   "API Integration",
//   "Performance Optimization",
//   "Responsive Design",
//   "Database Design",
//   "Deployment & DevOps",
//   "AI / ML Integration",
// ];

// const About = () => {
//   return (
//     <section
//       id="about"
//       className="relative overflow-hidden bg-background px-4 py-24 text-foreground sm:px-6 sm:py-32 lg:px-8"
//     >
//       {/* Background grid */}
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

//       {/* Accent glow */}
//       <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />

//       <div className="relative mx-auto max-w-7xl">

//         {/* ================================================
//             HEADER
//         ================================================= */}

//         <div className="mb-24 flex items-center gap-4">
//           <span className="h-px w-12 bg-primary" />

//           <span className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-primary">
//             01 / About Me
//           </span>
//         </div>

//         {/* ================================================
//             BIG INTRO
//         ================================================= */}

//         <div className="grid gap-12 lg:grid-cols-[1.5fr_0.5fr]">

//           <div>
//             <h2 className="max-w-5xl text-5xl font-bold leading-[0.95] tracking-[-0.06em] sm:text-6xl md:text-7xl lg:text-8xl">
//               I build
//               <br />

//               <span className="text-primary">
//                 digital experiences
//               </span>

//               <br />

//               that solve
//               <br />

//               real problems.
//             </h2>
//           </div>

//           <div className="flex items-end lg:pb-2">
//             <div className="max-w-sm">
//               <p className="text-base leading-8 text-muted-foreground sm:text-lg">
//                 I'm a software engineer who enjoys turning ideas into
//                 reliable, scalable, and intuitive products.
//               </p>

//               <p className="mt-6 text-base leading-8 text-muted-foreground">
//                 I care about the details — from architecture and performance
//                 to the tiny interactions that make software feel good to use.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* ================================================
//             STATS
//         ================================================= */}

//         <div className="mt-24 grid border-y border-border sm:grid-cols-3">

//           {stats.map((stat, index) => (
//             <div
//               key={stat.label}
//               className={`
//                 group relative py-10
//                 sm:px-8
//                 ${index !== 0 ? "border-t sm:border-l sm:border-t-0" : ""}
//                 border-border
//               `}
//             >
//               <span className="font-mono text-xs text-muted-foreground">
//                 0{index + 1}
//               </span>

//               <div className="mt-6 flex items-baseline gap-3">
//                 <span className="text-5xl font-bold tracking-[-0.05em] transition-colors duration-300 group-hover:text-primary sm:text-6xl">
//                   {stat.value}
//                 </span>

//                 <span className="text-sm uppercase tracking-wider text-muted-foreground">
//                   {stat.label}
//                 </span>
//               </div>

//               <p className="mt-3 text-sm text-muted-foreground">
//                 {stat.description}
//               </p>

//               <div className="absolute bottom-0 left-0 h-px w-0 bg-primary transition-all duration-500 group-hover:w-full" />
//             </div>
//           ))}

//         </div>

//         {/* ================================================
//             PHILOSOPHY
//         ================================================= */}

//         <div className="mt-28 grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

//           <div>
//             <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
//               How I think
//             </p>

//             <div className="mt-5 h-px w-16 bg-border" />
//           </div>

//           <div>
//             <p className="max-w-4xl text-3xl font-medium leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl">
//               Good software isn't just about making things work.
//               <span className="text-muted-foreground">
//                 {" "}
//                 It's about making complex things feel simple.
//               </span>
//             </p>
//           </div>
//         </div>

//         {/* ================================================
//             CAPABILITIES
//         ================================================= */}

//         <div className="mt-28 border-t border-border pt-12">

//           <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">

//             <div>
//               <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
//                 What I do
//               </p>

//               <h3 className="mt-4 text-2xl font-semibold tracking-tight">
//                 Capabilities
//               </h3>
//             </div>

//             <div className="grid sm:grid-cols-2">

//               {capabilities.map((capability, index) => (
//                 <div
//                   key={capability}
//                   className="group flex items-center gap-5 border-b border-border py-5"
//                 >
//                   <span className="font-mono text-xs text-muted-foreground transition-colors group-hover:text-primary">
//                     {String(index + 1).padStart(2, "0")}
//                   </span>

//                   <span className="text-base text-muted-foreground transition-all duration-300 group-hover:translate-x-2 group-hover:text-foreground">
//                     {capability}
//                   </span>

//                   <span className="ml-auto text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 group-hover:text-primary">
//                     →
//                   </span>
//                 </div>
//               ))}

//             </div>

//           </div>
//         </div>

//         {/* ================================================
//             CLOSING
//         ================================================= */}

//         <div className="mt-28 flex flex-col gap-6 border-t border-border pt-10 sm:flex-row sm:items-center sm:justify-between">

//           <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
//             Based in India
//           </p>

//           <p className="text-sm text-muted-foreground">
//             Designing • Developing • Learning
//           </p>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default About;


// import React, { useEffect, useRef, useState } from "react";

// const stats = [
//   {
//     value: "01+",
//     label: "Years building",
//   },
//   {
//     value: "10+",
//     label: "Projects shipped",
//   },
//   {
//     value: "15+",
//     label: "Technologies",
//   },
//   {
//     value: "∞",
//     label: "Things to learn",
//   },
// ];

// const principles = [
//   {
//     number: "01",
//     title: "Build with purpose",
//     text: "Every feature should solve a real problem, not simply add complexity.",
//   },
//   {
//     number: "02",
//     title: "Keep it simple",
//     text: "Complex systems should feel simple to the people using them.",
//   },
//   {
//     number: "03",
//     title: "Obsess over details",
//     text: "Performance, accessibility, spacing and interactions all matter.",
//   },
// ];

// const capabilities = [
//   {
//     id: "01",
//     title: "Frontend",
//     skills: ["React", "Next.js", "TypeScript", "Tailwind"],
//   },
//   {
//     id: "02",
//     title: "Backend",
//     skills: ["Node.js", "PHP", "REST APIs", "Express"],
//   },
//   {
//     id: "03",
//     title: "Data",
//     skills: ["MySQL", "MariaDB", "Elasticsearch"],
//   },
//   {
//     id: "04",
//     title: "Infrastructure",
//     skills: ["Docker", "Git", "Linux", "Deployment"],
//   },
// ];

// const About = () => {
//   const sectionRef = useRef(null);

//   const [visible, setVisible] = useState(false);
//   const [activeCapability, setActiveCapability] = useState("01");

//   const [mousePosition, setMousePosition] = useState({
//     x: 0,
//     y: 0,
//   });

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setVisible(true);
//           observer.disconnect();
//         }
//       },
//       {
//         threshold: 0.1,
//       }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   const handleMouseMove = (event) => {
//     const rect = event.currentTarget.getBoundingClientRect();

//     setMousePosition({
//       x: ((event.clientX - rect.left) / rect.width - 0.5) * 20,
//       y: ((event.clientY - rect.top) / rect.height - 0.5) * 20,
//     });
//   };

//   return (
//     <section
//       ref={sectionRef}
//       id="about"
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

//       {/* Ambient Light */}
//       <div
//         className="pointer-events-none absolute h-[500px] w-[500px] rounded-full bg-primary/10 blur-[140px]"
//         style={{
//           left: `${50 + mousePosition.x}%`,
//           top: `${35 + mousePosition.y}%`,
//           transform: "translate(-50%, -50%)",
//           transition: "left 1s ease, top 1s ease",
//         }}
//       />

//       <div className="relative mx-auto max-w-7xl">

//         {/* Section Label */}
//         <div
//           className={`flex items-center gap-4 transition-all duration-1000 ${
//             visible
//               ? "translate-y-0 opacity-100"
//               : "translate-y-8 opacity-0"
//           }`}
//         >
//           <span className="h-px w-12 bg-primary" />

//           <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
//             01 / About
//           </span>
//         </div>

//         {/* Hero */}
//         <div className="mt-16 grid gap-16 lg:grid-cols-[1.4fr_0.6fr]">

//           {/* Main Statement */}
//           <div
//             className={`transition-all duration-1000 ${
//               visible
//                 ? "translate-y-0 opacity-100"
//                 : "translate-y-12 opacity-0"
//             }`}
//           >
//             <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
//               Software Engineer / Problem Solver
//             </p>

//             <h2 className="text-5xl font-bold leading-[0.9] tracking-[-0.07em] sm:text-6xl md:text-7xl lg:text-8xl">
//               I turn
//               <br />

//               <span className="text-primary">
//                 ideas
//               </span>

//               <br />

//               into
//               <br />

//               <span className="text-muted-foreground">
//                 products.
//               </span>
//             </h2>
//           </div>

//           {/* Interactive Profile Panel */}
//           <div
//             onMouseMove={handleMouseMove}
//             className="group relative flex min-h-[360px] items-end overflow-hidden border border-border bg-card/30 p-6 sm:p-8"
//           >
//             <div className="absolute right-6 top-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
//               19°N / 73°E
//             </div>

//             {/* Outer Circle */}
//             <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/20 transition-transform duration-700 group-hover:scale-125" />

//             {/* Inner Circle */}
//             <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/30 transition-transform duration-700 group-hover:scale-110" />

//             {/* Center */}
//             <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_30px] shadow-primary/50" />

//             <div className="relative z-10">

//               <div className="mb-4 flex items-center gap-3">
//                 <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />

//                 <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
//                   Currently building
//                 </span>
//               </div>

//               <p className="max-w-xs text-2xl font-medium leading-tight">
//                 Software that makes complex things feel simple.
//               </p>

//             </div>
//           </div>
//         </div>

//         {/* Stats */}
//         <div className="mt-24 grid border-y border-border sm:grid-cols-2 lg:grid-cols-4">

//           {stats.map((stat, index) => (
//             <div
//               key={stat.label}
//               className="group relative border-border py-8 sm:px-7 lg:border-l lg:first:border-l-0"
//             >
//               <span className="font-mono text-[10px] text-muted-foreground">
//                 {String(index + 1).padStart(2, "0")}
//               </span>

//               <div className="mt-5">
//                 <span className="text-4xl font-bold tracking-[-0.05em] transition-colors duration-300 group-hover:text-primary sm:text-5xl">
//                   {stat.value}
//                 </span>
//               </div>

//               <p className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">
//                 {stat.label}
//               </p>

//               <div className="absolute bottom-0 left-0 h-px w-0 bg-primary transition-all duration-500 group-hover:w-full" />
//             </div>
//           ))}

//         </div>

//         {/* Introduction */}
//         <div className="mt-28 grid gap-12 lg:grid-cols-[0.5fr_1.5fr]">

//           <div>
//             <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
//               A little about me
//             </p>
//           </div>

//           <div>
//             <p className="max-w-5xl text-3xl font-medium leading-[1.15] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
//               I'm interested in the space between{" "}
//               <span className="text-primary">
//                 engineering, design, and product.
//               </span>
//             </p>

//             <p className="mt-8 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
//               I enjoy understanding how things work, breaking complicated
//               problems into smaller pieces, and turning those ideas into
//               software that people can actually use.
//             </p>
//           </div>

//         </div>

//         {/* Principles */}
//         <div className="mt-28">

//           <div className="mb-10 flex items-end justify-between border-b border-border pb-5">

//             <div>
//               <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
//                 Principles
//               </p>

//               <h3 className="mt-3 text-2xl font-semibold">
//                 How I build
//               </h3>
//             </div>

//             <span className="hidden font-mono text-xs text-muted-foreground sm:block">
//               03 principles
//             </span>

//           </div>

//           <div className="grid lg:grid-cols-3">

//             {principles.map((principle) => (
//               <div
//                 key={principle.number}
//                 className="group border-b border-border py-8 lg:border-l lg:px-8 lg:first:border-l-0"
//               >
//                 <span className="font-mono text-xs text-primary">
//                   {principle.number}
//                 </span>

//                 <h4 className="mt-8 text-xl font-semibold transition-transform duration-300 group-hover:translate-x-2">
//                   {principle.title}
//                 </h4>

//                 <p className="mt-4 text-sm leading-7 text-muted-foreground">
//                   {principle.text}
//                 </p>

//                 <div className="mt-8 h-px w-8 bg-border transition-all duration-500 group-hover:w-20 group-hover:bg-primary" />
//               </div>
//             ))}

//           </div>
//         </div>

//         {/* Technical Toolkit */}
//         <div className="mt-28 border-t border-border pt-12">

//           <div className="grid gap-12 lg:grid-cols-[0.5fr_1.5fr]">

//             <div>
//               <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
//                 Technical toolkit
//               </p>

//               <h3 className="mt-4 text-2xl font-semibold">
//                 What I work with
//               </h3>
//             </div>

//             <div className="grid gap-10 md:grid-cols-[220px_1fr]">

//               {/* Categories */}
//               <div className="border-l border-border">

//                 {capabilities.map((capability) => (
//                   <button
//                     key={capability.id}
//                     onMouseEnter={() =>
//                       setActiveCapability(capability.id)
//                     }
//                     className={`flex w-full items-center gap-4 border-l-2 px-5 py-4 text-left transition-all duration-300 ${
//                       activeCapability === capability.id
//                         ? "border-primary bg-primary/5 text-foreground"
//                         : "border-transparent text-muted-foreground hover:text-foreground"
//                     }`}
//                   >
//                     <span className="font-mono text-[10px]">
//                       {capability.id}
//                     </span>

//                     <span className="text-sm">
//                       {capability.title}
//                     </span>
//                   </button>
//                 ))}

//               </div>

//               {/* Skills */}
//               <div className="min-h-[180px]">

//                 {capabilities.map((capability) => (
//                   <div
//                     key={capability.id}
//                     className={
//                       activeCapability === capability.id
//                         ? "block"
//                         : "hidden"
//                     }
//                   >
//                     <div className="flex flex-wrap gap-3">

//                       {capability.skills.map((skill) => (
//                         <span
//                           key={skill}
//                           className="border border-border px-4 py-2 text-sm text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary"
//                         >
//                           {skill}
//                         </span>
//                       ))}

//                     </div>
//                   </div>
//                 ))}

//               </div>

//             </div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default About;

import { NavLink } from "react-router-dom";

const focusAreas = [
  {
    title: "Backend Engineering",
    description:
      "Building reliable REST APIs and backend services with clean, modular architectures.",
    technologies: ["FastAPI", "Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Full-Stack Development",
    description:
      "Developing responsive web applications and integrating frontend experiences with backend services.",
    technologies: ["React.js", "Next.js", "Tailwind CSS", "React Router"],
  },
  {
    title: "Deployment & Infrastructure",
    description:
      "Containerizing applications and deploying production services on Linux-based infrastructure.",
    technologies: ["Docker", "Linux", "Nginx", "Git"],
  },
];

const highlights = [
  {
    value: "1+",
    label: "Years of Experience",
  },
  {
    value: "300+",
    label: "DSA & SQL Problems",
  },
  {
    value: "2024",
    label: "B.Tech Graduation",
  },
];

export default function About() {
  return (
    <section className="min-h-[calc(100vh-73px)] bg-background text-foreground transition-colors duration-300">
      {/* Hero */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            About Me
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            I build software that solves{" "}
            <span className="text-primary">real problems.</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-foreground-muted sm:text-xl">
            I&apos;m Shyam Kumar, a Software Engineer focused on backend and
            full-stack development. I enjoy taking ideas from requirements
            through implementation, deployment, and production.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <p className="text-3xl font-bold text-primary">{item.value}</p>

              <p className="mt-2 text-sm text-foreground-muted">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Introduction */}
      <div className="border-y border-border bg-surface transition-colors duration-300">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:px-8 lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              My Approach
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              From idea to production.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-7 text-foreground-muted">
            <p>
              I work across the complete software development lifecycle —
              understanding requirements, designing solutions, developing APIs,
              building frontend integrations, and deploying applications.
            </p>

            <p>
              In my professional experience, I have worked on production web
              applications involving backend services, REST APIs, React
              integrations, Dockerized infrastructure, Linux servers, and Nginx
              reverse-proxy configuration.
            </p>

            <p>
              I care about writing maintainable code, understanding how systems
              work under the hood, and building solutions that are reliable in
              real-world environments.
            </p>
          </div>
        </div>
      </div>

      {/* Focus Areas */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            What I Do
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Areas I work in
          </h2>

          <p className="mt-4 leading-7 text-foreground-muted">
            My work sits mainly at the intersection of backend engineering,
            frontend development, and production infrastructure.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {focusAreas.map((area) => (
            <article
              key={area.title}
              className="group rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-md"
            >
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <span className="text-lg font-bold">+</span>
              </div>

              <h3 className="text-xl font-semibold text-foreground">
                {area.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-foreground-muted">
                {area.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {area.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground-muted transition-colors duration-200 group-hover:border-primary/40"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="border-t border-border bg-surface transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Education
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Computer Science
              </h2>
            </div>

            <div className="rounded-2xl border border-border bg-background p-6 shadow-sm sm:p-8">
              <div className="flex flex-col justify-between gap-3 sm:flex-row">
                <div>
                  <h3 className="text-xl font-semibold">
                    Bachelor of Technology
                  </h3>

                  <p className="mt-1 text-foreground-muted">
                    Computer Science Engineering
                  </p>
                </div>

                <span className="text-sm font-medium text-primary">
                  2020 — 2024
                </span>
              </div>

              <p className="mt-5 font-medium">
                Indian Institute of Information Technology, Pune
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Data Structures & Algorithms",
                  "Object-Oriented Programming",
                  "Operating Systems",
                  "Database Management Systems",
                  "SDLC",
                ].map((course) => (
                  <span
                    key={course}
                    className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-foreground-muted"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="rounded-3xl border border-border bg-surface p-8 text-center shadow-sm sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            What&apos;s next?
          </p>

          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
            Want to see what I&apos;ve built?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-foreground-muted">
            Explore my technical skills, professional experience, and projects
            to see how I approach software development.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <NavLink
              to="/projects"
              className="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-foreground-inverse transition-all duration-200 hover:bg-primary-hover"
            >
              View Projects
            </NavLink>

            <NavLink
              to="/contact"
              className="rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition-all duration-200 hover:bg-surface-hover"
            >
              Get in Touch
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}