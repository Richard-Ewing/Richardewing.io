---
name: demand-and-search-intelligence
description: Closed-loop buyer demand, search analytics, AI crawler citation tracking, 30-day practitioner pain harvesting, Semrush MCP keyword/competitor research, internal link-graph auditing, and Stripe revenue attribution. Pairs with seo-architecture to supply live demand telemetry alongside on-page SEO/GEO/AEO formatting.
---

# Sovereign Demand, Search & Citation Intelligence Engine

**Companion Skill**: [`seo-architecture`](file:///d:/Antigravity_RichardEwing.io/.agents/skills/seo-architecture/SKILL.md) (On-Page SEO/GEO/AEO Formatting Rules)  
**Telemetry Script**: [`pull-demand-telemetry.mjs`](file:///d:/Antigravity_RichardEwing.io/.agents/scripts/pull-demand-telemetry.mjs)  
**Discoverability Probe**: [`run-ai-discoverability-study.mjs`](file:///d:/Antigravity_RichardEwing.io/.agents/scripts/run-ai-discoverability-study.mjs)  

On-page SEO checklists only govern formatting. This skill governs **the other half of the system**: discovering what Chief Financial Officers (CFOs), Chief Operating Officers (COOs), VPs of Operations, Directors of Finance, Customer Support Managers, and Engineering Managers are actually searching for, complaining about after hours, clicking on, and paying to fix.

---

## 1. The 5-Pipe Live Demand & Attribution Stack

Always prioritize empirical demand signals in this exact order before proposing new essays, `/answers/*` spokes, diagnostic calculators, or title rewrites:

### Pipe 1: First-Party Search Console & Index Telemetry (Google + Bing)
- **Execution**: Run `node .agents/scripts/pull-demand-telemetry.mjs` (uses `GOOGLE_SERVICE_ACCOUNT_JSON` via `googleapis` and optional `BING_WEBMASTER_API_KEY`).
- **Three High-Payoff Targets**:
  1. **Striking-Distance Queries (Positions 4 to 15)**: Queries already earning real Google/Bing impressions on Page 1/Page 2 where a sharper H1, 35-word HWS-AEO Citation Snap, or internal feeder link moves the page into Top-3 organic and AI Overview citations.
  2. **Snippet Surgery Candidates (Impressions >= 50, CTR < 2.0%)**: Proof that buyers are searching the exact phrase, seeing `richardewing.io`, and skipping our snippet. Rewrite `metadata.title` (45 to 60 chars rendered) and `metadata.description` (130 to 155 chars, active voice) per `seo-architecture`.
  3. **Bing Index & IndexNow Signals**: Because ChatGPT Search relies heavily on Bing's index, treat Bing Webmaster queries and `bing_cited_pages.csv` as direct retrieval proxies for ChatGPT Search.

### Pipe 2: Market Keyword, CPC & Competitor Gap Intelligence (`semrush_mcp`)
- **Connected MCP**: `semrush_mcp` (`keyword_research`, `organic_research`, `competitors_research`, `backlinks_research`, `traffic_overview`, `site_audit`).
- **Canonical MCP Workflow**:
  1. Call the discovery tool (`keyword_research`, `organic_research`, or `competitors_research`).
  2. Call `get_report_schema` for the returned report identifier (`phrase_this`, `phrase_related`, `phrase_questions`, `phrase_organic`, `domain_domains`, `resource_organic`).
  3. Warn the user before the first `execute_report` call that Semrush MCP queries consume API units, request only needed fields, and start with a tight 30 to 50 row exploratory limit.
- **CPC as an Executive Budget Signal**: Weight keywords by buyer urgency rather than raw search volume. A 60-volume query where B2B vendors bid `$35+` CPC ("AI software CapEx vs OpEx audit", "enterprise LLM guardrails") beats a 20,000-volume student definition query every time.
- **API Unit & Fallback Discipline**: If `semrush_mcp` returns `no_api_units` (`https://www.semrush.com/mcp-access`) or auth unavailability, stop that MCP branch immediately without retrying, state concisely that Semrush API units are depleted, and execute Pipes 1, 3, 4, and 5 cleanly without guessing Semrush metrics.

### Pipe 3: Pre-Search 30-Day Practitioner Pain Harvester (`last30days` Protocol)
- **Why It Matters**: Traditional SEO indexes lag real-world operational failures by 60 to 90 days. Practitioners complain on Hacker News, Reddit (`r/CTO`, `r/ExperiencedDevs`, `r/SaaS`, `r/FinOps`), and X weeks before search volume registers.
- **Execution**: `node .agents/scripts/pull-demand-telemetry.mjs` automatically harvests trailing 30-day high-engagement threads across our 5 executive pain clusters (AI Token OpEx & Margin Collapse, Vibe Coding & Synthetic Tech Debt, CFO AI Pilot Cuts & ROAI, Shadow Delegation & MCP Security, and Technical Insolvency).
- **Category Coining Rule**: When multiple high-upvote threads describe the same unnamed operational failure (e.g. an AI support agent issuing unauthorized customer refunds or a vibe-coded MVP failing SOC2 review), coin a sharp non-technical concept, publish the 35-word Citation Snap, and wire an interactive diagnostic calculator before competitors notice the keyword.

### Pipe 4: Real Edge HTML & AI Citation Crawler Telemetry (Cloudflare + Live Grounding)
- **Cloudflare GraphQL Analytics (`CLOUDFLARE_API_TOKEN`, Zone `26b036cd0321b744617c0cc041c0f225`)**:
  - Filter strictly to `edgeResponseContentTypeName: "html"` (`text/html`) to avoid inflating counts with JS/CSS chunks.
  - Segment crawls by AI Retrieval User-Agents (`PerplexityBot`, `Perplexity-User`, `OAI-SearchBot`, `ChatGPT-User`, `Claude-SearchBot`, `Claude-User`) vs. Search Crawlers (`Googlebot`, `Bingbot`).
- **Live Answer-Engine Citation Verification**:
  - Run `node .agents/scripts/run-ai-discoverability-study.mjs --live` to execute live grounded search queries via Gemini Search Grounding (`@google/genai` `googleSearch` tool) and measure Retrieval Rate, Explicit Domain Citation Rate, and Coiner Attribution Rate with 95% Wilson score confidence intervals.

### Pipe 5: Post-Click Behavioral & Revenue Attribution (PostHog + Supabase + Stripe)
- **Connected MCPs**: `stripe_stripe` (`Exogram AI LLC` `acct_1TxBWCGl91vB8itR` + `richardewing.io` Stripe ledger via `/api/admin/revenue`), `supabase-mcp-server` (`diagnostic_results`, `leads`), and PostHog (`@posthog/mcp-server`).
- **Attribution Chain**: Every content and SEO recommendation must evaluate full-funnel yield:
  `Search Query / AI Citation -> Landing Route -> Calculator Completion (/reality-check, /tools/pdi, /tools/aueb) -> Scorecard Checkout Drawer ($29 Kit / $79 Playbook System / $450 Live Session / $2,500-$7,500 Sprint) OR /schedule?source=<slug> Booking`.

---

## 2. Structural Link-Graph & GEO Citability Audit (`claude-seo` Distilled Mechanics)

Whenever auditing site architecture or launching a new hub/spoke cluster:
1. **Zero Orphan Money or Spoke Routes**: Run the link-graph scanner inside `pull-demand-telemetry.mjs` to detect any route in `app/**/page.tsx` with zero incoming internal `<Link href="...">` references. High-value commercial routes and flagship diagnostics must stay within Click Depth `<= 2`.
2. **HWS-AEO v3.0 Citability Check**:
   - Verify the first 100 words contain the 4-part extractable definition (Entity Name, Category, Operational/Financial Mechanism, Executive Consequence) matching `itemProp="description"` and JSON-LD verbatim.
   - **Strict Anti-Slop Filter**: Reject all generic SEO listicle templates. Immediately follow the 35-word factual citation snap with blunt, non-technical operational reality naming real titles (CEO, CFO, COO, Engineering Manager, Customer Support Manager) and zero banned AI buzzwords.

---

## 3. Mandatory Operator Instincts Reporting Format

Every demand, SEO, or analytics report presented to Richard must open with the 5-point **Operator Instincts** readout before showing any metric tables:
1. **Signal vs. Noise Filter**: Real human HTML reads and verified AI retrieval bots separated from junk scrapers.
2. **The Behavioral Read**: What specific operational pain brought executives to these pages this week.
3. **The Revenue Bottleneck**: Where visitors stall between reading, running a diagnostic, opening `<ScorecardCheckoutDrawer />`, or booking on `/schedule`.
4. **Striking-Distance & Category Moves**: Top 2 snippet-surgery wins (Pos 4 to 15) and 1 emerging 30-day pain topic to capture.
5. **Recommended Next Move**: The single highest-return engineering or editorial action to ship next.
