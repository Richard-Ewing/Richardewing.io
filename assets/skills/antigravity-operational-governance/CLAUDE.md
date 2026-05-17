# Antigravity Operational Governance Skill

> Runtime Layer: ALL (Identity + Skill + Tool + Environment)
> Compatible Agents: Claude Code, Cursor, Windsurf, Cline, Roo Code, Codex, Copilot, Gemini Code Assist, Amazon Q Developer, Devin, OpenHands, SWE-Agent, Antigravity

## Purpose

Meta-governance skill that enforces deterministic operational discipline across all agent sessions operating on RichardEwing.io. Codifies the exact execution patterns, verification loops, and deployment pipelines that prevent drift, rework, and wasted cycles.

This skill was built from 12+ production sessions of observed failure patterns, correction loops, and operational debt. Every rule exists because it was violated.

---

## LAYER 1: IDENTITY GOVERNANCE — Who You Are

### Mission
You are operating on an institutional-grade governance infrastructure platform. Not a blog. Not a portfolio. An enterprise runtime governance provider.

### Principles
1. Every change ships complete. No stubs. No placeholders. No "TODO" markers.
2. Every page earns its existence through SEO, LLM retrieval, or conversion value.
3. Dark backgrounds are forbidden for content sections. All text must have WCAG AA contrast.
4. Copy must use governance language, not marketing language. "Runtime containment" not "AI tips."
5. Consistency across all 15 systems is non-negotiable. Partial parity destroys trust.

### Authority Boundaries
- NEVER delete existing pages without explicit human approval
- NEVER remove Stripe checkout links
- NEVER change the 4-Layer Runtime Architecture model
- NEVER use placeholder images or lorem ipsum
- ALWAYS preserve existing comments and docstrings unrelated to current changes

### Communication Style
- Concise. Lead with what changed, not what you're about to do.
- Quantify everything: file counts, page counts, error counts.
- End every turn with a verification summary table.

---

## LAYER 2: SKILL GOVERNANCE — What You Do

### Skill 2A: The Build-Verify-Ship Pipeline

EVERY change follows this exact sequence. No exceptions.

```
1. Make the code change
2. Run: npm run build
3. Verify: 0 errors, count total pages
4. Run: git add . && git commit -m "description" && git push
5. Run: node ping-all.js (IndexNow)
6. Verify: "Mass Bulk Submission perfectly accepted"
```

If the build fails, fix the error BEFORE committing. Never push broken code.

### Skill 2B: The SEO Registration Pipeline

EVERY new page requires ALL THREE registrations:

```
1. sitemap.ts — Add URL with appropriate priority (0.85-0.95)
2. llms.txt/route.ts — Add descriptive entry with full URL
3. IndexNow ping — Run node ping-all.js after deploy
```

Missing any one of these three means the page doesn't exist to search engines or LLMs.

### Skill 2C: The Triple-Check Protocol

Before reporting work complete, verify:

```
CHECK 1: File completeness — every required file exists (use Test-Path audits)
CHECK 2: Build passes — 0 errors, page count matches expectations
CHECK 3: Data integrity — no duplicates, no stubs, no templates
```

Run PowerShell verification scripts, not manual inspection.

### Skill 2D: The Asset Parity Protocol

Every governance skill in /assets/skills/[slug]/ MUST contain:

```
├── CLAUDE.md              ← Skill manifest
├── GETTING-STARTED.md     ← Installation guide
├── README.md              ← Operational manual (UNIQUE, not templated)
├── policy.yaml            ← Governance rules and thresholds
├── middleware.ts           ← TypeScript runtime interception engine
├── architecture.mmd       ← Mermaid containment flow diagram
├── financial-model.csv    ← Cost/impact ROI metrics
└── tools/                 ← Minimum 4 executable bash scripts
    ├── tool-1.sh
    ├── tool-2.sh
    ├── tool-3.sh
    └── tool-4.sh
```

If ANY file is missing from ANY skill, the system is incomplete. Audit with:

```powershell
Get-ChildItem -Path assets/skills -Directory | ForEach-Object {
  $n=$_.Name
  "CLAUDE","README","GETTING-STARTED" | ForEach-Object {
    if (!(Test-Path "$n/$_.md")) { Write-Output "MISSING: $n/$_.md" }
  }
}
```

### Skill 2E: The Contrast Enforcement Protocol

BEFORE shipping any UI change:

```
RULE: No text on backgrounds darker than #2A2A2A
RULE: All body text must be #1A1A1A to #4A4A4A on light backgrounds
RULE: All dark sections (bg-[#1A1A1A]) need text-white or text-zinc-100
RULE: Semantic sections (Exogram bridge, CTAs) use light backgrounds
```

Violations of this rule have caused rework in 3+ sessions. Check EVERY section.

### Skill 2F: The Content Expansion Protocol

When adding content (failures, skills, case studies):

```
RULE: Content must cover ALL systems, not a subset
RULE: If 6 of 15 are done, the remaining 9 must be added immediately
RULE: Each entry must be unique — different symptoms, different quotes, different signals
RULE: No two entries should share identical whatBreaks/economicDamage arrays
```

### Skill 2G: The Ecosystem Pain Signal Research Protocol

BEFORE writing any new skill, failure definition, case study, or FAQ:

```
STEP 1: Search Reddit for real user pain language
  - r/ClaudeAI, r/ClaudeCode, r/cursor, r/CodingWithAI, r/LocalLLaMA
  - Search terms: the failure name + "frustrated", "broken", "keeps", "why does"
  - Extract: exact phrasing, upvote counts, thread frequency

STEP 2: Search X/Twitter for developer complaints
  - Search: "Claude Code" + failure term
  - Search: "Cursor" + failure term  
  - Extract: viral complaints, quote tweets, pain intensity

STEP 3: Search Hacker News for technical discussions
  - Search: site:news.ycombinator.com + failure term
  - Extract: technical depth, architectural critiques, economic arguments

STEP 4: Search GitHub Issues for bug reports
  - Search: relevant repos (anthropics/claude-code, getcursor/cursor)
  - Extract: issue titles, reproduction steps, workarounds

STEP 5: Inject into content
  - ecosystemPainQuotes[] in skills.ts — use REAL quotes, not fabricated
  - README.md incident chronologies — reference real community events
  - FAQ answers — address the exact questions users actually ask
```

NEVER fabricate pain quotes. Every quote must trace to a real community discussion.

### Skill 2H: The SEO Keyword Saturation Protocol

EVERY content page must target specific high-intent search queries:

```
STEP 1: Identify primary keyword cluster
  - What would someone Google when experiencing this failure?
  - Example: "Claude Code getting worse", "Cursor infinite loop", "AI agent cost control"

STEP 2: Inject into page metadata
  - title tag — primary keyword + brand
  - meta description — pain language + solution hint
  - h1 — exact match or close variant of primary keyword
  - keywords[] array — 10-25 long-tail variants

STEP 3: Inject into page body
  - FAQ section with schema-ready Q&A (use <details> elements)
  - Each FAQ targets a specific search query
  - Minimum 4 FAQs per skill page, 3 per comparison page

STEP 4: Inject into structured data surfaces
  - sitemap.ts (priority 0.85-0.95)
  - llms.txt/route.ts (descriptive entry)
  - Internal cross-links (hub-and-spoke)

STEP 5: Verify with IndexNow
  - Run: node ping-all.js
  - Confirm: "Mass Bulk Submission perfectly accepted"
```

Target keywords for each of the 15 systems are already stored in `skills.ts → searchKeywords[]`.

### Skill 2I: The LLM Retrieval Optimization Protocol

The site must be retrievable by AI models (ChatGPT, Claude, Perplexity, Gemini):

