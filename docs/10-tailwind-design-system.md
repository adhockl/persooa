# Material Design 3 / Material Web dla strony Persooa

## 1. Cel dokumentu

Ten dokument opisuje reuzywalny design system strony Persooa po migracji z Tailwind CSS na kierunek Material Design 3 / Material Web.

Aktualny prototyp nie laduje juz runtime Tailwind CDN. Warstwa UI sklada sie z:

- komponentow Material Web dla akcji i atomow interaktywnych,
- lokalnych tokenow Material Design 3 w `prototype/material.css`,
- brandowych komponentow i layoutow Persooa w `prototype/styles.css`.

Design system ma byc neutralny technologicznie. Oznacza to, ze mozna go wdrozyc zarowno w Astro, jak i w Next.js. Na tym etapie definiujemy:

- tokeny wizualne,
- stale paddingi i marginesy,
- grid,
- typografie,
- atomy UI,
- komponenty bazowe,
- reguly sekcji,
- reguly responsywnosci,
- dark sections,
- zasady uzywania assetow.

Ten dokument jest baza przed generowaniem pelnej strony.

## 2. Zrodla brandu

Design system bazuje na:

- Figma brandbook: `Persooa Rebranding`,
- kolorach z brandbooka,
- typografii Kanit,
- kierunku fotografii: `Abstract / Harmony / Technology / People / Work`,
- stylu ikon liniowych,
- dark sections wspieranych przez brandbook,
- content source z Webflow.

## 3. Glowne zalozenie wizualne

Strona ma wygladac jak nowoczesna marka B2B MarTech/AI:

- precyzyjna,
- technologiczna,
- jasna komunikacyjnie,
- elegancka, ale nie dekoracyjna,
- oparta o mocny kontrast bieli, granatu i intensywnego blue,
- z duza rola danych, metryk i case studies.

Unikamy:

- przypadkowych gradientow,
- nadmiaru kart,
- stockowego AI looku,
- przypadkowych kolorow spoza palety,
- zbyt miekkich, lifestyle'owych layoutow,
- kopiowania Webflow 1:1 bez korekty SEO i UX.

## 4. Tokeny kolorow

Kolory bazowe z brandbooka:

```txt
Brand Blue: #015BFE
Brand Dark: #0F1E34
White: #FFFFFF
Light Blue: #F4F6FD
Light Grey: #FAFAFA
Black: #000000
Grey: #595959
Highlight Mint: #41DBC3
Highlight Violet: #4E3FF6
```

CSS variables:

```css
:root {
  --color-brand-blue: #015BFE;
  --color-brand-dark: #0F1E34;
  --color-highlight-mint: #41DBC3;
  --color-highlight-violet: #4E3FF6;
  --color-white: #FFFFFF;
  --color-light-blue: #F4F6FD;
  --color-light-grey: #FAFAFA;
  --color-black: #000000;
  --color-grey: #595959;

  --color-background: var(--color-white);
  --color-foreground: var(--color-brand-dark);
  --color-muted: var(--color-grey);
  --color-border: #E6EAF2;
  --color-surface: var(--color-light-grey);
  --color-surface-blue: var(--color-light-blue);

  --gradient-text-highlight: linear-gradient(90deg, var(--color-highlight-mint) 0%, var(--color-highlight-violet) 100%);
}
```

Tailwind mapping:

```ts
colors: {
  brand: {
    blue: "#015BFE",
    dark: "#0F1E34",
    white: "#FFFFFF",
    "light-blue": "#F4F6FD",
    "light-grey": "#FAFAFA",
    "highlight-mint": "#41DBC3",
    "highlight-violet": "#4E3FF6",
    black: "#000000",
    grey: "#595959"
  },
  border: "#E6EAF2"
},
backgroundImage: {
  "text-highlight": "linear-gradient(90deg, #41DBC3 0%, #4E3FF6 100%)"
}
```

## 5. Reguly uzycia kolorow

### Jasne sekcje

Tlo:

```txt
bg-white
bg-brand-light-grey
bg-brand-light-blue
```

