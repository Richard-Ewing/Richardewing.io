import { CurriculumModule, l, d, m } from './curriculum-data';

export const tracks23Modules: Record<string, CurriculumModule> = {};
const t23 = 'Track 23 — Agentic Process Automation (APA)';

tracks23Modules['agentic-automation/23-1'] = m('23-1', 'The End of Robotic Process Automation (RPA)', 'Fragility of screen-scraping vs semantic API agents.', t23, 
    ['Deprecate legacy RPA', 'Calculate semantic durability'], [
        l('The Brittle Core of RPA', 
            [
                'For the last decade, enterprises spent billions on UI-driven Robotic Process Automation (RPA) tools like UiPath. These systems rely on explicit screen-scraping and DOM coordinate binding. Consequently, if a SaaS vendor changes the CSS class of a single "Submit" button, the entire million-dollar RPA workflow violently collapses.', 
                'Agentic Process Automation (APA) completely bypasses UI fragility. Agents interact purely via underlying semantic API schemas and multimodal reasoning. They don\'t look for a red button; they look for the endpoint required to submit the payload, understanding the intent rather than the layout.',
                'Transitioning from RPA to APA drops maintenance engineering costs by upwards of 90%, transitioning from a paradigm of "Fragile Configuration" to "Durable Intelligence."'
            ],
            [
                d('RPA Breakage Rate', 'The percentage of legacy bots that fail due to minor frontend UI updates.', 'Historically massive (> 30%)'),
                d('Agentic Durability', 'The capacity of an AI agent to dynamically understand API mutations without failing.', 'Near 100% resilient')
            ], 
            'Audit your most expensive legacy RPA workflow and architect a semantic replacement.', 
            ['Identify a UI-scraping bot currently interacting with a major vendor like Salesforce.', 'Locate the exact GraphQL or REST API coverage for that same user flow.', 'Prototype an LLM agent instructed strictly via OpenAPI schema rather than DOM selectors.'], 
            {
                question: 'What is the primary architectural flaw of legacy Robotic Process Automation (RPA)?',
                options: ['It requires too much expensive memory', 'It relies heavily on brittle DOM selectors and UI screen-scraping, meaning a simple frontend redesign breaks the entire automated workflow', 'It cannot run on Linux servers', 'The licensing fees are based on CPU cores'],
                correctIndex: 1,
                explanation: 'UI is designed for humans and changes constantly. APIs are designed for machines. True automation must occur at the semantic API layer, not the visual layer.'
            }
        )
    ], '/vault/curriculum/tracks/agentic-automation/23-2', undefined, 'live'
);

tracks23Modules['agentic-automation/23-2'] = m('23-2', 'Tool Use & Function Calling Economics', 'JSON schema bounds, inference latency, agentic tax.', t23, 
    ['Optimize function calling payloads', 'Track token budgets'], [
        l('The Hidden Cost of Function Prompts', 
            [
                'When you provide an LLM with tool-use (Function Calling), you are secretly injecting massive amounts of system prompts into the context window. Feeding an agent 50 distinct OpenAPI definitions means you are paying to re-read that schema on every single inference cycle.', 
                'This creates the "Agentic Tax." A simple $0.001 query suddenly costs $0.05 because the model must process 40kb of JSON tool documentation before deciding what to do, severely destroying gross margins at scale.',
                'Elite orchestration restricts an agent exclusively to the absolute minimum tooling required for its explicit node. A routing LLM should not have access to database querying; it should only possess the tool to route to the specialized database agent.'
            ],
            [
                d('Schema Ingestion Tax', 'The hidden token cost of injecting OpenAPI specs into the system prompt.', 'Calculated per inference'),
                d('Agent Payload Limit', 'The maximum number of distinct tools safely provided to a single agent node.', 'Strict limit of < 5')
            ], 
            'Isolate and trim the tool definitions provided to your primary Agent.', 
            ['Review the `functions` or `tools` array currently passed to your OpenAI/Anthropic API call.', 'Remove any redundant or overly verbose descriptions inside the JSON parameter schema.', 'Strip out tools the agent hasn\'t organically triggered in the past 7 days.'], 
            {
                question: 'What is the "Agentic Tax" associated with Function Calling?',
                options: ['The fee OpenAI charges to enable the feature on your account', 'The hidden, compounding cost of forcing the LLM to read massive JSON OpenAPI schemas in the system prompt on every single inference execution', 'The latency of the actual server executing the code', 'The cost of training the model'],
                correctIndex: 1,
                explanation: 'Tool definitions consume tokens. Providing an agent with 50 tools means you are paying to transmit all 50 descriptions to the LLM on every single user message.'
            }
        )
    ], '/vault/curriculum/tracks/agentic-automation/23-3', undefined, 'live'
);

