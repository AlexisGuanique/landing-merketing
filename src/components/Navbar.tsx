"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, site, whatsappLink } from "@/lib/constants";
import { LogoMark } from "./ui/Logo";
import { ThemeToggle } from "./ui/ThemeToggle";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div
          className={`flex items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-300 ${
            scrolled
              ? "border-pink-200/60 bg-white/70 backdrop-blur-xl shadow-lg shadow-pink-300/20 dark:border-white/10 dark:bg-black/60 dark:shadow-black/20"
              : "border-transparent bg-transparent"
          }`}
        >
          <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold text-[#3b2430] dark:text-white">
            <LogoMark className="h-9 w-9 drop-shadow-[0_0_12px_rgba(244,114,182,0.45)] dark:drop-shadow-[0_0_12px_rgba(168,85,247,0.55)]" />
            {site.brand}
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#7a6270] transition-colors hover:text-pink-500 dark:text-white/70 dark:hover:text-fuchsia-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <a
              href={whatsappLink("Hola! Quiero más información sobre sus servicios de marketing.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-rose-500 via-pink-600 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-pink-300/40 transition-transform hover:scale-105 dark:shadow-violet-500/20"
            >
              Hablemos
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              aria-label="Abrir menú"
              className="text-[#3b2430] dark:text-white"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="mt-2 flex flex-col gap-1 rounded-2xl border border-pink-200/60 bg-white/90 p-4 backdrop-blur-xl dark:border-white/10 dark:bg-black/80 md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-[#7a6270] hover:bg-pink-50 hover:text-pink-600 dark:text-white/80 dark:hover:bg-white/5 dark:hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappLink("Hola! Quiero más información sobre sus servicios de marketing.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-gradient-to-r from-rose-500 via-pink-600 to-purple-600 px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Hablemos
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