Tekst:

```txt
text-brand-dark
text-brand-grey
```

Akcent:

```txt
text-brand-blue
bg-brand-blue
```

Wyroznienie fragmentow naglowkow:

```txt
text-gradient-highlight
bg-text-highlight bg-clip-text text-transparent
```

Reguly:

- gradientu `#41DBC3 -> #4E3FF6` uzywamy tylko do fragmentow H1/H2/H3 lub krotkich emphasis spans,
- nie stosujemy go do dlugich akapitow, przyciskow ani calych sekcji,
- na ciemnym i jasnym tle tekst musi pozostac czytelny,
- gradient nie zastepuje koloru primary `Brand Blue`.

### Ciemne sekcje

Tlo:

```txt
bg-brand-dark
```

Tekst:

```txt
text-white
text-white/72
text-white/56
```

Akcent:

```txt
text-brand-blue
bg-brand-blue
border-white/12
```

### Niebieskie sekcje

Tlo:

```txt
bg-brand-blue
```

Tekst:

```txt
text-white
text-white/80
```

Akcent:

```txt
bg-white
text-brand-blue
border-white/20
```

## 6. Typografia

Font bazowy:

```txt
Kanit
```

Fallback:

```txt
system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
```

Tailwind font family:

```ts
fontFamily: {
  sans: ["Kanit", "system-ui", "sans-serif"]
}
```

## 7. Skala typografii

### Display

Do hero i najwazniejszych komunikatow.

```txt
text-display-xl: 72px / 1.0 / 600
text-display-lg: 64px / 1.0 / 600
text-display-md: 56px / 1.05 / 600
```

Tailwind classes:

```txt
text-5xl md:text-6xl lg:text-7xl font-semibold leading-none
```

### Headings

```txt
H1: 56-72px desktop, 40-48px mobile
H2: 40-56px desktop, 32-40px mobile
H3: 28-36px desktop, 24-28px mobile
H4: 22-28px
H5: 18-22px
H6: 16-18px
```

Tailwind recipes:

```txt
h1: text-5xl md:text-6xl lg:text-7xl font-semibold leading-none tracking-normal
h2: text-4xl md:text-5xl font-semibold leading-tight tracking-normal
h3: text-2xl md:text-3xl font-semibold leading-tight tracking-normal
h4: text-xl md:text-2xl font-medium leading-snug tracking-normal
h5: text-lg font-medium leading-snug tracking-normal
h6: text-base font-medium leading-snug tracking-normal
```

### Body

```txt
body-lg: text-lg leading-8
body-md: text-base leading-7
body-sm: text-sm leading-6
caption: text-xs leading-5
```

Reguly:

- nie uzywamy ujemnego letter spacingu,
- nie skalujemy fontow przez viewport width,
- dlugie teksty powinny miec `max-w-prose` lub `max-w-3xl`,
- naglowki w kartach sa mniejsze niz naglowki sekcji.

## 8. Spacing

Projekt opieramy o skale 4 px zgodna z Tailwind.

Najwazniejsze stale:

```txt
4px   = 1
8px   = 2
12px  = 3
16px  = 4
20px  = 5
24px  = 6
32px  = 8
40px  = 10
48px  = 12
64px  = 16
80px  = 20
96px  = 24
128px = 32
```

## 9. Paddingi sekcji

Sekcje maja miec stale warianty paddingu.

### Section padding desktop

```txt
section-sm: py-12 md:py-16
section-md: py-16 md:py-20
section-lg: py-20 md:py-28
section-xl: py-24 md:py-32
```

### Section padding mobile

```txt
mobile default: py-12
mobile dense: py-10
mobile hero: pt-28 pb-16
```

### Rekomendowane klasy

```txt
section-default: py-16 md:py-24
section-compact: py-12 md:py-16
section-large: py-20 md:py-32
hero-section: pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28
```

Regula:

- nie ustawiamy przypadkowych paddingow per sekcja,
- kazda sekcja korzysta z jednego z wariantow,
- wyjatki musza byc uzasadnione designem.

