# Mapa stron i tresci nowej strony Persooa

## 1. Cel dokumentu

Ten dokument opisuje dokladne podstrony, ktore powinny wejsc do nowej strony Persooa, oraz tresci zrodlowe, z ktorych korzystamy przy ich budowie.

Zrodla:

- Webflow: `https://persooa.webflow.io/`
- Obecna strona produkcyjna: `https://www.persooa.com/`
- Relume export: `assets/source/relume/persooa-com/`
- Figma brandbook: `Persooa Rebranding`

Wazne:

> Webflow traktujemy jako zrodlo roboczego contentu. Przed wdrozeniem tresci musza zostac sprawdzone jezykowo, SEO i biznesowo.

> Relume export traktujemy jako zrodlo struktury sekcji i czesciowych tresci. W wielu plikach sa placeholdery Relume (`Short heading here`, `Lorem ipsum`, `Button`, `Contact us`, `info@relume.io`), wiec nie wolno przenosic ich 1:1 do produkcji.

## 2. Wersje jezykowe PL/EN

Strona ma miec dwie wersje jezykowe:

- PL,
- EN.

Przelacznik jezyka powinien byc dostepny w menu glownego headera.

Rekomendowany model URL:

```txt
PL: /
EN: /en/
```

Przyklady:

| PL | EN |
| --- | --- |
| `/` | `/en/` |
| `/oferta/personalizacja-ai` | `/en/offer/ai-personalization` |
| `/oferta/agenci-przychodu` | `/en/offer/revenue-agents` |
| `/oferta/cdp` | `/en/offer/cdp` |
| `/oferta/agenci-pracy` | `/en/offer/work-agents` |
| `/oferta/program-lojalnosciowy` | `/en/offer/loyalty-program` |
| `/oferta/roi-w-90dni` | `/en/offer/roi-in-90-days` |
| `/oferta/wyszukiwarka-ai` | `/en/offer/ai-search` |
| `/blog` | `/en/blog` |
| `/kontakt` | `/en/contact` |
| `/polityka-prywatnosci` | `/en/privacy-policy` |
| `/kodeks-postepowania` | `/en/code-of-conduct` |

Do potwierdzenia po audycie SEO:

- czy obecna produkcja ma juz inne URL-e EN, ktore trzeba zachowac,
- czy angielskie URL-e maja byc tlumaczone, czy zachowujemy slugi podobne do PL,
- czy wszystkie podstrony PL dostaja pelny odpowiednik EN od razu w MVP.

## 3. Menu glowne

Rekomendowana struktura menu:

```txt
Home
Oferta
Persooalize 360
Blog
Kontakt
PL / EN
CTA: Zapytaj o projekt
```

Mega menu `Oferta`:

```txt
Personalizacja AI
Agenci przychodu
CDP
Agenci pracy
Program Lojalnosciowy
ROI w 90 dni
Wyszukiwarka AI
```

## 4. Lista stron do utworzenia

### Strony glowne

| Strona | PL URL | EN URL | Zrodlo |
| --- | --- | --- | --- |
| Homepage | `/` | `/en/` | Webflow homepage + obecna produkcja |
| Blog | `/blog` | `/en/blog` | Webflow blog |
| Kontakt | `/kontakt` | `/en/contact` | Obecna produkcja |
| Polityka prywatnosci | `/polityka-prywatnosci` | `/en/privacy-policy` | Obecna produkcja |
| Kodeks postepowania | `/kodeks-postepowania` | `/en/code-of-conduct` | Obecna produkcja |
| Persooalize 360 | `/persooalize-360` | `/en/persooalize-360` | Webflow link, tresc do potwierdzenia |

### Oferta

