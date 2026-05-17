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
  runtimeLayer?: 'Identity Governance' | 'Skill Governance' | 'Tool Governance' | 'Environment Governance';
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
  },
  {
    slug: "context-window-overflow",
    title: "Context Window Overflow",
    definition: "When the agent's context window fills with stale data, failed attempts, and correction history, crowding out valid architectural state and collapsing reasoning quality.",
    symptoms: ["Token budget exhaustion", "Lost architectural constraints", "Degraded output quality"],
    economicImpact: "Forced session restarts destroy accumulated progress.",
    governanceImpact: "No compression policy means unbounded context bloat.",
    ecosystemPainQuotes: ["Context eventually fills up and everything breaks.", "Lost all my project rules after 30 minutes."],
    telemetrySignals: ["Context utilization > 80%", "Instruction recall failure"],
    faqs: [{ question: "How do you compress context windows?", answer: "By deploying semantic pruning engines that preserve architectural state while discarding stale interaction history." }],
    searchKeywords: ["context window full", "context overflow", "token limit reached"],
    whatBreaks: ['reasoning quality collapse', 'instruction amnesia'], economicDamage: ['wasted sessions', 'lost progress'], whatSystemInstalls: ['semantic pruning', 'checkpoint rotation'], failureCascades: ['Context Rot', 'Retry Inflation']
  },
  {
    slug: "verification-burden",
    title: "Verification Burden Collapse",
    definition: "When human reviewers cannot keep pace with AI-generated output volume, leading to rubber-stamped approvals, review fatigue, and undetected regressions reaching production.",
    symptoms: ["Rubber-stamped PRs", "Review fatigue", "Undetected regressions in production"],
    economicImpact: "Quality gate failure multiplies downstream defect costs.",
    governanceImpact: "Human oversight becomes performative, not protective.",
    ecosystemPainQuotes: ["We spend more time reviewing AI than coding.", "Nobody actually reads the AI diffs anymore."],
    telemetrySignals: ["Review time < generation time", "PR approval without diff inspection"],
    faqs: [{ question: "How do you prevent verification fatigue?", answer: "Automated confidence scoring routes only uncertain outputs to human review, reducing burden by 70%." }],
    searchKeywords: ["AI code review fatigue", "rubber stamp AI", "verification overload"],
    whatBreaks: ['quality gates', 'human oversight'], economicDamage: ['production defects', 'review burnout'], whatSystemInstalls: ['confidence routers', 'review timers'], failureCascades: ['Hallucination Debt', 'Repository Drift']
  },
  {
    slug: "tool-permission-leak",
    title: "Tool Permission Leaks",
    definition: "When AI agents access tools, commands, and file system paths beyond their authorized scope, enabling data exfiltration, credential exposure, and destructive operations.",
    symptoms: ["Unauthorized file reads", "Destructive shell commands", "Privilege escalation"],
    economicImpact: "A single credential leak can cost $100K+ in incident response.",
    governanceImpact: "No least-privilege enforcement for agent tool access.",
    ecosystemPainQuotes: ["Windsurf just deleted the config directory.", "The agent executed a script it shouldn't have."],
    telemetrySignals: ["Tool call outside manifest", "Sensitive file access attempt"],
    faqs: [{ question: "How do you restrict AI agent tool access?", answer: "Deploy tool capability manifests with explicit whitelists and block all unregistered tool calls." }],
    searchKeywords: ["AI agent permissions", "tool access control", "agent privilege escalation"],
    whatBreaks: ['file system safety', 'credential security'], economicDamage: ['breach costs', 'compliance violations'], whatSystemInstalls: ['tool whitelists', 'path guards'], failureCascades: ['Governance Theater', 'MCP Exposure']
  },
  {
    slug: "cost-overrun",
    title: "AI Cost Overruns",
    definition: "Uncontrolled API spending caused by autonomous agents running without financial circuit breakers, budget caps, or token burn monitoring.",
    symptoms: ["$100+ overnight bills", "Runaway autonomous sessions", "No spend visibility"],
    economicImpact: "Teams report $500-$1,100 single-session losses.",
    governanceImpact: "No financial governance layer between agent and API.",
    ecosystemPainQuotes: ["Roo Code burned through $50 trying to center a div.", "Our API spend is completely out of control."],
    telemetrySignals: ["Token burn rate > $10/hr", "Session duration > 4 hours unattended"],
    faqs: [{ question: "How do you control AI coding costs?", answer: "Financial circuit breakers that halt execution when token burn rate exceeds configurable thresholds." }],
    searchKeywords: ["AI coding cost", "Claude Code expensive", "API spend control"],
    whatBreaks: ['budget predictability', 'ROI'], economicDamage: ['API overspend', 'budget blowouts'], whatSystemInstalls: ['financial circuit breakers', 'budget caps'], failureCascades: ['Retry Inflation', 'Context Rot']
  },
  {
    slug: "mcp-exposure",
    title: "MCP Security Exposure",
    definition: "The Model Context Protocol gives agents access to external tools and databases without context isolation, capability validation, or supply chain verification.",
    symptoms: [".env file reads via MCP tools", "Typosquat server installs", "Data sent to external endpoints"],
    economicImpact: "A single MCP breach can expose production credentials.",
    governanceImpact: "No isolation boundary between MCP tools and sensitive data.",
    ecosystemPainQuotes: ["Claude had global access to every MCP server. Terrifying.", "MCP tools have no permission boundaries by default."],
    telemetrySignals: ["Credential file access via MCP", "Unknown MCP server connection"],
    faqs: [{ question: "Are MCP servers secure?", answer: "Not by default. MCP governance deploys capability validators and context isolation to enforce least-privilege tool access." }],
    searchKeywords: ["MCP security", "MCP governance", "MCP server risks"],
    whatBreaks: ['data isolation', 'credential safety'], economicDamage: ['breach response costs', 'compliance failures'], whatSystemInstalls: ['capability validators', 'context isolation'], failureCascades: ['Tool Permission Leaks', 'Governance Theater']
  },
  {
    slug: "change-management-failure",
    title: "Agentic Change Management Failure",
    definition: "When AI agents make sweeping architectural changes without approval gates, rollback plans, or impact analysis — creating unreviewable, irreversible mutations.",
    symptoms: ["Multi-file rewrites without approval", "No rollback capability", "Scope creep beyond task"],
    economicImpact: "Hours of manual rollback after unauthorized refactors.",
    governanceImpact: "No change approval workflow for autonomous agents.",
    ecosystemPainQuotes: ["It rewrote my entire architecture without asking.", "47 files changed in a single session."],
    telemetrySignals: ["Files modified > 10 in single action", "No approval gate triggered"],
    faqs: [{ question: "How do you control AI agent scope?", answer: "Change management gates that require human approval above configurable thresholds for file count, diff size, and scope." }],
    searchKeywords: ["AI agent scope control", "autonomous refactoring risk", "agent change management"],
    whatBreaks: ['architectural integrity', 'review capacity'], economicDamage: ['rollback costs', 'lost velocity'], whatSystemInstalls: ['approval gates', 'scope limiters'], failureCascades: ['Repository Drift', 'Verification Burden']
  },
  {
    slug: "identity-drift",
    title: "Identity Governance Drift",
    definition: "When agents progressively ignore system prompt instructions, CLAUDE.md rules, and operational constraints as context pressure increases.",
    symptoms: ["Prompt rules ignored under pressure", "Style/tone drift", "Authority boundary violations"],
    economicImpact: "Non-compliant outputs require complete rework.",
    governanceImpact: "Identity constraints are theoretical without runtime enforcement.",
    ecosystemPainQuotes: ["System prompts aren't enough.", "Prompt rules were completely ignored."],
    telemetrySignals: ["Instruction adherence < 80%", "Style deviation detected"],
    faqs: [{ question: "Why does Claude ignore my rules?", answer: "System prompts degrade under context pressure. Identity governance enforces rules at runtime, not just at session start." }],
    searchKeywords: ["Claude ignores instructions", "system prompt limits", "CLAUDE.md not working"],
    whatBreaks: ['rule adherence', 'operational consistency'], economicDamage: ['rework costs', 'brand risk'], whatSystemInstalls: ['identity enforcement', 'instruction monitors'], failureCascades: ['Governance Theater', 'Context Rot']
  },
  {
    slug: "engineering-economics-collapse",
    title: "Engineering Economics Collapse",
    definition: "When AI agent deployment costs exceed the engineering value they produce — negative ROI caused by retry inflation, verification burden, and remediation overhead.",
    symptoms: ["AI costs > human equivalent", "Negative productivity delta", "Hidden remediation costs"],
    economicImpact: "Teams discover AI agents are net-negative on total cost of ownership.",
    governanceImpact: "No economic telemetry to measure actual agent ROI.",
    ecosystemPainQuotes: ["The ROI on AI agents is negative due to token costs.", "We're spending more fixing AI mistakes than writing code."],
    telemetrySignals: ["Total cost of ownership > baseline", "Remediation hours > generation hours"],
    faqs: [{ question: "Are AI coding agents worth it?", answer: "Only with governance. Without containment, remediation costs often exceed the value of generated code." }],
    searchKeywords: ["AI coding ROI", "AI agent cost benefit", "is Claude Code worth it"],
    whatBreaks: ['ROI justification', 'budget approval'], economicDamage: ['negative ROI', 'budget cancellation'], whatSystemInstalls: ['ROI telemetry', 'cost-per-task tracking'], failureCascades: ['Cost Overruns', 'Retry Inflation']
  },
  {
    slug: "autonomous-execution-risk",
    title: "Autonomous Execution Risk",
    definition: "The compounding danger of allowing AI agents to execute code, run commands, and modify systems without human-in-the-loop checkpoints or safety boundaries.",
    symptoms: ["Unsupervised production changes", "Destructive commands executed", "No execution audit trail"],
    economicImpact: "A single uncontrolled execution can take down production.",
    governanceImpact: "No execution boundary between agent intent and system state.",
    ecosystemPainQuotes: ["The agent executed rm -rf on a test directory.", "No way to undo what it did overnight."],
    telemetrySignals: ["Shell execution without approval", "Production file modification"],
    faqs: [{ question: "How do you make AI agents safe for production?", answer: "Execution safety gates that require human approval for destructive operations and maintain full audit trails." }],
    searchKeywords: ["AI agent safety", "autonomous coding risk", "AI production safety"],
    whatBreaks: ['production stability', 'system integrity'], economicDamage: ['downtime costs', 'incident response'], whatSystemInstalls: ['execution gates', 'audit trails'], failureCascades: ['Tool Permission Leaks', 'Governance Theater']
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
    checkoutUrl: "https://buy.stripe.com/cNieV6fDo1b401f6RW2B20J",
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
              { question: "Why does Claude Code lose context after long sessions?", answer: "Unbounded context accumulation traps Claude in a recursive loop where previous mistakes pollute its future reasoning." },
              { question: "How do you stop context rot?", answer: "By deploying bounded cognition middleware and enforcing semantic reset checkpoints before context degradation triggers failure cascades." }
            ],
    searchKeywords: [
              "Claude Code context rot",
              "Claude loses context",
              "session degradation",
              "Claude context memory limits",
              "Claude long session failure",
              "context poisoning",
              "Claude recursive bugs"
            ],
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
      ctaText: "Install Claude Context Rot Containment",
      runtimeLayer: "Skill Governance"
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
    checkoutUrl: "https://buy.stripe.com/6oUbIUbn84ng3dr3FK2B20T",
    assetsList: ["Execution middleware", "Admissibility pipelines", "Runtime interception schemas", "Rollback handlers", "Policy-as-code YAMLs", "Audit log templates"],
    version: "v2.0.1",
    ecosystemPainQuotes: [
              "Windsurf just deleted the config directory.",
              "The agent executed a script it shouldn't have.",
              "Prompt rules were completely ignored."
            ],
    telemetrySignals: [
      'Unauthorized file mutation',
      'Execution interception rates',
      'Rollback triggers'
    ],
    faqs: [
              { question: "Can I use prompt engineering to stop an AI agent?", answer: "No. Prompt engineering is probabilistic Governance Theater. Only deterministic runtime middleware can guarantee containment." },
              { question: "What breaks when you don't have runtime governance?", answer: "Agents will eventually exceed their operational boundaries, execute unsafe infrastructure commands, and rewrite protected directories." }
            ],
    searchKeywords: [
              "Windsurf runtime governance",
              "AI coding agent safety",
              "Windsurf execution containment",
              "preventing unsafe bash commands",
              "deterministic execution",
              "agentic runtime failure"
            ],
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
      ctaText: "Deploy Claude Runtime Governance",
      runtimeLayer: "Tool Governance"
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
    checkoutUrl: "https://buy.stripe.com/cNibIU9f04ng7tH9042B20K",
    assetsList: ["Validation checks", "Deterministic constraints", "QA automation flows", "Output templates"],
    version: "v1.1.4",
    ecosystemPainQuotes: [
              "Cline hallucinates modules that don't exist.",
              "I spend more time fixing the AI's mistakes than coding.",
              "The verification burden is crushing."
            ],
    telemetrySignals: [
      'QA overhead spikes',
      'Synthetic COGS expansion',
      'Verification time'
    ],
    faqs: [
              { question: "Why does Cline hallucinate dependencies?", answer: "Without admissibility pipelines, Cline probabilistically guesses module names instead of reading the deterministic package.json state. This creates fake dependencies and nonexistent packages in your codebase." },
              { question: "What is slopsquatting?", answer: "Slopsquatting is when attackers register npm/PyPI package names that AI agents frequently hallucinate — turning a made up API reference or nonexistent package into a real supply chain attack vector." },
              { question: "How do we reduce verification burden?", answer: "By deploying confidence thresholds that block human review of unverified, high-variance agentic code." }
            ],
    searchKeywords: [
              "hallucination debt",
              "fake AI code",
              "fake dependency",
              "nonexistent package",
              "made up API",
              "slopsquatting",
              "verification overload",
              "Cline hallucination",
              "phantom dependencies",
              "AI coding fatigue"
            ],
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
      ctaText: "Deploy Hallucination Containment",
      runtimeLayer: "Skill Governance"
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
    checkoutUrl: "https://buy.stripe.com/5kQ4gsfDo4ng5lz7W02B20U",
    assetsList: ["COGS calculators", "Cost curve models", "ROI templates", "Optimization checklists"],
    version: "v1.0.0",
    ecosystemPainQuotes: [
              "Roo Code burned through $50 trying to center a div.",
              "Our API spend is completely out of control.",
              "The ROI on AI agents is negative due to token costs."
            ],
    telemetrySignals: [
      'Token inflation',
      'Inference margin collapse',
      'API burn rates'
    ],
    faqs: [
              { question: "Why are my API bills so high from AI coding agents?", answer: "Agents lack economic consciousness. Without margin validators, they will burn infinite tokens attempting to solve trivial syntax errors." },
              { question: "How do you contain Roo Code token costs?", answer: "By establishing hard session budgets and cost containment middleware that physically severs API access when breached." }
            ],
    searchKeywords: [
              "AI agent token burn",
              "Roo Code costs",
              "AI API spend inflation",
              "agentic execution cost",
              "inference budget overruns"
            ],
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
      ctaText: "Deploy Economic Governance",
      runtimeLayer: "Environment Governance"
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
    checkoutUrl: "https://buy.stripe.com/3cIcMY1My8DwdS59042B20V",
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
              { question: "Is it safe to give Claude global MCP access?", answer: "Absolutely not. Unconstrained MCP access allows an agent to read sensitive environment variables or arbitrarily execute queries outside its mandate." },
              { question: "How do you permission MCP tools?", answer: "Through context isolation and capability validators that limit tool access to the exact scope of the assigned task." }
            ],
    searchKeywords: [
              "MCP governance",
              "Claude Model Context Protocol safety",
              "MCP server limits",
              "Claude tool chain recursion",
              "MCP data exfiltration"
            ],
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
      ctaText: "Deploy Claude Protocol Governance",
      runtimeLayer: "Tool Governance"
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
    checkoutUrl: "https://buy.stripe.com/bJeaEQ9f0dXQ9BPb8c2B20W",
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
              { question: "Why are senior engineers overwhelmed by AI pull requests?", answer: "Because generated code velocity outpaces human review capacity, shifting the burden from writing code to debugging probabilistic AI output." },
              { question: "How do we stop verification collapse?", answer: "By installing verification-routing middleware that mathematically scores code and rejects low-confidence patches before humans see them." }
            ],
    searchKeywords: [
              "QA overload",
              "synthetic QA fatigue",
              "reviewing AI PRs",
              "agent PR fatigue",
              "AI code review bottleneck",
              "black box codebase",
              "AI maintenance nightmare"
            ],
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
      ctaText: "Deploy Claude QA Overload Prevention",
      runtimeLayer: "Skill Governance"
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
    checkoutUrl: "https://buy.stripe.com/aFa4gs9f0g5YeW9eko2B20M",
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
              { question: "Why does Cursor rewrite files I didn't ask it to touch?", answer: "Cursor relies on probabilistic search and often suffers from 'over-editing' hallucination. It infers ghost dependencies and mutates unrelated architectural paths." },
              { question: "How can I lock Cursor to a specific boundary?", answer: "By enforcing deterministic alignment protocols and branch integrity policies that cryptographically reject unauthorized file mutations." }
            ],
    searchKeywords: [
              "Cursor repository drift",
              "Cursor rewriting unrelated files",
              "Cursor architectural drift",
              "Ghost dependencies",
              "Cursor codebase divergence",
              "AI touched something it shouldn't",
              "AI refactoring code I didn't ask"
            ],
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
      ctaText: "Deploy Cursor Codebase Governance",
      runtimeLayer: "Environment Governance"
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
    checkoutUrl: "https://buy.stripe.com/00w28k1Myg5Y8xL1xC2B20S",
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
              { question: "Should agents be allowed to merge code directly to production?", answer: "Never. Without cryptographic Change Advisory Board (CAB) approvals, agentic mutations represent an unquantifiable enterprise liability." },
              { question: "How do you integrate agents into ITIL change management?", answer: "By enforcing human escalation paths and cryptographic state validation before any agentic output is considered admissible for deployment." }
            ],
    searchKeywords: [
              "cryptographic CAB approvals",
              "agentic pull request review",
              "AI change management",
              "human escalation paths",
              "production AI changes"
            ],
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
      ctaText: "Deploy Cryptographic CAB Approvals",
      runtimeLayer: "Identity Governance"
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
    checkoutUrl: "https://buy.stripe.com/cNicMY9f0bPI6pDfos2B20N",
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
              { question: "How long can a Claude coding session last?", answer: "Without compression engines, session stability collapses after ~15 complex interactions due to accumulated context poisoning." },
              { question: "What is context window compression?", answer: "Dynamic middleware that rotates out stale interaction history and prioritizes current architectural state to maintain deterministic focus." }
            ],
    searchKeywords: [
              "long-session instability",
              "Claude context memory",
              "AI coding agent session length",
              "compressing Claude context",
              "checkpoint rotation middleware"
            ],
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
      ctaText: "Deploy Claude Context Compression",
      runtimeLayer: "Environment Governance"
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
    checkoutUrl: "https://buy.stripe.com/14A8wIaj4g5Y7tH5NS2B20O",
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
              { question: "Can Claude Code accidentally delete my files or destroy my project?", answer: "Yes. Without governance, an AI agent with unconstrained shell access can delete critical files, wipe database migrations, or run destructive commands. Documented incidents include agents that destroyed project structures, broke everything with a single refactor, and required full git reverts to recover." },
              { question: "How do you secure autonomous execution?", answer: "With deterministic command whitelisting middleware and execution halt systems that mathematically block unapproved shell operations. The agent simply cannot execute destructive commands regardless of its reasoning." }
            ],
    searchKeywords: [
              "rogue bash commands",
              "AI autonomous execution risk",
              "agentic infrastructure corruption",
              "preventing AI rm -rf",
              "Claude bash permissions",
              "AI agent deleted files",
              "AI agent destroyed project",
              "AI agent broke everything",
              "AI agent wiped database",
              "had to revert AI changes"
            ],
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
      ctaText: "Deploy Claude Execution Guardrails",
      runtimeLayer: "Identity Governance"
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
    checkoutUrl: "https://buy.stripe.com/6oUeV6crcg5YaFTccg2B20P",
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
              { question: "What is capability escalation?", answer: "When an agent leverages a benign tool (like file read) to gain access to unauthorized resources (like an .env file containing AWS keys)." },
              { question: "How do you lock down agent tools?", answer: "With scope engines that enforce strict permission boundaries mapped directly to the agent's deterministic task payload." }
            ],
    searchKeywords: [
              "agent capability escalation",
              "over-permissioned AI",
              "tool-chain contamination",
              "unrestricted MCP access",
              "data exfiltration risk AI",
              "AI action boundary",
              "AI action boundary enforcement"
            ],
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
      ctaText: "Deploy Tool Permission Governance",
      runtimeLayer: "Tool Governance"
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
    checkoutUrl: "https://buy.stripe.com/7sYbIU0Iu9HAbJX1xC2B20Q",
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
              { question: "How do I predict the cost of an autonomous task?", answer: "You cannot predict probabilistic cost. You must enforce deterministic cost ceilings using financial circuit breakers." },
              { question: "What causes margin collapse in agentic workflows?", answer: "When the API inference token burn to generate a feature exceeds the human labor cost equivalent of writing it from scratch." }
            ],
    searchKeywords: [
              "hidden operational AI burn",
              "token inflation",
              "runaway API costs",
              "agent margin collapse",
              "OpenAI Codex cost controls"
            ],
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
      ctaText: "Deploy AI Token Budget Controls",
      runtimeLayer: "Environment Governance"
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
    checkoutUrl: "https://buy.stripe.com/cNibIUbn8f1U15jgsw2B20X",
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
              { question: "Why do my AI agents get stuck arguing with each other?", answer: "Because probabilistic networks lack deterministic state. They enter infinite agreement loops or recursive delegation chains without a central orchestrator." },
              { question: "How do you enforce multi-agent orchestration?", answer: "With entropy thresholds and a deterministic governor that caps delegation depth and enforces execution checkpoints." }
            ],
    searchKeywords: [
              "multi-agent chaos",
              "agents arguing with themselves",
              "recursive delegation",
              "agent infinite loops",
              "orchestrator lost state"
            ],
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
      ctaText: "Deploy Multi-Agent Orchestration Constraints",
      runtimeLayer: "Skill Governance"
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
    checkoutUrl: "https://buy.stripe.com/7sY3co8aWbPI29nccg2B20L",
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
              { question: "Why does Claude keep retrying the exact same broken fix?", answer: "Because the error state saturates the context window, causing the model to probabilistically generate the exact same hallucinated solution repeatedly." },
              { question: "How do you break a retry loop?", answer: "By deploying a retry budget circuit breaker that halts execution and wipes the semantic context before trying again." }
            ],
    searchKeywords: [
              "Claude retry loop",
              "Claude keeps retrying broken logic",
              "token burn spiral",
              "retry hell",
              "recursive patch loops",
              "AI infinite retry"
            ],
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
      ctaText: "Install Claude Retry Inflation Controls",
      runtimeLayer: "Skill Governance"
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
    checkoutUrl: "https://buy.stripe.com/7sY9AMbn80705lz5NS2B20R",
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
              { question: "What is deterministic agentic engineering?", answer: "The architectural practice of surrounding probabilistic AI models with hardcoded, zero-variance governance middleware to guarantee runtime safety." },
              { question: "Why is prompt engineering dead?", answer: "Because relying on text instructions for enterprise infrastructure security is catastrophic. Only code can govern code." }
            ],
    searchKeywords: [
              "Exogram Control Plane",
              "deterministic AI engineering",
              "probabilistic engineering failure",
              "runtime instability",
              "ungoverned orchestration"
            ],
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
      ctaText: "Deploy the Exogram Control Plane",
      runtimeLayer: "Identity Governance"
}
];

export function getSkillBySlug(slug: string): GovernanceSkill | undefined {
  return SKILLS.find(s => s.slug === slug);
}

export function getFailureBySlug(slug: string): GovernanceFailure | undefined {
  return FAILURES.find(f => f.slug === slug);
}
