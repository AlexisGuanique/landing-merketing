"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/constants";
import { SectionHeading } from "./ui/SectionHeading";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-28">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading
          eyebrow="Preguntas frecuentes"
          title="Todo lo que necesitás saber"
        />

        <div className="mt-14 space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            const buttonId = `faq-button-${i}`;
            const panelId = `faq-panel-${i}`;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass-card overflow-hidden rounded-2xl transition-colors hover:border-pink-300/50 has-[button:focus-visible]:ring-2 has-[button:focus-visible]:ring-pink-600 has-[button:focus-visible]:ring-offset-2 has-[button:focus-visible]:ring-offset-[#fff8fb] dark:hover:border-fuchsia-400/30 dark:has-[button:focus-visible]:ring-fuchsia-300 dark:has-[button:focus-visible]:ring-offset-[#05060a]"
              >
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex w-full items-center justify-between gap-4 rounded-2xl px-6 py-5 text-left transition-[background-color,box-shadow] focus-visible:bg-pink-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-pink-600 dark:focus-visible:bg-fuchsia-400/15 dark:focus-visible:ring-fuchsia-300"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span className="font-display text-sm font-bold text-[#3b2430] sm:text-base dark:text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-pink-400 transition-transform duration-300 dark:text-white/50 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  aria-hidden={!isOpen}
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-[#7a6270] dark:text-white/60">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
