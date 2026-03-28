import { CurriculumModule, d } from './curriculum-data';

export const guidesComparisonsModules: Record<string, CurriculumModule> = {
    // ═══════════════════ TRACK 16: PREMIUM GUIDES ═══════════════════
    'guides/16-1': {
        moduleId: '16-1',
        title: 'How to Deploy Small Language Models (SLMs)',
        trackName: 'Track 16 — Executive Playbooks & Guides',
        description: 'The complete playbook for running local, quantized inference to bypass API monopolization.',
        takeaways: [
            'Mastering 4-bit and 8-bit QLoRA strategies',
            'Deploying Llama.cpp and Ollama inside enterprise perimeters',
            'Cost reduction mapping from GPT-4o to Llama 3 8B'
        ],
        nextHref: '/vault/curriculum/tracks/guides/16-2',
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
        trackName: 'Track 16 — Executive Playbooks & Guides',
        description: 'Establishing security frontiers for LLM usage in regulated enterprise environments.',
        takeaways: [
            'Mapping the EU AI Act to your software architecture',
            'Implementing Data Loss Prevention (DLP) for Copilots',
            'Audit trails for stochastic functions'
        ],
        nextHref: '/vault/curriculum/tracks/guides/16-3',
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
        trackName: 'Track 16 — Executive Playbooks & Guides',
        description: 'How to structure, resource, and lead engineering teams augmented by AI.',
        takeaways: [
            'Defining the new "10x Developer" baseline',
            'Structuring squads with integrated autonomous agents',
            'Refactoring the hiring process for AI-native skills'
        ],
        nextHref: '/vault/curriculum/tracks/guides/16-4',
        lessons: [
            {
                title: 'The New Developer Baseline',
                content: 'Copilots have eliminated the junior plateau. Engineering velocity should now be constrained by architectural vision, not syntax generation.',
                details: [d('Code Acceptance Rate', 'The percentage of AI-generated syntax successfully committed.', '≥ 45%')],
                exercise: 'Measure your team’s current acceptance rate via GitHub telemetry.'
            },
            {
                title: 'Autonomous Code Review Bots',
                content: 'Integrate agents into the CI/CD pipeline. PRs are initially reviewed by fine-tuned LLMs strictly checking against organizational style paradigms, unit tests, and security heuristics before human intervention.',
                details: [d('Review Cycle Time', 'The elapsed time between PR open and first valid review.', '≤ 5 mins')],
                exercise: 'Deploy a Claude-3.5 hook onto your staging repository.'
            }
        ]
    },

    // ═══════════════════ TRACK 17: FRAMEWORK COMPARISONS ═══════════════════
    'comparisons/17-1': {
        moduleId: '17-1',
        title: 'Next.js vs Remix vs Astro for 2026',
        trackName: 'Track 17 — Technical Framework Comparisons',
        description: 'Evaluating edge capabilities, RSC latency, and caching strategies for modern web architecture.',
        takeaways: [
            'Cost comparison of Vercel Edge vs Cloudflare Workers',
            'RSC payload efficiency metrics',
            'Migration cost calculus from legacy SPAs'
        ],
        nextHref: '/vault/curriculum/tracks/comparisons/17-2',
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
        trackName: 'Track 17 — Technical Framework Comparisons',
        description: 'Evaluating unit costs, coding proficiency, and agentic orchestration efficiency.',
        takeaways: [
            'Token efficiency algorithms for high-volume logs',
            'Context window degradation tests at 200K tokens',
            'Benchmarking latency for cascading agent networks'
        ],
        nextHref: '/vault/curriculum/tracks/comparisons/17-3',
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
    }
};
