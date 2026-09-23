import { CurriculumModule, Lesson, LessonDetail, m, l, d } from './curriculum-data';

export const agenticGovernanceModules: Record<string, CurriculumModule> = {};

const t58 = 'Track 58  -  Governance for Agentic AI';
const t1 = 'Track 1  -  Engineering Economics';
const t2 = 'Track 2  -  AI AI Economics';

const singleProduct = 'single_track'; // $149.00 per-track payment gateway product

// ---------------------------------------------------------
// TRACK 58: GOVERNANCE FOR AGENTIC AI
// ---------------------------------------------------------

agenticGovernanceModules['agentic-governance/58-1'] = {
    moduleId: '58-1',
    title: 'The Rise of Shadow Agents: Why Your Next Data Breach Will Be Automated',
    description: 'Understand the existential threat of unmonitored human-spun LLM actors with API keys acting autonomously inside your corporate network.',
    trackName: t58,
    productId: singleProduct,
    takeaways: [
        'Identify Shadow Agents deployed by non-technical staff using platforms like Zapier or AutoGPT.',
        'Calculate the financial and regulatory exposure of a single compromised agentic token.',
        'Implement an API gateway stranglehold mapping identity back to human actors.'
    ],
    lessons: [
        l(
            'Lesson 1: Anatomy of a Shadow Agent',
            'A shadow agent is an autonomous LLM workflow operating inside a corporate environment without IT oversight. Unlike "Shadow IT" (a marketing team buying a SaaS tool), a Shadow Agent has active execution capabilities: it reads emails, writes to databases, and triggers external API calls. When a junior PM wires Claude to their Slack and Salesforce via Make.com with a broad API key, they have created a Shadow Agent. If that agent faces a prompt-injection attack, it will systematically dump your CRM data directly into a malicious endpoint at machine speed. The blast radius is instantaneous, unmonitored, and devastating.',
            [
                d('Execution Speed', 'Agents execute loop functions at millisecond latency. A human breach takes hours to navigate directories; an agent takes seconds.', 'Target: Throttle external API egress to 5req/sec.'),
                d('Permission Sprawl', 'Non-developers default to granting "Full Access" or "Admin" permissions to OAuth tokens to avoid configuration errors.', 'Audit: 90% of shadow agents hold excessive privileges.'),
                d('Provenance Breakage', 'System logs show API calls from "Unknown OAuth Client", making it impossible to terminate the specific rogue session without shutting down the entire platform.', 'Target: 100% human-to-agent identity mapping.')
            ],
            'Audit your current OAuth integration logs in Google Workspace or Office 365. Identify 3 third-party applications granted "Read/Write" access by non-engineering employees.'
        ),
        l(
            'Lesson 2: The Economic Cost of the "Claude Mythos" Leak',
            'In 2026, the "Claude Mythos" scenario shifted agentic governance from a theoretical worry to a boardroom crisis. The financial impact of a machine-speed data exfiltration event goes beyond regulatory fines; it permanently damages enterprise trust. The cost of a Shadow Agent breach is calculated by: (Number of accessible records) × ($164 average cost per breached record) + (Cost of emergency incident response) + (Revenue churn). A simple unmonitored Python script running an OpenAI loop that gets hijacked can cost a mid-sized enterprise $4.2M in a single afternoon.',
            [
                d('Incident Response Cost', 'Emergency forensic teams charge premium rates to trace LLM behavior since standard network logs rarely capture prompt payloads.', 'Target: <$50K (via pre-configured agentic logging)'),
                d('Regulatory Fines', 'GDPR and the EU AI Act impose severe penalties for algorithmic negligence, often up to 4% of global revenue.', 'Benchmark: Continuous compliance posture.'),
                d('Downtime Economics', 'When an agent goes rogue, the typical panic response is to revoke all organization API keys, halting legitimate production workloads.', 'Cost: $10K+ per minute of forced downtime.')
            ],
            'Calculate the potential cost of an agentic breach in your organization assuming an agent accesses your primary customer table and is active for 5 minutes before discovery.'
        ),
        l(
            'Lesson 3: Establishing the Threat Prevention Layer',
            'To survive the era of autonomous agents, you must implement a Threat Prevention Layer (TPL). A TPL acts as a deterministic firewall sitting between LLM reasoning and system execution. It intercepts tool-use calls, validates them against strict JSON schemas, and enforces rate limits and zero-trust policies before the execution layer processes the command. If an agent hallucinates a `DROP TABLE` command, the TPL blocks it deterministically.',
            [
                d('Schema Enforcement', 'Validating every LLM output against a strict JSON schema before execution.', 'Target: 100% rigid schema adherence.'),
                d('Rate Limiting', 'Capping the number of autonomous actions an agent can take per minute to minimize damage from infinite loops.', 'Benchmark: Max 10 state-mutating actions/min.'),
                d('Human-in-the-Loop (HITL)', 'Mandating explicit human approval for high-risk executions (e.g., money transfers, mass deletions).', 'Target: 100% approval rate for Tier-1 risks.')
            ],
            'Design a JSON schema for a "Send Email" tool that restricts the recipient domain to internal company addresses only.'
        )
    ],
    nextHref: '/vault/curriculum/tracks/agentic-governance/58-2'
};

