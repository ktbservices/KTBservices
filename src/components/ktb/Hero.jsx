import React from "react";
import { ArrowRight, Phone } from "lucide-react";
import Reveal from "./Reveal";
import { useI18n } from "./i18n";

export default function Hero() {
  const { t } = useI18n();
  return (
    <section id="top" className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 right-0 top-0 h-px bg-foreground/10" />
        <div className="absolute left-0 right-0 bottom-0 h-px bg-foreground/10" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <Reveal>
            <p className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-accent mb-6">
              <span className="h-px w-10 bg-accent" />
              {t.hero.tag}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-foreground leading-[1.05]">
              {t.hero.title1}
              <br />
              <span className="italic text-accent">{t.hero.title2}</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-7 max-w-2xl text-lg text-muted-foreground">{t.hero.subtitle}</p>
          </Reveal>

          <Reveal delay={240}>
            <ul className="mt-10 divide-y divide-border border-y border-border">
              {t.hero.services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="ktb-focus group flex items-center justify-between py-4 hover:px-2 transition-all duration-300"
                  >
                    <span className="font-heading text-2xl text-foreground group-hover:text-accent transition-colors">
                      {s}
                    </span>
                    <ArrowRight
                      size={20}
                      className="text-accent opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href={`tel:${t.hero.call.replace(/[^0-9]/g, "")}`}
                className="ktb-focus inline-flex items-center gap-2 min-h-[48px] px-2 text-sm uppercase tracking-[0.18em] text-foreground/80 hover:text-accent transition-colors"
              >
                <Phone size={16} className="text-accent" />
                {t.hero.call}
              </a>
              <div className="flex items-baseline gap-2">
                <span className="font-heading text-4xl text-foreground leading-none">{t.hero.years}</span>
                <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {t.hero.yearsLabel}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}