tracks23Modules['agentic-automation/23-3'] = m('23-3', 'Deterministic Bounding & Governance', 'Sandboxing agents, preventing hallucinated mutations.', t23, 
    ['Establish execution sandboxes', 'Map the blast radius'], [
        l('Bounding The Autonomous Threat', 
            [
                'Providing an LLM with unrestricted `UPDATE` or `DELETE` access to a production database is an existential corporate threat. If an agent hallucinates a variable, the resulting action is executed flawlessly, instantly destroying live customer data.', 
                'Agentic architectures rely on "Deterministic Bounding." The LLM is the brain, but it is locked inside an impenetrable titanium execution environment. If the agent calls a tool seeking to format a hard drive, the execution layer physically prevents the action.',
                'All destructive LLM actions must operate on a strict "Draft & Human-in-the-Loop" architecture. The agent stages the mutation; a human verifies the diff.'
            ],
            [
                d('Agent Blast Radius', 'The total volume of systems an LLM can catastrophically impact during a hallucination event.', 'Zero Tolerance Limit'),
                d('State Mutation Isolation', 'The explicit firewall preventing an LLM from direct production `write` operations.', 'Mandatory Architecture')
            ], 
            'Audit the explicit permission scopes granted to your autonomous backend agents.', 
            ['Ensure the API keys provided to the LLM agent are strictly scoped (e.g. read-only capabilities).', 'If mutation is required, build an intermediate "Approval Queue" dashboard.', 'Create a Red Team script attempting to trick the agent into deleting its own configuration.'], 
            {
                question: 'How do elite organizations handle an Autonomous Agent that requires database mutation permissions?',
                options: ['They trust the system prompt (e.g. "Never delete data")', 'They never use AI for database operations', 'They restrict the agent to generating "Draft" operations, requiring a strict Deterministic Boundary and a Human-in-the-Loop authorization before database commit', 'They use older, less creative AI models'],
                correctIndex: 2,
                explanation: 'LLMs are inherently probabilistic; they will eventually hallucinate. A probabilistic engine can never be granted direct access to a deterministic operation without strict middleware governance.'
            }
        )
    ], '/vault/curriculum/tracks/agentic-automation/23-4', undefined, 'live'
);

tracks23Modules['agentic-automation/23-4'] = m('23-4', 'RAG Context Assembly', 'Retrieval speed, chunking efficiency, vector DBs.', t23, 
    ['Optimize vector similarity', 'Reduce embedding dimension waste'], [
        l('The High-Fidelity Physics of RAG', 
            [
                'Retrieval-Augmented Generation (RAG) is entirely useless if the vector database retrieves garbage. Most organizations blindly dump entire massive PDFs into a Pinecone index without explicitly structuring the "context chunks."', 
                'If a developer embeds an entire 10-page chapter of an HR manual as a single vector, the similarity search will return horribly blurred semantic meaning. Elite chunking breaks documents into logical semantic headers (e.g., overlapping 512-token chunks) to ensure dense hit accuracy.',
                'The ROI of RAG relies heavily on pre-filtering. Searching a massive vector database strictly by cosine similarity is slow and prone to hallucination. Injecting metadata (e.g., locking the search to `tenant_id: x, date: >2025`) drastically accelerates indexing speed.'
            ],
            [
                d('Semantic Retrieval Accuracy', 'The percentage of top-3 vector hits that directly contain the localized answer.', '> 90% Target'),
                d('Index Query Latency', 'The speed at which the vector database returns contextual embeddings.', '< 200ms Limit')
            ], 
            'Audit the exact chunking architecture of your primary RAG ingestion pipeline.', 
            ['Calculate the current token length you are utilizing for document splitting.', 'Inject explicit structural metadata (`document_type`, `department`) into the vector payload to allow for pre-filtering.', 'Test a query and verify if the top hit returns highly contaminated context padding.'], 
            {
                question: 'What is the danger of using excessively large text chunks (e.g. 5,000 tokens) when populating a Vector Database?',
                options: ['It consumes too much hard-drive space', 'It completely blurs the semantic density of the vector, drastically reducing the accuracy of cosine similarity searches for specific queries', 'It violates copyright laws', 'It prevents the LLM from understanding English'],
                correctIndex: 1,
                explanation: 'A vector embedding is an average mapping of its semantic content. If you cram 10 different topics into one chunk, the overall vector mathematical position becomes "muddled" and un-searchable.'
            }
        )
    ], '/vault/curriculum/tracks/agentic-automation/23-5', undefined, 'live'
);