## 10. Marginesy wewnatrz sekcji

Stale odstepy:

```txt
eyebrow -> heading: mb-3
heading -> lead: mt-5
lead -> actions: mt-8
section header -> content grid: mt-12 md:mt-16
card title -> body: mt-3
card body -> action: mt-6
grid item gap: gap-6 md:gap-8
```

Przyklad naglowka sekcji:

```html
<div class="mx-auto max-w-3xl text-center">
  <p class="mb-3 text-sm font-medium uppercase text-brand-blue">Oferta</p>
  <h2 class="text-4xl font-semibold leading-tight text-brand-dark md:text-5xl">
    AI i automatyzacja dla wzrostu e-commerce
  </h2>
  <p class="mt-5 text-lg leading-8 text-brand-grey">
    ...
  </p>
</div>
```

## 11. Kontenery

Stale szerokosci:

```txt
container-sm: max-w-3xl
container-md: max-w-5xl
container-lg: max-w-7xl
container-xl: max-w-[1440px]
```

Rekomendowany container globalny:

```txt
mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8
```

Warianty:

```txt
container-narrow: mx-auto w-full max-w-3xl px-5 sm:px-6 lg:px-8
container-default: mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8
container-wide: mx-auto w-full max-w-[1440px] px-5 sm:px-6 lg:px-10
```

## 12. Grid

### Grid bazowy

Na desktopie stosujemy 12-kolumnowa logike layoutu.

Tailwind:

```txt
grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-12
```

### Typowe uklady

Hero split:

```txt
lg:grid-cols-12
text: lg:col-span-6
visual: lg:absolute lg:inset-y-0 lg:left-[48%] lg:right-0
```

Reguly dla hero z dedykowana ilustracja:

- tekst trzymamy po lewej w maksymalnie 6 kolumnach,
- ilustracja jest prosta, produktowa, ma pelna wysokosc hero i jest przypieta do prawej krawedzi kontenera,
- ilustracja ma jeden glowny obiekt i maksymalnie kilka elementow pomocniczych,
- nie oprawiamy ilustracji w karte, mockup, ramke ani shadow-card,
- overlay gradientowy musi chronić czytelnosc tekstu,
- na mobile tekst jest pierwszy, ilustracja druga,
- wariant `dark` korzysta z ilustracji dark-mode,
- wariant `light` korzysta z jasnej ilustracji.
- wybrany fragment H1 powinien korzystac z `text-gradient-highlight`.

Sekcja tekst + lista:

```txt
intro: lg:col-span-5
content: lg:col-span-7
```

Karty 3 kolumny:

```txt
grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3
```

Karty 4 kolumny:

```txt
grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4
```

Logo wall:

```txt
grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3 lg:grid-cols-6
```

Stats:

```txt
grid grid-cols-2 gap-6 lg:grid-cols-4
```

Case study feature:

```txt
grid grid-cols-1 gap-8 lg:grid-cols-12
image: lg:col-span-6
content: lg:col-span-6
```

## 13. Radius

Tokeny:

```txt
radius-sm: rounded-md     6px
radius-md: rounded-lg     8px
radius-lg: rounded-xl     12px
radius-xl: rounded-2xl    16px
```

Reguly:

- przyciski: `rounded-full` albo `rounded-lg` - do decyzji po pierwszym mockupie,
- karty: `rounded-xl`,
- inputy: `rounded-lg`,
- duze visuale: `rounded-2xl`,
- nie robimy zbyt miekkiego SaaS looku, jesli nie pasuje do brandbooka.

Rekomendacja dla Persooa:

```txt
buttons: rounded-full
cards: rounded-xl
inputs: rounded-lg
image masks: rounded-2xl
```

## 14. Cienie i border

Strona powinna opierac sie bardziej na kontrastach, przestrzeni i kolorze niz na mocnych cieniach.

Tokeny:

```txt
shadow-soft: 0 16px 40px rgba(15, 30, 52, 0.08)
shadow-card: 0 1px 2px rgba(15, 30, 52, 0.06)
border-default: border border-[#E6EAF2]
border-dark: border border-white/12
```

