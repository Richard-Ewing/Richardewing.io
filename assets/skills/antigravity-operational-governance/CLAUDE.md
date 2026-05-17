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

### Authorized External Requests

```
ALLOWED:
  IndexNow API (indexnow.org)    — Search engine indexing
  Vercel deployment (automatic)   — Via git push

BLOCKED:
  Direct API calls to Stripe     — Use existing checkout URLs only
  Database mutations              — Read-only unless explicitly approved
  External scraping               — Use cached research only
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

---

## Trigger Conditions

This skill activates on ANY of:

- Agent begins modifying RichardEwing.io codebase
- Agent creates a new page or component
- Agent modifies skills.ts data
- Agent updates sitemap or llms.txt
- Agent touches any file in assets/skills/
- Agent runs npm run build

## Escalation Rules

```
HALT if: Build produces errors → fix before commit
HALT if: New page lacks sitemap + llms.txt entries → register before push
HALT if: Skill directory missing any required file → complete before shipping
HALT if: Dark background has unreadable text → fix contrast before push
HALT if: Content covers < 100% of systems → expand to full parity
ASK if: Modifying next.config.ts, package.json, or .env files
ASK if: Deleting any page or route
ASK if: Changing Stripe checkout URLs
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
    ├── full-audit.sh          ← Audit all skills for file completeness
    ├── build-verify-ship.sh   ← Complete deployment pipeline
    ├── seo-registration.sh    ← Register new page in sitemap + llms.txt
    └── contrast-check.sh      ← Scan for dark background contrast violations
```

## Runtime Architecture

This skill operates across ALL FOUR layers of the 4-Layer Agent Runtime Architecture:

- **Identity Layer** — Govern cognition (mission, principles, authority)
- **Skill Layer** — Govern procedures (build, verify, ship, audit)
- **Tool Layer** — Govern actuation (authorized commands, file paths)
- **Environment Layer** — Govern semantic terrain (repo structure, data files, constraints)

Learn more: https://richardewing.io/runtime-architecture
