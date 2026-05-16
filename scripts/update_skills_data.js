const fs = require('fs');

const FILE_PATH = 'd:/Antigravity_RichardEwing.io/lib/content/skills.ts';

let content = fs.readFileSync(FILE_PATH, 'utf-8');

const SKILL_UPDATES = {
  'context-rot-prevention': {
    whatBreaks: ['Semantic degradation over time', 'Unbounded inference drift', 'Stale context poisoning', 'Token bloat causing memory failures'],
    ecosystemPainQuotes: ['Claude starts patching its own patches.', 'The session gets worse every hour.', 'The retry loops never stop.', 'Eventually the whole repo becomes unstable.'],
    telemetrySignals: ['recursive patch chains', 'retry inflation', 'exploding token burn', 'stale context contamination'],
    economicDamage: ['synthetic QA overload', 'engineering review fatigue', 'API spend inflation', 'merge instability', 'architectural entropy'],
    whatSystemInstalls: ['bounded cognition middleware', 'semantic reset infrastructure', 'retry circuit breakers', 'repository checkpoint enforcement', 'rollback containment logic', 'deterministic context boundaries'],
    failureCascades: ['Context Rot', 'Retry Inflation', 'Verification Collapse', 'Repository Drift', 'Runtime Governance Failure']
  },
  'runtime-governance': {
    whatBreaks: ['hallucinated execution', 'unauthorized mutations', 'unsafe shell execution', 'recursive execution drift'],
    ecosystemPainQuotes: ["Claude ran the wrong command.", "It touched files it shouldn't.", "The rollback failed.", "The agent exceeded its authority."],
    telemetrySignals: ['Unauthorized file mutation', 'Execution interception rates', 'Rollback triggers'],
    economicDamage: ['Production downtime', 'Compliance violation penalties', 'Synthetic rollback costs'],
    whatSystemInstalls: ['execution interceptors', 'admissibility middleware', 'rollback circuits', 'runtime permission enforcement', 'policy-as-code gating', 'TypeScript middleware', 'YAML governance manifests'],
    failureCascades: ['Governance Theater', 'Unsafe Execution', 'Repository Drift', 'Architectural Collapse']
  },
  'hallucination-debt-reduction': {
    whatBreaks: ['Probabilistic output variance', 'Phantom dependencies', 'Fake API consumption'],
    ecosystemPainQuotes: ["We spend more time reviewing AI than coding.", "Humans are the bottleneck now.", "Phantom dependencies keep appearing."],
    telemetrySignals: ['QA overhead spikes', 'Synthetic COGS expansion', 'Verification time'],
    economicDamage: ['Synthetic QA overload', 'Engineering review fatigue', 'Slower release velocity'],
    whatSystemInstalls: ['zero-trust validation pipelines', 'QA threshold policies', 'deterministic constraints', 'admissibility checks', 'TypeScript middleware'],
    failureCascades: ['Hallucination Debt', 'Synthetic QA Expansion', 'Margin Collapse', 'Orchestration Entropy']
  },
  'ai-engineering-economics': {
    whatBreaks: ['Margin collapse on AI features', 'Uncapped inference spend', 'Unmeasured synthetic COGS'],
    ecosystemPainQuotes: ["Exploding inference costs.", "Hidden verification labor.", "Runaway API costs."],
    telemetrySignals: ['Token inflation', 'Inference margin collapse', 'API burn rates'],
    economicDamage: ['API spend inflation', 'EBITDA compression', 'Unjustified agentic ROI'],
    whatSystemInstalls: ['COGS telemetry models', 'inference margin calculators', 'retry burn limits', 'economic tracking models'],
    failureCascades: ['Retry Inflation', 'Token Burn Explosion', 'Synthetic COGS Expansion', 'Margin Collapse']
  },
  'mcp-governance': {
    whatBreaks: ['Unconstrained server execution', 'Data exfiltration risks', 'Global tool exposure'],
    ecosystemPainQuotes: ["Global tool exposure.", "Uncontrolled tool chains.", "Privilege escalation attempts."],
    telemetrySignals: ['Privilege escalation attempts', 'Unsafe context sharing'],
    economicDamage: ['Security breach liabilities', 'Compliance audit failures', 'Data leakage costs'],
    whatSystemInstalls: ['MCP access matrices', 'protocol audit tools', 'server limits YAML', 'integration middleware'],
    failureCascades: ['Unconstrained Server Execution', 'Data Exfiltration', 'Compliance Violation', 'Runtime Governance Failure']
  },
  'verification-burden-collapse': {
    whatBreaks: ['Verification bottlenecks', 'Manual code review overload', 'Human-in-the-loop exhaustion'],
    ecosystemPainQuotes: ["AI code still requires humans.", "Humans are the bottleneck.", "Review fatigue."],
    telemetrySignals: ['Escalating verification time', 'PR review overload'],
    economicDamage: ['Synthetic QA overload', 'Engineering review fatigue', 'Merge instability'],
    whatSystemInstalls: ['verification-routing middleware', 'reviewer-escalation matrices', 'zero-trust validation pipelines', 'QA threshold policies', 'TypeScript middleware'],
    failureCascades: ['Verification Overload', 'Review Shortcut Decisions', 'Hallucinated Execution', 'Repository Drift']
  },
  'repository-drift-prevention': {
    whatBreaks: ['Codebase divergence', 'Architectural corruption', 'Dependency drift'],
    ecosystemPainQuotes: ["It rewrote my architecture.", "Changing unrelated files.", "Project scope drift."],
    telemetrySignals: ['Repository divergence', 'Dependency drift'],
    economicDamage: ['Architectural entropy', 'Merge conflict explosion', 'CI/CD pipeline failures'],
    whatSystemInstalls: ['repository validators', 'divergence detectors', 'branch integrity policies', 'deterministic alignment protocols', 'YAML governance manifests'],
    failureCascades: ['Repository Drift', 'Architectural Corruption', 'Merge Instability', 'Verification Collapse']
  },
  'agentic-change-management': {
    whatBreaks: ['Unauthorized infrastructure mutation', 'Governance bypass', 'Shadow AI deployments'],
    ecosystemPainQuotes: ["Unauthorized infrastructure mutation.", "Governance bypass.", "Who approved this change?"],
    telemetrySignals: ['Mutation risk escalation', 'Unapproved architectural changes'],
    economicDamage: ['Production downtime', 'Compliance violation penalties', 'Infrastructure rollback costs'],
    whatSystemInstalls: ['change approval engines', 'cryptographic authority policies', 'risk detectors', 'CAB escalation matrices'],
    failureCascades: ['Agentic Autonomous Mutation', 'Shadow Operations', 'Governance Bypass', 'Production Incident']
  },
  'context-window-compression': {
    whatBreaks: ['Token exhaustion', 'Memory overload', 'Irrelevant token accumulation'],
    ecosystemPainQuotes: ["Context window rot.", "Stale context poisoning.", "Token limits exceeded."],
    telemetrySignals: ['Memory overload', 'Irrelevant token accumulation'],
    economicDamage: ['API spend inflation', 'Inference cost explosion', 'Wasted compute cycles'],
    whatSystemInstalls: ['compression engines', 'checkpoint rotation middleware', 'memory priority systems', 'token economy policies'],
    failureCascades: ['Token Exhaustion', 'Context Rot', 'Retry Inflation', 'Agent Deadlock']
  }
};