Reguly:

- karty na jasnym tle: border + subtelny hover,
- karty na ciemnym tle: border white/12,
- cienie tylko dla elementow wymagajacych podbicia hierarchii,
- nie stosujemy mocnych drop shadow w kazdej karcie.

## 15. Atom: Section

Sekcja jest podstawowym wrapperem strony.

Warianty:

```txt
default: bg-white text-brand-dark
muted: bg-brand-light-grey text-brand-dark
light-blue: bg-brand-light-blue text-brand-dark
dark: bg-brand-dark text-white
blue: bg-brand-blue text-white
```

Recipe:

```html
<section class="bg-white py-16 md:py-24">
  <div class="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
    ...
  </div>
</section>
```

## 16. Atom: Container

Recipe:

```html
<div class="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
  ...
</div>
```

Warianty:

```txt
narrow: max-w-3xl
default: max-w-7xl
wide: max-w-[1440px]
full: max-w-none
```

## 17. Atom: Eyebrow

Do malego labela nad H1/H2.

Jasne tlo:

```txt
text-sm font-medium uppercase tracking-normal text-brand-blue
```

Ciemne tlo:

```txt
text-sm font-medium uppercase tracking-normal text-white/72
```

Niebieskie tlo:

```txt
text-sm font-medium uppercase tracking-normal text-white/80
```

## 18. Atom: Button

### Primary

Jasne tlo:

```txt
inline-flex h-12 items-center justify-center rounded-full bg-brand-blue px-6 text-base font-medium text-white transition hover:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue disabled:pointer-events-none disabled:opacity-50
```

Ciemne tlo:

```txt
inline-flex h-12 items-center justify-center rounded-full bg-brand-blue px-6 text-base font-medium text-white transition hover:bg-white hover:text-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:pointer-events-none disabled:opacity-50
```

### Secondary

Jasne tlo:

```txt
inline-flex h-12 items-center justify-center rounded-full border border-brand-dark/12 bg-white px-6 text-base font-medium text-brand-dark transition hover:border-brand-blue hover:text-brand-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue
```

Ciemne tlo:

```txt
inline-flex h-12 items-center justify-center rounded-full border border-white/16 bg-white/0 px-6 text-base font-medium text-white transition hover:bg-white hover:text-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white
```

### Link button

```txt
inline-flex items-center gap-2 text-base font-medium text-brand-blue transition hover:text-brand-dark
```

Reguly:

- kazde glowne CTA powinno miec primary button,
- secondary sluzy do drugiej akcji,
- nie uzywamy wiecej niz dwoch CTA w jednej sekcji hero,
- przyciski musza miec focus-visible.

## 19. Atom: Badge

Default:

```txt
inline-flex items-center rounded-full bg-brand-light-blue px-3 py-1 text-sm font-medium text-brand-blue
```

Dark:

```txt
inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white
```

Blue:

```txt
inline-flex items-center rounded-full bg-white/14 px-3 py-1 text-sm font-medium text-white
```

Uzycie:

- tagi uslug,
- branze,
- case studies,
- statusy typu `ROI w 90 dni`,
- kategorie bloga.

## 20. Atom: Card

### Card default

```txt
rounded-xl border border-border bg-white p-6 transition hover:border-brand-blue/40 hover:shadow-[0_16px_40px_rgba(15,30,52,0.08)]
```

### Card muted

```txt
rounded-xl border border-border bg-brand-light-grey p-6
```

### Card dark

```txt
rounded-xl border border-white/12 bg-white/[0.03] p-6 text-white
```

### Card blue

```txt
rounded-xl border border-white/16 bg-white/10 p-6 text-white
```

Reguly:

- karty sluza do powtarzalnych elementow,
- nie zagniezdzamy kart w kartach,
- karty nie powinny byc jedynym sposobem budowy strony,
- karta ma miec stabilny padding: `p-6` lub `p-8`.

## 21. Atom: Icon

Biblioteka:

```txt
Lucide
```

Rozmiary:

