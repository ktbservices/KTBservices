import React, { useRef, useState, useCallback, useEffect } from "react";
import { FileText, Mic, ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "./Reveal";
import { useI18n } from "./i18n";

export default function Translation() {
  const { t } = useI18n();
  const galleryRef = useRef(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  const updateScrollState = useCallback(() => {
    const el = galleryRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateScrollState();
    window.addEventListener("resize", updateScrollState);
    return () => window.removeEventListener("resize", updateScrollState);
  }, [updateScrollState, t]);

  const scrollBy = (dir) => {
    const el = galleryRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <section id="translation" className="py-24 lg:py-32 border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-14">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-accent mb-5">
                <span className="h-px w-10 bg-accent" />
                {t.translation.tag}
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-heading text-4xl lg:text-6xl text-foreground leading-tight">
                {t.translation.title1}{" "}
                <span className="italic text-accent">{t.translation.title2}</span>{" "}
                {t.translation.title3}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={140} className="lg:col-span-5">
            <p className="text-lg text-muted-foreground">{t.translation.subtitle}</p>
          </Reveal>
        </div>

        {/* Interpreting — we do everything */}
        <div className="mt-4">
          <Reveal>
            <div className="flex items-center gap-3 mb-5">
              <Mic size={22} className="text-accent" strokeWidth={1.5} />
              <h3 className="font-heading text-3xl text-foreground">{t.translation.interpretingTitle}</h3>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-xl lg:text-2xl text-foreground/90 max-w-4xl leading-relaxed">
              {t.translation.interpretingIntro}
            </p>
          </Reveal>
        </div>

        {/* Translation — we do everything */}
        <div className="mt-16">
          <Reveal>
            <div className="flex items-end justify-between mb-6 gap-4">
              <div>
                <h3 className="font-heading text-3xl lg:text-4xl text-foreground">
                  <span className="italic text-accent">{t.translation.translateEverything}</span>
                </h3>
                <p className="mt-1 text-sm uppercase tracking-[0.16em] text-muted-foreground">
                  {t.translation.galleryTitle}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => scrollBy(-1)}
                  disabled={!canLeft}
                  aria-label="Previous"
                  className="ktb-focus grid place-items-center h-11 w-11 rounded-full border border-border text-foreground/70 hover:border-accent hover:text-accent transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronLeft size={20} strokeWidth={1.5} />
                </button>
                <button
                  type="button"
                  onClick={() => scrollBy(1)}
                  disabled={!canRight}
                  aria-label="Next"
                  className="ktb-focus grid place-items-center h-11 w-11 rounded-full border border-border text-foreground/70 hover:border-accent hover:text-accent transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronRight size={20} strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div
              ref={galleryRef}
              onScroll={updateScrollState}
              className="no-scrollbar flex gap-5 overflow-x-auto pb-2 snap-x snap-mandatory scroll-smooth"
              aria-label={t.translation.galleryTitle}
            >
              {t.translation.docs.map((d, i) => {
                const Icon = d.kind === "interp" ? Mic : FileText;
                return (
                  <article
                    key={d.type}
                    className="snap-start shrink-0 w-64 bg-background border border-border group relative overflow-hidden hover:border-accent transition-colors duration-300"
                  >
                    <span className="absolute top-0 left-0 h-0.5 w-0 bg-accent group-hover:w-full transition-all duration-500" />
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-5">
                        <span className="grid place-items-center w-11 h-11 rounded-sm border border-foreground/10 text-accent group-hover:border-accent/40 transition-colors">
                          <Icon size={22} strokeWidth={1.25} />
                        </span>
                        <span className="font-heading text-2xl text-muted-foreground/40 tabular-nums">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h4 className="font-heading text-2xl text-foreground leading-tight">{d.type}</h4>
                      <p className="mt-2 text-sm text-muted-foreground">{d.note}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}