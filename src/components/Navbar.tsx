"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems, site, whatsappLink } from "@/lib/constants";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { LogoMark } from "./ui/Logo";
import { ThemeToggle } from "./ui/ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Navbar({
  locale,
  copy,
  themeCopy,
}: {
  locale: Locale;
  copy: Dictionary["nav"];
  themeCopy: Dictionary["theme"];
}) {
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
              ? "border-pink-200/60 bg-white/90 shadow-lg shadow-pink-300/20 md:bg-white/70 md:backdrop-blur-xl dark:border-white/10 dark:bg-black/80 dark:shadow-black/20 dark:md:bg-black/60"
              : "border-transparent bg-transparent"
          }`}
        >
          <a href={`/${locale}#top`} className="flex items-center gap-2 font-display text-lg font-bold text-[#3b2430] dark:text-white">
            <LogoMark className="h-9 w-9 drop-shadow-[0_0_12px_rgba(244,114,182,0.45)] dark:drop-shadow-[0_0_12px_rgba(168,85,247,0.55)]" />
            {site.brand}
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((link) => (
              <a
                key={link.id}
                href={`/${locale}${link.href}`}
                className="text-sm font-medium text-[#7a6270] transition-colors hover:text-pink-500 dark:text-white/70 dark:hover:text-fuchsia-300"
              >
                {copy.links[link.id]}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <LanguageSwitcher locale={locale} labels={copy} />
            <ThemeToggle labels={themeCopy} />
            <a
              href={whatsappLink(copy.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-rose-500 via-pink-600 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-pink-300/40 transition-transform hover:scale-105 dark:shadow-violet-500/20"
            >
              {copy.talk}
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher locale={locale} labels={copy} />
            <ThemeToggle labels={themeCopy} />
            <button
              type="button"
              aria-label={open ? copy.closeMenu : copy.openMenu}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              className="text-[#3b2430] dark:text-white"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {open && (
          <div id="mobile-navigation" className="mt-2 flex flex-col gap-1 rounded-2xl border border-pink-200/60 bg-white/90 p-4 backdrop-blur-xl dark:border-white/10 dark:bg-black/80 md:hidden">
            {navItems.map((link) => (
              <a
                key={link.id}
                href={`/${locale}${link.href}`}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-[#7a6270] hover:bg-pink-50 hover:text-pink-600 dark:text-white/80 dark:hover:bg-white/5 dark:hover:text-white"
              >
                {copy.links[link.id]}
              </a>
            ))}
            <a
              href={whatsappLink(copy.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-gradient-to-r from-rose-500 via-pink-600 to-purple-600 px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              {copy.talk}
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
