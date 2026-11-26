import type { Metadata } from 'next';
import VsSimonKucherClient from './VsSimonKucherClient';

export const metadata: Metadata = {
  title: 'Richard Ewing vs. Simon-Kucher',
  description:
    'Honest comparison between Richard Ewing fixed-scope pricing sprints ($2,500) and Simon-Kucher global enterprise pricing engagements.',
  alternates: {
    canonical: 'https://www.richardewing.io/compare/advisory-vs-simon-kucher',
  },
  openGraph: {
    title: 'Richard Ewing vs. Simon-Kucher | Richard Ewing',
    description:
      'Compare fixed-fee 14-day operator sprints ($2,500) against multi-month global enterprise pricing engagements.',
    url: 'https://www.richardewing.io/compare/advisory-vs-simon-kucher',
    type: 'article',
    images: [{ url: 'https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Richard Ewing vs. Simon-Kucher | Richard Ewing',
    description:
      'Compare fixed-fee 14-day operator sprints ($2,500) against multi-month global enterprise pricing engagements.',
    images: ['https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg'],
  },
};

const FAQ_ITEMS = [
  {
    q: 'When is Simon-Kucher genuinely the better choice over Richard Ewing?',
    a: 'Hire Simon-Kucher if you run a billion-dollar global enterprise across fifteen countries and need twenty bilingual researchers running multi-month buyer surveys for a company-wide price overhaul. Their global scale is built for massive Fortune 500 rollouts.',
  },
  {
    q: 'Why do mid-market software CEOs pick a 14-day sprint instead of a big consulting firm?',
    a: 'Mid-market companies between five and one hundred million in revenue rarely have twelve weeks or two hundred thousand dollars to wait on slide decks from junior consultants. You work directly with me for $2,500 fixed to inspect customer usage costs, tighten tiers, and put a new price sheet in front of sales inside two weeks.',
  },
  {
    q: 'What does a pricing sprint examine that traditional pricing consultancies often miss?',
    a: 'Traditional pricing firms focus almost entirely on customer willingness to pay. With AI products, heavy users can cost more every month than your highest plan charges, so I inspect your delivery bills alongside customer willingness to pay before recommending any tier.',
  },
  {
    q: 'Can I preview your pricing logic before paying $2,500 for a full sprint?',
    a: 'Yes. Bring your current price sheet and your top ten customer bills to a $450 sixty-minute live session first, or start with our free online margin tools before spending a dollar on consulting.',
  },
];

export default function AdvisoryVsSimonKucherPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'You do not need a six-figure consulting study to fix a leaking price tier.',
    description:
      'Simon-Kucher leads global multi-month pricing programs for large enterprises, typically requiring six-figure budgets. Richard Ewing delivers fixed-scope 14-day AI pricing and margin sprints for $2,500, built for mid-market CEOs and CFOs who need answers in two weeks.',
    datePublished: '2026-11-25',
    dateModified: '2026-11-25',
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
    mainEntityOfPage: 'https://www.richardewing.io/compare/advisory-vs-simon-kucher',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.richardewing.io' },
      { '@type': 'ListItem', position: 2, name: 'Compare', item: 'https://www.richardewing.io/compare' },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Richard Ewing vs. Simon-Kucher',
        item: 'https://www.richardewing.io/compare/advisory-vs-simon-kucher',
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <VsSimonKucherClient faqs={FAQ_ITEMS} />
    </>
  );
}
