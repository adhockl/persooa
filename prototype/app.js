const offerPages = [
  {
    slug: "personalizacja-ai",
    enSlug: "ai-personalization",
    title: "Personalizacja AI",
    enTitle: "AI Personalization",
    lead: "Dostosuj doświadczenia klientów w czasie rzeczywistym. Łączymy dane, AI i automatyzację, aby każdy użytkownik widział właściwy komunikat, ofertę i rekomendację w najlepszym momencie.",
    enLead: "Personalize customer experiences in real time. We combine data, AI and automation so every user sees the right message, offer and recommendation at the right moment.",
    eyebrow: "Oferta",
    visualKey: "personalization",
    problem: "Większość e-commerce ma dane, ale nie wykorzystuje ich w decyzjach podejmowanych tu i teraz. Efekt to generyczne kampanie, niższa konwersja i utracony potencjał retencji.",
    solution: "Projektujemy scenariusze personalizacji oparte o behavioralne CDP, predykcje AI, rekomendacje produktowe i automatyczne kampanie w kanałach komunikacji.",
    bullets: ["Integracja danych", "Personalizacja AI", "Automatyzacja kampanii", "Aktywacja kanałów", "Lifecycle management", "Analityka wspierana przez AI"],
    outcomes: ["Wyższa konwersja z ruchu", "Wzrost AOV i ARPU", "Większa retencja", "Mniej ręcznej pracy w marketingu"],
    faq: [
      ["Czy personalizacja wymaga dużego zespołu po stronie klienta?", "Nie. Najpierw wybieramy scenariusze o wysokim wpływie, a konfigurację i optymalizację prowadzimy wspólnie z zespołem klienta."],
      ["Od czego zaczyna się wdrożenie?", "Od audytu danych, mapy ścieżek klienta i wyboru scenariuszy, które mogą najszybciej przełożyć się na sprzedaż."],
    ],
  },
  {
    slug: "agenci-przychodu",
    enSlug: "revenue-agents",
    title: "Agenci przychodu",
    enTitle: "Revenue Agents",
    lead: "Zwiększ sprzedaż za pomocą inteligentnych systemów, które wykrywają okazje, uruchamiają scenariusze i wspierają akwizycję klientów bez przerwy w działaniu.",
    enLead: "Increase sales with intelligent systems that detect opportunities, trigger scenarios and support customer acquisition without slowing operations down.",
    eyebrow: "Oferta",
    visualKey: "revenue",
    problem: "Zespoły sprzedaży i marketingu często reagują za późno: lead stygnie, klient odpływa, koszyk znika, a komunikacja nie nadąża za intencją użytkownika.",
    solution: "Budujemy agentów przychodu, którzy analizują sygnały behawioralne, scoring, historię zakupów i dostępność produktów, a następnie aktywują kampanie, rekomendacje i zadania dla zespołów.",
    bullets: ["Akwizycja klientów", "Lead scoring", "Next Best Offer", "Win-back", "Cross-sell i upsell", "Aktywacja kampanii"],
    outcomes: ["Więcej transakcji", "Wyższa jakość leadów", "Szybsza reakcja na intencję", "Lepsza praca na segmentach"],
    faq: [
      ["Czym agent przychodu różni się od kampanii automation?", "Agent nie jest pojedynczą kampanią. To logika decyzyjna, która stale analizuje dane i uruchamia najlepszy kolejny krok."],
      ["Jakie KPI mierzymy?", "Najczęściej: przychód z segmentu, konwersję, AOV, ARPU, koszt pozyskania i wzrost zgód marketingowych."],
    ],
  },
  {
    slug: "cdp",
    enSlug: "cdp",
    title: "Platforma CDP",
    enTitle: "CDP Platform",
    lead: "Zbieraj, ujednolicaj i aktywuj dane klientów w czasie rzeczywistym. Migrujemy na Synerise i łączymy CDP z kluczowymi systemami organizacji.",
    enLead: "Collect, unify and activate customer data in real time. We migrate teams to Synerise and connect CDP with the key systems in the organization.",
    eyebrow: "Oferta",
    visualKey: "cdp",
    problem: "Dane klienta są rozproszone między e-commerce, CRM, ERP, aplikacją, reklamą i narzędziami komunikacji. Bez wspólnego profilu trudno budować personalizację i mierzyć realny wpływ działań.",
    solution: "Projektujemy architekturę CDP, prowadzimy migracje z SALESmanago, Salesforce Marketing Cloud, Adobe Campaign, Braze i innych systemów oraz integrujemy Synerise z całym stackiem technologicznym.",
    bullets: ["Audyt i plan migracji", "Parallel run & testing", "Cutover & support", "150+ konektorów", "Customer 360", "Custom development"],
    outcomes: ["Jeden profil klienta", "Aktywacja danych w czasie rzeczywistym", "Mniej ryzyka migracji", "Solidny fundament pod AI"],
    integrations: ["Salesforce", "Dynamics 365", "HubSpot", "Magento", "Shopify", "SAP Commerce", "WooCommerce", "SAP ERP", "Comarch", "iOS", "Android", "SendGrid", "Twilio", "WhatsApp", "GA4", "Meta Ads", "Google Ads", "Snowflake", "BigQuery", "REST API", "GraphQL", "Webhooks"],
    faq: [
      ["Czy migracja oznacza przestój sprzedaży?", "Nie taki jest cel procesu. Pracujemy etapami: audyt, parallel run, testy, cutover i wsparcie po uruchomieniu."],
      ["Czy integrujecie systemy legacy?", "Tak. Tam, gdzie gotowy konektor nie wystarcza, projektujemy integracje przez API, webhooks albo custom development."],
    ],
  },
  {
    slug: "agenci-pracy",
    enSlug: "work-agents",
    title: "Agenci pracy",
    enTitle: "Work Agents",
    lead: "Automatyzuj powtarzalne procesy biznesowe, aby zespoły mogły skupić się na strategii, wzroście i obsłudze klienta.",
    enLead: "Automate repetitive business processes so teams can focus on strategy, growth and customer experience.",
    eyebrow: "Oferta",
    visualKey: "work",
    problem: "Wzrost e-commerce często blokują operacyjne zadania: ręczne segmenty, raporty, eksporty, powtarzalne decyzje i koordynacja między narzędziami.",
    solution: "Tworzymy agentów pracy, którzy przejmują powtarzalne workflow, wspierają zespoły marketingu, CRM, sprzedaży i obsługi klienta oraz działają na danych z CDP.",
    bullets: ["Marketing Automation 2.0", "AI workflows", "Raportowanie", "Segmentacja", "Wsparcie zespołów", "Redukcja pracy ręcznej"],
    outcomes: ["Krótszy czas operacji", "Większa przewidywalność procesów", "Mniej błędów ręcznych", "Więcej czasu na strategię"],
    faq: [
      ["Czy agenci pracy zastępują zespół?", "Nie. Ich rolą jest przejęcie powtarzalnych czynności i przygotowanie decyzji, aby zespół szybciej dowoził wynik."],
      ["Gdzie zaczynamy?", "Od mapy procesów i wyboru zadań, które są częste, mierzalne i mają jasne reguły decyzyjne."],
    ],
  },
  {
    slug: "program-lojalnosciowy",
    enSlug: "loyalty-program",
    title: "Program Lojalnościowy myRewards",
    enTitle: "myRewards Loyalty Program",
    lead: "Buduj więzi z klientami poprzez nagrody, personalizację i aktywację we wszystkich kanałach. myRewards pomaga zwiększać retencję, częstotliwość zakupów i LTV.",
    enLead: "Build customer loyalty with rewards, personalization and omnichannel activation. myRewards helps increase retention, purchase frequency and LTV.",
    eyebrow: "Oferta",
    visualKey: "loyalty",
    problem: "Program lojalnościowy bez danych i personalizacji szybko staje się kosztem. Klienci oczekują korzyści dopasowanych do ich zachowania, historii zakupów i intencji.",
    solution: "Projektujemy mechaniki lojalnościowe, punkty, nagrody, segmenty i scenariusze komunikacji połączone z CDP oraz kanałami marketing automation.",
    bullets: ["Mechaniki lojalnościowe", "Nagrody i statusy", "Personalizacja ofert", "Aktywacja omnichannel", "Retencja", "LTV"],
    outcomes: ["Wyższa częstotliwość zakupów", "Większe zaangażowanie", "Lepsze dane first-party", "Mocniejsza relacja z klientem"],
    faq: [
      ["Czy myRewards działa tylko dla dużych sklepów?", "Największy efekt pojawia się tam, gdzie istnieje powtarzalność zakupów i możliwość pracy na segmentach klientów."],
      ["Czy program można połączyć z Synerise?", "Tak. Zakładamy integrację z CDP, kanałami komunikacji i katalogiem produktowym."],
    ],
  },
  {
    slug: "roi-w-90dni",
    enSlug: "roi-in-90-days",
    title: "ROI w 90 dni",
    enTitle: "ROI in 90 Days",
    lead: "Zwiększ liczbę zamówień i średnią wartość koszyka dzięki personalizacji, automatyzacji i AI. W 90 dni wdrażamy scenariusze, które mają dowieźć mierzalny wpływ na KPI.",
    enLead: "Increase order volume and average basket value with personalization, automation and AI. In 90 days we deploy scenarios designed to create measurable KPI impact.",
    eyebrow: "Program",
    visualKey: "roi",
    problem: "Firmy inwestują w narzędzia marketing automation, ale nie zawsze widzą szybki zwrot. Brakuje priorytetyzacji scenariuszy, mierników i odpowiedzialności za wynik.",
    solution: "Prowadzimy program od warsztatu biznesowego i technicznego przez demonstrację technologii po przygotowanie procesu implementacji i uruchomienie około 10 scenariuszy.",
    bullets: ["Bezpłatny warsztat biznesowy", "Bezpłatny warsztat techniczny", "Demo technologii", "Proces implementacji", "7-10 scenariuszy", "Optymalizacja KPI"],
    outcomes: ["AOV i AOS", "ROI", "Więcej transakcji", "ARPU", "Zgody marketingowe", "Retencja"],
    faq: [
      ["Dla kogo jest program ROI w 90 dni?", "Najlepiej sprawdza się w e-commerce z katalogiem powyżej 200 produktów i co najmniej 1000 transakcji miesięcznie."],
      ["Co oznacza 10-krotny zwrot?", "To claim roboczy z materiałów źródłowych, który przed publikacją produkcyjną powinien zostać potwierdzony biznesowo i prawnie."],
    ],
  },
  {
    slug: "wyszukiwarka-ai",
    enSlug: "ai-search",
    title: "Wyszukiwarka AI",
    enTitle: "AI Search",
    lead: "Pomóż klientom szybciej znaleźć właściwe produkty i zwiększ konwersję dzięki semantic search, personalizacji wyników i lepszemu product discovery.",
    enLead: "Help customers find the right products faster and increase conversion with semantic search, personalized results and better product discovery.",
    eyebrow: "Oferta",
    visualKey: "search",
    problem: "Klienci opisują potrzeby własnym językiem, a klasyczna wyszukiwarka często rozumie tylko słowa kluczowe. To prowadzi do pustych wyników, frustracji i porzuconych sesji.",
    solution: "Wdrażamy inteligentne wyszukiwanie oparte o intencję, dane katalogowe, zachowanie użytkownika i personalizację wyników.",
    bullets: ["Semantic Search", "Vector Search", "Product Discovery", "Personalizacja wyników", "Katalog produktowy", "Analiza intencji"],
    outcomes: ["Mniej pustych wyników", "Wyższa konwersja search", "Lepsza ekspozycja produktów", "Krótsza droga do zakupu"],
    faq: [
      ["Czym różni się semantic search od klasycznego search?", "Semantic search rozumie intencję zapytania i podobieństwo znaczeń, a nie tylko dokładne dopasowanie słów."],
      ["Czy wyszukiwarka korzysta z danych klienta?", "Może korzystać z historii zachowań i segmentów, aby dopasować kolejność wyników do kontekstu użytkownika."],
    ],
  },
  {
    slug: "marketing-automation-2-0",
    enSlug: "marketing-automation-2-0",
    title: "Marketing Automation 2.0",
    enTitle: "Marketing Automation 2.0",
    lead: "Zamień automatyzację kampanii w system decyzyjny oparty o dane, AI i scenariusze wzrostu.",
    enLead: "Turn campaign automation into a decision system based on data, AI and growth scenarios.",
    eyebrow: "Oferta",
    visualKey: "revenue",
    problem: "Klasyczne automation bywa zbiorem newsletterów i prostych reguł. Nowy etap wymaga decyzji w czasie rzeczywistym, predykcji i spójnych danych.",
    solution: "Projektujemy scenariusze, segmenty, trigger points, komunikację i raportowanie, które łączą CRM, CDP, kanały komunikacji i sprzedaż.",
    bullets: ["Scenariusze lifecycle", "Trigger marketing", "Segmentacja", "Predykcje AI", "A/B testing", "Raportowanie wpływu"],
    outcomes: ["Większa skuteczność kampanii", "Mniej ręcznej obsługi", "Lepsza segmentacja", "Czytelny wpływ na przychód"],
    faq: [
      ["Czy to osobna usługa czy część personalizacji?", "Może działać jako osobna ścieżka, ale najlepsze efekty daje w połączeniu z CDP i personalizacją AI."],
      ["Czy przenosicie scenariusze z obecnego narzędzia?", "Tak, audytujemy istniejące kampanie i decydujemy, co migrować, uprościć albo przebudować."],
    ],
  },
];

