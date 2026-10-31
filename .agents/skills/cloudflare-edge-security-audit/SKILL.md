---
name: cloudflare-edge-security-audit
description: Stateful 6-phase security auditing, SHA-256 coverage ledgers, adversarial Hunter vs. Skeptic Disprover verification, Cloudflare Workers V8 isolate hardening, Supabase RLS enforcement, and Stripe/Clerk boundary auditing. Clean-room adaptation of cloudflare/security-audit-skill, cloudflare/skills, trailofbits/skills, and supabase/agent-skills.
---

# Stateful Edge & Application Security Audit Protocol

**Companion Skill**: [`agent-security-hardening`](file:///d:/Antigravity_RichardEwing.io/.agents/skills/agent-security-hardening/SKILL.md) (Prompt Boundaries & Zero Secret Leakage)  
**Ledger Engine**: [`run-security-ledger-audit.mjs`](file:///d:/Antigravity_RichardEwing.io/.agents/scripts/run-security-ledger-audit.mjs)  
**Skill Supply-Chain Scanner**: [`audit-agent-skills.mjs`](file:///d:/Antigravity_RichardEwing.io/.agents/scripts/audit-agent-skills.mjs)  
**Ledger Directory**: `.scratch/security-audit/` (Gitignored to preserve Root Hygiene)  

One-shot security prompts fail on production codebases because models skim a handful of files, invent speculative vulnerabilities, and lose track of unaudited routes. This skill externalizes audit state into deterministic file ledgers and enforces strict separation between hunting and verification.

---

## 1. The Golden Rule: Adversarial Hunter vs. Skeptic Disprover Separation

> **The agent that verifies a security finding MUST NEVER be the agent that proposed it.**

Every security audit executes across 6 sequential phases:
1. **Phase 1: Reconnaissance & Ledger Initialization**:
   - Run `node .agents/scripts/run-security-ledger-audit.mjs` to hash every route and middleware unit (`SHA-256`) into `.scratch/security-audit/coverage-ledger.json` and map trust boundaries in `.scratch/security-audit/architecture.md`.
   - On follow-up audits, compare current file hashes against `coverage-ledger.json` so unchanged verified units are tracked cleanly while newly added or modified routes (`status: "needs_audit"`) receive immediate focus.
2. **Phase 2: Coverage-Led Hunting**:
   - Dispatch isolated Hunter passes across uncovered units in `coverage-ledger.json`, evaluating our 5 Sovereign Attack Classes.
3. **Phase 3: Adversarial Candidate Disproval**:
   - Spawn a fresh, read-only Skeptic Verifier subagent (`invoke_subagent` with `TypeName: "research"`) whose explicit mandate is to **disprove** each candidate finding by checking upstream middleware, Clerk auth wrappers, Cloudflare WAF rules, and schema validators.
4. **Phase 4: Strict Verdict Classification (`findings.json`)**:
   - **`confirmed`**: Complete source-to-sink code trace proving exploitability under real runtime conditions. Carries severity (`CRITICAL`, `HIGH`, `MEDIUM`, `LOW`).
   - **`needs_validation`**: Missing one runtime or external configuration fact (e.g. an upstream Cloudflare WAF custom rule). **Carries zero severity score** until empirically resolved.
   - **`rejected`**: Disproved during Phase 3; logged in the ledger so future passes do not re-flag the same false positive.
5. **Phase 5: Blast-Radius Differential Review (`trailofbits` Pattern)**:
   - Before deploying fixes, inspect `git diff` to verify the security patch does not break legitimate user flows, Stripe webhooks, or static prerendering.
6. **Phase 6: Target-Neutral Reporting**:
   - Output `.scratch/security-audit/REPORT.md` summarizing coverage percentage, confirmed fixes, and remaining `needs_validation` items.

---

## 2. The 5 Sovereign Attack Classes (`richardewing.io` + `exogram.ai` + `careerwin.ai`)

### Class 1: Cloudflare Workers V8 Isolate & Edge Runtime Hazards (`cloudflare/skills` Distilled)
- **Cross-Request Mutable State Bleed**: Cloudflare Workers reuse a single V8 isolate across multiple concurrent incoming requests. NEVER store user IDs, auth tokens, request-specific headers, or diagnostic payloads in module-scope `let`/`var` variables or singleton objects outside the request handler.
- **Floating Promises & Dropped Subrequests**: Unawaited async operations (logging leads, firing webhooks, updating analytics) terminate abruptly once the Worker returns a `Response` unless awaited or registered with `ctx.waitUntil()`.
- **Edge Redirect & Cache Poisoning**: Never attach `s-maxage` public CDN caching to User-Agent conditional `403`/`204` responses or dynamic authenticated payloads in `middleware.ts`. Always verify `destination.href !== req.nextUrl.href` before returning `301`/`308` redirects.

### Class 2: Fail-Open Authentication & Admin/Cron Route Boundaries
- **The `Bearer undefined` Trap (CRITICAL)**: Never write `const hasCronAuth = authHeader === \`Bearer \${process.env.CRON_SECRET}\``. If `CRON_SECRET` is unset in an environment, sending `Authorization: Bearer undefined` bypasses authentication! Always enforce fail-closed validation:
  ```ts
  const secret = process.env.CRON_SECRET;
  const hasCronAuth = Boolean(secret && secret.length >= 16 && authHeader === `Bearer ${secret}`);
  ```
- **Admin Endpoint Gatekeeping**: Every route under `app/api/admin/**` MUST enforce Clerk authentication (`await auth()`) and/or fail-closed `CRON_SECRET` verification before reading or mutating data.

### Class 3: Supabase RLS & Service-Role Containment (`supabase/agent-skills` Distilled)
- **`supabaseAdmin` Server-Only Isolation**: `SUPABASE_SERVICE_ROLE_KEY` bypasses all Postgres Row-Level Security (RLS). Never import `supabaseAdmin` into `"use client"` components or shared client utilities.
- **Unauthenticated Ingestion Caps**: Any public webhook or telemetry endpoint writing via `supabaseAdmin` (such as `/api/leads`, `/api/lead-capture`, `/api/webhooks/telemetry`) MUST enforce strict payload byte-length caps (`<= 16KB`), field sanitization, and schema validation to prevent Denial-of-Storage injection.
- **RLS Policy Verification**: All user-accessible tables in Supabase must have RLS enabled (`ALTER TABLE ... ENABLE ROW LEVEL SECURITY`) with explicit `auth.uid()` ownership policies verified via `supabase-mcp-server` (`get_advisors`).

### Class 4: Stripe Webhook & Commercial Entitlement Integrity
- **Cryptographic Signature Check**: Every Stripe webhook handler (`/api/webhooks/stripe`) must verify raw body signatures via `stripe.webhooks.constructEvent(body, signature, webhookSecret)` with a non-empty `STRIPE_WEBHOOK_SECRET` before trusting `client_reference_id` or granting Clerk `publicMetadata` entitlements.
- **Price & Product Pinning**: Never trust client-supplied dollar amounts or unlocked item arrays in POST bodies; derive entitlements strictly from verified Stripe `line_items` / `price.id` or signed server state.

### Class 5: LLM Sandbox & Denial-of-Wallet Protection
- **Input Size & Turn Caps**: Every route invoking Gemini, OpenAI, or voice streaming (`/api/ai-advisor/*`, `/api/voice/*`, `/api/expand`) must cap prompt character length, enforce authentication or Turnstile/rate limits, and wrap untrusted inputs inside explicit XML delimiters (`<user_payload>`) per `agent-security-hardening`.
