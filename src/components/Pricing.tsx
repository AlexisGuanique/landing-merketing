"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { pricingPlans, whatsappLink } from "@/lib/constants";
import { SectionHeading } from "./ui/SectionHeading";
import { TiltCard } from "./ui/TiltCard";
import { MagneticButton } from "./ui/MagneticButton";

export function Pricing() {
  return (
    <section id="paquetes" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Paquetes"
          title="Elegí el paquete ideal para tu emprendimiento"
          description="Empezá con lo esencial o llevá tu negocio directo a la venta online. Todos los paquetes se pueden personalizar."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:items-start">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={plan.featured ? "lg:-translate-y-4" : ""}
            >
              <TiltCard
                className={`relative flex h-full flex-col rounded-3xl p-7 ${
                  plan.featured
                    ? "gradient-border bg-[#6b163f] shadow-2xl shadow-pink-300/30 dark:bg-[#0a0a14] dark:shadow-fuchsia-500/10"
                    : "glass-card"
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3.5 left-1/2 z-20 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-gradient-to-r from-rose-500 via-pink-600 to-purple-600 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-[0_0_20px_-2px_rgba(244,114,182,0.7)] dark:from-violet-700 dark:via-fuchsia-700 dark:to-purple-800 dark:shadow-[0_0_20px_-2px_rgba(168,85,247,0.8)]">
                    <Sparkles className="h-3.5 w-3.5" />
                    Más elegido
                  </span>
                )}

                <h3
                  className={`relative z-10 font-display text-xl font-bold ${
                    plan.featured ? "text-white" : "text-[#3b2430] dark:text-white"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`relative z-10 mt-2 text-sm ${
                    plan.featured ? "text-white/85" : "text-[#7a6270] dark:text-white/60"
                  }`}
                >
                  {plan.description}
                </p>

                <div className="relative z-10 mt-6 flex items-end gap-1.5">
                  {plan.price !== "Personalizado" && (
                    <span
                      className={`font-display text-4xl font-extrabold ${
                        plan.featured ? "text-white" : "text-[#3b2430] dark:text-white"
                      }`}
                    >
                      $
                    </span>
                  )}
                  <span
                    className={`font-display text-4xl font-extrabold ${
                      plan.featured ? "text-white" : "text-[#3b2430] dark:text-white"
                    }`}
                  >
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span
                      className={`pb-1 text-sm ${
                        plan.featured ? "text-white/80" : "text-[#a4909d] dark:text-white/50"
                      }`}
                    >
                      / {plan.period}
                    </span>
                  )}
                </div>

                <ul className="relative z-10 mt-7 flex-1 space-y-3.5">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-start gap-2.5 text-sm ${
                        plan.featured ? "text-white/90" : "text-[#5c4753] dark:text-white/75"
                      }`}
                    >
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          plan.featured ? "text-pink-100 dark:text-fuchsia-300" : "text-pink-500 dark:text-fuchsia-300"
                        }`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <MagneticButton
                  href={whatsappLink(`Hola! Me interesa el paquete "${plan.name}".`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative z-10 mt-8 inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition-shadow ${
                    plan.featured
                      ? "bg-gradient-to-r from-rose-500 via-pink-600 to-purple-600 text-white shadow-lg shadow-pink-300/40 hover:shadow-[0_0_30px_-4px_rgba(192,132,252,0.6)] dark:from-violet-700 dark:via-fuchsia-700 dark:to-purple-800 dark:shadow-fuchsia-500/20 dark:hover:shadow-[0_0_30px_-4px_rgba(217,70,239,0.7)]"
                      : "border border-pink-200 bg-white/70 text-[#3b2430] hover:bg-white dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                  }`}
                >
                  {plan.cta}
                </MagneticButton>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-[#a4909d] dark:text-white/40">
          Todos los precios son de referencia y se ajustan según el alcance real de tu proyecto.
        </p>
      </div>
    </section>
  );
}
