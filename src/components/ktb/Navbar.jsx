import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useI18n } from "./i18n";
import LanguageSwitcher from "./LanguageSwitcher";

const LOGO =
  "/ktb-logo.jpg";

export default function Navbar() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const LINKS = [
    { label: t.nav.services, href: "#services" },
    { label: t.nav.translation, href: "#translation" },
    { label: t.nav.about, href: "#about" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-background/0"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between gap-4">
        <a href="#top" className="ktb-focus flex items-center gap-3 shrink-0" aria-label="KTB Services home">
          <img src={LOGO} alt="KTB Services" className="h-12 w-auto" />
        </a>

        <ul className="hidden md:flex items-center gap-9">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="ktb-focus relative text-sm uppercase tracking-[0.18em] text-foreground/80 hover:text-accent transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center">
          <LanguageSwitcher />
        </div>

        <button
          className="md:hidden ktb-focus min-w-[48px] min-h-[48px] grid place-items-center"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-background border-t border-border">
          <ul className="px-6 py-4 flex flex-col gap-1">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="ktb-focus block py-3 text-sm uppercase tracking-[0.18em] text-foreground/80"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="py-3">
              <LanguageSwitcher />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}