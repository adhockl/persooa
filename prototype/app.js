const BRAND = {
  blue: "#015BFE",
  dark: "#0F1E34",
};

const offerPages = [
  {
    slug: "personalizacja-ai",
    enSlug: "ai-personalization",
    title: "Personalizacja AI",
    enTitle: "AI Personalization",
    lead: "Dostosuj doświadczenia klientów w czasie rzeczywistym i zmień marketing w system generujący przychód oraz lojalność.",
    enLead: "Personalize customer experiences in real time and turn marketing into a revenue and loyalty engine.",
    eyebrow: "Oferta",
    bullets: ["Integracja danych", "Next Best Action", "Dynamiczne treści", "Automatyzacja kampanii"],
  },
  {
    slug: "agenci-przychodu",
    enSlug: "revenue-agents",
    title: "Agenci przychodu",
    enTitle: "Revenue Agents",
    lead: "Automatyzacja sprzedaży i pozyskiwania klientów bez przerwy w działaniu.",
    enLead: "Automate revenue generation and customer acquisition without slowing down operations.",
    eyebrow: "Oferta",
    bullets: ["Akwizycja", "Scoring", "Rekomendacje", "Aktywacja kampanii"],
  },
  {
    slug: "cdp",
    enSlug: "cdp",
    title: "Platforma CDP",
    enTitle: "CDP Platform",
    lead: "Zbieraj, ujednolicaj i aktywuj dane klientów w czasie rzeczywistym. Łączymy CDP z Twoim stackiem technologicznym.",
    enLead: "Collect, unify and activate customer data in real time. We connect CDP with your technology stack.",
    eyebrow: "Oferta",
    bullets: ["Migracja na Synerise", "150+ konektorów", "Zero downtime", "Customer 360"],
  },
  {
    slug: "agenci-pracy",
    enSlug: "work-agents",
    title: "Agenci pracy",
    enTitle: "Work Agents",
    lead: "Zautomatyzuj powtarzalne procesy biznesowe, aby zespoły mogły skupić się na strategii, wzroście i obsłudze klienta.",
    enLead: "Automate repetitive business processes so teams can focus on strategy, growth and customer experience.",
    eyebrow: "Oferta",
    bullets: ["Automatyzacja procesów", "Wsparcie zespołów", "AI workflows", "Redukcja pracy ręcznej"],
  },
  {
    slug: "program-lojalnosciowy",
    enSlug: "loyalty-program",
    title: "Program Lojalnościowy myRewards",
    enTitle: "myRewards Loyalty Program",
    lead: "Buduj więzi z klientami poprzez nagrody, personalizację i aktywację we wszystkich kanałach.",
    enLead: "Build customer loyalty with rewards, personalization and omnichannel activation.",
    eyebrow: "Oferta",
    bullets: ["Retencja", "Nagrody", "LTV", "Omnichannel"],
  },
  {
    slug: "roi-w-90dni",
    enSlug: "roi-in-90-days",
    title: "ROI w 90 dni",
    enTitle: "ROI in 90 Days",
    lead: "Zwiększ liczbę zamówień i średnią wartość koszyka dzięki personalizacji, automatyzacji i AI.",
    enLead: "Increase order volume and average basket value with personalization, automation and AI.",
    eyebrow: "Program",
    bullets: ["Warsztat biznesowy", "Warsztat techniczny", "Demo technologii", "7-10 scenariuszy"],
  },
  {
    slug: "wyszukiwarka-ai",
    enSlug: "ai-search",
    title: "Wyszukiwarka AI",
    enTitle: "AI Search",
    lead: "Pomóż klientom szybciej znaleźć właściwe produkty i zwiększ konwersję dzięki inteligentnemu wyszukiwaniu.",
    enLead: "Help customers find the right products faster and increase conversion with intelligent search.",
    eyebrow: "Oferta",
    bullets: ["Semantic Search", "Product Discovery", "Personalizacja wyników", "Konwersja"],
  },
];

const teamPhotos = [
  { name: "Arkadiusz Seredyn", file: "arkadiusz-seredyn-persooa.png" },
  { name: "Remigiusz Wojtczak", file: "remigiusz-wojtczak-persooa.png" },
  { name: "Karolina Borkowska", file: "karolina-borkowska-persooa.png" },
  { name: "Michał Szewczyk", file: "michal-szewczyk-persooa.png" },
];

