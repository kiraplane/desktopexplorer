# Desktop Explorer Wiki — PRD and Implementation Plan

Checked: 2026-07-20  
Canonical site: `https://www.desktopexplorer.wiki`  
Project / GitHub / Cloudflare name: `desktopexplorer`

## 1. Product definition

Desktop Explorer Wiki is an English, spoiler-aware guide hub for Steam App `2527160`. It should help a player recover from a specific puzzle block without forcing them to read the whole plot. The site must distinguish the July 17, 2026 full game from Demo App `2533590`, generic desktop/file-explorer software, and unrelated faux-OS games.

The public experience should feel like a readable 1990s desktop rather than a generic gaming blog: compact window frames, lavender desktop surfaces, pale sage controls, magenta focus states, amber warning accents, and deep teal content panels. The visual treatment may reference the official interface style but must not copy the game UI pixel-for-pixel.

### Player promises

- Give a spoiler-light hint before a direct answer whenever the route supports it.
- Keep passwords, directions, profile names, and late-game actions in clearly labeled spoiler sections.
- Separate official facts, current full-game walkthrough evidence, demo-era material, and community cross-checks.
- Never publish redeem codes, a tier list, cheats, cracks, extracted game files, or fake official claims.
- Link the next likely prerequisite or progression guide at the end of every article.

## 2. Verified identity and official sources

| Field | Verified value |
| --- | --- |
| Game | Desktop Explorer |
| Platform | Steam |
| Steam URL | `https://store.steampowered.com/app/2527160/Desktop_Explorer/` |
| App ID | `2527160` |
| Developer | Recurring Dream |
| Publishers | Recurring Dream, Outersloth, indienova |
| Release | July 17, 2026 |
| Official website linked by Steam | `https://recurringdream.studio/` |
| Demo App ID | `2533590` |
| Supported desktop platforms | Windows and macOS |
| Steam achievements | 23 |
| Official trailer | `https://www.youtube.com/watch?v=qfpuWJIeCXo` |

Primary references:

- Steam store and official media: `https://store.steampowered.com/app/2527160/Desktop_Explorer/`
- Official studio: `https://recurringdream.studio/`
- Steam Community: `https://steamcommunity.com/app/2527160/`
- Official achievement table: `https://steamcommunity.com/stats/2527160/achievements/`
- Steam discussion and patch context: `https://steamcommunity.com/app/2527160/discussions/`

## 3. Search-demand discovery

Google autocomplete checked on 2026-07-20 exposes the following game-specific derivatives:

- `desktop explorer puzzle`
- `desktop explorer game puzzle 9`
- `desktop explorer puzzle 10`
- `desktop explorer game walkthrough`
- `desktop explorer demo walkthrough`
- `desktop explorer walkthrough`
- `desktop explorer puzzle 3 walkthrough`
- `desktop explorer puzzle 4 walkthrough`
- `desktop explorer puzzle 6 walkthrough`
- `desktop explorer game walkthrough puzzles`
- `desktop explorer passwords`
- `desktop explorer price`

Current web results also expose intent around The Cave, The Temple, M4x1mus password recovery, NextRooms, Mall F1/F2, Admin, Guppy, the ending, all puzzle answers, and 23 achievements. Search results are still volatile because the game released three days before this check.

## 4. Keyword matrix

