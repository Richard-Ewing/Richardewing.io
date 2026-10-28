import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Richard Ewing',
    default: 'AI Economics & Engineering Glossary | Richard Ewing',
  },
  description: 'Definitive lexicon of AI unit economics, software capital allocation, runtime governance, and technical insolvency metrics by Richard Ewing.',
  openGraph: {
    title: 'AI Economics & Engineering Glossary | Richard Ewing',
    description: 'Definitive lexicon of AI unit economics, software capital allocation, runtime governance, and technical insolvency metrics by Richard Ewing.',
    url: 'https://www.richardewing.io/glossary',
    type: 'website',
    images: [{ url: 'https://www.richardewing.io/api/og?title=AI+Economics+%26+Engineering+Glossary&category=Executive+Lexicon' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Economics & Engineering Glossary | Richard Ewing',
    description: 'Definitive lexicon of AI unit economics, software capital allocation, runtime governance, and technical insolvency metrics by Richard Ewing.',
    images: ['https://www.richardewing.io/api/og?title=AI+Economics+%26+Engineering+Glossary&category=Executive+Lexicon'],
  },
};

export default function GlossaryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
