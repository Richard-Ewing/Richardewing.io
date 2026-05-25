import { Metadata } from 'next';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import EVSETool from './content';

export const metadata: Metadata = {
    title: 'What Is Your SaaS Actually Worth? | Execution Risk Valuation Calculator',
    description: 'Stop guessing your SaaS valuation. Model how churn, tech debt, and execution risk destroy your enterprise value multiple — and what to fix first. Used by PE firms in due diligence.',
    keywords: [
        'enterprise value calculator',
        'SaaS valuation tool',
        'revenue multiple calculator',
        'execution risk model',
        'startup valuation',
        'wealth destruction gap',
        'certainty premium',
        'churn impact valuation',
    ],
    alternates: {
        canonical: 'https://www.richardewing.io/tools/ev-se',
    },
    openGraph: {
        title: 'EV-SE Valuation Engine | Model Execution Risk',
        description: 'Calculate the cost of uncertainty in your valuation. Defend your multiple.',
        url: 'https://www.richardewing.io/tools/ev-se',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'EV-SE Valuation Engine | Richard Ewing',
        description: 'Risk-adjusted enterprise value calculator. Model how execution risk destroys valuation.',
    },
};

export default function Page() {
    return <EVSETool />;
}
