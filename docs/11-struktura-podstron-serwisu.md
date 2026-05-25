# Struktura podstron serwisu Persooa

## 1. Cel dokumentu

Ten dokument opisuje docelowa strukture podstron nowej strony Persooa.

Strona nie jest tylko landing page'em. Powinna dzialac jako pelny serwis marketingowo-sprzedazowy z podstronami ofertowymi, zasobami, blogiem, case studies i strona kontaktowa.

## 2. Zrodla struktury

Struktura bazuje na:

- obecnej stronie `persooa.com`,
- roboczej stronie Webflow `https://persooa.webflow.io/`,
- brandbooku Figma,
- wymaganiach SEO,
- planowanej architekturze contentu.

Webflow traktujemy jako robocze zrodlo contentu i struktury, ale nie jako finalna architekture SEO 1:1.

## 3. Podstrony wykryte w Webflow

Z homepage Webflow wykryto nastepujace linki wewnetrzne:

```txt
/
/blog
/persooalize-360
/oferta/personalizacja-ai
/oferta/agenci-przychodu
/oferta/cdp
/oferta/agenci-pracy
/oferta/program-lojalnosciowy
/oferta/roi-w-90dni
/oferta/wyszukiwarka-ai
/growth-hub-posts/why-your-legacy-systems-need-modernizing
```

W Webflow wystepuje tez wiele linkow `#`, ktore wymagaja podmiany na finalne URL-e albo usuniecia.

## 4. Docelowa mapa serwisu

### Poziom 1: Strony glowne

```txt
/
/o-nas
/oferta
/case-studies
/growth-hub
/blog
/kontakt
/persooalize-360
```

### Poziom 2: Oferta

```txt
/oferta/personalizacja-ai
/oferta/agenci-przychodu
/oferta/cdp
/oferta/agenci-pracy
/oferta/program-lojalnosciowy
/oferta/roi-w-90dni
/oferta/wyszukiwarka-ai
```

### Poziom 2: Case studies

```txt
/case-studies
/case-studies/[slug]
```

Przykladowe slugi do potwierdzenia:

```txt
/case-studies/telco
/case-studies/retail
/case-studies/fashion
/case-studies/beauty
```

### Poziom 2: Growth Hub / Blog

```txt
/growth-hub
/growth-hub/[slug]
/blog
/blog/[slug]
```

Do decyzji:

- czy `Growth Hub` i `Blog` sa osobnymi sekcjami,
- czy laczymy je w jeden hub zasobow,
- czy migrujemy obecne artykuly z produkcji,
- jak mapujemy wpisy z Webflow.

## 5. Rekomendowana nawigacja glownego menu

Header:

```txt
Home
Oferta
Persooalize 360
Case studies
Growth Hub
Blog
Kontakt
```

CTA:

```txt
Zapytaj o projekt
```

Opcjonalnie:

```txt
PL / EN
```

## 6. Mega menu Oferta

Oferta powinna miec mega menu, poniewaz zawiera kilka strategicznych podstron.

Pozycje:

| Podstrona | Opis roboczy |
| --- | --- |
| Personalizacja AI | Dostosowanie doswiadczen klientow w czasie rzeczywistym |
| Agenci przychodu | Inteligentne systemy wspierajace wzrost sprzedazy |
| CDP | Centralna platforma danych dla pelnego obrazu klienta |
| Agenci pracy | Automatyzacja procesow biznesowych |
| Program Lojalnosciowy | Budowanie retencji i zaangazowania klientow |
| ROI w 90 dni | Program mierzalnego zwrotu z inwestycji |
| Wyszukiwarka AI | Inteligentne wyszukiwanie i odkrywanie produktow |

## 7. Struktura homepage

Homepage ma byc brama do calego serwisu, a nie strona, ktora zawiera wszystko.

Sekcje homepage:

1. Header.
2. Hero.
3. Logo wall.
4. Intro / positioning.
5. Stats / proof.
6. Offer preview.
7. ROI w 90 dni preview.
8. Process preview.
9. Featured case study.
10. Partner / Synerise section.
11. Growth Hub / Blog preview.
12. CTA.
13. Footer.

Kazda sekcja preview powinna linkowac do odpowiedniej podstrony.