```txt
icon-sm: h-5 w-5
icon-md: h-6 w-6
icon-lg: h-10 w-10
icon-xl: h-12 w-12
```

Wrapper:

```txt
flex h-12 w-12 items-center justify-center rounded-xl bg-brand-light-blue text-brand-blue
```

Dark wrapper:

```txt
flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white
```

Reguly:

- ikony liniowe,
- grubosc kreski spójna,
- nie mieszamy wielu bibliotek ikon,
- ikony musza miec znaczenie, nie dekoracje bez celu.
- w prototypie ikony renderujemy przez `data-lucide`, a po zmianie routingu odswiezamy `lucide.createIcons()`.

## 22. Atom: Input

Recipe:

```txt
h-12 w-full rounded-lg border border-border bg-white px-4 text-base text-brand-dark placeholder:text-brand-grey/70 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 disabled:cursor-not-allowed disabled:bg-brand-light-grey disabled:opacity-70
```

Textarea:

```txt
min-h-32 w-full rounded-lg border border-border bg-white px-4 py-3 text-base text-brand-dark placeholder:text-brand-grey/70 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10
```

Label:

```txt
mb-2 block text-sm font-medium text-brand-dark
```

Error:

```txt
mt-2 text-sm text-red-600
```

## 23. Atom: Logo

Reguly:

- logo blue na jasnym tle,
- logo white na Brand_Dark,
- logo white na Brand_Blue,
- nie stosujemy logo na chaotycznym zdjeciu bez overlayu,
- zachowujemy clear space z brandbooka.

Rozmiary:

```txt
header desktop: h-8
header mobile: h-7
footer: h-8 lub h-10
hero/brand moments: wedlug layoutu
```

## 24. Atom: Divider

Jasne tlo:

```txt
h-px w-full bg-border
```

Ciemne tlo:

```txt
h-px w-full bg-white/12
```

## 25. Molecule: SectionHeader

Wariant center:

```html
<div class="mx-auto max-w-3xl text-center">
  <p class="mb-3 text-sm font-medium uppercase text-brand-blue">Eyebrow</p>
  <h2 class="text-4xl font-semibold leading-tight text-brand-dark md:text-5xl">
    Section heading
  </h2>
  <p class="mt-5 text-lg leading-8 text-brand-grey">
    Supporting text.
  </p>
</div>
```

Wariant left:

```txt
max-w-3xl text-left
```

Wariant split:

```txt
grid grid-cols-1 gap-8 lg:grid-cols-12
heading: lg:col-span-5
lead: lg:col-span-6 lg:col-start-7
```

## 26. Molecule: FeatureCard

Struktura:

```txt
icon
title
description
optional link
```

Recipe:

```html
<article class="rounded-xl border border-border bg-white p-6 transition hover:border-brand-blue/40">
  <div class="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-light-blue text-brand-blue">
    ...
  </div>
  <h3 class="text-xl font-medium leading-snug text-brand-dark">Title</h3>
  <p class="mt-3 text-base leading-7 text-brand-grey">Description</p>
</article>
```

## 27. Molecule: Stat

Recipe:

```html
<div>
  <div class="text-4xl font-semibold leading-none text-brand-blue md:text-5xl">+45%</div>
  <p class="mt-3 text-sm leading-6 text-brand-grey">Opis metryki</p>
</div>
```

Dark:

```txt
number: text-white
label: text-white/64
```

## 27.1 Molecule: ChartPanel

Charty sluza do pokazania trendu, porownania scenariuszy, KPI oraz wynikow case studies. Nie powinny wygladac jak generyczny dashboard ani jak screenshot narzedzia.

Rekomendacja:

- w statycznym prototypie uzywamy `Chart.js` z CDN, poniewaz pasuje do obecnego stacku HTML/CSS/Vanilla JS i ma animacje out of the box; prototyp ma canvas fallback na wypadek niedostepnosci CDN,
- w finalnym Next.js albo Astro z React islands rekomendowanym wyborem domyslnym jest `Recharts`, poniewaz latwo mapuje sie na komponenty React, `ResponsiveContainer` i tokeny design systemu,
- przy bardzo rozbudowanych dashboardach, mapach ciepla, wielu seriach albo potrzebie zaawansowanej interakcji mozna rozwazyc `Apache ECharts`, ale tylko jesli zakres danych to uzasadnia.

