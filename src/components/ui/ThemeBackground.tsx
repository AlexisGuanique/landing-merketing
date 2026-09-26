"use client";

import { useEffect, useState } from "react";
import { useTheme } from "../ThemeProvider";
import { useIsMobilePerf } from "@/hooks/useMediaQuery";
import { PetalField } from "./PetalField";
import { StarField } from "./StarField";

export function ThemeBackground() {
  const { theme } = useTheme();
  const isMobile = useIsMobilePerf();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Avoid mounting the wrong canvas before theme hydrates from <html class="dark">.
  if (!mounted || isMobile) return null;

  return theme === "dark" ? <StarField /> : <PetalField />;
}
