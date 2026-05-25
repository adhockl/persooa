# Tokenizacja w design systemie strony Persooa

## 1. Cel tokenizacji

Tokenizacja pozwala opisac wyglad strony jako zestaw kontrolowanych wartosci: kolorow, typografii, spacingu, promieni, cieni i stanow. Dzieki temu projekt jest spojny, latwiejszy do utrzymania i mozliwy do przekazania klientowi w kodzie.

Tokeny powinny zostac zapisane w:

- konfiguracji Tailwind,
- pliku CSS z custom properties,
- dokumentacji design systemu,
- komponentach UI.

## 2. Zalozenie wizualne

Kierunek wizualny:

- enterprise MarTech,
- AI-powered e-commerce growth,
- nowoczesny, ale wiarygodny,
- bardziej konsulting technologiczny niz klasyczna agencja marketingowa,
- czysty layout,
- mocne dane i metryki,
- oszczedne efekty wizualne.

Styl powinien wspierac komunikaty:

- ROI w 90 dni,
- AI w e-commerce,
- integracja danych,
- automatyzacja,
- personalizacja,
- wzrost konwersji i LTV.

## 3. Kolory

Finalne kolory wymagaja potwierdzenia z brandbookiem Persooa. Ponizszy zestaw jest rekomendacja startowa.

### Kolory bazowe

```txt
--color-background: #FFFFFF;
--color-surface: #FAFAFA;
--color-surface-strong: #F4F6FD;
--color-foreground: #0F1E34;
--color-muted: #595959;
--color-border: #E6EAF2;
```

### Kolory brandowe

```txt
--color-primary: #015BFE;
--color-primary-foreground: #FFFFFF;
--color-brand-blue: #015BFE;
--color-brand-dark: #0F1E34;
--color-brand-black: #000000;
--color-accent-ai: #015BFE;
--color-accent-light: #F4F6FD;
--color-highlight-mint: #41DBC3;
--color-highlight-violet: #4E3FF6;
--gradient-text-highlight: linear-gradient(90deg, var(--color-highlight-mint) 0%, var(--color-highlight-violet) 100%);
```

### Gradient tekstowy

Gradient `#41DBC3 -> #4E3FF6` jest tokenem do wyrozniania fragmentow tresci w H1/H2/H3.

```css
.text-gradient-highlight {
  background: var(--gradient-text-highlight);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}
```

Reguly:

- stosujemy na krotkich `span` wewnatrz naglowkow,
- nie kolorujemy gradientem calego dlugiego naglowka, jezeli pogarsza to czytelnosc,
- nie stosujemy do body copy ani dlugich list,
- gradient jest akcentem contentowym, nie zamiennikiem `--color-primary`.

### Kolory semantyczne

```txt
--color-success: #12B76A;
--color-warning: #F79009;
--color-error: #F04438;
--color-info: #2E90FA;
```

### Kolory dla sekcji

```txt
--section-default: #FFFFFF;
--section-muted: #FAFAFA;
--section-dark: #0F1E34;
--section-accent: #015BFE;
--section-light-blue: #F4F6FD;
```

## 4. Typografia

Rekomendowane fonty zgodne z brandbookiem:

- podstawowy: Kanit,
- do potwierdzenia: czy Kanit stosujemy takze dla dluzszych tresci blogowych,
- fallback: system sans-serif.

### Skala typograficzna

```txt
--font-size-xs: 0.75rem;
--font-size-sm: 0.875rem;
--font-size-base: 1rem;
--font-size-lg: 1.125rem;
--font-size-xl: 1.25rem;
--font-size-2xl: 1.5rem;
--font-size-3xl: 1.875rem;
--font-size-4xl: 2.25rem;
--font-size-5xl: 3rem;
--font-size-6xl: 3.75rem;
```

### Wagi fontu

```txt
--font-weight-light: 300;
--font-weight-regular: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
```

### Line-height

```txt
--line-height-tight: 1.1;
--line-height-snug: 1.2;
--line-height-normal: 1.5;
--line-height-relaxed: 1.7;
```

Zasady:

- H1 powinien byc krotki i mocny.
- H2 opisuje sekcje, nie powtarza hasel reklamowych.
- Body text powinien byc latwy do skanowania.
- Nie stosujemy skalowania fontu zalezne od szerokosci viewportu.

## 5. Spacing

Spacing oparty o skale 4 px:

```txt
--space-1: 0.25rem;
--space-2: 0.5rem;
--space-3: 0.75rem;
--space-4: 1rem;
--space-5: 1.25rem;
--space-6: 1.5rem;
--space-8: 2rem;
--space-10: 2.5rem;
--space-12: 3rem;
--space-16: 4rem;
--space-20: 5rem;
--space-24: 6rem;
--space-32: 8rem;
```