Struktura:

```txt
section: bg-brand-light-blue albo bg-white
panel: rounded-2xl border border-border bg-white shadow-soft
chart container: position relative, dedicated wrapper, min-h-[320px]
legend: custom HTML, nie domyslna legenda biblioteki
tooltip: brand-dark background, white text, subtle border
```

Tokeny:

```txt
primary series: Brand Blue #015BFE
secondary series: Highlight Mint #41DBC3
tertiary/accent: Highlight Violet #4E3FF6
grid: Border #E6EAF2 with opacity
axis text: Grey #595959
tooltip bg: Brand Dark #0F1E34
```

Reguly:

- kazdy chart musi miec tytul, kontekst i opis metryki,
- osie i tooltipy musza uzywac fontu Kanit,
- animacja ma byc spokojna: ok. 700-1200 ms, easing `easeOutQuart` lub zblizony,
- respektujemy `prefers-reduced-motion` i wylaczamy animacje dla uzytkownikow z ograniczeniem ruchu,
- chart nie moze zmieniac layoutu po zaladowaniu; wrapper ma miec stabilna wysokosc,
- wykresy case studies uzywaja tylko danych zatwierdzonych przez klienta,
- na mobile redukujemy liczbe labeli i nie upychamy legendy w plot area.

## 28. Molecule: CaseStudyCard

Struktura:

```txt
image / logo
industry badge
title
challenge summary
2-3 metrics
CTA
```

Recipe:

```txt
rounded-xl border border-border bg-white overflow-hidden
image: aspect-[16/10] w-full object-cover
content: p-6 md:p-8
metrics: grid grid-cols-2 gap-4
```

Reguly:

- kazda metryka musi miec kontekst,
- wyniki wymagaja zgody klienta,
- karta musi linkowac do pelnego case study.

## 29. Molecule: LogoWall

Recipe:

```txt
grid grid-cols-2 items-center gap-x-8 gap-y-8 sm:grid-cols-3 lg:grid-cols-6
logo wrapper: flex h-16 items-center justify-center
logo image: max-h-8 w-auto opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0
```

Reguly:

- tylko logotypy zatwierdzone,
- SVG preferowane,
- wersje mono moga byc uzyte dla spójnosci,
- na dark section logo musza miec wystarczajacy kontrast.

## 30. Organism: Header

Desktop:

```txt
height: h-20
container: max-w-7xl px-5 sm:px-6 lg:px-8
logo left
nav center/left
CTA right
language switcher optional
```

Recipe:

```txt
sticky top-0 z-50 border-b border-border/80 bg-white/90 backdrop-blur
```

Dark transparent hero variant:

```txt
absolute top-0 z-50 w-full bg-transparent text-white
```

Reguly:

- nav nie moze byc zbyt rozbudowany na mobile,
- Oferta moze miec mega menu,
- CTA: `Zapytaj o projekt`,
- secondary CTA: `Persooalize 360`, jesli zostanie w zakresie.

## 31. Organism: Footer

Struktura:

- logo,
- adres,
- kontakt,
- RITS group,
- linki ofertowe,
- linki zasobow,
- linki prawne,
- social links.

Wariant:

```txt
bg-brand-dark text-white
py-16 md:py-20
border top: border-white/12
```

## 32. Organism: Hero

Hero dla homepage i podstron z dedykowana ilustracja ma dwa rownoprawne warianty do wyboru: `dark` i `light`. Oba korzystaja z tego samego ukladu: tekst po lewej, prosty produktowy visual po prawej, bez karty i bez ramki.

- eyebrow,
- H1,
- lead,
- primary CTA,
- secondary CTA,
- dedykowana ilustracje po prawej,
- opcjonalnie metryki pod CTA.

Warianty:

