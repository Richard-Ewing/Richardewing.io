# Executive Diagnostic Toolkit
## Module 1: The Complete R&D Audit Checklist

Confidential framework used for technical due diligence and R&D capital efficiency audits.

### Domain 1: Engineering Velocity & Delivery ⚡
*How fast and reliably does your engineering organization deliver value?*

**1. What percentage of engineering time is spent on maintenance vs. new features?**
- **Why:** If maintenance exceeds 40%, you may be approaching Technical Insolvency.
- **Action:** Calculate Innovation Tax: maintenance hours ÷ total hours. Track monthly.
- **Scoring Thresholds:**
  - 🔴 Critical Risk: >60%
  - 🟡 Improvement Needed: 40-60%
  - 🟢 On Track: <40%

**2. What are your DORA metrics (deploy frequency, lead time, failure rate, MTTR)?**
- **Why:** DORA measures delivery speed. Pair with PDI to see if you're shipping fast toward insolvency.
- **Action:** Instrument CI/CD pipeline. Track all 4 metrics weekly.
- **Scoring Thresholds:**
  - 🔴 Critical Risk: Monthly deploys, >1wk lead time
  - 🟡 Improvement Needed: Weekly deploys, 1-7d lead time
  - 🟢 On Track: Multiple/day, <1hr lead time

**3. What is your cycle time from commit to production?**
- **Why:** Long cycle times compound delays and reduce feedback speed.
- **Action:** Measure commit-to-production time. Target: <1 hour for elite teams.
- **Scoring Thresholds:**
  - 🔴 Critical Risk: >1 week
  - 🟡 Improvement Needed: 1-7 days
  - 🟢 On Track: <1 day

**4. How often do deployments cause incidents?**
- **Why:** Change failure rate directly measures deployment quality.
- **Action:** Calculate: failed deployments ÷ total deployments.
- **Scoring Thresholds:**
  - 🔴 Critical Risk: >30%
  - 🟡 Improvement Needed: 15-30%
  - 🟢 On Track: <15%

**5. What is your average sprint completion rate?**
- **Why:** Consistently missing sprint commitments signals estimation or capacity problems.
- **Action:** Track: stories completed ÷ stories committed per sprint.
- **Scoring Thresholds:**
  - 🔴 Critical Risk: <60%
  - 🟡 Improvement Needed: 60-80%
  - 🟢 On Track: >80%

**6. Do you have feature flags for safe rollouts?**
- **Why:** Feature flags enable incremental releases, A/B testing, and instant rollback.
- **Action:** Implement feature flag system. Target: all new features behind flags.
- **Scoring Thresholds:**
  - 🔴 Critical Risk: No flags
  - 🟡 Improvement Needed: Some features
  - 🟢 On Track: All features flagged

**7. What is your code review turnaround time?**
- **Why:** Slow reviews create bottlenecks and context-switching costs.
- **Action:** Measure: time from PR open to first review. Target: <4 hours.
- **Scoring Thresholds:**
  - 🔴 Critical Risk: >24 hours
  - 🟡 Improvement Needed: 4-24 hours
  - 🟢 On Track: <4 hours

---

### Domain 2: Technical Debt & Architecture 🏗️
*What is the health of your technology capital, and where is value being destroyed?*

**1. Can you identify your 3 largest sources of technical debt and their financial impact?**
- **Why:** Most organizations cannot quantify debt in dollars. Without financial language, leadership ignores it.
- **Action:** Run PDI assessment. Assign dollar values to top debt categories.
- **Scoring Thresholds:**
  - 🔴 Critical Risk: Cannot identify
  - 🟡 Improvement Needed: Identified but not quantified
  - 🟢 On Track: Quantified in dollars

**2. What is your Technical Insolvency Date?**
- **Why:** The exact quarter when maintenance costs consume 100% of engineering capacity.
- **Action:** Plot Innovation Tax trend. Extrapolate to 100%. That's your insolvency date.
- **Scoring Thresholds:**
  - 🔴 Critical Risk: <6 months away
  - 🟡 Improvement Needed: 6-18 months
  - 🟢 On Track: >18 months or improving

