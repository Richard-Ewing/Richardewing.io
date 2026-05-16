export interface GovernanceFailure {
  slug: string;
  title: string;
  definition: string;
  symptoms: string[];
  economicImpact: string;
  governanceImpact: string;
  ecosystemPainQuotes?: string[];
  telemetrySignals?: string[];
  faqs?: { question: string; answer: string }[];
  searchKeywords?: string[];
  whatBreaks?: string[];
  economicDamage?: string[];
  whatSystemInstalls?: string[];
  failureCascades?: string[];
}

export interface GovernanceSkill {
  slug: string;
  title: string;
  category: string;
  failureSolved: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  assetCount: number;
  runtimeRelevance: "Low" | "Medium" | "High" | "Critical";
  enterpriseRelevance: "Strategic" | "High" | "Critical" | "Mandatory";
  exogramMapping: string;
  price: number;
  checkoutUrl: string;
  assetsList: string[];
  version: string;
  ecosystemPainQuotes?: string[];
  telemetrySignals?: string[];
  faqs?: { question: string; answer: string }[];
  searchKeywords?: string[];
  whatBreaks?: string[];
  economicDamage?: string[];
  whatSystemInstalls?: string[];
  failureCascades?: string[];
  ctaText?: string;
}

export const FAILURES: GovernanceFailure[] = [
  {
    slug: "context-rot",
    title: "Context Rot",
    definition: "Long-running Claude sessions gradually accumulate semantic contamination, stale assumptions, recursive patches, and repository drift until operational reliability collapses.",
    symptoms: ["Recursive patching loops", "Forgetting core instructions", "Stale architectural assumptions"],
    economicImpact: "Exploding inference costs from retry loops.",
    governanceImpact: "Total loss of deterministic execution state.",
    ecosystemPainQuotes: [
        "Everything gets worse after hour three.",
        "The context eventually poisons itself.",
        "Losing the plot completely."
    ],
    telemetrySignals: [
        "Context fragmentation",
        "Token inflation",
        "Degraded reasoning quality"
    ],
    faqs: [
        { question: "Why does Claude get worse over long sessions?", answer: "Context rot occurs because the LLM context window fills with stale assumptions and previous corrections, polluting the current inference state." },
        { question: "How do you prevent context rot?", answer: "By using Bounded Cognition Engines and Context Window Compression to aggressively prune the semantic state." }
    ],
    searchKeywords: ["context poisoning", "session degradation", "minimal context carnage", "context window rot"],
    whatBreaks: [
        'hallucinated execution',
        'unauthorized mutations',
        'unsafe shell execution',
        'recursive execution drift'
    ],
    economicDamage: [
        'synthetic QA overload',
        'engineering review fatigue',
        'API spend inflation',
        'merge instability',
        'architectural entropy'
    ],
    whatSystemInstalls: [
        'execution interceptors',
        'admissibility middleware',
        'rollback circuits',
        'runtime permission enforcement',
        'policy-as-code gating'
    ],
    failureCascades: [
        'Context Rot',
        'Retry Inflation',
        'Verification Collapse',
        'Repository Drift',
        'Runtime Governance Failure'
    ]
  },
  {
    slug: "hallucination-debt",
    title: "Hallucination Debt",
    definition: "The compounding operational cost of verifying, correcting, and maintaining probabilistic AI outputs that lack deterministic boundaries.",
    symptoms: ["Verification time > Generation time", "Synthetic QA bottleneck", "Silent architectural drift"],
    economicImpact: "Developer time wasted on manual output verification.",
    governanceImpact: "No cryptographic trust in agentic execution.",
    ecosystemPainQuotes: [
        "We spend more time reviewing AI than coding.",
        "Phantom dependencies keep appearing.",
        "Humans are the bottleneck now."
    ],
    telemetrySignals: [
        "Escalating verification time",
        "Synthetic QA growth",
        "Inference margin collapse"
    ],
    faqs: [
        { question: "How do you stop hallucinated execution?", answer: "Through Admissibility Validation pipelines that cryptographically verify code integrity before execution." },
        { question: "Why do AI agents rewrite unrelated files?", answer: "Because probabilistic models lack bounded scope constraints, leading to 'over-editing' and architectural drift." }
    ],
    searchKeywords: ["hallucination debt", "over-editing", "synthetic QA", "fake APIs", "verification overload"],
    whatBreaks: [
        'hallucinated execution',
        'unauthorized mutations',
        'unsafe shell execution',
        'recursive execution drift'
    ],
    economicDamage: [
        'synthetic QA overload',
        'engineering review fatigue',
        'API spend inflation',
        'merge instability',
        'architectural entropy'
    ],
    whatSystemInstalls: [
        'execution interceptors',
        'admissibility middleware',
        'rollback circuits',
        'runtime permission enforcement',
        'policy-as-code gating'
    ],
    failureCascades: [
        'Context Rot',
        'Retry Inflation',
        'Verification Collapse',
        'Repository Drift',
        'Runtime Governance Failure'
    ]
  },
  {
    slug: "retry-inflation",
    title: "Retry Inflation",
    definition: "The exponential growth of prompts and token consumption required to correct an agent that has lost context or deviated from architectural intent.",
    symptoms: ["15+ prompts for simple features", "Massive token context drops", "Developer exhaustion"],
    economicImpact: "Wasted API usage & compute resources.",
    governanceImpact: "Signals a complete lack of runtime gating.",
    ecosystemPainQuotes: [
        "The retry loops never stop.",
        "Claude keeps retrying broken fixes.",
        "Infinite patch loops."
    ],
    telemetrySignals: [
        "Retry spikes",
        "Recursive patch chains",
        "Token burn explosion"
    ],
    faqs: [
        { question: "How do you stop recursive retry loops?", answer: "Implement a Retry Burn Engine that limits recursive executions and halts the agent when thresholds are met." },
        { question: "Why are AI coding agents burning tokens?", answer: "Retry inflation causes token usage to expand exponentially as the context window fills with failed attempts." }
    ],
    searchKeywords: ["retry hell", "retry inflation", "token burn", "recursive retry loops", "AI retry cost explosion"],
    whatBreaks: [
        'hallucinated execution',
        'unauthorized mutations',
        'unsafe shell execution',
        'recursive execution drift'
    ],
    economicDamage: [
        'synthetic QA overload',
        'engineering review fatigue',
        'API spend inflation',
        'merge instability',
        'architectural entropy'
    ],
    whatSystemInstalls: [
        'execution interceptors',
        'admissibility middleware',
        'rollback circuits',
        'runtime permission enforcement',
        'policy-as-code gating'
    ],
    failureCascades: [
        'Context Rot',
        'Retry Inflation',
        'Verification Collapse',
        'Repository Drift',
        'Runtime Governance Failure'
    ]
  },
  {
    slug: "repository-drift",
    title: "Repository Drift",
    definition: "The structural divergence between an AI agent's internal representation of a codebase and the actual deterministic state of the repository.",
    symptoms: ["Using deprecated APIs", "Ignoring new abstractions", "Reinventing existing utilities"],
    economicImpact: "Technical debt multiplier across the codebase.",
    governanceImpact: "Breaks CI/CD and institutional policy.",
    ecosystemPainQuotes: [
        "Claude starts patching its own patches.",
        "It rewrote my entire architecture without asking.",
        "Project scope drift."
    ],
    telemetrySignals: [
        "Repository divergence",
        "Unauthorized architecture mutation",
        "Dependency drift"
    ],
    faqs: [
        { question: "Why does AI ignore my existing architecture?", answer: "Without Repository Drift Prevention, probabilistic models lack the deterministic grounding to adhere to the repository's current state." }
    ],
    searchKeywords: ["repository drift", "project scope drift", "architectural corruption", "dependency drift"],
    whatBreaks: [
        'hallucinated execution',
        'unauthorized mutations',
        'unsafe shell execution',
        'recursive execution drift'
    ],
    economicDamage: [
        'synthetic QA overload',
        'engineering review fatigue',
        'API spend inflation',
        'merge instability',
        'architectural entropy'
    ],
    whatSystemInstalls: [
        'execution interceptors',
        'admissibility middleware',
        'rollback circuits',
        'runtime permission enforcement',
        'policy-as-code gating'
    ],
    failureCascades: [
        'Context Rot',
        'Retry Inflation',
        'Verification Collapse',
        'Repository Drift',
        'Runtime Governance Failure'
    ]
  },
  {
    slug: "orchestration-entropy",
    title: "Orchestration Entropy",
    definition: "The systemic decay of multi-agent architectures where agents enter infinite loops, handoff failures, and recursive deadlocks without human intervention.",
    symptoms: ["Agent deadlocks", "Unbounded execution loops", "Lost tool handoffs"],
    economicImpact: "Compute burns on runaway agent processes.",
    governanceImpact: "Requires hard observability limits.",
    ecosystemPainQuotes: [
        "Multi-agent chaos.",
        "Runaway chains.",
        "Infinite agreement loops."
    ],
    telemetrySignals: [
        "Recursive delegation",
        "Workflow checkpoint failures",
        "Uncontrolled sub-agents"
    ],
    faqs: [
        { question: "How do you govern multi-agent workflows?", answer: "Using Orchestration Governors and checkpointing to halt infinite loops and enforce deterministic state." }
    ],
    searchKeywords: ["orchestration entropy", "multi-agent chaos", "agent loops", "runaway chains"],
    whatBreaks: [
        'hallucinated execution',
        'unauthorized mutations',
        'unsafe shell execution',
        'recursive execution drift'
    ],
    economicDamage: [
        'synthetic QA overload',
        'engineering review fatigue',
        'API spend inflation',
        'merge instability',
        'architectural entropy'
    ],
    whatSystemInstalls: [
        'execution interceptors',
        'admissibility middleware',
        'rollback circuits',
        'runtime permission enforcement',
        'policy-as-code gating'
    ],
    failureCascades: [
        'Context Rot',
        'Retry Inflation',
        'Verification Collapse',
        'Repository Drift',
        'Runtime Governance Failure'
    ]
  },
  {
    slug: "governance-theater",
    title: "Governance Theater",
    definition: "The illusion of control created by using system prompts and text instructions to manage agents, rather than hard-coded runtime middleware and execution gating.",
    symptoms: ["Prompt injections succeed", "Agents bypass instructions", "No audit trails"],
    economicImpact: "Unquantifiable liability and compliance risks.",
    governanceImpact: "Zero actual security or deterministic control.",
    ecosystemPainQuotes: [
        "System prompts aren't enough.",
        "We can't deploy this to production."
    ],
    telemetrySignals: [
        "Unsafe shell execution",
        "Governance bypass"
    ],
    faqs: [
        { question: "What is Governance Theater?", answer: "Relying on natural language prompts to control deterministic systems, which inevitably fails under probabilistic variance." }
    ],
    searchKeywords: ["governance theater", "prompt engineering limits", "runtime safety", "deterministic execution"],
    whatBreaks: [
        'hallucinated execution',
        'unauthorized mutations',
        'unsafe shell execution',
        'recursive execution drift'
    ],
    economicDamage: [
        'synthetic QA overload',
        'engineering review fatigue',
        'API spend inflation',
        'merge instability',
        'architectural entropy'
    ],
    whatSystemInstalls: [
        'execution interceptors',
        'admissibility middleware',
        'rollback circuits',
        'runtime permission enforcement',
        'policy-as-code gating'
    ],
    failureCascades: [
        'Context Rot',
        'Retry Inflation',
        'Verification Collapse',
        'Repository Drift',
        'Runtime Governance Failure'
    ]
  }
];

