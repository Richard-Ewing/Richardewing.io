import { Metadata } from 'next';
import EVSETool from './content';

export const metadata: Metadata = {
    title: 'SaaS Valuation Engine (EV-SE)',
    description: 'Model how technical debt, execution risk, and unmanaged AI complexity impact SaaS enterprise valuation.',
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
