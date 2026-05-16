const fs = require('fs');
const path = require('path');
const base = path.join(process.cwd(), 'assets/skills');

const skills = {
  'context-rot-prevention': {
    name: 'Context Rot Prevention System',
    layer: 'Skill Governance',
    desc: 'Prevents semantic degradation, recursive patch loops, and instruction amnesia in long-running agentic sessions.',
    triggers: ['Session exceeds 60 minutes', 'Context window utilization > 65%', 'Agent patches same file 3+ times', 'Instruction recall drops below 80%'],
    tools: ['check-context-health.sh — Scan current session for context rot indicators', 'checkpoint-rotate.sh — Save architecture state and compress history', 'semantic-reset.sh — Emergency context purge preserving critical state', 'patch-chain-detector.sh — Detect recursive patch loops across files'],
    agents: ['Claude Code', 'Cursor', 'Windsurf', 'Cline', 'Roo Code', 'Codex', 'Copilot', 'Gemini Code Assist', 'Amazon Q Developer', 'Devin', 'OpenHands', 'SWE-Agent']
  },
  'retry-inflation-control': {
    name: 'Retry Inflation Control System',
    layer: 'Skill Governance',
    desc: 'Detects and halts recursive retry loops, error fingerprint recurrence, and runaway token burn before financial damage occurs.',
    triggers: ['Same error fingerprint appears 3+ times', 'Task token spend exceeds $25', 'Retry count exceeds 5 for single error', 'Agent enters identical fix-fail cycle'],
    tools: ['retry-budget-tracker.sh — Track token spend per task with budget alerts', 'error-fingerprint.sh — Hash and compare error patterns for recurrence', 'kill-retry-loop.sh — Force-halt runaway retry chains', 'cost-audit.sh — Generate cost report for current session'],
    agents: ['Claude Code', 'Cursor', 'Windsurf', 'Cline', 'Roo Code', 'Codex', 'Copilot', 'Gemini Code Assist', 'Amazon Q Developer', 'Devin']
  },
  'runtime-governance': {
    name: 'Runtime Governance for Claude Code',
    layer: 'Tool Governance',
    desc: 'Intercepts agent shell commands, validates against whitelist/blacklist, blocks destructive operations, enforces rollback circuits.',
    triggers: ['Agent attempts shell command', 'Command matches blacklist pattern', 'Agent modifies protected file', 'Multiple blocked attempts in sequence'],
    tools: ['command-validator.sh — Classify and validate shell commands against policy', 'file-guard.sh — Protect sensitive files from agent mutation', 'rollback-snapshot.sh — Create pre-execution state snapshot', 'audit-log.sh — Append timestamped entry to governance audit trail'],
    agents: ['Claude Code', 'Cursor', 'Windsurf', 'Cline', 'Roo Code', 'Codex', 'Devin', 'OpenHands', 'SWE-Agent']
  },
  'repository-drift-prevention': {
    name: 'Repository Drift Prevention System',
    layer: 'Environment Governance',
    desc: 'Prevents ghost dependencies, unauthorized file mutations, scope violations, and silent repository divergence from agent model.',
    triggers: ['Agent imports package not in package.json', 'Diff exceeds 200 lines without review', 'Agent modifies files outside requested scope', 'Unexpected file deletion detected'],
    tools: ['import-validator.sh — Check all imports against package.json dependencies', 'scope-checker.sh — Verify file modifications stay within requested scope', 'diff-auditor.sh — Analyze diff size and flag large changes', 'ghost-dep-scanner.sh — Scan for phantom/unresolvable dependencies'],
    agents: ['Claude Code', 'Cursor', 'Windsurf', 'Cline', 'Roo Code', 'Codex', 'Copilot', 'Amazon Q Developer', 'Devin']
  },
  'orchestration-entropy': {
    name: 'Orchestration Entropy Containment',
    layer: 'Skill Governance',
    desc: 'Detects and halts agreement loops, delegation ping-pong, sub-agent explosions, and workflow timeout in multi-agent systems.',
    triggers: ['10+ consecutive turns without tool invocation', 'Delegation depth exceeds 5 levels', 'Sub-agent count exceeds limit', 'Workflow exceeds max turn count'],
    tools: ['turn-counter.sh — Track conversation turns and detect stalls', 'agreement-detector.sh — Flag consecutive agreements without action', 'delegation-depth.sh — Monitor delegation chain depth', 'workflow-checkpoint.sh — Save and restore orchestration state'],
    agents: ['Claude Code', 'Cursor', 'Windsurf', 'Cline', 'CrewAI', 'AutoGen', 'LangGraph', 'Devin', 'OpenHands']
  },
  'hallucination-debt-reduction': {
    name: 'Hallucination Debt Reduction System',
    layer: 'Skill Governance',
    desc: 'Validates agent code output against real codebase state. Blocks phantom dependencies, scores confidence, routes to review queues.',
    triggers: ['Agent imports non-existent package', 'Output confidence score < 0.85', 'Agent references non-existent API', 'Post-merge bug rate exceeds 5%'],
    tools: ['phantom-import-scanner.sh — Check imports against package.json and node_modules', 'confidence-scorer.sh — Score agent output confidence level', 'api-validator.sh — Verify referenced APIs actually exist', 'review-router.sh — Route PR to appropriate review queue by confidence'],
    agents: ['Claude Code', 'Cursor', 'Windsurf', 'Cline', 'Roo Code', 'Codex', 'Copilot', 'Gemini Code Assist', 'Amazon Q Developer']
  },
  'mcp-governance': {
    name: 'MCP Governance System',
    layer: 'Tool Governance',
    desc: 'Enforces context isolation, credential protection, capability manifests, and supply chain validation for MCP tool servers.',
    triggers: ['Agent calls unmanifested tool', 'Tool output contains sensitive data patterns', 'Cross-tool context leakage detected', 'Unverified MCP server connection attempted'],
    tools: ['manifest-checker.sh — Validate tool calls against capability manifest', 'secret-scanner.sh — Scan tool output for credential/secret patterns', 'context-isolator.sh — Enforce cross-tool data isolation', 'server-verifier.sh — Validate MCP server identity and integrity'],
    agents: ['Claude Code', 'Cursor', 'Windsurf', 'Cline', 'Roo Code', 'Any MCP-compatible agent']
  },
  'verification-burden-collapse': {
    name: 'Verification Burden Collapse Prevention',
    layer: 'Skill Governance',
    desc: 'Prevents reviewer burnout by routing AI PRs through confidence-scored review queues and detecting rubber-stamp patterns.',
    triggers: ['Reviewer approves PR in < 2 minutes', 'Daily review hours exceed 4', 'Confidence score < 0.75', 'Review queue exceeds 8 PRs'],
    tools: ['review-timer.sh — Track review duration and flag rubber-stamps', 'confidence-router.sh — Route PRs by confidence score to review tiers', 'burnout-monitor.sh — Track cumulative review hours per engineer', 'quality-gate.sh — Enforce minimum review standards before merge'],
    agents: ['Claude Code', 'Cursor', 'Windsurf', 'Cline', 'Roo Code', 'Codex', 'Copilot', 'GitHub Copilot Workspace']
  },
  'autonomous-execution-safety': {
    name: 'Autonomous Execution Safety System',
    layer: 'Identity Governance',
    desc: 'Enforces authority boundaries, command whitelists, and permission gates for autonomous agent execution.',
    triggers: ['Agent attempts blocked command category', 'Agent tries to install unvetted package', 'Agent modifies infrastructure files', 'Multiple permission violations in sequence'],
    tools: ['whitelist-checker.sh — Validate command against safe/restricted/blocked lists', 'package-auditor.sh — Vet package before allowing installation', 'permission-gate.sh — Enforce human approval for restricted operations', 'authority-logger.sh — Log all authority boundary interactions'],
    agents: ['Claude Code', 'Cursor', 'Windsurf', 'Cline', 'Roo Code', 'Codex', 'Devin', 'OpenHands', 'SWE-Agent']
  },
  'tool-permission-governance': {
    name: 'Tool Permission Governance System',
    layer: 'Tool Governance',
    desc: 'Enforces least-privilege tool access, blocks capability escalation, redacts secrets from tool output.',
    triggers: ['Agent requests tool not in task manifest', 'Tool attempts to read protected path', 'Output contains secret/credential patterns', 'Capability escalation through tool chaining detected'],
    tools: ['scope-enforcer.sh — Restrict tools to task-scoped permissions', 'path-guard.sh — Block access to sensitive file paths', 'output-redactor.sh — Strip secrets from tool responses', 'escalation-detector.sh — Detect capability escalation chains'],
    agents: ['Claude Code', 'Cursor', 'Windsurf', 'Cline', 'Roo Code', 'Any tool-using LLM agent']
  },
  'context-window-compression': {
    name: 'Context Window Compression System',
    layer: 'Environment Governance',
    desc: 'Manages context window utilization through checkpoint rotation, passive pruning, and emergency compression.',
    triggers: ['Context utilization > 50%', 'Instruction recall drops below 90%', 'Session exceeds 50 useful interactions', 'Emergency: utilization > 85%'],
    tools: ['context-monitor.sh — Report current context window utilization', 'passive-prune.sh — Remove stale interaction history', 'checkpoint-save.sh — Save critical state to checkpoint file', 'emergency-compress.sh — Extract critical state and purge history'],
    agents: ['Claude Code', 'Cursor', 'Windsurf', 'Cline', 'Roo Code', 'Codex', 'Copilot', 'Gemini Code Assist', 'Any LLM with context limits']
  },
  'ai-cost-containment': {
    name: 'AI Cost Containment System',
    layer: 'Environment Governance',
    desc: 'Financial circuit breakers for agentic execution. Tracks token spend, enforces budgets, kills runaway processes.',
    triggers: ['Task spend exceeds budget', 'Unattended execution > 30 minutes', 'Spend rate exceeds threshold', 'Weekend/overnight execution detected'],
    tools: ['budget-tracker.sh — Track cumulative token spend against budget', 'spend-alert.sh — Alert when approaching budget limits', 'kill-runaway.sh — Force-terminate processes exceeding cost limits', 'cost-report.sh — Generate cost breakdown by task/session/developer'],
    agents: ['Claude Code', 'Cursor', 'Windsurf', 'Cline', 'Roo Code', 'Codex', 'Any API-consuming agent']
  },
  'ai-engineering-economics': {
    name: 'AI Engineering Economics Models',
    layer: 'Environment Governance',
    desc: 'Tracks synthetic COGS across all agentic tasks. Measures true ROI including hidden verification and remediation costs.',
    triggers: ['Sprint ROI turns negative', 'Cost overrun exceeds 30%', 'Verification burden exceeds 50% of task cost', 'Quarterly AI spend audit due'],
    tools: ['cogs-tracker.sh — Log token costs, verification hours, remediation hours per task', 'roi-calculator.sh — Calculate true ROI including hidden costs', 'cost-per-feature.sh — Calculate actual cost per shipped feature', 'quarterly-report.sh — Generate executive economic summary'],
    agents: ['Claude Code', 'Cursor', 'Windsurf', 'Cline', 'Roo Code', 'Codex', 'Any AI development workflow']
  },
  'agentic-change-management': {
    name: 'Agentic Change Management System',
    layer: 'Identity Governance',
    desc: 'CAB-style approval architecture for agent-initiated changes. Risk classification, approval routing, and audit trails.',
    triggers: ['Agent initiates code change', 'Change classified as high-risk', 'Agent attempts production deployment', 'Shadow AI change detected'],
    tools: ['risk-classifier.sh — Classify change risk level (low/medium/high/critical)', 'approval-router.sh — Route change to appropriate approval authority', 'audit-trail.sh — Log change with justification and approval chain', 'shadow-detector.sh — Detect unauthorized agent changes'],
    agents: ['Claude Code', 'Cursor', 'Windsurf', 'Cline', 'Roo Code', 'Codex', 'Devin', 'Any autonomous coding agent']
  },
  'deterministic-agentic-engineering': {
    name: 'Deterministic Agentic Engineering — Master System',
    layer: 'Identity Governance',
    desc: 'The master runtime architecture. Assembles all 4 governance layers into a compiled, immutable execution payload via the Exogram runtime compiler.',
    triggers: ['Any agent trigger event', 'Runtime initialization', 'Cross-layer governance check', 'Post-execution state validation'],
    tools: ['runtime-assembler.sh — Load and compile all 4 governance layers', 'identity-loader.sh — Load agent identity constraints', 'skill-resolver.sh — Resolve skill requirements and dependencies', 'environment-snapshot.sh — Capture current environment state slice'],
    agents: ['Claude Code', 'Cursor', 'Windsurf', 'Cline', 'Roo Code', 'Codex', 'Copilot', 'Gemini Code Assist', 'Amazon Q Developer', 'Devin', 'OpenHands', 'SWE-Agent', 'CrewAI', 'AutoGen', 'LangGraph']
  }
};

