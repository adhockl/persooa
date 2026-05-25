# Lista komponentow Tailwind dla nowej strony Persooa

## 1. Zalozenie

Komponenty tworzymy w React, TypeScript i Tailwind CSS. Jako baza mozemy wykorzystac shadcn/ui, ale kazdy komponent powinien zostac dostosowany do design systemu Persooa, a nie pozostawiony w domyslnym stylu biblioteki.

Komponenty dzielimy na:

- komponenty bazowe UI,
- komponenty layoutowe,
- komponenty sekcyjne,
- komponenty contentowe,
- komponenty formularzy,
- komponenty SEO/content utility.

## 2. Komponenty bazowe UI

### Button

Warianty:

- primary,
- secondary,
- outline,
- ghost,
- link,
- destructive tylko dla panelu admin/CMS, jesli powstanie.

Rozmiary:

- sm,
- md,
- lg,
- icon.

Stany:

- default,
- hover,
- focus-visible,
- active,
- disabled,
- loading.

### Badge

Zastosowanie:

- kategorie ofert,
- branze,
- tagi blogowe,
- statusy case studies,
- oznaczenia "ROI w 90 dni", "AI", "E-commerce".

### Card

Warianty:

- service card,
- competency card,
- case study card,
- stat card,
- testimonial card,
- article card,
- logo card.

Zasada:

- karty stosujemy do powtarzalnych elementow,
- nie budujemy calej strony z kart w kartach,
- sekcje pozostaja pelnoszerokimi blokami layoutu.

### Input

Typy:

- text,
- email,
- phone,
- company,
- url.

Stany:

- default,
- focused,
- error,
- disabled,
- success.

### Textarea

Do formularza kontaktowego i formularza kwalifikacyjnego.

### Select

Zastosowanie:

- branza,
- wielkosc e-commerce,
- miesieczna liczba transakcji,
- temat zapytania.

### Checkbox

Zastosowanie:

- zgody marketingowe,
- akceptacja polityki prywatnosci,
- zainteresowane uslugi.

### Tabs

Zastosowanie:

- uslugi Marketing Automation 2.0,
- kompetencje,
- branze,
- case studies,
- pakiety lub scenariusze.

### Accordion

Zastosowanie:

- FAQ,
- rozwiniecia procesu,
- szczegoly integracji,
- pytania o ROI w 90 dni.

### Dialog / Modal

Zastosowanie:

- formularz szybkiego kontaktu,
- pobranie materialu,
- lead magnet,
- video/case study preview.

### Tooltip

Zastosowanie:

- wyjasnienie skrotow: ARPU, AOV, CVR, LTV, CAC, CDP, CRM.

## 3. Komponenty layoutowe

### Header

Funkcje:

- sticky lub standardowy,
- logo,
- glowna nawigacja,
- mega-menu,
- przelacznik jezyka PL/EN,
- CTA "Umow rozmowe" lub "Sprawdz ROI".

### MegaMenu

Sekcje:

- Oferta,
- Kompetencje,
- Managed Services,
- Branze,
- Zasoby.

W menu warto pokazac krotkie opisy, nie tylko linki.

### MobileNav

Funkcje:

- drawer/sheet,
- grupowanie linkow,
- CTA zawsze widoczne,
- przelacznik jezyka.

### Footer

Zawartosc:

- logo,
- opis firmy,
- linki do oferty,
- linki do kompetencji,
- linki do zasobow,
- kontakt,
- social media,
- polityka prywatnosci,
- cookies,
- prawa autorskie.

### PageShell

Wspolny wrapper dla stron:

- header,
- main,
- footer,
- metadata region,
- sekcje CTA.

### Section

Komponent kontrolujacy:

- padding pionowy,
- szerokosc kontenera,
- tlo,
- separatory,
- warianty density.

### Container

Standardowe szerokosci:

- narrow: tekst i artykuly,
- default: strony marketingowe,
- wide: sekcje z gridami i logotypami.

## 4. Komponenty sekcyjne

### HeroSection

Domyslny pattern:

- ciemny near-black background,
- tekst po lewej,
- dedykowana ilustracja po prawej jako duzy key visual,
- ilustracja bez karty, ramki i mockupowego kontenera,
- gradientowy overlay dla czytelnosci tekstu,
- primary CTA jako bialy pill,
- secondary CTA jako transparentny pill na dark background.

Warianty:

- homepage z metrykami,
- service page z dedykowana ilustracja,
- industry page z dedykowana ilustracja,
- case study page z obrazem klienta lub ilustracja,
- article page bez dominujacej ilustracji, jezeli nie ma dedykowanego assetu.