agenticGovernanceModules['agentic-governance/58-2'] = {
    moduleId: '58-2',
    title: 'Boundary Control & RBAC for AI',
    description: 'How to implement rigid Role-Based Access Control specifically tailored for autonomous LLM agents.',
    trackName: t58,
    productId: singleProduct,
    takeaways: [
        'Differentiate between Human RBAC and Agentic RBAC constraints.',
        'Build isolated execution environments (sandboxes) for agent operations.',
        'Implement "Least Privilege" token scoping for LLM tool usage.'
    ],
    lessons: [
        l(
            'Lesson 1: The Failure of Human RBAC for Agents',
            'Traditional Role-Based Access Control (RBAC) assumes a human user navigating a UI, where interface friction naturally limits the speed and scope of actions. When you assign human RBAC profiles to an autonomous agent, you weaponize its efficiency. An agent doesn\'t click through menus; it enumerates API endpoints concurrently. Giving an agent your "Admin" token means giving it the ability to delete 10,000 users in 4 seconds if its prompt is hijacked. Agentic RBAC requires a fundamentally different architecture: Scoped Ephemeral Tokens.',
            [
                d('Token Ephemerality', 'Agent tokens should expire within minutes, not days. Unlike a human session cookie, an agent completes its task instantly.', 'Target: 5-minute maximum TTL for agent tokens.'),
                d('Action-Level Scoping', 'Agents should rarely have wildcards (`*`). Give an agent `users:read`, never `users:*`.', 'Benchmark: 0% wildcard permissions for autonomous actors.'),
                d('Contextual Validation', 'Even if the token is valid, the action must make sense in the context of the user prompt.', 'Target: Algorithmic intent-matching before execution.')
            ],
            'Audit your service account permissions. Identify the generic service accounts that multiple scripts or auto-agents are sharing, and sketch a plan to break them into scoped, single-purpose roles.'
        ),
        l(
            'Lesson 2: Execution Sandboxing',
            'Never execute code written by an LLM in your core infrastructure. Whether it is "Vibe Coding" output or an autonomous agent writing Python to solve a problem, all agent-generated code must run in a secure sandbox (like Docker, Firecracker microVMs, or WebAssembly isolates). The sandbox must have strictly controlled egress networking - meaning the agent cannot reach out to the broader internet or local network unless explicitly permitted. If the agent writes malicious code, the sandbox containment prevents horizontal escalation.',
            [
                d('Egress Control', 'Network boundaries enforced at the container level. Prevent the agent from calling home or scanning internal IP ranges.', 'Target: Zero default egress from agent execution environments.'),
                d('Resource Quotas', 'CPU, memory, and timeout limits to prevent denial-of-service via infinite loops (e.g., `while(true)`).', 'Benchmark: Max execution time of 10 seconds per generated script.'),
                d('Ephemeral Environments', 'The sandbox must spin up fresh for the execution and be instantly destroyed afterward, leaving no state behind.', 'Target: <100ms startup time (e.g., using Firecracker).')
            ],
            'Choose a sandboxing technology for your stack (e.g., Deno Deploy for JS, isolated Docker for Python) and document the network rules required to prevent horizontal access while allowing the agent to function.'
        ),
        l(
            'Lesson 3: Cryptographic Provenance',
            'When an action is taken in your system, you must be able to prove chronologically whether a human clicked the button or an agent fired the API. Cryptographic provenance involves signing agentic requests with a specific "Machine Identity" key that is irrevocably tied to the human who invoked the workflow. If an agent hallucinates and deletes a production database, the audit log must definitively show the exact prompt that triggered the agent, the human who issued the prompt, and the exact tool-call payload.',
            [
                d('Identity Chain', 'Request -> Human Auth Token -> Agent Service Token -> Executed Action.', 'Target: 100% correlation in CloudTrail or Datadog logs.'),
                d('Immutable Audit Logs', 'Logs that cannot be altered or deleted by the agent itself.', 'Benchmark: WORM (Write-Once-Read-Many) storage for all agent invocations.'),
                d('Prompt Retention', 'Storing the exact input prompt alongside the execution log for forensic analysis.', 'Target: 30-day minimum retention for all state-mutating prompt pairs.')
            ],
            'Review your APM or logging setup. Determine if you can currently distinguish an API call made by your frontend UI versus an API call made by an internal webhook or agent.'
        )
    ],
    nextHref: '/vault/curriculum/tracks/agentic-governance/58-3'
};

agenticGovernanceModules['agentic-governance/58-3'] = {
    moduleId: '58-3',
    title: 'Kill Switches & Graceful Degradation',
    description: 'Design deterministic panic buttons to instantly halt rogue AI behavior without taking down core enterprise infrastructure.',
    trackName: t58,
    productId: singleProduct,
    takeaways: [
        'Engineer hard-stop kill switches independent of the LLM control plane.',
        'Implement Graceful Degradation to keep apps running when the AI is killed.',
        'Understand the blast radius of mass token revocation.'
    ],
    lessons: [
        l(
            'Lesson 1: The Deterministic Kill Switch',
            'A kill switch for an AI agent cannot be a prompt that says "Stop what you are doing." LLMs are probabilistic; they might ignore the prompt, hallucinate an exception, or get caught in a reasoning loop. A true kill switch is a deterministic, infrastructure-level circuit breaker. It operates at the API Gateway or Identity Provider layer. When pulled, it instantly invalidates the agent’s Service Account token or severs the egress connection to the LLM provider (like OpenAI or Anthropic). The kill switch must be accessible to humans via a single click and triggerable programmatically via anomaly detection.',
            [
                d('Time-to-Halt', 'The time elapsed between pulling the kill switch and the complete cessation of all agent actions.', 'Target: < 500 milliseconds.'),
                d('Independent Control Plane', 'The kill switch infrastructure must not rely on the same infrastructure the agent is running on.', 'Benchmark: Distinct IAM and hosting separation.'),
                d('Granularity', 'The ability to kill a specific agent workflow without shutting down the entire platform\'s AI capabilities.', 'Target: Session-level or User-level kill isolation.')
            ],
            'Trace the execution path of your most autonomous feature. Identify the single choke point (e.g., an API gateway or message broker) where you could install a hard circuit breaker.'
        ),
        l(
            'Lesson 2: Anomaly Detection and Auto-Tripping',
            'Humans are too slow to stop machine-speed damage. Your kill switch must be wired to anomaly detection thresholds. If an agent normally reads 10 records a minute, and suddenly requests 10,000 records, the circuit breaker should trip automatically. This requires strict baseline profiling of normal agent behavior. Think of it like a credit card fraud alert system for AI operations. You monitor token burn rate, API call frequency, error rates, and schema violations.',
            [
                d('Rate Spike Detection', 'Tripping the breaker when API velocity exceeds standard deviations from the norm.', 'Target: Auto-trip on 300% velocity spike over a 10-second window.'),
                d('Cost Thresholds', 'Hard limits on the dollar amount of API inference an agent can consume in an hour.', 'Benchmark: "Budget exhausted" -> Hard stop payload return.'),
                d('Repetitive Failure Blocks', 'If an agent attempts a forbidden action 3 times, trip the switch.', 'Target: Prevent brute-force prompt injection loops.')
            ],
            'Define three anomaly thresholds for an theoretical customer support agent (e.g., max emails sent per minute, max refunds issued per day, max token spend per hour).'
        ),
        l(
            'Lesson 3: Graceful Degradation (The Fallback Pattern)',
            'When the kill switch is tripped, or when the LLM provider goes down (e.g., OpenAI outage), your application must not crash. Graceful degradation is the engineering practice of falling back to a deterministic, non-AI experience. If the AI customer support agent is killed, the chat widget should automatically route the user to a static FAQ or open a human support ticket. The user experience degrades safely rather than throwing a 500 Internal Server Error or a timeout blank screen.',
            [
                d('Fallback Latency', 'The time it takes to serve the non-AI fallback when the primary AI path fails.', 'Target: < 1 second. Hide the failure from the user.'),
                d('State Preservation', 'Ensuring that whatever context the user provided is saved so the fallback (or a human) can pick it up.', 'Benchmark: 100% of chat logs persisted before failure.'),
                d('UI/UX Communication', 'Transparently informing the user that the AI is unavailable without surfacing technical stack traces.', 'Target: Friendly, clear error messaging ("Our AI assistant is currently stepping away...").')
            ],
            'Review a core AI feature in your product. Map out the exact UX flow for what an end-user will see and do if the LLM API returns a 503 Service Unavailable.'
        )
    ],
    nextHref: '/vault/curriculum/tracks/agentic-governance/58-4'
};

