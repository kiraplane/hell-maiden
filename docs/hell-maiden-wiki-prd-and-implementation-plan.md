# Hell Maiden Wiki PRD and Implementation Plan

Checked: 2026-07-16 (Asia/Shanghai)

## 1. Product decision

Build an English, independent, player-decision-first guide hub for **Hell Maiden** at `https://www.hell-maiden.wiki`. The game entered its announced Steam Early Access date while this research was running; Steam still reported the app as `coming_soon` during the final source check, so release-state wording must stay date-stamped until the store unlocks.

The site will not compete with the official wiki by reproducing hundreds of encyclopedia entries. It will answer the questions autocomplete and launch traffic already expose: how to start, how Spirit Cards work, how to think about builds, how to approach Minos, which characters and Poets matter, what changed from the demo, where the game is available, whether Steam Deck has a rating, and where to download safely.

## 2. Verified identity

- Game: Hell Maiden
- Developer and publisher: AstralShift
- Steam app: `3372060`
- Steam URL: https://store.steampowered.com/app/3372060/Hell_Maiden/
- Demo app: `4002340`
- Demo URL: https://store.steampowered.com/app/4002340/Hell_Maiden_Demo/
- Steam-linked website: https://astralshiftpro.com/home
- Steam-linked YouTube: https://www.youtube.com/@astralshiftpro/videos
- Steam-linked Discord: https://discord.gg/Hn5dkbAZR5
- Official collaborative wiki: https://hellmaiden.wiki.gg/
- Announced Early Access date: July 16, 2026
- Current Steam platform listing: Windows
- Current content claim: two Circles/levels, four Poets of Limbo, four signature weapons and 40+ abilities
- Core system: real-time horde survival with Weapon Cards, Mod Cards, deck positioning, merging and status effects

## 3. Source hierarchy

1. Current Steam store and Steam app API for identity, platform, features, requirements and release state.
2. AstralShift-linked official channels for trailers, opening animation and announcements.
3. Official Hell Maiden Wiki for entity names and demo-era system documentation, with explicit Early Access freshness caution.
4. Current YouTube results for visual cross-checks; demo footage never overrides the Early Access client.
5. Independent previews for control feel and design context only.

No source supports redeem codes. No stable Early Access meta supports a definitive tier list. `codes` is therefore ignored and `tier list` is ignored until live search demand plus version-stable evidence exists.

## 4. Keyword matrix

| Keyword | Intent | Route | Priority | Status | Evidence / decision |
|---|---|---:|---:|---|---|
| hell maiden | Game entity and help hub | `/` | P0 | keep | User seed, Steam, autocomplete |
| hell maiden wiki | Structured help | `/` | P0 | keep | User seed and autocomplete |
| hell maiden guide | Browse guides | `/guides` | P0 | keep | User seed and autocomplete |
| hell maiden steam | Find official game | `/` | P0 | keep | User seed and autocomplete |
| hell maiden beginner guide | First successful run | `/guides/beginner-guide` | P0 | keep | User seed and guide autocomplete |
| hell maiden builds | Build decision framework | `/guides/best-builds` | P0 | keep | User seed and autocomplete |
| hell maiden cards | Understand card system | `/cards` | P0 | keep | User seed and autocomplete |
| hell maiden deck building | Arrange Weapon/Mod cards | `/cards` | P0 | keep | User seed and official mechanic |
| hell maiden characters | Character index | `/characters` | P0 | keep | Autocomplete |
| hell maiden dante | Understand protagonist | `/characters#dante` | P1 | keep | Autocomplete and official wiki |
| hell maiden playable characters | Current player-character status | `/characters` | P1 | keep | Autocomplete; answer cautiously |
| hell maiden boss | Boss help | `/guides/minos-boss-guide` | P0 | keep | Autocomplete |
| hell maiden minos | Limbo final boss | `/guides/minos-boss-guide` | P0 | keep | Autocomplete and official wiki |
| hell maiden weapons | Weapon Card help | `/cards#weapon-cards` | P1 | keep | Autocomplete |
| hell maiden controls | Aiming, dash and controller setup | `/guides/controls-and-first-run-tips` | P1 | keep | Autocomplete and Steam features |
| hell maiden demo | Demo scope and transfer question | `/guides/demo-vs-early-access` | P0 | keep | Autocomplete and demo store |
| hell maiden release date | Early Access and full release status | `/release-date` | P0 | keep | Strong autocomplete |
| hell maiden full release date | Full-release status | `/release-date#full-release` | P1 | keep | Autocomplete; no exact date announced |
| hell maiden platforms | Supported platforms | `/platforms` | P0 | keep | Autocomplete |
| hell maiden ps5 | Console status | `/platforms#consoles` | P1 | keep | Autocomplete; no official listing found |
| hell maiden switch | Console status | `/platforms#consoles` | P1 | keep | Autocomplete; no official listing found |
| hell maiden mobile | Mobile status | `/platforms#mobile` | P2 | keep | Autocomplete; safety answer only |
| hell maiden steam deck | Deck compatibility status | `/steam-deck` | P0 | keep | Exact autocomplete; Valve category is currently unresolved |
| hell maiden download | Official install path | `/download` | P0 | keep | Autocomplete |
| hell maiden download free | Demo vs paid app | `/download` | P1 | keep | Autocomplete; explain free demo only |
| hell maiden soundtrack | Music and opening | `/soundtrack` | P1 | keep | Autocomplete and official video |
| hell maiden discord | Official community link | `/` | P1 | keep | Autocomplete and Steam-linked invite |
| hell maiden co op | Multiplayer status | `/platforms#multiplayer` | P2 | watch | Steam currently lists single-player only |
| hell maiden mac | macOS status | `/platforms` | P2 | watch | Steam app API currently says Windows only |
| hell maiden codes | Redeem-code intent | none | P3 | ignore | No code system evidence |
| hell maiden tier list | Ranking intent | none | P3 | ignore | No stable Early Access meta; one demo opinion video is insufficient |
| hell maiden crack / skidrow | Pirated client | none | P3 | ignore | Unsafe and unauthorized |
| hell maiden 中文攻略 | Chinese guide | `/` | P2 | localize_later | Steam supports Simplified/Traditional Chinese; English core first |

