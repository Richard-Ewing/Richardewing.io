# ADR-0024: Scoped Google AdSense and Direct B2B Sponsorship Engine

## Context

Public informational research across `richardewing.io` spans 8 technical directories totaling 624 published pages (`/glossary` 136 pages, `/blog` 134 pages, `/concepts` 133 pages, `/answers` 92 pages, `/compare` 48 pages excluding advisory comparisons, `/articles` 46 pages, `/framework` 19 pages, and `/failures` 16 pages). While Cloudflare `requestSource = "eyeball"` edge logs record 15,352 monthly HTML responses across those 8 directories, empirical cross-checking against Google Search Console (`16,522` impressions, `78` clicks, `83.2%` desktop share, average position `8.4`) and live client-side AdSense JS beacons confirmed that server-side `eyeball` counts include unflagged automated clients and crawlers. Public sponsorship surfaces must therefore report strictly hard-verified inventory, search ranking, desktop share, and AI citation metrics (`65.4%` explicit LLM citation benchmark) with inquiry-based Founding Partner pricing (`By Inquiry`) rather than unverified server load counts.

Monetizing those 624 informational pages without degrading conversion on high-ticket advisory and diagnostic pages requires strict architectural isolation and edge compliance:
1. Global ad scripts or Google Auto Ads inside `app/layout.tsx` would inject third-party ad slots onto executive landing, advisory, pricing, diagnostic, and checkout pages, hurting CFO and CEO buyer conversion and inflating page weight.
2. Live audit of Cloudflare Custom WAF Rule #3 (`Smart Bot Fight (Citations Yes Scrapers No)`) in zone `26b036cd0321b744617c0cc041c0f225` (ruleset `840ef76cd920491fb66d79f4ba2e3c76`), `middleware.ts`, `scripts/patch-worker.mjs`, and `app/robots.ts` revealed that Google's ad crawlers (`Mediapartners-Google` and `AdsBot-Google`) and `/ads.txt` lacked explicit exemptions and could be challenged on cloud ASNs.
3. `app/components/CookieConsent.tsx` offered only an accept confirmation without an Essential Only opt-out state, and `app/legal/content.tsx` Section 9 lacked Google AdSense advertising cookie disclosures and Google Ad Settings opt-out links.
4. Direct B2B software sponsors (FinOps, AI observability, MCP auth, engineering intelligence vendors) yield materially higher RPM than programmatic auctions when given a self-serve intake path and deterministic ad slot override.

## Decision

Implement a scoped, route-guarded monetization and direct sponsorship subsystem confined exclusively to the 8 public technical research sections (624 pages total) with four coordinated layers:

1. **Pure Routing Allowlist & Sponsorship Registry (`lib/monetization/sponsorship-config.ts`)**:
   - Define `ALLOWED_EDITORIAL_PREFIXES` (`['/glossary', '/blog', '/concepts', '/articles', '/compare', '/answers', '/framework', '/failures']`) and `isAdAllowedPathname(rawPathname)` strictly allowing exact index paths and nested article paths across those public research directories while explicitly rejecting `/compare/advisory-vs-*` consulting comparisons, normalizing trailing slashes, and excluding query parameters.
   - Store verified published inventory metadata (`PILLAR_TELEMETRY`: Glossary & Role Answers = 228 pages; Essays, Articles & Comparisons = 228 pages; Concepts, Frameworks & Failures = 168 pages), inquiry-based Founding Partner packages (`SPONSORSHIP_PACKAGES` with `priceDisplay = 'By Inquiry'` across 228, 396, or all 624 pages), and `ACTIVE_DIRECT_SPONSORS` for zero-auction direct house takeovers.
   - Export verified public publisher and manual slot constants (`DEFAULT_ADSENSE_PUBLISHER_ID = 'ca-pub-9421469136745918'`, `DEFAULT_ADSENSE_SLOT_IDS` with `glossary: '7790857425'`, `concepts: '1340340002'`, `blog: '1340340002'`), `resolvePublisherId`, `resolveAdsTxtSellerId`, `normalizePublisherId`, `toAdsTxtSellerId`, and `getAdSenseSlotId` cleanly so `/ads.txt`, ownership meta, and client chunks work immediately while allowing environment overrides (`NEXT_PUBLIC_ADSENSE_CLIENT_ID`, `NEXT_PUBLIC_ADSENSE_SLOT_GLOSSARY`, `NEXT_PUBLIC_ADSENSE_SLOT_BLOG`, `NEXT_PUBLIC_ADSENSE_SLOT_CONCEPTS`).

2. **3-Tier Fail-Closed Client Ad Component (`components/monetization/EditorialAdSlot.tsx`)**:
   - Enforce runtime pathname verification via `usePathname()` and `isAdAllowedPathname` as a fail-closed second guard before rendering any optional `wrapperClassName` container.
   - Render in strict priority order: Tier 1 active direct sponsor card (zero external script calls), Tier 2 lazy intersection-observed Google AdSense unit (`<ins className="adsbygoogle">`) serving non-personalized contextual ads (`requestNonPersonalizedAds = 1`) by default when consent is `unset`, personalized ads (`requestNonPersonalizedAds = 0`) after `Accept All`, and zero external ad scripts when `Essential Only` is selected, guarded by `pushedRouteKeyRef` so `MutationObserver` stays attached across renders with a 6.5-second (6500ms) cold-start auction timeout fallback, and Tier 3 self-serve Sponsor This Research Directory card linking to `/partnerships?pillar=<pillar>#sponsor` with `!text-white` button contrast protection.
   - Mount `<EditorialAdSlot />` on Glossary, Blog, and Canonical Concepts pages plus pure Server Component layout wrappers (`app/compare/layout.tsx`, `app/articles/layout.tsx`, `app/answers/layout.tsx`, `app/framework/layout.tsx`, and `app/failures/layout.tsx`), strictly additive and preserving all prose, metadata, schemas, and canonical structure on protected routes. Never add global ad scripts to `app/layout.tsx`.

