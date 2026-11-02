# ADR-0021: Standalone Zero-Gate Pay-to-Reveal Products and Sealed-Envelope Checkout

## Context
Historically, diagnostic calculators under `app/tools/` operated either as free ungated calculators or email-gated lead magnets routing exclusively into high-ticket advisory calls (`$450` to `$15,000`). While effective for executive consulting deal flow, that binary structure left two major commercial and architectural gaps:
1. High-intent technical founders, CTOs, Engineering Managers, CFOs, Controllers, COOs, and Customer Support Managers arriving from organic search and AI answer engines had no frictionless, low-ticket (`$29` to `$79`) self-serve software product they could run and purchase immediately without booking a calendar call or creating an account first.
2. Client-side blur gates (`ToolGate`) are appropriate for low-stakes email capture, but a paid software reveal (`$29` to `$79`) cannot ship hidden answers inside browser network JSON where anyone inspecting DevTools (`F12`) can read the locked output without paying. At the same time, paid reveals on Cloudflare Workers (`@opennextjs/cloudflare`) must survive cross-domain Stripe Checkout redirects even if optional persistence layers are cold or not yet migrated.

## Decision
We introduce two standalone zero-gate Pay-to-Reveal software products on `richardewing.io`, backed by an unbypassable Web Crypto `AES-256-GCM` server-sealed envelope architecture and fail-closed Stripe Checkout verification:

1. **Product #2: Vibe-Coded App & AI Agent Security Scanner** (`app/tools/vibe-security-scanner/page.tsx`, `app/tools/supabase-rls-checker/page.tsx`, `components/tools/VibeSecurityScannerClient.tsx`, and `lib/pay-to-reveal/vibe-security-engine.ts`):
   - Clean-room adaptation of multi-phase taint-path security auditing (`entrypoint -> propagation -> sink`).
   - Visitors scan a live HTTPS application URL (SSRF-hardened), a public GitHub repository, or pasted `.mcp.json`, `package.json`, API route, or SQL schema code with zero upfront email gate.
   - **Free 25% Reveal**: Overall Security Clearance Score (`0-100`), estimated monthly API and breach dollar exposure, Finding #1 in complete `entrypoint -> propagation -> sink` trace detail, and redacted stubs (`severity` and `title` only) for Findings `#2` through `#N`.
   - **Paid Reveal (`$29` Single Scan Pass / `$49` Founder & CTO Clearance Pack)**: Opens every remaining vulnerability trace, SQL/TypeScript remediation patches, 1-click Cursor and Claude Code fix prompts, HMAC-signed re-scan tokens, a downloadable `jspdf` Signed Security Clearance Certificate, and a verifiable HMAC badge at `app/tools/verify/page.tsx` (`components/tools/SecurityBadgeVerifyClient.tsx` and `app/api/tools/verify-badge/route.ts`).
   - Additively upgrades `app/tools/mcp-security-auditor/content.tsx` with a direct bridge into automated `.mcp.json` and live repo scanning without removing any existing manual audit controls.

2. **Product #3: Department AI Risk & SOP Playbook Generator** (`app/tools/department-ai-playbook/page.tsx`, `components/tools/DepartmentPlaybookGeneratorClient.tsx`, and `lib/pay-to-reveal/department-playbook-engine.ts`):
   - Clean-room adaptation of governed department workflow design paired with SOX / EU AI Act human-in-the-loop controls and deterministic financial workbooks.
   - Visitors configure 1 of 5 operating departments (`Finance & Close`, `Operations & Vendors`, `Customer Support`, `HR & Recruiting`, `Small Business Floor`), headcount, monthly volume, and live software stack (`NetSuite`, `QuickBooks`, `Ramp`, `Zendesk`, `Salesforce`, `Workday`, `Slack`, `Excel`).
   - **Free 25% Reveal**: Monthly and annual recoverable busywork OpEx, the #1 Unsupervised Agent Red-Line, Governed SOP #1 in full stack-customized detail, and redacted stubs for SOPs `#2` through `#8` plus the 5-tab `.xlsx` workbook.
   - **Paid Reveal (`$39` Single Department Pack / `$79` Complete 5-Department Bundle)**: Opens all 8 stack-customized SOPs (or all 40 across all 5 departments), RACI human approval thresholds, sanitized copyable prompts, a pure TypeScript ECMA-376 5-tab `.xlsx` financial model with live `<f>` Excel formulas (`lib/pay-to-reveal/xlsx-compiler.ts`), and a Board-Ready Company AI Acceptable Use Policy PDF.

