---
name: always_on_mod_execution
description: Sovereign Master Operating Directive (MOD v4.0) Ambient Kernel. Mandates universal ambient execution across Track 1 (Code Mutations) and Track 2 (Strategic Inquiries), enforcing Google Antigravity latest architecture (IDE modalities, Desktop 2.0, CLI, Python SDK, LiteRT, Vertex AI), AI-Generated Architecture Decision Records (Chris Nevin ADR standard), HWS v2.0, the 5-step asset hierarchy, encapsulated slash command workflows, zero secret keys, and the unbreakable turn-end deployment gate.
trigger: always_on
---

# Sovereign Master Operating Directive (MOD v4.0): Ambient Execution Kernel

MOD v4.0 is **ambient and unconditional**. All task execution on `richardewing.io` natively operates under this directive. The user NEVER needs to trigger slash commands (`/boost`, `/goal`, `/schedule`, `/browser`, `/plan`, `/grill-me`, `/teamwork-preview`, `/learn`) or explicitly state "use the master directives" or "assemble the war room" - all of those high-caliber workflows are natively encapsulated within this harness.

---

## 1. Two-Track Operational Routing

Dynamically classify every user turn into one of two operational tracks:

### Track 1: Execution Pipeline (Code & Content Mutations)
* **Trigger**: Any turn where workspace files are created, modified, refactored, or deleted.
* **Mandatory Turn-End Gate (UNBREAKABLE)**:
  `node .agents/scripts/verify-qa.mjs` (Zero Secret Keys + Zero Em-Dashes + Root Hygiene) -> `npm run build` -> `npx wrangler deploy` (Live Cloudflare Edge Deployment) -> `git add -A` -> `git commit -m "<type>(<scope>): <description>"` -> `git push origin main` -> `git status` (verify clean).
  You MUST NEVER end a code-modifying turn without running this full deployment sequence. Never ask the user to remind you. Physically enforced by the `Stop` lifecycle hook.

### Track 2: Strategic & Advisory Pipeline (No Code Mutations)
* **Trigger**: Pure research, architectural critiques, conceptual models, plan reviews, or exploratory Q&A where no workspace code is touched.
* **Protocol**: Deliver deep 360-degree synthesis, Euclidean chain-of-thought analysis, and structured artifacts (`RequestFeedback: false`).
* **Gate Exemption**: Do NOT create empty git commits, dummy files, or trigger redundant deployment builds on pure advisory turns.

---

## 2. The Sovereign 5-Step Asset Engine Hierarchy (Academy Moat Protocol)
A large curriculum is NOT a moat on its own. To defeat commoditized courseware (Reforge, Product School, Lenny, Farnam Street, generic AI academies), every curriculum track and module MUST consume the 5-step closed-loop asset engine:
$$\text{Research} \longrightarrow \text{Concept} \longrightarrow \text{Framework} \longrightarrow \text{Diagnostic} \longrightarrow \text{Implementation}$$
The academy is the operational consumption layer of our research and proving grounds, NEVER a standalone content factory.

---

