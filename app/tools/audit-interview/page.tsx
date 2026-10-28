import { Metadata } from 'next';
import AuditInterviewLanding from './content';

export const metadata: Metadata = {
    title: 'Audit Interview Hiring Assessment',
    description: 'Interactive hiring assessment for the AI age. Test engineering candidate judgment, trade-offs, and system architecture thinking.',
    alternates: {
        canonical: 'https://www.richardewing.io/tools/audit-interview',
    },
    openGraph: {
        title: 'The Audit Interview | War-Time Leadership Assessment',
        description: 'Are you a Peace-Time or War-Time leader? Prove it in the simulation.',
        url: 'https://www.richardewing.io/tools/audit-interview',
    },
};

import DiagnosticCTA from '@/app/components/DiagnosticCTA';

export default function Page() {
    return (
        <>
            <AuditInterviewLanding />
            <div className="max-w-5xl mx-auto px-6 pb-20">
                <DiagnosticCTA
                    variant="primary"
                    title="Hiring senior engineers who rely on AI coding assistants?"
                    subtitle="Standardize architectural verification, code review judgment, and AI blast-radius governance across your engineering hiring loop."
                    metrics={['PR Judgment', 'Blast Radius', 'Hiring Rubric']}
                />
            </div>
        </>
    );
}
