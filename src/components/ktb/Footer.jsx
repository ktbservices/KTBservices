import React from "react";
import { Phone, Mail } from "lucide-react";
import { useI18n } from "./i18n";

const LOGO =
  "/ktb-logo.jpg";

export default function Footer() {
  const { t } = useI18n();
  const tel = t.hero.call.replace(/[^0-9]/g, "");
  const NAV = [
    { label: t.nav.services, href: "#services" },
    { label: t.nav.translation, href: "#translation" },
    { label: t.nav.about, href: "#about" },
  ];
  const EMAILS = [
    { label: t.footer.generalLabel, address: t.footer.emails.general },
    { label: t.footer.supportLabel, address: t.footer.emails.support },
    { label: t.footer.careersLabel, address: t.footer.emails.jobs },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="inline-block bg-background rounded-sm p-1">
              <img src={LOGO} alt="KTB Services" className="h-14 w-auto" />
            </div>
            <p className="mt-5 text-background/70 max-w-sm">{t.footer.tagline}</p>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.18em] text-accent mb-4">{t.footer.navigate}</p>
            <ul className="space-y-3">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="ktb-focus text-background/80 hover:text-accent transition-colors">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.18em] text-accent mb-4">{t.footer.contactTitle}</p>
            <a
              href={`tel:${tel}`}
              className="ktb-focus inline-flex items-center gap-3 font-heading text-2xl text-background hover:text-accent transition-colors"
            >
              <Phone size={18} className="text-accent" />
              {t.hero.call}
            </a>
            <ul className="mt-5 space-y-3">
              {EMAILS.map((e) => (
                <li key={e.address}>
                  <a
                    href={`mailto:${e.address}`}
                    className="ktb-focus group flex items-start gap-3 text-background/80 hover:text-accent transition-colors"
                  >
                    <Mail size={15} className="text-accent mt-1 shrink-0" />
                    <span>
                      <span className="block text-[0.7rem] uppercase tracking-[0.16em] text-background/50">
                        {e.label}
                      </span>
                      <span className="text-sm group-hover:text-accent transition-colors">{e.address}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-background/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-background/60">
          <p>© 2035 KTB Services. {t.footer.copyright}</p>
          <p>{t.footer.status}</p>
        </div>
      </div>
    </footer>
  );
}