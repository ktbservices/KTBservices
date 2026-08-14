import React from "react";
import Reveal from "./Reveal";
import { useI18n } from "./i18n";

export default function About() {
  const { t } = useI18n();
  return (
    <section id="about" className="py-24 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <Reveal>
            <p className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-accent mb-5">
              <span className="h-px w-10 bg-accent" />
              {t.about.tag}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-heading text-4xl lg:text-5xl text-foreground leading-tight">
              {t.about.title}
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">{t.about.body}</p>
          </Reveal>
        </div>

        <Reveal delay={220}>
          <div className="mt-12 grid grid-cols-3 gap-px bg-border border border-border">
            {t.about.stats.map((s) => (
              <div key={s.label} className="bg-background px-5 py-8 text-center">
                <p className="font-heading text-3xl lg:text-4xl text-foreground">{s.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}