const teamPhotos = [
  { name: "Arkadiusz Seredyn", file: "arkadiusz-seredyn-persooa.png", role: "Strategy & growth", bio: "Łączy strategię wzrostu, Synerise i pracę z klientami enterprise." },
  { name: "Bartłomiej Kopeć", file: "bartlomiej-kopec-persooa.png", role: "Implementation & automation", bio: "Przekłada scenariusze marketing automation na działające wdrożenia." },
  { name: "Kacper Chodak", file: "kacper-chodak-persooa.png", role: "Technology delivery", bio: "Wspiera architekturę rozwiązań, integracje i stabilne procesy delivery." },
  { name: "Karolina Borkowska", file: "karolina-borkowska-persooa.png", role: "Client success", bio: "Dba o przełożenie strategii na czytelną współpracę i mierzalne efekty." },
  { name: "Maciej Seredyn", file: "maciej-seredyn-persooa.png", role: "Business development", bio: "Pomaga markom znaleźć właściwą ścieżkę do wzrostu i personalizacji." },
  { name: "Marcin Włodarczak", file: "marcin-wlodarczak-persooa.png", role: "Data & CDP", bio: "Porządkuje dane, integracje i fundament pod real-time customer experience." },
  { name: "Michał Szewczyk", file: "michal-szewczyk-persooa.png", role: "Data & automation", bio: "Łączy analitykę, automatyzację i scenariusze aktywacji klientów." },
  { name: "Radosław Opoczyński", file: "radosla-opoczynski-persooa.png", role: "Growth consulting", bio: "Wspiera zespoły w projektowaniu procesów, które dowożą wynik." },
  { name: "Remigiusz Wojtczak", file: "remigiusz-wojtczak-persooa.png", role: "Technology & delivery", bio: "Odpowiada za technologiczną jakość wdrożeń i operacyjną przewidywalność." },
];

const careers = [
  { title: "Specjalista wdrożeń", category: "Implementacja", description: "Wspierasz klientów w transformacji ich systemów marketingowych.", location: "Warszawa", type: "Pełny etat" },
  { title: "Inżynier danych", category: "Technologia", description: "Projektujesz architektury, które obsługują miliony transakcji.", location: "Warszawa", type: "Pełny etat" },
  { title: "Konsultant strategii", category: "Konsultacja", description: "Pomagasz markom znaleźć drogę do wzrostu przez personalizację.", location: "Warszawa", type: "Pełny etat" },
  { title: "Kierownik produktu", category: "Produkt", description: "Definiujesz przyszłość naszych rozwiązań dla e-commerce.", location: "Warszawa", type: "Pełny etat" },
  { title: "Specjalista SEO", category: "Marketing", description: "Zwiększasz widoczność Persooa w wyszukiwarkach i umysłach klientów.", location: "Warszawa", type: "Pełny etat" },
  { title: "Deweloper frontend", category: "Technologia", description: "Budujesz interfejsy, które użytkownicy chcą używać każdego dnia.", location: "Warszawa", type: "Pełny etat" },
];

const blogPosts = [
  { title: "CTA - co to jest? Przykłady skutecznych przycisków wezwań do działania", category: "Guide", slug: "/blog/cta-co-to-jest-przyklady-skutecznych-przyciskow-wezwan-do-dzialania", excerpt: "Definicja CTA, rodzaje wezwań do działania, miejsca publikacji i przykłady buttonów, które pomagają zwiększać konwersję." },
  { title: "Dlaczego platforma CDP staje się ewolucją Twojego Marketing Automation", category: "CDP", slug: "/blog", excerpt: "Jak Customer Data Platform porządkuje dane i pozwala przejść od kampanii do decyzji w czasie rzeczywistym." },
  { title: "Agenci AI - czym są i jak działają inteligentni agenci?", category: "AI agents", slug: "/blog", excerpt: "Praktyczne spojrzenie na agentów AI w sprzedaży, obsłudze, marketingu i operacjach." },
  { title: "Co to jest Semantic Search? Vector Search vs Semantic Search", category: "AI search", slug: "/blog", excerpt: "Różnice między wyszukiwaniem semantycznym i wektorowym oraz ich wpływ na sprzedaż w e-commerce." },
  { title: "Workflow automation: jak AI zamienia powtarzalne procesy w silnik wzrostu", category: "Automation", slug: "/blog", excerpt: "Jak mapować procesy, wybierać zadania dla agentów i mierzyć efekt automatyzacji." },
  { title: "Churn prediction - czym jest i jak wspiera biznes?", category: "Retention", slug: "/blog", excerpt: "Jak predykcja odpływu pomaga szybciej reagować i projektować lepsze scenariusze retencji." },
];

const illustrationMap = {
  light: {
    hero: "../assets/exports/illustrations/homepage-hero.png",
    personalization: "../assets/exports/illustrations/personalizacja-ai.png",
    revenue: "../assets/exports/illustrations/agenci-przychodu.png",
    cdp: "../assets/exports/illustrations/cdp.png",
    work: "../assets/exports/illustrations/agenci-pracy.png",
    loyalty: "../assets/exports/illustrations/program-lojalnosciowy.png",
    roi: "../assets/exports/illustrations/roi-w-90dni.png",
    search: "../assets/exports/illustrations/wyszukiwarka-ai.png",
  },
  dark: {
    hero: "../assets/exports/illustrations/dark/homepage-hero.png",
    personalization: "../assets/exports/illustrations/dark/personalizacja-ai.png",
    revenue: "../assets/exports/illustrations/dark/agenci-przychodu.png",
    cdp: "../assets/exports/illustrations/dark/cdp.png",
    work: "../assets/exports/illustrations/dark/agenci-pracy.png",
    loyalty: "../assets/exports/illustrations/dark/program-lojalnosciowy.png",
    roi: "../assets/exports/illustrations/dark/roi-w-90dni.png",
    search: "../assets/exports/illustrations/dark/wyszukiwarka-ai.png",
  },
};