// We will use regex to find each skill in the SKILLS array and replace its properties.
let inSkillsArray = false;
let currentSkill = null;
const lines = content.split('\n');

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('export const SKILLS: GovernanceSkill[] = [')) {
    inSkillsArray = true;
  }
  
  if (inSkillsArray) {
    const slugMatch = lines[i].match(/slug:\s*"([^"]+)"/);
    if (slugMatch) {
      currentSkill = slugMatch[1];
    }
    
    if (currentSkill && SKILL_UPDATES[currentSkill]) {
      const updates = SKILL_UPDATES[currentSkill];
      
      const replaceProp = (propName) => {
        if (lines[i].trim().startsWith(`${propName}:`)) {
          // Find the end of the array
          let endIdx = i;
          let bracketCount = 0;
          let started = false;
          
          for (let j = i; j < lines.length; j++) {
            if (lines[j].includes('[')) {
              bracketCount += (lines[j].match(/\[/g) || []).length;
              started = true;
            }
            if (lines[j].includes(']')) {
              bracketCount -= (lines[j].match(/\]/g) || []).length;
            }
            
            if (started && bracketCount === 0) {
              endIdx = j;
              break;
            }
          }
          
          // Generate new lines
          const indent = lines[i].match(/^\s*/)[0];
          const newArrayStr = `${indent}${propName}: ${JSON.stringify(updates[propName], null, 2).replace(/\n/g, `\n${indent}`).replace(/"/g, "'")},`;
          
          lines.splice(i, endIdx - i + 1, newArrayStr);
        }
      };
      
      ['whatBreaks', 'ecosystemPainQuotes', 'telemetrySignals', 'economicDamage', 'whatSystemInstalls', 'failureCascades'].forEach(prop => {
        replaceProp(prop);
      });
    }
  }
}

fs.writeFileSync(FILE_PATH, lines.join('\n'));
console.log('Updated skills.ts successfully');
