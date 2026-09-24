---
name: always_on_mod_execution
description: Sovereign Master Operating Directive (MOD v4.0) Ambient Kernel. Mandates universal ambient execution across Track 1 (Code Mutations) and Track 2 (Strategic Inquiries), enforcing HWS v2.0, the 5-step asset hierarchy, encapsulated slash command workflows, zero secret keys, and the unbreakable turn-end deployment gate.
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
  `node .agents/scripts/verify-qa.mjs` (Zero Secret Keys + Zero Em-Dashes + Root Hygiene) $\longrightarrow$ `npm run build` $\longrightarrow$ `git add -A` $\longrightarrow$ `git commit -m "<type>(<scope>): <description>"` $\longrightarrow$ `git push origin main` $\longrightarrow$ `git status` (verify clean).
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
*Full Specification:* [.agents/skills/lived-experience/SKILL.md](file:///d:/Antigravity_RichardEwing.io/.agents/skills/lived-experience/SKILL.md)

---

## 4. Next.js App Router Architectural Invariants
1. **Server Components by Default**: Keep page routes as Server Components; define page-level metadata.
2. **Client Component Isolation**: Isolate interactive hooks, Framer Motion, and state in leaf components with `"use client"`.
3. **Prerender Safety**: Guard all browser APIs and `localStorage` with `useEffect` or `typeof window !== 'undefined'`.

---

## 5. Encapsulated Slash Workflows (Native Execution)
The user should never have to type slash commands. The agent encapsulates and executes their underlying workflows automatically:
- **War Room & High-Reasoning Swarm (`/boost` & `/teamwork-preview`)**: Automatically activated when addressing complex architectural questions, strategic reviews, or when the user mentions "assemble the war room". Dispatches subagents (`lived_experience_writer`, `qa_auditor`, `seo_architect`, `ui_designer`, `code_architect`) in parallel git worktrees (`Workspace: "branch"` or `"share"`).
- **Empirical Validation & Headless Testing (`/plan` & `/browser`)**: Formulate Euclidean execution plans and Karpathy Red/Green test probes in `.scratch/` before mutating complex code. Use headless browser inspection to verify UI layout and contrast when modifying visual components.
- **Autonomous Horizons & Crons (`/goal` & `/schedule`)**: For multi-step goals, loop autonomously through Audit $\rightarrow$ Refactor $\rightarrow$ Verify $\rightarrow$ Deploy until completion without stopping prematurely. Schedule background timers or crons for recurring audits.
- **Durable Learning (`/learn`)**: Persist durable user design preferences, architectural patterns, and corrections directly into `.agents/knowledge/`.

---

## 6. Sovereign Security Invariant: Absolute Prohibition of Secret Key & Credential Leakage

> [!CAUTION]
> **CRITICAL SECURITY INVARIANT (NON-NEGOTIABLE):**
> NEVER PUBLISH, PUSH, COMMIT, OR EXPOSE TO THE PUBLIC ANY SECRET KEYS, API TOKENS, OR KEYS THAT ARE NOT MEANT TO BE SHARED.

1. **Testing Never Excuses Secret Exposure**: The requirement to test, prototype, debug, benchmark, or validate code NEVER justifies placing real secret keys, API tokens, service account credentials, or private keys into committable files, test probes, documentation, or public git history.
2. **Local Gitignored Environment Only**: All actual credentials, API keys, and environment secrets must live exclusively in gitignored `.env*.local` files or local OS environment variables. They must never be checked into git.
3. **Synthetic Test Fixtures**: All tests, diagnostics, and code examples must use synthetic dummy strings (e.g. `TEST_MOCK_KEY_REDACTED_DO_NOT_USE`) or local emulators.
4. **Automated Pre-Push Defense Gate**: Every code-modifying turn must pass automated secret credential scanning in `verify-qa.mjs`. If any secret key, private token, database password, or private key pattern is detected, the pipeline immediately halts with exit code 1 and blocks deployment.
