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

## Styl referencyjny v3

Nowy kierunek ilustracji jest prosty, produktowy i spokojny. Obraz ma wygladac jak pojedynczy, dopracowany element interfejsu albo abstrakcyjny obiekt technologiczny, a nie rozbudowana scena AI.

Preferujemy:

- jeden glowny obiekt: kafel, modul, prosty wykres, slupki, hub danych albo abstrakcyjna ikona,
- maksymalnie 2-3 male elementy pomocnicze,
- szklisty albo satynowy material, bez przesadnego efektu sci-fi,
- Brand_Blue jako glowny akcent,
- Highlight Mint i Highlight Violet tylko jako bardzo male akcenty,
- maksymalnie 3-5 cienkich linii polaczen,
- bardzo subtelny cien albo halo, bez magicznej poswiaty,
- jasne albo ciemne tlo bez rozbudowanej scenografii,
- duze puste obszary,
- kompozycje czytelna jako maly obrazek na stronie.

Unikamy:

- wielu planow i rozbudowanych scen 3D,
- postaci, robotow, twarzy i miasta,
- portali, tuneli, orbitali i magicznych przejsc,
- agresywnego cyberpunku,
- strumieni swiatla, iskier, czasteczek i efektu kosmicznego,
- przypadkowych ikon aplikacji, logo i tekstu,
- zbyt realistycznego renderu,
- setek linii danych,
- mieszania wielu tematow w jednym obrazie,
- elementow wygladajacych jak dashboard screenshot.

## Tla ilustracji

Tworzymy trzy typy ilustracji:

### 1. Ilustracje na bialym tle

Domyslny wariant dla hero light i wiekszosci sekcji contentowych.

Zasady:

- biale albo bardzo jasne tlo,
- delikatne elementy w Brand_Blue,
- mozliwe subtelne jasnoniebieskie gradienty,
- wysoki kontrast z tekstem,
- obraz nie powinien wygladac jak pelny banner reklamowy.

Zastosowanie:

- hero light,
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
- Highlight Mint `#41DBC3` i Highlight Violet `#4E3FF6` tylko jako drobne akcenty,
- duzo kontrastu,
- duzy, pojedynczy motyw po prawej stronie kadru,
- mozliwy efekt szklanej plytki, modulu, prostego hubu danych albo wykresu,
- bez swietlnych sciezek, portali i rozbudowanych sieci danych,
- bez czarnych detali ginacych na tle,
- obraz musi byc czytelny po osadzeniu w ciemnej sekcji,
- lewa strona kadru musi zostawiac miejsce na tekst i gradient ochronny.

Zastosowanie:

- hero,
- CTA,
- sekcje technologiczne,
- sekcje danych/statystyk.

Pliki dla hero dark zapisujemy w:

```txt
assets/exports/illustrations/dark/
public/images/illustrations/dark/
```

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
Simple premium B2B MarTech illustration for Persooa on a white or very light background. Create one clean product-like abstract object only: a glass card, simple module, small chart, data tile, stack of blocks or automation tile. Use minimal geometry, large negative space, soft shadow, subtle Brand Blue #015BFE accents, and very small #41DBC3 / #4E3FF6 details only if needed. Maximum 2-3 supporting shapes and maximum 3-5 thin connection lines. Calm SaaS aesthetic, simple and readable, not magical and not futuristic. No text, no logo, no people, no robots, no city, no cyberpunk, no portal, no particles, no glowing trails, no busy scene, no dashboard screenshot, no many small details.
```

### Prompt bazowy: przezroczyste tlo

```txt
Simple premium B2B MarTech illustration object for Persooa, designed for transparent background. One clear object only: glass module, data tile, small chart, stack of blocks, automation tile or abstract AI icon. Clean silhouette, translucent or satin material, Brand Blue #015BFE accents, soft shadow, generous padding. Maximum 2 small support shapes and maximum 3 thin connection lines. It should work as a simple cut-out website visual, not a full scene. No text, no logo, no people, no robots, no app icons, no particles, no glowing trails, no busy data mesh, no dark full background.
```

### Prompt bazowy: dark section

```txt
Simple premium B2B MarTech illustration for Persooa in a dark product style. Near-black #020306 or very dark navy background, one main object only: glass card, central data tile, simple chart, rising bars, modular tile or abstract AI/e-commerce object. Use Brand Blue #015BFE as the main accent and only tiny #41DBC3 / #4E3FF6 details. Use soft shadow and a very subtle edge light, not a strong glow. Maximum 2-3 support shapes and maximum 3-5 thin connection lines. Keep the composition minimal, balanced and easy to understand; leave generous empty space on the left when used in hero. High contrast, polished, calm, premium. No text, no logo, no real app icons, no people, no robots, no city, no portal, no magic, no particles, no light trails, no cyberpunk, no overloaded data mesh, no orange palette, no many small details.
```

### Prompt pomocniczy: szybka korekta stylu

```txt
Make it simpler and calmer: one clean product-like object, minimal geometry, soft shadow, subtle Brand Blue accent, maximum 3 thin lines, lots of empty space. Remove extra objects, particles, light trails, portals, complex networks, decorative sparkles, app logos and text. The image should feel like a restrained SaaS illustration, not a magical sci-fi scene.
```

## Tematy ilustracji hero

Uzywamy tego samego prostego stylu dla kazdej podstrony, ale zmieniamy glowny motyw:

- homepage: prosty kafel wzrostu albo modul z wykresem,
- personalizacja AI: pojedynczy customer/data tile plus 1-2 male product tiles,
- agenci przychodu: prosty revenue tile ze slupkami albo strzalka,
- CDP: centralny data hub z kilkoma punktami danych,
- agenci pracy: prosty workflow tile z 2-3 krokami,
- program lojalnosciowy: prosty rewards tile, medal albo punktowy modul,
- ROI w 90 dni: prosty growth chart albo progress tile,
- wyszukiwarka AI: proste search tile z lupą i 1-2 wynikami.

## Zasady generowania

- Generujemy mniej elementow, nie wiecej.
- Kazda ilustracja ma miec jeden temat.
- Jezeli obraz zaczyna wygladac jak scena, portal albo futurystyczne miasto, przerywamy i upraszczamy do pojedynczego obiektu.
- Dla dark-mode domyslnie uzywamy stylu v3: jeden produktowy obiekt + subtelny cien/edge light.
- Unikamy slow w promptach, ktore prowokuja zbyt magiczny efekt: `cinematic`, `portal`, `luminous stream`, `data river`, `particle field`, `cosmic`, `sci-fi scene`.
- Jezeli ilustracja jest dla sekcji jasnej, domyslnie prosimy o biale lub bardzo jasne tlo.
- Jezeli ilustracja ma byc uniwersalna, przygotowujemy wariant na przezroczystym tle.
- Jezeli ilustracja jest ciemna, stosujemy ja tylko w dark sections.
- Hero homepage i hero podstron ofertowych maja dwa warianty: light i dark.
- Hero light uzywa jasnej ilustracji z `assets/exports/illustrations/`.
- Hero dark uzywa ilustracji dark-mode z `assets/exports/illustrations/dark/`.
- Jezeli mamy tylko jasna ilustracje, generujemy lub przygotowujemy osobny wariant dark-mode przed wdrozeniem dark hero.
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

Dark-mode hero assets:

assets/exports/illustrations/dark/homepage-hero.png
assets/exports/illustrations/dark/personalizacja-ai.png
assets/exports/illustrations/dark/agenci-przychodu.png
assets/exports/illustrations/dark/cdp.png
assets/exports/illustrations/dark/agenci-pracy.png
assets/exports/illustrations/dark/program-lojalnosciowy.png
assets/exports/illustrations/dark/roi-w-90dni.png
assets/exports/illustrations/dark/wyszukiwarka-ai.png
```

## Status pierwszej paczki

```txt
Status: robocze assety AI do prototypu
Tlo: light + dark-mode
Uzycie: karty oferty, hero light i hero dark w prototypie
Do decyzji: czy klient akceptuje kierunek, czy generujemy wariant v2
```

## Odrzucone przyklady

```txt
TODO: linki lub nazwy plikow
```
