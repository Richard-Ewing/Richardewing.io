import { CurriculumModule, l, d, m } from './curriculum-data';

export const tracks13Modules: Record<string, CurriculumModule> = {};

const t13 = 'Track 13 — AI Agent & Automation Economics';

tracks13Modules['ai-agent-economics/13-1'] = m('13-1', 'Agentic System Cost Structures', 'Foundation models for agents, tool-use pricing, loop constraints, and agent architecture limits.', t13, 
    ['Model Autonomous loop costs', 'Identify execution hallucinations', 'Calculate tool use API burn rates'], [
        l('The Economics of Autonomous Loops', 
            [
                'Standard RAG or Chatbot interfaces fire exactly one prompt and receive exactly one response. An autonomous AI Agent operates in a loop: Think -> Act -> Observe -> Repeat.',
                'Because an agent feeds its previous observations back into its context window on every iteration, the context size (and token cost) grows exponentially with every step it takes to solve a problem.',
                'An agent that requires 15 steps to complete a task using a frontier model will cost $2.00 to $5.00 PER TASK. If deployed to 1,000 users, you have a financial catastrophe.'
            ],
            [
                d('Token Burn per Step', 'The rate at which the input context expands on each agentic loop.', 'Logarithmic expansion'),
                d('Task Break-Even Limit', 'The maximum cost an agent can accrue before human labor is cheaper.', 'Usually ~$1.50 per task')
            ],
            'Instrument your LangChain or AutoGen implementation with a rigid `max_iterations` cutoff to prevent infinite-loop financial burn.',
            ['Locate your agent execution loop.', 'Add a hard-stop integer (e.g., `if steps > 10: throw MaxIterationsExceeded`).', 'Configure an alert if an agent burns more than $0.50 internally.'],
            {
                question: 'Why are Agentic AI systems structurally more expensive than standard LLM Chatbots?',
                options: ['Agents require specialized expensive GPUs', 'Agents cannot use cached responses', 'Agents operate in loops, continuously re-submitting their growing context window back to the API on every single step until the task is complete', 'Agents require fine-tuning to function'],
                correctIndex: 2,
                explanation: 'The context window re-submission is the hidden killer. Step 1 submits 1,000 tokens. Step 2 submits 1,500 tokens. Step 3 submits 2,500 tokens. You are paying for the entire historical context repeatedly.'
            }
        )
    ], '/vault/curriculum/tracks/ai-agent-economics/13-2', 'aueb', 'live'
);

tracks13Modules['ai-agent-economics/13-2'] = m('13-2', 'Tool Use & API Burn Rates', 'Model the cost of agents calling external APIs, executing sub-queries, and handling API rate limit economics.', t13, 
    ['Quantify recursive tool-use costs', 'Map API rate-limit elasticity', 'Design fallback cost structures'], [
        l('The Cost of Autonomous Agency', 
            [
                'When you give an LLM access to "Tools" (like web search, SQL execution, or Jira API), you sacrifice deterministic cost ceilings. An agent asked to "Research competitors" might fire 50 iterative Google search API requests before summarizing.',
                'Each of those 50 loops incurs: the original LLM reasoning cost, the external Tool API cost, and the LLM summarization cost of the tool output.',
                'If an agent gets stuck in a hallucination loop (e.g., repeatedly calling an API with the wrong parameter), it will silently burn cash until the cloud provider enforces a hard rate limit.'
            ],
            [
                d('Average Tools per Task', 'The mean number of external API calls required to solve a user prompt.', 'Target: < 5'),
                d('Max Burn Cutoff', 'The hard-coded dollar limit an agent can spend on a single request.', 'Enforce via proxy router')
            ],
            'Audit the tool-access permissions of your current Agentic prototype.',
            ['List every external API the agent has access to.', 'Identify which APIs cost money per request (e.g., SERP API, expensive database queries).', 'Wrap those specific tools in a budget-aware execution gate.']
        )
    ], '/vault/curriculum/tracks/ai-agent-economics/13-3', undefined, 'live'
);

