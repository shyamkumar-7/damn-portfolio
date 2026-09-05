import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

import ThemePalette from "@/components/ThemePalette";

import HangingBoard from "./HangingBoard/HangingBoard";
import UnderMaintenance from "./ErrorPage/UnderMaintenance";
import ResumeModal from "./Resume/ResumeModal";

const NAV_LINKS = [
  { label: "About me", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Get in touch", href: "/contact" },
  { label: "AI Assistant", href: "/ai-chat", maintenance: true },
  { label: "Admin", href: "/admin", maintenance: true },
];

export default function Navbar() {
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMaintenanceOpen, setIsMaintenanceOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const desktopPaletteRef = useRef(null);
  const mobilePaletteRef = useRef(null);

  useEffect(() => {
    if (!isPaletteOpen) return;

    const closePalette = (event) => {
      if (event.type === "keydown" && event.key !== "Escape") {
        return;
      }

      if (event.type === "mousedown") {
        const clickedInsideDesktop =
          desktopPaletteRef.current?.contains(event.target);

        const clickedInsideMobile =
          mobilePaletteRef.current?.contains(event.target);

        if (clickedInsideDesktop || clickedInsideMobile) {
          return;
        }
      }

      setIsPaletteOpen(false);
    };

    document.addEventListener("mousedown", closePalette);
    document.addEventListener("keydown", closePalette);

    return () => {
      document.removeEventListener("mousedown", closePalette);
      document.removeEventListener("keydown", closePalette);
    };
  }, [isPaletteOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const closeMenu = () => {
      setIsMenuOpen(false);
    };

    window.addEventListener("resize", closeMenu);

    return () => {
      window.removeEventListener("resize", closeMenu);
    };
  }, [isMenuOpen]);

  const linkClass = ({ isActive }) =>
    `block rounded-lg px-3 py-2 text-sm transition-colors duration-200 ${
      isActive
        ? "bg-surface text-primary"
        : "text-foreground-muted hover:bg-surface hover:text-foreground"
    }`;

  const handleNavClick = (event, link) => {
    if (link.maintenance) {
      event.preventDefault();

      setIsMaintenanceOpen(true);
      setIsMenuOpen(false);
      setIsPaletteOpen(false);

      return;
    }

    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <header className="relative sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md transition-colors duration-300">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

          {/* Logo */}
          <NavLink
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="text-lg font-bold tracking-tight text-foreground"
          >
            Shyam<span className="text-primary">.</span>
          </NavLink>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-2 md:flex">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                onClick={(event) => handleNavClick(event, link)}
                className={linkClass}
              >
                {link.label}
              </NavLink>
            ))}

            {/* Theme button */}
            <div
              className="relative ml-2"
              ref={desktopPaletteRef}
            >
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={isPaletteOpen}
                aria-label="Choose a theme"
                onClick={() => setIsPaletteOpen((open) => !open)}
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-border text-foreground transition-all duration-200 hover:bg-surface-hover hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5"
                >
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 2v2" />
                  <path d="M12 20v2" />
                  <path d="m4.93 4.93 1.42 1.42" />
                  <path d="m17.66 17.66 1.41 1.41" />
                  <path d="M2 12h2" />
                  <path d="M20 12h2" />
                  <path d="m6.34 17.66-1.41 1.41" />
                  <path d="m19.07 4.93-1.41 1.41" />
                </svg>
              </button>

              {isPaletteOpen && (
                <ThemePalette
                  onSelect={() => setIsPaletteOpen(false)}
                />
              )}
            </div>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 md:hidden">

            {/* Mobile theme */}
            <div
              className="relative"
              ref={mobilePaletteRef}
            >
              <button
                type="button"
                aria-label="Choose a theme"
                aria-haspopup="true"
                aria-expanded={isPaletteOpen}
                onClick={() => setIsPaletteOpen((open) => !open)}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground transition-colors hover:bg-surface-hover"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5"
                >
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 2v2" />
                  <path d="M12 20v2" />
                  <path d="m4.93 4.93 1.42 1.42" />
                  <path d="m17.66 17.66 1.41 1.41" />
                  <path d="M2 12h2" />
                  <path d="M20 12h2" />
                  <path d="m6.34 17.66-1.41 1.41" />
                  <path d="m19.07 4.93-1.41 1.41" />
                </svg>
              </button>

              {isPaletteOpen && (
                <ThemePalette
                  onSelect={() => setIsPaletteOpen(false)}
                />
              )}
            </div>

            {/* Mobile menu */}
            <button
              type="button"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((open) => !open)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground transition-colors hover:bg-surface-hover"
            >
              {isMenuOpen ? (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5"
                >
                  <path d="M6 6l12 12" />
                  <path d="M18 6 6 18" />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5"
                >
                  <path d="M4 6h16" />
                  <path d="M4 12h16" />
                  <path d="M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <div
          className={`overflow-hidden border-t border-border transition-all duration-300 md:hidden ${
            isMenuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  onClick={(event) => handleNavClick(event, link)}
                  className={linkClass}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Hanging board */}
      <HangingBoard
        onResumeClick={() => setIsResumeModalOpen(true)}
      />

      {/* Maintenance modal */}
      {isMaintenanceOpen && (
        <UnderMaintenance
          onClose={() => setIsMaintenanceOpen(false)}
        />
      )}

      {/* Resume modal */}
      {isResumeModalOpen && (
        <ResumeModal
          onClose={() => setIsResumeModalOpen(false)}
        />
      )}
    </>
  );
}