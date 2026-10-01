import { Mail } from "lucide-react";
import { navItems, site } from "@/lib/constants";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { LogoMark } from "./ui/Logo";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Footer({
  locale,
  copy,
  navCopy,
}: {
  locale: Locale;
  copy: Dictionary["footer"];
  navCopy: Dictionary["nav"];
}) {
  return (
    <footer className="relative border-t border-pink-200/60 py-12 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row sm:items-start">
          <div className="text-center sm:text-left">
            <a href={`/${locale}#top`} className="flex items-center justify-center gap-2 font-display text-lg font-bold text-[#3b2430] sm:justify-start dark:text-white">
              <LogoMark className="h-9 w-9" />
              {site.brand}
            </a>
            <p className="mt-3 max-w-xs text-sm text-[#8f7885] dark:text-white/50">
              {copy.tagline}
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[#7a6270] dark:text-white/60">
            {navItems.map((link) => (
              <a key={link.id} href={`/${locale}${link.href}`} className="hover:text-pink-500 dark:hover:text-white">
                {navCopy.links[link.id]}
              </a>
            ))}
          </nav>

          <div className="flex flex-col items-center gap-3 sm:items-end">
            <div className="flex items-center gap-3">
              <a
                href={`mailto:${site.email}`}
                aria-label={copy.emailLabel}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-pink-200 text-[#7a6270] transition-colors hover:border-pink-400 hover:text-pink-500 dark:border-white/10 dark:text-white/70 dark:hover:border-fuchsia-400/40 dark:hover:text-fuchsia-300"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={copy.instagramLabel}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-pink-200 text-[#7a6270] transition-colors hover:border-pink-400 hover:text-pink-500 dark:border-white/10 dark:text-white/70 dark:hover:border-fuchsia-400/40 dark:hover:text-fuchsia-300"
              >
                <InstagramIcon />
              </a>
            </div>
            <span className="text-xs text-[#a4909d] dark:text-white/40">{site.email}</span>
          </div>
        </div>

        <div className="mt-10 border-t border-pink-200/60 pt-6 text-center text-xs text-[#a4909d] dark:border-white/10 dark:text-white/40">
          © {new Date().getFullYear()} {site.brand}. {copy.copyright}
        </div>
      </div>
    </footer>
  );
}
