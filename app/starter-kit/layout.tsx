import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Founder Starter Kit | Free 7-Day Sprint',
  description: 'Free 7-day executive engineering sprint on AI architecture, LLM economics, cognitive division of labor, and customer discovery.',
  alternates: {
    canonical: 'https://www.richardewing.io/starter-kit',
  },
  openGraph: {
    title: 'AI Founder Starter Kit | Free 7-Day Sprint',
    description: 'Free 7-day executive engineering sprint on AI architecture, LLM economics, cognitive division of labor, and customer discovery.',
    url: 'https://www.richardewing.io/starter-kit',
    type: 'website',
  },
};

export default function StarterKitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
