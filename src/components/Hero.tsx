"use client";

import { motion } from "framer-motion";
import { ArrowRight, Camera, Globe, MessageCircle, TrendingUp } from "lucide-react";
import { GradientOrbs } from "./ui/GradientOrbs";
import { MagneticButton } from "./ui/MagneticButton";
import { whatsappLink } from "@/lib/constants";

const chips = [
  { icon: Globe, label: "Página web a medida" },
  { icon: TrendingUp, label: "Publicidad en Meta" },
  { icon: MessageCircle, label: "Redes sociales" },
  { icon: Camera, label: "Fotografía de producto" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-48 sm:pb-36">
      <GradientOrbs />
      <div className="absolute inset-0 -z-20 grid-mask" />

      <div className="mx-auto max-w-5xl px-5 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="inline-flex max-w-full items-center gap-2 rounded-full border border-pink-300/40 bg-pink-50/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-pink-600 sm:px-4 sm:text-xs dark:border-violet-400/20 dark:bg-violet-400/5 dark:text-fuchsia-300"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-400 opacity-75 dark:bg-fuchsia-400" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-pink-400 dark:bg-fuchsia-400" />
          </span>
          Agencia de marketing para emprendedores
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-8 max-w-4xl font-display text-[1.85rem] font-extrabold leading-[1.15] tracking-tight text-[#3b2430] sm:text-6xl dark:text-white"
        >
          Convertimos tu emprendimiento en una{" "}
          <span className="text-gradient">marca digital</span> que vende
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#7a6270] sm:text-lg dark:text-white/60"
        >
          Redes sociales, página web, publicidad y fotografía de producto en un
          solo paquete. Vos te enfocás en tu negocio, nosotros nos encargamos
          de que tus clientes te encuentren.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <MagneticButton
            href="#paquetes"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-500 via-pink-600 to-purple-600 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_-5px_rgba(244,114,182,0.55)] transition-shadow hover:shadow-[0_0_40px_-4px_rgba(192,132,252,0.6)] dark:from-violet-500 dark:via-fuchsia-500 dark:to-purple-600 dark:shadow-[0_0_30px_-5px_rgba(168,85,247,0.6)] dark:hover:shadow-[0_0_40px_-4px_rgba(217,70,239,0.7)]"
          >
            Ver paquetes y precios
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </MagneticButton>
          <MagneticButton
            href={whatsappLink("Hola! Me gustaría conocer más sobre los paquetes de marketing.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-pink-300/50 bg-white/60 px-7 py-3.5 text-sm font-semibold text-[#3b2430] backdrop-blur transition-colors hover:bg-white/90 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
          >
            <MessageCircle className="h-4 w-4" />
            Hablar por WhatsApp
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-2.5 sm:mt-16 sm:gap-3 sm:grid-cols-4"
        >
          {chips.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              className="glass-card flex animate-float flex-col items-center gap-2 rounded-2xl px-3 py-4 text-center sm:gap-2.5 sm:px-4 sm:py-5"
              style={{ animationDelay: `${i * 0.4}s` }}
              whileHover={{ scale: 1.06, borderColor: "rgba(244,114,182,0.4)" }}
            >
              <Icon className="h-5 w-5 text-pink-500 dark:text-fuchsia-300" />
              <span className="text-xs font-medium text-[#7a6270] dark:text-white/70">{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