**3. What percentage of your codebase has test coverage?**
- **Why:** Low coverage = high change failure rate = slow delivery = more rework costs.
- **Action:** Measure line/branch coverage. Target: >70% for critical paths.
- **Scoring Thresholds:**
  - 🔴 Critical Risk: <30%
  - 🟡 Improvement Needed: 30-70%
  - 🟢 On Track: >70%

**4. When was your last architecture review?**
- **Why:** Architecture debt is the most expensive form of debt — it requires rewrites, not refactors.
- **Action:** Establish quarterly Architecture Review Board. Document all decisions.
- **Scoring Thresholds:**
  - 🔴 Critical Risk: Never / >12 months
  - 🟡 Improvement Needed: 6-12 months ago
  - 🟢 On Track: Within last quarter

**5. How many services or modules have a single maintainer?**
- **Why:** Single points of failure. If that person leaves, the knowledge leaves with them.
- **Action:** Audit: map each service to its maintainers. Cross-train where count = 1.
- **Scoring Thresholds:**
  - 🔴 Critical Risk: >30% of services
  - 🟡 Improvement Needed: 10-30%
  - 🟢 On Track: <10%

**6. What is the age distribution of your critical dependencies?**
- **Why:** Outdated dependencies = security vulnerabilities + compatibility issues + upgrade debt.
- **Action:** Audit dependency ages. Flag anything >2 major versions behind.
- **Scoring Thresholds:**
  - 🔴 Critical Risk: >50% outdated
  - 🟡 Improvement Needed: 20-50% outdated
  - 🟢 On Track: <20% outdated

**7. Do you have automated security scanning in your CI/CD pipeline?**
- **Why:** Manual security reviews don't scale. Automated SAST/DAST catches vulnerabilities before production.
- **Action:** Integrate SAST tool. Block merges with critical vulnerabilities.
- **Scoring Thresholds:**
  - 🔴 Critical Risk: No scanning
  - 🟡 Improvement Needed: Manual only
  - 🟢 On Track: Automated in CI/CD

---

### Domain 3: AI & Emerging Technology Economics 🤖
*Are your AI investments creating or destroying value?*

**1. What is the fully-loaded cost per AI inference request?**
- **Why:** AI features often have hidden variable costs that erode gross margins.
- **Action:** Instrument per-request cost tracking: compute + tokens + storage + overhead.
- **Scoring Thresholds:**
  - 🔴 Critical Risk: Unknown
  - 🟡 Improvement Needed: Estimated
  - 🟢 On Track: Tracked per-request

**2. Do you use model routing (different models for different query types)?**
- **Why:** Using frontier models for every query costs 10-50x more than necessary.
- **Action:** Classify queries by complexity. Route 70% to smaller, cheaper models.
- **Scoring Thresholds:**
  - 🔴 Critical Risk: One model for all
  - 🟡 Improvement Needed: 2-3 models
  - 🟢 On Track: Smart routing with 3+ tiers

**3. What percentage of your AI features have positive unit economics?**
- **Why:** 40-60% of AI features launch unprofitable. Growth accelerates losses.
- **Action:** Calculate per-feature P&L. Kill or optimize negative-margin features.
- **Scoring Thresholds:**
  - 🔴 Critical Risk: Unknown / <30%
  - 🟡 Improvement Needed: 30-60%
  - 🟢 On Track: >60% profitable

**4. How much of your production code was generated by AI, and what's its defect rate?**
- **Why:** Vibe-coded applications accumulate hallucination debt — debt no one on the team fully understands.
- **Action:** Track AI-generated code percentage. Measure defect rate vs. human-written code.
- **Scoring Thresholds:**
  - 🔴 Critical Risk: >30% AI code, no quality tracking
  - 🟡 Improvement Needed: AI code tracked
  - 🟢 On Track: AI code tracked + quality monitored

**5. Do you have a model right-sizing strategy?**
- **Why:** Using a Ferrari for the mailbox. Right-sizing cuts AI costs 60-80%.
- **Action:** Benchmark: test smaller models against quality thresholds. Document findings.
- **Scoring Thresholds:**
  - 🔴 Critical Risk: No strategy
  - 🟡 Improvement Needed: Some right-sizing
  - 🟢 On Track: Systematic optimization

