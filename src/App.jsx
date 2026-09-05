import { useEffect, useMemo, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "@/components/Navbar";
import { DEFAULT_THEME, ThemeContext } from "@/theme";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import About from "./components/About";

import AIChat from "./components/AIchat";
import Error from "./components/ErrorPage/Error";

import ProtectedRoute from "./components/ProtectedRoute";

import AdminMain from "./components/Admin/AdminMain";
import AdminLogin from "./components/Admin/AdminLogin";
import PublicLayout from "./PublicLayout";


const PlaceholderPage = ({ title }) => {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-73px)] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
      <div>
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
          Portfolio
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || DEFAULT_THEME;
  });

  // useEffect(() => {
  //   document.documentElement.dataset.theme = theme;
  //   localStorage.setItem("theme", theme);
  // }, [theme]);

  useEffect(() => {
    const root = document.documentElement;

    root.classList.add("theme-transition");
    root.dataset.theme = theme;
    localStorage.setItem("theme", theme);

    const timeout = setTimeout(() => {
      root.classList.remove("theme-transition");
    }, 350);

    return () => clearTimeout(timeout);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext value={value}>
      <BrowserRouter>
        <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
          <Routes>

            {/* Public pages - Navbar included */}
            <Route element={<PublicLayout />}>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/ai-chat" element={<AIChat />} />
            </Route>

            {/* Admin login - NO Navbar */}
            <Route path="/admin/login" element={<AdminLogin />} />

            {/* Protected admin - NO Navbar */}
            <Route element={<ProtectedRoute />}>
              <Route path="/admin" element={<AdminMain />} />
            </Route>

            {/* 404 - NO Navbar */}
            <Route path="*" element={<Error />} />

          </Routes>
        </div>
      </BrowserRouter>
    </ThemeContext>
  );
}