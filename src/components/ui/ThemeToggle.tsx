"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import type { Dictionary } from "@/i18n/types";
import { useTheme } from "../ThemeProvider";

export function ThemeToggle({
  labels,
  className = "",
}: {
  labels: Dictionary["theme"];
  className?: string;
}) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    toggleTheme({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={isDark ? labels.switchToLight : labels.switchToDark}
      className={`relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border border-pink-300/50 bg-white/60 text-[#3b2430] transition-colors hover:bg-white/90 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "moon" : "sun"}
          initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="flex items-center justify-center"
        >
          {isDark ? (
            <Moon className="h-4 w-4 text-violet-300" />
          ) : (
            <Sun className="h-4 w-4 text-pink-500" />
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