export const SKILLS: GovernanceSkill[] = [
  {
    slug: "context-rot-prevention",
    title: "Claude Context Rot Prevention System",
    category: "Cognitive Governance",
    failureSolved: "Context Rot & Semantic Contamination",
    description: "Prevents semantic contamination, recursive patching, retry inflation, and repository drift in long-horizon Claude sessions.",
    difficulty: "Intermediate",
    assetCount: 5,
    runtimeRelevance: "High",
    enterpriseRelevance: "Critical",
    exogramMapping: "Bounded Cognition Engine",
    price: 99,
    checkoutUrl: "https://buy.stripe.com/6oUaEQ0Iu1b4cO1b8c2B20E",
    assetsList: ["Governance manifests", "Rollback systems", "Runtime middleware", "Checkpoint architecture", "Reset workflows"],
    version: "v1.2.0",
    ecosystemPainQuotes: [
              "Claude starts patching its own patches.",
              "The session gets worse every hour.",
              "The retry loops never stop.",
              "Eventually the whole repo becomes unstable."
            ],
    telemetrySignals: [
      'recursive patch chains',
      'retry inflation',
      'exploding token burn',
      'stale context contamination'
    ],
    faqs: [
        { question: "Why does Claude get worse over long sessions?", answer: "Because of 'Context Rot'. As the context window fills with failed attempts, old code, and corrected logic, the model's probabilistic reasoning degrades." },
        { question: "How do you prevent context poisoning?", answer: "By implementing deterministic checkpoints and bounded cognition engines to wipe stale context and reload the canonical state." }
    ],
    searchKeywords: ["context rot", "context poisoning", "session degradation", "minimal context carnage", "patching its own patches"],
    whatBreaks: [
      'Semantic degradation over time',
      'Unbounded inference drift',
      'Stale context poisoning',
      'Token bloat causing memory failures'
    ],
    economicDamage: [
      'synthetic QA overload',
      'engineering review fatigue',
      'API spend inflation',
      'merge instability',
      'architectural entropy'
    ],
    whatSystemInstalls: [
      'bounded cognition middleware',
      'semantic reset infrastructure',
      'retry circuit breakers',
      'repository checkpoint enforcement',
      'rollback containment logic',
      'deterministic context boundaries'
    ],
    failureCascades: [
      'Context Rot',
      'Retry Inflation',
      'Verification Collapse',
      'Repository Drift',
      'Runtime Governance Failure'
    ],
      ctaText: "Install Claude Context Rot Containment"
},
  {
    slug: "runtime-governance",
    title: "Runtime Governance for Claude Code",
    category: "Execution Governance",
    failureSolved: "Unsafe Agent Execution",
    description: "Enforce execution gating, admissibility pipelines, rollback containment, and runtime interception to stop unsafe agentic actions before they execute.",
    difficulty: "Advanced",
    assetCount: 6,
    runtimeRelevance: "Critical",
    enterpriseRelevance: "Mandatory",
    exogramMapping: "Execution Gating Layer",
    price: 99,
    checkoutUrl: "https://buy.stripe.com/9B6cMY2QC4ng29na482B20F",
    assetsList: ["Execution middleware", "Admissibility pipelines", "Runtime interception schemas", "Rollback handlers", "Policy-as-code YAMLs", "Audit log templates"],
    version: "v2.0.1",
    ecosystemPainQuotes: [
      'Claude ran the wrong command.',
      "It touched files it shouldn't.",
      'The rollback failed.',
      'The agent exceeded its authority.'
    ],
    telemetrySignals: [
      'Unauthorized file mutation',
      'Execution interception rates',
      'Rollback triggers'
    ],
    faqs: [
        { question: "How do you stop hallucinated execution?", answer: "Through Admissibility Pipelines that cryptographically verify payloads before they reach the runtime." }
    ],
    searchKeywords: ["runtime governance", "unsafe shell execution", "admissibility enforcement", "production drift", "deterministic execution"],
    whatBreaks: [
      'hallucinated execution',
      'unauthorized mutations',
      'unsafe shell execution',
      'recursive execution drift'
    ],
    economicDamage: [
      'Production downtime',
      'Compliance violation penalties',
      'Synthetic rollback costs'
    ],
    whatSystemInstalls: [
      'execution interceptors',
      'admissibility middleware',
      'rollback circuits',
      'runtime permission enforcement',
      'policy-as-code gating',
      'TypeScript middleware',
      'YAML governance manifests'
    ],
    failureCascades: [
      'Governance Theater',
      'Unsafe Execution',
      'Repository Drift',
      'Architectural Collapse'
    ],
      ctaText: "Deploy Claude Runtime Governance"
},
  {
    slug: "hallucination-debt-reduction",
    title: "Hallucination Debt Reduction for Agents",
    category: "Output Governance",
    failureSolved: "Probabilistic Output Variance",
    description: "Mitigate the verification burden, retry inflation curves, and synthetic QA growth by structurally eliminating probabilistic assumptions in agentic workflows.",
    difficulty: "Intermediate",
    assetCount: 4,
    runtimeRelevance: "Medium",
    enterpriseRelevance: "High",
    exogramMapping: "Admissibility Validation",
    price: 99,
    checkoutUrl: "https://buy.stripe.com/4gM8wI9f04ng8xLb8c2B20G",
    assetsList: ["Validation checks", "Deterministic constraints", "QA automation flows", "Output templates"],
    version: "v1.1.4",
    ecosystemPainQuotes: [
      'We spend more time reviewing AI than coding.',
      'Humans are the bottleneck now.',
      'Phantom dependencies keep appearing.'
    ],
    telemetrySignals: [
      'QA overhead spikes',
      'Synthetic COGS expansion',
      'Verification time'
    ],
    faqs: [
        { question: "Why do AI agents rewrite unrelated files?", answer: "Because of 'over-editing'—a symptom of hallucination debt where the model lacks deterministic boundaries on its scope." }
    ],
    searchKeywords: ["hallucination debt", "phantom dependencies", "fake APIs", "over-editing"],
    whatBreaks: [
      'Probabilistic output variance',
      'Phantom dependencies',
      'Fake API consumption'
    ],
    economicDamage: [
      'Synthetic QA overload',
      'Engineering review fatigue',
      'Slower release velocity'
    ],
    whatSystemInstalls: [
      'zero-trust validation pipelines',
      'QA threshold policies',
      'deterministic constraints',
      'admissibility checks',
      'TypeScript middleware'
    ],
    failureCascades: [
      'Hallucination Debt',
      'Synthetic QA Expansion',
      'Margin Collapse',
      'Orchestration Entropy'
    ],
      ctaText: "Deploy Hallucination Containment"
},
  {
    slug: "ai-engineering-economics",
    title: "AI Engineering Economics Models",
    category: "Economic Governance",
    failureSolved: "Synthetic COGS Expansion",
    description: "Map and optimize synthetic COGS, orchestration cost curves, and governance drag expansion. Align your agentic strategy with deterministic economic reality.",
    difficulty: "Beginner",
    assetCount: 4,
    runtimeRelevance: "Low",
    enterpriseRelevance: "Strategic",
    exogramMapping: "Telemetry Ingestion",
    price: 99,
    checkoutUrl: "https://buy.stripe.com/9B63coezk1b415j4JO2B20H",
    assetsList: ["COGS calculators", "Cost curve models", "ROI templates", "Optimization checklists"],
    version: "v1.0.0",
    ecosystemPainQuotes: [
      'Exploding inference costs.',
      'Hidden verification labor.',
      'Runaway API costs.'
    ],
    telemetrySignals: [
      'Token inflation',
      'Inference margin collapse',
      'API burn rates'
    ],
    faqs: [
        { question: "Why are AI coding agents burning tokens?", answer: "Because without Economic Governance, agents enter retry loops and context bloat, leading to exponential token consumption for linear value." }
    ],
    searchKeywords: ["synthetic cogs", "ai margin collapse", "token burn", "inference costs"],
    whatBreaks: [
      'Margin collapse on AI features',
      'Uncapped inference spend',
      'Unmeasured synthetic COGS'
    ],
    economicDamage: [
      'API spend inflation',
      'EBITDA compression',
      'Unjustified agentic ROI'
    ],
    whatSystemInstalls: [
      'COGS telemetry models',
      'inference margin calculators',
      'retry burn limits',
      'economic tracking models'
    ],
    failureCascades: [
      'Retry Inflation',
      'Token Burn Explosion',
      'Synthetic COGS Expansion',
      'Margin Collapse'
    ],
      ctaText: "Deploy Economic Governance"
},
  {
    slug: "mcp-governance",
    title: "MCP Governance for Claude Code",
    category: "Integration Governance",
    failureSolved: "Unconstrained Server Execution",
    description: "Establish enterprise-grade access and runtime limits for Model Context Protocol systems to prevent unconstrained server execution and data exfiltration.",
    difficulty: "Advanced",
    assetCount: 5,
    runtimeRelevance: "Critical",
    enterpriseRelevance: "Mandatory",
    exogramMapping: "Protocol Governance",
    price: 99,
    checkoutUrl: "https://buy.stripe.com/eVq28k3UGg5Y8xLfos2B20I",
    assetsList: ["Access matrices", "Server limits YAML", "Data exfiltration blocks", "Protocol audit tools", "Integration middleware"],
    version: "v1.3.2",
    ecosystemPainQuotes: [
      'Global tool exposure.',
      'Uncontrolled tool chains.',
      'Privilege escalation attempts.'
    ],
    telemetrySignals: [
      'Privilege escalation attempts',
      'Unsafe context sharing'
    ],
    faqs: [
        { question: "How do you secure MCP toolchains?", answer: "With Protocol Governance middleware that explicitly scopes execution boundaries and isolates context." }
    ],
    searchKeywords: ["mcp governance", "model context protocol", "data exfiltration", "tool chain contamination"],
    whatBreaks: [
      'Unconstrained server execution',
      'Data exfiltration risks',
      'Global tool exposure'
    ],
    economicDamage: [
      'Security breach liabilities',
      'Compliance audit failures',
      'Data leakage costs'
    ],
    whatSystemInstalls: [
      'MCP access matrices',
      'protocol audit tools',
      'server limits YAML',
      'integration middleware'
    ],
    failureCascades: [
      'Unconstrained Server Execution',
      'Data Exfiltration',
      'Compliance Violation',
      'Runtime Governance Failure'
    ],
      ctaText: "Deploy Claude Protocol Governance"
},
  {
    slug: "verification-burden-collapse",
    title: "Claude Verification Burden Collapse Governance System",
    category: "Output Governance",
    failureSolved: "Verification Overload",
    description: "Zero-trust validation pipelines for autonomous outputs.",
    difficulty: "Intermediate",
    assetCount: 3,
    runtimeRelevance: "High",
    enterpriseRelevance: "High",
    exogramMapping: "Admissibility Validation",
    price: 99,
    checkoutUrl: "",
    assetsList: ["verification-routing.ts", "reviewer-escalation.ts", "QA threshold policies"],
    version: "v1.0.0",
    ecosystemPainQuotes: [
              "review fatigue",
              "AI code still needs humans",
              "synthetic QA overload"
            ],
    telemetrySignals: [
              "Escalating verification time",
              "PR review overload",
              "Synthetic QA growth"
            ],
    faqs: [
        { question: "Why does AI engineering increase human workloads?", answer: "Because of 'Verification Burden Collapse'. The speed of code generation outpaces the human capacity for deterministic code review." }
    ],
    searchKeywords: ["verification burden", "review fatigue", "synthetic qa", "verification overload"],
    whatBreaks: [
              "Manual code review overload",
              "Human-in-the-loop exhaustion",
              "Verification bottlenecks"
            ],
    economicDamage: [
              "Synthetic QA overload",
              "Engineering review fatigue",
              "Merge instability"
            ],
    whatSystemInstalls: [
              "verification-routing middleware",
              "reviewer-escalation matrices",
              "zero-trust validation pipelines",
              "QA threshold policies",
              "TypeScript middleware"
            ],
    failureCascades: [
              "Verification Overload",
              "Review Shortcut Decisions",
              "Hallucinated Execution",
              "Repository Drift"
            ],
      ctaText: "Deploy Claude QA Overload Prevention"
},
  {
    slug: "repository-drift-prevention",
    title: "Cursor Repository Drift Prevention",
    category: "Cognitive Governance",
    failureSolved: "Codebase Divergence",
    description: "Continuous divergence detection and deterministic alignment protocols.",
    difficulty: "Advanced",
    assetCount: 4,
    runtimeRelevance: "High",
    enterpriseRelevance: "Critical",
    exogramMapping: "Execution Gating Layer",
    price: 99,
    checkoutUrl: "",
    assetsList: ["repository validators", "divergence detectors", "branch integrity policies"],
    version: "v1.0.5",
    ecosystemPainQuotes: [
              "ghost dependencies",
              "hallucinated architecture",
              "rewriting unrelated files"
            ],
    telemetrySignals: [
              "Repository divergence",
              "Dependency drift",
              "Unauthorized architecture mutation"
            ],
    faqs: [
        { question: "How do you stop agents from rewriting unrelated files?", answer: "Implement Repository Drift Prevention policies that bound the execution scope and track architectural divergence." }
    ],
    searchKeywords: ["repository drift", "codebase divergence", "architectural corruption"],
    whatBreaks: [
              "Codebase divergence",
              "Architectural corruption",
              "Dependency drift",
              "Ghost dependencies"
            ],
    economicDamage: [
              "Architectural entropy",
              "Merge conflict explosion",
              "CI/CD pipeline failures"
            ],
    whatSystemInstalls: [
              "repository validators",
              "divergence detectors",
              "branch integrity policies",
              "deterministic alignment protocols",
              "YAML governance manifests"
            ],
    failureCascades: [
              "Repository Drift",
              "Architectural Corruption",
              "Merge Instability",
              "Verification Collapse"
            ],
      ctaText: "Deploy Cursor Codebase Governance"
},
  {
    slug: "agentic-change-management",
    title: "Agentic Infrastructure Change Management",
    category: "Integration Governance",
    failureSolved: "Uncontrolled Changes",
    description: "Cryptographic CAB approvals for autonomous infrastructure mutations.",
    difficulty: "Advanced",
    assetCount: 3,
    runtimeRelevance: "Critical",
    enterpriseRelevance: "Mandatory",
    exogramMapping: "Execution Gating Layer",
    price: 99,
    checkoutUrl: "",
    assetsList: ["change approval engines", "authority policies", "risk detectors"],
    version: "v1.0.0",
    ecosystemPainQuotes: [
      'Unauthorized infrastructure mutation.',
      'Governance bypass.',
      'Who approved this change?'
    ],
    telemetrySignals: [
      'Mutation risk escalation',
      'Unapproved architectural changes'
    ],
    faqs: [
        { question: "How do you manage CAB approvals for agents?", answer: "Via Agentic Change Management systems that force cryptographic approvals before runtime mutation." }
    ],
    searchKeywords: ["agentic change management", "autonomous mutation", "cab approvals"],
    whatBreaks: [
      'Unauthorized infrastructure mutation',
      'Governance bypass',
      'Shadow AI deployments'
    ],
    economicDamage: [
      'Production downtime',
      'Compliance violation penalties',
      'Infrastructure rollback costs'
    ],
    whatSystemInstalls: [
      'change approval engines',
      'cryptographic authority policies',
      'risk detectors',
      'CAB escalation matrices'
    ],
    failureCascades: [
      'Agentic Autonomous Mutation',
      'Shadow Operations',
      'Governance Bypass',
      'Production Incident'
    ],
      ctaText: "Deploy Cryptographic CAB Approvals"
},
  {
    slug: "context-window-compression",
    title: "Claude Context Window Compression",
    category: "Economic Governance",
    failureSolved: "Token Exhaustion",
    description: "Semantic prioritization and truncation for LLM token economy.",
    difficulty: "Intermediate",
    assetCount: 3,
    runtimeRelevance: "Medium",
    enterpriseRelevance: "Strategic",
    exogramMapping: "Bounded Cognition Engine",
    price: 99,
    checkoutUrl: "",
    assetsList: ["compression engines", "checkpoint rotation", "memory priority systems"],
    version: "v1.2.0",
    ecosystemPainQuotes: [
              "Claude loses the plot",
              "session degradation",
              "context poisoning"
            ],
    telemetrySignals: [
              "Memory overload",
              "Irrelevant token accumulation",
              "Context fragmentation"
            ],
    faqs: [
        { question: "How do you prevent context poisoning?", answer: "By using Context Window Compression to aggressively truncate irrelevant tokens and maintain semantic clarity." }
    ],
    searchKeywords: ["context window compression", "context window rot", "stale context poisoning"],
    whatBreaks: [
              "Token exhaustion",
              "Memory overload",
              "Irrelevant token accumulation"
            ],
    economicDamage: [
              "API spend inflation",
              "Inference cost explosion",
              "Wasted compute cycles"
            ],
    whatSystemInstalls: [
              "compression engines",
              "checkpoint rotation middleware",
              "memory priority systems",
              "token economy policies"
            ],
    failureCascades: [
              "Token Exhaustion",
              "Context Rot",
              "Retry Inflation",
              "Agent Deadlock"
            ],
      ctaText: "Deploy Claude Context Compression"
},
  {
    slug: "autonomous-execution-safety",
    title: "Claude Autonomous Execution Safety",
    category: "Execution Governance",
    failureSolved: "Unsafe Bash Commands",
    description: "Shell command whitelisting and blast-radius containment.",
    difficulty: "Advanced",
    assetCount: 4,
    runtimeRelevance: "Critical",
    enterpriseRelevance: "Mandatory",
    exogramMapping: "Execution Gating Layer",
    price: 99,
    checkoutUrl: "",
    assetsList: ["runtime permission validators", "execution halt systems", "safety boundaries"],
    version: "v2.1.0",
    ecosystemPainQuotes: [
              "unsafe shell execution",
              "rogue commands",
              "agent exceeded authority"
            ],
    telemetrySignals: [
              "Uncontrolled deployments",
              "Autonomous infra corruption",
              "Unsafe context commands"
            ],
    faqs: [
        { question: "How do you make autonomous execution safe?", answer: "With Execution Gating Layers that intercept and validate shell commands against a deterministic whitelist." }
    ],
    searchKeywords: ["autonomous execution safety", "unsafe bash commands", "blast-radius containment"],
    whatBreaks: [
              "Unsafe shell execution",
              "Rogue commands",
              "Agent exceeding authority boundaries"
            ],
    economicDamage: [
              "Production downtime",
              "Infrastructure corruption costs",
              "Security incident penalties"
            ],
    whatSystemInstalls: [
              "runtime permission validators",
              "execution halt systems",
              "safety boundaries",
              "command whitelisting middleware"
            ],
    failureCascades: [
              "Unsafe Bash Execution",
              "Rogue Authority",
              "Infrastructure Corruption",
              "Production Incident"
            ],
      ctaText: "Deploy Claude Execution Guardrails"
},
  {
    slug: "tool-permission-governance",
    title: "Agent Tool Permission Governance",
    category: "Integration Governance",
    failureSolved: "Broad Tool Access",
    description: "Dynamic MCP tool provisioning based on rigorous task manifests.",
    difficulty: "Advanced",
    assetCount: 3,
    runtimeRelevance: "Critical",
    enterpriseRelevance: "Mandatory",
    exogramMapping: "Protocol Governance",
    price: 99,
    checkoutUrl: "",
    assetsList: ["scope engines", "capability validators", "permission boundaries"],
    version: "v1.1.0",
    ecosystemPainQuotes: [
              "Over-permissioned agents.",
              "Capability escalation."
            ],
    telemetrySignals: [
              "Unrestricted MCP access",
              "Tool-chain contamination"
            ],
    faqs: [
        { question: "How do you manage agent tool permissions?", answer: "By deploying Tool Permission Governance which provisions capabilities dynamically based on approved manifests." }
    ],
    searchKeywords: ["tool permission governance", "mcp access", "capability escalation"],
    whatBreaks: [
              "Broad Tool Access",
              "Unrestricted MCP access",
              "Tool-chain contamination"
            ],
    economicDamage: [
              "Security incident penalties",
              "Data leakage costs"
            ],
    whatSystemInstalls: [
              "scope engines",
              "capability validators",
              "permission boundaries",
              "MCP tool access matrices"
            ],
    failureCascades: [
              "Capability Escalation",
              "Unrestricted Tool Access",
              "Data Exfiltration",
              "Compliance Violation"
            ],
      ctaText: "Deploy Tool Permission Governance"
},
  {
    slug: "ai-cost-containment",
    title: "AI Agent Cost Containment",
    category: "Economic Governance",
    failureSolved: "Budget Overruns",
    description: "Real-time USD burn tracking with financial circuit breakers.",
    difficulty: "Intermediate",
    assetCount: 4,
    runtimeRelevance: "High",
    enterpriseRelevance: "Critical",
    exogramMapping: "Telemetry Ingestion",
    price: 99,
    checkoutUrl: "",
    assetsList: ["token budget systems", "cost containment engines", "margin validators"],
    version: "v1.5.0",
    ecosystemPainQuotes: [
              "AI spend explosion",
              "token burn",
              "margin collapse",
              "runaway API costs"
            ],
    telemetrySignals: [
              "Uncontrolled inference spend",
              "Hidden operational burn",
              "Token inflation"
            ],
    faqs: [
        { question: "How do you stop runaway token costs?", answer: "Use AI Cost Containment circuit breakers that halt agent execution when token budgets exceed defined thresholds." }
    ],
    searchKeywords: ["ai cost containment", "budget overruns", "token burn", "ai gross margin"],
    whatBreaks: [
              "Budget Overruns",
              "Uncontrolled inference spend",
              "Runaway API costs"
            ],
    economicDamage: [
              "AI spend explosion",
              "Margin collapse",
              "EBITDA compression"
            ],
    whatSystemInstalls: [
              "token budget systems",
              "cost containment engines",
              "margin validators",
              "financial circuit breakers"
            ],
    failureCascades: [
              "Token Burn Explosion",
              "Margin Collapse",
              "Budget Overruns",
              "Economic Governance Failure"
            ],
      ctaText: "Deploy AI Token Budget Controls"
},
  {
    slug: "orchestration-entropy",
    title: "Orchestration Entropy Governance",
    category: "Cognitive Governance",
    failureSolved: "Orchestration Collapse",
    description: "Govern multi-agent workflow instability and runaway chains.",
    difficulty: "Advanced",
    assetCount: 4,
    runtimeRelevance: "Critical",
    enterpriseRelevance: "Mandatory",
    exogramMapping: "Execution Gating Layer",
    price: 99,
    checkoutUrl: "",
    assetsList: ["orchestrator-governor.ts", "chain validators", "entropy thresholds"],
    version: "v1.0.0",
    ecosystemPainQuotes: [
              "agents arguing with themselves",
              "recursive delegation",
              "multi-agent chaos",
              "infinite agreement loops"
            ],
    telemetrySignals: [
              "Agent loops",
              "Uncontrolled sub-agents",
              "Runaway chains",
              "Recursive delegation"
            ],
    faqs: [
        { question: "How do you stop multi-agent chaos?", answer: "By enforcing Orchestration Entropy Governance to bound sub-agent delegation and enforce workflow checkpoints." }
    ],
    searchKeywords: ["orchestration entropy", "multi-agent chaos", "recursive delegation", "agent loops"],
    whatBreaks: [
              "Multi-agent chaos",
              "Runaway execution chains",
              "Uncontrolled recursive delegation"
            ],
    economicDamage: [
              "Compute burns on runaway agent processes",
              "API spend inflation",
              "Orchestration system crash"
            ],
    whatSystemInstalls: [
              "orchestrator-governor.ts",
              "chain validators",
              "entropy thresholds",
              "workflow checkpointing middleware"
            ],
    failureCascades: [
              "Orchestration Entropy",
              "Multi-Agent Deadlock",
              "Runaway Execution Chains",
              "Runtime Governance Failure"
            ],
      ctaText: "Deploy Multi-Agent Orchestration Constraints"
},
  {
    slug: "retry-inflation-control",
    title: "Claude Retry Inflation Controls",
    category: "Economic Governance",
    failureSolved: "Retry Hell",
    description: "Stop recursive retry loops from destroying margins and execution stability.",
    difficulty: "Intermediate",
    assetCount: 4,
    runtimeRelevance: "Critical",
    enterpriseRelevance: "Mandatory",
    exogramMapping: "Execution Gating Layer",
    price: 99,
    checkoutUrl: "",
    assetsList: ["retry-burn-engine.ts", "recursive loop detection", "retry budget governance"],
    version: "v1.2.0",
    ecosystemPainQuotes: [
              "retry hell",
              "token burn",
              "recursive retries",
              "infinite patch loops"
            ],
    telemetrySignals: [
              "Token burn explosions",
              "Recursive execution loops",
              "Retry-driven latency collapse"
            ],
    faqs: [
        { question: "How do you stop recursive retry loops?", answer: "By capping retry logic through a Retry Burn Engine that limits token exhaustion and alerts human operators." }
    ],
    searchKeywords: ["retry inflation", "retry hell", "infinite patch loops", "recursive failure spirals"],
    whatBreaks: [
              "Recursive retry spirals",
              "Infinite patch loops",
              "Context exhaustion"
            ],
    economicDamage: [
              "Runaway token burn",
              "API spend inflation",
              "Inference cost explosion"
            ],
    whatSystemInstalls: [
              "retry-burn-engine.ts",
              "recursive loop detection",
              "retry budget governance",
              "execution halt policies"
            ],
    failureCascades: [
              "Retry Inflation",
              "Token Burn Explosion",
              "Context Window Collapse",
              "Runtime Stability Failure"
            ],
      ctaText: "Install Claude Retry Inflation Controls"
},
  {
    slug: "deterministic-agentic-engineering",
    title: "Deterministic Agentic Engineering for Claude",
    category: "Execution Governance",
    failureSolved: "Total Systems Failure",
    description: "The unified flagship Orchestrator and Admissibility Engine.",
    difficulty: "Advanced",
    assetCount: 15,
    runtimeRelevance: "Critical",
    enterpriseRelevance: "Mandatory",
    exogramMapping: "Exogram Control Plane",
    price: 299,
    checkoutUrl: "",
    assetsList: ["governance orchestrator", "deterministic runtime", "admissibility layers", "execution certainty systems"],
    version: "v3.0.0",
    ecosystemPainQuotes: [
              "probabilistic engineering failure",
              "runtime instability",
              "ungoverned orchestration",
              "hallucinated execution"
            ],
    telemetrySignals: [
              "Governance fragmentation",
              "Runtime instability",
              "Probabilistic output variance"
            ],
    faqs: [
        { question: "What is Deterministic Agentic Engineering?", answer: "It is the foundational methodology of enforcing runtime control systems to bound probabilistic LLMs into predictable enterprise operations." }
    ],
    searchKeywords: ["deterministic agentic engineering", "probabilistic engineering", "execution certainty", "exogram control plane"],
    whatBreaks: [
              "Probabilistic engineering failure",
              "Ungoverned orchestration",
              "Total Systems Failure"
            ],
    economicDamage: [
              "Unquantifiable enterprise liability",
              "Systemic operational risk",
              "Complete agentic deployment failure"
            ],
    whatSystemInstalls: [
              "governance orchestrator",
              "deterministic runtime",
              "admissibility layers",
              "execution certainty systems",
              "complete policy-as-code hub"
            ],
    failureCascades: [
              "Probabilistic Variance",
              "Ungoverned Orchestration",
              "Total Systems Failure",
              "Enterprise Rollback"
            ],
      ctaText: "Deploy the Exogram Control Plane"
}
];

export function getSkillBySlug(slug: string): GovernanceSkill | undefined {
  return SKILLS.find(s => s.slug === slug);
}

export function getFailureBySlug(slug: string): GovernanceFailure | undefined {
  return FAILURES.find(f => f.slug === slug);
}
