# Architektura nowej strony Persooa

## 1. Cel dokumentu

Ten dokument przedstawia rekomendowana architekture nowej strony internetowej Persooa oraz dwa mozliwe warianty technologiczne wdrozenia.

Celem projektu jest stworzenie nowoczesnej, szybkiej i skalowalnej strony, ktora:

- zachowa obecne efekty SEO i nie doprowadzi do utraty pozycji w Google,
- jasno zaprezentuje oferte Persooa,
- uporzadkuje komunikacje wokol AI, e-commerce growth i Marketing Automation 2.0,
- bedzie gotowa do dalszej rozbudowy,
- zostanie przekazana jako kod w repozytorium Git,
- bedzie mozliwa do uruchomienia na srodowisku klienta.

Nowa strona nie powinna byc traktowana jako zwykly redesign graficzny. Poniewaz obecna domena posiada juz widocznosc organiczna, projekt nalezy przeprowadzic jako migracje SEO-first.

## 2. Najwazniejsze zalozenia projektu

Strona Persooa powinna byc zaprojektowana jako nowoczesna strona B2B/MarTech, a nie prosta wizytowka.

Zakladamy, ze serwis bedzie zawieral:

- strone glowna,
- podstrony ofertowe,
- podstrony kompetencyjne,
- strony branzowe,
- case studies,
- blog lub Growth Hub,
- materialy do pobrania,
- wersje jezykowe PL/EN,
- formularze kontaktowe lub kwalifikacyjne,
- integracje analityczne,
- mozliwosc dalszej rozbudowy w przyszlosci.

Z tego powodu nie rekomendujemy budowy strony jako zestawu recznie utrzymywanych plikow HTML. Taki wariant bylby prosty na start, ale przy wiekszej liczbie podstron szybko stalby sie trudny w utrzymaniu. Kazda zmiana w menu, stopce, CTA, karcie uslugi, sekcji case studies czy komponencie formularza musialaby byc kopiowana w wielu miejscach.

Rekomendujemy zbudowanie strony komponentowo, z uzyciem Tailwind CSS i jednego z dwoch silnikow opisanych ponizej.

## 3. Wariant 1: Astro + Tailwind CSS

### Dla kogo jest ten wariant

Astro + Tailwind CSS to rekomendowany wariant, jezeli priorytetem jest:

- bardzo dobra wydajnosc,
- mocne SEO,
- szybkie ladowanie strony,
- proste utrzymanie strony contentowej,
- ograniczenie ilosci JavaScriptu,
- latwe hostowanie,
- bezpieczna migracja obecnych tresci i URL-i.

To bardzo dobry wybor dla strony marketingowej, ktora opiera sie glownie na tresci, case studies, blogu, sekcjach ofertowych i formularzach.

### Jak dziala ten wariant

Astro generuje statyczny lub serwerowo renderowany HTML. Oznacza to, ze Google otrzymuje gotowa, indeksowalna strone, a uzytkownik dostaje bardzo szybki serwis.

Interaktywne elementy, takie jak formularze, karuzele, filtry czy wybrane animacje, moga byc dodane tylko tam, gdzie sa faktycznie potrzebne.

### Zalety

- bardzo szybka strona,
- bardzo dobra baza pod SEO,
- mniej JavaScriptu po stronie uzytkownika,
- prostszy hosting,
- wygodna obsluga contentu,
- dobra struktura pod blog, case studies i Growth Hub,
- mniejsze ryzyko zbudowania zbyt ciezkiej strony.

### Ograniczenia

- mniej naturalny wybor, jezeli strona ma w przyszlosci stac sie bardziej aplikacja niz serwisem marketingowym,
- czesc gotowych komponentow React, np. shadcn/ui, wymaga dodatkowego podejscia,
- bardziej zlozone integracje i dynamiczne funkcje trzeba projektowac ostroznie.

### Kiedy rekomendujemy Astro

Rekomendujemy Astro, jezeli nowa strona Persooa ma byc przede wszystkim:

- szybka,
- stabilna,
- contentowa,
- SEO-first,
- latwa do przekazania i hostowania,
- rozwijana glownie przez dodawanie nowych podstron, artykulow, case studies i sekcji.

## 4. Wariant 2: Next.js + Tailwind CSS

### Dla kogo jest ten wariant

Next.js + Tailwind CSS to rekomendowany wariant, jezeli klient zaklada bardziej rozbudowany rozwoj strony w przyszlosci.

Ten wariant sprawdzi sie szczegolnie wtedy, gdy planowane sa:

- CMS,
- dynamiczne landing pages,
- integracje CRM/API,
- personalizacja tresci,
- zaawansowane formularze,
- rozbudowane komponenty React,
- dalsze rozwijanie strony przez zespol techniczny lub narzedzia AI,
- funkcje wykraczajace poza klasyczna strone marketingowa.

### Jak dziala ten wariant

