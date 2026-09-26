"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useIsMobilePerf } from "@/hooks/useMediaQuery";

export function ScrollProgress() {
  const isMobile = useIsMobilePerf();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX: isMobile ? scrollYProgress : scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 dark:from-violet-400 dark:via-fuchsia-400 dark:to-purple-400"
    />
  );
}
