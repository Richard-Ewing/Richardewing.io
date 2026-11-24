import type { Metadata } from 'next';
import PeFirst100DaysClient from './PeFirst100DaysClient';

export const metadata: Metadata = {
  title: 'First 100 Days of PE AI Value Creation',
  description:
    'Plain-English 100-day AI playbook for Private Equity Operating Partners and Board Directors. Separate real profit gains from expensive software shelfware.',
  alternates: {
    canonical: 'https://www.richardewing.io/advisory/pe-first-100-days-ai',
  },
  openGraph: {
    title: 'First 100 Days of AI Value Creation for PE Portfolios | Richard Ewing',
    description:
      'Separate real profit gains from demo theater across your portfolio in the first 100 days after close.',
    url: 'https://www.richardewing.io/advisory/pe-first-100-days-ai',
    type: 'article',
    images: [{ url: 'https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'First 100 Days of AI Value Creation for PE Portfolios | Richard Ewing',
    description:
      'Separate real profit gains from demo theater across your portfolio in the first 100 days after close.',
    images: ['https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg'],
  },
};

const FAQ_ITEMS = [
  {
    q: 'Why do most portfolio AI projects stall after the first board meeting?',
    a: 'Because teams chase flashy demos that nobody owns on Tuesday morning. A vendor shows a slick presentation, leadership signs an annual contract for forty seats, and three months later six employees still open it.',
  },
  {
    q: 'What should an Operating Partner ask before approving new AI spend?',
    a: 'Ask which current bill goes down or which customer invoice goes up within ninety days, and ask who loses bonus credit if it misses. If the answer is vague productivity savings, hold the check.',
  },
  {
    q: 'How is a $15,000 fixed PE diligence audit different from a Big Four review?',
    a: 'You work directly with me instead of four junior analysts reading a checklist. In two weeks you get a blunt red-flag memo on pricing leaks, dead backlog, vendor contracts, and a clean 100-day cash plan your CFO and CEO can actually execute.',
  },
  {
    q: 'When should a portfolio company skip outside advisory completely?',
    a: 'Skip hiring me if your management team already has clean per-customer cost visibility, zero overlapping software contracts, and a clear product leader who says no to unfocused projects.',
  },
];

export default function PeFirst100DaysAiPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The First 100 Days of AI Value Creation Across a Private Equity Portfolio',
    description:
      'In the first 100 days after acquisition, Private Equity Operating Partners create real AI value by canceling unused software seats first, fixing unprofitable customer pricing second, and funding only workflows tied to hard 90-day cash returns.',
    datePublished: '2026-11-23',
    dateModified: '2026-11-23',
    image: 'https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg',
    author: {
      '@type': 'Person',
      name: 'Richard Ewing',
      url: 'https://www.richardewing.io/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Richard Ewing Advisory',
      url: 'https://www.richardewing.io',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg',
      },
    },
    mainEntityOfPage: 'https://www.richardewing.io/advisory/pe-first-100-days-ai',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.richardewing.io' },
      { '@type': 'ListItem', position: 2, name: 'Advisory', item: 'https://www.richardewing.io/advisory' },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'First 100 Days PE AI Playbook',
        item: 'https://www.richardewing.io/advisory/pe-first-100-days-ai',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PeFirst100DaysClient faqs={FAQ_ITEMS} />
    </>
  );
}
