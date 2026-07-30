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
  type: 'Production Telemetry' | 'Multi-Company Audit' | 'Case Study' | 'Simulation' | 'Qualitative Observation' | 'Origin';
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
  category: 'Industry Concept (Discovery On-Ramp)' | 'Richard Ewing Canon (Original Framework)' | 'Bridge Concept';
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
    relationship: 
      | 'supports' | 'extends' | 'derived_from' | 'implements'
      | 'measures' | 'predicts' | 'contradicts' | 'depends_on'
      | 'refines' | 'simplifies' | 'generalizes' | 'explains'
      | 'formalizes' | 'causes' | 'correlates_with' | 'requires';
  }>;
  openQuestions: string[];
  knownLimitations: string[];
}

export const CANONICAL_CONCEPTS: ConceptNode[] = [
  // =========================================================================
  // LAYER 1: INDUSTRY CONCEPTS (Discovery On-Ramps)
  // =========================================================================
  {
    slug: 'ai-governance',
    title: 'AI Governance',
    category: 'Industry Concept (Discovery On-Ramp)',
    domain: 'AI Governance',
    health: { confidence: 0.98, evidenceCount: 6, lastVerified: 'July 2026', status: 'Active', openQuestionsCount: 2, knownLimitationsCount: 1 },
    definition: 'The enterprise control framework governing security, compliance, operational boundaries, and audit trails for autonomous AI models and multi-agent workflows.',
    whyItMatters: 'As AI agents gain direct write permissions to databases and payment APIs, enterprise governance must transition from policy documents to real-time runtime enforcement.',
    firstIntroduced: 'Industry Term (Bridged by Richard Ewing)',
    executableTool: { name: 'Exogram Proving Ground', url: 'https://exogram.ai/proving-ground', description: 'Test deterministic security gates and state integrity checks.', type: 'Proving Ground' },
    canonicalReadingOrder: [
      { step: 1, title: 'Architecting Security Gates for AI Agents', publisher: 'Built In', type: 'Security Gate Specification', url: 'https://builtin.com/articles/ai-agent-security-gates' },
      { step: 2, title: 'Your AI Agent Needs a Kill Switch', publisher: 'Built In', type: 'Tier-1 Executive Guide', url: 'https://builtin.com/articles/ai-agent-kill-switch' }
    ],
    provenanceTimeline: [
      { stage: 'Tier-1 Article', label: 'Security Gates for AI Agents', publisher: 'Built In', date: 'March 2026', url: 'https://builtin.com/articles/ai-agent-security-gates', summary: 'Defined binary admissibility gates for enterprise AI governance.' }
    ],
    evidenceLedger: [
      { id: 'ev-aig-1', title: 'Architecting Security Gates', url: 'https://builtin.com/articles/ai-agent-security-gates', publisher: 'Built In', type: 'Production Telemetry', strength: 5, role: 'Supports', date: 'March 2026' }
    ],
    relatedConceptSlugs: [
      { slug: 'deterministic-governance', relationship: 'extends' },
      { slug: 'agent-kill-switch', relationship: 'requires' }
    ],
    openQuestions: ['How to enforce AI governance standards across cross-cloud multi-agent delegation pipelines?'],
    knownLimitations: ['Traditional static policy compliance documents fail to intercept sub-second agent execution anomalies.']
  },
  {
    slug: 'ai-economics',
    title: 'AI Economics',
    category: 'Industry Concept (Discovery On-Ramp)',
    domain: 'AI Economics',
    health: { confidence: 0.99, evidenceCount: 8, lastVerified: 'July 2026', status: 'Active', openQuestionsCount: 2, knownLimitationsCount: 1 },
    definition: 'The financial discipline analyzing variable inference cost scaling, gross margin compression, token unit economics, and capital allocation in AI-native software.',
    whyItMatters: 'Replaces vanity usage growth metrics with unit margin contribution analysis to ensure AI software products remain financially solvent.',
    firstIntroduced: 'Industry Term (Bridged by Richard Ewing)',
    executableTool: { name: 'AI Unit Economics Benchmark (AUEB)', url: '/tools/aueb', description: 'Calculate AI margin collapse with multi-API cost analysis.', type: 'Diagnostic Calculator' },
    canonicalReadingOrder: [
      { step: 1, title: 'Generative AI Margin Squeeze & SaaS COGS', publisher: 'Beehiiv Laboratory', type: 'First Research Note', url: 'https://theaieconomist.beehiiv.com/p/generative-ai-margin-squeeze-saas-cogs' },
      { step: 2, title: 'Most AI Projects Just Burn Cash', publisher: 'Built In', type: 'Tier-1 Framework', url: 'https://builtin.com/articles/make-ai-projects-profitable' }
    ],
    provenanceTimeline: [
      { stage: 'Tier-1 Article', label: 'Make AI Projects Profitable', publisher: 'Built In', date: 'October 2025', url: 'https://builtin.com/articles/make-ai-projects-profitable', summary: 'Published unit margin calculations for AI product teams.' }
    ],
    evidenceLedger: [
      { id: 'ev-aie-1', title: 'Make AI Projects Profitable', url: 'https://builtin.com/articles/make-ai-projects-profitable', publisher: 'Built In', type: 'Multi-Company Audit', strength: 5, role: 'Supports', date: 'October 2025' }
    ],
    relatedConceptSlugs: [
      { slug: 'ai-volatility-tax', relationship: 'extends' },
      { slug: 'ai-unit-economics', relationship: 'supports' }
    ],
    openQuestions: ['What are standard benchmark ratio thresholds for AI COGS as a percentage of ARR in Series B SaaS?'],
    knownLimitations: ['Requires granular API billing instrumentation per customer session.']
  },
  {
    slug: 'ai-agents',
    title: 'AI Agents & Agentic Systems',
    category: 'Industry Concept (Discovery On-Ramp)',
    domain: 'AI Governance',
    health: { confidence: 0.96, evidenceCount: 5, lastVerified: 'July 2026', status: 'Active', openQuestionsCount: 2, knownLimitationsCount: 1 },
    definition: 'Autonomous software systems leveraging large language models to reason, plan, select tools, and execute multi-step operations with minimal human intervention.',
    whyItMatters: 'Autonomous agent execution creates unbounded tool-calling vulnerabilities unless constrained by deterministic control planes.',
    firstIntroduced: 'Industry Term (Bridged by Richard Ewing)',
    executableTool: { name: 'Agentic Drift & Boundary Matrix', url: '/tools/agentic-drift-matrix', description: 'Audit agent action allowlists and execution boundaries.', type: 'Decision Tree' },
    canonicalReadingOrder: [
      { step: 1, title: 'Inside the First Autonomous AI Agent Security Breach', publisher: 'Built In', type: 'Breach Post-Mortem', url: 'https://builtin.com/articles/ai-agent-security-breach' },
      { step: 2, title: 'Your AI Agent Needs a Kill Switch', publisher: 'Built In', type: 'Tier-1 Executive Guide', url: 'https://builtin.com/articles/ai-agent-kill-switch' }
    ],
    provenanceTimeline: [
      { stage: 'Tier-1 Article', label: 'First AI Agent Security Breach', publisher: 'Built In', date: 'February 2026', url: 'https://builtin.com/articles/ai-agent-security-breach', summary: 'Documented production vulnerabilities in autonomous tool-calling agents.' }
    ],
    evidenceLedger: [
      { id: 'ev-aia-1', title: 'First AI Agent Security Breach', url: 'https://builtin.com/articles/ai-agent-security-breach', publisher: 'Built In', type: 'Case Study', strength: 5, role: 'Supports', date: 'February 2026' }
    ],
    relatedConceptSlugs: [
      { slug: 'agent-kill-switch', relationship: 'requires' },
      { slug: 'deterministic-governance', relationship: 'implements' }
    ],
    openQuestions: ['How to handle state rollback when an agent modifies external SaaS APIs without transactional rollback support?'],
    knownLimitations: ['Agentic loops can trigger retry cascades if tool outputs fail schema validation.']
  },
  {
    slug: 'technical-debt',
    title: 'Technical Debt & Code Debt',
    category: 'Industry Concept (Discovery On-Ramp)',
    domain: 'Software Economics',
    health: { confidence: 0.97, evidenceCount: 5, lastVerified: 'July 2026', status: 'Active', openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'The implied cost of additional refactoring caused by choosing an expedient code solution now instead of using a well-architected approach.',
    whyItMatters: 'AI code generators accelerate technical debt creation by 5-10x, turning static code debt into systemic Technical Insolvency.',
    firstIntroduced: 'Industry Term (Bridged by Richard Ewing)',
    executableTool: { name: 'Product Debt Index Engine (PDI)', url: '/tools/pdi', description: 'Quantify unverified code debt and calculate burn-down ROI.', type: 'Diagnostic Calculator' },
    canonicalReadingOrder: [
      { step: 1, title: 'Why Your CFO Hates Your Agile Transformation', publisher: 'CIO.com', type: 'Velocity Analysis', url: 'https://www.cio.com/article/4143737/why-your-cfo-hates-your-agile-transformation.html' },
      { step: 2, title: 'The Subprime Code Crisis', publisher: 'Beehiiv Research', type: 'Derivative Analogy', url: 'https://theaieconomist.beehiiv.com/p/the-subprime-code-crisis' }
    ],
    provenanceTimeline: [
      { stage: 'Tier-1 Article', label: 'Why CFOs Hate Agile Transformation', publisher: 'CIO.com', date: 'November 2024', url: 'https://www.cio.com/article/4143737/why-your-cfo-hates-your-agile-transformation.html', summary: 'Analyzed how high story point velocity masks technical debt accumulation.' }
    ],
    evidenceLedger: [
      { id: 'ev-td-1', title: 'Why CFOs Hate Agile', url: 'https://www.cio.com/article/4143737/why-your-cfo-hates-your-agile-transformation.html', publisher: 'CIO.com', type: 'Multi-Company Audit', strength: 5, role: 'Supports', date: 'November 2024' }
    ],
    relatedConceptSlugs: [
      { slug: 'subprime-code-crisis', relationship: 'extends' },
      { slug: 'technical-insolvency', relationship: 'predicts' }
    ],
    openQuestions: ['What automated refactoring heuristics safely clean AI-generated debt?'],
    knownLimitations: ['Often ignored by executive teams until maintenance OpEx consumes 60%+ of engineering capacity.']
  },
  {
    slug: 'ai-finops',
    title: 'AI FinOps & Inference Cost Optimization',
    category: 'Industry Concept (Discovery On-Ramp)',
    domain: 'AI Economics',
    health: { confidence: 0.95, evidenceCount: 4, lastVerified: 'July 2026', status: 'Active', openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'The operational practice of managing, monitoring, and optimizing cloud inference expenses, model routing, and token budgets across enterprise applications.',
    whyItMatters: 'Without real-time inference FinOps, single un-optimized prompts can generate five-figure cloud billing spikes overnight.',
    firstIntroduced: 'Industry Term (Bridged by Richard Ewing)',
    executableTool: { name: 'AI Unit Economics Benchmark (AUEB)', url: '/tools/aueb', description: 'Audit token consumption and model-task routing efficiency.', type: 'Diagnostic Calculator' },
    canonicalReadingOrder: [
      { step: 1, title: 'Your Claude API Bill Is Higher Than Your Revenue', publisher: 'CIO.com', type: 'API Cost Audit', url: 'https://www.cio.com/article/4175244/your-claude-api-bill-is-higher-than-your-revenue-why-simple-python-tasks-are-blowing-up-ai-costs.html' }
    ],
    provenanceTimeline: [
      { stage: 'Tier-1 Article', label: 'Claude API Bill Blowup', publisher: 'CIO.com', date: 'May 2026', url: 'https://www.cio.com/article/4175244/your-claude-api-bill-is-higher-than-your-revenue-why-simple-python-tasks-are-blowing-up-ai-costs.html', summary: 'Published executive guide on model-task mismatch and inference cost spikes.' }
    ],
    evidenceLedger: [
      { id: 'ev-af-1', title: 'Claude API Bill Blowup', url: 'https://www.cio.com/article/4175244/your-claude-api-bill-is-higher-than-your-revenue-why-simple-python-tasks-are-blowing-up-ai-costs.html', publisher: 'CIO.com', type: 'Production Telemetry', strength: 5, role: 'Supports', date: 'May 2026' }
    ],
    relatedConceptSlugs: [
      { slug: 'ai-volatility-tax', relationship: 'extends' },
      { slug: 'ai-unit-economics', relationship: 'implements' }
    ],
    openQuestions: ['What are optimal cache TTL heuristics for dynamic prompt parameters?'],
    knownLimitations: ['Requires real-time telemetry proxies between model endpoints and backend services.']
  },

  // =========================================================================
  // LAYER 2: RICHARD EWING ORIGINAL CANON (High Differentiation)
  // =========================================================================
  {
    slug: 'ai-volatility-tax',
    title: 'AI Volatility Tax',
    category: 'Richard Ewing Canon (Original Framework)',
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
      { step: 4, title: 'Most AI Projects Just Burn Cash', publisher: 'Built In', type: 'Tier-1 Media Specification', url: 'https://builtin.com/articles/make-ai-projects-profitable' },
      { step: 5, title: 'Your Claude API Bill Is Higher Than Your Revenue', publisher: 'CIO.com', type: 'Executive Case Study', url: 'https://www.cio.com/article/4175244/your-claude-api-bill-is-higher-than-your-revenue-why-simple-python-tasks-are-blowing-up-ai-costs.html' }
    ],
    provenanceTimeline: [
      { stage: 'Observation', label: 'Initial Inference Cost Squeeze', publisher: 'Beehiiv Laboratory', date: 'March 2025', url: 'https://theaieconomist.beehiiv.com/p/generative-ai-margin-squeeze-saas-cogs', summary: 'Noticed non-linear cost escalation in SaaS backends deploying un-cached LLM prompts.' },
      { stage: 'Research Note', label: 'Why Scaling Software Breaks the Bank', publisher: 'Beehiiv Research', date: 'April 2025', url: 'https://theaieconomist.beehiiv.com/p/why-scaling-software-suddenly-breaks-the-bank', summary: 'Formulated the volatility tax equation linking query volume to gross margin collapse.' },
      { stage: 'Tier-1 Article', label: 'Most AI Projects Just Burn Cash', publisher: 'Built In', date: 'October 2025', url: 'https://builtin.com/articles/make-ai-projects-profitable', summary: 'Formalized the AI Volatility Tax framework and unit margin calculations.' }
    ],
    evidenceLedger: [
      { id: 'ev-vt-1', title: 'Claude API Bill Blowup Analysis', url: 'https://www.cio.com/article/4175244/your-claude-api-bill-is-higher-than-your-revenue-why-simple-python-tasks-are-blowing-up-ai-costs.html', publisher: 'CIO.com', type: 'Production Telemetry', strength: 5, role: 'Supports', date: 'May 2026' }
    ],
    relatedConceptSlugs: [
      { slug: 'ai-economics', relationship: 'derived_from' },
      { slug: 'ai-unit-economics', relationship: 'supports' }
    ],
    openQuestions: ['How does real-time audio/multimodal streaming alter the volatility tax threshold?'],
    knownLimitations: ['Does not account for non-inference infrastructure expenses like vector indexing.']
  },
  {
    slug: 'ai-economist',
    title: 'The AI Economist',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'AI Economics',
    health: { confidence: 0.99, evidenceCount: 8, lastVerified: 'July 2026', status: 'Active', openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'An executive leadership role focused on the financial behavior, margin contribution, governance boundary design, and capital efficiency of AI systems.',
    whyItMatters: 'Traditional product managers track feature shipping; AI Economists optimize unit margins, token burn rates, and deterministic execution safety.',
    firstIntroduced: 'November 2024 (Beehiiv Laboratory / Richard Ewing)',
    executableTool: { name: 'AI Unit Economics Audit Engine', url: '/tools/aueb', description: 'Run full AI P&L diagnostic audits across enterprise product lines.', type: 'Diagnostic Calculator' },
    canonicalReadingOrder: [
      { step: 1, title: 'From Clarity to Compass: Why I Walked Away and What You’ll Get Here', publisher: 'Beehiiv Laboratory', type: 'Foundational Manifesto', url: 'https://theaieconomist.beehiiv.com/p/from-clarity-to-compass-why-i-walked-away-and-what-you-ll-get-here' },
      { step: 2, title: 'The Product Economist: A Structural Shift', publisher: 'LinkedIn Newsletters', type: 'Strategic Discipline Specification', url: 'https://www.linkedin.com/pulse/product-economist-structural-shift-richard-ewing-jrlhc/' }
    ],
    provenanceTimeline: [
      { stage: 'Observation', label: 'From Clarity to Compass Manifesto', publisher: 'Beehiiv Laboratory', date: 'November 2024', url: 'https://theaieconomist.beehiiv.com/p/from-clarity-to-compass-why-i-walked-away-and-what-you-ll-get-here', summary: 'Published the foundational AI Economist manifesto.' }
    ],
    evidenceLedger: [
      { id: 'ev-aiec-1', title: 'From Clarity to Compass', url: 'https://theaieconomist.beehiiv.com/p/from-clarity-to-compass-why-i-walked-away-and-what-you-ll-get-here', publisher: 'Beehiiv', type: 'Origin', strength: 5, role: 'Origin', date: 'November 2024' }
    ],
    relatedConceptSlugs: [
      { slug: 'product-economist', relationship: 'supports' },
      { slug: 'ai-economics', relationship: 'implements' }
    ],
    openQuestions: ['How do executive compensation scorecards incorporate AI Economist margin contribution targets?'],
    knownLimitations: ['Requires access to both cloud hosting vendor bills and customer subscription ARR telemetry.']
  },
  {
    slug: 'product-economist',
    title: 'The Product Economist',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'Product Economics',
    health: { confidence: 0.98, evidenceCount: 4, lastVerified: 'July 2026', status: 'Active', openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'A product management discipline focused on unit economics, R&D capital allocation, margin contribution, and technical debt valuation over vanity feature output.',
    whyItMatters: 'Bridges the gap between engineering story points and CFO-level balance sheet valuation.',
    firstIntroduced: 'October 2024 (Mind the Product / Beehiiv)',
    executableTool: { name: 'APER Engineering ROI Calculator', url: '/tools/aper', description: 'Calculate Revenue Per Engineer and team health metrics.', type: 'Diagnostic Calculator' },
    canonicalReadingOrder: [
      { step: 1, title: '3 Financial Metrics Every PM Needs on Their Scorecard', publisher: 'Mind the Product', type: 'Financial Scorecard Framework', url: 'https://www.mindtheproduct.com/the-3-financial-metrics-every-pm-needs-on-their-scorecard/' },
      { step: 2, title: 'Hey, Senior PMs: Shipping Faster Won’t Get You Promoted', publisher: 'CIO.com', type: 'Tier-1 Strategy Guide', url: 'https://www.cio.com/article/4128139/hey-senior-pms-shipping-faster-wont-get-you-promoted.html' }
    ],
    provenanceTimeline: [
      { stage: 'Observation', label: '3 Financial Metrics Every PM Needs', publisher: 'Mind the Product', date: 'October 2024', url: 'https://www.mindtheproduct.com/the-3-financial-metrics-every-pm-needs-on-their-scorecard/', summary: 'Introduced financial P&L scorecard for product managers.' },
      { stage: 'Tier-1 Article', label: 'Shipping Faster Won\'t Get You Promoted', publisher: 'CIO.com', date: 'March 2025', url: 'https://www.cio.com/article/4128139/hey-senior-pms-shipping-faster-wont-get-you-promoted.html', summary: 'Published executive strategy guide on PM financial governance.' }
    ],
    evidenceLedger: [
      { id: 'ev-pe-1', title: '3 Financial Metrics Every PM Needs', url: 'https://www.mindtheproduct.com/the-3-financial-metrics-every-pm-needs-on-their-scorecard/', publisher: 'Mind the Product', type: 'Multi-Company Audit', strength: 5, role: 'Origin', date: 'October 2024' }
    ],
    relatedConceptSlugs: [
      { slug: 'ai-economist', relationship: 'derived_from' },
      { slug: 'innovation-tax', relationship: 'implements' }
    ],
    openQuestions: ['How to transition existing feature-driven PM incentives to P&L margin contribution scorecards?'],
    knownLimitations: ['Requires product managers to have direct visibility into cloud hosting line items.']
  },
  {
    slug: 'deterministic-governance',
    title: 'Deterministic Governance',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'AI Governance',
    health: { confidence: 0.96, evidenceCount: 4, lastVerified: 'July 2026', status: 'Active', openQuestionsCount: 2, knownLimitationsCount: 1 },
    definition: 'An execution architecture that enforces binary admissibility gates, state integrity hashing, and cryptographic audit ledgers between probabilistic AI models and production systems.',
    whyItMatters: 'Probabilistic guardrails fail because they use guessing systems to police guessing systems. Deterministic governance enforces rule-based execution boundaries.',
    firstIntroduced: 'November 2025 (Beehiiv / Built In)',
    executableTool: { name: 'Exogram Proving Ground', url: 'https://exogram.ai/proving-ground', description: 'Test deterministic security gates and state integrity checks.', type: 'Proving Ground' },
    canonicalReadingOrder: [
      { step: 1, title: 'Why I Built Exogram: AI Agents Need Deterministic Governance', publisher: 'Beehiiv Laboratory', type: 'Problem Identification', url: 'https://theaieconomist.beehiiv.com/p/why-i-built-exogram-ai-agents-need-deterministic-governance' },
      { step: 2, title: 'Architecting Security Gates for AI Agents', publisher: 'Built In', type: 'Security Gate Specification', url: 'https://builtin.com/articles/ai-agent-security-gates' },
      { step: 3, title: 'Your AI Agent Needs a Kill Switch', publisher: 'Built In', type: 'Tier-1 Executive Guide', url: 'https://builtin.com/articles/ai-agent-kill-switch' }
    ],
    provenanceTimeline: [
      { stage: 'Tier-1 Article', label: 'Your AI Agent Needs a Kill Switch', publisher: 'Built In', date: 'May 2026', url: 'https://builtin.com/articles/ai-agent-kill-switch', summary: 'Published state integrity hashing and execution kill switch specifications (Editor\'s Pick).' }
    ],
    evidenceLedger: [
      { id: 'ev-dg-1', title: 'Your AI Agent Needs a Kill Switch', url: 'https://builtin.com/articles/ai-agent-kill-switch', publisher: 'Built In', type: 'Production Telemetry', strength: 5, role: 'Origin', date: 'May 2026' }
    ],
    relatedConceptSlugs: [
      { slug: 'ai-governance', relationship: 'derived_from' },
      { slug: 'agent-kill-switch', relationship: 'requires' }
    ],
    openQuestions: ['Can state integrity hashing execute within sub-2ms latency budgets across multi-region clusters?'],
    knownLimitations: ['Requires explicit schema definition of permitted API actions prior to deployment.']
  },
  {
    slug: 'agent-kill-switch',
    title: 'Agent Kill Switch',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'AI Governance',
    health: { confidence: 0.93, evidenceCount: 3, lastVerified: 'July 2026', status: 'Active', openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'A binary execution control mechanism that halts autonomous AI agent operations within 5ms when safety rules or environmental hash boundaries are breached.',
    whyItMatters: 'Autonomous AI agents possess database credentials and API keys. Without a deterministic kill switch, memory poisoning or prompt injection can execute unauthorized production transactions.',
    firstIntroduced: 'May 2026 (Built In - Editor\'s Pick)',
    executableTool: { name: 'Agentic Drift & Boundary Matrix', url: '/tools/agentic-drift-matrix', description: 'Audit agent action allowlists and execution boundaries.', type: 'Decision Tree' },
    canonicalReadingOrder: [
      { step: 1, title: 'Inside the First Autonomous AI Agent Security Breach', publisher: 'Built In', type: 'Breach Post-Mortem', url: 'https://builtin.com/articles/ai-agent-security-breach' },
      { step: 2, title: 'Your AI Agent Needs a Kill Switch', publisher: 'Built In', type: 'Canonical Specification', url: 'https://builtin.com/articles/ai-agent-kill-switch' }
    ],
    provenanceTimeline: [
      { stage: 'Tier-1 Article', label: 'Your AI Agent Needs a Kill Switch', publisher: 'Built In', date: 'May 2026', url: 'https://builtin.com/articles/ai-agent-kill-switch', summary: 'Published the canonical kill switch specification (Editor\'s Pick).' }
    ],
    evidenceLedger: [
      { id: 'ev-ks-1', title: 'Your AI Agent Needs a Kill Switch', url: 'https://builtin.com/articles/ai-agent-kill-switch', publisher: 'Built In', type: 'Production Telemetry', strength: 5, role: 'Origin', date: 'May 2026' }
    ],
    relatedConceptSlugs: [
      { slug: 'deterministic-governance', relationship: 'derived_from' },
      { slug: 'ai-agents', relationship: 'supports' }
    ],
    openQuestions: ['How to handle state rollback when an agent modifies external APIs without undo semantics?'],
    knownLimitations: ['Cannot un-send external webhooks once dispatched if the kill switch triggers post-execution.']
  },
  {
    slug: 'vibe-coding',
    title: 'Vibe Coding & Probabilistic Development',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'Engineering Leadership',
    health: { confidence: 0.91, evidenceCount: 3, lastVerified: 'July 2026', status: 'Active', openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'The operational shift in software development where AI generates code volume and software engineers transition from syntax authoring to system verification and error auditing.',
    whyItMatters: 'High code generation velocity creates a review bottleneck if senior engineering verification capacity does not scale proportionally.',
    firstIntroduced: 'May 2026 (Built In - Editor\'s Pick)',
    executableTool: { name: 'Audit Interview Scorecard Engine', url: '/tools/audit-interview', description: 'Evaluate engineering candidates on error detection capacity.', type: 'Audit Scorecard' },
    canonicalReadingOrder: [
      { step: 1, title: 'GitHub Copilot Is Generating More Code Than Your Team Can Review', publisher: 'CIO.com', type: 'Review Bottleneck Analysis', url: 'https://www.cio.com/article/4183045/github-copilot-is-generating-more-code-than-your-team-can-review-why-senior-engineers-are-now-the-bottleneck.html' },
      { step: 2, title: 'In the Vibe Coding Era, What Does a Software Engineer Even Do?', publisher: 'Built In', type: 'Tier-1 Specification (Editor\'s Pick)', url: 'https://builtin.com/articles/vibe-coding-era-software-engineering-role' }
    ],
    provenanceTimeline: [
      { stage: 'Tier-1 Article', label: 'In the Vibe Coding Era', publisher: 'Built In', date: 'May 2026', url: 'https://builtin.com/articles/vibe-coding-era-software-engineering-role', summary: 'Published the Vibe Coding framework (Editor\'s Pick).' }
    ],
    evidenceLedger: [
      { id: 'ev-vc-1', title: 'In the Vibe Coding Era', url: 'https://builtin.com/articles/vibe-coding-era-software-engineering-role', publisher: 'Built In', type: 'Multi-Company Audit', strength: 5, role: 'Origin', date: 'May 2026' }
    ],
    relatedConceptSlugs: [
      { slug: 'subprime-code-crisis', relationship: 'predicts' },
      { slug: 'audit-interview', relationship: 'implements' }
    ],
    openQuestions: ['What is the optimal ratio of senior staff auditors to AI code generators?'],
    knownLimitations: ['Varies significantly between statically typed and dynamically typed languages.']
  },
  {
    slug: 'subprime-code-crisis',
    title: 'The Subprime Code Crisis',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'Software Economics',
    health: { confidence: 0.92, evidenceCount: 3, lastVerified: 'July 2026', status: 'Active', openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'The systemic accumulation of unverified, AI-generated code in enterprise repositories, creating hidden technical debt analogous to 2008 mortgage derivatives.',
    whyItMatters: 'Unverified code velocity inflates short-term output metrics while creating catastrophic long-term maintenance OpEx and security liabilities.',
    firstIntroduced: 'February 2026 (Beehiiv / LinkedIn)',
    executableTool: { name: 'Product Debt Index Engine (PDI)', url: '/tools/pdi', description: 'Quantify unverified code debt and calculate burn-down ROI projections.', type: 'Diagnostic Calculator' },
    canonicalReadingOrder: [
      { step: 1, title: 'Why Your CFO Hates Your Agile Transformation', publisher: 'CIO.com', type: 'Velocity Analysis', url: 'https://www.cio.com/article/4143737/why-your-cfo-hates-your-agile-transformation.html' },
      { step: 2, title: 'The Subprime Code Crisis', publisher: 'Beehiiv Research', type: 'Financial Derivative Analogy', url: 'https://theaieconomist.beehiiv.com/p/the-subprime-code-crisis' }
    ],
    provenanceTimeline: [
      { stage: 'Research Note', label: 'The Subprime Code Crisis', publisher: 'Beehiiv Research', date: 'February 2026', url: 'https://theaieconomist.beehiiv.com/p/the-subprime-code-crisis', summary: 'Formulated the financial derivative analogy for AI code debt.' }
    ],
    evidenceLedger: [
      { id: 'ev-scc-1', title: 'The Subprime Code Crisis', url: 'https://theaieconomist.beehiiv.com/p/the-subprime-code-crisis', publisher: 'Beehiiv', type: 'Multi-Company Audit', strength: 5, role: 'Origin', date: 'February 2026' }
    ],
    relatedConceptSlugs: [
      { slug: 'technical-debt', relationship: 'derived_from' },
      { slug: 'vibe-coding', relationship: 'derived_from' }
    ],
    openQuestions: ['What automated refactoring tools effectively reduce subprime code debt?'],
    knownLimitations: ['Difficult to measure until codebases reach 18+ months of accumulated AI contributions.']
  },
  {
    slug: 'innovation-tax',
    title: 'The Innovation Tax',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'Software Economics',
    health: { confidence: 0.95, evidenceCount: 3, lastVerified: 'July 2026', status: 'Active', openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'The financial penalty paid when routine maintenance and technical debt remediation are misclassified as strategic R&D investment under ASC 350-40 accounting rules.',
    whyItMatters: 'Misclassifying maintenance OpEx overstates enterprise innovation spend by 30-40%, misleading boards and creating tax compliance liabilities.',
    firstIntroduced: 'December 2024 (CIO.com)',
    executableTool: { name: 'Innovation Tax Calculator', url: '/tools/innovation-tax-calculator', description: 'Audit R&D spend vs ASC 350-40 OpEx rules.', type: 'Diagnostic Calculator' },
    canonicalReadingOrder: [
      { step: 1, title: 'The Innovation Tax Audit: Is Your R&D Actually Just OpEx?', publisher: 'CIO.com', type: 'Tier-1 Audit Framework', url: 'https://www.cio.com/article/4158459/the-innovation-tax-audit-is-your-rd-actually-just-opex.html' }
    ],
    provenanceTimeline: [
      { stage: 'Tier-1 Article', label: 'The Innovation Tax Audit', publisher: 'CIO.com', date: 'December 2024', url: 'https://www.cio.com/article/4158459/the-innovation-tax-audit-is-your-rd-actually-just-opex.html', summary: 'Published the canonical Innovation Tax Audit framework.' }
    ],
    evidenceLedger: [
      { id: 'ev-it-1', title: 'The Innovation Tax Audit', url: 'https://www.cio.com/article/4158459/the-innovation-tax-audit-is-your-rd-actually-just-opex.html', publisher: 'CIO.com', type: 'Production Telemetry', strength: 5, role: 'Origin', date: 'December 2024' }
    ],
    relatedConceptSlugs: [
      { slug: 'product-economist', relationship: 'measures' },
      { slug: 'subprime-code-crisis', relationship: 'causes' }
    ],
    openQuestions: ['What automated git commit heuristics separate ASC 350-40 capitalizable feature development?'],
    knownLimitations: ['Subject to local tax jurisdiction variations in international corporate operations.']
  },
  {
    slug: 'rd-ponzi-scheme',
    title: 'The R&D Ponzi Scheme ($891k Lie)',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'Software Economics',
    health: { confidence: 0.94, evidenceCount: 3, lastVerified: 'July 2026', status: 'Active', openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'The illusion created on executive engineering dashboards when high story point velocity hides an escalating $891,000 annual maintenance liability.',
    whyItMatters: 'Exposes how traditional engineering dashboards celebrate output while accumulating un-capitalizable technical debt.',
    firstIntroduced: 'April 2026 (LinkedIn Newsletters)',
    executableTool: { name: 'Product Debt Index Engine (PDI)', url: '/tools/pdi', description: 'Audit dashboard velocity vs hidden maintenance liabilities.', type: 'Diagnostic Calculator' },
    canonicalReadingOrder: [
      { step: 1, title: 'The R&D Ponzi Scheme: The $891,000 Lie on Your Dashboard', publisher: 'LinkedIn Newsletters', type: 'Dashboard Audit Strategy', url: 'https://www.linkedin.com/pulse/rd-ponzi-scheme-891000-lie-your-engineering-dashboard-richard-ewing-bkwdc/' }
    ],
    provenanceTimeline: [
      { stage: 'LinkedIn Essay', label: 'The R&D Ponzi Scheme', publisher: 'LinkedIn Newsletters', date: 'April 2026', url: 'https://www.linkedin.com/pulse/rd-ponzi-scheme-891000-lie-your-engineering-dashboard-richard-ewing-bkwdc/', summary: 'Quantified the $891k average maintenance liability on engineering dashboards.' }
    ],
    evidenceLedger: [
      { id: 'ev-rdp-1', title: 'The R&D Ponzi Scheme', url: 'https://www.linkedin.com/pulse/rd-ponzi-scheme-891000-lie-your-engineering-dashboard-richard-ewing-bkwdc/', publisher: 'LinkedIn', type: 'Multi-Company Audit', strength: 5, role: 'Origin', date: 'April 2026' }
    ],
    relatedConceptSlugs: [
      { slug: 'innovation-tax', relationship: 'extends' },
      { slug: 'technical-insolvency', relationship: 'predicts' }
    ],
    openQuestions: ['How to realign executive OKRs from story point output to debt burn-down?'],
    knownLimitations: ['Requires financial literacy training for engineering VP and director levels.']
  },
  {
    slug: 'saas-growth-paradox',
    title: 'The SaaS Growth Paradox',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'AI Economics',
    health: { confidence: 0.93, evidenceCount: 3, lastVerified: 'July 2026', status: 'Active', openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'The counter-intuitive economic state in AI-native SaaS where acquiring more active users increases inference COGS faster than revenue, reducing net profitability.',
    whyItMatters: 'Forces SaaS leaders to re-evaluate traditional growth-at-all-costs playbooks when customer usage drives unit margin contraction.',
    firstIntroduced: 'January 2026 (LinkedIn Newsletters)',
    executableTool: { name: 'AI Unit Economics Benchmark (AUEB)', url: '/tools/aueb', description: 'Model revenue vs inference cost curves under user scaling.', type: 'Diagnostic Calculator' },
    canonicalReadingOrder: [
      { step: 1, title: 'The Growth Paradox: When More Users Means Less Profit', publisher: 'LinkedIn Newsletters', type: 'Case Study', url: 'https://www.linkedin.com/pulse/growth-paradox-when-more-users-means-less-profit-richard-ewing-mtd6c/' }
    ],
    provenanceTimeline: [
      { stage: 'LinkedIn Essay', label: 'The Growth Paradox', publisher: 'LinkedIn Newsletters', date: 'January 2026', url: 'https://www.linkedin.com/pulse/growth-paradox-when-more-users-means-less-profit-richard-ewing-mtd6c/', summary: 'Analyzed non-linear inference cost curves in scaling AI applications.' }
    ],
    evidenceLedger: [
      { id: 'ev-gp-1', title: 'The Growth Paradox', url: 'https://www.linkedin.com/pulse/growth-paradox-when-more-users-means-less-profit-richard-ewing-mtd6c/', publisher: 'LinkedIn', type: 'Case Study', strength: 5, role: 'Origin', date: 'January 2026' }
    ],
    relatedConceptSlugs: [
      { slug: 'ai-volatility-tax', relationship: 'derived_from' },
      { slug: 'ai-unit-economics', relationship: 'supports' }
    ],
    openQuestions: ['What usage-based pricing tiers successfully neutralize the growth paradox?'],
    knownLimitations: ['Applies specifically to LLM and high-compute inference workloads.']
  },
  {
    slug: 'technical-insolvency',
    title: 'Technical Insolvency Date',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'Software Economics',
    health: { confidence: 0.96, evidenceCount: 4, lastVerified: 'July 2026', status: 'Active', openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'The projected calendar date when an engineering codebase requires more financial capital to maintain than its feature output generates in customer value.',
    whyItMatters: 'Translates abstract technical debt into a concrete, balance-sheet bankruptcy date for CFOs and M&A due diligence teams.',
    firstIntroduced: 'November 2024 (Beehiiv / Built In)',
    executableTool: { name: 'Technical Insolvency Date Engine (PDI)', url: '/tools/pdi', description: 'Calculate exact calendar Technical Insolvency Date.', type: 'Diagnostic Calculator' },
    canonicalReadingOrder: [
      { step: 1, title: 'AI Unit Economics: Burn Rate and Technical Insolvency', publisher: 'Beehiiv Research', type: 'Insolvency Math', url: 'https://theaieconomist.beehiiv.com/p/ai-unit-economics-burn-rate-technical-insolvency' }
    ],
    provenanceTimeline: [
      { stage: 'Research Note', label: 'Technical Insolvency Formulation', publisher: 'Beehiiv Research', date: 'November 2024', url: 'https://theaieconomist.beehiiv.com/p/ai-unit-economics-burn-rate-technical-insolvency', summary: 'Formulated the math predicting code bankruptcy dates.' }
    ],
    evidenceLedger: [
      { id: 'ev-ti-1', title: 'Technical Insolvency', url: 'https://theaieconomist.beehiiv.com/p/ai-unit-economics-burn-rate-technical-insolvency', publisher: 'Beehiiv', type: 'Production Telemetry', strength: 5, role: 'Origin', date: 'November 2024' }
    ],
    relatedConceptSlugs: [
      { slug: 'technical-debt', relationship: 'derived_from' },
      { slug: 'subprime-code-crisis', relationship: 'predicts' }
    ],
    openQuestions: ['How to model insolvency dates for legacy microservice architectures?'],
    knownLimitations: ['Requires accurate git commit churn rates and engineer hourly cost data.']
  },
  {
    slug: 'audit-interview',
    title: 'The Audit Interview Framework',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'Engineering Leadership',
    health: { confidence: 0.94, evidenceCount: 3, lastVerified: 'July 2026', status: 'Active', openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'An engineering hiring evaluation methodology that scores candidates on error detection, system architecture auditing, and hallucination catching rather than code generation speed.',
    whyItMatters: 'Traditional leetcode coding interviews test what AI can generate in 2 seconds, failing to evaluate whether an engineer can catch what AI gets wrong.',
    firstIntroduced: 'March 2026 (Built In - Editor\'s Pick)',
    executableTool: { name: 'Audit Interview Scorecard Engine', url: '/tools/audit-interview', description: 'Run candidate audit scorecards across 4 dimensions of engineering judgment.', type: 'Audit Scorecard' },
    canonicalReadingOrder: [
      { step: 1, title: 'Is Anthropic’s ‘Cheating’ Scandal the End of the Coding Interview?', publisher: 'Built In', type: 'Problem Analysis', url: 'https://builtin.com/articles/reimagining-coding-interview' },
      { step: 2, title: 'When AI Writes the Code, What Skills Are Employers Hiring For?', publisher: 'Built In', type: 'Canonical Audit Scorecard', url: 'https://builtin.com/articles/audit-interview-scorecard' }
    ],
    provenanceTimeline: [
      { stage: 'Tier-1 Article', label: 'Audit Interview Scorecard', publisher: 'Built In', date: 'April 2026', url: 'https://builtin.com/articles/audit-interview-scorecard', summary: 'Published the 4 Dimensions of Engineering Judgment scorecard.' }
    ],
    evidenceLedger: [
      { id: 'ev-ai-1', title: 'Audit Interview Scorecard', url: 'https://builtin.com/articles/audit-interview-scorecard', publisher: 'Built In', type: 'Multi-Company Audit', strength: 5, role: 'Origin', date: 'April 2026' }
    ],
    relatedConceptSlugs: [
      { slug: 'vibe-coding', relationship: 'implements' }
    ],
    openQuestions: ['What are baseline scoring thresholds for principal staff engineers vs senior software engineers?'],
    knownLimitations: ['Requires interviewer training to evaluate reasoning verbalization during bug discovery.']
  },
  {
    slug: 'coordination-tax',
    title: 'B2B SaaS Coordination Tax',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'Software Economics',
    health: { confidence: 0.93, evidenceCount: 3, lastVerified: 'July 2026', status: 'Active', openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'The exponential increase in communication and alignment overhead required to coordinate engineering teams as organization size grows, compressing gross profit margins.',
    whyItMatters: 'Doubling engineering headcount often increases coordination friction by 4x, reducing per-engineer revenue contribution.',
    firstIntroduced: 'December 2024 (Beehiiv / LinkedIn)',
    executableTool: { name: 'APER Revenue Per Engineer Calculator', url: '/tools/aper', description: 'Quantify coordination tax friction and team productivity metrics.', type: 'Diagnostic Calculator' },
    canonicalReadingOrder: [
      { step: 1, title: 'B2B SaaS Coordination Tax & SaaS Engineering Margins', publisher: 'Beehiiv Research', type: 'Friction Analysis', url: 'https://theaieconomist.beehiiv.com/p/b2b-saas-coordination-tax-saas-engineering-margins' }
    ],
    provenanceTimeline: [
      { stage: 'Research Note', label: 'B2B SaaS Coordination Tax', publisher: 'Beehiiv Research', date: 'December 2024', url: 'https://theaieconomist.beehiiv.com/p/b2b-saas-coordination-tax-saas-engineering-margins', summary: 'Quantified communication friction overhead in engineering orgs.' }
    ],
    evidenceLedger: [
      { id: 'ev-ct-1', title: 'B2B SaaS Coordination Tax', url: 'https://theaieconomist.beehiiv.com/p/b2b-saas-coordination-tax-saas-engineering-margins', publisher: 'Beehiiv', type: 'Production Telemetry', strength: 5, role: 'Origin', date: 'December 2024' }
    ],
    relatedConceptSlugs: [
      { slug: 'product-economist', relationship: 'supports' }
    ],
    openQuestions: ['How does async AI agent delegation reduce human coordination tax?'],
    knownLimitations: ['Varies depending on remote vs in-person engineering organizational structure.']
  },
  {
    slug: 'model-collapse',
    title: 'Model Collapse & Synthetic Inflation',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'AI Economics',
    health: { confidence: 0.93, evidenceCount: 3, lastVerified: 'July 2026', status: 'Active', openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'The degradation of LLM reasoning performance and cost efficiency caused by recursive training on AI-generated synthetic data across the web.',
    whyItMatters: 'Forces enterprise AI teams to pay escalating prices for human-curated datasets and fine-tuning to prevent reasoning degradation.',
    firstIntroduced: 'August 2025 (CIO.com)',
    executableTool: { name: 'AI Operational Risk Calculator', url: '/tools/ai-roi-timeline', description: 'Model degradation risk and fine-tuning cost escalation.', type: 'Diagnostic Calculator' },
    canonicalReadingOrder: [
      { step: 1, title: 'The Hidden Inflation of AI: Why Model Collapse Is a Business Risk', publisher: 'CIO.com', type: 'Executive Analysis', url: 'https://www.cio.com/article/4151360/the-hidden-inflation-of-ai-why-model-collapse-is-a-business-risk.html' }
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
  }
];
