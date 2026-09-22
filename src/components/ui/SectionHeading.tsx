"use client";

import { motion } from "framer-motion";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mx-auto max-w-2xl ${align === "center" ? "text-center" : "text-left mx-0"}`}
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-pink-300/40 bg-pink-50/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-pink-600 dark:border-violet-400/20 dark:bg-violet-400/5 dark:text-fuchsia-300">
        <span className="h-1.5 w-1.5 rounded-full bg-pink-400 shadow-[0_0_8px_2px_rgba(244,114,182,0.6)] dark:bg-fuchsia-400 dark:shadow-[0_0_8px_2px_rgba(217,70,239,0.6)]" />
        {eyebrow}
      </span>
      <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-[#3b2430] sm:text-4xl dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-[#7a6270] sm:text-lg dark:text-white/60">
          {description}
        </p>
      )}
    </motion.div>
  );
}
