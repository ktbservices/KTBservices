import React from "react";
import { LanguageProvider, useI18n } from "@/components/ktb/i18n";
import Navbar from "@/components/ktb/Navbar";
import Hero from "@/components/ktb/Hero";
import Services from "@/components/ktb/Services";
import Translation from "@/components/ktb/Translation";
import About from "@/components/ktb/About";
import Hiring from "@/components/ktb/Hiring";
import Footer from "@/components/ktb/Footer";

function SkipLink() {
  const { t } = useI18n();
  return (
    <a
      href="#services"
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-sm focus:text-sm"
    >
      {t.skip}
    </a>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <div className="bg-background">
        <SkipLink />
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Translation />
          <About />
          <Hiring />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}