agenticGovernanceModules['agentic-governance/58-4'] = {
    moduleId: '58-4',
    title: 'Mitigating Agentic Drift',
    description: 'Stop the gradual deviation of autonomous AI from its core objective over long-running iterative tasks to prevent catastrophic failure loops.',
    trackName: t58,
    productId: singleProduct,
    takeaways: [
        'Diagnose the symptoms and causes of LLM goal misinterpretation over time.',
        'Implement strictly bounded feedback loops and execution epochs.',
        'Use objective validator routines to automatically reset drifting context.'
    ],
    lessons: [
        l(
            'Lesson 1: The Anatomy of Agentic Drift',
            'Agentic drift occurs when an autonomous agent, executing a multi-step iterative task, gradually shifts away from its original objective. Because LLMs autoregressively generate tokens based on the immediate past context window, earlier instructions (the initial prompt) slowly lose attention weight as the context fills with recent thoughts, tool outputs, and errors. An agent tasked with "Refactor this single function for performance" might encounter a typing issue, try to fix it, alter a global type definition, break five other files, and spend the next hour trying to fix the entire codebase. This is drift. It wastes massive inference costs and destroys production stability.',
            [
                d('Context Decay', 'The phenomenon where the system prompt loses attention influence as the context window approaches its limit.', 'Target: Hard-refresh context every 5 execution turns.'),
                d('Error Fixation loops', 'The agent gets stuck trying to solve a peripheral error, losing sight of the main goal.', 'Benchmark: Force-quit after 3 consecutive identical tool-use failures.'),
                d('Scope Creep', 'The agent autonomously decides to "improve" things not requested in the prompt.', 'Target: Strict adherence via explicit "DO NOT" boundary instructions.')
            ],
            'Review an AI coding assistant\'s output logs (like GitHub Copilot Workspace or Devin). Identify an instance where the agent started optimizing a file unrelated to your original request. That is Agentic Drift.'
        ),
        l(
            'Lesson 2: Execution Epochs and Anchoring',
            'To prevent drift, you cannot let an agent run indefinitely on a single massive context thread. You must break execution into "Epochs." An epoch is a bounded loop of reasoning and action (e.g., 5 steps max). At the end of an epoch, the agent must summarize its progress. A master orchestration process then injects the original core objective back into the forefront of a fresh context window, along with the summary. This structural "Anchoring" forces the agent to explicitly re-align its next steps with the primary goal, clearing out the noisy cognitive overhead of the past epoch.',
            [
                d('Epoch Bounding', 'Setting a hard limit on the number of tool invocations an agent can make before requiring an objective reset.', 'Target: 5 to 7 turns maximum per epoch.'),
                d('Summary Compression', 'Having an LLM summarize its state to save token space and remove noisy error logs before continuing.', 'Benchmark: 80% reduction in context payload between epochs.'),
                d('System Prompt Reinjection', 'Placing the original prime directive at the very bottom of the prompt array (closest to generation) to maximize attention weight.', 'Target: 100% rigid objective anchoring.')
            ],
            'Design an architecture where an agent is blocked from taking more than 5 actions without summarizing its progress and verifying it against the original task description.'
        ),
        l(
            'Lesson 3: The Validator Agent Pattern',
            'Do not trust an agent to evaluate its own progress. An agent suffering from drift will hallucinate that it is succeeding. Implement a separate "Validator Agent" (a smaller, cheaper model like Claude 3 Haiku or GPT-4o-mini). The Validator is given the original human objective and the primary agent\'s latest turn output. The Validator\'s only job is to answer: "Is the primary agent making logical progress toward the goal? (Yes/No)". If the Validator says No, it trips an alert or forces the primary agent to rollback to a previous state. This multi-agent adversarial check ensures objective alignment.',
            [
                d('Validator Cost Offset', 'Using a fast, cheap model for validation prevents the governance mechanism from doubling your API costs.', 'Target: Validator cost should be <10% of main agent cost.'),
                d('Rollback State', 'Saving the filesystem or database state at the start of each epoch so the agent can be reverted if it drifts.', 'Benchmark: Snapshotting capabilities at every turn marker.'),
                d('Objective Alignment', 'The mathematical consistency of the agent\'s actions aligning with the human prompt.', 'Target: 0% divergence via Validator enforcement.')
            ],
            'Write the system prompt for a Validator Agent whose sole purpose is to evaluate if a coding agent has strayed from its narrowly defined refactoring task.'
        )
    ],
    nextHref: '/vault/curriculum/tracks/agentic-governance/58-5'
};

agenticGovernanceModules['agentic-governance/58-5'] = {
    moduleId: '58-5',
    title: 'ROI of Deterministic Execution',
    description: 'Calculate the hard financial metrics proving why investing in production-grade AI governance yields higher returns than raw AI capability expansion.',
    trackName: t58,
    productId: singleProduct,
    takeaways: [
        'Calculate the Cost of Predictivity against raw inference burn rates.',
        'Model the financial impact of hallucination events in production.',
        'Prove to leadership that governance is an R&D accelerator, not a blocker.'
    ],
    lessons: [
        l(
            'Lesson 1: The Cost of Predictivity',
            'In AI economics, "Predictivity" is the likelihood that an LLM output will execute correctly on the first try. Un-governed AI has low predictivity, forcing engineers to write massive amounts of retry logic, prompt engineering, and manual human-in-the-loop review. The Cost of Predictivity is the financial gap between raw API token costs and the total loaded engineering cost required to make that API output safe enough for enterprise production. When you implement deterministic execution (Threat Prevent Layers, Schemas, Validators), you dramatically reduce the Cost of Predictivity.',
            [
                d('Raw Inference Cost', 'The baseline price paid to OpenAI/Anthropic per 1,000 tokens.', 'Benchmark: $1.00 - $15.00 per 1M tokens.'),
                d('Loaded Execution Cost', 'The true cost to the business to achieve a successful task completion. Includes retry loops, engineer review time, and integration maintenance.', 'Target: Keep Loaded Cost < 3x Raw Inference Cost.'),
                d('Predictivity ROI', 'The engineering hours saved by shifting from probabilistic guessing to deterministic schema adherence.', 'Target: 40% reduction in QA and review cycles.')
            ],
            'Calculate the loaded execution cost for a single "AI-generated report" feature in your app. Factor in the API cost, the failure rate, and the engineering salary cost of maintaining the prompt pipelines.'
        ),
        l(
            'Lesson 2: Quantifying Hallucination Risk',
            'A hallucination is not a technical bug; it is a financial liability. To secure budget for AI governance, you must model hallucination risk exactly like a CFO models security or legal risk. If your customer support agent confidently offers a user a 90% discount because it misread the policy (as famously happened to Air Canada), the company is financially liable. The formula is: (Probability of Hallucination) × (Volume of Invocations) × (Average Dollar Impact of Error) = Annualized Hallucination Liability. Governance tools reduce that probability to near zero by mathematically enforcing responses.',
            [
                d('Deterioration Rate', 'The baseline percentage at which the LLM returns factually incorrect information without governance guardrails.', 'Benchmark: 5-15% for complex tasks without RAG.'),
                d('Financial Exposure', 'The direct dollar cost or legal liability tied to a specific hallucinated action.', 'Target: Identify the absolute worst-case scenario for your specific use-case.'),
                d('Governance Alpha', 'The revenue protected by implementing deterministic checks before outputting the response.', 'Target: Eliminate 100% of high-impact liabilities via schema routing.')
            ],
            'Identify the most financially devastating hallucination your currently deployed AI model could make. Calculate the annualized liability assuming a 1% failure rate.'
        ),
        l(
            'Lesson 3: Pitching Governance as an Accelerator',
            'Business leadership naturally views "Governance" as red tape that slows down innovation. This is profoundly false in the era of AI. Without governance, developers spend 80% of their time playing whack-a-mole with edge cases, prompt regressions, and security alerts. Implementing a production-grade Agentic Governance framework - standardized RBAC, kill switches, and strict data schemas - creates a "Paved Road" for engineering. Teams can provision new AI features 5x faster because they don\'t have to reinvent the safety guardrails from scratch every time.',
            [
                d('Time-to-Market (TTM)', 'The duration from concept to production deployment for an AI feature.', 'Target: Reduce AI feature TTM from 6 weeks to 1 week.'),
                d('Infrastructure Reuse', 'The percentage of AI security code that is written once and reused globally across all features.', 'Benchmark: >90% code reuse via a centralized Threat Prevention Layer.'),
                d('Developer Velocity', 'The increase in feature output when developers are freed from building bespoke safety nets.', 'Target: 2x increase in feature delivery throughput.')
            ],
            'Draft a 3-point business case to your CTO explaining why investing 2 weeks of engineering time into building a global Agentic RBAC layer will save 10 weeks of collective effort over the next 6 months.'
        )
    ],
    nextHref: '/vault/curriculum/tracks/agentic-governance/58-6'
};

