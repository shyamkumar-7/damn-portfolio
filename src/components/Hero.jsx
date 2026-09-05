import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { useTheme, THEMES } from "@/theme";

import geekyBoyGreen from "@/assets/boy/3D Geeky Boy - Green.svg";
import geekyBoyOrange from "@/assets/boy/3D Geeky Boy - Orange.svg";
import geekyBoyPurple from "@/assets/boy/3D Geeky Boy - Purple.svg";
import geekyBoyRed from "@/assets/boy/3D Geeky Boy - Red.svg";
import geekyBoyWhite from "@/assets/boy/3D Geeky Boy - White.svg";
import geekyBoyYellow from "@/assets/boy/3D Geeky Boy - Yellow.svg";
import geekyBoyGray from "@/assets/boy/3D Geeky Boy - Gray.svg";


const geekyBoyImages = {
  orange: geekyBoyOrange,
  green: geekyBoyGreen,
  red: geekyBoyRed,
  yellow: geekyBoyYellow,
  purple: geekyBoyPurple,
  gray: geekyBoyGray,
  dark: geekyBoyGray,
  default: geekyBoyWhite,
};

const STATS = [
  {
    value: "1+",
    label: "Years Experience",
  },
  {
    value: "300+",
    label: "DSA & SQL Problems",
  },
  {
    value: "Full-Stack",
    label: "Engineering Focus",
  },
];

const TECH_STACK = [
  "Python",
  "FastAPI",
  "Javascript",
  "React.js",
  "Next.js",
  "Node.js",
  "Docker",
  "Gitlab"
];


