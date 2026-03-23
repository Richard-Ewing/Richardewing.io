// Auto-generation helpers for glossary term rich content
// Every term gets metrics, maturity models, comparisons, quizzes, and diagrams automatically based on category

export function autoKeyMetrics(category: string, title: string): { label: string; value: string; description: string }[] {
    const metrics: Record<string, { label: string; value: string; description: string }[]> = {
        'Technical Debt & Code Quality': [
            { label: 'Avg. Debt Ratio', value: '23-42%', description: 'Percentage of engineering time consumed by maintenance vs. innovation' },
            { label: 'Remediation ROI', value: '3-5x', description: 'Typical return on every $1 invested in debt reduction' },
            { label: 'Velocity Recovery', value: '+35%', description: 'Average velocity improvement after systematic debt remediation' },
        ],
        'AI & Machine Learning': [
            { label: 'AI COGS Impact', value: '15-40%', description: 'AI inference costs as percentage of total COGS for AI-first products' },
            { label: 'Optimization Potential', value: '60-80%', description: 'Typical cost reduction achievable through model routing and caching' },
            { label: 'Margin Risk', value: 'High', description: 'AI costs scale with usage — success can destroy margins without controls' },
        ],
        'Engineering Metrics & Performance': [
            { label: 'Elite Benchmark', value: 'Top 15%', description: 'Only 15% of engineering orgs achieve elite DORA performance' },
            { label: 'Productivity Gap', value: '4-10x', description: 'Difference between elite and low-performing engineering organizations' },
            { label: 'Measurement Impact', value: '+25%', description: 'Average improvement when teams begin measuring and reporting metrics' },
        ],
        'Cloud & Infrastructure': [
            { label: 'Waste Rate', value: '30-35%', description: 'Average cloud spend wasted on unused or oversized resources' },
            { label: 'Optimization Window', value: '20-40%', description: 'Typical savings achievable through right-sizing and reserved capacity' },
            { label: 'Downtime Cost', value: '$5,600/min', description: 'Average cost of unplanned downtime for mid-size companies' },
        ],
        'Security & Compliance': [
            { label: 'Breach Cost', value: '$4.45M', description: 'Average total cost of a data breach (IBM 2024)' },
            { label: 'Prevention ROI', value: '10-50x', description: 'Return on security investment vs. breach remediation costs' },
            { label: 'Compliance Cost', value: '$50K-500K', description: 'Annual compliance program cost depending on regulations' },
        ],
        'DevOps & CI/CD': [
            { label: 'Deploy Frequency', value: 'Multiple/day', description: 'Elite teams deploy multiple times per day vs. monthly for low performers' },
            { label: 'Lead Time', value: '<1 hour', description: 'Elite teams ship code changes in under 1 hour from commit to production' },
            { label: 'Change Failure', value: '<5%', description: 'Elite teams have less than 5% of deployments cause failures' },
        ],
        'Product Management': [
            { label: 'Feature Adoption', value: '20-30%', description: 'Average percentage of features actively used by customers' },
            { label: 'Time-to-Value', value: '2-4 weeks', description: 'Optimal time from feature release to measurable business impact' },
            { label: 'Decision Cost', value: '$50K-200K', description: 'Cost of a wrong prioritization decision per quarter' },
        ],
        'SaaS & Metrics': [
            { label: 'Rule of 40', value: '40%+', description: 'Growth rate + profit margin should exceed 40% for healthy SaaS' },
            { label: 'Net Retention', value: '120%+', description: 'Top-quartile SaaS NRR indicating expansion revenue exceeds churn' },
            { label: 'CAC Payback', value: '<18 months', description: 'Healthy customer acquisition cost payback period' },
        ],
        'Data Engineering': [
            { label: 'Data Quality', value: '85-95%', description: 'Target accuracy rate for production data pipelines' },
            { label: 'Pipeline SLA', value: '99.5%+', description: 'Target uptime for critical data infrastructure' },
            { label: 'Processing Cost', value: '$2-10/TB', description: 'Typical cloud data processing cost per terabyte' },
        ],
        'Organizational Design': [
            { label: 'Span of Control', value: '5-8', description: 'Optimal direct reports per engineering manager' },
            { label: 'Coordination Tax', value: '15-30%', description: 'Time lost to cross-team coordination in large organizations' },
            { label: 'Team Size Sweet Spot', value: '5-9', description: 'Optimal team size for velocity and communication' },
        ],
    };
    return metrics[category] || [
        { label: 'Implementation Time', value: '2-6 weeks', description: `Typical time to implement ${title} practices in a mid-size org` },
        { label: 'Expected ROI', value: '2-5x', description: `Return on investment from properly implementing ${title}` },
        { label: 'Adoption Rate', value: '35-60%', description: `Percentage of organizations actively using ${title} frameworks` },
    ];
}

