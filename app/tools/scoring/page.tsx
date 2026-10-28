import { Metadata } from 'next';
import AuditInterview from './content';

export const metadata: Metadata = {
    title: 'AI Engineering Audit Dashboard',
    description: 'Score engineering candidate performance, evaluate architectural trade-offs, and generate hiring decision reports. Streamline technical talent evaluation.',
    alternates: { canonical: 'https://www.richardewing.io/tools/scoring' },
};

import DiagnosticCTA from '@/app/components/DiagnosticCTA';

export default function Page() {
    return (
        <>
            <AuditInterview />
            <div className="max-w-5xl mx-auto px-6 pb-20">
                <DiagnosticCTA
                    variant="primary"
                    title="Calibrating technical hiring scorecards across Engineering Managers?"
                    subtitle="Build objective verification benchmarks so your engineering org hires operators who protect production reliability and unit margin."
                    metrics={['Candidate Calibration', 'Committee Alignment', 'Zero Fluff']}
                />
            </div>
        </>
    );
}