Next.js pozwala tworzyc strony renderowane statycznie lub serwerowo. Dobrze przygotowany projekt Next.js rowniez moze byc bardzo dobry pod SEO, pod warunkiem ze strony generuja indeksowalny HTML, maja poprawne metadata, canonicale, hreflang, sitemap i szybkie ladowanie.

Next.js opiera sie na React, co daje bardzo duza elastycznosc przy budowie komponentow i integracji.

### Zalety

- bardzo dobry ekosystem React,
- latwe korzystanie z gotowych komponentow, np. shadcn/ui,
- dobra sciezka pod CMS,
- dobra sciezka pod integracje CRM/API,
- duza elastycznosc przy rozwoju,
- wygodne utrzymanie komponentowego design systemu,
- dobry wybor, jezeli strona ma byc rozwijana w dluzszej perspektywie.

### Ograniczenia

- wieksza zlozonosc niz Astro,
- wieksza odpowiedzialnosc za performance,
- ryzyko dodania zbyt duzej ilosci JavaScriptu,
- wymaga wiekszej dyscypliny technicznej przy utrzymaniu SEO i predkosci.

### Kiedy rekomendujemy Next.js

Rekomendujemy Next.js, jezeli Persooa chce potraktowac strone jako dlugoterminowa platforme marketingowo-sprzedazowa, ktora bedzie z czasem rozbudowywana o kolejne funkcje, integracje i dynamiczne mechanizmy.

## 5. Porownanie wariantow

| Obszar | Astro + Tailwind | Next.js + Tailwind |
| --- | --- | --- |
| SEO | Bardzo dobre | Bardzo dobre, jesli poprawnie wdrozone |
| Predkosc | Bardzo wysoka domyslnie | Wysoka, ale wymaga dyscypliny |
| Ilosc JavaScriptu | Niska | Srednia lub wysoka, zalezy od wdrozenia |
| Blog / Growth Hub | Bardzo dobry wybor | Bardzo dobry wybor |
| Case studies | Bardzo dobry wybor | Bardzo dobry wybor |
| Formularze | Dobre wsparcie | Bardzo dobre wsparcie |
| CMS | Mozliwy | Bardzo naturalny kierunek |
| Integracje API/CRM | Mozliwe | Bardzo dobre wsparcie |
| Komponenty React/shadcn | Mozliwe, ale mniej naturalne | Naturalne |
| Prostota hostingu | Bardzo wysoka | Wysoka, ale zalezy od trybu wdrozenia |
| Przyszla rozbudowa | Dobra | Bardzo dobra |
| Ryzyko przeinwestowania | Niskie | Srednie, jesli zakres pozostanie prosty |

## 6. Rekomendacja

Oba warianty sa poprawne technologicznie i oba moga byc dobre dla SEO.

Najwazniejsza decyzja nie brzmi: "co lepiej pozycjonuje sie w Google?", poniewaz dobrze wykonane Astro i dobrze wykonany Next.js moga pozycjonowac sie bardzo dobrze.

Najwazniejsza decyzja brzmi:

> Czy nowa strona Persooa ma byc przede wszystkim szybka strona contentowo-marketingowa, czy dlugoterminowa platforma do dalszej rozbudowy?

Rekomendacja:

- jezeli priorytetem jest SEO, predkosc, prostota, content i szybkie wdrozenie: rekomendujemy Astro + Tailwind CSS;
- jezeli priorytetem jest dlugofalowa rozbudowa, CMS, integracje, personalizacja i komponenty React: rekomendujemy Next.js + Tailwind CSS.

W obu przypadkach projekt powinien zostac zrealizowany jako SEO-first migration.

## 7. Dlaczego nie sam zwykly HTML

Zwykly HTML moze byc bardzo szybki i bardzo dobry dla SEO. Nie odrzucamy go dlatego, ze jest technicznie gorszy.

Nie rekomendujemy go w tym projekcie z powodow utrzymaniowych.

Przy stronie Persooa zakladamy wiele powtarzalnych elementow:

- header,
- footer,
- menu,
- karty uslug,
- karty case studies,
- sekcje CTA,
- komponenty formularzy,
- logotypy klientow,
- sekcje metryk,
- sekcje blogowe,
- wersje PL/EN.

W recznym HTML kazda wieksza zmiana wymagalaby powielania edycji na wielu podstronach. To zwieksza ryzyko bledow, niespojnosci, problemow SEO i wolniejszego rozwoju.

Astro i Next.js pozwalaja zachowac zalety statycznego HTML, ale dodaja komponenty, porzadek w kodzie i lepsza skalowalnosc.

## 8. Proponowana architektura informacji

Rekomendowana struktura serwisu:

- Strona glowna
- O nas
- Oferta
- Kompetencje
- Managed Services
- Branze
- Case studies
- Growth Hub / Blog
- Kontakt

Oferta:

- Marketing Automation 2.0
- Program Lojalnosciowy
- Wyszukiwarka AI
- Program ROI w 90 dni

Kompetencje:

- Integracja danych
- Personalizacja AI
- Automatyzacja kampanii
- Aktywacja kanalow komunikacji
- Zarzadzanie cyklem zycia klienta
- Analityka danych wspierana przez AI

Branze:

- Retail
- Fashion
- Beauty
- Finance
- E-commerce / B2C

Zasoby:

- Blog
- Growth Hub
- Materialy do pobrania
- Case studies

## 9. Proponowana struktura URL

Priorytetem jest zachowanie obecnych adresow URL, jezeli generuja ruch organiczny lub posiadaja backlinki.

Przykladowa struktura:

```txt
/
/en/
/o-nas
/en/about-us
/marketing-automation-2.0
/en/marketing-automation-2.0
/program-lojalnosciowy
/wyszukiwarka-ai
/program-roi-w-90-dni
/integracja-danych
/personalizacja-ai
/automatyzacja-kampanii
/aktywacja-kanalow-komunikacji
/zarzadzanie-cyklem-zycia-klienta
/analityka-danych-ai
/case-study
/case-study/[slug]
/blog
/blog/[slug]
/kontakt
```

Kazda zmiana adresu musi miec przypisany redirect 301.

## 10. Kluczowe elementy techniczne

Niezaleznie od wybranego wariantu, strona powinna posiadac:

- komponentowy design system,
- Tailwind CSS,
- zoptymalizowane assety,
- wersje PL/EN,
- metadata per page,
- canonicale,
- hreflang,
- sitemap.xml,
- robots.txt,
- schema.org,
- formularze z walidacja,
- integracje analityczne,
- monitoring konwersji,
- poprawne przekierowania 301,
- dokumentacje wdrozenia.

## 11. Sekcje strony glownej

Rekomendowane sekcje homepage:

1. Hero z jasnym claimem i CTA.
2. Krotkie wyjasnienie, czym zajmuje sie Persooa.
3. Oferta: Marketing Automation 2.0, Loyalty, AI Search.
4. Program ROI w 90 dni.
5. Kompetencje Persooa.
6. Proces wspolpracy.
7. Wyniki i metryki.
8. Case studies.
9. Partnerzy technologiczni.
10. Logotypy klientow.
11. Opinie.
12. Growth Hub / materialy.
13. Formularz kontaktowy lub kwalifikacyjny.

## 12. Integracje do potwierdzenia

Do potwierdzenia na etapie projektowym:

- CRM: HubSpot, Salesforce, Pipedrive lub inne,
- marketing automation,
- formularze: API, webhook, CRM forms lub embedded forms,
- analityka: GA4, GTM, Google Search Console,
- consent management: Cookiebot, CookieYes, OneTrust lub inne,
- hosting: Vercel, Cloudflare Pages, Netlify, VPS lub infrastruktura klienta,
- CMS, jezeli klient chce samodzielnie edytowac tresci.

## 13. Przekazanie kodu

Kod strony zostanie przekazany klientowi jako repozytorium Git.

Repozytorium powinno zawierac:

- kod aplikacji,
- komponenty UI,
- design system,
- strukture contentu,
- zoptymalizowane assety produkcyjne,
- instrukcje uruchomienia,
- instrukcje deployu,
- `.env.example`,
- dokumentacje SEO,
- mape URL i redirectow,
- zasady dalszej rozbudowy przez AI.

## 14. Najwazniejsze ryzyka

Najwazniejsze ryzyka projektu:

- utrata obecnych rankingow przez zmiane URL-i,
- usuniecie stron generujacych ruch organiczny,
- niepoprawne redirecty 301,
- bledna obsluga wersji PL/EN,
- brak canonicali lub hreflang,
- brak migracji bloga/Growth Hub,
- zbyt mala ilosc tresci na stronach uslugowych,
- spowolnienie strony przez zbyt ciezkie grafiki,
- publikacja bez testow SEO,
- brak monitoringu po wdrozeniu.

Te ryzyka powinny zostac obsluzone przed publikacja produkcyjna.

## 15. Rekomendowany kolejny krok

Przed finalnym wyborem silnika rekomendujemy wykonac krotki etap decyzyjny:

1. Potwierdzic docelowa liczbe podstron.
2. Potwierdzic, czy blog/Growth Hub bedzie migrowany.
3. Potwierdzic, czy klient potrzebuje CMS.
4. Potwierdzic zakres integracji CRM/API.
5. Potwierdzic, czy strona ma byc glownie contentowa, czy bardziej aplikacyjna.
6. Wykonac audyt obecnych URL-i i widocznosci SEO.

Po tych decyzjach mozna bezpiecznie wybrac:

- Astro + Tailwind CSS dla wariantu content-first,
- Next.js + Tailwind CSS dla wariantu rozwojowego.
