# Plan dzialania na 7 dni

## Cel planu

Celem 7-dniowego sprintu jest przygotowanie kompletnej podstawy do wdrozenia nowej strony Persooa: architektury, design systemu, mapy SEO, struktury contentu i technicznego szkieletu projektu.

Plan zaklada, ze w ciagu tych 7 dni nie publikujemy jeszcze produkcji. Przy stronie z istniejacym SEO etap przygotowawczy jest krytyczny.

## Dzien 1: Kickoff, dostepy i zebranie materialow

Cele:

- potwierdzenie zakresu projektu,
- zebranie materialow od klienta,
- uzyskanie dostepow SEO/analitycznych,
- potwierdzenie, czy Webflow jest zrodlem contentu, designu, czy obu.

Zadania:

- spotkanie kickoff,
- zebranie brandbooka, logo, fontow, zdjec, grafik,
- uzyskanie dostepu do Google Search Console,
- uzyskanie dostepu do GA4 i GTM,
- uzyskanie dostepu do Webflow lub eksportu contentu,
- potwierdzenie CRM/formularzy,
- potwierdzenie hostingu docelowego.

Deliverables:

- lista dostepow,
- lista brakujacych materialow,
- potwierdzony zakres MVP,
- potwierdzony model PL/EN.

Pytania blokujace:

- Czy zachowujemy obecne URL-e?
- Czy migrujemy blog i Growth Hub?
- Czy klient chce CMS?
- Jaki jest glowny CTA?

## Dzien 2: Audyt obecnej strony i SEO baseline

Cele:

- zrozumiec obecna widocznosc SEO,
- wyciagnac liste URL-i,
- wykryc strony, ktorych nie wolno usuwac.

Zadania:

- crawl obecnej strony,
- eksport sitemap.xml,
- eksport danych GSC,
- identyfikacja top landing pages,
- identyfikacja top queries,
- analiza title/meta/H1,
- analiza status code i canonical,
- analiza struktury PL/EN,
- analiza bloga i case studies.

Deliverables:

- SEO baseline,
- lista wszystkich URL-i,
- lista stron krytycznych,
- lista problemow obecnej strony,
- rekomendacje URL-i do zachowania.

## Dzien 3: Architektura informacji i mapa migracji

Cele:

- polaczyc obecna strukture SEO z nowym contentem z Webflow,
- zaprojektowac docelowa strukture strony,
- przygotowac mape migracji.

Zadania:

- analiza contentu z Webflow,
- mapowanie Webflow content do podstron,
- decyzja, ktore obecne strony zostaja,
- decyzja, ktore strony laczymy lub przebudowujemy,
- przygotowanie struktury nawigacji,
- przygotowanie mapy URL old to new,
- wskazanie redirectow 301.

Deliverables:

- docelowa architektura informacji,
- mapa URL,
- tabela redirectow,
- struktura menu,
- struktura footera,
- lista stron MVP.

## Dzien 4: Design system i komponenty

Cele:

- ustalic fundament wizualny,
- przygotowac tokeny,
- okreslic komponenty Tailwind.

Zadania:

- analiza obecnego brandu,
- analiza projektu/contentu Webflow,
- definicja kolorow,
- definicja typografii,
- definicja spacingu, radiusow, cieni,
- lista komponentow bazowych,
- lista komponentow sekcyjnych,
- prototyp kluczowych sekcji.

Deliverables:

- tokeny design systemu,
- lista komponentow,
- rekomendacja stylu UI,
- wstepny komponentowy backlog.

## Dzien 5: Setup techniczny repo i fundament Next.js

Cele:

- przygotowac repozytorium,
- ustawic podstawy aplikacji,
- przygotowac strukture pod SEO i content.

Zadania:

- inicjalizacja projektu Next.js,
- konfiguracja TypeScript,
- konfiguracja Tailwind,
- instalacja i konfiguracja shadcn/ui,
- struktura katalogow,
- podstawowe layouty PL/EN,
- komponenty Header/Footer/Section/Container,
- konfiguracja metadata,
- szkic sitemap i robots,
- `.env.example`,
- README.

Deliverables:

- dzialajacy szkielet projektu,
- pierwsze komponenty bazowe,
- struktura contentu,
- instrukcja uruchomienia lokalnego.

## Dzien 6: Implementacja kluczowych widokow MVP

Cele:

- zbudowac pierwsza wersje najwazniejszych stron,
- przeniesc nowy content w kontrolowany sposob,
- przygotowac pod SEO.

Zadania:

- homepage,
- O nas,
- Oferta overview,
- Marketing Automation 2.0,
- ROI w 90 dni,
- Case studies overview,
- Kontakt,
- podstawowe formularze,
- metadane dla stron,
- schema.org dla Organization i Breadcrumbs.

Deliverables:

- MVP najwazniejszych widokow,
- dzialajaca nawigacja,
- dzialajace CTA,
- podstawowe SEO metadata,
- test responsive.

## Dzien 7: QA, SEO check i plan kolejnego sprintu

Cele:

- sprawdzic jakosc,
- wykryc ryzyka,
- przygotowac liste kolejnych prac.

Zadania:

- test mobile/desktop,
- test linkow,
- test formularzy,
- test metadata,
- test sitemap/robots,
- test Lighthouse,
- test Core Web Vitals na stagingu,
- sprawdzenie redirect map,
- przeglad contentu,
- przygotowanie backlogu produkcyjnego.

Deliverables:

- raport QA,
- raport SEO pre-launch,
- lista poprawek,
- backlog sprintu 2,
- decyzje potrzebne od klienta.

## Zakres po 7 dniach

Po 7 dniach powinnismy miec:

- zatwierdzona architekture strony,
- zmapowane ryzyka SEO,
- design system w wersji startowej,
- liste komponentow,
- dzialajacy szkielet techniczny,
- pierwsze kluczowe widoki,
- mape dalszych prac.

Nie rekomenduje produkcyjnego wdrozenia po 7 dniach bez pelnego audytu SEO, testow redirectow i potwierdzenia contentu.

## Decyzje potrzebne od klienta

- Czy nowa strona ma zachowac obecne URL-e 1:1?
- Czy migrujemy wszystkie podstrony bloga i Growth Hub?
- Czy Webflow jest finalnym zrodlem contentu?
- Czy Webflow jest finalnym zrodlem designu?
- Czy wdrazamy CMS?
- Jaki CRM obsluguje formularze?
- Kto zatwierdza teksty i case studies?
- Kto zatwierdza uzycie logotypow klientow?
- Jaki hosting jest docelowy?

## Najwazniejszy warunek powodzenia

Najwazniejsze jest oddzielenie redesignu od migracji SEO. Projekt wizualny moze byc nowy, ale techniczne i contentowe sygnaly SEO musza zostac zachowane albo poprawione w kontrolowany sposob.
