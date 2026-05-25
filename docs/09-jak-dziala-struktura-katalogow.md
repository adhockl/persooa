# Jak dziala struktura katalogow projektu

## 1. Cel dokumentu

Ten dokument wyjasnia, jak bedzie zorganizowany projekt nowej strony Persooa w repozytorium oraz jaka role pelnia poszczegolne katalogi.

Celem tej struktury jest:

- oddzielenie materialow zrodlowych od plikow produkcyjnych,
- uporzadkowanie dokumentacji projektu,
- zabezpieczenie SEO,
- zachowanie kontroli nad brandem,
- ulatwienie dalszej rozbudowy strony,
- przygotowanie projektu do pracy zespolu oraz narzedzi AI, takich jak Claude.

## 2. Najprostsze wyjasnienie

Projekt bedzie podzielony na trzy glowne obszary:

```txt
assets/  - materialy od klienta i pliki robocze
docs/    - dokumentacja projektu, SEO, brandu i procesu
public/  - finalne pliki uzywane przez dzialajaca strone
```

W praktyce:

- `assets/` to magazyn materialow,
- `docs/` to instrukcje i decyzje projektowe,
- `public/` to pliki, ktore rzeczywiscie beda widoczne na stronie.

## 3. Schemat przeplywu materialow

Materialy nie trafiaja od razu na strone produkcyjna.

Proces wyglada tak:

```txt
Klient dostarcza materialy
        ↓
assets/source/
        ↓
weryfikacja: jakosc, licencje, zgody, zgodnosc z brandem
        ↓
assets/exports/
        ↓
optymalizacja i przygotowanie do uzycia
        ↓
public/
        ↓
dzialajaca strona www
```

Dzieki temu unikamy sytuacji, w ktorej na strone przypadkowo trafia:

- niezatwierdzone logo klienta,
- zdjecie bez zgody,
- font bez licencji,
- zbyt ciezki plik graficzny,
- robocza grafika z Webflow,
- nieaktualny wariant brandu.

## 4. Katalog `assets/`

Katalog `assets/` sluzy do przechowywania materialow zrodlowych i roboczych.

To miejsce, do ktorego trafiaja materialy przekazane przez klienta.

Przykladowa struktura:

```txt
assets/
  source/
  exports/
  README.md
```

### `assets/source/`

To katalog na surowe materialy od klienta.

Trafiaja tutaj:

- brandbook,
- eksporty z Figmy,
- fonty,
- zdjecia,
- logo Persooa,
- logotypy klientow,
- materialy z Webflow,
- referencje do ilustracji AI.

Wazne:

> Pliki w `assets/source/` nie sa automatycznie publikowane na stronie.

To jest bezpieczna przestrzen robocza.

### `assets/exports/`

To katalog na przygotowane i zoptymalizowane wersje plikow.

Trafiaja tutaj assety po:

- sprawdzeniu jakosci,
- sprawdzeniu licencji,
- sprawdzeniu zgody na publikacje,
- kompresji,
- zmianie formatu,
- dopasowaniu wymiarow,
- zmianie nazwy pliku.

Przyklad:

```txt
assets/source/photos/team/arkadiusz-seredyn-original.jpg
```

po obrobce moze trafic jako:

```txt
assets/exports/images/team/arkadiusz-seredyn-ceo.webp
```

Dopiero potem wybrane pliki trafiaja do `public/`.

## 5. Podkatalogi w `assets/source/`

### `assets/source/figma/`

Tutaj zapisujemy eksporty lub notatki z Figma brandbooka.

Przyklady:

- eksport logo,
- eksport palety,
- screenshoty komponentow,
- notatki do tokenow design systemu.

Glowny link do Figmy zapisujemy w dokumentacji, a nie jako plik.

### `assets/source/brandbook/`

Tutaj trafia brandbook, jezeli klient przekaze go jako PDF, ZIP lub inny plik.

Jezeli brandbook jest tylko w Figmie, wystarczy link w dokumentacji.

### `assets/source/fonts/`

Tutaj trafiaja fonty zrodlowe.

Przed uzyciem fontu sprawdzamy:

- czy mamy licencje webowa,
- czy mozna hostowac font lokalnie,
- jakie wagi sa dostepne,
- jaki format pliku jest najlepszy.

