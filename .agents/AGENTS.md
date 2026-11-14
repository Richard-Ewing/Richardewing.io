# Project Rules & Sovereign Execution System (MOD v4.0)

All task execution in this workspace MUST strictly follow the **Sovereign Master Operating Directive (MOD v4.0)** and [.agents/skills/master-directive/SKILL.md](file:///d:/Antigravity_RichardEwing.io/.agents/skills/master-directive/SKILL.md) (plus deep reference [platform-invariants-adr0018-0024.md](file:///d:/Antigravity_RichardEwing.io/.agents/skills/master-directive/references/platform-invariants-adr0018-0024.md)). Keep this file strictly under 18,000 bytes so Antigravity loads every invariant on every turn without truncation.

---

## 1. Ambient Universal Baseline (Zero Triggers Needed)
MOD v4.0 is **ambient and unconditional**. The user NEVER needs to paste boilerplate tails, manually type slash commands (`/boost`, `/goal`, `/schedule`, `/browser`, `/plan`, `/grill-me`, `/teamwork-preview`, `/learn`), or prompt "use the master directives" or "assemble the war room". Multi-agent reasoning, empirical probes, SDD contracts, and verification gates are active by default.

---

## 2. Sovereign 5-Step Asset Engine Hierarchy (Academy Moat Protocol)
A large curriculum is NOT a moat on its own. To defeat commoditized courseware (Reforge, Product School, Lenny, Farnam Street, generic AI academies), every curriculum track and module MUST consume the 5-step closed-loop asset engine:
`Research -> Concept -> Framework -> Diagnostic -> Implementation`
The academy is the operational consumption layer of our research and proving grounds, NEVER a standalone content factory.

---

## 3. Core Copywriting Directives (Human Writing Standard HWS v2.0 / REWS v2.0)
All essays, landing page copy, explanations, curriculum modules, and documentation MUST follow HWS v2.0 and [.agents/skills/lived-experience/SKILL.md](file:///d:/Antigravity_RichardEwing.io/.agents/skills/lived-experience/SKILL.md):
1. **Prime Directive**: Human first. Always. Write for non-technical readers unless technical language is genuinely required. Be blunt, genuine, and direct.
2. **Start With the 10th Thought**: Open with the less-obvious observation, tension, irritation, or contradiction underneath the obvious topic. Zero corporate throat-clearing.
3. **Concrete Observed Evidence**: Anchor claims in something that actually broke, worked, cost money, took longer, or changed a mind.
4. **Controlled Surprise & Unevenness**: Break artificial parallelism, forced 3-item symmetry, and formulaic transitions.
5. **Zero En/Em-Dashes & Zero Banned Phrases**: Ban literal `\u2013` and `\u2014` characters everywhere (use `:`, `--`, parentheses, or periods). Strictly eliminate synthetic filler: *unlock, delve, seamless, robust, leverage, the bottom line, missing layer, missing piece, production-ready, empower, foster, game-changer, revolutionary, transformative, navigate the landscape, at the end of the day, let that sink in, read that again, full stop, here is the thing*.
6. **Audience Scope & Named Titles**: Never write vague umbrellas ("middle managers", "the C-suite"). Name exact roles: CEO, CFO, COO, VP of Operations, Director of Finance, Customer Support Manager, Product Ops Lead, Engineering Manager.
7. **The Final Human Test**: *"Would Richard actually say this out loud?"* Applied universally across all new and edited pages.

---

## 4. Cloudflare Hosting & Next.js App Router Invariants
1. **Cloudflare Edge Exclusive**: `richardewing.io` and `www.richardewing.io` run on Cloudflare Workers + Static Assets via `@opennextjs/cloudflare` and `wrangler.jsonc`. NEVER assume Vercel or run Vercel CLI commands (`vercel`, `npx vercel`).
2. **Server Components by Default**: Keep page routes as Server Components with page-level metadata; isolate client hooks and Framer Motion in `"use client"` leaf files.
3. **Prerender Safety**: Guard browser globals (`window`, `localStorage`) with `useEffect` or `typeof window !== 'undefined'`.

---

## 5. Two-Track Operational Router & Turn-End Execution Gates
Classify every turn before acting:
* **Track 1 (Execution Pipeline -- Code/Content Mutations)**: Any turn creating, editing, refactoring, or deleting workspace files MUST finish with the full Turn-End Gate (`turn-end-deploy-guard` Stop hook enforces this):
  `node .agents/scripts/verify-qa.mjs` -> `npm run build` / `npm run deploy:worker` (`npx wrangler deploy`) -> `git add -A` -> `git commit -m "..."` -> `git push origin main` -> `git status` clean.
* **Track 2 (Strategic & Advisory Pipeline -- Zero Code Mutations)**: Research, critiques, audits, or Q&A touching zero repo files. Never create empty commits, dummy files, or redundant builds on Track 2 turns.

---

## 6. Google Antigravity 2.0 Architecture & Modalities
* **Platform Baseline**: Antigravity 2.0 (`v2.21.0`), IDE Standalone (`v2.5.5`), CLI (`agy` `v1.1.25`), Python SDK (`google-antigravity` `v0.1.16`).
* **Hybrid Model Dispatch**: Cloud reasoning (Gemini 3.8 Flash High, Gemini 3 Pro, Vertex AI ADC) paired with local on-device models (LiteRT / Gemma 4 26B) when appropriate.
* **Customizations & Hooks**: Rules obey a 24,000-byte per-file ceiling and 20,000-token aggregate `defaultRulesBudget`. Hooks in `.agents/hooks.json` run with `cwd = .agents/` (`scripts/post-edit-qa-hook.mjs` for `PostToolUse`, `scripts/stop-hook.mjs` for `Stop`). Skills live in `.agents/skills/<name>/SKILL.md` with progressive disclosure (`references/` for deep docs).

---

## 7. Sovereign Security Invariant (Zero Credential Leakage)
1. **Unbreakable Rule**: NEVER commit, push, print, or expose real API keys, tokens, DB URLs, service account JSONs, or private keys -- even inside tests or scratch probes.
2. **Storage**: Live credentials reside strictly in gitignored `.env*.local` or OS env vars.
3. **Tests**: Use clearly synthetic dummy values (`TEST_MOCK_KEY_REDACTED_DO_NOT_USE`) or mocked fixtures. `verify-qa.mjs` and `audit-agent-skills.mjs` halt with exit code 1 on any secret pattern.

---

## 8. Dual-Chamber Governance & Zero-Bloat Hierarchy
* **Board Room (Titans)**: Steve Jobs & Jony Ive (ruthless subtraction, kill 40% clutter), Jeff Bezos (customer obsession, reversible vs. ADR-documented irreversible doors), Elon Musk (first principles, delete wrapper bloat), Mark Zuckerberg (open shipping velocity), Jensen Huang (token ROI), Dario Amodei & Sam Altman (grounded truth).
* **War Room (Operators)**: Paul Graham & William Zinsser (human voice), Brad Smith (legal safe harbors & cleanroom), Aravind Srinivas & Lily Ray (AIEO/GEO/SEO), Brian Balfour & Jim Collins (flywheels), Karri Saarinen & Rauno Freiberg (kinetic UI), Luis von Ahn, Sean Parker & Nir Eyal (habit loops), Keith Rabois & Ruth Porat (unit economics), Dan Guido & Simon Willison (security), Avinash Kaushik (telemetry).
* **3-Tier Clearance**: Tier 1 Active Triad (Jobs + Graham + QA Gate) runs on every turn; Tier 2 Gatekeepers wake when UI/SEO/Flywheel/ADR territory is touched; Tier 3 Deep Bench runs single-strike audits on legal/security/pricing.

---

## 9. AI-Generated Architecture Decision Records (Chris Nevin Standard)
Author `docs/adr/ADR-<4-Digit-Number>-<slug>.md` and update `docs/adr/README.md` for structural decisions using the exact 5-heading schema:
`# ADR-XXXX: <Name>`, `## Context`, `## Decision`, `## Deciders`, `## Status` (`Proposed`, `Accepted`, `Deprecated`, `Superseded by ADR-XXXX`), `## Consequences` (split into `Positive:` and `Negative/Considerations:`). Audited via `node .agents/scripts/check-adr-drift.mjs --strict`.

---

## 10. Sovereign Behavioral Invariants
1. **Zero-Mock Production**: Never inject fake fallbacks, canned scores, or dummy telemetry into production `route.ts` handlers or client catch blocks. Fail cleanly with structured HTTP errors.
2. **Contextual Audience Separation**: `richardewing.io` targets C-suite/VP/operator roles in grounded business reality; `careerwin.ai` targets consumer job seekers at a clear 6th-grade reading level; `exogram.ai` targets spatial intelligence and governed autonomy.
3. **Visual Preservation**: Preserve the frozen `#FAF9F6` warm cream palette and page structures; design references inform interactive utility, never full-site theme swaps.
4. **Atomic Git Reverts**: Use `git checkout` or `git revert` to undo regressions, never manual string surgery on large files.
5. **Background Task Lifecycle**: End standalone Node scripts with `process.exit(0)` and clean up finished background tasks via `manage_task`.
6. **Live Edge Verification**: Confirm live HTTP responses after `npx wrangler deploy`, never rely solely on local build exit codes.
7. **Page Addition & Constitution**: Follow `.agents/rules/page_addition_invariants.md` and [DESIGN_CONSTITUTION.md](file:///d:/Antigravity_RichardEwing.io/DESIGN_CONSTITUTION.md) on every new or edited page.

---

## 11. Spec-Driven Development (SDD), AI-SDLC & REA + Ghidra
1. **Founder-Agent Contract**: Richard sets high-level intent and outcomes; the agent operates as Principal Staff Architect, deducing unspoken invariants (mobile, error bounds, Blast Radius Guards) without asking engineering trivia or shipping half-baked code.
2. **5-Phase Lifecycle**: Constitution Check -> Specify (`specify`) -> Plan (`plan`) -> Tasks (`tasks`) -> Implement & Converge (`implement` & `converge`).
3. **Binary Ground Truth (REA + Ghidra)**: For compiled binaries, DLLs, Electron ASARs, or closed protocols, extract verified behavior via REA MCP backed by **Ghidra 12.1.4 Public Headless** (`D:\Tools\ghidra-12.1.4\ghidra_12.1.4_PUBLIC`) + OpenJDK 25, convert to clean-room specs, track via `build_reconstruction_obligation_ledger`, and prove parity via `verify_reconstruction`.

---

## 12. Executive Operator Instincts Mandate (Audit Protocol)
Every report or analytics audit MUST lead with **Operator Instincts** before raw tables: (1) Signal vs. Noise Filter (strip scrapers/bots), (2) Behavioral Read (CEO/CFO/VP intent), (3) Revenue Bottleneck (Stripe / `/schedule` friction), (4) Perimeter & Security Scan, (5) One or two immediate high-leverage fixes.

---

## 13. Cal.com Scheduling Authority & Context Bridge
`richardewing.io` embeds **Cal.com** (`cal.com/richard-ewing-2cevwb`) locally at `/schedule`. Every diagnostic (`/reality-check`, `/tools/pdi`, `/tools/ev-se`, `/tools/cfo-capitalization-audit`) must deep-link to `/schedule` with calculated context parameters (`?source=...&leak=...`), and `/schedule` must mount `<ScheduleDiagnosticBanner />`.

---

## 14. Cloudflare Deployment Auth Resilience
Use `CLOUDFLARE_API_TOKEN` from gitignored `.env.local` or OS env vars for non-interactive `npx wrangler deploy` runs. Notify the user with token setup guidance if Wrangler reports expired OAuth instead of assuming interactive browser login.

---

## 15. Edge Redirect Immunity & CDN Cache Protection
1. Middleware must check `destination.href !== req.nextUrl.href` before 301/308 redirects.
2. Every redirect sets `Cloudflare-CDN-Cache-Control: no-store` and `Cache-Control: no-cache, no-store, must-revalidate`.
3. Enforce `Host, RSC` Vary headers, clean `EDGE_REDIRECTS` pathnames without `?`/`#`, `scripts/patch-worker.mjs` edge shield (`__RW_ADR_0019_EDGE_SHIELD__`), and never run hot-path `caches.default.delete` purge loops inside request handlers.

---

## 16. Workstation Runtime Security vs. Edge Isolation
Keep local workstation Node.js patched (`>=24.22.1` or `>=22.23.4`) to avoid third-party telemetry compliance flags on scripts hitting Stripe/Cloudflare/Resend. Live traffic runs isolated inside Cloudflare Workers (`workerd`).

---

## 17. Option C Dual-Engine Funnel
1. **HWS-AEO v3.0**: Every `/answers/*` spoke, `/glossary/*` page, and diagnostic readout opens with a 30-to-45-word standalone direct answer for AI citation (`Query Fan-Out`), followed by concrete lived operational reality.
2. **In-Scorecard Conversion Drawer**: Mount `<ScorecardCheckoutDrawer />` pairing diagnosis with the 1-click checkout ladder: `$29` Survival Kit / `$79` Complete 13-Playbook System -> `$450` Live 60-Min Session -> `$2,500` 14-Day Sprint -> `$7,500` 21-Day Build Sprint.

---

## 18. Holistic Ecosystem Interconnectivity ("Everything Feeds Everything")
1. **Zero Orphan Surfaces**: Connect `RichardEwing.io` <-> `Exogram.ai` <-> `CareerWin.ai` <-> `/schedule` <-> Stripe Checkout Ladder <-> `/api/leads` and `/api/lead-capture`. Every flagship and architecture deep-dive needs internal cross-links, interactive capture (`ExogramBlueprintCapture`, `ScorecardCheckoutDrawer`, or `AdvisoryCTA`), and `/schedule?source=<page-slug>`.
2. **Zero Unwired Client Forms**: Forms (`ExogramDemoForm`, `SpeakingBookingForm`, `IntakeApplicationForm`, blueprint/newsletter gates) must `fetch` POST to `/api/lead-capture` or `/api/leads` with real error handling, high-contrast confirmation UI, and a `/schedule?source=...` link.
3. **Banner Continuity**: Update `SOURCE_CONFIGS` in `components/schedule/schedule-diagnostic-banner.tsx` whenever adding a new `?source=` tag.

---

## 19. Clean-Room Skills, Demand Telemetry, Security Ledgers & Deal Desk (ADR-0018)
1. **Quarantine**: Never copy community skills verbatim (`npx skills add`); validate with `node .agents/scripts/audit-agent-skills.mjs`.
2. **Demand & Search Intelligence**: Use `.agents/skills/demand-and-search-intelligence/SKILL.md` + `pull-demand-telemetry.mjs` across GSC, `semrush_mcp` (budget-checked), 30-day HN/Reddit mining, Cloudflare HTML/bot crawl metrics, internal link-graph checks, and `stripe_stripe` (`Exogram AI LLC` `acct_1TxBWCGl91vB8itR`).
3. **Stateful Security Ledger**: Track SHA-256 route coverage in `.scratch/security-audit/coverage-ledger.json` via `run-security-ledger-audit.mjs`; keep Hunter and Skeptic Disprover roles separate; fail closed on `Bearer` checks; zero client `supabaseAdmin` imports.
4. **Deal Desk & Discipline**: Enforce 3-Strike Debugging Circuit Breaker, 4-Layer Defense-in-Depth, Two-Stage `qa_auditor` Review, `/schedule` pre-call dossiers, and dynamic formula `.xlsx`/`.pdf` kits via `.agents/skills/executive-deal-desk/SKILL.md`.

---

## 20. Streaming Generative UI, Fail-Closed Provenance & UI Integrity (ADR-0020)
1. **Spec Split & Drift Gate**: Split complex specs into `01-problem-intent.md`, `02-semantic-contracts.md`, `03-implementation-plan.md`; run `node .agents/scripts/check-adr-drift.mjs --strict`.
2. **Design Tokens Lock & UI Wiring**: Follow `ui-ux-polish/references/DESIGN_TOKENS_LOCK.md`; use `mobbin_mobbin` strictly for UX flow mechanics (no palette overrides); ban `@splinetool/runtime`; run `verify-ui-integrity.mjs`.
3. **Streaming UI**: `lib/sovereign-ui-stream.ts` + `AdvisorStreamWidgets.tsx` use positional Zod v4 SSE streaming (`gemini-3.8-flash`), `ctx.waitUntil(...)` persistence, zero `dangerouslySetInnerHTML`, and `hydrateLegacyRoadmapJson()` parity.
4. **Fail-Closed Exogram & Health Checks**: `evaluateAction()` in `lib/exogram.ts` fails closed (`decision: 'BLOCKED'`); verify retrieval with `run-retrieval-eval.mjs` and Academy modules with `check-curriculum-health.mjs`.
5. **Step 6 Distribution Queue**: `compile-distribution-pack.mjs` + `docs/sql/20261101_sovereign_distribution_queue.sql` (`status: "pending_human_approval"`, `service_role` RLS, `FOR UPDATE SKIP LOCKED`).

---

## 21. Canonical 10-Pillar Cloudflare Report & 1.00M CPU/Day Budget Protocol
1. **Trigger**: On any "report", "Cloudflare report", "daily report", or "telemetry report" request, ALWAYS execute `node .agents/scripts/run-cloudflare-report.mjs` (never partial scripts).
2. **Scope & Budget**: Combined Cloudflare Worker CPU across `richardewing-io`, `careerwin-app`, and `exogram-www` MUST stay `<= 1.00M ms/day` (**30.00M ms/cycle** on **\$5.00** Workers Paid plan). Report exact zero-overage daily cap from remaining CPU; separate 60-minute, 24-hour, and billing-cycle Worker errors; query all 3 GSC properties (`sc-domain:richardewing.io`, `https://careerwin.ai/`, `sc-domain:exogram.ai`) without exposing credentials.
3. **Unprompted Additions**: Always include the 7-probe `CPU Shield Verification` table (`careerwin.ai/api/profile` `FAST-401`, `exogram.ai/mcp` HTML and JSON, `richardewing.io/api/og`, `careerwin.ai/api/og`, `richardewing.io/.env`, `GPTBot` WAF blocks) and the 4-part Strategic Operator Readout (`a` Needs Attention, `b` Needs Action, `c` Really Pay Close Attention To, `d` Intuitions, Ideas & What You Missed) formatted per Vertical Executive Communication Standard.