tracks13Modules['ai-agent-economics/13-3'] = m('13-3', 'Multi-Agent Collaboration Costs', 'The N-squared communication overhead of Swarm Architectures.', t13, 
    ['Calculate inter-agent token exchange', 'Model Swarm reasoning latency', 'Identify consensus bottlenecks'], [
        l('The N-Squared Swarm Tax', 
            [
                'Multi-Agent architectures (like AutoGen or CrewAI) deploy specialized agents (e.g., "Researcher", "Writer", "Editor") that talk to each other to solve complex tasks. ',
                'While powerful, this introduces an $N^2$ communication overhead. Every time the Researcher talks to the Writer, you pay for both sides of the conversation in tokens.',
                'If the Editor rejects the Writer\'s draft, the entire loop repeats. You are effectively simulating an entire corporate department\'s payroll using GPU cycles.'
            ],
            [
                d('Inter-Agent Token Volume', 'The number of tokens spent strictly on agents talking to each other, not the user.', 'Minimization is critical'),
                d('Consensus Latency', 'The time it takes a multi-agent swarm to agree on the final output.', 'Can exceed 2-3 minutes')
            ],
            'Map the state-machine transitions of your multi-agent architecture.',
            ['Count the number of distinct Agent personas.', 'Identify the "Critic" or "Editor" node that forces rework.', 'Calculate the cost of a single task requiring 3 rounds of rework.']
        )
    ], '/vault/curriculum/tracks/ai-agent-economics/13-4', undefined, 'live'
);

tracks13Modules['ai-agent-economics/13-4'] = m('13-4', 'Shadow Agents & Security Governance', 'Calculate the financial liability of rogue agents executing non-deterministic actions.', t13, 
    ['Quantify Shadow Agent vectors', 'Design Human-in-the-Loop circuit breakers', 'Model blast radius of unauthorized execution'], [
        l('The Blast Radius of Write-Access', 
            [
                'A Chatbot can only hallucinate text. An Agent with Write-Access can hallucinate actions. If an agent has access to your Stripe API, a hallucinated loop could issue thousands of unauthorized refunds automatically.',
                'As non-technical teams adopt no-code agent builders (like Zapier Central or GPTs), "Shadow Agents" emerge across the organization, wielding API keys with zero governance or security review.',
                'The economic liability of an unmonitored agent deleting a production database or violating GDPR is catastrophic. Standard IT governance must be refactored to handle autonomous synthetic employees.'
            ],
            [
                d('Write-Access Surface Area', 'The number of APIs that an agent is authorized to mutate (POST/DELETE).', 'Target: Zero without approval'),
                d('HITL Circuit Breaker', 'Human-in-the-Loop gating for high-risk actions.', 'Mandatory for financial/destructive tools')
            ],
            'Conduct a Shadow Agent audit.',
            ['Identify all platforms where non-engineers can deploy AI bots (Slack, Teams, Zapier).', 'Revoke blanket administrative API access credentials.', 'Implement a rigid Human-in-the-Loop (HITL) approval step for any agent action that modifies state.']
        )
    ], '/vault/curriculum/tracks/ai-agent-economics/13-5', undefined, 'live'
);

tracks13Modules['ai-agent-economics/13-5'] = m('13-5', 'State Management & Memory Costs', 'Long-term memory persistence, Vector vs Graph DB architecture, and the cost of recalling agent state.', t13, 
    ['Calculate Vector memory vs Graph memory Opex', 'Model context window eviction strategies', 'Optimize cross-session persistence'], [
        l('The Economics of Infinite Memory', 
            [
                'For an agent to be truly useful, it needs episodic memory—it must remember what the user told it three weeks ago. Storing this memory requires sophisticated state management.',
                'You cannot simply shove the entire 3-week conversation history into the LLM context window—that would cost $20 per query. You must use RAG, Semantic Routing, or Knowledge Graphs to recall only the relevant memories.',
                'Knowledge Graphs (like Neo4j) map entity relationships flawlessly but carry high setup costs, whereas Vector Databases are fast but struggle with complex logical reasoning.'
            ],
            [
                d('Memory Retrieval Precision', 'The accuracy of the agent fetching the correct historical context.', 'Drives user trust'),
                d('State Persistence Tax', 'The cloud infra cost of maintaining active agent memory graphs.', 'Grows linearly per user')
            ],
            'Implement a memory eviction policy for your agent platform.',
            ['Identify how long raw conversation history is currently retained in your DB.', 'Calculate the cost of summarizing that raw history into dense "fact nodes" weekly.', 'Adopt a tiered memory architecture: Short-term (Context Window) -> Mid-term (Summarized Facts) -> Long-term (Vector Store).']
        )
    ], '/vault/curriculum/tracks/ai-agent-economics/13-6', undefined, 'live'
);

