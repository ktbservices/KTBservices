import React from "react";
import { useI18n } from "./i18n";

export default function LanguageSwitcher({ className = "" }) {
  const { lang, setLang, t } = useI18n();
  return (
    <div
      className={`inline-flex items-center rounded-sm border border-border overflow-hidden ${className}`}
      role="group"
      aria-label="Language switcher"
    >
      {["en", "es", "ar"].map((code) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`ktb-focus min-h-[40px] px-3 text-sm font-medium transition-colors ${
            lang === code
              ? "bg-primary text-primary-foreground"
              : "bg-background text-foreground/60 hover:text-primary"
          }`}
        >
          {t.lang[code]}
        </button>
      ))}
    </div>
  );
}