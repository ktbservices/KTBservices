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
      services: ["Legal Navigation", "Immigration Services", "Interpretation & Translation"],
      call: "651-300-5321",
      years: "12+",
      yearsLabel: "Years of service",
    },
    badges: { free: "Free", lowcost: "Low Cost", nonprofit: "Non-Profit", certified: "Certified" },
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
          badge: "lowcost",
          title: "Immigration Services",
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
      fromWord: "English",
      interpretingTitle: "Interpreting",
      interpretingIntro: "Courtrooms, interviews, clinics, meetings, depositions — by phone, video, or on-site. Consecutive and simultaneous. Any setting, any situation. If it needs an interpreter, we do it.",
      interpretingItems: [
        { type: "Court Interpretation", note: "Certified & court-admissible" },
        { type: "Interview Interpretation", note: "USCIS, asylum & legal" },
        { type: "Medical Interpretation", note: "Clinics & hospitals" },
        { type: "Business & Meetings", note: "Consecutive & simultaneous" },
        { type: "Phone & Video Remote", note: "On-demand, anywhere" },
        { type: "Community & Events", note: "On-site support" },
      ],
      translateEverything: "We do everything",
      toList: ["العربية", "Español", "Soomaali", "Hmoob"],
      bannerAria: "Certified translation between English and Arabic, Spanish, Somali, and Hmong",
      galleryTitle: "A few examples of what we do",
      scrollHint: "Scroll →",
      docs: [
        { type: "Birth Certificates", note: "Certified & notarized" },
        { type: "Legal Contracts", note: "Court-admissible" },
        { type: "Marriage & Divorce", note: "USCIS accepted" },
        { type: "Academic Transcripts", note: "Credential-ready" },
        { type: "Personal Letters", note: "Faithful & fluent" },
        { type: "Medical Records", note: "Terminology-precise" },
        { type: "Court Interpretation", note: "Certified & court-admissible", kind: "interp" },
        { type: "Interview Interpretation", note: "USCIS & US embassy", kind: "interp" },
        { type: "Medical Interpretation", note: "Clinics & hospitals", kind: "interp" },
        { type: "Phone & Video Remote", note: "On-demand, anywhere", kind: "interp" },
      ],
      dropzone: {
        title: "Direct Upload",
        desc: "Submit your paperwork like an elite service. Drag your file here, or click to browse. We'll reply with a certified quote.",
        uploaded: "Uploaded",
        ariaLabel: "Upload documents for a translation quote",
      },
    },
    about: {
      tag: "Our Mission",
      title: "A sanctuary of institutional clarity for every neighbor.",
      body:
        "Since 2012, KTB Services has given our community the highest level of services. As a non-profit 501(c)(3) organization, we believe that speaking your own language is a right — not a privilege. We translate every document with care, and we interpret every conversation with respect and accuracy.",
      stats: [
        { value: "2012", label: "Serving since" },
        { value: "501(c)(3)", label: "Tax-exempt non-profit" },
        { value: "4+", label: "Languages spoken" },
      ],
    },
    footer: {
      tagline: "A non-profit 501(c)(3) administrative atelier. Your life, organized. Your documents, perfected.",
      navigate: "Navigate",
      contactTitle: "Contact",
      phoneLabel: "Telephone",
      emails: {
        general: "info@ktbservices.org",
        support: "support@ktbservices.org",
        jobs: "jobs@ktbservices.org",
      },
      generalLabel: "General",
      supportLabel: "Support",
      careersLabel: "Careers",
      serving: "Serving our community since 2012",
      copyright: "All rights reserved.",
      status: "501(c)(3) Tax-Exempt Non-Profit Organization",
    },
  },
  es: {
    skip: "Saltar a Servicios",
    nav: { services: "Servicios", translation: "Traducción", about: "Nosotros" },
    lang: { en: "English", es: "Spanish", ar: "Arabic" },
    hero: {
      tag: "Desde 2012 · Sin fines de lucro 501(c)(3)",
      title1: "Tu vida, organizada.",
      title2: "Tus documentos, perfeccionados.",
      subtitle:
        "Un taller administrativo comunitario — que transforma la complejidad de los trámites de inmigración, navegación legal, traducción e interpretación en un progreso elegante e innegable.",
      services: ["Navegación legal", "Servicios de inmigración", "Interpretación y traducción"],
      call: "651-300-5321",
      years: "12+",
      yearsLabel: "Años de servicio",
    },
    badges: { free: "Gratis", lowcost: "Bajo costo", nonprofit: "Sin fines de lucro", certified: "Certificada" },
    services: {
      tag: "El Libro de Servicios",
      title1: "Ofertas transparentes,",
      title2: "precisamente presentadas.",
      subtitle: "Tres formas de servir a nuestra comunidad — pasa el cursor sobre cualquier tarjeta para ver lo que incluye.",
      includedLabel: "Lo que incluye",
      callLabel: "Llama",
      exploreLabel: "Ver traducción",
      items: [
        {
          badge: "free",
          title: "Navegación legal",
          summary:
            "Ayuda y navegación legal completa — entendemos tu situación y te referimos a la mejor ayuda posible.",
          points: [
            "Afiliados con los mejores abogados, funcionarios del gobierno, oficinas del condado y tribunales",
            "Cuéntanos tu historia y te ayudaremos y orientaremos",
            "Referencias a abogados cuando se necesita representación legal",
          ],
          cta: { kind: "phone" },
        },
        {
          badge: "lowcost",
          title: "Servicios de inmigración",
          summary:
            "Inmigrantes, todos son bienvenidos. Peticiones, asilo, green cards, VAWA, matrimonio, autorización de trabajo y mucho más.",
          points: [
            "Completamos y presentamos TODOS los formularios y solicitudes de inmigración",
            "Traducimos tus respuestas a los formularios de inmigración",
            "Ayudamos a reunir documentos de respaldo (actas de nacimiento, registros vitales)",
            "Prepararte para tus entrevistas de inmigración y en la embajada de EE. UU.",
            "Rápido tiempo de respuesta · servicio móvil para tu comodidad",
            "Asequible — promedio menor a la mitad de los honorarios de cualquier firma de abogados",
            "KTB es una organización sin fines de lucro, no un bufete — autorizada por ley a brindar este servicio",
          ],
          cta: { kind: "phone" },
        },
        {
          badge: "certified",
          title: "Interpretación y traducción",
          summary: "Traducción certificada de tu papeleo e interpretación en cualquier contexto — en cinco idiomas, admisible en tribunales.",
          points: [
            "Inglés, árabe, español, somalí y hmong",
            "Actas de nacimiento y matrimonio, contratos legales",
            "Expedientes académicos y registros médicos",
            "Certificada, notariada y admisible en tribunales",
            "Interpretación en tribunales, entrevistas, médica y en el lugar",
            "Teléfono y video remoto — bajo demanda, en cualquier lugar",
          ],
          cta: { kind: "link", href: "#translation" },
        },
      ],
    },
    hiring: {
      tag: "Estamos contratando",
      title: "Únete a nuestra misión.",
      intro:
        "Estamos ampliando nuestro equipo de defensores comunitarios. Si hablas alguno de estos idiomas, queremos escucharte.",
      roles: [
        "Especialistas en formularios de inmigración",
        "Intérpretes de árabe",
        "Intérpretes de español",
        "Intérpretes de somalí",
        "Intérpretes de hmong",
        "Intérpretes de ruso",
      ],
      call: "Llama al 651-300-5321 para más detalles",
      emailTo: "jobs@ktbservices.org",
      emailCta: "Escríbenos",
    },
    translation: {
      tag: "El Puente Lingüístico",
      title1: "Interpretación y traducción como",
      title2: "navegación cultural,",
      title3: "no solo palabras.",
      subtitle:
        "Interpretamos en todas partes — tribunales, entrevistas, clínicas — y traducimos todo. Cinco idiomas, precisión certificada que las instituciones confían.",
      fromWord: "Inglés",
      interpretingTitle: "Interpretación",
      interpretingIntro: "Tribunales, entrevistas, clínicas, reuniones, declaraciones — por teléfono, video o en el lugar. Consecutiva y simultánea. Cualquier contexto, cualquier situación. Si necesita un intérprete, lo hacemos.",
      interpretingItems: [
        { type: "Interpretación en tribunales", note: "Certificada y admisible" },
        { type: "Interpretación de entrevistas", note: "USCIS, asilo y legal" },
        { type: "Interpretación médica", note: "Clínicas y hospitales" },
        { type: "Negocios y reuniones", note: "Consecutiva y simultánea" },
        { type: "Teléfono y video remoto", note: "Bajo demanda, en cualquier lugar" },
        { type: "Comunidad y eventos", note: "Apoyo en el lugar" },
      ],
      translateEverything: "Hacemos todo",
      toList: ["العربية", "Español", "Soomaali", "Hmoob"],
      bannerAria: "Traducción certificada entre inglés y árabe, español, somalí y hmong",
      galleryTitle: "Algunos ejemplos de lo que hacemos",
      scrollHint: "Deslizar →",
      docs: [
        { type: "Actas de nacimiento", note: "Certificada y notariada" },
        { type: "Contratos legales", note: "Admisible en tribunales" },
        { type: "Matrimonio y divorcio", note: "Aceptada por USCIS" },
        { type: "Expedientes académicos", note: "Lista para credenciales" },
        { type: "Cartas personales", note: "Fiel y fluida" },
        { type: "Registros médicos", note: "Precisa en terminología" },
        { type: "Interpretación en tribunales", note: "Certificada y admisible", kind: "interp" },
        { type: "Interpretación de entrevistas", note: "USCIS y embajada de EE. UU.", kind: "interp" },
        { type: "Interpretación médica", note: "Clínicas y hospitales", kind: "interp" },
        { type: "Teléfono y video remoto", note: "Bajo demanda, en cualquier lugar", kind: "interp" },
      ],
      dropzone: {
        title: "Carga directa",
        desc: "Envía tu papeleo como un servicio de élite. Arrastra tu archivo aquí o haz clic para buscar. Responderemos con una cotización certificada.",
        uploaded: "Cargado",
        ariaLabel: "Sube documentos para una cotización de traducción",
      },
    },
    about: {
      tag: "Nuestra Misión",
      title: "Un santuario de claridad institucional para cada vecino.",
      body:
        "Desde 2012, KTB Services ha dado a nuestra comunidad el mejor servicio. Como organización sin fines de lucro 501(c)(3), creemos que hablar tu propio idioma es un derecho, no un privilegio. Traducimos cada documento con cuidado e interpretamos cada conversación con respeto y precisión.",
      stats: [
        { value: "2012", label: "Sirviendo desde" },
        { value: "501(c)(3)", label: "Sin fines de lucro exenta" },
        { value: "4+", label: "Idiomas hablados" },
      ],
    },
    footer: {
      tagline: "Un taller administrativo sin fines de lucro 501(c)(3). Tu vida, organizada. Tus documentos, perfeccionados.",
      navigate: "Navegación",
      contactTitle: "Contacto",
      phoneLabel: "Teléfono",
      emails: {
        general: "info@ktbservices.org",
        support: "support@ktbservices.org",
        jobs: "jobs@ktbservices.org",
      },
      generalLabel: "General",
      supportLabel: "Soporte",
      careersLabel: "Empleo",
      serving: "Sirviendo a nuestra comunidad desde 2012",
      copyright: "Todos los derechos reservados.",
      status: "Organización Sin Fines de Lucro Exenta de Impuestos 501(c)(3)",
    },
  },
  ar: {
    skip: "تخطٍ إلى الخدمات",
      nav: { services: "الخدمات", translation: "الترجمة", about: "من نحن" },
      lang: { en: "English", es: "Spanish", ar: "Arabic" },
      hero: {
        tag: "منذ 2012 · منظمة غير ربحية 501(c)(3)",
        title1: "حياتك، منظمة.",
        title2: "وثائقك، متقنة.",
        subtitle:
          "منظمة خيرية — نبسّط تعقيد الهجرة والتوجيه القانوني والترجمة إلى تقدّم أنيق لا يُنكر.",
        services: ["التوجيه القانوني", "خدمات الهجرة والجنسية", "الترجمة"],
        call: "651-300-5321",
        years: "12+",
        yearsLabel: "سنة من الخدمة",
      },
      badges: { free: "مجاني", lowcost: "تكلفة منخفضة", nonprofit: "غير ربحي", certified: "معتمد" },
      services: {
        tag: "سجل الخدمات",
        title1: "عروض شفافة،",
        title2: "بدقّة متناهية.",
        subtitle: "ثلاث طرق نخدم بها مجتمعنا — مرّر فوق أي بطاقة لرؤية ما تتضمّنه.",
        includedLabel: "ما تتضمّنه",
        callLabel: "اتصل",
        exploreLabel: "استكشف الترجمة",
        items: [
          {
            badge: "free",
            title: "التوجيه القانوني",
            summary:
              "مساعدة وتوجيه قانوني كامل — نتفهّم وضعك ونحيلك إلى أفضل مساعدة ممكنة.",
            points: [
              "منتسبون إلى أفضل المحامين وموظفي الحكومة ومكاتب المقاطعة والمحاكم",
              "احكِ لنا قصتك وسنساعدك ونوجّهك",
              "إحالات إلى محامين عند الحاجة لتمثيل قانوني",
            ],
            cta: { kind: "phone" },
          },
          {
            badge: "lowcost",
            title: "خدمات الهجرة والجنسية",
            summary:
              "المهاجرون، جميعًا مرحب بهم هنا. التماسات، لجوء، بطاقات خضراء، VAWA، زواج، تصاريح عمل، والمزيد.",
            points: [
              "إكمال وتقديم جميع نماذج وطلبات الهجرة",
              "ترجمة إجاباتك إلى نماذج الهجرة",
              "المساعدة في جمع الوثائق الداعمة (شهادات الميلاد، السجلات الحيوية)",
              "تجهيزك لمقابلات الهجرة والسفارة الأمريكية",
              "إنجاز سريع · خدمة متنقّلة لراحتك",
              "أسعار منافسة — أقل من نصف رسوم أي مكتب محاماة في المتوسط",
              "KTB منظمة غير ربحية، ليست مكتب محاماة — مرخّص لها قانونًا تقديم هذه الخدمة",
            ],
            cta: { kind: "phone" },
          },
          {
            badge: "certified",
            title: "الترجمة عبر الهاتف، شخصية، والمستندات",
            summary: "ترجمة معتمدة لوثائقك وترجمة فورية في أي سياق — عبر خمس لغات، مقبولة في المحاكم.",
            points: [
              "الإنجليزية والعربية والإسبانية والصومالية والهمونغ",
              "شهادات الميلاد والزواج والعقود القانونية",
              "النسخ الأكاديمية والسجلات الطبية",
              "معتمدة وموثّقة ومقبولة في المحاكم",
              "ترجمة فورية في المحاكم والمقابلات والطب وفي الموقع",
              "الهاتف والفيديو عن بُعد — حسب الطلب، في أي مكان",
            ],
            cta: { kind: "link", href: "#translation" },
          },
        ],
      },
      hiring: {
        tag: "نحن نوظّف",
        title: "انضم إلى مهمتنا.",
        intro:
          "نوسّع فريقنا من المدافعين المجتمعيين. إن كنت تتحدث أيًّا من هذه اللغات، نريد أن نسمع منك.",
        roles: [
          "مختصّو نماذج الهجرة",
          "مترجمون فوريون للعربية",
          "مترجمون فوريون للإسبانية",
          "مترجمون فوريون للصومالية",
          "مترجمون فوريون للهمونغ",
          "مترجمون فوريون للروسية",
        ],
        call: "اتصل بـ 651-300-5321 للتفاصيل",
        emailTo: "jobs@ktbservices.org",
        emailCta: "راسلنا",
      },
      translation: {
        tag: "الجسر اللغوي",
        title1: "الترجمة عبر الهاتف، شخصية، والمستندات",
        title2: "كملاحة ثقافية،",
        title3: "لا مجرد كلمات.",
        subtitle:
          "نترجم فوريًّا في كل مكان — المحاكم والمقابلات والعيادات — ونترجم كل شيء. خمس لغات بدقّة معتمدة تثق بها المؤسسات.",
        fromWord: "الإنجليزية",
        interpretingTitle: "الترجمة الفورية",
        interpretingIntro: "المحاكم والمقابلات والعيادات والاجتماعات والإفادات — بالهاتف أو الفيديو أو في الموقع. متتالية وفورية. أي سياق، أي موقف. إن احتاج الأمر إلى مترجم فوري، نحن نقوم بذلك.",
        interpretingItems: [
          { type: "الترجمة الفورية في المحاكم", note: "معتمدة ومقبولة في المحاكم" },
          { type: "ترجمة المقابلات", note: "USCIS واللجوء والقانونية" },
          { type: "الترجمة الفورية الطبية", note: "العيادات والمستشفيات" },
          { type: "الأعمال والاجتماعات", note: "متتالية وفورية" },
          { type: "الهاتف والفيديو عن بُعد", note: "حسب الطلب، في أي مكان" },
          { type: "المجتمع والفعاليات", note: "دعم في الموقع" },
        ],
        translateEverything: "نقوم بكل شيء",
        toList: ["العربية", "Español", "Soomaali", "Hmoob"],
        bannerAria: "ترجمة معتمدة بين الإنجليزية والعربية والإسبانية والصومالية والهمونغ",
        galleryTitle: "بعض أمثلة ما نقوم به",
        scrollHint: "مرّر ←",
        docs: [
          { type: "شهادات الميلاد", note: "معتمدة وموثّقة" },
          { type: "العقود القانونية", note: "مقبولة في المحاكم" },
          { type: "الزواج والطلاق", note: "مقبولة من USCIS" },
          { type: "النسخ الأكاديمية", note: "جاهزة للاعتماد" },
          { type: "الرسائل الشخصية", note: "أمينة وسلسة" },
          { type: "السجلات الطبية", note: "دقيقة المصطلحات" },
          { type: "الترجمة الفورية في المحاكم", note: "معتمدة ومقبولة في المحاكم", kind: "interp" },
          { type: "ترجمة المقابلات", note: "USCIS والسفارة الأمريكية", kind: "interp" },
          { type: "الترجمة الفورية الطبية", note: "العيادات والمستشفيات", kind: "interp" },
          { type: "الهاتف والفيديو عن بُعد", note: "حسب الطلب، في أي مكان", kind: "interp" },
        ],
        dropzone: {
          title: "رفع مباشر",
          desc: "أرسل أوراقك كخدمة راقية. اسحب ملفك هنا أو انقر للتصفّح. سنردّ عليك بعرض سعر معتمد.",
          uploaded: "تم الرفع",
          ariaLabel: "ارفع وثائق للحصول على عرض سعر ترجمة",
        },
      },
      about: {
        tag: "مهمّتنا",
        title: "ملاذ من الوضوح المؤسسي لكل جار.",
        body:
          "منذ 2012، قدّمت KTB Services لمجتمعنا أعلى مستوى من الخدمات. كمنظمة غير ربحية 501(c)(3)، نؤمن بأن التحدث بلغتك حقٌّ لا امتياز. نترجم كل وثيقة بعناية، ونترجم فوريًّا كل محادثة باحترام ودقّة.",
        stats: [
          { value: "2012", label: "نخدم منذ" },
          { value: "501(c)(3)", label: "غير ربحية معفاة" },
          { value: "+4", label: "لغات نتحدثها" },
        ],
      },
      footer: {
        tagline: "ورشة إدارية غير ربحية 501(c)(3). حياتك، منظمة. وثائقك، متقنة.",
        navigate: "تصفّح",
        contactTitle: "تواصل",
        phoneLabel: "الهاتف",
        emails: {
          general: "info@ktbservices.org",
          support: "support@ktbservices.org",
          jobs: "jobs@ktbservices.org",
        },
        generalLabel: "عام",
        supportLabel: "دعم",
        careersLabel: "وظائف",
        serving: "نخدم مجتمعنا منذ 2012",
        copyright: "جميع الحقوق محفوظة.",
        status: "منظمة غير ربحية معفاة من الضرائب 501(c)(3)",
      },
    },
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === "undefined") return "en";
    const stored = localStorage.getItem("ktb-lang");
    return translations[stored] ? stored : "en";
  });

  useEffect(() => {
    localStorage.setItem("ktb-lang", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const toggle = () => setLang((l) => (l === "en" ? "es" : l === "es" ? "ar" : "en"));

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t: translations[lang] || translations.en }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useI18n must be used within LanguageProvider");
  return ctx;
}