Do produkcji preferujemy `.woff2`.

### `assets/source/photos/`

Tutaj trafiaja zdjecia zespolu, biura, eventow i inne zdjecia firmowe.

Oryginaly zostaja w `assets/source/`, a wersje zoptymalizowane przygotowujemy osobno.

### `assets/source/logos/`

Tutaj trafiaja logotypy Persooa:

- logo podstawowe,
- logo jasne,
- logo ciemne,
- sygnet,
- favicon,
- warianty monochromatyczne.

Najlepszy format to SVG.

### `assets/source/client-logos/`

Tutaj trafiaja logotypy klientow Persooa.

Nie kazdy dostarczony logotyp automatycznie trafi na strone. Najpierw potrzebne jest potwierdzenie, ze mozna go publicznie pokazac.

Status zgody zapisujemy w:

```txt
docs/brand/client-logo-usage.md
```

### `assets/source/ai-illustrations/`

Tutaj trafiaja:

- referencje stylu ilustracji AI,
- prompty,
- wersje robocze,
- wygenerowane propozycje,
- zatwierdzone zrodla ilustracji.

Finalne zasady stylu zapisujemy w:

```txt
docs/brand/ai-illustration-style.md
```

### `assets/source/webflow/`

Tutaj trafiaja:

- eksporty assetow z Webflow,
- screenshoty sekcji,
- materialy graficzne,
- referencje layoutow,
- pliki pomocnicze.

Mapowanie Webflow do nowej strony zapisujemy w:

```txt
docs/brand/webflow-content-map.md
```

## 6. Katalog `docs/`

Katalog `docs/` zawiera dokumentacje projektu.

To tutaj zapisujemy:

- architekture strony,
- liste komponentow,
- design system,
- wymagania SEO,
- plan dzialania,
- instrukcje dla klienta,
- zasady pracy z assetami,
- decyzje brandowe,
- zasady dalszej rozbudowy.

Najwazniejsze dokumenty:

```txt
docs/01-architektura-nowej-strony.md
docs/02-komponenty-tailwind.md
docs/03-tokenizacja-design-systemu.md
docs/04-seo-obecna-vs-nowa.md
docs/05-plan-dzialania-7-dni.md
docs/06-instrukcja-seo-krok-po-kroku.md
docs/07-materialy-brandowe-i-assets.md
docs/08-checklista-materialow-do-assets.md
docs/09-jak-dziala-struktura-katalogow.md
```

## 7. Katalog `docs/brand/`

Katalog `docs/brand/` zawiera dokumentacje dotyczaca brandu, contentu i zasad wizualnych.

Przykladowe pliki:

```txt
docs/brand/ai-illustration-style.md
docs/brand/client-logo-usage.md
docs/brand/component-rules.md
docs/brand/content-rules.md
docs/brand/design-decisions.md
docs/brand/figma-brandbook-notes.md
docs/brand/fonts.md
docs/brand/seo-rules.md
docs/brand/webflow-content-map.md
```

### Po co jest ten katalog

Ten katalog pozwala utrzymac spojnosc projektu.

Zamiast trzymac decyzje w mailach, rozmowach lub komentarzach, zapisujemy je w repozytorium.

Dzieki temu kazda osoba rozwijajaca strone widzi:

- jakie fonty sa zatwierdzone,
- jakie logotypy klientow mozna pokazac,
- jakiego stylu ilustracji AI uzywamy,
- jakie sa zasady SEO,
- jak piszemy tresci,
- jak budujemy komponenty,
- jakie decyzje projektowe zostaly podjete.

## 8. Katalog `public/`

Katalog `public/` zawiera finalne pliki produkcyjne uzywane przez dzialajaca strone.

Przykladowa struktura:

```txt
public/
  brand/
  fonts/
  images/
  logos/
  client-logos/
```

Pliki z `public/` moga byc bezposrednio wyswietlane przez strone.

Dlatego do `public/` trafiaja tylko pliki:

- zatwierdzone,
- zoptymalizowane,
- z poprawna licencja,
- o poprawnej nazwie,
- potrzebne w kodzie strony.

### `public/brand/`

Finalne assety brandowe:

- favicon,
- Open Graph image,
- pliki identyfikacji wizualnej potrzebne stronie.

