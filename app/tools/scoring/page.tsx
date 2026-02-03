import { Metadata } from 'next';
import AuditInterview from './content';

export const metadata: Metadata = {
    title: 'Audit Scoring Dashboard | Richard Ewing',
    description: 'Manual entry dashboard for the Audit Interview protocol. Calculate candidate verdicts and generate defense memos.',
};

export default function Page() {
    return <AuditInterview />;
}
