import fs from 'fs';
import path from 'path';
import XLSX from 'xlsx';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const archiver = require('archiver');

const TARGET_DIR = path.resolve('public/downloads/Product_and_AI_Economist_Operating_Kit');
if (!fs.existsSync(TARGET_DIR)) {
    fs.mkdirSync(TARGET_DIR, { recursive: true });
}

console.log('Generating Instrument 1: AI Feature Pricing & Margin Stress-Tester...');

// 1. GENERATE MODEL 1: AI Pricing & Margin Stress-Tester (XLSX + CSV)
const wb1 = XLSX.utils.book_new();

const stressTesterData = [
    ['THE AI FEATURE PRICING & MARGIN STRESS-TESTER', '', '', '', '', '', '', ''],
    ['Author: Richard Ewing (VP of Product / AI Economist)', '', '', '', 'Version: 2026.1', '', 'License: Single Executive User', ''],
    ['Purpose: Model token consumption, agentic multiplier, and gross margin collapse across P50, P90, and P99 customer tiers.', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['SECTION A: MODEL & TOKEN BASELINE COSTS (Per 1 Million Tokens)', '', '', '', '', '', '', ''],
    ['Model Architecture', 'Provider', 'Input ($ / 1M)', 'Output ($ / 1M)', 'Cached Input ($ / 1M)', 'Embedding ($ / 1M)', 'Target Latency (s)', 'Notes'],
    ['Claude 3.5 Sonnet', 'Anthropic', 3.00, 15.00, 0.30, 0.10, 1.8, 'Standard frontier reasoning'],
    ['Claude 3.5 Haiku', 'Anthropic', 0.80, 4.00, 0.08, 0.10, 0.6, 'High-velocity small model routing'],
    ['GPT-4o', 'OpenAI', 2.50, 10.00, 1.25, 0.02, 1.4, 'Flagship multimodal'],
    ['GPT-4o mini', 'OpenAI', 0.15, 0.60, 0.075, 0.02, 0.4, 'Commodity classification & extraction'],
    ['Gemini 1.5 Flash', 'Google', 0.075, 0.30, 0.01875, 0.02, 0.3, 'Lowest cost bulk ingestion'],
    ['DeepSeek R1 (API)', 'DeepSeek / Edge', 0.55, 2.19, 0.14, 0.02, 3.2, 'Cost-arbitrage reasoning'],
    ['', '', '', '', '', '', '', ''],
    ['SECTION B: FEATURE WORKLOAD ASSUMPTIONS (Active Feature: Enterprise AI Copilot)', '', '', '', '', '', '', ''],
    ['Parameter', 'Unit', 'Assumed Value', 'Formula / Rationale', '', '', '', ''],
    ['System Prompt + Instructions', 'Tokens / Request', 1800, 'Core agent instructions, tools schema, context', '', '', '', ''],
    ['User Message (Average)', 'Tokens / Request', 350, 'User input prompt length', '', '', '', ''],
    ['RAG Context Chunks Retrieved', 'Tokens / Request', 3200, '4 retrieved knowledge chunks @ 800 tokens each', '', '', '', ''],
    ['Agentic Tool-Calling Iterations', 'Rounds / Query', 1.6, 'Average tool calls per query (P50: 1.0, P90: 2.5, P99: 4.8)', '', '', '', ''],
    ['Total Input Tokens / Query', 'Tokens / Request', 5350, 'Sum of system, user, and retrieved RAG context', '', '', '', ''],
    ['Model Completion Output', 'Tokens / Query', 650, 'Generated answer and formatted JSON citations', '', '', '', ''],
    ['Streaming & Network Overhead', '% Multiplier', '10%', 'Protocol serialization and websocket keep-alive', '', '', '', ''],
    ['Retry & Hallucination Fail Rate', '% Multiplier', '12%', 'Automated retries on parse failure or timeout', '', '', '', ''],
    ['Effective Input Tokens / Query', 'Tokens', 6623, '= (5350 * 1.10) * 1.12', '', '', '', ''],
    ['Effective Output Tokens / Query', 'Tokens', 804, '= (650 * 1.10) * 1.12', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['SECTION C: COGS PER QUERY BY MODEL (Effective Tokens)', '', '', '', '', '', '', ''],
    ['Model Evaluated', 'Input Cost / Query ($)', 'Output Cost / Query ($)', 'Total Cost / Query ($)', 'Queries / $1.00 COGS', '', '', ''],
    ['Claude 3.5 Sonnet', 0.01987, 0.01206, 0.03193, 31.3, '', '', ''],
    ['Claude 3.5 Haiku', 0.00530, 0.00322, 0.00852, 117.4, '', '', ''],
    ['GPT-4o', 0.01656, 0.00804, 0.02460, 40.7, '', '', ''],
    ['GPT-4o mini', 0.00099, 0.00048, 0.00148, 677.2, '', '', ''],
    ['Gemini 1.5 Flash', 0.00050, 0.00024, 0.00074, 1357.7, '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['SECTION D: USER USAGE ARCHETYPES (Monthly Query Volume)', '', '', '', '', '', '', ''],
    ['Cohort Archetype', 'Queries / Month', '% of Customer Base', 'Behavior Description', '', '', '', ''],
    ['P50 (Median User)', 40, '60.0%', 'Uses copilot 1-2 times per working day for basic summaries', '', '', '', ''],
    ['P90 (Active Power User)', 220, '30.0%', 'Daily workflow integration: analysis, drafting, research', '', '', '', ''],
    ['P99 (Extreme Whale / Script)', 1150, '10.0%', 'Continuous power usage, automated scripts, massive context', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['SECTION E: MONTHLY COGS PER ACTIVE SEAT (Evaluated on Claude 3.5 Sonnet @ $0.0319/query)', '', '', '', '', '', '', ''],
    ['Cohort', 'Queries / Mo', 'Base Token COGS', 'Vector / Infra ($)', 'Total Monthly COGS', '', '', ''],
    ['P50 (Median)', 40, 1.28, 0.25, 1.53, '', '', ''],
    ['P90 (Power)', 220, 7.03, 0.75, 7.78, '', '', ''],
    ['P99 (Whale)', 1150, 36.72, 2.50, 39.22, '', '', ''],
    ['Blended Average Seat COGS', 179, 5.72, 0.63, 6.35, '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['SECTION F: PRICING TIER STRESS-TEST & GROSS MARGIN SENSITIVITY', '', '', '', '', '', '', ''],
    ['Pricing Tier Model', 'Monthly Price', 'P50 COGS', 'P50 Gross Margin %', 'P90 COGS', 'P90 Gross Margin %', 'P99 COGS', 'P99 Gross Margin %'],
    ['Flat Seat Tier 1', 20.00, 1.53, '92.4%', 7.78, '61.1%', 39.22, '-96.1% (COLLAPSE)'],
    ['Flat Seat Tier 2', 49.00, 1.53, '96.9%', 7.78, '84.1%', 39.22, '19.9% (MARGIN TRAP)'],
    ['Flat Seat Tier 3', 99.00, 1.53, '98.5%', 7.78, '92.1%', 39.22, '60.4% (BELOW SAAS 80%)'],
    ['Hybrid: $29 Seat + 50 Credits + $0.05/extra', 29.00, 1.53, '94.7%', 7.78, '79.3%', 39.22, '53.3% (PROTECTED)'],
    ['Outcome: $0.25 / Accepted Work Output', 'Variable', 1.53, '75.5%', 7.78, '78.2%', 39.22, '81.4% (SCALES SAFELY)'],
    ['', '', '', '', '', '', '', ''],
    ['SECTION G: MARGIN COLLAPSE THRESHOLDS (Queries Before Margin Drops Below Target)', '', '', '', '', '', '', ''],
    ['Seat Price Point', '70% Gross Margin Cap', '50% Gross Margin Cap', '0% Breakeven Cap (Cash Loss)', '', '', '', ''],
    ['$20 / Month Seat', 188, 313, 626, '', '', '', ''],
    ['$49 / Month Seat', 460, 767, 1534, '', '', '', ''],
    ['$99 / Month Seat', 930, 1550, 3101, '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['SECTION H: ARCHITECTURAL REMEDIATION LEVERS (Margin Recovery)', '', '', '', '', '', '', ''],
    ['Remediation Tactic', 'Implementation Effort', 'COGS Reduction %', 'Expected Margin Recovery ($ / seat)', '', '', '', ''],
    ['Prompt Caching (Static System & Tools)', '2 Days', '42.0%', '+$2.67 / seat / month', '', '', '', ''],
    ['Small-Model Semantic Router (Haiku / 4o-mini)', '1 Week', '35.0%', '+$2.22 / seat / month', '', '', '', ''],
    ['Semantic Response Cache (Redis / Embeddings)', '4 Days', '22.0%', '+$1.40 / seat / month', '', '', '', ''],
    ['Context Window Sliding Truncation', '1 Day', '15.0%', '+$0.95 / seat / month', '', '', '', ''],
    ['Combined Optimization Stack', '2 Weeks Total', '68.5%', '+$4.35 / seat / month (Transforms P99 from -96% to +48%)', '', '', '']
];

const ws1 = XLSX.utils.aoa_to_sheet(stressTesterData);
XLSX.utils.book_append_sheet(wb1, ws1, 'AI Pricing Stress Tester');
XLSX.writeFile(wb1, path.join(TARGET_DIR, '01_AI_Feature_Pricing_and_Margin_Stress_Tester.xlsx'));

// Also write CSV version
const csvContent1 = stressTesterData.map(row => row.map(cell => {
    const str = String(cell ?? '');
    return str.includes(',') || str.includes('"') || str.includes('\n') ? `"${str.replace(/"/g, '""')}"` : str;
}).join(',')).join('\n');
fs.writeFileSync(path.join(TARGET_DIR, '01_AI_Feature_Pricing_and_Margin_Stress_Tester.csv'), csvContent1, 'utf8');

console.log('Generating Instrument 2: Zombie Feature Kill-List & Capacity Matrix...');

// 2. GENERATE MODEL 2: Zombie Feature Kill-List & Capacity Matrix (XLSX + CSV)
const wb2 = XLSX.utils.book_new();

const zombieData = [
    ['ZOMBIE FEATURE KILL-LIST & R&D CAPITAL REALLOCATION MATRIX', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['Author: Richard Ewing (VP of Product / AI Economist)', '', '', '', '', '', '', '', 'Scale Provenance: Tyler Technologies ($0-$25M ARR)', '', '', '', '', '', '', ''],
    ['Audit Principle: Every line of code not paying rent traps engineering velocity and destroys gross margin.', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    [
        'Feature ID',
        'Feature Name',
        'Module / Domain',
        'Launch Year',
        'Monthly Active Users (MAU)',
        '% of User Base',
        'Attributed ARR ($)',
        '% of Total ARR',
        'Contractual Churn Risk',
        'Weekly Dev Hours (Maint/On-Call)',
        'Fully-Loaded Dev Cost ($/yr @ $185/hr)',
        'Cloud & Storage Carry ($/yr)',
        'Total Annual Carry Cost ($/yr)',
        'Net Profit Contribution ($)',
        'Zombie Score (1-100)',
        'Strategic Verdict',
        'Reallocated Dev FTEs',
        'Deprecation Timeline'
    ],
    ['FEAT-101', 'Legacy XML/EDI Custom Exporter', 'Integrations', 2019, 14, '0.3%', 35000, '0.2%', 'High (1 legacy client)', 18, 173160, 24000, 197160, -162160, 96, 'KILL / SUNSET', 0.45, '60 Days'],
    ['FEAT-102', 'Ad-hoc Flash/Silverlight Report Generator', 'Analytics', 2018, 3, '0.1%', 0, '0.0%', 'Zero', 12, 115440, 18000, 133440, -133440, 99, 'KILL / SUNSET', 0.30, '30 Days'],
    ['FEAT-103', 'Social Media Auto-Poster V1', 'Marketing', 2021, 48, '1.1%', 18000, '0.1%', 'Low', 10, 96200, 12000, 108200, -90200, 92, 'KILL / SUNSET', 0.25, '45 Days'],
    ['FEAT-104', 'Custom CSS White-Label Theming Engine', 'Core Platform', 2020, 29, '0.7%', 85000, '0.6%', 'Med (Contract SOW)', 24, 230880, 8000, 238880, -153880, 88, 'ARCHIVE & FREEZE', 0.60, 'Immediate Freeze'],
    ['FEAT-105', 'Automated Fax Gateway Relay', 'Compliance', 2017, 8, '0.2%', 42000, '0.3%', 'High (Government RFP)', 8, 76960, 36000, 112960, -70960, 84, 'MONETIZE (Paid Add-On)', 0.20, 'Transition to $1.5K/mo Addon'],
    ['FEAT-106', 'Unused Real-Time Collaborative Canvas', 'Workspace', 2023, 72, '1.6%', 15000, '0.1%', 'Low', 35, 336700, 48000, 384700, -369700, 95, 'KILL / SUNSET', 0.88, '60 Days'],
    ['FEAT-107', 'Custom Webhook Relay V1 (Deprecated Auth)', 'API', 2019, 110, '2.5%', 120000, '0.8%', 'Med', 16, 153920, 15000, 168920, -48920, 78, 'MERGE / REFACTOR INTO V2', 0.40, '90 Days'],
    ['FEAT-108', 'Interactive Gantt Chart Visualizer', 'Projects', 2021, 195, '4.4%', 210000, '1.4%', 'Med', 22, 211640, 14000, 225640, -15640, 62, 'MERGE / REFACTOR', 0.55, 'Keep Core / Strip Edges'],
    ['FEAT-109', 'Legacy Elasticsearch On-Prem Cluster', 'Search', 2020, 450, '10.2%', 650000, '4.3%', 'High', 42, 404040, 185000, 589040, 60960, 71, 'REFACTOR (Migrate to Managed)', 1.05, '120 Days'],
    ['FEAT-110', 'AI Summarization Copilot (Uncapped)', 'GenAI', 2024, 1840, '41.8%', 3200000, '21.3%', 'Critical', 50, 481000, 620000, 1101000, 2099000, 45, 'PROTECT & OPTIMIZE (Apply Kit 1)', 1.25, 'Continuous Active Focus'],
    ['FEAT-111', 'Single Sign-On SAML/Okta Core', 'Security', 2020, 3400, '77.3%', 8500000, '56.7%', 'Critical', 14, 134680, 22000, 156680, 8343320, 8, 'PROTECT & GROW', 0.35, 'Core Asset'],
    ['FEAT-112', 'Automated PDF Invoice OCR Ingestor', 'Finance', 2022, 820, '18.6%', 1450000, '9.7%', 'High', 20, 192400, 45000, 237400, 1212600, 28, 'PROTECT & GROW', 0.50, 'Core Asset'],
    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['AUDIT SUMMARY & CAPACITY RECOVERY SUMMARY', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['Metric', 'Current State', 'After Zombie Kill Plan', 'Net Financial Gain', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['Total Engineering Hours on Maintenance / Week', 281, 168, '-113 Hours / Week Freed', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['Annual Carry Cost of Audited Features ($)', 3647120, 2296720, '+$1,350,400 Cash Saved / Year', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['Engineering FTEs Trapped in Negative Margin Debt', 7.03, 1.45, '5.58 Full-Time Engineers Reallocated to High-Growth AI', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['Immediate Net Margin Recovery ($)', 0, 0, '+$1.35M to EBITDA in Year 1', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
];

const ws2 = XLSX.utils.aoa_to_sheet(zombieData);
XLSX.utils.book_append_sheet(wb2, ws2, 'Zombie Feature Kill List');
XLSX.writeFile(wb2, path.join(TARGET_DIR, '02_Zombie_Feature_Kill_List_and_Capacity_Matrix.xlsx'));

const csvContent2 = zombieData.map(row => row.map(cell => {
    const str = String(cell ?? '');
    return str.includes(',') || str.includes('"') || str.includes('\n') ? `"${str.replace(/"/g, '""')}"` : str;
}).join(',')).join('\n');
fs.writeFileSync(path.join(TARGET_DIR, '02_Zombie_Feature_Kill_List_and_Capacity_Matrix.csv'), csvContent2, 'utf8');

console.log('Generating Instrument 3: 12-Slide CFO & Board Defense Blueprint...');

// 3. GENERATE INSTRUMENT 3: 12-Slide CFO Blueprint (Markdown)
const blueprint3 = `# The 12-Slide CFO & Board Defense Deck Blueprint
**Author**: Richard Ewing (VP of Product / AI Economist)  
**Provenance**: Used across executive reviews, board meetings, and PE diligence while scaling $0 to $25M ARR.  
**Standard**: Human Writing Standard (HWS v2.0 / REWS v2.0) - Zero Consulting Fluff.

---

## Executive Presentation Objective
Most product leaders fail in board meetings because they present **sprint velocity, story points, and release burn-downs**.  
CFOs and PE board directors do not care about story points. They care about:
1. **Gross Margin preservation** (Are new features diluting our 80% SaaS gross margin?).
2. **Capital Efficiency** (Where did the $8M R&D budget go, and how much ARR did it generate?).
3. **Payback Period** (When will the engineering investment turn cash-flow positive?).
4. **Technical Insolvency Risk** (How much engineering time is trapped servicing dead code?).

This blueprint gives you the slide-by-slide layout, financial tables, presenter talking tracks, and word-for-word CFO objection counters.

---

## Slide 1: The Commercial Reality (Executive Summary)
### Visual Layout
- 4 Key Metric Callout Tiles across the top:
  - **Ending ARR**: $24.8M (+38% YoY)
  - **Blended Gross Margin**: 74.2% (Target: 80.0% | Variance: -5.8% due to AI token COGS)
  - **R&D Capital Allocated**: $6.4M (25.8% of Revenue)
  - **Rule of 40 Score**: 46.2 (Net Margin 8.2% + Growth 38%)
- Central Chart: ARR vs R&D Spend Trajectory (Trailing 8 Quarters).

### Presenter Talking Script
> "Good morning. In Q3, product delivery generated $6.8M in new booked ARR, maintaining our 38% annual growth rate. However, our blended gross margin fell 580 basis points to 74.2%. Today, I am walking you through the exact operational driver of that margin compression: unmetered AI inference consumption. I will present our completed remediation plan to recover 420 basis points within 60 days without impacting customer retention."

### CFO Anticipated Trap
- *CFO Question*: "Why didn't we catch the 580 bps margin hit before closing the books?"
- *Your Counter*: "Because standard cloud accounting pools LLM API tokens under general AWS/Azure infrastructure. We completed a unit-level trace audit that isolates token COGS by tenant. 8% of power users drove 48% of the cost. Here is how we isolate it permanently."

---

## Slide 2: R&D Capital Allocation Forensic Bridge
### Visual Layout
- Waterfall Chart: Where Did Every Dollar of Engineering Capacity Go?
  - New ARR-Generating Innovation: 38% ($2.43M)
  - Core Platform Performance & Scale: 22% ($1.41M)
  - Technical Debt & Bug Remediation: 26% ($1.66M)
  - Zombie Feature Maintenance (<2% adoption): 14% ($0.90M)

### Presenter Talking Script
> "When the board asks why shipping velocity feels slower, this chart is the answer. Last quarter, 40% of our engineering payroll was spent maintaining legacy systems and servicing features used by fewer than 2% of our tenants. That is $2.56M annually in engineering capacity trapped in negative-margin maintenance. We are executing an active sunset sequence to recover $1.35M of that capacity and redeploy it into our Tier 1 AI revenue drivers."

---

## Slide 3: The True Unit Economics of Our AI Features
### Visual Layout
- Three Side-by-Side Cards: P50 (Median) vs P90 (Power) vs P99 (Whale).
  - P50: 40 queries/mo -> $1.53 COGS -> 92.4% Gross Margin
  - P90: 220 queries/mo -> $7.78 COGS -> 74.1% Gross Margin
  - P99: 1,150 queries/mo -> $39.22 COGS -> -96.1% Gross Margin (Cash Loss!)

### Presenter Talking Script
> "Our flat-rate $20/month AI copilot add-on is wildly profitable on median users. But our top 10% power users generate over 1,000 queries per month. Under our current flat-rate contract, every P99 customer consumes $39.22 in direct model inference. We are losing $19.22 every month on our heaviest users. We have designed a Hybrid Seat + Credit tier that caps free inference at 250 queries and charges $0.05 per incremental query, protecting our 78% margin floor."

---

## Slide 4: Customer Cohort Margin Distribution
### Visual Layout
- Lorenz Curve / Scatter Plot: Revenue vs Cost to Serve per Customer.
- Red Highlight Box: Top 15 Unprofitable Enterprise Accounts.

### Presenter Talking Script
> "Here are our bottom 15 enterprise accounts by gross margin. In aggregate, they represent $840K in ARR, but consume $1.12M in custom engineering carry and unmetered token calls. We are not firing these customers. We are renegotiating their renewal contracts onto metered enterprise tiers. If they refuse, our churn model shows we actually expand company EBITDA by $280K if they leave."

---

## Slide 5: The Zombie Feature Audit (The $5M Maintenance Trap)
### Visual Layout
- The Zombie Matrix Scorecard (From Instrument 02):
  - 6 Features slated for Sunset (Reallocating 5.58 FTEs / $1.35M in payroll).
  - Customer impact: 0.3% of active tenants affected.

### Presenter Talking Script
> "Here is our deprecation roadmap for the next 90 days. We have audited every product module against our Zombie Index. We identified 6 features launched between 2017 and 2021 that generate less than $50K in ARR combined, but require 113 engineering hours per week in maintenance. We are executing a 60-day respectful deprecation sequence. This reallocates 5.6 full-time engineers back to core product development without hiring a single new headcount."

---

## Slide 6: The Refactoring ROI Business Case (Translating Tech Debt into EBITDA)
### Visual Layout
- Financial Model of the Proposed 6-Week Database & Search Refactor:
  - Capital Investment: 3 Engineers for 6 Weeks ($83,250 CapEx under ASC 350-40)
  - Annual Cloud Compute Savings: $214,000 / year (Elasticsearch cluster decommission)
  - Incident Reduction: -42% in P1 on-call pages (saving 16 hours/week of senior engineer triage)
  - Net Payback Period: 4.7 Months!
  - 3-Year EBITDA Impact: +$558,750

### Presenter Talking Script
> "We are not asking for 'time to clean up ugly code.' We are asking to make an $83,000 capital investment that pays back in under 5 months and delivers $214,000 in permanent annual cloud compute savings directly to EBITDA. This project has a 160% internal rate of return."

---

## Slide 7: AI Infrastructure & Model Arbitrage
### Visual Layout
- Architecture Flow Diagram:
  - User Query -> Semantic Cache (22% hit rate, $0 COGS) -> Intent Router (60% to Haiku/Flash @ $0.0008, 40% to Sonnet @ $0.031) -> Prompt Caching (42% discount).

### Presenter Talking Script
> "Rather than piping every request directly to expensive frontier models, we implemented a 3-layer economic control gateway. By caching repetitive queries and routing simple extractions to lightweight models, we dropped our blended cost per inference by 68%. This single engineering intervention restored 340 basis points of gross margin in 14 days."

---

## Slide 8: The 90-Day R&D Velocity Shift
### Visual Layout
- Horizontal Stacked Bar: Trailing Quarter (38% Innovation / 62% Debt & Maintenance) vs Next Quarter Target (65% Innovation / 35% Maintenance).

### Presenter Talking Script
> "By combining our Zombie Feature sunset with our cloud infrastructure refactoring, we are shifting our engineering velocity mix from 38% innovation to 65% innovation. We do not need to expand our engineering headcount budget by $1.5M next quarter. We are funding our 2026 AI roadmap entirely through internal capacity recovery."

---

## Slide 9: Monetization Evolution: Hybrid Seat + Value Metric
### Visual Layout
- Pricing Packaging Grid:
  - Core Seat ($49/mo)
  - Professional AI Seat ($99/mo with 250 included workflow units)
  - Enterprise Metered ($199/mo + $0.05 per unit overage)

### Presenter Talking Script
> "Starting next month, we are transitioning all new customer acquisitions to our hybrid value-metric structure. Customers get generous base allocations, but heavy enterprise automation is metered. This eliminates our gross margin collapse risk and creates an automated expansion flywheel that grows ARR alongside customer usage."

---

## Slide 10: Headcount & Compute Capital Request
### Visual Layout
- Clean Financial Table:
  - Category (Headcount vs Cloud Compute vs Tooling)
  - Requested Allocation ($)
  - Capitalized vs Expensed (ASC 350-40 alignment)
  - Expected ARR Output ($)
  - Breakeven Timeline

### Presenter Talking Script
> "Our capital request for next half is $1.2M. $850K qualifies for capitalization under ASC 350-40 as internal-use software development. We forecast this investment will deliver $3.4M in incremental Net New ARR by Q4, representing a 2.8x ARR return on capital invested."

---

## Slide 11: Leading Operational Scorecard
### Visual Layout
- 4 Scorecard Metrics tracked weekly:
  - Blended Gross Margin (Weekly Floor: 78%)
  - Feature Adoption Velocity (% of tenants adopting within 30 days)
  - R&D Dollar Efficiency Ratio (New ARR / Total R&D Spend)
  - Mean Time to First Dollar (Sales cycle + Onboarding latency)

---

## Slide 12: Board Resolution & Governance Covenants
### Visual Layout
- 3 Formal Resolutions for Board Vote:
  1. Authorization to execute Zombie Feature Sunset Plan (FEAT-101 through FEAT-106).
  2. Approval of Hybrid Metered Pricing structure for all renewals over $50K ARR.
  3. Establishment of 75% Gross Margin Covenant for all new AI product releases.

---

## The CFO Objection Cheat Sheet (Word-for-Word Counters)
1. **"Can't we just freeze hiring instead of refactoring?"**  
   *Counter*: "Freezing hiring while leaving 40% of our capacity trapped in technical debt guarantees our shipping velocity stalls completely within 6 months. Refactoring gives us the output of 5 additional senior engineers without adding a single dollar to payroll."
2. **"Won't customers leave if we sunset their legacy export feature?"**  
   *Counter*: "We analyzed the accounts using that feature. It represents 14 tenants and $35K in ARR, against $197K in annual engineering maintenance. We are offering them a native CSV webhook alternative. Even if every single one churned, company EBITDA improves by $162,000."
`;

fs.writeFileSync(path.join(TARGET_DIR, '03_12_Slide_CFO_and_Board_Defense_Blueprint.md'), blueprint3, 'utf8');

console.log('Generating Instrument 4: First-30-Days Product P&L Turnaround Runbook...');

// 4. GENERATE INSTRUMENT 4: 30-Day Turnaround Runbook (Markdown)
const runbook4 = `# The First-30-Days Product P&L Turnaround Runbook
**Author**: Richard Ewing (VP of Product / AI Economist)  
**Target Audience**: Incoming CPO, VP of Product, Head of Product, or Founder taking over an underperforming product organization.  
**Standard**: Human Writing Standard (HWS v2.0 / REWS v2.0) - Battle-tested operational reality.

---

## Phase 1: Days 1 to 7 - The Forensic Financial Autopsy

### Day 1: Cloud & Model Bill Forensics
Do not look at Jira tickets. Look at the money.
- Obtain read-only access to AWS Cost Explorer, GCP Billing, Azure Cost Management, and OpenAI/Anthropic/Cohere admin dashboards.
- Break down cloud infrastructure into 4 buckets:
  1. Persistent Compute (EC2, EKS, Cloud Run)
  2. Database & Storage Carry (RDS, BigQuery, S3, Redis)
  3. Third-Party Model Inference (OpenAI, Anthropic)
  4. Observability & SaaS Tooling (Datadog, New Relic, LaunchDarkly, Segment)
- **Immediate Diagnostic Check**: What percentage of your total monthly cloud bill is unallocated or tagged as "shared/staging"? If >25%, flag immediate governance breakdown.

### Day 2: Jira / Linear Commit-to-Feature Reconciliation
- Export the last 6 months of merged pull requests and closed epics.
- Match engineering hours against product modules.
- **The Metric**: Calculate the Innovation-to-Maintenance Ratio.  
  Formula: \`Innovation % = (Hours on New ARR Features) / (Total Engineering Hours)\`.  
  If this number is below 40%, your team is operating in survival mode.

### Day 3: Customer Support Ticket Cost Mapping
- Export the last 90 days of Zendesk / Intercom / Jira Service Management tickets.
- Categorize by product feature.
- Calculate **Support Burden Cost**: \`(Tickets per Feature) * ($35 average fully-loaded support cost)\`.
- Identify the "Toxic Five": The 5 features generating 60% of customer rage and support tickets.

### Day 4: Revenue & Contract SOW Forensic Review
- Meet with Director of Revenue Operations / VP Sales.
- Identify every customer contract containing custom SLA guarantees, custom feature promises, or unmetered API access.
- List all accounts where ARR is lower than direct infrastructure cost to serve.

### Day 5: Lead Architect & Principal Engineer Alignment
- 1-on-1 interviews with your top 3 system architects.
- Ask one question: *"If you had a magic wand and could delete 20% of our codebase by midnight with zero customer complaints, which directories would you delete?"*
- Write down their answers. These are your prime Zombie Feature candidates.

### Days 6-7: Weekend Synthesis - The Baseline Flash Report
- Compile your findings into the **Baseline Product P&L Flash Report** (Template below).
- Deliver to the CEO and CFO before Monday 9:00 AM.

---

## Phase 2: Days 8 to 14 - Stakeholder & Customer Reality Check

### Day 8: Sales Leadership Reality Audit
- Ask the VP of Sales:
  1. Which 3 features actually close enterprise deals?
  2. Which features on our marketing website do customers never use after onboarding?
  3. What is the single biggest reason deals stall in security review?

### Day 9: Customer Success & Churn Autopsy
- Review the last 10 churned customer exit interviews.
- Disregard polite answers ("budget cuts"). Look for operational failure:
  - Did the product feel too complex?
  - Was onboarding too slow?
  - Did performance degrade under heavy usage?

### Day 10: The Top 20 Customer Usage Audit
- Run SQL queries on active tenant event tables.
- Cross-reference with billing data.
- Identify the **P99 Whales**: Customers consuming 10x the median system resources.

### Day 11: Vendor & Model Rate Negotiation
- Contact your account reps at OpenAI, Anthropic, AWS, or GCP.
- Request volume commit pricing tiers.
- Enable prompt caching across all static system prompts (immediate 30-50% savings).

### Day 12-14: Draft the Zombie Feature Kill-List
- Populate Instrument 02 (The Zombie Feature Matrix).
- Score every feature launched more than 18 months ago.
- Calculate the total engineering capacity trapped in maintenance.

---

## Phase 3: Days 15 to 21 - Emergency Margin Stopgaps & Sunsetting

### Day 15: Implement the 3 AI Cost Emergency Brakes
1. **Prompt Truncation**: Cap chat history sent to the model to the last 6 turns (eliminates 40% of context inflation).
2. **Rate Limiting**: Enforce a hard ceiling of 60 requests/minute per tenant to prevent looping automation scripts.
3. **Model Fallback**: Route basic classification and extraction tasks from frontier models (Sonnet/GPT-4o) to lightweight models (Haiku/4o-mini).

### Day 16: Announce the First Deprecation Sequence
- Select the top 2 features with <1% adoption and zero contractual SLA obligations.
- Send the **Customer Deprecation Notice** (Template below) giving 45 days notice.
- Provide a simple native export or alternative workaround.

### Day 17-18: The Roadmap Pruning Session
- Cut the product backlog by 50%.
- Delete every backlog ticket older than 90 days that has not been touched. (If it was truly critical, someone would have complained).

### Day 19-21: Reallocate Engineering Squads
- Disband feature maintenance triage rotations.
- Create two dedicated squads:
  1. **Core Growth & AI Innovation Squad** (65% of capacity)
  2. **Platform Efficiency & Foundation Squad** (35% of capacity)

---

## Phase 4: Days 22 to 30 - The 90-Day Operating Plan & Board Review

### Day 22-25: Build the 12-Slide Board Deck
- Use Instrument 03 (The CFO & Board Defense Blueprint).
- Plug in your audited numbers from Weeks 1-3.
- Rehearse the talking tracks with the CFO before the board meeting.

### Day 26-28: Align the Executive Team
- Walk the CEO, COO, and VP Sales through the presentation.
- Secure explicit agreement on the deprecation timeline and gross margin covenants.

### Day 29: Deliver the Board Presentation
- Present the 90-day turnaround plan.
- Secure board approval for the R&D capital reallocation.

### Day 30: Celebrate & Institutionalize
- Hold an all-hands product & engineering meeting.
- Show the engineers exactly how their work saved money, recovered velocity, and expanded company gross margin.

---

## Included Execution Templates

### Template A: The Weekly CEO/CFO 1-Page Product P&L Flash Report
\`\`\`markdown
# Weekly Product P&L Flash Report - Week ending [Date]
**To**: CEO, CFO  
**From**: VP of Product / CPO

## 1. Topline Financial Health
- Monthly AI & Cloud COGS: $42,150 (Down 14% WoW from $49,000)
- Blended Gross Margin: 77.4% (Target: 78.0% | +180 bps improvement WoW)
- Unallocated Cloud Spend: $1,200 (Down from $8,400)

## 2. Engineering Capital Allocation Mix
- Growth & New ARR Delivery: 58% (Target: 65%)
- Platform Scale & Refactoring: 24%
- Legacy Zombie Maintenance: 18% (Down from 38% at Day 1)

## 3. Margin & Operational Interventions Executed
- Shipped prompt caching on main copilot: -$3,800/mo token savings.
- Dispatched 45-day sunset notice for FEAT-102 (Ad-hoc report builder).
- Renegotiated Anthropic commit tier: Saved $1,200/mo on input tokens.

## 4. Red Flags & Executive Decisions Needed
- Enterprise Account [Client Name] exceeded 4,000 queries this week on a $49 flat seat.
  Action: Scheduling account review with VP Sales to transition to metered enterprise add-on.
\`\`\`

### Template B: High-Empathy Customer Deprecation Notice
\`\`\`text
Subject: Important update regarding [Feature Name] in [Product Name]

Hi [First Name],

Over the past year, we have been investing heavily in rebuilding [Product Name]'s core architecture to give your team faster page loads, 99.99% reliability, and powerful new AI workflows.

As part of this focus, we will be officially retiring [Feature Name] on [Date - 45 days away].

Why we are making this change:
Less than 1% of our customer community actively uses this tool, while maintaining it takes significant engineering focus away from the features your team uses every single day.

What this means for you:
Starting [Date], [Feature Name] will no longer appear in your navigation bar. 
If your team needs to export this historical data, you can download a full CSV archive in one click right here: [Direct Export Link].

For ongoing workflows, we recommend using [Alternative Native Feature / Zapier Webhook], which is faster, fully supported, and continuously updated.

We know changes to existing tools can be disruptive, and our team is here to help your workflow transition smoothly. If you have any questions or need custom assistance, reply directly to this email or book 15 minutes with our product team here: [Calendar Link].

Thank you for partnering with us as we build a faster, stronger platform for your business.

Warmly,
[Your Name]
VP of Product, [Company Name]
\`\`\`
`;

fs.writeFileSync(path.join(TARGET_DIR, '04_First_30_Days_Product_PnL_Turnaround_Runbook.md'), runbook4, 'utf8');

console.log('Generating Instrument 5: Product Economist Executive Comp Playbook...');

// 5. GENERATE INSTRUMENT 5: Executive Comp Playbook (Markdown)
const comp5 = `# The "Product Economist" Executive Interview & Comp Guide
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
`;

fs.writeFileSync(path.join(TARGET_DIR, '05_Product_Economist_Executive_Comp_Playbook.md'), comp5, 'utf8');

import { execSync } from 'child_process';

console.log('Packaging all assets into Product_and_AI_Economist_Operating_Kit.zip...');

// Remove bonusDir if it exists so we keep the package lean and focused
const bonusDir = path.join(TARGET_DIR, 'bonus_whitepapers');
if (fs.existsSync(bonusDir)) {
    fs.rmSync(bonusDir, { recursive: true, force: true });
}

const zipPath = path.resolve('public/downloads/Product_and_AI_Economist_Operating_Kit.zip');
if (fs.existsSync(zipPath)) {
    fs.unlinkSync(zipPath);
}

execSync(`powershell -Command "Compress-Archive -Path '${TARGET_DIR}\\*' -DestinationPath '${zipPath}' -Force"`);

console.log('Successfully created lightweight ZIP at:', zipPath);

