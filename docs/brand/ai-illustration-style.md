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
- ilustracje maja wspierac layout, a nie dominowac nad trescia.

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

Wariant tylko do sekcji z ciemnym tlem.

Zasady:

- tlo lub glowne obszary moga byc Brand_Dark `#0F1E34`,
- elementy akcentowe w Brand_Blue `#015BFE`,
- duzo kontrastu,
- bez czarnych detali ginacych na tle,
- obraz musi byc czytelny po osadzeniu w ciemnej sekcji.

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
Minimalist premium B2B MarTech illustration for a dark navy section of the Persooa website. Deep navy #0F1E34 background, restrained Brand Blue #015BFE accents, one clear abstract data/AI subject, subtle luminous connections, simple geometry, high contrast, elegant negative space. No text, no logo, no robots, no cyberpunk city, no overloaded data mesh, no purple/orange palette.
```

## Zasady generowania

- Generujemy mniej elementow, nie wiecej.
- Kazda ilustracja ma miec jeden temat.
- Jezeli ilustracja jest dla sekcji jasnej, domyslnie prosimy o biale lub bardzo jasne tlo.
- Jezeli ilustracja ma byc uniwersalna, przygotowujemy wariant na przezroczystym tle.
- Jezeli ilustracja jest ciemna, stosujemy ja tylko w dark sections.
- Nie generujemy tekstu w obrazie.
- Nie generujemy logo w obrazie.
- Nie generujemy twarzy ani postaci, chyba ze zostanie to osobno zatwierdzone.
- Finalne assety zapisujemy w `assets/exports/illustrations/`, a produkcyjne w `public/images/illustrations/`.

## Zatwierdzone przyklady

```txt
TODO: linki lub nazwy plikow
```

## Odrzucone przyklady

```txt
TODO: linki lub nazwy plikow
```
