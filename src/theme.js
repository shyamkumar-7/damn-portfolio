import { createContext, useContext } from "react";

export const DEFAULT_THEME = "default";

/** Palettes offered in the theme switcher. `name` matches a `[data-theme]`
 *  block in index.css; `color` is the swatch shown in the palette. */
// export const THEMES = [
//   { name: "default", label: "Default", color: "#ffffff" },
//   { name: "orange", label: "Orange", color: "#f97316" },
//   { name: "green", label: "Green", color: "#16a34a" },
//   { name: "red", label: "Red", color: "#dc2626" },
//   { name: "yellow", label: "Yellow", color: "#eab308" },
//   { name: "purple", label: "Purple", color: "#9333ea" },
//   { name: "dark", label: "Dark", color: "#111827" },
// ];

export const THEMES = [
    {
        name: "default",
        label: "Default",
        color: "#ffffff",
        shadow: "rgba(0, 0, 0, 0.25)",
    },
    {
        name: "orange",
        label: "Orange",
        color: "#f97316",
        shadow: "rgba(249, 115, 22, 0.45)",
    },
    {
        name: "green",
        label: "Green",
        color: "#16a34a",
        shadow: "rgba(22, 163, 74, 0.45)",
    },
    {
        name: "red",
        label: "Red",
        color: "#dc2626",
        shadow: "rgba(220, 38, 38, 0.45)",
    },
    {
        name: "yellow",
        label: "Yellow",
        color: "#eab308",
        shadow: "rgba(234, 179, 8, 0.45)",
    },
    {
        name: "purple",
        label: "Purple",
        color: "#9333ea",
        shadow: "rgba(147, 51, 234, 0.45)",
    },
    {
        name: "dark",
        label: "Dark",
        color: "#111827",
        shadow: "rgba(255, 255, 255, 0.2)",
    },
];

export const ThemeContext = createContext(null);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used inside <App />");
  return context;
};
