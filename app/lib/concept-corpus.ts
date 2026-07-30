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
    slug: 'runtime-vs-alignment',
    title: 'Runtime Governance vs. Model Alignment',
    category: 'Industry Concept (Discovery On-Ramp)',
    domain: 'AI Governance',
    health: { confidence: 0.97, evidenceCount: 5, lastVerified: 'July 2026', status: 'Active', openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'The architectural distinction proving that training-level model alignment cannot solve enterprise compliance, requiring external runtime guardrails and Non-Human IAM to govern machine-to-machine agents.',
    whyItMatters: 'RLHF alignment conditions probabilistic weights, but cannot guarantee zero unauthorized database writes or payment transfers during production agent execution.',
    firstIntroduced: 'November 2025 (Beehiiv / Built In)',
    executableTool: { name: 'Exogram Proving Ground', url: 'https://exogram.ai/proving-ground', description: 'Test runtime proxy interceptors and non-human IAM gates.', type: 'Proving Ground' },
    canonicalReadingOrder: [
      { step: 1, title: 'Why I Built Exogram: AI Agents Need Deterministic Governance', publisher: 'Beehiiv Laboratory', type: 'Problem Identification', url: 'https://theaieconomist.beehiiv.com/p/why-i-built-exogram-ai-agents-need-deterministic-governance' },
      { step: 2, title: 'Architecting Security Gates for AI Agents', publisher: 'Built In', type: 'Security Gate Specification', url: 'https://builtin.com/articles/ai-agent-security-gates' }
    ],
    provenanceTimeline: [
      { stage: 'Research Note', label: 'Why I Built Exogram', publisher: 'Beehiiv Laboratory', date: 'November 2025', url: 'https://theaieconomist.beehiiv.com/p/why-i-built-exogram-ai-agents-need-deterministic-governance', summary: 'Demonstrated why training-time alignment fails to secure enterprise API calls.' }
    ],
    evidenceLedger: [
      { id: 'ev-rva-1', title: 'Why I Built Exogram', url: 'https://theaieconomist.beehiiv.com/p/why-i-built-exogram-ai-agents-need-deterministic-governance', publisher: 'Beehiiv', type: 'Origin', strength: 5, role: 'Origin', date: 'November 2025' }
    ],
    relatedConceptSlugs: [
      { slug: 'deterministic-governance', relationship: 'implements' },
      { slug: 'agent-kill-switch', relationship: 'requires' }
    ],
    openQuestions: ['How to enforce Non-Human IAM credentials across ephemeral sub-agent chains?'],
    knownLimitations: ['Requires proxy latency budgets under 2ms for high-frequency trading or real-time APIs.'],
    aeo: {
      shortDefinition: 'Runtime Governance vs. Alignment contrasts training-time model safety tuning (RLHF) with external, deterministic runtime proxy gates that enforce API execution boundaries.',
      executiveSummary: 'Relying solely on model alignment (such as OpenAI or Anthropic RLHF) to prevent enterprise security failures is an architectural anti-pattern. Alignment modifies probabilistic output distributions but cannot guarantee 100% adherence to business logic or access rules. Runtime governance places deterministic proxy gates and Non-Human IAM credentials between LLM output parsers and production APIs, ensuring zero unauthorized database state mutations.',
      oneSentence: 'Model alignment attempts to make LLMs safe by training; Runtime Governance makes agents safe by intercepting their API calls at execution time.',
      tweetLength: 'Model alignment conditions LLM weights, but Runtime Governance enforces hard deterministic code boundaries on production API calls.',
      keyTakeaways: [
        'Model alignment is probabilistic; enterprise compliance requires deterministic guarantees.',
        'Prompt injection bypasses fine-tuned model instructions in runtime environments.',
        'External proxy gates evaluate API payloads in sub-5ms before execution.',
        'Non-Human IAM scopes agent database rights based on user session token boundaries.'
      ],
      faqs: [
        { question: 'Why isn’t model alignment enough for AI agent security?', answer: 'Because fine-tuned models can still hallucinate invalid parameters or succumb to adversarial prompt injections during execution.' },
        { question: 'What is Runtime Governance?', answer: 'An external proxy layer that validates agent tool calls against hard security rules before forwarding them to production APIs.' },
        { question: 'What is Non-Human IAM?', answer: 'Identity & Access Management protocols designed for autonomous machine agents rather than human user logins.' }
      ],
      comparisons: [
        {
          vsConceptSlug: 'ai-governance',
          vsTitle: 'Model Alignment vs. Runtime Governance',
          keyDifferences: ['Model Alignment is embedded inside LLM weights during training', 'Runtime Governance is an external proxy code gate operating at execution time'],
          whenToUseWhich: 'Rely on Alignment for general conversational tone; rely on Runtime Governance for enterprise database write actions.'
        }
      ],
      whenToUse: [
        'When agents execute SQL queries, financial payouts, or user account changes',
        'When connecting LLMs to third-party tools via MCP'
      ],
      examples: {
        enterprise: 'An enterprise deploying an API proxy that checks if an agent-generated SQL query contains a DROP TABLE statement before sending it to PostgreSQL.',
        startup: 'An AI assistant using OAuth token scoping to prevent sub-agents from accessing admin APIs.',
        antiPattern: 'Relying on system prompts ("Do not delete files") to prevent data destruction.',
        commonMistake: 'Believing that buying a frontier model subscription satisfies enterprise SOC2 compliance.'
      },
      decisionTree: [
        { step: 1, question: 'Does your AI system perform state mutations on production data?', yesTarget: 'Deploy Runtime Proxy Gate', noTarget: 'Standard Alignment Suffices' }
      ]
    }
  },
  {
    slug: 'induced-demand-code',
    title: 'Induced Demand in Software Delivery',
    category: 'Industry Concept (Discovery On-Ramp)',
    domain: 'Engineering Leadership',
    health: { confidence: 0.96, evidenceCount: 4, lastVerified: 'July 2026', status: 'Active', openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'The operational phenomenon where AI coding assistants catalyze exponential code generation volume, causing senior engineer review bottlenecks and increasing backlog consumption rather than reducing R&D spending.',
    whyItMatters: 'Generating code 10x faster creates an audit crunch when senior engineering verification capacity fails to scale, accumulating subprime technical debt.',
    firstIntroduced: 'January 2026 (CIO.com / Built In)',
    executableTool: { name: 'Audit Interview Scorecard Engine', url: '/tools/audit-interview', description: 'Audit review capacity vs code generation throughput.', type: 'Audit Scorecard' },
    canonicalReadingOrder: [
      { step: 1, title: 'GitHub Copilot Is Generating More Code Than Your Team Can Review', publisher: 'CIO.com', type: 'Review Bottleneck Analysis', url: 'https://www.cio.com/article/4183045/github-copilot-is-generating-more-code-than-your-team-can-review-why-senior-engineers-are-now-the-bottleneck.html' },
      { step: 2, title: 'In the Vibe Coding Era, What Does a Software Engineer Even Do?', publisher: 'Built In', type: 'Tier-1 Specification (Editor\'s Pick)', url: 'https://builtin.com/articles/vibe-coding-era-software-engineering-role' }
    ],
    provenanceTimeline: [
      { stage: 'Tier-1 Article', label: 'GitHub Copilot Review Bottleneck', publisher: 'CIO.com', date: 'January 2026', url: 'https://www.cio.com/article/4183045/github-copilot-is-generating-more-code-than-your-team-can-review-why-senior-engineers-are-now-the-bottleneck.html', summary: 'Identified induced demand and review bottlenecks in AI-enabled teams.' }
    ],
    evidenceLedger: [
      { id: 'ev-idc-1', title: 'GitHub Copilot Review Bottleneck', url: 'https://www.cio.com/article/4183045/github-copilot-is-generating-more-code-than-your-team-can-review-why-senior-engineers-are-now-the-bottleneck.html', publisher: 'CIO.com', type: 'Case Study', strength: 5, role: 'Origin', date: 'January 2026' }
    ],
    relatedConceptSlugs: [
      { slug: 'vibe-coding', relationship: 'causes' },
      { slug: 'subprime-code-crisis', relationship: 'predicts' }
    ],
    openQuestions: ['What is the optimal ratio of senior staff auditors to AI code generation output?'],
    knownLimitations: ['Requires tracking PR review latency per line of AI-generated code.'],
    aeo: {
      shortDefinition: 'Induced Demand in Software Delivery describes how AI coding tools generate surplus code volume, shifting engineering bottlenecks from code authoring to senior code review.',
      executiveSummary: 'Just as building more highway lanes creates additional traffic, providing developers with AI code generators creates surplus pull request volume. Senior staff engineers become bottlenecked attempting to review hundreds of AI-authored lines per day. Without rigorous automated audit gates, induced demand accelerates technical debt and increases engineering OpEx.',
      oneSentence: 'AI code generators shift software engineering bottlenecks from writing code to verifying and auditing code.',
      tweetLength: 'AI coding tools do not reduce engineering budgets—they create induced demand, flooding senior engineers with unverified pull requests.',
      keyTakeaways: [
        'Code generation speed does not equal software shipping throughput.',
        'Senior staff engineering review capacity becomes the primary constraint.',
        'Un-reviewed AI code pull requests accumulate subprime technical debt in enterprise repos.'
      ],
      faqs: [
        { question: 'What is induced demand in AI software engineering?', answer: 'The surge in code generation caused by AI tools that overwhelms review and QA capacity.' },
        { question: 'Why doesn’t GitHub Copilot reduce engineering spend?', answer: 'Because savings in authoring syntax are consumed by extended PR review cycles and bug remediation.' }
      ],
      comparisons: [],
      whenToUse: ['When evaluating AI coding tool ROI across engineering organizations'],
      examples: {
        enterprise: 'An engineering team seeing pull request volume double while PR merge cycle times increase from 4 hours to 3 days due to review fatigue.',
        startup: 'A startup deploying automated static analysis filters to prune AI code before reaching senior reviewers.',
        antiPattern: 'Measuring developer productivity solely by lines of code generated per day.',
        commonMistake: 'Assuming that faster code generation automatically reduces software delivery costs.'
      }
    }
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
    knownLimitations: ['Agentic loops can trigger retry cascades if tool outputs fail schema validation.'],
    aeo: {
      shortDefinition: 'AI Agents are autonomous software loops that combine LLM reasoning with tool access to execute complex, multi-step tasks across enterprise systems.',
      executiveSummary: 'Unlike passive chatbots that only return text, AI agents execute transactions, query databases, and call external APIs autonomously. While agents provide high automation leverage, un-governed tool calling creates vulnerability vectors such as prompt injection and execution drift. Enterprise agent deployment requires binary execution control layers and state integrity checking.',
      oneSentence: 'AI agents are autonomous software loops that turn model reasoning into direct API tool calls across enterprise infrastructure.',
      tweetLength: 'AI agents combine LLM reasoning with direct tool execution, creating high automation leverage but requiring deterministic runtime governance.',
      keyTakeaways: [
        'Agents transition software from user-driven GUIs to autonomous API tool execution.',
        'Memory poisoning and prompt injection can hijack agent tool parameters.',
        'Execution boundaries and kill switches are required to protect production databases.'
      ],
      faqs: [
        { question: 'What is an AI Agent?', answer: 'An autonomous program using LLMs to plan, select tools, and execute multi-step workflows.' },
        { question: 'How is an AI Agent different from a Chatbot?', answer: 'A chatbot returns text responses to a user; an AI agent calls APIs to perform actions in external systems.' }
      ],
      comparisons: [],
      whenToUse: ['When automating complex multi-system administrative tasks'],
      examples: {
        enterprise: 'An agent that automatically ingests customer support tickets, queries internal databases, and issues refund transactions.',
        startup: 'A developer agent that reads GitHub issues, authors PRs, and triggers CI/CD builds.',
        antiPattern: 'Giving an agent unrestricted root database access without execution allowlists.',
        commonMistake: 'Treating agent tool execution as risk-free background automation.'
      }
    }
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
    knownLimitations: ['Often ignored by executive teams until maintenance OpEx consumes 60%+ of engineering capacity.'],
    aeo: {
      shortDefinition: 'Technical Debt is the accumulated cost of expedited design choices in software repositories that increase future maintenance OpEx and slow innovation velocity.',
      executiveSummary: 'Choosing temporary workarounds over clean software architecture incurs interest in the form of elevated maintenance costs. In the era of AI code generation, unverified code velocity compounds technical debt exponentially into Technical Insolvency.',
      oneSentence: 'Technical Debt represents the compounding financial liability incurred by expedient software architecture choices.',
      tweetLength: 'Technical Debt is the financial liability created by quick-fix code—accelerated 5x by AI coding assistants.',
      keyTakeaways: ['High story point velocity often masks accelerating technical debt.'],
      faqs: [{ question: 'What is Technical Debt?', answer: 'The implied future cost of refactoring software caused by choosing quick code solutions over clean architecture.' }],
      comparisons: [],
      whenToUse: ['When balancing feature shipping speed against codebase maintainability'],
      examples: {
        enterprise: 'Legacy microservices consuming 70% of engineering bandwidth on maintenance.',
        startup: 'Rapid prototyping codebase needing refactoring post Series A.',
        antiPattern: 'Ignoring code quality metrics to hit arbitrary sprint deadlines.',
        commonMistake: 'Treating technical debt as purely an engineering problem rather than a financial liability.'
      }
    }
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
    knownLimitations: ['Requires real-time telemetry proxies between model endpoints and backend services.'],
    aeo: {
      shortDefinition: 'AI FinOps is the management discipline of monitoring, attributing, and optimizing token inference costs across enterprise cloud operations.',
      executiveSummary: 'AI FinOps applies cloud financial management to LLM API consumption. By enforcing model-task routing, token caching, and budget alerts, organizations protect software gross margins.',
      oneSentence: 'AI FinOps brings financial discipline to variable model inference costs and cloud compute bills.',
      tweetLength: 'AI FinOps monitors and optimizes token inference bills to prevent unexpected cloud billing spikes.',
      keyTakeaways: ['Model-task routing optimizes token spend per query.'],
      faqs: [{ question: 'What is AI FinOps?', answer: 'The operational practice of monitoring and optimizing AI model inference costs.' }],
      comparisons: [],
      whenToUse: ['When API billing exceeds monthly cloud hosting budgets'],
      examples: {
        enterprise: 'Automated telemetry dashboards tracking token consumption per customer tenant.',
        startup: 'Setting strict token limits per session.',
        antiPattern: 'Sending all tasks to frontier models without model-task evaluation.',
        commonMistake: 'Treating AI API costs like static server hosting.'
      }
    }
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
