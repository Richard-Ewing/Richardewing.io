export interface ProvenanceMilestone {
  stage: 'Observation' | 'Research Note' | 'LinkedIn Essay' | 'Tier-1 Article' | 'Protocol Specification' | 'Book Chapter';
  label: string;
  publisher: string;
  date: string;
  url?: string;
  summary: string;
}

export interface CanonicalReadingStep {
  step: number;
  title: string;
  publisher: string;
  type: string;
  url?: string;
}

export interface EvidenceLedgerItem {
  id: string;
  title: string;
  url: string;
  publisher: string;
  type: 'Production Telemetry' | 'Multi-Company Audit' | 'Case Study' | 'Simulation' | 'Qualitative Observation';
  strength: 1 | 2 | 3 | 4 | 5;
  role: 'Origin' | 'Supports' | 'Extends' | 'Refines' | 'Challenges';
  date: string;
}

export interface ConceptHealth {
  confidence: number;
  evidenceCount: number;
  lastVerified: string;
  status: 'Active' | 'Evolving' | 'Superseded';
  openQuestionsCount: number;
  knownLimitationsCount: number;
  supersededBy?: string;
}

export interface ExecutableToolRef {
  name: string;
  url: string;
  description: string;
  type: 'Diagnostic Calculator' | 'Decision Tree' | 'Audit Scorecard' | 'Proving Ground';
}

export interface ConceptNode {
  slug: string;
  title: string;
  domain: 'AI Economics' | 'AI Governance' | 'Product Economics' | 'Software Economics' | 'Engineering Leadership' | 'Career Economics';
  health: ConceptHealth;
  definition: string;
  whyItMatters: string;
  firstIntroduced: string;
  executableTool?: ExecutableToolRef;
  canonicalReadingOrder: CanonicalReadingStep[];
  provenanceTimeline: ProvenanceMilestone[];
  evidenceLedger: EvidenceLedgerItem[];
  relatedConceptSlugs: Array<{
    slug: string;
    relationship: 'supports' | 'extends' | 'derived_from' | 'implements' | 'depends_on' | 'refines' | 'predicts' | 'causes';
  }>;
  openQuestions: string[];
  knownLimitations: string[];
}