tracks23Modules['agentic-automation/23-5'] = m('23-5', 'Self-Healing CI/CD Pipelines', 'Automated code repair, test generation.', t23, 
    ['Auto-resolve AST failures', 'Synthesize missing coverage'], [
        l('The Age of the Self-Healing Build', 
            [
                'Historically, when a CI pipeline fails, developers must manually parse esoteric Webpack or Typescript trace logs, cross-reference documentation, and author a patch. This manual diagnostic phase takes hours.', 
                'Agentic automation is fundamentally revolutionizing DevSecOps via the "Self-Healing Pipeline." By streaming raw CI error outputs directly back into a specialized reasoning agent possessing complete repository context, the system autonomously submits a surgical Pull Request repairing its own failure.',
                'The resulting economic value is massive: TTFC (Time to Fix Code) drops from 4 hours to 45 seconds, transforming DevOps from a blocker into an autonomous accelerator.'
            ],
            [
                d('Pipeline Recovery TTX', 'The time elapsed between a failed GitHub build and a finalized repair PR.', '< 2 Mins via AI'),
                d('Automated AST Repair Rate', 'The percentage of syntax typos flawlessly patched without human oversight.', 'Constantly scaling')
            ], 
            'Integrate an automated CI/CD parsing agent into your immediate test runner.', 
            ['Configure a GitHub webhook upon `Action: Failed`.', 'Pipe the exact terminal error output alongside the diff footprint into an AI summarization node.', 'Automatically post the explicit `sed` or patch command into the PR comments as a suggested fix.'], 
            {
                question: 'What is the core mechanic of a "Self-Healing" CI/CD Pipeline?',
                options: ['Using Github Copilot in the IDE', 'Automatically feeding raw terminal error traces back into a specialized LLM agent to instantly generate and submit the repair Pull Request without human intervention', 'Ignoring tests that fail occasionally (flaky tests)', 'Switching to simpler programming languages'],
                correctIndex: 1,
                explanation: 'Self-healing removes the human from the debugging loop. The machine broke the build, the machine reads the error, and the machine patches the codebase.'
            }
        )
    ], '/vault/curriculum/tracks/agentic-automation/23-6', undefined, 'live'
);

tracks23Modules['agentic-automation/23-6'] = m('23-6', 'Stateful Memory Architecture', 'Vector persistence, infinite conversational context.', t23, 
    ['Overcome context window limits', 'Deploy semantic memory graphs'], [
        l('Escaping the Finite Context Window', 
            [
                'Standard LLM chat interfaces (like ChatGPT) suffer from amnesia. Once the context window hits its maximum threshold (e.g. 128k tokens), the system violently drops early messages, destroying the logical continuity of the interaction.', 
                'Enterprise APA demands persistent, infinite Stateful Memory. This involves deploying a "Memory Summarization Agent." As a conversation expands, a background agent actively condenses older exchanges into deeply compressed semantic knowledge graphs (e.g. `User prefers X architecture`).',
                'When the user returns 6 months later, the system injects those highly compressed semantic facts directly into the system prompt, providing flawless long-term recall without burning hundreds of thousands of tokens.'
            ],
            [
                d('Memory Compression Ratio', 'The transition of 10k raw chat tokens into compressed semantic truth vectors.', 'Extreme Token Savings'),
                d('Long-Term State Retrieval', 'The absolute latency required to recall user context from a database.', '< 50ms')
            ], 
            'Execute a background summarization architecture to compress massive token chats.', 
            ['Intercept conversations exceeding 10,000 tokens.', 'Spawn an asynchronous background job instructing an LLM to extract "Critical System Facts" from the dialogue.', 'Store those facts in a Postgres DB and pre-load them strictly into the `system_prompt` on next boot.'], 
            {
                question: 'Why is relying on a massive 128k context window financially dangerous for long-term memory?',
                options: ['It uses too much database storage', 'Because every subsequent message forces you to pay the inference token cost of re-reading all 128k tokens, resulting in massive, compounding cloud bills', 'Because AI models cannot count that high', 'Because the system prompt gets confused'],
                correctIndex: 1,
                explanation: 'A sliding context window does not compress history; it forces the model to constantly re-read history. Compressing old chats into tiny summary chunks prevents this catastrophic inference tax.'
            }
        )
    ], '/vault/curriculum/tracks/agentic-automation/23-7', undefined, 'live'
);