| Strona | PL URL | EN URL | Zrodlo |
| --- | --- | --- | --- |
| Personalizacja AI | `/oferta/personalizacja-ai` | `/en/offer/ai-personalization` | Webflow |
| Agenci przychodu | `/oferta/agenci-przychodu` | `/en/offer/revenue-agents` | Webflow |
| CDP | `/oferta/cdp` | `/en/offer/cdp` | Webflow |
| Agenci pracy | `/oferta/agenci-pracy` | `/en/offer/work-agents` | Webflow |
| Program Lojalnosciowy | `/oferta/program-lojalnosciowy` | `/en/offer/loyalty-program` | Webflow |
| ROI w 90 dni | `/oferta/roi-w-90dni` | `/en/offer/roi-in-90-days` | Webflow |
| Wyszukiwarka AI | `/oferta/wyszukiwarka-ai` | `/en/offer/ai-search` | Webflow |

### Blog

| Strona | PL URL | EN URL | Zrodlo |
| --- | --- | --- | --- |
| Blog listing | `/blog` | `/en/blog` | Webflow |
| CTA - co to jest | `/blog/cta-co-to-jest-przyklady-skutecznych-przyciskow-wezwan-do-dzialania` | `/en/blog/what-is-cta-examples` | Webflow |

Do migracji lub potwierdzenia:

- pozostale wpisy z obecnej produkcji,
- Growth Hub,
- wpis `growth-hub-posts/why-your-legacy-systems-need-modernizing` z Webflow.

## 5. Homepage

Zrodlo:

```txt
https://persooa.webflow.io/
```

Status:

- content roboczy,
- czesc sekcji zawiera placeholdery,
- wymaga redakcji i walidacji SEO.

Zidentyfikowane sekcje:

1. Header / menu.
2. Hero.
3. Logo wall.
4. Sekcja wzrostu e-commerce.
5. Oferta / preview uslug.
6. ROI / proces.
7. Case study Telco.
8. Program partnerski Synerise.
9. Blog / Growth Hub preview.
10. Footer.

Kluczowy content:

```txt
Tagline: #1 Synerise Partner w Europie
H1: Dostarczamy ROI w 90 Dni
CTA: Zapytaj o projekt
CTA secondary: Wiecej o ROI w 90 dni
Logo wall: Zaufanie 100+ marek w Europie
```

Opis hero:

```txt
Jedyna agencja w 100% dedykowana platformie Synerise. Budujemy AI agents, ktorzy optymalizuja prace zespolow i generuja przychod na fundamencie behavioralnego CDP, ktory dziala w czasie rzeczywistym.
```

Do poprawy:

- placeholdery w zakladkach hero,
- placeholderowe logotypy,
- literowki,
- spojnosc claimu z obecnym SEO,
- finalne CTA.

## 6. Personalizacja AI

Zrodlo:

```txt
https://persooa.webflow.io/oferta/personalizacja-ai
```

Docelowy URL PL:

```txt
/oferta/personalizacja-ai
```

Docelowy URL EN:

```txt
/en/offer/ai-personalization
```

Title z Webflow:

```txt
Untitled
```

Wymaga poprawy title SEO.

Struktura:

```txt
H1: Personalizacja AI
H2: Dla wiekszej sprzedazy w e-commerce
H3: Integracja danych
H3: Personalizacja AI
H3: Automatyzacja kampanii
H3: Aktywacja kanalow komunikacji
H3: Zarzadzanie cyklem zycia klienta
H3: Analityka danych wspierana przez AI
H2: Porozmawiajmy o twoim e-commerce
```

Kluczowy content:

```txt
Dostosuj doswiadczenia klientow w czasie rzeczywistym.
Przeksztalc marketing w maszyne generujaca przychod i lojalnosc.
Kazdy e-commerce ma inne wyzwania. Dlatego dostarczamy rozwiazania, ktore dzialaja tam, gdzie Ty potrzebujesz.
```

Sekcje do budowy:

1. Hero uslugi.
2. Problem personalizacji w e-commerce.
3. Jak Persooa wykorzystuje AI i dane.
4. Obszary kompetencji.
5. Use cases.
6. Powiazane case studies.
7. CTA.

Uwagi:

- title SEO jest pusty/roboczy i wymaga przygotowania,
- tresc jest podobna do kilku innych stron ofertowych, wymaga rozbudowania unikalnego contentu.

## 7. Agenci przychodu

Zrodlo:

```txt
https://persooa.webflow.io/oferta/agenci-przychodu
```

Docelowy URL PL:

```txt
/oferta/agenci-przychodu
```

