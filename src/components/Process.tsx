"use client";

import { motion } from "framer-motion";
import { process } from "@/lib/constants";
import { SectionHeading } from "./ui/SectionHeading";
import { TiltCard } from "./ui/TiltCard";

export function Process() {
  return (
    <section id="proceso" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Cómo trabajamos"
          title="Un proceso simple, pensado para emprendedores ocupados"
          description="No necesitás saber de marketing ni de tecnología. Nosotros nos encargamos de todo, paso a paso."
        />

        <div className="relative mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute top-10 left-0 hidden h-px w-full origin-left bg-gradient-to-r from-rose-300/70 via-pink-300/70 to-purple-300/70 lg:block dark:from-violet-400/40 dark:via-fuchsia-400/40 dark:to-purple-400/40"
          />
          {process.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <TiltCard className="relative rounded-2xl border border-pink-200/60 bg-white/70 p-6 dark:border-white/10 dark:bg-white/[0.03]">
                <span className="relative z-10 font-display text-3xl font-extrabold text-pink-300/50 dark:text-white/15">
                  {item.step}
                </span>
                <h3 className="relative z-10 mt-3 font-display text-base font-bold text-[#3b2430] dark:text-white">
                  {item.title}
                </h3>
                <p className="relative z-10 mt-2 text-sm leading-relaxed text-[#7a6270] dark:text-white/60">
                  {item.description}
                </p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
