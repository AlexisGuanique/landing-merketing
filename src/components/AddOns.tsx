"use client";

import { motion } from "framer-motion";
import { CreditCard, MessageCircle, ShoppingCart, Truck, type LucideIcon } from "lucide-react";
import { addOns } from "@/lib/constants";
import { SectionHeading } from "./ui/SectionHeading";

const icons: Record<string, LucideIcon> = {
  MessageCircle,
  ShoppingCart,
  CreditCard,
  Truck,
};

function handleMove(e: React.MouseEvent<HTMLDivElement>) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--x", `${((e.clientX - rect.left) / rect.width) * 100}%`);
  el.style.setProperty("--y", `${((e.clientY - rect.top) / rect.height) * 100}%`);
}

export function AddOns() {
  return (
    <section id="modulos" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Módulos a medida"
          title="Hacé crecer tu web con módulos adicionales"
          description="Sumá funcionalidades a tu página cuando tu negocio esté listo para el siguiente paso. Cada módulo se cotiza según tu proyecto."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {addOns.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                onMouseMove={handleMove}
                className="spotlight rounded-2xl border border-dashed border-pink-300/50 bg-white/40 p-6 transition-colors hover:border-pink-400 hover:bg-white/70 dark:border-white/15 dark:bg-white/[0.02] dark:hover:border-fuchsia-400/40 dark:hover:bg-white/[0.04]"
              >
                <span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-xl bg-pink-100/70 text-pink-500 dark:bg-white/5 dark:text-fuchsia-300">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="relative z-10 mt-5 font-display text-base font-bold text-[#3b2430] dark:text-white">
                  {item.title}
                </h3>
                <p className="relative z-10 mt-2 text-sm leading-relaxed text-[#7a6270] dark:text-white/60">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
