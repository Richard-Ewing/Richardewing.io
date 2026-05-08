import { CurriculumModule, m, l, d } from './curriculum-data';

export function populateTrack28(modules: Record<string, CurriculumModule>) {
    modules['ai-economist/28-1'] = m(
        '28-1',
        '28.1 The Core Philosophy: From Product Management to Capital Allocation',
        'Understand the fundamental transition required to move from traditional feature delivery to rigorous AI capital allocation.',
        'The AI Economist Masterclass',
        [
            'The end of the "Happy Builder" era: Why shipping features is no longer the primary metric of success.',
            'Defining the AI Economist: A leader who treats product decisions as strict economic and capital allocation decisions.',
            'The failure of Agile in the AI era: Why velocity and story points cannot measure the profitability of intelligence.',
            'Translating engineering output into EBITDA protection and gross margin expansion.',
            'The organizational mandate required to establish an AI Economics function.'
        ],
        [
            l(
                'Establishing Capital Sovereignty',
                'You are no longer a project manager tracking Jira tickets. You are an auditor of R&D capital. Every prompt, every embedding, and every inference call is a direct financial liability. Your job is to maximize the Return on Invested Capital (ROIC) for every token processed.',
                [
                    d('AI Economist', 'A leader who measures product decisions in ROIC, not velocity.', 'The evolution of Product Management'),
                    d('Capital Allocation', 'Deciding exactly where engineering resources are deployed to maximize financial return.', 'The primary duty of the AI Economist'),
                    d('EBITDA Protection', 'Defending the company’s bottom line against runaway inference costs and technical debt.', 'The ultimate success metric')
                ],
                'Audit your current product roadmap. Identify the top three features that consume the most engineering capital but offer the least defensible ROI.'
            )
        ]
    );

    modules['ai-economist/28-2'] = m(
        '28-2',
        '28.2 Quantifying AI Value: Unit Economics of LLMs and Agents',
        'Master the financial modeling required to accurately calculate the Synthetic COGS and unit profitability of generative AI features.',
        'The AI Economist Masterclass',
        [
            'Moving beyond the API pricing page: Calculating the total cost of ownership for RAG systems.',
            'The AI Unit Economics Benchmark (AUEB) methodology for modeling token costs.',
            'Input vs. Output asymmetry: Why generation is exponentially more expensive than comprehension.',
            'The hidden costs of vector databases, embedding models, and semantic caching.',
            'Determining the Margin Collapse Threshold for high-frequency AI users.'
        ],
        [
            l(
                'Deconstructing Synthetic COGS',
                'If you do not know exactly how much a single user interaction costs your infrastructure, you are flying blind. The AI Economist breaks down every feature into a precise ledger of input tokens, compute latency, retrieval overhead, and output generation costs.',
                [
                    d('Synthetic COGS', 'Intelligence reclassified as a direct, variable cost of goods sold.', 'Fundamentally alters gross margins'),
                    d('Margin Collapse Threshold', 'The exact usage volume where a customer becomes unprofitable.', 'Must be modeled pre-launch'),
                    d('AUEB', 'AI Unit Economics Benchmark.', 'The core financial tool of the AI Economist')
                ],
                'Calculate the exact Synthetic COGS for a single interaction with your most popular AI feature, including embedding, retrieval, and inference.'
            )
        ]
    );

    modules['ai-economist/28-3'] = m(
        '28-3',
        '28.3 The Shadow AI Audit: Discovering and Valuing Rogue AI',
        'Learn how to identify, quantify, and govern unauthorized AI usage and "rogue" integrations across the enterprise.',
        'The AI Economist Masterclass',
        [
            'Defining Shadow AI: Unauthorized LLM usage, rogue API keys, and unvetted open-source models.',
            'The compounding financial risk of orphaned AI scripts and unmonitored token consumption.',
            'Conducting a comprehensive organizational audit to surface hidden AI liabilities.',
            'The Security vs. Economics intersection: How rogue AI creates massive data exfiltration risks.',
            'Implementing the Deterministic Control Plane to lock down unauthorized model access.'
        ],
        [
            l(
                'Governing the Unseen',
                'Engineers will always take the path of least resistance. If you do not provide a governed, economically viable path to AI integration, they will build their own. The AI Economist must hunt down these rogue implementations and either kill them or bring them under the Deterministic Control Plane.',
                [
                    d('Shadow AI', 'Unauthorized or unmonitored AI usage within the enterprise.', 'A massive hidden financial liability'),
                    d('Rogue API Keys', 'Personal or unmanaged API keys embedded in production code.', 'Creates unforecastable OpEx spikes'),
                    d('Deterministic Control Plane', 'The centralized governance layer for all organizational AI routing.', 'The solution to Shadow AI')
                ],
                'Run a dependency and network audit to identify all unauthorized outbound API calls to OpenAI, Anthropic, or other foundation models.'
            )
        ]
    );

    modules['ai-economist/28-4'] = m(
        '28-4',
        '28.4 Margin Engineering: Structuring SaaS for AI Profitability',
        'Architect pricing models, usage caps, and caching strategies specifically designed to preserve gross margins in the zero-marginal-cost era.',
        'The AI Economist Masterclass',
        [
            'Why flat-rate SaaS pricing is structurally incompatible with variable-cost AI.',
            'Designing intelligent usage caps and dynamic degradation strategies.',
            'The Power User Paradox: When your most engaged customers destroy your margins.',
            'Implementing Semantic Routing to offload expensive queries to cheaper SLMs.',
            'Maximizing the Evergreen Ratio through advanced semantic caching.'
        ],
        [
            l(
                'Defending the Bottom Line',
                'Margin Engineering is the proactive design of software architecture and pricing to protect profitability. If a user generates $40 in compute on a $20 subscription, they are toxic revenue. The AI Economist engineers the margins before the feature is ever built.',
                [
                    d('Margin Engineering', 'Designing software architecture specifically for gross margin preservation.', 'The core skillset of the AI Economist'),
                    d('Semantic Routing', 'The logic layer that decides which model handles a query.', 'The key to minimizing the Turing Tax'),
                    d('Evergreen Ratio', 'Cached responses divided by total queries.', 'Target 60-80% for high profitability')
                ],
                'Design a tiered pricing strategy for your AI product that mathematically guarantees a 70% gross margin, even at the 95th percentile of user engagement.'
            )
        ]
    );

    modules['ai-economist/28-5'] = m(
        '28-5',
        '28.5 The Boardroom Presentation: Communicating AI ROI to Investors',
        'Master the communication frameworks required to secure funding, justify R&D audits, and translate engineering realities to the C-Suite.',
        'The AI Economist Masterclass',
        [
            'The Translation Gap: Why engineers speak in tokens and latency, while the Board speaks in EBITDA and CapEx.',
            'Structuring the "Innovation Tax" argument to justify massive architectural refactoring.',
            'Presenting the Product Debt Index (PDI) to demonstrate technical insolvency risks.',
            'Securing the organizational mandate to act as the ultimate authority on AI deployment.',
            'Building the financial narrative for a resilient, highly profitable AI enterprise.'
        ],
        [
            l(
                'Securing the Mandate',
                'You cannot secure funding for a Deterministic Control Plane by talking about vector databases or RAG architectures. You secure it by explaining how the investment will protect gross margins, eliminate Power User Liability, and create a defensible economic moat. The Board only cares about the math.',
                [
                    d('Executive Translation', 'Converting engineering realities into financial realities.', 'The final test of the AI Economist'),
                    d('Innovation Tax', 'The hidden cost of maintaining legacy infrastructure instead of building new value.', 'A powerful concept for securing refactoring budget'),
                    d('The Mandate', 'The organizational authority to veto unprofitable AI initiatives.', 'Must be granted by the CEO or Board')
                ],
                'Draft a 5-slide pitch deck for your Board of Directors explaining why your organization must immediately halt all new AI feature development until a full unit economics audit is completed.'
            )
        ]
    );
}
