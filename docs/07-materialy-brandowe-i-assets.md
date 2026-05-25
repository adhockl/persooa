# Materialy brandowe i assety: jak dostarczyc i dodac do projektu

## 1. Cel dokumentu

Ten dokument opisuje, gdzie agregujemy materialy od klienta, jak je nazywamy, co trafia do repozytorium, co zostaje tylko jako zrodlo referencyjne oraz jak przygotowujemy projekt do dalszej rozbudowy przez Claude AI lub inne narzedzia AI.

Najwazniejsza zasada:

> Repozytorium musi zawierac tylko materialy potrzebne do dzialania strony oraz dokumentacje decyzji. Ciezkie pliki zrodlowe, robocze eksporty i poufne materialy trzymamy w uporzadkowanym folderze zrodlowym albo w zewnetrznym dysku klienta.

## 2. Gdzie agregujemy materialy

Rekomendowana struktura:

```txt
assets/
  source/
    figma/
    brandbook/
    fonts/
    photos/
    logos/
    client-logos/
    ai-illustrations/
    webflow/
  exports/
    logos/
    images/
    client-logos/
    icons/
    illustrations/
public/
  brand/
  fonts/
  images/
  logos/
  client-logos/
docs/
  brand/
```

Znaczenie folderow:

- `assets/source/` - materialy zrodlowe od klienta, do pracy i archiwum.
- `assets/exports/` - oczyszczone eksporty przygotowane do uzycia.
- `public/` - tylko pliki produkcyjne wykorzystywane przez strone.
- `docs/brand/` - decyzje projektowe, linki, zasady uzycia, promptbook AI.

## 3. Jak klient ma dostarczyc materialy

Najlepiej jako:

1. Link do Figma brandbooka.
2. Paczka ZIP z logo, fontami i zdjeciami.
3. Osobny folder z logotypami klientow.
4. Osobny folder z materialami Webflow.
5. Dokument z informacja, ktore logotypy i zdjecia sa zatwierdzone do publikacji.

Nazewnictwo paczek:

```txt
persooa-brandbook-YYYY-MM-DD.zip
persooa-photos-YYYY-MM-DD.zip
persooa-logos-YYYY-MM-DD.zip
persooa-client-logos-approved-YYYY-MM-DD.zip
persooa-fonts-YYYY-MM-DD.zip
```

## 4. Figma brandbook

Klient ma brandbook w Figmie.

Potrzebujemy:

- link do pliku Figma,
- dostep `view` lub `edit`, jezeli mamy eksportowac tokeny,
- informacja, ktora strona/frame jest aktualnym brandbookiem,
- informacja, czy Figma zawiera design tokens,
- informacja, czy Figma zawiera komponenty UI,
- informacja, czy Webflow jest zgodny z brandbookiem, czy jest tylko makieta contentowa.

Co wyciagamy z Figmy:

- logo i warianty,
- paleta kolorow,
- typografia,
- spacing i layout,
- style ikon,
- zasady zdjec,
- style ilustracji,
- dark mode, jesli istnieje,
- przykladowe sekcje i komponenty.

Gdzie zapisujemy decyzje:

```txt
docs/brand/figma-brandbook-notes.md
docs/brand/design-decisions.md
```

## 5. Fonty

Klient ma okreslone czcionki.

Potrzebujemy:

- nazwy fontow,
- pliki fontow, najlepiej `.woff2`,
- informacje o licencji,
- zakres uzycia: web, desktop, komercyjnie,
- fallback font,
- informacja, czy font moze byc hostowany lokalnie.

Rekomendacja:

- do produkcji wrzucamy tylko `.woff2`,
- nie wrzucamy plikow roboczych `.otf` / `.ttf`, chyba ze licencja i projekt tego wymagaja,
- jezeli font jest z Google Fonts, mozemy uzyc self-hosted albo importu, ale self-hosted daje lepsza kontrole performance.

Struktura:

```txt
assets/source/fonts/
public/fonts/
```

Plik dokumentacji:

```txt
docs/brand/fonts.md
```

W `fonts.md` zapisujemy:

- nazwa fontu,
- wagi,
- licencja,
- zrodlo,
- sposob uzycia w CSS,
- fallback.

## 6. Logo Persooa

Potrzebujemy:

- logo podstawowe SVG,
- logo poziome,
- logo pionowe, jesli istnieje,
- znak/sygnet, jesli istnieje,
- wersja jasna,
- wersja ciemna,
- wersja monochromatyczna,
- favicon,
- social preview logo.

Struktura:

```txt
assets/source/logos/
assets/exports/logos/
public/logos/
public/brand/
```

Nazewnictwo:

```txt
persooa-logo-primary.svg
persooa-logo-light.svg
persooa-logo-dark.svg
persooa-symbol.svg
persooa-favicon.svg
persooa-og-logo.png
```

Do kodu trafia:

- SVG zoptymalizowane,
- favicon,
- Open Graph image, jesli potrzebne.

## 7. Logotypy klientow

Klient ma logotypy swoje i klientow.

Potrzebujemy:

