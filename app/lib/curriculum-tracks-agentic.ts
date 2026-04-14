import { CurriculumModule, Lesson, LessonDetail, m, l, d } from './curriculum-data';

export const agenticGovernanceModules: Record<string, CurriculumModule> = {};

const t58 = 'Track 58 — Governance for Agentic AI';
const t1 = 'Track 1 — Engineering Economics';
const t2 = 'Track 2 — AI Product Economics';

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
            'Traditional Role-Based Access Control (RBAC) assumes a human user navigating a UI, where interface friction naturally limits the speed and scope of actions. When you assign human RBAC profiles to an autonomous agent, you weaponize its efficiency. An agent doesn\'t click through menus; it enumerates API endpoints concurrently. Giving an agent your "Admin" token means giving it the ability to delete 10,000 users in 4 seconds if its prompt is hijacked. Agentic RBAC requires a fundamentally different paradigm: Scoped Ephemeral Tokens.',
            [
                d('Token Ephemerality', 'Agent tokens should expire within minutes, not days. Unlike a human session cookie, an agent completes its task instantly.', 'Target: 5-minute maximum TTL for agent tokens.'),
                d('Action-Level Scoping', 'Agents should rarely have wildcards (`*`). Give an agent `users:read`, never `users:*`.', 'Benchmark: 0% wildcard permissions for autonomous actors.'),
                d('Contextual Validation', 'Even if the token is valid, the action must make sense in the context of the user prompt.', 'Target: Algorithmic intent-matching before execution.')
            ],
            'Audit your service account permissions. Identify the generic service accounts that multiple scripts or auto-agents are sharing, and sketch a plan to break them into scoped, single-purpose roles.'
        ),
        l(
            'Lesson 2: Execution Sandboxing',
            'Never execute code written by an LLM in your core infrastructure. Whether it is "Vibe Coding" output or an autonomous agent writing Python to solve a problem, all agent-generated code must run in a secure sandbox (like Docker, Firecracker microVMs, or WebAssembly isolates). The sandbox must have strictly controlled egress networking—meaning the agent cannot reach out to the broader internet or local network unless explicitly permitted. If the agent writes malicious code, the sandbox containment prevents horizontal escalation.',
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
            'When the kill switch is tripped, or when the LLM provider goes down (e.g., OpenAI outage), your application must not crash. Graceful degradation is the engineering practice of falling back to a deterministic, non-AI experience. If the AI customer support agent is killed, the chat widget should seamlessly route the user to a static FAQ or open a human support ticket. The user experience degrades safely rather than throwing a 500 Internal Server Error or a timeout blank screen.',
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
    description: 'Calculate the hard financial metrics proving why investing in robust AI governance yields higher returns than raw AI capability expansion.',
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
            'Business leadership naturally views "Governance" as red tape that slows down innovation. This is profoundly false in the era of AI. Without governance, developers spend 80% of their time playing whack-a-mole with edge cases, prompt regressions, and security alerts. Implementing a robust Agentic Governance framework—standardized RBAC, kill switches, and strict data schemas—creates a "Paved Road" for engineering. Teams can provision new AI features 5x faster because they don\'t have to reinvent the safety guardrails from scratch every time.',
            [
                d('Time-to-Market (TTM)', 'The duration from concept to production deployment for an AI feature.', 'Target: Reduce AI feature TTM from 6 weeks to 1 week.'),
                d('Infrastructure Reuse', 'The percentage of AI security code that is written once and reused globally across all features.', 'Benchmark: >90% code reuse via a centralized Threat Prevention Layer.'),
                d('Developer Velocity', 'The increase in feature output when developers are freed from building bespoke safety nets.', 'Target: 2x increase in feature delivery throughput.')
            ],
            'Draft a 3-point business case to your CTO explaining why investing 2 weeks of engineering time into building a global Agentic RBAC layer will save 10 weeks of collective effort over the next 6 months.'
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
            'In 2024, deploying an AI chatbot was enough to secure VC funding; it was an "Innovation Budget" experiment. In 2026, CFOs are demanding hard ROI—specifically ROAI. If you spend $1M developing an RAG-powered internal knowledge base and $50k/month in API costs, how many dollars of human labor did it actually replace or accelerate? ROAI forces teams to justify AI projects based on hard metric movement: FTE displacement, customer churn reduction, or direct new-revenue expansion. If the AI doesn\'t move the needle financially, the pilot dies.',
            [
                d('Hard Cost Savings', 'Direct displacement of software licenses, support headcount, or outsourced labor.', 'Target: ROAI payback period of < 12 months on hard savings.'),
                d('Soft Velocity Gains', 'Engineering or operational speed increases. Harder to quantify but critical for the business case.', 'Benchmark: Convert hours saved into salary dollars equivalent.'),
                d('Revenue Defense', 'Reducing churn by providing an AI experience that competitors lack.', 'Target: Prove a correlation between AI feature usage and higher retention rates.')
            ],
            'Draft the ROAI equation for your next proposed AI initiative. Identify the exact dollar figures you need to hit in year one to break even on the engineering salaries required to build it.'
        ),
        l(
            'Lesson 3: The Model Routing Strategy',
            'You do not need GPT-4 Opus to summarize a 3-sentence email. Using frontier models for primitive tasks is economic malpractice. Advanced AI product economics rely on "Model Routing." You deploy a fast, cheap model (like Claude 3 Haiku or Llama 3 8B) for 80% of simple classification and parsing tasks, and dynamically route only complex reasoning queries to the expensive frontier models. Combined with aggressive semantic caching (serving similar queries from a database instead of calling the API), you can slash enterprise AI costs by over 90% without degrading the user experience.',
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

export const allAgenticModulesData = agenticGovernanceModules;
