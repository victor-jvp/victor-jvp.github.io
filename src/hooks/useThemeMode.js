import { useState, useLayoutEffect, useCallback } from "react";
import { useGlobalState, Theme, ActionType } from "gatsby-theme-portfolio-minimal/src/context";

const STORAGE_KEY = "theme-mode";
const MODES = ["light", "dark", "auto"];

function resolveTheme(mode) {
  if (mode === "dark") return "darkTheme";
  if (mode === "light") return "lightTheme";
  if (typeof window === "undefined") return "lightTheme";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "darkTheme"
    : "lightTheme";
}

export default function useThemeMode() {
  const { dispatch } = useGlobalState();
  const [mode, setMode] = useState("auto");

  useLayoutEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && MODES.includes(stored) && stored !== "auto") {
      setMode(stored);
    }
  }, []);

  useLayoutEffect(() => {
    const resolved = resolveTheme(mode);
    document.body.setAttribute("data-theme", resolved);
    dispatch({
      type: ActionType.SetTheme,
      value: resolved === "darkTheme" ? Theme.Dark : Theme.Light,
    });

    if (mode === "auto") {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      const handler = (e) => {
        const updated = e.matches ? "darkTheme" : "lightTheme";
        document.body.setAttribute("data-theme", updated);
        dispatch({
          type: ActionType.SetTheme,
          value: e.matches ? Theme.Dark : Theme.Light,
        });
      };
      mq.addEventListener("change", handler);
      return () => mq.removeEventListener("change", handler);
    }
  }, [mode, dispatch]);

  const cycle = useCallback(() => {
    setMode((prev) => {
      const idx = MODES.indexOf(prev);
      const next = MODES[(idx + 1) % MODES.length];
      localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  return { mode, cycle };
}
