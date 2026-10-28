import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: {
    template: '%s | Richard Ewing',
    default: 'Exogram: Deterministic AI Runtime | Richard Ewing',
  },
  description: 'Exogram is the deterministic execution control plane that verifies AI agent tool calls, blocks rogue mutations, and preserves audit state.',
  openGraph: {
    title: 'Exogram: Deterministic AI Runtime | Richard Ewing',
    description: 'Exogram is the deterministic execution control plane that verifies AI agent tool calls, blocks rogue mutations, and preserves audit state.',
    url: 'https://www.richardewing.io/exogram',
    type: 'website',
    images: [{ url: 'https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Exogram: Deterministic AI Runtime | Richard Ewing',
    description: 'Exogram is the deterministic execution control plane that verifies AI agent tool calls, blocks rogue mutations, and preserves audit state.',
    images: ['https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg'],
  },
};

export default function ExogramLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
