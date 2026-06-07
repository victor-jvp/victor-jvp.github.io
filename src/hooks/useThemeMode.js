import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "theme-mode";
const MODES = ["light", "dark", "auto"];

function getStoredMode() {
  if (typeof window === "undefined") return "auto";
  return localStorage.getItem(STORAGE_KEY) || "auto";
}

function resolveTheme(mode) {
  if (mode === "dark") return "darkTheme";
  if (mode === "light") return "lightTheme";
  if (typeof window === "undefined") return "lightTheme";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "darkTheme"
    : "lightTheme";
}

export default function useThemeMode() {
  const [mode, setMode] = useState(getStoredMode);

  const cycle = useCallback(() => {
    setMode((prev) => {
      const idx = MODES.indexOf(prev);
      const next = MODES[(idx + 1) % MODES.length];
      localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  useEffect(() => {
    const theme = resolveTheme(mode);
    document.body.setAttribute("data-theme", theme);

    if (mode === "auto") {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      const handler = (e) => {
        document.body.setAttribute(
          "data-theme",
          e.matches ? "darkTheme" : "lightTheme",
        );
      };
      mq.addEventListener("change", handler);
      return () => mq.removeEventListener("change", handler);
    }
  }, [mode]);

  return { mode, cycle };
}
