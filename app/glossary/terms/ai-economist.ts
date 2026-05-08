import { GlossaryTerm } from '../types';

export const aiEconomist: GlossaryTerm = {
    slug: 'ai-economist',
    title: 'AI Economist',
    definition: `
An **AI Economist** is the evolution of the traditional Product Manager in the era of generative AI. Because intelligent systems carry continuous, variable inference costs (unlike traditional SaaS which scales at near-zero marginal cost), the AI Economist must evaluate every product decision through a strict financial lens.

While an engineer focuses on prompt orchestration and token window optimization, the AI Economist focuses on the *Return on Invested Capital (ROIC)* of those tokens. They are responsible for modeling [Synthetic COGS](/glossary/synthetic-cogs), determining the Margin Collapse Threshold for high-frequency users, and ultimately preventing the engineering organization from building "Zombie AI" features that consume compute without driving provable business value.
    `,
    whyItMatters: `
Without an AI Economist, engineering teams fall into the "Happy Builder" trap—shipping AI features because the API exists, not because it's profitable. This leads directly to the [Generative Margin Squeeze](/blog/generative-ai-margin-squeeze-saas-cogs), where a company's cloud bill scales faster than its revenue. The AI Economist provides the mathematical adult supervision required to maintain [EBITDA](/glossary/ebitda) in an AI-first world.
    `,
    category: 'Richard Ewing Frameworks',
    faqs: [
        {
            question: 'What is an AI Economist?',
            answer: 'A technical executive who treats artificial intelligence deployment as a rigorous capital allocation exercise rather than purely a software engineering effort.'
        },
        {
            question: 'How does an AI Economist differ from a Product Manager?',
            answer: 'A traditional PM optimizes for user engagement. Because AI features have high variable costs per interaction, an AI Economist must engineer margins and calculate synthetic COGS to prevent engagement from bankrupting the product.'
        }
    ],
    relatedTerms: ['margin-engineering', 'synthetic-cogs', 'the-turing-tax', 'power-user-liability']
};
