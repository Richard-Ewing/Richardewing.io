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
  }
];

export function getFailureBySlug(slug: string): FailureMode | undefined {
  return failures.find(f => f.slug === slug);
}