agenticGovernanceModules['agentic-governance/58-6'] = {
    moduleId: '58-6',
    title: 'The Systems Governor: Operationalizing Non-Deterministic Boundary Control',
    description: 'Install the executive control plane closing the enterprise risk vacuum between probabilistic AI agent inference and deterministic execution.',
    trackName: t58,
    productId: singleProduct,
    takeaways: [
        'Differentiate why CISOs, VPs of Engineering, CPOs, and Legal fail to govern autonomous agents.',
        'Implement the 4 operational pillars: execution boundaries, state integrity, cryptographic audit ledgers, and financial liability metrics.',
        'Establish the Systems Governor reporting cadence directly to the CIO or CEO.'
    ],
    lessons: [
        l(
            'Lesson 1: The Enterprise Governance Vacuum',
            'When an enterprise deploys 40 autonomous agents across customer service, legal review, financial analysis, and engineering workflows, they hold production database credentials and API keys. But who is responsible when one of them takes a destructive action? The CISO protects network perimeters, but agents live inside the perimeter. The VP of Engineering tests deterministic code, but agents are probabilistic. The CPO owns product roadmaps, not autonomous actors. Legal owns static compliance, not runtime hallucination liability. This creates a dangerous executive vacuum. You cannot manage probabilistic actors with deterministic org charts.',
            [
                d('Perimeter Blindness', 'Traditional firewalls and WAFs cannot detect an agent executing an authorized API command with an unauthorized hallucinated payload.', 'Audit: 100% of internal agent calls bypass perimeter security.'),
                d('Probabilistic Drift', 'Code that passed unit tests 5 minutes ago can take an entirely different execution path when prompted with an ambiguous customer edge case.', 'Benchmark: Zero unmonitored runtime autonomy.'),
                d('Accountability Deadlock', 'In an outage, Engineering blames model alignment, Security blames tool access, and Product blames prompt instructions.', 'Target: Single designated executive owner.')
            ],
            'Audit your organization chart. Identify who technically and legally signs off on the actions taken by an autonomous agent with production database write access.'
        ),
        l(
            'Lesson 2: The Four Operational Pillars',
            'The Systems Governor is a dedicated role reporting to the CIO or CEO that owns the deterministic boundary between LLM inference and system execution. This role enforces four architectural pillars: 1) Deterministic Execution Boundaries (strict permission allowlists specifying exactly which API endpoints and database operations an agent may execute), 2) State Integrity Verification (automated assertions verifying system state before and after execution), 3) Cryptographic Audit Ledgers (tamper-proof chronological records capturing input prompt, intermediate reasoning, tool payload, and result), and 4) Financial Liability Modeling (quantifying the dollar blast radius of potential agent error).',
            [
                d('Permission Allowlists', 'Deny-by-default execution boundaries. An agent can never execute arbitrary shell commands or wildcard database operations.', 'Target: 100% explicitly allowlisted tool interfaces.'),
                d('State Integrity Checks', 'Pre-flight and post-flight validation ensuring row count invariants and account balances are preserved.', 'Benchmark: Auto-rollback on invariant violation.'),
                d('Tamper-Proof Provenance', 'Machine identity signatures linking the human invoker, the agent run, and the database mutation.', 'Storage: Write-Once-Read-Many (WORM) audit trail.')
            ],
            'Draft an Admissibility Allowlist for your highest-impact agent. Define the exact JSON schema and allowed parameter ranges for every tool it can call.'
        ),
        l(
            'Lesson 3: The Systems Governor in Practice',
            'Operating as a Systems Governor requires continuous risk-adjusted monitoring. The governor models agent risk as: Risk = P(Hallucination) * Blast Radius. If an agent has a 2% hallucination rate but an unconstrained database blast radius, the annualized financial exposure is catastrophic. The Systems Governor sets automated kill switches, mandates rate governors, and presents monthly risk scorecards to the board. Without this role, autonomous AI remains an unhedged enterprise liability.',
            [
                d('Blast Radius Capping', 'Partitioning agent permissions so no single failure can impact multiple tenants or systems.', 'Target: Session-level isolation enclaves.'),
                d('Automated Circuit Breakers', 'Instantly severing token execution when error rates exceed statistical baselines.', 'Trip latency: <500 milliseconds.'),
                d('Executive Scorecard', 'Reporting agentic uptime, liability exposure, and prevented violations to the Board.', 'Frequency: Monthly executive review.')
            ],
            'Calculate the financial blast radius of your primary customer-facing agent if it were to execute a 100% discount or invalid data refund loop for 15 minutes.'
        )
    ],
    nextHref: '/vault/curriculum/tracks/agentic-governance/58-7'
};

