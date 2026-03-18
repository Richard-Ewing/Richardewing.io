import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'R&D Audit & AI Cost Governance Advisory | Intervention Protocols',
    description: 'Surgical interventions for AI hallucination debt, zombie infrastructure, and the subprime code crisis. From $450 gut-check to $7,500 forensic R&D capital audit. Independent oversight for CFOs, CTOs, and boards.',
    keywords: [
        'R&D audit',
        'AI cost governance',
        'AI hallucination debt',
        'zombie infrastructure',
        'subprime code crisis',
        'product economist advisory',
        'engineering audit',
        'capital exposure assessment',
        'AI unit economics audit',
        'technical insolvency diagnostic',
        'independent R&D oversight',
        'fractional CPO',
    ],
    alternates: {
        canonical: 'https://richardewing.io/advisory',
    },
    openGraph: {
        title: 'Intervention Protocols | R&D Audit & AI Cost Governance',
        description: 'Surgical interventions for AI hallucination debt, zombie infrastructure, and structural margin collapse. From $450 to $7,500 forensic audits.',
        url: 'https://richardewing.io/advisory',
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