**6. What guardrails exist for AI output quality?**
- **Why:** Without guardrails: hallucinations, bias, and harmful outputs reach users.
- **Action:** Implement output validation, safety filters, and quality monitoring.
- **Scoring Thresholds:**
  - 🔴 Critical Risk: No guardrails
  - 🟡 Improvement Needed: Basic filters
  - 🟢 On Track: Comprehensive guardrail pipeline

---

### Domain 4: Product & Revenue Alignment 💰
*Is engineering investment aligned with revenue generation?*

**1. What is your Revenue Per Engineer (RPE), and how does it trend?**
- **Why:** Declining RPE signals engineering capital misallocation.
- **Action:** Calculate: ARR ÷ engineering headcount. Track quarterly. Use APER calculator.
- **Scoring Thresholds:**
  - 🔴 Critical Risk: <$200K or declining
  - 🟡 Improvement Needed: $200K-500K, flat
  - 🟢 On Track: >$500K and growing

**2. Can you identify which features generate revenue and which are zombie features?**
- **Why:** Most organizations maintain features that destroy value. 30-50% of features have <5% usage.
- **Action:** Instrument feature usage. Identify features with <5% MAU. Run Kill Switch Protocol.
- **Scoring Thresholds:**
  - 🔴 Critical Risk: No feature-level tracking
  - 🟡 Improvement Needed: Some tracking
  - 🟢 On Track: Full feature-level P&L

**3. Do your PMs own a P&L, or just a backlog?**
- **Why:** PMs who don't understand their P&L make uninformed capital allocation decisions every sprint.
- **Action:** Create per-product P&L. Train PMs on unit economics.
- **Scoring Thresholds:**
  - 🔴 Critical Risk: Backlog only
  - 🟡 Improvement Needed: Some financial awareness
  - 🟢 On Track: Full P&L ownership

**4. Can you calculate the gross margin of each product line?**
- **Why:** AI features introduce variable COGS. Without margin visibility, you may be scaling losses.
- **Action:** Allocate engineering + infrastructure costs per product. Calculate margins.
- **Scoring Thresholds:**
  - 🔴 Critical Risk: No margin tracking
  - 🟡 Improvement Needed: Aggregate only
  - 🟢 On Track: Per-product margins

**5. What would happen if you removed your 10 least-used features tomorrow?**
- **Why:** The Kill Switch Protocol typically recovers 20-40% of engineering capacity from zombie features.
- **Action:** List 10 lowest-usage features. Calculate maintenance cost of each. Draft removal plan.
- **Scoring Thresholds:**
  - 🔴 Critical Risk: Don't know usage
  - 🟡 Improvement Needed: Know usage, afraid to cut
  - 🟢 On Track: Regular feature pruning

**6. What is your time-to-revenue for new features?**
- **Why:** Long time-to-revenue means engineering investment isn't generating returns fast enough.
- **Action:** Track: feature release date → first revenue attribution. Target: <30 days.
- **Scoring Thresholds:**
  - 🔴 Critical Risk: >90 days or unknown
  - 🟡 Improvement Needed: 30-90 days
  - 🟢 On Track: <30 days

---

### Domain 5: Organization & People 👥
*Is your team structured for sustainable, scalable delivery?*

**1. What is your engineering attrition rate over the last 12 months?**
- **Why:** Each departure costs $150K-250K (recruiting + onboarding + lost productivity).
- **Action:** Calculate: departures ÷ average headcount × 100.
- **Scoring Thresholds:**
  - 🔴 Critical Risk: >20%
  - 🟡 Improvement Needed: 10-20%
  - 🟢 On Track: <10%

**2. What is the average tenure on your engineering team?**
- **Why:** Low tenure means constant knowledge loss and ramp-up costs.
- **Action:** Track average tenure. Flag teams with <18 month average.
- **Scoring Thresholds:**
  - 🔴 Critical Risk: <12 months avg
  - 🟡 Improvement Needed: 12-24 months
  - 🟢 On Track: >24 months

**3. Is your engineering org structured around products or projects?**
- **Why:** Project-based teams ship and move on. Product teams own outcomes.
- **Action:** Evaluate: do teams own products end-to-end, or get assigned projects?
- **Scoring Thresholds:**
  - 🔴 Critical Risk: Project-based
  - 🟡 Improvement Needed: Mixed
  - 🟢 On Track: Product-based, end-to-end ownership

