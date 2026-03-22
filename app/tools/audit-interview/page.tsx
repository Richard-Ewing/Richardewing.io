import { Metadata } from 'next';
import AuditInterviewLanding from './content';

export const metadata: Metadata = {
    title: 'The Audit Interview | Assess Engineering Judgment, Not Syntax',
    description: 'The hiring protocol for the AI age. Test verification skills, not generation skills. Based on the methodology from Built In\'s "Death of the Syntax Interview."',
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
