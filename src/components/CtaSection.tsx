"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { site, whatsappLink } from "@/lib/constants";
import { MagneticButton } from "./ui/MagneticButton";

export function CtaSection() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-rose-500 via-pink-600 to-purple-700 px-8 py-16 text-center shadow-2xl shadow-pink-400/30 sm:px-16 dark:from-violet-600 dark:via-fuchsia-600 dark:to-purple-800 dark:shadow-fuchsia-500/20"
        >
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-purple-900/20 blur-3xl" />

          <h2 className="relative z-10 mx-auto max-w-xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            ¿Listo para llevar tu emprendimiento al siguiente nivel?
          </h2>
          <p className="relative z-10 mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/85">
            Contanos sobre tu negocio y armamos juntos el paquete perfecto para
            tus objetivos y tu presupuesto.
          </p>
          <div className="relative z-10 mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <MagneticButton
              href={whatsappLink("Hola! Quiero armar mi paquete de marketing digital.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-rose-600 shadow-lg shadow-black/10 transition-transform hover:scale-105"
            >
              <MessageCircle className="h-4 w-4" />
              Escribinos por WhatsApp
            </MagneticButton>
            <a
              href={`mailto:${site.email}`}
              className="group inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Enviar un email
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