export const CANONICAL_CONCEPTS: ConceptNode[] = [
  {
    slug: 'ai-volatility-tax',
    title: 'AI Volatility Tax',
    domain: 'AI Economics',
    health: { confidence: 0.94, evidenceCount: 4, lastVerified: 'July 2026', status: 'Active', openQuestionsCount: 2, knownLimitationsCount: 1 },
    definition: 'The compounding margin penalty incurred when variable LLM inference query costs scale faster than subscription revenue, shifting hosting infrastructure into variable Cost of Goods Sold (COGS).',
    whyItMatters: 'Traditional SaaS enjoyed 80%+ gross margins because marginal serving cost was near zero. AI inference breaks this assumption, eroding gross margins by 20-40% unless model-task routing and semantic caching are enforced.',
    firstIntroduced: 'March 2025 (Beehiiv / Built In)',
    executableTool: { name: 'AI Unit Economics Benchmark (AUEB)', url: '/tools/aueb', description: 'Calculate AI margin collapse with multi-API cost analysis and COGS forensics.', type: 'Diagnostic Calculator' },
    canonicalReadingOrder: [
      { step: 1, title: 'Generative AI Margin Squeeze & SaaS COGS', publisher: 'Beehiiv Laboratory', type: 'First Research Note', url: 'https://theaieconomist.beehiiv.com/p/generative-ai-margin-squeeze-saas-cogs' },
      { step: 2, title: 'Why Scaling Software Suddenly Breaks the Bank', publisher: 'Beehiiv Research', type: 'Hypothesis Formulation', url: 'https://theaieconomist.beehiiv.com/p/why-scaling-software-suddenly-breaks-the-bank' },
      { step: 3, title: 'AI Is a Variable Cost: Act Like It', publisher: 'LinkedIn Newsletters', type: 'Executive Strategy Essay', url: 'https://www.linkedin.com/pulse/ai-variable-cost-act-like-richard-ewing-6qx9c/' },
      { step: 4, title: 'Most AI Projects Just Burn Cash. Here’s How to Make Them Profitable.', publisher: 'Built In', type: 'Tier-1 Media Specification', url: 'https://builtin.com/articles/make-ai-projects-profitable' },
      { step: 5, title: 'Your Claude API Bill Is Higher Than Your Revenue', publisher: 'CIO.com', type: 'Executive Case Study', url: 'https://www.cio.com/article/4175244/your-claude-api-bill-is-higher-than-your-revenue-why-simple-python-tasks-are-blowing-up-ai-costs.html' },
      { step: 6, title: 'AI Unit Economics Benchmark (AUEB Engine)', publisher: 'richardewing.io', type: 'Executable Diagnostic Tool', url: '/tools/aueb' }
    ],
    provenanceTimeline: [
      { stage: 'Observation', label: 'Initial Inference Cost Squeeze', publisher: 'Beehiiv Laboratory', date: 'March 2025', url: 'https://theaieconomist.beehiiv.com/p/generative-ai-margin-squeeze-saas-cogs', summary: 'Noticed non-linear cost escalation in SaaS backends deploying un-cached LLM prompts.' },
      { stage: 'Research Note', label: 'Why Scaling Software Breaks the Bank', publisher: 'Beehiiv Research', date: 'April 2025', url: 'https://theaieconomist.beehiiv.com/p/why-scaling-software-suddenly-breaks-the-bank', summary: 'Formulated the volatility tax equation linking query volume to gross margin collapse.' },
      { stage: 'LinkedIn Essay', label: 'AI Is a Variable Cost: Act Like It', publisher: 'LinkedIn Newsletters', date: 'June 2025', url: 'https://www.linkedin.com/pulse/ai-variable-cost-act-like-richard-ewing-6qx9c/', summary: 'Presented executive strategy for treating AI inference as variable COGS rather than IT overhead.' },
      { stage: 'Tier-1 Article', label: 'Most AI Projects Just Burn Cash', publisher: 'Built In', date: 'October 2025', url: 'https://builtin.com/articles/make-ai-projects-profitable', summary: 'Formalized the AI Volatility Tax framework and unit margin calculations for enterprise product teams.' },
      { stage: 'Tier-1 Article', label: 'Your Claude API Bill Is Higher Than Your Revenue', publisher: 'CIO.com', date: 'May 2026', url: 'https://www.cio.com/article/4175244/your-claude-api-bill-is-higher-than-your-revenue-why-simple-python-tasks-are-blowing-up-ai-costs.html', summary: 'Applied the Volatility Tax model to frontier LLM model-task mismatch failures.' }
    ],
    evidenceLedger: [
      { id: 'ev-1', title: 'Claude API Bill Blowup Analysis', url: 'https://www.cio.com/article/4175244/your-claude-api-bill-is-higher-than-your-revenue-why-simple-python-tasks-are-blowing-up-ai-costs.html', publisher: 'CIO.com', type: 'Production Telemetry', strength: 5, role: 'Supports', date: 'May 2026' },
      { id: 'ev-2', title: 'Most AI Projects Burn Cash', url: 'https://builtin.com/articles/make-ai-projects-profitable', publisher: 'Built In', type: 'Multi-Company Audit', strength: 5, role: 'Supports', date: 'October 2025' },
      { id: 'ev-3', title: 'Generative AI Margin Squeeze', url: 'https://theaieconomist.beehiiv.com/p/generative-ai-margin-squeeze-saas-cogs', publisher: 'Beehiiv', type: 'Qualitative Observation', strength: 3, role: 'Origin', date: 'March 2025' },
      { id: 'ev-4', title: 'The Growth Paradox: More Users Less Profit', url: 'https://www.linkedin.com/pulse/growth-paradox-when-more-users-means-less-profit-richard-ewing-mtd6c/', publisher: 'LinkedIn', type: 'Case Study', strength: 4, role: 'Extends', date: 'January 2026' }
    ],
    relatedConceptSlugs: [
      { slug: 'variable-cost-ai', relationship: 'derived_from' },
      { slug: 'ai-unit-economics', relationship: 'supports' },
      { slug: 'innovation-tax', relationship: 'extends' }
    ],
    openQuestions: ['How does real-time audio/multimodal streaming alter the volatility tax threshold for enterprise agents?'],
    knownLimitations: ['Does not account for non-inference infrastructure expenses like vector database indexing.']
  },
  {
    slug: 'ai-unit-economics',
    title: 'AI Unit Economics',
    domain: 'AI Economics',
    health: { confidence: 0.95, evidenceCount: 3, lastVerified: 'July 2026', status: 'Active', openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'The quantitative framework measuring feature-level gross margin contribution, token burn rates, and cloud repatriation breakeven points for AI-native software.',
    whyItMatters: 'Prevents enterprise software teams from mistaking high user activity for financial success when individual query costs destroy unit margins.',
    firstIntroduced: 'January 2025 (CIO.com / Beehiiv)',
    executableTool: { name: 'AI Unit Economics Audit Framework', url: '/tools/aueb', description: 'Audit AI margin contribution and calculate gross margin contribution.', type: 'Diagnostic Calculator' },
    canonicalReadingOrder: [
      { step: 1, title: '3 Financial Metrics Every PM Needs on Their Scorecard', publisher: 'Mind the Product', type: 'P&L Scorecard Introduction', url: 'https://www.mindtheproduct.com/the-3-financial-metrics-every-pm-needs-on-their-scorecard/' },
      { step: 2, title: 'AI Unit Economics: Burn Rate and Technical Insolvency', publisher: 'Beehiiv Research', type: 'Research Formulation', url: 'https://theaieconomist.beehiiv.com/p/ai-unit-economics-burn-rate-technical-insolvency' },
      { step: 3, title: 'The AI Product Business Test: 5 Questions Before You Ship', publisher: 'Built In', type: 'Tier-1 Executive Framework', url: 'https://builtin.com/articles/ai-product-business-test' }
    ],
    provenanceTimeline: [
      { stage: 'Observation', label: 'Feature-Level P&L Disconnect', publisher: 'Mind the Product', date: 'October 2024', url: 'https://www.mindtheproduct.com/the-3-financial-metrics-every-pm-needs-on-their-scorecard/', summary: 'Identified that product managers tracked usage volume without visibility into gross margin contribution.' },
      { stage: 'Research Note', label: 'AI Unit Economics: Burn Rate & Insolvency', publisher: 'Beehiiv Research', date: 'January 2025', url: 'https://theaieconomist.beehiiv.com/p/ai-unit-economics-burn-rate-technical-insolvency', summary: 'Formulated unit margin equations for token consumption vs subscription revenue.' },
      { stage: 'Tier-1 Article', label: 'The Product P&L Test', publisher: 'Built In', date: 'April 2026', url: 'https://builtin.com/articles/ai-product-business-test', summary: 'Published the 5-point AI Product Business Test for product leaders.' }
    ],
    evidenceLedger: [
      { id: 'ev-ue-1', title: '3 Financial Metrics Every PM Needs', url: 'https://www.mindtheproduct.com/the-3-financial-metrics-every-pm-needs-on-their-scorecard/', publisher: 'Mind the Product', type: 'Multi-Company Audit', strength: 5, role: 'Origin', date: 'October 2024' },
      { id: 'ev-ue-2', title: 'AI Unit Economics & Burn Rate', url: 'https://theaieconomist.beehiiv.com/p/ai-unit-economics-burn-rate-technical-insolvency', publisher: 'Beehiiv', type: 'Production Telemetry', strength: 4, role: 'Supports', date: 'January 2025' },
      { id: 'ev-ue-3', title: 'AI Product Business Test', url: 'https://builtin.com/articles/ai-product-business-test', publisher: 'Built In', type: 'Case Study', strength: 5, role: 'Extends', date: 'April 2026' }
    ],
    relatedConceptSlugs: [
      { slug: 'ai-volatility-tax', relationship: 'extends' },
      { slug: 'technical-insolvency', relationship: 'predicts' }
    ],
    openQuestions: ['What are standard benchmark ratio thresholds for AI COGS as percentage of ARR in Series B SaaS?'],
    knownLimitations: ['Requires accurate per-customer token telemetry, which many legacy logging architectures lack.']
  },
  {
    slug: 'deterministic-governance',
    title: 'Deterministic Governance',
    domain: 'AI Governance',
    health: { confidence: 0.96, evidenceCount: 4, lastVerified: 'July 2026', status: 'Active', openQuestionsCount: 2, knownLimitationsCount: 1 },
    definition: 'An execution architecture that enforces binary admissibility gates, state integrity hashing, and cryptographic audit ledgers between probabilistic AI models and production systems.',
    whyItMatters: 'Probabilistic guardrails (confidence scores, LLM-as-a-judge) fail because they use guessing systems to police guessing systems. Deterministic governance enforces rule-based boundaries.',
    firstIntroduced: 'November 2025 (Beehiiv / Built In)',
    executableTool: { name: 'Exogram Proving Ground', url: 'https://exogram.ai/proving-ground', description: 'Test deterministic security gates and state integrity checks.', type: 'Proving Ground' },
    canonicalReadingOrder: [
      { step: 1, title: 'Why I Built Exogram: AI Agents Need Deterministic Governance', publisher: 'Beehiiv Laboratory', type: 'Problem Identification', url: 'https://theaieconomist.beehiiv.com/p/why-i-built-exogram-ai-agents-need-deterministic-governance' },
      { step: 2, title: 'Autonomous AI Agent Deterministic Control Plane', publisher: 'Beehiiv Research', type: 'Control Plane Architecture', url: 'https://theaieconomist.beehiiv.com/p/autonomous-ai-agent-deterministic-control-plane' },
      { step: 3, title: 'Architecting Security Gates for AI Agents', publisher: 'Built In', type: 'Security Gate Specification', url: 'https://builtin.com/articles/ai-agent-security-gates' },
      { step: 4, title: 'Your AI Agent Needs a Kill Switch', publisher: 'Built In', type: 'Tier-1 Executive Guide', url: 'https://builtin.com/articles/ai-agent-kill-switch' }
    ],
    provenanceTimeline: [
      { stage: 'Observation', label: 'Guardrails Security Failure Analysis', publisher: 'Beehiiv Laboratory', date: 'November 2025', url: 'https://theaieconomist.beehiiv.com/p/why-i-built-exogram-ai-agents-need-deterministic-governance', summary: 'Documented vulnerabilities in probabilistic LLM guardrails under prompt injection attacks.' },
      { stage: 'Research Note', label: 'Deterministic Control Plane Architecture', publisher: 'Beehiiv Research', date: 'January 2026', url: 'https://theaieconomist.beehiiv.com/p/autonomous-ai-agent-deterministic-control-plane', summary: 'Designed the proxy control plane separating inference from database execution.' },
      { stage: 'Tier-1 Article', label: 'Architecting Security Gates for AI Agents', publisher: 'Built In', date: 'March 2026', url: 'https://builtin.com/articles/ai-agent-security-gates', summary: 'Published the binary admissibility gate specification.' },
      { stage: 'Tier-1 Article', label: 'Your AI Agent Needs a Kill Switch', publisher: 'Built In', date: 'May 2026', url: 'https://builtin.com/articles/ai-agent-kill-switch', summary: 'Editor\'s Pick article detailing state integrity hashing and execution kill switches.' }
    ],
    evidenceLedger: [
      { id: 'ev-dg-1', title: 'Architecting Security Gates for AI Agents', url: 'https://builtin.com/articles/ai-agent-security-gates', publisher: 'Built In', type: 'Production Telemetry', strength: 5, role: 'Supports', date: 'March 2026' },
      { id: 'ev-dg-2', title: 'Your AI Agent Needs a Kill Switch', url: 'https://builtin.com/articles/ai-agent-kill-switch', publisher: 'Built In', type: 'Case Study', strength: 5, role: 'Extends', date: 'May 2026' },
      { id: 'ev-dg-3', title: 'Autonomous AI Agent Control Plane', url: 'https://theaieconomist.beehiiv.com/p/autonomous-ai-agent-deterministic-control-plane', publisher: 'Beehiiv', type: 'Simulation', strength: 4, role: 'Origin', date: 'January 2026' }
    ],
    relatedConceptSlugs: [
      { slug: 'agent-kill-switch', relationship: 'requires' },
      { slug: 'runtime-governance', relationship: 'implements' }
    ],
    openQuestions: ['Can state integrity hashing execute within sub-2ms latency budgets across global multi-region clusters?'],
    knownLimitations: ['Requires explicit schema definition of all permitted API actions prior to runtime deployment.']
  },
  {
    slug: 'agent-kill-switch',
    title: 'Agent Kill Switch',
    domain: 'AI Governance',
    health: { confidence: 0.93, evidenceCount: 3, lastVerified: 'July 2026', status: 'Active', openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'A binary execution control mechanism that halts autonomous AI agent operations within 5ms when safety rules or environmental hash boundaries are breached.',
    whyItMatters: 'Autonomous AI agents possess database credentials and API keys. Without a deterministic kill switch, memory poisoning or prompt injection can execute unauthorized production transactions.',
    firstIntroduced: 'May 2026 (Built In - Editor\'s Pick)',
    executableTool: { name: 'Agentic Drift & Boundary Matrix', url: '/tools/agentic-drift-matrix', description: 'Audit agent action allowlists and execution boundaries.', type: 'Decision Tree' },
    canonicalReadingOrder: [
      { step: 1, title: 'Inside the First Autonomous AI Agent Security Breach', publisher: 'Built In', type: 'Breach Post-Mortem', url: 'https://builtin.com/articles/ai-agent-security-breach' },
      { step: 2, title: 'The Architecture of Runtime Governance', publisher: 'Beehiiv Research', type: 'Execution Interception Specs', url: 'https://theaieconomist.beehiiv.com/p/the-architecture-of-runtime-governance' },
      { step: 3, title: 'Your AI Agent Needs a Kill Switch', publisher: 'Built In', type: 'Canonical Specification', url: 'https://builtin.com/articles/ai-agent-kill-switch' }
    ],
    provenanceTimeline: [
      { stage: 'Observation', label: 'First AI Agent Security Breach Analysis', publisher: 'Built In', date: 'February 2026', url: 'https://builtin.com/articles/ai-agent-security-breach', summary: 'Analyzed production breach caused by un-contained agent tool execution.' },
      { stage: 'Research Note', label: 'Architecture of Runtime Governance', publisher: 'Beehiiv Research', date: 'March 2026', url: 'https://theaieconomist.beehiiv.com/p/the-architecture-of-runtime-governance', summary: 'Formulated sub-5ms kill switch interception specs.' },
      { stage: 'Tier-1 Article', label: 'Your AI Agent Needs a Kill Switch', publisher: 'Built In', date: 'May 2026', url: 'https://builtin.com/articles/ai-agent-kill-switch', summary: 'Published the canonical kill switch specification (Editor\'s Pick).' }
    ],
    evidenceLedger: [
      { id: 'ev-ks-1', title: 'Your AI Agent Needs a Kill Switch', url: 'https://builtin.com/articles/ai-agent-kill-switch', publisher: 'Built In', type: 'Production Telemetry', strength: 5, role: 'Origin', date: 'May 2026' },
      { id: 'ev-ks-2', title: 'Inside the First AI Agent Breach', url: 'https://builtin.com/articles/ai-agent-security-breach', publisher: 'Built In', type: 'Case Study', strength: 5, role: 'Supports', date: 'February 2026' }
    ],
    relatedConceptSlugs: [
      { slug: 'deterministic-governance', relationship: 'derived_from' },
      { slug: 'runtime-governance', relationship: 'implements' }
    ],
    openQuestions: ['How to handle state rollback when an agent has modified third-party SaaS APIs that lack transaction undo semantics?'],
    knownLimitations: ['Cannot un-send external emails or webhooks once dispatched if the kill switch triggers post-execution.']
  },
  {
    slug: 'vibe-coding',
    title: 'Vibe Coding & Probabilistic Development',
    domain: 'Engineering Leadership',
    health: { confidence: 0.91, evidenceCount: 3, lastVerified: 'July 2026', status: 'Active', openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'The operational shift in software development where AI generates code volume and software engineers transition from syntax authoring to system verification and error auditing.',
    whyItMatters: 'High code generation velocity creates a review bottleneck if senior engineering verification capacity does not scale proportionally.',
    firstIntroduced: 'May 2026 (Built In - Editor\'s Pick)',
    executableTool: { name: 'Audit Interview Scorecard Engine', url: '/tools/audit-interview', description: 'Evaluate engineering candidates on error detection capacity rather than syntax authoring.', type: 'Audit Scorecard' },
    canonicalReadingOrder: [
      { step: 1, title: 'GitHub Copilot Is Generating More Code Than Your Team Can Review', publisher: 'CIO.com', type: 'Review Bottleneck Analysis', url: 'https://www.cio.com/article/4183045/github-copilot-is-generating-more-code-than-your-team-can-review-why-senior-engineers-are-now-the-bottleneck.html' },
      { step: 2, title: 'The Subprime Code Crisis', publisher: 'Beehiiv Research', type: '4 Laws of Probabilistic Development', url: 'https://theaieconomist.beehiiv.com/p/the-subprime-code-crisis' },
      { step: 3, title: 'In the Vibe Coding Era, What Does a Software Engineer Even Do?', publisher: 'Built In', type: 'Tier-1 Specification (Editor\'s Pick)', url: 'https://builtin.com/articles/vibe-coding-era-software-engineering-role' }
    ],
    provenanceTimeline: [
      { stage: 'Observation', label: 'Copilot Code Review Capacity Crunch', publisher: 'CIO.com', date: 'January 2026', url: 'https://www.cio.com/article/4183045/github-copilot-is-generating-more-code-than-your-team-can-review-why-senior-engineers-are-now-the-bottleneck.html', summary: 'Identified senior engineer review bottlenecks caused by AI code output.' },
      { stage: 'Tier-1 Article', label: 'In the Vibe Coding Era, What Does an Engineer Do?', publisher: 'Built In', date: 'May 2026', url: 'https://builtin.com/articles/vibe-coding-era-software-engineering-role', summary: 'Published the Vibe Coding framework (Editor\'s Pick).' }
    ],
    evidenceLedger: [
      { id: 'ev-vc-1', title: 'In the Vibe Coding Era', url: 'https://builtin.com/articles/vibe-coding-era-software-engineering-role', publisher: 'Built In', type: 'Multi-Company Audit', strength: 5, role: 'Origin', date: 'May 2026' }
    ],
    relatedConceptSlugs: [
      { slug: 'subprime-code-crisis', relationship: 'predicts' },
      { slug: 'code-review-bottleneck', relationship: 'causes' }
    ],
    openQuestions: ['What is the optimal ratio of senior staff auditors to AI code generators in 50+ engineer organizations?'],
    knownLimitations: ['Varies significantly between statically typed languages (TypeScript/Rust) and dynamically typed languages (Python).']
  },
  {
    slug: 'subprime-code-crisis',
    title: 'The Subprime Code Crisis',
    domain: 'Software Economics',
    health: { confidence: 0.92, evidenceCount: 3, lastVerified: 'July 2026', status: 'Active', openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'The systemic accumulation of unverified, AI-generated code in enterprise repositories, creating hidden technical debt analogous to 2008 mortgage derivatives.',
    whyItMatters: 'Unverified code velocity inflates short-term output metrics while creating catastrophic long-term maintenance OpEx and security liabilities.',
    firstIntroduced: 'February 2026 (Beehiiv / LinkedIn)',
    executableTool: { name: 'Product Debt Index Engine (PDI)', url: '/tools/pdi', description: 'Quantify unverified code debt and calculate burn-down ROI projections.', type: 'Diagnostic Calculator' },
    canonicalReadingOrder: [
      { step: 1, title: 'Why Your CFO Hates Your Agile Transformation', publisher: 'CIO.com', type: 'Velocity vs Capitalization Analysis', url: 'https://www.cio.com/article/4143737/why-your-cfo-hates-your-agile-transformation.html' },
      { step: 2, title: 'The Subprime Code Crisis', publisher: 'Beehiiv Research', type: 'Financial Derivative Analogy', url: 'https://theaieconomist.beehiiv.com/p/the-subprime-code-crisis' }
    ],
    provenanceTimeline: [
      { stage: 'Research Note', label: 'The Subprime Code Crisis', publisher: 'Beehiiv Research', date: 'February 2026', url: 'https://theaieconomist.beehiiv.com/p/the-subprime-code-crisis', summary: 'Formulated the financial derivative analogy for AI code debt.' }
    ],
    evidenceLedger: [
      { id: 'ev-scc-1', title: 'The Subprime Code Crisis', url: 'https://theaieconomist.beehiiv.com/p/the-subprime-code-crisis', publisher: 'Beehiiv', type: 'Multi-Company Audit', strength: 5, role: 'Origin', date: 'February 2026' }
    ],
    relatedConceptSlugs: [
      { slug: 'vibe-coding', relationship: 'derived_from' },
      { slug: 'innovation-tax', relationship: 'extends' }
    ],
    openQuestions: ['What automated refactoring tools effectively reduce subprime code debt?'],
    knownLimitations: ['Difficult to measure until codebases reach 18+ months of accumulated AI contributions.']
  },
  {
    slug: 'product-economist',
    title: 'The Product Economist',
    domain: 'Product Economics',
    health: { confidence: 0.98, evidenceCount: 4, lastVerified: 'July 2026', status: 'Active', openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'A product management discipline focused on unit economics, R&D capital allocation, margin contribution, and technical debt valuation over vanity feature output.',
    whyItMatters: 'Bridges the gap between engineering story points and CFO-level balance sheet valuation.',
    firstIntroduced: 'October 2024 (Mind the Product / Beehiiv)',
    executableTool: { name: 'APER Engineering ROI Calculator', url: '/tools/aper', description: 'Calculate Revenue Per Engineer and team health metrics.', type: 'Diagnostic Calculator' },
    canonicalReadingOrder: [
      { step: 1, title: '3 Financial Metrics Every PM Needs on Their Scorecard', publisher: 'Mind the Product', type: 'Financial Scorecard Framework', url: 'https://www.mindtheproduct.com/the-3-financial-metrics-every-pm-needs-on-their-scorecard/' },
      { step: 2, title: 'From Clarity to Compass', publisher: 'Beehiiv Laboratory', type: 'Foundational Manifesto', url: 'https://theaieconomist.beehiiv.com/p/from-clarity-to-compass-why-i-walked-away-and-what-you-ll-get-here' }
    ],
    provenanceTimeline: [
      { stage: 'Observation', label: '3 Financial Metrics Every PM Needs', publisher: 'Mind the Product', date: 'October 2024', url: 'https://www.mindtheproduct.com/the-3-financial-metrics-every-pm-needs-on-their-scorecard/', summary: 'Introduced financial P&L scorecard for product managers.' }
    ],
    evidenceLedger: [
      { id: 'ev-pe-1', title: '3 Financial Metrics Every PM Needs', url: 'https://www.mindtheproduct.com/the-3-financial-metrics-every-pm-needs-on-their-scorecard/', publisher: 'Mind the Product', type: 'Multi-Company Audit', strength: 5, role: 'Origin', date: 'October 2024' }
    ],
    relatedConceptSlugs: [
      { slug: 'ai-unit-economics', relationship: 'supports' },
      { slug: 'innovation-tax', relationship: 'implements' }
    ],
    openQuestions: ['How do product organizations transition existing feature-driven PM incentives?'],
    knownLimitations: ['Requires product managers to have direct visibility into cloud hosting line items.']
  },
  {
    slug: 'innovation-tax',
    title: 'The Innovation Tax',
    domain: 'Software Economics',
    health: { confidence: 0.95, evidenceCount: 3, lastVerified: 'July 2026', status: 'Active', openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'The financial penalty paid when routine maintenance and technical debt remediation are misclassified as strategic R&D investment under ASC 350-40 accounting rules.',
    whyItMatters: 'Misclassifying maintenance OpEx overstates enterprise innovation spend by 30-40%, misleading boards and creating tax compliance liabilities.',
    firstIntroduced: 'December 2024 (CIO.com)',
    executableTool: { name: 'Innovation Tax Calculator', url: '/tools/innovation-tax-calculator', description: 'Audit R&D spend vs ASC 350-40 OpEx rules.', type: 'Diagnostic Calculator' },
    canonicalReadingOrder: [
      { step: 1, title: 'Why Your CFO Hates Your Agile Transformation', publisher: 'CIO.com', type: 'ASC 350-40 Rule Analysis', url: 'https://www.cio.com/article/4143737/why-your-cfo-hates-your-agile-transformation.html' },
      { step: 2, title: 'The Innovation Tax Audit', publisher: 'CIO.com', type: 'Tier-1 Canonical Audit Framework', url: 'https://www.cio.com/article/4158459/the-innovation-tax-audit-is-your-rd-actually-just-opex.html' }
    ],
    provenanceTimeline: [
      { stage: 'Tier-1 Article', label: 'The Innovation Tax Audit', publisher: 'CIO.com', date: 'December 2024', url: 'https://www.cio.com/article/4158459/the-innovation-tax-audit-is-your-rd-actually-just-opex.html', summary: 'Published the canonical Innovation Tax Audit framework.' }
    ],
    evidenceLedger: [
      { id: 'ev-it-1', title: 'The Innovation Tax Audit', url: 'https://www.cio.com/article/4158459/the-innovation-tax-audit-is-your-rd-actually-just-opex.html', publisher: 'CIO.com', type: 'Production Telemetry', strength: 5, role: 'Origin', date: 'December 2024' }
    ],
    relatedConceptSlugs: [
      { slug: 'subprime-code-crisis', relationship: 'causes' },
      { slug: 'product-economist', relationship: 'measures' }
    ],
    openQuestions: ['What automated git commit heuristics separate ASC 350-40 capitalizable feature development?'],
    knownLimitations: ['Subject to local tax jurisdiction variations in international corporate operations.']
  },
  {
    slug: 'model-collapse',
    title: 'Model Collapse & Synthetic Inflation',
    domain: 'AI Economics',
    health: { confidence: 0.93, evidenceCount: 3, lastVerified: 'July 2026', status: 'Active', openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'The degradation of LLM reasoning performance and cost efficiency caused by recursive training on AI-generated synthetic data across the web.',
    whyItMatters: 'Forces enterprise AI teams to pay escalating prices for human-curated datasets and fine-tuning to prevent reasoning degradation.',
    firstIntroduced: 'August 2025 (CIO.com)',
    executableTool: { name: 'AI Operational Risk Calculator', url: '/tools/ai-roi-timeline', description: 'Model degradation risk and fine-tuning cost escalation.', type: 'Diagnostic Calculator' },
    canonicalReadingOrder: [
      { step: 1, title: 'The Hidden Inflation of AI: Why Model Collapse Is a Business Risk', publisher: 'CIO.com', type: 'Tier-1 Executive Analysis', url: 'https://www.cio.com/article/4151360/the-hidden-inflation-of-ai-why-model-collapse-is-a-business-risk.html' }
    ],
    provenanceTimeline: [
      { stage: 'Tier-1 Article', label: 'The Hidden Inflation of AI', publisher: 'CIO.com', date: 'August 2025', url: 'https://www.cio.com/article/4151360/the-hidden-inflation-of-ai-why-model-collapse-is-a-business-risk.html', summary: 'Analyzed degrading economics of recursive synthetic AI data training.' }
    ],
    evidenceLedger: [
      { id: 'ev-mc-1', title: 'The Hidden Inflation of AI', url: 'https://www.cio.com/article/4151360/the-hidden-inflation-of-ai-why-model-collapse-is-a-business-risk.html', publisher: 'CIO.com', type: 'Multi-Company Audit', strength: 5, role: 'Origin', date: 'August 2025' }
    ],
    relatedConceptSlugs: [
      { slug: 'ai-volatility-tax', relationship: 'causes' }
    ],
    openQuestions: ['What proportion of synthetic data can be safely blended before model accuracy degrades?'],
    knownLimitations: ['Impact varies based on base model architecture and RLHF alignment quality.']
  },
  {
    slug: 'technical-insolvency',
    title: 'Technical Insolvency Date',
    domain: 'Software Economics',
    health: { confidence: 0.96, evidenceCount: 4, lastVerified: 'July 2026', status: 'Active', openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'The projected calendar date when an engineering codebase requires more financial capital to maintain than its feature output generates in customer value.',
    whyItMatters: 'Translates abstract technical debt into a concrete, balance-sheet bankruptcy date for CFOs and M&A due diligence teams.',
    firstIntroduced: 'November 2024 (Beehiiv / Built In)',
    executableTool: { name: 'Technical Insolvency Date Engine (PDI)', url: '/tools/pdi', description: 'Calculate exact calendar Technical Insolvency Date based on debt accumulation.', type: 'Diagnostic Calculator' },
    canonicalReadingOrder: [
      { step: 1, title: 'AI Unit Economics: Burn Rate and Technical Insolvency', publisher: 'Beehiiv Research', type: 'Insolvency Math Formulation', url: 'https://theaieconomist.beehiiv.com/p/ai-unit-economics-burn-rate-technical-insolvency' },
      { step: 2, title: 'Real Innovation Requires Deleting Code, Not Writing It', publisher: 'Built In', type: 'Remediation Strategy', url: 'https://builtin.com/articles/innovation-requires-deleting-code' }
    ],
    provenanceTimeline: [
      { stage: 'Research Note', label: 'Technical Insolvency Formulation', publisher: 'Beehiiv Research', date: 'November 2024', url: 'https://theaieconomist.beehiiv.com/p/ai-unit-economics-burn-rate-technical-insolvency', summary: 'Formulated the math predicting code bankruptcy dates.' }
    ],
    evidenceLedger: [
      { id: 'ev-ti-1', title: 'AI Unit Economics & Technical Insolvency', url: 'https://theaieconomist.beehiiv.com/p/ai-unit-economics-burn-rate-technical-insolvency', publisher: 'Beehiiv', type: 'Production Telemetry', strength: 5, role: 'Origin', date: 'November 2024' }
    ],
    relatedConceptSlugs: [
      { slug: 'subprime-code-crisis', relationship: 'predicts' },
      { slug: 'innovation-tax', relationship: 'measures' }
    ],
    openQuestions: ['How to model insolvency dates for legacy monorepos with fragmented microservice architectures?'],
    knownLimitations: ['Requires accurate git commit churn rates and engineer hourly cost data.']
  },
  {
    slug: 'audit-interview',
    title: 'The Audit Interview Framework',
    domain: 'Engineering Leadership',
    health: { confidence: 0.94, evidenceCount: 3, lastVerified: 'July 2026', status: 'Active', openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'An engineering hiring evaluation methodology that scores candidates on error detection, system architecture auditing, and hallucination catching rather than code generation speed.',
    whyItMatters: 'Traditional leetcode coding interviews test what AI can generate in 2 seconds, failing to evaluate whether an engineer can catch what AI gets wrong.',
    firstIntroduced: 'March 2026 (Built In - Editor\'s Pick)',
    executableTool: { name: 'Audit Interview Scorecard Engine', url: '/tools/audit-interview', description: 'Run interactive candidate audit scorecards across 4 dimensions of engineering judgment.', type: 'Audit Scorecard' },
    canonicalReadingOrder: [
      { step: 1, title: 'Is Anthropic’s ‘Cheating’ Scandal the End of the Coding Interview?', publisher: 'Built In', type: 'Problem Analysis (Editor\'s Pick)', url: 'https://builtin.com/articles/reimagining-coding-interview' },
      { step: 2, title: 'When AI Writes the Code, What Skills Are Employers Hiring For?', publisher: 'Built In', type: 'Canonical Audit Scorecard (Editor\'s Pick)', url: 'https://builtin.com/articles/audit-interview-scorecard' }
    ],
    provenanceTimeline: [
      { stage: 'Tier-1 Article', label: 'Reimagining the Coding Interview', publisher: 'Built In', date: 'March 2026', url: 'https://builtin.com/articles/reimagining-coding-interview', summary: 'Replaced leetcode interviews with error detection audits.' },
      { stage: 'Tier-1 Article', label: 'Audit Interview Scorecard', publisher: 'Built In', date: 'April 2026', url: 'https://builtin.com/articles/audit-interview-scorecard', summary: 'Published the 4 Dimensions of Engineering Judgment scorecard.' }
    ],
    evidenceLedger: [
      { id: 'ev-ai-1', title: 'Audit Interview Scorecard', url: 'https://builtin.com/articles/audit-interview-scorecard', publisher: 'Built In', type: 'Multi-Company Audit', strength: 5, role: 'Origin', date: 'April 2026' }
    ],
    relatedConceptSlugs: [
      { slug: 'vibe-coding', relationship: 'implements' }
    ],
    openQuestions: ['What are the baseline scoring thresholds for principal staff engineers vs senior software engineers?'],
    knownLimitations: ['Requires interviewer training to evaluate reasoning verbalization during bug discovery.']
  },
  {
    slug: 'coordination-tax',
    title: 'B2B SaaS Coordination Tax',
    domain: 'Software Economics',
    health: { confidence: 0.93, evidenceCount: 3, lastVerified: 'July 2026', status: 'Active', openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'The exponential increase in communication and alignment overhead required to coordinate engineering teams as organization size grows, compressing gross profit margins.',
    whyItMatters: 'Doubling engineering headcount often increases coordination friction by 4x, reducing per-engineer revenue contribution unless autonomous decision boundaries are established.',
    firstIntroduced: 'December 2024 (Beehiiv / LinkedIn)',
    executableTool: { name: 'APER Revenue Per Engineer Calculator', url: '/tools/aper', description: 'Quantify coordination tax friction and team productivity metrics.', type: 'Diagnostic Calculator' },
    canonicalReadingOrder: [
      { step: 1, title: 'B2B SaaS Coordination Tax & SaaS Engineering Margins', publisher: 'Beehiiv Research', type: 'Friction Cost Analysis', url: 'https://theaieconomist.beehiiv.com/p/b2b-saas-coordination-tax-saas-engineering-margins' }
    ],
    provenanceTimeline: [
      { stage: 'Research Note', label: 'B2B SaaS Coordination Tax', publisher: 'Beehiiv Research', date: 'December 2024', url: 'https://theaieconomist.beehiiv.com/p/b2b-saas-coordination-tax-saas-engineering-margins', summary: 'Quantified communication friction overhead in engineering orgs.' }
    ],
    evidenceLedger: [
      { id: 'ev-ct-1', title: 'B2B SaaS Coordination Tax', url: 'https://theaieconomist.beehiiv.com/p/b2b-saas-coordination-tax-saas-engineering-margins', publisher: 'Beehiiv', type: 'Production Telemetry', strength: 5, role: 'Origin', date: 'December 2024' }
    ],
    relatedConceptSlugs: [
      { slug: 'innovation-tax', relationship: 'extends' }
    ],
    openQuestions: ['How does async AI agent delegation reduce human coordination tax in distributed engineering teams?'],
    knownLimitations: ['Varies depending on remote vs in-person engineering organizational structure.']
  }
];
