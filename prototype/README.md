# Persooa frontend prototype

To jest pierwszy statyczny prototyp strony Persooa.

Cel:

- sprawdzic kierunek UI,
- przetestowac kierunek Material Design 3 / Material Web,
- pokazac homepage i podstrony ofertowe,
- pokazac animowany wykres danych ostylowany design systemem,
- pokazac katalog Design System z chartami i atomami UI,
- przygotowac strukture do przeniesienia do Astro albo Next.js po decyzji technologicznej.

Stack UI:

- Material Web dla akcji i atomow interaktywnych,
- lokalna warstwa `material.css` z tokenami Material Design 3 i kompatybilnoscia layoutu prototypu,
- bez runtime Tailwind CDN.

Uruchomienie:

```txt
python3 -m http.server 4173
```

Adres:

```txt
http://localhost:4173/prototype/
```

Design System:

```txt
http://localhost:4173/prototype/#/design-system
http://localhost:4173/prototype/#/design-system/charts
http://localhost:4173/prototype/#/design-system/atomy-ui
http://localhost:4173/prototype/#/design-system/sekcje
```

Uwaga:

To nie jest finalna implementacja SEO. Finalne URL-e, `hreflang`, metadata i sitemap zostana wdrozone w docelowym frameworku.
