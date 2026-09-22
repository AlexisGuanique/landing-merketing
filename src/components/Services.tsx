"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Camera, Globe, TrendingUp, Users, type LucideIcon } from "lucide-react";
import { services } from "@/lib/constants";
import { SectionHeading } from "./ui/SectionHeading";
import { TiltCard } from "./ui/TiltCard";

const icons: Record<string, LucideIcon> = { Users, Globe, TrendingUp, Camera };

export function Services() {
  return (
    <section id="servicios" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Qué hacemos"
          title="Todo lo que tu marca necesita para crecer online"
          description="Combinamos estrategia, diseño y contenido para que tu emprendimiento tenga una presencia digital profesional de punta a punta."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {services.map((service, i) => {
            const Icon = icons[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <TiltCard className="overflow-hidden rounded-2xl border border-pink-200/60 bg-white/70 transition-colors hover:border-pink-300 dark:border-white/10 dark:bg-white/[0.02] dark:hover:border-white/20">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={`${service.image}?auto=format&fit=crop&w=900&q=75`}
                      alt={service.title}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${service.glow} via-white/10 to-white/80 dark:via-black/30 dark:to-black/80`}
                    />
                    <span className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/60 bg-white/70 text-pink-500 backdrop-blur-md shadow-sm dark:border-white/15 dark:bg-black/50 dark:text-fuchsia-300">
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="font-display text-lg font-bold text-[#3b2430] dark:text-white">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#7a6270] dark:text-white/60">
                      {service.description}
                    </p>
                    <ul className="mt-5 space-y-2 border-t border-pink-100 pt-4 dark:border-white/10">
                      {service.points.map((point) => (
                        <li key={point} className="flex items-start gap-2 text-xs text-[#8f7885] dark:text-white/50">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-pink-400 shadow-[0_0_6px_1px_rgba(244,114,182,0.6)] dark:bg-fuchsia-400 dark:shadow-[0_0_6px_1px_rgba(217,70,239,0.6)]" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
