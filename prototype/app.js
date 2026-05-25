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

const blogAuthor = {
  name: "Persooa Team",
  role: "Redakcja Persooa",
  enRole: "Persooa editorial team",
  avatar: "../assets/source/photos/persooa1.png",
};

const blogPosts = [
  { title: "CTA - co to jest? Przykłady skutecznych przycisków wezwań do działania", category: "Guide", slug: "/blog/cta-co-to-jest-przyklady-skutecznych-przyciskow-wezwan-do-dzialania", excerpt: "Definicja CTA, rodzaje wezwań do działania, miejsca publikacji i przykłady buttonów, które pomagają zwiększać konwersję.", date: "25 maja 2026", enDate: "May 25, 2026", readTime: "6 min czytania", enReadTime: "6 min read" },
  { title: "Dlaczego platforma CDP staje się ewolucją Twojego Marketing Automation", category: "CDP", slug: "/blog", excerpt: "Jak Customer Data Platform porządkuje dane i pozwala przejść od kampanii do decyzji w czasie rzeczywistym.", date: "14 maja 2026", enDate: "May 14, 2026", readTime: "8 min czytania", enReadTime: "8 min read" },
  { title: "Agenci AI - czym są i jak działają inteligentni agenci?", category: "AI agents", slug: "/blog", excerpt: "Praktyczne spojrzenie na agentów AI w sprzedaży, obsłudze, marketingu i operacjach.", date: "6 maja 2026", enDate: "May 6, 2026", readTime: "7 min czytania", enReadTime: "7 min read" },
  { title: "Co to jest Semantic Search? Vector Search vs Semantic Search", category: "AI search", slug: "/blog", excerpt: "Różnice między wyszukiwaniem semantycznym i wektorowym oraz ich wpływ na sprzedaż w e-commerce.", date: "22 kwietnia 2026", enDate: "April 22, 2026", readTime: "5 min czytania", enReadTime: "5 min read" },
  { title: "Workflow automation: jak AI zamienia powtarzalne procesy w silnik wzrostu", category: "Automation", slug: "/blog", excerpt: "Jak mapować procesy, wybierać zadania dla agentów i mierzyć efekt automatyzacji.", date: "10 kwietnia 2026", enDate: "April 10, 2026", readTime: "6 min czytania", enReadTime: "6 min read" },
  { title: "Churn prediction - czym jest i jak wspiera biznes?", category: "Retention", slug: "/blog", excerpt: "Jak predykcja odpływu pomaga szybciej reagować i projektować lepsze scenariusze retencji.", date: "27 marca 2026", enDate: "March 27, 2026", readTime: "5 min czytania", enReadTime: "5 min read" },
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

const generatedHomeVisuals = {
  heroDark: "../assets/exports/illustrations/generated/dark/home-synerise-scale.png",
  services: "../assets/exports/illustrations/generated/synerise-services.png",
  integrations: "../assets/exports/illustrations/generated/enterprise-integrations.png",
  framework: "../assets/exports/illustrations/generated/cx-transformation-framework.png",
  migration: "../assets/exports/illustrations/generated/synerise-migration.png",
  outcomes: "../assets/exports/illustrations/generated/measurable-outcomes.png",
};

const generatedOfferVisuals = {
  personalization: "../assets/exports/illustrations/generated/offer/ai-personalization.png",
  revenue: "../assets/exports/illustrations/generated/offer/revenue-agents.png",
  cdp: "../assets/exports/illustrations/generated/offer/cdp-platform.png",
  work: "../assets/exports/illustrations/generated/offer/work-agents.png",
  loyalty: "../assets/exports/illustrations/generated/offer/loyalty-program.png",
  roi: "../assets/exports/illustrations/generated/offer/roi-in-90-days.png",
  search: "../assets/exports/illustrations/generated/offer/ai-search.png",
  marketingAutomation: "../assets/exports/illustrations/generated/offer/marketing-automation-2-0.png",
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
    home: "Strona główna",
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
  "/design-system": { type: "design-system" },
  "/design-system/charts": { type: "design-system-charts" },
  "/design-system/atomy-ui": { type: "design-system-atoms" },
  "/design-system/sekcje": { type: "design-system-sections" },
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
  "/en/design-system": { type: "design-system", lang: "en" },
  "/en/design-system/charts": { type: "design-system-charts", lang: "en" },
  "/en/design-system/ui-atoms": { type: "design-system-atoms", lang: "en" },
  "/en/design-system/sections": { type: "design-system-sections", lang: "en" },
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

function localizedPath(plPath, enPath) {
  return lang() === "pl" ? plPath : enPath;
}

function offerPath(slug) {
  const page = offerPages.find((item) => item.slug === slug);
  if (!page) return localizedPath("/kontakt", "/en/contact");
  return localizedPath(`/oferta/${page.slug}`, `/en/offer/${page.enSlug}`);
}

function cardCta(label, path, dark = false) {
  return `<a href="${href(path)}" class="mt-6 inline-flex items-center gap-2 text-sm font-semibold ${dark ? "text-[#41DBC3] hover:text-white" : "text-[#015BFE] hover:text-[#0F1E34]"}"><span>${label}</span>${icon("arrow-right", "h-4 w-4")}</a>`;
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

function syneriseLogo({ dark = false } = {}) {
  const shell = dark ? "border-white/36 bg-white/6" : "border-[#DDE5F5] bg-white";
  return `<span class="inline-flex h-9 items-center rounded-full border ${shell} px-4">
    <img src="../assets/source/client-logos/synerise_logo.svg" alt="Synerise" class="h-4 w-auto ${dark ? "brightness-0 invert" : ""}" />
  </span>`;
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

function chartCanvas({ type = "line", labels, series, ariaLabel, compact = false }) {
  return `<div class="chart-canvas-shell ${compact ? "chart-canvas-shell--compact" : ""}">
    <canvas
      data-chart="persooa-chart"
      data-chart-type="${type}"
      data-chart-labels='${JSON.stringify(labels)}'
      data-chart-series='${JSON.stringify(series)}'
      aria-label="${ariaLabel}"
      role="img"
    ></canvas>
  </div>`;
}

function chartDemoCard({ title, description, type, labels, series, compact = false }) {
  return `<article class="chart-panel rounded-2xl p-5 shadow-soft md:p-6">
    <div class="flex items-start justify-between gap-4">
      <div>
        <p class="text-sm font-medium text-[#015BFE]">${type}</p>
        <h3 class="mt-2 text-2xl font-medium leading-tight">${title}</h3>
      </div>
      <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F4F6FD] text-[#015BFE]">${icon("chart-no-axes-combined", "h-5 w-5")}</div>
    </div>
    <p class="mt-4 text-sm leading-6 text-[#595959]">${description}</p>
    <div class="mt-6">${chartCanvas({ type, labels, series, compact, ariaLabel: title })}</div>
  </article>`;
}

function designSystemTiles() {
  const l = lang();
  const tiles = l === "pl"
    ? [
      ["Charts", "Wszystkie typy wykresów, animacje, legendy i tokeny danych.", "/design-system/charts", "chart-no-axes-combined"],
      ["Atomy UI", "Buttony, badge, pola formularzy, statystyki, karty i podstawowe stany.", "/design-system/atomy-ui", "component"],
      ["Sekcje", "Nowe komponenty homepage: hero, karty, frameworki, case studies, FAQ i CTA.", "/design-system/sekcje", "layout-template"],
    ]
    : [
      ["Charts", "All chart types, animations, legends and data tokens.", "/en/design-system/charts", "chart-no-axes-combined"],
      ["UI atoms", "Buttons, badges, fields, stats, cards and base states.", "/en/design-system/ui-atoms", "component"],
      ["Sections", "New homepage components: hero, cards, frameworks, case studies, FAQ and CTA.", "/en/design-system/sections", "layout-template"],
    ];
  return tiles.map(([title, text, path, iconName]) => `<a href="${href(path)}" class="rounded-xl border border-[#E6EAF2] bg-white p-6 transition hover:border-[#015BFE]/40 hover:shadow-soft">
    <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F4F6FD] text-[#015BFE]">${icon(iconName, "h-5 w-5")}</div>
    <h2 class="mt-5 text-2xl font-medium">${title}</h2>
    <p class="mt-3 text-base leading-7 text-[#595959]">${text}</p>
    <span class="mt-6 inline-flex items-center gap-2 font-medium text-[#015BFE]">${l === "pl" ? "Otwórz" : "Open"} ${icon("arrow-right", "h-4 w-4")}</span>
  </a>`).join("");
}

function heroVariant(defaultVariant = "dark") {
  return routeParams().get("hero") === "light" ? "light" : defaultVariant;
}

function heroVisual(key, variant = "light") {
  return (illustrationMap[variant] && illustrationMap[variant][key]) || illustrationMap.light[key] || illustrationMap.light.hero;
}

function generatedHomeVisual(key) {
  return generatedHomeVisuals[key] || generatedHomeVisuals.services;
}

function generatedOfferVisual(page) {
  if (page && page.slug === "marketing-automation-2-0") return generatedOfferVisuals.marketingAutomation;
  return generatedOfferVisuals[page?.visualKey] || generatedOfferVisuals.personalization;
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

function titleToPlainText(value) {
  return String(value)
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, "\"")
    .replace(/&#039;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function heroIllustrationSection({ eyebrow, title, lead, visual, variant = "dark", primaryLabel, primaryHref, secondaryLabel, secondaryHref, stats = [], logoMarkup = "" }) {
  const isDark = variant === "dark";
  const primaryVariant = isDark ? "heroDark" : "heroLight";
  const secondaryVariant = isDark ? "heroDarkSecondary" : "heroLightSecondary";
  const titleText = escapeHtml(titleToPlainText(title));
  const statsMarkup = stats.length
    ? `<div class="hero-stats mt-10 grid max-w-xl grid-cols-3 gap-4 border-t ${isDark ? "border-white/12" : "border-[#DDE5F5]"} pt-6">${stats.map((stat) => `<div><strong class="hero-stat-value block text-3xl font-semibold">${stat.value}</strong><span class="hero-stat-label mt-1 block text-sm leading-5">${stat.label}</span></div>`).join("")}</div>`
    : "";
  const secondaryMarkup = secondaryLabel && secondaryHref ? button(secondaryLabel, secondaryHref, secondaryVariant) : "";

  return `<section data-header-theme="${isDark ? "dark" : "light"}" class="scroll-section hero-shell hero-shell--${variant} overflow-hidden pt-24 md:pt-28">
    <div class="hero-visual-backdrop hero-visual-stage hero-visual-stage--${variant}">
      <img src="${visual}" alt="" class="hero-visual-image hero-visual-image--${variant}" />
    </div>
    <div class="relative mx-auto grid min-h-[720px] max-w-7xl items-center gap-10 px-5 pb-16 sm:px-6 md:pb-24 lg:min-h-[calc(100vh-80px)] lg:grid-cols-12 lg:px-8">
      <div class="relative z-10 max-w-2xl lg:col-span-6 lg:pr-8">
        ${badge(eyebrow, isDark)}
        ${logoMarkup ? `<div class="mt-5">${logoMarkup}</div>` : ""}
        <h1 class="hero-title hero-title--effect mt-6 text-5xl font-semibold leading-none md:text-6xl lg:text-7xl" data-hero-title="${titleText}"><span class="hero-title-copy">${title}</span></h1>
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
  const mobileOfferMenu = offerPages.map((page) => {
    const path = l === "pl" ? `/oferta/${page.slug}` : `/en/offer/${page.enSlug}`;
    const title = l === "pl" ? page.title : page.enTitle;
    return `<a href="${href(path)}" class="mobile-offer-link">
      <span>${icon(offerIcons[page.visualKey] || "circle", "h-4 w-4")}</span>
      <span>${title}</span>
    </a>`;
  }).join("");
  const navItems = [
    [t("home"), l === "pl" ? "/" : "/en"],
    ["Persooalize 360", l === "pl" ? "/persooalize-360" : "/en/persooalize-360"],
    [t("about"), l === "pl" ? "/o-nas" : "/en/about"],
    [t("growth"), l === "pl" ? "/growth-hub" : "/en/growth-hub"],
    [t("blog"), l === "pl" ? "/blog" : "/en/blog"],
    [t("contact"), l === "pl" ? "/kontakt" : "/en/contact"],
  ];
  const mobileNavLink = ([label, path]) => {
    const target = href(path);
    const isCurrent = current === path || (path === "/" && current === "/") || (path === "/en" && current === "/en");
    return `<a class="mobile-nav-link" href="${target}" ${isCurrent ? "aria-current='page'" : ""}>${label}${icon("arrow-right", "h-4 w-4")}</a>`;
  };
  const mobilePrimaryNav = navItems.slice(0, 1).map(mobileNavLink).join("");
  const mobileSecondaryNav = navItems.slice(1).map(mobileNavLink).join("");
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
      <div class="flex items-center gap-2 sm:gap-3">
        <a href="${href(langSwitch)}" class="lang-switch hidden rounded-full border border-[#E6EAF2] px-3 py-2 text-sm font-medium text-[#0F1E34] transition hover:border-[#015BFE] hover:text-[#015BFE] sm:inline-flex">${l === "pl" ? "EN" : "PL"}</a>
        <a href="${href(l === "pl" ? "/kontakt" : "/en/contact")}" class="header-cta hidden h-11 items-center justify-center gap-2 rounded-full bg-[#015BFE] px-5 text-sm font-medium text-white transition hover:bg-[#0F1E34] sm:inline-flex"><span>${t("ask")}</span>${icon("send", "h-4 w-4")}</a>
        <button id="mobileMenuButton" class="mobile-menu-toggle inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#E6EAF2] bg-white text-[#0F1E34] transition hover:border-[#015BFE] hover:text-[#015BFE] lg:hidden" type="button" aria-label="${l === "pl" ? "Otwórz menu" : "Open menu"}" aria-controls="mobileMenu" aria-expanded="false">
          <span class="mobile-menu-icon mobile-menu-icon--open">${icon("menu", "h-5 w-5")}</span>
          <span class="mobile-menu-icon mobile-menu-icon--close">${icon("x", "h-5 w-5")}</span>
        </button>
      </div>
      <div id="mobileMenu" class="mobile-menu lg:hidden" aria-hidden="true" hidden>
        <div class="mx-auto max-w-7xl px-5 py-5 sm:px-6">
          <nav class="mobile-menu-nav" aria-label="${l === "pl" ? "Menu mobilne" : "Mobile menu"}">
            ${mobilePrimaryNav}
            <details class="mobile-offer-details">
              <summary>${t("offer")}${icon("chevron-down", "h-4 w-4")}</summary>
              <div class="mobile-offer-grid">${mobileOfferMenu}</div>
            </details>
            ${mobileSecondaryNav}
          </nav>
          <div class="mobile-menu-actions">
            <a href="${href(langSwitch)}" class="mobile-menu-secondary">${l === "pl" ? "English" : "Polski"}</a>
            <a href="${href(l === "pl" ? "/kontakt" : "/en/contact")}" class="mobile-menu-primary">${t("ask")}${icon("send", "h-4 w-4")}</a>
          </div>
        </div>
      </div>
    </div>
  </header>`;
}

function footer() {
  const l = lang();
  const designSystemLinks = l === "pl"
    ? [
      ["Przegląd", "/design-system"],
      ["Charts", "/design-system/charts"],
      ["Atomy UI", "/design-system/atomy-ui"],
      ["Sekcje", "/design-system/sekcje"],
    ]
    : [
      ["Overview", "/en/design-system"],
      ["Charts", "/en/design-system/charts"],
      ["UI atoms", "/en/design-system/ui-atoms"],
      ["Sections", "/en/design-system/sections"],
    ];
  return `<footer class="bg-[#0F1E34] py-14 text-white">
    <div class="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-12 lg:px-8">
      <div class="lg:col-span-5">
        <img src="../assets/source/logos/persooa-logo.svg" alt="Persooa" class="h-8 w-auto brightness-0 invert" />
        <p class="mt-6 max-w-md text-base leading-7 text-white/68">Puzzle Office, Norblin Factory<br />Żelazna 51/53, ${l === "pl" ? "Warszawa, Polska" : "Warsaw, Poland"}<br />M: hello@persooa.com<br />T: 501 006 000</p>
      </div>
      <div class="grid gap-8 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-4">
        <div><h3 class="font-medium">Oferta</h3><ul class="mt-4 space-y-3 text-sm text-white/68">${offerPages.slice(0, 6).map((p) => `<li><a class="hover:text-white" href="${href(l === "pl" ? `/oferta/${p.slug}` : `/en/offer/${p.enSlug}`)}">${l === "pl" ? p.title : p.enTitle}</a></li>`).join("")}</ul></div>
        <div><h3 class="font-medium">${l === "pl" ? "Rozwój" : "Growth"}</h3><ul class="mt-4 space-y-3 text-sm text-white/68"><li><a href="${href(l === "pl" ? "/growth-hub" : "/en/growth-hub")}">Growth Hub</a></li><li><a href="${href(l === "pl" ? "/blog" : "/en/blog")}">Blog</a></li><li><a href="${href(l === "pl" ? "/program-partnerski" : "/en/partners")}">Program partnerski</a></li><li><a href="${href(l === "pl" ? "/kontakt" : "/en/contact")}">${t("contact")}</a></li></ul></div>
        <div><h3 class="font-medium">${l === "pl" ? "Design system" : "Design System"}</h3><ul class="mt-4 space-y-3 text-sm text-white/68">${designSystemLinks.map(([label, path]) => `<li><a class="hover:text-white" href="${href(path)}">${label}</a></li>`).join("")}</ul></div>
        <div><h3 class="font-medium">${l === "pl" ? "Prawne" : "Legal"}</h3><ul class="mt-4 space-y-3 text-sm text-white/68"><li><a href="${href(l === "pl" ? "/polityka-prywatnosci" : "/en/privacy-policy")}">${l === "pl" ? "Polityka prywatności" : "Privacy Policy"}</a></li><li><a href="${href(l === "pl" ? "/kodeks-postepowania" : "/en/code-of-conduct")}">${l === "pl" ? "Kodeks postępowania" : "Code of Conduct"}</a></li></ul></div>
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
      eyebrow: l === "pl" ? "#1 Partner Synerise w Polsce" : "#1 Synerise Partner in Poland",
      title: l === "pl" ? 'Know-how. Precyzja.<br /><span class="text-gradient-highlight">Synerise</span> w skali.' : 'Know-how. Precision.<br /><span class="text-gradient-highlight">Synerise</span> at scale.',
      lead: l === "pl" ? "Wiemy dokładnie, jak wdrażać platformę Synerise: 70+ certyfikacji zespołu, 100+ zrealizowanych projektów i sprawdzone frameworki. Nie eksperymentujemy na Twoim projekcie." : "We know exactly how to implement the Synerise platform: 70+ team certifications, 100+ completed projects and proven frameworks. We do not experiment on your project.",
      visual: generatedHomeVisual("heroDark"),
      variant,
      primaryLabel: l === "pl" ? "Umów konsultację" : "Book consultation",
      primaryHref: l === "pl" ? "/kontakt" : "/en/contact",
      secondaryLabel: l === "pl" ? "Zobacz frameworki" : "See frameworks",
      secondaryHref: l === "pl" ? "/oferta/roi-w-90dni" : "/en/offer/roi-in-90-days",
      logoMarkup: syneriseLogo({ dark: variant === "dark" }),
      stats: [
        { value: "100+", label: l === "pl" ? "wdrożeń platformy Synerise" : "Synerise platform implementations" },
        { value: "70+", label: l === "pl" ? "certyfikacji zespołu" : "Team certifications" },
        { value: "10M+", label: l === "pl" ? "profili pod opieką" : "Profiles under management" },
      ],
    })}
    ${clientLogoStrip()}
    ${clientChallengesSection()}
    ${clientServicesSection()}
    ${clientFrameworksSection()}
    ${clientVisualSystemsSection()}
    ${clientIntegrationsSection()}
    ${clientResultsSection()}
    ${clientChartsSection()}
    ${clientCxFrameworkSection()}
    ${clientMigrationSection()}
    ${clientCasesSection()}
    ${clientEngagementModelsSection()}
    ${clientPartnerSection()}
    ${clientFaqSection()}
    ${clientFinalCtaSection()}
  </main>`;
}

function homeHeader({ eyebrow, num, title, text, dark = false, center = false }) {
  return `<div class="${center ? "mx-auto max-w-3xl text-center" : "grid gap-6 lg:grid-cols-12 lg:items-end"}">
    <div class="${center ? "" : "lg:col-span-5"}">
      <div class="mb-5 flex items-center ${center ? "justify-center" : "justify-between"} gap-4 border-b ${dark ? "border-white/12" : "border-[#E6EAF2]"} pb-4">
        ${badge(eyebrow, dark)}
        <span class="text-sm font-medium ${dark ? "text-white/50" : "text-[#595959]"}">${num}</span>
      </div>
      <h2 class="text-4xl font-semibold leading-tight md:text-5xl ${dark ? "text-white" : ""}">${title}</h2>
    </div>
    ${text ? `<p class="${center ? "mt-5" : "lg:col-span-7"} text-lg leading-8 ${dark ? "text-white/72" : "text-[#595959]"}">${text}</p>` : ""}
  </div>`;
}

function clientLogoStrip() {
  const l = lang();
  const logoItems = [
    `<strong class="text-2xl font-semibold text-[#0F1E34]/50">RITS Group</strong>`,
    ...(l === "pl" ? ["Retail", "Bankowość", "Telco", "E-commerce", "Finanse", "Lojalność", "CX", "AI"] : ["Retail", "Banking", "Telco", "E-commerce", "Finance", "Loyalty", "CX", "AI"]).map((x) => `<strong class="text-2xl font-semibold text-[#0F1E34]/50">${x}</strong>`),
  ];
  return section({
    compact: true,
    children: `<p class="text-center text-sm font-semibold uppercase tracking-[0.13em] text-[#595959]">${l === "pl" ? "Zaufali nam liderzy AI i CX" : "Trusted by AI & CX leaders"}</p>
    <div class="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">${logoItems.join("")}</div>`,
  });
}

function clientChallengesSection() {
  const l = lang();
  const items = l === "pl"
    ? [
      ["Nie wiesz, jakie dane zbierać ani jak je uporządkować.", "Prowadzimy audyt oraz definiujemy architekturę i KPI."],
      ["Masz dziesiątki systemów do połączenia: ERP, CRM, POS.", "150+ gotowych integracji i podejście API-first."],
      ["Czekasz miesiącami na pierwsze efekty.", "Szybkie quick winy i mierzalne wyniki już po 30 dniach."],
      ["Zespół jest zajęty bieżącą pracą i brakuje ekspertów AI.", "Działamy jak rozszerzenie Twojego zespołu, 24/7."],
      ["Migrujesz z SALESmanago, Salesforce albo Adobe.", "Zero downtime, praca równoległa i walidacja danych."],
      ["Masz Synerise, ale nie widzisz ROI.", "Identyfikujemy nowe use case'y i modele AI."],
    ]
    : [
      ["You do not know what data to collect or how to structure it.", "We run an audit and define architecture and KPIs."],
      ["Dozens of systems to connect: ERP, CRM, POS.", "150+ pre-built integrations, API-first approach."],
      ["Months of waiting for the first results.", "Fast quick wins, measurable results in 30 days."],
      ["Team busy with BAU, no AI experts on board.", "We act as your extended team, 24/7."],
      ["Migration from SALESmanago, Salesforce, Adobe.", "Zero downtime, parallel run, data validation."],
      ["You have Synerise, but you do not see the ROI.", "We identify new use cases and AI models."],
    ];
  return section({
    children: `${homeHeader({ eyebrow: l === "pl" ? "Wyzwania" : "Challenges", num: "01", title: l === "pl" ? "Twoje wyzwania, nasze rozwiązania" : "Your challenges, our solutions", text: l === "pl" ? "Rozumiemy problemy zespołów pracujących z danymi, AI i automatyzacją. Na każdy odpowiadamy sprawdzonym, powtarzalnym podejściem." : "We understand your problems and answer each one with a proven, repeatable approach." })}
    <div class="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">${items.map(([problem, solution]) => `<article class="rounded-xl border border-[#E6EAF2] bg-white p-6 transition hover:border-[#015BFE]/40 hover:shadow-soft">
      <div class="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[#595959]">${icon("triangle-alert", "h-4 w-4")} ${l === "pl" ? "Problem" : "Problem"}</div>
      <p class="mt-3 text-base leading-7 text-[#595959]">${problem}</p>
      <div class="my-5 h-px bg-[#E6EAF2]"></div>
      <div class="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[#015BFE]">${icon("circle-check", "h-4 w-4")} ${l === "pl" ? "Rozwiązanie" : "Solution"}</div>
      <p class="mt-3 text-base leading-7 text-[#0F1E34]">${solution}</p>
    </article>`).join("")}</div>
    <div class="mt-10 flex flex-wrap gap-4">${button(l === "pl" ? "Zacznij od audytu ROI" : "Start with ROI audit", offerPath("roi-w-90dni"), "primary", "target")}${button(l === "pl" ? "Porozmawiaj z Persooa" : "Talk to Persooa", localizedPath("/kontakt", "/en/contact"), "secondary", "send")}</div>`,
  });
}

function clientServicesSection() {
  const l = lang();
  const groups = l === "pl"
    ? [
      ["Konsulting", "lightbulb", offerPath("roi-w-90dni"), "Poznaj program ROI", [
        ["Strategia danych i architektura CDP", "Audyt danych, single customer view i data governance."],
        ["Business case i ROI", "Model biznesowy z konkretnymi metrykami i oczekiwanymi wynikami."],
        ["Roadmapa i use case'y", "Priorytetyzacja scenariuszy oraz roadmapa na 12-24 miesiące."],
        ["RODO i compliance", "Zgodność z RODO oraz regulacjami branżowymi."],
      ]],
      ["Implementacja", "cog", offerPath("cdp"), "Zobacz wdrożenie CDP", [
        ["Integracja systemów", "ERP, CRM, POS, e-commerce, aplikacja mobilna i call center."],
        ["Ingestion danych i ETL", "Import historyczny, streaming real-time i jakość danych."],
        ["Konfiguracja platformy", "Workspace, segmentacja, automatyzacje i kampanie."],
        ["Testy i QA", "UAT, testy wydajnościowe i walidacja danych."],
      ]],
      ["AI i personalizacja", "brain", offerPath("personalizacja-ai"), "Zobacz personalizację AI", [
        ["Rekomendacje produktowe", "Rekomendacje AI: collaborative i content-based."],
        ["Modele predykcyjne", "Predykcja churnu, scoring CLV i propensity models."],
        ["Next Best Offer", "Silniki NBA/NBO: co zaoferować, komu i kiedy."],
        ["Dynamic content", "Personalizacja real-time dla emaila, www i mobile."],
      ]],
      ["Managed Services", "server", offerPath("marketing-automation-2-0"), "Poznaj automatyzację", [
        ["Wsparcie 24/7", "Wsparcie techniczne, incident management i eskalacje."],
        ["Monitoring performance", "Zdrowie platformy, jakość danych i wyniki kampanii."],
        ["Zarządzanie kampaniami", "Tworzenie, prowadzenie i automatyzacja kampanii."],
        ["Ciągła optymalizacja", "Testy A/B, nowe use case'y i aktualizacje platformy."],
      ]],
      ["Szkolenia", "graduation-cap", localizedPath("/program-partnerski", "/en/partners"), "Zobacz program partnerski", [
        ["Szkolenia użytkowników", "Szkolenia dla marketerów, analityków i adminów."],
        ["Warsztaty developerskie", "API, SDK, integracje i custom development."],
        ["Certyfikacje", "Certyfikacje Synerise Academy i best practices."],
        ["Dokumentacja", "Dokumenty procesowe, playbooki i baza wiedzy."],
      ]],
    ]
    : [
      ["Consulting", "lightbulb", offerPath("roi-w-90dni"), "Explore ROI program", [
        ["Data Strategy & CDP Architecture", "Data audit, single customer view, data governance."],
        ["Business Case & ROI", "A business case with specific metrics and expected results."],
        ["Roadmap & Use Cases", "Use case prioritization and a 12-24 month roadmap."],
        ["GDPR & Compliance", "Compliance with GDPR and industry regulations."],
      ]],
      ["Implementation", "cog", offerPath("cdp"), "See CDP implementation", [
        ["System Integration", "ERP, CRM, POS, e-commerce, mobile app, call center."],
        ["Data Ingestion & ETL", "Historical import, real-time streaming, data quality."],
        ["Platform Configuration", "Workspace setup, segmentation, automation, campaigns."],
        ["Testing & QA", "UAT, performance tests, data validation."],
      ]],
      ["AI & Personalization", "brain", offerPath("personalizacja-ai"), "View AI personalization", [
        ["Product Recommendations", "AI recommendations: collaborative and content-based."],
        ["Predictive Models", "Churn prediction, CLV scoring, propensity models."],
        ["Next Best Offer", "NBA/NBO engines: what to offer, to whom, when."],
        ["Dynamic Content", "Real-time personalization for email, web, mobile."],
      ]],
      ["Managed Services", "server", offerPath("marketing-automation-2-0"), "Explore automation", [
        ["24/7 Support", "Technical support, incident management, escalation."],
        ["Performance Monitoring", "Platform health, data quality, campaign performance."],
        ["Campaign Management", "Campaign creation, management and automation."],
        ["Continuous Optimization", "A/B testing, new use cases, platform upgrades."],
      ]],
      ["Training", "graduation-cap", localizedPath("/program-partnerski", "/en/partners"), "See partner program", [
        ["User Training", "Training for marketers, analysts and admins."],
        ["Developer Workshops", "API, SDK, integrations, custom development."],
        ["Certifications", "Synerise Academy certifications, best practices."],
        ["Documentation", "Process docs, playbooks, knowledge base."],
      ]],
    ];
  return section({
    children: `${homeHeader({ eyebrow: l === "pl" ? "Usługi" : "Our services", num: "02", title: l === "pl" ? "Kompleksowe usługi Synerise" : "Comprehensive Synerise services", text: l === "pl" ? "Od strategii po stałe wsparcie: wszystkie kompetencje potrzebne do pracy na jednej platformie." : "From strategy to ongoing support: every capability you need on one platform." })}
    <div class="minimal-illustration mt-12 aspect-[16/7] rounded-xl"><img src="${generatedHomeVisual("services")}" alt="" class="h-full w-full object-cover opacity-95 mix-blend-multiply" /></div>
    <div class="mt-12 space-y-10">${groups.map(([group, iconName, path, ctaLabel, cards]) => `<div>
      <div class="mb-4 inline-flex items-center gap-2 rounded-full border border-[#E6EAF2] bg-white px-4 py-2 text-sm font-semibold text-[#0F1E34]">${icon(iconName, "h-4 w-4 text-[#015BFE]")} ${group}</div>
      <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-4">${cards.map(([title, text]) => clientCard(title, text, iconName)).join("")}</div>
      ${cardCta(ctaLabel, path)}
    </div>`).join("")}</div>`,
  });
}

function clientFrameworksSection() {
  const l = lang();
  const items = l === "pl"
    ? [
      ["ROI w 90 dni", "chart-no-axes-combined", "Gwarantowane mierzalne efekty w 90 dni: pierwsze quick winy po 30 dniach i pełna widoczność ROI w kwartale. Fazy: Quick Wins, Core Implementation, Optimization & Scale.", offerPath("roi-w-90dni"), "Otwórz program ROI"],
      ["Program lojalnościowy myRewards", "gift", "Autorska platforma lojalnościowa na Synerise: wielopoziomowe członkostwo, elastyczny silnik punktów, gamifikacja, mobile wallets i personalizacja AI.", offerPath("program-lojalnosciowy"), "Zobacz program lojalnościowy"],
      ["Visitor Loyalty", "user", "Angażuj anonimowych użytkowników dynamicznym, spersonalizowanym doświadczeniem: behavioral page building, smart recommendations i zbieranie zero-party data.", offerPath("personalizacja-ai"), "Poznaj personalizację"],
      ["Digital Loyalty Wallets", "wallet", "Cyfrowe karty lojalnościowe w Apple Wallet i Google Pay: dynamiczne QR, push geotriggered, aktualizacje real-time i dynamiczne kupony.", offerPath("program-lojalnosciowy"), "Zobacz mechaniki lojalnościowe"],
    ]
    : [
      ["ROI in 90 Days", "chart-no-axes-combined", "Guaranteed measurable results in 90 days: first quick wins in 30 days, full ROI visibility within a quarter. Phases: Quick Wins, Core Implementation, Optimization & Scale.", offerPath("roi-w-90dni"), "Open ROI program"],
      ["myRewards Loyalty Program", "gift", "Proprietary loyalty platform on Synerise: multi-tier membership, flexible points engine, gamification, mobile wallets and AI personalization.", offerPath("program-lojalnosciowy"), "View loyalty program"],
      ["Visitor Loyalty", "user", "Engage anonymous users with a dynamic, personalized experience: behavioral page building, smart recommendations and zero-party data collection.", offerPath("personalizacja-ai"), "Explore personalization"],
      ["Digital Loyalty Wallets", "wallet", "Digital loyalty cards in Apple Wallet and Google Pay: dynamic QR codes, geo-triggered push, real-time updates and dynamic coupons.", offerPath("program-lojalnosciowy"), "View loyalty mechanics"],
    ];
  return section({
    variant: "dark",
    children: `${homeHeader({ eyebrow: l === "pl" ? "Rozwiązania" : "Our solutions", num: "03", title: l === "pl" ? "Frameworki i autorskie know-how" : "Frameworks & proprietary know-how", text: l === "pl" ? "Sprawdzone w praktyce zasoby, które przyspieszają sukces na Synerise." : "Battle-tested assets that accelerate your success on Synerise.", dark: true })}
    <div class="mt-12 grid gap-6 md:grid-cols-2">${items.map(([title, iconName, text, path, ctaLabel]) => `<article class="rounded-xl border border-white/12 bg-white/[0.03] p-7 transition hover:border-[#41DBC3]/60">
      <div class="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#41DBC3]">${icon(iconName, "h-5 w-5")}</div>
      <h3 class="text-2xl font-semibold text-white">${title}</h3>
      <p class="mt-4 text-base leading-7 text-white/68">${text}</p>
      ${cardCta(ctaLabel, path, true)}
    </article>`).join("")}</div>
    <div class="mt-10 flex flex-wrap gap-4">${button(l === "pl" ? "Poznaj framework ROI" : "Explore ROI framework", offerPath("roi-w-90dni"), "heroDark", "target")}${button(l === "pl" ? "Zobacz system lojalnościowy" : "See loyalty system", offerPath("program-lojalnosciowy"), "heroDarkSecondary", "gift")}</div>`,
  });
}

function clientVisualSystemsSection() {
  const l = lang();
  const items = l === "pl"
    ? [
      ["System operacyjny usług", "Konsulting, implementacja, AI, managed services i szkolenia połączone wokół jednego centrum dostarczania Synerise.", "services", ["Konsulting", "Implementacja", "Szkolenia"], offerPath("marketing-automation-2-0"), "Poznaj automatyzację"],
      ["Warstwa integracji", "Model połączenia CDP z CRM, e-commerce, ERP, mobile, analityką i hurtowniami danych.", "integrations", ["150+ konektorów", "API-first", "Systemy legacy"], offerPath("cdp"), "Zobacz platformę CDP"],
      ["Silnik wyników", "Mierzalny wzrost KPI w programach retail, banking i telco, projektowany we wdrożeniu od pierwszego dnia.", "outcomes", ["ROI", "Konwersja", "Retencja"], offerPath("roi-w-90dni"), "Zobacz program ROI"],
    ]
    : [
      ["Service operating system", "Consulting, implementation, AI, managed services and training connected around one Synerise delivery hub.", "services", ["Consulting", "Implementation", "Training"], offerPath("marketing-automation-2-0"), "Explore automation"],
      ["Integration layer", "A CDP connection model for CRM, e-commerce, ERP, mobile, analytics and data warehouses.", "integrations", ["150+ connectors", "API-first", "Legacy systems"], offerPath("cdp"), "See CDP platform"],
      ["Outcome engine", "Measurable KPI uplift across retail, banking and telco programs, designed into the implementation from day one.", "outcomes", ["ROI", "Conversion", "Retention"], offerPath("roi-w-90dni"), "View ROI program"],
    ];
  return section({
    children: `${homeHeader({ eyebrow: l === "pl" ? "Systemy wizualne" : "Visual systems", num: "03A", title: l === "pl" ? "Więcej niż slajdy: systemy operacyjne wzrostu" : "More than slides: operating systems for growth", text: l === "pl" ? "Strona główna pokazuje realne obszary rozwiązań z ilustracjami Persooa, a nie tylko abstrakcyjne karty usług." : "The landing page now shows the actual solution areas with Persooa illustrations, not only abstract service cards." })}
    <div class="mt-12 grid gap-6 lg:grid-cols-3">${items.map(([title, text, visualKey, tags, path, ctaLabel]) => `<article class="rounded-xl border border-[#E6EAF2] bg-white p-5 shadow-soft">
      <div class="minimal-illustration aspect-[16/11] rounded-xl"><img src="${generatedHomeVisual(visualKey)}" alt="" class="h-full w-full object-cover opacity-95 mix-blend-multiply" /></div>
      <div class="p-2 pt-6">
        <h3 class="text-2xl font-semibold leading-tight">${title}</h3>
        <p class="mt-3 text-base leading-7 text-[#595959]">${text}</p>
        <div class="mt-5 flex flex-wrap gap-2">${tags.map((tag) => `<span class="rounded-full bg-[#F4F6FD] px-3 py-1 text-xs font-medium text-[#015BFE]">${tag}</span>`).join("")}</div>
        ${cardCta(ctaLabel, path)}
      </div>
    </article>`).join("")}</div>`,
  });
}

function clientIntegrationsSection() {
  const l = lang();
  const items = l === "pl"
    ? [
      ["CRM i sprzedaż", "handshake", ["Salesforce", "Dynamics 365", "HubSpot", "Oracle CX"], "Dwukierunkowa synchronizacja kontaktów, leadów i customer journey."],
      ["E-commerce", "shopping-cart", ["Magento", "Shopify", "SAP Commerce", "WooCommerce"], "Koszyki, transakcje, katalog i stany magazynowe w czasie rzeczywistym."],
      ["ERP i backend", "server", ["SAP ERP", "Oracle", "Comarch", "MS NAV"], "Dane klientów, zamówienia, faktury i punkty lojalnościowe."],
      ["Mobile i aplikacje", "smartphone", ["iOS", "Android", "React Native", "Flutter"], "Integracja SDK, push, in-app messaging i analityka."],
      ["Komunikacja", "mail", ["SendGrid", "Twilio", "WhatsApp", "Firebase"], "Omnichannel: Email, SMS, WhatsApp, Push i In-app."],
      ["Analityka i reklamy", "chart-no-axes-combined", ["GA4", "Meta Ads", "Google Ads", "LinkedIn"], "Dane behawioralne, synchronizacja audience i conversion tracking."],
      ["Hurtownie danych", "database", ["Snowflake", "BigQuery", "Redshift", "Azure SQL"], "Pipeline'y ETL/ELT, integracja data lake i analityka."],
      ["Custom i legacy", "code", ["REST API", "GraphQL", "SOAP", "Webhooks"], "Dedykowane konektory dla systemów własnych."],
    ]
    : [
      ["CRM & Sales", "handshake", ["Salesforce", "Dynamics 365", "HubSpot", "Oracle CX"], "Bidirectional sync of contacts, leads and customer journey."],
      ["E-commerce", "shopping-cart", ["Magento", "Shopify", "SAP Commerce", "WooCommerce"], "Real-time cart, transactions, catalog and inventory sync."],
      ["ERP & Backend", "server", ["SAP ERP", "Oracle", "Comarch", "MS NAV"], "Customer data, orders, invoices and loyalty points."],
      ["Mobile & Apps", "smartphone", ["iOS", "Android", "React Native", "Flutter"], "SDK integration, push, in-app messaging and analytics."],
      ["Communication", "mail", ["SendGrid", "Twilio", "WhatsApp", "Firebase"], "Omnichannel: Email, SMS, WhatsApp, Push, In-app."],
      ["Analytics & Ads", "chart-no-axes-combined", ["GA4", "Meta Ads", "Google Ads", "LinkedIn"], "Behavioral data, audience sync and conversion tracking."],
      ["Data Warehouses", "database", ["Snowflake", "BigQuery", "Redshift", "Azure SQL"], "ETL/ELT pipelines, data lake integration and analytics."],
      ["Custom & Legacy", "code", ["REST API", "GraphQL", "SOAP", "Webhooks"], "Dedicated connectors for proprietary systems."],
    ];
  return section({
    children: `${homeHeader({ eyebrow: l === "pl" ? "Integracje enterprise" : "Enterprise integrations", num: "04", title: l === "pl" ? "Łączymy CDP z Twoim stackiem technologicznym" : "We connect CDP with your tech stack", text: l === "pl" ? "150+ gotowych konektorów oraz custom development dla każdego systemu w organizacji." : "150+ ready connectors plus custom development for every system in your organization." })}
    <div class="minimal-illustration mt-12 aspect-[16/7] rounded-xl"><img src="${generatedHomeVisual("integrations")}" alt="" class="h-full w-full object-cover opacity-95 mix-blend-multiply" /></div>
    <div class="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">${items.map(([title, iconName, chips, text]) => `<article class="rounded-xl border border-[#E6EAF2] bg-white p-6">
      <div class="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F4F6FD] text-[#015BFE]">${icon(iconName, "h-5 w-5")}</div>
      <h3 class="text-xl font-semibold">${title}</h3>
      <div class="mt-4 flex flex-wrap gap-2">${chips.map((chip) => `<span class="rounded-full bg-[#F4F6FD] px-3 py-1 text-xs font-medium text-[#015BFE]">${chip}</span>`).join("")}</div>
      <p class="mt-4 text-sm leading-6 text-[#595959]">${text}</p>
    </article>`).join("")}</div>
    <div class="mt-10 flex flex-wrap gap-4">${button(l === "pl" ? "Zobacz integracje CDP" : "See CDP integrations", offerPath("cdp"), "primary", "database")}${button(l === "pl" ? "Zapytaj o custom connector" : "Ask about custom connector", localizedPath("/kontakt", "/en/contact"), "secondary", "code")}</div>`,
  });
}

function clientResultsSection() {
  const l = lang();
  const stats = l === "pl"
    ? [["100+", "wdrożeń Synerise"], ["95%", "satysfakcji klientów"], ["3x", "średni dostarczony ROI"], ["90", "dni do pierwszego mierzalnego ROI"]]
    : [["100+", "Synerise implementations"], ["95%", "Client satisfaction"], ["3x", "Average ROI delivered"], ["90", "Days to first measurable ROI"]];
  const cards = l === "pl"
    ? [
      ["100% fokus na Synerise", "Nie jesteśmy agencją od wielu platform: znamy każdą funkcję, integrację i best practice.", "target"],
      ["Certyfikowany partner", "Oficjalny partner Synerise z najwyższymi certyfikacjami i bezpośrednim dostępem do product teamu.", "badge-check"],
      ["Część RITS Group", "Specjalizacja Persooa plus 500+ ekspertów RITS w Data, AI, CRM i Infrastrukturze.", "globe"],
    ]
    : [
      ["100% Synerise focus", "Not a multi-platform agency: we know every feature, integration and best practice.", "target"],
      ["Certified partner", "Official Synerise partner with the highest certifications and direct product-team access.", "badge-check"],
      ["Part of RITS Group", "Specialization plus 500+ RITS experts in Data, AI, CRM and Infrastructure.", "globe"],
    ];
  return section({
    variant: "lightBlue",
    children: `${homeHeader({ eyebrow: l === "pl" ? "Wyniki" : "Performance results", num: "05", title: l === "pl" ? "Sprawdzone rezultaty dla klientów" : "Proven results for our clients", text: l === "pl" ? "Mierzalne efekty wdrożeń Synerise w retailu, bankowości i telco." : "Measurable outcomes from Synerise implementations across retail, banking and telco." })}
    <div class="mt-12 grid gap-5 md:grid-cols-4">${stats.map(([value, label]) => `<div class="rounded-xl bg-white p-6 text-center shadow-soft"><div class="text-5xl font-semibold text-[#015BFE]">${value}</div><p class="mt-3 text-sm leading-6 text-[#595959]">${label}</p></div>`).join("")}</div>
    <div class="mt-8 grid gap-5 md:grid-cols-3">${cards.map(([title, text, iconName]) => clientCard(title, text, iconName)).join("")}</div>
    <div class="mt-10 flex flex-wrap gap-4">${button(l === "pl" ? "Zobacz ROI w 90 dni" : "View ROI in 90 days", offerPath("roi-w-90dni"), "primary", "target")}${button(l === "pl" ? "Zobacz artykuły growth" : "See growth articles", localizedPath("/growth-hub", "/en/growth-hub"), "secondary", "book-open")}</div>`,
  });
}

function clientChartsSection() {
  const l = lang();
  const charts = l === "pl"
    ? [
      {
        title: "Ścieżka ROI w 90 dni",
        description: "Prosty widok quick winów, core implementation i faz optymalizacji.",
        type: "line",
        labels: ["Start", "30 dni", "60 dni", "90 dni"],
        series: [
          { label: "Framework Persooa", data: [100, 124, 153, 189], color: "blue", fill: true },
          { label: "Baseline", data: [100, 104, 108, 112], color: "mint", dash: true },
        ],
      },
      {
        title: "Wzrost KPI w case'ach",
        description: "Reprezentatywny uplift w programach retail, banking i telco.",
        type: "bar",
        labels: ["Email", "AOV", "Cross-sell", "Engagement"],
        series: [{ label: "Uplift", data: [67, 43, 156, 92], color: "blue" }],
      },
      {
        title: "Miks aktywacji",
        description: "Jak dojrzały program Synerise rozkłada aktywacje na kluczowe kanały.",
        type: "donut",
        labels: ["Email", "Mobile", "Web", "Loyalty"],
        series: [{ label: "Kanały", data: [38, 24, 22, 16], colors: ["blue", "mint", "violet", "dark"] }],
        compact: true,
      },
    ]
    : [
      {
        title: "ROI path in 90 days",
        description: "A simple view of quick wins, core implementation and optimization phases.",
        type: "line",
        labels: ["Start", "30 days", "60 days", "90 days"],
        series: [
          { label: "Persooa framework", data: [100, 124, 153, 189], color: "blue", fill: true },
          { label: "Baseline", data: [100, 104, 108, 112], color: "mint", dash: true },
        ],
      },
      {
        title: "Case KPI uplift",
        description: "Representative uplift across retail, banking and telco programs.",
        type: "bar",
        labels: ["Email", "AOV", "Cross-sell", "Engagement"],
        series: [{ label: "Uplift", data: [67, 43, 156, 92], color: "blue" }],
      },
      {
        title: "Activation mix",
        description: "How a mature Synerise program distributes activation across key channels.",
        type: "donut",
        labels: ["Email", "Mobile", "Web", "Loyalty"],
        series: [{ label: "Channels", data: [38, 24, 22, 16], colors: ["blue", "mint", "violet", "dark"] }],
        compact: true,
      },
    ];
  return section({
    children: `${homeHeader({ eyebrow: l === "pl" ? "Widoki danych" : "Data views", num: "05A", title: l === "pl" ? "Wykresy, które ułatwiają czytanie efektów" : "Charts that make outcomes easier to read", text: l === "pl" ? "Historia klienta zawiera wizualny dowód KPI: trajektorię ROI, uplift w case'ach i podział aktywacji na kanały." : "The client story now includes visual KPI proof: ROI trajectory, case uplift and channel activation split." })}
    <div class="mt-12 grid gap-6 lg:grid-cols-3">${charts.map((chart) => chartDemoCard(chart)).join("")}</div>
    <div class="mt-10 flex flex-wrap gap-4">${button(l === "pl" ? "Zaplanuj mierzalne ROI" : "Plan measurable ROI", offerPath("roi-w-90dni"), "primary", "chart-no-axes-combined")}${button(l === "pl" ? "Otwórz system wykresów" : "Open chart system", localizedPath("/design-system/charts", "/en/design-system/charts"), "secondary", "component")}</div>`,
  });
}

function clientCxFrameworkSection() {
  const l = lang();
  const pillars = l === "pl"
    ? [
      ["Warstwa I", "Data Foundation", "database", ["Zunifikowana platforma danych", "Architektura API-first", "Streaming real-time", "Zgodność z RODO"]],
      ["Warstwa II", "Intelligence Layer", "brain", ["Segmentacja behawioralna", "Silnik Next Best Action", "Modele predykcyjne", "Personalizacja 1:1"]],
      ["Warstwa III", "Activation Layer", "rocket", ["Orkiestracja omnichannel", "Programy lojalnościowe", "Mobile wallets", "Zaangażowanie real-time"]],
    ]
    : [
      ["Layer I", "Data Foundation", "database", ["Unified data platform", "API-first architecture", "Real-time streaming", "GDPR compliance"]],
      ["Layer II", "Intelligence Layer", "brain", ["Behavioral segmentation", "Next Best Action engine", "Predictive models", "1:1 personalization"]],
      ["Layer III", "Activation Layer", "rocket", ["Omnichannel orchestration", "Loyalty programs", "Mobile wallets", "Real-time engagement"]],
    ];
  return section({
    children: `${homeHeader({ eyebrow: "Framework", num: "06", title: "Persooa CX Transformation Framework", text: l === "pl" ? "Strategiczne, trójwarstwowe podejście do budowania ekosystemów CX na Synerise." : "A strategic, three-layer approach to building CX ecosystems on Synerise." })}
    <div class="minimal-illustration mt-12 aspect-[16/7] rounded-xl"><img src="${generatedHomeVisual("framework")}" alt="" class="h-full w-full object-cover opacity-95 mix-blend-multiply" /></div>
    <div class="mt-12 grid gap-6 md:grid-cols-3">${pillars.map(([layer, title, iconName, items], index) => `<article class="relative rounded-xl border ${index === 1 ? "border-[#015BFE] bg-[#F4F6FD]" : "border-[#E6EAF2] bg-white"} p-7">
      ${index === 1 ? `<div class="absolute right-5 top-5 rounded-full bg-[#015BFE] px-3 py-1 text-xs font-medium text-white">${l === "pl" ? "Najważniejsze" : "Most important"}</div>` : ""}
      <div class="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#015BFE] shadow-soft">${icon(iconName, "h-5 w-5")}</div>
      <span class="text-sm font-semibold uppercase tracking-wide text-[#015BFE]">${layer}</span>
      <h3 class="mt-2 text-2xl font-semibold">${title}</h3>
      <ul class="mt-5 space-y-3 text-sm leading-6 text-[#595959]">${items.map((item) => `<li class="flex gap-2">${icon("check", "mt-1 h-4 w-4 shrink-0 text-[#015BFE]")}<span>${item}</span></li>`).join("")}</ul>
    </article>`).join("")}</div>
    <div class="mt-10 flex flex-wrap gap-4">${button(l === "pl" ? "Zbuduj fundament CDP" : "Build CDP foundation", offerPath("cdp"), "primary", "database")}${button(l === "pl" ? "Dodaj personalizację AI" : "Add AI personalization", offerPath("personalizacja-ai"), "secondary", "brain")}</div>`,
  });
}

function clientMigrationSection() {
  const l = lang();
  const steps = l === "pl"
    ? [
      ["Krok 01", "Audyt i mapowanie", ["Analiza obecnych danych i procesów", "Mapowanie do architektury Synerise", "Plan migracji z harmonogramem", "Ocena ryzyk i mitigacja"]],
      ["Krok 02", "Parallel Run", ["Import danych historycznych (ETL/ELT)", "Konfiguracja workspace Synerise", "Równoległa praca ze starym systemem", "Walidacja danych i kampanii"]],
      ["Krok 03", "Cutover i Hypercare", ["Zaplanowany weekendowy cutover", "Zero downtime dla użytkowników", "Hypercare 24/7 przez 4 tygodnie", "Wygaszenie starego systemu"]],
    ]
    : [
      ["Step 01", "Audit & Mapping", ["Analysis of current data and processes", "Mapping to Synerise architecture", "Migration plan with timeline", "Risk assessment & mitigation"]],
      ["Step 02", "Parallel Run", ["Historical data import (ETL/ELT)", "Synerise workspace configuration", "Parallel run with the legacy system", "Data and campaign validation"]],
      ["Step 03", "Cutover & Hypercare", ["Planned weekend cutover", "Zero downtime for users", "Hypercare 24/7 for 4 weeks", "Old system decommissioning"]],
    ];
  return section({
    children: `${homeHeader({ eyebrow: l === "pl" ? "Proces" : "Our process", num: "07", title: l === "pl" ? "Profesjonalna migracja do Synerise" : "Professional migration to Synerise", text: l === "pl" ? "Migrujemy z SALESmanago, Salesforce Marketing Cloud, Adobe Campaign albo Braze: bez downtime'u i ryzyka." : "We migrate you from SALESmanago, Salesforce Marketing Cloud, Adobe Campaign or Braze: without downtime or risk." })}
    <div class="minimal-illustration mt-12 aspect-[16/7] rounded-xl"><img src="${generatedHomeVisual("migration")}" alt="" class="h-full w-full object-cover opacity-95 mix-blend-multiply" /></div>
    <div class="mt-12 grid gap-6 md:grid-cols-3">${steps.map(([step, title, items]) => `<article class="rounded-xl border border-[#E6EAF2] bg-white p-7">
      <span class="text-sm font-semibold uppercase tracking-wide text-[#015BFE]">${step}</span>
      <h3 class="mt-2 text-2xl font-semibold">${title}</h3>
      <ul class="mt-5 space-y-3 text-sm leading-6 text-[#595959]">${items.map((item) => `<li class="flex gap-2">${icon("check", "mt-1 h-4 w-4 shrink-0 text-[#015BFE]")}<span>${item}</span></li>`).join("")}</ul>
    </article>`).join("")}</div>
    <div class="mt-10 flex flex-wrap gap-4">${button(l === "pl" ? "Zaplanuj migrację CDP" : "Plan CDP migration", offerPath("cdp"), "primary", "database")}${button(l === "pl" ? "Porozmawiaj o migracji" : "Talk about migration", localizedPath("/kontakt", "/en/contact"), "secondary", "send")}</div>`,
  });
}

function clientCasesSection() {
  const l = lang();
  const cases = l === "pl"
    ? [
      ["E-commerce / Retail", "Sieć fashion", "Ujednolicenie danych ze 150 sklepów, e-commerce, mobile i programu lojalnościowego dla spójnej personalizacji omnichannel.", [[" +67%", "Konwersja email"], ["+43%", "Średnia wartość koszyka"], ["2.3M", "Ujednoliconych profili"]], ["CDP", "Omnichannel", "Lojalność", "Rekomendacje AI"], { labels: ["Email", "AOV", "Profile"], data: [67, 43, 90] }, offerPath("personalizacja-ai"), "Zbuduj personalizację"],
      ["Bankowość / Finanse", "Bank cyfrowy", "Budowa silnika Next Best Offer opartego na AI dla produktów finansowych z wykrywaniem fraudów w czasie rzeczywistym.", [["+156%", "Cross-sell"], ["-34%", "Churn klientów"], ["24/7", "Detekcja fraudów"]], ["Next Best Offer", "Modele AI", "Real-time", "Fraud Prevention"], { labels: ["Cross-sell", "Churn", "Security"], data: [156, 34, 100] }, offerPath("agenci-przychodu"), "Poznaj agentów przychodu"],
      ["Telco", "Operator Telco", "Kompleksowy Customer Lifecycle Management dla 5M+ klientów, skoncentrowany na retencji i cross-sellu.", [["-28%", "Churn"], ["+92%", "Engagement"], ["5M+", "Profili CDP"]], ["Customer Lifecycle", "Churn Prevention", "Segmentacja", "Automatyzacja"], { labels: ["Churn", "Engage", "Profile"], data: [28, 92, 100] }, offerPath("cdp"), "Zobacz platformę CDP"],
    ]
    : [
      ["E-commerce / Retail", "Fashion Retailer", "Unify data from 150 stores, e-commerce, mobile and the loyalty program for consistent omnichannel personalization.", [[" +67%", "Email conversion"], ["+43%", "Average order value"], ["2.3M", "Unified profiles"]], ["CDP", "Omnichannel", "Loyalty", "AI Recommendations"], { labels: ["Email", "AOV", "Profiles"], data: [67, 43, 90] }, offerPath("personalizacja-ai"), "Build personalization"],
      ["Banking / Finance", "Digital Bank", "Build an AI-powered Next Best Offer engine for financial products with real-time fraud detection.", [["+156%", "Cross-sell rate"], ["-34%", "Customer churn"], ["24/7", "Fraud detection"]], ["Next Best Offer", "AI Models", "Real-time", "Fraud Prevention"], { labels: ["Cross-sell", "Churn", "Security"], data: [156, 34, 100] }, offerPath("agenci-przychodu"), "Explore revenue agents"],
      ["Telco", "Telco Operator", "Comprehensive Customer Lifecycle Management for 5M+ customers focused on retention and cross-sell.", [["-28%", "Churn rate"], ["+92%", "Engagement"], ["5M+", "CDP profiles"]], ["Customer Lifecycle", "Churn Prevention", "Segmentation", "Automation"], { labels: ["Churn", "Engage", "Profiles"], data: [28, 92, 100] }, offerPath("cdp"), "See CDP platform"],
    ];
  return section({
    children: `${homeHeader({ eyebrow: l === "pl" ? "Historie sukcesu" : "Success stories", num: "08", title: l === "pl" ? "Zaprojektowane pod mierzalne efekty" : "Engineered for measurable outcomes", text: l === "pl" ? "Realny uplift KPI z wdrożeń Synerise: zobacz wyniki." : "Real KPI uplift from Synerise implementations: explore the results." })}
    <div class="minimal-illustration mt-12 aspect-[16/7] rounded-xl"><img src="${generatedHomeVisual("outcomes")}" alt="" class="h-full w-full object-cover opacity-95 mix-blend-multiply" /></div>
    <div class="mt-12 grid gap-6 lg:grid-cols-3">${cases.map(([tag, title, text, kpis, tags, chart, path, ctaLabel]) => `<article class="rounded-xl border border-[#E6EAF2] bg-white p-6 shadow-soft">
      ${badge(tag)}
      <h3 class="mt-5 text-3xl font-semibold">${title}</h3>
      <p class="mt-4 text-base leading-7 text-[#595959]">${text}</p>
      <div class="mt-6 grid grid-cols-3 gap-3">${kpis.map(([value, label]) => `<div class="rounded-xl bg-[#F4F6FD] p-3 text-center"><div class="text-2xl font-semibold text-[#015BFE]">${value}</div><div class="mt-1 text-xs leading-4 text-[#595959]">${label}</div></div>`).join("")}</div>
      <div class="mt-6">${chartCanvas({ type: "bar", labels: chart.labels, series: [{ label: title, data: chart.data, color: "blue" }], ariaLabel: l === "pl" ? `Wykres KPI ${title}` : `${title} KPI chart`, compact: true })}</div>
      <div class="mt-6 flex flex-wrap gap-2">${tags.map((item) => `<span class="rounded-full border border-[#E6EAF2] px-3 py-1 text-xs text-[#595959]">${item}</span>`).join("")}</div>
      ${cardCta(ctaLabel, path)}
    </article>`).join("")}</div>`,
  });
}

function clientEngagementModelsSection() {
  const l = lang();
  const models = l === "pl"
    ? [
      ["01", "Advisory i strategia", "2-4 tygodnie", "Konsulting strategiczny: roadmapa CX, ocena dojrzałości organizacyjnej i business case pod maksymalizację ROI.", ["CX Maturity Assessment", "Roadmapa CDP", "Model ROI", "Priorytetyzacja use case'ów"], "Rozważasz Synerise albo potrzebujesz strategii dla istniejącej platformy.", offerPath("roi-w-90dni"), "Zacznij od strategii"],
      ["02", "Pełna implementacja", "10-16 tygodni", "Wdrożenie end-to-end: od integracji danych po konfigurację modeli AI i szkolenia zespołu.", ["End-to-end", "Integracja danych", "AI i personalizacja", "Przekazanie zespołowi"], "Wdrażasz od zera albo migrujesz z innej platformy.", offerPath("cdp"), "Zaplanuj wdrożenie"],
      ["03", "Quick Wins Sprint", "4-6 tygodni", "Szybka implementacja konkretnego use case'u na sprawdzonych template'ach: idealna jako POC przed pełnym rolloutem.", ["Szybkie dowiezienie", "Gotowe template'y", "Fast Time-to-Value", "Proof of Concept"], "Potrzebujesz szybkich efektów albo chcesz przetestować konkretny scenariusz.", offerPath("roi-w-90dni"), "Zobacz quick winy"],
      ["04", "Managed Services", "Ciągłe", "Działamy jak rozszerzenie Twojego zespołu: wsparcie, campaign management, ciągła optymalizacja i doradztwo.", ["Wsparcie 24/7", "Campaign Management", "Optymalizacja", "Doradztwo strategiczne"], "Masz już Synerise i potrzebujesz stałego wsparcia operacyjnego.", offerPath("marketing-automation-2-0"), "Poznaj managed automation"],
    ]
    : [
      ["01", "Advisory & Strategy", "2-4 weeks", "Strategic consulting: CX roadmap, organizational maturity assessment and a business case for ROI maximization.", ["CX Maturity Assessment", "CDP Roadmap", "ROI Model", "Use Case Prioritization"], "Considering Synerise or need a strategy for an existing platform.", offerPath("roi-w-90dni"), "Start with strategy"],
      ["02", "Full Implementation", "10-16 weeks", "End-to-end implementation: from data integration through AI model configuration to team training.", ["End-to-end", "Data Integration", "AI & Personalization", "Team Handover"], "Implementing from scratch or migrating from another platform.", offerPath("cdp"), "Plan implementation"],
      ["03", "Quick Wins Sprint", "4-6 weeks", "Rapid implementation of a specific use case using proven templates: ideal as a POC before full rollout.", ["Rapid Delivery", "Pre-built Templates", "Fast Time-to-Value", "Proof of Concept"], "Need quick results or want to test a specific scenario.", offerPath("roi-w-90dni"), "See quick wins"],
      ["04", "Managed Services", "Ongoing", "We act as your extended team: support, campaign management, continuous optimization and advisory.", ["24/7 Support", "Campaign Management", "Optimization", "Strategic Advisory"], "Already on Synerise and need ongoing operational support.", offerPath("marketing-automation-2-0"), "Explore managed automation"],
    ];
  return section({
    children: `${homeHeader({ eyebrow: l === "pl" ? "Modele współpracy" : "Engagement models", num: "09", title: l === "pl" ? "Rozwiązania dopasowane do Twoich celów" : "Solutions tailored to your goals", text: l === "pl" ? "Niezależnie od tego, czy pracujesz na Synerise, planujesz wdrożenie czy migrację: mamy model zaprojektowany pod ten etap." : "Whether you run, plan or migrate to Synerise: there is a model engineered for it." })}
    <div class="mt-12 space-y-5">${models.map(([no, title, duration, text, tags, situation, path, ctaLabel], index) => `<article class="grid gap-5 rounded-xl border ${index === 1 ? "border-[#015BFE] bg-[#F4F6FD]" : "border-[#E6EAF2] bg-white"} p-6 lg:grid-cols-[72px_1fr_260px] lg:items-center">
      <div class="text-3xl font-semibold text-[#015BFE]">${no}</div>
      <div><div class="flex flex-wrap items-center gap-3"><h3 class="text-2xl font-semibold">${title}</h3><span class="rounded-full bg-white px-3 py-1 text-xs font-medium text-[#015BFE]">${duration}</span></div><p class="mt-3 text-base leading-7 text-[#595959]">${text}</p><div class="mt-4 flex flex-wrap gap-2">${tags.map((tag) => `<span class="rounded-full border border-[#E6EAF2] bg-white px-3 py-1 text-xs text-[#595959]">${tag}</span>`).join("")}</div>${cardCta(ctaLabel, path)}</div>
      <div class="rounded-xl bg-white p-4 text-sm leading-6 text-[#595959]"><strong class="block text-[#0F1E34]">${l === "pl" ? "Twoja sytuacja" : "Your situation"}</strong>${situation}</div>
    </article>`).join("")}</div>`,
  });
}

function clientPartnerSection() {
  const l = lang();
  const items = l === "pl"
    ? [
      ["15-25% prowizji", "Zarabiaj na wdrożeniach oraz recurring revenue z managed services. Transparentne zasady i ochrona dealu.", "badge-dollar-sign"],
      ["Kompleksowe szkolenia", "Certyfikacje Synerise Academy, środowisko sandbox i playbooki best practice.", "graduation-cap"],
      ["Wsparcie 24/7", "Dedykowany Partner Manager, wsparcie techniczne i konsulting pre-sale.", "handshake"],
      ["Gotowe narzędzia", "ROI w 90 dni, template'y myRewards, akceleratory integracji i biblioteki kampanii.", "wrench"],
      ["Wsparcie sprzedaży", "Materiały marketingowe, licencje demo, lead protection i co-marketing.", "megaphone"],
      ["Społeczność", "Sieć partnerów, kwartalne meetupy i dostęp do Personalize360.", "users"],
    ]
    : [
      ["15-25% commission", "Earn on implementations plus recurring revenue from managed services. Transparent rules, deal protection.", "badge-dollar-sign"],
      ["Comprehensive training", "Synerise Academy certifications, sandbox environment and best-practice playbooks.", "graduation-cap"],
      ["Support 24/7", "Dedicated Partner Manager, technical support and pre-sale consulting.", "handshake"],
      ["Ready tools", "ROI in 90 Days, myRewards templates, integration accelerators and campaign libraries.", "wrench"],
      ["Sales support", "Marketing materials, demo licenses, lead protection and co-marketing.", "megaphone"],
      ["Community", "Partner network, quarterly meetups and Personalize360 access.", "users"],
    ];
  return section({
    variant: "dark",
    children: `${homeHeader({ eyebrow: l === "pl" ? "Program partnerski" : "Partner program", num: "10", title: l === "pl" ? "Zostań partnerem Synerise" : "Become a Synerise Partner", text: l === "pl" ? "Dla freelancerów, agencji i software house'ów gotowych na projekty enterprise." : "For freelancers, agencies and software houses ready for enterprise projects.", dark: true })}
    <div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">${items.map(([title, text, iconName]) => `<article class="rounded-xl border border-white/12 bg-white/[0.03] p-7">
      <div class="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#41DBC3]">${icon(iconName, "h-5 w-5")}</div>
      <h3 class="text-2xl font-semibold text-white">${title}</h3>
      <p class="mt-4 text-base leading-7 text-white/68">${text}</p>
    </article>`).join("")}</div>
    <div class="mt-10 flex flex-wrap gap-4">${button(l === "pl" ? "Otwórz program partnerski" : "Open partner program", localizedPath("/program-partnerski", "/en/partners"), "heroDark", "handshake")}${button(l === "pl" ? "Aplikuj teraz" : "Apply now", localizedPath("/kontakt", "/en/contact"), "heroDarkSecondary", "send")}<a class="inline-flex h-12 items-center justify-center rounded-full border border-white/16 px-6 text-base font-medium text-white transition hover:bg-white hover:text-[#05070D]" href="mailto:partners@persooa.com">partners@persooa.com</a></div>`,
  });
}

function clientFaqSection() {
  const l = lang();
  const items = l === "pl"
    ? [
      ["Ile trwa typowe wdrożenie Synerise?", "Standardowe wdrożenie trwa 3-4 miesiące, ale w frameworku ROI w 90 dni pierwsze mierzalne efekty widać już po 30 dniach. Harmonogram zależy od złożoności: integracji, use case'ów i wolumenu danych."],
      ["Czy oferujecie wsparcie po wdrożeniu?", "Tak: Managed Services obejmujące wsparcie techniczne 24/7, zarządzanie kampaniami, ciągłą optymalizację i nowe use case'y. Działamy jak rozszerzenie Twojego zespołu."],
      ["Jakie są koszty wdrożenia?", "Koszty zależą od zakresu: integracji, custom developmentu, szkoleń i managed services. Typowy projekt enterprise mieści się w przedziale 50k-200k EUR. Szczegółową propozycję przygotowujemy po discovery."],
      ["Czy pomagacie migrować z innej platformy?", "Tak. Mamy doświadczenie w migracjach z SALESmanago, Salesforce Marketing Cloud i Adobe Campaign: z parallel run, walidacją danych i zero-downtime cutover."],
      ["Jakie branże obsługujecie?", "Retail, e-commerce, banking, telco, insurance, healthcare i travel: z potwierdzonymi case studies oraz konkretnymi metrykami ROI dla każdej branży."],
      ["Co wyróżnia Persooa?", "100% fokus na Synerise, część RITS Group, sprawdzone frameworki, zrealizowane projekty i długoterminowe podejście partnerskie."],
    ]
    : [
      ["How long does a typical Synerise implementation take?", "Standard implementation takes 3-4 months, but with our ROI in 90 Days framework you see the first measurable results in 30 days. Timeline depends on complexity: integrations, use cases and data volume."],
      ["Do you offer post-implementation support?", "Yes: Managed Services covering 24/7 technical support, campaign management, continuous optimization and new use cases. We act as your extended team."],
      ["What are the implementation costs?", "Costs depend on scope: integrations, custom development, training and managed services. A typical enterprise project ranges from 50k to 200k EUR. We prepare a detailed proposal after discovery."],
      ["Can you help migrate from another platform?", "Absolutely. We have experience migrating from SALESmanago, Salesforce Marketing Cloud and Adobe Campaign: with parallel run, data validation and zero-downtime cutover."],
      ["What industries do you serve?", "Retail, E-commerce, Banking, Telco, Insurance, Healthcare and Travel: with proven case studies and specific ROI metrics in each."],
      ["What sets Persooa apart?", "100% focus on Synerise, part of the RITS Group, proven frameworks, completed projects and a long-term partnership approach."],
    ];
  return section({
    children: `${homeHeader({ eyebrow: "FAQ", num: "11", title: l === "pl" ? "Najczęstsze pytania" : "Frequently asked questions", center: true })}
    <div class="mx-auto mt-12 max-w-4xl space-y-4">${items.map(([q, a], index) => `<details class="rounded-xl border border-[#E6EAF2] bg-white p-6" ${index === 0 ? "open" : ""}><summary class="cursor-pointer text-xl font-semibold text-[#0F1E34]">${q}</summary><p class="mt-4 text-base leading-7 text-[#595959]">${a}</p></details>`).join("")}</div>
    <div class="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-4">${button(l === "pl" ? "Zapytaj o projekt" : "Ask about your project", localizedPath("/kontakt", "/en/contact"), "primary", "send")}${button(l === "pl" ? "Czytaj Growth Hub" : "Read Growth Hub", localizedPath("/growth-hub", "/en/growth-hub"), "secondary", "book-open")}</div>`,
  });
}

function clientFinalCtaSection() {
  const l = lang();
  return section({
    variant: "dark",
    compact: true,
    children: `<div class="grid items-center gap-8 lg:grid-cols-12">
      <div class="lg:col-span-8">${badge(l === "pl" ? "Zacznijmy" : "Get started", true)}<h2 class="mt-5 text-4xl font-semibold leading-tight text-white">${l === "pl" ? "Przyspiesz swój projekt Synerise" : "Accelerate your Synerise project"}</h2><p class="mt-4 max-w-2xl text-lg leading-8 text-white/72">${l === "pl" ? "Umów bezpłatną konsultację: przeanalizujemy Twoją sytuację i zaproponujemy optymalne podejście, wspierane kompetencjami 600+ konsultantów RITS." : "Book a free consultation: we will analyze your situation and propose the optimal approach, backed by 600+ RITS consultants."}</p></div>
      <div class="flex flex-wrap gap-4 lg:col-span-4 lg:justify-end"><a href="tel:+48123456789" class="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-base font-medium text-[#05070D]">${icon("phone", "h-4 w-4")} +48 123 456 789</a><a href="mailto:kontakt@persooa.com" class="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/16 px-6 text-base font-medium text-white transition hover:bg-white hover:text-[#05070D]">${icon("mail", "h-4 w-4")} kontakt@persooa.com</a></div>
    </div>`,
  });
}

function clientCard(title, text, iconName) {
  return `<article class="rounded-xl border border-[#E6EAF2] bg-white p-6 transition hover:border-[#015BFE]/40 hover:shadow-soft">
    <div class="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F4F6FD] text-[#015BFE]">${icon(iconName, "h-5 w-5")}</div>
    <h3 class="text-xl font-semibold leading-tight text-[#0F1E34]">${title}</h3>
    <p class="mt-3 text-sm leading-6 text-[#595959]">${text}</p>
  </article>`;
}

function offerCard(page) {
  const l = lang();
  const visual = generatedOfferVisual(page);
  return `<article class="rounded-xl border border-[#E6EAF2] bg-white p-6 transition hover:border-[#015BFE]/40 hover:shadow-soft">
    <div class="minimal-illustration mb-6 aspect-[16/10] rounded-xl">
      <img src="${visual}" alt="" class="h-full w-full object-cover opacity-95 mix-blend-multiply" />
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

function offerContextData(page, l) {
  const fallback = l === "pl"
    ? {
      eyebrow: "Kontekst produktu",
      title: "Jak ta oferta pracuje w systemie wzrostu",
      text: "Każda usługa jest osadzona w realnym procesie: od danych, przez logikę decyzji, po aktywację i pomiar wpływu na KPI.",
      items: [
        ["Gdzie działa", "E-commerce, CRM, aplikacja mobilna, call center i kanały komunikacji klienta."],
        ["Co projektujemy", "Scenariusze, integracje, automatyzacje i mierniki potrzebne do uruchomienia rozwiązania."],
        ["Jak mierzymy", "Konwersja, AOV, ARPU, retencja, zgody marketingowe i wpływ na przychód."],
      ],
    }
    : {
      eyebrow: "Product context",
      title: "How this offer works inside a growth system",
      text: "Every service is placed in a real operating process: from data, through decision logic, to activation and KPI measurement.",
      items: [
        ["Where it works", "E-commerce, CRM, mobile app, call center and customer communication channels."],
        ["What we design", "Scenarios, integrations, automations and metrics required to launch the solution."],
        ["How we measure", "Conversion, AOV, ARPU, retention, marketing consent growth and revenue impact."],
      ],
    };
  const configs = {
    "personalizacja-ai": l === "pl"
      ? {
        eyebrow: "Kontekst personalizacji",
        title: "Od profilu klienta do decyzji w czasie rzeczywistym",
        text: "Personalizacja AI działa wtedy, gdy dane, rekomendacje i kanały komunikacji są połączone w jeden scenariusz doświadczenia klienta.",
        items: [["Sygnały", "Zachowania web/app, transakcje, katalog produktów i segmenty klientów."], ["Aktywacja", "Rekomendacje, dynamiczne treści, next best offer i automatyzacje lifecycle."], ["Efekt", "Wyższa konwersja, większy koszyk, lepsza retencja i mniej ręcznej pracy."]],
      }
      : {
        eyebrow: "Personalization context",
        title: "From customer profile to real-time decisions",
        text: "AI personalization works when data, recommendations and communication channels are connected into one customer experience scenario.",
        items: [["Signals", "Web/app behavior, transactions, product catalog and customer segments."], ["Activation", "Recommendations, dynamic content, next best offer and lifecycle automations."], ["Outcome", "Higher conversion, larger basket, stronger retention and less manual work."]],
      },
    cdp: l === "pl"
      ? {
        eyebrow: "Kontekst CDP",
        title: "Jeden profil klienta dla całego ekosystemu",
        text: "CDP porządkuje źródła danych i zamienia rozproszone zdarzenia w fundament pod personalizację, AI oraz automatyzację kampanii.",
        items: [["Źródła", "E-commerce, POS, CRM, ERP, mobile, reklama, analityka i hurtownie danych."], ["Warstwa danych", "Customer 360, eventy real-time, zgody, segmenty i jakość danych."], ["Aktywacja", "Spójne segmenty i decyzje dostępne dla marketingu, sprzedaży i obsługi."]],
      }
      : {
        eyebrow: "CDP context",
        title: "One customer profile for the whole ecosystem",
        text: "CDP organizes data sources and turns fragmented events into a foundation for personalization, AI and campaign automation.",
        items: [["Sources", "E-commerce, POS, CRM, ERP, mobile, ads, analytics and data warehouses."], ["Data layer", "Customer 360, real-time events, consents, segments and data quality."], ["Activation", "Consistent segments and decisions available for marketing, sales and service."]],
      },
    revenue: l === "pl"
      ? {
        eyebrow: "Kontekst agentów przychodu",
        title: "System decyzji, który reaguje na intencję klienta",
        text: "Agenci przychodu łączą scoring, zachowania i ofertę, aby szybciej uruchamiać kolejny najlepszy krok sprzedażowy.",
        items: [["Sygnały", "Porzucone koszyki, leady, aktywność produktowa, scoring i historia zakupów."], ["Decyzja", "Next Best Offer, win-back, cross-sell, upsell i priorytety dla zespołu."], ["Efekt", "Więcej transakcji, krótszy czas reakcji i lepsza jakość leadów."]],
      }
      : {
        eyebrow: "Revenue agents context",
        title: "A decision system that reacts to customer intent",
        text: "Revenue agents connect scoring, behavior and offer logic to trigger the next best commercial action faster.",
        items: [["Signals", "Abandoned carts, leads, product activity, scoring and purchase history."], ["Decision", "Next Best Offer, win-back, cross-sell, upsell and team priorities."], ["Outcome", "More transactions, faster reaction time and higher-quality leads."]],
      },
    work: l === "pl"
      ? {
        eyebrow: "Kontekst agentów pracy",
        title: "Automatyzacja procesów, które zabierają zespołom czas",
        text: "Agenci pracy przejmują powtarzalne zadania operacyjne i spinają procesy między marketingiem, CRM, danymi i obsługą klienta.",
        items: [["Zadania", "Segmenty, eksporty, raporty, alerty, QA kampanii i powtarzalne decyzje."], ["Workflow", "Reguły, kroki akceptacji, integracje i automatyczne akcje w narzędziach."], ["Efekt", "Mniej pracy ręcznej, mniej błędów i więcej czasu na strategię."]],
      }
      : {
        eyebrow: "Work agents context",
        title: "Automation for processes that consume team time",
        text: "Work agents take over repetitive operational tasks and connect workflows across marketing, CRM, data and customer service.",
        items: [["Tasks", "Segments, exports, reports, alerts, campaign QA and repeat decisions."], ["Workflow", "Rules, approval steps, integrations and automatic actions in tools."], ["Outcome", "Less manual work, fewer errors and more time for strategy."]],
      },
    loyalty: l === "pl"
      ? {
        eyebrow: "Kontekst loyalty",
        title: "Program lojalnościowy połączony z danymi i personalizacją",
        text: "Loyalty działa najlepiej, gdy punkty, statusy, nagrody i komunikacja są zasilane zachowaniem klienta w CDP.",
        items: [["Mechanika", "Punkty, poziomy, nagrody, kupony, wyzwania i status klienta."], ["Personalizacja", "Oferty i benefity dopasowane do segmentu, historii zakupów i intencji."], ["Efekt", "Wyższa retencja, większa częstotliwość zakupów i lepsze dane first-party."]],
      }
      : {
        eyebrow: "Loyalty context",
        title: "A loyalty program connected with data and personalization",
        text: "Loyalty works best when points, statuses, rewards and communication are powered by customer behavior in CDP.",
        items: [["Mechanics", "Points, tiers, rewards, coupons, challenges and customer status."], ["Personalization", "Offers and benefits matched to segment, purchase history and intent."], ["Outcome", "Higher retention, purchase frequency and stronger first-party data."]],
      },
    "roi-w-90dni": l === "pl"
      ? {
        eyebrow: "Kontekst ROI",
        title: "Program wdrożony wokół mierzalnego wyniku",
        text: "ROI w 90 dni porządkuje priorytety: wybieramy scenariusze o największym wpływie i mierzymy efekt od pierwszych tygodni.",
        items: [["Start", "Warsztat biznesowy, warsztat techniczny i wybór scenariuszy quick win."], ["Wdrożenie", "Konfiguracja danych, kampanii, personalizacji i raportowania."], ["Pomiar", "Trajektoria KPI, baseline, uplift i rekomendacje kolejnych kroków."]],
      }
      : {
        eyebrow: "ROI context",
        title: "A program built around measurable impact",
        text: "ROI in 90 days organizes priorities: we choose the highest-impact scenarios and measure results from the first weeks.",
        items: [["Start", "Business workshop, technical workshop and quick-win scenario selection."], ["Delivery", "Data, campaign, personalization and reporting setup."], ["Measurement", "KPI trajectory, baseline, uplift and next-step recommendations."]],
      },
    search: l === "pl"
      ? {
        eyebrow: "Kontekst AI search",
        title: "Wyszukiwanie, które rozumie intencję zakupu",
        text: "AI Search pomaga klientom szybciej przejść od potrzeby do produktu, a zespołowi lepiej mierzyć jakość discovery.",
        items: [["Zapytania", "Język naturalny, synonimy, błędy, potrzeby i kontekst zachowania klienta."], ["Wyniki", "Ranking, personalizacja, rekomendacje i ekspozycja produktów."], ["Efekt", "Mniej pustych wyników, wyższa konwersja search i krótsza droga do zakupu."]],
      }
      : {
        eyebrow: "AI search context",
        title: "Search that understands purchase intent",
        text: "AI Search helps customers move from need to product faster while teams measure product discovery quality.",
        items: [["Queries", "Natural language, synonyms, mistakes, needs and behavioral context."], ["Results", "Ranking, personalization, recommendations and product exposure."], ["Outcome", "Fewer empty results, higher search conversion and shorter path to purchase."]],
      },
    "marketing-automation-2-0": l === "pl"
      ? {
        eyebrow: "Kontekst automation",
        title: "Od kampanii do systemu orkiestracji decyzji",
        text: "Marketing Automation 2.0 porządkuje scenariusze lifecycle i łączy je z danymi CDP, predykcjami oraz kanałami komunikacji.",
        items: [["Scenariusze", "Onboarding, porzucony koszyk, win-back, cross-sell, retencja i zgody."], ["Orkiestracja", "Trigger points, segmenty, A/B testy, predykcje i kanały aktywacji."], ["Efekt", "Większa skuteczność kampanii i mniej ręcznego zarządzania komunikacją."]],
      }
      : {
        eyebrow: "Automation context",
        title: "From campaigns to a decision orchestration system",
        text: "Marketing Automation 2.0 organizes lifecycle scenarios and connects them with CDP data, predictions and communication channels.",
        items: [["Scenarios", "Onboarding, abandoned cart, win-back, cross-sell, retention and consents."], ["Orchestration", "Trigger points, segments, A/B tests, predictions and activation channels."], ["Outcome", "Higher campaign effectiveness and less manual communication management."]],
      },
  };
  return configs[page.slug] || configs[page.visualKey] || fallback;
}

function offerContextSection(page) {
  const l = lang();
  const context = offerContextData(page, l);
  return section({
    variant: "lightBlue",
    children: `<div class="grid items-center gap-10 lg:grid-cols-12">
      <div class="lg:col-span-5">
        ${badge(context.eyebrow)}
        <h2 class="mt-5 text-4xl font-semibold leading-tight">${context.title}</h2>
        <p class="mt-5 text-lg leading-8 text-[#595959]">${context.text}</p>
        <div class="mt-8 space-y-4">${context.items.map(([title, text], index) => `<article class="rounded-xl border border-[#E6EAF2] bg-white p-5 shadow-soft">
          <div class="flex items-start gap-4">
            <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F4F6FD] text-sm font-semibold text-[#015BFE]">0${index + 1}</span>
            <div><h3 class="text-xl font-semibold">${title}</h3><p class="mt-2 text-sm leading-6 text-[#595959]">${text}</p></div>
          </div>
        </article>`).join("")}</div>
      </div>
      <div class="lg:col-span-7">
        <div class="minimal-illustration aspect-[16/10] rounded-xl shadow-soft">
          <img src="${generatedOfferVisual(page)}" alt="" class="h-full w-full object-cover opacity-95 mix-blend-multiply" />
        </div>
      </div>
    </div>`,
  });
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
    ${offerContextSection(page)}
    ${section({ children: `<div class="mx-auto max-w-3xl text-center"><h2 class="text-4xl font-semibold leading-tight">${l === "pl" ? "Wpływ na biznes" : "Business impact"}</h2><p class="mt-5 text-lg leading-8 text-[#595959]">${l === "pl" ? "Każdą usługę projektujemy pod mierzalne KPI, a nie tylko pod uruchomienie narzędzia." : "Every service is designed around measurable KPIs, not just the launch of another tool."}</p></div><div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">${page.outcomes.map((x) => `<div class="rounded-xl bg-white p-6 shadow-soft"><div class="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F4F6FD] text-[#015BFE]">${icon("target", "h-5 w-5")}</div><div class="mt-5 text-sm text-[#015BFE]">KPI</div><h3 class="mt-2 text-xl font-medium">${x}</h3></div>`).join("")}</div>` })}
    ${page.integrations ? section({ children: `<div class="max-w-3xl">${badge(l === "pl" ? "Integracje" : "Integrations")}<h2 class="mt-5 text-4xl font-semibold leading-tight">${l === "pl" ? "Łączymy CDP z Twoim stackiem technologicznym" : "We connect CDP with your technology stack"}</h2><p class="mt-5 text-lg leading-8 text-[#595959]">${l === "pl" ? "Pracujemy z narzędziami CRM, e-commerce, ERP, komunikacji, analityki, reklam, hurtowni danych i systemami custom." : "We work with CRM, e-commerce, ERP, communication, analytics, advertising, data warehouse and custom systems."}</p></div><div class="mt-10 flex flex-wrap gap-3">${page.integrations.map((x) => `<span class="rounded-full border border-[#E6EAF2] bg-white px-4 py-2 text-sm text-[#595959]">${x}</span>`).join("")}</div>` }) : ""}
    ${section({ children: `<div class="mx-auto max-w-3xl text-center"><h2 class="text-4xl font-semibold leading-tight">${l === "pl" ? "Proces wdrożenia" : "Implementation process"}</h2><p class="mt-5 text-lg leading-8 text-[#595959]">${l === "pl" ? "Zaczynamy od diagnozy, wybieramy scenariusze, wdrażamy technologię i optymalizujemy wynik." : "We start with diagnosis, choose scenarios, implement the technology and optimize the result."}</p></div><div class="mt-12 grid gap-6 lg:grid-cols-4">${(l === "pl" ? ["Audyt", "Strategia", "Implementacja", "Optymalizacja"] : ["Audit", "Strategy", "Implementation", "Optimization"]).map((x, i) => `<div class="rounded-xl border border-[#E6EAF2] bg-white p-6"><div class="flex items-center justify-between gap-4"><div class="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F4F6FD] text-[#015BFE]">${icon(processIcons[i], "h-5 w-5")}</div><span class="text-sm text-[#015BFE]">0${i + 1}</span></div><h3 class="mt-5 text-xl font-medium">${x}</h3><p class="mt-3 text-sm leading-6 text-[#595959]">${l === "pl" ? "Etap dopasowany do danych, zespołu i celów biznesowych klienta." : "A stage tailored to the client's data, team and business goals."}</p></div>`).join("")}</div>` })}
    ${section({ variant: "muted", children: `<div class="grid gap-8 lg:grid-cols-12"><div class="lg:col-span-4"><h2 class="text-4xl font-semibold leading-tight">FAQ</h2></div><div class="space-y-4 lg:col-span-8">${faq.map(([q, a]) => `<details class="rounded-xl border border-[#E6EAF2] bg-white p-6" open><summary class="cursor-pointer text-xl font-medium">${q}</summary><p class="mt-4 text-base leading-7 text-[#595959]">${a}</p></details>`).join("")}</div></div>` })}
    ${ctaSection()}
  </main>`;
}

function designComponentPreview({ title, description, children, dark = false, wide = false }) {
  return `<article class="rounded-xl border border-[#E6EAF2] bg-white p-5 shadow-soft md:p-6 ${wide ? "lg:col-span-2" : ""}">
    <div class="mb-5 flex flex-wrap items-start justify-between gap-4">
      <div>
        <p class="text-sm font-semibold uppercase tracking-wide text-[#015BFE]">Component</p>
        <h2 class="mt-2 text-2xl font-semibold leading-tight">${title}</h2>
      </div>
      <p class="max-w-sm text-sm leading-6 text-[#595959]">${description}</p>
    </div>
    <div class="${dark ? "rounded-xl bg-[#0F1E34] p-5 text-white" : "rounded-xl border border-[#E6EAF2] bg-[#FAFAFA] p-5"}">${children}</div>
  </article>`;
}

function designSystemSectionsPage() {
  const l = lang();
  const heroTitle = 'Know-how. Precision.<br /><span class="text-gradient-highlight">Synerise</span> at scale.';
  const previews = [
    designComponentPreview({
      title: "Hero title effect",
      description: l === "pl" ? "Animowany tytuł hero z gradientowym akcentem i wariantem dark." : "Animated hero title with a gradient accent and dark variant.",
      dark: true,
      wide: true,
      children: `<div class="hero-shell hero-shell--dark overflow-hidden rounded-xl p-8">
        <div class="relative z-10 max-w-2xl">${badge("#1 Synerise Partner", true)}
          <h2 class="hero-title hero-title--effect mt-6 text-5xl font-semibold leading-none" data-hero-title="Know-how. Precision. Synerise at scale."><span class="hero-title-copy">${heroTitle}</span></h2>
          <p class="hero-lead mt-5 max-w-xl text-base leading-7">Implementation expertise, certifications and frameworks shown as a premium first-screen system.</p>
        </div>
      </div>`,
    }),
    designComponentPreview({
      title: "Section header",
      description: l === "pl" ? "Nagłówek sekcji z badge, numerem, tytułem i opisem." : "Section header with badge, number, title and supporting copy.",
      wide: true,
      children: homeHeader({ eyebrow: "Challenges", num: "01", title: "Your challenges, our solutions", text: "A reusable heading pattern for long homepage sections." }),
    }),
    designComponentPreview({
      title: "Logo strip",
      description: l === "pl" ? "Pas z logotypami albo segmentami klientów." : "Logo or customer-segment strip.",
      wide: true,
      children: `<p class="text-center text-sm font-semibold uppercase tracking-[0.13em] text-[#595959]">Trusted by AI & CX leaders</p>
      <div class="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">${["Synerise", "Retail", "Banking", "Telco", "E-commerce", "AI"].map((x) => `<strong class="text-2xl font-semibold text-[#0F1E34]/50">${x}</strong>`).join("")}</div>`,
    }),
    designComponentPreview({
      title: "Problem / solution card",
      description: l === "pl" ? "Karta do sekcji wyzwań klienta." : "Card for customer challenge sections.",
      children: `<article class="rounded-xl border border-[#E6EAF2] bg-white p-6">
        <div class="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[#595959]">${icon("triangle-alert", "h-4 w-4")} Problem</div>
        <p class="mt-3 text-base leading-7 text-[#595959]">Dozens of systems to connect: ERP, CRM, POS.</p>
        <div class="my-5 h-px bg-[#E6EAF2]"></div>
        <div class="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[#015BFE]">${icon("circle-check", "h-4 w-4")} Solution</div>
        <p class="mt-3 text-base leading-7 text-[#0F1E34]">150+ pre-built integrations, API-first approach.</p>
      </article>`,
    }),
    designComponentPreview({
      title: "Service card",
      description: l === "pl" ? "Karta kompetencji używana w grupach usług." : "Capability card used in service groups.",
      children: clientCard("Data Strategy & CDP Architecture", "Data audit, single customer view and governance.", "database"),
    }),
    designComponentPreview({
      title: "Dark framework card",
      description: l === "pl" ? "Karta frameworku na ciemnym tle." : "Framework card for dark sections.",
      dark: true,
      children: `<article class="rounded-xl border border-white/12 bg-white/[0.03] p-7">
        <div class="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#41DBC3]">${icon("gift", "h-5 w-5")}</div>
        <h3 class="text-2xl font-semibold text-white">myRewards Loyalty Program</h3>
        <p class="mt-4 text-base leading-7 text-white/68">Multi-tier membership, points engine, gamification and AI personalization.</p>
      </article>`,
    }),
    designComponentPreview({
      title: "Visual system card",
      description: l === "pl" ? "Karta z ilustracją AI i tagami zastosowań." : "Card with AI illustration and use-case tags.",
      children: `<article class="rounded-xl border border-[#E6EAF2] bg-white p-5 shadow-soft">
        <div class="minimal-illustration aspect-[16/11] rounded-xl"><img src="${heroVisual("personalization", "light")}" alt="" class="h-full w-full object-cover opacity-85 mix-blend-multiply" /></div>
        <div class="p-2 pt-6"><h3 class="text-2xl font-semibold leading-tight">AI personalization</h3><p class="mt-3 text-base leading-7 text-[#595959]">Recommendations and Next Best Offer logic connected to touchpoints.</p><div class="mt-5 flex flex-wrap gap-2">${["Recommendations", "Scoring", "Dynamic content"].map((tag) => `<span class="rounded-full bg-[#F4F6FD] px-3 py-1 text-xs font-medium text-[#015BFE]">${tag}</span>`).join("")}</div></div>
      </article>`,
    }),
    designComponentPreview({
      title: "Integration tile",
      description: l === "pl" ? "Karta integracji z chipami technologii." : "Integration card with technology chips.",
      children: `<article class="rounded-xl border border-[#E6EAF2] bg-white p-6">
        <div class="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F4F6FD] text-[#015BFE]">${icon("shopping-cart", "h-5 w-5")}</div>
        <h3 class="text-xl font-semibold">E-commerce</h3>
        <div class="mt-4 flex flex-wrap gap-2">${["Magento", "Shopify", "SAP Commerce"].map((chip) => `<span class="rounded-full bg-[#F4F6FD] px-3 py-1 text-xs font-medium text-[#015BFE]">${chip}</span>`).join("")}</div>
        <p class="mt-4 text-sm leading-6 text-[#595959]">Real-time cart, transactions, catalog and inventory sync.</p>
      </article>`,
    }),
    designComponentPreview({
      title: "Result stat",
      description: l === "pl" ? "Karta liczby dla sekcji wyników." : "Metric card for performance sections.",
      children: `<div class="rounded-xl bg-white p-6 text-center shadow-soft"><div class="text-5xl font-semibold text-[#015BFE]">95%</div><p class="mt-3 text-sm leading-6 text-[#595959]">Client satisfaction</p></div>`,
    }),
    designComponentPreview({
      title: "CX framework pillar",
      description: l === "pl" ? "Kolumna warstwy frameworku z listą funkcji." : "Framework pillar with a feature checklist.",
      children: `<article class="relative rounded-xl border border-[#015BFE] bg-[#F4F6FD] p-7">
        <div class="absolute right-5 top-5 rounded-full bg-[#015BFE] px-3 py-1 text-xs font-medium text-white">Most important</div>
        <div class="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#015BFE] shadow-soft">${icon("brain", "h-5 w-5")}</div>
        <span class="text-sm font-semibold uppercase tracking-wide text-[#015BFE]">Layer II</span>
        <h3 class="mt-2 text-2xl font-semibold">Intelligence Layer</h3>
        <ul class="mt-5 space-y-3 text-sm leading-6 text-[#595959]">${["Segmentation", "Next Best Action", "Predictive models"].map((item) => `<li class="flex gap-2">${icon("check", "mt-1 h-4 w-4 shrink-0 text-[#015BFE]")}<span>${item}</span></li>`).join("")}</ul>
      </article>`,
    }),
    designComponentPreview({
      title: "Migration step",
      description: l === "pl" ? "Karta kroku procesu migracji." : "Step card for migration or process sections.",
      children: `<article class="rounded-xl border border-[#E6EAF2] bg-white p-7">
        <span class="text-sm font-semibold uppercase tracking-wide text-[#015BFE]">Step 02</span>
        <h3 class="mt-2 text-2xl font-semibold">Parallel Run</h3>
        <ul class="mt-5 space-y-3 text-sm leading-6 text-[#595959]">${["Historical data import", "Workspace configuration", "Campaign validation"].map((item) => `<li class="flex gap-2">${icon("check", "mt-1 h-4 w-4 shrink-0 text-[#015BFE]")}<span>${item}</span></li>`).join("")}</ul>
      </article>`,
    }),
    designComponentPreview({
      title: "Case study card",
      description: l === "pl" ? "Karta case study z KPI, ilustracją, chartem i tagami." : "Case study card with KPIs, illustration, chart and tags.",
      wide: true,
      children: `<article class="mx-auto max-w-xl rounded-xl border border-[#E6EAF2] bg-white p-6 shadow-soft">
        <div class="minimal-illustration mb-6 aspect-[16/10] rounded-xl"><img src="${heroVisual("revenue", "light")}" alt="" class="h-full w-full object-cover opacity-85 mix-blend-multiply" /></div>
        ${badge("Banking / Finance")}
        <h3 class="mt-5 text-3xl font-semibold">Digital Bank</h3>
        <p class="mt-4 text-base leading-7 text-[#595959]">AI-powered Next Best Offer engine for financial products.</p>
        <div class="mt-6 grid grid-cols-3 gap-3">${[["+156%", "Cross-sell"], ["-34%", "Churn"], ["24/7", "Detection"]].map(([value, label]) => `<div class="rounded-xl bg-[#F4F6FD] p-3 text-center"><div class="text-2xl font-semibold text-[#015BFE]">${value}</div><div class="mt-1 text-xs leading-4 text-[#595959]">${label}</div></div>`).join("")}</div>
        <div class="mt-6">${chartCanvas({ type: "bar", labels: ["Cross-sell", "Churn", "Security"], series: [{ label: "Digital Bank", data: [156, 34, 100], color: "blue" }], ariaLabel: "Case study KPI chart", compact: true })}</div>
        <div class="mt-6 flex flex-wrap gap-2">${["Next Best Offer", "AI Models", "Real-time"].map((item) => `<span class="rounded-full border border-[#E6EAF2] px-3 py-1 text-xs text-[#595959]">${item}</span>`).join("")}</div>
      </article>`,
    }),
    designComponentPreview({
      title: "Engagement model",
      description: l === "pl" ? "Pozioma karta modelu współpracy." : "Horizontal engagement-model card.",
      wide: true,
      children: `<article class="grid gap-5 rounded-xl border border-[#015BFE] bg-[#F4F6FD] p-6 lg:grid-cols-[72px_1fr_260px] lg:items-center">
        <div class="text-3xl font-semibold text-[#015BFE]">02</div>
        <div><div class="flex flex-wrap items-center gap-3"><h3 class="text-2xl font-semibold">Full Implementation</h3><span class="rounded-full bg-white px-3 py-1 text-xs font-medium text-[#015BFE]">10-16 weeks</span></div><p class="mt-3 text-base leading-7 text-[#595959]">End-to-end implementation from data integration to team training.</p><div class="mt-4 flex flex-wrap gap-2">${["Data Integration", "AI", "Team Handover"].map((tag) => `<span class="rounded-full border border-[#E6EAF2] bg-white px-3 py-1 text-xs text-[#595959]">${tag}</span>`).join("")}</div></div>
        <div class="rounded-xl bg-white p-4 text-sm leading-6 text-[#595959]"><strong class="block text-[#0F1E34]">Your situation</strong>Implementing from scratch or migrating from another platform.</div>
      </article>`,
    }),
    designComponentPreview({
      title: "FAQ item",
      description: l === "pl" ? "Akordeon FAQ dla długich landingów." : "FAQ accordion item for long landing pages.",
      children: `<details class="rounded-xl border border-[#E6EAF2] bg-white p-6" open><summary class="cursor-pointer text-xl font-semibold text-[#0F1E34]">Do you offer post-implementation support?</summary><p class="mt-4 text-base leading-7 text-[#595959]">Yes: Managed Services covering support, campaign management and continuous optimization.</p></details>`,
    }),
    designComponentPreview({
      title: "Final CTA",
      description: l === "pl" ? "Ciemny pasek CTA z dwoma akcjami kontaktowymi." : "Dark CTA band with two contact actions.",
      dark: true,
      wide: true,
      children: `<div class="grid items-center gap-8 lg:grid-cols-12">
        <div class="lg:col-span-7">${badge("Get started", true)}<h3 class="mt-5 text-4xl font-semibold leading-tight text-white">Accelerate your Synerise project</h3><p class="mt-4 max-w-2xl text-lg leading-8 text-white/72">Book a free consultation and get an implementation approach.</p></div>
        <div class="flex flex-wrap gap-4 lg:col-span-5 lg:justify-end"><a href="tel:+48123456789" class="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-base font-medium text-[#05070D]">${icon("phone", "h-4 w-4")} +48 123 456 789</a><a href="mailto:kontakt@persooa.com" class="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/16 px-6 text-base font-medium text-white transition hover:bg-white hover:text-[#05070D]">${icon("mail", "h-4 w-4")} kontakt@persooa.com</a></div>
      </div>`,
    }),
  ];

  return `<main class="route-view">
    ${section({ children: `<div class="max-w-3xl">${badge(l === "pl" ? "Sekcje" : "Sections")}<h1 class="mt-6 text-5xl font-semibold leading-none md:text-6xl">${l === "pl" ? "Komponenty sekcyjne homepage" : "Homepage section components"}</h1><p class="mt-6 text-lg leading-8 text-[#595959]">${l === "pl" ? "Katalog nowych elementów dodanych do strony głównej. Każdy przykład jest opisany jako komponent do przeniesienia do finalnego Astro albo Next.js." : "Catalog of the new elements added to the homepage. Each example is documented as a component for the final Astro or Next.js build."}</p></div><div class="mt-12 grid gap-6 lg:grid-cols-2">${previews.join("")}</div>` })}
  </main>`;
}

function designSystemPage() {
  const l = lang();
  return `<main class="route-view">
    ${section({ children: `<div class="max-w-3xl">${badge("Design system")}<h1 class="mt-6 text-5xl font-semibold leading-none md:text-6xl">${l === "pl" ? "Biblioteka UI Persooa" : "Persooa UI library"}</h1><p class="mt-6 text-lg leading-8 text-[#595959]">${l === "pl" ? "Roboczy katalog komponentów do pokazywania klientowi i przenoszenia do finalnego Astro albo Next.js. Tutaj zbieramy charty, atomy UI i reguły stylowania oparte o tokeny brandu." : "A working component catalog for client review and migration into the final Astro or Next.js build. It collects charts, UI atoms and styling rules based on brand tokens."}</p></div><div class="mt-12 grid gap-6 md:grid-cols-2">${designSystemTiles()}</div>` })}
    ${section({ variant: "lightBlue", children: `<div class="grid gap-8 lg:grid-cols-12"><div class="lg:col-span-5">${badge(l === "pl" ? "Zasada" : "Rule")}<h2 class="mt-5 text-4xl font-semibold leading-tight">${l === "pl" ? "Jedno źródło stylu dla danych i UI" : "One source of style for data and UI"}</h2></div><div class="lg:col-span-7"><p class="text-lg leading-8 text-[#595959]">${l === "pl" ? "Komponenty używają tych samych kolorów, radiusów, cieni, typografii i animacji. Dzięki temu nowa sekcja z wykresem albo atomem UI nie wygląda jak doklejony element z innej aplikacji." : "Components use the same colors, radii, shadows, typography and motion. A new chart or UI atom should not look pasted in from another app."}</p></div></div>` })}
  </main>`;
}

function designSystemChartsPage() {
  const l = lang();
  const labels = l === "pl" ? ["Start", "30 dni", "60 dni", "90 dni"] : ["Start", "30 days", "60 days", "90 days"];
  const chartCards = [
    {
      title: l === "pl" ? "Line / Area growth" : "Line / Area growth",
      description: l === "pl" ? "Trend wzrostu KPI, ROI albo przychodu z porównaniem do bazowego scenariusza." : "KPI, ROI or revenue growth trend compared with a baseline scenario.",
      type: "line",
      labels,
      series: [
        { label: l === "pl" ? "Scenariusze Persooa" : "Persooa scenarios", data: [100, 124, 153, 189], color: "blue", fill: true },
        { label: l === "pl" ? "Bazowy trend" : "Baseline trend", data: [100, 104, 108, 112], color: "mint", dash: true },
      ],
    },
    {
      title: l === "pl" ? "Bar KPI comparison" : "Bar KPI comparison",
      description: l === "pl" ? "Porównanie metryk w jednym momencie: AOV, ARPU, retencja, konwersja." : "Compare metrics at one point in time: AOV, ARPU, retention, conversion.",
      type: "bar",
      labels: ["AOV", "ARPU", l === "pl" ? "Retencja" : "Retention", l === "pl" ? "Konwersja" : "Conversion"],
      series: [{ label: "KPI", data: [45, 35, 28, 30], color: "blue" }],
    },
    {
      title: l === "pl" ? "Donut share" : "Donut share",
      description: l === "pl" ? "Udział kanałów, segmentów albo statusów scenariuszy bez ciężkiego dashboardowego wyglądu." : "Channel, segment or scenario status share without a heavy dashboard feel.",
      type: "donut",
      labels: [l === "pl" ? "Email" : "Email", "Web push", "SMS", "App"],
      series: [{ label: l === "pl" ? "Kanały" : "Channels", data: [42, 26, 18, 14], colors: ["blue", "mint", "violet", "dark"] }],
      compact: true,
    },
    {
      title: "Sparkline",
      description: l === "pl" ? "Mały trend do kart metryk, case studies i podsumowań." : "Small trend for metric cards, case studies and summaries.",
      type: "sparkline",
      labels: ["1", "2", "3", "4", "5", "6"],
      series: [{ label: "Trend", data: [18, 22, 21, 28, 34, 39], color: "mint", fill: true }],
      compact: true,
    },
  ];
  return `<main class="route-view">
    ${section({ children: `<div class="max-w-3xl">${badge("Charts")}<h1 class="mt-6 text-5xl font-semibold leading-none md:text-6xl">${l === "pl" ? "Biblioteka wykresów" : "Chart library"}</h1><p class="mt-6 text-lg leading-8 text-[#595959]">${l === "pl" ? "Przykłady typów chartów, które można wkładać do sekcji. Wszystkie używają tokenów Persooa, stabilnej wysokości kontenera i spokojnej animacji." : "Examples of chart types that can be dropped into sections. They all use Persooa tokens, stable container height and calm animation."}</p></div><div class="mt-12 grid gap-6 lg:grid-cols-2">${chartCards.map(chartDemoCard).join("")}</div>` })}
    ${section({ variant: "dark", compact: true, children: `<div class="grid gap-8 lg:grid-cols-12"><div class="lg:col-span-5">${badge(l === "pl" ? "API prototypu" : "Prototype API", true)}<h2 class="mt-5 text-4xl font-semibold leading-tight">${l === "pl" ? "Dodawanie kolejnego chartu" : "Adding another chart"}</h2></div><div class="lg:col-span-7"><p class="text-lg leading-8 text-white/72">${l === "pl" ? "W nowej sekcji użyj canvas z data-chart=\"persooa-chart\", data-chart-type i danymi JSON. Inicjalizacja sama dobierze kolory, font, siatkę, animację oraz fallback." : "Use a canvas with data-chart=\"persooa-chart\", data-chart-type and JSON data. Initialization handles colors, font, grid, animation and fallback."}</p></div></div>` })}
  </main>`;
}

function designSystemAtomsPage() {
  const l = lang();
  const atomRows = [
    {
      title: "Button primary",
      light: button(l === "pl" ? "Zapytaj o projekt" : "Ask about a project", l === "pl" ? "/kontakt" : "/en/contact", "primary", "send"),
      dark: `<a href="${href(l === "pl" ? "/kontakt" : "/en/contact")}" class="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-base font-medium text-[#05070D] transition hover:bg-[#F4F6FD]"><span>${l === "pl" ? "Zapytaj o projekt" : "Ask about a project"}</span>${icon("send", "h-4 w-4")}</a>`,
    },
    {
      title: "Button secondary",
      light: button(l === "pl" ? "Zobacz ROI" : "View ROI", l === "pl" ? "/oferta/roi-w-90dni" : "/en/offer/roi-in-90-days", "secondary"),
      dark: `<a href="${href(l === "pl" ? "/oferta/roi-w-90dni" : "/en/offer/roi-in-90-days")}" class="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/16 px-6 text-base font-medium text-white transition hover:bg-white hover:text-[#05070D]"><span>${l === "pl" ? "Zobacz ROI" : "View ROI"}</span>${icon("arrow-right", "h-4 w-4")}</a>`,
    },
    {
      title: "Badge",
      light: badge(l === "pl" ? "Oferta" : "Offer"),
      dark: badge(l === "pl" ? "Oferta" : "Offer", true),
    },
    {
      title: "Icon tile",
      light: `<div class="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F4F6FD] text-[#015BFE]">${icon("sparkles", "h-5 w-5")}</div>`,
      dark: `<div class="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#41DBC3]">${icon("sparkles", "h-5 w-5")}</div>`,
    },
    {
      title: "Stat",
      light: `<div><div class="text-4xl font-semibold leading-none text-[#015BFE]">+45%</div><p class="mt-3 text-sm leading-6 text-[#595959]">${l === "pl" ? "wzrost AOV" : "AOV growth"}</p></div>`,
      dark: `<div><div class="text-4xl font-semibold leading-none text-white">+45%</div><p class="mt-3 text-sm leading-6 text-white/64">${l === "pl" ? "wzrost AOV" : "AOV growth"}</p></div>`,
    },
    {
      title: "Input",
      light: `<label class="block"><span class="mb-2 block text-sm font-medium">${l === "pl" ? "E-mail" : "Email"}</span><input class="h-12 w-full rounded-lg border border-[#E6EAF2] px-4 outline-none focus:border-[#015BFE] focus:ring-4 focus:ring-[#015BFE]/10" placeholder="hello@persooa.com" /></label>`,
      dark: `<label class="block"><span class="mb-2 block text-sm font-medium text-white">${l === "pl" ? "E-mail" : "Email"}</span><input class="h-12 w-full rounded-lg border border-white/16 bg-white/8 px-4 text-white outline-none placeholder:text-white/42 focus:border-white focus:ring-4 focus:ring-white/10" placeholder="hello@persooa.com" /></label>`,
    },
  ];
  const colorTokens = [
    ["Brand Blue", "#015BFE"],
    ["Brand Dark", "#0F1E34"],
    ["Light Blue", "#F4F6FD"],
    ["Light Grey", "#FAFAFA"],
    ["Grey", "#595959"],
    ["Border", "#E6EAF2"],
    ["Highlight Mint", "#41DBC3"],
    ["Highlight Violet", "#4E3FF6"],
  ];
  return `<main class="route-view">
    ${section({ children: `<div class="max-w-3xl">${badge(l === "pl" ? "Atomy UI" : "UI atoms")}<h1 class="mt-6 text-5xl font-semibold leading-none md:text-6xl">${l === "pl" ? "Podstawowe elementy interfejsu" : "Base interface elements"}</h1><p class="mt-6 text-lg leading-8 text-[#595959]">${l === "pl" ? "Każdy atom ma wariant na jasne i ciemne tło, żeby dało się bezpiecznie składać sekcje white, light-blue, blue i dark." : "Each atom has light and dark background variants so sections can be composed safely across white, light-blue, blue and dark contexts."}</p></div><div class="mt-12 space-y-6">${atomRows.map((atom) => `<article class="rounded-xl border border-[#E6EAF2] bg-white p-5 md:p-6"><h2 class="text-xl font-medium">${atom.title}</h2><div class="mt-5 grid gap-4 lg:grid-cols-2"><div class="rounded-xl border border-[#E6EAF2] bg-white p-5"><p class="mb-5 text-sm font-medium text-[#015BFE]">Light background</p><div class="min-h-24">${atom.light}</div></div><div class="rounded-xl bg-[#0F1E34] p-5 text-white"><p class="mb-5 text-sm font-medium text-white/72">Dark background</p><div class="min-h-24">${atom.dark}</div></div></div></article>`).join("")}</div>` })}
    ${section({ variant: "lightBlue", children: `<div class="max-w-3xl">${badge(l === "pl" ? "Tokeny" : "Tokens")}<h2 class="mt-5 text-4xl font-semibold leading-tight">${l === "pl" ? "Kolory, gradient i typografia" : "Colors, gradient and typography"}</h2><p class="mt-5 text-lg leading-8 text-[#595959]">${l === "pl" ? "To są bazowe wartości, z których korzystają charty, atomy i sekcje." : "These are the base values used by charts, atoms and sections."}</p></div><div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">${colorTokens.map(([name, value]) => `<div class="rounded-xl bg-white p-5 shadow-soft"><div class="h-16 rounded-lg border border-[#E6EAF2]" style="background:${value}"></div><h3 class="mt-5 text-lg font-medium">${name}</h3><p class="mt-2 text-sm text-[#595959]">${value}</p></div>`).join("")}</div><div class="mt-6 grid gap-6 lg:grid-cols-2"><div class="rounded-xl bg-white p-6 shadow-soft"><div class="h-20 rounded-lg" style="background:linear-gradient(90deg, #41DBC3 0%, #4E3FF6 100%)"></div><h3 class="mt-5 text-xl font-medium">${l === "pl" ? "Gradient tekstowy" : "Text gradient"}</h3><p class="mt-2 text-sm leading-6 text-[#595959]">linear-gradient(90deg, #41DBC3 0%, #4E3FF6 100%)</p><p class="mt-5 text-4xl font-semibold leading-tight"><span class="text-gradient-highlight">ROI w 90 dni</span></p></div><div class="rounded-xl bg-white p-6 shadow-soft"><h3 class="text-xl font-medium">${l === "pl" ? "Font" : "Font"}</h3><p class="mt-2 text-sm leading-6 text-[#595959]">Kanit / system-ui fallback</p><div class="mt-6 space-y-4"><p class="text-5xl font-semibold leading-none">Kanit Semibold</p><p class="text-2xl font-medium leading-tight">Kanit Medium</p><p class="text-lg leading-8 text-[#595959]">Kanit Regular. ${l === "pl" ? "Używany w leadach, opisach kart i dłuższych akapitach." : "Used for leads, card descriptions and longer body copy."}</p></div></div></div>` })}
  </main>`;
}

function aboutPage() {
  const l = lang();
  return `<main class="route-view">
    ${simpleHero(l === "pl" ? "O nas" : "About", l === "pl" ? "Największa agencja pracująca z Synerise" : "A Synerise-focused growth agency", l === "pl" ? "Łączymy strategię, wdrożenia, dane i automatyzację, aby e-commerce szybciej przechodził od pomysłu do mierzalnego wzrostu." : "We combine strategy, implementation, data and automation so e-commerce teams can move from idea to measurable growth faster.", "hero")}
    ${section({ children: `<div class="grid grid-cols-1 items-start justify-between gap-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20"><div><h2 class="text-4xl font-semibold leading-tight md:text-5xl">${l === "pl" ? "Budujemy systemy wzrostu na styku strategii, danych i technologii." : "We build growth systems where strategy, data and technology meet."}</h2></div><div><p class="text-lg leading-8 text-[#595959]">${l === "pl" ? "Persooa pracuje z e-commerce, które chcą przejść od kampanii i narzędzi do mierzalnego wpływu na przychód. Łączymy consulting, wdrożenia Synerise, CDP, AI agents i marketing automation w jeden proces odpowiedzialny za wynik." : "Persooa works with e-commerce teams that want to move from tools and campaigns to measurable revenue impact. We combine consulting, Synerise implementation, CDP, AI agents and marketing automation into one outcome-driven process."}</p></div></div>` })}
    ${section({ variant: "lightBlue", children: `<div class="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20"><div class="order-2 overflow-hidden rounded-2xl bg-white shadow-soft md:order-1"><img src="../assets/source/photos/persooa1.png" alt="Persooa team" class="aspect-[4/3] w-full object-cover" /></div><div class="order-1 md:order-2">${badge(l === "pl" ? "Jak pracujemy" : "How we work")}<h2 class="mt-5 text-4xl font-semibold leading-tight">${l === "pl" ? "Od diagnozy do aktywacji scenariuszy." : "From diagnosis to scenario activation."}</h2><p class="mt-5 text-lg leading-8 text-[#595959]">${l === "pl" ? "Najpierw porządkujemy cele, dane i ograniczenia technologiczne. Potem wybieramy scenariusze o największym potencjale, wdrażamy je w stacku klienta i optymalizujemy pod KPI." : "We first organize goals, data and technology constraints. Then we choose the highest-potential scenarios, implement them in the client's stack and optimize them against KPIs."}</p></div></div>` })}
    ${section({ children: `<div class="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20"><div>${badge(l === "pl" ? "Kompetencje" : "Capabilities")}<h2 class="mt-5 text-4xl font-semibold leading-tight">${l === "pl" ? "Zespół skupiony na Synerise, AI i e-commerce." : "A team focused on Synerise, AI and e-commerce."}</h2><p class="mt-5 text-lg leading-8 text-[#595959]">${l === "pl" ? "W jednym miejscu łączymy strategię wzrostu, architekturę danych, wdrożenia, automatyzację i obsługę klienta. Dzięki temu decyzje biznesowe i technologiczne nie rozjeżdżają się w trakcie projektu." : "We bring growth strategy, data architecture, implementation, automation and client success into one place, keeping business and technology decisions aligned throughout the project."}</p></div><div class="grid gap-4 sm:grid-cols-2">${["Strategy", "CDP", "AI Agents", "Automation"].map((item, i) => `<div class="rounded-xl border border-[#E6EAF2] bg-white p-6"><div class="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F4F6FD] text-[#015BFE]">${icon(["target", "database", "bot", "workflow"][i], "h-5 w-5")}</div><h3 class="mt-5 text-xl font-medium">${item}</h3></div>`).join("")}</div></div>` })}
    ${section({ children: `<div class="mx-auto mb-12 max-w-2xl text-center md:mb-18 lg:mb-20">${badge("Team")}<h2 class="mt-5 text-5xl font-semibold leading-tight md:text-6xl">${l === "pl" ? "Our team" : "Our team"}</h2><p class="mt-5 text-lg leading-8 text-[#595959]">${l === "pl" ? "Pełny zespół z dostępnych materiałów zdjęciowych Persooa." : "The full team based on the available Persooa photo assets."}</p></div><div class="grid grid-cols-1 items-start justify-center gap-x-8 gap-y-12 md:grid-cols-3 md:gap-y-16 lg:gap-x-12">${teamPhotos.map((photo) => teamCard(photo)).join("")}</div><div class="mx-auto mt-14 w-full max-w-md text-center md:mt-20 lg:mt-24"><h3 class="text-3xl font-semibold leading-tight md:text-4xl">${l === "pl" ? "We're hiring!" : "We're hiring!"}</h3><p class="mt-4 text-lg leading-8 text-[#595959]">${l === "pl" ? "Szukamy osób, które chcą budować technologię i procesy realnie wpływające na wzrost e-commerce." : "We are looking for people who want to build technology and processes that create real e-commerce growth."}</p><div class="mt-6">${button(l === "pl" ? "Open positions" : "Open positions", l === "pl" ? "/o-nas" : "/en/about", "secondary", "briefcase-business")}</div></div>` })}
    ${section({ children: `<div class="grid grid-cols-1 items-start justify-between gap-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20"><div><h2 class="text-4xl font-semibold leading-tight md:text-5xl">${l === "pl" ? "Dołącz do zespołu, który dowozi wzrost." : "Join a team that delivers growth."}</h2></div><div><p class="text-lg leading-8 text-[#595959]">${l === "pl" ? "Sekcja stanowisk odzwierciedla układ z Relume: karty z kategorią, lokalizacją, typem zatrudnienia i CTA. Finalne oferty pracy wymagają potwierdzenia przed publikacją." : "The positions section follows the Relume layout: cards with category, location, employment type and CTA. Final job openings should be confirmed before publishing."}</p></div></div>` })}
    ${section({ variant: "lightBlue", children: `<div class="mx-auto mb-12 max-w-2xl text-center md:mb-18 lg:mb-20">${badge(l === "pl" ? "Kariera" : "Careers")}<h2 class="mt-5 text-5xl font-semibold leading-tight md:text-6xl">${l === "pl" ? "Open Positions" : "Open Positions"}</h2><p class="mt-5 text-lg leading-8 text-[#595959]">${l === "pl" ? "Role przeniesione z makiety Relume jako kierunek komunikacji rekrutacyjnej." : "Career roles are based on the Relume mockup and will be refined before production."}</p></div><div class="grid items-start gap-y-6 md:grid-cols-2 md:gap-8">${careers.map((job) => careerCard(job, l)).join("")}</div>` })}
    ${ctaSection()}
  </main>`;
}

function careerCard(job, l) {
  return `<article class="rounded-xl border border-[#E6EAF2] bg-white p-6 md:p-8">
    <div class="mb-4 flex items-start justify-between gap-4">
      <h3 class="text-2xl font-semibold leading-tight">${job.title}</h3>
      <span class="rounded-full bg-[#F4F6FD] px-3 py-1 text-sm font-medium text-[#015BFE]">${job.category}</span>
    </div>
    <p class="mb-6 text-base leading-7 text-[#595959]">${job.description}</p>
    <div class="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#595959]">
      <div class="flex items-center gap-2">${icon("map-pin", "h-5 w-5 text-[#015BFE]")}<span>${job.location}</span></div>
      <div class="flex items-center gap-2">${icon("clock", "h-5 w-5 text-[#015BFE]")}<span>${job.type}</span></div>
    </div>
    <a href="${href(l === "pl" ? "/kontakt" : "/en/contact")}" class="mt-8 inline-flex h-10 items-center justify-center gap-2 rounded-full border border-[#0F1E34]/15 px-5 text-sm font-medium text-[#0F1E34] transition hover:border-[#015BFE] hover:text-[#015BFE]">
      <span>${l === "pl" ? "Aplikuj" : "Apply"}</span>${icon("arrow-right", "h-4 w-4")}
    </a>
  </article>`;
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

function blogMeta(post, layout = "card") {
  const l = lang();
  const isArticle = layout === "article";
  return `<div class="${isArticle ? "mt-8 flex flex-col gap-4 border-y border-[#E6EAF2] py-5 sm:flex-row sm:items-center sm:justify-between" : "mt-5 flex items-center gap-3"}">
    <div class="flex min-w-0 items-center gap-3">
      <img src="${blogAuthor.avatar}" alt="${blogAuthor.name}" class="${isArticle ? "h-12 w-12" : "h-10 w-10"} shrink-0 rounded-full object-cover ring-2 ring-white" />
      <div class="min-w-0">
        <p class="truncate text-sm font-medium text-[#0F1E34]">${blogAuthor.name}</p>
        <p class="truncate text-xs text-[#595959]">${l === "pl" ? blogAuthor.role : blogAuthor.enRole}</p>
      </div>
    </div>
    <div class="${isArticle ? "flex flex-wrap gap-x-4 gap-y-2 text-sm text-[#595959]" : "flex flex-wrap gap-x-3 gap-y-1 text-xs text-[#595959]"}">
      <span class="inline-flex items-center gap-1.5">${icon("calendar-days", isArticle ? "h-4 w-4 text-[#015BFE]" : "h-3.5 w-3.5 text-[#015BFE]")}<span>${l === "pl" ? post.date : post.enDate}</span></span>
      <span class="inline-flex items-center gap-1.5">${icon("clock", isArticle ? "h-4 w-4 text-[#015BFE]" : "h-3.5 w-3.5 text-[#015BFE]")}<span>${l === "pl" ? post.readTime : post.enReadTime}</span></span>
    </div>
  </div>`;
}

function postCard(post) {
  return `<article class="rounded-xl border border-[#E6EAF2] bg-white p-6 transition hover:border-[#015BFE]/40 hover:shadow-soft">
    <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F4F6FD] text-[#015BFE]">${icon("file-text", "h-5 w-5")}</div>
    <p class="mt-5 text-sm text-[#015BFE]">${post.category}</p>
    <h2 class="mt-3 text-2xl font-medium leading-tight">${post.title}</h2>
    ${blogMeta(post)}
    <p class="mt-4 text-base leading-7 text-[#595959]">${post.excerpt}</p>
    <a href="${href(post.slug)}" class="mt-6 inline-flex items-center gap-2 font-medium text-[#015BFE]"><span>Czytaj więcej</span>${icon("arrow-right", "h-4 w-4")}</a>
  </article>`;
}

function postPage() {
  const post = blogPosts[0];
  return `<main class="route-view">
    ${section({ children: `<article class="mx-auto max-w-3xl"><p class="text-sm font-medium text-[#015BFE]">Blog / Conversion</p><h1 class="mt-5 text-5xl font-semibold leading-tight">${post.title}</h1><p class="mt-6 text-lg leading-8 text-[#595959]">CTA, czyli Call to Action, to wezwanie do działania prowadzące użytkownika do kolejnego kroku: kontaktu, pobrania materiału, zapisu, przejścia do koszyka albo zakupu.</p>${blogMeta(post, "article")}<div class="mt-10 space-y-8 text-lg leading-8 text-[#0F1E34]"><h2 class="text-3xl font-semibold">Jakie są rodzaje CTA?</h2><p>Najczęściej spotykane formy to przyciski, linki tekstowe, bannery, formularze, pop-upy i sekcje kończące artykuł lub landing page.</p><h2 class="text-3xl font-semibold">Gdzie umieszczać CTA?</h2><p>CTA powinno pojawiać się tam, gdzie użytkownik rozumie wartość kolejnego kroku: w hero, po sekcji korzyści, przy case study, w treści bloga i przy finalnym formularzu.</p><h2 class="text-3xl font-semibold">Jak stworzyć skuteczne CTA?</h2><p>Dobre CTA jest konkretne, krótkie, widoczne i mówi o efekcie działania. Zamiast ogólnego „Wyślij” lepiej użyć komunikatu „Zapytaj o projekt” albo „Umów demo”.</p><h2 class="text-3xl font-semibold">Dlaczego warto stosować CTA?</h2><p>CTA porządkuje ścieżkę użytkownika, zmniejsza tarcie i pomaga mierzyć konwersję między treścią, ofertą i kontaktem sprzedażowym.</p></div></article>` })}
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

function createFallbackLineChart(canvas, config) {
  const ctx = canvas.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  const labels = config.labels;
  const datasets = config.datasets;
  const values = datasets.flatMap((dataset) => dataset.data);
  const dataMin = Math.min(...values);
  const dataMax = Math.max(...values);
  const range = Math.max(1, dataMax - dataMin);
  const min = config.min ?? Math.max(0, dataMin - range * 0.18);
  const max = config.max ?? dataMax + range * 0.18;
  const padding = { top: 18, right: 18, bottom: 38, left: 44 };
  let rafId = 0;
  let destroyed = false;

  const easeOutQuart = (value) => 1 - Math.pow(1 - value, 4);

  const draw = (progress = 1) => {
    if (destroyed) return;

    const parent = canvas.parentElement;
    const width = parent?.clientWidth || 640;
    const height = parent?.clientHeight || 320;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, width, height);

    const plotWidth = width - padding.left - padding.right;
    const plotHeight = height - padding.top - padding.bottom;
    const xFor = (index) => padding.left + (plotWidth / (labels.length - 1)) * index;
    const yFor = (value) => padding.top + plotHeight - ((value - min) / (max - min)) * plotHeight;

    ctx.font = '13px "Kanit", system-ui, sans-serif';
    ctx.textBaseline = "middle";
    ctx.lineWidth = 1;

    const ticks = config.ticks || [min, min + (max - min) * 0.25, min + (max - min) * 0.5, min + (max - min) * 0.75, max];
    ticks.forEach((tick) => {
      const y = yFor(tick);
      ctx.strokeStyle = "rgba(230, 234, 242, 0.9)";
      ctx.beginPath();
      ctx.moveTo(padding.left, y);
      ctx.lineTo(width - padding.right, y);
      ctx.stroke();
      ctx.fillStyle = config.grey;
      ctx.textAlign = "right";
      ctx.fillText(String(Math.round(tick)), padding.left - 12, y);
    });

    labels.forEach((label, index) => {
      ctx.fillStyle = config.grey;
      ctx.textAlign = "center";
      ctx.fillText(label, xFor(index), height - 18);
    });

    datasets.forEach((dataset, datasetIndex) => {
      const points = dataset.data.map((value, index) => ({
        x: xFor(index),
        y: yFor(value),
        animatedY: padding.top + plotHeight - (padding.top + plotHeight - yFor(value)) * progress,
      }));

      if (dataset.fill) {
        ctx.fillStyle = dataset.fill;
        ctx.beginPath();
        points.forEach((point, index) => {
          if (index === 0) ctx.moveTo(point.x, point.animatedY);
          else ctx.lineTo(point.x, point.animatedY);
        });
        ctx.lineTo(points[points.length - 1].x, padding.top + plotHeight);
        ctx.lineTo(points[0].x, padding.top + plotHeight);
        ctx.closePath();
        ctx.fill();
      }

      ctx.strokeStyle = dataset.color;
      ctx.lineWidth = datasetIndex === 0 ? 3 : 2;
      ctx.setLineDash(dataset.dash || []);
      ctx.beginPath();
      points.forEach((point, index) => {
        if (index === 0) ctx.moveTo(point.x, point.animatedY);
        else ctx.lineTo(point.x, point.animatedY);
      });
      ctx.stroke();
      ctx.setLineDash([]);

      points.forEach((point) => {
        ctx.fillStyle = "#FFFFFF";
        ctx.strokeStyle = dataset.color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(point.x, point.animatedY, datasetIndex === 0 ? 5 : 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      });
    });
  };

  const start = performance.now();
  const animate = (time) => {
    const elapsed = time - start;
    const progress = config.reduceMotion ? 1 : easeOutQuart(Math.min(1, elapsed / 1200));
    draw(progress);
    if (progress < 1) rafId = window.requestAnimationFrame(animate);
  };
  rafId = window.requestAnimationFrame(animate);

  const resize = () => draw(1);
  window.addEventListener("resize", resize);

  return {
    data: { datasets },
    destroy() {
      destroyed = true;
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    },
  };
}

function createFallbackBarChart(canvas, config) {
  const ctx = canvas.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  const labels = config.labels;
  const dataset = config.datasets[0];
  const max = Math.max(...dataset.data) * 1.18;
  const padding = { top: 18, right: 18, bottom: 42, left: 38 };
  let rafId = 0;
  let destroyed = false;

  const easeOutQuart = (value) => 1 - Math.pow(1 - value, 4);
  const draw = (progress = 1) => {
    if (destroyed) return;
    const parent = canvas.parentElement;
    const width = parent?.clientWidth || 640;
    const height = parent?.clientHeight || 320;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, width, height);

    const plotWidth = width - padding.left - padding.right;
    const plotHeight = height - padding.top - padding.bottom;
    const gap = 18;
    const barWidth = Math.max(22, (plotWidth - gap * (labels.length - 1)) / labels.length);
    ctx.font = '13px "Kanit", system-ui, sans-serif';

    [0.25, 0.5, 0.75, 1].forEach((step) => {
      const y = padding.top + plotHeight - plotHeight * step;
      ctx.strokeStyle = "rgba(230, 234, 242, 0.9)";
      ctx.beginPath();
      ctx.moveTo(padding.left, y);
      ctx.lineTo(width - padding.right, y);
      ctx.stroke();
    });

    dataset.data.forEach((value, index) => {
      const x = padding.left + index * (barWidth + gap);
      const barHeight = (value / max) * plotHeight * progress;
      const y = padding.top + plotHeight - barHeight;
      const radius = 8;
      ctx.fillStyle = dataset.color;
      ctx.beginPath();
      ctx.moveTo(x, y + radius);
      ctx.arcTo(x, y, x + radius, y, radius);
      ctx.lineTo(x + barWidth - radius, y);
      ctx.arcTo(x + barWidth, y, x + barWidth, y + radius, radius);
      ctx.lineTo(x + barWidth, padding.top + plotHeight);
      ctx.lineTo(x, padding.top + plotHeight);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = config.grey;
      ctx.textAlign = "center";
      ctx.fillText(labels[index], x + barWidth / 2, height - 18);
    });
  };

  const start = performance.now();
  const animate = (time) => {
    const progress = config.reduceMotion ? 1 : easeOutQuart(Math.min(1, (time - start) / 1000));
    draw(progress);
    if (progress < 1) rafId = window.requestAnimationFrame(animate);
  };
  rafId = window.requestAnimationFrame(animate);
  const resize = () => draw(1);
  window.addEventListener("resize", resize);

  return {
    data: { datasets: config.datasets },
    destroy() {
      destroyed = true;
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    },
  };
}

function createFallbackDonutChart(canvas, config) {
  const ctx = canvas.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  const dataset = config.datasets[0];
  const total = dataset.data.reduce((sum, value) => sum + value, 0);
  let rafId = 0;
  let destroyed = false;

  const easeOutQuart = (value) => 1 - Math.pow(1 - value, 4);
  const draw = (progress = 1) => {
    if (destroyed) return;
    const parent = canvas.parentElement;
    const width = parent?.clientWidth || 360;
    const height = parent?.clientHeight || 220;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, width, height);

    const radius = Math.min(width, height) * 0.32;
    const lineWidth = Math.max(18, radius * 0.28);
    const centerX = width * 0.36;
    const centerY = height / 2;
    let angle = -Math.PI / 2;

    dataset.data.forEach((value, index) => {
      const slice = (value / total) * Math.PI * 2 * progress;
      ctx.strokeStyle = dataset.colors[index];
      ctx.lineWidth = lineWidth;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, angle, angle + slice);
      ctx.stroke();
      angle += slice;
    });

    ctx.fillStyle = config.dark;
    ctx.font = '600 30px "Kanit", system-ui, sans-serif';
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(`${Math.round(dataset.data[0])}%`, centerX, centerY);

    ctx.font = '13px "Kanit", system-ui, sans-serif';
    ctx.textAlign = "left";
    config.labels.forEach((label, index) => {
      const y = centerY - 42 + index * 28;
      ctx.fillStyle = dataset.colors[index];
      ctx.beginPath();
      ctx.arc(width * 0.67, y, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = config.grey;
      ctx.fillText(label, width * 0.7, y);
    });
  };

  const start = performance.now();
  const animate = (time) => {
    const progress = config.reduceMotion ? 1 : easeOutQuart(Math.min(1, (time - start) / 1100));
    draw(progress);
    if (progress < 1) rafId = window.requestAnimationFrame(animate);
  };
  rafId = window.requestAnimationFrame(animate);
  const resize = () => draw(1);
  window.addEventListener("resize", resize);

  return {
    data: { datasets: config.datasets },
    destroy() {
      destroyed = true;
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    },
  };
}

function initCharts() {
  if (typeof window.__persooaChartsCleanup === "function") {
    window.__persooaChartsCleanup();
  }

  const canvases = Array.from(document.querySelectorAll("canvas[data-chart]"));
  if (!canvases.length) {
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
    const colorMap = {
      blue: brandBlue,
      mint,
      violet,
      dark: brandDark,
    };
    const chartType = canvas.dataset.chartType || "line";
    const labels = JSON.parse(canvas.dataset.chartLabels || "[]");
    const rawSeries = canvas.dataset.chartSeries
      ? JSON.parse(canvas.dataset.chartSeries)
      : [
        {
          label: canvas.dataset.chartRevenueLabel,
          data: JSON.parse(canvas.dataset.chartRevenue || "[]"),
          color: "blue",
          fill: true,
        },
        {
          label: canvas.dataset.chartBaselineLabel,
          data: JSON.parse(canvas.dataset.chartBaseline || "[]"),
          color: "mint",
          dash: true,
        },
      ];
    const series = rawSeries.map((dataset) => ({
      ...dataset,
      color: colorMap[dataset.color] || dataset.color || brandBlue,
      colors: dataset.colors ? dataset.colors.map((color) => colorMap[color] || color) : undefined,
    }));
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.parentElement?.offsetHeight || 320);
    gradient.addColorStop(0, "rgba(1, 91, 254, 0.2)");
    gradient.addColorStop(1, "rgba(1, 91, 254, 0)");

    if (!window.Chart) {
      const fallbackConfig = {
        labels,
        grey: brandGrey,
        dark: brandDark,
        reduceMotion,
        min: canvas.dataset.chart === "roi-growth" ? 90 : undefined,
        max: canvas.dataset.chart === "roi-growth" ? 200 : undefined,
        ticks: canvas.dataset.chart === "roi-growth" ? [100, 125, 150, 175, 200] : undefined,
        datasets: series.map((dataset) => ({
          ...dataset,
          fill: dataset.fill ? "rgba(1, 91, 254, 0.1)" : false,
          dash: dataset.dash ? [8, 8] : undefined,
        })),
      };
      const fallbackChart = chartType === "bar"
        ? createFallbackBarChart(canvas, fallbackConfig)
        : chartType === "donut"
          ? createFallbackDonutChart(canvas, fallbackConfig)
          : createFallbackLineChart(canvas, fallbackConfig);
      canvas.__persooaChart = fallbackChart;
      charts.push(fallbackChart);
      return;
    }

    if (chartType === "bar") {
      const chart = new Chart(ctx, {
        type: "bar",
        data: {
          labels,
          datasets: series.map((dataset) => ({
            label: dataset.label,
            data: dataset.data,
            backgroundColor: dataset.color,
            borderRadius: 8,
            borderSkipped: false,
          })),
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          animation: reduceMotion ? false : { duration: 1000, easing: "easeOutQuart" },
          plugins: { legend: { display: false } },
          scales: {
            x: { grid: { display: false }, ticks: { color: brandGrey, font: { family: "Kanit", size: 13 } } },
            y: { grid: { color: "rgba(230, 234, 242, 0.9)", drawBorder: false }, ticks: { color: brandGrey, font: { family: "Kanit", size: 13 } } },
          },
        },
      });
      canvas.__persooaChart = chart;
      charts.push(chart);
      return;
    }

    if (chartType === "donut") {
      const chart = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels,
          datasets: series.map((dataset) => ({
            label: dataset.label,
            data: dataset.data,
            backgroundColor: dataset.colors || [brandBlue, mint, violet, brandDark],
            borderColor: "#FFFFFF",
            borderWidth: 4,
            hoverOffset: 6,
          })),
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: "68%",
          animation: reduceMotion ? false : { duration: 1100, easing: "easeOutQuart" },
          plugins: {
            legend: {
              position: "right",
              labels: { color: brandGrey, font: { family: "Kanit", size: 13 }, boxWidth: 10, boxHeight: 10 },
            },
          },
        },
      });
      canvas.__persooaChart = chart;
      charts.push(chart);
      return;
    }

    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels,
        datasets: series.map((dataset, index) => ({
          label: dataset.label,
          data: dataset.data,
          borderColor: dataset.color,
          backgroundColor: dataset.fill ? (index === 0 ? gradient : "rgba(65, 219, 195, 0.08)") : "transparent",
          pointBackgroundColor: "#FFFFFF",
          pointBorderColor: dataset.color,
          pointBorderWidth: chartType === "sparkline" ? 0 : 2,
          pointRadius: chartType === "sparkline" ? 0 : index === 0 ? 5 : 4,
          pointHoverRadius: chartType === "sparkline" ? 0 : 7,
          borderWidth: index === 0 ? 3 : 2,
          borderDash: dataset.dash ? [8, 8] : undefined,
          fill: Boolean(dataset.fill),
          tension: 0.38,
        })),
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
            display: chartType !== "sparkline",
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
            display: chartType !== "sparkline",
            min: canvas.dataset.chart === "roi-growth" ? 90 : undefined,
            max: canvas.dataset.chart === "roi-growth" ? 200 : undefined,
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
  if (r.type === "design-system") content = designSystemPage();
  if (r.type === "design-system-charts") content = designSystemChartsPage();
  if (r.type === "design-system-atoms") content = designSystemAtomsPage();
  if (r.type === "design-system-sections") content = designSystemSectionsPage();
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
  initMobileMenu();
  initHeaderTheme();
  initPageMotion();
  initCharts();
  window.scrollTo({ top: 0, behavior: "instant" });
}

window.addEventListener("hashchange", render);
render();

function initMobileMenu() {
  if (typeof window.__persooaMobileMenuCleanup === "function") {
    window.__persooaMobileMenuCleanup();
  }

  const buttonEl = document.getElementById("mobileMenuButton");
  const menuEl = document.getElementById("mobileMenu");
  if (!buttonEl || !menuEl) {
    window.__persooaMobileMenuCleanup = null;
    return;
  }

  const setOpen = (isOpen) => {
    buttonEl.setAttribute("aria-expanded", String(isOpen));
    menuEl.hidden = !isOpen;
    menuEl.setAttribute("aria-hidden", String(!isOpen));
    document.documentElement.classList.toggle("mobile-menu-open", isOpen);
  };

  const toggleMenu = () => {
    setOpen(buttonEl.getAttribute("aria-expanded") !== "true");
  };

  const closeOnLink = (event) => {
    if (event.target.closest("a")) setOpen(false);
  };

  const closeOnEscape = (event) => {
    if (event.key === "Escape") setOpen(false);
  };

  const closeOnDesktop = () => {
    if (window.innerWidth >= 1024) setOpen(false);
  };

  setOpen(false);
  buttonEl.addEventListener("click", toggleMenu);
  menuEl.addEventListener("click", closeOnLink);
  window.addEventListener("keydown", closeOnEscape);
  window.addEventListener("resize", closeOnDesktop);

  window.__persooaMobileMenuCleanup = () => {
    buttonEl.removeEventListener("click", toggleMenu);
    menuEl.removeEventListener("click", closeOnLink);
    window.removeEventListener("keydown", closeOnEscape);
    window.removeEventListener("resize", closeOnDesktop);
    document.documentElement.classList.remove("mobile-menu-open");
  };
}

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
        el.style.setProperty("--dark-sheen-shift", `${(progress - 0.5) * 46}px`);
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
