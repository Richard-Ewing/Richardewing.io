import { Project, SyntaxKind } from 'ts-morph';

const project = new Project();
project.addSourceFilesAtPaths("lib/content/skills.ts");

const sourceFile = project.getSourceFileOrThrow("lib/content/skills.ts");

const updates: Record<string, any> = {
  "context-rot-prevention": {
    title: "Claude Context Rot Prevention System",
    ctaText: "Install Claude Context Rot Containment",
    ecosystemPainQuotes: [
      "Claude starts patching its own patches.",
      "The session gets worse every hour.",
      "The retry loops never stop.",
      "Eventually the whole repo becomes unstable."
    ]
  },
  "runtime-governance": {
    title: "Runtime Governance for Claude Code",
    ctaText: "Deploy Claude Runtime Governance",
  },
  "hallucination-debt-reduction": {
    title: "Hallucination Debt Reduction for Agents",
    ctaText: "Deploy Hallucination Containment",
  },
  "ai-engineering-economics": {
    title: "AI Engineering Economics Models",
    ctaText: "Deploy Economic Governance",
  },
  "mcp-governance": {
    title: "MCP Governance for Claude Code",
    ctaText: "Deploy Claude Protocol Governance",
  },
  "verification-burden-collapse": {
    title: "Claude Verification Burden Collapse Governance System",
    ctaText: "Deploy Claude QA Overload Prevention",
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
    ]
  },
  "orchestration-entropy": {
    title: "Orchestration Entropy Governance",
    ctaText: "Deploy Multi-Agent Orchestration Constraints",
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
    ]
  },
  "retry-inflation-control": {
    title: "Claude Retry Inflation Controls",
    ctaText: "Install Claude Retry Inflation Controls",
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
    ]
  },
  "repository-drift-prevention": {
    title: "Cursor Repository Drift Prevention",
    ctaText: "Deploy Cursor Codebase Governance",
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
    ]
  },
  "context-window-compression": {
    title: "Claude Context Window Compression",
    ctaText: "Deploy Claude Context Compression",
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
    ]
  },
  "autonomous-execution-safety": {
    title: "Claude Autonomous Execution Safety",
    ctaText: "Deploy Claude Execution Guardrails",
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
    ]
  },
  "tool-permission-governance": {
    title: "Agent Tool Permission Governance",
    ctaText: "Deploy Tool Permission Governance",
    ecosystemPainQuotes: [
      "Over-permissioned agents.",
      "Capability escalation."
    ],
    telemetrySignals: [
      "Unrestricted MCP access",
      "Tool-chain contamination"
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
    ]
  },
  "ai-cost-containment": {
    title: "AI Agent Cost Containment",
    ctaText: "Deploy AI Token Budget Controls",
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
    ]
  },
  "deterministic-agentic-engineering": {
    title: "Deterministic Agentic Engineering for Claude",
    ctaText: "Deploy the Exogram Control Plane",
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
    ]
  },
  "agentic-change-management": {
    title: "Agentic Infrastructure Change Management",
    ctaText: "Deploy Cryptographic CAB Approvals"
  }
};

const skillsDecl = sourceFile.getVariableDeclarationOrThrow("SKILLS");
const initializer = skillsDecl.getInitializerIfKindOrThrow(SyntaxKind.ArrayLiteralExpression);

for (const element of initializer.getElements()) {
  if (element.isKind(SyntaxKind.ObjectLiteralExpression)) {
    const slugProp = element.getProperty("slug");
    if (slugProp && slugProp.isKind(SyntaxKind.PropertyAssignment)) {
      const slugVal = slugProp.getInitializerIfKind(SyntaxKind.StringLiteral)?.getLiteralValue();
      if (slugVal && updates[slugVal]) {
        const up = updates[slugVal];
        
        if (up.title) {
          const p = element.getProperty("title");
          if (p && p.isKind(SyntaxKind.PropertyAssignment)) p.setInitializer(`"${up.title}"`);
        }
        
        if (up.ctaText) {
          const p = element.getProperty("ctaText");
          if (p && p.isKind(SyntaxKind.PropertyAssignment)) {
            p.setInitializer(`"${up.ctaText}"`);
          } else {
            element.addPropertyAssignment({ name: "ctaText", initializer: `"${up.ctaText}"` });
          }
        }
        
        const updateArray = (propName: string, values: string[]) => {
          if (!values) return;
          const p = element.getProperty(propName);
          if (p && p.isKind(SyntaxKind.PropertyAssignment)) {
            p.setInitializer(`[\n${values.map(v => `      "${v.replace(/"/g, '\\"')}"`).join(",\n")}\n    ]`);
          } else {
            element.addPropertyAssignment({
              name: propName,
              initializer: `[\n${values.map(v => `      "${v.replace(/"/g, '\\"')}"`).join(",\n")}\n    ]`
            });
          }
        };

        updateArray("ecosystemPainQuotes", up.ecosystemPainQuotes);
        updateArray("telemetrySignals", up.telemetrySignals);
        updateArray("whatBreaks", up.whatBreaks);
        updateArray("economicDamage", up.economicDamage);
        updateArray("whatSystemInstalls", up.whatSystemInstalls);
        updateArray("failureCascades", up.failureCascades);
      }
    }
  }
}

sourceFile.saveSync();
console.log("Successfully updated skills.ts");