3. **4-Layer Edge & Privacy Clearance (`app/ads.txt/route.ts`, `app/robots.ts`, `middleware.ts`, `scripts/patch-worker.mjs`, Cloudflare WAF Rule #3, `app/components/CookieConsent.tsx`, `app/legal/content.tsx`, `app/layout.tsx`)**:
   - Serve dynamic IAB `ads.txt` v1.1 (`text/plain`) from `app/ads.txt/route.ts` emitting `google.com, pub-9421469136745918, DIRECT, f08c47fec0942fa0`.
   - Emit passive site-ownership meta tag `<meta name="google-adsense-account" content="ca-pub-9421469136745918">` via `metadata.other` in `app/layout.tsx` without loading any ad script or Auto Ads globally.
   - Allow `Mediapartners-Google`, `AdsBot-Google`, `AdsBot-Google-Mobile`, and `/ads.txt` across `app/robots.ts`, `middleware.ts`, `scripts/patch-worker.mjs` (both `__rwIsDirectiveFile` and `__rwCitationBots`), and live Cloudflare WAF Rule #3 while preserving WAF Rules #1 (`Block Scrapers`) and #2 (`AI Crawl Control`).
   - Upgrade `app/components/CookieConsent.tsx` to a 2-button bar (`Essential Only` vs `Accept All`) broadcasting `rw-cookie-consent-change`, and add Google AdSense cookie disclosures and opt-out links (`https://adssettings.google.com`, `https://www.aboutads.info/choices/`) to `app/legal/content.tsx`.

4. **Self-Serve Sponsorship Intake & Deal-Desk Routing (`components/partnerships/SponsorshipMediaKit.tsx`, `app/partnerships/page.tsx`, `components/schedule/schedule-diagnostic-banner.tsx`, `components/schedule/ScheduleBookingWorkspace.tsx`, `app/schedule/page.tsx`)**:
   - Mount `<SponsorshipMediaKit />` under `#sponsor` on `app/partnerships/page.tsx`, submitting real buyer requests to `/api/lead-capture` (`source: 'sponsorship_media_kit'`) and linking `/schedule?source=sponsorship&type=15min` where `components/schedule/schedule-diagnostic-banner.tsx` displays package context and `components/schedule/ScheduleBookingWorkspace.tsx` provides zero-dollar `15min` (`richard-ewing-2cevwb/secret`) and `30min` (`richard-ewing-2cevwb/30min`) Cal.com booking tabs alongside paid advisory sessions.

## Deciders

@richardewing, Steve Jobs, Paul Graham, Aravind Srinivas, Keith Rabois, Dan Guido, Brad Smith, Karri Saarinen, Code Architect, QA Auditor

## Status

Accepted

## Consequences

Positive:
- Confines third-party ad network scripts away from `/` and all executive advisory, pricing, tool, vault, and checkout pages, protecting core conversion velocity and CPU budget on non-editorial routes.
- Eliminates cold-start ad verification failures by synchronizing `/ads.txt` and `Mediapartners-Google` / `AdsBot-Google` exemptions across robots rules, Next.js middleware, OpenNext worker patching, and Cloudflare Custom WAF Rule #3 before programmatic activation.
- Guarantees continuous monetization readiness even when AdSense publisher configuration is pending, users select `Essential Only`, or blockers suppress third-party auctions by gracefully falling back to Tier 1 direct sponsors or Tier 3 direct sponsorship intake on `app/partnerships/page.tsx`.
- Establishes full GDPR/CCPA consent signaling (`cookie_consent_mode`) and transparent Privacy Policy disclosures in `app/legal/content.tsx` prior to loading any advertising third-party script.

Negative/Considerations:
- Programmatic fill starts with `glossary` wired to `7790857425` and `concepts` + `blog` wired to `1340340002` (with `NEXT_PUBLIC_ADSENSE_SLOT_BLOG` environment override supported if a dedicated `rw-blog` slot ID is supplied later). Newly created AdSense units typically take 15 to 60 minutes to serve initial impressions, and any `unfilled` auction response or `Essential Only` consent falls back cleanly to Tier 3 house sponsorship cards.
- Because `EditorialAdSlot` dynamically injects `pagead2.googlesyndication.com/pagead/js/adsbygoogle.js` only on whitelisted editorial routes after viewport intersection (serving non-personalized contextual ads via `requestNonPersonalizedAds = 1` when consent is `unset`, personalized ads via `requestNonPersonalizedAds = 0` after `Accept All`, and suppressing third-party ad requests completely when `Essential Only` is selected), first-impression fill timing depends on intersection trigger.
- Any future update to OpenNext worker generation or Cloudflare Custom WAF rulesets must preserve `__rwIsDirectiveFile` (`/ads.txt`) and `Mediapartners-Google` / `AdsBot-Google` allowances so ad crawler verification does not regress.
