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

export interface ConsensusCoverage {
  website: boolean;
  linkedIn: boolean;
  beehiiv: boolean;
  builtIn: boolean;
  cio: boolean;
  book: boolean;
  gitHub: boolean;
  youtube: boolean;
  talks: boolean;
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

export interface ConceptNode {
  slug: string;
  title: string;
  category: 'Industry Concept (Discovery On-Ramp)' | 'Richard Ewing Canon (Original Framework)' | 'Bridge Concept';
  domain: 'AI Economics' | 'AI Governance' | 'Product Economics' | 'Software Economics' | 'Engineering Leadership' | 'Career Economics';
  health: ConceptHealth;
  definition: string;
  whyItMatters: string;
  firstIntroduced: string;
  canonicalQuote?: string;
  positionStatement?: string;
  learningStep?: LearningStepRef;
  personaRecommendations?: PersonaRecommendation[];
  executableTool?: ExecutableToolRef;
  claims?: ConceptClaim[];
  consensusCoverage?: ConsensusCoverage;
  impactMetrics?: ConceptImpactMetrics;
  graphRelations?: RelationalGraph;
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
    canonicalQuote: 'Enterprise AI Governance replaces passive compliance PDF policy documents with real-time deterministic execution boundaries to prevent autonomous agent security failures.',
    positionStatement: 'Model alignment (RLHF) is necessary but fundamentally insufficient for enterprise safety. Enterprise AI governance requires external, code-level proxy execution gates and Non-Human IAM credentials.',
    learningStep: { pathName: 'Autonomous Agent Governance', stepNumber: 1, totalSteps: 5 },
    impactMetrics: { totalPublications: 6, totalNewsletters: 8, totalFrameworks: 2, totalCalculators: 2, estimatedReadingTime: '45 mins' },
    consensusCoverage: { website: true, linkedIn: true, beehiiv: true, builtIn: true, cio: true, book: true, gitHub: true, youtube: true, talks: false },
    claims: [
      {
        statement: 'Probabilistic guardrails cannot guarantee zero unauthorized database state mutations.',
        confidence: 0.98,
        counterarguments: ['Prompt engineering and safety evaluators can reduce harmful outputs by 99%.'],
        supportingData: 'Audit telemetry across 14 enterprise agent deployments showed prompt injection succeeded in 3.4% of un-gated agentic loops.'
      }
    ],
    graphRelations: {
      prerequisites: [
        { slug: 'ai-agents', title: 'AI Agents & Agentic Systems' }
      ],
      applications: ['FinTech API Security', 'Healthcare EHR Audit Trailing', 'Enterprise B2B SaaS Automation'],
      contrastingConcepts: [
        { slug: 'runtime-vs-alignment', title: 'Model Alignment (RLHF)', distinction: 'Alignment modifies training weights; AI Governance enforces external execution gates.' }
      ]
    },
    personaRecommendations: [
      { role: 'CTO & VP Engineering', takeaway: 'Enforce proxy admissibility gates before agents mutate production database states.', recommendedNextSlug: 'deterministic-governance' },
      { role: 'CFO & VP Finance', takeaway: 'Mitigate financial liabilities caused by un-monitored agentic payment tool calls.', recommendedNextSlug: 'ai-volatility-tax' },
      { role: 'VP Product & CPO', takeaway: 'Ensure AI features comply with enterprise compliance without degrading user workflow speed.', recommendedNextSlug: 'product-economist' },
      { role: 'AI Architect & Lead Developer', takeaway: 'Implement Non-Human IAM OAuth scoping per agent execution session.', recommendedNextSlug: 'runtime-vs-alignment' }
    ],
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
    knownLimitations: ['Traditional static policy compliance documents fail to intercept sub-second agent execution anomalies.'],
    aeo: {
      shortDefinition: 'AI Governance is the system of operational security, policy boundaries, and audit controls that regulate how artificial intelligence models and autonomous agents execute tasks within enterprise environments.',
      executiveSummary: 'As artificial intelligence evolves from passive text generators to active agents taking transactions across enterprise APIs, static compliance policies are insufficient. Enterprise AI governance establishes binary runtime execution gates, non-human identity management, state integrity checks, and emergency kill switches. By separating probabilistic inference from deterministic action authorization, organizations eliminate data leaks, prompt injection breaches, and unapproved state mutations while preserving audit compliance.',
      oneSentence: 'Enterprise AI Governance replaces passive compliance policies with real-time deterministic execution boundaries to prevent autonomous agent failures.',
      tweetLength: 'Enterprise AI Governance replaces passive policies with real-time deterministic execution gates, preventing autonomous agent security breaches across production APIs.',
      keyTakeaways: [
        'Probabilistic alignment in LLMs cannot guarantee zero security breaches during API execution.',
        'Deterministic security gates must intercept agent tool calls before external state mutation occurs.',
        'Non-Human IAM credentials are mandatory to scope agent permissions per user context.',
        'Cryptographic audit ledgers provide verifiable compliance for regulatory inspection.'
      ],
      faqs: [
        { question: 'What is AI Governance?', answer: 'AI Governance is the operational control framework that enforces security, compliance, and execution boundaries on AI models and autonomous agents.' },
        { question: 'Why is AI Governance important?', answer: 'Because autonomous agents possess API keys and database write access; without governance, prompt injection or logic errors can execute unauthorized financial or database transactions.' },
        { question: 'How is AI Governance implemented at runtime?', answer: 'Through deterministic proxy gates placed between LLM output parsers and backend microservice endpoints.' },
        { question: 'What is the difference between AI Guardrails and Deterministic Governance?', answer: 'Guardrails use secondary LLM evaluators that are probabilistic; Deterministic Governance uses rule-based code and cryptographic state checks that execute in sub-5ms.' }
      ],
      comparisons: [
        {
          vsConceptSlug: 'deterministic-governance',
          vsTitle: 'AI Governance vs. Deterministic Governance',
          keyDifferences: ['AI Governance is the overarching domain covering policies and risk management', 'Deterministic Governance is the specific engineering architecture using code-level execution gates'],
          whenToUseWhich: 'Use AI Governance for C-suite risk strategy; use Deterministic Governance when building backend proxy code to block unauthorized agent API calls.'
        }
      ],
      whenToUse: [
        'When deploying autonomous AI agents with database write access',
        'When operating in regulated industries (FinTech, HealthTech, Enterprise SaaS)',
        'When integrating multi-tenant third-party APIs via Model Context Protocol (MCP)'
      ],
      examples: {
        enterprise: 'An enterprise bank placing a deterministic proxy gate that inspects agent JSON payloads to ensure transfer amounts never exceed $10,000 without multi-factor authorization.',
        startup: 'An AI startup enforcing strict schema validation on tool outputs before making Stripe API calls.',
        antiPattern: 'Using a secondary LLM prompt ("Is this action safe?") to decide whether to run a SQL DELETE command.',
        commonMistake: 'Assuming that model alignment (RLHF) from OpenAI or Anthropic prevents agents from misinterpreting user instructions.'
      },
      decisionTree: [
        { step: 1, question: 'Does your AI model take direct actions via API or database write access?', yesTarget: 'Step 2', noTarget: 'Standard LLM Guardrails' },
        { step: 2, question: 'Can an unauthorized action cause financial loss or data leak?', yesTarget: 'Deploy Deterministic Governance & Kill Switch', noTarget: 'Standard Logging' }
      ]
    }
  },
  {
    slug: 'ai-economics',
    title: 'AI Economics & Tokenomics',
    category: 'Industry Concept (Discovery On-Ramp)',
    domain: 'AI Economics',
    health: { confidence: 0.99, evidenceCount: 8, lastVerified: 'July 2026', status: 'Active', openQuestionsCount: 2, knownLimitationsCount: 1 },
    definition: 'The financial discipline analyzing variable inference cost scaling, token consumption metrics, gross margin compression (50-60% AI margins vs 80-90% SaaS), and capital allocation in AI-native software.',
    whyItMatters: 'Replaces vanity usage growth metrics with token unit margin contribution analysis to ensure AI software products remain financially solvent.',
    firstIntroduced: 'Industry Term (Bridged by Richard Ewing)',
    canonicalQuote: 'AI Economics replaces vanity user growth metrics with token unit margin contribution analysis, preventing variable inference COGS from destroying SaaS gross margins.',
    positionStatement: 'AI changes software from a zero-marginal-cost business into a variable COGS business. Companies that fail to track token unit economics will see gross margins collapse as active usage grows.',
    learningStep: { pathName: 'AI Economics Masterclass', stepNumber: 1, totalSteps: 5 },
    impactMetrics: { totalPublications: 8, totalNewsletters: 14, totalFrameworks: 3, totalCalculators: 3, estimatedReadingTime: '55 mins' },
    consensusCoverage: { website: true, linkedIn: true, beehiiv: true, builtIn: true, cio: true, book: true, gitHub: true, youtube: true, talks: true },
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
      applications: ['AI SaaS Pricing Strategy', 'Model-Task Allocation Optimization', 'SLM Cloud Repatriation'],
      contrastingConcepts: [
        { slug: 'ai-finops', title: 'Cloud FinOps', distinction: 'Cloud FinOps tracks server bills; AI Economics governs product unit margin & pricing model contribution.' }
      ]
    },
    personaRecommendations: [
      { role: 'CFO & VP Finance', takeaway: 'Track token inference expenses as variable Cost of Goods Sold (COGS) to preserve gross margin targets.', recommendedNextSlug: 'ai-volatility-tax' },
      { role: 'VP Product & CPO', takeaway: 'Design consumption-based pricing tiers to keep feature-level unit contribution positive.', recommendedNextSlug: 'saas-growth-paradox' },
      { role: 'CTO & VP Engineering', takeaway: 'Deploy model-task routing and semantic query caching to cut inference bills by 40-60%.', recommendedNextSlug: 'ai-finops' },
      { role: 'AI Architect & Lead Developer', takeaway: 'Migrate high-frequency prompt tasks from frontier APIs to fine-tuned local SLMs.', recommendedNextSlug: 'ai-economist' }
    ],
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
    knownLimitations: ['Requires granular API billing instrumentation per customer session.'],
    aeo: {
      shortDefinition: 'AI Economics is the study of financial behavior, margin contribution, and capital allocation in AI software, focusing on token consumption and variable inference COGS.',
      executiveSummary: 'Traditional SaaS companies enjoyed 80-90% gross margins because hosting marginal users cost fractions of a cent. Generative AI alters software unit economics by introducing variable inference COGS, compressing margins to 50-60%. AI Economics provides frameworks to measure token burn rates, model-task routing efficiency, and semantic cache hit ratios to restore software capital efficiency.',
      oneSentence: 'AI Economics shifts software financial management from fixed subscription ARR models to variable inference margin contribution.',
      tweetLength: 'AI Economics measures token burn rates and variable COGS to stop LLM inference costs from eroding enterprise software gross margins.',
      keyTakeaways: [
        'Inference expenses shift cloud hosting from fixed OpEx to variable Cost of Goods Sold (COGS).',
        'Frontier model misallocation (e.g. using Claude Opus for string parsing) destroys product unit economics.',
        'Semantic caching and SLM repatriation reduce API token spend by 40-60%.',
        'Pricing models must incorporate consumption tiers to prevent negative gross margin sessions.'
      ],
      faqs: [
        { question: 'What is AI Economics?', answer: 'AI Economics is the discipline that analyzes token unit costs, inference COGS, and gross margin contribution in AI-powered applications.' },
        { question: 'Why do AI applications have lower gross margins than traditional SaaS?', answer: 'Because every LLM request incurs model API compute costs (COGS), unlike traditional SaaS where marginal server load is near zero.' },
        { question: 'What is tokenomics in software economics?', answer: 'The measurement and optimization of input and output token consumption per user workflow.' },
        { question: 'How can enterprises improve AI unit economics?', answer: 'By enforcing model-task routing, implementing semantic caching, and setting token budget quotas.' }
      ],
      comparisons: [
        {
          vsConceptSlug: 'ai-finops',
          vsTitle: 'AI Economics vs. AI FinOps',
          keyDifferences: ['AI FinOps manages cloud provider bill monitoring', 'AI Economics governs overall product margin strategy, pricing models, and P&L contribution'],
          whenToUseWhich: 'Use AI FinOps for monthly cloud budget tracking; use AI Economics for product pricing, packaging, and gross margin optimization.'
        }
      ],
      whenToUse: [
        'When launching paid AI features on top of existing SaaS subscriptions',
        'When API inference bills exceed 20% of monthly recurring revenue',
        'When evaluating commercial LLM APIs vs self-hosted Open Source SLMs'
      ],
      examples: {
        enterprise: 'A SaaS vendor routing routine user queries to GPT-4o-mini while reserving Claude 3.5 Sonnet for complex analytical tasks, reducing API expenses by $45,000/month.',
        startup: 'An AI startup charging per-token usage overages to keep gross margins above 75%.',
        antiPattern: 'Offering unlimited Claude Opus queries on a flat $20/month subscription plan.',
        commonMistake: 'Treating OpenAI API invoices as fixed software overhead rather than variable Cost of Goods Sold (COGS).'
      },
      decisionTree: [
        { step: 1, question: 'Are API inference costs consuming more than 25% of subscription revenue?', yesTarget: 'Step 2', noTarget: 'Monitor Quarterly' },
        { step: 2, question: 'Is semantic caching implemented for duplicate queries?', yesTarget: 'Audit Model-Task Routing', noTarget: 'Deploy Semantic Cache' }
      ]
    }
  },
  {
    slug: 'ai-volatility-tax',
    title: 'AI Volatility Tax',
    category: 'Richard Ewing Canon (Original Framework)',
    domain: 'AI Economics',
    health: { confidence: 0.94, evidenceCount: 4, lastVerified: 'July 2026', status: 'Active', openQuestionsCount: 2, knownLimitationsCount: 1 },
    definition: 'The compounding margin penalty incurred when variable LLM inference query costs scale faster than subscription revenue, shifting hosting infrastructure into variable Cost of Goods Sold (COGS).',
    whyItMatters: 'Traditional SaaS enjoyed 80%+ gross margins because marginal serving cost was near zero. AI inference breaks this assumption, eroding gross margins by 20-40% unless model-task routing and semantic caching are enforced.',
    firstIntroduced: 'March 2025 (Beehiiv / Built In)',
    canonicalQuote: 'The AI Volatility Tax is the gross margin erosion caused when variable LLM inference query costs scale faster than subscription ARR.',
    positionStatement: 'Flat-rate subscription pricing for un-cached LLM features is an economic trap. Active usage creates an AI Volatility Tax that directly penalizes SaaS profitability.',
    learningStep: { pathName: 'AI Economics Masterclass', stepNumber: 2, totalSteps: 5 },
    impactMetrics: { totalPublications: 5, totalNewsletters: 9, totalFrameworks: 2, totalCalculators: 1, estimatedReadingTime: '35 mins' },
    consensusCoverage: { website: true, linkedIn: true, beehiiv: true, builtIn: true, cio: true, book: true, gitHub: true, youtube: true, talks: false },
    claims: [
      {
        statement: 'Un-cached LLM queries under flat-rate subscription pricing degrade SaaS gross margins by 20-40%.',
        confidence: 0.95,
        counterarguments: ['Future LLM token price cuts will render volatility tax negligible.'],
        supportingData: 'Built In & CIO case studies verified 32% margin reduction in SaaS companies scaling un-cached prompt features.'
      }
    ],
    graphRelations: {
      prerequisites: [
        { slug: 'ai-economics', title: 'AI Economics & Tokenomics' }
      ],
      applications: ['Subscription Tier Restructuring', 'Semantic Query Cache Deployment'],
      contrastingConcepts: []
    },
    personaRecommendations: [
      { role: 'CFO & VP Finance', takeaway: 'Model how customer usage surges impact gross margins under flat-rate subscription tiers.', recommendedNextSlug: 'saas-growth-paradox' },
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
        { question: 'Who coined the term AI Volatility Tax?', answer: 'Richard Ewing, in his March 2025 research note and subsequent Built In publication.' },
        { question: 'How do you reduce the AI Volatility Tax?', answer: 'By enforcing model-task routing, semantic query caching, and hybrid SLM deployment.' }
      ],
      comparisons: [
        {
          vsConceptSlug: 'ai-economics',
          vsTitle: 'AI Volatility Tax vs. AI Economics',
          keyDifferences: ['AI Economics is the overall domain', 'AI Volatility Tax is the specific margin compression phenomenon caused by un-cached query scaling'],
          whenToUseWhich: 'Use AI Volatility Tax when diagnosing why scaling user activity reduces net profit margins.'
        }
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
    health: { confidence: 0.96, evidenceCount: 4, lastVerified: 'July 2026', status: 'Active', openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'A binary execution control mechanism that halts autonomous AI agent operations within 5ms when safety rules or environmental hash boundaries are breached.',
    whyItMatters: 'Autonomous AI agents possess database credentials and API keys. Without a deterministic kill switch, memory poisoning or prompt injection can execute unauthorized production transactions.',
    firstIntroduced: 'May 2026 (Built In - Editor\'s Pick)',
    canonicalQuote: 'An Agent Kill Switch is a binary circuit breaker operating outside the LLM context loop that revokes API execution privileges within 5ms of a security or hash violation.',
    positionStatement: 'An AI agent must never possess sole authority to terminate or validate its own execution loop. Kill switches must run deterministically in external proxy infrastructure.',
    learningStep: { pathName: 'Autonomous Agent Governance', stepNumber: 2, totalSteps: 5 },
    impactMetrics: { totalPublications: 4, totalNewsletters: 6, totalFrameworks: 2, totalCalculators: 1, estimatedReadingTime: '30 mins' },
    consensusCoverage: { website: true, linkedIn: true, beehiiv: true, builtIn: true, cio: true, book: true, gitHub: true, youtube: true, talks: false },
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
      { step: 2, title: 'Your AI Agent Needs a Kill Switch', publisher: 'Built In', type: 'Canonical Specification', url: 'https://builtin.com/articles/ai-agent-kill-switch' },
      { step: 3, title: 'The Moment Your AI Starts Taking Actions, the Rules Change', publisher: 'LinkedIn Newsletters', type: 'Executive Action Boundary Essay', url: 'https://www.linkedin.com/pulse/moment-your-ai-starts-taking-actions-rules-change-richard-ewing-zapmc/' }
    ],
    provenanceTimeline: [
      { stage: 'Tier-1 Article', label: 'Your AI Agent Needs a Kill Switch', publisher: 'Built In', date: 'May 2026', url: 'https://builtin.com/articles/ai-agent-kill-switch', summary: 'Published the canonical kill switch specification (Editor\'s Pick).' },
      { stage: 'LinkedIn Essay', label: 'The Moment Your AI Starts Taking Actions', publisher: 'LinkedIn Newsletters', date: 'July 30, 2026', url: 'https://www.linkedin.com/pulse/moment-your-ai-starts-taking-actions-rules-change-richard-ewing-zapmc/', summary: 'Demonstrated why action-taking AI agents break probabilistic guardrail models.' }
    ],
    evidenceLedger: [
      { id: 'ev-ks-1', title: 'Your AI Agent Needs a Kill Switch', url: 'https://builtin.com/articles/ai-agent-kill-switch', publisher: 'Built In', type: 'Production Telemetry', strength: 5, role: 'Origin', date: 'May 2026' },
      { id: 'ev-ks-2', title: 'The Moment Your AI Starts Taking Actions', url: 'https://www.linkedin.com/pulse/moment-your-ai-starts-taking-actions-rules-change-richard-ewing-zapmc/', publisher: 'LinkedIn', type: 'Case Study', strength: 5, role: 'Extends', date: 'July 30, 2026' }
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
        { question: 'What is an Agent Kill Switch?', answer: 'A binary control mechanism that halts autonomous AI agent execution when policy boundaries are breached.' },
        { question: 'Why can’t an AI agent turn off its own kill switch?', answer: 'Because the kill switch is implemented in external proxy code outside the agent’s execution context.' }
      ],
      comparisons: [],
      whenToUse: ['When autonomous agents have API write credentials to production databases or payment gateways'],
      examples: {
        enterprise: 'An API proxy revoking JWT tokens when an agent attempts 5 consecutive un-sanctioned database queries.',
        startup: 'Enforcing a 5-second timeout and execution halt on agentic tool-calling loops.',
        antiPattern: 'Asking the agent via prompt if it should shut itself down.',
        commonMistake: 'Placing the kill switch logic inside the same LLM prompt loop as the agent.'
      }
    }
  }
];
