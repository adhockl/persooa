# Webflow content map

Mapowanie contentu z Webflow do nowej strony Next.js.

## Zrodlo

```txt
https://persooa.webflow.io/
```

Status:

- strona Webflow jest publicznie dostepna i moze byc uzyta jako robocze zrodlo contentu,
- HTML strony da sie pobrac i analizowac,
- Webflow zawiera zarowno realne tresci, jak i elementy placeholderowe,
- przed wdrozeniem trzeba potwierdzic, ktore sekcje sa finalne.

Data publikacji widoczna w kodzie Webflow:

```txt
Thu May 07 2026 09:46:45 GMT+0000
```

## Wstepnie zidentyfikowane elementy contentu

Nawigacja:

- Home,
- Oferta,
- Personalizacja AI,
- Agenci przychodu,
- CDP,
- Agenci pracy,
- Program Lojalnosciowy,
- ROI w 90 dni,
- Wyszukiwarka AI,
- Zostan Partnerem,
- Blog,
- Persooalize 360,
- Zapytaj o projekt.

Hero:

- tagline: `#1 Synerise Partner w Europie`,
- H1: `Dostarczamy ROI w 90 Dni`,
- opis: Persooa jako agencja dedykowana platformie Synerise, budujaca AI agents na fundamencie behavioralnego CDP dzialajacego w czasie rzeczywistym,
- CTA: `Zapytaj o projekt`,
- CTA secondary: `Wiecej o ROI w 90 dni`.

Sekcje:

- zaufanie marek w Europie,
- maksymalizacja wzrostu w e-commerce,
- oferta AI/CDP/agents/loyalty/search,
- case study Telco,
- program partnerski Synerise z Persooa,
- footer z adresem Puzzle Office, Norblin Factory, Warsaw,
- informacja, ze Persooa jest czescia RITS.

## Wykryte podstrony z Webflow

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

Pelna architektura podstron jest opisana w:

```txt
docs/11-struktura-podstron-serwisu.md
```

Do weryfikacji:

- placeholdery w hero tabs,
- placeholderowe logotypy w logo wall,
- powtorzenia linkow w footerze,
- nazwy i opisy ofert,
- finalnosc claimu Synerise Partner,
- poprawna pisownia CTA i etykiet,
- zgodnosc contentu z obecna strategia SEO.

| Sekcja Webflow | Docelowa strona | Status contentu | Status assetow | Uwagi SEO |
| --- | --- | --- | --- | --- |
| Header / nawigacja | Global Header | Do sprawdzenia | Logo do eksportu | Linki musza zostac zmapowane do finalnych URL-i |
| Hero ROI w 90 dni | Homepage | Roboczo uzywalne | Hero image z Webflow do weryfikacji | H1 i claim wymagaja porownania z obecnym SEO |
| Logo wall | Homepage | Placeholdery do wymiany | Logotypy klientow potrzebne od klienta | Nie publikowac logo bez zgody |
| Sekcja wzrostu e-commerce | Homepage | Do ekstrakcji i redakcji | Brak decyzji | Wazna sekcja pod frazy AI/e-commerce/automation |
| Oferta dropdown | Podstrony ofertowe | Roboczo uzywalne | Ikony do wymiany/eksportu | Slugi musza byc porownane z obecnymi URL-ami |
| Case study Telco | Case studies | Roboczo uzywalne | Obraz do weryfikacji | Wyniki +30%/+45% wymagaja zgody i kontekstu |
| Program partnerski | Partner page / sekcja | Roboczo uzywalne | Ikony do wymiany/eksportu | Potwierdzic, czy to element MVP |
| Footer | Global Footer | Do redakcji | Logo RITS do potwierdzenia | Linki prawne i adres musza byc finalne |
