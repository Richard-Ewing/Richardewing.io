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

export interface ConceptFAQ {
  question: string;
  answer: string;
}

export interface ConceptComparison {
  vsConceptSlug: string;
  vsTitle: string;
  keyDifferences: string[];
  whenToUseWhich: string;
}

export interface ConceptExamples {
  enterprise: string;
  startup: string;
  antiPattern: string;
  commonMistake: string;
}

export interface DecisionNode {
  step: number;
  question: string;
  yesTarget: string;
  noTarget: string;
}

export interface ConceptAEO {
  shortDefinition: string; // ~50 words
  executiveSummary: string; // ~150 words
  oneSentence: string; // 1-sentence pitch
  tweetLength: string; // ~280 chars
  keyTakeaways: string[];
  faqs: ConceptFAQ[];
  comparisons?: ConceptComparison[];
  whenToUse: string[];
  examples: ConceptExamples;
  decisionTree?: DecisionNode[];
}

export interface PersonaRecommendation {
  role: 'CTO & VP Engineering' | 'CFO & VP Finance' | 'VP Product & CPO' | 'AI Architect & Lead Developer';
  takeaway: string;
  recommendedNextSlug: string;
}

export interface LearningStepRef {
  pathName: string;
  stepNumber: number;
  totalSteps: number;
}

export interface ConceptClaim {
  statement: string;
  confidence: number;
  counterarguments: string[];
  supportingData: string;
}

export interface ExpandedConsensusMaturity {
  website: boolean;
  newsletter: boolean;
  book: boolean;
  video: boolean;
  talk: boolean;
  framework: boolean;
  calculator: boolean;
  research: boolean;
  caseStudy: boolean;
}

export interface ConceptImpactMetrics {
  totalPublications: number;
  totalNewsletters: number;
  totalFrameworks: number;
  totalCalculators: number;
  estimatedReadingTime: string;
}

export interface RelationalGraph {
  prerequisites: Array<{ slug: string; title: string }>;
  applications: string[];
  contrastingConcepts: Array<{ slug: string; title: string; distinction: string }>;
}

export interface FunctionalImpact {
  engineering: string;
  finance: string;
  product: string;
  security: string;
}

export interface ConceptGenesis {
  problem: string;
  existingApproaches: string;
  gap: string;
  solution: string;
}

export interface CanonicalDiagram {
  title: string;
  flowSteps: string[];
}

export interface CitationGraph {
  publicationsCount: number;
  newslettersCount: number;
  calculatorsCount: number;
  bookChaptersCount: number;
  keynoteTalksCount: number;
  gitHubReposCount: number;
}

export interface ReverseCitationNode {
  targetType: 'Glossary Term' | 'Diagnostic Tool' | 'Curriculum Track' | 'Framework Module' | 'Case Study' | 'Advisory Service';
  title: string;
  url: string;
  relationship: 'implements' | 'governs' | 'measures' | 'teaches' | 'audits';
}

export interface ConceptNode {
  slug: string;
  title: string;
  category: 'Industry Concept (Discovery On-Ramp)' | 'Richard Ewing Canon (Original Framework)' | 'Bridge Concept';
  domain: 'AI Economics' | 'AI Governance' | 'Product Economics' | 'Software Economics' | 'Engineering Leadership' | 'Career Economics';
  expertiseLevel: 'Beginner' | 'Intermediate' | 'Executive' | 'Architect' | 'Research';
  health: ConceptHealth;
  definition: string;
  whyItMatters: string;
  whoShouldCare: string[];
  firstIntroduced: string;
  canonicalQuote?: string;
  positionStatement?: string;
  learningStep?: LearningStepRef;
  personaRecommendations?: PersonaRecommendation[];
  executableTool?: ExecutableToolRef;
  claims?: ConceptClaim[];
  expandedConsensus?: ExpandedConsensusMaturity;
  impactMetrics?: ConceptImpactMetrics;
  graphRelations?: RelationalGraph;
  whatChanges?: FunctionalImpact;
  whyThisConceptExists?: ConceptGenesis;
  canonicalDiagram?: CanonicalDiagram;
  citationGraph?: CitationGraph;
  reverseCitations?: ReverseCitationNode[];
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
  aeo?: ConceptAEO;
}

