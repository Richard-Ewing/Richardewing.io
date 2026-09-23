// Curriculum Tracks 19-23: AI Agents + Leadership Expansion
// Track 19: AI Agent Architecture & Economics
// Track 20: Agentic Process Automation Economics
// Track 21: AI Agent Governance & Trust Infrastructure
// Track 22: Strategic Leadership Economics
// Track 23: Executive Presence & Board Leadership

import { CurriculumModule, m, l, d } from './curriculum-data';

export function populateTracks19to23(modules: Record<string, CurriculumModule>) {

    // ═══════════════════ TRACK 19: AI Agent Architecture & Economics ═══════════════════

    modules['ai-agent-architecture/19-1'] = m('19-1', 'What Is an AI Agent? Economic Primitives', 'Understand the fundamental economics of AI agents  -  from simple tool-calling bots to fully autonomous systems.', 'AI Agent Architecture & Economics', [
        'Distinguish agents from chatbots using economic criteria',
        'Calculate cost-per-action for agent operations',
        'Map the autonomy spectrum to cost and risk profiles',
        'Build an Agent ROI framework for any use case',
    ], [
        l('The Agent vs Chatbot Economic Distinction', [
            'A chatbot responds to queries. An agent takes actions. This distinction isn\'t philosophical  -  it\'s economic. Every action an agent takes has a measurable cost: inference, tool calls, error correction, and verification.',
            'The autonomy spectrum runs from Level 0 (human decides everything, AI suggests) to Level 5 (fully autonomous). Each level up the spectrum roughly doubles the per-interaction cost while potentially 10x-ing the value created.',
            'The economic question isn\'t "should we build an agent?"  -  it\'s "at what autonomy level does the value created exceed the cost of operation plus the cost of errors?"',
        ], [
            d('Cost-Per-Action (CPA)', 'Total cost of a single agent action including inference, tool calls, and verification', '$0.01-$2.50 per action depending on complexity'),
            d('Agent Autonomy Level', 'Scale from 0-5 measuring how much human oversight is required', 'Most enterprise agents operate at Level 2-3'),
            d('Error Cost Multiplier', 'How much an agent error costs relative to a human error', '1.5-10x depending on action reversibility'),
        ], 'Map three workflows in your organization and score them on the autonomy spectrum. Calculate the CPA at each autonomy level.', [
            'Identified 3+ workflows suitable for agent automation',
            'Calculated CPA for each at multiple autonomy levels',
            'Determined the break-even autonomy level for each workflow',
        ]),
        l('The Agent Cost Stack', [
            'Every agent interaction involves multiple cost layers: the reasoning layer (LLM inference), the action layer (tool calls, API hits), the memory layer (context retrieval, state management), and the verification layer (output checking, guardrails).',
            'A simple customer support agent answering a billing question might cost: $0.003 for inference + $0.001 for tool call + $0.002 for memory retrieval + $0.001 for guardrail check = $0.007 total. At 10,000 queries/day, that\'s $70/day or ~$2,100/month  -  compare that to the $5,000+/month cost of a human support agent.',
            'But the math changes dramatically at higher autonomy levels. An agent that can issue refunds, modify accounts, and escalate to engineering adds tool costs, error correction costs, and liability exposure that can make the total cost approach or exceed human costs.',
        ], [
            d('Inference Cost Ratio', 'Percentage of total agent cost from LLM calls', '30-60% of total agent operating cost'),
            d('Tool Call Overhead', 'Additional cost from external API and service calls', '10-40% of total cost, highly variable'),
            d('Verification Tax', 'Cost of guardrails, output checking, and safety measures', '5-15% of total cost, increases with autonomy'),
        ], 'Build a complete cost stack for one agent use case in your organization. Include all four layers: reasoning, action, memory, and verification.'),
        l('Agent ROI Framework', [
            'The ROI formula for agents is deceptively simple: (Value Created - Total Cost of Operation) / Total Cost of Operation. The challenge is measuring value created accurately.',
            'Value comes in three forms: direct cost savings (replacing human labor), speed value (doing things faster than humans), and scale value (doing things humans simply cannot do at any cost  -  like monitoring 10,000 data streams simultaneously).',
            'The most common mistake in agent ROI calculations is ignoring the "shadow costs": the engineering time to build and maintain the agent, the cost of handling agent errors, the opportunity cost of the team building the agent instead of other features, and the organizational change management costs.',
        ], [
            d('Direct Labor Displacement', 'FTE equivalent hours saved per month', 'Target: 100+ hours/month per agent for positive ROI'),
            d('Speed Premium', 'Revenue or cost impact from faster execution', '10-50% of total agent value in time-sensitive workflows'),
            d('Shadow Cost Ratio', 'Hidden costs as percentage of visible agent costs', '30-100%  -  meaning true costs are 1.3-2x visible costs'),
        ], 'Calculate the full ROI for your proposed agent including all shadow costs. Compare the 6-month, 12-month, and 24-month ROI projections.', [
            'Quantified direct labor displacement in hours and dollars',
            'Estimated speed premium value',
            'Calculated shadow costs at 50% and 100% of visible costs',
            'Built 6/12/24-month ROI projections',
        ]),
        l('The Agent Maturity Model', [
            'Organizations progress through five stages of agent adoption: Experimentation (individual contributors using AI assistants), Departmental (team-level agents for specific workflows), Integrated (agents connected to business systems), Orchestrated (multi-agent systems coordinating complex workflows), and Autonomous (self-improving agent ecosystems).',
            'Each stage roughly requires 2-3x the investment of the previous stage but can deliver 5-10x the value. Most organizations are currently between Stage 1 and Stage 2. The companies that will win the next decade are the ones that reach Stage 4 first.',
            'The economic insight: don\'t try to jump stages. Each stage builds the governance, infrastructure, and organizational muscle needed for the next. Companies that try to go from Stage 1 to Stage 4 directly typically fail catastrophically  -  building autonomous systems without the monitoring and governance infrastructure of Stage 3 is a recipe for expensive disasters.',
        ], [
            d('Stage Investment Multiplier', 'Cost increase per maturity stage', '2-3x per stage, total ~20-50x from Stage 1 to Stage 5'),
            d('Stage Value Multiplier', 'Value increase per maturity stage', '5-10x per stage when done correctly'),
            d('Stage Duration', 'Time to progress between stages', '3-6 months per stage for aggressive adopters'),
        ], 'Assess your organization\'s current agent maturity stage. Create a realistic 18-month roadmap to advance one stage, including budget requirements.'),
        l('Agent Economics Case Studies', [
            'Case Study 1: A Series B SaaS company deployed a customer support agent at Level 2 autonomy. Initial investment: $45K (3 engineer-months). Monthly operating cost: $2,800. Monthly value: $28,000 in displaced support costs + $12,000 in faster resolution revenue. ROI: 830% in year one.',
            'Case Study 2: A PE-backed logistics company attempted Level 4 agent automation for route optimization. Investment: $500K. Result: The agent made a routing error that cost $180K in a single incident. After adding proper guardrails ($120K additional), the system now saves $800K/year. Lesson: verification infrastructure isn\'t optional  -  it\'s the price of admission.',
            'Case Study 3: An enterprise deployed 47 individual agents across departments with no central governance. Result: $340K/year in duplicate infrastructure costs, three data leakage incidents, and zero cross-agent coordination. They spent $200K to consolidate to a platform approach, saving $500K/year and enabling new multi-agent workflows worth $1.2M/year.',
        ], [
            d('Support Agent ROI', 'Typical first-year ROI for Level 2 support agents', '500-1000% when properly scoped'),
            d('Automation Error Cost', 'Average cost of a significant agent error', '$10K-$500K depending on domain'),
            d('Platform Consolidation Savings', 'Cost reduction from centralized agent infrastructure', '30-50% of total agent operating costs'),
        ], 'Analyze one case study from your industry. Identify the key economic decisions that determined success or failure.'),
    ], '/vault/curriculum/tracks/ai-agent-architecture/N19-2');

    // Modules 19-2 through 19-15 (stubs with content structure)
    const track19Modules = [
        { id: '19-2', title: 'Agent Architecture Patterns & Costs', next: '19-3' },
        { id: '19-3', title: 'Tool-Use & Function Calling Economics', next: '19-4' },
        { id: '19-4', title: 'Memory & Context Management Costs', next: '19-5' },
        { id: '19-5', title: 'Multi-Agent Orchestration Economics', next: '19-6' },
        { id: '19-6', title: 'Agent Inference Cost Optimization', next: '19-7' },
        { id: '19-7', title: 'Agent Reliability & Error Economics', next: '19-8' },
        { id: '19-8', title: 'Agent Observability & Monitoring', next: '19-9' },
        { id: '19-9', title: 'Agent Infrastructure at Scale', next: '19-10' },
        { id: '19-10', title: 'Agent Security & Sandboxing Economics', next: '19-11' },
        { id: '19-11', title: 'Agent Testing & Evaluation Frameworks', next: '19-12' },
        { id: '19-12', title: 'Agent Marketplace & Monetization', next: '19-13' },
        { id: '19-13', title: 'Autonomous Agent Risk Management', next: '19-14' },
        { id: '19-14', title: 'Agent Build vs Buy: The Complete TCO', next: '19-15' },
        { id: '19-15', title: 'Agent Architecture Synthesis & Board Presentation', next: undefined },
    ];
    for (const mod of track19Modules) {
        modules[`ai-agent-architecture/${mod.id}`] = m(mod.id, mod.title, `Deep-dive into ${mod.title.toLowerCase()}  -  quantifying costs, benchmarking performance, and building executive-ready frameworks.`, 'AI Agent Architecture & Economics', [
            `Master the economic fundamentals of ${mod.title.toLowerCase()}`,
            'Build quantified frameworks for executive decision-making',
            'Apply real-world benchmarks to your organization',
            'Create board-ready presentations on agent economics',
        ], [
            l(`Introduction to ${mod.title}`, `This module provides a comprehensive exploration of ${mod.title.toLowerCase()}, examining the cost structures, value drivers, and strategic implications for engineering organizations investing in AI agent capabilities.`, [
                d('Key Metric', 'Primary economic indicator for this domain', 'Industry benchmark provided'),
                d('Cost Driver', 'Largest cost component in this area', 'Varies by organization size'),
                d('ROI Timeline', 'Expected time to positive returns', '3-12 months for most implementations'),
            ], `Apply the ${mod.title} framework to a real scenario in your organization.`),
        ], mod.next ? `/vault/curriculum/tracks/ai-agent-architecture/${mod.next}` : undefined);
    }

    // ═══════════════════ TRACK 20: Agentic Process Automation Economics ═══════════════════

    modules['agentic-automation/20-1'] = m('20-1', 'From RPA to Agentic Automation', 'The leap from robotic process automation to intelligent agent automation  -  and why it changes every ROI calculation.', 'Agentic Process Automation Economics', [
        'Understand why RPA hit its ceiling at $15B market cap',
        'Calculate the intelligence premium of agentic automation',
        'Identify the first 5 processes to automate with agents',
        'Build a business case that separates agents from traditional automation',
    ], [
        l('The RPA Ceiling & The Agentic Leap', [
            'RPA automated the mechanical  -  clicking buttons, moving data between systems, filling forms. It works brilliantly for structured, deterministic processes. But it fails catastrophically when processes require judgment, context, or handling of edge cases.',
            'Agentic process automation crosses the intelligence threshold. Instead of following a script, agents understand intent, handle exceptions, and learn from outcomes. The economic difference is staggering: RPA handles 60-70% of process volume (the easy cases), while agents can handle 85-95% (including edge cases that previously required human judgment).',
            'The market opportunity is clear: the $15B RPA market is being disrupted by a $100B+ agentic automation market. Companies that made the transition early are seeing 3-5x the ROI of their RPA investments.',
        ], [
            d('RPA Coverage Rate', 'Percentage of process volume RPA can handle', '60-70% for structured processes'),
            d('Agent Coverage Rate', 'Percentage of process volume agents can handle', '85-95% including edge cases'),
            d('Intelligence Premium', 'Additional value from agent judgment vs RPA scripting', '2-4x the value of equivalent RPA automation'),
        ], 'Audit your existing RPA deployments. For each, estimate the coverage rate and calculate the incremental value of moving to agentic automation.'),
        l('Process Discovery for Agent Automation', [
            'Not every process should be automated with agents. The process discovery framework scores candidates on four dimensions: Volume (how often does it happen?), Judgment Complexity (how much human decision-making is involved?), Error Impact (what happens when it goes wrong?), and Data Availability (does the agent have access to the information it needs?).',
            'The sweet spot is high-volume, medium-complexity processes where errors are recoverable. Customer support ticket triage, invoice processing, and code review are classic examples. Avoid starting with low-volume, high-complexity processes where errors are catastrophic (medical diagnoses, financial trading)  -  save those for when your governance infrastructure is mature.',
            'Build your automation backlog by scoring every candidate process on these four dimensions. Prioritize ruthlessly: your first three agent deployments will set the organizational tone for everything that follows.',
        ], [
            d('Automation Candidate Score', 'Composite score across 4 dimensions (1-10 each)', '30+ out of 40 for first-wave candidates'),
            d('Process Volume Threshold', 'Minimum monthly volume to justify agent automation', '500+ instances/month for positive ROI'),
            d('Error Recovery Cost', 'Average cost to fix an automation error', 'Must be <10% of automation value created'),
        ], 'Score 10 processes in your organization using the 4-dimension framework. Rank them and select your top 3 candidates for agent automation.'),
    ], '/vault/curriculum/tracks/agentic-automation/N20-2');

    const track20Modules = [
        { id: '20-2', title: 'Process Discovery for Agent Automation' },
        { id: '20-3', title: 'FTE Displacement Economics' },
        { id: '20-4', title: 'Customer Support Agent Economics' },
        { id: '20-5', title: 'DevOps & SRE Agent Automation' },
        { id: '20-6', title: 'Sales & Revenue Agent Economics' },
        { id: '20-7', title: 'Finance & Compliance Agent Automation' },
        { id: '20-8', title: 'Code Generation & Review Agents' },
        { id: '20-9', title: 'Agent Orchestration Platforms' },
        { id: '20-10', title: 'Change Management for Agent Adoption' },
        { id: '20-11', title: 'Agent Performance SLAs & Contracts' },
        { id: '20-12', title: 'Agent Failure Modes & Recovery' },
        { id: '20-13', title: 'Measuring Agent ROI at Scale' },
        { id: '20-14', title: 'Competitive Strategy with Agent Automation' },
        { id: '20-15', title: 'Agentic Automation Synthesis' },
    ];
    for (let i = 0; i < track20Modules.length; i++) {
        const mod = track20Modules[i];
        const next = i < track20Modules.length - 1 ? track20Modules[i + 1].id : undefined;
        modules[`agentic-automation/${mod.id}`] = m(mod.id, mod.title, `Master ${mod.title.toLowerCase()} with quantified economic frameworks and real-world benchmarks.`, 'Agentic Process Automation Economics', [
            `Quantify the economics of ${mod.title.toLowerCase()}`,
            'Build ROI models for executive decision-making',
            'Apply industry benchmarks to your organization',
            'Create implementation roadmaps with measurable outcomes',
        ], [
            l(`Deep Dive: ${mod.title}`, `A comprehensive examination of ${mod.title.toLowerCase()}, providing the economic frameworks, benchmarks, and decision tools needed for enterprise-grade implementation.`, [
                d('Key Metric', 'Primary economic indicator', 'Industry benchmark'),
                d('Cost Driver', 'Largest cost component', 'Varies by scale'),
                d('ROI Timeline', 'Time to positive returns', '3-12 months'),
            ], `Apply the ${mod.title} framework to your organization.`),
        ], next ? `/vault/curriculum/tracks/agentic-automation/${next}` : undefined);
    }

    // ═══════════════════ TRACK 21: AI Agent Governance & Trust Infrastructure ═══════════════════

    modules['agent-governance/21-1'] = m('21-1', 'The Trust Problem in Autonomous AI', 'AI doesn\'t fail because it can\'t reason. It fails because it doesn\'t know what\'s true. This module establishes the governance foundation.', 'AI Agent Governance & Trust Infrastructure', [
        'Understand why traditional software governance fails for agents',
        'Map the verification vs validation distinction to agent economics',
        'Learn from Exogram\'s truth layer architecture',
        'Build a trust framework for your organization\'s agent deployment',
    ], [
        l('Why AI Trust Is an Economic Problem', [
            'When a traditional software system fails, the error is deterministic  -  the same input always produces the same wrong output. When an AI agent fails, the error is probabilistic  -  it might work 99 times and fail catastrophically on the 100th. This fundamentally changes the economics of quality assurance.',
            'The trust problem has three dimensions: factual accuracy (is the agent\'s output true?), contextual appropriateness (is the action correct for this specific situation?), and alignment (does the agent\'s action serve the organization\'s interests?). Each dimension requires different verification infrastructure, and each has different cost profiles.',
            'Exogram\'s approach  -  building a verification layer between AI models and applications  -  represents the emerging architecture pattern: don\'t trust the model, verify the output. This "trust but verify" approach adds 5-15% to operating costs but reduces error costs by 80-95%  -  a clear economic winner.',
        ], [
            d('Probabilistic Error Rate', 'Percentage of agent actions that produce incorrect results', '1-5% for well-designed agents, but impact can be catastrophic'),
            d('Verification Infrastructure Cost', 'Annual cost of truth verification systems', '5-15% of total agent operating budget'),
            d('Error Cost Reduction', 'Reduction in error-related costs after verification deployment', '80-95% for factual accuracy errors'),
        ], 'Audit your current AI deployments for trust gaps. Identify the top 3 areas where verification infrastructure would have the highest ROI.'),
        l('Verification vs Validation: The Agent Governance Distinction', [
            'Validation asks "did we build the right thing?"  -  an upfront, design-time activity. Verification asks "is this specific output correct?"  -  a runtime, continuous activity. For agents, verification is the economic differentiator.',
            'Traditional AI governance focuses on validation: testing models before deployment, benchmarking accuracy, running evaluations. This is necessary but insufficient for agents that operate autonomously. An agent that passed all validation tests can still produce harmful outputs in production when it encounters edge cases not covered by the test suite.',
            'Runtime verification  -  checking each agent output against ground truth sources, business rules, and safety constraints before allowing it to take effect  -  is the governance pattern that makes enterprise agent deployment economically viable. The cost is real (5-15% of operating budget), but the alternative  -  unverified autonomous actions  -  is economically untenable.',
        ], [
            d('Validation Coverage', 'Percentage of real-world scenarios covered by pre-deployment testing', '60-80% for well-tested agents'),
            d('Runtime Verification Latency', 'Additional time added by output verification', '50-500ms per action, acceptable for most enterprise workflows'),
            d('Governance Cost as % of Agent Budget', 'Total governance spend relative to agent operating costs', '12-20% for mature governance programs'),
        ], 'Design a runtime verification architecture for one high-stakes agent workflow. Calculate the cost and latency impact.'),
    ], '/vault/curriculum/tracks/agent-governance/N21-2');

    const track21Modules = [
        { id: '21-2', title: 'Agent Permission & Access Control Economics' },
        { id: '21-3', title: 'Agent Audit & Compliance Frameworks' },
        { id: '21-4', title: 'Hallucination Detection & Verification Economics' },
        { id: '21-5', title: 'Agent Output Verification Infrastructure' },
        { id: '21-6', title: 'Data Provenance & Lineage for Agents' },
        { id: '21-7', title: 'Prompt Injection & Security Economics' },
        { id: '21-8', title: 'Multi-Stakeholder Agent Governance' },
        { id: '21-9', title: 'Agent Ethics & Bias Economics' },
        { id: '21-10', title: 'Insurance & Liability for AI Agents' },
        { id: '21-11', title: 'Agent Versioning & Rollback Economics' },
        { id: '21-12', title: 'Enterprise Agent Policy Engines' },
        { id: '21-13', title: 'Agent Incident Response & Forensics' },
        { id: '21-14', title: 'Building an Agent Center of Excellence' },
        { id: '21-15', title: 'Agent Governance Synthesis & Board Strategy' },
    ];
    modules['agent-governance/21-12'] = m(
        '21-12',
        'Enterprise Agent Policy Engines & Shadow Delegation Boundaries',
        'Prevent Shadow Delegation by establishing zero-trust, 3-tier execution boundaries over vendor-supplied autonomous AI agents in CRM and ERP platforms.',
        'AI Agent Governance & Trust Infrastructure',
        [
            'Identify Shadow Delegation risks in Salesforce, SAP, and Oracle native agent updates',
            'Enforce corporate delegation of authority matrices ($500 manager vs $500,000 VP caps) over automated algorithms',
            'Deploy sub-5ms binary proxy gates to intercept contract modifications and financial commitments',
            'Structure 3-tier boundary controls for enterprise AI agent deployments'
        ],
        [
            l('The Mechanics of Shadow Delegation', [
                'Major software providers like Salesforce, SAP, and Oracle are embedding active, autonomous AI agents directly into core CRM, ERP, and billing workflows. These agents possess native authority to issue refunds, alter contract terms, and trigger supply chain orders.',
                'Because capabilities arrive as native SaaS feature updates, enterprise business units enable them with a single click. This creates Shadow Delegation - granting third-party software algorithms financial freedom that internal human managers do not possess.',
                'When an automated CRM retention agent grants an unapproved 15% ($20,000+) contract discount to prevent customer churn, it bypasses internal approval matrices, creating quiet margin leaks and severe SOX internal control audit failures.'
            ], [
                d('Delegation Threshold Gap', 'Difference between human manager spending limits and unrestricted agent feature caps', 'Human cap $500 vs Unrestricted Agent API'),
                d('Margin Leak Impact', 'Quiet revenue erosion from un-monitored automated contract discounts', '10-25% margin loss on affected accounts'),
                d('Internal Control Failure Rate', 'SOX audit exception rate when AI actions bypass signing matrices', '100% control breach under standard audit criteria')
            ], 'Audit your enterprise SaaS application stack for embedded AI agent features with write or financial transaction permissions.'),
            l('The 3-Tier Delegation Boundary Framework', [
                'To prevent Shadow Delegation without blocking technology adoption, enterprise technology executives must treat vendor-supplied agents like third-party contractors subject to explicit boundary tiers.',
                'Tier 1 (Read-Only Analysis): Agent reads data and suggests actions; zero execution authority.',
                'Tier 2 (Conditional Low-Risk Actions): Agent executes minor actions within strict, capped financial thresholds ($100-$500 max).',
                'Tier 3 (High-Impact Commitments): Contract modifications, discounts exceeding thresholds, or financial ledger writes require mandatory human VP sign-off via sub-5ms binary proxy gates.'
            ], [
                d('Tier 1 Latency', 'Read-only analysis and suggestion latency', '50-200ms'),
                d('Tier 2 Financial Cap', 'Maximum automated spending limit for Tier 2 actions', '$100-$500 per transaction'),
                d('Tier 3 Binary Proxy Interception', 'Time required for policy engine gate to validate or block high-risk action', '<5ms binary check')
            ], 'Draft a 3-Tier Delegation Boundary policy for vendor AI agents in your Salesforce or SAP ecosystem.')
        ],
        '/vault/curriculum/tracks/agent-governance/N21-13',
        undefined,
        'live',
        ['cio-salesforce-sap-workflow-agents']
    );

    modules['agent-governance/21-2'] = m(
        '21-2',
        'Persistence vs. Authority: Background vs. Interactive Agents',
        'Decouple execution persistence from state-altering authority. Compare terminal supervision (Claude Code) with unattended cloud persistence (Gemini Spark) and build explicit write allowlists.',
        'AI Agent Governance & Trust Infrastructure',
        [
            'Differentiate runtime persistence (execution duration) from state authority (blast radius)',
            'Evaluate terminal supervision against background cloud persistence failure modes',
            'Enforce Admissibility Allowlists and state integrity rollback gates'
        ],
        [
            l(
                'Lesson 1: Terminal Supervision vs. Background Persistence',
                'Anthropic\'s Claude Code won the terminal because it operates interactively with active human supervision: you give it an assignment, watch it work inside project files, and course-correct instantly before changes leave your desk. Google\'s Gemini Spark takes an entirely different approach: running on remote cloud servers across office tools (Docs, Sheets, Gmail, Calendar) after you close your laptop. Background persistence looks like a pure productivity upgrade, but failure shifts from localized and visible to silent and distributed. A bad assumption in an unattended agent spreads across customer records, financial sheets, and team notifications before anyone notices.',
                [
                    d('Terminal Supervision', 'Active human presence contains errors in real time with immediate discard mechanisms.', 'Best For: Exploratory problem solving, architecture design, and complex refactors.'),
                    d('Background Persistence', 'Unattended execution across hours or days connects directly into business tools.', 'Best For: Structured, repetitive coordination with predictable inputs and outcomes.'),
                    d('Supervision Parity', 'Google\'s documentation admits scheduled tasks run offline yet notes active supervision remains the primary risk defense.', 'Rule: Never confuse long runtime with trustworthy authority.')
                ],
                'Audit your engineering and operations workflows. Categorize tasks into interactive terminal supervision versus candidate background jobs based on blast radius.'
            ),
            l(
                'Lesson 2: Persistence Is Not Authority & Confirmation Prompt Limits',
                'Persistence tells you how long an agent can run; authority tells you what it is permitted to change while it runs. Treating them as the same decision is where catastrophic failures occur. While platforms provide confirmation prompts for external payments or outbound messages, they ignore routine operational blast radius: an agent overwriting live formulas in a shared financial model with static numbers or altering CRM customer statuses does not trigger financial alerts, but creates hours of forensic cleanup. If an agent must prompt you for every row update, the benefit of background execution evaporates and the human is trapped back in the loop.',
                [
                    d('Authority Decoupling', 'Granting runtime duration must be strictly separated from granting write permissions.', 'Target: Zero unattended write permissions to core financial or customer ledgers.'),
                    d('Confirmation Prompt Blindspots', 'Superficial dialogs miss internal database mutations, ticket closures, and document overwrites.', 'Benchmark: Enforce policy checks on internal mutations, not just external transactions.'),
                    d('The Supervision Dilemma', 'Prompting on every action destroys automation velocity; prompting on nothing destroys system integrity.', 'Solution: Start with read-only triggers and narrow definitions of done.')
                ],
                'Draft an Admissibility Allowlist for a background reporting agent. Explicitly define which database tables are read-only and which specific fields (if any) can be updated independently.'
            ),
            l(
                'Lesson 3: State Drift & Explainability vs. Recoverability',
                'Persistent agents carry reusable instructions, skills, and memory across runs. Over time, accumulated context becomes stale: a temporary workaround used during an urgent project crisis becomes part of the permanent context a recurring task uses, causing the agent to act on outdated assumptions that no longer match reality. Furthermore, explainability is not recoverability. An assistant that produces a clear log explaining why it corrupted your financial spreadsheet still does not repair the spreadsheet. Because enterprise SaaS lacks unified cross-application rollback, operators are forced into forensic auditing.',
                [
                    d('State Drift', 'Accumulation of temporary workarounds, stale memory, and outdated schema context across runs.', 'Target: Enforce stateless session resets and periodic memory purging for recurring tasks.'),
                    d('Explainability Fallacy', 'Detailed execution summaries only document failure; they do not reverse unauthorized changes.', 'Benchmark: Mandate automated rollback mechanisms for every write-capable agent.'),
                    d('Forensic Auditor Drag', 'Spending hours hunting through distributed logs to reconstruct what an agent changed while unattended.', 'Metric: If audit time exceeds manual execution time, revoke autonomous write authority.')
                ],
                'Design a rollback protocol for an agent modifying customer records across both a PostgreSQL database and a CRM instance. How do you guarantee atomic revert on failure?'
            )
        ],
        '/vault/curriculum/tracks/agent-governance/21-3',
        undefined,
        'live',
        ['builtin-claude-code-vs-gemini-spark']
    );

    modules['agent-governance/21-3'] = m(
        '21-3',
        'The Transaction That Succeeds: The 4 Pillars of Agent Governance',
        'Deploy the CIO.com governance framework to detect silent policy failures, separate system monitoring from business authorization, and audit the 6 Executive Questions.',
        'AI Agent Governance & Trust Infrastructure',
        [
            'Identify and prevent the transaction that succeeds where operations monitors show green but business rules are violated',
            'Implement the 4 Pillars of Agent Governance: Monitoring, Auditability, Authorization, and Accountability',
            'Operationalize the 6 Executive Questions before procuring or deploying enterprise applications with embedded AI agents'
        ],
        [
            l(
                'Lesson 1: The Transaction That Succeeds (Silent Policy Failure)',
                'The AI failures that make headlines are obvious crashes or hallucinations. Enterprise systems face an insidious class of failure: the transaction that succeeds. Traditional IT monitoring alarms when servers crash, databases time out, or requests fail. Policy failures do not trigger technical alarms: the support agent grants an unapproved account credit, the procurement agent bypasses a $50,000 competitive bidding mandate to reorder from a fast supplier, or the sales agent alters contract discount terms. Every operations dashboard glows green with 240ms latency, yet corporate business rules were completely breached.',
                [
                    d('Technical vs. Policy Failure', 'Technical monitoring measures server mechanics; policy governance measures rule compliance.', 'Danger: 100% technical uptime can conceal 100% unauthorized business transactions.'),
                    d('Gartner Telemetry', '40% of enterprise apps will embed agents by 2026; 40% will be decommissioned by 2027 due to post-incident governance gaps.', 'Root Cause: Failing to distinguish an agent\'s technical capability to act from its authorized scope of decision-making.'),
                    d('NIST 2026 Telemetry', 'Distributed infrastructure creates fragmented logging, leaving the boundary between monitoring and auditing unresolved.', 'Mandate: Centralize semantic authorization logs independently of vendor applications.')
                ],
                'Identify two automated workflows in your company where a transaction could complete cleanly from an IT standpoint while violating financial or compliance rules.'
            ),
            l(
                'Lesson 2: The 4 Pillars of Agent Governance',
                'In enterprise architecture reviews, four critical questions consistently get conflated. To govern autonomous agents at scale, leadership must enforce the 4 Pillars independently: 1) Monitoring: Is the system working? (technical uptime and latency); 2) Auditability: Can we reconstruct what it did and why? (immutable context and tool-call logging); 3) Authorization: Was it allowed to do it? (compliance with corporate financial and legal policy); 4) Accountability: Who owns the consequence? (named human executive ownership). A vendor\'s cloud security certification proves their perimeter is secure; it does not prove an agent\'s decision complied with your internal policy.',
                [
                    d('Pillar 1: Monitoring', 'Validates system mechanics and latency (e.g., Datadog, CloudWatch). Cannot verify business authorization.', 'Standard: Technical performance verification.'),
                    d('Pillar 2: Auditability', 'Reconstructs prompts, retrieved data, and execution steps for forensic review.', 'Standard: Immutable, append-only cryptographic logging.'),
                    d('Pillar 3: Authorization', 'Evaluates proposed actions against business spending and compliance policies before record mutation.', 'Standard: Pre-execution policy enforcement gate.'),
                    d('Pillar 4: Accountability', 'Assigns named business leader ownership for every agent decision scope.', 'Standard: Zero orphan agents; explicit sign-off on decision boundaries.')
                ],
                'Map the 4 Pillars across an agent authorized to draft and approve supplier purchase orders. Who owns each pillar, and where does the independent authorization check live?'
            ),
            l(
                'Lesson 3: The 6 Executive Procurement Questions & The Ownership Vacuum',
                'Governance frequently falls into an ownership vacuum: the business application team assumes cybersecurity manages agent permissions; cybersecurity assumes the business process owner defined operational rules; finance assumes the software vendor engineered guardrails. To eliminate this vacuum, every leader must mandate the 6 Executive Questions before approving any vendor-supplied agent rollout: 1) Which agents can modify live records, alter contracts, or execute money? 2) What access does it have beyond the user? 3) Which named leader owns the rules? 4) How are write operations bounded? 5) What happens when vendor logic updates in a routine patch? 6) Can decisions be proven to auditors six months later?',
                [
                    d('The Governance Vacuum', 'Cross-department assumptions leave agents running for months with decisions nobody explicitly approved.', 'Remedy: Formalize Systems Governor sign-off on all embedded agents.'),
                    d('Vendor Update Risk', 'A vendor software patch can alter underlying prompt logic and decision boundaries without notice.', 'Defense: Decouple enterprise business rules from vendor application code.'),
                    d('Audit Proof Standard', 'Proving to regulators both the context that triggered an action and the authority that permitted it.', 'Target: Independent evidence capture detailing context and authorization before state mutation.')
                ],
                'Apply the 6 Executive Questions to an embedded AI feature in your CRM or ERP and present the scorecard to your leadership team.'
            )
        ],
        '/vault/curriculum/tracks/agent-governance/21-4',
        undefined,
        'live',
        ['cio-ai-agent-decision-company-risk']
    );

    modules['agent-governance/21-5'] = m(
        '21-5',
        'The Supervisory Review Queue: Mitigating the Air Traffic Control Tax',
        'Learn why agent delegation shifts human work to supervisory review drag, detect silent syntax failures in code, and enforce the 4 operational laws for bounded agent leverage.',
        'AI Agent Governance & Trust Infrastructure',
        [
            'Quantify the air traffic control tax of auditing plausible machine-generated drafts and code',
            'Catch silent syntax failures where agents optimize local code while breaking global architectural invariants',
            'Implement the 4 Operational Laws for autonomous agent delegation'
        ],
        [
            l(
                'Lesson 1: The Air Traffic Control Tax & Interpersonal Friction',
                'The promise of complete delegation fails because AI agents do not eliminate to-do lists; they replace them with a supervisory review queue. Testing agents across administrative chores shows where friction appears: calendar agents fail when digital grids collide with physical reality (booking meetings 40 miles apart without travel time, or converting casual "coffee sometime" comments into urgent Tuesday invites). Email drafting agents produce polite, generic corporate filler that takes 3 minutes to rewrite into human voice versus 30 seconds to type manually. Operators spend less time executing and far more time in exhausting air traffic control supervision.',
                [
                    d('The Air Traffic Control Tax', 'Cognitive exhaustion from auditing confident assumptions and checking edge cases.', 'Observation: Reviewing flawed output is more taxing than doing the work manually.'),
                    d('Grid vs. Physical Reality', 'Calendar models see empty schedule slots but ignore commute times and real-world logistics.', 'Rule: Require manual verification on all external appointment scheduling.'),
                    d('Synthetic Tone Penalty', 'Machine-drafted emails strip conversational shorthand and damage authentic business relationships.', 'Policy: Ban automated reply-sending on client-facing channels; keep passive alerting only.')
                ],
                'Track your time spent reviewing AI-generated drafts over one week. Compare total review and rewrite time against the baseline of writing the messages from scratch.'
            ),
            l(
                'Lesson 2: Silent Syntax Failures in Software Engineering',
                'Where agents provide real operational leverage is inside isolated engineering loops: monitoring CI pipelines, checking deployment health, verifying endpoint responses, and auditing DOM accessibility. That work has clear mechanical pass/fail criteria. The catastrophic failure mode occurs during architectural refactoring: an agent updates an API route to optimize performance, writes clean code that compiles with zero linter errors, but breaks database consistency by bypassing an unstated validation rule. The agent fails silently with perfect syntax. Catching these subtle bugs requires hours of senior debugging.',
                [
                    d('Mechanical Leverage', 'Background agents excel at bounded checks with explicit binary verification criteria.', 'Target: Automate CI triage, accessibility contrast checks, and package lockfile auditing.'),
                    d('Silent Syntax Failures', 'Syntactically valid code that compiles cleanly but violates unstated business or architectural logic.', 'Danger: Compiling code does not equal correct domain architecture.'),
                    d('Refactoring Boundaries', 'Autonomous agents must never be granted unsupervised refactoring authority over multi-table database interactions.', 'Rule: Mandate human architectural review on all state-mutating code changes.')
                ],
                'Implement an automated Red/Green test probe in your CI pipeline that tests whether an agent-suggested API optimization violates existing transactional consistency constraints.'
            ),
            l(
                'Lesson 3: The 4 Operational Laws for Autonomous Agent Delegation',
                'To capture real operational ROI and escape the supervisory review queue trap, engineering and operations leaders must enforce 4 non-negotiable operational laws: 1) Start With Read-Only Triggers: give agents permission to read, scan, and summarize before granting create, send, or update access; 2) Narrow Definitions of Done: scope workflows to explicit, easily verified targets; 3) Human Approval on External Actions: enforce human gates on emails, calendar bookings, and code merges; 4) Treat Output as Junior Drafts: assume machine output contains blind spots and scan for stripped context before release.',
                [
                    d('Law 1: Read-Only Triggers', 'Scan and alert first; never delegate write authority until verification is proven.', 'Target: 100% read-only baseline for newly deployed agents.'),
                    d('Law 2: Narrow Definition of Done', 'Explicit mechanical criteria eliminate subjective guessing and review ambiguity.', 'Benchmark: If "Done" cannot be validated by a script, bound the scope tightly.'),
                    d('Law 3: Human Gates on External Actions', 'Require human confirmation before any agent action touches customers, calendars, or production code.', 'Standard: Mandatory two-man rule on state mutation.'),
                    d('Law 4: Junior Draft Posture', 'Review all text and code with the assumption of hidden context omission and polite bias.', 'Mindset: The human remains the Systems Governor.')
                ],
                'Draft an organizational SOP codifying the 4 Operational Laws for all employee-deployed agents, and establish an automated audit mechanism for newly created API tokens.'
            )
        ],
        '/vault/curriculum/tracks/agent-governance/21-6',
        undefined,
        'live',
        ['builtin-ai-agents-to-do-list']
    );

    for (let i = 0; i < track21Modules.length; i++) {
        const mod = track21Modules[i];
        if (mod.id === '21-2' || mod.id === '21-3' || mod.id === '21-5' || mod.id === '21-12') continue;
        const next = i < track21Modules.length - 1 ? track21Modules[i + 1].id : undefined;
        modules[`agent-governance/${mod.id}`] = m(mod.id, mod.title, `Build enterprise-grade governance for ${mod.title.toLowerCase()}.`, 'AI Agent Governance & Trust Infrastructure', [
            `Master governance frameworks for ${mod.title.toLowerCase()}`,
            'Quantify compliance and risk costs',
            'Build audit-ready documentation and processes',
            'Create board-level governance reporting',
        ], [
            l(`Governance Deep Dive: ${mod.title}`, `Comprehensive governance framework for ${mod.title.toLowerCase()}, including regulatory requirements, cost models, and implementation playbooks.`, [
                d('Compliance Cost', 'Annual cost of governance for this domain', 'Industry benchmark'),
                d('Risk Exposure', 'Potential cost of non-compliance', 'Varies by regulatory environment'),
                d('Implementation Timeline', 'Time to deploy governance controls', '4-12 weeks for initial deployment'),
            ], `Design a governance framework for ${mod.title.toLowerCase()} in your organization.`),
        ], next ? `/vault/curriculum/tracks/agent-governance/${next}` : undefined);
    }

    // ═══════════════════ TRACK 22: Strategic Leadership Economics ═══════════════════

    modules['strategic-leadership/22-1'] = m('22-1', 'The Leadership Multiplier Effect', 'Your job is no longer to produce output. It\'s to multiply the output of everyone around you. This module teaches the economics of that shift.', 'Strategic Leadership Economics', [
        'Understand why IC metrics don\'t translate to leadership value',
        'Calculate your leadership multiplier effect',
        'Map the value creation shift from direct to indirect contribution',
        'Build a personal P&L as a leader',
    ], [
        l('From Producer to Multiplier', [
            'As an individual contributor, your value equation is simple: hours worked × skill level × complexity of problems = value produced. As a leader, the equation fundamentally changes: team size × team capability × team alignment × organizational use = value produced. Your personal output is now a rounding error.',
            'The math is uncomfortable but undeniable. A senior engineer producing $500K in direct value can, as a leader of 8 engineers, multiply their team\'s output by 20-40%. That\'s $800K-$1.6M in value created  -  but only if they stop doing and start enabling.',
            'The most expensive leaders are the ones who can\'t let go. A Director who spends 30% of their time writing code is costing the organization the difference between their code output (~$150K in value) and the leadership use they\'re not providing (~$800K in team uplift). That\'s a $650K opportunity cost.',
        ], [
            d('Leadership Multiplier', 'Percentage uplift in team output attributable to effective leadership', '20-40% for strong leaders, -10% to 0% for weak ones'),
            d('IC Time Tax', 'Value lost when leaders do IC work instead of leading', '$400K-$800K/year for a Director-level leader'),
            d('Team Capability Uplift', 'Skill improvement rate of team members under effective leadership', '15-25% per year in measurable competency growth'),
        ], 'Calculate your current leadership multiplier. Track how you spend your time this week  -  categorize every hour as IC work, management overhead, or leadership use.', [
            'Tracked time for one full week',
            'Categorized hours into IC/Management/Leadership',
            'Calculated current vs potential leadership multiplier',
            'Identified top 3 IC activities to delegate',
        ]),
        l('The Training Gap: Why We Get Managers, Not Leaders', [
            'Companies invest heavily in technical training for junior employees: bootcamps, certifications, onboarding programs, mentorship. Then they promote the best performers into management roles with virtually zero training on how to actually lead.',
            'The economic impact is staggering. A study by Gallup found that companies fail to choose the right candidate for manager 82% of the time. The cost? Organizations with poor management see 18% lower productivity, 16% lower profitability, and 37% higher absenteeism.',
            'The fix is economic: investing $10K-$25K in leadership development per newly-promoted manager yields 2-5x returns within 12 months through reduced attrition, higher team productivity, and better decision-making. Yet most companies spend $0  -  and then wonder why their new managers struggle.',
        ], [
            d('Management Selection Failure Rate', 'Percentage of time companies choose the wrong manager candidate', '82% according to Gallup'),
            d('Leadership Training Investment', 'Recommended annual investment per new manager', '$10K-$25K in the first year'),
            d('Leadership Training ROI', 'Return on leadership development investment', '2-5x within 12 months'),
        ], 'Audit your organization\'s leadership development spend. Calculate the cost of your last three "failed" manager promotions (attrition, productivity loss, team disruption).'),
    ], '/vault/curriculum/tracks/strategic-leadership/N22-2');

    const track22Modules = [
        { id: '22-2', title: 'From Technical Expert to Strategic Leader' },
        { id: '22-3', title: 'Building & Leading High-Performance Teams' },
        { id: '22-4', title: 'The Economics of Trust & Delegation' },
        { id: '22-5', title: 'Strategic Communication & Influence' },
        { id: '22-6', title: 'Coaching & Development Economics' },
        { id: '22-7', title: 'Conflict Resolution & Alignment Economics' },
        { id: '22-8', title: 'Change Leadership Economics' },
        { id: '22-9', title: 'Culture as Capital Asset' },
        { id: '22-10', title: 'Decision Architecture for Leaders' },
        { id: '22-11', title: 'Leading Remote & Distributed Organizations' },
        { id: '22-12', title: 'Innovation Leadership Economics' },
        { id: '22-13', title: 'Crisis Leadership & Resilience' },
        { id: '22-14', title: 'Ethical Leadership & Governance' },
        { id: '22-15', title: 'Leadership Capital Synthesis' },
    ];
    for (let i = 0; i < track22Modules.length; i++) {
        const mod = track22Modules[i];
        const next = i < track22Modules.length - 1 ? track22Modules[i + 1].id : undefined;
        modules[`strategic-leadership/${mod.id}`] = m(mod.id, mod.title, `The economics of ${mod.title.toLowerCase()}  -  quantified frameworks for leaders who want to multiply, not just manage.`, 'Strategic Leadership Economics', [
            `Master the economics of ${mod.title.toLowerCase()}`,
            'Build quantified leadership frameworks',
            'Apply proven multiplier models to your team',
            'Create measurable leadership development plans',
        ], [
            l(`Leadership Economics: ${mod.title}`, `A deep exploration of ${mod.title.toLowerCase()}, providing the economic frameworks, measurement tools, and implementation strategies that separate leaders from managers.`, [
                d('Leadership Metric', 'Primary measurement for this leadership domain', 'Industry benchmark'),
                d('Investment Required', 'Resources needed to develop this capability', 'Varies by organization size'),
                d('Value Creation Timeline', 'Time to measurable impact', '30-90 days for initial improvements'),
            ], `Build a 90-day plan to improve your ${mod.title.toLowerCase()} capability. Include specific metrics you\'ll track.`),
        ], next ? `/vault/curriculum/tracks/strategic-leadership/${next}` : undefined);
    }

    // ═══════════════════ TRACK 23: Executive Presence & Board Leadership ═══════════════════

    modules['executive-presence/23-1'] = m('23-1', 'Executive Presence as Economic Asset', 'Executive presence isn\'t charisma  -  it\'s credibility capital. This module teaches you to build and deploy it as a measurable asset.', 'Executive Presence & Board Leadership', [
        'Understand executive presence as an economic, not personality, trait',
        'Calculate the credibility premium in negotiations and decisions',
        'Map the components of presence to measurable business outcomes',
        'Build a 90-day presence development plan',
    ], [
        l('Presence as Credibility Capital', [
            'Executive presence isn\'t about commanding a room with force of personality. It\'s about the credibility premium  -  the measurable increase in decision acceptance, negotiation outcomes, and organizational follow-through that comes from being perceived as competent, confident, and trustworthy.',
            'Research from the Center for Talent Innovation shows that executive presence accounts for 26% of what it takes to get promoted to senior leadership. In economic terms, the presence premium can be worth $200K-$500K in total compensation difference between leaders with strong vs. weak executive presence at the VP/C-suite level.',
            'The three pillars of executive presence are: Gravitas (40%  -  how you think and decide), Communication (30%  -  how you speak and present), and Appearance (30%  -  how you show up). Each is trainable, measurable, and has a direct economic impact on your career trajectory and organizational outcomes.',
        ], [
            d('Presence Premium', 'Compensation difference between leaders with strong vs weak executive presence', '$200K-$500K at VP/C-suite level'),
            d('Decision Acceptance Rate', 'Percentage of proposals approved by leaders with strong presence', '2-3x higher than leaders with weak presence'),
            d('Promotion Correlation', 'How much executive presence contributes to senior promotion decisions', '26% of the promotion decision per CTI research'),
        ], 'Rate yourself on the three pillars of executive presence (Gravitas, Communication, Appearance) on a 1-10 scale. Identify your lowest pillar and create a 30-day improvement plan.'),
        l('Board Communication Economics', [
            'The average board meeting costs $50,000-$150,000 when you factor in the hourly rates of all participants. Every minute of confused discussion, every follow-up question caused by unclear presentation, every decision delayed because the board didn\'t understand the technical implications  -  it all has a cost.',
            'The 4-Quadrant Board Slide is the most effective framework for technical leaders presenting to boards: (1) What happened last quarter (backward-looking metrics), (2) What we\'re investing in this quarter (forward-looking decisions), (3) What risks we\'re managing (risk dashboard), (4) What we need from the board (clear ask). Mastering this framework alone can save 30-50% of board meeting time.',
            'The single most expensive communication failure for technical leaders is using engineering language in the boardroom. When you say "we need to refactor the monolith," the board hears "they want to spend money on something invisible." When you say "we\'re investing $2M to reduce our maintenance costs by $5M/year and accelerate feature delivery by 40%," they hear a business investment with clear returns.',
        ], [
            d('Board Meeting Cost', 'Average cost per board meeting including all participant time', '$50K-$150K per meeting'),
            d('Communication Efficiency Gain', 'Time saved by using structured presentation frameworks', '30-50% reduction in meeting time'),
            d('Decision Velocity', 'Speed improvement in board approvals with clear technical translation', '2-3x faster approval cycles'),
        ], 'Prepare a 4-Quadrant Board Slide for your current quarter. Have a non-technical peer review it and score it on clarity (1-10).'),
    ], '/vault/curriculum/tracks/executive-presence/N23-2');

    const track23Modules = [
        { id: '23-2', title: 'Board Communication Mastery' },
        { id: '23-3', title: 'P&L Ownership for Technical Leaders' },
        { id: '23-4', title: 'Investor Relations for CTOs' },
        { id: '23-5', title: 'Strategic Planning & OKR Economics' },
        { id: '23-6', title: 'Cross-Functional Executive Alignment' },
        { id: '23-7', title: 'Executive Negotiation & Deal Economics' },
        { id: '23-8', title: 'Organizational Restructuring Economics' },
        { id: '23-9', title: 'Executive Coaching & Peer Networks' },
        { id: '23-10', title: 'Public Speaking & Thought Leadership' },
        { id: '23-11', title: 'AI Strategy at the Board Level' },
        { id: '23-12', title: 'Succession Planning Economics' },
        { id: '23-13', title: 'Board Governance & Fiduciary Economics' },
        { id: '23-14', title: 'Global Leadership & Scale' },
        { id: '23-15', title: 'Executive Leadership Synthesis' },
    ];
    for (let i = 0; i < track23Modules.length; i++) {
        const mod = track23Modules[i];
        const next = i < track23Modules.length - 1 ? track23Modules[i + 1].id : undefined;
        modules[`executive-presence/${mod.id}`] = m(mod.id, mod.title, `Master ${mod.title.toLowerCase()} with frameworks designed for senior leaders and aspiring C-suite executives.`, 'Executive Presence & Board Leadership', [
            `Develop executive-level capability in ${mod.title.toLowerCase()}`,
            'Build board-ready presentations and frameworks',
            'Apply proven executive leadership models',
            'Create measurable career advancement strategies',
        ], [
            l(`Executive Mastery: ${mod.title}`, `An executive-level deep dive into ${mod.title.toLowerCase()}, providing the strategic frameworks, communication tools, and governance models that define top-tier technical leadership.`, [
                d('Executive Metric', 'Primary measurement for this domain', 'C-suite benchmark'),
                d('Career Impact', 'Expected impact on career trajectory', 'Measurable within 6 months'),
                d('Organizational Value', 'Value created for the organization', 'Quantified in annual terms'),
            ], `Create an executive-level action plan for ${mod.title.toLowerCase()} including 30/60/90-day milestones.`),
        ], next ? `/vault/curriculum/tracks/executive-presence/${next}` : undefined);
    }
}
