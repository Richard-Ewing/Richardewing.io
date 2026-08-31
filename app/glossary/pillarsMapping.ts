export const PILLARS = [
    { slug: 'cpo-product-leadership', name: 'CPO Product Strategy & Outcome Pricing' },
    { slug: 'ceo-executive-operating-model', name: 'CEO Enterprise Strategy & Sovereign Org Design' },

    { slug: 'board-executive-governance', name: 'Board Governance, Fiduciary Duty & AI Risk' },
    { slug: 'cfo-finance-capital-allocation', name: 'CFO Capital Allocation & Section 174' },

    { slug: 'mcp-security-zero-trust', name: 'MCP Security & Tool Governance' },
    { slug: 'macro-coding-architecture', name: 'Macro-Coding & Spec-Driven Engineering' },

    { slug: 'probabilistic-product-management', name: 'Probabilistic Product Management' },
    { slug: 'agentic-governance-engineering', name: 'Agentic Governance & Autonomous Software' },
    { slug: 'negative-carry-insolvency', name: 'Negative-Carry Code & Technical Insolvency' },

    { slug: 'ai-unit-economics', name: 'AI Unit Economics & Pricing' },
    { slug: 'technical-debt-platform-engineering', name: 'Technical Debt & Platform Engineering' },
    { slug: 'saas-metrics-due-diligence', name: 'SaaS Metrics & Financial Due Diligence' },
    { slug: 'cloud-infrastructure-finops', name: 'Cloud Infrastructure & FinOps' },
    { slug: 'engineering-leadership', name: 'Engineering Leadership & Organization' },
    { slug: 'product-economics', name: 'Product Economics & Growth' },
    { slug: 'governance-architecture', name: 'Security, Governance & Architecture' },
    { slug: 'delivery-reliability', name: 'Delivery & Reliability' }
];

export const CATEGORY_MAP: Record<string, string> = {
    'Technical Debt & Code Quality': 'technical-debt-platform-engineering',
    'Platform Engineering': 'technical-debt-platform-engineering',
    'DevOps & Infrastructure': 'technical-debt-platform-engineering',
    'Open Source': 'technical-debt-platform-engineering',
    
    'AI & Machine Learning': 'ai-unit-economics',
    'AI Tools & Frameworks': 'ai-unit-economics',
    'Pricing & Packaging': 'ai-unit-economics',
    
    'SaaS Metrics & Finance': 'saas-metrics-due-diligence',
    'Finance & Accounting': 'saas-metrics-due-diligence',
    'Due Diligence & M&A': 'saas-metrics-due-diligence',
    'Startup & Venture Capital': 'saas-metrics-due-diligence',
    
    'Cloud & Infrastructure': 'cloud-infrastructure-finops',
    // FinOps & Business - wait, what's the exact name in allGlossaryCategories?
    
    'Engineering Management': 'engineering-leadership',
    'Leadership & Governance': 'engineering-leadership',
    'People & Culture': 'engineering-leadership',
    
    'Product Management': 'product-economics',
    'Growth & Marketing': 'product-economics',
    'Design & UX': 'product-economics',
    'Richard Ewing Frameworks': 'product-economics',
    
    'Security & Compliance': 'governance-architecture',
    'Compliance & Regulation': 'governance-architecture',
    'AI Governance & Verification': 'governance-architecture',
    'API & Integration': 'governance-architecture',
    'Architecture Patterns': 'governance-architecture',
    
    'Testing & QA': 'delivery-reliability',
    'Quality & Testing': 'delivery-reliability',
    'Agile & Delivery': 'delivery-reliability',
};

export const KEEP_TERMS = [
    'ic-vs-management-track', 'engineering-levels', 'career-levels',
    'ai-cost-attribution', 'ai-unit-economics', 'ai-cogs', 'calculating-roai', 
    'hallucination-debt', 'model-right-sizing', 'orchestration-debt',
    // Concept Corpus Expansion - high-priority standalone pages
    'mcp-governance', 'context-engineering', 'agentic-roi', 'unreliability-tax',
    'product-debt-index', 'aueb-framework', 'aper-metric', 'margin-engineering',
    'spec-driven-development', 'eval-driven-development', 'ai-coding-tool-economics',
    'four-laws-probabilistic-software', 'ai-liability-gradient', 'ai-finops',
    'ai-economist', 'eaap-protocol', 'compound-ai-systems'
];
