import Link from 'next/link';

// Maps glossary term categories/slugs to relevant tools
const toolMapping: Record<string, { name: string; url: string; cta: string; emoji: string }> = {
    // =========================================================================
    // TECHNICAL DEBT & CODE QUALITY
    // =========================================================================
    'technical-debt': { name: 'Product Debt Index', url: '/tools/pdi', cta: 'Find out how much technical debt is bleeding your engineering budget', emoji: '📊' },
    'legacy-code': { name: 'Product Debt Index', url: '/tools/pdi', cta: 'Is legacy code silently eating your R&D spend?', emoji: '📊' },
    'refactoring': { name: 'Product Debt Index', url: '/tools/pdi', cta: 'Stop guessing  -  quantify the ROI of refactoring in hard dollars', emoji: '📊' },
    'code-smell': { name: 'Product Debt Index', url: '/tools/pdi', cta: 'How much are code smells costing you per quarter?', emoji: '📊' },
    'code-quality': { name: 'Product Debt Index', url: '/tools/pdi', cta: 'Measure your code health score before it becomes a crisis', emoji: '📊' },
    'maintenance-burden': { name: 'Product Debt Index', url: '/tools/pdi', cta: 'Is your maintenance burden approaching insolvency?', emoji: '📊' },
    'software-entropy': { name: 'Product Debt Index', url: '/tools/pdi', cta: 'Measure your software entropy rate before it\u2019s irreversible', emoji: '📊' },
    'zombie-assets': { name: 'Product Debt Index', url: '/tools/pdi', cta: 'How many zombie features are draining your engineering capacity?', emoji: '📊' },
    'hallucination-debt': { name: 'Hallucination Tax Calculator', url: '/tools/hallucination-tax', cta: 'Is AI-generated code silently compounding your maintenance costs?', emoji: '🧪' },
    'vibe-coding': { name: 'Product Debt Index', url: '/tools/pdi', cta: 'How much hidden debt is your AI-generated code accumulating?', emoji: '📊' },
    'comprehension-debt': { name: 'Product Debt Index', url: '/tools/pdi', cta: 'Is your team shipping code nobody actually understands?', emoji: '📊' },

    // =========================================================================
    // AI & MACHINE LEARNING
    // =========================================================================
    'artificial-intelligence': { name: 'AI Unit Economics Benchmark', url: '/tools/aueb', cta: 'Are your AI features burning cash or making money?', emoji: '🤖' },
    'large-language-model': { name: 'AI Unit Economics Benchmark', url: '/tools/aueb', cta: 'Is your LLM spend destroying your gross margins?', emoji: '🤖' },
    'ai-hallucination': { name: 'Hallucination Tax Calculator', url: '/tools/hallucination-tax', cta: 'How much are AI hallucinations really costing your organization?', emoji: '🧪' },
    'hallucination-entropy': { name: 'Hallucination Tax Calculator', url: '/tools/hallucination-tax', cta: 'Is hallucination drift silently corrupting your agent outputs?', emoji: '🧪' },
    'agentic-ai': { name: 'Agentic Drift Matrix', url: '/tools/agentic-drift-matrix', cta: 'Is your AI agent drifting outside its guardrails?', emoji: '🕹️' },
    'agentic-process-automation': { name: 'Agentic Drift Matrix', url: '/tools/agentic-drift-matrix', cta: 'Are your autonomous agents creating liability you can\u2019t see?', emoji: '🕹️' },
    'multi-agent-orchestration': { name: 'Agentic Drift Matrix', url: '/tools/agentic-drift-matrix', cta: 'How much drift is hiding in your multi-agent workflows?', emoji: '🕹️' },
    'mcp-model-context-protocol': { name: 'Agentic Drift Matrix', url: '/tools/agentic-drift-matrix', cta: 'Is your MCP architecture introducing ungoverned agent behavior?', emoji: '🕹️' },
    'probabilistic-automation': { name: 'Agentic Drift Matrix', url: '/tools/agentic-drift-matrix', cta: 'Is probabilistic automation costing more than it saves?', emoji: '🕹️' },
    'prompt-engineering': { name: 'AI Unit Economics Benchmark', url: '/tools/aueb', cta: 'Are your prompts wasting tokens and destroying margins?', emoji: '🤖' },
    'rag': { name: 'AI Unit Economics Benchmark', url: '/tools/aueb', cta: 'Is your RAG architecture bleeding compute budget?', emoji: '🤖' },
    'model-collapse': { name: 'Hallucination Tax Calculator', url: '/tools/hallucination-tax', cta: 'Is model collapse degrading your AI output quality?', emoji: '🧪' },
    'model-right-sizing': { name: 'AI Unit Economics Benchmark', url: '/tools/aueb', cta: 'Are you paying frontier prices for tasks a mini model could handle?', emoji: '🤖' },
    'ai-unit-economics': { name: 'AI Unit Economics Benchmark', url: '/tools/aueb', cta: 'Find your AI margin collapse point before investors do', emoji: '🤖' },
    'ai-cost-governance': { name: 'AI Unit Economics Benchmark', url: '/tools/aueb', cta: 'How much is uncontrolled AI spend costing you per month?', emoji: '🤖' },
    'llm-cost-optimization': { name: 'AI Unit Economics Benchmark', url: '/tools/aueb', cta: 'Benchmark your LLM costs against industry standards', emoji: '🤖' },
    'ai-cogs': { name: 'AI Unit Economics Benchmark', url: '/tools/aueb', cta: 'Is AI COGS compressing your gross margins below viability?', emoji: '🤖' },
    'ai-cost-attribution': { name: 'AI Unit Economics Benchmark', url: '/tools/aueb', cta: 'Do you know the true cost of each AI-powered interaction?', emoji: '🤖' },
    'ai-billing-shock': { name: 'Copilot ROI Calculator', url: '/tools/copilot-roi', cta: 'Is token-based billing about to blow up your dev tools budget?', emoji: '💸' },
    'ai-production-gap': { name: 'AI Unit Economics Benchmark', url: '/tools/aueb', cta: 'Will your AI prototype economics survive production scale?', emoji: '🤖' },
    'verification-tax': { name: 'APER Diagnostic', url: '/tools/aper', cta: 'How many hours per week is AI verification stealing from your team?', emoji: '👥' },

    // =========================================================================
    // AI GOVERNANCE & COMPLIANCE
    // =========================================================================
    'ai-governance': { name: 'EU AI Act Checker', url: '/tools/eu-ai-act-checker', cta: 'Is your AI governance framework ready for regulatory enforcement?', emoji: '⚖️' },
    'cto-agent-delusion': { name: 'Agentic Drift Matrix', url: '/tools/agentic-drift-matrix', cta: 'Is your CTO confusing syntax generation with system architecture?', emoji: '🕹️' },

    // =========================================================================
    // SAAS METRICS & FINANCE
    // =========================================================================
    'arr': { name: 'Enterprise Value Scenario Engine', url: '/tools/ev-se', cta: 'See how ARR changes ripple through your valuation', emoji: '💰' },
    'mrr': { name: 'Enterprise Value Scenario Engine', url: '/tools/ev-se', cta: 'Is your MRR growth hiding a churn problem?', emoji: '💰' },
    'churn-rate': { name: 'Enterprise Value Scenario Engine', url: '/tools/ev-se', cta: 'How much enterprise value is churn destroying?', emoji: '💰' },
    'net-revenue-retention': { name: 'Enterprise Value Scenario Engine', url: '/tools/ev-se', cta: 'Is your NRR silently capping your valuation multiple?', emoji: '💰' },
    'rule-of-40': { name: 'Enterprise Value Scenario Engine', url: '/tools/ev-se', cta: 'Where do you sit on the Rule of 40  -  and what does it mean for valuation?', emoji: '💰' },
    'saas-valuation': { name: 'Enterprise Value Scenario Engine', url: '/tools/ev-se', cta: 'Model your valuation scenarios before investors do it for you', emoji: '💰' },
    'unit-economics': { name: 'AI Unit Economics Benchmark', url: '/tools/aueb', cta: 'Are your unit economics viable  -  or is growth accelerating losses?', emoji: '🤖' },
    'burn-rate': { name: 'Enterprise Value Scenario Engine', url: '/tools/ev-se', cta: 'How many months of runway do you actually have left?', emoji: '💰' },
    'total-compute-cost': { name: 'AI Unit Economics Benchmark', url: '/tools/aueb', cta: 'Are hidden AI infrastructure costs destroying your margin model?', emoji: '🤖' },
    'soft-roi-liability': { name: 'AI ROI Timeline', url: '/tools/ai-roi-timeline', cta: 'Is your AI ROI real  -  or just a productivity illusion?', emoji: '⏱️' },

    // =========================================================================
    // ENGINEERING MANAGEMENT & PRODUCTIVITY
    // =========================================================================
    'engineering-productivity': { name: 'APER Diagnostic', url: '/tools/aper', cta: 'Is your engineering team generating revenue  -  or just activity?', emoji: '👥' },
    'revenue-per-engineer': { name: 'APER Diagnostic', url: '/tools/aper', cta: 'How does your revenue per engineer stack up against elite teams?', emoji: '👥' },
    'developer-productivity': { name: 'APER Diagnostic', url: '/tools/aper', cta: 'Is your developer output keeping pace with your headcount spend?', emoji: '👥' },
    'dora-metrics': { name: 'APER Diagnostic', url: '/tools/aper', cta: 'Are your DORA metrics hiding an efficiency problem?', emoji: '👥' },
    'devops': { name: 'Cloud Repatriation Calculator', url: '/tools/cloud-repatriation', cta: 'Is your DevOps spend generating value or just generating invoices?', emoji: '☁️' },
    'cicd': { name: 'APER Diagnostic', url: '/tools/aper', cta: 'Is your CI/CD pipeline fast  -  or just expensive?', emoji: '👥' },
    'codebase-intimacy': { name: 'Product Debt Index', url: '/tools/pdi', cta: 'Is declining codebase intimacy putting your MTTR at risk?', emoji: '📊' },
    'engineering-hiring': { name: 'Audit Interview', url: '/tools/audit-interview', cta: 'Are you still hiring for syntax skills that AI already owns?', emoji: '🎯' },
    'technical-interview': { name: 'Audit Interview', url: '/tools/audit-interview', cta: 'Is your interview process testing skills that actually matter?', emoji: '🎯' },

    // =========================================================================
    // COPILOT & AI CODING TOOLS
    // =========================================================================
    'audit-interview-protocol': { name: 'Audit Interview', url: '/tools/audit-interview', cta: 'Deploy the hiring assessment built for the AI age', emoji: '🎯' },

    // =========================================================================
    // RICHARD EWING FRAMEWORKS
    // =========================================================================
    'technical-insolvency-date': { name: 'Product Debt Index', url: '/tools/pdi', cta: 'How many quarters until your codebase is technically insolvent?', emoji: '📊' },
    'innovation-tax': { name: 'Innovation Tax Calculator', url: '/tools/innovation-tax-calculator', cta: 'Is your R&D budget actually funding innovation  -  or just maintenance?', emoji: '🧮' },
    'cost-of-predictivity': { name: 'AI Unit Economics Benchmark', url: '/tools/aueb', cta: 'Is the cost of AI accuracy scaling faster than your revenue?', emoji: '🤖' },
    'kill-switch-protocol': { name: 'Product Debt Index', url: '/tools/pdi', cta: 'How many zombie features are silently draining your velocity?', emoji: '📊' },
    'feature-bloat-calculus': { name: 'Product Debt Index', url: '/tools/pdi', cta: 'Are you adding features faster than you\u2019re generating value?', emoji: '📊' },
    'audit-interview': { name: 'Audit Interview', url: '/tools/audit-interview', cta: 'Try the hiring assessment that tests judgment, not syntax', emoji: '🎯' },
    'product-economist': { name: 'AI Unit Economics Benchmark', url: '/tools/aueb', cta: 'Start treating engineering as capital allocation, not feature delivery', emoji: '🤖' },
    'rule-of-two': { name: 'Product Debt Index', url: '/tools/pdi', cta: 'How many features in your codebase fail the Rule of Two?', emoji: '📊' },
    'sunset-committee': { name: 'Product Debt Index', url: '/tools/pdi', cta: 'Is your organization actually killing features  -  or just talking about it?', emoji: '📊' },
    'scream-test': { name: 'Product Debt Index', url: '/tools/pdi', cta: 'Find the features nobody would miss if they disappeared tomorrow', emoji: '📊' },

    // =========================================================================
    // PRODUCT MANAGEMENT
    // =========================================================================
    'product-market-fit': { name: 'Enterprise Value Scenario Engine', url: '/tools/ev-se', cta: 'Is your growth real PMF  -  or just paid acquisition masking churn?', emoji: '💰' },
    'jobs-to-be-done': { name: 'APER Diagnostic', url: '/tools/aper', cta: 'Is your engineering team building what customers actually need?', emoji: '👥' },

    // =========================================================================
    // LEADERSHIP & GOVERNANCE
    // =========================================================================
    'digital-transformation': { name: 'AI ROI Timeline', url: '/tools/ai-roi-timeline', cta: 'Is your digital transformation generating ROI  -  or just PowerPoints?', emoji: '⏱️' },

    // =========================================================================
    // CLOUD & INFRASTRUCTURE
    // =========================================================================
    'ai-cloud-finops': { name: 'Cloud Repatriation Calculator', url: '/tools/cloud-repatriation', cta: 'Is your cloud AI spend outpacing the value it delivers?', emoji: '☁️' },
};