| Keyword | Intent | Route | Priority | Status | Evidence | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| desktop explorer | Find the exact game | `/` | P0 | keep | Steam entity and current results | Homepage head term |
| desktop explorer wiki | Find structured help | `/` | P0 | keep | Domain request and thin dedicated coverage | Homepage trust term |
| desktop explorer game guide | Browse help | `/guides` | P0 | keep | Google autocomplete | Guide hub |
| desktop explorer walkthrough | Complete the game | `/guides/full-walkthrough` | P0 | keep | Google autocomplete and multiple competitors | Full progression map |
| desktop explorer game walkthrough puzzles | Follow puzzle progression | `/guides/full-walkthrough` | P0 | keep | Google autocomplete | Merge with full walkthrough |
| desktop explorer all puzzle solutions | Find every answer | `/guides/all-puzzle-solutions-passwords` | P0 | keep | NineWiki and current search | Spoiler-heavy reference |
| desktop explorer passwords | Find password list | `/guides/all-puzzle-solutions-passwords` | P0 | keep | Google autocomplete | Merge with all-answer intent |
| desktop explorer puzzle 3 | Solve Cave Puzzle 3 | `/guides/cave-puzzles-0-10` | P0 | keep | Google autocomplete | Anchor inside Cave guide |
| desktop explorer puzzle 4 | Solve Cave Puzzle 4 | `/guides/cave-puzzles-0-10` | P0 | keep | Google autocomplete | Anchor inside Cave guide |
| desktop explorer puzzle 6 | Solve Cave Puzzle 6 | `/guides/cave-puzzles-0-10` | P0 | keep | Google autocomplete | Anchor inside Cave guide |
| desktop explorer puzzle 9 | Solve Altar | `/guides/puzzle-9-altar-solution` | P0 | keep | Head autocomplete derivative and Steam discussions | Dedicated tricky route |
| desktop explorer puzzle 10 | Solve Beyond | `/guides/puzzle-10-beyond-solution` | P0 | keep | Head autocomplete derivative | Dedicated multi-answer route |
| desktop explorer temple walkthrough | Complete Temple paths | `/guides/temple-walkthrough` | P0 | keep | Into Indie Games and current web results | Anubis, Thoth, Ra |
| desktop explorer m4x1mus password | Recover Maxine profile | `/guides/m4x1mus-password-nextrooms` | P0 | keep | Current guides and exact security answers | Profile transition |
| desktop explorer mall f1 puzzles | Complete first mall floor | `/guides/mall-f1-puzzles` | P1 | keep | Current serial walkthroughs | Shops, codes, paint |
| desktop explorer mall f2 walkthrough | Reach Admin | `/guides/mall-f2-admin-unlock` | P1 | keep | Current serial walkthroughs | Arcade, vending, photo grid |
| desktop explorer ending | Complete Admin and Guppy | `/guides/admin-guppy-ending` | P1 | keep | Full walkthrough and speedrun chapters | Major-spoiler route |
| desktop explorer achievements | Reach 100% | `/guides/achievements-guide` | P0 | keep | Official 23-item Steam table | Official names first |
| desktop explorer beginner guide | Learn puzzle grammar | `/guides/beginner-spoiler-light-hints` | P1 | keep | Game mechanics and press coverage | No direct answers above fold |
| desktop explorer demo walkthrough | Separate demo progress | `/guides/demo-vs-full-game` | P1 | keep | Google autocomplete and App `2533590` | Explicit version boundary |
| desktop explorer release date | Confirm current status | `/guides/release-price-platforms` | P1 | keep | Steam and autocomplete | July 17, 2026 |
| desktop explorer price | Check live regional price | `/guides/release-price-platforms` | P1 | keep | Google autocomplete | Never hard-code a permanent regional price |
| desktop explorer system requirements | Check compatibility | `/system-requirements` | P1 | keep | Official Steam tables | Windows and macOS |
| desktop explorer download | Install safely | `/download` | P1 | keep | Purchase/install intent | Official Steam only |
| desktop explorer review | Decide whether to buy | `/review` | P1 | keep | New-release buying intent | Decision page, no invented score |
| desktop explorer reddit | Find discussion | `/guides/beginner-spoiler-light-hints` | P2 | watch | Autocomplete | Community changes quickly |
| desktop explorer codes | Find redeem codes | none | P3 | ignore | No redeem-code system | Puzzle passwords are not promo codes |
| desktop explorer tier list | Rank entities | none | P3 | ignore | No roster or ranked build system | Do not publish template furniture |
| desktop explorer cheats / crack / free download | Unsafe shortcut | `/download` | P2 | keep | Predictable unsafe intent | Official purchase/demo guidance only |
| 桌面探索者攻略 | Chinese guide | English routes first | P2 | localize_later | Steam supports Simplified and Traditional Chinese | Translate only after English search evidence stabilizes |
| desktop explorer Windows utility | Find unrelated software | none | P3 | ignore | Entity collision | Keep the game modifier explicit |