```
SURFACE 1: llms.txt/route.ts
  - Every major page listed with descriptive text
  - Format: "- [Title](URL): One-sentence description with key terms"
  - Update EVERY time a new page is created

SURFACE 2: Semantic keyword density
  - Each page must use its governance terms 3-5x naturally
  - Terms: "runtime governance", "deterministic execution", "bounded cognition"
  - The 4-layer model terms must appear on every skill page

SURFACE 3: FAQ rich snippets
  - Every skill page has FAQ questions targeting "how do I..." queries
  - These are the #1 retrieval surface for AI assistants
  - Must use real user language, not marketing copy

SURFACE 4: Comparison pages
  - "Claude Code vs Cursor" style pages capture competitive queries
  - These are extremely high-intent and frequently asked to AI assistants
  - Must be factual, not promotional

SURFACE 5: Canonical definitions
  - Own the definition of terms: "context rot", "retry inflation", "governance theater"
  - If we define it first and best, LLMs will cite us
```

### Skill 2J: The Content Saturation Verification Protocol

AFTER any content update, verify saturation across ALL surfaces:

```
CHECK 1: Data parity
  - FAILURES[] count = 15
  - SKILLS[] count = 15
  - Every SKILL has: ecosystemPainQuotes (3+), faqs (2+), searchKeywords (4+)

CHECK 2: Page parity
  - Every skill has a /skills/[slug] page
  - Every skill has a Stripe checkout link
  - /compare/ai-coding-agents exists and covers all major agents
  - /case-studies/runtime-incidents exists with 5+ incidents
  - /runtime-architecture exists with the 4-layer doctrine

CHECK 3: SEO parity
  - Every page is in sitemap.ts
  - Every major page is in llms.txt
  - IndexNow has been pinged after the last deploy

CHECK 4: Ecosystem parity
  - Every skill README references real Reddit/HN/X pain signals
  - No two skills share identical pain quotes
  - Pain quotes use real developer language, not corporate sanitization
```

### Skill 2K: The Competitive Intelligence Protocol

When building comparison or positioning content:

```
STEP 1: Research current agent capabilities
  - What does Claude Code actually ship? (permissions, CLAUDE.md, hooks)
  - What does Cursor actually ship? (.cursorrules, file limits)
  - What does Windsurf actually ship? (.windsurfrules, cascade)
  - What does Cline/Roo ship? (approval modes, MCP access)

STEP 2: Identify governance gaps
  - What DOESN'T each agent have? (the comparison table)
  - Context rot prevention? NO for all.
  - Financial circuit breakers? NO for all.
  - Repository drift detection? NO for all.

STEP 3: Position without attacking
  - Factual comparison, not FUD
  - "No major agent ships with X" — verifiable claim
  - Link to the governance module that fills each gap

STEP 4: Target high-intent queries
  - "Claude Code vs Cursor"
  - "best AI coding agent 2026"
  - "Claude Code getting worse"
  - "Cursor keeps breaking my code"
```

### Skill 2L: The Hub-and-Spoke Linking Protocol

Every new page must be wired into the internal link graph:

```
HUB PAGES (link TO these from every new page):
  - /skills (marketplace)
  - /runtime-architecture (doctrine)
  - /skills/getting-started (onboarding)

SPOKE PAGES (link FROM these to new pages):
  - Related skill pages (cross-link between skills in same runtime layer)
  - /compare/ai-coding-agents (reference specific skills)
  - /case-studies/runtime-incidents (link to the skill that prevents each incident)

DATA SURFACES (update with every new page):
  - sitemap.ts
  - llms.txt/route.ts
  - skills.ts (if adding skills/failures)

NEVER create orphan pages. Every page must have 2+ inbound links.
```

---

## LAYER 3: TOOL GOVERNANCE — What You Can Touch

### Authorized Commands

```bash
# Build
npm run build

# Deploy
git add . && git commit -m "<descriptive message>" && git push

# Index
node ping-all.js

# Bundle
node scripts/build-asset-bundles.js

# Audit
Get-ChildItem -Path assets/skills -Directory | ForEach-Object { ... }
```

### Authorized File Paths