## 5. Competitor benchmark

### Official Hell Maiden Wiki (`hellmaiden.wiki.gg`)

- Homepage search snapshot reports 87 articles, 1,134 total wiki pages and 531 files.
- Strong at encyclopedia coverage: Dante, Beatrice, Virgil, Horace, Homer, Ovid, Minos, Spirit Cards, Hell and The Forum.
- Strong at granular demo-era facts: card lists, character decks, Minos phases and dialogue/gallery tabs.
- Weakness for launch search: homepage still described the game as demo/coming soon during the July 16 check.
- Weakness for player decisions: entity pages do not replace a concise first-run route, build stop rules, platform status or safe-download guide.
- Full sitemap and `Special:AllPages` fetches were blocked with HTTP 403, so the benchmark uses indexed pages and homepage counts rather than pretending a complete crawl succeeded.

### Steam store, community and preview coverage

- Steam is authoritative but is a product page, not a guide system.
- Steam Community Guides had no mature English launch matrix during research.
- Independent previews explain the active aiming, dash and card-positioning idea well, but most footage is from the demo.
- YouTube discovery is useful for visuals: the largest broad gameplay result had about 270K views; focused Blazing Quill and Minos videos are smaller and demo-era.

### Pages we must match

- Game identity, characters, card system, Minos, official links and current content scope.

### Pages we can improve

- Beginner route, build framework, demo-versus-Early-Access decision, controls, release/full-release status, platforms, Steam Deck, download safety and soundtrack.

### UI and SEO decisions

- Dense homepage hub with official trailer, short quick links and a visible next section.
- Sticky desktop wiki navigation with collapsed groups and active-group auto-open.
- Compact mobile wiki menu.
- Exact route/title/H1 alignment for every high-intent query.
- Explicit related-route labels; never expose raw slugs.
- `WebSite`, `Organization`, `VideoGame`, `VideoObject`, `ItemList`, `Article` and `BreadcrumbList` schema where appropriate.
- No localization at launch; add only after English pages earn demand.

## 6. Launch page set

Fifteen English core pages, plus legal pages:

1. `/`
2. `/guides`
3. `/guides/beginner-guide`
4. `/cards`
5. `/guides/best-builds`
6. `/guides/minos-boss-guide`
7. `/guides/poets-of-limbo`
8. `/guides/demo-vs-early-access`
9. `/guides/controls-and-first-run-tips`
10. `/characters`
11. `/release-date`
12. `/platforms`
13. `/steam-deck`
14. `/download`
15. `/soundtrack`

Legal: `/disclaimer`, `/privacy`, `/terms`, `/cookie`.

## 7. Video selection

| Page | Video | Strategy | Version note |
|---|---|---|---|
| Home / release | `Z43f0VYhNv8` AstralShift release-date trailer | official | Current launch media |
| Beginner | `T49SzQwlhyw` broad gameplay | popular_youtube | Demo-era; use for interface flow only |
| Cards | `cXfT1_u0Htw` deckbuilding survivor overview | youtube_explainer | Demo-era; written current scope wins |
| Builds | `Lh8nab89jp0` Blazing Quill build | user_intent_youtube | A build example, not a permanent tier claim |
| Minos | `XF0uZYx-pcI` Minos fight | user_intent_youtube | Limbo demo fight cross-check |
| Demo comparison | `q55HHtfivL4` full demo | user_intent_youtube | Explicitly demo-only |
| Controls | `90EaQ4buCC8` official gameplay trailer | official | Trust-building control/pace reference |
| Soundtrack | `nKmHUQIUzmM` official opening | official | Current official opening |

## 8. Implementation plan

- Replace the copied data namespace with `src/data/hell-maiden/`.
- Replace the route group with `src/app/[locale]/(hell-maiden)/`.
- Replace components and assets with `hell-maiden` namespaces.
- Use official Steam art and selected YouTube thumbnails locally.
- Use a dark plum, rose and gold visual system derived from official art.
- Update config, messages, manifest, robots, sitemap, nav, footer, README and Cloudflare config.
- Remove all old store IDs, old domains, old game facts and stale analytics IDs.
- Keep `keep_vars: true`; introduce no Adsterra files or variables.
- Validate lint, TypeScript, Next build, Cloudflare build and responsive browser pages.
- Publish a clean `main` branch, deploy the `hell-maiden` Worker, bind apex and `www`, configure GA4 and the root GSC Domain Property, submit the canonical sitemap, and register two core links in Shipmanager.

## 9. Acceptance criteria

- No source-template game/domain/App ID/developer residue.
- No advertising-provider environment keys or placements.
- Homepage description under 160 characters and synced to manifest/messages.
- All 15 core pages resolve and appear in sitemap.
- Every detail page has metadata, Article/Breadcrumb schema, FAQ and related next steps.
- Homepage has WebSite/Organization/VideoGame/VideoObject schema.
- Long sidebar links wrap at narrow widths.
- Apex redirects or resolves cleanly and canonical `www` returns 200.
- GA executes once, GSC is `sc-domain:hell-maiden.wiki` with `siteOwner`, and the full sitemap URL is submitted.
