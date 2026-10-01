import "server-only";

import type { Locale } from "./config";

const dictionaries = {
  es: () => import("./dictionaries/es").then((module) => module.es),
  en: () => import("./dictionaries/en").then((module) => module.en),
};

export function getDictionary(locale: Locale) {
  return dictionaries[locale]();
}