**4. What is your span of control (direct reports per manager)?**
- **Why:** Below 5: manager overhead too high. Above 8: insufficient coaching.
- **Action:** Audit: count direct reports per manager. Restructure outliers.
- **Scoring Thresholds:**
  - 🔴 Critical Risk: <4 or >10
  - 🟡 Improvement Needed: 4-5 or 9-10
  - 🟢 On Track: 6-8

**5. How many key-person dependencies exist?**
- **Why:** If one person's departure would halt a project, that's a critical risk.
- **Action:** Map: for each critical system, who are the only people who understand it?
- **Scoring Thresholds:**
  - 🔴 Critical Risk: >5 single-points-of-failure
  - 🟡 Improvement Needed: 2-5
  - 🟢 On Track: 0-1

**6. Do you have a documented career ladder with clear levels?**
- **Why:** Without clear progression, top engineers leave for companies that offer it.
- **Action:** Publish engineering career ladder. Review annually.
- **Scoring Thresholds:**
  - 🔴 Critical Risk: No ladder
  - 🟡 Improvement Needed: Informal
  - 🟢 On Track: Published with clear criteria

---

### Domain 6: Strategic & Financial 📊
*Is your R&D investment being valued, reported, and optimized at the board level?*

**1. What percentage of your "R&D spend" is actually maintenance OpEx?**
- **Why:** The Innovation Tax — many companies report 50% R&D investment when 80% is actually maintenance.
- **Action:** Audit: categorize every engineering hour as innovation vs. maintenance.
- **Scoring Thresholds:**
  - 🔴 Critical Risk: >70% maintenance
  - 🟡 Improvement Needed: 40-70%
  - 🟢 On Track: <40% maintenance

**2. If a PE firm audited your engineering organization today, what would they find?**
- **Why:** Technical Due Diligence reveals hidden liabilities. Better to find them yourself.
- **Action:** Conduct an internal pre-diligence audit using this checklist + PDI tool.
- **Scoring Thresholds:**
  - 🔴 Critical Risk: Major undisclosed liabilities
  - 🟡 Improvement Needed: Known but unquantified issues
  - 🟢 On Track: Clean, documented assessment

**3. What is the accuracy-cost curve for your critical AI features?**
- **Why:** Going from 80% to 95% accuracy often costs 10x more. The Cost of Predictivity must be modeled.
- **Action:** For each AI feature: plot accuracy vs. cost. Find the diminishing returns inflection point.
- **Scoring Thresholds:**
  - 🔴 Critical Risk: Not modeled
  - 🟡 Improvement Needed: Partially modeled
  - 🟢 On Track: Fully modeled with trade-off analysis

**4. Can your engineering investment survive a 30% budget cut?**
- **Why:** Knowing your critical path vs. nice-to-have helps make tough decisions before they're forced.
- **Action:** Create a tiered investment plan: must-have (70%), should-have (20%), nice-to-have (10%).
- **Scoring Thresholds:**
  - 🔴 Critical Risk: No prioritization framework
  - 🟡 Improvement Needed: Some prioritization
  - 🟢 On Track: Tiered investment plan documented

**5. Do you report engineering health metrics to the board?**
- **Why:** Boards that see engineering metrics make better investment decisions.
- **Action:** Create quarterly technology capital report: PDI, APER, DORA, Innovation Tax.
- **Scoring Thresholds:**
  - 🔴 Critical Risk: No engineering metrics to board
  - 🟡 Improvement Needed: Ad-hoc reporting
  - 🟢 On Track: Quarterly technology capital report

**6. What is the total cost of ownership for your technology stack?**
- **Why:** Most companies underestimate TCO by 40-60%. Hidden costs: maintenance, integration, training, migration.
- **Action:** Map TCO for each major platform: license + integration + maintenance + opportunity cost.
- **Scoring Thresholds:**
  - 🔴 Critical Risk: Unknown
  - 🟡 Improvement Needed: Partially calculated
  - 🟢 On Track: Fully mapped and reviewed annually

---

