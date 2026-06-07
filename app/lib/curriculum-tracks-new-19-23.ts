// Curriculum Tracks 19-23: AI Agents + Leadership Expansion
// Track 19: AI Agent Architecture & Economics
// Track 20: Agentic Process Automation Economics
// Track 21: AI Agent Governance & Trust Infrastructure
// Track 22: Strategic Leadership Economics
// Track 23: Executive Presence & Board Leadership

import { CurriculumModule, m, l, d } from './curriculum-data';

export function populateTracks19to23(modules: Record<string, CurriculumModule>) {

    // ═══════════════════ TRACK 19: AI Agent Architecture & Economics ═══════════════════

    modules['ai-agent-architecture/19-1'] = m('19-1', 'What Is an AI Agent? Economic Primitives', 'Understand the fundamental economics of AI agents — from simple tool-calling bots to fully autonomous systems.', 'AI Agent Architecture & Economics', [
        'Distinguish agents from chatbots using economic criteria',
        'Calculate cost-per-action for agent operations',
        'Map the autonomy spectrum to cost and risk profiles',
        'Build an Agent ROI framework for any use case',
    ], [
        l('The Agent vs Chatbot Economic Distinction', [
            'A chatbot responds to queries. An agent takes actions. This distinction isn\'t philosophical — it\'s economic. Every action an agent takes has a measurable cost: inference, tool calls, error correction, and verification.',
            'The autonomy spectrum runs from Level 0 (human decides everything, AI suggests) to Level 5 (fully autonomous). Each level up the spectrum roughly doubles the per-interaction cost while potentially 10x-ing the value created.',
            'The economic question isn\'t "should we build an agent?" — it\'s "at what autonomy level does the value created exceed the cost of operation plus the cost of errors?"',
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
            'A simple customer support agent answering a billing question might cost: $0.003 for inference + $0.001 for tool call + $0.002 for memory retrieval + $0.001 for guardrail check = $0.007 total. At 10,000 queries/day, that\'s $70/day or ~$2,100/month — compare that to the $5,000+/month cost of a human support agent.',
            'But the math changes dramatically at higher autonomy levels. An agent that can issue refunds, modify accounts, and escalate to engineering adds tool costs, error correction costs, and liability exposure that can make the total cost approach or exceed human costs.',
        ], [
            d('Inference Cost Ratio', 'Percentage of total agent cost from LLM calls', '30-60% of total agent operating cost'),
            d('Tool Call Overhead', 'Additional cost from external API and service calls', '10-40% of total cost, highly variable'),
            d('Verification Tax', 'Cost of guardrails, output checking, and safety measures', '5-15% of total cost, increases with autonomy'),
        ], 'Build a complete cost stack for one agent use case in your organization. Include all four layers: reasoning, action, memory, and verification.'),
        l('Agent ROI Framework', [
            'The ROI formula for agents is deceptively simple: (Value Created - Total Cost of Operation) / Total Cost of Operation. The challenge is measuring value created accurately.',
            'Value comes in three forms: direct cost savings (replacing human labor), speed value (doing things faster than humans), and scale value (doing things humans simply cannot do at any cost — like monitoring 10,000 data streams simultaneously).',
            'The most common mistake in agent ROI calculations is ignoring the "shadow costs": the engineering time to build and maintain the agent, the cost of handling agent errors, the opportunity cost of the team building the agent instead of other features, and the organizational change management costs.',
        ], [
            d('Direct Labor Displacement', 'FTE equivalent hours saved per month', 'Target: 100+ hours/month per agent for positive ROI'),
            d('Speed Premium', 'Revenue or cost impact from faster execution', '10-50% of total agent value in time-sensitive workflows'),
            d('Shadow Cost Ratio', 'Hidden costs as percentage of visible agent costs', '30-100% — meaning true costs are 1.3-2x visible costs'),
        ], 'Calculate the full ROI for your proposed agent including all shadow costs. Compare the 6-month, 12-month, and 24-month ROI projections.', [
            'Quantified direct labor displacement in hours and dollars',
            'Estimated speed premium value',
            'Calculated shadow costs at 50% and 100% of visible costs',
            'Built 6/12/24-month ROI projections',
        ]),
        l('The Agent Maturity Model', [
            'Organizations progress through five stages of agent adoption: Experimentation (individual contributors using AI assistants), Departmental (team-level agents for specific workflows), Integrated (agents connected to business systems), Orchestrated (multi-agent systems coordinating complex workflows), and Autonomous (self-improving agent ecosystems).',
            'Each stage roughly requires 2-3x the investment of the previous stage but can deliver 5-10x the value. Most organizations are currently between Stage 1 and Stage 2. The companies that will win the next decade are the ones that reach Stage 4 first.',
            'The economic insight: don\'t try to jump stages. Each stage builds the governance, infrastructure, and organizational muscle needed for the next. Companies that try to go from Stage 1 to Stage 4 directly typically fail catastrophically — building autonomous systems without the monitoring and governance infrastructure of Stage 3 is a recipe for expensive disasters.',
        ], [
            d('Stage Investment Multiplier', 'Cost increase per maturity stage', '2-3x per stage, total ~20-50x from Stage 1 to Stage 5'),
            d('Stage Value Multiplier', 'Value increase per maturity stage', '5-10x per stage when done correctly'),
            d('Stage Duration', 'Time to progress between stages', '3-6 months per stage for aggressive adopters'),
        ], 'Assess your organization\'s current agent maturity stage. Create a realistic 18-month roadmap to advance one stage, including budget requirements.'),
        l('Agent Economics Case Studies', [
            'Case Study 1: A Series B SaaS company deployed a customer support agent at Level 2 autonomy. Initial investment: $45K (3 engineer-months). Monthly operating cost: $2,800. Monthly value: $28,000 in displaced support costs + $12,000 in faster resolution revenue. ROI: 830% in year one.',
            'Case Study 2: A PE-backed logistics company attempted Level 4 agent automation for route optimization. Investment: $500K. Result: The agent made a routing error that cost $180K in a single incident. After adding proper guardrails ($120K additional), the system now saves $800K/year. Lesson: verification infrastructure isn\'t optional — it\'s the price of admission.',
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
        modules[`ai-agent-architecture/${mod.id}`] = m(mod.id, mod.title, `Deep-dive into ${mod.title.toLowerCase()} — quantifying costs, benchmarking performance, and building executive-ready frameworks.`, 'AI Agent Architecture & Economics', [
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

    modules['agentic-automation/20-1'] = m('20-1', 'From RPA to Agentic Automation', 'The leap from robotic process automation to intelligent agent automation — and why it changes every ROI calculation.', 'Agentic Process Automation Economics', [
        'Understand why RPA hit its ceiling at $15B market cap',
        'Calculate the intelligence premium of agentic automation',
        'Identify the first 5 processes to automate with agents',
        'Build a business case that separates agents from traditional automation',
    ], [
        l('The RPA Ceiling & The Agentic Leap', [
            'RPA automated the mechanical — clicking buttons, moving data between systems, filling forms. It works brilliantly for structured, deterministic processes. But it fails catastrophically when processes require judgment, context, or handling of edge cases.',
            'Agentic process automation crosses the intelligence threshold. Instead of following a script, agents understand intent, handle exceptions, and learn from outcomes. The economic difference is staggering: RPA handles 60-70% of process volume (the easy cases), while agents can handle 85-95% (including edge cases that previously required human judgment).',
            'The market opportunity is clear: the $15B RPA market is being disrupted by a $100B+ agentic automation market. Companies that made the transition early are seeing 3-5x the ROI of their RPA investments.',
        ], [
            d('RPA Coverage Rate', 'Percentage of process volume RPA can handle', '60-70% for structured processes'),
            d('Agent Coverage Rate', 'Percentage of process volume agents can handle', '85-95% including edge cases'),
            d('Intelligence Premium', 'Additional value from agent judgment vs RPA scripting', '2-4x the value of equivalent RPA automation'),
        ], 'Audit your existing RPA deployments. For each, estimate the coverage rate and calculate the incremental value of moving to agentic automation.'),
        l('Process Discovery for Agent Automation', [
            'Not every process should be automated with agents. The process discovery framework scores candidates on four dimensions: Volume (how often does it happen?), Judgment Complexity (how much human decision-making is involved?), Error Impact (what happens when it goes wrong?), and Data Availability (does the agent have access to the information it needs?).',
            'The sweet spot is high-volume, medium-complexity processes where errors are recoverable. Customer support ticket triage, invoice processing, and code review are classic examples. Avoid starting with low-volume, high-complexity processes where errors are catastrophic (medical diagnoses, financial trading) — save those for when your governance infrastructure is mature.',
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
            'When a traditional software system fails, the error is deterministic — the same input always produces the same wrong output. When an AI agent fails, the error is probabilistic — it might work 99 times and fail catastrophically on the 100th. This fundamentally changes the economics of quality assurance.',
            'The trust problem has three dimensions: factual accuracy (is the agent\'s output true?), contextual appropriateness (is the action correct for this specific situation?), and alignment (does the agent\'s action serve the organization\'s interests?). Each dimension requires different verification infrastructure, and each has different cost profiles.',
            'Exogram\'s approach — building a verification layer between AI models and applications — represents the emerging architecture pattern: don\'t trust the model, verify the output. This "trust but verify" approach adds 5-15% to operating costs but reduces error costs by 80-95% — a clear economic winner.',
        ], [
            d('Probabilistic Error Rate', 'Percentage of agent actions that produce incorrect results', '1-5% for well-designed agents, but impact can be catastrophic'),
            d('Verification Infrastructure Cost', 'Annual cost of truth verification systems', '5-15% of total agent operating budget'),
            d('Error Cost Reduction', 'Reduction in error-related costs after verification deployment', '80-95% for factual accuracy errors'),
        ], 'Audit your current AI deployments for trust gaps. Identify the top 3 areas where verification infrastructure would have the highest ROI.'),
        l('Verification vs Validation: The Agent Governance Distinction', [
            'Validation asks "did we build the right thing?" — an upfront, design-time activity. Verification asks "is this specific output correct?" — a runtime, continuous activity. For agents, verification is the economic differentiator.',
            'Traditional AI governance focuses on validation: testing models before deployment, benchmarking accuracy, running evaluations. This is necessary but insufficient for agents that operate autonomously. An agent that passed all validation tests can still produce harmful outputs in production when it encounters edge cases not covered by the test suite.',
            'Runtime verification — checking each agent output against ground truth sources, business rules, and safety constraints before allowing it to take effect — is the governance pattern that makes enterprise agent deployment economically viable. The cost is real (5-15% of operating budget), but the alternative — unverified autonomous actions — is economically untenable.',
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
    for (let i = 0; i < track21Modules.length; i++) {
        const mod = track21Modules[i];
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
            'As an individual contributor, your value equation is simple: hours worked × skill level × complexity of problems = value produced. As a leader, the equation fundamentally changes: team size × team capability × team alignment × organizational leverage = value produced. Your personal output is now a rounding error.',
            'The math is uncomfortable but undeniable. A senior engineer producing $500K in direct value can, as a leader of 8 engineers, multiply their team\'s output by 20-40%. That\'s $800K-$1.6M in value created — but only if they stop doing and start enabling.',
            'The most expensive leaders are the ones who can\'t let go. A Director who spends 30% of their time writing code is costing the organization the difference between their code output (~$150K in value) and the leadership leverage they\'re not providing (~$800K in team uplift). That\'s a $650K opportunity cost.',
        ], [
            d('Leadership Multiplier', 'Percentage uplift in team output attributable to effective leadership', '20-40% for strong leaders, -10% to 0% for weak ones'),
            d('IC Time Tax', 'Value lost when leaders do IC work instead of leading', '$400K-$800K/year for a Director-level leader'),
            d('Team Capability Uplift', 'Skill improvement rate of team members under effective leadership', '15-25% per year in measurable competency growth'),
        ], 'Calculate your current leadership multiplier. Track how you spend your time this week — categorize every hour as IC work, management overhead, or leadership leverage.', [
            'Tracked time for one full week',
            'Categorized hours into IC/Management/Leadership',
            'Calculated current vs potential leadership multiplier',
            'Identified top 3 IC activities to delegate',
        ]),
        l('The Training Gap: Why We Get Managers, Not Leaders', [
            'Companies invest heavily in technical training for junior employees: bootcamps, certifications, onboarding programs, mentorship. Then they promote the best performers into management roles with virtually zero training on how to actually lead.',
            'The economic impact is staggering. A study by Gallup found that companies fail to choose the right candidate for manager 82% of the time. The cost? Organizations with poor management see 18% lower productivity, 16% lower profitability, and 37% higher absenteeism.',
            'The fix is economic: investing $10K-$25K in leadership development per newly-promoted manager yields 2-5x returns within 12 months through reduced attrition, higher team productivity, and better decision-making. Yet most companies spend $0 — and then wonder why their new managers struggle.',
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
        modules[`strategic-leadership/${mod.id}`] = m(mod.id, mod.title, `The economics of ${mod.title.toLowerCase()} — quantified frameworks for leaders who want to multiply, not just manage.`, 'Strategic Leadership Economics', [
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

    modules['executive-presence/23-1'] = m('23-1', 'Executive Presence as Economic Asset', 'Executive presence isn\'t charisma — it\'s credibility capital. This module teaches you to build and deploy it as a measurable asset.', 'Executive Presence & Board Leadership', [
        'Understand executive presence as an economic, not personality, trait',
        'Calculate the credibility premium in negotiations and decisions',
        'Map the components of presence to measurable business outcomes',
        'Build a 90-day presence development plan',
    ], [
        l('Presence as Credibility Capital', [
            'Executive presence isn\'t about commanding a room with force of personality. It\'s about the credibility premium — the measurable increase in decision acceptance, negotiation outcomes, and organizational follow-through that comes from being perceived as competent, confident, and trustworthy.',
            'Research from the Center for Talent Innovation shows that executive presence accounts for 26% of what it takes to get promoted to senior leadership. In economic terms, the presence premium can be worth $200K-$500K in total compensation difference between leaders with strong vs. weak executive presence at the VP/C-suite level.',
            'The three pillars of executive presence are: Gravitas (40% — how you think and decide), Communication (30% — how you speak and present), and Appearance (30% — how you show up). Each is trainable, measurable, and has a direct economic impact on your career trajectory and organizational outcomes.',
        ], [
            d('Presence Premium', 'Compensation difference between leaders with strong vs weak executive presence', '$200K-$500K at VP/C-suite level'),
            d('Decision Acceptance Rate', 'Percentage of proposals approved by leaders with strong presence', '2-3x higher than leaders with weak presence'),
            d('Promotion Correlation', 'How much executive presence contributes to senior promotion decisions', '26% of the promotion decision per CTI research'),
        ], 'Rate yourself on the three pillars of executive presence (Gravitas, Communication, Appearance) on a 1-10 scale. Identify your lowest pillar and create a 30-day improvement plan.'),
        l('Board Communication Economics', [
            'The average board meeting costs $50,000-$150,000 when you factor in the hourly rates of all participants. Every minute of confused discussion, every follow-up question caused by unclear presentation, every decision delayed because the board didn\'t understand the technical implications — it all has a cost.',
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
