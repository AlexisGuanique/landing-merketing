"use client";

import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/constants";
import type { Dictionary } from "@/i18n/types";

export function WhatsAppFloat({
  copy,
}: {
  copy: Dictionary["whatsappFloat"];
}) {
  return (
    <a
      href={whatsappLink(copy.message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={copy.label}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center"
    >
      <span className="animate-pulse-ring absolute inset-0 rounded-full bg-emerald-400/60" />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-lg shadow-emerald-500/30 transition-transform hover:scale-110">
        <MessageCircle className="h-6 w-6" />
      </span>
    </a>
  );
}
