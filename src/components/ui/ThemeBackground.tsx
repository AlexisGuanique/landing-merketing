"use client";

import { useTheme } from "../ThemeProvider";
import { PetalField } from "./PetalField";
import { StarField } from "./StarField";

export function ThemeBackground() {
  const { theme } = useTheme();
  return theme === "dark" ? <StarField /> : <PetalField />;
}