Docelowy URL EN:

```txt
/en/offer/revenue-agents
```

Title z Webflow:

```txt
agenci przychodu
```

Struktura:

```txt
H1: Agenci generowania przychodu
H2: Dla wiekszej sprzedazy w e-commerce
H3: Integracja danych
H3: Personalizacja AI
H3: Automatyzacja kampanii
H3: Aktywacja kanalow komunikacji
H3: Zarzadzanie cyklem zycia klienta
H3: Analityka danych wspierana przez AI
H2: Porozmawiajmy o twoim e-commerce
```

Kluczowy content:

```txt
Zwieszk sprzedaz za pomoca inteligentnych systemow.
Automatyzacja sprzedazy i pozyskiwania klientow bez przerwy w dzialaniu.
```

Sekcje do budowy:

1. Hero uslugi.
2. Czym sa agenci przychodu.
3. Jak wspieraja sprzedaz i akwizycje.
4. Scenariusze automatyzacji.
5. Integracja z CDP i marketing automation.
6. Metryki i KPI.
7. CTA.

Uwagi:

- strona wymaga doprecyzowania, czym agent przychodu rozni sie od personalizacji AI i marketing automation,
- potrzebne przyklady use cases.

## 8. CDP

Zrodlo:

```txt
https://persooa.webflow.io/oferta/cdp
```

Docelowy URL PL:

```txt
/oferta/cdp
```

Docelowy URL EN:

```txt
/en/offer/cdp
```

Title z Webflow:

```txt
cdp
```

Struktura:

```txt
H1: Platforma CDP
H2: Profesjonalna migracja na Synerise
H3: Audyt & Planning
H3: Parallel Run & Testing
H3: Cutover & Support
H2: Laczymy CDP z Twoim Stack'iem Technologicznym
H3: CRM & Sales
H3: E-commerce
H3: ERP & Backend
H3: Mobile & Apps
H3: Communication
H3: Analytics & Ads
H3: Data Warehouses
H3: External AI Agents
H3: Custom & Legacy
H2: Porozmawiajmy o twoim e-commerce
```

Kluczowy content:

```txt
Zbieraj, ujednolicaj i dzialaj na danych klientow w czasie rzeczywistym.
Przenosimy Cie na Synerise z SALESmanago, Salesforce Marketing Cloud, Adobe Campaign, Braze i wielu innych systemow bez ryzyka przestojow i utraty przychodu.
Kompleksowe integracje z kluczowymi systemami Twojej organizacji - 150+ gotowych konektorow + custom development.
```

Sekcje do budowy:

1. Hero CDP.
2. Po co CDP w e-commerce.
3. Migracja na Synerise.
4. Proces migracji.
5. Integracje.
6. Bezpieczenstwo danych i brak downtime.
7. Powiazane uslugi.
8. CTA.

Integracje wymienione w Webflow:

- Salesforce,
- Dynamics 365,
- HubSpot,
- Oracle CX,
- Magento,
- Shopify,
- SAP Commerce,
- WooCommerce,
- SAP ERP,
- Oracle,
- Comarch,
- Microsoft NAV,
- iOS Native,
- Android,
- React Native,
- Flutter,
- SendGrid,
- Twilio,
- WhatsApp,
- Firebase,
- GA4,
- Meta Ads,
- Google Ads,
- LinkedIn Ads,
- Snowflake,
- BigQuery,
- Redshift,
- Azure SQL,
- REST API,
- GraphQL,
- SOAP,
- Webhooks.

Uwagi:

- to jedna z najmocniejszych stron contentowo,
- warto potraktowac ja jako strategiczna podstrone SEO.

## 9. Agenci pracy

Zrodlo:

```txt
https://persooa.webflow.io/oferta/agenci-pracy
```

Docelowy URL PL:

```txt
/oferta/agenci-pracy
```

Docelowy URL EN:

```txt
/en/offer/work-agents
```

Title z Webflow:

```txt
agenci-pracy
```

Struktura:

```txt
H1: Dostarczamy ROI w 90 Dni
H2: Dla wiekszej sprzedazy w e-commerce
H3: Marketing Automation 2.0
H3: Program Lojalnosciowy myRewards
H3: Wyszukiwarka AI
H3: Personalizacja AI
H3: Personalizacja AI
H3: Personalizacja AI
H2: Porozmawiajmy o twoim e-commerce
```

Kluczowy content:

```txt
Jedyna agencja w 100% dedykowana platformie Synerise. Budujemy AI agents, ktorzy optymalizuja prace zespolow i generuja przychod na fundamencie behavioralnego CDP, ktory dziala w czasie rzeczywistym.
Rewolucjonizuj swoje strategie marketingowe z zaawansowanymi rozwiazaniami AI, dostosowanymi specjalnie do Twojej branzy.
```

Sekcje do budowy:

1. Hero uslugi.
2. Czym sa agenci pracy.
3. Jak automatyzuja procesy biznesowe.
4. Obszary zastosowania.
5. Relacja do ROI w 90 dni.
6. CTA.

Uwagi:

- obecny H1 jest niespojny z nazwa strony,
- tresc wyglada jak skopiowany content z homepage/ROI,
- wymaga redakcji przed wdrozeniem.

## 10. Program Lojalnosciowy

Zrodlo:

```txt
https://persooa.webflow.io/oferta/program-lojalnosciowy
```

Docelowy URL PL:

```txt
/oferta/program-lojalnosciowy
```

Docelowy URL EN:

```txt
/en/offer/loyalty-program
```

Title z Webflow:

```txt
program-lojalnosciowy
```

Struktura:

```txt
H1: Program Lojalnosciowy myRewards
H2: Dla wiekszej sprzedazy w e-commerce
H3: Integracja danych
H3: Personalizacja AI
H3: Automatyzacja kampanii
H3: Aktywacja kanalow komunikacji
H3: Zarzadzanie cyklem zycia klienta
H3: Analityka danych wspierana przez AI
H2: Porozmawiajmy o twoim e-commerce
```

Kluczowy content:

```txt
Buduj wiezi z klientami poprzez nagrody.
Zmien marketing w system tworzacy dochod i przywiazanie klientow.
```

Sekcje do budowy:

1. Hero programu lojalnosciowego.
2. Problem retencji.
3. myRewards.
4. Mechaniki lojalnosciowe.
5. Integracja z CDP i kanalami.
6. Metryki: retencja, czestotliwosc zakupow, AOV, LTV.
7. Case studies.
8. CTA.

Uwagi:

- strona wymaga rozbudowania o konkretne mechaniki programu lojalnosciowego,
- potrzebne potwierdzenie nazwy `myRewards`.

## 11. ROI w 90 dni

Zrodlo:

```txt
https://persooa.webflow.io/oferta/roi-w-90dni
```

Docelowy URL PL:

```txt
/oferta/roi-w-90dni
```

Docelowy URL EN:

```txt
/en/offer/roi-in-90-days
```

Title z Webflow:

```txt
roi-w-90dni
```

Struktura:

```txt
H1: ROI w 90 dni
H2: Uwolnij potencjal swojego e-commerce
H2: Kto moze skorzystac z programu ROI w 90 dni?
H2: Jak dziala nasz program ROI w 90 dni?
H2: Czytelny framework
H3: Bezplatny warsztat biznesowy
H3: Bezplatny warsztat techniczny
H3: Demonstracja wybranej technologii
H3: Przygotowanie procesu implementacji
H2: ROI w 90 dni to stabilne wzrosty KPI
H3: Wzrost sredniej wielkosci koszyka (AOS)
H3: Zwrot z inwestycji
H3: Wzrost sredniej wartosci koszyka (AOV)
H3: Wiecej transakcji w e-commerce
H3: Wzrost przychodu na uzytkownika
H3: Wzrost akwizycji zgod marketingowych
H2: ROI w 90 dni to jedynie poczatek
H2: Porozmawiajmy o twoim e-commerce
```

Kluczowy content:

```txt
Zwiesz ilosc zamowien i srednia wartosc koszyka (AOV i AOS) dzieki odpowiednim strategiom Personalizacji i Automatyzacji wspieranym Sztuczna Inteligencja.
Gwarantujemy minimum 10-krotny zwrot z inwestycji w ciagu 90 dni wspolpracy.
Nasze rozwiazania przynosza najlepsze efekty w e-sklepach, ktore oferuja ponad 200 produktow i realizuja co najmniej 1000 transakcji miesiecznie.
W ciagu 90 dni wdrazamy okolo 10 kluczowych scenariuszy dostosowanych do specyfiki biznesu.
```

Framework:

1. Bezplatny warsztat biznesowy.
2. Bezplatny warsztat techniczny.
3. Demonstracja wybranej technologii.
4. Przygotowanie procesu implementacji.

KPI:

- AOS,
- ROI,
- AOV,
- liczba transakcji,
- ARPU,
- zgody marketingowe.

Uwagi:

- to strategiczna podstrona konwersyjna i SEO,
- claim `10-krotny zwrot z inwestycji` wymaga potwierdzenia prawnego/biznesowego,
- cytat klienta wymaga zgody.

## 12. Wyszukiwarka AI

Zrodlo:

```txt
https://persooa.webflow.io/oferta/wyszukiwarka-ai
```

Docelowy URL PL:

```txt
/oferta/wyszukiwarka-ai
```

Docelowy URL EN:

```txt
/en/offer/ai-search
```

Title z Webflow:

```txt
wyszukiwarka-ai
```

Struktura:

```txt
H1: Wyszukiwarka AI
H2: Dla wiekszej sprzedazy w e-commerce
H3: Integracja danych
H3: Personalizacja AI
H3: Automatyzacja kampanii
H3: Aktywacja kanalow komunikacji
H3: Zarzadzanie cyklem zycia klienta
H3: Analityka danych wspierana przez AI
H2: Porozmawiajmy o twoim e-commerce
```

Kluczowy content:

```txt
Odkryj mozliwosci dzieki inteligentnym wyszukiwaniom.
Przeksztalc marketing w maszyne generujaca przychod i lojalnosc.
```

Sekcje do budowy:

1. Hero uslugi.
2. Problem wyszukiwania w e-commerce.
3. Semantic search / AI search.
4. Wplyw na discovery i konwersje.
5. Integracja z katalogiem produktowym.
6. Personalizacja wynikow.
7. CTA.

Uwagi:

- obecna tresc jest zbyt podobna do innych podstron,
- trzeba dodac unikalne sekcje o search, produktach, intencji i konwersji.

## 13. Blog listing

Zrodlo:

```txt
https://persooa.webflow.io/blog
```

Docelowy URL PL:

```txt
/blog
```

Docelowy URL EN:

```txt
/en/blog
```

Title z Webflow:

```txt
Blog
```

Struktura:

```txt
H1: Stories from the field
H2: Tekst do SEO
H2: Porozmawiajmy o twoim e-commerce
H2: Stories from the field
```

Wpisy widoczne w Webflow:

- CTA - co to jest? Przyklady skutecznych przyciskow wezwan do dzialania
- Dlaczego platforma CDP staje sie ewolucja Twojego Marketing Automation | Customer Data Platform
- Agenci AI - czym sa i jak dzialaja inteligentni agenci?
- Czym jest bounce rate i jak zmniejszyc wspolczynnik odrzucen?
- Lead nurturing - co to jest i jak "opiekowac sie" przyszlym klientem
- Churn prediction - czym jest i jak wspiera biznes?
- Co to jest Semantic Search? Vector Search vs Semantic Search i ich wplyw na sprzedaz w e-commerce
- Co to jest workflow automation i jak AI zamieni powtarzalne procesy w silnik wzrostu Twojej firmy
- Why your legacy systems need modernizing
- Building teams that scale with your vision
- API design patterns that actually work
- Agenci AI transformuja operacje biznesowe
- How agents reshape customer engagement
- When agents take over the mundane work

Uwagi:

- lista zawiera miks PL i EN,
- czesc wpisow wyglada jak placeholdery/case study examples,
- trzeba ustalic, czy blog i Growth Hub maja byc jednym hubem,
- trzeba migrowac obecne wpisy SEO z produkcji.