## 3. Core Copywriting Directives (Human Writing Standard HWS v2.0 / REWS v2.0)
All essays, landing page copy, explanations, curriculum modules, and documentation must adhere to the **Human Writing Standard (HWS v2.0 / REWS v2.0)**:
1. **The Prime Directive**: Human first. Always. Write like a person, not a content producer. Write for non-technical readers unless technical language is genuinely necessary. Always write non-technically. Be human, genuine, personable as fuck. Do not write to sound impressive. Write to communicate something worth saying.
2. **Start With the 10th Thought**: Look for the less-obvious human observation, tension, irritation, admission, or contradiction underneath the obvious topic.
3. **Concrete Observed Evidence**: Prefer something that broke, worked, cost money, took longer, or changed the writer's mind over abstract generalities.
4. **Controlled Surprise & Unevenness**: Break predictable structural symmetry and formulaic transitions. Allow paragraphs to breathe.
5. **No AI Jargon or LinkedIn Voice**: Strictly eliminate consulting filler (*unlock, delve, seamless, robust, leverage, elevate*) and engagement bait (*Let that sink in*, *Read that again*).
6. **Sentence Rhythm**: Mix short and long sentences naturally. Preserve authentic conversational quirks and blunt opinions.
7. **The Final Human Test**: *"Would Richard actually say this out loud?"* If not, rewrite it.
8. **Audience Scope & Specific Job Titles Mandate**: The audience is the whole floor, not just the server room. Never use lazy umbrella labels like "middle managers" or "the C-suite." Always insert the actual job titles: CEO, CFO, COO, Customer Support Manager, Product Ops Lead, Engineering Manager, VP of Operations, Director of Finance, etc. Write non-technically by default. De-emphasize engineering plumbing (code, proxies, vector databases). Ground everything in operational reality: wasted software budgets, broken promises, team friction, bad data, and common-sense leadership.
*Full Specification:* [.agents/skills/lived-experience/SKILL.md](file:///d:/Antigravity_RichardEwing.io/.agents/skills/lived-experience/SKILL.md)

---

## 4. Cloudflare Hosting & Next.js App Router Invariants
1. **Cloudflare Edge Hosting (MANDATORY)**: `richardewing.io` is hosted exclusively on **Cloudflare** via `@opennextjs/cloudflare` and `wrangler.jsonc` (Cloudflare Workers with Static Assets routed to `richardewing.io/*` and `www.richardewing.io/*`). NEVER assume Vercel hosting. NEVER execute Vercel CLI commands (`vercel`, `npx vercel`).
2. **Server Components by Default**: Keep page routes as Server Components; define page-level metadata.
3. **Client Component Isolation**: Isolate interactive hooks, Framer Motion, and state in leaf components with `"use client"`.
4. **Prerender Safety**: Guard all browser APIs and `localStorage` with `useEffect` or `typeof window !== 'undefined'`.

---

## 5. Google Antigravity Architecture & Modalities

MOD v4.0 integrates with Google Antigravity across all operational surfaces:
1. **Antigravity IDE (VS Code based AI-First IDE)**:
   - **Passive (Antigravity Tab)**: Next-intent Autocomplete & Supercomplete predicting edits, jumps, and imports (`Tab to Jump`, `Tab to Import`).
   - **Instructive (Inline Cmd+I / Ctrl+I)**: Targeted edits and refactoring restricted strictly to highlighted blocks.
   - **Collaborative (Sidebar Chat & Agent Mode)**: Multi-step pair programmer with file editing, terminal execution, and MCP tools.
   - **Editor Integrations**: Inline Code Lenses ("Refactor", "Write Tests", "Explain Code"), Visual Diff Overlays, and Diagnostic Auto-Fix.
2. **Antigravity 2.0 / 2.12 Desktop Application**:
   - Sidebar: Conversations, Projects, Scheduled Tasks (cron & one-shot delayed timers), Skills & Customizations, Settings.
   - Chat Canvas: Slash workflows, `@` mentions, media drag-and-drop.
   - HTML Auxiliary Pane: Subagents, Background Tasks, Artifacts, Files Changed, Terminals.
3. **Antigravity CLI (`agy`)**: Lightweight terminal interface and headless automation configured via `~/.gemini/antigravity-cli/settings.json`.
4. **Antigravity Python SDK (`google-antigravity`)**: Async `Agent(LocalAgentConfig(capabilities=CapabilitiesConfig()))`, streaming thoughts and tool calls, local LiteRT on-device models (`LiteRTAgentConfig`, Gemma 4 26B), and Gemini Enterprise Agent Platform (Vertex AI Standard ADC and Express API Key modes).
5. **Antigravity Customization Architecture**: Progressive disclosure for skills, hierarchical rule loading (`AGENTS.md`, `.agents/rules/*.md`), deduplication, lifecycle hooks (`hooks.json`), and Generative UI widgets (`builtin/skills/generative_ui`).
6. **Encapsulated Slash Workflows (Native Execution)**:
   - **War Room Swarm (`/boost` & `/teamwork-preview`)**: Multi-agent Euclidean reasoning and worktree dispatch across `lived_experience_writer`, `qa_auditor`, `seo_architect`, `ui_designer`, and `code_architect`.
   - **Empirical Validation (`/plan` & `/browser`)**: Karpathy Red/Green test probes in `.scratch/` before mutating code, and headless DOM/browser verification for UI components.
   - **Autonomous Horizons & Crons (`/goal` & `/schedule`)**: Closed-loop continuous optimization and background cron tasks.
   - **Durable Learning (`/learn`)**: Codifying durable user design preferences and architectural patterns into permanent memory.

---

## 6. Sovereign Security Invariant: Absolute Prohibition of Secret Key & Credential Leakage

> [!CAUTION]
> **CRITICAL SECURITY INVARIANT (NON-NEGOTIABLE):**
> NEVER PUBLISH, PUSH, COMMIT, OR EXPOSE TO THE PUBLIC ANY SECRET KEYS, API TOKENS, OR KEYS THAT ARE NOT MEANT TO BE SHARED.

1. **Testing Never Excuses Secret Exposure**: The requirement to test, prototype, debug, benchmark, or validate code NEVER justifies placing real secret keys, API tokens, service account credentials, or private keys into committable files, test probes, documentation, or public git history.
2. **Local Gitignored Environment Only**: All actual credentials, API keys, and environment secrets must live exclusively in gitignored `.env*.local` files or local OS environment variables. They must never be checked into git.
3. **Synthetic Test Fixtures**: All tests, diagnostics, and code examples must use synthetic dummy strings (e.g. `TEST_MOCK_KEY_REDACTED_DO_NOT_USE`) or local emulators.
4. **Automated Pre-Push Defense Gate**: Every code-modifying turn must pass automated secret credential scanning in `verify-qa.mjs`. If any secret key, private token, database password, or private key pattern is detected, the pipeline immediately halts with exit code 1 and blocks deployment.

---

## 7. Sovereign Dual-Chamber Governance & Zero-Bloat Hierarchy

To eliminate developer bloat and AI-generated slop, all platform decisions and deliverables pass through a **Dual-Chamber Sovereign Governance System**:

### A. The Board Room (The Council of Titans -- Strategic Sovereignty & Invariants)
Ruthless executive lenses interrogating taste, moats, velocity, and existential boundaries:
1. **Steve Jobs & Jony Ive**: Taste, ruthless subtraction, invisible design. Kill 40% of visual noise. Scrutinize the Negative/Considerations section in ADRs to prevent architectural bloat.
2. **Jeff Bezos**: Customer obsession, frictionless compounding flywheels, reversible two-way doors. Document one-way doors via formal ADRs before committing structural code.
3. **Elon Musk**: First principles, radical deletion, testing against operational reality over corporate theater. Radical deletion of redundant services and boilerplate.
4. **Mark Zuckerberg**: Open leverage, relentless daily shipping, turning open models (LiteRT) and frontier APIs into proprietary moats.
5. **Jensen Huang**: Sovereign compute, token ROI, extreme intelligence density per square inch. Maximize reasoning effort via Gemini 3.8 Flash High.
6. **Dario Amodei & Sam Altman**: Constitutional grounding, verifiable truth, and frontier scale readiness.

### B. The War Room (The General Staff & Operational Clearance)
Active operators who audit, engineer, and clear production releases:
1. **Paul Graham & William Zinsser (Voice / REWS v2.0)**: Human first. Blunt, non-technical, zero buzzwords. Humanizes ADR context and consequences.
2. **Brad Smith (Legal / General Counsel)**: Diagnostic safe harbors, copyright cleanroom, zero-PII privacy compliance, and ADR licensing audits.
3. **Aravind Srinivas & Lily Ray (AIEO / GEO / AEO / SEO)**: Perplexity and LLM citation authority, JSON-LD schemas, semantic triples.
4. **Brian Balfour & Jim Collins (Flywheel Systems)**: Closed-loop growth. No dead-end pages.
5. **Karri Saarinen & Rauno Freiberg (Kinetic Craft UI/UX)**: Linear-grade dark mode, damped spring physics, Generative UI proof-of-concept widgets, zero design slop.
6. **Luis von Ahn, Sean Parker & Nir Eyal (Dopamine & Addictiveness)**: Sub-50ms reactive speed, uncomfortable truth discovery, boardroom-ready Slack scorecard exports, sunk-cost investment loops.
7. **Keith Rabois & Ruth Porat (CFO & Unit Economics)**: Unit economics, killing vanity metrics, high-ticket advisory on-ramps.
8. **Dan Guido & Simon Willison (Adversarial Security)**: Zero secret leaks (`verify-qa.mjs`), prompt injection defense, edge hardening.
9. **Avinash Kaushik (Behavioral Telemetry)**: Privacy-preserving behavioral tracking and diagnostic drop-off auditing.

### C. The Zero-Bloat 3-Tier Clearance Hierarchy
* **Tier 1: Active Triad (Runs on Every Turn)**: Steve Jobs (simplicity) + Paul Graham (human voice) + Deterministic QA Gate (`verify-qa.mjs` + build + edge deploy).
* **Tier 2: Domain Gatekeepers (Wakes Up Only When Territory Touched)**: Karri Saarinen (UI), Aravind Srinivas (GEO/SEO), Brian Balfour (Flywheels), Luis von Ahn (Dopamine/Engagement), Code Architect (Software Architecture & ADRs).
* **Tier 3: Deep Bench on Call (Single-Strike Audits)**: Brad Smith (Legal), Dan Guido (Security), Keith Rabois (Economics), Titans on demand. Protocol: Red Flag -> Structural Fix -> Sign-off/Veto.

---

## 8. AI-Generated Architecture Decision Records (ADRs) Standard (Chris Nevin Protocol)

To eliminate bias, preserve architectural continuity, and keep documentation in sync with fast-moving agent refactors, all structural decisions follow Chris Nevin's AI-Generated ADR framework:

1. **Mandatory 5-Heading ADR Schema**:
   - `# ADR-<4 Digit Number>: <Name>`
   - `## Context`
   - `## Decision`
   - `## Deciders`
   - `## Status` (Valid: Proposed, Accepted, Deprecated, Superseded by ADR-<4 Digit Number>)
   - `## Consequences` (Explicitly divided into `Positive:` and `Negative/Considerations:`)
2. **Derivation Modes**:
   - *Interactive Pair Mode*: Prompt for (1) Number, Name, Deciders, Status, (2) Ticket / Problem description, (3) Pull Request description / diff.
   - *Autonomous Agent Mode*: Automatically derived from task specifications, git diffs, and architecture constraints during structural refactors.
3. **Repository Location & Index**:
   - All records are stored in `docs/adr/ADR-<4-Digit-Number>-<slug>.md`.
   - The master index is maintained in `docs/adr/README.md`.
   - `code_architect` acts as lead author and custodian; `qa_auditor` verifies schema compliance during Pass 3 verification.
