# Platform Invariants, Governance Architecture & ADR-0018 to ADR-0024 Reference

Canonical deep reference distilled from Sovereign Master Operating Directive (MOD v4.0) for `richardewing.io`, linked from [SKILL.md](file:///d:/Antigravity_RichardEwing.io/.agents/skills/master-directive/SKILL.md).

---

## 1. Google Antigravity 2.0 Architecture & Encapsulated Modalities (Section 6)

MOD v4.0 integrates across all developer surfaces on the **Antigravity 2.0 (v2.21.0)** platform baseline:

* **Antigravity 2.0 Platform & Desktop Application**: `v2.21.0` (Left sidebar Conversations / Projects / Scheduled Tasks / Skills & Customizations / Settings; Chat Canvas; Auxiliary Pane for Subagents, Background Tasks, Artifacts, Files Changed, Terminals).
* **Antigravity IDE Standalone**: `v2.5.5`
  * *Passive Modality (Antigravity Tab)*: Autocomplete & Supercomplete predicting insertions, deletions, cursor jumps, and auto-imports (`Tab to Jump`, `Tab to Import`).
  * *Instructive Modality (Inline Command Cmd+I / Ctrl+I)*: Targeted edits strictly bounded to highlighted code blocks.
  * *Collaborative Modality (Sidebar Chat & Agent Mode)*: Multi-step pair programming with terminal execution, web search, and MCP tools.
  * *Editor Integrations*: Inline Code Lenses (`Refactor`, `Write Tests`, `Explain Code`), Visual Diff Overlays, Integrated Sidebar Git VCS controls, and Diagnostic Auto-Fix.
* **Antigravity CLI (`agy`)**: `v1.1.25` configured via `~/.gemini/antigravity-cli/settings.json`.
* **Antigravity Python SDK (`google-antigravity`)**: `v0.1.16` (`Agent(LocalAgentConfig(capabilities=CapabilitiesConfig()))`, streaming thoughts and tool calls, local LiteRT runtime `LiteRTAgentConfig` / Gemma 4 26B, and `LocalOpenAIAgentConfig`).
* **Hybrid Cloud + Local Execution**: Frontier cloud reasoning (Gemini 3.8 Flash High Reasoning Effort, Gemini 3 Pro, Vertex AI ADC / Express modes) paired with on-device LiteRT execution for offline latency savings.
* **Customization System**: Progressive disclosure for skills (`skills/<name>/SKILL.md`), 24,000-byte per-file rule cap, 20,000-token `defaultRulesBudget`, deduplication, lifecycle hooks (`.agents/hooks.json` with `cwd` equal to `.agents/`), and Generative UI (`builtin/skills/generative_ui`).

---

## 2. Sovereign Dual-Chamber Governance & Zero-Bloat Hierarchy (Section 8)

### A. The Board Room (Council of Titans)
1. **Steve Jobs & Jony Ive**: Taste, ruthless subtraction, invisible design. Kill 40% of visual noise. Scrutinize ADR Negative/Considerations sections to prevent architectural bloat.
2. **Jeff Bezos**: Customer obsession, frictionless compounding flywheels, distinction between reversible two-way doors and ADR-documented one-way doors.
3. **Elon Musk**: First principles, radical deletion of wrapper services and corporate theater.
4. **Mark Zuckerberg**: Open leverage, daily shipping cadence, turning open models (LiteRT) and frontier APIs into proprietary moats.
5. **Jensen Huang**: Sovereign compute, token ROI, intelligence density per square inch via Gemini 3.8 Flash High.
6. **Dario Amodei & Sam Altman**: Constitutional grounding, verifiable truth, frontier readiness without hallucination debt.

### B. The War Room (General Staff)
1. **Paul Graham & William Zinsser (Voice / HWS v2.0)**: Human first. Blunt, non-technical, zero buzzwords. Humanizes ADR context and consequences.
2. **Brad Smith (Legal / General Counsel)**: Diagnostic safe harbors, copyright cleanroom, zero-PII compliance, ADR licensing audits.
3. **Aravind Srinivas & Lily Ray (AIEO / GEO / AEO / SEO)**: Perplexity and LLM citation authority, JSON-LD schemas, semantic triples.
4. **Brian Balfour & Jim Collins (Flywheel Systems)**: Closed-loop growth. Zero dead-end pages.
5. **Karri Saarinen & Rauno Freiberg (Kinetic Craft UI/UX)**: High-contrast precision UI, damped spring physics, Generative UI widgets, zero design slop.
6. **Luis von Ahn, Sean Parker & Nir Eyal (Dopamine & Addictiveness)**: Sub-50ms reactive speed, uncomfortable truth discovery, boardroom Slack scorecard exports, sunk-cost investment loops.
7. **Keith Rabois & Ruth Porat (CFO & Unit Economics)**: Unit economics, killing vanity metrics, high-ticket advisory on-ramps.
8. **Dan Guido & Simon Willison (Adversarial Security)**: Zero secret leaks (`verify-qa.mjs`), prompt injection defense, edge hardening.
9. **Avinash Kaushik (Behavioral Telemetry)**: Privacy-preserving behavioral tracking and diagnostic drop-off auditing.

### C. Zero-Bloat 3-Tier Clearance Hierarchy
* **Tier 1 (Active Triad, Every Turn)**: Steve Jobs (simplicity) + Paul Graham (human voice) + Deterministic QA Gate (`verify-qa.mjs` + build + edge deploy).
* **Tier 2 (Domain Gatekeepers, When Territory Touched)**: Karri Saarinen (UI), Aravind Srinivas (GEO/SEO), Brian Balfour (Flywheels), Luis von Ahn (Engagement), Code Architect (Architecture & ADRs).
* **Tier 3 (Deep Bench on Call, Single-Strike Audits)**: Brad Smith (Legal), Dan Guido (Security), Keith Rabois (Economics), Titans on demand. Protocol: Red Flag -> Structural Fix -> Sign-off/Veto.

---

## 3. Operational Platform Invariants (Sections 12 to 18)

### Executive Operator Instincts Mandate (Section 12)
Every telemetry report or analytics audit must lead with Operator Instincts before raw tables:
1. **Signal vs. Noise Filter**: Separate human visitors from crawler botnets, AI scrapers (ElevenLabs, SiteList, ShapBot), and search spiders.
2. **The Behavioral Read**: Interpret operational intent of visiting CEOs, CFOs, VPs of Operations, and Engineering Leads.
3. **The Revenue Bottleneck**: Diagnose conversion friction, checkout stalls (Stripe drop-offs), and missing scheduling links.
4. **The Perimeter & Security Scan**: Audit hostile scanner probes, WAF threat mitigations, and zero-day containment.
5. **The Recommended Next Move**: Deliver one or two concrete operational fixes to run immediately.

### Cal.com Scheduling Authority & Parameter Bridge (Section 13)
* `richardewing.io` uses **Cal.com** (`cal.com/richard-ewing-2cevwb`) embedded at `/schedule`. Never suggest generic contact forms for executive scheduling.
* Every diagnostic tool (`/reality-check`, `/tools/pdi`, `/tools/ev-se`, `/tools/cfo-capitalization-audit`) must deep-link to `/schedule` with calculated query context (e.g. `?source=reality-check&leak=${savingsOpportunity}`).
* `/schedule` must mount `<ScheduleDiagnosticBanner />` above the Cal.com embed, and any new `?source=` parameter must be registered simultaneously in `SOURCE_CONFIGS` inside `components/schedule/schedule-diagnostic-banner.tsx`.

### Cloudflare Deployment Resilience (Section 14)
* `CLOUDFLARE_API_TOKEN` in gitignored `.env.local` or OS environment variables is the primary non-interactive auth path for `npx wrangler deploy`.
* Never expect interactive browser OAuth logins inside headless automation runs.

### Edge Redirect Immunity & CDN Cache Protection (Section 15 & ADR-0019 / ADR-0022)
* Middleware must verify `destination.href !== req.nextUrl.href` before issuing 301/308 redirects.
* Redirect responses from edge middleware must set `Cloudflare-CDN-Cache-Control: no-store` and `Cache-Control: no-cache, no-store, must-revalidate`.
* Maintain `Host, RSC` Vary headers, `POISONED_CACHE_URLS` safeguards (without hot-path per-request `caches.default.delete` loops), clean pathname-only `EDGE_REDIRECTS` values (never embedding `?` or `#`, since `req.nextUrl.search` appends dynamically), and pre-OpenNext Worker edge shield via `scripts/patch-worker.mjs`.

### Runtime Security & Workstation vs. Worker Isolation (Section 16)
* Keep local workstation Node.js patched (`>=24.22.1` or `>=22.23.4`) to satisfy upstream third-party telemetry compliance checks (`Stripe`, `Cloudflare`, `Resend`).
* Production traffic runs strictly inside Cloudflare Workers V8 isolates (`workerd`), isolated from local workstation Node processes.

### Option C Dual-Engine Funnel (Section 17)
* **HWS-AEO v3.0**: Every `/answers/*` spoke, `/glossary/*` term, and diagnostic readout opens with a 30-to-45-word standalone direct answer tuned for `Query Fan-Out` (ChatGPT Search, Perplexity, Claude, Google AI Overviews), immediately followed by concrete lived operational reality.
* **In-Scorecard Conversion Ladder**: Mount `<ScorecardCheckoutDrawer />` across interactive calculators and answer spokes supporting the `$29` Survival Kit / `$79` Complete 13-Playbook System -> `$450` Live 60-Min Session -> `$2,500` 14-Day Automation/Turnaround Sprint -> `$7,500` 21-Day 0-to-1 Build Sprint.

### Holistic Ecosystem Interconnectivity (Section 18)
* Zoom out macro-to-micro so every surface links `RichardEwing.io` Advisory & Diagnostics <-> `Exogram.ai` Runtime Governance <-> `CareerWin.ai` Human Evidence <-> `/schedule` Cal.com Booking <-> Stripe Checkout Ladder <-> `/api/leads` and `/api/lead-capture`.
* Zero passive brochure pages or orphan sub-routes: every product flagship and deep-dive must provide internal cross-links, interactive capture/diagnostic bridge (`ExogramBlueprintCapture`, `ScorecardCheckoutDrawer`, or `AdvisoryCTA`), and source-tagged `/schedule?source=<page-slug>`.
* Every client form (`ExogramDemoForm`, `SpeakingBookingForm`, `IntakeApplicationForm`, blueprint captures, newsletter gates) must execute real `fetch` POST calls to `/api/lead-capture` and/or `/api/leads` with structured error handling, high-contrast confirmation text (never `text-white` on `bg-white`), and a post-submit `/schedule?source=...` link. Zero `setTimeout` fake submissions.

---

## 4. ADR-0018, ADR-0020 & Canonical 10-Pillar Cloudflare Report (Sections 19 to 21)

### Clean-Room Skills, Demand Telemetry, Security Ledgers & Deal Desk (ADR-0018 / Section 19)
* **Clean-Room Quarantine**: Never run verbatim third-party installs (`npx skills add`) into `.agents/skills/`. Audit with `node .agents/scripts/audit-agent-skills.mjs`.
* **Demand & Search Intelligence**: Pair `seo-architecture` with `.agents/skills/demand-and-search-intelligence/SKILL.md` and `pull-demand-telemetry.mjs` across GSC (`googleapis`), `semrush_mcp` (budget-checked before `execute_report`), 30-day Hacker News/Reddit practitioner pain mining, Cloudflare GraphQL HTML/AI-bot crawl analytics, link-graph orphan checks, and `stripe_stripe` MCP (`Exogram AI LLC` `acct_1TxBWCGl91vB8itR`).
* **Hunter / Skeptic Disprover Security Audit**: Follow `.agents/skills/cloudflare-edge-security-audit/SKILL.md` + `run-security-ledger-audit.mjs` tracking SHA-256 route coverage in `.scratch/security-audit/coverage-ledger.json`, fail-closed `Bearer` verification, zero client `supabaseAdmin` imports, and V8 request isolation.
* **3-Strike Debugging, Two-Stage Review & Executive Deal Desk**: Follow `.agents/skills/executive-deal-desk/SKILL.md` (3-Strike Circuit Breaker, 4-Layer Defense-in-Depth, `qa_auditor` Gate A Spec/Blast-Radius before Gate B Craft, `/schedule` pre-call dossiers, formula-driven `.xlsx`/`.pdf` boardroom kits).

### Streaming Generative UI, Fail-Closed Provenance & UI Integrity (ADR-0020 / Section 20)
* **EGM Semantic Spec Split & ADR Drift**: Split non-trivial specs into `01-problem-intent.md`, `02-semantic-contracts.md`, and `03-implementation-plan.md`, apply Silent Cold-Context Paraphrase (`1`-audit cap), and verify via `node .agents/scripts/check-adr-drift.mjs --strict`.
* **Design Tokens Lock & UI Wiring Ledger**: Enforce `.agents/skills/ui-ux-polish/references/DESIGN_TOKENS_LOCK.md` across `richardewing.io`, `exogram.ai`, and `careerwin.ai`. Use `mobbin_mobbin` MCP strictly for UX flow mechanics (never palette overrides), ban `@splinetool/runtime` inside `richardewing.io`, and run `verify-ui-integrity.mjs --before` / `--kept` around UI refactors (`--floor` runs in `verify-qa.mjs`).
* **Zero-Dependency Streaming Generative UI**: `lib/sovereign-ui-stream.ts` + `AdvisorStreamWidgets.tsx` stream positional Zod v4-validated widgets over SSE (`client.interactions.create({ model: 'gemini-3.8-flash', stream: true })`) with `getCloudflareContext().ctx.waitUntil(...)` persistence, zero `dangerouslySetInnerHTML`, and `100%` `hydrateLegacyRoadmapJson()` backward compatibility.
* **Fail-Closed Exogram Governance & Health Audits**: `evaluateAction()` in `lib/exogram.ts` fails closed (`decision: 'BLOCKED'`) on missing credentials, timeouts, or upstream errors. Run `run-retrieval-eval.mjs` (`Recall@k`, `Precision@k`, `nDCG@k`, `MRR`, `Hit@k`) and `check-curriculum-health.mjs`.
* **Air-Gapped Step 6 Distribution Queue**: `compile-distribution-pack.mjs` + `docs/sql/20261101_sovereign_distribution_queue.sql` store `status: "pending_human_approval"` drafts under `service_role` RLS, `human_approval_required_before_dispatch`, and `FOR UPDATE SKIP LOCKED` atomic claiming.

### Canonical 10-Pillar Cloudflare Report & 1.00M CPU/Day Budget (Section 21)
* Always run `node .agents/scripts/run-cloudflare-report.mjs` (never partial substitutes).
* Include all 10 pillars: Executive Readout, Worker CPU & Billing Quota Curves, 15-Day Edge Traffic & Threats, Human Pageviews & Uniques, Top 15 HTML Routes per Domain, `/schedule` & Geographies, WAF & AI/Search Crawlers, 3-domain GSC (`sc-domain:richardewing.io`, `https://careerwin.ai/`, `sc-domain:exogram.ai` via `ai-agents-sheets@ai-agents-495417.iam.gserviceaccount.com` without exposing credentials), Stripe Live Ledger, and 21-Endpoint Edge Cache Health.
* Enforce combined Worker CPU cap `<= 1.00M ms/day` (**30.00M ms/cycle** on **\$5.00** Workers Paid plan) across `richardewing-io`, `careerwin-app`, and `exogram-www`; report zero-overage daily cap from remaining free CPU; separate 60-minute, 24-hour, and billing-cycle Worker errors.
* Always include unprompted: the 7-probe `CPU Shield Verification` table (`careerwin.ai/api/profile` `FAST-401`, `exogram.ai/mcp` HTML and JSON, `richardewing.io/api/og`, `careerwin.ai/api/og`, `richardewing.io/.env`, and `GPTBot` 403 WAF blocks) and the 4-part Strategic Operator Readout (`a` Needs Attention, `b` Needs Action, `c` Really Pay Close Attention To, `d` Intuitions, Ideas & What You Missed) formatted per Vertical Executive Communication Standard.
