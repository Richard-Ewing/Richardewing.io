# Project Rules & Sovereign Execution System (MOD v3.2)

All task execution in this workspace MUST strictly follow the **Sovereign Master Operating Directive (MOD v3.2)** and its associated modular skill definitions.

Refer to the official skill definition at [.agents/skills/master-directive/SKILL.md](file:///d:/Antigravity_RichardEwing.io/.agents/skills/master-directive/SKILL.md) for complete details.

---

## 1. The Sovereign 5-Step Asset Engine Hierarchy (Academy Moat Protocol)
A large curriculum is NOT a moat on its own. To defeat commoditized courseware (Reforge, Product School, Lenny, Farnam Street, generic AI academies), every curriculum track and module MUST consume the 5-step closed-loop asset engine:
$$\text{Research} \longrightarrow \text{Concept} \longrightarrow \text{Framework} \longrightarrow \text{Diagnostic} \longrightarrow \text{Implementation}$$
The academy is the operational consumption layer of our research and proving grounds, NEVER a standalone content factory.

---

## 2. Core Copywriting Directives (Human Writing Standard HWS v2.0 / REWS v2.0)
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

## 3. Next.js App Router Architectural Invariants
1. **Server Components by Default**: Keep page routes as Server Components; define page-level metadata.
2. **Client Component Isolation**: Isolate interactive hooks, Framer Motion, and state in leaf components with `"use client"`.
3. **Prerender Safety**: Guard all browser APIs and `localStorage` with `useEffect` or `typeof window !== 'undefined'`.

---

## 4. Two-Track Operational Router & Turn-End Execution Gates

Before executing any request, dynamically classify the user prompt into one of two tracks:

### Track 1: Execution Pipeline (Code Mutations)
* **Trigger**: Any turn where files are created, modified, refactored, or deleted.
* **Mandatory Turn-End Gate (UNBREAKABLE)**:
  `node .agents/scripts/verify-qa.mjs` $\longrightarrow$ `npm run build` $\longrightarrow$ `git add -A` $\longrightarrow$ `git commit -m "..."` $\longrightarrow$ `git push origin main` $\longrightarrow$ `git status` (verify clean).
  You MUST NEVER end a code-modifying turn without running this full deployment sequence. Never ask the user to remind you.

### Track 2: Strategic & Advisory Pipeline (No Code Mutations)
* **Trigger**: Pure research, architectural critiques, conceptual models, plan reviews, or exploratory Q&A where no workspace code is touched.
* **Protocol**: Deliver deep 360° synthesis, Euclidean chain-of-thought analysis, and structured artifacts (`RequestFeedback: false`).
* **Gate Exemption**: Do NOT create empty git commits, dummy files, or trigger redundant deployment builds on pure advisory turns.

---

## 5. Google Antigravity 2.12.2 Sovereign Master Harness

1. **Cognitive Reasoning Engine**: Harness enterprise **Gemini 3.8 Flash (High Reasoning Effort)** via Application Default Credentials (ADC) for multi-hop system architecture and zero-drift reasoning.
2. **G-Stack Role Specialization**: Deploy the War Room across specialized virtual engineering roles (CEO / Product Economist, Engineering Architect, QA Lead, Security Officer, Release Engineer) inspired by Garry Tan's `gstack` discipline.
3. **Karpathy Empirical Test Invariants**: Before applying complex bug fixes or architectural refactors, construct a lightweight Red/Green test probe in `.scratch/`. Verify failure (Red), apply the structural fix, verify resolution (Green), then run the full build. Eliminate all "AI Hallucination Debt".
4. **Git Worktree Subagent Swarming**: When dispatching subagents (`invoke_subagent`), default to isolated git worktrees (`Workspace: "branch"` or `"share"`) with model tiering (`flash` for fast search/lint, `pro` or `inherit` for architecture) to prevent main-thread context bloat.
5. **Generative UI Activation**: Utilize Antigravity 2.12 Generative UI (`builtin/skills/generative_ui`) to render interactive diagnostics, calculators, and sandboxes directly within artifacts and chat surfaces.
6. **Zero-Drift Deterministic Verification**: Execute `node .agents/scripts/verify-qa.mjs` to automatically enforce zero em-dashes, stat source attribution, meta length limits, and workspace root hygiene.
7. **Production Deployment & Clean Git Hygiene**: Always verify `git status` returns clean before ending execution. Route all scratch scripts and temporary dumps to `.scratch/`.