agenticGovernanceModules['agentic-governance/58-7'] = {
    moduleId: '58-7',
    title: 'The 24/7 Software Factory & Autonomous Overproduction',
    description: 'Govern the economic dilemma where autonomous agentic code generation and hyper-cheap inference flood enterprises with unrequested code, crushing engineering organizations under review debt.',
    trackName: t58,
    productId: singleProduct,
    takeaways: [
        'Diagnose the Inflation-Deflation loop where AI expands and summarizes synthetic filler.',
        'Calculate the senior engineer payroll drag of Review Debt and human compiler fatigue.',
        'Deploy mechanical compiler gates and the prime rule: never delegate judgment to automated agents.'
    ],
    lessons: [
        l(
            'Lesson 1: The Economics of Bargain-Bin Thinking',
            'When model inference costs drop to bargain-basement rates (such as Gemini 3.8 Flash), supply explodes while human attention remains strictly finite. In traditional organizations, the friction of taking two days to draft a proposal acted as a natural filter proving the author sweated the trade-offs. When generating eight-page memos or complex pull requests costs fractions of a cent and twelve seconds of typing, the recipient responds by deflating it with another AI summary. We have built an economy where one machine inflates a thought into 2,000 words of corporate filler, and another deflates it back down to twenty words, while only cloud providers profit from the electricity.',
            [
                d('Attention Scarcity', 'When code and text supply approaches infinity, human verification attention drops to zero.', 'Economic Law: Supply abundance creates verification bottlenecks.'),
                d('Synthetic Inflation', 'Un-gated agents expand 1-sentence prompt ideas into bloated 500-line pull requests.', 'Benchmark: Reject PRs lacking verified customer problem links.'),
                d('Review Latency', 'Review queues expand exponentially when autonomous tools generate PRs 24/7.', 'Target: Maximum 24-hour review queue turnaround via strict volume caps.')
            ],
            'Audit your engineering PR review queue. How many pull requests submitted in the last 14 days were heavily generated by AI, and how many hours did senior staff spend validating them?'
        ),
        l(
            'Lesson 2: The Four Organizational Personas',
            'Organizations navigating autonomous AI fracture into four distinct behavioral personas: 1) The Panicked VP, who demands arbitrary efficiency bumps and drives middle management to create synthetic documentation theater, 2) The Exhausted Auditor, senior staff choking on Review Debt by spending 30 hours a week grading polished-looking synthetic code with hidden bugs, 3) The Quiet Operator, who avoids hype, uses AI as a junior clerk for repetitive formatting, and preserves human judgment at the boundary, and 4) The Naive Outsourcer, who automates customer-facing workflows and destroys enterprise trust with canned bots.',
            [
                d('The Review Debt Tax', 'Polished synthetic code takes twice as long to audit because errors are hidden behind flawless formatting.', 'Metric: Review time per accepted line of code.'),
                d('Documentation Theater', 'Generating risk matrices and product charters merely to show board-level AI utilization.', 'Audit: Zero value delivered from unread synthetic memos.'),
                d('Boundary Judgment', 'Letting software clean messy data while retaining human ownership of pricing, strategy, and architecture.', 'Target: 100% human accountability on production releases.')
            ],
            'Map your engineering leadership and team members to the four personas. Identify whether your organization is rewarding documentation theater or practical boundary control.'
        ),
        l(
            'Lesson 3: The Surveillance Stress of Computer-Use Agents',
            'When agents expand from chat interfaces to driving operating systems with mouse and keyboard autonomy (such as GPT-6 Astra), friction shifts to real-world edge cases: expired two-factor authentication tokens, mismatched dropdown codes, and unstructured invoice images. Lacking human common sense, the agent guesses. The manual labor of typing is replaced by the pure stress of surveillance: engineers hovering over keyboards hoping the agent does not execute destructive actions. Sustainable engineering teams enforce mechanical compiler gates and strict session boundaries before handing over autonomy.',
            [
                d('Surveillance Overhead', 'The cognitive anxiety of watching autonomous desktop loops without deterministic guarantees.', 'Target: Zero unattended write access to production environments.'),
                d('Mechanical Compiler Gates', 'Automated linters, type checkers, and test runners that block PR assignment until passes are green.', 'Benchmark: 60% review time saved by automated gate rejection.'),
                d('Deprecation Primacy', 'When creating code is free, organizational value is created by deleting dead code and pruning zombie features.', 'Metric: Deprecated lines of code per sprint.')
            ],
            'Configure an automated GitHub Actions pre-flight gate that runs type checking and unit tests before any AI-generated PR can be assigned to a human reviewer.'
        )
    ],
    nextHref: '/vault/curriculum/tracks'
};

// ---------------------------------------------------------
// TRACK 1 UPDATE: GOVERNING VIBE CODING
// ---------------------------------------------------------

agenticGovernanceModules['engineering-economics/1-16'] = {
    moduleId: '1-16',
    title: 'Governing Vibe Coding & AI-Assisted Output',
    description: 'Master the economics of AI-generated code. Balance the explosive velocity of "Vibe Coding" against the compounding interest of technical debt.',
    trackName: t1,
    productId: singleProduct,
    takeaways: [
        'Understand the specific type of design debt created by LLM-assisted generation.',
        'Implement automated quality gates to review AI pull requests.',
        'Calculate the lifetime maintenance cost of "free" AI code.'
    ],
    lessons: [
        l(
            'Lesson 1: The Economics of Generative Debt',
            '"Vibe Coding" allows junior engineers and even non-technical founders to spin up full-stack applications in hours using Cursor or Copilot. The velocity is intoxicating, but the economics are brutal. LLMs do not write maintainable, architecturally sound systems; they write highly localized, naive implementations that satisfy the immediate prompt. This generates a new class of technical liability called "Generative Debt." When you accept thousands of lines of AI output without understanding it, you trade upstream typing time for downstream debugging nightmares. The cognitive load to reverse-engineer AI spaghetti code often eclipses the time it would have taken to write it properly from scratch.',
            [
                d('Generation vs Maintenance', 'AI makes code generation nearly free, shifting 90% of the cost to maintenance and reading.', 'Target: Measure review time, not lines of code written.'),
                d('Architectural Degradation', 'LLMs default to monolithic, unscalable patterns unless explicitly architected via highly rigid prompt constraints.', 'Benchmark: Enforce strict separation of concerns via linters.'),
                d('The "Ownership" Gap', 'If the AI wrote it, no human understands how it connects to the broader system, leading to hyper-fragile deployments.', 'Target: Mandatory human-led architecture reviews for all AI-generated PRs.')
            ],
            'Review a recent pull request heavily generated by AI. Identify two architectural decisions made by the LLM that do not align with your broader codebase standards.'
        ),
        l(
            'Lesson 2: Quality Gates for AI Outputs',
            'You cannot govern Vibe Coding by telling developers to "be careful." You must implement algorithmic quality gates in your CI/CD pipeline tailored specifically to catch LLM anti-patterns. This includes strict cyclomatic complexity checks, duplicate code detection (LLMs famously repeat themselves), and automated security linting for hallucinated dependencies. If the AI hallucinates a non-existent NPM package name, a threat actor can register it and hijack your build. Your CI/CD must block these PRs deterministically before they reach the main branch.',
            [
                d('Dependency Auditing', 'Scanning `package.json` for hallucinated or malicious external libraries.', 'Target: 100% automated dependency lockfile validation.'),
                d('Complexity Thresholds', 'Blocking functions that exceed strict cognitive complexity limits, preventing LLM spaghetti logic.', 'Benchmark: Max cyclomatic complexity of 10 per function.'),
                d('Test Coverage Mandates', 'AI can write code, but it must also write the tests proving the code works. Enforce branch coverage minimums.', 'Target: 80%+ branch coverage for all AI-assisted features.')
            ],
            'Implement a SonarQube, CodeClimate, or equivalent linting rule specifically designed to block functions longer than 50 lines to aggressively counter LLM verbosity.'
        ),
        l(
            'Lesson 3: The True Cost of AI Velocity',
            'To justify AI tooling (like buying $20/mo Cursor licenses for the whole team), you must accurately calculate the ROI. If developer output increases by 30%, but QA bug rates increase by 40%, you have negative enterprise velocity. The true metric is not "Lines of Code Written," but "Revenue-Generating Code Deployed Successfully." Track the DORA metrics (Deployment Frequency, Lead Time, Change Failure Rate, Time to Restore) specifically segmented by teams heavily utilizing Vibe Coding versus control teams. Only then can you prove the economic viability of AI acceleration.',
            [
                d('Change Failure Rate (CFR)', 'The percentage of deployments causing a failure in production. The most critical metric for AI-heavy teams.', 'Target: Keep CFR < 5% even with 2x AI velocity.'),
                d('Lead Time for Changes', 'The time from commit to production. AI speeds up the coding phase, but can bottleneck the review phase.', 'Benchmark: Ensure PR review time doesn\'t balloon to offset coding speed.'),
                d('Rethinking Developer Output', 'Shift KPIs away from story points completed toward business value realized.', 'Target: Measure Revenue Per Engineer (APER) over raw velocity.')
            ],
            'Compare the Change Failure Rate of your team from the 6 months prior to adopting AI coding tools to the 6 months after. Did velocity come at the cost of stability?'
        )
    ],
    nextHref: '/vault/curriculum/tracks/engineering-economics/1-17'
};

