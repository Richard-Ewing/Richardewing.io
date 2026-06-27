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
