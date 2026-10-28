import { Metadata } from 'next';
import VTATool from './content';

export const metadata: Metadata = {
    title: 'AI Volatility Tax (VTA) Calculator',
    description: 'Quantify the hidden human-in-the-loop validation costs, verification burdens, and labor drag destroying your enterprise AI feature gross margins.',
    keywords: [
        'AI Volatility Tax',
        'human-in-the-loop cost',
        'AI margin collapse',
        'cost of predictivity',
        'AI response drift',
        'LLM validation cost',
        'compound AI systems',
        'behavioral auditing',
        'execution layer',
    ],
    alternates: {
        canonical: 'https://www.richardewing.io/tools/vta',
    },
    openGraph: {
        title: 'Volatility Tax Auditor | AI Margin Calculator',
        description: 'Quantify the hidden labor tax of validating probabilistic AI outputs.',
        url: 'https://www.richardewing.io/tools/vta',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Volatility Tax Auditor | Richard Ewing',
        description: 'Calculate the human-in-the-loop cost destroying your AI feature margins.',
    },
};

import DiagnosticCTA from '@/app/components/DiagnosticCTA';

export default function Page() {
    return (
        <>
            <VTATool />
            <div className="max-w-5xl mx-auto px-6 pb-20">
                <DiagnosticCTA
                    variant="danger"
                    title="Is human-in-the-loop verification secretly eating your AI software margin?"
                    subtitle="Quantify hidden QA review payroll and automate deterministic verification before scaling customer volume."
                    metrics={['HITL Payroll', 'Volatility Tax', 'Margin Recovery']}
                />
            </div>
        </>
    );
}