tracks23Modules['agentic-automation/23-7'] = m('23-7', 'Human in the Loop (HITL) Scaling', 'Approval routing, UX degradation, compliance.', t23, 
    ['Map operational breakpoints', 'Optimize HITL interfaces'], [
        l('The High-Friction Scaling Crisis of HITL', 
            [
                'While "Human in the Loop" (HITL) is mandatory for security bounding destructive agent actions, it introduces massive asynchronous friction. If an agent executes 5,000 drafts per hour but requires a human manager to manually click "Approve" 5,000 times on a dashboard, the automation scaling has entirely failed.', 
                'To bypass this bottleneck, enterprises must pivot to "Human on the Loop" (HOTL). The agent acts autonomously by default, but flags transactions that possess a low underlying Confidence Score (LogProbs) for human triage.',
                'The goal is shifting human workload from granular execution approval to systemic policy reinforcement, allowing the AI to scale throughput infinitely while keeping risk contained to explicit edge cases.'
            ],
            [
                d('Manual Approval Tax', 'The exact human hour delay introduced by mandating explicit UI clicks for safe AI execution.', 'Severe Velocity Drain'),
                d('Autonomous Confidence Threshold', 'The exact LogProb certainty required for an agent to bypass human queues.', '> 98% required')
            ], 
            'Optimize your current human-validation queue to enable massive throughput.', 
            ['Review the current queue of AI actions pending human authorization.', 'Calculate the average time-in-state. If the human approves it 99% of the time, the check is redundant.', 'Establish a strict confidence threshold allowing high-certainty actions to execute silently.'], 
            {
                question: 'What is the primary operational failure of a strict "Human in the Loop" (HITL) architecture at massive scale?',
                options: ['The AI models get confused by humans', 'It entirely negates the speed and throughput benefits of automation by capping system velocity strictly at the speed of human UI clicks', 'It violates European privacy laws', 'Humans demand higher salaries'],
                correctIndex: 1,
                explanation: 'If automation requires 100% human sign-off, you haven\'t automated the work—you have simply organized the work into a massive, unscalable pending queue.'
            }
        )
    ], '/vault/curriculum/tracks/agentic-automation/23-8', undefined, 'live'
);

tracks23Modules['agentic-automation/23-8'] = m('23-8', 'The Agentic Egress Tax', 'Bandwidth spikes, infinite loops, API rate limits.', t23, 
    ['Detect infinite API looping', 'Understand the multi-agent API tax'], [
        l('Infinite Agent Looping Traps', 
            [
                'When traditional code fails, it typically crashes, producing an error logs and stopping instantly. When an Agentic AI fails to satisfy a requirement, it will often "hallucinate a retry," entering an infinite, recursive loop where it calls an external API, fails to parse it, and calls it again.', 
                'A recursive agentic loop does not crash the server—it silently executes thousands of API calls within minutes, generating massive Cloudflare egress bills and violently tripping target vendor API rate limits, bringing the entire underlying corporate account offline.',
                'A rigorous "Maximum Step Count" is a non-negotiable architectural requirement. If an agent executes its tool-loop more than 10 times without returning a definitive end-state, the architecture must kill the thread instantly.'
            ],
            [
                d('Agent Step Limit', 'The hard-coded maximum allowed recursive inference chains before forced termination.', '< 10 Iterations'),
                d('Runaway API Cost', 'The literal dollar amount burned during a 10-minute undetected hallucination loop.', 'Exponentially dangerous')
            ], 
            'Enforce a strict step-limit terminator across all autonomous internal agents.', 
            ['Locate your primary `while(agent.isRunning)` logic block.', 'Inject a hard integer counter. If `stepCount > 10`, throw a `MaxIterationsExceeded` fatal error.', 'Connect that specific error flag to a massive PagerDuty alert indicating a hallucination spiral.'], 
            {
                question: 'Why is an infinite loop in an AI Agent significantly more dangerous than an infinite loop in standard code?',
                options: ['It uses more hard drive storage', 'Because standard code crashes quickly, whereas an agent will silently execute thousands of highly expensive LLM inference tokens and third-party API calls, instantly burning massive capital', 'Because the AI learns bad habits', 'Because it prevents other developers from pushing code'],
                correctIndex: 1,
                explanation: 'An agent trying to solve a puzzle over and over will rapidly exhaust your LLM API budget and trip all external enterprise vendor rate-limits if left unchecked.'
            }
        )
    ], '/vault/curriculum/tracks/agentic-automation/23-9', undefined, 'live'
);

