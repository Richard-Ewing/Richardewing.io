# Project Rules & Sovereign Execution System (MOD v3.1)

All task execution in this workspace MUST strictly follow the **Sovereign Master Operating Directive (MOD v3.1)** and its associated modular skill definitions.

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

## 4. Sovereign Master Operating Directive (MOD v3.1) Execution System

> [!CRITICAL]
> **MANDATORY TURN-END EXECUTION GATE (UNBREAKABLE):**
> If ANY file in the workspace is modified or created during a turn, you are STRICTLY FORBIDDEN from ending the turn until you have executed:
> `node .agents/scripts/verify-qa.mjs` $\rightarrow$ `npm run build` $\rightarrow$ `git add -A` $\rightarrow$ `git commit -m "..."` $\rightarrow$ `git push origin main` $\rightarrow$ `git status` (verify clean).
> You MUST NEVER ask or wait for the user to prompt you to deploy code or push to git.

1. **Adaptive Operational Router**: Scale depth across Mode 1 (Direct Query), Mode 2 (Targeted Implementation), and Mode 3 (Autonomous Full System Swarm).
2. **5-Agent War Room Swarms**: Deploy custom subagents (`lived_experience_writer`, `qa_auditor`, `seo_architect`, `ui_designer`, `code_architect`) via `invoke_subagent` in isolated git worktrees (`Workspace: "branch"` or `"share"`).
3. **Zero-Drift Deterministic Verification**: Execute `node .agents/scripts/verify-qa.mjs` to automatically lint em-dashes, stat sources, metadata length limits, and git hygiene.
4. **4-Pass QA & Self-Healing Protocol**: Unit, Integration, Domain Rules, Build/Runtime validation (`npm run build`). Fix root causes empirically; never mask symptoms.
5. **Auto-Push & Workspace Hygiene**: Validate builds (`npm run build`). AUTOMATICALLY execute `git add -A`, `git commit`, and `git push origin main` for every code/content change. Route temporary files to `.scratch/`.




