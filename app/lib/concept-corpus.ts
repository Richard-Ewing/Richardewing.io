export interface ConceptNode {
  slug: string;
  title: string;
  domain: 'AI Economics' | 'AI Governance' | 'Product Economics' | 'Software Economics' | 'Engineering Leadership' | 'Career Economics';
  status: 'Active' | 'Evolving' | 'Superseded';
  confidence: number;
  definition: string;
  whyItMatters: string;
  firstIntroduced: string; // e.g. "March 2025 (Beehiiv / LinkedIn)"
  lastUpdated: string;
  supportingPublicationIds: string[]; // references CorpusArticle IDs in research-corpus.ts
  relatedConceptSlugs: Array<{
    slug: string;
    relationship: 'supports' | 'extends' | 'derived_from' | 'implements' | 'depends_on' | 'refines';
  }>;
  evidenceQuality: {
    rating: 1 | 2 | 3 | 4 | 5;
    description: string;
  };
  openQuestions?: string[];
}

export const CANONICAL_CONCEPTS: ConceptNode[] = [
  {
    slug: 'ai-volatility-tax',
    title: 'AI Volatility Tax',
    domain: 'AI Economics',
    status: 'Active',
    confidence: 0.94,
    definition: 'The compounding margin penalty incurred when variable LLM inference query costs scale faster than subscription revenue, shifting hosting infrastructure into variable Cost of Goods Sold (COGS).',
    whyItMatters: 'Traditional SaaS enjoyed 80%+ gross margins because marginal serving cost was near zero. AI inference breaks this assumption, eroding gross margins by 20-40% unless model-task routing and semantic caching are enforced.',
    firstIntroduced: 'March 2025 (Beehiiv / Built In)',
    lastUpdated: 'July 2026',
    supportingPublicationIds: [
      'builtin-make-ai-profitable',
      'cio-claude-api-bill',
      'beehiiv-why-scaling-breaks-bank',
      'linkedin-growth-paradox'
    ],
    relatedConceptSlugs: [
      { slug: 'variable-cost-ai', relationship: 'derived_from' },
      { slug: 'ai-unit-economics', relationship: 'supports' },
      { slug: 'innovation-tax', relationship: 'extends' }
    ],
    evidenceQuality: {
      rating: 5,
      description: 'Grounded in 100+ enterprise R&D capital audits and live API billing telemetry across SaaS platforms.'
    },
    openQuestions: [
      'How does real-time audio/multimodal streaming alter the volatility tax threshold for enterprise agents?'
    ]
  },
  {
    slug: 'ai-unit-economics',
    title: 'AI Unit Economics',
    domain: 'AI Economics',
    status: 'Active',
    confidence: 0.95,
    definition: 'The quantitative framework measuring feature-level gross margin contribution, token burn rates, and cloud repatriation breakeven points for AI-native software.',
    whyItMatters: 'Prevents enterprise software teams from mistaking high user activity for financial success when individual query costs destroy unit margins.',
    firstIntroduced: 'January 2025 (CIO.com / Beehiiv)',
    lastUpdated: 'July 2026',
    supportingPublicationIds: [
      'beehiiv-ai-unit-economics-burn-rate',
      'cio-claude-api-bill',
      'mtp-3-financial-metrics'
    ],
    relatedConceptSlugs: [
      { slug: 'ai-volatility-tax', relationship: 'extends' },
      { slug: 'technical-insolvency', relationship: 'predicts' }
    ],
    evidenceQuality: {
      rating: 5,
      description: 'Formulas validated across 100+ due diligence engagements for investors and board rooms.'
    }
  },
  {
    slug: 'deterministic-governance',
    title: 'Deterministic Governance',
    domain: 'AI Governance',
    status: 'Active',
    confidence: 0.96,
    definition: 'An execution architecture that enforces binary admissibility gates, state integrity hashing, and cryptographic audit ledgers between probabilistic AI models and production systems.',
    whyItMatters: 'Probabilistic guardrails (confidence scores, LLM-as-a-judge) fail because they use guessing systems to police guessing systems. Deterministic governance enforces rule-based boundaries.',
    firstIntroduced: 'November 2025 (Beehiiv / Built In)',
    lastUpdated: 'July 2026',
    supportingPublicationIds: [
      'builtin-ai-security-gates',
      'builtin-kill-switch',
      'beehiiv-why-built-exogram',
      'beehiiv-deterministic-control-plane'
    ],
    relatedConceptSlugs: [
      { slug: 'agent-kill-switch', relationship: 'requires' },
      { slug: 'runtime-governance', relationship: 'implements' }
    ],
    evidenceQuality: {
      rating: 5,
      description: 'Implemented in production runtime security architectures and Exogram control planes.'
    }
  },
  {
    slug: 'agent-kill-switch',
    title: 'Agent Kill Switch',
    domain: 'AI Governance',
    status: 'Active',
    confidence: 0.93,
    definition: 'A binary execution control mechanism that halts autonomous AI agent operations within 5ms when safety rules or environmental hash boundaries are breached.',
    whyItMatters: 'Autonomous AI agents possess database credentials and API keys. Without a deterministic kill switch, memory poisoning or prompt injection can execute unauthorized production transactions.',
    firstIntroduced: 'May 2026 (Built In - Editor\'s Pick)',
    lastUpdated: 'July 2026',
    supportingPublicationIds: [
      'builtin-kill-switch',
      'builtin-ai-security-breach',
      'beehiiv-why-built-exogram'
    ],
    relatedConceptSlugs: [
      { slug: 'deterministic-governance', relationship: 'derived_from' },
      { slug: 'runtime-governance', relationship: 'implements' }
    ],
    evidenceQuality: {
      rating: 5,
      description: 'Featured in Built In (Editor\'s Pick) and deployed in autonomous agent security environments.'
    }
  },
  {
    slug: 'vibe-coding',
    title: 'Vibe Coding & Probabilistic Development',
    domain: 'Engineering Leadership',
    status: 'Active',
    confidence: 0.91,
    definition: 'The operational shift in software development where AI generates code volume and software engineers transition from syntax authoring to system verification and error auditing.',
    whyItMatters: 'High code generation velocity creates a review bottleneck if senior engineering verification capacity does not scale proportionally.',
    firstIntroduced: 'May 2026 (Built In - Editor\'s Pick)',
    lastUpdated: 'July 2026',
    supportingPublicationIds: [
      'builtin-vibe-coding-era',
      'cio-copilot-bottleneck',
      'beehiiv-subprime-code-crisis'
    ],
    relatedConceptSlugs: [
      { slug: 'subprime-code-crisis', relationship: 'predicts' },
      { slug: 'code-review-bottleneck', relationship: 'causes' }
    ],
    evidenceQuality: {
      rating: 4,
      description: 'Published in Built In (Editor\'s Pick) and verified across senior engineering team velocity audits.'
    }
  },
  {
    slug: 'subprime-code-crisis',
    title: 'The Subprime Code Crisis',
    domain: 'Software Economics',
    status: 'Active',
    confidence: 0.92,
    definition: 'The systemic accumulation of unverified, AI-generated code in enterprise repositories, creating hidden technical debt analogous to 2008 mortgage derivatives.',
    whyItMatters: 'Unverified code velocity inflates short-term output metrics while creating catastrophic long-term maintenance OpEx and security liabilities.',
    firstIntroduced: 'February 2026 (Beehiiv / LinkedIn)',
    lastUpdated: 'July 2026',
    supportingPublicationIds: [
      'beehiiv-subprime-code-crisis',
      'cio-cfo-agile',
      'linkedin-rd-ponzi-scheme'
    ],
    relatedConceptSlugs: [
      { slug: 'vibe-coding', relationship: 'derived_from' },
      { slug: 'innovation-tax', relationship: 'extends' }
    ],
    evidenceQuality: {
      rating: 4,
      description: 'Grounded in repository code quality audits and R&D capital misallocation studies.'
    }
  },
  {
    slug: 'product-economist',
    title: 'The Product Economist',
    domain: 'Product Economics',
    status: 'Active',
    confidence: 0.98,
    definition: 'A product management discipline focused on unit economics, R&D capital allocation, margin contribution, and technical debt valuation over vanity feature output.',
    whyItMatters: 'Bridges the gap between engineering story points and CFO-level balance sheet valuation.',
    firstIntroduced: 'October 2024 (Mind the Product / Beehiiv)',
    lastUpdated: 'July 2026',
    supportingPublicationIds: [
      'mtp-3-financial-metrics',
      'cio-shipping-faster',
      'beehiiv-clarity-to-compass',
      'linkedin-product-economist-shift'
    ],
    relatedConceptSlugs: [
      { slug: 'ai-unit-economics', relationship: 'supports' },
      { slug: 'innovation-tax', relationship: 'implements' }
    ],
    evidenceQuality: {
      rating: 5,
      description: 'Formed the foundation of 25+ curriculum tracks and 100+ executive advisory engagements.'
    }
  },
  {
    slug: 'innovation-tax',
    title: 'The Innovation Tax',
    domain: 'Software Economics',
    status: 'Active',
    confidence: 0.95,
    definition: 'The financial penalty paid when routine maintenance and technical debt remediation are misclassified as strategic R&D investment under ASC 350-40 accounting rules.',
    whyItMatters: 'Misclassifying maintenance OpEx overstates enterprise innovation spend by 30-40%, misleading boards and creating tax compliance liabilities.',
    firstIntroduced: 'December 2024 (CIO.com)',
    lastUpdated: 'July 2026',
    supportingPublicationIds: [
      'cio-innovation-tax-audit',
      'cio-cfo-agile',
      'linkedin-innovation-tax-deleting-code'
    ],
    relatedConceptSlugs: [
      { slug: 'subprime-code-crisis', relationship: 'causes' },
      { slug: 'product-economist', relationship: 'measures' }
    ],
    evidenceQuality: {
      rating: 5,
      description: 'Published in CIO.com and incorporated into corporate R&D tax credit auditing frameworks.'
    }
  }
];