tracks13Modules['ai-agent-economics/13-6'] = m('13-6', 'AI Multi-Agent Systems Scaling', 'The hardware and cloud limits of deploying thousands of autonomous agents across enterprise networks.', t13, 
    ['Deploy concurrent agent architectures safely', 'Model infinite loop latency', 'Scale GPU compute requirements'], [
        l('Rethinking Enterprise Concurrency', 
            [
                'Running one agent is a Python script. Running 50,000 agents concurrently responding to enterprise data streams is a distributed systems nightmare that most organizations underestimate.',
                'If every agent requires its own localized prompt matrix and memory cache, horizontally scaling agents rapidly exhausts the Redis cache and SQL connection limits of the underlying architecture.',
                'Effective scaling demands Agentic Orchestration—leveraging tools like Temporal to ensure agents can suspend execution, wait for external API webhooks, and wake up without burning active server memory.'
            ],
            [
                d('Agent Suspension CapEx', 'The infrastructure required to safely "pause" an agent mid-thought without losing context.', 'Driven by State machines'),
                d('Concurrency Memory Saturation', 'The point where active LLM Context arrays crash Node.js or Python memory limits.', 'Migrate to disk-backed state quickly')
            ],
            'Establish an Agent concurrency load test.',
            ['Spin up 100 simultaneous instances of your agentic framework in staging.', 'Target your own internal APIs with a multi-step task.', 'Observe which infrastructure layer (Database, Internal Network, LLM API Limits) fails first.']
        )
    ], '/vault/curriculum/tracks/ai-agent-economics/13-7', undefined, 'live'
);

tracks13Modules['ai-agent-economics/13-7'] = m('13-7', 'AI Workflow Automation (RPA)', 'Why LLM Agents are rapidly deprecating rigid Robotic Process Automation (RPA) like UiPath and Automation Anywhere.', t13, 
    ['Calculate RPA script failure rates vs LLM recovery', 'Model the automation migration timeline', 'Implement unstructured data scraping tools'], [
        l('The Sunsetting of the Hardcoded Script', 
            [
                'Traditional RPA relies on rigid CSS selectors: "Click the div with ID #submit-button". When a SaaS vendor updates their React frontend, the RPA bot permanently breaks until an engineer rewrites the script.',
                'Agentic workflow uses Vision models and DOM interpretation. It reads the screen visually and clicks the button that says "Submit", regardless of underlying CSS changes. It is structurally self-healing.',
                'Transitioning from RPA to Agentic RPA removes the massive maintenance payroll tax required to constantly fix brittle scraping scripts, transforming previously un-automatable workflows.'
            ],
            [
                d('Script Fragility Index', 'The percentage of RPA bots that break per month due to vendor UI updates.', 'Target: Down to 0% with Vision Agents'),
                d('Unstructured Automation ROI', 'The financial value of automating data entry from messy PDF invoices.', 'Extremely high B2B value')
            ],
            'Execute a pilot migration of one RPA workflow.',
            ['Select the most brittle, frequently-breaking RPA script your team maintains.', 'Rebuild it using Playwright combined with an LLM that parses the DOM semantically.', 'Demonstrate the resilience when CSS classes are intentionally scrambled.']
        )
    ], '/vault/curriculum/tracks/ai-agent-economics/13-8', undefined, 'live'
);