export function autoMaturityLevels(category: string, title: string): { level: string; description: string }[] {
    const models: Record<string, { level: string; description: string }[]> = {
        'Technical Debt & Code Quality': [
            { level: 'Unaware', description: `No systematic tracking of ${title}. Debt accumulates silently.` },
            { level: 'Reactive', description: `${title} addressed only when causing incidents or blocking features.` },
            { level: 'Measured', description: `${title} quantified with economic impact. PDI tracked quarterly.` },
            { level: 'Managed', description: `Dedicated sprint capacity (15-20%) allocated to ${title} remediation.` },
            { level: 'Optimized', description: `${title} balanced proactively. Innovation Tax below 30%. Board-reported.` },
        ],
        'AI & Machine Learning': [
            { level: 'Experimental', description: `${title} explored ad-hoc. No cost tracking or governance.` },
            { level: 'Pilot', description: `${title} in production for 1-2 features. Basic cost monitoring.` },
            { level: 'Scaled', description: `${title} across multiple features. Unit economics tracked per feature.` },
            { level: 'Optimized', description: `Model routing, caching, and fine-tuning reduce ${title} costs 60%+.` },
            { level: 'Strategic', description: `${title} is a competitive moat. Margins healthy at 100x scale.` },
        ],
        'Cloud & Infrastructure': [
            { level: 'Ad-Hoc', description: `${title} managed manually. No automation or monitoring.` },
            { level: 'Standardized', description: `${title} follows documented procedures. Basic alerting in place.` },
            { level: 'Automated', description: `${title} managed via IaC. Auto-scaling and self-healing enabled.` },
            { level: 'Measured', description: `${title} costs tracked and optimized. FinOps practices active.` },
            { level: 'Resilient', description: `${title} highly available with DR. Multi-region and chaos-tested.` },
        ],
    };
    return models[category] || [
        { level: 'Initial', description: `No formal ${title} processes. Ad-hoc and inconsistent.` },
        { level: 'Developing', description: `Basic ${title} practices adopted. Some documentation exists.` },
        { level: 'Defined', description: `${title} processes standardized across the organization.` },
        { level: 'Managed', description: `${title} measured with KPIs. Continuous improvement active.` },
        { level: 'Optimized', description: `${title} is a strategic advantage. Industry-leading practices.` },
    ];
}

export function autoComparisons(category: string, title: string): { vs: string; advantage: string; disadvantage: string }[] {
    const comps: Record<string, { vs: string; advantage: string; disadvantage: string }[]> = {
        'Technical Debt & Code Quality': [
            { vs: 'Manual Code Reviews', advantage: `${title} provides quantified economic impact`, disadvantage: 'Reviews catch nuanced issues better' },
            { vs: 'Static Analysis Only', advantage: `${title} includes business context and priority`, disadvantage: 'Static analysis is faster to implement' },
            { vs: 'Ignoring the Problem', advantage: `${title} prevents Technical Insolvency`, disadvantage: 'Short-term velocity may feel faster' },
        ],
        'AI & Machine Learning': [
            { vs: 'Traditional Software', advantage: `${title} enables intelligent automation`, disadvantage: 'Higher per-request costs and complexity' },
            { vs: 'Rule-Based Systems', advantage: `${title} handles ambiguity and edge cases`, disadvantage: 'Less predictable and harder to debug' },
            { vs: 'Human Processing', advantage: `${title} scales infinitely at lower cost`, disadvantage: 'Quality ceiling on complex reasoning tasks' },
        ],
        'SaaS & Metrics': [
            { vs: 'Gut-Feel Decisions', advantage: `${title} provides data-driven clarity`, disadvantage: 'Requires instrumentation investment' },
            { vs: 'Revenue-Only Tracking', advantage: `${title} reveals unit economics health`, disadvantage: 'More complex reporting infrastructure' },
            { vs: 'Annual Reviews', advantage: `${title} enables real-time course correction`, disadvantage: 'Monthly cadence requires more effort' },
        ],
    };
    return comps[category] || [
        { vs: 'Ad-Hoc Approach', advantage: `${title} provides structure and repeatability`, disadvantage: 'Requires upfront investment to implement' },
        { vs: 'Industry Alternatives', advantage: `${title} is tailored to your specific context`, disadvantage: 'May require customization effort' },
        { vs: 'Doing Nothing', advantage: `${title} creates measurable improvement`, disadvantage: 'Status quo requires zero effort' },
    ];
}

