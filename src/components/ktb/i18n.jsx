import React, { createContext, useContext, useState, useEffect } from "react";

const translations = {
  en: {
    skip: "Skip to Services",
    nav: { services: "Services", translation: "Translation", about: "About" },
    lang: { en: "English", es: "Spanish", ar: "Arabic" },
    hero: {
      tag: "Est. 2012 · 501(c)(3) Non-Profit",
      title1: "Your life, organized.",
      title2: "Your documents, perfected.",
      subtitle:
        "A community administrative atelier — distilling the complexity of immigration, legal navigation, translation, and interpretation into elegant, undeniable progress.",
      services: ["Legal Navigation", "Immigration Services — Coming Soon", "Interpretation & Translation"],
      call: "651-300-5321",
      years: "12+",
      yearsLabel: "Years of service",
    },
    badges: { free: "Free", lowcost: "Low Cost", comingSoon: "Coming Soon", nonprofit: "Non-Profit", certified: "Certified" },
    services: {
      tag: "The Service Ledger",
      title1: "Transparent offerings,",
      title2: "precisely rendered.",
      subtitle: "Three ways we serve our community — hover any card to see what's included.",
      includedLabel: "What's included",
      callLabel: "Call",
      exploreLabel: "Explore translation",
      items: [
        {
          badge: "free",
          title: "Legal Navigation",
          summary:
            "Full legal aid and navigation — we understand your situation and refer you to the best help possible.",
          points: [
            "Affiliated with the best lawyers, government workers, county offices & courts",
            "Tell us your story and we will help and direct you",
            "Referrals to attorneys when legal representation is needed",
          ],
          cta: { kind: "phone" },
        },
        {
          badge: "comingSoon",
          title: "Immigration Services (Coming Soon)",
          summary:
            "Immigrants, all welcome here. Petitions, asylum, green cards, VAWA, marriage, work authorization, and many more.",
          points: [
            "Complete & file ALL immigration forms and applications",
            "Translate your answers onto the immigration forms",
            "Help collect supporting documents (birth certificates, vital records)",
            "Prepare you for your immigration & US embassy interviews",
            "Fast turnaround · mobile service for your convenience",
            "Affordable — average less than half the fees of any law firm",
            "KTB is a non-profit, not a law firm — allowed by law to provide this service",
          ],
          cta: { kind: "phone" },
        },
        {
          badge: "certified",
          title: "Interpretation & Translation",
          summary: "Certified translation of your paperwork and interpretation in any setting — across five languages, court-admissible.",
          points: [
            "English, Arabic, Spanish, Somali & Hmong",
            "Birth & marriage certificates, legal contracts",
            "Academic transcripts & medical records",
            "Certified, notarized & court-admissible",
            "Court, interview, medical & on-site interpretation",
            "Phone & video remote — on-demand, anywhere",
          ],
          cta: { kind: "link", href: "#translation" },
        },
      ],
    },
    hiring: {
      tag: "We Are Hiring",
      title: "Join our mission.",
      intro:
        "We're growing our team of community advocates. If you speak any of these languages, we want to hear from you.",
      roles: [
        "Immigration form specialists",
        "Arabic interpreters",
        "Spanish interpreters",
        "Somali interpreters",
        "Hmong interpreters",
        "Russian interpreters",
      ],
      call: "Call 651-300-5321 for details",
      emailTo: "jobs@ktbservices.org",
      emailCta: "Email us",
    },
    translation: {
      tag: "The Linguistic Bridge",
      title1: "Interpretation & translation as",
      title2: "cultural navigation,",
      title3: "not just words.",
      subtitle:
        "We interpret everywhere — courtrooms, interviews, clinics — and we translate everything. Five languages, certified accuracy institutions trust.",
