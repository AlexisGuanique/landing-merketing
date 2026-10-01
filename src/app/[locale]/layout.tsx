import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import Script from "next/script";
import "../globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { getDictionary } from "@/i18n/get-dictionary";
import { hasLocale, locales } from "@/i18n/config";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const NO_FLASH_SCRIPT = `try{if(localStorage.getItem("theme")==="dark"){document.documentElement.classList.add("dark")}}catch(e){}`;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();

  const { metadata } = await getDictionary(locale);
  const siteUrl = new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  );

  return {
    metadataBase: siteUrl,
    title: metadata.title,
    description: metadata.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        es: "/es",
        en: "/en",
        "x-default": "/es",
      },
    },
    openGraph: {
      type: "website",
      url: `/${locale}`,
      title: metadata.title,
      description: metadata.description,
      locale: locale === "es" ? "es_ES" : "en_US",
      alternateLocale: locale === "es" ? ["en_US"] : ["es_ES"],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();

  return (
    <html
      lang={locale}
      data-scroll-behavior="smooth"
      className={`${jakarta.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-[#fff8fb] text-[#3b2430] selection:bg-pink-300/40 selection:text-[#3b2430] dark:bg-[#05060a] dark:text-white"
        suppressHydrationWarning
      >
        <Script id="no-theme-flash" strategy="beforeInteractive">
          {NO_FLASH_SCRIPT}
        </Script>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