## 8. Struktura podstrony ofertowej

Kazda podstrona ofertowa powinna miec wspolny szablon.

Sekcje:

1. Header.
2. Hero uslugi.
3. Problem, ktory rozwiazujemy.
4. Rozwiazanie Persooa.
5. Jak to dziala.
6. Korzysci biznesowe.
7. Use cases.
8. Integracje / technologie.
9. Wyniki lub metryki.
10. Powiazane case studies.
11. FAQ.
12. CTA.
13. Footer.

Wymagania SEO:

- unikalny H1,
- unikalny title,
- unikalny meta description,
- canonical,
- linkowanie wewnetrzne,
- FAQ schema, jezeli sekcja FAQ jest finalna,
- powiazane linki do innych ofert.

## 9. Struktura case study

Case study powinno miec szablon:

1. Hero z nazwa klienta/branza.
2. Kontekst biznesowy.
3. Wyzwanie.
4. Rozwiazanie.
5. Zakres wdrozenia.
6. Wyniki.
7. Technologie.
8. Cytat klienta, jezeli zatwierdzony.
9. Powiazane uslugi.
10. CTA.

Wazne:

- logotyp klienta wymaga zgody,
- wyniki liczbowe wymagaja zgody,
- cytat wymaga zgody,
- jesli klient jest anonimowy, opisujemy branze zamiast marki.

## 10. Struktura Blog / Growth Hub

Lista wpisow:

1. Header kategorii.
2. Featured article.
3. Kategorie / filtry.
4. Grid wpisow.
5. Newsletter / CTA.

Wpis:

1. Article header.
2. Autor / data / kategoria.
3. Spis tresci.
4. Tresc.
5. Callouty.
6. Powiazane uslugi.
7. Powiazane artykuly.
8. CTA.

## 11. Struktura kontaktu

Podstrona kontaktowa:

1. Hero kontaktowe.
2. Formularz.
3. Dane kontaktowe.
4. Lokalizacja.
5. Informacja o RITS / grupie.
6. FAQ kontaktowe lub proces po wyslaniu formularza.

Formularz:

- imie i nazwisko,
- e-mail,
- firma,
- strona www,
- temat,
- wiadomosc,
- zgody.

## 12. Podstrony PL/EN

Do potwierdzenia:

- czy nowa strona ma od razu wersje PL i EN,
- czy struktura EN pozostaje w `/en/`,
- czy kazda podstrona PL ma odpowiednik EN,
- czy Webflow content jest tylko PL, czy beda dostarczone tlumaczenia.

Rekomendacja SEO:

```txt
/oferta/personalizacja-ai
/en/offer/ai-personalization
```

albo zachowanie obecnych URL-i, jezeli sa juz zaindeksowane.

Finalna decyzja wymaga audytu obecnej strony produkcyjnej.

## 13. Priorytet MVP

Rekomendowany MVP:

1. Homepage.
2. Oferta overview.
3. ROI w 90 dni.
4. Personalizacja AI.
5. CDP.
6. Program Lojalnosciowy.
7. Wyszukiwarka AI.
8. Case studies overview.
9. Jeden szablon case study.
10. Blog / Growth Hub overview.
11. Kontakt.

Podstrony, ktore moga wejsc w kolejny etap:

- Agenci pracy.
- Agenci przychodu.
- Persooalize 360.
- Program partnerski.
- Rozbudowane artykuly Growth Hub.
- Pelna wersja EN.

## 14. Najwazniejsze zasady

- Homepage nie zastepuje podstron ofertowych.
- Kazda wazna usluga powinna miec wlasna podstrone SEO.
- Webflow jest zrodlem roboczym, ale slugi musza byc porownane z obecna produkcja.
- Nie zmieniamy URL-i bez mapy migracji.
- Linki `#` z Webflow musza zostac zastapione finalnymi adresami.
- Podstrony P1/P2 z obecnego SEO musza zostac zachowane lub przekierowane 301.

## 15. Szczegolowa mapa tresci

Szczegolowe strony, zrodla, naglowki i tresci do przeniesienia sa opisane w:

```txt
docs/12-mapa-stron-i-tresci.md
```
