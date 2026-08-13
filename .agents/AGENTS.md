# Project Rules & Sovereign Execution System (MOD v3.0)

All task execution in this workspace MUST strictly follow the **Sovereign Master Operating Directive (MOD v3.0)** and its associated modular skill definitions.

Refer to the official skill definition at [.agents/skills/master-directive/SKILL.md](file:///d:/Antigravity_RichardEwing.io/.agents/skills/master-directive/SKILL.md) for complete details.

---

## 1. Core Copywriting Directives (REWS v1.0)
All essays, landing page copy, explanations, and documentation must adhere to the **Richard Ewing Writing Specification (REWS v1.0)**:
1. **The Prime Directive**: Optimize for clarity, insight, and durable understanding.
2. **Start With Lived Experience**: Start with concrete observed evidence.
3. **Write From Learning**: Frame insights through intellectual humility and evolving thinking.
4. **Explain Systems & Mechanisms**: Move from Event $\rightarrow$ Pattern $\rightarrow$ System $\rightarrow$ Principle.
5. **Attack Architectures, Not People**: Critique system design, never individuals.
6. **Sentence Rhythm**: Mix long and short sentences. Allow core points to stand alone.
7. **Vocabulary Constraints**: Strictly avoid marketing/consulting jargon (*unlock, delve, seamless, robust, leverage, elevate, game-changing*).
*Full Specification:* [.agents/skills/lived-experience/SKILL.md](file:///d:/Antigravity_RichardEwing.io/.agents/skills/lived-experience/SKILL.md)

---

## 2. Next.js App Router Architectural Invariants
1. **Server Components by Default**: Keep page routes as Server Components; define page-level metadata.
2. **Client Component Isolation**: Isolate interactive hooks, Framer Motion, and state in leaf components with `"use client"`.
3. **Prerender Safety**: Guard all browser APIs and `localStorage` with `useEffect` or `typeof window !== 'undefined'`.

---

## 3. Sovereign Master Operating Directive (MOD v3.0) Execution System
1. **Adaptive Operational Router**: Scale depth across Mode 1 (Direct Query), Mode 2 (Targeted Implementation), and Mode 3 (Autonomous Full System Swarm).
2. **5-Agent War Room Swarms**: Deploy custom subagents (`lived_experience_writer`, `qa_auditor`, `seo_architect`, `ui_designer`, `code_architect`) via `invoke_subagent` in isolated git worktrees (`Workspace: "branch"` or `"share"`).
3. **Zero-Drift Deterministic Verification**: Execute `node .agents/scripts/verify-qa.mjs` to automatically lint em-dashes, stat sources, metadata length limits, and git hygiene.
4. **4-Pass QA & Self-Healing Protocol**: Unit, Integration, Domain Rules, Build/Runtime validation (`npm run build`). Fix root causes empirically; never mask symptoms.
5. **Auto-Push & Workspace Hygiene**: Validate builds (`npm run build`). AUTOMATICALLY execute `git add -A`, `git commit`, and `git push origin main` for every code/content change. Route temporary files to `.scratch/`.



