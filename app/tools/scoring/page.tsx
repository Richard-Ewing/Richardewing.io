import { Metadata } from 'next';
import AuditInterview from './content';

export const metadata: Metadata = {
    title: 'AI Engineering Audit Dashboard',
    description: 'Score engineering candidate performance, evaluate architectural trade-offs, and generate hiring decision reports.',
    alternates: { canonical: 'https://www.richardewing.io/tools/scoring' },
};

export default function Page() {
    return <AuditInterview />;
}