3. **Unbypassable Server-Side Redaction & Fail-Closed Checkout Verification**:
   - Scan and compile endpoints (`app/api/tools/vibe-scan/route.ts` and `app/api/tools/playbook-compile/route.ts`) strip locked traces and SOP bodies before serialization and encrypt the complete server payload using Web Crypto `AES-256-GCM` with `additionalData` bound to `runId` and `toolId` (`lib/pay-to-reveal/sealed-envelope.ts`), paired with best-effort logging to `docs/sql/paid_tool_runs.sql`.
   - `app/api/tools/pay-checkout/route.ts` creates dynamic Stripe Checkout Sessions via `Stripe.createFetchHttpClient()` for SKUs registered in `app/lib/products.ts` and `app/api/webhooks/stripe/route.ts` (`vibe_scan_29`, `vibe_scan_49`, `dept_playbook_39`, `dept_playbook_79`), enforcing strict `https://www.richardewing.io/tools/...` return URLs.
   - `app/api/tools/open-run/route.ts` fails closed (`HTTP 402` / `403`) unless Stripe confirms `session.payment_status === 'paid'`, matching `metadata.runId`, and `amount_subtotal >= expectedMinCents` (or a valid HMAC `rescanToken` or verified Clerk Vault/Tools entitlement is presented).

## Deciders
@richardewing, Steve Jobs, Paul Graham, Keith Rabois, Dan Guido, Brad Smith, Aravind Srinivas, Karri Saarinen, Code Architect, QA Auditor

## Status
Accepted

## Consequences
Positive:
- Establishes two 24/7 zero-gate impulse-priced (`$29`, `$39`, `$49`, `$79`) standalone software products directly inside the Concept B editorial system on `richardewing.io` with zero added npm dependencies.
- Eliminates browser DevTools (`F12`) network inspection bypasses by sealing unpaid findings and SOPs inside `AES-256-GCM` authenticated ciphertext with `runId` AAD binding.
- Guarantees zero dead screens after Stripe Checkout redirects through triple-layered state recovery (client `localStorage` sealed envelope + `paid_tool_runs` database lookup + deterministic re-execution from verified Stripe `session.metadata`).
- Captures high-intent commercial search and AI citation demand across `/tools/vibe-security-scanner`, `/tools/supabase-rls-checker`, and `/tools/department-ai-playbook`, reinforced in `app/sitemap.ts`, `next.config.ts`, `app/llms.txt/route.ts`, `app/llms-full.txt/route.ts`, and `.agents/scripts/run-security-ledger-audit.mjs`.

Negative/Considerations:
- Live URL scanning executes outbound `fetch` requests inside Cloudflare Workers CPU/wall-clock limits; `lib/pay-to-reveal/vibe-security-engine.ts` must strictly enforce HTTPS-only targets, private/link-local IPv4/IPv6 SSRF blocking, manual redirect validation, response byte caps, and `6.5s` timeouts.
- Server-sealed envelopes derive key material from production environment secrets (`STRIPE_SECRET_KEY` / `CLERK_SECRET_KEY` / `CRON_SECRET`); rotating all three secrets simultaneously invalidates in-flight 7-day unpaid envelopes, though paid Stripe sessions still recover cleanly via `session.metadata`.