// Category-level fallback mappings
const categoryToolMapping: Record<string, { name: string; url: string; cta: string; emoji: string }> = {
    'engineering': { name: 'Product Debt Index', url: '/tools/pdi', cta: 'Is your engineering spend going to innovation or maintenance?', emoji: '📊' },
    'ai': { name: 'AI Unit Economics Benchmark', url: '/tools/aueb', cta: 'Are your AI features profitable  -  or just impressive demos?', emoji: '🤖' },
    'finance': { name: 'Enterprise Value Scenario Engine', url: '/tools/ev-se', cta: 'Model how your financial metrics impact enterprise value', emoji: '💰' },
    'product': { name: 'APER Diagnostic', url: '/tools/aper', cta: 'Is your product team generating revenue or just shipping features?', emoji: '👥' },
    'hiring': { name: 'Audit Interview', url: '/tools/audit-interview', cta: 'Stop testing for skills AI already owns', emoji: '🎯' },
    'leadership': { name: 'Product Debt Index', url: '/tools/pdi', cta: 'Get a board-ready view of your engineering debt', emoji: '📊' },
    'metrics': { name: 'Enterprise Value Scenario Engine', url: '/tools/ev-se', cta: 'See how your SaaS metrics translate to enterprise value', emoji: '💰' },
    // Expanded category mappings
    'Technical Debt & Code Quality': { name: 'Product Debt Index', url: '/tools/pdi', cta: 'Find out how much technical debt is costing you per quarter', emoji: '📊' },
    'AI & Machine Learning': { name: 'AI Unit Economics Benchmark', url: '/tools/aueb', cta: 'Are your AI costs scaling faster than your revenue?', emoji: '🤖' },
    'Financial Metrics': { name: 'Enterprise Value Scenario Engine', url: '/tools/ev-se', cta: 'Model how your metrics move your valuation', emoji: '💰' },
    'SaaS Metrics & Finance': { name: 'Enterprise Value Scenario Engine', url: '/tools/ev-se', cta: 'Is your SaaS growth story defensible under investor scrutiny?', emoji: '💰' },
    'Engineering Management': { name: 'APER Diagnostic', url: '/tools/aper', cta: 'Is your engineering team earning its headcount cost?', emoji: '👥' },
    'Engineering Leadership': { name: 'Product Debt Index', url: '/tools/pdi', cta: 'Get visibility into what your engineering budget actually funds', emoji: '📊' },
    'Security & Compliance': { name: 'Shadow AI Scanner', url: '/tools/shadow-ai', cta: 'Is ungoverned AI usage creating compliance risk you can\u2019t see?', emoji: '🛡️' },
    'Compliance & Regulation': { name: 'EU AI Act Checker', url: '/tools/eu-ai-act-checker', cta: 'Is your organization ready for EU AI Act enforcement?', emoji: '⚖️' },
    'DevOps & Infrastructure': { name: 'Cloud Repatriation Calculator', url: '/tools/cloud-repatriation', cta: 'Is your cloud spend justified  -  or would repatriation save millions?', emoji: '☁️' },
    'Cloud & Infrastructure': { name: 'Cloud Repatriation Calculator', url: '/tools/cloud-repatriation', cta: 'Is your cloud bill growing faster than your revenue?', emoji: '☁️' },
    'Agentic AI': { name: 'Agentic Drift Matrix', url: '/tools/agentic-drift-matrix', cta: 'Is your AI agent architecture creating ungovernable drift?', emoji: '🕹️' },
    'AI Governance & Verification': { name: 'EU AI Act Checker', url: '/tools/eu-ai-act-checker', cta: 'Are your AI systems compliant  -  or one audit away from fines?', emoji: '⚖️' },
    'Governance': { name: 'EU AI Act Checker', url: '/tools/eu-ai-act-checker', cta: 'Is your governance framework ready for AI regulatory enforcement?', emoji: '⚖️' },
    'Leadership & Governance': { name: 'Shadow AI Scanner', url: '/tools/shadow-ai', cta: 'Is shadow AI undermining your governance framework?', emoji: '🛡️' },
    'Richard Ewing Frameworks': { name: 'Product Debt Index', url: '/tools/pdi', cta: 'Quantify your engineering debt in board-ready dollar terms', emoji: '📊' },
    'Product Management': { name: 'APER Diagnostic', url: '/tools/aper', cta: 'Is your product investment generating measurable returns?', emoji: '👥' },
    'Startup & Venture Capital': { name: 'Enterprise Value Scenario Engine', url: '/tools/ev-se', cta: 'Model your valuation scenarios before your next raise', emoji: '💰' },
    'Due Diligence & M&A': { name: 'Due Diligence Scanner', url: '/tools/due-diligence', cta: 'Is hidden technical debt about to torpedo your deal?', emoji: '🔍' },
    'Architecture Patterns': { name: 'Agentic Drift Matrix', url: '/tools/agentic-drift-matrix', cta: 'Is your architecture introducing ungovernable agent drift?', emoji: '🕹️' },
    'Agile & Delivery': { name: 'APER Diagnostic', url: '/tools/aper', cta: 'Is your delivery velocity translating to business outcomes?', emoji: '👥' },
    'Finance & Accounting': { name: 'Enterprise Value Scenario Engine', url: '/tools/ev-se', cta: 'See how your financial decisions impact enterprise value', emoji: '💰' },
    'Finance & Strategy': { name: 'Enterprise Value Scenario Engine', url: '/tools/ev-se', cta: 'Are your AI cost assumptions survivable at scale?', emoji: '💰' },
    'AI Economics': { name: 'AI Unit Economics Benchmark', url: '/tools/aueb', cta: 'Is your AI cost structure sustainable  -  or a ticking time bomb?', emoji: '🤖' },
    'Technical Debt': { name: 'Product Debt Index', url: '/tools/pdi', cta: 'How many quarters until maintenance consumes 100% of capacity?', emoji: '📊' },
    'executive': { name: 'Hallucination Tax Calculator', url: '/tools/hallucination-tax', cta: 'What is the true cost of AI inaccuracy in your organization?', emoji: '🧪' },
};

