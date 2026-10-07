import type { Metadata } from 'next';
import './editorial.css';
import EditorialHero from '@/components/home/EditorialHero';
import MethodRows from '@/components/home/MethodRows';
import UnitEconomicsExperiment from '@/components/home/UnitEconomicsExperiment';
import EvidenceLinks from '@/components/home/EvidenceLinks';
import ThesisStatement from '@/components/home/ThesisStatement';
import EngagementCTA from '@/components/home/EngagementCTA';

export const metadata: Metadata = {
  title: 'Richard Ewing | AI Economist & Enterprise R&D Capital Audits',
  description:
    'Richard Ewing helps finance and technology leaders measure, govern, and improve the economics of enterprise AI. Clear unit economics, capital allocation, and advisory.',
  alternates: {
    canonical: 'https://www.richardewing.io',
  },
  openGraph: {
    title: 'Richard Ewing | AI Economist - Enterprise AI Audits & Cost Governance',
    description:
      'Richard Ewing helps finance and technology leaders measure, govern, and improve the economics of enterprise AI. Clear unit economics, capital allocation, and advisory.',
    url: 'https://www.richardewing.io',
    type: 'website',
    images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Richard Ewing | AI Economist - Enterprise AI Audits & Cost Governance',
    description:
      'Richard Ewing helps finance and technology leaders measure, govern, and improve the economics of enterprise AI. Clear unit economics, capital allocation, and advisory.',
    images: ['https://www.richardewing.io/assets/images/headshot.jpg'],
  },
};

export default function Home() {
  return (
    <div className="editorial-dark pt-4 pb-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebSite',
                '@id': 'https://www.richardewing.io/#website',
                url: 'https://www.richardewing.io/',
                name: 'Richard Ewing | AI Economist & Enterprise R&D Capital Audits',
                description:
                  'Richard Ewing helps finance and technology leaders measure, govern, and improve the economics of enterprise AI. Clear unit economics, capital allocation, and advisory.',
              },
            ],
          }),
        }}
      />
      <main id="main">
        <EditorialHero />
        <MethodRows />
        <UnitEconomicsExperiment />
        <EvidenceLinks />
        <ThesisStatement />
        <EngagementCTA />
      </main>
    </div>
  );
}