Elementy:

- eyebrow,
- H1,
- lead paragraph,
- CTA primary,
- CTA secondary,
- metryki,
- obraz lub wizualizacja.

Reguly:

- kazda podstrona z dedykowana ilustracja korzysta z tego samego dark hero patternu,
- nie tworzymy osobnych ramek visuali dla poszczegolnych ofert,
- na mobile tresc jest przed ilustracja.

### OfferGrid

Karty:

- Marketing Automation 2.0,
- Program Lojalnosciowy,
- Wyszukiwarka AI.

### CompetencyGrid

Karty:

- Integracja danych,
- Personalizacja AI,
- Automatyzacja kampanii,
- Aktywacja kanalow komunikacji,
- Zarzadzanie cyklem zycia klienta,
- Analityka AI.

### ProcessTimeline

Kroki:

1. Diagnoza.
2. Roadmapa.
3. Wdrozenie.
4. Rezultaty.
5. Partnerstwo.

### StatsBand

Metryki:

- liczba klientow,
- godziny implementacyjne,
- GMV,
- wzrost ARPU,
- wzrost AOV,
- wzrost konwersji.

### CaseStudyGrid

Elementy:

- logo klienta,
- branza,
- wyzwanie,
- rozwiazanie,
- wynik,
- link do szczegolow.

### TechnologyPartners

Logotypy:

- Salesforce,
- Adobe,
- Oracle,
- Synerise,
- inne po potwierdzeniu.

### ClientLogoWall

Siatka logotypow klientow z wersjami zoptymalizowanymi pod web.

### TestimonialCarousel

Elementy:

- cytat,
- imie i nazwisko,
- stanowisko,
- firma,
- logo lub zdjecie, jesli zatwierdzone.

### ResourceGrid

Elementy:

- blog,
- Growth Hub,
- materialy do pobrania,
- cookbook.

### CTASection

Warianty:

- ROI w 90 dni,
- bezplatna diagnoza,
- kontakt z ekspertem,
- pobranie materialu.

## 5. Komponenty formularzy

### ContactForm

Pola:

- imie i nazwisko,
- e-mail,
- telefon,
- firma,
- strona www,
- temat,
- wiadomosc,
- zgody.

### RoiQualificationForm

Pola:

- URL sklepu,
- liczba produktow,
- liczba transakcji miesiecznie,
- obecne narzedzia MA/CRM/CDP,
- najwazniejszy cel,
- budzet lub etap decyzyjny,
- dane kontaktowe.

### DownloadForm

Do materialow:

- imie,
- e-mail,
- firma,
- zgody.

### NewsletterForm

Do Growth Hub / bloga.

## 6. Komponenty contentowe

### RichText

Do renderowania contentu MDX/CMS:

- naglowki,
- akapity,
- listy,
- cytaty,
- tabele,
- obrazy,
- callouty,
- linki.

### Breadcrumbs

Wazne dla SEO i UX.

### TableOfContents

Do dluzszych artykulow i podstron kompetencyjnych.

### ArticleHeader

Elementy:

- kategoria,
- tytul,
- opis,
- autor,
- data,
- czas czytania.

### RelatedContent

Powiazane:

- uslugi,
- case studies,
- artykuly,
- materialy do pobrania.

## 7. Komponenty SEO utility

### SeoMetadata

Nie musi byc komponentem wizualnym. To zestaw helperow do generowania:

- title,
- description,
- canonical,
- open graph,
- twitter card,
- alternates/hreflang.

### JsonLd

Schematy:

- Organization,
- WebSite,
- BreadcrumbList,
- Service,
- Article,
- FAQPage,
- CaseStudy lub CreativeWork.

### SitemapBuilder

Mechanizm generowania sitemap.xml z contentu.

## 8. Priorytet wdrozenia komponentow

Priorytet 1:

- Button,
- Card,
- Header,
- Footer,
- Section,
- Container,
- HeroSection,
- OfferGrid,
- ContactForm,
- SeoMetadata.

Priorytet 2:

- MegaMenu,
- CompetencyGrid,
- ProcessTimeline,
- StatsBand,
- CaseStudyGrid,
- CTASection,
- Breadcrumbs.

Priorytet 3:

- TestimonialCarousel,
- ResourceGrid,
- RoiQualificationForm,
- Article components,
- JsonLd,
- TableOfContents.

Priorytet 4:

- animacje,
- zaawansowane filtry,
- interaktywne kalkulatory,
- personalizacja tresci.
