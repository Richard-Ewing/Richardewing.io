export type ExecutiveMatrix = {
    heading: string;
    caption: string;
    columns: string[];
    rows: string[][];
};

export const EXECUTIVE_MATRICES: Record<string, ExecutiveMatrix> = {
    'engineering-levels': {
        heading: 'Software Engineering Levels Reference Matrix (L3 to L8)',
        caption: 'Direct comparison of engineering levels, decision blast radius, compensation structure, and post-syntax verification responsibility.',
        columns: ['Level & Title', 'Blast Radius & Scope', 'Primary Output', 'Capital & P&L Ownership', 'Typical Total Comp Band (US)'],
        rows: [
            ['L3: Software Engineer I', 'Single ticket / bounded component (days to 1 week)', 'Tested PRs under explicit spec supervision', 'Execution hygiene; zero budget sign-off', '$130K - $185K'],
            ['L4: Software Engineer II', 'Feature subsystem across 1-2 sprints', 'Independent feature delivery + automated test coverage', 'Monitors service latency and API error rates', '$175K - $245K'],
            ['L5: Senior Software Engineer', 'End-to-end service or product domain (quarter)', 'System design, code review gates, agent spec contracts', 'Owns cloud + LLM token cost per service endpoint', '$230K - $340K'],
            ['L6: Staff Engineer', 'Multi-team architecture across 3-5 squads (6-12 mos)', 'Cross-team technical contracts, debt retirement, reliability floors', 'Co-owns R&D maintenance ratio (<25%) with Engineering Manager', '$330K - $490K'],
            ['L7: Principal Engineer', 'Org-wide technical strategy (1-3 years)', 'Platform invariants, build-vs-buy gates, agent runtime security', 'Direct sign-off on multi-million-dollar infra & model spend', '$460K - $720K+'],
            ['L8: Distinguished / VP Fellow', 'Company-wide moat & board technical diligence', 'Fiduciary architecture standards, M&A diligence, sovereign compute', 'Fiduciary partner to CEO, CFO, and CTO on enterprise valuation', '$680K - $1.2M+'],
        ],
    },
    'ic-vs-management-track': {
        heading: 'Individual Contributor (IC) vs Engineering Management Track Matrix',
        caption: 'Side-by-side comparison of Staff/Principal IC and Engineering Manager / Director responsibilities at equivalent compensation bands.',
        columns: ['Band', 'IC Track Title', 'Management Track Title', 'Primary Decision Authority', 'Failure Mode Audited by CFO / CTO'],
        rows: [
            ['Band 5', 'L5 Senior Engineer', 'Associate / Team Lead', 'Service architecture vs sprint sequencing', 'Shipping negative-carry debt without regression gates'],
            ['Band 6', 'L6 Staff Engineer', 'Engineering Manager (6-10 ICs)', 'Cross-squad technical contracts vs hiring, retention, and delivery cadence', 'Coordination tax eating >30% of sprint payroll'],
            ['Band 7', 'L7 Principal Engineer', 'Senior EM / Director of Engineering', 'Org-wide system boundaries vs multi-team roadmap & Section 174 allocation', 'Headcount growth outpacing Revenue Per Engineer (APER)'],
            ['Band 8', 'L8 Distinguished Engineer', 'VP of Engineering', 'Enterprise technical moat & runtime safety vs org P&L, vendor contracts, board reporting', 'Technical insolvency date arriving before ARR payback'],
        ],
    },
    'pl-ownership-for-pms': {
        heading: 'Traditional Feature PM vs P&L-Owning Product Economist Matrix',
        caption: 'How a Chief Product Officer (CPO), VP of Product, and Group PM transition from vanity output metrics to monthly P&L accountability.',
        columns: ['Operating Dimension', 'Feature-Factory PM Scorecard', 'P&L-Owning PM Scorecard', 'Executive Counterpart', 'Action Threshold'],
        rows: [
            ['Primary North Star', 'Features shipped per quarter & story velocity', 'Net Contribution Margin ($) and NRR by product line', 'CFO & CPO', 'Freeze roadmap additions below 70% gross margin'],
            ['AI Cost Visibility', 'Treats OpenAI / Anthropic tokens as free R&D overhead', 'Tracks P50 and P99 inference COGS per seat and tenant', 'Director of Finance', 'Move flat-rate seats to hybrid credit tiers if COGS >18%'],
            ['Engineering Allocation', 'Pushes 100% of capacity into new roadmap promises', 'Caps maintenance burn <25% and funds debt paydown with ROI', 'VP of Engineering', 'Trigger feature sunset when maintenance exceeds ARR'],
            ['Pricing & Packaging', 'Copies competitor seat tiers without cost modeling', 'Stress-tests $29/$49/$99 tiers against heavy-user token burn', 'CEO & CRO', 'Enforce usage caps or automated model routing'],
        ],
    },
    'product-pl-ownership': {
        heading: 'Monthly Product Line P&L Statement Schedule (SaaS + AI)',
        caption: 'Standard monthly P&L structure reviewed by the CFO, CPO, VP of Product, and Engineering Manager.',
        columns: ['P&L Line Item', 'Formula / Data Source', 'Healthy SaaS + AI Target', 'Danger Signal', 'Owner'],
        rows: [
            ['1. Net Attributed ARR', 'Beginning ARR + Expansion - Contraction - Churn', '> 110% Net Dollar Retention', 'High AI feature usage paired with flat renewal rates', 'VP of Product & CRO'],
            ['2. Direct Hosting & DB COGS', 'Cloud compute, storage, vector index, observability', '6% - 10% of ARR', 'Unindexed multi-tenant queries doubling database spend', 'Engineering Manager'],
            ['3. Variable AI Inference COGS', 'Frontier API tokens + retries + embeddings per tenant', '8% - 16% of ARR', 'Top 5% power users burning >100% of seat price', 'Group PM & AI Lead'],
            ['4. Gross Margin', '(Net ARR - Hosting COGS - AI COGS) / Net ARR', '72% - 84%', 'Gross margin compressing below 65% as usage scales', 'CFO & CPO'],
            ['5. Maintenance Payroll OpEx', 'Engineering hours on bugs, incidents, dependency upgrades', '< 25% of R&D payroll', '> 40% of sprint capacity trapped keeping legacy features alive', 'VP of Engineering'],
            ['6. Net Product Contribution', 'Gross Profit - Direct R&D, Support, and Product Ops OpEx', 'Positive & expanding YoY', 'Negative cash contribution masked by blended company P&L', 'CEO, CFO & CPO'],
        ],
    },
    'calculating-roai': {
        heading: 'Return on AI Investment (ROAI) Calculation & Payback Matrix',
        caption: 'Full-burdened ROAI formula accounting for model inference COGS, integration engineering, QA verification, and ongoing drift maintenance.',
        columns: ['Cost / Return Component', 'Calculation Formula', 'Typical B2B Benchmark', 'Common CFO Audit Blindspot'],
        rows: [
            ['Gross Economic Gain ($)', 'Verified labor hours saved x fully-loaded hourly cost + net retained/expanded ARR', '15% - 35% ticket or workflow deflection', 'Counting self-reported survey time savings instead of realized P&L delta'],
            ['Direct Inference COGS ($)', '(Input + Output + Retry tokens) x model rate + vector retrieval + gateway fees', '$1.80 - $14.50 per active user / month', 'Ignoring 2.4x agent retry loops and prompt context growth in production'],
            ['Build & Integration CapEx ($)', 'Engineering + Product Ops hours to wire auth, data pipelines, evals, and guardrails', '$45K - $180K per production workflow', 'Underestimating security, RBAC, and PII redaction plumbing by 3x'],
            ['Ongoing Verification Tax ($)', 'Human QA review queue + prompt regression fixes + model migration labor', '12% - 22% of initial build cost / quarter', 'Assuming zero human review cost on probabilistic customer-facing outputs'],
            ['Net ROAI (%)', '(Gross Economic Gain - Inference COGS - Amortized Build - Verification Tax) / Total AI Cost', '>= 150% 12-month net ROAI (< 9 mo payback)', 'Approving pilots with negative unit margin that lose more cash as adoption grows'],
        ],
    },
};