export function autoQuiz(category: string, title: string): { question: string; options: string[]; answer: number; explanation: string }[] {
    const quizzes: Record<string, { question: string; options: string[]; answer: number; explanation: string }[]> = {
        'Technical Debt & Code Quality': [
            { question: `What percentage of sprint capacity should be allocated to ${title} remediation?`, options: ['5%', '10%', '15-20%', '50%'], answer: 2, explanation: '15-20% is the optimal allocation — enough to make progress without sacrificing feature velocity.' },
            { question: `What is the primary framework for quantifying ${title} in financial terms?`, options: ['Story Points', 'Lines of Code', 'Product Debt Index (PDI)', 'Code Coverage'], answer: 2, explanation: 'PDI translates technical metrics into dollar values that leadership and finance teams understand.' },
            { question: `What happens when ${title} is ignored long-term?`, options: ['Nothing significant', 'Technical Insolvency', 'Faster development', 'Lower costs'], answer: 1, explanation: 'Unchecked accumulation leads to Technical Insolvency — when maintenance consumes all engineering capacity.' },
        ],
        'AI & Machine Learning': [
            { question: `What is the typical cost reduction from implementing model routing for ${title}?`, options: ['10-20%', '30-40%', '60-80%', '95%+'], answer: 2, explanation: 'Model routing directs queries to the cheapest capable model, typically reducing costs 60-80%.' },
            { question: `Which cost component is often the largest in ${title}?`, options: ['Training costs', 'Inference/serving costs', 'Data labeling', 'Hardware purchase'], answer: 1, explanation: 'For production AI, inference costs (per-request serving) typically dwarf one-time training costs.' },
            { question: `What margin should AI features target to be sustainable?`, options: ['10%+', '30%+', '50%+', '90%+'], answer: 2, explanation: 'AI features need >50% contribution margin to absorb scaling costs and remain profitable.' },
        ],
        'Cloud & Infrastructure': [
            { question: `What percentage of cloud spend is typically wasted?`, options: ['5-10%', '15-20%', '30-35%', '50%+'], answer: 2, explanation: 'Studies consistently show 30-35% of cloud spend is wasted on unused or oversized resources.' },
            { question: `What is the average cost of unplanned downtime per minute?`, options: ['$100', '$1,000', '$5,600', '$50,000'], answer: 2, explanation: 'Gartner estimates the average cost at $5,600/minute, though it varies significantly by industry.' },
            { question: `Which approach best reduces ${title} costs long-term?`, options: ['Bigger instances', 'Right-sizing + reserved capacity', 'Moving to on-premises', 'Using free tier only'], answer: 1, explanation: 'Right-sizing eliminates waste; reserved capacity provides 30-60% discounts on committed usage.' },
        ],
    };
    return quizzes[category] || [
        { question: `What is the first step in implementing ${title}?`, options: ['Jump to solutions', 'Assess current state', 'Hire consultants', 'Buy tools'], answer: 1, explanation: 'Always start by assessing your current state to understand gaps and prioritize improvements.' },
        { question: `How should ${title} progress be reported to leadership?`, options: ['Technical jargon', 'Financial impact and trends', 'Story points', 'Lines of code changed'], answer: 1, explanation: 'Leadership responds to financial language: dollars invested, dollars returned, risk mitigated.' },
        { question: `What timeframe is realistic for seeing results from ${title}?`, options: ['1 week', '1 month', '1-2 quarters', '2+ years'], answer: 2, explanation: 'Most organizational improvements show measurable results within 1-2 quarters with sustained effort.' },
    ];
}

export function autoDiagram(category: string, title: string): string {
    const diagrams: Record<string, string> = {
        'Technical Debt & Code Quality':
`┌─────────────────────────────────────────────────┐
│              ${title} Lifecycle                  │
├─────────────────────────────────────────────────┤
│                                                 │
│   Identify ──→ Quantify ──→ Prioritize          │
│      │                          │               │
│      ▼                          ▼               │
│   Monitor  ◄── Measure  ◄── Remediate           │
│                                                 │
│   📊 PDI Score tracks progress over time        │
│   💰 Every step uses financial language         │
│   📈 Report to leadership quarterly             │
└─────────────────────────────────────────────────┘`,
        'AI & Machine Learning':
`┌─────────────────────────────────────────────────┐
│              ${title} Cost Flow                  │
├─────────────────────────────────────────────────┤
│                                                 │
│   User Query ──→ Router ──→ Model Selection     │
│                    │                            │
│              ┌─────┼─────┐                      │
│              ▼     ▼     ▼                      │
│           Cheap  Mid   Premium                  │
│           (70%)  (20%)  (10%)                   │
│                    │                            │
│              Response ──→ Guardrails ──→ User   │
│                                                 │
│   💰 Cost optimized by routing 70% to cheapest  │
│   📊 Monitor per-query cost and quality         │
└─────────────────────────────────────────────────┘`,
        'DevOps & CI/CD':
`┌─────────────────────────────────────────────────┐
│              ${title} Pipeline                   │
├─────────────────────────────────────────────────┤
│                                                 │
│   Code ──→ Build ──→ Test ──→ Stage ──→ Prod    │
│    │        │        │        │        │        │
│    ▼        ▼        ▼        ▼        ▼        │
│   Lint    Compile  Unit+    Smoke    Monitor     │
│   Scan    Package  Integration  E2E   Alert     │
│                                                 │
│   ⏱️ Elite: < 1 hour end-to-end                 │
│   🎯 Target: < 5% change failure rate           │
│   📊 Track DORA metrics continuously            │
└─────────────────────────────────────────────────┘`,
    };
    return diagrams[category] || 
`┌─────────────────────────────────────────────────┐
│              ${title} Framework                  │
├─────────────────────────────────────────────────┤
│                                                 │
│   Assess ──→ Plan ──→ Execute ──→ Measure       │
│      │                              │           │
│      └──────────── Iterate ◄────────┘           │
│                                                 │
│   📊 Define success metrics upfront             │
│   💰 Quantify impact in financial terms         │
│   📈 Report progress to stakeholders            │
└─────────────────────────────────────────────────┘`;
}