tracks23Modules['agentic-automation/23-9'] = m('23-9', 'Enterprise Data Sovereignty', 'Tenant isolation, PII scrubbing, compliance bounds.', t23, 
    ['Execute anonymization', 'Ensure multi-tenant vector security'], [
        l('Cross-Contamination in the Vector Database', 
            [
                'In standard SaaS, isolating Tenant A\'s SQL data from Tenant B relies on trivial `WHERE tenant_id = X` clauses. In Retrieval-Augmented Generation (RAG), failing to isolate vector records results in the LLM hallucinating Tenant A\'s highly confidential financial data into Tenant B\'s chat window.', 
                'This single architectural failure guarantees extreme GDPR violations, massive corporate lawsuits, and immediate enterprise churn. Vector databases must aggressively deploy "Namespace" isolation or hard logical partitions ensuring embeddings physically cannot cross boundaries.',
                'Furthermore, Personal Identifiable Information (PII) must be deterministically scrambled via classical Regex/NLP pipelines *before* it is ever transmitted to the embedding provider or the LLM.'
            ],
            [
                d('Vector Namespace Defensibility', 'The cryptographic assurance that a cosine search cannot access foreign tenant memory.', 'Absolute Zero Leakage'),
                d('PII Ingestion Rate', 'The percentage of raw corporate secrets sent unmasked to OpenAI/Anthropic servers.', 'Mandate 0%')
            ], 
            'Execute a simulated multi-tenant cross-contamination audit.', 
            ['Log into a staging environment under "Tenant A".', 'Explicitly ask the AI agent to summarize the proprietary documents belonging specifically to "Tenant B".', 'If the RAG retrieval returns a hit, issue an immediate architectural code-freeze on the entire product.'], 
            {
                question: 'What is the most catastrophic risk of utilizing a single, flat Vector Database Index for multiple enterprise clients?',
                options: ['The index will consume too much memory', 'The AI will inherently cross-contaminate semantic data, exposing highly secure proprietary secrets from Company A directly into Company B’s query responses', 'The embeddings will calculate slower', 'The Vector DB will crash during inserts'],
                correctIndex: 1,
                explanation: 'Unlike SQL, Vector databases search by semantic closeness. If a query semantically matches foreign data and there are no hard tenant boundaries, the LLM will weave that foreign secret data into its output.'
            }
        )
    ], '/vault/curriculum/tracks/agentic-automation/23-10', undefined, 'live'
);

tracks23Modules['agentic-automation/23-10'] = m('23-10', 'APA Capstone Metrics', 'Synthesizing the complete scale of automated inference vs manual execution.', t23, 
    ['Calculate final TCO of agent deployment', 'Verify architecture'], [
        l('The Automation Inflection Point', 
            [
                'You have fully traversed the paradigm of Agentic Process Automation (APA). Understanding that the transition from fragile RPA screen-scraping to durable, semantic API reasoning represents the largest margin expansion capability in modern enterprise history.', 
                'However, that expansion is entirely contingent on adhering to the bounds of execution capability: enforcing strict Agentic Taxes, terminating infinite hallucination loops, and protecting database state with deterministic boundaries.',
                'A single, well-architected Agent executing semantic API workflows with a highly optimized vector RAG context will fundamentally outperform a heavily staffed tier-1 operations team at a tiny fraction of the cost, securely and flawlessly.'
            ],
            [
                d('Agentic Workflow ROI', 'The absolute corporate EBITDA generated post-deployment of autonomous processes.', 'Exponential Valuation Multiplier'),
                d('Execution Integrity', 'The proven safety bounds ensuring high-volume execution without systemic risk.', 'Fully Locked')
            ], 
            'Map the final architectural roadmap for replacing a massive legacy manual pipeline.', 
            ['Ensure the LLM tool-calling endpoints are restricted purely to read-only capabilities by default.', 'Enforce vector namespacing to guarantee enterprise data sovereignty.', 'Release the agent selectively to 5% of production data and monitor the PDI score immediately.'], 
            {
                question: 'What is the ultimate financial strategy behind migrating an organization into Agentic Process Automation (APA)?',
                options: ['To replace all programming languages with Python', 'To drastically expand gross margins by converting brittle, highly-expensive human UI processes into durable, infinitely scalable semantic API compute workflows', 'To make the software look cooler for investors', 'To increase the size of the engineering team'],
                correctIndex: 1,
                explanation: 'APA represents pure economic extraction. It replaces the highest cost center (human manual latency) with near-instantaneous compute executions governed by deterministic bounds.'
            }
        )
    ], undefined, undefined, 'live'
);