### `public/fonts/`

Fonty webowe uzywane przez strone.

Preferowany format:

```txt
.woff2
```

Font trafia tutaj tylko wtedy, gdy mamy potwierdzona licencje webowa.

### `public/images/`

Finalne obrazy:

- zdjecia zespolu,
- zdjecia biura,
- ilustracje AI,
- grafiki sekcyjne,
- obrazy do bloga i case studies.

Preferowane formaty:

```txt
.webp
.avif
```

### `public/logos/`

Finalne logotypy Persooa.

Preferowany format:

```txt
.svg
```

### `public/client-logos/`

Finalne logotypy klientow, ktore maja zgode na publikacje.

Do tego katalogu nie trafiaja logotypy robocze ani niezatwierdzone.

## 9. Plik `CLAUDE.md`

Plik `CLAUDE.md` zawiera instrukcje dla Claude AI lub innego asystenta AI, ktory bedzie w przyszlosci rozwijal projekt.

Opisuje:

- jaki jest cel projektu,
- jaki stack technologiczny planujemy,
- jakie sa zasady SEO,
- jak pracowac z assetami,
- jak stosowac design system,
- czego nie wolno zmieniac bez decyzji,
- jak dodawac nowe strony.

To wazne, poniewaz klient zaklada, ze strona bedzie w przyszlosci rozbudowywana przy pomocy Claude AI.

Dzieki temu AI nie bedzie zgadywac zasad projektu, tylko bedzie mialo jasne instrukcje zapisane w repozytorium.

## 10. Jak strona bedzie korzystac z tych katalogow

Przykladowo:

1. Klient dostarcza logo Persooa.
2. Logo trafia do `assets/source/logos/`.
3. Sprawdzamy, czy plik jest aktualny i poprawny.
4. Optymalizujemy SVG.
5. Finalna wersja trafia do `public/logos/`.
6. Komponent strony, np. Header, korzysta z pliku z `public/logos/`.

Podobnie dziala proces dla zdjec:

1. Klient dostarcza zdjecie zespolu.
2. Oryginal trafia do `assets/source/photos/`.
3. Przygotowujemy wersje WebP/AVIF.
4. Finalna wersja trafia do `public/images/`.
5. Strona "O nas" korzysta z finalnego pliku.

Podobnie dziala proces dla logotypow klientow:

1. Klient dostarcza logotyp.
2. Plik trafia do `assets/source/client-logos/`.
3. Sprawdzamy zgode na publikacje.
4. Status zapisujemy w `docs/brand/client-logo-usage.md`.
5. Zatwierdzony plik trafia do `public/client-logos/`.
6. Sekcja "Zaufali nam" korzysta z finalnego pliku.

## 11. Dlaczego taka struktura jest wazna

Taka organizacja projektu daje kilka korzysci:

- porzadek w materialach,
- mniejsze ryzyko publikacji niezatwierdzonych plikow,
- jasne rozdzielenie plikow roboczych i produkcyjnych,
- latwiejsza kontrola licencji,
- latwiejsza optymalizacja strony,
- latwiejsze utrzymanie SEO,
- lepsza wspolpraca z klientem,
- lepsza przyszla rozbudowa przez zespol lub AI.

## 12. Co klient powinien wiedziec

Klient nie musi samodzielnie przygotowywac plikow produkcyjnych.

Wystarczy, ze dostarczy:

- materialy zrodlowe,
- informacje, ktore materialy sa finalne,
- zgody na publikacje,
- brandbook,
- fonty i licencje,
- logotypy,
- zdjecia,
- materialy z Webflow,
- referencje ilustracji AI.

Po naszej stronie jest:

- uporzadkowanie materialow,
- optymalizacja,
- przygotowanie formatow webowych,
- wdrozenie do strony,
- dokumentacja decyzji.

## 13. Krotkie podsumowanie dla klienta

Struktura projektu dziala jak kontrolowany proces produkcyjny:

```txt
materialy od klienta -> weryfikacja -> optymalizacja -> publikacja na stronie
```

Dzieki temu nowa strona Persooa bedzie latwiejsza w utrzymaniu, bezpieczniejsza SEO, spojna wizualnie i gotowa do dalszej rozbudowy.