## 5. Competitor benchmark

### Into Indie Games

- Relevant coverage: four serial walkthrough pages were indexed at check time, moving from Halibut through Temple and Mall F2.
- Strengths: screenshots at almost every action, useful chronological segmentation, exact section-level solutions.
- Weaknesses: no dedicated game hub, weak jump between a search query and the precise answer, large narrative scroll before late-game material.
- Opportunity: provide a stable guide index, explicit spoiler levels, and short labels for every progression route.

### NineWiki

- Relevant coverage: one consolidated `Desktop Explorer All Puzzle Solutions` page.
- Strengths: direct password table, canonical metadata, Article/Breadcrumb schema, clear table of contents.
- Weaknesses: a four-minute all-answer page compresses complex operations and exposes spoilers immediately; no game-specific homepage or category hub.
- Opportunity: preserve a quick-answer index while linking to operation-first, context-rich solutions.

### GamesToUse

- Relevant coverage: one `Desktop Explorer Walkthrough Part 1-5 Solution` article.
- Strengths: broad current-game coverage and a chronological Part 1–5 outline.
- Weaknesses: one very long page mixes clue logic, answers, and late-game spoilers; generic site navigation does not reinforce Desktop Explorer topical authority.
- Opportunity: hub-and-spoke pages with stronger internal links and player-decision-first summaries.

### TreyexGaming

- Relevant coverage: one all-in-one puzzle guide.
- Strengths: compact answer list and broad coverage.
- Weaknesses: limited contextual explanation, generic image/schema identity, and no dedicated guide ecosystem.
- Opportunity: explain which desktop operation reveals an answer instead of publishing only password strings.

### PCUCGAME

- Relevant coverage: one Traditional Chinese 100% puzzle and achievement article.
- Strengths: hint-before-answer logic, complete late-game coverage, strong achievement awareness.
- Weaknesses: not an English competitor route and exposes many major story answers in one page.
- Opportunity: retain the progressive-disclosure concept while keeping English pages exact-intent and independently useful.

### Steam Community Guides

- English guide catalog returned no matching items during the initial current crawl.
- Steam discussions do reveal active problem language such as Puzzle 9, Puzzle 10, ticket/arcade issues, password failures, jumpscare concern, Chronolog access, and achievement questions.

### Page breadth decision

Launch with 14 core guide articles plus the homepage, guide hub, review, requirements, download, disclaimer, and legal pages. This is a small narrative puzzle game, so 30–50 English pages would create thin or duplicate intent. Expand only when GSC shows stable new query clusters.

## 6. YouTube selection

| Use | Video | Decision |
| --- | --- | --- |
| Homepage / release trust | `qfpuWJIeCXo` — Desktop Explorer Release Date Trailer, official Desktop Explorer channel, 2026-06-04 | selected, official |
| Full walkthrough and all-puzzle cross-check | `QEsz9NXCDwc` — full game, no commentary, Zhain Gaming, 2026-07-18 | selected, current full game |
| Demo comparison | `WhBthfknu3o` — full demo gameplay, Grounded Gaming, 2025-10-24 | selected only for demo scope |
| Late-game route cross-check | `ynqKCvZcDvU` — any% proof of concept, SovereignSays, 2026-07-19 | selected as community cross-check, not as a beginner guide |

Rejected or limited:

- Old demo-only videos may not establish full-game balance, chapter order, achievements, or endings.
- Generic faux-OS game videos and unrelated Windows Explorer content are excluded.
- The any% run is unsuitable for primary puzzle explanation because it optimizes speed and skips learning context.
- A selected video is supporting evidence, not article prose; articles must not narrate or transcript-spin it.

## 7. Launch route map