interface GlossaryToolCTAProps {
    slug: string;
    category?: string;
    termTitle: string;
}

export default function GlossaryToolCTA({ slug, category, termTitle }: GlossaryToolCTAProps) {
    const tool = toolMapping[slug] || (category ? categoryToolMapping[category] : null);
    if (!tool) return null;

    return (
        <div className="my-8 p-6 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 border border-purple-500/20 rounded-2xl">
            <div className="flex items-start gap-4">
                <span className="text-3xl flex-shrink-0">{tool.emoji}</span>
                <div className="flex-1">
                    <p className="text-xs font-bold text-zinc-900 font-mono uppercase tracking-wider mb-1">Free Tool</p>
                    <h4 className="text-lg font-bold text-zinc-950 mb-1">{tool.cta}</h4>
                    <p className="text-zinc-900 text-sm font-semibold mb-4">
                        Use the free {tool.name} diagnostic to put numbers behind your {termTitle.toLowerCase()} challenges.
                    </p>
                    <Link
                        href={tool.url}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-cyan-500 text-zinc-950 font-semibold text-sm font-bold rounded-lg hover:opacity-90 transition-opacity"
                    >
                        Try {tool.name} Free →
                    </Link>
                    {/* Advisory Upsell */}
                    <p className="mt-3 text-xs text-zinc-600">
                        Want an expert to run this for you?{' '}
                        <Link
                            href="/api/buy/gut_check"
                            className="text-purple-600 hover:text-purple-500 font-semibold underline underline-offset-2 transition-colors"
                        >
                            Book a $450 Gut-Check Call →
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