tracks13Modules['ai-agent-economics/13-8'] = m('13-8', 'Prompt Engineering at Scale', 'Versioning, A/B Testing, and Treating Prompts as Code Infrastructure.', t13, 
    ['Build Prompts-as-Code pipelines', 'Inject variables dynamically', 'Scale CI/CD test gates for prompt modifications'], [
        l('The Fall of the God Prompt', 
            [
                'Junior AI developers write massive 2,000-word "God Prompts" that attempt to instruct the LLM on every possible edge case in a single message.',
                'At scale, this fails mathematically. The "God Prompt" loses attention context near the middle, ignores boundaries, and becomes impossible to test. Changing one sentence breaks unrelated formatting constraints.',
                'Senior AI engineering requires "Prompt Chaining." Instead of one massive prompt, you chain 5 small, explicitly purposed prompts together. The "Validator" prompt only checks format. The "Extractor" prompt only pulls dates. This allows for unit testing of prompts.'
            ],
            [
                d('Input Prompt Token Reduction', 'The tokens saved by breaking one massive prompt into targeted micro-prompts.', 'Reduces latency materially'),
                d('Prompt Regression Test Coverage', 'The percentage of prompt changes validated against a ground-truth test suite.', 'Target: 100% CI/CD')
            ],
            'Refactor your largest LLM Prompt.',
            ['Find the prompt with the highest word count in your application.', 'Split it into three sequential steps: Data Formatting, Logic Application, and Final Output Styling.', 'Notice the severe reduction in hallucinated formatting errors.']
        )
    ], '/vault/curriculum/tracks/ai-agent-economics/13-9', undefined, 'live'
);

tracks13Modules['ai-agent-economics/13-9'] = m('13-9', 'AI Safety & Guardrails', 'Deploying Output Validation architectures that ensure Enterprise-grade certainty from non-deterministic models.', t13, 
    ['Filter PII in real-time', 'Model the latency of JSON-schema enforcement', 'Prevent Brand-damaging generations'], [
        l('The Economic Cost of a Bad Response', 
            [
                'Unfiltered AI output is an unacceptable business risk. Allowing an LLM to generate text and ship it directly to a user’s screen guarantees eventual litigation or brand destruction.',
                'A Guardrail architecture places an intercept layer between the LLM output and the user. It explicitly checks the output for profanity, competitor mentions, PII leakage, or formatting violations.',
                'This requires running a secondary, extremely fast model (like Llama-Guard or a Regex engine) on every single response, increasing both infrastructure spend and Time-to-First-Byte.'
            ],
            [
                d('Guardrail Evasion Rate', 'The frequency at which malicious or broken text slips past the defensive layer.', 'Requires continuous tuning'),
                d('Interceptor Latency', 'The added millisecond overhead of scanning the output array.', 'Target: < 50ms')
            ],
            'Install an explicit output guardrail on your chatbot.',
            ['Identify 3 words or phrases (e.g., a competitor\'s name) the AI should never say.', 'Add an Output Parser middleware that blocks any message containing those terms before the user sees it.', 'Monitor the block rate.']
        )
    ], '/vault/curriculum/tracks/ai-agent-economics/13-10', undefined, 'live'
);

tracks13Modules['ai-agent-economics/13-10'] = m('13-10', 'AI Maturity Assessment', 'Evaluating organizational readiness to fully deploy Agentic systems without incurring massive Technical Debt.', t13, 
    ['Assess organizational data cleanliness', 'Model Total AI TCO over 3 years', 'Evaluate workforce upskilling ROI'], [
        l('Scaling AI Beyond the Demo', 
            [
                'Building an AI demo takes a weekend. Building a secure, multi-tenant AI feature that scales to 1M users without collapsing margins takes a year of deep engineering.',
                'The AI Maturity Model tracks an organization\'s capability to transition from "Copilot usage" (individual productivity) to "Embedded Intelligence" (AI integrated into core products) and finally "Agentic Workflows" (AI performing autonomous actions).',
                'Attempting to build Agentic systems before mastering basic prompt versioning and RAG pipelines results in catastrophic project failure and massive sunk costs.'
            ],
            [
                d('AI Prototype Graveyard Size', 'The number of GenAI PoCs launched internally that never successfully reached production.', 'High numbers indicate infrastructure gaps'),
                d('Production Run Rate', 'The monthly cloud cost of supporting active AI projects in the wild.', 'Must translate directly to revenue')
            ],
            'Execute an immediate portfolio review of internal AI initiatives.',
            ['List every active AI project requested by product teams.', 'Score them based on direct margin impact vs foundational infrastructure required.', 'Kill any project requiring "Agentic Actions" if your organization does not yet have an automated prompt testing framework.']
        )
    ], '/vault/curriculum/tracks/ai-agent-economics/13-11', undefined, 'live'
);

