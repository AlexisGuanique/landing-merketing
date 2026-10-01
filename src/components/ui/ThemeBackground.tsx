"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "../ThemeProvider";
import { useIsMobilePerf } from "@/hooks/useMediaQuery";
import { PetalField } from "./PetalField";
import { StarField } from "./StarField";

const subscribeToHydration = () => () => {};

export function ThemeBackground() {
  const { theme } = useTheme();
  const isMobile = useIsMobilePerf();
  const isHydrated = useSyncExternalStore(
    subscribeToHydration,
    () => true,
    () => false
  );

  // Avoid mounting the wrong canvas before theme hydrates from <html class="dark">.
  if (!isHydrated || isMobile) return null;

  return theme === "dark" ? <StarField /> : <PetalField />;
}
