import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Pricing } from "@/components/Pricing";
import { AddOns } from "@/components/AddOns";
import { Faq } from "@/components/Faq";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { ThemeBackground } from "@/components/ui/ThemeBackground";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { getDictionary } from "@/i18n/get-dictionary";
import { hasLocale } from "@/i18n/config";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();

  const dict = await getDictionary(locale);

  return (
    <>
      <ThemeBackground />
      <ScrollProgress />
      <Navbar locale={locale} copy={dict.nav} themeCopy={dict.theme} />
      <main className="flex-1">
        <Hero copy={dict.hero} />
        <Services copy={dict.services} />
        <Process copy={dict.process} />
        <Pricing copy={dict.pricing} />
        <AddOns copy={dict.addOns} />
        <Faq copy={dict.faq} />
        <CtaSection copy={dict.cta} />
      </main>
      <Footer locale={locale} copy={dict.footer} navCopy={dict.nav} />
      <WhatsAppFloat copy={dict.whatsappFloat} />
    </>
  );
}
