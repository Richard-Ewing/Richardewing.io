# ADR-0029: Zero-Boot Static Assets Edge HTML, Directives Serving, and Human-Gated Buy Shield

## Context
Cloudflare Workers telemetry across `richardewing.io` exposed three remaining sources of avoidable Worker isolate cold-boot CPU and noisy traffic overhead:
1. Cold POP `caches.default` misses on prerendered editorial HTML routes and static crawler directive files (`/robots.txt`, `/llms.txt`, `/llms-full.txt`, `/sitemap.xml`, `/feed.xml`) still fell through to OpenNext (`middleware/handler.mjs` and the server `handler.mjs`), incurring multi-hundred-millisecond V8 parse and execution CPU even though Next.js had already prerendered exact static files at build time.
2. Unauthenticated human clicks and non-bot automated fetches hitting `/api/buy/*` routes booted Next.js and Clerk middleware only to return a 307 redirect to a static Stripe Payment Link, while crawlable `<a href="/api/buy/...">` anchors in commercial components invited prefetchers, scanners, and unconfirmed link crawls to trigger checkout redirects without explicit human confirmation. Additionally, Chrome Speculation Rules sending `Sec-Purpose: prefetch;prerender` were not short-circuited before routing.
3. On `/schedule`, selecting the 15-minute complimentary intro and partner call tab rendered Cal.com's default event title (`Secret meeting`) and exposed an external `/secret` URL button instead of keeping the executive framing clean inside the local workspace.