Zasady:

- sekcje homepage: 80-128 px paddingu pionowego na desktopie,
- sekcje mobilne: 48-72 px paddingu pionowego,
- gridy: 24-32 px gap,
- formularze: 16-24 px gap.

## 6. Radius

```txt
--radius-xs: 0.25rem;
--radius-sm: 0.375rem;
--radius-md: 0.5rem;
--radius-lg: 0.75rem;
--radius-xl: 1rem;
```

Zasady:

- komponenty UI: najczesciej `md`,
- karty: `md` lub `lg`,
- przyciski: `md`,
- nie uzywamy przesadnie zaokraglonych kart, jezeli nie wynika to z brandu.

## 7. Cienie

```txt
--shadow-xs: 0 1px 2px rgba(16, 24, 40, 0.05);
--shadow-sm: 0 1px 3px rgba(16, 24, 40, 0.10);
--shadow-md: 0 4px 12px rgba(16, 24, 40, 0.10);
--shadow-lg: 0 12px 32px rgba(16, 24, 40, 0.12);
```

Zasady:

- cienie wspieraja hierarchie, nie dekoruja strony,
- sekcje nie powinny wygladac jak zbior losowych kart,
- dark mode nie jest wymagany na start, chyba ze klient go oczekuje.

## 8. Breakpointy

Mozemy przyjac standard Tailwind:

```txt
sm: 640px;
md: 768px;
lg: 1024px;
xl: 1280px;
2xl: 1536px;
```

Zasady:

- mobile-first,
- hero i formularze musza byc w pelni czytelne na mobile,
- mega-menu zmienia sie w drawer na mobile,
- logotypy klientow i partnerow powinny miec stabilne proporcje.

## 9. Grid i kontenery

Kontenery:

```txt
--container-narrow: 760px;
--container-default: 1180px;
--container-wide: 1360px;
```

Typowe gridy:

- 1 kolumna mobile,
- 2 kolumny tablet,
- 3 kolumny desktop dla ofert,
- 4 kolumny desktop dla kompetencji/statystyk,
- 5-6 kolumn dla logotypow.

## 10. Stany komponentow

Kazdy interaktywny komponent musi miec:

- hover,
- focus-visible,
- active,
- disabled,
- loading, jesli dotyczy.

Focus state:

```txt
--focus-ring: 0 0 0 3px rgba(0, 184, 255, 0.30);
```

## 11. Animacje

Animacje powinny byc subtelne:

- fade-in sekcji,
- przesuniecie o 8-16 px,
- hover na kartach,
- plynne otwieranie accordion,
- carousel tylko tam, gdzie ma sens.

Zasady:

- animacje nie moga pogarszac Core Web Vitals,
- wszystkie efekty powinny respektowac `prefers-reduced-motion`,
- nie opieramy przekazu na animacjach, tresc musi byc czytelna bez nich.

## 12. Tokeny contentowe

Warto zdefiniowac stale komunikacyjne:

```txt
brand.claim = "We maximize e-commerce growth"
brand.promise = "AI w e-commerce z mierzalnym ROI w 90 dni"
cta.primary = "Umow rozmowe"
cta.roi = "Sprawdz, czy kwalifikujesz sie do programu ROI"
cta.audit = "Zamow bezplatna diagnoze"
```

## 13. Przykladowe mapowanie do Tailwind

```ts
theme: {
  extend: {
    colors: {
      background: "var(--color-background)",
      foreground: "var(--color-foreground)",
      primary: "var(--color-primary)",
      "brand-blue": "var(--color-brand-blue)",
      "brand-dark": "var(--color-brand-dark)",
      "accent-ai": "var(--color-accent-ai)",
      "accent-light": "var(--color-accent-light)",
      "highlight-mint": "var(--color-highlight-mint)",
      "highlight-violet": "var(--color-highlight-violet)",
      border: "var(--color-border)",
      muted: "var(--color-muted)"
    },
    backgroundImage: {
      "text-highlight": "var(--gradient-text-highlight)"
    },
    borderRadius: {
      sm: "var(--radius-sm)",
      md: "var(--radius-md)",
      lg: "var(--radius-lg)"
    },
    boxShadow: {
      sm: "var(--shadow-sm)",
      md: "var(--shadow-md)",
      lg: "var(--shadow-lg)"
    }
  }
}
```

## 14. Co trzeba potwierdzic z klientem

- aktualne logo w SVG,
- brandbook,
- finalna paleta kolorow,
- licencje fontow,
- zasady uzycia logotypow klientow,
- zdjecia zespolu i biura,
- key visuale z Webflow,
- czy zachowujemy obecne grafiki,
- czy projekt ma miec wariant dark sections.
