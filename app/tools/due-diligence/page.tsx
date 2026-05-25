import { Metadata } from 'next';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import DueDiligenceTool from './content';

export const metadata: Metadata = {
    title: 'M&A Due Diligence Scanner | PE & VC Tool | Ewing',
    description: 'Scan acquisition targets for hidden technical debt, AI dependency risks, and engineering insolvency. Built for private equity due diligence.',
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
    twitter: {
        card: 'summary_large_image',
        title: 'Due Diligence Scanner | Richard Ewing',
        description: 'Evaluate technical debt, architecture, and team structure before M&A execution.',
    },
};

export default function Page() {
    return <DueDiligenceTool />;
}
