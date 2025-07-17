# TryggVän - Wireframes

## 1. Landing Page (/)

```
┌─────────────────────────────────────────────────────────────┐
│ NAVIGATION BAR                                              │
│ ┌─────────┐                          ┌────────┐ ┌─────────┐ │
│ │  Logo   │                          │ Logga  │ │   Bli   │ │
│ │TryggVän │                          │   in   │ │ medlem  │ │
│ └─────────┘                          └────────┘ └─────────┘ │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ HERO SECTION                                                │
│ ┌─────────────────────────┬───────────────────────────────┐ │
│ │                         │                               │ │
│ │  Hitta trygg sällskap  │        [Friendly elderly      │ │
│ │  för dina föräldrar    │         person image with     │ │
│ │                         │         companion]           │ │
│ │  ┌───────────────────┐  │                               │ │
│ │  │ Sök område...     │  │                               │ │
│ │  └───────────────────┘  │                               │ │
│ │  ┌───────────────────┐  │                               │ │
│ │  │   Hitta sällskap  │  │                               │ │
│ │  └───────────────────┘  │                               │ │
│ │                         │                               │ │
│ └─────────────────────────┴───────────────────────────────┘ │
│                                                             │
│ TRUST INDICATORS                                            │
│ ┌─────────────┬─────────────┬─────────────┬─────────────┐ │
│ │    500+     │  Verifierade│   4.8/5     │  Trygg      │ │
│ │  Sällskap   │  Profiler   │  Betyg      │  Betalning  │ │
│ └─────────────┴─────────────┴─────────────┴─────────────┘ │
│                                                             │
│ KATEGORIER                                                  │
│ "Vilken typ av sällskap söker du?"                         │
│ ┌─────────────┬─────────────┬─────────────┬─────────────┐ │
│ │      🚶      │      ☕      │      📖      │      🎨      │ │
│ │ Promenader  │    Fika     │   Läsning   │ Handarbete  │ │
│ └─────────────┴─────────────┴─────────────┴─────────────┘ │
│ ┌─────────────┬─────────────┬─────────────┬─────────────┐ │
│ │      🎵      │      🌻      │      🎲      │      💬      │ │
│ │    Musik    │ Trädgård    │    Spel     │   Samtal    │ │
│ └─────────────┴─────────────┴─────────────┴─────────────┘ │
│                                                             │
│ HUR DET FUNGERAR                                            │
│ ┌─────────────┬─────────────┬─────────────┬─────────────┐ │
│ │     1.      │     2.      │     3.      │     4.      │ │
│ │   Berätta   │   Bläddra   │  Kontakta   │   Träffas   │ │
│ │  om behov   │  profiler   │  sällskap   │   tryggt    │ │
│ └─────────────┴─────────────┴─────────────┴─────────────┘ │
│                                                             │
│ FOOTER                                                      │
│ Om oss | Säkerhet | Priser | Kontakt | Villkor            │
└─────────────────────────────────────────────────────────────┘
```

## 2. Marketplace List View (/companions)

