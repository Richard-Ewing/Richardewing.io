# The "Product Economist" Executive Interview & Comp Guide
**Author**: Richard Ewing (VP of Product / AI Economist)  
**Target Audience**: Senior Product Managers, Group PMs, Directors, and VPs aiming for CPO / VP of Product roles paying $250K - $450K+ total compensation.  
**Standard**: Human Writing Standard (HWS v2.0 / REWS v2.0) - Commercial ownership over corporate theater.

---

## 1. The Strategic Repositioning
The market is flooded with product leaders who describe themselves as:
- *"Passionate user advocates who champion Agile principles"*
- *"Backlog managers who run sprint ceremonies and write user stories"*
- *"Design-thinking facilitators who run customer journey workshops"*

**Why this fails in 2026**:  
CEOs, private equity operating partners, and boards of directors are cutting executive bloat. They do not want another high-priced meeting facilitator. They want a **Product Economist** - an executive who understands unit economics, engineering capital allocation, gross margin preservation, and EBITDA generation.

When you position yourself as a commercial operator who runs product like a P&L, you instantly separate yourself from 99% of applicants.

---

## 2. The 12 "Before & After" Executive Resume Bullets
Transform weak, activity-based bullets into high-conviction financial results.

### Bullet 1: Feature Shipping vs Capital Allocation
- **Weak**: "Led a cross-functional squad of 8 engineers to ship an AI-powered customer assistant on time and under budget."
- **Executive**: "Allocated $420K in engineering capital to build an enterprise AI assistant, scaling from $0 to $3.2M ARR in 9 months while maintaining an 82% gross margin via semantic caching and model routing."

### Bullet 2: Agile Ceremonies vs Engineering Efficiency
- **Weak**: "Facilitated daily standups, sprint planning, and quarterly PI planning for 3 engineering squads."
- **Executive**: "Audited R&D capital allocation across 3 squads, reducing sprint cycle time by 28% and reallocating 4.2 FTEs from legacy maintenance to core revenue-generating product initiatives."

### Bullet 3: User Interviews vs Revenue Expansion
- **Weak**: "Conducted 45 qualitative customer discovery interviews to identify unmet user needs."
- **Executive**: "Identified unmonetized enterprise workflow bottlenecks across top 20 accounts, launching a metered workflow add-on that drove $1.8M in net expansion ARR (128% Net Dollar Retention)."

### Bullet 4: Tech Debt Cleanup vs EBITDA Recovery
- **Weak**: "Managed backlog refinement and prioritized technical debt tickets alongside customer bug reports."
- **Executive**: "Designed and executed a Zombie Feature sunset framework that eliminated 5 negative-margin legacy features, recovering $1.1M in annual engineering carry cost directly to EBITDA."

### Bullet 5: Cloud Costs vs Unit Economics
- **Weak**: "Worked with DevOps team to monitor AWS cloud infrastructure costs."
- **Executive**: "Authored the company's first unit-economic trace model, identifying that 8% of power users were consuming 48% of inference budget; redesigned pricing tiers to recover 420 bps of gross margin."

### Bullet 6: Product Roadmap vs Board Governance
- **Weak**: "Presented quarterly product roadmap slides to executive leadership and key stakeholders."
- **Executive**: "Partnered with CEO and CFO to present quarterly board R&D capital allocation decks, translating engineering velocity into payback periods, EBITDA covenants, and Rule of 40 performance."

---

## 3. The Top 15 Executive Interview Questions (And Word-for-Word Answers)

### Question 1: "Our engineering team says they need 3 months to refactor technical debt, but Sales wants new AI features to hit our ARR target. How do you decide?"
**The Winning Answer**:  
> "I reject the premise that technical debt and revenue features are mutually exclusive. I never approve a refactor based on developer aesthetics or complaints about 'messy code.' I require our engineering leads to build a commercial business case for technical debt.  
> We evaluate three metrics:  
> 1. What is the cloud compute carry cost of the existing system?  
> 2. How many hours per week are senior engineers spending on on-call incident triage?  
> 3. What is the payback period on the refactor?  
> If an 8-week refactor pays back in under 6 months by eliminating $200K in database costs and recovering 3 FTEs of velocity, I present it to Sales as a capacity multiplier. If it doesn't pay back, we don't do it. We allocate 65% of sprint capacity to committed ARR drivers, 25% to verified high-ROI refactoring, and 10% to bug triage."

