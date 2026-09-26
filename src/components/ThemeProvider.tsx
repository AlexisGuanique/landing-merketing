"use client";

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";

type Theme = "light" | "dark";
type Origin = { x: number; y: number };

const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: (origin?: Origin) => void;
} | null>(null);

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}

type DocumentWithViewTransition = Document & {
  startViewTransition?: (callback: () => void) => { finished: Promise<void> };
};

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const timeouts = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    // Prefer the class already applied by the anti-flash script to avoid
    // mounting the wrong background canvas for a frame.
    const fromDom = document.documentElement.classList.contains("dark");
    const stored = localStorage.getItem("theme");
    const next: Theme = fromDom || stored === "dark" ? "dark" : "light";
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(next);
    if (next === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");

    const pending = timeouts.current;
    return () => {
      pending.forEach(clearTimeout);
    };
  }, []);

  function toggleTheme(origin?: Origin) {
    const next = theme === "light" ? "dark" : "light";
    const root = document.documentElement;

    const x = origin?.x ?? window.innerWidth - 60;
    const y = origin?.y ?? 40;
    root.style.setProperty("--vt-x", `${x}px`);
    root.style.setProperty("--vt-y", `${y}px`);

    function applyTheme() {
      setTheme(next);
      localStorage.setItem("theme", next);
      if (next === "dark") root.classList.add("dark");
      else root.classList.remove("dark");
    }

    const doc = document as DocumentWithViewTransition;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (doc.startViewTransition && !reduceMotion) {
      doc.startViewTransition(applyTheme);
    } else {
      root.classList.add("theme-transitioning");
      applyTheme();
      const t = setTimeout(() => root.classList.remove("theme-transitioning"), 2200);
      timeouts.current.push(t);
    }
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}