const offerIcons = {
  personalization: "user",
  revenue: "trending-up",
  cdp: "database",
  work: "workflow",
  loyalty: "badge-check",
  roi: "target",
  search: "search",
};

const processIcons = ["clipboard-check", "settings", "rocket", "trending-up"];
const roiStepIcons = ["clipboard-check", "wrench", "presentation", "rocket"];
const partnerIcons = ["handshake", "graduation-cap", "life-buoy", "wrench", "send", "users"];
const persooalizeIcons = ["calendar-days", "presentation", "book-open"];
const contactFieldIcons = {
  "Imię i nazwisko": "user",
  "E-mail": "mail",
  Firma: "building-2",
  "Strona www": "globe",
};
const roiChartData = {
  pl: {
    labels: ["Start", "30 dni", "60 dni", "90 dni"],
    revenue: [100, 124, 153, 189],
    baseline: [100, 104, 108, 112],
    revenueLabel: "Scenariusze Persooa",
    baselineLabel: "Bazowy trend",
  },
  en: {
    labels: ["Start", "30 days", "60 days", "90 days"],
    revenue: [100, 124, 153, 189],
    baseline: [100, 104, 108, 112],
    revenueLabel: "Persooa scenarios",
    baselineLabel: "Baseline trend",
  },
};

const dictionary = {
  pl: {
    home: "Home",
    offer: "Oferta",
    about: "O nas",
    growth: "Growth Hub",
    blog: "Blog",
    contact: "Kontakt",
    ask: "Zapytaj o projekt",
    secondary: "Więcej o ROI w 90 dni",
    trusted: "Zaufanie 100+ marek w Europie",
    ctaTitle: "Porozmawiajmy o Twoim e-commerce",
    ctaLead: "Sprawdzimy, które scenariusze AI, automatyzacji i danych mogą najszybciej dowieźć mierzalny wzrost.",
    footer: "© 2026 Persooa.com. Wszelkie prawa zastrzeżone.",
  },
  en: {
    home: "Home",
    offer: "Offer",
    about: "About",
    growth: "Growth Hub",
    blog: "Blog",
    contact: "Contact",
    ask: "Ask about a project",
    secondary: "More about ROI in 90 days",
    trusted: "Trusted by 100+ brands in Europe",
    ctaTitle: "Let’s talk about your e-commerce",
    ctaLead: "We will identify which AI, automation and data scenarios can deliver measurable growth fastest.",
    footer: "© 2026 Persooa.com. All rights reserved.",
  },
};

const routes = {
  "/": { type: "home" },
  "/o-nas": { type: "about" },
  "/growth-hub": { type: "growth" },
  "/program-partnerski": { type: "partners" },
  "/persooalize-360": { type: "persooalize" },
  "/blog": { type: "blog" },
  "/blog/cta-co-to-jest-przyklady-skutecznych-przyciskow-wezwan-do-dzialania": { type: "post" },
  "/kontakt": { type: "contact" },
  "/polityka-prywatnosci": { type: "legal", title: "Polityka prywatności", legalType: "privacy" },
  "/kodeks-postepowania": { type: "legal", title: "Kodeks postępowania", legalType: "conduct" },
  "/en": { type: "home", lang: "en" },
  "/en/about": { type: "about", lang: "en" },
  "/en/growth-hub": { type: "growth", lang: "en" },
  "/en/partners": { type: "partners", lang: "en" },
  "/en/persooalize-360": { type: "persooalize", lang: "en" },
  "/en/blog": { type: "blog", lang: "en" },
  "/en/contact": { type: "contact", lang: "en" },
  "/en/privacy-policy": { type: "legal", title: "Privacy Policy", legalType: "privacy", lang: "en" },
  "/en/code-of-conduct": { type: "legal", title: "Code of Conduct", legalType: "conduct", lang: "en" },
};

for (const page of offerPages) {
  routes[`/oferta/${page.slug}`] = { type: "offer", page };
  routes[`/en/offer/${page.enSlug}`] = { type: "offer", page, lang: "en" };
}