- logotypy w SVG, jesli mozliwe,
- alternatywnie PNG wysokiej jakosci z przezroczystym tlem,
- informacja, ktore logotypy sa zatwierdzone do publikacji,
- informacja, czy mozna uzywac ich w PL i EN,
- informacja, czy mozna je pokazac w case studies,
- informacja, czy mozna je pokazac w sekcji "Zaufali nam".

Wazne:

> Nie publikujemy logotypow klientow bez potwierdzenia prawa do uzycia.

Struktura:

```txt
assets/source/client-logos/
assets/exports/client-logos/
public/client-logos/
```

Nazewnictwo:

```txt
orange-logo.svg
homla-logo.svg
lagardere-logo.svg
coccodrillo-logo.svg
```

Plik kontrolny:

```txt
docs/brand/client-logo-usage.md
```

Kolumny w pliku/arkuszu:

- marka,
- plik,
- status zgody,
- mozna pokazac na homepage,
- mozna pokazac w case study,
- mozna pokazac w materialach sprzedazowych,
- uwagi prawne.

## 8. Zdjecia zespolu i biura

Klient ma swoje zdjecia.

Potrzebujemy:

- oryginaly w wysokiej rozdzielczosci,
- informacja, ktore zdjecia sa zatwierdzone,
- zgody wizerunkowe, jezeli dotyczy,
- podpisy: imie, nazwisko, stanowisko,
- informacje, ktore osoby maja pojawic sie na stronie.

Struktura:

```txt
assets/source/photos/team/
assets/source/photos/office/
assets/exports/images/team/
assets/exports/images/office/
public/images/team/
public/images/office/
```

Formaty produkcyjne:

- `.webp` lub `.avif`,
- fallback `.jpg` tylko gdy potrzebny,
- wymiary dopasowane do komponentow,
- stabilne proporcje obrazow.

Nazewnictwo:

```txt
arkadiusz-seredyn-ceo.webp
remigiusz-wojtczak-cso.webp
persooa-office-norblin-01.webp
persooa-team-01.webp
```

## 9. Nowy styl ilustracji generowanych przez AI

Klient chce nowy styl ilustracji AI.

Tworzymy osobny mini-system ilustracji:

```txt
docs/brand/ai-illustration-style.md
assets/source/ai-illustrations/references/
assets/source/ai-illustrations/prompts/
assets/exports/illustrations/
public/images/illustrations/
```

W `ai-illustration-style.md` opisujemy:

- styl,
- palete,
- poziom realizmu,
- czego unikac,
- proporcje,
- formaty,
- zastosowania,
- prompty bazowe,
- negatywne prompty,
- przyklady zaakceptowane,
- przyklady odrzucone.

Rekomendowany kierunek dla Persooa:

- abstrakcyjne wizualizacje danych,
- e-commerce growth,
- AI personalization,
- sieci polaczen,
- modularne systemy,
- lekko futurystyczne, ale nie stockowe,
- bez przesadnych robotow, neonow i klisz AI.

Wymagane warianty ilustracji:

- hero homepage,
- Marketing Automation 2.0,
- Program Lojalnosciowy,
- AI Search,
- Integracja danych,
- ROI w 90 dni,
- Growth Hub / materialy.

## 10. Key visuale z Webflow

Potrzebujemy:

- dostep do Webflow,
- eksport assetow,
- informacje, ktore sekcje sa finalne,
- informacje, ktore grafiki sa tylko placeholderami,
- informacje, czy Webflow jest makieta do odwzorowania 1:1.

Struktura:

```txt
assets/source/webflow/
assets/source/webflow/screenshots/
assets/source/webflow/assets/
docs/brand/webflow-content-map.md
```

W `webflow-content-map.md` zapisujemy:

- sekcja Webflow,
- docelowa strona w Next.js,
- status contentu,
- status grafiki,
- uwagi SEO.

## 11. Obecne grafiki ze starej strony

Trzeba podjac decyzje:

- zachowujemy,
- odswiezamy,
- usuwamy,
- zastepujemy ilustracjami AI,
- zostawiamy tylko w case studies/blogu.

Rekomendacja:

- nie usuwac grafik, ktore sa czescia waznych case studies,
- odswiezyc grafiki w sekcjach ofertowych,
- zoptymalizowac formaty i alty,
- zachowac obrazy, ktore sa juz indeksowane i maja znaczenie SEO, jesli to uzasadnione.

## 12. Dark mode i dark sections

Klient dopuszcza dark mode wariant.

Rekomendacja:

- na start: dark sections, nie pelny toggle dark mode,
- pelny dark mode jako etap 2, jezeli klient rzeczywiscie chce dwa kompletne motywy.

Dark sections:

- hero,
- CTA,
- sekcja danych/statystyk,
- wybrane sekcje AI/technology.

Pelny dark mode wymaga:

- tokenow dla light i dark,
- testow kontrastu,
- osobnych wersji logotypow,
- osobnych wersji ilustracji,
- sprawdzenia wszystkich komponentow,
- decyzji, czy wybor uzytkownika zapisujemy w localStorage/cookie.

Tokeny:

```txt
theme-light:
  background
  foreground
  surface
  border
  primary
  accent

theme-dark:
  background
  foreground
  surface
  border
  primary
  accent
```

## 13. Co trafia do repozytorium

Do repo trafia:

- zoptymalizowane SVG,
- produkcyjne obrazy `.webp` / `.avif`,
- fonty `.woff2`, jesli licencja pozwala,
- dokumentacja uzycia,
- pliki potrzebne do strony.

Do repo nie powinno trafiac:

- ogromne paczki ZIP,
- pliki PSD/AI/Figma export dump, jesli nie sa potrzebne,
- fonty bez licencji webowej,
- poufne materialy klienta,
- niezatwierdzone logotypy klientow,
- zdjecia bez zgody publikacji,
- setki nieuzywanych wariantow grafik.

## 14. Przygotowanie projektu pod Claude AI

Poniewaz strona ma byc pozniej rozbudowywana przez Claude AI, repo powinno miec jasne instrukcje dla asystenta.

Rekomendowane pliki:

```txt
CLAUDE.md
docs/brand/design-decisions.md
docs/brand/component-rules.md
docs/brand/seo-rules.md
docs/brand/content-rules.md
docs/brand/ai-illustration-style.md
```

`CLAUDE.md` powinien zawierac:

- opis projektu,
- stack technologiczny,
- strukture katalogow,
- zasady SEO,
- zasady design systemu,
- zasady dodawania nowych stron,
- zasady dodawania assetow,
- zakaz zmiany URL-i bez aktualizacji redirect map,
- zakaz wrzucania niezoptymalizowanych obrazow,
- zakaz zmiany tokenow bez uzasadnienia.

Najwazniejsza zasada dla Claude:

> Kazda nowa podstrona musi miec metadata, canonical, hreflang, wpis w sitemap, poprawne naglowki i linkowanie wewnetrzne.

## 15. Proces dodawania materialow do projektu

### Krok 1. Wrzuc materialy zrodlowe

Dodaj otrzymane pliki do:

```txt
assets/source/
```

Nie podmieniaj bezposrednio plikow w `public/`.

### Krok 2. Zweryfikuj prawa i status

Sprawdz:

- czy logo mozna publikowac,
- czy zdjecia maja zgody,
- czy font ma licencje webowa,
- czy ilustracja jest finalna,
- czy asset pasuje do brandbooka.

### Krok 3. Przygotuj eksport produkcyjny

Eksportuj do:

```txt
assets/exports/
```

Zasady:

- obrazy w `.webp` lub `.avif`,
- logotypy w SVG,
- sensowne wymiary,
- nazwy bez spacji i polskich znakow,
- kompresja bez widocznej utraty jakosci.

### Krok 4. Przenies do `public/`

Tylko finalne assety przenies do:

```txt
public/images/
public/logos/
public/client-logos/
public/fonts/
```

### Krok 5. Dodaj opis w dokumentacji

Zaktualizuj odpowiedni dokument:

- `docs/brand/fonts.md`,
- `docs/brand/client-logo-usage.md`,
- `docs/brand/ai-illustration-style.md`,
- `docs/brand/webflow-content-map.md`,
- `docs/brand/design-decisions.md`.

### Krok 6. Uzyj assetu w komponencie

Dopiero po optymalizacji i opisaniu asset moze zostac uzyty w kodzie.

## 16. Checklist dostarczenia materialow

Od klienta potrzebujemy:

- [ ] Link do Figma brandbooka.
- [ ] Informacja, ktory brandbook jest finalny.
- [ ] Logo Persooa w SVG.
- [ ] Wariant jasny logo.
- [ ] Wariant ciemny logo.
- [ ] Favicon.
- [ ] Fonty `.woff2` lub link do zrodla.
- [ ] Licencje fontow.
- [ ] Paleta kolorow.
- [ ] Zasady typografii.
- [ ] Zdjecia zespolu.
- [ ] Zdjecia biura.
- [ ] Zgody na publikacje zdjec.
- [ ] Logotypy klientow.
- [ ] Potwierdzenie zgody na uzycie logotypow klientow.
- [ ] Assety z Webflow.
- [ ] Informacja, czy Webflow jest finalnym designem.
- [ ] Preferencje stylu ilustracji AI.
- [ ] Przyklady ilustracji, ktore klient lubi.
- [ ] Przyklady ilustracji, ktorych unikamy.
- [ ] Decyzja: dark sections czy pelny dark mode.

## 17. Najlepszy sposob przekazania materialow

Najlepszy wariant:

1. Klient udostepnia Figma brandbook linkiem.
2. Klient przekazuje paczke ZIP z fontami, logo i zdjeciami.
3. Klient przekazuje osobny arkusz z logotypami klientow i statusem zgody.
4. My dodajemy pliki do `assets/source/`.
5. My przygotowujemy zoptymalizowane eksporty do `public/`.
6. My dokumentujemy decyzje w `docs/brand/`.

Nie rekomendujemy wrzucania wszystkiego bezposrednio do `public/`, bo szybko zrobi sie balagan i ryzyko publikacji niezatwierdzonych materialow.
