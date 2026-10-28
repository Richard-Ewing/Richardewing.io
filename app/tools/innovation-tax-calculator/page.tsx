import { Metadata } from 'next';
import { Suspense } from 'react';
import PDITool from '../pdi/content';

export const metadata: Metadata = {
    title: 'Innovation Tax Calculator',
    description: 'Calculate how much of your R&D engineering budget is trapped in maintenance OpEx vs genuine new product development. Reclaim trapped innovation budget.',
    keywords: [
        'innovation tax calculator',
        'innovation tax',
        'technical debt calculator',
        'R&D capitalization audit',
        'zombie assets calculator',
        'AI economist tool',
    ],
    alternates: {
        canonical: 'https://www.richardewing.io/tools/innovation-tax-calculator',
    },
    openGraph: {
        title: 'Innovation Tax Calculator | Audit Your R&D Spend',
        description: 'How much of your R&D budget is actually maintenance OpEx? Calculate your true innovation output.',
        url: 'https://www.richardewing.io/tools/innovation-tax-calculator',
        type: 'website',
    },
};

import DiagnosticCTA from '@/app/components/DiagnosticCTA';

export default function Page() {
    return (
        <div className="min-h-screen bg-[#FAF9F6]">
            <header className="max-w-5xl mx-auto px-6 pt-28 pb-6">
                <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#b77a35] mb-2">
                    R&amp;D Capital Allocation Diagnostic
                </p>
                <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#1e2924] tracking-tight mb-4">
                    Innovation Tax Calculator: Audit Maintenance OpEx vs R&amp;D Output
                </h1>
                <p className="text-base text-zinc-700 leading-relaxed max-w-3xl">
                    The Innovation Tax Calculator quantifies the exact dollar share of your annual engineering payroll consumed by unplanned maintenance, legacy rework, and regression firefighting rather than net-new revenue-generating product features, helping CEOs, CFOs, and VPs of Engineering reclaim trapped R&amp;D capacity.
                </p>
            </header>
            <Suspense fallback={<div className="max-w-5xl mx-auto p-8 text-center text-zinc-500 font-mono text-xs">Loading Diagnostic...</div>}>
                <PDITool />
            </Suspense>
            <div className="max-w-5xl mx-auto px-6 pb-20">
                <DiagnosticCTA
                    variant="danger"
                    title="Is maintenance OpEx quietly eating 65%+ of your R&D payroll?"
                    subtitle="Run a forensic R&D Capital Audit with your CFO and VP of Engineering to isolate zombie services and fund your next product roadmap."
                    metrics={['Maintenance Tax', 'Zombie Infra', 'R&D Yield']}
                />
            </div>
        </div>
    );
}