```text
/
/guides
/guides/beginner-spoiler-light-hints
/guides/full-walkthrough
/guides/all-puzzle-solutions-passwords
/guides/cave-puzzles-0-10
/guides/puzzle-9-altar-solution
/guides/puzzle-10-beyond-solution
/guides/temple-walkthrough
/guides/m4x1mus-password-nextrooms
/guides/mall-f1-puzzles
/guides/mall-f2-admin-unlock
/guides/admin-guppy-ending
/guides/achievements-guide
/guides/demo-vs-full-game
/guides/release-price-platforms
/system-requirements
/download
/review
/disclaimer
/privacy
/terms
/cookie
```

There is no `/codes`, `/tier-list`, or entity database route.

## 8. Data and rendering model

Create:

```text
src/data/desktop-explorer/
  types.ts
  sources.ts
  guides.ts
  localized.ts
```

Each guide stores source strategy, search queries, compact internal source notes, optional selected video metadata, explicit related routes, checked dates, body sections, and query-specific FAQ. Guide rendering provides Article and BreadcrumbList schema; the guide hub provides ItemList; the homepage provides WebSite, Organization, VideoGame, VideoObject, and FAQPage.

## 9. Homepage and navigation

- Compact two-column hero with exact H1, one-sentence positioning, primary walkthrough CTA, spoiler-light CTA, short wrapping quick links, and the official release trailer.
- First content band visible on a common desktop viewport.
- “I am stuck at…” module routing Puzzle 9, Puzzle 10, Temple, M4x1mus, Mall, and achievements.
- Compact “Start here” and latest guide panels rather than tall marketing cards.
- Homepage keyword hub links every kept high-value route.
- Desktop sticky wiki sidebar with collapsed groups, count badges, active-group auto-open, and active-page highlight.
- Mobile expandable wiki menu.
- Explicit short route labels for every long guide slug.

## 10. Visual system

- Background: deep near-black teal `#071615`
- Raised panel: `#102625`
- Desktop lavender: `#8f92df`
- Window sage: `#c4d0b8`
- Focus magenta: `#d44aa4`
- Warning amber: `#f0a23a`
- Copy: warm paper `#f4f1df`
- Muted copy: blue-sage `#a9c0bb`

Use square corners selectively, thin double borders, inset title bars, small pixel-like status markers, and monospaced labels. Maintain modern responsive spacing and accessibility; retro styling must not reduce readability.

## 11. Implementation and migration QA

1. Rename the source data, component, route, and public namespaces to `desktop-explorer`.
2. Replace all source-game identity, domains, app IDs, studio/publisher facts, content, analytics IDs, and asset references.
3. Remove the inherited PRD and source public assets.
4. Confirm there is no functional Adsterra route, component, placement, script, or `ADSTERRA_*` variable.
5. Add official Steam header/screenshots and selected local YouTube thumbnails.
6. Update README, package name, messages, website config, routes, canonical URL logic, sitemap, robots, manifests, navigation, footer, legal pages, mail identity, Wrangler project name/routes, and analytics path.
7. Clear stale Next build types after route-group migration.
8. Validate all explicit related-link labels and wrapping behavior.

## 12. Validation and launch

- `pnpm install`
- `pnpm lint`
- `pnpm exec tsc --noEmit`
- `pnpm next:build`
- `pnpm build`
- Desktop and mobile browser QA for `/`, `/guides`, one long guide, `/download`, `/sitemap.xml`, and `/robots.txt`
- Secret scan before repository publication
- Create/push GitHub repository `desktopexplorer`
- Deploy Cloudflare Worker `desktopexplorer`
- Bind apex and `www`, with `www` canonical
- Attempt Cloudflare GitHub automatic build association
- Create/reuse GA4 property and web stream
- Verify GSC Domain Property `sc-domain:desktopexplorer.wiki` by apex DNS TXT and submit `https://www.desktopexplorer.wiki/sitemap.xml`
- Register the launched site in Shipmanager with homepage and `/guides` as the two core links