```txt
dark: near-black background, bialy tekst, bialy primary CTA, ilustracja z assets/exports/illustrations/dark/
light: biale/jasnoniebieskie background, ciemny tekst, niebieski primary CTA, ilustracja z assets/exports/illustrations/
```

Struktura:

```txt
section: overflow-hidden pt-24 md:pt-28
container: relative mx-auto grid min-h-[720px] max-w-7xl items-center lg:grid-cols-12
content: relative z-10 max-w-2xl lg:col-span-6
visual: lg:absolute lg:inset-y-0 lg:left-[48%] lg:right-0
image: h-full w-full object-cover object-right, bez ramki i bez karty
```

Warstwa wizualna dark:

```txt
background: near-black / brand-dark
accent: Brand_Blue + bardzo male akcenty Highlight Mint / Highlight Violet
grid/noise: bardzo subtelne, tylko po stronie visuala
overlay: linear/radial gradients zapewniajace kontrast tekstu
CTA primary: bialy pill na ciemnym tle
CTA secondary: transparentny pill z border-white/16
```

Warstwa wizualna light:

```txt
background: white / Light_Blue
accent: subtelny Brand_Blue + bardzo male akcenty Highlight Mint / Highlight Violet
grid/noise: bardzo subtelne, jasnoniebieskie
overlay: white gradients zapewniajace kontrast tekstu
CTA primary: Brand_Blue pill
CTA secondary: bialy pill z border brand-dark/14
```

Reguly:

- H1 musi byc konkretny i SEO-friendly,
- fragment H1 moze uzywac `text-gradient-highlight`, np. produkt, kategoria albo najwazniejszy wynik,
- Webflow content `Dostarczamy ROI w 90 Dni` moze byc baza,
- nie uzywamy placeholderow z Webflow,
- CTA musi byc widoczne nad foldem,
- dedykowane ilustracje w hero zawsze maja osobny asset light i dark,
- ilustracji nie przycinamy do malego prostokata, ale nie budujemy z niej rozbudowanej sceny,
- ilustracja ma byc spokojna: bez portali, light trails, czasteczek i zlozonych sieci danych,
- dark nie uzywa jasnej ilustracji przyciemnionej samym CSS-em, jezeli istnieje plik dark-mode,
- light nie uzywa ilustracji dark-mode.

## 33. Organism: OfferGrid

Karty ofertowe:

- Personalizacja AI,
- Agenci przychodu,
- CDP,
- Agenci pracy,
- Program Lojalnosciowy,
- ROI w 90 dni,
- Wyszukiwarka AI.

Layout:

```txt
grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3
```

Reguly:

- kazda karta ma icon, title, description, link,
- opisy musza byc konkretne,
- slugi musza byc zatwierdzone przez SEO.

## 34. Organism: ProcessSection

Do procesu wdrozenia / ROI w 90 dni.

Layout:

```txt
grid grid-cols-1 gap-6 lg:grid-cols-5
```

Kroki:

1. Diagnoza.
2. Strategia danych.
3. Implementacja.
4. Aktywacja scenariuszy.
5. Optymalizacja.

Reguly:

- kazdy krok ma numer, tytul, opis,
- na mobile kroki ida jeden pod drugim,
- na desktopie moga byc timeline albo grid.

## 35. Organism: CTASection

Wariant dark:

```txt
rounded-2xl bg-brand-dark px-6 py-10 text-white md:px-12 md:py-14
```

Wariant blue:

```txt
rounded-2xl bg-brand-blue px-6 py-10 text-white md:px-12 md:py-14
```

Reguly:

- jedna glowna akcja,
- krotki tekst,
- nie przesadzamy z formularzem w kazdej sekcji,
- CTA musi pasowac do intencji strony.

## 36. Formularze

Form layout:

```txt
grid grid-cols-1 gap-5 md:grid-cols-2
full width fields: md:col-span-2
submit row: md:col-span-2
```

Wymagane:

- label,
- input,
- error,
- zgody,
- stan loading,
- stan success,
- stan error,
- tracking eventu konwersji.

## 37. Dark sections