const illustrationMap = {
  hero: "../assets/exports/illustrations/homepage-hero.png",
  personalization: "../assets/exports/illustrations/personalizacja-ai.png",
  revenue: "../assets/exports/illustrations/agenci-przychodu.png",
  cdp: "../assets/exports/illustrations/cdp.png",
  work: "../assets/exports/illustrations/agenci-pracy.png",
  loyalty: "../assets/exports/illustrations/program-lojalnosciowy.png",
  roi: "../assets/exports/illustrations/roi-w-90dni.png",
  search: "../assets/exports/illustrations/wyszukiwarka-ai.png",
};

const dictionary = {
  pl: {
    home: "Home",
    offer: "Oferta",
    blog: "Blog",
    contact: "Kontakt",
    ask: "Zapytaj o projekt",
    secondary: "Więcej o ROI w 90 dni",
    trusted: "Zaufanie 100+ marek w Europie",
    proof: "Persooa to maksymalizacja wzrostu w Twoim e-commerce",
    proofLead: "Budujemy rozwiązania AI, CDP i marketing automation na fundamencie danych, które realnie wpływają na AOV, ARPU, retencję i przychód.",
    pages: "Podstrony",
    ctaTitle: "Porozmawiajmy o Twoim e-commerce",
    ctaLead: "Sprawdzimy, które scenariusze AI, automatyzacji i danych mogą najszybciej dowieźć mierzalny wzrost.",
    footer: "© 2026 Persooa.com. Wszelkie prawa zastrzeżone.",
  },
  en: {
    home: "Home",
    offer: "Offer",
    blog: "Blog",
    contact: "Contact",
    ask: "Ask about a project",
    secondary: "More about ROI in 90 days",
    trusted: "Trusted by 100+ brands in Europe",
    proof: "Persooa maximizes growth in your e-commerce",
    proofLead: "We build AI, CDP and marketing automation solutions on a data foundation that impacts AOV, ARPU, retention and revenue.",
    pages: "Pages",
    ctaTitle: "Let’s talk about your e-commerce",
    ctaLead: "We will identify which AI, automation and data scenarios can deliver measurable growth fastest.",
    footer: "© 2026 Persooa.com. All rights reserved.",
  },
};

const routes = {
  "/": { type: "home" },
  "/blog": { type: "blog" },
  "/blog/cta-co-to-jest-przyklady-skutecznych-przyciskow-wezwan-do-dzialania": { type: "post" },
  "/kontakt": { type: "contact" },
  "/polityka-prywatnosci": { type: "legal", title: "Polityka prywatności" },
  "/kodeks-postepowania": { type: "legal", title: "Kodeks postępowania" },
  "/en": { type: "home", lang: "en" },
  "/en/blog": { type: "blog", lang: "en" },
  "/en/contact": { type: "contact", lang: "en" },
};

for (const page of offerPages) {
  routes[`/oferta/${page.slug}`] = { type: "offer", page };
  routes[`/en/offer/${page.enSlug}`] = { type: "offer", page, lang: "en" };
}

