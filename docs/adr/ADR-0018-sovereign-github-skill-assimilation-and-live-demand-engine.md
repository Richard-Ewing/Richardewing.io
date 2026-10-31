# ADR-0018: Sovereign GitHub Skill Assimilation, Stateful Security Ledgers, and Live Demand Telemetry Engine

## Context
Open-source agent skill repositories on GitHub (`cloudflare/security-audit-skill`, `cloudflare/skills`, `AgriciDaniel/claude-seo`, `mvanhorn/last30days-skill`, `obra/superpowers`, `anthropics/knowledge-work-plugins`, `anthropics/skills`, `trailofbits/skills`, `coreyhaines31/marketingskills`, `supabase/agent-skills`, and `garrytan/gstack`) contain proven engineering, security, and operational mechanics. At the same time, installing third-party community skills verbatim via `npx skills add` introduces severe architectural drift on `richardewing.io`:
1. Community SEO skills act as static formatting checklists while ignoring live buyer search demand, real AI crawler retrieval logs, community pain signals, and post-click Stripe conversion data. Meanwhile, our internal scripts (`monthly-pain-forward-audit.mjs` and `run-ai-discoverability-study.mjs`) relied on static hardcoded keyword arrays rather than live telemetry.
2. Generic workflow packages such as `obra/superpowers` force interactive Socratic trivia prompts before planning, violating our Founder-to-Staff Principal Architect contract, while raw community markdown files introduce em-dashes, Vercel CLI commands, and banned AI marketing buzzwords.
3. One-shot security prompts hallucinate speculative bugs and lose coverage across 40+ Next.js App Router API routes (`app/api/*`) and Cloudflare Workers V8 isolates.

## Decision
We establish a Clean-Room Skill Assimilation Architecture paired with live Model Context Protocol (MCP) telemetry pipes across four integrated subsystems:
1. **Clean-Room Supply-Chain Quarantine**: External GitHub skill repositories are never installed raw into `.agents/skills/`. Only audited mechanics stripped of Vercel assumptions, em-dashes, and AI copywriting templates are codified into Sovereign `SKILL.md` modules, enforced mechanically by `audit-agent-skills.mjs` and `verify-qa.mjs`.
2. **Live Demand, Search & Citation Intelligence Engine (`.agents/skills/demand-and-search-intelligence/SKILL.md` & `pull-demand-telemetry.mjs`)**: Unites first-party Google Search Console (`googleapis`), native `semrush_mcp` market keyword/competitor intelligence (with explicit API-unit guardrails), zero-key 30-day practitioner pain harvesting from Hacker News and Reddit (`last30days` pattern), Cloudflare GraphQL HTML/AI-bot crawl analytics, internal link-graph orphan detection, and live `stripe_stripe` MCP (`Exogram AI LLC`) checkout attribution.
3. **Stateful Hunter/Disprover Edge Security Auditor (`.agents/skills/cloudflare-edge-security-audit/SKILL.md` & `run-security-ledger-audit.mjs`)**: Adapts `cloudflare/security-audit-skill`, `cloudflare/skills` (`workers-best-practices`), `trailofbits/skills`, and `supabase/agent-skills` into a 6-phase ledger-backed auditor storing SHA-256 route coverage and verified verdicts (`confirmed`, `needs_validation`, `rejected`) in `.scratch/security-audit/`, enforcing adversarial separation between Hunter and Skeptic Disprover subagents.
4. **Engineering Harness & Executive Deal Desk Upgrades**: Grafts `obra/superpowers`' 3-Strike Systematic Debugging circuit breaker, 4-Layer Defense-in-Depth, and Two-Stage Subagent Review (`qa_auditor` Gate A Spec/Blast-Radius vs. Gate B Craft) into `spec-driven-development/SKILL.md`, and establishes `.agents/skills/executive-deal-desk/SKILL.md` combining `anthropics/knowledge-work-plugins` (`sales`, `finance`, `legal`), `anthropics/skills` (`xlsx`, `pdf`, `pptx` deliverable rules), `marketingskills` CRO diagnostics, and live `stripe_stripe` catalog data for `/schedule` pre-call dossiers and boardroom kits.

## Deciders
`@richardewing`, Steve Jobs, Paul Graham, Dan Guido, Aravind Srinivas, Keith Rabois, Code Architect, QA Auditor

## Status
Accepted

## Consequences
Positive:
- Closes the loop between on-page SEO/GEO/AEO rules and real-time search demand, practitioner complaints, AI bot crawls, and Stripe revenue across the `$29` to `$7,500+` commercial ladder.
- Eliminates one-shot security audit hallucinations via SHA-256 coverage ledgers in `.scratch/security-audit/` and adversarial Hunter/Disprover verification, immediately catching fail-open bearer checks and unauthenticated admin endpoints.
- Prevents agent retry spirals and spec drift through the 3-Strike Debugging rule and Two-Stage Subagent Review without introducing chatty Socratic prompts.
- Elevates paid digital toolkits and `/schedule` advisory preparation with institutional CFO spreadsheet/PDF standards and automated deal-desk briefs.

Negative/Considerations:
- External MCP data pipes (`semrush_mcp`, Google Search Console service account, Cloudflare GraphQL API) depend on active API unit balances or scoped tokens; scripts must implement transparent fallback ladders and never fabricate metrics when a pipe is unavailable.
- Maintaining four additional sovereign skills and two telemetry/ledger scripts slightly increases `.agents/` file count, requiring `audit-agent-skills.mjs` to enforce strict schema and zero-bloat hygiene on every commit.
