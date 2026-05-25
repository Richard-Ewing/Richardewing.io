import { Metadata } from 'next';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import AuditInterview from './content';

export const metadata: Metadata = {
    alternates: { canonical: 'https://www.richardewing.io/tools/scoring' },
    title: `Stop Hiring Engineers Who Can't Think | Audit Scoring Dashboard`,
    description: 'Score senior engineering candidates on judgment, not memorized LeetCode. Generate board-ready hiring verdicts using the same protocol from $7,500 R&D Capital Audits.',
};

export default function Page() {
    return <AuditInterview />;
}
