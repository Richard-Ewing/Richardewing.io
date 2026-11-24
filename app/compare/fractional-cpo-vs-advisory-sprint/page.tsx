import type { Metadata } from 'next';
import FractionalVsSprintClient from './FractionalVsSprintClient';

export const metadata: Metadata = {
  title: 'Fractional CPO vs. Fixed Advisory Sprint',
  description:
    'Should you hire a full-time VP of Product, a fractional CPO retainer, or a 14-day fixed advisory sprint? Plain-English advice on cost, speed, and fit.',
  alternates: {
    canonical: 'https://www.richardewing.io/compare/fractional-cpo-vs-advisory-sprint',
  },
  openGraph: {
    title: 'Fractional CPO vs. Fixed Advisory Sprint | Richard Ewing',
    description:
      'Compare real 12-week cash outlay and decisions shipped across a full-time VP search, a fractional retainer, and a 14-day fixed sprint.',
    url: 'https://www.richardewing.io/compare/fractional-cpo-vs-advisory-sprint',
    type: 'article',
    images: [{ url: 'https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fractional CPO vs. Fixed Advisory Sprint | Richard Ewing',
    description:
      'Compare real 12-week cash outlay and decisions shipped across a full-time VP search, a fractional retainer, and a 14-day fixed sprint.',
    images: ['https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg'],
  },
};

const FAQ_ITEMS = [
  {
    q: 'When should I actually hire a fractional CPO instead of booking a 14-day sprint?',
    a: 'Hire a fractional CPO when nobody inside your company can run weekly product meetings, coach junior managers, and stand in front of customers every week for the next two quarters. A 14-day sprint fixes broken math and cuts bad projects fast, yet it does not sit in your Tuesday staff meeting for six months.',
  },
  {
    q: 'Why do so many fractional retainers feel slow in the first month?',
    a: 'Because most fractional agreements pay by the month with no hard deliverable list. You spend the first four weeks paying ten to fifteen thousand dollars for listening tours while the exact same cash leak keeps running.',
  },
  {
    q: 'Why do you publish your exact prices instead of hiding them behind discovery calls?',
    a: 'Because hiding basic pricing wastes your afternoon and mine. If you know up front that a live teardown is $450, a two-week turnaround sprint is $2,500, and an embedded retainer is $10,000 a month, we spend our call fixing your business instead of playing price-tag games.',
  },
  {
    q: 'Can we start with a 14-day sprint and only move to a retainer if we still need help?',
    a: 'Yes, and that is what I advise almost every CEO to do. Pay $2,500 once, inspect the real cut list and pricing math in fourteen days, and if your internal team can run it from there, shake hands and save yourself sixty thousand dollars.',
  },
];

export default function FractionalCpoVsAdvisorySprintPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Fractional CPO vs. Fixed Advisory Sprint: What You Should Actually Pay For',
    description:
      'A fractional CPO fits companies needing ongoing weekly team leadership for 6 to 12 months at $10,000 to $18,000 per month. A fixed-scope 14-day advisory sprint fits CEOs who need broken pricing, bloated backlogs, or board math fixed in two weeks for $2,500.',
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
    mainEntityOfPage: 'https://www.richardewing.io/compare/fractional-cpo-vs-advisory-sprint',
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
        name: 'Fractional CPO vs. Advisory Sprint',
        item: 'https://www.richardewing.io/compare/fractional-cpo-vs-advisory-sprint',
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
      <FractionalVsSprintClient faqs={FAQ_ITEMS} />
    </>
  );
}
