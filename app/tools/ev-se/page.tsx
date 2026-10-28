import { Metadata } from 'next';
import EVSETool from './content';

export const metadata: Metadata = {
    title: 'SaaS Valuation & Risk Calculator (EV-SE)',
    description: 'Model how technical debt, execution risk, and unmanaged AI complexity impact SaaS enterprise valuation. Connect codebase reality to financial multiples.',
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

import DiagnosticCTA from '@/app/components/DiagnosticCTA';

export default function Page() {
    return (
        <>
            <EVSETool />
            <div className="max-w-5xl mx-auto px-6 pb-20">
                <DiagnosticCTA
                    variant="danger"
                    title="Preparing for a Series B/C raise or Private Equity diligence?"
                    subtitle="Quantify and remediate the technical debt and gross margin drag compressing your SaaS revenue multiple before buyers discount the deal."
                    metrics={['ARR Multiple', 'Churn Drag', 'M&A Defense']}
                />
            </div>
        </>
    );
}