tracks13Modules['ai-agent-economics/13-11'] = m('13-11', 'Small Language Models (SLMs)', 'Why 8B parameter models executing edge intelligence will dominate Enterprise AI economics over hyper-scale trillion parameter behemoths.', t13, 
    ['Quantify Llama-3 8B economics vs GPT-4', 'Model edge latency improvements', 'Execute precise fine-tuning parameters'], [
        l('The Rise of the Micro-Model', 
            [
                'GPT-4 is a trillion-parameter model that "knows" 17th-century poetry, theoretical physics, and Python. If your enterprise app only needs to extract medical billing codes from a PDF, using GPT-4 is absurdly wasteful.',
                'Small Language Models (SLMs) like Phi-3 or Llama-3-8B sacrifice broad general knowledge for extreme speed and low hardware requirements. They can run on a MacBook, preventing sensitive data from ever hitting an external API.',
                'By fine-tuning an SLM strictly on the narrow task of your product, you achieve frontier-level accuracy at 1/1000th the inference cost.'
            ],
            [
                d('Task-Specific Accuracy', 'The percentage parity an SLM achieves against GPT-4 on one specific narrow dataset.', 'Target: > 95% parity'),
                d('Local Hardware Capitalization', 'The CapEx of running local Mac Studios or discrete GPUs rather than paying recurring OpEx API fees.', 'Massive compounding ROI')
            ],
            'Benchmark an SLM on your primary workload.',
            ['Download Ollama to your local machine.', 'Run `ollama run llama3:8b`.', 'Pass it 50 of your standard customer support queries. Ask it to categorize them. Measure the accuracy against what GPT-4 previously provided.']
        )
    ], '/vault/curriculum/tracks/ai-agent-economics/13-12', undefined, 'live'
);

tracks13Modules['ai-agent-economics/13-12'] = m('13-12', 'Open Weights Engineering', 'Self-hosting open-source LLMs within private VPCs to ensure absolute data sovereignty, and the surrounding licensing constraints.', t13, 
    ['Model VRAM allocation limits per GPU', 'Evaluate Llama & Mistral commercial licenses', 'Secure proprietary data in Air-Gapped networks'], [
        l('Taking the Model In-House', 
            [
                'For defense contractors, hospitals, and financial institutions, sending data to OpenAI is a non-starter due to regulatory firewalls. They must self-host models entirely inside their own Virtual Private Cloud (VPC).',
                'However, "Open Weights" is not "Open Source". Meta’s Llama license carries specific commercial restrictions for massive platforms. Understanding the licensing liabilities is as important as the GPU deployment strategy.',
                'Deploying open weights involves optimizing VLLM or TGI servers, managing massive GPU instances (A100/H100), and dealing directly with CUDA memory limitations.'
            ],
            [
                d('Self-Hosted VRAM Cost', 'The monthly AWS/GCP bill for renting A100/H100 GPU instances.', 'Expensive idle costs'),
                d('Air-Gapped Data Premium', 'The business value unlocked by proving to customers their data never leaves your VPC network.', 'Massive enterprise sales accelerator')
            ],
            'Calculate the TCO of bringing inferences entirely into your VPC.',
            ['Look at your monthly Anthropic or OpenAI bill.', 'Estimate the number of tokens processed.', 'Calculate the cost of running two `g5.2xlarge` instances on AWS 24/7. Determine if self-hosting is actually cheaper or just a security play.']
        )
    ], '/vault/curriculum/tracks/ai-agent-economics/13-13', undefined, 'live'
);

