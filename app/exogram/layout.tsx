import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Exogram: AI That Remembers Context | Richard Ewing',
    description: 'Exogram is a conversational AI that understands your context, remembers what matters, and helps you move work and life forward without starting over every time.',
    alternates: { canonical: 'https://www.richardewing.io/exogram' },
    openGraph: {
        title: 'Exogram: AI That Remembers Reality',
        description: 'Richard Ewing\'s founder thesis for Exogram: a conversational AI that carries context forward so you can ask naturally instead of briefing a new chatbot every time.',
        url: 'https://www.richardewing.io/exogram',
        type: 'website',
        images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Exogram: AI That Remembers Reality',
        description: 'Richard Ewing\'s founder thesis for Exogram: a conversational AI that carries context forward so you can ask naturally instead of briefing a new chatbot every time.',
        images: ['https://www.richardewing.io/assets/images/headshot.jpg'],
    }
};

export default function ExogramLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
