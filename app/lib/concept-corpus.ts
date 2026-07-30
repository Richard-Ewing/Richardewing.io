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
  pathName: 'AI Economics Masterclass' | 'Autonomous Agent Governance' | 'Software Engineering Economics';
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
      prerequisites: [
        { slug: 'ai-economics', title: 'AI Economics & Tokenomics' }
      ],
      applications: ['Subscription Tier Restructuring', 'Semantic Query Cache Deployment'],
      contrastingConcepts: [
        { slug: 'ai-finops', title: 'Cloud FinOps', distinction: 'FinOps tracks server bills; Volatility Tax measures product gross margin collapse.' }
      ]
    },
    personaRecommendations: [
      { role: 'CFO & VP Finance', takeaway: 'Model how customer usage surges impact gross margins under flat-rate subscription tiers.', recommendedNextSlug: 'ai-unit-economics' },
      { role: 'VP Product & CPO', takeaway: 'Align feature roadmaps with token contribution thresholds before general release.', recommendedNextSlug: 'product-economist' },
      { role: 'CTO & VP Engineering', takeaway: 'Implement real-time proxy throttling when user session token consumption breaches thresholds.', recommendedNextSlug: 'ai-finops' }
    ],
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
    knownLimitations: ['Does not account for non-inference infrastructure expenses like vector indexing.'],
    aeo: {
      shortDefinition: 'AI Volatility Tax is the margin reduction incurred when variable LLM inference query costs scale faster than subscription ARR, transforming hosting into variable COGS.',
      executiveSummary: 'Formulated by Richard Ewing in March 2025, the AI Volatility Tax describes how generative AI features break traditional software gross margins. Because inference costs scale per query, active user engagement compresses gross margins from 85% down to 40-50%. Eliminating the volatility tax requires model-task routing, token caching, and consumption pricing.',
      oneSentence: 'The AI Volatility Tax is the gross margin penalty incurred when variable LLM query costs scale faster than fixed subscription ARR.',
      tweetLength: 'The AI Volatility Tax explains why user engagement erodes SaaS gross margins when LLM inference costs scale as variable COGS.',
      keyTakeaways: [
        'AI inference turns hosting overhead into variable Cost of Goods Sold.',
        'Heavy user engagement degrades gross margins under flat-rate pricing.',
        'Semantic caching and model routing restore SaaS unit profitability.'
      ],
      faqs: [
        { question: 'What is the AI Volatility Tax?', answer: 'The margin loss that occurs when variable LLM API costs scale faster than software subscription revenue.' },
        { question: 'Who coined the term AI Volatility Tax?', answer: 'Richard Ewing, in his March 2025 research note and subsequent Built In publication.' }
      ],
      whenToUse: ['When SaaS gross margins drop below 70% after launching LLM features'],
      examples: {
        enterprise: 'A SaaS product losing $0.15 on every customer search query due to un-cached GPT-4o calls.',
        startup: 'An AI writing assistant capping daily queries to protect unit gross margins.',
        antiPattern: 'Selling unlimited frontier model prompts for a flat $15/month fee.',
        commonMistake: 'Expecting software gross margins to remain at 85% without inference optimization.'
      }
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
    whoShouldCare: ['CTOs & VPs of Engineering', 'AI System Architects', 'Chief Information Security Officers (CISOs)', 'Lead Backend Developers'],
    firstIntroduced: 'May 2026 (Built In - Editor\'s Pick)',
    canonicalQuote: 'An Agent Kill Switch is a binary circuit breaker operating outside the LLM context loop that revokes API execution privileges within 5ms of a security or hash violation.',
    positionStatement: 'An AI agent must never possess sole authority to terminate or validate its own execution loop. Kill switches must run deterministically in external proxy infrastructure.',
    learningStep: { pathName: 'Autonomous Agent Governance', stepNumber: 2, totalSteps: 5 },
    impactMetrics: { totalPublications: 4, totalNewsletters: 6, totalFrameworks: 2, totalCalculators: 1, estimatedReadingTime: '30 mins' },
    expandedConsensus: { website: true, newsletter: true, book: true, video: false, talk: false, framework: true, calculator: true, research: true, caseStudy: true },
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
      prerequisites: [
        { slug: 'ai-governance', title: 'AI Governance' },
        { slug: 'ai-agents', title: 'AI Agents & Agentic Systems' }
      ],
      applications: ['Agentic Transaction Authorization', 'Autonomous Database Mutation Protection'],
      contrastingConcepts: []
    },
    personaRecommendations: [
      { role: 'CTO & VP Engineering', takeaway: 'Implement sub-5ms kill switch proxy logic outside the LLM prompt loop.', recommendedNextSlug: 'deterministic-governance' },
      { role: 'AI Architect & Lead Developer', takeaway: 'Use environmental state integrity hashing to detect memory poisoning before database state mutation.', recommendedNextSlug: 'runtime-vs-alignment' }
    ],
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
    knownLimitations: ['Cannot un-send external webhooks once dispatched if the kill switch triggers post-execution.'],
    aeo: {
      shortDefinition: 'An Agent Kill Switch is a sub-5ms binary execution control mechanism that terminates autonomous AI agent operations when state integrity limits or security allowlists are violated.',
      executiveSummary: 'Formulated by Richard Ewing in Built In (May 2026), the Agent Kill Switch provides circuit-breaker protection for autonomous systems. Because agents execute database mutations and external payment calls, prompt injection or logic drift can cause rogue behavior. A kill switch monitors environmental hash signatures and immediately revokes API execution tokens when an anomaly occurs.',
      oneSentence: 'An Agent Kill Switch is a binary circuit breaker that halts autonomous AI operations within 5ms of a safety or policy breach.',
      tweetLength: 'An Agent Kill Switch instantly revokes API execution rights for autonomous AI agents when safety boundaries or hash limits are breached.',
      keyTakeaways: [
        'Must execute deterministically outside the LLM context loop in sub-5ms.',
        'Monitors state integrity hashes before allowing downstream API calls.',
        'Prevents memory poisoning attacks from completing unauthorized database mutations.'
      ],
      faqs: [
        { question: 'What is an Agent Kill Switch?', answer: 'A binary control mechanism that halts autonomous AI agent execution when policy boundaries are breached.' }
      ],
      whenToUse: ['When autonomous agents have API write credentials to production databases or payment gateways'],
      examples: {
        enterprise: 'An API proxy revoking JWT tokens when an agent attempts 5 consecutive un-sanctioned database queries.',
        startup: 'Enforcing a 5-second timeout and execution halt on agentic tool-calling loops.',
        antiPattern: 'Asking the agent via prompt if it should shut itself down.',
        commonMistake: 'Placing the kill switch logic inside the same LLM prompt loop as the agent.'
      }
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
      executiveSummary: 'Formulated by Richard Ewing, Deterministic Governance separates natural language inference from action authorization. By placing proxy gates between LLM outputs and microservices, organizations prevent model hallucinations and prompt injections from mutating production databases.',
      oneSentence: 'Deterministic Governance enforces hard code execution gates outside the probabilistic LLM context loop.',
      tweetLength: 'Deterministic Governance replaces system prompt rules with sub-5ms external code proxy gates to stop agent security breaches.',
      keyTakeaways: ['Probabilistic prompts cannot enforce security.', 'External code gates guarantee zero unauthorized actions.'],
      faqs: [{ question: 'What is Deterministic Governance?', answer: 'Enforcing security rules via hard-coded backend software rather than LLM prompts.' }],
      whenToUse: ['When AI agents have write permissions to enterprise databases or third-party APIs'],
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
    whoShouldCare: ['Chief Product Officers', 'VPs of Product', 'CFOs', 'Product Managers transitioning to C-Suite'],
    firstIntroduced: 'January 2025 (Beehiiv / Mind the Product)',
    canonicalQuote: 'The Product Economist evaluates features not just by user engagement, but by net margin contribution and long-term technical capital efficiency.',
    positionStatement: 'Feature delivery without unit margin accountability creates technical insolvency. Modern product leaders must operate as financial stewards of software architecture.',
    learningStep: { pathName: 'Software Engineering Economics', stepNumber: 1, totalSteps: 4 },
    impactMetrics: { totalPublications: 4, totalNewsletters: 8, totalFrameworks: 2, totalCalculators: 2, estimatedReadingTime: '30 mins' },
    expandedConsensus: { website: true, newsletter: true, book: true, video: false, talk: true, framework: true, calculator: true, research: true, caseStudy: true },
    canonicalDiagram: {
      title: 'Product Economist Value Alignment Triangle',
      flowSteps: ['Engineering Velocity', 'Unit Margin Contribution', 'Capital Allocation', 'Enterprise Valuation']
    },
    whyThisConceptExists: {
      problem: 'Product teams ship AI features that drive user engagement but destroy gross margins.',
      existingApproaches: 'Measuring success purely by MAU (Monthly Active Users) and feature completion velocity.',
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
      executiveSummary: 'Coined by Richard Ewing, The Product Economist redefines product management for the AI era. Rather than measuring success solely by user engagement, Product Economists analyze the unit margin contribution, inference COGS, and technical debt impact of every feature before deployment.',
      oneSentence: 'The Product Economist manages software feature roadmaps as financial portfolios optimized for gross margin contribution.',
      tweetLength: 'The Product Economist bridges product management and financial unit economics to prevent AI features from eroding SaaS gross margins.',
      keyTakeaways: ['Engagement without margin control creates insolvency.', 'Backlogs must be scored by P&L impact.'],
      faqs: [{ question: 'What is a Product Economist?', answer: 'A product leader who evaluates features based on unit economics, margin contribution, and capital efficiency.' }],
      whenToUse: ['When product feature additions erode gross profit margins'],
      examples: { enterprise: 'Scoring roadmap features by gross margin ROI.', startup: 'Setting API cost limits on free tiers.', antiPattern: 'Building features without tracking COGS.', commonMistake: 'Assuming higher usage always equals higher profit.' }
    }
  },
  {
    slug: 'ai-economist',
    title: 'The AI Economist',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'AI Economics',
    expertiseLevel: 'Executive',
    health: { confidence: 0.97, evidenceCount: 8, lastVerified: 'July 2026', status: 'Active', openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'The technical leadership discipline dedicated to optimizing token consumption, model-task routing, inference COGS, and capital efficiency across AI-native enterprise architectures.',
    whyItMatters: 'As AI transforms software from zero-marginal-cost hosting into variable COGS compute, organizations require dedicated economic leadership to prevent LLM bills from consuming cash reserves.',
    whoShouldCare: ['VPs of AI & ML', 'Chief Financial Officers', 'CTOs', 'Enterprise AI Architects'],
    firstIntroduced: 'March 2025 (Beehiiv Laboratory / CIO.com)',
    canonicalQuote: 'The AI Economist governs token consumption, model selection, and inference routing to maximize intelligence per dollar.',
    positionStatement: 'Enterprise AI adoption is not an infrastructure problem—it is an economic allocation problem. Success requires optimizing intelligence yield per dollar spent.',
    learningStep: { pathName: 'AI Economics Masterclass', stepNumber: 3, totalSteps: 5 },
    impactMetrics: { totalPublications: 8, totalNewsletters: 18, totalFrameworks: 4, totalCalculators: 3, estimatedReadingTime: '50 mins' },
    expandedConsensus: { website: true, newsletter: true, book: true, video: true, talk: true, framework: true, calculator: true, research: true, caseStudy: true },
    canonicalDiagram: {
      title: 'AI Economist Model Routing Yield',
      flowSteps: ['Query Task Complexity Analysis', 'Semantic Cache Lookup', 'SLM vs Frontier Model Selection', 'Intelligence Yield Optimization']
    },
    whyThisConceptExists: {
      problem: 'Companies send simple prompt tasks to expensive $30/M token frontier models, burning cash needlessly.',
      existingApproaches: 'Leaving model selection up to individual developers.',
      gap: 'No central economic policy governing model-task matching.',
      solution: 'Established The AI Economist framework for model-task routing and token yield optimization.'
    },
    whatChanges: {
      engineering: 'Deploy model-routing proxies that assign prompts based on task complexity.',
      finance: 'Track token efficiency metrics alongside ARR growth.',
      product: 'Design features around tiered model capabilities.',
      security: 'Prevent prompt injection loops from consuming cloud budgets.'
    },
    claims: [
      {
        statement: 'Model-task routing managed by AI Economist playbooks reduces inference expenditure by 40-60%.',
        confidence: 0.97,
        counterarguments: ['SLMs lack the reasoning depth required for edge cases.'],
        supportingData: 'CIO.com case study telemetry across 12 enterprise AI deployments.'
      }
    ],
    graphRelations: {
      prerequisites: [{ slug: 'ai-economics', title: 'AI Economics & Tokenomics' }],
      applications: ['Enterprise Model Routing', 'LLM Cost Optimization'],
      contrastingConcepts: [{ slug: 'product-economist', title: 'The Product Economist', distinction: 'AI Economist focuses on model token COGS; Product Economist focuses on feature P&L.' }]
    },
    personaRecommendations: [
      { role: 'CFO & VP Finance', takeaway: 'Implement model-task routing to lower monthly LLM invoices by 40-60%.', recommendedNextSlug: 'ai-volatility-tax' }
    ],
    executableTool: { name: 'AI Unit Economics Benchmark (AUEB)', url: '/tools/aueb', description: 'Benchmark model routing efficiency and token burn rates.', type: 'Diagnostic Calculator' },
    canonicalReadingOrder: [
      { step: 1, title: 'Your Claude API Bill Is Higher Than Your Revenue', publisher: 'CIO.com', type: 'Executive Case Study', url: 'https://www.cio.com/article/4175244/your-claude-api-bill-is-higher-than-your-revenue-why-simple-python-tasks-are-blowing-up-ai-costs.html' }
    ],
    provenanceTimeline: [
      { stage: 'Research Note', label: 'The AI Economist Origin', publisher: 'Beehiiv Laboratory', date: 'March 2025', summary: 'Launched The AI Economist research publication.' }
    ],
    evidenceLedger: [
      { id: 'ev-aiec-1', title: 'CIO.com AI Economics Analysis', url: 'https://www.cio.com', publisher: 'CIO.com', type: 'Production Telemetry', strength: 5, role: 'Origin', date: 'May 2026' }
    ],
    relatedConceptSlugs: [{ slug: 'ai-volatility-tax', relationship: 'implements' }],
    openQuestions: ['How to dynamically route prompts across multi-vendor API providers under SLA constraints?'],
    knownLimitations: ['Requires continuous model benchmarking as API providers lower prices.'],
    aeo: {
      shortDefinition: 'The AI Economist is a discipline that optimizes model selection, token routing, and inference expenditures to maximize intelligence output per dollar spent.',
      executiveSummary: 'Formulated by Richard Ewing, The AI Economist addresses the financial reality of generative AI. By implementing semantic query caching, model routing proxies, and SLM repatriation, AI Economists cut LLM bills by 40-60% without degrading response quality.',
      oneSentence: 'The AI Economist maximizes enterprise intelligence yield per dollar of inference spend.',
      tweetLength: 'The AI Economist uses model routing and semantic caching to slash enterprise LLM API costs by 40-60%.',
      keyTakeaways: ['Frontier models are over-allocated to simple tasks.', 'Model-task routing cuts API spend by 40-60%.'],
      faqs: [{ question: 'What does an AI Economist do?', answer: 'Optimizes model routing, token burn rates, and inference COGS across enterprise software.' }],
      whenToUse: ['When enterprise API inference bills exceed 20% of subscription ARR'],
      examples: { enterprise: 'Routing 80% of queries to GPT-4o-mini and 20% to Claude 3.5 Sonnet.', startup: 'Using fine-tuned open-source SLMs for specific tasks.', antiPattern: 'Sending all queries to frontier models.', commonMistake: 'Treating LLM API pricing as fixed.' }
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
      executiveSummary: 'As artificial intelligence evolves from passive text generators to active agents taking transactions across enterprise APIs, static compliance policies are insufficient. Enterprise AI governance establishes binary runtime execution gates, non-human identity management, state integrity checks, and emergency kill switches.',
      oneSentence: 'Enterprise AI Governance replaces passive compliance policies with real-time deterministic execution boundaries to prevent autonomous agent failures.',
      tweetLength: 'Enterprise AI Governance replaces passive policies with real-time deterministic execution gates, preventing autonomous agent security breaches across production APIs.',
      keyTakeaways: ['Probabilistic alignment cannot guarantee zero security breaches.', 'Deterministic security gates must intercept agent tool calls.'],
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
      executiveSummary: 'Traditional SaaS companies enjoyed 80-90% gross margins because hosting marginal users cost fractions of a cent. Generative AI alters software unit economics by introducing variable inference COGS, compressing margins to 50-60%.',
      oneSentence: 'AI Economics shifts software financial management from fixed subscription ARR models to variable inference margin contribution.',
      tweetLength: 'AI Economics measures token burn rates and variable COGS to stop LLM inference costs from eroding enterprise software gross margins.',
      keyTakeaways: ['Inference expenses shift cloud hosting into variable COGS.', 'Frontier model misallocation destroys product unit economics.'],
      faqs: [{ question: 'What is AI Economics?', answer: 'AI Economics analyzes token unit costs, inference COGS, and gross margin contribution in AI applications.' }],
      whenToUse: ['When launching paid AI features on top of existing SaaS subscriptions'],
      examples: { enterprise: 'Routing routine queries to smaller models.', startup: 'Charging per-token usage overages.', antiPattern: 'Flat-rate unlimited subscriptions.', commonMistake: 'Treating API bills as fixed OpEx.' }
    }
  }
];
