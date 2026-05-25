import { Metadata } from 'next';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import AuditInterviewLanding from './content';

export const metadata: Metadata = {
    title: 'Audit Interview | Test Engineering Judgment Free',
    description: 'The hiring protocol for the AI age. Test verification over generation skills. AI-scored across 5 levels with instant committee review. Free.',
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
