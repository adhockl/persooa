# Przygotowanie i wymagania SEO: obecna strona vs nowa strona

## 1. Cel dokumentu

Celem dokumentu jest okreslenie wymagan SEO dla migracji strony Persooa z obecnej wersji na nowa wersje. Obecna strona posiada juz widocznosc organiczna, dlatego wdrozenie nie moze byc traktowane jak zwykly redesign.

Projekt powinien byc realizowany jako SEO-first migration.

## 2. Glowna zasada migracji

Nowa strona moze miec inny design, lepsza architekture i nowy content, ale nie moze przypadkowo utracic:

- obecnych adresow URL,
- tresci, ktore rankuja,
- metadata,
- linkowania wewnetrznego,
- wersji jezykowych,
- backlinkow,
- struktury sitemap,
- sygnalow technicznych.

Kazda zmiana URL wymaga mapowania i redirectu 301.

## 3. Obecna strona

Obecna strona Persooa zawiera rozbudowana strukture:

- strona glowna,
- O nas,
- Marketing Automation 2.0,
- Program Lojalnosciowy,
- Wyszukiwarka AI,
- Program ROI w 90 dni,
- kompetencje,
- kanaly komunikacji,
- managed services,
- branze,
- case studies,
- blog,
- Growth Hub,
- materialy do pobrania,
- wersja PL i EN.

Publicznie widoczne glowne komunikaty:

- "We maximize e-commerce growth",
- AI w e-commerce,
- ROI w 90 dni,
- Marketing Automation 2.0,
- programy lojalnosciowe,
- AI Search,
- integracja danych,
- personalizacja AI,
- automatyzacja kampanii,
- lifecycle management,
- analityka AI.

## 4. Nowa strona

Nowy content z Webflow powinien zostac potraktowany jako nowe zrodlo narracji, ale nie jako pelny zamiennik obecnej architektury SEO bez analizy.

Nowa strona powinna:

- zachowac strony generujace ruch,
- zachowac lub poprawic slug-i,
- rozwinac tresci strategiczne,
- uporzadkowac oferte,
- wzmocnic topical authority,
- dodac lepsze schema.org,
- poprawic performance,
- zachowac PL/EN.

## 5. Audyt przed wdrozeniem

Przed rozpoczeciem implementacji trzeba wykonac crawl obecnej strony.

Zakres crawla:

- wszystkie indeksowalne URL-e,
- status code,
- index/noindex,
- canonical,
- title,
- meta description,
- H1,
- H2,
- word count,
- internal links,
- obrazy,
- alt text,
- structured data,
- hreflang,
- sitemap inclusion,
- depth/click distance.

Narzedzia:

- Screaming Frog lub Sitebulb,
- Google Search Console,
- GA4,
- Senuto/Ahrefs/Semrush, jesli klient posiada,
- PageSpeed Insights,
- Lighthouse.

## 6. Dane wymagane od klienta

Wymagane dostepy:

- Google Search Console,
- GA4,
- Google Tag Manager,
- obecna sitemap.xml,
- CMS lub eksport obecnej strony,
- dane o konwersjach,
- lista najwazniejszych fraz,
- lista najwazniejszych landing pages,
- dostep do Webflow lub eksport contentu,
- lista backlinkow, jesli klient ma Ahrefs/Semrush/Senuto.

## 7. Porownanie: obecna vs nowa

| Obszar | Obecna strona | Nowa strona | Wymaganie |
| --- | --- | --- | --- |
| URL | Istniejace i indeksowane | Do zaprojektowania | Zachowac 1:1 tam, gdzie mozliwe |
| Content | Duza liczba podstron | Nowy content z Webflow | Nie usuwac stron bez analizy ruchu |
| PL/EN | Obecne | Do zachowania | Hreflang i canonical per jezyk |
| Metadata | Do audytu | Do stworzenia/poprawy | Unikalne per URL |
| Blog/Growth Hub | Obecne | Do migracji | Zachowac artykuly z ruchem |
| Case studies | Obecne | Do przebudowy | Zachowac wyniki, linki i slugi |
| Performance | Do pomiaru | Do poprawy | Core Web Vitals jako wymaganie |
| Formularze | Obecne/HubSpot mozliwe | Do integracji | Tracking konwersji |
| Sitemap | Obecna | Nowa dynamiczna/statyczna | Zglosic po wdrozeniu |
| Redirecty | Brak przy 1:1 | Wymagane przy zmianach | 301 old to new |

## 8. Strategia URL

Priorytet:

1. Zachowac obecny URL.
2. Jesli URL musi sie zmienic, ustawic 301.
3. Jesli strona znika, przekierowac do najblizszego odpowiednika tematycznego.
4. Nie przekierowywac masowo na homepage.
5. Nie laczyc wielu waznych stron SEO bez analizy.

Przyklad tabeli migracyjnej:

| Old URL | New URL | Status | Uwagi |
| --- | --- | --- | --- |
| /marketing-automation-2.0 | /marketing-automation-2.0 | 200 | Zachowac |
| /en/marketing-automation-2.0 | /en/marketing-automation-2.0 | 200 | Zachowac EN |
| /stary-artykul | /blog/nowy-slug | 301 | Tylko po analizie |

## 9. Metadata

Kazda strona powinna miec:

- unikalny title,
- unikalny meta description,
- canonical,
- open graph title,
- open graph description,
- open graph image,
- language alternates,
- robots directive.

Title powinien laczyc:

- glowna fraze,
- wartosc biznesowa,
- brand Persooa.

## 10. Hreflang i wersje jezykowe

Wymagania:

- zachowac strukture PL/EN,
- kazda strona PL powinna wskazywac odpowiednik EN,
- kazda strona EN powinna wskazywac odpowiednik PL,
- dodac `x-default`, jezeli bedzie uzasadnione,
- unikanie mieszania jezykow na jednej stronie.

## 11. Struktura naglowkow

Zasady:

- jeden H1 na stronie,
- H1 zgodny z intencja strony,
- H2 dla glownych sekcji,
- H3 dla elementow wewnetrznych,
- brak pustych naglowkow,
- nie uzywac naglowkow tylko do stylowania.

## 12. Schema.org

Rekomendowane schematy:

- Organization,
- WebSite,
- BreadcrumbList,
- Service,
- Article,
- FAQPage,
- CreativeWork dla case studies,
- Person dla wybranych stron zespolu, jesli powstana.

## 13. Performance SEO

Wymagania:

- LCP ponizej 2.5 s,
- CLS ponizej 0.1,
- INP ponizej 200 ms,
- obrazy w WebP/AVIF, gdzie mozliwe,
- stabilne wymiary obrazow,
- lazy loading dla obrazow ponizej folda,
- brak ciezkich animacji blokujacych render,
- minimalizacja JavaScriptu na stronach contentowych.

## 14. Content SEO

Kazda wazna podstrona uslugi powinna zawierac:

- jasny opis problemu,
- opis rozwiazania Persooa,
- korzysci biznesowe,
- proces wdrozenia,
- technologie,
- metryki,
- FAQ,
- powiazane case studies,
- CTA.

Nie nalezy skracac stron uslugowych do samych ladnych sekcji marketingowych. Dla SEO potrzebna jest kompletna, ekspercka tresc.

## 15. Linkowanie wewnetrzne

Wymagania:

- homepage linkuje do najwazniejszych uslug,
- uslugi linkuja do kompetencji,
- kompetencje linkuja do case studies,
- case studies linkuja do uslug,
- blog linkuje do ofert i materialow,
- breadcrumbs na podstronach,
- footer zawiera strategiczne linki.

## 16. Launch checklist

Przed publikacja:

- crawl stagingu z blokada indeksacji,
- porownanie URL-i old vs new,
- test redirectow,
- test canonicali,
- test metadata,
- test hreflang,
- test sitemap.xml,
- test robots.txt,
- test 404,
- test formularzy,
- test eventow GA4/GTM,
- Lighthouse/PageSpeed,
- test mobile,
- sprawdzenie noindex przed deployem,
- usuniecie noindex po deployu produkcyjnym.

Po publikacji:

- ponowny crawl produkcji,
- wyslanie sitemap w GSC,
- monitoring indeksacji,
- monitoring 404,
- monitoring pozycji,
- monitoring ruchu organicznego,
- monitoring formularzy i konwersji.

## 17. Najwieksze ryzyka

- redesign bez mapy URL,
- usuniecie podstron z ruchem long-tail,
- niepoprawne redirecty,
- brak wersji EN lub bledny hreflang,
- utrata bloga i Growth Hub,
- zbyt maly content na stronach uslug,
- spowolnienie strony przez grafiki,
- brak danych strukturalnych,
- brak monitoringu po deployu.

## 18. Rekomendacja

Silnik Next.js jest odpowiedni dla SEO, jesli wdrozenie bedzie wykonane jako SEO-first migration.

Warunek projektu:

- najpierw audyt obecnej strony,
- pozniej mapa migracji,
- dopiero potem implementacja finalnych URL-i i contentu.
