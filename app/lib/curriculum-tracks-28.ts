import { CurriculumModule, l, d, m } from './curriculum-data';

export const tracks28Modules: Record<string, CurriculumModule> = {};
const t28 = 'Track 28 — AI Hardware Economics & Energy Constraints';

tracks28Modules['hardware-economics/28-1'] = m('28-1', 'The Atomic Constraint of Compute', 'Nvidia monopolies, cluster fabrication, and geopolitical rationing.', t28, 
    ['Navigate the GPU supply chain', 'Identify sovereign compute risk'], [
        l('The Eradication of Infinite Supply', 
            [
                'For the past twenty years of web engineering, hardware was an invisible commodity. If a SaaS company needed more power, they clicked a button on AWS and rented an infinite supply of generic CPU instances. In the Artificial Intelligence era, this paradigm has violently collapsed.', 
                'Training and inferencing 2026-era frontier LLMs mandate interconnected clusters of highly specialized, massive GPU architecture (e.g., Nvidia H100s, B200s). These components are not commodities; they are severely constrained geopolitical weapons actively rationed by nation-states.',
                'CTOs must now transition from "Cloud Software Consumers" to "GPU Supply Chain Forecasters." The failure to secure dedicated compute allocations means an organization physically cannot run its proprietary fine-tuned models, suffering absolute infrastructural death.'
            ],
            [
                d('Hardware Extinction Risk', 'The probability of a cloud provider instantly revoking your GPU lease to fulfill a Sovereign AI military contract.', 'Critical Enterprise Threat'),
                d('Cluster Availability Rate', 'The percentage of time dedicated high-end inference hardware is actually attainable.', 'Highly constrained')
            ], 
            'Audit the corporate reliance on shared multi-tenant AI hardware.', 
            ['Filter operations running on generic, on-demand GPU cloud instances.', 'Identify critical intelligence paths that would instantly die if the provider experiences a capacity crunch.', 'Draft a multi-cloud GPU redundancy strategy securing reserve compute clusters across disjointed providers.'], 
            {
                question: 'What fundamentally differentiates the AI GPU market from the traditional Cloud CPU market?',
                options: ['GPUs use a different programming language', 'Standard CPUs are an infinitely available cheap commodity; AI GPUs are severely scarce, geopolitically controlled hardware components that can be entirely rationed out of the open market', 'GPUs only work for video games', 'CPUs are faster'],
                correctIndex: 1,
                explanation: 'A company cannot scale its intelligence if it literally cannot turn on the servers. AI fundamentally forces software companies to understand hardware supply chains.'
            }
        )
    ], '/vault/curriculum/tracks/hardware-economics/28-2', undefined, 'live'
);

tracks28Modules['hardware-economics/28-2'] = m('28-2', 'Serverless GPU Amortization', 'CapEx vs OpEx scaling, cluster utilization rates.', t28, 
    ['Calculate true utilization', 'Pivot to Serverless GPU rendering'], [
        l('The Mathematical Trap of Bare Metal', 
            [
                'Driven by panic surrounding compute scarcity, many enterprises blindly purchase massive on-premise GPU clusters as a pure Capital Expenditure (CapEx). They spend $500,000 on physical hardware to run an internal Agentic Copilot.', 
                'The mathematical trap occurs in cluster utilization. If the Copilot is only intensely used between 9 AM and 5 PM on weekdays, the massive physical GPU cluster sits completely idle for 70% of the week, utterly destroying corporate EBITDA with catastrophic depreciation cycles.',
                'Elite FinOps forces spiky, unpredictable AI workloads entirely onto "Serverless GPU" platforms (Modal, Baseten, RunPod). These platforms bill purely by the millisecond of active execution, absorbing the idle tax entirely. Only massive, highly sustained, mathematically flat workloads should ever be repatriated to physical CapEx scaling.'
            ],
            [
                d('Cluster Idle Time Penalty', 'The horrific cash bleed of operating an incredibly expensive $30,000 graphics card while users are asleep.', 'Extreme Valuation Drain'),
                d('Serverless Execution Yield', 'The total cost savings achieved by instantaneously spinning physical hardware up to 100% capacity and violently dropping it to 0%.', 'High Return')
            ], 
            'Architect a Financial Operations (FinOps) split covering variable intelligence payloads.', 
            ['Identify internal AI workloads that run constantly 24/7 (e.g. background data vectorization).', 'Identify spiky user-facing workloads (e.g. Sales Chatbots).', 'Push the spiky workloads exclusively onto millisecond-billed Serverless GPU execution networks.'], 
            {
                question: 'Why is it functionally dangerous for a standard SaaS company to buy massive physical GPU clusters (CapEx) for a new user-facing AI tool?',
                options: ['The servers are too noisy', 'User-facing SaaS workloads are spiky. Purchasing physical hardware means the company pays the massive, compounding depreciation cost during the night and on weekends when the cluster is completely idle', 'The internet connection is too slow', 'It breaks the API'],
                correctIndex: 1,
                explanation: 'Idle time on a commodity server costs a few dollars. Idle time on a $40,000 H100 cluster geometrically collapses a company’s financial runway.'
            }
        )
    ], '/vault/curriculum/tracks/hardware-economics/28-10', undefined, 'live'
);

for (let i = 3; i <= 10; i++) {
    tracks28Modules[`hardware-economics/28-${i}`] = m(`28-${i}`, `Advanced Cluster Architectures ${i}`, `Expansion module tracking deep thermal constraints and energy bidding.`, t28, 
        ['Optimize thermal throttling delays', 'Calculate strict PUE metrics', 'Govern cluster depreciation limits'], [
            l(`Deep Energy Economics ${i}`, 
                [
                    `Continuing the expansion into AI infrastructure capacity grids. A 10,000 GPU cluster requires the literal electricity output of a small nuclear reactor.`, 
                    `The executive strategy demands recognizing that AI scaling is no longer a software problem; it is a thermodynamics problem. Companies will increasingly be forced to construct data centers in freezing climates to mitigate the colossal cost of HVAC systems.`,
                    `The architecture absolutely mandates tracking Power Usage Effectiveness (PUE) as a direct software gross-margin constraint.`
                ],
                [
                    d(`Thermal Throttling Lag ${i}`, `The speed degradation of an LLM inference directly caused by the physical cluster overheating.`, `Highly correlated`),
                    d(`Energy Cost Index ${i}`, `The shifting cost of generating one Trillion tokens based entirely on the local utility power grid.`, `Must hedge`)
                ], 
                `Architect stringent routing based on physical node temperatures.`, 
                [`Integrate global load balancing that routes massive training runs to data centers experiencing nighttime temperature drops.`, `Monitor the VRAM thermal logs.`, `Force manual override tracking on regional electricity wholesale grids.`], 
                {
                    question: `Why must a software company producing LLMs care intensely about HVAC cooling systems?`,
                    options: [`They shouldn't, that is for the IT department`, `Because the vast majority of the actual variable operational cost (OpEx) of processing an AI inference query is the sheer electricity required to physically cool the super-heated chips`, `It helps the developers work comfortably`, `Because it prevents database corruption`],
                    correctIndex: 1,
                    explanation: `AI compute is functionally a heat-generator. The margin of your software product is directly inverse to the cost of the electricity required to cool the racks your software runs on.`
                }
            )
        ], i < 10 ? `/vault/curriculum/tracks/hardware-economics/28-${i+1}` : undefined, undefined, 'live'
    );
}
