import React from "react";
import { Phone, Mail, Check } from "lucide-react";
import Reveal from "./Reveal";
import { useI18n } from "./i18n";

export default function Hiring() {
  const { t } = useI18n();
  const tel = t.hero.call.replace(/[^0-9]/g, "");

  return (
    <section id="hiring" className="py-24 lg:py-28 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-accent mb-5">
              <span className="h-px w-10 bg-accent" />
              {t.hiring.tag}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-heading text-4xl lg:text-5xl leading-tight">{t.hiring.title}</h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 text-lg text-primary-foreground/80 max-w-md">{t.hiring.intro}</p>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={120}>
            <ul className="grid sm:grid-cols-2 gap-px bg-primary-foreground/15 border border-primary-foreground/15">
              {t.hiring.roles.map((role) => (
                <li key={role} className="flex items-center gap-3 bg-primary px-5 py-5">
                  <span className="grid place-items-center w-8 h-8 rounded-full border border-accent text-accent shrink-0">
                    <Check size={16} strokeWidth={2} />
                  </span>
                  <span className="font-heading text-xl">{role}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={`tel:${tel}`}
                className="ktb-focus inline-flex items-center gap-3 min-h-[48px] px-6 rounded-full bg-accent text-accent-foreground text-sm uppercase tracking-[0.18em] hover:brightness-110 transition"
              >
                <Phone size={16} />
                {t.hiring.call}
              </a>
              <a
                href={`mailto:${t.hiring.emailTo}`}
                className="ktb-focus inline-flex items-center gap-3 min-h-[48px] px-6 rounded-full border border-primary-foreground/30 text-sm uppercase tracking-[0.18em] hover:border-accent hover:text-accent transition"
              >
                <Mail size={16} />
                {t.hiring.emailCta}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}