import { Metadata } from 'next';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import AuditInterviewLanding from './content';

export const metadata: Metadata = {
    title: 'Does This Engineer Actually Th & Strategy Diagnostics | Richard Ewing',
    description: 'Does This Engineer Actually Th provides deterministic data for enterprise teams. Audit your R&D capital and block shadow AI exfiltration.',
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