agenticGovernanceModules['engineering-economics/1-17'] = {
    moduleId: '1-17',
    title: 'Escaping the AI Hype Cycle: Subscription Audits & Answer Engine Moats',
    description: 'Eliminate the Software Subscription Trap, leverage the Interview Protocol, schedule overnight compute queues, and capture high-intent buyers as AI answer engines replace 10 blue links.',
    trackName: t1,
    productId: singleProduct,
    takeaways: [
        'Audit and consolidate fragmented $20-50/month micro-SaaS subscriptions into core frontier models.',
        'Deploy the Interview Protocol to eliminate casual prompt hallucinations and clarify trade-offs.',
        'Restructure technical and product documentation into direct-quote data tables for generative search engines.'
    ],
    lessons: [
        l(
            'Lesson 1: The Software Subscription Trap',
            'Over the last eighteen months, engineering and operations teams have accumulated an unsustainable sprawl of monthly micro-SaaS subscriptions: separate licenses for slide formatting, transcription, video generation, and workflow automation. These tools charge $20 to $50 per user per month for wrappers around foundation models that are now commoditized. High-margin engineering economics requires an aggressive consolidation audit: keep one primary trusted model, eliminate redundant micro-tools, and wire pay-as-you-go API connectors for infrequent tasks.',
            [
                d('Subscription Sprawl', 'Accumulating recurring credit card charges for specialized AI wrappers used infrequently.', 'Target: Consolidate to <2 core model subscriptions.'),
                d('Connector Efficiency', 'Replacing $50/mo automation platforms with lightweight plain-language webhooks.', 'Cost Reduction: Up to 80% recovered software OpEx.'),
                d('Model Commoditization', 'Using native Artifacts or Notebook workspaces to eliminate dedicated presentation and transcription apps.', 'Benchmark: Zero monthly spend on single-feature micro-SaaS.')
            ],
            'Audit your team credit card statements for recurring AI subscriptions. Identify 3 tools with overlapping capabilities that can be consolidated into your primary enterprise model contract.'
        ),
        l(
            'Lesson 2: The Interview Protocol & Overnight Compute',
            'Casual chat-box prompting fails because models optimize for polite agreeableness: making wild assumptions and returning corporate filler. The Interview Protocol forces cognitive rigor: instruct the assistant, "Before you draft a single sentence, interview me. Ask me five specific questions about my budget, target audience, and architectural constraints." Furthermore, eliminate daytime screen babysitting: queue heavy multi-document codebase synthesis and API transcript processing at 5:00 PM to run in background server queues overnight while you sleep.',
            [
                d('Cognitive Posture', 'Shifting the model from an agreeable text generator to an interrogating technical auditor.', 'Target: 5 mandatory clarifying questions before code generation.'),
                d('Constraint Clarification', 'Forcing human engineers to explicitly define budgets, performance targets, and boundary rules.', 'Benchmark: 10x reduction in prompt rework cycles.'),
                d('Overnight Batch Leverage', 'Offloading token-heavy repository evaluations to off-peak compute hours.', 'Efficiency: Zero wasted daytime engineering wait time.')
            ],
            'Use the Interview Protocol to plan your next technical RFC. Mandate 5 constraint questions before accepting any proposed architecture draft.'
        ),
        l(
            'Lesson 3: The Death of 10 Blue Links & Answer Engine Moats',
            'Traditional SEO based on keyword-stuffed articles and paid backlink schemes is collapsing as buyers turn to conversational answer engines like ChatGPT, Claude, and Perplexity for technical recommendations. While AI referral traffic represents only 0.5% to 2% of visits, it delivers 10% to 15% of qualified sales conversations because the engine pre-sells the buyer. To capture this traffic, replace generic marketing prose with literal customer questions, followed by concrete performance numbers, typical timelines, and plain comparison tables.',
            [
                d('Answer Engine Optimization (AEO)', 'Structuring content so generative models quote your technical specifications directly.', 'Target: Direct quotation in top 3 recommended solutions.'),
                d('High-Intent Conversion', 'Converting pre-sold visitors who arrive with validated budget and requirements.', 'Conversion Rate: 5x to 10x higher than legacy organic search.'),
                d('Tabular Clarity', 'Presenting pricing, SLAs, and technical trade-offs in clean HTML tables that parsers easily extract.', 'Benchmark: 100% of core metrics formatted in tabular structures.')
            ],
            'Audit your primary product documentation page. Convert two paragraphs of marketing text into a concrete comparison table answering the top customer objection.'
        )
    ],
    nextHref: '/vault/curriculum/tracks/ai-product-economics/2-16'
};


// ---------------------------------------------------------
// TRACK 2 UPDATE: ROAI AND UNIT ECONOMICS
// ---------------------------------------------------------

