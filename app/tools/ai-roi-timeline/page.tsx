import { Metadata } from 'next';
import AIRoiTimelineContent from './content';

export const metadata: Metadata = {
    title: 'AI ROI Timeline Calculator',
    description: 'Model payback timelines, capital recovery points, and financial return on AI investments for board presentations. Ground business cases in verified data.',
    alternates: { canonical: 'https://www.richardewing.io/tools/ai-roi-timeline' },
};

import DiagnosticCTA from '@/app/components/DiagnosticCTA';

export default function AIRoiTimelinePage() {
    return (
        <>
            <AIRoiTimelineContent />
            <div className="max-w-5xl mx-auto px-6 pb-20">
                <DiagnosticCTA
                    variant="warning"
                    title="Need a defensible AI payback model for your CFO or Board?"
                    subtitle="Stress-test your capital recovery timeline, implementation drag, and ongoing token OpEx in a live 60-minute P&L working session."
                    metrics={['Payback Horizon', 'OpEx vs CapEx', 'CFO Sign-Off']}
                />
            </div>
        </>
    );
}