```
┌─────────────────────────────────────────────────────────────┐
│ NAVIGATION BAR                                              │
│ ┌─────────┐  ┌──────┐ ┌──────┐        ┌──────┐ ┌─────────┐ │
│ │  Logo   │  │ Hem  │ │ Sök  │        │ Konto│ │ Logga ut│ │
│ └─────────┘  └──────┘ └──────┘        └──────┘ └─────────┘ │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ ┌──────────────┬────────────────────────────────────────────┐
│ │ FILTER       │  SÄLLSKAP I [OMRÅDE]         Sortera: ▼   │
│ │              │                                            │
│ │ Område       │  ┌──────────────────────────────────────┐ │
│ │ [________]   │  │ [Foto]  Anna L.          ⭐ 4.9 (23) │ │
│ │              │  │         Stockholm        150 kr/tim  │ │
│ │ Aktiviteter  │  │         "Glad och energisk..."       │ │
│ │ □ Promenader │  │         [Fika] [Samtal] [Promenad]  │ │
│ │ □ Fika       │  │         ✓ Tillgänglig denna vecka   │ │
│ │ □ Läsning    │  └──────────────────────────────────────┘ │
│ │ □ Handarbete │                                            │
│ │ □ Musik      │  ┌──────────────────────────────────────┐ │
│ │ □ Trädgård   │  │ [Foto]  Erik S.          ⭐ 5.0 (41) │ │
│ │ □ Spel       │  │         Solna            175 kr/tim  │ │
│ │ □ Samtal     │  │         "Pensionerad lärare som..." │ │
│ │              │  │         [Läsning] [Musik] [Spel]    │ │
│ │ Pris/timme   │  │         ✓ Tillgänglig denna vecka   │ │
│ │ 0 ─────── 500│  └──────────────────────────────────────┘ │
│ │              │                                            │
│ │ Tillgänglig  │  ┌──────────────────────────────────────┐ │
│ │ □ Denna vecka│  │ [Foto]  Maria K.         ⭐ 4.7 (19) │ │
│ │ □ Helger     │  │         Täby             125 kr/tim  │ │
│ │ □ Vardagar   │  │         "Varm och omtänksam..."     │ │
│ │              │  │         [Fika] [Handarbete]         │ │
│ │ Språk        │  │         ◷ Begränsad tillgänglighet  │ │
│ │ □ Svenska    │  └──────────────────────────────────────┘ │
│ │ □ Engelska   │                                            │
│ │ □ Finska     │  [Visa fler resultat...]                   │
│ │              │                                            │
│ └──────────────┴────────────────────────────────────────────┘
└─────────────────────────────────────────────────────────────┘
```

## 3. Companion Profile Page (/companions/[id])

```
┌─────────────────────────────────────────────────────────────┐
│ NAVIGATION BAR                                              │
│ ┌─────────┐  ← Tillbaka till sökresultat                   │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ PROFILE HEADER                                              │
│ ┌─────────────────┬─────────────────────────────────────────┐
│ │                 │  Anna Lindström        ⭐ 4.9 (23 omdömen)│
│ │   [Large        │  📍 Stockholm                           │
│ │    Profile      │  ✓ Verifierad profil                    │
│ │    Photo]       │                                         │
│ │                 │  ┌─────────────────┐                    │
│ │                 │  │ Kontakta Anna   │                    │
│ │                 │  └─────────────────┘                    │
│ └─────────────────┴─────────────────────────────────────────┘
│                                                             │
│ OM ANNA                                                     │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ "Hej! Jag är en glad och energisk pensionär som älskar │ │
│ │ att träffa nya människor. Efter 30 år som sjuksköterska│ │
│ │ vet jag hur viktigt det är med gott sällskap..."       │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
│ AKTIVITETER JAG ERBJUDER                                    │
│ ┌──────────┬──────────┬──────────┬──────────┬──────────┐  │
│ │    ☕     │    🚶     │    💬     │    🎲     │    🌻     │  │
│ │  Fika    │Promenader│  Samtal  │   Spel   │ Trädgård │  │
│ └──────────┴──────────┴──────────┴──────────┴──────────┘  │
│                                                             │
│ TILLGÄNGLIGHET                                              │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Mån-Fre: 09:00-17:00  |  Helger: Efter överenskommelse │ │
│ │ Pris: 150 kr/timme    |  Minsta bokning: 2 timmar     │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
│ OMDÖMEN                                                     │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ ⭐⭐⭐⭐⭐ "Anna är underbar! Min mamma ser alltid..."    │ │
│ │ - Karin J., 2 veckor sedan                             │ │
│ │                                                         │ │
│ │ ⭐⭐⭐⭐ "Mycket trevlig och pålitlig..."                 │ │
│ │ - Per A., 1 månad sedan                                │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
│ LIKNANDE PROFILER                                           │
│ ┌──────────┬──────────┬──────────┬──────────┐             │
│ │ [Mini    │ [Mini    │ [Mini    │ [Se fler]│             │
│ │  card]   │  card]   │  card]   │          │             │
│ └──────────┴──────────┴──────────┴──────────┘             │
└─────────────────────────────────────────────────────────────┘
```

## Key Design Notes:
- Clean, scannable layout with clear visual hierarchy
- Trust indicators prominent (ratings, verifications)
- Activity badges for quick understanding
- Availability status clearly shown
- Mobile-responsive grid structure
- Warm, inviting imagery placeholder
- Simple navigation flow