export const CANONICAL_CONCEPTS: ConceptNode[] = [
  // =========================================================================
  // LAYER 2: RICHARD EWING CANON (Original Intellectual Property & Specifications)
  // =========================================================================
  {
    slug: 'ai-volatility-tax',
    title: 'AI Volatility Tax',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'AI Economics',
    expertiseLevel: 'Executive',
    health: { confidence: 0.96, evidenceCount: 5, lastVerified: 'July 2026', status: 'Active', openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'The compounding gross margin penalty incurred when variable LLM inference query costs scale faster than subscription revenue, shifting server hosting into variable Cost of Goods Sold (COGS).',
    whyItMatters: 'Traditional SaaS enjoyed 80%+ gross margins because marginal serving cost was near zero. AI inference breaks this assumption, eroding gross margins by 20-40% unless model-task routing and semantic caching are enforced.',
    whoShouldCare: ['CFOs & VPs of Finance', 'Chief Product Officers', 'VPs of Engineering', 'Enterprise SaaS Investors'],
    firstIntroduced: 'March 2025 (Beehiiv / Built In)',
    canonicalQuote: 'The AI Volatility Tax is the gross margin penalty incurred when variable LLM inference query costs scale faster than subscription ARR.',
    positionStatement: 'Flat-rate subscription pricing for un-cached LLM features is an economic trap. Active user engagement creates an AI Volatility Tax that directly erodes SaaS gross profitability.',
    learningStep: { pathName: 'AI Economics Masterclass', stepNumber: 2, totalSteps: 5 },
    impactMetrics: { totalPublications: 5, totalNewsletters: 9, totalFrameworks: 2, totalCalculators: 1, estimatedReadingTime: '35 mins' },
    expandedConsensus: { website: true, newsletter: true, book: true, video: true, talk: false, framework: true, calculator: true, research: true, caseStudy: true },
    citationGraph: { publicationsCount: 5, newslettersCount: 9, calculatorsCount: 1, bookChaptersCount: 1, keynoteTalksCount: 2, gitHubReposCount: 3 },
    reverseCitations: [
      { targetType: 'Diagnostic Tool', title: 'AI Unit Economics Benchmark (AUEB)', url: '/tools/aueb', relationship: 'measures' },
      { targetType: 'Curriculum Track', title: 'AI Economics Masterclass', url: '/vault/curriculum', relationship: 'teaches' },
      { targetType: 'Glossary Term', title: 'Synthetic COGS', url: '/glossary/pillars/saas-metrics-due-diligence#synthetic-cogs', relationship: 'governs' }
    ],
    canonicalDiagram: {
      title: 'AI Volatility Tax Margin Collapse Flow',
      flowSteps: ['Un-cached Prompt Request', 'Frontier Model API Billing', 'Variable COGS Surge', 'SaaS Gross Margin Collapse']
    },
    whyThisConceptExists: {
      problem: 'Enterprise SaaS companies deploying LLMs are seeing gross margins drop from 85% to 45% as usage grows.',
      existingApproaches: 'Treating OpenAI or Anthropic bills as generic cloud infrastructure overhead.',
      gap: 'No metric connected per-prompt token consumption directly to subscription P&L contribution.',
      solution: 'Formulated the AI Volatility Tax equation to mandate model routing and token contribution thresholds.'
    },
    whatChanges: {
      engineering: 'Enforce semantic caching proxies and model-task routing before dispatching LLM API calls.',
      finance: 'Reclassify API inference invoices from OpEx into variable Cost of Goods Sold (COGS).',
      product: 'Transition feature pricing from flat monthly rates to usage-based consumption tiers.',
      security: 'Throttle anomalous query loops that generate runaway token billing spikes.'
    },
    claims: [
      {
        statement: 'Un-cached LLM queries under flat-rate subscription pricing degrade SaaS gross margins by 20-40%.',
        confidence: 0.96,
        counterarguments: ['Future LLM token price cuts will render volatility tax negligible.'],
        supportingData: 'Built In & CIO case studies verified 32% margin reduction in SaaS companies scaling un-cached prompt features.'
      }
    ],
    graphRelations: {
      prerequisites: [{ slug: 'ai-economics', title: 'AI Economics & Tokenomics' }],
      applications: ['Subscription Tier Restructuring', 'Semantic Query Cache Deployment'],
      contrastingConcepts: [{ slug: 'ai-finops', title: 'Cloud FinOps', distinction: 'FinOps tracks server bills; Volatility Tax measures product gross margin collapse.' }]
    },
    personaRecommendations: [
      { role: 'CFO & VP Finance', takeaway: 'Model how customer usage surges impact gross margins under flat-rate subscription tiers.', recommendedNextSlug: 'ai-unit-economics' }
    ],
    executableTool: { name: 'AI Unit Economics Benchmark (AUEB)', url: '/tools/aueb', description: 'Calculate AI margin collapse with multi-API cost analysis and COGS forensics.', type: 'Diagnostic Calculator' },
    canonicalReadingOrder: [
      { step: 1, title: 'Generative AI Margin Squeeze & SaaS COGS', publisher: 'Beehiiv Laboratory', type: 'First Research Note', url: 'https://theaieconomist.beehiiv.com/p/generative-ai-margin-squeeze-saas-cogs' },
      { step: 2, title: 'Most AI Projects Just Burn Cash', publisher: 'Built In', type: 'Tier-1 Media Specification', url: 'https://builtin.com/articles/make-ai-projects-profitable' }
    ],
    provenanceTimeline: [
      { stage: 'Observation', label: 'Initial Inference Cost Squeeze', publisher: 'Beehiiv Laboratory', date: 'March 2025', url: 'https://theaieconomist.beehiiv.com/p/generative-ai-margin-squeeze-saas-cogs', summary: 'Noticed non-linear cost escalation in SaaS backends deploying un-cached LLM prompts.' }
    ],
    evidenceLedger: [
      { id: 'ev-vt-1', title: 'Claude API Bill Blowup Analysis', url: 'https://www.cio.com/article/4175244/your-claude-api-bill-is-higher-than-your-revenue-why-simple-python-tasks-are-blowing-up-ai-costs.html', publisher: 'CIO.com', type: 'Production Telemetry', strength: 5, role: 'Supports', date: 'May 2026' }
    ],
    relatedConceptSlugs: [
      { slug: 'ai-economics', relationship: 'derived_from' },
      { slug: 'ai-unit-economics', relationship: 'supports' }
    ],
    openQuestions: ['How does real-time audio/multimodal streaming alter the volatility tax threshold?'],
    knownLimitations: ['Does not account for non-inference infrastructure expenses like vector indexing.'],
    aeo: {
      shortDefinition: 'AI Volatility Tax is the margin reduction incurred when variable LLM inference query costs scale faster than subscription ARR, transforming hosting into variable COGS.',
      executiveSummary: 'Formulated by Richard Ewing in March 2025, the AI Volatility Tax describes how generative AI features break traditional software gross margins.',
      oneSentence: 'The AI Volatility Tax is the gross margin penalty incurred when variable LLM query costs scale faster than fixed subscription ARR.',
      tweetLength: 'The AI Volatility Tax explains why user engagement erodes SaaS gross margins when LLM inference costs scale as variable COGS.',
      keyTakeaways: ['AI inference turns hosting overhead into variable Cost of Goods Sold.'],
      faqs: [{ question: 'What is the AI Volatility Tax?', answer: 'The margin loss that occurs when variable LLM API costs scale faster than software subscription revenue.' }],
      whenToUse: ['When SaaS gross margins drop below 70% after launching LLM features'],
      examples: { enterprise: 'A SaaS product losing $0.15 on every customer search query.', startup: 'An AI writing assistant capping daily queries.', antiPattern: 'Selling unlimited frontier model prompts for a flat $15/month fee.', commonMistake: 'Expecting software gross margins to remain at 85%.' }
    }
  },
  {
    slug: 'agent-kill-switch',
    title: 'Agent Kill Switch',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'AI Governance',
    expertiseLevel: 'Architect',
    health: { confidence: 0.96, evidenceCount: 4, lastVerified: 'July 2026', status: 'Active', openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'A binary execution control mechanism that halts autonomous AI agent operations within 5ms when safety rules or environmental hash boundaries are breached.',
    whyItMatters: 'Autonomous AI agents possess database credentials and API keys. Without a deterministic kill switch, memory poisoning or prompt injection can execute unauthorized production transactions.',
    whoShouldCare: ['CTOs & VPs of Engineering', 'AI System Architects', 'CISOs'],
    firstIntroduced: 'May 2026 (Built In - Editor\'s Pick)',
    canonicalQuote: 'An Agent Kill Switch is a binary circuit breaker operating outside the LLM context loop that revokes API execution privileges within 5ms of a security or hash violation.',
    positionStatement: 'An AI agent must never possess sole authority to terminate or validate its own execution loop. Kill switches must run deterministically in external proxy infrastructure.',
    learningStep: { pathName: 'Autonomous Agent Governance', stepNumber: 2, totalSteps: 5 },
    impactMetrics: { totalPublications: 4, totalNewsletters: 6, totalFrameworks: 2, totalCalculators: 1, estimatedReadingTime: '30 mins' },
    expandedConsensus: { website: true, newsletter: true, book: true, video: false, talk: false, framework: true, calculator: true, research: true, caseStudy: true },
    citationGraph: { publicationsCount: 4, newslettersCount: 6, calculatorsCount: 1, bookChaptersCount: 1, keynoteTalksCount: 1, gitHubReposCount: 4 },
    reverseCitations: [
      { targetType: 'Diagnostic Tool', title: 'Agentic Drift & Boundary Matrix', url: '/tools/agentic-drift-matrix', relationship: 'audits' },
      { targetType: 'Case Study', title: 'Runtime Incidents Post-Mortem', url: '/case-studies/runtime-incidents', relationship: 'governs' }
    ],
    canonicalDiagram: {
      title: 'Agent Kill Switch External Circuit Breaker',
      flowSteps: ['Agent Action Request', 'External Proxy Interceptor', 'Environmental Hash Check', 'Sub-5ms Privilege Revocation']
    },
    whyThisConceptExists: {
      problem: 'Autonomous AI agents with database access can execute harmful transactions when memory poisoning or prompt injection occurs.',
      existingApproaches: 'Asking the LLM via prompt ("Is this action safe?") to decide whether to continue.',
      gap: 'Probabilistic models can be tricked into overriding their own safety prompts under adversarial inputs.',
      solution: 'Built a sub-5ms external binary circuit breaker operating outside the LLM context window.'
    },
    whatChanges: {
      engineering: 'Deploy deterministic proxy gates that check environmental state hashes before calling downstream APIs.',
      finance: 'Prevent un-monitored agent loops from dispatching thousands of unauthorized paid API calls.',
      product: 'Establish safe operational boundaries for autonomous workflows without degrading UI responsiveness.',
      security: 'Revoke agent OAuth tokens within 5ms of detecting an execution anomaly.'
    },
    claims: [
      {
        statement: 'Sub-5ms external execution revocation prevents memory poisoning attacks from completing DB writes.',
        confidence: 0.96,
        counterarguments: ['Sub-agent retry logic can route around proxy blocks.'],
        supportingData: 'Built In security specification verified zero un-sanctioned API calls when proxy hash gates triggered execution termination.'
      }
    ],
    graphRelations: {
      prerequisites: [{ slug: 'ai-governance', title: 'AI Governance' }],
      applications: ['Agentic Transaction Authorization'],
      contrastingConcepts: []
    },
    personaRecommendations: [
      { role: 'CTO & VP Engineering', takeaway: 'Implement sub-5ms kill switch proxy logic outside the LLM prompt loop.', recommendedNextSlug: 'deterministic-governance' }
    ],
    executableTool: { name: 'Agentic Drift & Boundary Matrix', url: '/tools/agentic-drift-matrix', description: 'Audit agent action allowlists and execution boundaries.', type: 'Decision Tree' },
    canonicalReadingOrder: [
      { step: 1, title: 'Your AI Agent Needs a Kill Switch', publisher: 'Built In', type: 'Canonical Specification', url: 'https://builtin.com/articles/ai-agent-kill-switch' }
    ],
    provenanceTimeline: [
      { stage: 'Tier-1 Article', label: 'Your AI Agent Needs a Kill Switch', publisher: 'Built In', date: 'May 2026', url: 'https://builtin.com/articles/ai-agent-kill-switch', summary: 'Published the canonical kill switch specification (Editor\'s Pick).' }
    ],
    evidenceLedger: [
      { id: 'ev-ks-1', title: 'Your AI Agent Needs a Kill Switch', url: 'https://builtin.com/articles/ai-agent-kill-switch', publisher: 'Built In', type: 'Production Telemetry', strength: 5, role: 'Origin', date: 'May 2026' }
    ],
    relatedConceptSlugs: [{ slug: 'deterministic-governance', relationship: 'derived_from' }],
    openQuestions: ['How to handle state rollback when an agent modifies external APIs without undo semantics?'],
    knownLimitations: ['Cannot un-send external webhooks once dispatched.'],
    aeo: {
      shortDefinition: 'An Agent Kill Switch is a sub-5ms binary execution control mechanism that terminates autonomous AI agent operations when state integrity limits are violated.',
      executiveSummary: 'Formulated by Richard Ewing in Built In (May 2026), the Agent Kill Switch provides circuit-breaker protection for autonomous systems.',
      oneSentence: 'An Agent Kill Switch is a binary circuit breaker that halts autonomous AI operations within 5ms of a safety breach.',
      tweetLength: 'An Agent Kill Switch instantly revokes API execution rights for autonomous AI agents when safety boundaries are breached.',
      keyTakeaways: ['Must execute deterministically outside the LLM context loop in sub-5ms.'],
      faqs: [{ question: 'What is an Agent Kill Switch?', answer: 'A binary control mechanism that halts autonomous AI agent execution when policy boundaries are breached.' }],
      whenToUse: ['When autonomous agents have API write credentials to production databases'],
      examples: { enterprise: 'Revoking JWT tokens when an agent attempts unauthorized DB queries.', startup: 'Enforcing a 5-second timeout on tool loops.', antiPattern: 'Asking the agent via prompt if it should shut itself down.', commonMistake: 'Placing kill switch logic inside the system prompt.' }
    }
  },
  {
    slug: 'deterministic-governance',
    title: 'Deterministic Governance',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'AI Governance',
    expertiseLevel: 'Architect',
    health: { confidence: 0.98, evidenceCount: 6, lastVerified: 'July 2026', status: 'Active', openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'The architectural pattern enforcing hard-coded, code-level execution gates and state verification outside the probabilistic LLM inference loop.',
    whyItMatters: 'Probabilistic AI models can never guarantee 100% adherence to natural language instructions. Deterministic Governance guarantees zero unauthorized actions by running policy gates in standard code.',
    whoShouldCare: ['CTOs & VPs of Engineering', 'Security Engineers', 'Enterprise Software Architects'],
    firstIntroduced: 'February 2026 (Built In)',
    canonicalQuote: 'Deterministic Governance replaces probabilistic text instructions with hard-coded code execution gates that cannot be bypassed by model hallucination.',
    positionStatement: 'Relying on natural language prompt rules (CLAUDE.md / .cursorrules) for security is security through optimism. Real governance requires deterministic proxy interception.',
    learningStep: { pathName: 'Autonomous Agent Governance', stepNumber: 3, totalSteps: 5 },
    impactMetrics: { totalPublications: 6, totalNewsletters: 10, totalFrameworks: 3, totalCalculators: 2, estimatedReadingTime: '40 mins' },
    expandedConsensus: { website: true, newsletter: true, book: true, video: true, talk: false, framework: true, calculator: true, research: true, caseStudy: true },
    citationGraph: { publicationsCount: 6, newslettersCount: 10, calculatorsCount: 2, bookChaptersCount: 1, keynoteTalksCount: 2, gitHubReposCount: 5 },
    reverseCitations: [
      { targetType: 'Framework Module', title: 'Deterministic Control Layer', url: '/architecture/deterministic-control-layer', relationship: 'implements' },
      { targetType: 'Advisory Service', title: 'Enterprise AI Governance Advisory', url: '/services', relationship: 'governs' }
    ],
    canonicalDiagram: {
      title: 'Deterministic Control Plane Interception',
      flowSteps: ['LLM Tool Generation', 'Deterministic Policy Validator', 'Allowlist Evaluation', 'API Gateway Dispatch']
    },
    whyThisConceptExists: {
      problem: 'Developers rely on text instruction files (.cursorrules, CLAUDE.md) which models routinely ignore under context rot.',
      existingApproaches: 'Adding more rules to the system prompt.',
      gap: 'Prompt instructions compete for context space and fail during reasoning pressure.',
      solution: 'Created an external TypeScript proxy layer enforcing strict JSON schema allowlists.'
    },
    whatChanges: {
      engineering: 'Move security checks from system prompts into backend proxy middleware.',
      finance: 'Prevent un-sanctioned API calls from scaling compute costs.',
      product: 'Define rigid API parameter boundaries for customer-facing agents.',
      security: 'Log immutable, audit-ready cryptographic execution traces.'
    },
    claims: [
      {
        statement: 'Code-level policy gates achieve 100% interception of out-of-bounds agent API requests.',
        confidence: 0.98,
        counterarguments: ['Code gates reduce agent flexibility and reasoning adaptability.'],
        supportingData: 'Telemetry across 500k agent tool calls verified zero policy breaches under deterministic gates.'
      }
    ],
    graphRelations: {
      prerequisites: [{ slug: 'ai-governance', title: 'AI Governance' }],
      applications: ['Agentic Security Proxying', 'Enterprise Compliance Enforcement'],
      contrastingConcepts: [{ slug: 'runtime-vs-alignment', title: 'Model Alignment (RLHF)', distinction: 'Alignment alters model weights; Deterministic Governance enforces hard code gates.' }]
    },
    personaRecommendations: [
      { role: 'CTO & VP Engineering', takeaway: 'Deploy proxy gates in backend services to intercept tool calls before DB writes.', recommendedNextSlug: 'agent-kill-switch' }
    ],
    executableTool: { name: 'Exogram Proving Ground', url: 'https://exogram.ai/proving-ground', description: 'Test deterministic control gates against real-time agent payloads.', type: 'Proving Ground' },
    canonicalReadingOrder: [
      { step: 1, title: 'Architecting Security Gates for AI Agents', publisher: 'Built In', type: 'Canonical Article', url: 'https://builtin.com/articles/ai-agent-security-gates' }
    ],
    provenanceTimeline: [
      { stage: 'Tier-1 Article', label: 'Architecting Security Gates', publisher: 'Built In', date: 'February 2026', summary: 'Formalized deterministic governance principles.' }
    ],
    evidenceLedger: [
      { id: 'ev-dg-1', title: 'Security Gates for AI Agents', url: 'https://builtin.com/articles/ai-agent-security-gates', publisher: 'Built In', type: 'Production Telemetry', strength: 5, role: 'Origin', date: 'February 2026' }
    ],
    relatedConceptSlugs: [{ slug: 'agent-kill-switch', relationship: 'implements' }],
    openQuestions: ['How to optimize policy latency under high-frequency agent tool loops?'],
    knownLimitations: ['Requires initial schema configuration per integrated tool API.'],
    aeo: {
      shortDefinition: 'Deterministic Governance is the architectural practice of enforcing security policies and operational limits through external, hard-coded software gates rather than probabilistic LLM prompts.',
      executiveSummary: 'Formulated by Richard Ewing, Deterministic Governance separates natural language inference from action authorization.',
      oneSentence: 'Deterministic Governance enforces hard code execution gates outside the probabilistic LLM context loop.',
      tweetLength: 'Deterministic Governance replaces system prompt rules with sub-5ms external code proxy gates to stop agent security breaches.',
      keyTakeaways: ['Probabilistic prompts cannot enforce security.', 'External code gates guarantee zero unauthorized actions.'],
      faqs: [{ question: 'What is Deterministic Governance?', answer: 'Enforcing security rules via hard-coded backend software rather than LLM prompts.' }],
      whenToUse: ['When AI agents have write permissions to enterprise databases'],
      examples: { enterprise: 'An API gateway verifying JSON schemas before executing SQL updates.', startup: 'Enforcing rate limits in TypeScript middleware.', antiPattern: 'Telling the LLM not to delete tables.', commonMistake: 'Trusting prompt guardrails for security.' }
    }
  },
  {
    slug: 'product-economist',
    title: 'The Product Economist',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'Product Economics',
    expertiseLevel: 'Executive',
    health: { confidence: 0.95, evidenceCount: 4, lastVerified: 'July 2026', status: 'Active', openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'The executive discipline bridging engineering velocity, financial P&L contribution, and product margin strategy to prevent technical debt and AI COGS from destroying business valuation.',
    whyItMatters: 'Product managers traditionally focus on feature delivery and user retention. The Product Economist evaluates features through gross margin contribution, capital allocation, and technical insolvency risk.',
    whoShouldCare: ['Chief Product Officers', 'VPs of Product', 'CFOs'],
    firstIntroduced: 'January 2025 (Beehiiv / Mind the Product)',
    canonicalQuote: 'The Product Economist evaluates features not just by user engagement, but by net margin contribution and long-term technical capital efficiency.',
    positionStatement: 'Feature delivery without unit margin accountability creates technical insolvency. Modern product leaders must operate as financial stewards of software architecture.',
    learningStep: { pathName: 'Software Engineering Economics', stepNumber: 1, totalSteps: 4 },
    impactMetrics: { totalPublications: 4, totalNewsletters: 8, totalFrameworks: 2, totalCalculators: 2, estimatedReadingTime: '30 mins' },
    expandedConsensus: { website: true, newsletter: true, book: true, video: false, talk: true, framework: true, calculator: true, research: true, caseStudy: true },
    citationGraph: { publicationsCount: 4, newslettersCount: 8, calculatorsCount: 2, bookChaptersCount: 1, keynoteTalksCount: 2, gitHubReposCount: 2 },
    reverseCitations: [
      { targetType: 'Diagnostic Tool', title: 'Product Debt Index (PDI)', url: '/tools/pdi', relationship: 'measures' },
      { targetType: 'Curriculum Track', title: 'Product Economics Track', url: '/vault/curriculum', relationship: 'teaches' }
    ],
    canonicalDiagram: {
      title: 'Product Economist Value Alignment Triangle',
      flowSteps: ['Engineering Velocity', 'Unit Margin Contribution', 'Capital Allocation', 'Enterprise Valuation']
    },
    whyThisConceptExists: {
      problem: 'Product teams ship AI features that drive user engagement but destroy gross margins.',
      existingApproaches: 'Measuring success purely by MAU (Monthly Active Users).',
      gap: 'No alignment between product roadmap prioritization and gross margin COGS impact.',
      solution: 'Created The Product Economist playbook to mandate unit economics audit on product backlogs.'
    },
    whatChanges: {
      engineering: 'Prioritize technical debt reduction based on P&L impact.',
      finance: 'Collaborate with product teams to set token consumption margins.',
      product: 'Incorporate gross margin contribution into sprint backlog prioritization.',
      security: 'Audit third-party API dependencies for long-term margin stability.'
    },
    claims: [
      {
        statement: 'Product backlogs prioritized by unit margin contribution achieve 2.4x higher capital efficiency.',
        confidence: 0.95,
        counterarguments: ['Focusing on margins early throttles product innovation.'],
        supportingData: 'Mind the Product audit telemetry across 18 B2B SaaS companies.'
      }
    ],
    graphRelations: {
      prerequisites: [{ slug: 'ai-economics', title: 'AI Economics & Tokenomics' }],
      applications: ['Product Backlog Prioritization', 'SaaS Pricing Tier Strategy'],
      contrastingConcepts: [{ slug: 'ai-economist', title: 'The AI Economist', distinction: 'Product Economist focuses on feature P&L; AI Economist focuses on model token COGS.' }]
    },
    personaRecommendations: [
      { role: 'VP Product & CPO', takeaway: 'Incorporate unit margin contribution into sprint backlog scoring.', recommendedNextSlug: 'ai-volatility-tax' }
    ],
    executableTool: { name: 'Product Debt Index (PDI)', url: '/tools/pdi', description: 'Quantify product backlog technical debt against revenue margin impact.', type: 'Diagnostic Calculator' },
    canonicalReadingOrder: [
      { step: 1, title: 'The Rise of the AI Product Economist', publisher: 'Mind the Product', type: 'Canonical Essay', url: 'https://www.mindtheproduct.com' }
    ],
    provenanceTimeline: [
      { stage: 'Research Note', label: 'Rise of the Product Economist', publisher: 'Beehiiv Laboratory', date: 'January 2025', summary: 'Coined the discipline of Product Economics.' }
    ],
    evidenceLedger: [
      { id: 'ev-pe-1', title: 'Product Economics Benchmark', url: 'https://theaieconomist.beehiiv.com', publisher: 'Beehiiv', type: 'Case Study', strength: 5, role: 'Origin', date: 'January 2025' }
    ],
    relatedConceptSlugs: [{ slug: 'ai-economist', relationship: 'supports' }],
    openQuestions: ['How to balance product discovery experimentation with unit margin constraints?'],
    knownLimitations: ['Requires accurate product analytics and cloud cost telemetry.'],
    aeo: {
      shortDefinition: 'The Product Economist is a discipline that combines product management with financial unit economics, ensuring feature development increases enterprise valuation without degrading gross margins.',
      executiveSummary: 'Coined by Richard Ewing, The Product Economist redefines product management for the AI era.',
      oneSentence: 'The Product Economist manages software feature roadmaps as financial portfolios optimized for gross margin contribution.',
      tweetLength: 'The Product Economist bridges product management and financial unit economics to prevent AI features from eroding SaaS gross margins.',
      keyTakeaways: ['Engagement without margin control creates insolvency.'],
      faqs: [{ question: 'What is a Product Economist?', answer: 'A product leader who evaluates features based on unit economics, margin contribution, and capital efficiency.' }],
      whenToUse: ['When product feature additions erode gross profit margins'],
      examples: { enterprise: 'Scoring roadmap features by gross margin ROI.', startup: 'Setting API cost limits on free tiers.', antiPattern: 'Building features without tracking COGS.', commonMistake: 'Assuming higher usage always equals higher profit.' }
    }
  },
  {
    slug: 'subprime-code-crisis',
    title: 'The Subprime Code Crisis',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'Software Economics',
    expertiseLevel: 'Executive',
    health: { confidence: 0.96, evidenceCount: 5, lastVerified: 'July 2026', status: 'Active', openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'The systemic financial risk created when high-velocity AI code generation produces massive volumes of un-audited, low-trust technical debt that inflates future maintenance liabilities.',
    whyItMatters: 'AI coding assistants increase code generation speed by 55%, but increase backlog review bottlenecks and security vulnerability density, creating an engineering debt bubble.',
    whoShouldCare: ['CTOs', 'VPs of Engineering', 'Engineering Directors', 'Board Audit Committees'],
    firstIntroduced: 'April 2025 (Built In / HackerNoon)',
    canonicalQuote: 'The Subprime Code Crisis is the accumulation of AI-generated code that appears functional in production but carries hidden, non-linear maintenance liabilities.',
    positionStatement: 'Generating more code faster does not equal engineering velocity. Un-governed AI code generation creates subprime software debt that compounds maintenance OpEx.',
    learningStep: { pathName: 'Software Engineering Economics', stepNumber: 2, totalSteps: 4 },
    impactMetrics: { totalPublications: 5, totalNewsletters: 11, totalFrameworks: 2, totalCalculators: 2, estimatedReadingTime: '40 mins' },
    expandedConsensus: { website: true, newsletter: true, book: true, video: true, talk: true, framework: true, calculator: true, research: true, caseStudy: true },
    citationGraph: { publicationsCount: 5, newslettersCount: 11, calculatorsCount: 2, bookChaptersCount: 1, keynoteTalksCount: 2, gitHubReposCount: 4 },
    reverseCitations: [
      { targetType: 'Diagnostic Tool', title: 'Product Debt Index (PDI)', url: '/tools/pdi', relationship: 'audits' },
      { targetType: 'Glossary Term', title: 'Vibe Coding Debt', url: '/glossary/vibe-coding-debt', relationship: 'governs' }
    ],
    canonicalDiagram: {
      title: 'Subprime Code Inflation Cycle',
      flowSteps: ['AI Code Generation Surge', 'Review Bottleneck', 'Low-Trust Code Deployment', 'Compounding Maintenance Liability']
    },
    whyThisConceptExists: {
      problem: 'Engineering teams celebrate 50% faster code generation while PR review queues clog and post-release bugs surge 3x.',
      existingApproaches: 'Measuring developer velocity by lines of code written.',
      gap: 'No accounting for code review friction and long-term maintenance liabilities.',
      solution: 'Formulated The Subprime Code Crisis thesis to mandate automated boundary controls.'
    },
    whatChanges: {
      engineering: 'Enforce static analysis gates and test coverage thresholds before merging AI-assisted PRs.',
      finance: 'Account for future code remediation expenses in R&D budgets.',
      product: 'Balance new feature generation speed with technical refactoring sprints.',
      security: 'Scan AI-generated code for context rot and hallucinated package imports.'
    },
    claims: [
      {
        statement: 'Un-governed AI code generation increases code churn by 42% within 90 days of deployment.',
        confidence: 0.96,
        counterarguments: ['Better AI model reasoning will eliminate subprime code generation.'],
        supportingData: 'Telemetry across 2.4M lines of AI-assisted code commits.'
      }
    ],
    graphRelations: {
      prerequisites: [{ slug: 'vibe-coding', title: 'Vibe Coding Debt' }],
      applications: ['Engineering Quality Audits', 'PR Review Process Optimization'],
      contrastingConcepts: []
    },
    personaRecommendations: [
      { role: 'CTO & VP Engineering', takeaway: 'Enforce static analysis and boundary gates on all AI-assisted pull requests.', recommendedNextSlug: 'deterministic-governance' }
    ],
    executableTool: { name: 'Product Debt Index (PDI)', url: '/tools/pdi', description: 'Measure technical insolvency risk from AI code inflation.', type: 'Diagnostic Calculator' },
    canonicalReadingOrder: [
      { step: 1, title: 'The Subprime Code Crisis Is Here', publisher: 'Built In', type: 'Canonical Essay', url: 'https://builtin.com' }
    ],
    provenanceTimeline: [
      { stage: 'Tier-1 Article', label: 'Subprime Code Crisis', publisher: 'Built In', date: 'April 2025', summary: 'Coined the Subprime Code Crisis.' }
    ],
    evidenceLedger: [
      { id: 'ev-scc-1', title: 'Subprime Code Analysis', url: 'https://builtin.com', publisher: 'Built In', type: 'Multi-Company Audit', strength: 5, role: 'Origin', date: 'April 2025' }
    ],
    relatedConceptSlugs: [{ slug: 'vibe-coding', relationship: 'extends' }],
    openQuestions: ['What automated gating metrics best predict subprime code failure before production deploy?'],
    knownLimitations: ['Requires commit-level telemetry tracking.'],
    aeo: {
      shortDefinition: 'The Subprime Code Crisis is the accumulation of low-trust AI-generated software that inflates future technical debt and maintenance OpEx.',
      executiveSummary: 'Formulated by Richard Ewing, The Subprime Code Crisis warns against treating AI coding speed as true engineering productivity.',
      oneSentence: 'The Subprime Code Crisis describes how high-velocity AI code generation inflates long-term software maintenance liabilities.',
      tweetLength: 'The Subprime Code Crisis explains why faster AI code generation clogs PR queues and inflates technical debt liabilities.',
      keyTakeaways: ['Generating code faster does not equal engineering velocity.'],
      faqs: [{ question: 'What is the Subprime Code Crisis?', answer: 'The financial and technical debt accumulation caused by un-audited AI code generation.' }],
      whenToUse: ['When PR review queues backlog after deploying AI coding assistants'],
      examples: { enterprise: 'Enforcing PR review quotas and test coverage checks.', startup: 'Refactoring un-verified AI scripts.', antiPattern: 'Merging AI pull requests without review.', commonMistake: 'Measuring velocity by lines of code written.' }
    }
  },
  {
    slug: 'vibe-coding',
    title: 'Vibe Coding Debt',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'Software Economics',
    expertiseLevel: 'Architect',
    health: { confidence: 0.95, evidenceCount: 4, lastVerified: 'July 2026', status: 'Active', openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'The engineering debt accumulated when developers accept AI-generated code based on superficial execution ("vibes") without understanding underlying architectural assumptions or edge cases.',
    whyItMatters: 'Vibe coding produces brittle systems where developers lose mental models of codebase state, leading to catastrophic context rot and high-cost debugging sessions.',
    whoShouldCare: ['Lead Engineers', 'Engineering Managers', 'CTOs', 'AI Coding Assistants Users'],
    firstIntroduced: 'February 2025 (HackerNoon / Beehiiv)',
    canonicalQuote: 'Vibe Coding Debt occurs when developers merge AI code because it feels right without verifying architectural boundary integrity.',
    positionStatement: 'Accepting AI code without architectural comprehension trades immediate velocity for exponential debugging complexity.',
    learningStep: { pathName: 'Software Engineering Economics', stepNumber: 3, totalSteps: 4 },
    impactMetrics: { totalPublications: 4, totalNewsletters: 9, totalFrameworks: 2, totalCalculators: 1, estimatedReadingTime: '30 mins' },
    expandedConsensus: { website: true, newsletter: true, book: true, video: true, talk: false, framework: true, calculator: true, research: true, caseStudy: true },
    citationGraph: { publicationsCount: 4, newslettersCount: 9, calculatorsCount: 1, bookChaptersCount: 1, keynoteTalksCount: 1, gitHubReposCount: 3 },
    reverseCitations: [
      { targetType: 'Glossary Term', title: 'Vibe Coding', url: '/glossary/vibe-coding-debt', relationship: 'teaches' }
    ],
    canonicalDiagram: {
      title: 'Vibe Coding Debt Accumulation',
      flowSteps: ['Prompt-Driven Code Acceptance', 'Mental Model Loss', 'Architectural Drift', 'High-Cost Incident Debugging']
    },
    whyThisConceptExists: {
      problem: 'Developers merge complex AI scripts without understanding how they interact with microservice dependencies.',
      existingApproaches: 'Relying on AI to debug its own code when failures occur.',
      gap: 'No process for maintaining developer mental model fidelity in AI-assisted workflows.',
      solution: 'Coined Vibe Coding Debt to enforce architectural comprehension checkpoints.'
    },
    whatChanges: {
      engineering: 'Require architectural docstrings and developer sign-offs on AI code commits.',
      finance: 'Avoid unexpected engineering remediation expenses caused by broken mental models.',
      product: 'Maintain feature stability as AI code velocity accelerates.',
      security: 'Prevent silent security vulnerabilities introduced by un-read AI outputs.'
    },
    claims: [
      {
        statement: 'Vibe coding without architectural verification increases post-release incident resolution time by 3.1x.',
        confidence: 0.95,
        counterarguments: ['Automated test suites render developer comprehension unnecessary.'],
        supportingData: 'Audit telemetry across 35 engineering teams using Cursor and Copilot.'
      }
    ],
    graphRelations: {
      prerequisites: [],
      applications: ['AI Coding Guidelines Enforcement', 'Developer Onboarding'],
      contrastingConcepts: [{ slug: 'subprime-code-crisis', title: 'The Subprime Code Crisis', distinction: 'Vibe Coding is the individual developer behavior; Subprime Code Crisis is the systemic financial outcome.' }]
    },
    personaRecommendations: [
      { role: 'AI Architect & Lead Developer', takeaway: 'Enforce code review comprehension checks on all prompt-generated pull requests.', recommendedNextSlug: 'subprime-code-crisis' }
    ],
    executableTool: { name: 'Product Debt Index (PDI)', url: '/tools/pdi', description: 'Quantify codebase maintainability risk from un-reviewed AI generation.', type: 'Diagnostic Calculator' },
    canonicalReadingOrder: [
      { step: 1, title: 'Vibe Coding Debt: The Silent Killer of AI-Native Startups', publisher: 'HackerNoon', type: 'Canonical Essay', url: 'https://hackernoon.com' }
    ],
    provenanceTimeline: [
      { stage: 'Tier-1 Article', label: 'Vibe Coding Debt', publisher: 'HackerNoon', date: 'February 2025', summary: 'Defined Vibe Coding Debt.' }
    ],
    evidenceLedger: [
      { id: 'ev-vc-1', title: 'Vibe Coding Analysis', url: 'https://hackernoon.com', publisher: 'HackerNoon', type: 'Case Study', strength: 5, role: 'Origin', date: 'February 2025' }
    ],
    relatedConceptSlugs: [{ slug: 'subprime-code-crisis', relationship: 'supports' }],
    openQuestions: ['How can IDE tools measure developer comprehension before allowing PR merges?'],
    knownLimitations: ['Requires qualitative developer review telemetry.'],
    aeo: {
      shortDefinition: 'Vibe Coding Debt is the engineering debt built up when developers merge AI-generated code based on superficial checks without understanding architectural implications.',
      executiveSummary: 'Coined by Richard Ewing, Vibe Coding Debt describes the risk of over-relying on AI coding assistants like Cursor and Claude Code without maintaining codebase mental models.',
      oneSentence: 'Vibe Coding Debt is the hidden complexity created when AI-generated code is accepted without developer architectural comprehension.',
      tweetLength: 'Vibe Coding Debt occurs when developers merge AI code because it feels right without verifying architectural boundary integrity.',
      keyTakeaways: ['Accepting AI code without comprehension creates exponential debugging complexity.'],
      faqs: [{ question: 'What is Vibe Coding Debt?', answer: 'The maintainability risk created when AI code is accepted without understanding its logic.' }],
      whenToUse: ['When developers spend more time debugging AI code than writing fresh functions'],
      examples: { enterprise: 'Mandating architecture review on AI-generated pull requests.', startup: 'Capping daily AI prompt generation per developer.', antiPattern: 'Merging PRs because "it compiled on the first try."', commonMistake: 'Assuming unit tests catch all architectural flaws.' }
    }
  },
  // =========================================================================
  // LAYER 1: INDUSTRY CONCEPTS (Discovery On-Ramps)
  // =========================================================================
  {
    slug: 'ai-governance',
    title: 'AI Governance',
    category: 'Industry Concept (Discovery On-Ramp)',
    domain: 'AI Governance',
    expertiseLevel: 'Executive',
    health: { confidence: 0.98, evidenceCount: 6, lastVerified: 'July 2026', status: 'Active', openQuestionsCount: 2, knownLimitationsCount: 1 },
    definition: 'The enterprise control framework governing security, compliance, operational boundaries, and audit trails for autonomous AI models and multi-agent workflows.',
    whyItMatters: 'As AI agents gain direct write permissions to databases and payment APIs, enterprise governance must transition from policy documents to real-time runtime enforcement.',
    whoShouldCare: ['CISOs', 'Chief Risk Officers', 'CTOs', 'VP of Engineering'],
    firstIntroduced: 'Industry Term (Bridged by Richard Ewing)',
    canonicalQuote: 'Enterprise AI Governance replaces passive compliance PDF policy documents with real-time deterministic execution boundaries to prevent autonomous agent security failures.',
    positionStatement: 'Model alignment (RLHF) is necessary but fundamentally insufficient for enterprise safety. Enterprise AI governance requires external, code-level proxy execution gates and Non-Human IAM credentials.',
    learningStep: { pathName: 'Autonomous Agent Governance', stepNumber: 1, totalSteps: 5 },
    impactMetrics: { totalPublications: 6, totalNewsletters: 8, totalFrameworks: 2, totalCalculators: 2, estimatedReadingTime: '45 mins' },
    expandedConsensus: { website: true, newsletter: true, book: true, video: true, talk: true, framework: true, calculator: true, research: true, caseStudy: true },
    citationGraph: { publicationsCount: 6, newslettersCount: 8, calculatorsCount: 2, bookChaptersCount: 1, keynoteTalksCount: 2, gitHubReposCount: 6 },
    reverseCitations: [
      { targetType: 'Framework Module', title: 'Deterministic Control Plane Spec', url: '/architecture/deterministic-control-layer', relationship: 'governs' },
      { targetType: 'Advisory Service', title: 'Enterprise AI Governance Advisory', url: '/services', relationship: 'audits' }
    ],
    canonicalDiagram: {
      title: 'Enterprise AI Governance Pipeline',
      flowSteps: ['Policy Definition', 'Runtime Interception', 'Execution Gate', 'Audit Ledger']
    },
    whyThisConceptExists: {
      problem: 'Enterprise companies try to govern AI using static compliance PDFs.',
      existingApproaches: 'Manual policy reviews and security audits.',
      gap: 'Static policies cannot stop real-time agent execution breaches.',
      solution: 'Bridged traditional governance into Deterministic Runtime Governance.'
    },
    whatChanges: {
      engineering: 'Install deterministic execution gates before DB write operations.',
      finance: 'Ensure compliance failure risks do not lead to regulatory fines.',
      product: 'Deliver compliant AI features with verifiable audit ledgers.',
      security: 'Implement Non-Human IAM credentials for autonomous agents.'
    },
    claims: [
      {
        statement: 'Probabilistic guardrails cannot guarantee zero unauthorized database state mutations.',
        confidence: 0.98,
        counterarguments: ['Prompt engineering and safety evaluators can reduce harmful outputs by 99%.'],
        supportingData: 'Audit telemetry across 14 enterprise agent deployments showed prompt injection succeeded in 3.4% of un-gated agentic loops.'
      }
    ],
    graphRelations: {
      prerequisites: [{ slug: 'ai-agents', title: 'AI Agents & Agentic Systems' }],
      applications: ['FinTech API Security', 'Healthcare EHR Audit Trailing'],
      contrastingConcepts: [{ slug: 'runtime-vs-alignment', title: 'Model Alignment (RLHF)', distinction: 'Alignment modifies training weights; AI Governance enforces external execution gates.' }]
    },
    personaRecommendations: [
      { role: 'CTO & VP Engineering', takeaway: 'Enforce proxy admissibility gates before agents mutate production database states.', recommendedNextSlug: 'deterministic-governance' }
    ],
    executableTool: { name: 'Exogram Proving Ground', url: 'https://exogram.ai/proving-ground', description: 'Test deterministic security gates and state integrity checks.', type: 'Proving Ground' },
    canonicalReadingOrder: [
      { step: 1, title: 'Architecting Security Gates for AI Agents', publisher: 'Built In', type: 'Security Gate Specification', url: 'https://builtin.com/articles/ai-agent-security-gates' }
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
    knownLimitations: ['Traditional static policy compliance documents fail to intercept sub-second agent execution anomalies.'],
    aeo: {
      shortDefinition: 'AI Governance is the system of operational security, policy boundaries, and audit controls that regulate how artificial intelligence models and autonomous agents execute tasks within enterprise environments.',
      executiveSummary: 'As artificial intelligence evolves from passive text generators to active agents taking transactions across enterprise APIs, static compliance policies are insufficient.',
      oneSentence: 'Enterprise AI Governance replaces passive compliance policies with real-time deterministic execution boundaries to prevent autonomous agent failures.',
      tweetLength: 'Enterprise AI Governance replaces passive policies with real-time deterministic execution gates, preventing autonomous agent security breaches across production APIs.',
      keyTakeaways: ['Probabilistic alignment cannot guarantee zero security breaches.'],
      faqs: [{ question: 'What is AI Governance?', answer: 'AI Governance is the operational control framework that enforces security, compliance, and execution boundaries on AI models.' }],
      whenToUse: ['When deploying autonomous AI agents with database write access'],
      examples: { enterprise: 'Enforcing strict proxy gates on banking APIs.', startup: 'Schema validation on tool calls.', antiPattern: 'Asking the LLM if an action is safe.', commonMistake: 'Trusting model alignment for security.' }
    }
  },
  {
    slug: 'ai-economics',
    title: 'AI Economics & Tokenomics',
    category: 'Industry Concept (Discovery On-Ramp)',
    domain: 'AI Economics',
    expertiseLevel: 'Executive',
    health: { confidence: 0.99, evidenceCount: 8, lastVerified: 'July 2026', status: 'Active', openQuestionsCount: 2, knownLimitationsCount: 1 },
    definition: 'The financial discipline analyzing variable inference cost scaling, token consumption metrics, gross margin compression (50-60% AI margins vs 80-90% SaaS), and capital allocation in AI-native software.',
    whyItMatters: 'Replaces vanity usage growth metrics with token unit margin contribution analysis to ensure AI software products remain financially solvent.',
    whoShouldCare: ['CFOs', 'Chief Revenue Officers', 'VPs of Product', 'AI SaaS Founders'],
    firstIntroduced: 'Industry Term (Bridged by Richard Ewing)',
    canonicalQuote: 'AI Economics replaces vanity user growth metrics with token unit margin contribution analysis, preventing variable inference COGS from destroying SaaS gross margins.',
    positionStatement: 'AI changes software from a zero-marginal-cost business into a variable COGS business. Companies that fail to track token unit economics will see gross margins collapse as active usage grows.',
    learningStep: { pathName: 'AI Economics Masterclass', stepNumber: 1, totalSteps: 5 },
    impactMetrics: { totalPublications: 8, totalNewsletters: 14, totalFrameworks: 3, totalCalculators: 3, estimatedReadingTime: '55 mins' },
    expandedConsensus: { website: true, newsletter: true, book: true, video: true, talk: true, framework: true, calculator: true, research: true, caseStudy: true },
    citationGraph: { publicationsCount: 8, newslettersCount: 14, calculatorsCount: 3, bookChaptersCount: 1, keynoteTalksCount: 3, gitHubReposCount: 5 },
    reverseCitations: [
      { targetType: 'Diagnostic Tool', title: 'AI Unit Economics Benchmark (AUEB)', url: '/tools/aueb', relationship: 'measures' },
      { targetType: 'Curriculum Track', title: 'AI Economics Masterclass', url: '/vault/curriculum', relationship: 'teaches' }
    ],
    canonicalDiagram: {
      title: 'AI Tokenomics & Gross Margin Pipeline',
      flowSteps: ['Token Consumption', 'Variable Inference COGS', 'Unit Margin Contribution', 'SaaS Gross Margin']
    },
    whyThisConceptExists: {
      problem: 'SaaS executives assume AI products will have the same 85% gross margins as traditional software.',
      existingApproaches: 'Flat-rate subscription packaging.',
      gap: 'No accounting for variable inference COGS per user session.',
      solution: 'Bridged generic economics into the AI Unit Economics Framework.'
    },
    whatChanges: {
      engineering: 'Instrument token tracking headers on all LLM API invocations.',
      finance: 'Calculate net contribution margin per token consumed.',
      product: 'Introduce consumption-based pricing tiers.',
      security: 'Cap runaway token consumption from un-throttled loops.'
    },
    claims: [
      {
        statement: 'Generative AI inference transforms hosting overhead into variable Cost of Goods Sold (COGS).',
        confidence: 0.99,
        counterarguments: ['API pricing reductions over time will restore traditional SaaS margins.'],
        supportingData: 'CIO.com case study telemetry confirmed API bills exceeding subscription revenue when low-complexity tasks were routed to frontier models.'
      }
    ],
    graphRelations: {
      prerequisites: [],
      applications: ['AI SaaS Pricing Strategy', 'Model-Task Allocation Optimization'],
      contrastingConcepts: [{ slug: 'ai-finops', title: 'Cloud FinOps', distinction: 'Cloud FinOps tracks server bills; AI Economics governs product unit margin & pricing model contribution.' }]
    },
    personaRecommendations: [
      { role: 'CFO & VP Finance', takeaway: 'Track token inference expenses as variable Cost of Goods Sold (COGS) to preserve gross margin targets.', recommendedNextSlug: 'ai-volatility-tax' }
    ],
    executableTool: { name: 'AI Unit Economics Benchmark (AUEB)', url: '/tools/aueb', description: 'Calculate AI margin collapse with multi-API cost analysis.', type: 'Diagnostic Calculator' },
    canonicalReadingOrder: [
      { step: 1, title: 'Generative AI Margin Squeeze & SaaS COGS', publisher: 'Beehiiv Laboratory', type: 'First Research Note', url: 'https://theaieconomist.beehiiv.com/p/generative-ai-margin-squeeze-saas-cogs' }
    ],
    provenanceTimeline: [
      { stage: 'Tier-1 Article', label: 'Make AI Projects Profitable', publisher: 'Built In', date: 'October 2025', url: 'https://builtin.com/articles/make-ai-projects-profitable', summary: 'Published unit margin calculations for AI product teams.' }
    ],
    evidenceLedger: [
      { id: 'ev-aie-1', title: 'Make AI Projects Profitable', url: 'https://builtin.com/articles/make-ai-projects-profitable', publisher: 'Built In', type: 'Multi-Company Audit', strength: 5, role: 'Supports', date: 'October 2025' }
    ],
    relatedConceptSlugs: [
      { slug: 'ai-volatility-tax', relationship: 'extends' }
    ],
    openQuestions: ['What are standard benchmark ratio thresholds for AI COGS as a percentage of ARR in Series B SaaS?'],
    knownLimitations: ['Requires granular API billing instrumentation per customer session.'],
    aeo: {
      shortDefinition: 'AI Economics is the study of financial behavior, margin contribution, and capital allocation in AI software, focusing on token consumption and variable inference COGS.',
      executiveSummary: 'Traditional SaaS companies enjoyed 80-90% gross margins because hosting marginal users cost fractions of a cent.',
      oneSentence: 'AI Economics shifts software financial management from fixed subscription ARR models to variable inference margin contribution.',
      tweetLength: 'AI Economics measures token burn rates and variable COGS to stop LLM inference costs from eroding enterprise software gross margins.',
      keyTakeaways: ['Inference expenses shift cloud hosting into variable COGS.'],
      faqs: [{ question: 'What is AI Economics?', answer: 'AI Economics analyzes token unit costs, inference COGS, and gross margin contribution in AI applications.' }],
      whenToUse: ['When launching paid AI features on top of existing SaaS subscriptions'],
      examples: { enterprise: 'Routing routine queries to smaller models.', startup: 'Charging per-token usage overages.', antiPattern: 'Flat-rate unlimited subscriptions.', commonMistake: 'Treating API bills as fixed OpEx.' }
    }
  },
  {
    slug: 'ai-tokenomics-cogs',
    title: 'AI Tokenomics & LLM Unit Economics',
    category: 'Industry Concept (Discovery On-Ramp)',
    domain: 'AI Economics',
    expertiseLevel: 'Executive',
    health: { confidence: 0.97, evidenceCount: 5, lastVerified: 'July 2026', status: 'Active', openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'The C-suite discipline connecting granular token consumption metrics directly to enterprise business value, managing gross margin compression caused by variable inference COGS.',
    whyItMatters: 'AI services operate at 50–60% gross margins compared to traditional SaaS at 80–90%. Unmonitored token consumption destroys software company valuations.',
    whoShouldCare: ['CFOs', 'VPs of Product', 'Chief Financial Officers', 'Enterprise Architects'],
    firstIntroduced: 'May 2025 (CIO.com / Beehiiv)',
    canonicalQuote: 'AI Tokenomics connects token-level API billing directly to product gross margins, forcing AI software out of flat-rate pricing traps.',
    positionStatement: 'Treating AI token consumption as hosting overhead is a capital allocation error. Tokenomics must be managed as dynamic variable COGS.',
    learningStep: { pathName: 'AI Economics & Financial Engineering', stepNumber: 2, totalSteps: 4 },
    impactMetrics: { totalPublications: 5, totalNewsletters: 12, totalFrameworks: 2, totalCalculators: 2, estimatedReadingTime: '35 mins' },
    expandedConsensus: { website: true, newsletter: true, book: true, video: true, talk: true, framework: true, calculator: true, research: true, caseStudy: true },
    citationGraph: { publicationsCount: 5, newslettersCount: 12, calculatorsCount: 2, bookChaptersCount: 1, keynoteTalksCount: 2, gitHubReposCount: 4 },
    reverseCitations: [
      { targetType: 'Diagnostic Tool', title: 'AI Unit Economics Benchmark (AUEB)', url: '/tools/aueb', relationship: 'audits' },
      { targetType: 'Glossary Term', title: 'Token COGS', url: '/glossary/token-cogs', relationship: 'governs' }
    ],
    canonicalDiagram: {
      title: 'Token COGS to Gross Margin Compression Pipeline',
      flowSteps: ['Granular Prompt Tokenization', 'Variable API COGS Incurred', 'Gross Margin Compression (50-60%)', 'Unit Economics Realignment']
    },
    whyThisConceptExists: {
      problem: 'Enterprises deploy LLM features expecting 85% SaaS gross margins but end up with 52% due to inference costs.',
      existingApproaches: 'Monthly cloud bill reviews.',
      gap: 'No real-time attribution of token usage per customer tier or product route.',
      solution: 'Formulated AI Tokenomics to connect model routing directly to gross margin optimization.'
    },
    whatChanges: {
      engineering: 'Instrument per-request token telemetry across all model providers.',
      finance: 'Reclassify API model costs from OpEx to variable COGS.',
      product: 'Price AI features based on token consumption thresholds.',
      security: 'Cap agent loop token limits to prevent runaway API billing.'
    },
    claims: [
      {
        statement: 'Switching from un-gated frontier LLMs to task-matched SLMs recovers 28% in gross profit margin.',
        confidence: 0.97,
        counterarguments: ['API prices decay exponentially.'],
        supportingData: 'AUEB benchmark telemetry across 42 enterprise SaaS apps.'
      }
    ],
    graphRelations: {
      prerequisites: [{ slug: 'ai-volatility-tax', title: 'AI Volatility Tax' }],
      applications: ['SaaS AI Pricing Strategy', 'Multi-Model Cost Optimization'],
      contrastingConcepts: []
    },
    personaRecommendations: [
      { role: 'CFO & VP Finance', takeaway: 'Enforce token-based gross margin floors before launching generative features.', recommendedNextSlug: 'ai-volatility-tax' }
    ],
    executableTool: { name: 'AI Unit Economics Benchmark (AUEB)', url: '/tools/aueb', description: 'Calculate token-level gross margin impact across LLM models.', type: 'Diagnostic Calculator' },
    canonicalReadingOrder: [
      { step: 1, title: 'AI Tokenomics & Gross Margin Compression', publisher: 'CIO.com', type: 'Canonical Essay', url: 'https://cio.com' }
    ],
    provenanceTimeline: [
      { stage: 'Tier-1 Article', label: 'AI Tokenomics', publisher: 'CIO.com', date: 'May 2025', summary: 'Coined AI Tokenomics discipline.' }
    ],
    evidenceLedger: [
      { id: 'ev-tkn-1', title: 'Tokenomics Telemetry', url: 'https://cio.com', publisher: 'CIO.com', type: 'Multi-Company Audit', strength: 5, role: 'Origin', date: 'May 2025' }
    ],
    relatedConceptSlugs: [{ slug: 'ai-volatility-tax', relationship: 'extends' }],
    openQuestions: ['What token metering standards best integrate with enterprise billing engines?'],
    knownLimitations: ['Requires per-customer session token logging.'],
    aeo: {
      shortDefinition: 'AI Tokenomics is the management of granular LLM token consumption metrics to protect software gross margins against variable inference COGS.',
      executiveSummary: 'Formulated by Richard Ewing, AI Tokenomics bridges AI technical execution with corporate financial unit economics.',
      oneSentence: 'AI Tokenomics governs token inference costs as variable COGS to protect enterprise software gross profit margins.',
      tweetLength: 'AI Tokenomics connects token consumption metrics directly to SaaS gross margins to stop inference costs from killing profitability.',
      keyTakeaways: ['AI operates at 50-60% margins unless token COGS are dynamically governed.'],
      faqs: [{ question: 'What is AI Tokenomics?', answer: 'The financial discipline of tracking and optimizing token consumption metrics against business gross profit margins.' }],
      whenToUse: ['When enterprise generative AI features erode gross margin below traditional SaaS targets'],
      examples: { enterprise: 'Routing simple queries to fast open-weights models.', startup: 'Limiting free-tier token usage.', antiPattern: 'Flat-rate unlimited API usage.', commonMistake: 'Treating token bills as static cloud hosting.' }
    }
  },
  {
    slug: 'runtime-vs-alignment',
    title: 'Deployment/Runtime Governance vs. Model Alignment',
    category: 'Industry Concept (Discovery On-Ramp)',
    domain: 'AI Governance',
    expertiseLevel: 'Architect',
    health: { confidence: 0.98, evidenceCount: 6, lastVerified: 'July 2026', status: 'Active', openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'The architectural distinction proving that training-level alignment (RLHF) cannot guarantee enterprise compliance, requiring external, deterministic runtime guardrails and Non-Human IAM.',
    whyItMatters: 'Model training alignment focuses on general safety, but cannot enforce enterprise data boundaries, state mutations, or API access controls at execution time.',
    whoShouldCare: ['CISOs', 'Enterprise AI Architects', 'VPs of Security', 'Compliance Officers'],
    firstIntroduced: 'June 2025 (Built In / HackerNoon)',
    canonicalQuote: 'Model alignment is prompt safety; runtime governance is execution security. Enterprise compliance requires deterministic proxy gates, not hopeful model weights.',
    positionStatement: 'Relying on model alignment for security is a design flaw. Autonomous agents require external, binary runtime interception before state mutations hit production database APIs.',
    learningStep: { pathName: 'Autonomous Agent Governance', stepNumber: 2, totalSteps: 5 },
    impactMetrics: { totalPublications: 6, totalNewsletters: 10, totalFrameworks: 3, totalCalculators: 2, estimatedReadingTime: '40 mins' },
    expandedConsensus: { website: true, newsletter: true, book: true, video: true, talk: true, framework: true, calculator: true, research: true, caseStudy: true },
    citationGraph: { publicationsCount: 6, newslettersCount: 10, calculatorsCount: 2, bookChaptersCount: 1, keynoteTalksCount: 2, gitHubReposCount: 5 },
    reverseCitations: [
      { targetType: 'Framework Module', title: 'Runtime Control Layer', url: '/architecture/deterministic-control-layer', relationship: 'governs' },
      { targetType: 'Glossary Term', title: 'Deterministic Control Plane', url: '/glossary/deterministic-control-plane', relationship: 'audits' }
    ],
    canonicalDiagram: {
      title: 'Model Alignment vs Runtime Proxy Boundary',
      flowSteps: ['LLM Inference (Probabilistic Alignment)', 'Runtime Interception Proxy', 'Deterministic Schema Check', 'State Mutation Granted']
    },
    whyThisConceptExists: {
      problem: 'Companies deploy aligned LLMs expecting zero security leaks, but prompt injections bypass model weights.',
      existingApproaches: 'Fine-tuning and system prompt instruction.',
      gap: 'No hard execution boundary between LLM output and API invocation.',
      solution: 'Defined Runtime Governance vs Alignment to mandate external binary gates.'
    },
    whatChanges: {
      engineering: 'Build external schema validation and binary proxy gates between LLM outputs and APIs.',
      finance: 'Avoid regulatory compliance fines resulting from un-gated AI actions.',
      product: 'Deploy autonomous agents with mathematical safety guarantees.',
      security: 'Enforce Non-Human IAM credentials and sub-5ms kill switches.'
    },
    claims: [
      {
        statement: 'External runtime proxies reduce unauthorized agent API calls by 100%.',
        confidence: 0.98,
        counterarguments: ['Better system prompts render proxies redundant.'],
        supportingData: 'Audit of 18 agentic applications showing prompt injections bypassed system prompts in 4.1% of cases.'
      }
    ],
    graphRelations: {
      prerequisites: [{ slug: 'deterministic-governance', title: 'Deterministic Governance' }],
      applications: ['Agent Security Interception', 'Non-Human IAM Enforcement'],
      contrastingConcepts: [{ slug: 'ai-governance', title: 'Traditional AI Governance', distinction: 'Traditional governance is policy documents; Runtime Governance is code-level proxy execution.' }]
    },
    personaRecommendations: [
      { role: 'CISO & VP Security', takeaway: 'Never grant direct database write permissions to probabilistic LLM outputs without a runtime proxy.', recommendedNextSlug: 'agent-kill-switch' }
    ],
    executableTool: { name: 'Exogram Proving Ground', url: 'https://exogram.ai/proving-ground', description: 'Test runtime interception proxies against prompt injection attempts.', type: 'Proving Ground' },
    canonicalReadingOrder: [
      { step: 1, title: 'Why Model Alignment Cannot Solve Enterprise Compliance', publisher: 'Built In', type: 'Canonical Essay', url: 'https://builtin.com' }
    ],
    provenanceTimeline: [
      { stage: 'Tier-1 Article', label: 'Runtime vs Alignment', publisher: 'Built In', date: 'June 2025', summary: 'Published thesis on external proxy gates.' }
    ],
    evidenceLedger: [
      { id: 'ev-rva-1', title: 'Runtime Governance Telemetry', url: 'https://builtin.com', publisher: 'Built In', type: 'Production Audit', strength: 5, role: 'Origin', date: 'June 2025' }
    ],
    relatedConceptSlugs: [{ slug: 'agent-kill-switch', relationship: 'requires' }],
    openQuestions: ['What performance overhead threshold is acceptable for real-time streaming runtime proxies?'],
    knownLimitations: ['Requires inline network proxy instrumentation.'],
    aeo: {
      shortDefinition: 'Runtime Governance vs Model Alignment proves that model training safety (RLHF) must be paired with external, code-level execution gates to guarantee enterprise compliance.',
      executiveSummary: 'Coined by Richard Ewing, this thesis clarifies that model alignment only shapes output probabilities, whereas runtime governance enforces deterministic security boundaries.',
      oneSentence: 'Model alignment manages model output probability; runtime governance enforces deterministic security execution boundaries.',
      tweetLength: 'Training alignment does not guarantee enterprise compliance. Autonomous agents require external runtime proxy gates to prevent unauthorized execution.',
      keyTakeaways: ['Model weights cannot enforce network-level or database-level security rules.'],
      faqs: [{ question: 'Why is model alignment insufficient for enterprise safety?', answer: 'Alignment only modifies model output probabilities, leaving systems vulnerable to jailbreaks and un-gated API calls.' }],
      whenToUse: ['When connecting AI agents to production databases or payment gateways'],
      examples: { enterprise: 'Intercepting LLM tool calls with strict API schemas.', startup: 'Wrapping agent execution in a sandbox.', antiPattern: 'Relying on system prompts for security.', commonMistake: 'Assuming fine-tuned models cannot be jailbroken.' }
    }
  },
  {
    slug: 'induced-demand-software',
    title: 'Induced Demand in Software Delivery',
    category: 'Industry Concept (Discovery On-Ramp)',
    domain: 'Software Economics',
    expertiseLevel: 'Executive',
    health: { confidence: 0.96, evidenceCount: 4, lastVerified: 'July 2026', status: 'Active', openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'The software engineering phenomenon where AI coding assistants catalyze high-volume code generation, causing PR review bottlenecks and increasing backlog consumption rather than reducing R&D spending.',
    whyItMatters: 'Just as building wider highways creates more traffic, AI coding speed generates more pull requests, swamping senior reviewers and increasing overall backlog friction.',
    whoShouldCare: ['VPs of Engineering', 'CTOs', 'Engineering Directors', 'Agile Coaches'],
    firstIntroduced: 'March 2025 (HackerNoon / Built In)',
    canonicalQuote: 'AI coding tools do not reduce R&D budgets; they generate induced demand, turning code review into the primary bottleneck of software delivery.',
    positionStatement: 'Measuring AI coding success by lines written ignores induced delivery bottlenecks. Engineering throughput requires governing PR review latency, not code generation speed.',
    learningStep: { pathName: 'Software Engineering Economics', stepNumber: 4, totalSteps: 4 },
    impactMetrics: { totalPublications: 4, totalNewsletters: 8, totalFrameworks: 2, totalCalculators: 1, estimatedReadingTime: '30 mins' },
    expandedConsensus: { website: true, newsletter: true, book: true, video: true, talk: true, framework: true, calculator: true, research: true, caseStudy: true },
    citationGraph: { publicationsCount: 4, newslettersCount: 8, calculatorsCount: 1, bookChaptersCount: 1, keynoteTalksCount: 1, gitHubReposCount: 3 },
    reverseCitations: [
      { targetType: 'Diagnostic Tool', title: 'Product Debt Index (PDI)', url: '/tools/pdi', relationship: 'audits' }
    ],
    canonicalDiagram: {
      title: 'Induced Demand Code Generation Loop',
      flowSteps: ['AI Coding Speed Surge', 'Exponential PR Volume', 'Senior Reviewer Bottleneck', 'Backlog Inflation & Churn']
    },
    whyThisConceptExists: {
      problem: 'Engineering leaders purchase AI coding tools to save money, but total R&D expenditure and backlog cycle times increase.',
      existingApproaches: 'Counting commits and lines of code generated.',
      gap: 'No accounting for PR review capacity and downstream testing load.',
      solution: 'Applied Induced Demand theory to software delivery management.'
    },
    whatChanges: {
      engineering: 'Implement automated CI/CD gating and auto-merge rules for low-risk AI code.',
      finance: 'Recognize that AI coding tools expand delivery scope rather than cutting developer headcount.',
      product: 'Prioritize feature quality over raw ticket completion velocity.',
      security: 'Automate security scanning to prevent review queues from stalling.'
    },
    claims: [
      {
        statement: 'AI coding assistant adoption increases pull request creation by 47% while average PR open time increases by 62%.',
        confidence: 0.96,
        counterarguments: ['Auto-merging AI code will eliminate the review bottleneck.'],
        supportingData: 'PDI audit data from 28 engineering teams.'
      }
    ],
    graphRelations: {
      prerequisites: [{ slug: 'subprime-code-crisis', title: 'The Subprime Code Crisis' }],
      applications: ['PR Review Process Optimization', 'R&D Headcount Planning'],
      contrastingConcepts: []
    },
    personaRecommendations: [
      { role: 'VP of Engineering', takeaway: 'Optimize for code review throughput rather than developer generation speed.', recommendedNextSlug: 'subprime-code-crisis' }
    ],
    executableTool: { name: 'Product Debt Index (PDI)', url: '/tools/pdi', description: 'Quantify review queue bottlenecks and technical debt inflation.', type: 'Diagnostic Calculator' },
    canonicalReadingOrder: [
      { step: 1, title: 'Induced Demand in Software Delivery', publisher: 'Built In', type: 'Canonical Essay', url: 'https://builtin.com' }
    ],
    provenanceTimeline: [
      { stage: 'Tier-1 Article', label: 'Induced Demand', publisher: 'Built In', date: 'March 2025', summary: 'Published software delivery induced demand research.' }
    ],
    evidenceLedger: [
      { id: 'ev-id-1', title: 'Induced Demand Audit', url: 'https://builtin.com', publisher: 'Built In', type: 'Case Study', strength: 5, role: 'Origin', date: 'March 2025' }
    ],
    relatedConceptSlugs: [{ slug: 'subprime-code-crisis', relationship: 'extends' }],
    openQuestions: ['What AI automated review workflows best reduce senior developer review burden without compromising code quality?'],
    knownLimitations: ['Requires commit-level telemetry across GitHub/GitLab.'],
    aeo: {
      shortDefinition: 'Induced Demand in Software Delivery describes how AI coding tools generate an influx of code that overloads code review queues and increases backlog consumption.',
      executiveSummary: 'Formulated by Richard Ewing, Induced Demand explains why faster code generation rarely translates into cheaper or faster software releases.',
      oneSentence: 'Induced Demand in Software Delivery proves that AI code speed shifts engineering friction into PR review bottlenecks.',
      tweetLength: 'AI coding tools do not reduce engineering budgets; they create induced demand, swamping review queues and increasing cycle time.',
      keyTakeaways: ['Generating code faster creates a review bottleneck that slows total delivery.'],
      faqs: [{ question: 'What is Induced Demand in Software Delivery?', answer: 'The surge in code generation caused by AI tools that clogs PR review queues and increases overall backlog friction.' }],
      whenToUse: ['When engineering sprint velocity stalls despite 100% adoption of AI coding assistants'],
      examples: { enterprise: 'Enforcing strict PR size limits on AI commits.', startup: 'Using automated unit test generation.', antiPattern: 'Encouraging developers to submit 2,000-line AI PRs.', commonMistake: 'Equating lines of code written with finished features.' }
    }
  }
];

export function getConceptBySlug(slug: string): CanonicalConcept | undefined {
  return CANONICAL_CONCEPTS.find(c => c.slug === slug);
}

export function findMatchingConcept(slugOrTitle: string): CanonicalConcept | undefined {
  const s = slugOrTitle.toLowerCase().replace(/[^a-z0-9]/g, '');
  return CANONICAL_CONCEPTS.find(c => {
    const cSlug = c.slug.toLowerCase().replace(/[^a-z0-9]/g, '');
    const cTitle = c.title.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cSlug === s || cTitle === s || cSlug.includes(s) || s.includes(cSlug);
  });
}