const Hero = () => {

  const { theme } = useTheme();

  const [currentTheme, setCurrentTheme] = useState(theme);
  const [previousTheme, setPreviousTheme] = useState(theme);

  useEffect(() => {
    if (theme === currentTheme) {
      return;
    }

    setPreviousTheme(currentTheme);
    setCurrentTheme(theme);
  }, [theme, currentTheme]);

  useEffect(() => {
    const images = Object.values(geekyBoyImages);

    images.forEach((src) => {
      const image = new Image();
      image.src = src;
    });
  }, []);

  const currentImage =
    geekyBoyImages[currentTheme] ?? geekyBoyImages.default;

  const previousImage =
    geekyBoyImages[previousTheme] ?? geekyBoyImages.default;

  const selectedTheme =
    THEMES.find((item) => item.name === currentTheme) ?? THEMES[0];

  return (
    <main className="bg-background text-foreground transition-colors duration-300">
  
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div
          className="
            relative mx-auto grid max-w-7xl items-center gap-6
            px-4 pb-10 pt-6
            sm:px-6 sm:pb-14 sm:pt-8
            lg:grid-cols-[1fr_0.9fr] lg:gap-4
            lg:px-8 lg:pb-14 lg:pt-6
          "
        >
    
          <div className="order-2 lg:order-1">
            <div
              className="
                inline-flex items-center gap-2 rounded-full
                border border-border bg-surface
                px-3 py-1.5
                text-xs font-medium text-foreground-muted
                shadow-sm
              "
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="
                    absolute inline-flex h-full w-full
                    animate-ping rounded-full
                    bg-primary opacity-50
                  "
                />

                <span
                  className="
                    relative inline-flex h-2 w-2
                    rounded-full bg-primary
                  "
                />
              </span>

              Software Engineer · Kolors India Pvt Ltd
            </div>

            <p
              className="
                mt-5 text-sm font-semibold uppercase
                tracking-[0.2em] text-primary
              "
            >
              Hello, I&apos;m
            </p>
            <h1
              className="
                mt-2 text-5xl font-bold tracking-[-0.04em]
                sm:text-6xl lg:text-7xl
              "
            >
              Shyam Kumar
            </h1>

            <h2
              className="
                mt-3 text-xl font-semibold tracking-tight
                text-foreground-muted
                sm:text-2xl
              "
            >
              Backend & Full-Stack Developer
            </h2>

                 <p
              className="
                mt-5 max-w-2xl text-base leading-7
                text-foreground-muted
                sm:text-lg sm:leading-8
              "
            >
              I build reliable web applications, scalable APIs, and
              production-ready systems. My work spans backend development,
              frontend integration, databases, containerized infrastructure,
              and deployment.
            </p>

            <div className="mt-6">
              <p
                className="
                  text-xs font-semibold uppercase
                  tracking-widest text-foreground-muted
                "
              >
                Core Technologies
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {TECH_STACK.map((technology) => (
                  <span
                    key={technology}
                    className="
                      rounded-full border border-border
                      bg-surface px-3 py-1.5
                      text-xs font-medium text-foreground-muted
                      transition-all duration-200
                      hover:border-primary/50
                      hover:text-primary
                    "
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <NavLink
                to="/projects"
                className="
                  inline-flex items-center justify-center
                  rounded-xl bg-primary
                  px-5 py-3
                  text-sm font-semibold text-foreground-inverse
                  shadow-sm
                  transition-all duration-200
                  hover:-translate-y-0.5
                  hover:bg-primary-hover
                "
              >
                View My Work

                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  className="ml-2 h-4 w-4"
                  aria-hidden="true"
                >
                  <path
                    d="M4 10h11M10 5l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </NavLink>

              <NavLink
                to="/contact"
                className="
                  inline-flex items-center justify-center
                  rounded-xl border border-border
                  bg-surface px-5 py-3
                  text-sm font-semibold text-foreground
                  transition-all duration-200
                  hover:-translate-y-0.5
                  hover:border-primary/50
                  hover:bg-surface-hover
                "
              >
                Get in Touch
              </NavLink>
            </div>
          </div>

          <div
            className="
              order-1 flex items-center justify-center
              lg:order-2 lg:justify-end
            "
          >
            <div className="relative flex w-full items-center justify-center">
     
              <div
                aria-hidden="true"
                className="
                  absolute h-56 w-56 rounded-full
                  bg-primary/10 blur-3xl
                  sm:h-72 sm:w-72
                "
              />

        
              <div
                className="
                  relative z-10 aspect-square w-full
                  max-w-75
                  sm:max-w-90
                  lg:max-w-107.5
                  xl:max-w-117.5
                "
              >
            
                <img
                  src={previousImage}
                  alt=""
                  aria-hidden="true"
                  className="
                    absolute inset-0 h-full w-full
                    object-contain opacity-0
                  "
                />

                <img
                  src={currentImage}
                  alt="3D illustration of a software developer"
                  className="
                    absolute inset-0 h-full w-full
                    object-contain animate-boy-change
                  "
                  style={{
                    filter: `drop-shadow(
                      0 25px 35px ${selectedTheme.shadow}
                    )`,
                  }}
                />
              </div>

              <div
                className="
                  absolute bottom-2 left-1/2 z-20
                  -translate-x-1/2
                  rounded-2xl border border-border
                  bg-surface/90
                  px-4 py-3
                  shadow-lg backdrop-blur-md
                  sm:bottom-5
                "
              >
                <div className="flex items-center gap-3">
             
                  <div
                    className="
                      flex h-9 w-9 items-center justify-center
                      rounded-xl bg-primary
                      text-xs font-bold text-foreground-inverse
                    "
                  >
                    &lt;/&gt;
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-foreground">
                      Building & Shipping
                    </p>

                    <p className="mt-0.5 text-[11px] text-foreground-muted">
                      APIs · Web Apps · Systems
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="
          border-y border-border
          bg-surface
          transition-colors duration-300
        "
      >
        <div
          className="
            mx-auto grid max-w-7xl
            grid-cols-1
            divide-y divide-border
            sm:grid-cols-3
            sm:divide-x sm:divide-y-0
          "
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="px-6 py-6 text-center sm:py-7"
            >
              <p
                className="
                  text-2xl font-bold tracking-tight
                  text-foreground
                  sm:text-3xl
                "
              >
                {stat.value}
              </p>

              <p
                className="
                  mt-1 text-xs font-medium uppercase
                  tracking-widest text-foreground-muted
                "
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section
        className="
          mx-auto max-w-7xl
          px-4 py-16
          sm:px-6
          lg:px-8 lg:py-20
        "
      >
        <div
          className="
            grid gap-10
            lg:grid-cols-2
            lg:items-center
          "
        >
          <div>
            <p
              className="
                text-sm font-semibold uppercase
                tracking-[0.2em] text-primary
              "
            >
              What I Do
            </p>

            <h2
              className="
                mt-3 text-3xl font-bold tracking-tight
                sm:text-4xl
              "
            >
              From idea to production.
            </h2>
          </div>
          <div>
            <p className="leading-8 text-foreground-muted">
              I work across the product lifecycle — translating
              requirements into working software, designing APIs,
              building responsive interfaces, working with databases,
              containerizing applications, and deploying services to
              production environments.
            </p>

            <NavLink
              to="/about"
              className="
                mt-5 inline-flex items-center
                text-sm font-semibold text-primary
                transition-colors
                hover:text-primary-hover
              "
            >
              More about me

              <svg
                viewBox="0 0 20 20"
                fill="none"
                className="ml-2 h-4 w-4"
                aria-hidden="true"
              >
                <path
                  d="M4 10h11M10 5l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </NavLink>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;

