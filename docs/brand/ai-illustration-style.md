# AI illustration style

## Cel

Stworzyc spojny styl ilustracji AI dla nowej strony Persooa.

## Kierunek

- nowoczesny MarTech,
- AI w e-commerce,
- dane i personalizacja,
- wzrost biznesowy,
- systemy polaczen,
- wysoka jakosc, bez stockowego wygladu,
- minimalistyczna forma,
- mniej elementow, wiecej oddechu,
- ilustracje w hero moga dominowac wizualnie po prawej stronie, ale nie moga konkurowac z tekstem.

## Zasada minimalizmu

Ilustracje AI dla strony Persooa powinny byc prostsze i bardziej kontrolowane niz typowe rozbudowane rendery AI.

Preferujemy:

- pojedynczy mocny motyw,
- oszczedna kompozycje,
- duzo negatywnej przestrzeni,
- proste formy geometryczne,
- delikatne polaczenia danych,
- subtelne gradienty,
- brak nadmiaru warstw i detali,
- czysty, premium B2B look.

Unikamy:

- przeładowanych scen,
- cyberpunkowego klimatu,
- skomplikowanych futurystycznych miast,
- zbyt wielu swiecacych linii,
- chaotycznych siatek danych,
- realistycznych robotow,
- zbyt ciemnych renderow,
- obrazow, ktore konkuruja z tekstem.

## Tla ilustracji

Tworzymy trzy typy ilustracji:

### 1. Ilustracje na bialym tle

Domyslny wariant dla wiekszosci sekcji contentowych.

Zasady:

- biale albo bardzo jasne tlo,
- delikatne elementy w Brand_Blue,
- mozliwe subtelne jasnoniebieskie gradienty,
- wysoki kontrast z tekstem,
- obraz nie powinien wygladac jak pelny banner reklamowy.

Zastosowanie:

- podstrony ofertowe,
- karty uslug,
- sekcje wyjasniajace,
- blog/Growth Hub,
- diagramy koncepcyjne.

### 2. Ilustracje na przezroczystym tle

Wariant do wklejania na rozne tla strony.

Zasady:

- obiekt/forma bez tla,
- brak cienia lub tylko bardzo subtelny cien,
- forma musi dzialac na bialym, jasnoniebieskim i ciemnym tle,
- preferowany finalny format: PNG/WebP z alpha, jezeli technicznie dostepny.

Zastosowanie:

- hero modules,
- sekcje ofertowe,
- CTA,
- dekoracyjne key visuale przy kartach.

### 3. Ilustracje dla dark sections

Wariant dla hero i najwazniejszych sekcji z ciemnym tlem.

Zasady:

- tlo lub glowne obszary moga byc near-black `#020306` albo Brand_Dark `#0F1E34`,
- elementy akcentowe w Brand_Blue `#015BFE`,
- dopuszczalny jest subtelny violet glow jako efekt swiatla, ale nie jako dominujaca paleta,
- duzo kontrastu,
- duzy, pojedynczy motyw po prawej stronie kadru,
- mozliwy efekt portalu, plytki, modulu, orbity lub warstwy danych,
- bez czarnych detali ginacych na tle,
- obraz musi byc czytelny po osadzeniu w ciemnej sekcji,
- lewa strona kadru musi zostawiac miejsce na tekst i gradient ochronny.

Zastosowanie:

- hero,
- CTA,
- sekcje technologiczne,
- sekcje danych/statystyk.

## Unikamy

- przesadnych robotow,
- neonowego cyberpunku,
- generycznych twarzy AI,
- chaotycznych gradientow,
- ilustracji, ktore nie wspieraja tresci,
- zbyt ciemnych, nieczytelnych obrazow,
- zbyt rozbudowanych scen,
- nadmiaru detali,
- tekstu w obrazie,
- logo w obrazie,
- efektu stockowego AI.

## Paleta

```txt
Brand_Blue: #015BFE
Brand_Dark: #0F1E34
White: #FFFFFF
Light_Blue: #F4F6FD
Light_Grey: #FAFAFA
Grey: #595959
```

## Prompty bazowe

### Prompt bazowy: jasne tlo

```txt
Minimalist premium B2B MarTech illustration for Persooa. White or very light background, one clear abstract subject, simple geometric forms, subtle blue data connections, clean negative space, Brand Blue #015BFE accents, pale blue #F4F6FD highlights, elegant and restrained. Show AI, customer data, automation or e-commerce growth as a simple abstract system. No text, no logo, no people, no robots, no cyberpunk, no busy scene, no dark background.
```

### Prompt bazowy: przezroczyste tlo

```txt
Minimalist premium B2B MarTech illustration object for Persooa, designed for transparent background. One clear abstract subject, simple modular geometry, subtle blue data connections, Brand Blue #015BFE accents, pale blue highlights, clean silhouette, generous padding, no text, no logo, no people, no robots, no busy details. Create as if it will be cut out and placed on white, pale blue or dark navy sections.
```

### Prompt bazowy: dark section

```txt
Premium B2B MarTech hero illustration for Persooa in a dark portal style. Near-black #020306 background with restrained Brand Blue #015BFE glow and a very subtle violet light accent, one clear abstract data/AI/e-commerce subject on the right side, floating modular platforms, luminous rings or data paths, high contrast, generous empty space on the left for headline and CTA. Elegant, cinematic, controlled, not cyberpunk. No text, no logo, no people, no robots, no city, no overloaded data mesh, no orange palette.
```

## Zasady generowania

- Generujemy mniej elementow, nie wiecej.
- Kazda ilustracja ma miec jeden temat.
- Jezeli ilustracja jest dla sekcji jasnej, domyslnie prosimy o biale lub bardzo jasne tlo.
- Jezeli ilustracja ma byc uniwersalna, przygotowujemy wariant na przezroczystym tle.
- Jezeli ilustracja jest ciemna, stosujemy ja tylko w dark sections.
- Hero homepage i hero podstron ofertowych korzystaja z dark portal patternu.
- Jezeli mamy tylko jasna ilustracje, osadzamy ja w hero przez dark overlay i blend, bez zmiany ukladu na karte.
- Nie generujemy tekstu w obrazie.
- Nie generujemy logo w obrazie.
- Nie generujemy twarzy ani postaci, chyba ze zostanie to osobno zatwierdzone.
- Finalne assety zapisujemy w `assets/exports/illustrations/`, a produkcyjne w `public/images/illustrations/`.

## Zatwierdzone przyklady

```txt
Do oceny klienta - pierwsza wygenerowana paczka minimalistycznych ilustracji:

assets/exports/illustrations/homepage-hero.png
assets/exports/illustrations/personalizacja-ai.png
assets/exports/illustrations/agenci-przychodu.png
assets/exports/illustrations/cdp.png
assets/exports/illustrations/agenci-pracy.png
assets/exports/illustrations/program-lojalnosciowy.png
assets/exports/illustrations/roi-w-90dni.png
assets/exports/illustrations/wyszukiwarka-ai.png
```

## Status pierwszej paczki

```txt
Status: robocze assety AI do prototypu
Tlo: jasne / minimalistyczne
Uzycie: karty oferty i hero podstron w prototypie
Do decyzji: czy klient akceptuje kierunek, czy generujemy wariant v2
```

## Odrzucone przyklady

```txt
TODO: linki lub nazwy plikow
```
