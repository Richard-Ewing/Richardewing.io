# Project Rules

All essays, landing page copy, explanations, and documentation in this workspace must be written in accordance with the **Richard Ewing Writing Specification (REWS) Version 1.0**.

Refer to the official skill definition at [.agents/skills/lived-experience/SKILL.md](file:///d:/Antigravity_RichardEwing.io/.agents/skills/lived-experience/SKILL.md) for full details.

---

## 1. Core Copywriting Directives for AI Agents
1. **The Prime Directive**: Optimize for clarity, insight, and durable understanding.
2. **Start With Lived Experience**: Start with concrete observed evidence. Experience is the starting point for investigation, not the final proof.
3. **Write From Learning (Intellectual Humility)**: Frame insights through evolving thinking rather than absolute certainty.
4. **Explain Systems and Mechanisms**: Focus on structural analysis rather than isolated events. Show *why* things occur.
5. **Attack Architectures, Not People**: Critique system design and execution models, never individuals.
6. **Sentence Rhythm**: Mix long and short sentences. Allow core points to stand alone as short, declarative statements.
7. **Vocabulary Constraints**: Strictly avoid marketing/consulting jargon (such as *unlock, delve, seamless, robust, leverage, elevate, game-changing*).

---

## 2. Next.js App Router Architectural Invariants
1. **Page Files**: Keep page routes as Server Components. Define metadata at the page level.
2. **Client Isolation**: Isolate interactive features (hooks, animations, storage) in `"use client"` sub-components and import them into Server pages.
3. **Prerender Safety**: Guard all `localStorage` reads or browser API references with `useEffect` or `typeof window !== 'undefined'` checks to prevent build-time dehydration errors.

---

## 3. Sovereign Master Operating Directive (MOD v2.0) & Execution System
All task execution in this workspace MUST follow the **Sovereign Master Operating Directive (MOD v2.0)**:
Refer to the official skill definition at [.agents/skills/master-directive/SKILL.md](file:///d:/Antigravity_RichardEwing.io/.agents/skills/master-directive/SKILL.md).

1. **Adaptive Operational Router**: Dynamically scale depth across Mode 1 (Direct Query), Mode 2 (Targeted Refinement), and Mode 3 (Autonomous Full System "Boil the Ocean").
2. **360° Panoramic System Context**: Evaluate adjacent code, full dependency graphs, and downstream impacts before writing output.
3. **Domain Synthesis Engines**: Dynamically activate specialized quality engines (REWS v1.0, Next.js Architecture, UI/UX Polish, SEO & Growth, Strategic Artifacts).
4. **War Room Research Swarms**: Deploy concurrent subagent swarms (`invoke_subagent`) in isolated git worktrees (`branch` mode) to audit gaps and remediate before feature construction.
5. **4-Pass QA & Self-Healing Protocol**: Execute 4-tier closed-loop QA (Unit, Integration, Domain Rules, Build/Runtime). Fix root causes empirically; never mask symptoms.
6. **Live Production Validation & Hygiene**: Validate live deployments (`npm run build`, live pings) and maintain zero root clutter by routing temporary outputs to `.scratch/`.