```
WRITE-ALLOWED:
  app/**/*.tsx          — Pages and components
  components/**/*.tsx   — Shared components
  lib/content/*.ts      — Content data files
  assets/skills/**/*    — Skill bundles
  public/downloads/*    — ZIP bundles
  app/sitemap.ts        — Sitemap registration
  app/llms.txt/route.ts — LLM discovery file

WRITE-RESTRICTED (require human approval):
  next.config.ts        — Build configuration
  package.json          — Dependencies
  .env*                 — Environment variables
  middleware.ts         — Global middleware (root)
  
NEVER-TOUCH:
  .git/**               — Version control internals
  node_modules/**       — Dependencies
  .vercel/**            — Deployment config
```

### Authorized Research Sources

```
REDDIT (read-only via search_web):
  r/ClaudeAI              — 1.9M weekly visitors, primary pain signal source
  r/ClaudeCode            — Claude Code specific issues
  r/cursor                — Cursor-specific complaints
  r/CodingWithAI          — Cross-agent discussions
  r/LocalLLaMA            — Alternative model comparisons

X/TWITTER (read-only via search_web):
  "Claude Code" + failure term
  "Cursor" + failure term
  "AI coding" + failure term

HACKER NEWS (read-only via search_web):
  site:news.ycombinator.com + governance terms

GITHUB (read-only via search_web):
  anthropics/claude-code issues
  getcursor/cursor issues

INDUSTRY SOURCES (read-only):
  Anthropic blog/docs     — Official Claude Code capabilities
  VS Code marketplace     — Extension install counts
  Stack Overflow survey   — Developer tool adoption data
```

### Authorized External Requests

```
ALLOWED:
  IndexNow API (indexnow.org)    — Search engine indexing
  Vercel deployment (automatic)   — Via git push
  Web search (read-only)          — For ecosystem research
  URL content reading (read-only) — For competitive intelligence

BLOCKED:
  Direct API calls to Stripe     — Use existing checkout URLs only
  Database mutations              — Read-only unless explicitly approved
  Posting to any platform         — Read-only research, never post
```

---

## LAYER 4: ENVIRONMENT GOVERNANCE — The Terrain

### Repository Structure

```
d:\Antigravity_RichardEwing.io\
├── app/                    ← Next.js 16 pages and routes
│   ├── skills/             ← Marketplace pages
│   ├── runtime-architecture/ ← Doctrine page
│   ├── compare/            ← Comparison pages
│   ├── case-studies/       ← Incident reports
│   ├── sitemap.ts          ← Global sitemap
│   └── llms.txt/route.ts   ← LLM retrieval surface
├── assets/skills/          ← 15+ governance skill bundles
├── components/skills/      ← Marketplace UI components
├── lib/content/skills.ts   ← Skill + Failure data (source of truth)
├── public/downloads/       ← ZIP bundles for purchase
├── scripts/                ← Build and generation scripts
└── ping-all.js             ← IndexNow bulk ping utility
```

### Critical Data Files

```
lib/content/skills.ts
  - FAILURES[] — 15 operational failure definitions
  - SKILLS[]   — 15 governance skill products
  - Each skill has: slug, title, category, price, checkoutUrl, runtimeLayer,
    whatBreaks, ecosystemPainQuotes, whatSystemInstalls, exogramMapping, faqs

app/sitemap.ts
  - Must contain ALL deployed pages
  - Priority: 0.95 for /skills, 0.9 for individual skills, 0.85 for support pages

app/llms.txt/route.ts
  - Must list ALL major pages with descriptive text
  - Format: "- [Title](URL): Description"
```

### Financial Constraints

```
Build budget: $0 (static generation, no runtime costs)
Stripe links: 15 active checkout URLs (DO NOT modify)
API costs: IndexNow is free
Hosting: Vercel (free tier, auto-deploy on push)
```

### Session State Awareness

```
Current page count: 852+
Current skill count: 15
Current failure count: 15
Current ZIP bundle count: 17
Current IndexNow URL count: 1,616+
```

### SEO & Retrieval Infrastructure

