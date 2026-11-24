import type { Metadata } from 'next';
import PricingModelsClient from './PricingModelsClient';

export const metadata: Metadata = {
  title: 'Pass-Through vs. Credit AI Pricing Guide',
  description:
    'Plain-English advice on flat-seat, credit-pack, and pass-through AI pricing. See which pricing model protects your profit when heavy users show up.',
  alternates: {
    canonical: 'https://www.richardewing.io/compare/pass-through-vs-credit-ai-pricing',
  },
  openGraph: {
    title: 'Pass-Through vs. Credit AI Pricing | Richard Ewing',
    description:
      'Plain-English advice on flat-seat, credit-pack, and pass-through AI pricing so heavy usage never turns your best customers into cash leaks.',
    url: 'https://www.richardewing.io/compare/pass-through-vs-credit-ai-pricing',
    type: 'article',
    images: [{ url: 'https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pass-Through vs. Credit AI Pricing | Richard Ewing',
    description:
      'Plain-English advice on flat-seat, credit-pack, and pass-through AI pricing so heavy usage never turns your best customers into cash leaks.',
    images: ['https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg'],
  },
};

const FAQ_ITEMS = [
  {
    q: 'Why do customers hate credit-based AI pricing?',
    a: 'Because buyers cannot budget for credits. When a Director of Finance asks what next quarter will cost and your sales rep says it depends on how many credits the team burns, procurement stalls the signature for six weeks.',
  },
  {
    q: 'When does pass-through AI pricing make sense?',
    a: 'Pass-through pricing works best when you sell to mid-market or enterprise teams that already have big monthly swings and want clean invoice transparency. You charge a steady platform fee for your software and pass the raw AI bill through with a small, disclosed handling buffer.',
  },
  {
    q: 'Can I keep flat monthly pricing if I add AI features?',
    a: 'Yes, if your AI feature costs pennies per customer and has a hard monthly ceiling built into each plan. The moment a single power user can cost you more than their monthly subscription, flat pricing stops working.',
  },
  {
    q: 'Should I hire an advisor before changing my price sheet?',
    a: 'Not if you have fewer than twenty paying accounts. Pull your last three monthly bills, sort your customers by heaviest usage, and fix the worst leak yourself first. Bring me in when real revenue is on the line and one wrong price change could trigger renewals to churn.',
  },
];

export default function PassThroughVsCreditAiPricingPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pass-Through vs. Credit AI Pricing: Honest Advice Before Your Bill Doubles',
    description:
      'Pass-through pricing bills customers for actual AI usage above a flat software fee, while credit pricing sells prepaid bundles. Protected hybrid pricing keeps invoices predictable for buyers and defends profit margins from heavy users.',
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
    mainEntityOfPage: 'https://www.richardewing.io/compare/pass-through-vs-credit-ai-pricing',
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
        name: 'Pass-Through vs. Credit AI Pricing',
        item: 'https://www.richardewing.io/compare/pass-through-vs-credit-ai-pricing',
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
      <PricingModelsClient faqs={FAQ_ITEMS} />
    </>
  );
}