function routePath() {
  const hash = window.location.hash.replace(/^#/, "");
  return (hash || "/").split("?")[0];
}

function routeParams() {
  const hash = window.location.hash.replace(/^#/, "");
  return new URLSearchParams(hash.includes("?") ? hash.split("?").slice(1).join("?") : "");
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
  return `<section data-header-theme="${theme}" class="scroll-section ${variants[variant]} ${compact ? "py-12 md:py-16" : "py-16 md:py-24"}">
    <div class="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">${children}</div>
  </section>`;
}

function icon(name, className = "h-5 w-5") {
  return `<i data-lucide="${name}" class="${className}" aria-hidden="true"></i>`;
}

function button(label, path = "/kontakt", variant = "primary", iconName = "arrow-right") {
  const base = "inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-base font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";
  const variants = {
    primary: "bg-[#015BFE] text-white hover:bg-[#0F1E34] focus-visible:outline-[#015BFE]",
    secondary: "border border-[#0F1E34]/15 bg-white text-[#0F1E34] hover:border-[#015BFE] hover:text-[#015BFE] focus-visible:outline-[#015BFE]",
    light: "bg-white text-[#015BFE] hover:bg-[#F4F6FD] focus-visible:outline-white",
    heroDark: "bg-white text-[#05070D] hover:bg-[#F4F6FD] focus-visible:outline-white",
    heroDarkSecondary: "border border-white/16 bg-white/0 text-white hover:bg-white hover:text-[#05070D] focus-visible:outline-white",
    heroLight: "bg-[#015BFE] text-white hover:bg-[#0F1E34] focus-visible:outline-[#015BFE]",
    heroLightSecondary: "border border-[#0F1E34]/14 bg-white text-[#0F1E34] hover:border-[#015BFE] hover:text-[#015BFE] focus-visible:outline-[#015BFE]",
  };
  return `<a href="${href(path)}" class="${base} ${variants[variant]}"><span>${label}</span>${icon(iconName, "h-4 w-4")}</a>`;
}

function badge(label, dark = false) {
  return `<span class="inline-flex rounded-full ${dark ? "bg-white/10 text-white" : "bg-[#F4F6FD] text-[#015BFE]"} px-3 py-1 text-sm font-medium">${label}</span>`;
}

function roiChartSection() {
  const l = lang();
  const data = roiChartData[l];
  const metrics = l === "pl"
    ? [
      ["+89%", "indeks przychodu po 90 dniach"],
      ["7-10", "scenariuszy aktywowanych w programie"],
      ["3", "punkty kontrolne optymalizacji"],
    ]
    : [
      ["+89%", "revenue index after 90 days"],
      ["7-10", "activated program scenarios"],
      ["3", "optimization checkpoints"],
    ];
  return section({
    variant: "lightBlue",
    children: `<div class="grid items-center gap-10 lg:grid-cols-12">
      <div class="lg:col-span-5">
        ${badge(l === "pl" ? "Animated data" : "Animated data")}
        <h2 class="mt-5 text-4xl font-semibold leading-tight md:text-5xl">${l === "pl" ? "Wykresy jako część design systemu" : "Charts as part of the design system"}</h2>
        <p class="mt-5 text-lg leading-8 text-[#595959]">${l === "pl" ? "Chart.js w prototypie pokazuje, jak dane mogą animować się po wejściu sekcji w widok i jednocześnie używać tokenów Persooa: Brand Blue, Mint, Violet, borderów i typografii Kanit." : "Chart.js in the prototype shows how data can animate when the section enters view while using Persooa tokens: Brand Blue, Mint, Violet, borders and Kanit typography."}</p>
        <div class="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">${metrics.map(([value, label]) => `<div class="rounded-xl bg-white p-5 shadow-soft"><div class="text-3xl font-semibold text-[#015BFE]">${value}</div><p class="mt-2 text-sm leading-6 text-[#595959]">${label}</p></div>`).join("")}</div>
      </div>
      <div class="lg:col-span-7">
        <div class="chart-panel rounded-2xl p-5 shadow-soft md:p-7">
          <div class="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
            <div>
              <p class="text-sm font-medium text-[#015BFE]">${l === "pl" ? "ROI w 90 dni" : "ROI in 90 days"}</p>
              <h3 class="mt-2 text-2xl font-medium leading-tight">${l === "pl" ? "Symulowany indeks przychodu" : "Simulated revenue index"}</h3>
            </div>
            <div class="flex flex-wrap gap-4 text-sm text-[#595959]">
              <span class="inline-flex items-center gap-2"><span class="chart-legend-dot bg-[#015BFE]"></span>${data.revenueLabel}</span>
              <span class="inline-flex items-center gap-2"><span class="chart-legend-dot bg-[#41DBC3]"></span>${data.baselineLabel}</span>
            </div>
          </div>
          <div class="chart-canvas-shell mt-8">
            <canvas
              data-chart="roi-growth"
              data-chart-labels='${JSON.stringify(data.labels)}'
              data-chart-revenue='${JSON.stringify(data.revenue)}'
              data-chart-baseline='${JSON.stringify(data.baseline)}'
              data-chart-revenue-label="${data.revenueLabel}"
              data-chart-baseline-label="${data.baselineLabel}"
              aria-label="${l === "pl" ? "Wykres symulowanego wzrostu przychodu w programie ROI w 90 dni" : "Chart of simulated revenue growth in the ROI in 90 days program"}"
              role="img"
            ></canvas>
          </div>
        </div>
      </div>
    </div>`,
  });
}

function heroVariant(defaultVariant = "dark") {
  return routeParams().get("hero") === "light" ? "light" : defaultVariant;
}

function heroVisual(key, variant = "light") {
  return (illustrationMap[variant] && illustrationMap[variant][key]) || illustrationMap.light[key] || illustrationMap.light.hero;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function gradientTitleTail(title) {
  const safeTitle = escapeHtml(title);
  const words = safeTitle.trim().split(/\s+/);
  if (words.length < 2) return `<span class="text-gradient-highlight">${safeTitle}</span>`;
  const tailLength = words.length > 3 ? 2 : 1;
  return `${words.slice(0, -tailLength).join(" ")} <span class="text-gradient-highlight">${words.slice(-tailLength).join(" ")}</span>`;
}

function heroIllustrationSection({ eyebrow, title, lead, visual, variant = "dark", primaryLabel, primaryHref, secondaryLabel, secondaryHref, stats = [] }) {
  const isDark = variant === "dark";
  const primaryVariant = isDark ? "heroDark" : "heroLight";
  const secondaryVariant = isDark ? "heroDarkSecondary" : "heroLightSecondary";
  const statsMarkup = stats.length
    ? `<div class="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t ${isDark ? "border-white/12" : "border-[#DDE5F5]"} pt-6">${stats.map((stat) => `<div><strong class="hero-stat-value block text-3xl font-semibold">${stat.value}</strong><span class="hero-stat-label mt-1 block text-sm leading-5">${stat.label}</span></div>`).join("")}</div>`
    : "";
  const secondaryMarkup = secondaryLabel && secondaryHref ? button(secondaryLabel, secondaryHref, secondaryVariant) : "";

  return `<section data-header-theme="${isDark ? "dark" : "light"}" class="scroll-section hero-shell hero-shell--${variant} overflow-hidden pt-24 md:pt-28">
    <div class="hero-visual-backdrop hero-visual-stage hero-visual-stage--${variant}">
      <img src="${visual}" alt="" class="hero-visual-image hero-visual-image--${variant}" />
    </div>
    <div class="relative mx-auto grid min-h-[720px] max-w-7xl items-center gap-10 px-5 pb-16 sm:px-6 md:pb-24 lg:min-h-[calc(100vh-80px)] lg:grid-cols-12 lg:px-8">
      <div class="relative z-10 max-w-2xl lg:col-span-6 lg:pr-8">
        ${badge(eyebrow, isDark)}
        <h1 class="hero-title mt-6 text-5xl font-semibold leading-none md:text-6xl lg:text-7xl">${title}</h1>
        <p class="hero-lead mt-6 max-w-2xl text-lg leading-8">${lead}</p>
        <div class="mt-8 flex flex-col gap-3 sm:flex-row">${button(primaryLabel, primaryHref, primaryVariant, "send")} ${secondaryMarkup}</div>
        ${statsMarkup}
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
        <div class="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F4F6FD] text-[#015BFE] transition group-hover:bg-[#015BFE] group-hover:text-white">${icon(offerIcons[page.visualKey] || "circle", "h-4 w-4")}</div>
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
            ${icon("chevron-down", "h-4 w-4")}
          </button>
          <div class="nav-dropdown-panel pointer-events-none absolute left-0 top-full w-[860px] origin-top-left translate-y-2 rounded-2xl border border-[#E6EAF2] bg-white p-3 text-[#0F1E34] opacity-0 shadow-[0_24px_80px_rgba(15,30,52,0.14)] transition">
            <div class="grid grid-cols-2 gap-2">${offerMenu}</div>
          </div>
        </div>
        <a class="nav-link hover:text-[#015BFE]" href="${href(l === "pl" ? "/persooalize-360" : "/en/persooalize-360")}">Persooalize 360</a>
        <a class="nav-link hover:text-[#015BFE]" href="${href(l === "pl" ? "/o-nas" : "/en/about")}">${t("about")}</a>
        <a class="nav-link hover:text-[#015BFE]" href="${href(l === "pl" ? "/growth-hub" : "/en/growth-hub")}">${t("growth")}</a>
        <a class="nav-link hover:text-[#015BFE]" href="${href(l === "pl" ? "/blog" : "/en/blog")}">${t("blog")}</a>
        <a class="nav-link hover:text-[#015BFE]" href="${href(l === "pl" ? "/kontakt" : "/en/contact")}">${t("contact")}</a>
      </nav>
      <div class="flex items-center gap-3">
        <a href="${href(langSwitch)}" class="lang-switch hidden rounded-full border border-[#E6EAF2] px-3 py-2 text-sm font-medium text-[#0F1E34] transition hover:border-[#015BFE] hover:text-[#015BFE] sm:inline-flex">${l === "pl" ? "EN" : "PL"}</a>
        <a href="${href(l === "pl" ? "/kontakt" : "/en/contact")}" class="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#015BFE] px-5 text-sm font-medium text-white transition hover:bg-[#0F1E34]"><span>${t("ask")}</span>${icon("send", "h-4 w-4")}</a>
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
        <p class="mt-6 max-w-md text-base leading-7 text-white/68">Puzzle Office, Norblin Factory<br />Żelazna 51/53, Warsaw, Poland<br />M: hello@persooa.com<br />T: 501 006 000</p>
      </div>
      <div class="grid gap-8 sm:grid-cols-3 lg:col-span-7">
        <div><h3 class="font-medium">Oferta</h3><ul class="mt-4 space-y-3 text-sm text-white/68">${offerPages.slice(0, 6).map((p) => `<li><a class="hover:text-white" href="${href(l === "pl" ? `/oferta/${p.slug}` : `/en/offer/${p.enSlug}`)}">${l === "pl" ? p.title : p.enTitle}</a></li>`).join("")}</ul></div>
        <div><h3 class="font-medium">Growth</h3><ul class="mt-4 space-y-3 text-sm text-white/68"><li><a href="${href(l === "pl" ? "/growth-hub" : "/en/growth-hub")}">Growth Hub</a></li><li><a href="${href(l === "pl" ? "/blog" : "/en/blog")}">Blog</a></li><li><a href="${href(l === "pl" ? "/program-partnerski" : "/en/partners")}">Program partnerski</a></li><li><a href="${href(l === "pl" ? "/kontakt" : "/en/contact")}">${t("contact")}</a></li></ul></div>
        <div><h3 class="font-medium">Legal</h3><ul class="mt-4 space-y-3 text-sm text-white/68"><li><a href="${href(l === "pl" ? "/polityka-prywatnosci" : "/en/privacy-policy")}">${l === "pl" ? "Polityka prywatności" : "Privacy Policy"}</a></li><li><a href="${href(l === "pl" ? "/kodeks-postepowania" : "/en/code-of-conduct")}">${l === "pl" ? "Kodeks postępowania" : "Code of Conduct"}</a></li></ul></div>
      </div>
      <div class="border-t border-white/12 pt-6 text-sm text-white/56 lg:col-span-12">${t("footer")}</div>
    </div>
  </footer>`;
}

function homePage() {
  const l = lang();
  const variant = heroVariant("dark");
  return `<main class="route-view">
    ${heroIllustrationSection({
      eyebrow: l === "pl" ? "#1 Synerise Partner w Europie" : "#1 Synerise Partner in Europe",
      title: l === "pl" ? 'Dostarczamy <span class="text-gradient-highlight">ROI w 90 dni</span>' : 'We deliver <span class="text-gradient-highlight">ROI in 90 days</span>',
      lead: l === "pl" ? "Jedyna agencja w 100% dedykowana platformie Synerise. Budujemy AI agents, którzy optymalizują pracę zespołów i generują przychód na fundamencie behavioralnego CDP działającego w czasie rzeczywistym." : "A Synerise-dedicated agency building AI agents, CDP and marketing automation on a real-time behavioral data foundation.",
      visual: heroVisual("hero", variant),
      variant,
      primaryLabel: t("ask"),
      primaryHref: l === "pl" ? "/kontakt" : "/en/contact",
      secondaryLabel: t("secondary"),
      secondaryHref: l === "pl" ? "/oferta/roi-w-90dni" : "/en/offer/roi-in-90-days",
      stats: [
        { value: "100+", label: l === "pl" ? "klientów Persooa" : "Persooa clients" },
        { value: "90", label: l === "pl" ? "dni do pierwszych wyników" : "days to first results" },
        { value: "1000+", label: l === "pl" ? "procesów dziennie" : "daily processes" },
      ],
    })}
    ${section({ compact: true, children: `<p class="text-center text-lg font-medium text-[#0F1E34]">${t("trusted")}</p><div class="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">${["Orange", "T-Mobile", "Homla", "Retail", "Fashion", "Beauty"].map((x) => `<div class="flex h-16 items-center justify-center rounded-xl border border-[#E6EAF2] bg-white text-sm font-medium text-[#595959]">${x}</div>`).join("")}</div>` })}
    ${section({ variant: "dark", children: `<div class="grid gap-10 lg:grid-cols-12"><div class="lg:col-span-5">${badge("Growth system", true)}<h2 class="mt-5 text-4xl font-semibold leading-tight md:text-5xl">Persooa to maksymalizacja wzrostu w Twoim e-commerce</h2></div><div class="lg:col-span-7"><p class="text-lg leading-8 text-white/72">Budujemy rozwiązania AI, CDP i marketing automation na fundamencie danych, które realnie wpływają na AOV, ARPU, retencję i przychód. Zamiast wdrażać narzędzia dla samych narzędzi, projektujemy scenariusze wzrostu i mierzymy ich wpływ.</p><div class="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">${["AOV", "ARPU", "Retencja", "Konwersja"].map((x) => `<div class="rounded-xl border border-white/12 bg-white/[0.03] p-5"><div class="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-[#41DBC3]">${icon("trending-up", "h-5 w-5")}</div><div class="text-3xl font-semibold">+${x === "AOV" ? "45" : x === "ARPU" ? "35" : x === "Retencja" ? "28" : "30"}%</div><div class="mt-2 text-sm text-white/56">${x}</div></div>`).join("")}</div></div></div>` })}
    ${roiChartSection()}
    ${section({ children: `<div class="mx-auto max-w-3xl text-center">${badge("Oferta")}<h2 class="mt-5 text-4xl font-semibold leading-tight md:text-5xl">AI, CDP i automatyzacja dla e-commerce</h2><p class="mt-5 text-lg leading-8 text-[#595959]">Każda podstrona oferty ma własny problem, rozwiązanie, use cases, KPI i CTA. Treści bazują na mapie serwisu oraz eksporcie Relume.</p></div><div class="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">${offerPages.slice(0, 8).map(offerCard).join("")}</div>` })}
    ${section({ variant: "lightBlue", children: `<div class="grid items-center gap-10 lg:grid-cols-12"><div class="lg:col-span-5">${badge("ROI w 90 dni")}<h2 class="mt-5 text-4xl font-semibold leading-tight md:text-5xl">Czytelny framework od diagnozy do aktywacji.</h2><p class="mt-5 text-lg leading-8 text-[#595959]">Program obejmuje bezpłatny warsztat biznesowy, warsztat techniczny, demonstrację technologii i przygotowanie procesu implementacji. W 90 dni wdrażamy scenariusze dopasowane do specyfiki biznesu.</p><div class="mt-8">${button("Zobacz program", l === "pl" ? "/oferta/roi-w-90dni" : "/en/offer/roi-in-90-days")}</div></div><div class="grid gap-4 md:grid-cols-2 lg:col-span-7">${["Warsztat biznesowy", "Warsztat techniczny", "Demo technologii", "Implementacja scenariuszy"].map((x, i) => `<div class="rounded-xl bg-white p-6 shadow-soft"><div class="flex items-center justify-between gap-4"><div class="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F4F6FD] text-[#015BFE]">${icon(roiStepIcons[i], "h-5 w-5")}</div><span class="text-sm text-[#015BFE]">0${i + 1}</span></div><h3 class="mt-5 text-xl font-medium">${x}</h3><p class="mt-3 text-sm leading-6 text-[#595959]">Etap programu ROI w 90 dni, który porządkuje decyzje, dane i odpowiedzialność za wynik.</p></div>`).join("")}</div></div>` })}
    ${section({ children: `<div class="grid items-end gap-8 lg:grid-cols-12"><div class="lg:col-span-5">${badge("Zespół")}<h2 class="mt-5 text-4xl font-semibold leading-tight md:text-5xl">Eksperci od AI, danych i wzrostu e-commerce</h2><p class="mt-5 text-lg leading-8 text-[#595959]">Łączymy strategię, technologię, dane i wdrożenia Synerise. W finalnej stronie sekcja zostanie rozszerzona o zatwierdzone biogramy i pełne zdjęcia zespołu.</p></div><div class="grid gap-4 sm:grid-cols-2 lg:col-span-7">${teamPhotos.map((photo) => teamCard(photo)).join("")}</div></div>` })}
    ${section({ variant: "blue", children: `<div class="grid items-center gap-10 lg:grid-cols-12"><div class="lg:col-span-7"><p class="text-sm font-medium uppercase text-white/72">Program Partnerski</p><h2 class="mt-4 text-4xl font-semibold leading-tight md:text-5xl">Zostań Partnerem Synerise z Persooa.</h2><p class="mt-5 text-lg leading-8 text-white/72">Wykorzystaj doświadczenie największej agencji pracującej z Synerise: szkolenia, wsparcie sprzedaży, framework ROI w 90 dni i gotowe narzędzia wdrożeniowe.</p></div><div class="lg:col-span-5 lg:text-right">${button("Zobacz program", l === "pl" ? "/program-partnerski" : "/en/partners", "light")}</div></div>` })}
    ${ctaSection()}
  </main>`;
}

function offerCard(page) {
  const l = lang();
  const visual = heroVisual(page.visualKey, "light");
  return `<article class="rounded-xl border border-[#E6EAF2] bg-white p-6 transition hover:border-[#015BFE]/40 hover:shadow-soft">
    <div class="minimal-illustration mb-6 aspect-[16/10] rounded-xl">
      <img src="${visual}" alt="" class="h-full w-full object-cover opacity-80 mix-blend-multiply" />
    </div>
    <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F4F6FD] text-[#015BFE]">${icon(offerIcons[page.visualKey] || "circle", "h-5 w-5")}</div>
    <p class="mt-5 text-sm font-medium text-[#015BFE]">${page.eyebrow}</p>
    <h3 class="mt-2 text-2xl font-medium leading-tight text-[#0F1E34]">${l === "pl" ? page.title : page.enTitle}</h3>
    <p class="mt-4 text-base leading-7 text-[#595959]">${l === "pl" ? page.lead : page.enLead}</p>
    <a href="${href(l === "pl" ? `/oferta/${page.slug}` : `/en/offer/${page.enSlug}`)}" class="mt-6 inline-flex items-center gap-2 text-base font-medium text-[#015BFE] hover:text-[#0F1E34]"><span>${l === "pl" ? "Zobacz podstronę" : "View page"}</span>${icon("arrow-right", "h-4 w-4")}</a>
  </article>`;
}

function teamCard(photo) {
  return `<figure class="flex flex-col text-center">
    <div class="mb-5 overflow-hidden rounded-2xl bg-[#F4F6FD] md:mb-6">
      <img src="../assets/source/photos/${photo.file}" alt="${photo.name}" class="aspect-square w-full object-cover" />
    </div>
    <figcaption>
      <h3 class="text-xl font-semibold leading-tight text-[#0F1E34]">${photo.name}</h3>
      <p class="mt-1 text-base text-[#595959]">${photo.role}</p>
      <p class="mx-auto mt-4 max-w-sm text-sm leading-6 text-[#595959]">${photo.bio}</p>
      <div class="mt-5 flex justify-center gap-3 text-[#0F1E34]">
        <span class="flex h-9 w-9 items-center justify-center rounded-full border border-[#E6EAF2]">${icon("linkedin", "h-4 w-4")}</span>
        <span class="flex h-9 w-9 items-center justify-center rounded-full border border-[#E6EAF2]">${icon("mail", "h-4 w-4")}</span>
      </div>
    </figcaption>
  </figure>`;
}

function offerPage(page) {
  const l = lang();
  const title = gradientTitleTail(l === "pl" ? page.title : page.enTitle);
  const lead = l === "pl" ? page.lead : page.enLead;
  const problem = l === "pl" ? page.problem : "Growth is often blocked by fragmented data, slow campaign execution and unclear ownership of measurable results.";
  const solution = l === "pl" ? page.solution : "Persooa combines Synerise, CDP, AI agents and marketing automation into focused scenarios designed, implemented and optimized around business KPIs.";
  const faq = l === "pl" ? page.faq : [
    ["How do we start?", "We begin with a business and technical diagnosis, then choose the scenarios with the strongest expected impact."],
    ["What do we measure?", "We connect implementation work with KPIs such as conversion, AOV, ARPU, retention, transactions and marketing consent growth."],
  ];
  const variant = heroVariant("dark");
  const visual = heroVisual(page.visualKey, variant);
  return `<main class="route-view">
    ${heroIllustrationSection({
      eyebrow: page.eyebrow,
      title,
      lead,
      visual,
      variant,
      primaryLabel: t("ask"),
      primaryHref: l === "pl" ? "/kontakt" : "/en/contact",
      secondaryLabel: l === "pl" ? (page.slug === "roi-w-90dni" ? "Umów demo" : "Zobacz ROI w 90 dni") : (page.slug === "roi-w-90dni" ? "Book a demo" : "View ROI in 90 days"),
      secondaryHref: l === "pl" ? "/oferta/roi-w-90dni" : "/en/offer/roi-in-90-days",
    })}
    ${section({ children: `<div class="grid gap-10 lg:grid-cols-12"><div class="lg:col-span-5">${badge("Problem")}<h2 class="mt-5 text-4xl font-semibold leading-tight">${l === "pl" ? "Co blokuje wzrost?" : "What blocks growth?"}</h2><p class="mt-5 text-lg leading-8 text-[#595959]">${problem}</p></div><div class="lg:col-span-7">${badge(l === "pl" ? "Rozwiązanie" : "Solution")}<h2 class="mt-5 text-4xl font-semibold leading-tight">${l === "pl" ? "Jak działa Persooa" : "How Persooa works"}</h2><p class="mt-5 text-lg leading-8 text-[#595959]">${solution}</p><div class="mt-8 grid gap-4 md:grid-cols-2">${page.bullets.map((x) => `<div class="flex items-start gap-3 rounded-xl border border-[#E6EAF2] bg-white p-5"><div class="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F4F6FD] text-[#015BFE]">${icon("check-circle-2", "h-4 w-4")}</div><h3 class="text-lg font-medium">${x}</h3></div>`).join("")}</div></div></div>` })}
    ${section({ variant: "lightBlue", children: `<div class="mx-auto max-w-3xl text-center"><h2 class="text-4xl font-semibold leading-tight">${l === "pl" ? "Wpływ na biznes" : "Business impact"}</h2><p class="mt-5 text-lg leading-8 text-[#595959]">${l === "pl" ? "Każdą usługę projektujemy pod mierzalne KPI, a nie tylko pod uruchomienie narzędzia." : "Every service is designed around measurable KPIs, not just the launch of another tool."}</p></div><div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">${page.outcomes.map((x) => `<div class="rounded-xl bg-white p-6 shadow-soft"><div class="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F4F6FD] text-[#015BFE]">${icon("target", "h-5 w-5")}</div><div class="mt-5 text-sm text-[#015BFE]">KPI</div><h3 class="mt-2 text-xl font-medium">${x}</h3></div>`).join("")}</div>` })}
    ${page.integrations ? section({ children: `<div class="max-w-3xl">${badge(l === "pl" ? "Integracje" : "Integrations")}<h2 class="mt-5 text-4xl font-semibold leading-tight">${l === "pl" ? "Łączymy CDP z Twoim stackiem technologicznym" : "We connect CDP with your technology stack"}</h2><p class="mt-5 text-lg leading-8 text-[#595959]">${l === "pl" ? "Pracujemy z narzędziami CRM, e-commerce, ERP, komunikacji, analityki, reklam, hurtowni danych i systemami custom." : "We work with CRM, e-commerce, ERP, communication, analytics, advertising, data warehouse and custom systems."}</p></div><div class="mt-10 flex flex-wrap gap-3">${page.integrations.map((x) => `<span class="rounded-full border border-[#E6EAF2] bg-white px-4 py-2 text-sm text-[#595959]">${x}</span>`).join("")}</div>` }) : ""}
    ${section({ children: `<div class="mx-auto max-w-3xl text-center"><h2 class="text-4xl font-semibold leading-tight">${l === "pl" ? "Proces wdrożenia" : "Implementation process"}</h2><p class="mt-5 text-lg leading-8 text-[#595959]">${l === "pl" ? "Zaczynamy od diagnozy, wybieramy scenariusze, wdrażamy technologię i optymalizujemy wynik." : "We start with diagnosis, choose scenarios, implement the technology and optimize the result."}</p></div><div class="mt-12 grid gap-6 lg:grid-cols-4">${(l === "pl" ? ["Audyt", "Strategia", "Implementacja", "Optymalizacja"] : ["Audit", "Strategy", "Implementation", "Optimization"]).map((x, i) => `<div class="rounded-xl border border-[#E6EAF2] bg-white p-6"><div class="flex items-center justify-between gap-4"><div class="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F4F6FD] text-[#015BFE]">${icon(processIcons[i], "h-5 w-5")}</div><span class="text-sm text-[#015BFE]">0${i + 1}</span></div><h3 class="mt-5 text-xl font-medium">${x}</h3><p class="mt-3 text-sm leading-6 text-[#595959]">${l === "pl" ? "Etap dopasowany do danych, zespołu i celów biznesowych klienta." : "A stage tailored to the client's data, team and business goals."}</p></div>`).join("")}</div>` })}
    ${section({ variant: "muted", children: `<div class="grid gap-8 lg:grid-cols-12"><div class="lg:col-span-4"><h2 class="text-4xl font-semibold leading-tight">FAQ</h2></div><div class="space-y-4 lg:col-span-8">${faq.map(([q, a]) => `<details class="rounded-xl border border-[#E6EAF2] bg-white p-6" open><summary class="cursor-pointer text-xl font-medium">${q}</summary><p class="mt-4 text-base leading-7 text-[#595959]">${a}</p></details>`).join("")}</div></div>` })}
    ${ctaSection()}
  </main>`;
}

function aboutPage() {
  const l = lang();
  return `<main class="route-view">
    ${simpleHero(l === "pl" ? "O nas" : "About", l === "pl" ? "Największa agencja pracująca z Synerise" : "A Synerise-focused growth agency", l === "pl" ? "Łączymy strategię, wdrożenia, dane i automatyzację, aby e-commerce szybciej przechodził od pomysłu do mierzalnego wzrostu." : "We combine strategy, implementation, data and automation so e-commerce teams can move from idea to measurable growth faster.", "hero")}
    ${section({ children: `<div class="grid gap-10 lg:grid-cols-12"><div class="lg:col-span-5">${badge("Team")}<h2 class="mt-5 text-4xl font-semibold leading-tight">${l === "pl" ? "Zespół zbudowany wokół wzrostu klientów" : "A team built around customer growth"}</h2><p class="mt-5 text-lg leading-8 text-[#595959]">${l === "pl" ? "W eksporcie Relume strona O nas zawiera sekcję zespołu i kariery. W prototypie porządkujemy ją wokół kompetencji: strategia, technologia, dane i obsługa klienta." : "The page organizes Persooa around four capabilities: strategy, technology, data and client success."}</p></div><div class="grid gap-4 sm:grid-cols-2 lg:col-span-7">${teamPhotos.map((photo) => teamCard(photo)).join("")}</div></div>` })}
    ${section({ variant: "lightBlue", children: `<div class="max-w-3xl">${badge(l === "pl" ? "Kariera" : "Careers")}<h2 class="mt-5 text-4xl font-semibold leading-tight">${l === "pl" ? "Otwarte role" : "Open roles"}</h2><p class="mt-5 text-lg leading-8 text-[#595959]">${l === "pl" ? "Role przeniesione z makiety Relume jako kierunek komunikacji rekrutacyjnej." : "Career roles are based on the Relume mockup and will be refined before production."}</p></div><div class="mt-10 grid gap-4 md:grid-cols-2">${careers.map(([title, text]) => `<article class="rounded-xl bg-white p-6 shadow-soft"><h3 class="text-xl font-medium">${title}</h3><p class="mt-3 text-base leading-7 text-[#595959]">${text}</p></article>`).join("")}</div>` })}
    ${ctaSection()}
  </main>`;
}

function partnersPage() {
  const l = lang();
  const items = l === "pl" ? [
    ["Prowizja", "Zarabiaj na wdrożeniach i usługach dodatkowych wraz z rozwojem swojego klienta. Przejrzyste zasady prowizji i pierwszeństwo umowy z klientem."],
    ["Kompleksowe szkolenia", "Wsparcie w procesie certyfikacji Synerise Academy, środowisko testowe, szkolenia dla zespołów oraz dostęp do dobrych praktyk."],
    ["Wsparcie 24/7", "Dedykowany Partner Manager, wsparcie techniczne, pomoc na etapie pre-sale consulting i wsparcie przy sesjach demo."],
    ["Gotowe narzędzia", "Framework ROI w 90 dni, scenariusze lojalnościowe myRewards, instrukcje integracji i baza scenariuszy kampanijnych."],
    ["Wsparcie sprzedaży", "Materiały marketingowe, licencje demo, wspólne akcje marketingowe i gwarancja bezpieczeństwa leadów."],
    ["Społeczność", "Sieć partnerska, spotkania warsztatowe, platformy współpracy i konferencje Persooalize 360."],
  ] : [
    ["Commission", "Earn on implementations and additional services as your client grows, with transparent rules and clear lead ownership."],
    ["Training", "Get support with Synerise Academy certification, test environments, team training and proven implementation practices."],
    ["24/7 support", "Work with a dedicated Partner Manager, technical support, pre-sale consulting and demo support."],
    ["Ready-to-use tools", "Use the ROI in 90 days framework, myRewards scenarios, integration guides and campaign scenario base."],
    ["Sales support", "Access marketing materials, demo licenses, joint campaigns and protected lead handling."],
    ["Community", "Join partner workshops, collaboration channels and Persooalize 360 events."],
  ];
  return `<main class="route-view">
    ${simpleHero(l === "pl" ? "Program Partnerski" : "Partner Program", l === "pl" ? "Zostań Partnerem Synerise z Persooa" : "Become a Synerise Partner with Persooa", l === "pl" ? "Wykorzystaj doświadczenie największej agencji pracującej z Synerise i rozwijaj projekty klientów z naszym wsparciem." : "Use the experience of a Synerise-focused agency and grow client projects with our support.", "revenue")}
    ${section({ children: `<div class="mx-auto max-w-3xl text-center">${badge(l === "pl" ? "Korzyści" : "Benefits")}<h2 class="mt-5 text-4xl font-semibold leading-tight">${l === "pl" ? "Co otrzymują partnerzy" : "What partners receive"}</h2></div><div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">${items.map(([title, text], i) => `<article class="rounded-xl border border-[#E6EAF2] bg-white p-6"><div class="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F4F6FD] text-[#015BFE]">${icon(partnerIcons[i], "h-5 w-5")}</div><h3 class="mt-5 text-2xl font-medium">${title}</h3><p class="mt-4 text-base leading-7 text-[#595959]">${text}</p></article>`).join("")}</div>` })}
    ${ctaSection()}
  </main>`;
}

function persooalizePage() {
  const l = lang();
  const cards = l === "pl" ? ["Konferencje i spotkania", "Warsztaty dla zespołów", "Materiały eksperckie"] : ["Conferences and meetups", "Team workshops", "Expert materials"];
  return `<main class="route-view">
    ${simpleHero("Persooalize 360", l === "pl" ? "Wiedza, społeczność i praktyka wzrostu e-commerce" : "Knowledge, community and e-commerce growth practice", l === "pl" ? "Persooalize 360 traktujemy jako sekcję ekspercką łączącą konferencje, warsztaty, materiały i społeczność wokół Synerise, AI i personalizacji." : "Persooalize 360 is an expert space for conferences, workshops, materials and community around Synerise, AI and personalization.", "hero")}
    ${section({ children: `<div class="grid gap-6 md:grid-cols-3">${cards.map((x, i) => `<article class="rounded-xl border border-[#E6EAF2] bg-white p-6"><div class="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F4F6FD] text-[#015BFE]">${icon(persooalizeIcons[i], "h-5 w-5")}</div><h2 class="mt-5 text-2xl font-medium">${x}</h2><p class="mt-4 text-base leading-7 text-[#595959]">${l === "pl" ? "Obszar do rozwinięcia po decyzji, czy Persooalize 360 jest osobnym produktem, hubem wiedzy czy marką wydarzeń." : "An area to refine once Persooalize 360 is confirmed as a product, knowledge hub or event brand."}</p></article>`).join("")}</div>` })}
    ${ctaSection()}
  </main>`;
}

function growthPage() {
  const l = lang();
  return `<main class="route-view">
    ${simpleHero("Growth Hub", "Stories from the field", l === "pl" ? "Artykuły, inspiracje, case studies i materiały o AI, CDP, marketing automation oraz wzroście e-commerce." : "Articles, inspiration, case studies and materials about AI, CDP, marketing automation and e-commerce growth.", "search")}
    ${section({ children: `<div class="flex flex-wrap gap-3">${["Persooalize 360", "Case study", "Inspiration", "AI agents", "CDP", "Automation"].map((x) => `<span class="rounded-full border border-[#E6EAF2] bg-white px-4 py-2 text-sm text-[#595959]">${x}</span>`).join("")}</div><div class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">${blogPosts.map(postCard).join("")}</div>` })}
    ${ctaSection()}
  </main>`;
}

function blogPage() {
  const l = lang();
  return `<main class="route-view">
    ${section({ children: `<div class="max-w-3xl">${badge("Blog")}<h1 class="mt-6 text-5xl font-semibold leading-none md:text-6xl">Stories from the field</h1><p class="mt-6 text-lg leading-8 text-[#595959]">${l === "pl" ? "Lista wpisów z Webflow i mapy treści. W finalnej wersji artykuły dostaną autora, datę, kategorie, metadane i linkowanie wewnętrzne." : "A list of articles from Webflow and the content map. In production, articles will include author, date, categories, metadata and internal linking."}</p></div><div class="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">${blogPosts.map(postCard).join("")}</div>` })}
    ${ctaSection()}
  </main>`;
}

function postCard(post) {
  return `<article class="rounded-xl border border-[#E6EAF2] bg-white p-6 transition hover:border-[#015BFE]/40 hover:shadow-soft">
    <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F4F6FD] text-[#015BFE]">${icon("file-text", "h-5 w-5")}</div>
    <p class="mt-5 text-sm text-[#015BFE]">${post.category}</p>
    <h2 class="mt-3 text-2xl font-medium leading-tight">${post.title}</h2>
    <p class="mt-4 text-base leading-7 text-[#595959]">${post.excerpt}</p>
    <a href="${href(post.slug)}" class="mt-6 inline-flex items-center gap-2 font-medium text-[#015BFE]"><span>Czytaj więcej</span>${icon("arrow-right", "h-4 w-4")}</a>
  </article>`;
}

function postPage() {
  return `<main class="route-view">
    ${section({ children: `<article class="mx-auto max-w-3xl"><p class="text-sm font-medium text-[#015BFE]">Blog / Conversion</p><h1 class="mt-5 text-5xl font-semibold leading-tight">CTA - co to jest? Przykłady skutecznych przycisków wezwań do działania</h1><p class="mt-6 text-lg leading-8 text-[#595959]">CTA, czyli Call to Action, to wezwanie do działania prowadzące użytkownika do kolejnego kroku: kontaktu, pobrania materiału, zapisu, przejścia do koszyka albo zakupu.</p><div class="mt-10 space-y-8 text-lg leading-8 text-[#0F1E34]"><h2 class="text-3xl font-semibold">Jakie są rodzaje CTA?</h2><p>Najczęściej spotykane formy to przyciski, linki tekstowe, bannery, formularze, pop-upy i sekcje kończące artykuł lub landing page.</p><h2 class="text-3xl font-semibold">Gdzie umieszczać CTA?</h2><p>CTA powinno pojawiać się tam, gdzie użytkownik rozumie wartość kolejnego kroku: w hero, po sekcji korzyści, przy case study, w treści bloga i przy finalnym formularzu.</p><h2 class="text-3xl font-semibold">Jak stworzyć skuteczne CTA?</h2><p>Dobre CTA jest konkretne, krótkie, widoczne i mówi o efekcie działania. Zamiast ogólnego „Wyślij” lepiej użyć komunikatu „Zapytaj o projekt” albo „Umów demo”.</p><h2 class="text-3xl font-semibold">Dlaczego warto stosować CTA?</h2><p>CTA porządkuje ścieżkę użytkownika, zmniejsza tarcie i pomaga mierzyć konwersję między treścią, ofertą i kontaktem sprzedażowym.</p></div></article>` })}
    ${ctaSection()}
  </main>`;
}

function contactPage() {
  const l = lang();
  const fields = l === "pl" ? ["Imię i nazwisko", "E-mail", "Firma", "Strona www"] : ["Full name", "E-mail", "Company", "Website"];
  return `<main class="route-view">
    ${section({ children: `<div class="grid gap-10 lg:grid-cols-12"><div class="lg:col-span-5">${badge(l === "pl" ? "Kontakt" : "Contact")}<h1 class="mt-6 text-5xl font-semibold leading-none md:text-6xl">${l === "pl" ? "Skontaktuj się z nami" : "Contact us"}</h1><p class="mt-6 text-lg leading-8 text-[#595959]">${l === "pl" ? "Napisz do nas i dowiedz się, jak możemy wesprzeć Twój e-commerce. Umów bezpłatne spotkanie demo Marketing Automation 2.0 z naszymi specjalistami." : "Write to us and learn how we can support your e-commerce. Book a free Marketing Automation 2.0 demo with our specialists."}</p><div class="mt-8 space-y-4 rounded-xl bg-[#F4F6FD] p-6 text-base leading-7"><strong class="block">Persooa</strong><div class="flex gap-3">${icon("map-pin", "mt-1 h-5 w-5 shrink-0 text-[#015BFE]")}<span>Puzzle Office, Norblin Factory<br />Żelazna 51/53, Warsaw, Poland</span></div><div class="flex gap-3">${icon("mail", "mt-1 h-5 w-5 shrink-0 text-[#015BFE]")}<span>hello@persooa.com</span></div><div class="flex gap-3">${icon("phone", "mt-1 h-5 w-5 shrink-0 text-[#015BFE]")}<span>501 006 000</span></div></div></div><form class="rounded-2xl border border-[#E6EAF2] bg-white p-6 lg:col-span-7 md:p-8"><div class="grid gap-5 md:grid-cols-2">${fields.map((x) => `<label class="block"><span class="mb-2 flex items-center gap-2 text-sm font-medium">${icon(contactFieldIcons[x] || "user", "h-4 w-4 text-[#015BFE]")}<span>${x}</span></span><input class="h-12 w-full rounded-lg border border-[#E6EAF2] px-4 outline-none focus:border-[#015BFE] focus:ring-4 focus:ring-[#015BFE]/10" /></label>`).join("")}<label class="block md:col-span-2"><span class="mb-2 flex items-center gap-2 text-sm font-medium">${icon("message-square", "h-4 w-4 text-[#015BFE]")}<span>${l === "pl" ? "Wiadomość" : "Message"}</span></span><textarea class="min-h-32 w-full rounded-lg border border-[#E6EAF2] px-4 py-3 outline-none focus:border-[#015BFE] focus:ring-4 focus:ring-[#015BFE]/10"></textarea></label><div class="md:col-span-2">${button(l === "pl" ? "Wyślij zapytanie" : "Send inquiry", l === "pl" ? "/kontakt" : "/en/contact", "primary", "send")}</div></div></form></div>` })}
    ${section({ compact: true, children: `<p class="text-center text-lg font-medium">${t("trusted")}</p><div class="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">${["Orange", "T-Mobile", "Homla", "Retail", "Fashion", "Beauty"].map((x) => `<div class="flex h-16 items-center justify-center rounded-xl border border-[#E6EAF2] bg-white text-sm font-medium text-[#595959]">${x}</div>`).join("")}</div>` })}
  </main>`;
}

function legalPage(title, legalType) {
  const l = lang();
  const privacy = [
    "Wstęp", "Definicje", "Zasady ochrony danych", "Prawa osoby, której dane dotyczą", "Dane, które zbieramy", "W jaki sposób wykorzystujemy Twoje dane osobowe", "Kto może uzyskać dostęp do Twoich danych osobowych", "Jak zabezpieczamy Twoje dane", "Pliki cookie i inne technologie", "Przesyłanie danych poza UE", "Profilowanie", "Informacje kontaktowe",
  ];
  const conduct = [
    "Misja Persooa", "Cel niniejszego Kodeksu", "Zgodność", "Praktyki biznesowe", "Prawo konkurencji", "Informacje poufne", "Przeciwdziałanie korupcji", "Prezenty i rozrywka", "Własność intelektualna", "Integralność finansowa", "Media społecznościowe", "Korzystanie z zasobów Persooa",
  ];
  const items = legalType === "privacy" ? privacy : conduct;
  return `<main class="route-view">${section({ children: `<article class="mx-auto max-w-4xl"><h1 class="text-5xl font-semibold">${title}</h1><p class="mt-6 text-lg leading-8 text-[#595959]">${l === "pl" ? "Strona zachowuje strukturę z obecnej produkcji. Treść prawna powinna zostać przeniesiona 1:1 albo zatwierdzona przez klienta i prawnika przed publikacją." : "This page preserves the production structure. Legal content should be migrated 1:1 or approved by the client and legal counsel before publishing."}</p><div class="mt-10 rounded-xl border border-[#E6EAF2] bg-[#FAFAFA] p-6"><h2 class="text-2xl font-medium">${l === "pl" ? "Spis treści" : "Table of contents"}</h2><ul class="mt-4 grid gap-2 md:grid-cols-2 text-[#595959]">${items.map((x) => `<li>${x}</li>`).join("")}</ul></div></article>` })}</main>`;
}

function simpleHero(eyebrow, title, lead, visualKey) {
  const variant = heroVariant("dark");
  return heroIllustrationSection({
    eyebrow,
    title: gradientTitleTail(title),
    lead,
    visual: heroVisual(visualKey, variant),
    variant,
    primaryLabel: t("ask"),
    primaryHref: lang() === "pl" ? "/kontakt" : "/en/contact",
  });
}

function ctaSection() {
  return section({ variant: "dark", compact: true, children: `<div class="grid items-center gap-8 lg:grid-cols-12"><div class="lg:col-span-8"><h2 class="text-4xl font-semibold leading-tight">${t("ctaTitle")}</h2><p class="mt-4 max-w-2xl text-lg leading-8 text-white/72">${t("ctaLead")}</p></div><div class="lg:col-span-4 lg:text-right">${button(t("ask"), lang() === "pl" ? "/kontakt" : "/en/contact", "primary", "send")}</div></div>` });
}

function refreshIcons() {
  if (!window.lucide) return;
  window.lucide.createIcons({
    attrs: {
      "stroke-width": 1.8,
    },
  });
}

function initCharts() {
  if (typeof window.__persooaChartsCleanup === "function") {
    window.__persooaChartsCleanup();
  }

  const canvases = Array.from(document.querySelectorAll('canvas[data-chart="roi-growth"]'));
  if (!canvases.length || !window.Chart) {
    window.__persooaChartsCleanup = null;
    return;
  }

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const charts = [];
  const makeChart = (canvas) => {
    if (canvas.__persooaChart) return;

    const ctx = canvas.getContext("2d");
    const style = getComputedStyle(document.documentElement);
    const brandBlue = style.getPropertyValue("--brand-blue").trim() || "#015BFE";
    const brandDark = style.getPropertyValue("--brand-dark").trim() || "#0F1E34";
    const brandGrey = style.getPropertyValue("--brand-grey").trim() || "#595959";
    const mint = style.getPropertyValue("--highlight-mint").trim() || "#41DBC3";
    const violet = style.getPropertyValue("--highlight-violet").trim() || "#4E3FF6";
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.parentElement?.offsetHeight || 320);
    gradient.addColorStop(0, "rgba(1, 91, 254, 0.2)");
    gradient.addColorStop(1, "rgba(1, 91, 254, 0)");

    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: JSON.parse(canvas.dataset.chartLabels || "[]"),
        datasets: [
          {
            label: canvas.dataset.chartRevenueLabel,
            data: JSON.parse(canvas.dataset.chartRevenue || "[]"),
            borderColor: brandBlue,
            backgroundColor: gradient,
            pointBackgroundColor: "#FFFFFF",
            pointBorderColor: brandBlue,
            pointBorderWidth: 2,
            pointRadius: 5,
            pointHoverRadius: 7,
            borderWidth: 3,
            fill: true,
            tension: 0.38,
          },
          {
            label: canvas.dataset.chartBaselineLabel,
            data: JSON.parse(canvas.dataset.chartBaseline || "[]"),
            borderColor: mint,
            backgroundColor: "rgba(65, 219, 195, 0.08)",
            pointBackgroundColor: "#FFFFFF",
            pointBorderColor: mint,
            pointBorderWidth: 2,
            pointRadius: 4,
            borderWidth: 2,
            borderDash: [8, 8],
            fill: false,
            tension: 0.38,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: reduceMotion ? false : {
          duration: 1200,
          easing: "easeOutQuart",
        },
        interaction: {
          intersect: false,
          mode: "index",
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            backgroundColor: brandDark,
            borderColor: "rgba(255,255,255,0.12)",
            borderWidth: 1,
            titleColor: "#FFFFFF",
            bodyColor: "rgba(255,255,255,0.78)",
            displayColors: true,
            padding: 12,
            callbacks: {
              label: (context) => `${context.dataset.label}: ${context.parsed.y}`,
            },
          },
        },
        scales: {
          x: {
            grid: {
              color: "rgba(230, 234, 242, 0.78)",
              drawBorder: false,
            },
            ticks: {
              color: brandGrey,
              font: {
                family: "Kanit",
                size: 13,
              },
            },
          },
          y: {
            min: 90,
            max: 200,
            grid: {
              color: "rgba(230, 234, 242, 0.9)",
              drawBorder: false,
            },
            ticks: {
              color: brandGrey,
              stepSize: 25,
              callback: (value) => `${value}`,
              font: {
                family: "Kanit",
                size: 13,
              },
            },
          },
        },
        elements: {
          point: {
            hoverBorderColor: violet,
          },
        },
      },
    });

    canvas.__persooaChart = chart;
    charts.push(chart);
  };

  let observer = null;
  if (reduceMotion || !("IntersectionObserver" in window)) {
    canvases.forEach(makeChart);
  } else {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          makeChart(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.2 });
    canvases.forEach((canvas) => observer.observe(canvas));
  }

  window.__persooaChartsCleanup = () => {
    if (observer) observer.disconnect();
    charts.forEach((chart) => chart.destroy());
  };
}

function render() {
  const r = route();
  let content = "";
  if (r.type === "home") content = homePage();
  if (r.type === "offer") content = offerPage(r.page);
  if (r.type === "about") content = aboutPage();
  if (r.type === "partners") content = partnersPage();
  if (r.type === "persooalize") content = persooalizePage();
  if (r.type === "growth") content = growthPage();
  if (r.type === "blog") content = blogPage();
  if (r.type === "post") content = postPage();
  if (r.type === "contact") content = contactPage();
  if (r.type === "legal") content = legalPage(r.title, r.legalType);
  document.getElementById("app").innerHTML = header() + content + footer();
  refreshIcons();
  initHeaderTheme();
  initPageMotion();
  initCharts();
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

function initPageMotion() {
  const root = document.querySelector(".route-view");
  if (!root) return;

  if (typeof window.__persooaMotionCleanup === "function") {
    window.__persooaMotionCleanup();
  }

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.documentElement.classList.toggle("motion-ready", !reduceMotion);

  const revealSelectors = [
    ".hero-shell .relative.z-10 > *",
    ".hero-visual-stage",
    "section:not(.hero-shell) > div > :not(.grid)",
    "section .grid > article",
    "section .grid > figure",
    "section .grid > div",
    "section form",
    ".minimal-illustration",
  ];

  const revealItems = [...new Set(Array.from(root.querySelectorAll(revealSelectors.join(","))))]
    .filter((el) => !el.closest("header, footer") && !el.matches("script, style"));

  revealItems.forEach((el) => {
    el.dataset.reveal = "";
    const parent = el.parentElement;
    const siblings = parent ? Array.from(parent.children).filter((child) => revealItems.includes(child)) : [];
    const siblingIndex = Math.max(0, siblings.indexOf(el));
    el.style.setProperty("--reveal-delay", `${Math.min(siblingIndex * 70, 280)}ms`);

    if (el.matches(".hero-visual-stage, .minimal-illustration, figure")) {
      el.style.setProperty("--reveal-y", "18px");
      el.style.setProperty("--reveal-scale", "0.985");
    }
  });

  if (reduceMotion) {
    revealItems.forEach((el) => el.classList.add("is-visible"));
    window.__persooaMotionCleanup = null;
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
  );

  revealItems.forEach((el) => observer.observe(el));

  const scrollItems = Array.from(root.querySelectorAll(".scroll-section, .hero-shell, .hero-visual-stage, .minimal-illustration"));
  let rafId = 0;

  const updateScrollMotion = () => {
    rafId = 0;
    const viewportHeight = window.innerHeight || 1;
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - viewportHeight);
    root.style.setProperty("--page-scroll-progress", (window.scrollY / maxScroll).toFixed(4));

    scrollItems.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, (viewportHeight - rect.top) / (viewportHeight + rect.height)));
      const centered = progress - 0.5;

      el.style.setProperty("--scroll-progress", progress.toFixed(4));
      el.style.setProperty("--scroll-offset", `${(0.5 - progress) * 10}px`);

      if (el.matches(".hero-shell")) {
        el.style.setProperty("--hero-parallax-x", `${centered * -18}px`);
        el.style.setProperty("--hero-parallax-y", `${centered * 32}px`);
        el.style.setProperty("--hero-scale", `${1.035 + progress * 0.025}`);
      }

      if (el.matches(".minimal-illustration")) {
        el.style.setProperty("--art-parallax-y", `${centered * -18}px`);
        el.style.setProperty("--art-scale", `${1.025 + progress * 0.02}`);
      }

      if (el.classList.contains("dark-grid")) {
        el.style.setProperty("--grid-shift", `${progress * 44}px`);
      }
    });
  };

  const requestScrollMotion = () => {
    if (!rafId) rafId = window.requestAnimationFrame(updateScrollMotion);
  };

  updateScrollMotion();
  window.addEventListener("scroll", requestScrollMotion, { passive: true });
  window.addEventListener("resize", requestScrollMotion);

  window.__persooaMotionCleanup = () => {
    observer.disconnect();
    if (rafId) window.cancelAnimationFrame(rafId);
    window.removeEventListener("scroll", requestScrollMotion);
    window.removeEventListener("resize", requestScrollMotion);
  };
}
