# ADR-0019: Worker CPU Budget Governance and RSC Prefetch Containment

## Context
Cloudflare Workers Paid includes 30 million CPU milliseconds per monthly billing cycle across all deployed Workers on the account, billing $0.02 per additional 1 million CPU milliseconds beyond that threshold. Live Cloudflare GraphQL telemetry (`workersInvocationsAdaptive` and `httpRequestsAdaptiveGroups`) revealed that while anonymous HTML document loads across `richardewing.io`, `exogram.ai`, and `careerwin.ai` already achieved CDN cache hits (`cf-cache-status: HIT` at 0.00 ms Worker CPU), the account still consumed approximately 10 million CPU milliseconds per day ($0.20/day overage pace).

Forensic audit of 24-hour zone cache misses isolated four distinct causes of unnecessary Next.js server compute:
1. Global navigation shells and footers mounted 35 to 75 `<Link>` components without `prefetch={false}` across 1,273 routes on `richardewing.io` (and sibling properties). Whenever a visitor or Googlebot's headless Chromium renderer loaded any page, Next.js fired dozens of background `?_rsc=<router_state_hash>` prefetch requests whose source-page-dependent hashes missed the CDN cache and booted the 44 MB OpenNext React Server Components bundle (550 to 850 ms CPU per prefetch).
2. `middleware.ts` on `richardewing.io` executed Clerk authentication middleware (`clerkHandler`) on every uncached anonymous public route, adding auth header/JWT overhead even when zero Clerk session cookies or handshake parameters existed.
3. High-frequency Cloudflare `early hints` subrequests (1,551/day), bulk training/SEO spiders (`Sogou` at 573/day, `GPTBot`, `Bytespider`, `SemrushBot`, `AhrefsBot`), and `.php`/`.env` vulnerability scans were handled inside Next.js `middleware.ts` after OpenNext initialization rather than exiting at the raw Cloudflare Worker entrypoint.
4. Executive reporting previously relied on static billing projections rather than computing live billing-cycle CPU milliseconds directly from `workersInvocationsAdaptive`.

## Decision
1. **Global Shell RSC Prefetch Containment**: Add `prefetch={false}` to global navigation dropdowns, header links, and multi-column footer `<Link>` components in `components/site-shell.tsx`, `components/SiteNav.tsx`, and `components/SiteFooter.tsx` (as well as sibling marketing shells on `exogram.ai` and `careerwin.ai`). Click navigation remains client-routed without triggering background `?_rsc=` prefetch storms on page load.
2. **Conditional Clerk Execution in Middleware**: Gate `clerkHandler(req, event)` in `middleware.ts` behind `isAuthOrDynamicPath(pathname) || isPrivateUncachedPage(pathname) || hasClerkAuthSignal(req)` so anonymous public traffic skips Clerk middleware overhead while authenticated sessions, Clerk handshakes, `/vault`, `/admin`, and `/api/*` preserve full Clerk behavior.
3. **Pre-OpenNext Worker Edge Shield**: Introduce `scripts/patch-worker.mjs` wired into `build:worker` in `package.json` to short-circuit `early hints` (`204`), exact apex root redirects (`https://richardewing.io/ -> https://www.richardewing.io/` `301`), exploit probes (`404`), and AI training/bulk SEO scrapers (`403` with `no-store`) in under 0.1 ms before OpenNext initializes, while explicitly allowing search and AI citation bots (`Googlebot`, `Bingbot`, `OAI-SearchBot`, `ChatGPT-User`, `Claude-SearchBot`, `PerplexityBot`, `Applebot`) and crawler directive files (`/robots.txt`, `/llms.txt`, `/llms-full.txt`, `/sitemap.xml`).
4. **Live Cycle CPU Financial Telemetry**: Compute cumulative cycle CPU milliseconds, daily CPU pace against the 1.0 million ms/day budget line, and accrued overage spend dynamically from `workersInvocationsAdaptive` anchored to the monthly billing cycle start date (24th of each month).

## Deciders
@richardewing, Steve Jobs, Jensen Huang, Keith Rabois, Aravind Srinivas, Dan Guido, Code Architect, QA Auditor

## Status
Accepted

## Consequences
Positive:
- Eliminates 35+ background `?_rsc=` server renders per page view and Googlebot crawl across 1,273 routes without altering visual layout, copy, or SEO crawlability.
- Removes Clerk middleware CPU overhead from 100% of anonymous public cache misses while keeping `/vault`, `/admin`, `/api/*`, and signed-in sessions intact.
- Rejects `early hints`, `.php`/`.env` exploit scans, and bulk training/SEO spiders (`Sogou`, `GPTBot`, `SemrushBot`) in under 0.1 ms before importing the 44 MB OpenNext server bundle, while protecting `no-store` cache headers so CDN caches never poison human URLs with `403` responses.
- Replaces static billing text in executive audits with exact real-time CPU millisecond accounting.

Negative/Considerations:
- Disabling automatic viewport prefetching on global shell links means clicking a global nav or footer link fetches the target route on click rather than preloading it on scroll; since anonymous HTML and routes are edge-cached, click navigation remains fast while saving substantial Worker CPU.
- Any future Server Component added outside `/vault`, `/admin`, or `/api/*` that calls Clerk's server-side `auth()` or `currentUser()` must have its route prefix registered in `isAuthOrDynamicPath(pathname)` in `middleware.ts`.