```
Google Search Console: Active (monitor Crawled - currently not indexed)
Bing Webmaster Tools: Active (IndexNow integration)
IndexNow script: ping-all.js (reads live sitemap, bulk submits)
llms.txt: app/llms.txt/route.ts (LLM retrieval surface)
Sitemap: app/sitemap.ts (1,616+ URLs)
Canonical tags: Set on every page via metadata.alternates.canonical
Open Graph: Set on every page via metadata.openGraph
FAQ schema: <details> elements on every skill page
Comparison pages: /compare/ai-coding-agents
Getting started: /skills/getting-started
Case studies: /case-studies/runtime-incidents
```

### Ecosystem Research Cache

```
Key validated findings (use these, don't re-research):
  - r/ClaudeAI: 1.9M weekly visitors
  - Claude Code VS Code installs: 29M (30-day avg)
  - Developer AI tool adoption: 84-95%
  - Trust gap: Only 29% trust AI output (down from 40%)
  - Claude Code revenue run-rate: $2.5B annualized
  - Users report $100-$1,100 single-session token losses
  - Context rot affects virtually all sessions > 60 min
  - Retry inflation is the #1 complained-about failure
  - "System prompts aren't enough" — consensus across all communities
  - No major agent ships runtime governance infrastructure
```

---

## Trigger Conditions

This skill activates on ANY of:

- Agent begins modifying RichardEwing.io codebase
- Agent creates a new page or component
- Agent modifies skills.ts data
- Agent updates sitemap or llms.txt
- Agent touches any file in assets/skills/
- Agent runs npm run build
- Agent is asked to research or add content
- Agent is asked to improve SEO or retrieval
- Agent is asked to create comparison or competitive content
- Agent is asked to add pain signals or ecosystem research

## Escalation Rules

```
HALT if: Build produces errors → fix before commit
HALT if: New page lacks sitemap + llms.txt entries → register before push
HALT if: Skill directory missing any required file → complete before shipping
HALT if: Dark background has unreadable text → fix contrast before push
HALT if: Content covers < 100% of systems → expand to full parity
HALT if: Pain quotes are fabricated → research real community language first
HALT if: FAQ doesn't target a real search query → use actual search terms
HALT if: New content has 0 internal links → add hub-and-spoke links
ASK if: Modifying next.config.ts, package.json, or .env files
ASK if: Deleting any page or route
ASK if: Changing Stripe checkout URLs
ASK if: Adding a new governance system beyond the current 15
```

## Installation

Copy this entire directory into your project:

```bash
cp -r ./antigravity-operational-governance/ .claude/skills/antigravity-operational-governance/
```

Then add to your root CLAUDE.md:

```markdown
## Governance Skills
Load and follow: .claude/skills/antigravity-operational-governance/CLAUDE.md
Load policy: .claude/skills/antigravity-operational-governance/policy.yaml
```

## Directory Structure

```
antigravity-operational-governance/
├── CLAUDE.md              ← This file (master skill manifest)
├── GETTING-STARTED.md     ← Installation guide
├── README.md              ← Full operational manual
├── policy.yaml            ← Governance rules and thresholds
├── middleware.ts           ← Runtime interception engine
├── architecture.mmd       ← 4-layer containment flow diagram
├── financial-model.csv    ← Operational ROI metrics
└── tools/
    ├── full-audit.sh              ← Audit all skills for file completeness
    ├── build-verify-ship.sh       ← Complete deployment pipeline
    ├── seo-registration.sh        ← Register new page in sitemap + llms.txt
    ├── contrast-check.sh          ← Scan for dark background contrast violations
    ├── ecosystem-research.sh      ← Research pain signals for a failure term
    └── content-saturation-check.sh ← Verify saturation across all surfaces
```

## Runtime Architecture

This skill operates across ALL FOUR layers of the 4-Layer Agent Runtime Architecture:

- **Identity Layer** — Govern cognition (mission, principles, authority)
- **Skill Layer** — Govern procedures (build, verify, ship, audit)
- **Tool Layer** — Govern actuation (authorized commands, file paths)
- **Environment Layer** — Govern semantic terrain (repo structure, data files, constraints)

Learn more: https://richardewing.io/runtime-architecture
