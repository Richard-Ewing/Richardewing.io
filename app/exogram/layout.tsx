import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Exogram: AI That Remembers Context | Richard Ewing',
    description: 'Exogram is persistent context infrastructure for AI. It helps AI retain relevant history, understand relationships, track what changed, and reason from evidence across time and models.',
    alternates: { canonical: 'https://www.richardewing.io/exogram' },
    openGraph: {
        title: 'Exogram: AI That Remembers Reality',
        description: 'Richard Ewing\'s founder thesis for Exogram: persistent, evidence-linked context that helps AI understand what users mean - not only what they type.',
        url: 'https://www.richardewing.io/exogram',
        type: 'website',
        images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Exogram: AI That Remembers Reality',
        description: 'Richard Ewing\'s founder thesis for Exogram: persistent, evidence-linked context that helps AI understand what users mean - not only what they type.',
        images: ['https://www.richardewing.io/assets/images/headshot.jpg'],
    }
};

export default function ExogramLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
