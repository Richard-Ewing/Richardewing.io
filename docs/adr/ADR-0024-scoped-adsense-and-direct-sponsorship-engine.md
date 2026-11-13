# ADR-0024: Scoped Google AdSense and Direct B2B Sponsorship Engine

## Context

Over the 31-day telemetry window from 2026-10-14 to 2026-11-13, Cloudflare Edge analytics recorded 108,120 total raw pageviews across 1,247,013 requests on `richardewing.io`, including 36,390 verified human browser HTML reads across the top 1,000 routes. Three editorial and reference directories accounted for 13,690 verified monthly human reads across 375 deep technical pages: Glossary (6,480 views across 122 pages), Blog Essays (3,620 views across 131 pages), and Canonical Concepts (3,590 views across 122 pages).

Monetizing those 375 informational pages without degrading conversion on high-ticket advisory and diagnostic pages requires strict architectural isolation and edge compliance:
1. Global ad scripts or Google Auto Ads inside `app/layout.tsx` would inject third-party ad slots onto executive landing, advisory, pricing, diagnostic, and checkout pages, hurting CFO and CEO buyer conversion and inflating page weight.
2. Live audit of Cloudflare Custom WAF Rule #3 (`Smart Bot Fight (Citations Yes Scrapers No)`) in zone `26b036cd0321b744617c0cc041c0f225` (ruleset `840ef76cd920491fb66d79f4ba2e3c76`), `middleware.ts`, `scripts/patch-worker.mjs`, and `app/robots.ts` revealed that Google's ad crawlers (`Mediapartners-Google` and `AdsBot-Google`) and `/ads.txt` lacked explicit exemptions and could be challenged on cloud ASNs.
3. `app/components/CookieConsent.tsx` offered only an accept confirmation without an Essential Only opt-out state, and `app/legal/content.tsx` Section 9 lacked Google AdSense advertising cookie disclosures and Google Ad Settings opt-out links.
4. Direct B2B software sponsors (FinOps, AI observability, engineering intelligence vendors) yield materially higher RPM than programmatic auctions when given a self-serve intake path and deterministic ad slot override.

## Decision

Implement a scoped, route-guarded monetization and direct sponsorship subsystem confined exclusively to the three highest-traffic editorial directories (Glossary, Blog, and Canonical Concepts) with four coordinated layers:

1. **Pure Routing Allowlist & Sponsorship Registry (`lib/monetization/sponsorship-config.ts`)**:
   - Define `isAdAllowedPathname(rawPathname)` strictly allowing exact index paths and nested article paths under Glossary, Blog, and Canonical Concepts while normalizing trailing slashes and excluding query parameters.
   - Store verified pillar traffic figures (`PILLAR_TELEMETRY`), fixed monthly packages (`SPONSORSHIP_PACKAGES`: Glossary Pillar Exclusive at \$1,500/mo, Essays & Canonical Concepts at \$1,500/mo, Category Exclusive Bundle at \$2,500/mo), and `ACTIVE_DIRECT_SPONSORS` for zero-auction direct house takeovers.
   - Normalize publisher IDs (`normalizePublisherId`, `toAdsTxtSellerId`) and resolve environment slot IDs (`getAdSenseSlotId`) without crashing when `NEXT_PUBLIC_ADSENSE_CLIENT_ID` is unset.

2. **3-Tier Fail-Closed Client Ad Component (`components/monetization/EditorialAdSlot.tsx`)**:
   - Enforce runtime pathname verification via `usePathname()` and `isAdAllowedPathname` as a fail-closed second guard.
   - Render in strict priority order: Tier 1 active direct sponsor card (zero external script calls), Tier 2 lazy intersection-observed Google AdSense unit (`<ins className="adsbygoogle">`) loaded dynamically ONLY after explicit `all` cookie consent and public `NEXT_PUBLIC_ADSENSE_CLIENT_ID` configuration with a 2.5-second `MutationObserver` and height fallback, and Tier 3 self-serve Sponsor This Research Directory card linking to `/partnerships?pillar=<pillar>#sponsor`.
   - Mount `<EditorialAdSlot />` exclusively in `app/glossary/page.tsx`, `app/glossary/pillars/[slug]/page.tsx`, `app/glossary/[slug]/page.tsx`, `app/blog/page.tsx`, `app/blog/[slug]/page.tsx`, `app/concepts/page.tsx`, and `app/concepts/[slug]/page.tsx`, strictly additive and preserving all prose, metadata, schemas, and canonical structure on protected glossary routes. Never add global ad scripts to `app/layout.tsx`.

3. **4-Layer Edge & Privacy Clearance (`app/ads.txt/route.ts`, `app/robots.ts`, `middleware.ts`, `scripts/patch-worker.mjs`, Cloudflare WAF Rule #3, `app/components/CookieConsent.tsx`, `app/legal/content.tsx`)**:
   - Serve dynamic IAB `ads.txt` v1.1 (`text/plain`) from `app/ads.txt/route.ts`.
   - Allow `Mediapartners-Google`, `AdsBot-Google`, `AdsBot-Google-Mobile`, and `/ads.txt` across `app/robots.ts`, `middleware.ts`, `scripts/patch-worker.mjs` (both `__rwIsDirectiveFile` and `__rwCitationBots`), and live Cloudflare WAF Rule #3 while preserving WAF Rules #1 (`Block Scrapers`) and #2 (`AI Crawl Control`).
   - Upgrade `app/components/CookieConsent.tsx` to a 2-button bar (`Essential Only` vs `Accept All`) broadcasting `rw-cookie-consent-change`, and add Google AdSense cookie disclosures and opt-out links (`https://adssettings.google.com`, `https://www.aboutads.info/choices/`) to `app/legal/content.tsx`.

4. **Self-Serve Sponsorship Intake & Deal-Desk Routing (`components/partnerships/SponsorshipMediaKit.tsx`, `app/partnerships/page.tsx`, `components/schedule/schedule-diagnostic-banner.tsx`)**:
   - Mount `<SponsorshipMediaKit />` under `#sponsor` on `app/partnerships/page.tsx`, submitting real buyer requests to `/api/lead-capture` (`source: 'sponsorship_media_kit'`) and linking `/schedule?source=sponsorship` where `components/schedule/schedule-diagnostic-banner.tsx` displays package context.

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
- Activation of live Google AdSense auctions still requires the human publisher to complete personal Google login, W-9 tax submission, identity verification, and bank payout setup inside AdSense, then set `NEXT_PUBLIC_ADSENSE_CLIENT_ID` (and optional per-pillar slot IDs) and keep Google Auto Ads switched OFF in the AdSense console.
- Because `EditorialAdSlot` dynamically injects `pagead2.googlesyndication.com/pagead/js/adsbygoogle.js` only on whitelisted editorial routes after `Accept All` consent and viewport intersection, first-impression fill timing depends on intersection trigger plus consent state.
- Any future update to OpenNext worker generation or Cloudflare Custom WAF rulesets must preserve `__rwIsDirectiveFile` (`/ads.txt`) and `Mediapartners-Google` / `AdsBot-Google` allowances so ad crawler verification does not regress.
