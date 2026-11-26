import type { Metadata } from 'next';
import FractionalVsVpClient from './FractionalVsVpClient';

export const metadata: Metadata = {
  title: 'Fractional CPO vs. Full-Time VP',
  description:
    'Should you hire a full-time VP of Product right now or bring in a fractional CPO first? Compare true Year-1 cash outlay, search delay, and fit.',
  alternates: {
    canonical: 'https://www.richardewing.io/compare/fractional-cpo-vs-vp-product',
  },
  openGraph: {
    title: 'Fractional CPO vs. Full-Time VP | Richard Ewing',
    description:
      'Compare true first-year cash outlay, recruiting fees, and months lost before making your next senior product hire.',
    url: 'https://www.richardewing.io/compare/fractional-cpo-vs-vp-product',
    type: 'article',
    images: [{ url: 'https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fractional CPO vs. Full-Time VP | Richard Ewing',
    description:
      'Compare true first-year cash outlay, recruiting fees, and months lost before making your next senior product hire.',
    images: ['https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg'],
  },
};

const FAQ_ITEMS = [
  {
    q: 'What does a full-time VP of Product actually cost in Year 1?',
    a: 'Between base salary, target bonus, payroll taxes, and an executive search fee, a full-time VP of Product typically consumes three hundred twenty to four hundred twenty thousand dollars in Year 1 cash, plus four to six months waiting before their start date.',
  },
  {
    q: 'When is a full-time VP of Product clearly better than a fractional CPO?',
    a: 'Hire full-time when your company clears fifteen million dollars in recurring revenue, manages multiple product lines simultaneously, and has a proven sales motion that simply needs a permanent executive sitting in every leadership meeting for the next four years.',
  },
  {
    q: 'Why do so many full-time VP hires miss expectations in the first twelve months?',
    a: 'Because founders hire an executive to bring order while the company still has broken pricing, twenty half-baked pet projects, and no clear budget rules. The new VP spends six months cleaning up political messes instead of growing revenue, and both sides part ways at month fourteen.',
  },
  {
    q: 'What if I am not ready for either a fractional retainer or a full-time hire?',
    a: 'If your existing managers already run meetings well and just need clear numbers, skip both retainers and executive searches. Run a fixed two-week audit to cut dead backlog and fix pricing first, then revisit full-time hiring after renewals stabilize.',
  },
];

export default function FractionalCpoVsVpProductPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Hiring a three-hundred-thousand-dollar VP into a broken backlog burns both cash and trust.',
    description:
      'A full-time VP of Product costs over $350,000 in Year 1 and takes five months to recruit. A fractional CPO steps in within days at $10,000 per month to fix product operations and prepare the seat before you commit permanent payroll.',
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
    mainEntityOfPage: 'https://www.richardewing.io/compare/fractional-cpo-vs-vp-product',
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
        name: 'Fractional CPO vs. Full-Time VP',
        item: 'https://www.richardewing.io/compare/fractional-cpo-vs-vp-product',
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
      <FractionalVsVpClient faqs={FAQ_ITEMS} />
    </>
  );
}
