import { Metadata } from 'next';
import AuditInterview from './content';

export const metadata: Metadata = {
    alternates: { canonical: 'https://www.richardewing.io/tools/scoring' },
    title: 'Audit Scoring Dashboard | Candidate Verdicts',
    description: 'Score engineering candidates using the Audit Interview protocol. Calculate verdicts, generate defense memos, and compare across hiring panels.',
};

export default function Page() {
    return <AuditInterview />;
}
