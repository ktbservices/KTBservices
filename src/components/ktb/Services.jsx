import React, { useState } from "react";
import { Scale, FileText, Languages, ChevronDown, Phone, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { useI18n } from "./i18n";

const ICONS = [Scale, FileText, Languages];

function ServiceCard({ service, index }) {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const Icon = ICONS[index];
  const phone = t.hero.call;
  const tel = phone.replace(/[^0-9]/g, "");

  return (
    <Reveal delay={index * 80}>
      <article
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className={`ktb-focus group relative h-full bg-background border border-border p-8 transition-all duration-300 flex flex-col ${
          open ? "border-accent shadow-[0_18px_40px_-24px_hsl(var(--foreground)/0.4)] -translate-y-1" : ""
        }`}
      >
        <div className="flex items-start justify-between mb-6">
          <div className="grid place-items-center w-14 h-14 rounded-sm border border-foreground/15 text-accent">
            <Icon size={26} strokeWidth={1.25} />
          </div>
          <span className="inline-flex items-center h-7 px-3 rounded-full border border-accent text-accent text-[0.7rem] uppercase tracking-[0.16em] font-medium">
            {t.badges[service.badge]}
          </span>
        </div>

        <h3 className="font-heading text-3xl text-foreground leading-tight">{service.title}</h3>
        <p className="mt-3 text-muted-foreground">{service.summary}</p>

        <div
          className={`grid transition-all duration-300 ${
            open ? "grid-rows-[1fr] opacity-100 mt-6" : "grid-rows-[0fr] opacity-0 mt-0"
          }`}
        >
          <div className="overflow-hidden">
            <p className="text-xs uppercase tracking-[0.18em] text-accent mb-3">{t.services.includedLabel}</p>
            <ul className="space-y-2">
              {service.points.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-foreground/80">
                  <span className="mt-2 h-px w-4 shrink-0 bg-accent" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-auto pt-6">
          {service.cta.kind === "phone" ? (
            <a
              href={`tel:${tel}`}
              className="ktb-focus inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-primary hover:text-accent transition-colors"
            >
              <Phone size={15} className="text-accent" />
              {t.services.callLabel} {phone}
            </a>
          ) : (
            <a
              href={service.cta.href}
              className="ktb-focus inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-primary hover:text-accent transition-colors"
            >
              {t.services.exploreLabel}
              <ArrowRight size={15} className="text-accent" />
            </a>
          )}
        </div>

        <ChevronDown
          size={18}
          className={`hidden absolute top-8 right-8 text-muted-foreground transition-transform duration-300 ${
            open ? "rotate-180 text-accent" : ""
          }`}
        />
      </article>
    </Reveal>
  );
}

export default function Services() {
  const { t } = useI18n();
  return (
    <section id="services" className="py-24 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mb-14">
          <Reveal>
            <p className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-accent mb-5">
              <span className="h-px w-10 bg-accent" />
              {t.services.tag}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-heading text-4xl lg:text-6xl text-foreground leading-tight">
              {t.services.title1} <span className="italic text-accent">{t.services.title2}</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 text-lg text-muted-foreground">{t.services.subtitle}</p>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {t.services.items.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}