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

export default function Page() {
    return <AuditInterviewLanding />;
}
