import { CurriculumModule, l, d, m } from './curriculum-data';

export const tracks28Modules: Record<string, CurriculumModule> = {};
const t28 = 'Track 28  -  Agentic Process Automation (APA)';

tracks28Modules['28/28-1'] = m('28-1', 'Beyond Rules-Based RPA', 'Action Space, DOM Understanding, Semantic Selectors', t28, 
    ['Map the Agentic Action Space', 'Diagnose brittle RPA scripts'], [
        l('The Sunset of Traditional RPA', 
            [
                'For the past decade, Robotic Process Automation (RPA) was the enterprise standard for efficiency. But RPA relies entirely on rigid, brittle XPath selectors and hardcoded coordinates. If an application updates its UI, the entire RPA pipeline violently shatters.', 
                'Agentic Process Automation (APA) replaces rigid scripts with semantic, reasoning-based autonomous agents. Instead of telling the computer exactly where to click, you give the computer a goal, and a Vision-Language Model (VLM) visually parses the screen, understands the interface via semantic deduction, and clicks the correct button regardless of where it moved.',
                'CTOs must pivot from RPA to APA immediately, or face compounding maintenance debt every time a web dependency updates its DOM.'
            ],
            [
                d('Agentic Action Space', 'The total theoretical boundary of actions a multi-modal agent can take within a given operating environment.', 'Critical Constraint'),
                d('DOM Brittleness Factor', 'The mathematical probability of an automated script failing due to upstream UI/UX changes outside of engineering control.', 'High Risk')
            ], 
            'Audit the corporate reliance on brittle RPA workflows.', 
            ['Filter operations running on legacy tools that rely on explicit script coordinates.', 'Identify high-value workflows that frequently break due to SaaS vendor updates.', 'Implement a VLM-based agent pilot to execute the workflow semantically.'], 
            {
                question: 'What fundamentally differentiates APA from legacy RPA?',
                options: ['APA requires no programming language', 'RPA relies on hardcoded coordinates and selectors; APA relies on semantic visual reasoning and autonomous goal-seeking.', 'RPA is only for finance', 'APA is faster'],
                correctIndex: 1,
                explanation: 'A company cannot scale automation if every UI update breaks the script. APA trades speed for semantic resilience.'
            }
        )
    ], '/vault/curriculum/tracks/28/28-2', undefined, 'live'
);

tracks28Modules['28/28-2'] = m('28-2', 'Fault-Tolerance in Multi-Agent Systems', 'Supervisor Nodes, Sub-Agents, Fallback Routing', t28, 
    ['Architect a Supervisor Agent route', 'Implement Fallback heuristics'], [
        l('Governing the Swarm', 
            [
                'When single agents fail, they halt. When multi-agent systems fail, they loop catastrophically. The architecture of advanced APA requires "Supervisor Nodes": deterministic routing engines that orchestrate "Sub-Agents" (e.g. a Research Agent, a Coding Agent, a QA Agent).', 
                'If the Research Agent hallucinates or fails to scrape the correct DOM layer, the Supervisor Node must dynamically intervene, rewrite the command space, and reroute the task to a Fallback Heuristic (or trigger human-in-the-loop escalation).',
                'A swarm without a deterministic Supervisor is not a product; it is a rapid liability execution engine.'
            ],
            [
                d('Supervisor Node', 'A deterministic governance layer that evaluates, routes, and validates the outputs of probabilistic sub-agents.', 'Mandatory Architecture'),
                d('Agentic Infinite Loop', 'A failure state where two agents endlessly critique and rewrite each other\'s outputs without closing the goal state.', 'Fatal Error')
            ], 
            'Map the state transitions of a multi-agent workflow.', 
            ['Define the exact API boundary where the Supervisor hands off context to a Sub-Agent.', 'Implement a maximum token budget (Epoch Sweep) constraint to force failure states instead of infinite loops.', 'Build the Deterministic Fallback UI for human review.'], 
            {
                question: 'Why must an APA Swarm have a Supervisor Node?',
                options: ['To manage billing', 'To ensure that if a probabilistic Sub-Agent hallucinates or gets stuck, a deterministic router can intervene and halt catastrophic looping.', 'To write code faster', 'It acts as the database'],
                correctIndex: 1,
                explanation: 'Never allow agents to grade their own homework. The Supervisor enforces the boundary.'
            }
        )
    ], '/vault/curriculum/tracks/28/28-3', undefined, 'live'
);

// Stubs for 3 to 10
for (let i = 3; i <= 10; i++) {
    tracks28Modules[`28/28-${i}`] = m(`28-${i}`, `Advanced Agentic Workflows ${i}`, `Expansion module for APA architecture.`, t28, 
        ['Optimize agent context limits', 'Map state machines'], [
            l(`Deep APA Economics ${i}`, 
                [
                    `Continuing the expansion into Agentic Process Automation grids. Complex agents require test-time compute.`, 
                    `The executive strategy demands recognizing that Agentic scaling is an API OpEx problem.`
                ],
                [
                    d(`Reasoning Token Lag ${i}`, `The speed degradation of an agent due to heavy system-2 logic paths.`, `Highly correlated`),
                ], 
                `Architect stringent routing.`, 
                [`Monitor the VRAM thermal logs.`], 
                {
                    question: `Why must a software company track agent autonomy limits?`,
                    options: [`They shouldn't`, `Because rogue agents can execute infinite API calls resulting in massive margin drain.`, `To help them think cooler`, `Because it prevents database corruption`],
                    correctIndex: 1,
                    explanation: `AI compute is functionally a heat-generator and margin drain.`
                }
            )
        ], i < 10 ? `/vault/curriculum/tracks/28/28-${i+1}` : undefined, undefined, 'live'
    );
}
