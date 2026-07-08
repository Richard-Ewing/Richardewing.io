import { Metadata } from 'next';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import AuditInterview from './content';

export const metadata: Metadata = {
    alternates: { canonical: 'https://www.richardewing.io/tools/scoring' },
    title: `Stop Hiring Engineers Who Can & Strategy Diagnostics | Richard Ewing't Think | Audit Scoring Dashboard`,
    description: 'Stop Hiring Engineers Who Can provides deterministic data for enterprise teams. Audit your R&D capital and block shadow AI exfiltration.',
};

export default function Page() {
    return <AuditInterview />;
}
