# ADR-0028: Versioned 30-Day POP Cache TTL, Checkout Bot Shield, and Commercial Funnel Alignment

## Context
Cloudflare Worker telemetry, crawl log audits, and commercial funnel reviews across `richardewing.io` surfaced four operational and revenue leaks:
1. Non-OG HTML and RSC responses stored inside the Worker POP `caches.default` layer expired after 24 hours (`max-age=86400`), triggering unnecessary cold OpenNext origin invocations across unchanged static routes even though keys are already versioned by `env.CF_VERSION_METADATA.id`. Meanwhile, automated vulnerability scanners probing `.sqlite`, `.sqlite3`, `.db`, `/.config`, `/.next/`, `msmtprc`, `credentials.json`, and `docker-compose`, plus aggressive crawl bots (`AwarioBot`, `Barkrowler`, `DataForSeoBot`, `BLEXBot`, `SerpstatBot`), bypassed the sub-millisecond edge shield.
2. AI search crawlers, training bots, social unfurlers, SEO scrapers, and headless browsers following outbound checkout links (`buy.stripe.com`) through `app/api/buy/[productId]/route.ts` and `app/api/buy/enterprise/[productId]/route.ts` triggered unnecessary 307 redirects and unpaid Stripe Checkout Sessions, while guest purchases lacked `source` attribution on `client_reference_id`.
3. `app/components/ScorecardCheckoutDrawer.tsx`, `app/schedule/page.tsx`, and `app/pricing-sprints/page.tsx` either pointed directly at raw `buy.stripe.com` URLs or routed paid sprint buyers to generic `/contact#subject=...` forms rather than contextual `/schedule?source=...` intake and instant `/api/buy/*` checkout endpoints.
4. High-impression search queries on `/glossary/calculating-roai`, `/glossary/engineering-levels`, and `/glossary/pillars/[slug]` needed tighter search-intent title/description alignment, 30-to-45-word HWS-AEO v3.0 direct answers, and an inline `<ScorecardCheckoutDrawer />` conversion path.

## Decision
1. **Harden Pre-OpenNext Edge Shield & Extend Versioned POP Cache TTL (`scripts/patch-worker.mjs`)**:
   - Extend the pre-OpenNext 404 scanner filter to short-circuit `.sqlite`, `.sqlite3`, `.db`, `/.config`, `/.next/` (preserving `/_next/` static assets), `msmtprc`, `credentials.json`, and `docker-compose` probes in under 0.05ms.
   - Add `awariobot`, `barkrowler`, `dataforseobot`, `blexbot`, and `serpstatbot` to `__rwBlockedBots` for fast 403 rejection.
   - Raise the non-OG POP `caches.default` storage TTL on `__rwStoreHeaders` from 24 hours (`86400`) to 30 days (`2592000`), isolated by `env.CF_VERSION_METADATA.id`, while keeping `__rwMissHeaders` and `Cloudflare-CDN-Cache-Control: no-store` unchanged to preserve RSC `Vary` safety.
2. **Shield Stripe Checkout Routes & Capture Guest Attribution (`app/api/buy/[productId]/route.ts`, `app/api/buy/enterprise/[productId]/route.ts`)**:
   - Expand `SEARCH_CRAWLER_RE` to cover AI crawlers, social preview bots, SEO scrapers, and headless automation agents so they receive a `200 OK` `noindex, follow` HTML shell instead of spawning unpaid Stripe sessions.
   - Sanitize `?source=` (`[a-zA-Z0-9_-]`, max 40 chars, fallback `direct`) and attach `guest::<source>::<productId>` (or `guest::<source>::enterprise_<productId>`) to `client_reference_id` when no Clerk user session is present.
3. **Unify Commercial Checkout & Cal.com Sprint Routing**:
   - Route `app/components/ScorecardCheckoutDrawer.tsx` tier buttons and `app/schedule/page.tsx` $79 operating-kit button through `/api/buy/<productId>?source=...` with `rel="noopener noreferrer nofollow"`.
   - Update `app/pricing-sprints/page.tsx` CTAs ($450, $2,500, $7,500, and $10,000 tiers) to `/schedule?source=pricing-sprints-*`, add secondary `/api/buy/*?source=pricing-sprints-*` instant Stripe links on the $29/$450/$2,500/$7,500 cards, mount `<ScorecardCheckoutDrawer source="pricing-sprints" />`, and register matching context cards (plus `glossary-pillar` fallback) in `components/schedule/schedule-diagnostic-banner.tsx`.
4. **Calibrate Glossary ROAI, Levels & Pillar Hubs**:
   - Update `GLOSSARY_SEO_OVERRIDES` for `calculating-roai` and `engineering-levels` in `app/glossary/[slug]/page.tsx`.
   - Add `PILLAR_SEO_COPY` (42-char max `baseTitle`, 135-to-155-char active-voice `metaDesc`, and 30-to-45-word HWS-AEO v3.0 direct answers) and mount `<ScorecardCheckoutDrawer source={`glossary-pillar-${slug}`} />` above `<DiagnosticBridge />` in `app/glossary/pillars/[slug]/page.tsx`.

## Deciders
- @richardewing (Founder & Product Owner)
- Code Architect, SEO Architect, Lived Experience Writer, QA Auditor (MOD v4.0 Operational Council)

## Status
Accepted

## Consequences
Positive:
- Extends versioned POP HTML/RSC cache lifetime to 30 days across all Cloudflare edge locations, lowering repeat origin Worker CPU consumption while invalidating cleanly on every new Worker version ID (`scripts/warm-tier1-edge-cache.mjs`).
- Eliminates crawler-induced unpaid Stripe Checkout Sessions and blocks `.sqlite` / `/.next/` / `AwarioBot` scrape traffic before OpenNext initializes.
- Captures end-to-end funnel attribution from pricing cards, scorecard drawers, and glossary pillars into both Cal.com (`?source=`) and Stripe (`client_reference_id`).
- Replaces generic pillar boilerplate with direct HWS-AEO answer summaries and sharp search metadata on high-impression glossary hubs.

Negative/Considerations:
- Any route relying solely on time-based cache expiration without a new Worker deployment will remain in POP `caches.default` for up to 30 days until the next `wrangler deploy` rotates `CF_VERSION_METADATA.id`.
- `app/api/webhooks/stripe/route.ts` continues ignoring non-Clerk `guest::...` `client_reference_id` values for Clerk metadata provisioning while preserving full source attribution inside Stripe session telemetry.
