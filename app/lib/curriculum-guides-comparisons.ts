import { CurriculumModule, d } from './curriculum-data';

export const guidesComparisonsModules: Record<string, CurriculumModule> = {
    // ═══════════════════ TRACK 16: PREMIUM GUIDES ═══════════════════
    'guides/16-1': {
        moduleId: '16-1',
        title: 'How to Deploy Small Language Models (SLMs)',
        trackName: 'Track 16  -  Executive Playbooks & Guides',
        description: 'The complete playbook for running local, quantized inference to bypass API monopolization.',
        takeaways: [
            'Mastering 4-bit and 8-bit QLoRA strategies',
            'Deploying Llama.cpp and Ollama inside enterprise perimeters',
            'Cost reduction mapping from GPT-4o to Llama 3 8B'
        ],
        nextHref: '/vault/curriculum/tracks/guides/16-2',
        productId: 'premium_guide_79',
        bundleId: 'premium_bundle_ultimate',
        lessons: [
            {
                title: 'Introduction: The API Margin Tax',
                content: 'Relying exclusively on hyperscalers for LLM inference introduces a permanent Margin Tax on your product. Every request costs compute. By deploying Small Language Models (SLMs) locally, you sever the transaction cost.',
                details: [d('Inference Margin', 'The compounding cost of per-token API billing over a 36-month horizon.', 'Zero-Cost Edge')],
                exercise: 'Identify your three highest-volume AI primitives. Could they be resolved by an 8B perimeter model?'
            },
            {
                title: 'Quantization Architectures',
                content: 'You cannot casually load an FP16 model into an edge server without extreme cloud waste. Converting models via GGUF format down to 4-bit quantization reduces VRAM requirements by over 70% while suffering less than a 3% fidelity loss.',
                details: [d('VRAM Footprint', 'The RAM allocation required per billion parameters at defined precision.', '≤ 8GB RAM')],
                exercise: 'Allocate your target node type and select a quantization matrix.'
            },
            {
                title: 'Local Edge Deployment Strategy',
                content: 'Execute deployment using containerized endpoints. By placing Ollama instances directly adjacent to the backend services, network latency is completely eliminated. Use fallback routing to hit GPT-4o only if the edge model fails a confidence threshold.',
                details: [d('Network Latency', 'The physical time lost transiting the internet to Anthropic/OpenAI data centers.', '≤ 50ms')],
                exercise: 'Sketch the fallback routing architecture using an API gateway pattern.'
            }
        ]
    },
    'guides/16-2': {
        moduleId: '16-2',
        title: 'AI Governance & Compliance Audit',
        trackName: 'Track 16  -  Executive Playbooks & Guides',
        description: 'Establishing security frontiers for LLM usage in regulated enterprise environments.',
        takeaways: [
            'Mapping the EU AI Act to your software architecture',
            'Implementing Data Loss Prevention (DLP) for Copilots',
            'Audit trails for stochastic functions'
        ],
        nextHref: '/vault/curriculum/tracks/guides/16-3',
        productId: 'premium_guide_129',
        bundleId: 'premium_bundle_ultimate',
        lessons: [
            {
                title: 'The AI Attack Surface',
                content: 'Integrating external AI directly exposes internal PII. Unbounded context windows mean an attacker can execute prompt injection to extract data.',
                details: [d('Blast Radius', 'The theoretical limit of unauthorized data extraction via prompt injection.', 'Zero-Trust Context')],
                exercise: 'Audit your current prompt context window for compliance violations.'
            },
            {
                title: 'Implementing Strict PII Scrubbing',
                content: 'Before any packet leaves the perimeter for inference, it must pass through an outbound DLP gateway. Implement Named Entity Recognition (NER) models locally to anonymize data BEFORE sending it to a third-party LLM.',
                details: [d('DLP Latency', 'The time cost of sanitizing a prompt before transmission.', '≤ 30ms')],
                exercise: 'Deploy local Presidio or Microsoft PII instances in your staging cluster.'
            }
        ]
    },
    'guides/16-3': {
        moduleId: '16-3',
        title: 'Building AI-Native Engineering Teams',
        trackName: 'Track 16  -  Executive Playbooks & Guides',
        description: 'How to structure, resource, and lead engineering teams augmented by AI.',
        takeaways: [
            'Defining the new "10x Developer" baseline',
            'Structuring squads with integrated autonomous agents',
            'Refactoring the hiring process for AI-native skills'
        ],
        nextHref: '/vault/curriculum/tracks/guides/16-4',
        productId: 'premium_guide_99',
        bundleId: 'premium_bundle_ultimate',
        lessons: [
            {
                title: 'The New Developer Baseline',
                content: 'Copilots have eliminated the junior plateau. Engineering velocity should now be constrained by architectural vision, not syntax generation.',
                details: [d('Code Acceptance Rate', 'The percentage of AI-generated syntax successfully committed.', '≥ 45%')],
                exercise: 'Measure your team’s current acceptance rate via GitHub telemetry.'
            },
            {
                title: 'Autonomous Code Review Bots',
                content: 'Integrate agents into the CI/CD pipeline. PRs are initially reviewed by fine-tuned LLMs strictly checking against organizational style standards, unit tests, and security heuristics before human intervention.',
                details: [d('Review Cycle Time', 'The elapsed time between PR open and first valid review.', '≤ 5 mins')],
                exercise: 'Deploy a Claude-3.5 hook onto your staging repository.'
            }
        ]
    },

    // ═══════════════════ TRACK 15: FREE PLAYBOOKS ═══════════════════
    'guides/cto-first-90-days': {
        moduleId: '15-1',
        title: 'The CTO\'s First 90 Days',
        trackName: 'Track 15  -  Free Playbooks',
        description: 'The definitive playbook for establishing technical authority, assessing architecture, and stabilizing team morale during an executive transition.',
        takeaways: [
            'How to conduct a 360-degree technical debt audit',
            'Establishing the product-engineering trust bridge',
            'Setting up your first 90-day objective roadmap'
        ],
        lessons: [
            {
                title: 'Days 1-30: Reconnaissance & Trust Building',
                content: 'Do not touch the codebase. The first 30 days are purely for establishing baseline metrics, conducting 1:1s, and identifying single points of failure. Your goal is to map the informal power structures that dictate how code actually ships.',
                details: [d('1:1 Coverage', 'Percentage of engineering org spoken to personally.', '100% of Leads')],
                exercise: 'Draft the agenda for your first engineering all-hands. What is the single most important message?'
            },
            {
                title: 'Days 31-60: Architectural Audit & Immediate Interventions',
                content: 'Execute the PDI audit. Identify the highest friction paths in the CI/CD pipeline and eliminate the most obvious bottleneck. This builds immediate credibility with the IC layer.',
                details: [d('Quick Win Delivery', 'Time to first major friction removal for developers.', '< 45 Days')],
                exercise: 'Identify the top 3 developer complaints. Which one can be solved in 48 hours?'
            }
        ]
    },
    'guides/technical-debt': {
        moduleId: '15-2',
        title: 'The Definitive Guide to Technical Debt',
        trackName: 'Track 15  -  Free Playbooks',
        description: 'How to classify, quantify, and remediate technical debt using the Product Debt Index (PDI).',
        takeaways: [
            'PDI Framework quantification',
            'Innovation Tax reporting',
            'Technical Insolvency warning signs'
        ],
        lessons: [
            {
                title: 'The Board-Level Vocabulary for Tech Debt',
                content: 'Never use the term "refactoring" in a board meeting. Translate technical debt into financial metrics: Innovation Tax (lost EBITDA) and Risk Exposure.',
                details: [d('Innovation Tax', 'The percentage of engineering payroll spent wrestling legacy systems instead of building.', 'Target: <20%')],
                exercise: 'Calculate your current Innovation Tax. How much is it costing per quarter?'
            }
        ]
    },
    'guides/build-vs-buy': {
        moduleId: '15-3',
        title: 'Build vs. Buy Economics',
        trackName: 'Track 15  -  Free Playbooks',
        description: 'The $500K Decision Framework for deciding when to write code and when to swipe a credit card.',
        takeaways: [
            'Total Cost of Ownership (TCO) models',
            'Vendor Lock-in Risk vs Opportunity Cost',
            'The API Margin Tax calculation'
        ],
        lessons: [
            {
                title: 'The True Cost of In-House Software',
                content: 'Building in-house costs 3-5x the initial estimate. The maintenance tail is roughly 20% of the build cost annually, forever.',
                details: [d('Maintenance Burden', 'Annual engineering cost to keep custom software alive.', '~20% of Build Cost')],
                exercise: 'Audit your internal tooling. What custom system should be ripped out and replaced with SaaS?'
            }
        ]
    },
    'guides/engineering-efficiency': {
        moduleId: '15-4',
        title: 'Engineering Efficiency Blueprint',
        trackName: 'Track 15  -  Free Playbooks',
        description: 'How elite organizations measure and optimize output using DORA and APER.',
        takeaways: [
            'DORA vs PDI integration',
            'Revenue Per Engineer (RPE) benchmarking',
            'Closing the throughput gap'
        ],
        lessons: [
            {
                title: 'Revenue Per Engineer (RPE)',
                content: 'Elite companies generate $1M+ per engineer. Average companies generate $200K. The gap isn\'t talent; it\'s organizational friction and tooling.',
                details: [d('RPE Baseline', 'Annual revenue divided by total engineering headcount.', 'Target: >$500K')],
                exercise: 'Calculate your company\'s RPE. Where does it sit relative to the industry benchmark?'
            }
        ]
    },
    'guides/product-economics': {
        moduleId: '15-5',
        title: 'AI Economics & Unit Profitability',
        trackName: 'Track 15  -  Free Playbooks',
        description: 'Every feature has a P&L. Learn to calculate per-feature profitability and execute the Kill Switch Protocol on zombie features.',
        takeaways: [
            'Feature-level P&L tracking',
            'The Kill Switch Protocol',
            'Serverless unit economics'
        ],
        lessons: [
            {
                title: 'Killing Zombie Features',
                content: 'The most profitable code is the code you delete. Features that cost more in infrastructure and maintenance than they generate in ARR are actively destroying value.',
                details: [d('Feature Utilization', 'Percentage of DAUs engaging with a specific feature.', '>10% for Core')],
                exercise: 'Identify the lowest utilized feature in your product. Draft a deprecation plan.'
            }
        ]
    },

    // ═══════════════════ TRACK 17: FRAMEWORK COMPARISONS ═══════════════════
    'comparisons/17-1': {
        moduleId: '17-1',
        title: 'Next.js vs Remix vs Astro for 2026',
        trackName: 'Track 17  -  Technical Framework Comparisons',
        description: 'Evaluating edge capabilities, RSC latency, and caching strategies for modern web architecture.',
        takeaways: [
            'Cost comparison of Vercel Edge vs Cloudflare Workers',
            'RSC payload efficiency metrics',
            'Migration cost calculus from legacy SPAs'
        ],
        lessons: [
            {
                title: 'Server-Side Rendering Economics',
                content: 'SSR is not free. Continual server compute drastically alters your unit economics compared to static CDNs. If you rely on Vercel Edge compute, you must calculate the cost per million invocations.',
                details: [d('Invocation Cost', 'The aggregate financial cost of computing React nodes dynamically per region.', '$0.50/M Req')],
                exercise: 'Calculate your monthly SSR projected cost based on current DAU.'
            },
            {
                title: 'RSC Architectural Boundaries',
                content: 'React Server Components (RSC) push rendering to the network edge, but introduce heavy reliance on continuous network availability. Contrast this with Astro’s Island architecture which hydrates strictly on interaction.',
                details: [d('TTI (Time to Interactive)', 'The delay until the JavaScript thread is idle and primary components are active.', '≤ 1s')],
                exercise: 'Audit your current Next.js tree to find leaking client boundaries.'
            }
        ]
    },
    'comparisons/17-2': {
        moduleId: '17-2',
        title: 'Anthropic Claude 3.5 vs OpenAI GPT-4o',
        trackName: 'Track 17  -  Technical Framework Comparisons',
        description: 'Evaluating unit costs, coding proficiency, and agentic orchestration efficiency.',
        takeaways: [
            'Token efficiency algorithms for high-volume logs',
            'Context window degradation tests at 200K tokens',
            'Benchmarking latency for cascading agent networks'
        ],
        lessons: [
            {
                title: 'Inference Precision & Degradation',
                content: 'At 150K+ tokens, models experience "Lost in the Middle" syndrome. Claude 3.5 Sonnet historically outperforms on deep needle-in-haystack retrieval compared to GPT-4o.',
                details: [d('Retrieval Accuracy', 'The objective success rate of a model answering questions located at varying depths in the context buffer.', '≥ 95% at 100K')],
                exercise: 'Build a benchmark test evaluating your own log data context.'
            },
            {
                title: 'Token Economics (AUEB)',
                content: 'Orchestrating autonomous agents means token cascades. A $5/M prompt API can quickly bankrupt a high-frequency system. GPT-4o mini offers intense leverage for router tasks, saving the expensive inference for complex reasoning.',
                details: [d('Route Token Optimization', 'Cost efficiency gained by passing simple tasks to lower-tier models.', '85% Cost Delta')],
                exercise: 'Implement a Router LLM layer to classify intent before executing.'
            }
        ]
    },
    'comparisons/17-3': {
        moduleId: '17-3',
        title: 'PDI vs DORA Metrics',
        trackName: 'Track 17  -  Technical Framework Comparisons',
        description: 'Financial Health vs Delivery Speed. How to combine both frameworks for board-level reporting.',
        takeaways: [
            'When to use DORA vs PDI',
            'Presenting DORA to eng and PDI to the board',
            'Mapping engineering velocity to financial outcomes'
        ],
        lessons: [
            {
                title: 'Complementary Frameworks',
                content: 'DORA measures delivery speed. PDI measures technology capital health. Organizations using only DORA often miss $500K-$2M in hidden technical debt. Adding PDI to your dashboard reveals the financial exposure behind velocity metrics.',
                details: [d('Metric Blind Spots', 'Areas where DORA fails to capture balance sheet risk.', 'Addressed by PDI')],
                exercise: 'Cross-reference your current DORA lead time against your PDI Tech Debt ratio.'
            }
        ]
    },
    'comparisons/17-4': {
        moduleId: '17-4',
        title: 'Agile vs Kanban',
        trackName: 'Track 17  -  Technical Framework Comparisons',
        description: 'Sprint-based vs flow-based delivery: mapping team topology to the correct operational methodology.',
        takeaways: [
            'The ceremony overhead of Scrum',
            'Cycle time reduction in Kanban',
            'Transitioning ops teams out of Sprints'
        ],
        lessons: [
            {
                title: 'The Cost of Misaligned Methodology',
                content: 'Forcing Scrum on infrastructure teams creates immense ceremony overhead. Ops work is interrupt-driven flow. Moving them to Kanban with strict WIP limits immediately increases throughput.',
                details: [d('WIP Limit Efficiency', 'The percentage throughput increase after enforcing WIP limits.', '+35% Output')],
                exercise: 'Identify one team currently struggling with sprint commitments. Can they move to Kanban?'
            }
        ]
    },
    'comparisons/17-5': {
        moduleId: '17-5',
        title: 'Monolith vs Microservices',
        trackName: 'Track 17  -  Technical Framework Comparisons',
        description: 'The architectural decision that costs $2M to reverse. When to split the monolith.',
        takeaways: [
            'Conway\'s law and team topology',
            'The latency penalty of distributed networks',
            'Horizontal vs Vertical scaling economics'
        ],
        lessons: [
            {
                title: 'Premature Microservices',
                content: 'Startouts building microservices from Day 1 incur a massive DevOps and integration penalty. The rule of thumb: do not extract a service until the team boundaries necessitate it.',
                details: [d('Distributed Latency', 'The added network hop time for inter-service communication.', '+10-50ms')],
                exercise: 'Calculate the DevOps overhead of your current microservices architecture vs a monolith.'
            }
        ]
    }
};