## Decision
1. **Zero-Boot `env.ASSETS` Static HTML & Directive Serving (`scripts/patch-worker.mjs`)**:
   - At build time inside `scripts/patch-worker.mjs`, walk `.next/server/app` for prerendered `*.html` files (stripping Next.js `(group)` segments, skipping `_not-found.html`, `api/`, non-200 `.meta` or `NEXT_REDIRECT` shells, and private/auth exclusions `/vault`, `/vault/assets`, `/vault/team`, `/vault/join`, `/admin`, `/scorecard`, `/sign-in`, `/sign-up`, `/sso-callback`, `/ai-integration/advisor`, `/ai-integration/system/download`, `/tools/board-room`, `/tools/dashboard`, `/tools/verify`, `/dashboard`, `/workspace`, `/wizard`, `/toolkit-success`) and copy them to `.open-next/assets/cdn-cgi/_edge_html/`.
   - Extract prerendered directive `.body` files (`robots.txt.body`, `llms.txt.body`, `llms-full.txt.body`, `sitemap.xml.body`, `feed.xml.body`, and `manifest.webmanifest.body` / `site.webmanifest.body` when present) into `.open-next/assets/cdn-cgi/_edge_directives/`.
   - At runtime inside `.open-next/worker.js`, short-circuit `Sec-Purpose: prefetch;prerender` with `204` (`no-store`), block direct external `/cdn-cgi/_edge_` requests with `404` (`private, no-store`), serve directive files on `caches.default` miss via `env.ASSETS.fetch` (`X-RW-Edge-Cache: STATIC-DIRECTIVE`) with `ctx.waitUntil` POP cache backfill, and serve prerendered static HTML on `caches.default` miss via `env.ASSETS.fetch` (`X-RW-Edge-Cache: STATIC-ASSETS-HIT`) with `Content-Signal: ai-train=no, search=yes, ai-input=yes`, security headers (`X-Frame-Options: SAMEORIGIN`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`), `Vary` parity, and `ctx.waitUntil` 30-day `.woff2` POP backfill. Any non-200 `env.ASSETS` lookup falls through cleanly to OpenNext.
2. **Zero-Boot `/api/buy/*` Human Gate & `BuyRedirectButton` (`scripts/patch-worker.mjs`, `app/lib/buy-shield.ts`, `app/components/client/BuyRedirectButton.tsx`)**:
   - Compile `app/lib/products.ts` `PRODUCTS` at build time into `.open-next/cloudflare/edge-products-manifest.js` (`export const EDGE_PRODUCT_LINKS`) with a hard assertion requiring `>= 30` product links and all flagship SKUs (`premium_guide_29`, `premium_guide_79`, `gut_check`, `insolvency_diagnostic`, `full_audit`, `partner_licensed`, `enterprise_curriculum_license`).
   - In `scripts/patch-worker.mjs`, preserve `STUB-200` for prefetch/RSC/bot traffic on `/api/buy/*`. For anonymous `GET`/`HEAD` requests without Clerk cookies (`__session`, `__clerk`), return `GATE-200` (warm `#FAF9F6` confirmation page with XSS-safe `?source=...&u=1` continue link and zero auto-redirect JS/meta) unless `u=1` or `Sec-Fetch-User: ?1` is present, in which case redirect `307` (`X-RW-Buy-Shield: EDGE-307`) directly to the Stripe Payment Link with `--`-delimited `client_reference_id`. Missing products redirect `307` (`no-store`) to `/vault/curriculum/tracks` (enterprise) or `/checkout-pending`. Authenticated requests pass through to Next.js.
   - Mirror the `GATE-200` vs `307` guard inside `app/api/buy/[productId]/route.ts` and `app/api/buy/enterprise/[productId]/route.ts` via shared helper `app/lib/buy-shield.ts` for signed-in and local flows.
   - Create `app/components/client/BuyRedirectButton.tsx` (`'use client'`, appends `u=1` on `/api/buy/` clicks and opens `_blank` with `noopener,noreferrer`) and convert crawlable `/api/buy/*` anchors in `app/components/ScorecardCheckoutDrawer.tsx`, `app/components/AdvisoryCTA.tsx`, `app/components/DiagnosticCTA.tsx`, `app/components/GlossaryToolCTA.tsx`, `app/components/VaultUpsell.tsx`, `app/services/page.tsx`, `app/pricing-sprints/page.tsx`, `app/partnerships/page.tsx`, and `app/schedule/page.tsx`.
3. **Cal.com Secret Meeting UI Hide (`app/components/client/CalEmbed.tsx`, `components/schedule/ScheduleBookingWorkspace.tsx`)**:
   - Add `hideEventTypeDetails?: boolean` (default `false`) to `app/components/client/CalEmbed.tsx` and forward it to both `inline` `config` and `ui`.
   - Update `intro15` in `components/schedule/ScheduleBookingWorkspace.tsx` to `'15-Min Intro & Partner Call (Free)'`, render the `"15-Min Intro & Partner Call · Complimentary · Google Meet"` executive pill above `<CalEmbed />`, pass `hideEventTypeDetails={active.id === 'intro15'}`, and hide the external `Open directly on Cal.com` link whenever `active.calLink.endsWith('/secret')` while keeping `Copy Direct Link` visible.

## Deciders
- @richardewing (Founder & Product Owner)
- Code Architect, Security Auditor, QA Auditor (MOD v4.0 Operational Council)

## Status
Accepted

## Consequences
Positive:
- Eliminates OpenNext isolate cold boots on POP cache misses across 1,280+ prerendered public HTML pages, crawler directives, and unauthenticated `/api/buy/*` checkout redirects while keeping total Workers Static Assets well under the 18,000 ceiling.
- Stops unconfirmed non-human GET traffic from generating Stripe redirects or leaking checkout sessions without explicit click verification (`u=1` or `Sec-Fetch-User: ?1`) while preserving Clerk session attribution for signed-in buyers.
- Replaces crawlable `<a href="/api/buy/...">` anchors on core conversion surfaces with `<BuyRedirectButton />` client triggers so crawlers do not follow checkout endpoints directly.
- Prevents Cal.com's internal `/secret` slug and `Secret meeting` heading from surfacing to executive visitors on `/schedule`.

Negative/Considerations:
- Any route relying on dynamic request headers or Clerk state MUST remain excluded from `.open-next/assets/cdn-cgi/_edge_html/` or carry Clerk cookies so `env.ASSETS` never serves stale anonymous HTML to authenticated users.
- Direct external bookmarks or copied URLs to `/api/buy/*` without `u=1` or `Sec-Fetch-User: ?1` display a one-click `#FAF9F6` confirmation gate (`GATE-200`) before forwarding to Stripe.
