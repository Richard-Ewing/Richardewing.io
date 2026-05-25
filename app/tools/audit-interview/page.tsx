import { Metadata } from 'next';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import AuditInterviewLanding from './content';

export const metadata: Metadata = {
    title: 'Does This Engineer Actually Think, or Just Code? | Judgment Test',
    description: 'LeetCode tests syntax. This tests judgment. The Audit Interview evaluates whether engineers can verify, reason architecturally, and make tradeoff decisions — not just write code.',
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
