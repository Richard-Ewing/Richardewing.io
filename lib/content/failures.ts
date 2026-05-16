export interface FailureMode {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  symptoms: string[];
  causes: string[];
  telemetrySignals: {
    metric: string;
    value: string;
    interpretation: string;
  }[];
  operationalPatterns: string[];
  economicImpact: {
    title: string;
    description: string;
    marginCompression: string;
  };
  governanceResponse: string;
  exogramMapping: string;
  remediationAssets: {
    title: string;
    url: string;
  }[];
}

export const failures: FailureMode[] = [
  {
    id: 'context-rot',
    slug: 'context-rot',
    title: 'Context Rot',
    subtitle: 'Recursive Patching and Semantic Contamination',
    description: 'Context Rot occurs when an agent\'s context window becomes poisoned by its own failing outputs, leading to a death spiral of recursive patching where the agent attempts to fix bugs caused by its previous hallucinated fixes.',
    symptoms: [
      'The agent patches its own patch multiple times within a single session.',
      'The agent hallucinates architectural boundaries or dependencies that do not exist.',
      'The agent enters an apology loop ("I apologize for the confusion") without advancing the code state.'
    ],
    causes: [
      'Lack of deterministic execution gates between prompts.',
      'Allowing an agent to proceed after a failed compilation without an automatic context reset.',
      'Probabilistic reliance on the LLM to remember repository constraints.'
    ],
    telemetrySignals: [
      {
        metric: 'Session Length',
        value: '> 15 Prompts',
        interpretation: 'Indicative of recursive patching on a single task.'
      },
      {
        metric: 'AST Variance',
        value: 'High',
        interpretation: 'Agent is modifying files outside the requested scope.'
      }
    ],
    operationalPatterns: [
      'Identify recursive patches via git diff isolation.',
      'Halt the orchestration thread immediately.',
      'Execute a hard repository reset (git reset --hard HEAD).'
    ],
    economicImpact: {
      title: 'Exploding Synthetic COGS',
      description: 'Context rot forces the agent to burn massive context windows repeatedly, leading to exponential API costs with zero usable engineering output.',
      marginCompression: '+300% API Spend per Task'
    },
    governanceResponse: 'Implement a RetryCircuitBreaker to mathematically halt execution after N consecutive failures and trigger an automatic semantic reset.',
    exogramMapping: 'Admissibility Engine -> Retry Limits',
    remediationAssets: [
      { title: 'Context Rot Prevention Toolkit ($99)', url: '/skills' }
    ]
  },
  {
    id: 'retry-inflation',
    slug: 'retry-inflation',
    title: 'Retry Inflation',
    subtitle: 'Unbounded API Burn Rate Expansion',
    description: 'Retry Inflation is the silent financial killer of agentic workflows. It happens when an agent, or a network of agents, gets caught in an automated loop of generating, failing tests, and retrying without a hard economic ceiling.',
    symptoms: [
      'API bills spike overnight without a corresponding increase in deployed features.',
      'CI/CD pipelines are overwhelmed by agentic pull requests that repeatedly fail linting.',
      'The agent burns $50 in API compute trying to fix a trivial CSS bug.'
    ],
    causes: [
      'Absence of a RetryCostEngine middleware at the orchestrator level.',
      'Failing to instrument synthetic COGS (Cost of Goods Sold) per session.',
      'Treating API calls as free infrastructure rather than variable labor costs.'
    ],
    telemetrySignals: [
      {
        metric: 'Retry Count',
        value: '> 3 per PR',
        interpretation: 'Agent is incapable of completing the task autonomously.'
      },
      {
        metric: 'Token Velocity',
        value: 'Exponential',
        interpretation: 'Context window is growing while progress stalls.'
      }
    ],
    operationalPatterns: [
      'Instrument token usage per session.',
      'Assign a hard USD budget to every agentic task.',
      'Physically sever the LLM connection if the budget is breached.'
    ],
    economicImpact: {
      title: 'Negative Feature Margin',
      description: 'When the cost of generating a feature via API inference exceeds the theoretical cost of a human engineer writing it from scratch.',
      marginCompression: '-22% Effective Margins'
    },
    governanceResponse: 'Deploy the RetryCostEngine to cap session budgets and enforce economic escalation thresholds.',
    exogramMapping: 'Economic Constraints -> Session Budgeting',
    remediationAssets: [
      { title: 'AI Engineering Economics Toolkit ($99)', url: '/skills' }
    ]
  },
  {
    id: 'tool-chain-recursion',
    slug: 'tool-chain-recursion',
    title: 'Tool Chain Recursion',
    subtitle: 'Unconstrained MCP Access and Orchestration Chaos',
    description: 'Tool Chain Recursion occurs when an agent with global Model Context Protocol (MCP) access begins calling tools that call other tools, leading to server overload, unpredictable side-effects, and potential data exfiltration.',
    symptoms: [
      'The agent queries a database 500 times in 2 minutes instead of writing a single optimized query.',
      'The agent attempts to read sensitive environment files completely unrelated to its task.',
      'Orchestration threads hang indefinitely while waiting for sequential tool executions.'
    ],
    causes: [
      'Provisioning MCP servers globally rather than scoping them per-task.',
      'Lack of payload inspection middleware to validate tool arguments.',
      'Allowing an agent to discover its own toolset dynamically.'
    ],
    telemetrySignals: [
      {
        metric: 'Tool Calls/Min',
        value: '> 10',
        interpretation: 'Agent is brute-forcing an infrastructure boundary.'
      },
      {
        metric: 'Unauthorized Path Access',
        value: 'Blocked',
        interpretation: 'Agent attempted to read /.env or /secrets.'
      }
    ],
    operationalPatterns: [
      'Scope MCP server initialization to the specific task manifest.',
      'Intercept every tool_call payload before it reaches the MCP server.',
      'Apply rate limiting to all database and filesystem tools.'
    ],
    economicImpact: {
      title: 'Infrastructure Denial of Service',
      description: 'Unconstrained tool calls can inadvertently DDoS internal APIs or run up massive cloud infrastructure bills.',
      marginCompression: 'Unbounded Liability'
    },
    governanceResponse: 'Implement ToolAccessMiddleware to strictly permission and rate-limit MCP access based on declarative YAML policies.',
    exogramMapping: 'MCP Governance -> Context Isolation',
    remediationAssets: [
      { title: 'MCP Governance Toolkit ($99)', url: '/skills' }
    ]
  },
  {
    id: 'verification-collapse',
    slug: 'verification-collapse',
    title: 'Verification Collapse',
    subtitle: 'The Crushing Weight of Hallucination Debt',
    description: 'Verification Collapse happens when the velocity of agent-generated code significantly outpaces the human capacity to review it, resulting in a backlog of probabilistic code that senior engineers must manually debug and QA.',
    symptoms: [
      'Senior engineers spend 80% of their day reviewing agent PRs instead of writing architecture.',
      'It takes longer to review an agent\'s patch than it would have taken to write the patch manually.',
      'Agent-generated code silently breaks downstream dependencies because human reviewers suffered from fatigue.'
    ],
    causes: [
      'Treating agentic output as deterministic rather than probabilistic.',
      'Failing to gate agent PRs with strict automated unit tests and linting.',
      'Lacking a Hallucination Scoring system to quantify the variance of the output.'
    ],
    telemetrySignals: [
      {
        metric: 'Human Review Time',
        value: '> 15 mins/PR',
        interpretation: 'The code is too complex or hallucinatory for quick verification.'
      },
      {
        metric: 'Hallucination Score',
        value: '< 0.85',
        interpretation: 'The code contains phantom dependencies or undefined logic.'
      }
    ],
    operationalPatterns: [
      'Block all human reviews for code that does not pass compilation and linting.',
      'Score the output variance against the repository AST.',
      'Force the agent to retry autonomously if the confidence score is too low.'
    ],
    economicImpact: {
      title: 'Senior Engineering Time Drain',
      description: 'The perceived speed of AI generation is entirely negated by the hourly cost of the senior developers required to verify it.',
      marginCompression: '+41% Verification Burden'
    },
    governanceResponse: 'Deploy the VerificationBurdenPolicy to mathematically block human review of unverified, high-variance agentic code.',
    exogramMapping: 'Admissibility Engine -> Confidence Thresholds',
    remediationAssets: [
      { title: 'Hallucination Debt Reduction Toolkit ($99)', url: '/skills' }
    ]
  },
  {
    id: 'repository-drift',
    slug: 'repository-drift',
    title: 'Repository Drift',
    subtitle: 'Loss of Deterministic State Control',
    description: 'Repository Drift is the gradual decay of a codebase\'s architectural integrity caused by dozens of uncoordinated, probabilistic agent patches that bypass established design patterns and governance boundaries.',
    symptoms: [
      'The agent introduces inline CSS instead of using the global Tailwind design system.',
      'The agent writes direct SQL queries instead of using the established ORM.',
      'The agent downgrades Next.js dependencies to resolve a hydration error instead of fixing the underlying React bug.'
    ],
    causes: [
      'Agents executing code without reading a deterministic Repo Map.',
      'Lack of an Execution Interceptor to block architectural violations.',
      'Relying on system prompts (suggestions) instead of middleware (physics).'
    ],
    telemetrySignals: [
      {
        metric: 'Pattern Violations',
        value: 'Spiking',
        interpretation: 'Agent is bypassing established abstractions.'
      },
      {
        metric: 'Protected Path Writes',
        value: 'Attempted',
        interpretation: 'Agent tried to rewrite core configuration files.'
      }
    ],
    operationalPatterns: [
      'Define immutable architectural boundaries in a repo-map-template.md.',
      'Intercept write requests to protected paths (e.g., /config, /governance).',
      'Trigger an automatic Rollback Circuit if the agent attempts to modify core infrastructure.'
    ],
    economicImpact: {
      title: 'Architectural Technical Debt',
      description: 'The codebase becomes unmaintainable by humans, requiring a complete rewrite or massive refactoring effort to restore deterministic control.',
      marginCompression: 'Long-term Enterprise Value Degradation'
    },
    governanceResponse: 'Deploy Runtime Governance policies to mathematically deny write access to protected architectural layers.',
    exogramMapping: 'Runtime Governance -> Execution Containment',
    remediationAssets: [
      { title: 'Runtime Governance Toolkit ($99)', url: '/skills' }
    ]
  },
  {
    id: 'why-claude-loses-context',
    slug: 'why-claude-loses-context',
    title: 'Why Claude Loses Context',
    subtitle: 'Session Degradation & Context Poisoning',
    description: 'Claude loses context because its semantic window fills with stale assumptions, previous errors, and recursive patches. It "loses the plot" when not constrained by a bounded cognition engine.',
    symptoms: [
      'Claude forgets core instructions after hour three.',
      'The session degrades into "I apologize for the confusion".',
      'Context poisoning causes unrelated code to break.'
    ],
    causes: [
      'Unbounded context accumulation.',
      'Lack of semantic reset checkpoints.',
      'Failing to truncate historical dialogue.'
    ],
    telemetrySignals: [
      { metric: 'Token Velocity', value: 'High', interpretation: 'Context window is saturated with historical attempts.' },
      { metric: 'Reasoning Quality', value: 'Degraded', interpretation: 'Agent has lost the architectural plot.' }
    ],
    operationalPatterns: [
      'Execute a hard repository reset.',
      'Clear the agent context window.',
      'Load only the specific file and immediate dependencies.'
    ],
    economicImpact: {
      title: 'Token Burn Explosion',
      description: 'Massive inference cost for zero engineering output.',
      marginCompression: '+250% Token Spends'
    },
    governanceResponse: 'Deploy Bounded Cognition Middleware to rotate and compress context windows dynamically.',
    exogramMapping: 'Bounded Cognition Engine',
    remediationAssets: [
      { title: 'Claude Context Rot Containment ($99)', url: '/skills/context-rot-prevention' }
    ]
  },
  {
    id: 'why-claude-rewrites-unrelated-files',
    slug: 'why-claude-rewrites-unrelated-files',
    title: 'Why Claude Rewrites Unrelated Files',
    subtitle: 'Ghost Dependencies & Architectural Drift',
    description: 'Claude rewrites unrelated files due to "over-editing" hallucination. It infers ghost dependencies and mutates the repository outside of its authorized scope.',
    symptoms: [
      'Ghost dependencies appear in package.json.',
      'Claude modifies CSS files when fixing backend logic.',
      'Unrelated tests break after a minor patch.'
    ],
    causes: [
      'Lack of execution boundaries.',
      'Probabilistic mapping of dependencies.',
      'No repository drift prevention checks.'
    ],
    telemetrySignals: [
      { metric: 'AST Variance', value: 'High', interpretation: 'Modifying files outside requested scope.' },
      { metric: 'File Touch Count', value: '> 3', interpretation: 'Unnecessary file mutations detected.' }
    ],
    operationalPatterns: [
      'Block writes to unrequested paths.',
      'Require explicit scope declaration before execution.',
      'Use AST divergence tracking.'
    ],
    economicImpact: {
      title: 'Architectural Technical Debt',
      description: 'Creates merge conflict explosions and pipeline failures.',
      marginCompression: 'Long-term Enterprise Value Degradation'
    },
    governanceResponse: 'Implement Cursor Repository Drift Prevention to lock execution strictly to requested files.',
    exogramMapping: 'Execution Gating Layer',
    remediationAssets: [
      { title: 'Cursor Codebase Governance ($99)', url: '/skills/repository-drift-prevention' }
    ]
  },
  {
    id: 'why-claude-patch-loops-happen',
    slug: 'why-claude-patch-loops-happen',
    title: 'Why Claude Patch Loops Happen',
    subtitle: 'Recursive Retries & Token Burn',
    description: 'Claude enters patch loops because it attempts to fix syntax errors without clearing its context of the broken state. It literally "starts patching its own patches" infinitely.',
    symptoms: [
      'The agent retries the exact same fix 5 times.',
      'Claude says "I understand now" but generates the same bug.',
      'Token costs spike drastically for a single feature.'
    ],
    causes: [
      'No hard retry budget.',
      'Context window saturated with the error state.',
      'No circuit breaker middleware.'
    ],
    telemetrySignals: [
      { metric: 'Retry Count', value: '> 3 per task', interpretation: 'Agent caught in a recursive patch loop.' },
      { metric: 'Error Consistency', value: 'High', interpretation: 'Agent is generating the same error repeatedly.' }
    ],
    operationalPatterns: [
      'Implement a hard stop after 3 failed retries.',
      'Require human intervention.',
      'Wipe context before attempting again.'
    ],
    economicImpact: {
      title: 'Runaway Token Costs',
      description: 'API spend inflates massively due to infinite retries.',
      marginCompression: '-22% Effective Margins'
    },
    governanceResponse: 'Deploy Claude Retry Inflation Controls to mathematically limit retry execution.',
    exogramMapping: 'Retry Circuit Breaker',
    remediationAssets: [
      { title: 'Claude Retry Inflation Controls ($99)', url: '/skills/retry-inflation-control' }
    ]
  },
  {
    id: 'why-cursor-spirals',
    slug: 'why-cursor-spirals',
    title: 'Why Cursor Spirals',
    subtitle: 'Uncontrolled Execution & Context Collapse',
    description: 'Cursor spirals when the agent loses deterministic alignment with the codebase architecture and starts generating hallucinated implementations that break downstream logic.',
    symptoms: [
      'Cursor rewrites entire functions incorrectly.',
      'It ignores established patterns for the framework.',
      'The codebase becomes progressively more unstable.'
    ],
    causes: [
      'Unbounded prompt engineering instead of runtime gating.',
      'Lack of admissibility validation.',
      'Assuming probabilistic models will adhere to repo patterns natively.'
    ],
    telemetrySignals: [
      { metric: 'Pattern Violations', value: 'Spiking', interpretation: 'Agent bypassing established abstractions.' },
      { metric: 'Human Revert Rate', value: 'High', interpretation: 'Engineers are reverting Cursor changes.' }
    ],
    operationalPatterns: [
      'Enforce zero-trust validation pipelines.',
      'Validate PRs automatically against architecture rules.',
      'Halt execution upon pattern violation.'
    ],
    economicImpact: {
      title: 'Verification Burden Overload',
      description: 'Senior engineers waste time debugging Cursor spirals.',
      marginCompression: '+41% Verification Burden'
    },
    governanceResponse: 'Deploy Claude Verification Burden Collapse Governance to intercept and block bad patches.',
    exogramMapping: 'Admissibility Engine',
    remediationAssets: [
      { title: 'Deploy Claude QA Overload Prevention ($99)', url: '/skills/verification-burden-collapse' }
    ]
  },
  {
    id: 'why-agentic-systems-fail-in-production',
    slug: 'why-agentic-systems-fail-in-production',
    title: 'Why Agentic Systems Fail in Production',
    subtitle: 'Governance Theater & Probabilistic Variance',
    description: 'Agentic systems fail in production because organizations rely on prompt engineering (Governance Theater) instead of hardcoded deterministic runtime middleware. You cannot prompt an agent into safety.',
    symptoms: [
      'Agents exceed their authority boundaries.',
      'Agents execute unsafe bash commands.',
      'Multi-agent systems deadlock in infinite agreement loops.'
    ],
    causes: [
      'Lack of a deterministic Exogram Control Plane.',
      'Relying on LLM "instructions" for security.',
      'No cryptographic CAB approval systems.'
    ],
    telemetrySignals: [
      { metric: 'Runtime Instability', value: 'Critical', interpretation: 'Total systems failure.' },
      { metric: 'Governance Bypass', value: 'Detected', interpretation: 'Agent ignored system prompts.' }
    ],
    operationalPatterns: [
      'Replace system prompts with TS middleware.',
      'Deploy strict Execution Gating Layers.',
      'Require cryptographic sign-offs for production writes.'
    ],
    economicImpact: {
      title: 'Unquantifiable Enterprise Liability',
      description: 'Complete operational collapse and security vulnerabilities.',
      marginCompression: 'Catastrophic Risk'
    },
    governanceResponse: 'Deploy Deterministic Agentic Engineering to establish a mathematically sound control plane.',
    exogramMapping: 'Exogram Control Plane',
    remediationAssets: [
      { title: 'Deploy the Exogram Control Plane ($299)', url: '/skills/deterministic-agentic-engineering' }
    ]
  }
];

export function getFailureBySlug(slug: string): FailureMode | undefined {
  return failures.find(f => f.slug === slug);
}
