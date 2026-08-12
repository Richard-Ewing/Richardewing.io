import { Metadata } from 'next';
import DueDiligenceTool from './content';

export const metadata: Metadata = {
    title: 'AI Tech Due Diligence Engine',
    description: 'Forensic technical due diligence engine for private equity, VCs, and acquirers evaluating software & AI targets.',
    keywords: [
        'engineering due diligence',
        'technical due diligence',
        'M&A tech scan',
        'private equity software audit',
        'technical debt assessment',
        'VC technical diligence',
        'tech stack audit M&A',
    ],
    alternates: {
        canonical: 'https://www.richardewing.io/tools/due-diligence',
    },
    openGraph: {
        title: 'M&A Engineering Due Diligence Scanner',
        description: 'Instantly scan acquisition targets for critical technical debt before you write the check.',
        url: 'https://www.richardewing.io/tools/due-diligence',
        type: 'website',
    },
};

export default function Page() {
    return <DueDiligenceTool />;
}