Na start rekomendujemy dark sections zamiast pelnego toggle dark mode.

Sekcje, ktore moga byc dark:

- hero,
- CTA,
- statystyki,
- technology/process,
- footer,
- wybrane case study.

Reguly:

- tekst minimum `text-white/72` dla body,
- bordery `border-white/12`,
- karty `bg-white/[0.03]`,
- nie uzywamy ciemnych zdjec bez overlayu,
- logo musi byc white variant.

## 38. Responsive rules

Breakpoints:

```txt
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

Reguly:

- mobile-first,
- tekst nie moze wyjsc poza kontener,
- gridy na mobile zawsze 1 kolumna, chyba ze logo/statystyki,
- hero na mobile: tekst przed visualem,
- header mobile jako drawer,
- CTA zawsze widoczne i latwe do klikniecia,
- minimalny tap target: 44px.

## 39. Accessibility

Wymagania:

- focus-visible dla kazdego elementu interaktywnego,
- kontrast tekstu na blue/dark sprawdzony,
- alt text dla obrazow informacyjnych,
- puste alty dla dekoracyjnych obrazow,
- jeden H1 na strone,
- logiczna kolejnosc naglowkow,
- linki maja czytelny tekst,
- formularze maja labels.

## 40. Tailwind config proposal

Przyklad konfiguracji:

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#015BFE",
          dark: "#0F1E34",
          white: "#FFFFFF",
          "light-blue": "#F4F6FD",
          "light-grey": "#FAFAFA",
          black: "#000000",
          grey: "#595959",
        },
        border: "#E6EAF2",
      },
      fontFamily: {
        sans: ["Kanit", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 16px 40px rgba(15, 30, 52, 0.08)",
        card: "0 1px 2px rgba(15, 30, 52, 0.06)",
      },
      maxWidth: {
        "8xl": "1440px",
      },
    },
  },
};

export default config;
```

## 41. Minimalny zestaw komponentow przed budowa strony

Przed generowaniem calej strony tworzymy:

- Section,
- Container,
- SectionHeader,
- Button,
- Badge,
- Card,
- Icon,
- Input,
- Textarea,
- Checkbox,
- Header,
- Footer,
- Hero,
- HeroTitleEffect,
- LogoStrip,
- ProblemSolutionCard,
- ServiceCard,
- FrameworkCard,
- VisualSystemCard,
- IntegrationTile,
- ResultStat,
- CxFrameworkPillar,
- MigrationStepCard,
- OfferGrid,
- EngagementModelCard,
- FaqItem,
- StatsBand,
- CaseStudyCard,
- CTASection,
- LogoWall.

## 42. Kolejnosc pracy

1. Zatwierdzic tokeny: kolory, font, spacing, radius.
2. Zatwierdzic typografie.
3. Zatwierdzic atomy: Button, Badge, Card, Input, Icon.
4. Zatwierdzic layout: Section, Container, Grid.
5. Zatwierdzic Header i Footer.
6. Zatwierdzic Hero homepage.
7. Zatwierdzic OfferGrid.
8. Zatwierdzic CaseStudyCard i CTA.
9. Dopiero potem skladac pelne widoki stron.

## 43. Decyzje do potwierdzenia

Przed implementacja strony trzeba potwierdzic:

- czy Kanit zostaje jako jedyny font,
- czy mamy pliki `.woff2`,
- czy stosujemy tylko dark sections czy pelny dark mode,
- czy buttony maja byc `rounded-full` czy `rounded-lg`,
- czy karty maja byc bardziej flat czy z subtelnym shadow,
- czy ilustracje AI maja zastapic key visuale z Webflow,
- ktore logotypy klientow mozna pokazac,
- ktore zdjecia zespolu sa finalne.

## 44. Zasada koncowa

Design system jest warstwa bazowa. Pelne strony skladamy dopiero po zatwierdzeniu tokenow, atomow i ukladow sekcji.

Dzieki temu strona bedzie spojna, latwa do utrzymania, zgodna z brandbookiem i gotowa do dalszej rozbudowy.