## 14. Wpis blogowy: CTA

Zrodlo:

```txt
https://persooa.webflow.io/blog/cta-co-to-jest-przyklady-skutecznych-przyciskow-wezwan-do-dzialania
```

Docelowy URL PL:

```txt
/blog/cta-co-to-jest-przyklady-skutecznych-przyciskow-wezwan-do-dzialania
```

Docelowy URL EN:

```txt
/en/blog/what-is-cta-examples
```

Title z Webflow:

```txt
Persooa
```

Wymaga poprawy title SEO.

Struktura:

```txt
H1: CTA - co to jest? Przyklady skutecznych przyciskow wezwan do dzialania
H2: Co to jest CTA? (Call to Action)
H2: Jakie sa rodzaje CTA?
H3: Najpopularniejsze formy CTA:
H2: Gdzie najlepiej umieszczac CTA, zeby bylo skuteczne?
H3: Najczestsze miejsca umieszczania CTA:
H2: Zobacz, jak pomoglismy innym biznesom
H2: Jak stworzyc skuteczne CTA?
H2: Przyklady buttonow CTA, ktore dzialaja
H2: Dlaczego warto stosowac CTA?
H2: Porozmawiajmy o twoim e-commerce
```

Kluczowe watki:

- definicja CTA,
- rodzaje CTA,
- miejsca umieszczania CTA,
- przyklady skutecznych przyciskow,
- rola CTA w konwersji,
- linkowanie do personalizacji i case studies.

Uwagi:

- wpis ma realna tresc blogowa,
- wymaga metadata, autora, daty, kategorii i linkowania wewnetrznego,
- title jest niepoprawny i musi zostac zmieniony.

## 15. Polityka prywatnosci

Zrodlo:

```txt
https://www.persooa.com/polityka-prywatnosci
```

Docelowy URL PL:

```txt
/polityka-prywatnosci
```

Docelowy URL EN:

```txt
/en/privacy-policy
```

Title:

```txt
Polityka prywatnosci
```

Struktura:

```txt
H1: Polityka prywatnosci
H5: Spis tresci
H2: Wstep
H2: Definicje
H2: Zasady ochrony danych
H2: Prawa osoby, ktorej dane dotycza
H2: Dane, ktore zbieramy
H2: W jaki sposob wykorzystujemy Twoje dane osobowe
H2: Kto moze uzyskac dostep do Twoich danych osobowych
H2: Jak zabezpieczamy Twoje dane
H2: Pliki cookie i inne technologie, ktorych uzywamy
H2: Przesylanie danych osobowych poza granice UE
H2: Profilowanie
H2: Dzialalnosc na portalach spolecznosciowych
H3: Rodzaje wykorzystywanych Cookies
H2: Uzywamy plikow cookie w nastepujacych celach
H2: Informacje kontaktowe
```

Uwagi:

- tresc prawna powinna zostac przeniesiona 1:1 albo zatwierdzona przez klienta/prawnika,
- nie redagujemy prawnie bez akceptacji,
- EN wymaga zatwierdzonego tlumaczenia.

## 16. Kodeks postepowania

Zrodlo:

```txt
https://www.persooa.com/kodeks-postepowania
```

Docelowy URL PL:

```txt
/kodeks-postepowania
```

Docelowy URL EN:

```txt
/en/code-of-conduct
```

Title:

```txt
Kodeks postepowania
```

Struktura:

```txt
H1: Kodeks postepowania
H5: Spis tresci
H2: Misja Persooa
H2: Cel niniejszego Kodeksu
H3: 1.1 Odbiorcy Kodeksu
H2: Zgodnosc
H2: Praktyki biznesowe
H3: 3.1 Prawo antymonopolowe i prawo konkurencji
H3: 3.2 Brak nieprawidlowych platnosci
H3: 3.3 Bojkoty gospodarcze
H3: 3.4 Prawo imigracyjne
H3: 3.5 Informacje poufne
H3: 3.6 Kwestie zwiazane z ogolnym wykonawstwem
H3: 3.7 Zamowienia rzadowe
H3: 3.8 Organizacyjny konflikt interesow
H3: 3.9 Ograniczenia w zatrudnieniu po zakonczeniu pracy w rzadzie
H3: 3.10 Przeciwdzialanie korupcji
H3: 3.11 Prezenty, rozrywka
H3: 3.12 Osobista dzialalnosc polityczna
H3: 3.13 Wplywanie na innych
H3: 3.14 Wlasnosc intelektualna
H3: 3.15 Integralnosc finansowa
H3: 3.16 Publiczne ujawnianie informacji
H3: 3.17 Uprzejmosci biznesowe
H3: 3.18 Uprzejmosci biznesowe, ktore mozesz otrzymac
H3: 3.19 Konflikty interesow
H3: 3.20 Darowizna na cele charytatywne
H3: 3.21 Ochrona informacji poufnych
H3: 3.22 Media spolecznosciowe
H3: 3.23 Korzystanie z zasobow Persooa
```

Uwagi:

- tresc prawna/etyczna powinna zostac przeniesiona 1:1 albo zatwierdzona przez klienta,
- EN wymaga zatwierdzonego tlumaczenia.

## 17. Kontakt

Zrodlo:

```txt
https://www.persooa.com/kontakt
```

Docelowy URL PL:

```txt
/kontakt
```

Docelowy URL EN:

```txt
/en/contact
```

Title:

```txt
Kontakt
```

Struktura:

```txt
H1: Skontaktuj sie z nami
H2: Poznaj nasze mozliwosci
H2: Chcesz zobaczyc jak mozemy Ci pomoc?
H2: Zaufali nam
```

Kluczowy content:

```txt
Napisz do nas i dowiedz sie wiecej, jak mozemy wesprzec Twoj e-commerce.
Umow sie na bezplatne spotkanie demo marketing automation 2.0 z naszymi specjalistami.
Wybierz dogodny termin.
```

Dane kontaktowe:

```txt
Zelazna 51/53, Warsaw, Poland
Puzzle Office, Norblin Factory
M: hello@persooa.com
T: 501 006 000
```

Sekcje do budowy:

1. Hero kontaktowe.
2. Formularz kontaktowy.
3. Kalendarz lub CTA do wyboru terminu.
4. Dane kontaktowe.
5. Logo wall / zaufali nam.
6. Footer.

Uwagi:

- obecna strona ma dwa H1, w nowej wersji powinien byc jeden H1,
- trzeba potwierdzic, czy formularz ma isc do CRM/HubSpot,
- EN wymaga tlumaczenia i ewentualnie osobnego formularza.

## 18. Wspolne elementy kazdej strony

Kazda podstrona musi miec:

- header,
- footer,
- title SEO,
- meta description,
- canonical,
- odpowiednik jezykowy PL/EN,
- hreflang,
- jeden H1,
- logiczne H2/H3,
- CTA,
- linkowanie wewnetrzne.

## 19. Wspolne CTA

CTA glowne:

```txt
Zapytaj o projekt
```

CTA dodatkowe:

```txt
Wiecej o ROI w 90 dni
Porozmawiajmy o twoim e-commerce
Umow demo
Czytaj wiecej
```

Do ujednolicenia:

- wielkosc liter,
- forma grzecznosciowa,
- pisownia `twoim/Twoim`,
- finalne brzmienie CTA w PL i EN.

## 20. Najwazniejsze zadania contentowe

Przed wdrozeniem trzeba:

1. Poprawic title SEO dla stron, gdzie Webflow ma `Untitled`, `Persooa` albo slug jako title.
2. Ujednolicic pisownie i literowki.
3. Rozbudowac unikalne tresci dla stron, ktore obecnie maja powtarzalne sekcje.
4. Potwierdzic claimy biznesowe, np. `10-krotny zwrot z inwestycji`.
5. Potwierdzic wyniki liczbowe i cytaty.
6. Przygotowac EN content.
7. Przygotowac redirect map po audycie obecnej produkcji.
8. Zastapic linki `#` finalnymi adresami.
9. Zdecydowac, czy Blog i Growth Hub sa osobnymi sekcjami.
10. Potwierdzic finalna strukture menu PL/EN.
