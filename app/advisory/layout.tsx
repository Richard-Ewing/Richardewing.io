import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'R&D Audit & AI Cost Governance Advisory | Intervention Protocols',
    description: 'Surgical interventions for AI hallucination debt, zombie infrastructure, and the subprime code crisis. From $450 gut-check to $7,500 forensic R&D capital audit. Independent oversight for CFOs, CTOs, and boards.',
    keywords: [
        // Existing niche terms
        'R&D audit', 'AI cost governance', 'AI hallucination debt',
        'zombie infrastructure', 'subprime code crisis', 'product economist advisory',
        'engineering audit', 'capital exposure assessment', 'AI unit economics audit',
        'technical insolvency diagnostic', 'independent R&D oversight', 'fractional CPO',
        // Everyday search terms people actually Google
        'technology consulting', 'hire a technology advisor', 'CTO for hire',
        'engineering efficiency consultant', 'AI spending audit', 'startup advisor',
        'independent technology assessment', 'due diligence consultant',
        'software development cost audit', 'reduce engineering burn rate',
        'how much should I spend on engineering', 'engineering team assessment',
        'AI implementation consulting', 'technical due diligence for investors',
        'fractional CTO services', 'outsourced technology leadership',
        'board technology advisory', 'PE tech due diligence',
        'venture capital tech assessment', 'cost cutting engineering team',
        'software audit services', 'is my engineering team too expensive',
        'optimize R&D spending', 'engineering budget review',
    ],
    alternates: {
        canonical: 'https://www.richardewing.io/advisory',
    },
    openGraph: {
        title: 'Intervention Protocols | R&D Audit & AI Cost Governance',
        description: 'Surgical interventions for AI hallucination debt, zombie infrastructure, and structural margin collapse. From $450 to $7,500 forensic audits.',
        url: 'https://www.richardewing.io/advisory',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Intervention Protocols | Richard Ewing',
        description: 'R&D capital audits and AI cost governance. Stop the bleeding. Install permanent capital discipline.',
    },
};

export default function AdvisoryLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