agenticGovernanceModules['ai-product-economics/2-16'] = {
    moduleId: '2-16',
    title: 'ROAI and AI Unit Economics',
    description: 'Translate LLM API usage, hallucination exposure, and R&D capital into predictable Return on AI metrics that CFOs will actually fund.',
    trackName: t2,
    productId: singleProduct,
    takeaways: [
        'Calculate precise Unit Economics for every AI invocation.',
        'Determine the "Collapse Point" where scale destroys SaaS margins.',
        'Shift from experimentation budgets to ROAI-driven capital allocation.'
    ],
    lessons: [
        l(
            'Lesson 1: The Disintegration of SaaS Margins',
            'Traditional SaaS operates on 80-90% gross margins because the marginal cost of computing a user action is near zero. AI products break this economic physics. Every prompt to an LLM invokes an intensive GPU inference cycle that costs real cents. If a user pays $20/month for a subscription, and runs 400 GPT-4 queries a month costing $0.05 each ($20 total), your margin is 0%. You are running a charity for OpenAI. Product Leaders must map token input/output costs, vector database storage costs, and embedding transit costs directly back to individual user pricing tiers.',
            [
                d('Cost Per Invocation (CPI)', 'The exact aggregate cost of one user action (Prompt + RAG lookup + Response generation + Logging).', 'Target: Calculate CPI down to the micro-cent.'),
                d('Margin Collapse Point', 'The specific volume of usage where a paying customer becomes unprofitable.', 'Benchmark: Establish hard usage caps or transition to consumption billing.'),
                d('Gross Margin Preservation', 'The strategic combination of caching, smaller models, and routing logic to protect the bottom line.', 'Target: Maintain >70% gross margins on AI features.')
            ],
            'Take your flagship AI feature. Determine the exact token cost for a single execution using OpenAI\'s current pricing. Multiply that by the heaviest user\'s monthly volume. Are you losing money on them?'
        ),
        l(
            'Lesson 2: ROAI (Return on AI Investment)',
            'In 2024, deploying an AI chatbot was enough to secure VC funding; it was an "Innovation Budget" experiment. In 2026, CFOs are demanding hard ROI - specifically ROAI. If you spend $1M developing an RAG-powered internal knowledge base and $50k/month in API costs, how many dollars of human labor did it actually replace or accelerate? ROAI forces teams to justify AI projects based on hard metric movement: FTE displacement, customer churn reduction, or direct new-revenue expansion. If the AI doesn\'t move the needle financially, the pilot dies.',
            [
                d('Hard Cost Savings', 'Direct displacement of software licenses, support headcount, or outsourced labor.', 'Target: ROAI payback period of < 12 months on hard savings.'),
                d('Soft Velocity Gains', 'Engineering or operational speed increases. Harder to quantify but critical for the business case.', 'Benchmark: Convert hours saved into salary dollars equivalent.'),
                d('Revenue Defense', 'Reducing churn by providing an AI experience that competitors lack.', 'Target: Prove a correlation between AI feature usage and higher retention rates.')
            ],
            'Draft the ROAI equation for your next proposed AI initiative. Identify the exact dollar figures you need to hit in year one to break even on the engineering salaries required to build it.'
        ),
        l(
            'Lesson 3: The Model Routing Strategy',
            'You do not need GPT-4 Opus to summarize a 3-sentence email. Using frontier models for primitive tasks is economic malpractice. Advanced AI AI economics rely on "Model Routing." You deploy a fast, cheap model (like Claude 3 Haiku or Llama 3 8B) for 80% of simple classification and parsing tasks, and dynamically route only complex reasoning queries to the expensive frontier models. Combined with aggressive semantic caching (serving similar queries from a database instead of calling the API), you can slash enterprise AI costs by over 90% without degrading the user experience.',
            [
                d('Semantic Caching', 'Storing the vector embeddings of past prompts and returning cached answers for similar queries.', 'Target: Achieve a 30% cache hit rate for repetitive user interactions.'),
                d('Tiered Model Routing', 'Using programmatic logic to route prompts to the cheapest model capable of completing the task accurately.', 'Benchmark: Reserve frontier models (GPT-4) for <20% of total invocations.'),
                d('Self-Hosted vs API', 'Performing the economic break-even analysis on renting API access versus hosting open-source models on cloud GPUs.', 'Target: Only self-host when monthly API spend exceeds $50K consistently.')
            ],
            'Audit your existing AI integration. Identify one task currently using a premium model (GPT-4/Opus) that could be downgraded to a cheaper, faster model (GPT-4o-mini/Haiku) with zero impact to the user.'
        )
    ],
    nextHref: '/vault/curriculum/tracks/ai-product-economics/2-17'
};

// ---------------------------------------------------------
// TRACK 2-17: FRONTIER MODEL ECONOMICS & MOVING BOUNDARIES
// ---------------------------------------------------------

agenticGovernanceModules['ai-product-economics/2-17'] = {
    moduleId: '2-17',
    title: 'Frontier Model Economics: The Moving Boundary & Compute Thresholds',
    description: 'Learn the economic criteria separating everyday automation from frontier AI, model training cost floors ($78M to $191M), and private open-weight vs. closed API tradeoffs.',
    trackName: t2,
    productId: singleProduct,
    takeaways: [
        'Distinguish everyday AI (predictable automation) from frontier AI (unprogrammed ambiguity).',
        'Model the training cost floors of frontier models ($78M for GPT-4, $191M for Gemini Ultra per Stanford AI Index).',
        'Evaluate the true total cost of ownership for private open-weight deployments versus closed vendor APIs.'
    ],
    lessons: [
        l(
            'Lesson 1: Everyday AI vs. Frontier AI',
            'Most enterprise AI running today automates structured, narrow tasks: spam filtering, speech transcription, recommendation ranking, and support ticket triage. These systems run fast, stay inside clear boundaries, and rarely produce surprises. Frontier models represent an expensive, moving empirical threshold designed for ambiguity. You do not reach for a frontier model simply because a project involves AI; you deploy one when problems present messy, unprogrammed complexity: reading conflicting commercial contracts, refactoring undocumented legacy code repositories, or resolving multi-step operational exceptions.',
            [
                d('Everyday AI Scope', 'Narrow, structured tasks with predictable boundaries and low inference costs.', 'Benchmark: Sub-millisecond latency at fractions of a cent per 1,000 queries.'),
                d('Frontier AI Scope', 'High ambiguity, unprogrammed problem solving, multi-contract risk analysis, and multi-step execution.', 'Target: Deploy only when simpler models fail.'),
                d('Moving Capability Boundary', 'Capabilities that define the frontier today rapidly distill into commodity software running on developer laptops tomorrow.', 'Strategy: Avoid hardcoding vendor dependencies to transient benchmark wins.')
            ],
            'Audit your organization\'s AI portfolio. Identify three workflows currently routed to expensive frontier reasoning models that can be safely downgraded to narrow everyday classifiers.'
        ),
        l(
            'Lesson 2: The Training Capital Floor & Inference Compounding',
            'Training a system at the capability boundary requires tens to hundreds of millions in specialized compute and power. Stanford\'s AI Index estimated the compute to train GPT-4 at roughly $78 million and Gemini Ultra at roughly $191 million. In production, the economic danger shifts from training capex to inference compounding: multi-step reasoning agents that query databases, invoke tools, and critique their own drafts multiply inference token costs exponentially. Without token circuit breakers, a single complex enterprise agent workflow can consume $15 in API inference before returning an answer.',
            [
                d('Training Capital Floor', 'Extreme capital requirements ($78M to $191M+) restrict frontier foundation model training to hyper-scaled labs.', 'Takeaway: Build on rented utility intelligence while owning corporate context.'),
                d('Inference Compounding', 'Multi-step agent loops multiply token consumption non-linearly across tool calls and retries.', 'Target: Max 5 reasoning turns per autonomous task.'),
                d('Cost per Useful Output', 'Evaluating total inference spend divided by validated production-ready artifacts.', 'Benchmark: Maintain >70% gross margins on agent-delivered services.')
            ],
            'Calculate the multi-turn inference compounding cost of an agent workflow that makes 4 reasoning passes, 3 database lookups, and 2 tool executions per user request.'
        ),
        l(
            'Lesson 3: Closed APIs vs. Open-Weight Infrastructure TCO',
            'Closed models provide immediate access to leading-edge reasoning without server maintenance or specialized infrastructure staff, but introduce vendor lock-in, price volatility, and unannounced model updates that alter production behavior. Open-weight models release trained weights, making private data center deployment viable for teams with strict regulatory boundaries. However, open-weight is not free: hosting an open-weight 70B+ model requires enterprise data center hardware with massive memory capacity and high-speed networking, while proprietary training datasets remain locked with the creator lab.',
            [
                d('Closed Model Tradeoff', 'Zero infrastructure management versus complete dependence on vendor pricing, uptime, and patch cycles.', 'Rule: Isolate API calls behind vendor-neutral abstraction gateways.'),
                d('Open-Weight TCO', 'Public mathematical weights require dedicated data-center GPUs, cooling, and infrastructure engineers.', 'Break-Even: Only host private clusters when API volume exceeds $50K/month consistently.'),
                d('Operational Authority Limits', 'Open-weight hosting does not eliminate cyber risk: models require deterministic execution firewalls before touching live data.', 'Target: 100% binary allowlist enforcement on database writes.')
            ],
            'Construct a 12-month Total Cost of Ownership (TCO) comparison between calling an enterprise frontier API versus provisioning a private 8xH100 cloud cluster for a 10M-token/day workload.'
        )
    ],
    nextHref: '/vault/curriculum/tracks/agentic-governance/58-5'
};

