import { GlossaryTerm } from '../types';

export const marginEngineering: GlossaryTerm = {
    slug: 'margin-engineering',
    title: 'Margin Engineering',
    definition: `
**Margin Engineering** is the discipline of treating financial profitability as a strict architectural constraint, equal in importance to latency, scalability, or security. 

In the traditional SaaS model, engineering focused on building features because the marginal cost of software delivery was near zero. In the generative AI era, intelligence is a consumable resource. Every user prompt incurs a discrete infrastructure cost ([Synthetic COGS](/glossary/synthetic-cogs)). Margin Engineering is the practice of building [Deterministic Control Layers](/glossary/deterministic-control-layer), semantic caches, and intelligent model routing to ensure that the cost of serving the user never exceeds the revenue they generate.
    `,
    whyItMatters: `
Without Margin Engineering, companies fall victim to [Power User Liability](/glossary/power-user-liability). A highly engaged user on a flat-rate subscription can easily consume more in AI API costs than they pay in revenue. By explicitly engineering the margins into the system architecture—such as caching common queries so they don't require live inference, or routing simple classification tasks to cheap [Small Language Models](/glossary/small-language-models)—the engineering team directly defends the company's [EBITDA](/glossary/ebitda).
    `,
    category: 'Richard Ewing Frameworks',
    faqs: [
        {
            question: 'What is Margin Engineering?',
            answer: 'The proactive architectural practice of designing software systems specifically to preserve and protect gross profitability, particularly against variable AI inference costs.'
        },
        {
            question: 'How do you practice Margin Engineering?',
            answer: 'By implementing semantic caching, dynamic model routing (using cheap models for simple tasks), and adding deterministic control layers to prevent expensive LLMs from handling tasks that traditional code can handle.'
        }
    ],
    relatedTerms: ['ai-economist', 'synthetic-cogs', 'the-turing-tax', 'evergreen-ratio', 'deterministic-control-layer']
};