### Question 2: "How do you calculate the gross margin of an AI feature?"
**The Winning Answer**:  
> "Most teams make the mistake of using the median user cost. I calculate AI gross margin across three distinct cohorts: P50 (Median), P90 (Power), and P99 (Whale).  
> For each cohort, the fully-loaded COGS includes:  
> 1. Input tokens (including system prompts, tool schemas, and retrieved RAG context)  
> 2. Output completion tokens  
> 3. Network overhead and automated retry multipliers on parse failures  
> 4. Vector database and embedding infrastructure  
> We stress-test this total monthly COGS against our seat price. If our P99 users consume more in token COGS than their monthly subscription fee, we have an unhedged margin trap. We solve this by implementing prompt caching, semantic routing to lightweight models, and hybrid consumption metering."

### Question 3: "Tell me about a feature you killed and how you handled the angry enterprise customers."
**The Winning Answer**:  
> "At Tyler Technologies / my previous company, we audited our product portfolio and identified an ad-hoc legacy reporting export built 5 years earlier. It had 14 active client accounts generating $35K in ARR, but required 18 hours per week of senior engineering maintenance to patch security vulnerabilities and maintain database connectors - a fully-loaded carry cost of $197K per year.  
> We made the decision to sunset it. Rather than surprising customers with an abrupt cutoff, I personally reached out to the executive sponsors at all 14 accounts. We explained that maintaining this obsolete tool slowed down our ability to ship the modern analytics they had requested. We provided a 60-day deprecation runway, built a one-click automated CSV export tool, and provided free setup assistance for a modern webhook integration.  
> Not a single account churned, and our company recovered nearly $160K in net annual cash."

### Question 4: "If our AWS or OpenAI bill grows faster than our ARR next quarter, what is your Day 1 action?"
**The Winning Answer**:  
> "Day 1 is a forensic telemetry audit. I do not ask for general cost reductions; I trace spend to tenant IDs. In 90% of SaaS companies, cloud bill spikes are driven by two things: unindexed database queries and unmetered power users running automated loops.  
> Within 48 hours, we enact three emergency controls:  
> First, implement aggressive rate limiting per tenant to stop rogue automation.  
> Second, enable prompt caching on all static system prompts and tool schemas.  
> Third, implement semantic caching with Redis so repetitive identical queries are served at $0 compute cost.  
> Once the bleeding is stopped, we restructure pricing tiers to align cost with customer value."

---

## 4. The 90-Day CPO / VP of Product Take-Home Case Study Framework
When interviewing for executive roles, boards frequently assign a take-home case study: *"Here is our product metrics and budget. Present your 90-day turnaround plan to the board."*

**Structure Your Presentation into 5 Tight Sections**:
1. **The Commercial Diagnostic** (Current ARR, Gross Margin, Cash Burn, Innovation vs Debt ratio).
2. **The Forensic Waste Audit** (Identifying the $1M-$3M trapped in zombie features and cloud bloat).
3. **The Velocity Restructure** (Reallocating engineering squads from maintenance to Tier 1 growth).
4. **The Monetization & Packaging Overhaul** (Transitioning from flat seats to Hybrid Value Metrics).
5. **The Board Scorecard** (Projected Gross Margin recovery, Payback period, and EBITDA expansion).

---

## 5. Executive Compensation & Negotiation Strategy

### Target Market Comp Bands (2026 Baseline):
- **VP of Product (Series B / C / Mid-Market SaaS)**: $220K - $280K Base | 25-35% Bonus | 0.5% - 1.2% Equity
- **Chief Product Officer (Growth / PE-Backed $20M-$100M ARR)**: $280K - $360K Base | 40-50% Bonus | 1.0% - 2.5% Equity
- **Fractional CPO / AI Economist**: $8,000 - $15,000 / month retainer (10-20 hrs/week)

### Negotiation Rules:
1. **Never negotiate on title alone**. Negotiate on **P&L scope and board access**.
2. **Tie your performance bonus to Gross Margin and EBITDA covenants**, not just vanity shipping dates. When you tie your comp to margin expansion, you speak the board's language.
3. **Secure a 6-to-12-month severance acceleration clause** tied to change of control or involuntary termination without cause.