for (const [slug, skill] of Object.entries(skills)) {
  const dir = path.join(base, slug);
  const toolsDir = path.join(dir, 'tools');
  if (!fs.existsSync(toolsDir)) fs.mkdirSync(toolsDir, { recursive: true });

  // CLAUDE.md manifest
  const manifest = `# ${skill.name}

> Runtime Layer: ${skill.layer}
> Compatible Agents: ${skill.agents.join(', ')}

## Purpose

${skill.desc}

## When This Skill Activates

${skill.triggers.map(t => `- ${t}`).join('\n')}

## Installation

Copy this entire directory into your project root:

\`\`\`
cp -r ./${slug}/ /your-project/.claude/skills/${slug}/
\`\`\`

Then add to your CLAUDE.md or system prompt:

\`\`\`
Load governance skill: .claude/skills/${slug}/CLAUDE.md
Load policy: .claude/skills/${slug}/policy.yaml
\`\`\`

## Directory Structure

\`\`\`
${slug}/
├── CLAUDE.md              ← This file (skill manifest)
├── README.md              ← Operational manual
├── policy.yaml            ← Governance rules and thresholds
├── middleware.ts           ← Runtime interception engine
├── architecture.mmd       ← Containment flow diagram
├── financial-model.csv    ← Cost/impact metrics
└── tools/                 ← Reusable automation scripts
${skill.tools.map(t => `    ├── ${t.split(' — ')[0]}`).join('\n')}
\`\`\`

## Tools

${skill.tools.map(t => {
  const [name, desc] = t.split(' — ');
  return `### \`${name}\`\n${desc}\n\n\`\`\`bash\nbash tools/${name}\n\`\`\``;
}).join('\n\n')}

## Policy Reference

See \`policy.yaml\` for all governance thresholds, circuit breakers, and escalation rules.

## Middleware Reference

See \`middleware.ts\` for the TypeScript runtime interception engine.

## Compatible Agents

${skill.agents.map(a => `- ${a}`).join('\n')}

## Runtime Architecture

This skill operates at the **${skill.layer}** layer of the 4-Layer Agent Runtime Architecture:

- **Identity Layer** — Govern cognition
- **Skill Layer** — Govern procedures
- **Tool Layer** — Govern actuation
- **Environment Layer** — Govern semantic terrain

Learn more: https://richardewing.io/runtime-architecture
`;

  fs.writeFileSync(path.join(dir, 'CLAUDE.md'), manifest);
  console.log(`✓ ${slug}/CLAUDE.md`);
}

console.log(`\nDone — ${Object.keys(skills).length} CLAUDE.md manifests created.`);