function routePath() {
  const hash = window.location.hash.replace(/^#/, "");
  return hash || "/";
}

function route() {
  return routes[routePath()] || routes["/"];
}

function lang() {
  return route().lang || "pl";
}

function t(key) {
  return dictionary[lang()][key];
}

function href(path) {
  return `#${path}`;
}

function section({ variant = "white", compact = false, children }) {
  const variants = {
    white: "bg-white text-[#0F1E34]",
    muted: "bg-[#FAFAFA] text-[#0F1E34]",
    blue: "bg-[#015BFE] text-white",
    dark: "dark-grid text-white",
    lightBlue: "bg-[#F4F6FD] text-[#0F1E34]",
  };
  const theme = variant === "dark" || variant === "blue" ? "dark" : "light";
  return `<section data-header-theme="${theme}" class="${variants[variant]} ${compact ? "py-12 md:py-16" : "py-16 md:py-24"}">
    <div class="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">${children}</div>
  </section>`;
}

function button(label, path = "/kontakt", variant = "primary") {
  const base = "inline-flex h-12 items-center justify-center rounded-full px-6 text-base font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";
  const variants = {
    primary: "bg-[#015BFE] text-white hover:bg-[#0F1E34] focus-visible:outline-[#015BFE]",
    secondary: "border border-[#0F1E34]/15 bg-white text-[#0F1E34] hover:border-[#015BFE] hover:text-[#015BFE] focus-visible:outline-[#015BFE]",
    light: "bg-white text-[#015BFE] hover:bg-[#F4F6FD] focus-visible:outline-white",
    hero: "bg-white text-[#05070D] hover:bg-[#F4F6FD] focus-visible:outline-white",
    heroSecondary: "border border-white/16 bg-white/0 text-white hover:bg-white hover:text-[#05070D] focus-visible:outline-white",
  };
  return `<a href="${href(path)}" class="${base} ${variants[variant]}">${label}</a>`;
}

function badge(label, dark = false) {
  return `<span class="inline-flex rounded-full ${dark ? "bg-white/10 text-white" : "bg-[#F4F6FD] text-[#015BFE]"} px-3 py-1 text-sm font-medium">${label}</span>`;
}

function heroIllustrationSection({ eyebrow, title, lead, visual, primaryLabel, primaryHref, secondaryLabel, secondaryHref, stats = [] }) {
  const statsMarkup = stats.length
    ? `<div class="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-white/12 pt-6">${stats.map((stat) => `<div><strong class="block text-3xl font-semibold text-white">${stat.value}</strong><span class="mt-1 block text-sm leading-5 text-white/58">${stat.label}</span></div>`).join("")}</div>`
    : "";
  const secondaryMarkup = secondaryLabel && secondaryHref ? button(secondaryLabel, secondaryHref, "heroSecondary") : "";

  return `<section data-header-theme="dark" class="hero-portal overflow-hidden pt-24 text-white md:pt-28">
    <div class="relative mx-auto grid min-h-[720px] max-w-7xl items-center gap-10 px-5 pb-16 sm:px-6 md:pb-24 lg:grid-cols-12 lg:px-8">
      <div class="relative z-10 max-w-2xl lg:col-span-6 lg:pr-8">
        ${badge(eyebrow, true)}
        <h1 class="mt-6 text-5xl font-semibold leading-none text-white md:text-6xl lg:text-7xl">${title}</h1>
        <p class="mt-6 max-w-2xl text-lg leading-8 text-white/72">${lead}</p>
        <div class="mt-8 flex flex-col gap-3 sm:flex-row">${button(primaryLabel, primaryHref, "hero")} ${secondaryMarkup}</div>
        ${statsMarkup}
      </div>
      <div class="relative z-0 -mx-5 min-h-[360px] sm:mx-0 lg:absolute lg:inset-y-0 lg:left-[45%] lg:right-[-12%] lg:min-h-0">
        <div class="hero-visual-stage h-full min-h-[360px] lg:min-h-[720px]">
          <img src="${visual}" alt="" class="hero-visual-image" />
        </div>
      </div>
    </div>
  </section>`;
}

function header() {
  const current = routePath();
  const l = lang();
  const langSwitch = l === "pl" ? "/en" : "/";
  const offerMenu = offerPages.map((page) => {
    const path = l === "pl" ? `/oferta/${page.slug}` : `/en/offer/${page.enSlug}`;
    const title = l === "pl" ? page.title : page.enTitle;
    const lead = l === "pl" ? page.lead : page.enLead;
    return `<a href="${href(path)}" class="group rounded-xl p-4 transition hover:bg-[#F4F6FD] focus:bg-[#F4F6FD] focus:outline-none">
      <div class="flex items-start gap-3">
        <div class="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F4F6FD] text-sm text-[#015BFE] transition group-hover:bg-[#015BFE] group-hover:text-white">✦</div>
        <div>
          <div class="text-base font-medium text-[#0F1E34] group-hover:text-[#015BFE]">${title}</div>
          <p class="mt-1 line-clamp-2 text-sm leading-5 text-[#595959]">${lead}</p>
        </div>
      </div>
    </a>`;
  }).join("");
  return `<header id="siteHeader" class="site-header fixed top-0 z-50 w-full border-b backdrop-blur">
    <div class="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
      <a href="${href(l === "pl" ? "/" : "/en")}" class="flex items-center gap-3">
        <img src="../assets/source/logos/persooa-logo.svg" alt="Persooa" class="brand-logo h-8 w-auto" />
      </a>
      <nav class="hidden items-center gap-8 text-sm font-medium text-[#0F1E34] lg:flex">
        <a class="nav-link hover:text-[#015BFE]" href="${href(l === "pl" ? "/" : "/en")}" ${current === "/" || current === "/en" ? "aria-current='page'" : ""}>${t("home")}</a>
        <div class="nav-dropdown relative">
          <button class="nav-dropdown-trigger inline-flex items-center gap-1 py-7 text-sm font-medium transition hover:text-[#015BFE]" type="button" aria-haspopup="true">
            ${t("offer")}
            <span class="text-xs">▾</span>
          </button>
          <div class="nav-dropdown-panel pointer-events-none absolute left-0 top-full w-[780px] origin-top-left translate-y-2 rounded-2xl border border-[#E6EAF2] bg-white p-3 text-[#0F1E34] opacity-0 shadow-[0_24px_80px_rgba(15,30,52,0.14)] transition">
            <div class="grid grid-cols-2 gap-2">
              ${offerMenu}
            </div>
            <div class="mt-3 flex items-center justify-between rounded-xl bg-[#0F1E34] p-4 text-white">
              <div>
                <div class="text-sm font-medium">${l === "pl" ? "Program ROI w 90 dni" : "ROI in 90 days"}</div>
                <p class="mt-1 text-sm text-white/64">${l === "pl" ? "Najważniejsza ścieżka konwersji dla e-commerce." : "The key conversion path for e-commerce growth."}</p>
              </div>
              <a href="${href(l === "pl" ? "/oferta/roi-w-90dni" : "/en/offer/roi-in-90-days")}" class="rounded-full bg-[#015BFE] px-4 py-2 text-sm font-medium text-white">${l === "pl" ? "Zobacz" : "View"}</a>
            </div>
          </div>
        </div>
        <a class="nav-link hover:text-[#015BFE]" href="${href(l === "pl" ? "/blog" : "/en/blog")}">${t("blog")}</a>
        <a class="nav-link hover:text-[#015BFE]" href="${href(l === "pl" ? "/kontakt" : "/en/contact")}">${t("contact")}</a>
      </nav>
      <div class="flex items-center gap-3">
        <a href="${href(langSwitch)}" class="lang-switch hidden rounded-full border border-[#E6EAF2] px-3 py-2 text-sm font-medium text-[#0F1E34] transition hover:border-[#015BFE] hover:text-[#015BFE] sm:inline-flex">${l === "pl" ? "EN" : "PL"}</a>
        <a href="${href(l === "pl" ? "/kontakt" : "/en/contact")}" class="inline-flex h-11 items-center justify-center rounded-full bg-[#015BFE] px-5 text-sm font-medium text-white transition hover:bg-[#0F1E34]">${t("ask")}</a>
      </div>
    </div>
  </header>`;
}

function footer() {
  const l = lang();
  return `<footer class="bg-[#0F1E34] py-14 text-white">
    <div class="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-12 lg:px-8">
      <div class="lg:col-span-5">
        <img src="../assets/source/logos/persooa-logo.svg" alt="Persooa" class="h-8 w-auto brightness-0 invert" />
        <p class="mt-6 max-w-md text-base leading-7 text-white/68">Puzzle Office, Norblin Factory<br />Żelazna 51/53, Warsaw, Poland<br />hello@persooa.com</p>
      </div>
      <div class="grid gap-8 sm:grid-cols-3 lg:col-span-7">
        <div><h3 class="font-medium">Oferta</h3><ul class="mt-4 space-y-3 text-sm text-white/68">${offerPages.slice(0,4).map(p => `<li><a class="hover:text-white" href="${href(l === "pl" ? `/oferta/${p.slug}` : `/en/offer/${p.enSlug}`)}">${l === "pl" ? p.title : p.enTitle}</a></li>`).join("")}</ul></div>
        <div><h3 class="font-medium">Growth</h3><ul class="mt-4 space-y-3 text-sm text-white/68"><li><a href="${href(l === "pl" ? "/blog" : "/en/blog")}">Blog</a></li><li><a href="${href(l === "pl" ? "/oferta/roi-w-90dni" : "/en/offer/roi-in-90-days")}">ROI w 90 dni</a></li><li><a href="${href(l === "pl" ? "/kontakt" : "/en/contact")}">${t("contact")}</a></li></ul></div>
        <div><h3 class="font-medium">Legal</h3><ul class="mt-4 space-y-3 text-sm text-white/68"><li><a href="${href("/polityka-prywatnosci")}">Polityka prywatności</a></li><li><a href="${href("/kodeks-postepowania")}">Kodeks postępowania</a></li></ul></div>
      </div>
      <div class="border-t border-white/12 pt-6 text-sm text-white/56 lg:col-span-12">${t("footer")}</div>
    </div>
  </footer>`;
}

function homePage() {
  const l = lang();
  return `<main class="route-view">
    ${heroIllustrationSection({
      eyebrow: l === "pl" ? "#1 Synerise Partner w Europie" : "#1 Synerise Partner in Europe",
      title: l === "pl" ? "Dostarczamy ROI w 90 dni" : "We deliver ROI in 90 days",
      lead: l === "pl" ? "Budujemy AI agents, CDP i marketing automation, które optymalizują pracę zespołów i generują przychód na fundamencie danych działających w czasie rzeczywistym." : "We build AI agents, CDP and marketing automation that optimize team workflows and generate revenue on a real-time data foundation.",
      visual: illustrationMap.hero,
      primaryLabel: t("ask"),
      primaryHref: l === "pl" ? "/kontakt" : "/en/contact",
      secondaryLabel: t("secondary"),
      secondaryHref: l === "pl" ? "/oferta/roi-w-90dni" : "/en/offer/roi-in-90-days",
      stats: [
        { value: "90", label: l === "pl" ? "dni do pierwszego ROI" : "days to first ROI" },
        { value: "10x", label: "ROI" },
        { value: "70+", label: l === "pl" ? "wdrożeń" : "implementations" },
      ],
    })}
    ${section({ compact: true, children: `<p class="text-center text-lg font-medium text-[#0F1E34]">${t("trusted")}</p><div class="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">${["Orange","T-Mobile","Homla","Retail","Fashion","Beauty"].map(x=>`<div class="flex h-16 items-center justify-center rounded-xl border border-[#E6EAF2] bg-white text-sm font-medium text-[#595959]">${x}</div>`).join("")}</div>` })}
    ${section({ variant: "dark", children: `<div class="grid gap-10 lg:grid-cols-12"><div class="lg:col-span-5">${badge("Growth system", true)}<h2 class="mt-5 text-4xl font-semibold leading-tight md:text-5xl">${t("proof")}</h2></div><div class="lg:col-span-7"><p class="text-lg leading-8 text-white/72">${t("proofLead")}</p><div class="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">${["AOV","ARPU","Retencja","Konwersja"].map(x=>`<div class="rounded-xl border border-white/12 bg-white/[0.03] p-5"><div class="text-3xl font-semibold">+${x==="AOV"?"45":x==="ARPU"?"35":x==="Retencja"?"28":"30"}%</div><div class="mt-2 text-sm text-white/56">${x}</div></div>`).join("")}</div></div></div>` })}
    ${section({ children: `<div class="mx-auto max-w-3xl text-center">${badge("Oferta")}<h2 class="mt-5 text-4xl font-semibold leading-tight md:text-5xl">AI, CDP i automatyzacja dla e-commerce</h2><p class="mt-5 text-lg leading-8 text-[#595959]">Każdy obszar oferty ma własną podstronę, treść SEO i jasne CTA.</p></div><div class="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">${offerPages.map(offerCard).join("")}</div>` })}
    ${section({ variant: "lightBlue", children: `<div class="grid items-end gap-8 lg:grid-cols-12"><div class="lg:col-span-5">${badge("Zespół")}<h2 class="mt-5 text-4xl font-semibold leading-tight md:text-5xl">Eksperci od AI, danych i wzrostu e-commerce</h2><p class="mt-5 text-lg leading-8 text-[#595959]">W prototypie używamy zdjęć zespołu dostarczonych do katalogu assets. Finalne kadry i podpisy potwierdzimy przed wdrożeniem.</p></div><div class="grid gap-4 sm:grid-cols-2 lg:col-span-7">${teamPhotos.map(photo => `<figure class="overflow-hidden rounded-2xl bg-white shadow-card"><img src="../assets/source/photos/${photo.file}" alt="${photo.name}" class="aspect-[4/5] w-full object-cover" /><figcaption class="p-4 text-sm font-medium text-[#0F1E34]">${photo.name}</figcaption></figure>`).join("")}</div></div>` })}
    ${section({ variant: "blue", children: `<div class="grid items-center gap-10 lg:grid-cols-12"><div class="lg:col-span-7"><p class="text-sm font-medium uppercase text-white/72">Framework</p><h2 class="mt-4 text-4xl font-semibold leading-tight md:text-5xl">ROI w 90 dni to czytelny proces od diagnozy do aktywacji.</h2></div><div class="lg:col-span-5">${button(t("secondary"), l === "pl" ? "/oferta/roi-w-90dni" : "/en/offer/roi-in-90-days", "light")}</div></div>` })}
    ${ctaSection()}
  </main>`;
}

function offerCard(page) {
  const l = lang();
  const visual = offerVisual(page.slug);
  return `<article class="rounded-xl border border-[#E6EAF2] bg-white p-6 transition hover:border-[#015BFE]/40 hover:shadow-soft">
    <div class="minimal-illustration mb-6 aspect-[16/10] rounded-xl">
      <img src="${visual}" alt="" class="h-full w-full object-cover opacity-80 mix-blend-multiply" />
    </div>
    <p class="text-sm font-medium text-[#015BFE]">${page.eyebrow}</p>
    <h3 class="mt-2 text-2xl font-medium leading-tight text-[#0F1E34]">${l === "pl" ? page.title : page.enTitle}</h3>
    <p class="mt-4 text-base leading-7 text-[#595959]">${l === "pl" ? page.lead : page.enLead}</p>
    <a href="${href(l === "pl" ? `/oferta/${page.slug}` : `/en/offer/${page.enSlug}`)}" class="mt-6 inline-flex text-base font-medium text-[#015BFE] hover:text-[#0F1E34]">${l === "pl" ? "Zobacz podstronę" : "View page"} →</a>
  </article>`;
}

function offerPage(page) {
  const l = lang();
  const title = l === "pl" ? page.title : page.enTitle;
  const lead = l === "pl" ? page.lead : page.enLead;
  const visual = offerVisual(page.slug);
  return `<main class="route-view">
    ${heroIllustrationSection({
      eyebrow: page.eyebrow,
      title,
      lead,
      visual,
      primaryLabel: t("ask"),
      primaryHref: l === "pl" ? "/kontakt" : "/en/contact",
    })}
    ${section({ children: `<div class="grid gap-10 lg:grid-cols-12"><div class="lg:col-span-5"><h2 class="text-4xl font-semibold leading-tight">Dla większej sprzedaży w e-commerce</h2><p class="mt-5 text-lg leading-8 text-[#595959]">Każdy e-commerce ma inne wyzwania. Dostarczamy rozwiązania, które działają tam, gdzie są potrzebne: w danych, personalizacji, automatyzacji i kanałach komunikacji.</p></div><div class="grid gap-4 md:grid-cols-2 lg:col-span-7">${page.bullets.map(x=>`<div class="rounded-xl border border-[#E6EAF2] bg-white p-6"><div class="text-sm text-[#015BFE]">Obszar</div><h3 class="mt-2 text-xl font-medium">${x}</h3></div>`).join("")}</div></div>` })}
    ${section({ variant: "lightBlue", children: `<div class="mx-auto max-w-3xl text-center"><h2 class="text-4xl font-semibold leading-tight">Jak to wdrażamy</h2><p class="mt-5 text-lg leading-8 text-[#595959]">Diagnozujemy dane, projektujemy scenariusze, konfigurujemy technologię i mierzymy wpływ na KPI.</p></div><div class="mt-12 grid gap-6 lg:grid-cols-4">${["Audyt","Strategia","Implementacja","Optymalizacja"].map((x,i)=>`<div class="rounded-xl bg-white p-6"><div class="text-sm text-[#015BFE]">0${i+1}</div><h3 class="mt-3 text-xl font-medium">${x}</h3><p class="mt-3 text-sm leading-6 text-[#595959]">Etap procesu przygotowany do rozwinięcia w finalnej treści.</p></div>`).join("")}</div>` })}
    ${ctaSection()}
  </main>`;
}

function offerVisual(slug) {
  const map = {
    "personalizacja-ai": illustrationMap.personalization,
    "agenci-przychodu": illustrationMap.revenue,
    cdp: illustrationMap.cdp,
    "agenci-pracy": illustrationMap.work,
    "program-lojalnosciowy": illustrationMap.loyalty,
    "roi-w-90dni": illustrationMap.roi,
    "wyszukiwarka-ai": illustrationMap.search,
  };
  return map[slug] || illustrationMap.hero;
}

function blogPage() {
  const posts = ["CTA – co to jest? Przykłady skutecznych przycisków wezwań do działania","Dlaczego platforma CDP staje się ewolucją Twojego Marketing Automation","Agenci AI - czym są i jak działają inteligentni agenci?","Co to jest Semantic Search? Vector Search vs Semantic Search"];
  return `<main class="route-view">
    ${section({ children: `<div class="max-w-3xl">${badge("Blog")}<h1 class="mt-6 text-5xl font-semibold leading-none md:text-6xl">Stories from the field</h1><p class="mt-6 text-lg leading-8 text-[#595959]">Artykuły, poradniki i materiały o AI, CDP, automatyzacji i wzroście e-commerce.</p></div><div class="mt-14 grid gap-6 md:grid-cols-2">${posts.map((p,i)=>`<article class="rounded-xl border border-[#E6EAF2] bg-white p-6"><p class="text-sm text-[#015BFE]">${i === 0 ? "Guide" : "Insights"}</p><h2 class="mt-3 text-2xl font-medium leading-tight">${p}</h2><p class="mt-4 text-base leading-7 text-[#595959]">Roboczy wpis z Webflow do redakcji, SEO i migracji.</p><a href="${href(i === 0 ? "/blog/cta-co-to-jest-przyklady-skutecznych-przyciskow-wezwan-do-dzialania" : "/blog")}" class="mt-6 inline-flex font-medium text-[#015BFE]">Czytaj więcej →</a></article>`).join("")}</div>` })}
    ${ctaSection()}
  </main>`;
}

function postPage() {
  return `<main class="route-view">
    ${section({ children: `<article class="mx-auto max-w-3xl"><p class="text-sm font-medium text-[#015BFE]">Blog</p><h1 class="mt-5 text-5xl font-semibold leading-tight">CTA – co to jest? Przykłady skutecznych przycisków wezwań do działania</h1><p class="mt-6 text-lg leading-8 text-[#595959]">Wpis blogowy przeniesiony z Webflow. W finalnej implementacji dostanie metadane, autora, datę publikacji, spis treści i linkowanie wewnętrzne.</p><div class="mt-10 space-y-8 text-lg leading-8 text-[#0F1E34]"><h2 class="text-3xl font-semibold">Co to jest CTA?</h2><p>CTA, czyli Call to Action, to wezwanie do działania prowadzące użytkownika do kolejnego kroku: kontaktu, pobrania materiału, zapisu albo zakupu.</p><h2 class="text-3xl font-semibold">Jak stworzyć skuteczne CTA?</h2><p>Skuteczne CTA jest konkretne, widoczne, osadzone w kontekście i komunikuje jasną korzyść dla użytkownika.</p></div></article>` })}
    ${ctaSection()}
  </main>`;
}

function contactPage() {
  return `<main class="route-view">
    ${section({ children: `<div class="grid gap-10 lg:grid-cols-12"><div class="lg:col-span-5">${badge("Kontakt")}<h1 class="mt-6 text-5xl font-semibold leading-none md:text-6xl">Skontaktuj się z nami</h1><p class="mt-6 text-lg leading-8 text-[#595959]">Napisz do nas i dowiedz się, jak możemy wesprzeć Twój e-commerce.</p><div class="mt-8 rounded-xl bg-[#F4F6FD] p-6 text-base leading-7"><strong>Persooa</strong><br />Puzzle Office, Norblin Factory<br />Żelazna 51/53, Warsaw, Poland<br />hello@persooa.com</div></div><form class="rounded-2xl border border-[#E6EAF2] bg-white p-6 lg:col-span-7 md:p-8"><div class="grid gap-5 md:grid-cols-2">${["Imię i nazwisko","E-mail","Firma","Strona www"].map(x=>`<label class="block"><span class="mb-2 block text-sm font-medium">${x}</span><input class="h-12 w-full rounded-lg border border-[#E6EAF2] px-4 outline-none focus:border-[#015BFE] focus:ring-4 focus:ring-[#015BFE]/10" /></label>`).join("")}<label class="block md:col-span-2"><span class="mb-2 block text-sm font-medium">Wiadomość</span><textarea class="min-h-32 w-full rounded-lg border border-[#E6EAF2] px-4 py-3 outline-none focus:border-[#015BFE] focus:ring-4 focus:ring-[#015BFE]/10"></textarea></label><div class="md:col-span-2">${button("Wyślij zapytanie", "/kontakt")}</div></div></form></div>` })}
  </main>`;
}

function legalPage(title) {
  return `<main class="route-view">${section({ children: `<article class="mx-auto max-w-4xl"><h1 class="text-5xl font-semibold">${title}</h1><p class="mt-6 text-lg leading-8 text-[#595959]">Treść zostanie przeniesiona z obecnej strony produkcyjnej i zatwierdzona przez klienta. Na tym etapie zachowujemy stronę w mapie serwisu oraz w footerze.</p><div class="mt-10 rounded-xl border border-[#E6EAF2] bg-[#FAFAFA] p-6"><h2 class="text-2xl font-medium">Spis treści</h2><ul class="mt-4 list-disc space-y-2 pl-5 text-[#595959]"><li>Wstęp</li><li>Definicje</li><li>Zasady</li><li>Informacje kontaktowe</li></ul></div></article>` })}</main>`;
}

function ctaSection() {
  return section({ variant: "dark", compact: true, children: `<div class="grid items-center gap-8 lg:grid-cols-12"><div class="lg:col-span-8"><h2 class="text-4xl font-semibold leading-tight">${t("ctaTitle")}</h2><p class="mt-4 max-w-2xl text-lg leading-8 text-white/72">${t("ctaLead")}</p></div><div class="lg:col-span-4 lg:text-right">${button(t("ask"), lang() === "pl" ? "/kontakt" : "/en/contact")}</div></div>` });
}

function render() {
  const r = route();
  let content = "";
  if (r.type === "home") content = homePage();
  if (r.type === "offer") content = offerPage(r.page);
  if (r.type === "blog") content = blogPage();
  if (r.type === "post") content = postPage();
  if (r.type === "contact") content = contactPage();
  if (r.type === "legal") content = legalPage(r.title);
  document.getElementById("app").innerHTML = header() + content + footer();
  initHeaderTheme();
  window.scrollTo({ top: 0, behavior: "instant" });
}

window.addEventListener("hashchange", render);
render();

function initHeaderTheme() {
  const headerEl = document.getElementById("siteHeader");
  if (!headerEl) return;

  const setTheme = () => {
    const headerHeight = headerEl.offsetHeight || 80;
    const probeY = Math.min(window.innerHeight - 1, headerHeight + 8);
    const probeX = Math.min(window.innerWidth - 1, Math.max(1, window.innerWidth / 2));
    const sectionEl = document.elementsFromPoint(probeX, probeY).find((el) => el?.dataset?.headerTheme);
    const theme = sectionEl?.dataset?.headerTheme || "light";
    headerEl.classList.toggle("is-over-dark", theme === "dark");
    headerEl.classList.toggle("is-over-light", theme !== "dark");
  };

  setTheme();
  window.removeEventListener("scroll", window.__persooaHeaderTheme);
  window.removeEventListener("resize", window.__persooaHeaderTheme);
  window.__persooaHeaderTheme = setTheme;
  window.addEventListener("scroll", setTheme, { passive: true });
  window.addEventListener("resize", setTheme);
}
