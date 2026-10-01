"use client";

import type { MouseEvent } from "react";
import { useRouter } from "next/navigation";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

export function LanguageSwitcher({
  locale,
  labels,
}: {
  locale: Locale;
  labels: Dictionary["nav"];
}) {
  const router = useRouter();
  const options: Array<{ locale: Locale; short: string; label: string }> = [
    { locale: "es", short: "ES", label: labels.spanish },
    { locale: "en", short: "EN", label: labels.english },
  ];

  function preserveHash(
    event: MouseEvent<HTMLAnchorElement>,
    targetLocale: Locale
  ) {
    if (!window.location.hash) return;
    event.preventDefault();
    router.push(`/${targetLocale}${window.location.hash}`);
  }

  return (
    <div
      role="group"
      aria-label={labels.language}
      className="flex items-center rounded-full border border-pink-300/50 bg-white/60 p-0.5 text-[10px] font-bold dark:border-white/15 dark:bg-white/5"
    >
      {options.map((option) => {
        const isActive = option.locale === locale;
        return (
          <a
            key={option.locale}
            href={`/${option.locale}`}
            hrefLang={option.locale}
            lang={option.locale}
            aria-current={isActive ? "page" : undefined}
            aria-label={option.label}
            title={option.label}
            onClick={(event) => preserveHash(event, option.locale)}
            className={`rounded-full px-2 py-1 transition-colors ${
              isActive
                ? "bg-pink-600 text-white dark:bg-fuchsia-500"
                : "text-[#7a6270] hover:text-pink-600 dark:text-white/60 dark:hover:text-white"
            }`}
          >
            {option.short}
          </a>
        );
      })}
    </div>
  );
}