tracks13Modules['ai-agent-economics/13-13'] = m('13-13', 'AI-Assisted Development', 'Weaponizing GitHub Copilot, Devin, and Cursor. Tracking developer velocity versus technical debt injected by AI code generation.', t13, 
    ['Measure AI-assisted PR lead times', 'Quantify "Vibe Coding" debt', 'Adjust architectural guidelines to counter AI boilerplate'], [
        l('The Vibe Coding Trap', 
            [
                'Tools like GitHub Copilot and Cursor radically increase the volume of code generated per hour. A junior engineer can spin up a boilerplate React application in minutes.',
                'However, "Vibe Coding" (prompting until the feature visibly works without understanding the underlying logic) injects massive amounts of invisible Technical Debt. The code lacks architectural coherence and violates DRY principles aggressively.',
                'The economic ROI of AI coding tools is only realized if the organization rigidly enforces automated testing and Architecture Review to reject hallucinated, bloated boilerplate.'
            ],
            [
                d('AI Code Injection Rate', 'The percentage of codebase lines physically generated by an LLM.', 'Requires extreme testing coverage'),
                d('PR Complexity Sprawl', 'The increase in PR payload size driven by developers auto-generating massive classes instead of reusing modules.', 'Slows review times drastically')
            ],
            'Audit the testing coverage of AI-assisted developers.',
            ['Identify the engineers using Cursor or Copilot most aggressively.', 'Check their Pull Requests specifically for repeated helper functions and missing unit tests.', 'Institute a strict "If the AI wrote it, you must write the test for it" policy.']
        )
    ], '/vault/curriculum/tracks/ai-agent-economics/13-14', undefined, 'live'
);

tracks13Modules['ai-agent-economics/13-14'] = m('13-14', 'Agentic Governance Models', 'Controlling the execution boundaries of autonomous systems, enforcing read-only vs write-access architectures, and gating financial authority.', t13, 
    ['Design stateless execution models', 'Limit destructive payload authorization', 'Implement dual-key execution validation'], [
        l('The Liability of Action', 
            [
                'Giving an LLM the ability to read your database is an analytics feature. Giving an LLM the ability to write to your database is an existential business threat if governed poorly.',
                'Agentic Governance requires explicit boundary constraints. An agent authorized to delete files should run in a completely isolated sandboxed IAM role. Every state-altering action must be cryptographically signed and logged.',
                'Without governance, an agent caught in an API hallucination loop could recursively drop tables or issue thousands of financial refunds.'
            ],
            [
                d('Write-Action Blast Radius', 'The maximum data disruption an agent could cause if completely compromised.', 'Limit via granular IAM roles'),
                d('Human Approval Latency', 'The time a requested action sits in a queue waiting for human confirmation.', 'Balances agility vs safety')
            ],
            'Review exactly what your prototype AI agents are authorized to touch.',
            ['Find the AWS/GCP Service Role assigned to your GenAI application.', 'If it has `S3:*, RDS:*, IAM:*` access, you are in extreme danger.', 'Restrict the agent directly to explicit read-only views specifically designed for LLM access.']
        )
    ], '/vault/curriculum/tracks/ai-agent-economics/13-15', undefined, 'live'
);

tracks13Modules['ai-agent-economics/13-15'] = m('13-15', 'AI System Threat Prevention', 'Defending against Data Poisoning, adversarial extraction architectures, and minimizing vulnerability footprint.', t13, 
    ['Quantify dataset integrity costs', 'Implement anomaly detection on inference spikes', 'Respond to Model Inversion attacks'], [
        l('Weaponizing the Training Data', 
            [
                'Adversaries no longer just attack the API; they attack the training data. Data Poisoning involves injecting corrupted text into public repositories or internal scraping pipelines so that the final LLM learns malicious associations.',
                'If an attacker subtly changes Wikipedia articles that your RAG system ingests, they can force your customer service bot to confidently recommend competitors or direct users to phishing sites.',
                'Preventing this requires cryptographic data provenance—storing cryptographic hashes of all ingested documents and routinely auditing the RAG vector database for anomalies.'
            ],
            [
                d('Dataset Integrity Coverage', 'The percentage of ingested facts that trace back to a cryptographically validated internal system of record.', 'Target: > 99%'),
                d('Malicious Extraction Vulnerability', 'The likelihood an attacker using sequential prompt engineering can force the LLM to output PII embedded in its context window.', 'Requires strict DLPs')
            ],
            'Execute an ingestion integrity sweep.',
            ['Review the web-scrapers feeding your Vector Database.', 'If they scrape unverified public domains without human review, shut them down.', 'Limit LLM ingestion strictly to verified, internal canonical documentation.']
        )
    ], undefined, undefined, 'live'
);
