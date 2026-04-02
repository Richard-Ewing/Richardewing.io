import { CurriculumModule, l, d, m } from './curriculum-data';

export const tracks26Modules: Record<string, CurriculumModule> = {};
const t26 = 'Track 26 — Multi-Agent Architectures';

tracks26Modules['multi-agent/26-1'] = m('26-1', 'The Semantic Router Paradigm', 'Replacing conditional if/else logic with dynamic classification nodes.', t26, 
    ['Eliminate brittle conditionals', 'Deploy semantic routers'], [
        l('Eradicating the IF Statement', 
            [
                'For fifty years, software engineering has relied entirely on rigid, deterministic `if/else` conditional trees. If a user inputs exactly the expected string, the logic branches. If the user misspells a word or phrases the intent slightly differently, the rigid conditional tree shatters and fails.', 
                'In the modern Multi-Agent framework, we replace brittle regex conditionals entirely with a "Semantic Router." Incoming user intents are mathematically transformed into high-dimensional vectors and evaluated against an explicit multi-dimensional conceptual space.',
                'This means you no longer program exact routing paths. You deploy an incredibly fast, highly optimized localized model purely tasked with categorizing the mathematical intent of the input, dynamically dispatching that payload to the correct specialized downstream sub-agent without utilizing a single line of hardcoded conditional logic.'
            ],
            [
                d('Deterministic Rigidity Tax', 'The immense developer time wasted writing infinite RegEx edge-cases for user spelling errors.', 'Annihilated via Vector routing'),
                d('Semantic Dispatch Latency', 'The microsecond lag incurred by categorizing intents algorithmically.', 'Must be < 50ms locally')
            ], 
            'Strip a massive, complicated conditional logic block out of an existing routing layer.', 
            ['Identify a chatbot or heavy internal CLI wizard running on massive `Switch/Case` statements.', 'Replace the routing block with an explicit `SemanticRouter` implementation using FastEmbed.', 'Test the routing by submitting wildly misspelled, highly ambiguous text and observing the flawless mathematical distribution.'], 
            {
                question: 'What is the massive architectural advantage of a Semantic Router over traditional programmatic conditionals?',
                options: ['It compiles faster in Webpack', 'It categorizes raw intent mathematically, allowing it to correctly route highly ambiguous, misspelled, or uniquely phrased user inputs without requiring developers to constantly write infinite `if/else` edge cases', 'It uses less data in Postgres', 'It automatically creates UI buttons'],
                correctIndex: 1,
                explanation: 'A mathematical boundary understands meaning. An `if (text === "refund")` block only understands exact syntactic matching. Semantic routers understand intent.'
            }
        )
    ], '/vault/curriculum/tracks/multi-agent/26-2', undefined, 'live'
);

tracks26Modules['multi-agent/26-2'] = m('26-2', 'Hierarchical Agent Guilds', 'Supervisor nodes, worker separation of concerns, inference loops.', t26, 
    ['Separate reasoning from doing', 'Establish strict agent hierarchy'], [
        l('The Division of Algorithmic Labor', 
            [
                'A single monolithic LLM instructed to "Write code, run the code, check the database, and email the user" will inextricably fail. Just as a human developer becomes overwhelmed by massive simultaneous context switching, an LLM suffers devastating cognitive decline when forced to juggle wildly disparate tools and constraints simultaneously.', 
                'Architectural dominance requires establishing "Hierarchical Agent Guilds." You deploy one explicit Supervisor Node responsible exclusively for maintaining the holistic roadmap. The Supervisor does not execute tasks; it commands specialized Worker Nodes.',
                'Worker nodes possess extreme limitations. The "SQL Extraction" worker has no idea how to send an email; it solely knows database schemas. By strictly dividing the labor, you enforce separation of concerns, drastically dropping hallucination rates to zero.'
            ],
            [
                d('Monolithic Task Failure Rate', 'The percentage of complex multi-step instructions that collapse mid-execution in a single agent.', '> 80% Failure Rate'),
                d('Hierarchical Delegation Efficacy', 'The massive increase in accuracy achieved by confining agents to single-purpose schemas.', 'Sustained Excellence')
            ], 
            'Decouple an overloaded LLM prompt into an explicit Supervisor/Worker architecture.', 
            ['Review an existing massive system prompt containing instructions for 4 different functional domains.', 'Extract those domains into 4 entirely distinct agent personas stripped of all irrelevant tools.', 'Code a rigid Supervisor loop (e.g. LangGraph) that delegates tasks to the workers sequentially.'], 
            {
                question: 'Why does cramming multiple functional capabilities into a single monolithic AI Agent severely degrade performance?',
                options: ['It uses too much internet bandwidth', 'It induces massive cognitive decline within the model due to overlapping, heavily constrained instructions, resulting in severe hallucinations and mixed output formatting', 'It restricts the use of Javascript', 'It causes the server to overheat'],
                correctIndex: 1,
                explanation: 'Just like heavily overloaded monolithic code functions, an overloaded prompt creates fragile execution flow. Separation of Concerns applies equally to Artificial Intelligence prompts.'
            }
        )
    ], '/vault/curriculum/tracks/multi-agent/26-10', undefined, 'live'
);

for (let i = 3; i <= 10; i++) {
    tracks26Modules[`multi-agent/26-${i}`] = m(`26-${i}`, `Advanced Swarm Protocols ${i}`, `Expansion module tracking deep multi-agent routing boundaries.`, t26, 
        ['Optimize node communication', 'Calculate total swarm token spend', 'Establish deterministic execution barriers'], [
            l(`Deep Swarm Architecture ${i}`, 
                [
                    `Continuing the expansion into complex multi-agent swarms. Allowing multiple distinct narrow LLMs to debate, code, test, and merge operations asynchronously without human intervention.`, 
                    `The executive strategy demands profound tracing over the inter-agent conversational loops. If a coding agent argues endlessly with a testing agent, the compounding inference bill will scale into infinity.`,
                    `The architecture absolutely mandates hard deterministic stop bounds on recursive swarm debate cycles.`
                ],
                [
                    d(`Inter-Agent Volatility Loop ${i}`, `The risk of multiple LLM nodes becoming trapped in an infinite recursive debate.`, `Mitigated via hard counters`),
                    d(`Task Finality Optimization ${i}`, `The speed at which the final Supervisor signs off on the distributed package.`, `Sustained`)
                ], 
                `Architect stringent state machines enveloping internal agent dialogue mechanics.`, 
                [`Integrate rigid cyclic limits within LangGraph loops.`, `Monitor the active token burn per agent conversation layer.`, `Force output termination after the 3rd iteration regardless of success metrics.`], 
                {
                    question: `Why must extreme limits be placed on the internal conversational depth of a Multi-Agent Swarm?`,
                    options: [`They start to talk too fast`, `Multiple agents critiquing each other can easily fall into an infinite logical recursion ring, burning vast reserves of API capital without ever delivering a resolved outcome`, `It makes the architecture diagram too confusing`, `Because the cloud provider will terminate the account automatically`],
                    correctIndex: 1,
                    explanation: `AI models don't get bored. If you instruct them to find perfection, they will argue forever. You must algorithmically mandate a strict stop condition to protect capital.`
                }
            )
        ], i < 10 ? `/vault/curriculum/tracks/multi-agent/26-${i+1}` : undefined, undefined, 'live'
    );
}
