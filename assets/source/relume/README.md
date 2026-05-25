# Relume export

Ten katalog zawiera lokalny eksport makiety Relume przekazany jako:

```txt
/Users/kl/Downloads/persooa-com
```

Kopia robocza w repo:

```txt
assets/source/relume/persooa-com/
```

## Status

Eksport traktujemy jako material zrodlowy do przeniesienia struktury sekcji, nie jako finalny content SEO. W wielu miejscach pozostaly placeholdery Relume, m.in. `Short heading here`, `Long heading is what you see here`, `Lorem ipsum`, `Button`, `Contact us`, `Link One` oraz kontakt `info@relume.io`.

Najwiecej realnego contentu Persooa jest w:

- `strona-główna/index.html`,
- `program-partnerski/index.html`,
- `o-nas/index.html`,
- `roi-w-90-dni/index.html`.

Strony ofertowe `agenci-pracy`, `agenci-przychodu`, `personalizacja-ai`, `program-lojalnościowy-myrewards` i `wyszukiwarka-ai` maja glownie strukture komponentow i wymagaja napisania finalnego copy.

## Strony w eksporcie

| Katalog | Docelowa rola | Uwagi |
| --- | --- | --- |
| `strona-główna` | Homepage | Zawiera realne fragmenty: zaufanie 100+ marek, statystyki, testimonial, sekcje programu partnerskiego. Nadal ma duzo placeholderow. |
| `personalizacja-ai` | Oferta: Personalizacja AI | Glownie placeholdery Relume. |
| `agenci-przychodu` | Oferta: Agenci przychodu | Glownie placeholdery Relume. |
| `cdp` | Oferta: CDP | Glownie placeholdery Relume. |
| `agenci-pracy` | Oferta: Agenci pracy | Glownie placeholdery Relume. |
| `program-lojalnościowy-myrewards` | Oferta: program lojalnosciowy / myRewards | Glownie placeholdery Relume. |
| `wyszukiwarka-ai` | Oferta: Wyszukiwarka AI | Glownie placeholdery Relume. |
| `roi-w-90-dni` | Oferta / landing: ROI w 90 dni | Ma pojedynczy testimonial Persooa, reszta wymaga redakcji. |
| `program-partnerski` | Program partnerski | Najbardziej kompletna podstrona poza homepage. |
| `o-nas` | O nas / kariera | Zawiera realne nazwy stanowisk i opisy, ale hero i czesc sekcji sa placeholderowe. |
| `growth-hub` | Growth Hub listing | Struktura listingu, kategorie i placeholdery artykulow. |
| `blog-post-/-growth-hub-post` | Szablon artykulu | Placeholderowy artykul. |
| `persooalize-v1` | Persooalize 360 / artykul lub landing | Wymaga decyzji informacyjnej. |
| `marketing-automation-2.0` | Potencjalna podstrona oferty lub artykul | Wymaga decyzji informacyjnej. |
| `strona-tekstowa` | Szablon strony tekstowej | Placeholderowy template. |

## Fragmenty warte odzyskania

Homepage:

- `Zaufanie 100+ marek w Europie`,
- `100+ Klientow Persooa`,
- `90 Dni do pierwszych wynikow`,
- `1000+ Procesow obslugiwanych dziennie`,
- testimonial: Persooa zautomatyzowala procesy i w trzy miesiace przychod wzrosl o 35 procent,
- porownanie `Persooa vs brak doswiadczenia`,
- blok programu partnerskiego.

Program partnerski:

- `Zostan Partnerem Synerise z Persooa`,
- `Wykorzystaj doswiadczenie najwiekszej agencji pracujacej z Synerise`,
- filary: Prowizja, Kompleksowe Szkolenia, Wsparcie 24/7, Gotowe Narzedzia, Wsparcie sprzedazy, Spolecznosc.

O nas:

- lista stanowisk: Specjalista wdrozen, Inzynier danych, Konsultant strategii, Kierownik produktu oraz pozostale role w pliku,
- czesc opisow rekrutacyjnych zwiazanych z personalizacja, e-commerce i widocznoscia Persooa.

## Nastepny krok

Przy przenoszeniu do prototypu albo finalnego Next.js nalezy:

1. Wybrac sekcje layoutowe z Relume.
2. Podmienic placeholdery na finalny copy z dokumentow `docs/` albo napisac nowe tresci.
3. Zastapic placeholderowe obrazy i logotypy assetami z `public/`.
4. Usunac testowe dane kontaktowe Relume.
5. Przy kazdej finalnej stronie dopisac SEO: title, meta description, canonical, H1 i linkowanie wewnetrzne.
