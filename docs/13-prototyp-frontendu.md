# Prototyp frontendu Persooa

## 1. Cel

W katalogu `prototype/` znajduje sie pierwszy statyczny prototyp frontendu strony Persooa.

Powstal przed finalna decyzja technologiczna Astro vs Next.js, dlatego jest przygotowany jako lekki, framework-neutralny prototyp oparty o:

- HTML,
- CSS,
- Tailwind CDN,
- Chart.js CDN dla przykladowego animowanego wykresu, z canvas fallbackiem,
- Vanilla JS,
- dane stron zapisane w `app.js`.

## 2. Co zawiera prototyp

Prototyp zawiera:

- homepage,
- podstrony ofertowe,
- O nas,
- Growth Hub,
- Program Partnerski,
- Persooalize 360,
- Design System,
- katalog chartow,
- katalog atomow UI,
- katalog nowych komponentow sekcyjnych homepage,
- blog listing,
- przykladowy wpis blogowy,
- kontakt,
- polityka prywatnosci,
- kodeks postepowania,
- przelacznik PL/EN,
- header,
- footer,
- CTA,
- reusable cards,
- animowany wykres ROI ostylowany design systemem,
- sekcje dark/blue/light,
- wykorzystanie logo, fontu Kanit i referencji ilustracji.

## 3. URL lokalny

Po uruchomieniu serwera:

```txt
http://localhost:4173/prototype/
```

## 4. Uruchomienie

```txt
python3 -m http.server 4173
```

Polecenie nalezy uruchomic w katalogu glownym repozytorium.

## 5. Trasy w prototypie

Prototyp uzywa hash routingu, poniewaz nie jest jeszcze finalna aplikacja w Astro albo Next.js.

Przyklady:

```txt
http://localhost:4173/prototype/#/
http://localhost:4173/prototype/#/oferta/personalizacja-ai
http://localhost:4173/prototype/#/oferta/roi-w-90dni
http://localhost:4173/prototype/#/oferta/marketing-automation-2-0
http://localhost:4173/prototype/#/o-nas
http://localhost:4173/prototype/#/growth-hub
http://localhost:4173/prototype/#/program-partnerski
http://localhost:4173/prototype/#/persooalize-360
http://localhost:4173/prototype/#/design-system
http://localhost:4173/prototype/#/design-system/charts
http://localhost:4173/prototype/#/design-system/atomy-ui
http://localhost:4173/prototype/#/design-system/sekcje
http://localhost:4173/prototype/#/blog
http://localhost:4173/prototype/#/kontakt
http://localhost:4173/prototype/#/en
http://localhost:4173/prototype/#/en/offer/roi-in-90-days
```

## 6. Wazne ograniczenie

To jest prototyp UI, nie finalne wdrozenie SEO.

Finalna strona w Astro albo Next.js musi miec:

- prawdziwe URL-e bez hash routingu,
- metadata per page,
- canonical,
- hreflang PL/EN,
- sitemap.xml,
- robots.txt,
- redirecty 301,
- server/static rendering,
- formularze z prawdziwa integracja.

## 7. Co przeniesiemy do finalnej strony

Do finalnego frameworka przenosimy:

- tokeny kolorow,
- spacing,
- komponenty,
- strukture sekcji,
- dane ofert,
- menu PL/EN,
- kierunek wizualny,
- CTA,
- uklad homepage i podstron.

Hash routing zostanie zastapiony prawdziwym routingiem frameworka.
