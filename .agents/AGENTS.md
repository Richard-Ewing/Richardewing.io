# Project Rules & Sovereign Execution System (MOD v4.0)

All task execution in this workspace MUST strictly follow the **Sovereign Master Operating Directive (MOD v4.0)** and its associated modular skill definitions.

Refer to the official skill definition at [.agents/skills/master-directive/SKILL.md](file:///d:/Antigravity_RichardEwing.io/.agents/skills/master-directive/SKILL.md) for complete details.

---

## 1. Ambient Universal Baseline (Zero Triggers Needed)
MOD v4.0 is **ambient and unconditional**. The user NEVER needs to trigger slash commands (`/boost`, `/goal`, `/schedule`, `/browser`, `/plan`, `/grill-me`, `/teamwork-preview`, `/learn`) or explicitly prompt "use the master directives" or "assemble the war room". All high-caliber workflows, multi-agent reasoning swarms, empirical probes, and verification gates are natively encapsulated and active by default.

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
*Full Specification:* [.agents/skills/lived-experience/SKILL.md](file:///d:/Antigravity_RichardEwing.io/.agents/skills/lived-experience/SKILL.md)

---

## 4. Next.js App Router Architectural Invariants
1. **Server Components by Default**: Keep page routes as Server Components; define page-level metadata.
2. **Client Component Isolation**: Isolate interactive hooks, Framer Motion, and state in leaf components with `"use client"`.
3. **Prerender Safety**: Guard all browser APIs and `localStorage` with `useEffect` or `typeof window !== 'undefined'`.

---

## 5. Two-Track Operational Router & Turn-End Execution Gates

Before executing any request, dynamically classify the user prompt into one of two tracks:

### Track 1: Execution Pipeline (Code Mutations)
* **Trigger**: Any turn where files are created, modified, refactored, or deleted.
* **Mandatory Turn-End Gate (UNBREAKABLE)**:
  `node .agents/scripts/verify-qa.mjs` (Zero Secret Keys + Zero Em-Dashes + Root Hygiene) $\longrightarrow$ `npm run build` $\longrightarrow$ `git add -A` $\longrightarrow$ `git commit -m "..."` $\longrightarrow$ `git push origin main` $\longrightarrow$ `git status` (verify clean).
  You MUST NEVER end a code-modifying turn without running this full deployment sequence. Never ask the user to remind you. Physically enforced by the `turn-end-deploy-guard` Stop hook in `hooks.json`.

### Track 2: Strategic & Advisory Pipeline (No Code Mutations)
* **Trigger**: Pure research, architectural critiques, conceptual models, plan reviews, or exploratory Q&A where no workspace code is touched.
* **Protocol**: Deliver deep 360-degree synthesis, Euclidean chain-of-thought analysis, and structured artifacts (`RequestFeedback: false`).
* **Gate Exemption**: Do NOT create empty git commits, dummy files, or trigger redundant deployment builds on pure advisory turns.

---

## 6. Encapsulated Slash Workflows (Native Execution)
The agent natively executes the workflows of slash commands without requiring user syntax:
- **War Room Swarm (`/boost` & `/teamwork-preview`)**: Multi-agent Euclidean reasoning and worktree dispatch across `lived_experience_writer`, `qa_auditor`, `seo_architect`, `ui_designer`, and `code_architect`.
- **Empirical Validation (`/plan` & `/browser`)**: Karpathy Red/Green test probes in `.scratch/` before mutating code, and headless DOM/browser verification for UI components.
- **Autonomous Horizons & Crons (`/goal` & `/schedule`)**: Closed-loop continuous optimization and background cron tasks.
- **Durable Learning (`/learn`)**: Codifying durable user conventions and lessons into `.agents/knowledge/`.

---

## 7. Sovereign Security Invariant: Absolute Prohibition of Secret Key & Credential Leakage

> [!CAUTION]
> **CRITICAL SECURITY INVARIANT (NON-NEGOTIABLE):**
> NEVER PUBLISH, PUSH, COMMIT, OR EXPOSE TO THE PUBLIC ANY SECRET KEYS, API TOKENS, OR KEYS THAT ARE NOT MEANT TO BE SHARED.

1. **Testing Never Excuses Secret Exposure**: The requirement to test, prototype, debug, benchmark, or validate code NEVER justifies placing real secret keys, API tokens, service account credentials, or private keys into committable files, test probes, documentation, or public git history.
2. **Local Gitignored Environment Only**: All actual credentials, API keys, and environment secrets must live exclusively in gitignored `.env*.local` files or local OS environment variables. They must never be checked into git.
3. **Synthetic Test Fixtures**: All tests, diagnostics, and code examples must use synthetic dummy strings (e.g. `TEST_MOCK_KEY_REDACTED_DO_NOT_USE`) or local emulators.
4. **Automated Pre-Push Defense Gate**: Every code-modifying turn must pass automated secret credential scanning in `verify-qa.mjs`. If any secret key, private token, database password, or private key pattern is detected, the pipeline immediately halts with exit code 1 and blocks deployment.