// ---------------------------------------------------------
// TRACK 58-5: PERSISTENCE VS. AUTHORITY
// ---------------------------------------------------------

agenticGovernanceModules['agentic-governance/58-5'] = {
    moduleId: '58-5',
    title: 'Persistence vs. Authority: Terminal Supervision vs. Background Cloud Agents',
    description: 'Master the architectural distinction between runtime persistence and state authority, prevent state drift in recurring agents, and decouple explainability from recoverability.',
    trackName: t58,
    productId: singleProduct,
    takeaways: [
        'Decouple agent execution duration (persistence) from state-altering permission scope (authority).',
        'Compare terminal-supervised feedback loops (Claude Code) with unattended cloud persistence (Gemini Spark).',
        'Prevent state drift and accumulated context poisoning in recurring background agent workflows.'
    ],
    lessons: [
        l(
            'Lesson 1: The Terminal vs. The Background: Supervision Models',
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
            'Design a rollback protocol for an agent modifying customer records across both a PostgreSQL database and a HubSpot CRM instance. How do you guarantee atomic revert on failure?'
        )
    ],
    nextHref: '/vault/curriculum/tracks/agentic-governance/58-6'
};

// ---------------------------------------------------------
// TRACK 58-6: THE TRANSACTION THAT SUCCEEDS
// ---------------------------------------------------------

agenticGovernanceModules['agentic-governance/58-6'] = {
    moduleId: '58-6',
    title: 'The Transaction That Succeeds: Enterprise Risk & The 4 Pillars of Agent Governance',
    description: 'Deploy the CIO.com governance framework to detect silent policy failures, separate system monitoring from business authorization, and audit the 6 Executive Questions.',
    trackName: t58,
    productId: singleProduct,
    takeaways: [
        'Identify and prevent "the transaction that succeeds" where operations monitors show green but business rules are violated.',
        'Implement the 4 Pillars of Agent Governance: Monitoring, Auditability, Authorization, and Accountability.',
        'Operationalize the 6 Executive Questions before procuring or deploying enterprise applications with embedded AI agents.'
    ],
    lessons: [
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
            'Apply the 6 Executive Questions to an embedded AI feature in your CRM (Salesforce, HubSpot) or ERP (SAP, Workday) and present the scorecard to your leadership team.'
        )
    ],
    nextHref: '/vault/curriculum/tracks/agentic-governance/58-7'
};

// ---------------------------------------------------------
// TRACK 58-7: THE SUPERVISORY REVIEW QUEUE
// ---------------------------------------------------------

agenticGovernanceModules['agentic-governance/58-7'] = {
    moduleId: '58-7',
    title: 'The Supervisory Review Queue: Mitigating the Air Traffic Control Tax',
    description: 'Learn why agent delegation shifts human work to supervisory review drag, detect silent syntax failures in code, and enforce the 4 operational laws for bounded agent leverage.',
    trackName: t58,
    productId: singleProduct,
    takeaways: [
        'Quantify the "air traffic control tax" of auditing plausible machine-generated drafts and code.',
        'Catch silent syntax failures where agents optimize local code while breaking global architectural invariants.',
        'Implement the 4 Operational Laws for autonomous agent delegation.'
    ],
    lessons: [
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
            'To capture real operational ROI and escape the supervisory review queue trap, engineering and operations leaders must enforce 4 non-negotiable operational laws: 1) Start With Read-Only Triggers: give agents permission to read, scan, and summarize before granting create, send, or update access; 2) Narrow Definitions of Done: scope workflows to explicit, easily verified targets (e.g., contrast ratios or contract expiration dates); 3) Human Approval on External Actions: enforce human gates on emails, calendar bookings, and code merges; 4) Treat Output as Junior Drafts: assume machine output contains blind spots and scan for stripped context before release.',
            [
                d('Law 1: Read-Only Triggers', 'Scan and alert first; never delegate write authority until verification is proven.', 'Target: 100% read-only baseline for newly deployed agents.'),
                d('Law 2: Narrow Definition of Done', 'Explicit mechanical criteria eliminate subjective guessing and review ambiguity.', 'Benchmark: If "Done" cannot be validated by a script, bound the scope tightly.'),
                d('Law 3: Human Gates on External Actions', 'Require human confirmation before any agent action touches customers, calendars, or production code.', 'Standard: Mandatory two-man rule on state mutation.'),
                d('Law 4: Junior Draft Posture', 'Review all text and code with the assumption of hidden context omission and polite bias.', 'Mindset: The human remains the Systems Governor.')
            ],
            'Draft an organizational SOP codifying the 4 Operational Laws for all employee-deployed agents, and establish an automated audit mechanism for newly created API tokens.'
        )
    ],
    nextHref: '/vault/curriculum/tracks'
};

export const allAgenticModulesData = agenticGovernanceModules;

