import type { Metadata } from 'next';
import OutputVsOutcomeClient from './OutputVsOutcomeClient';

export const metadata: Metadata = {
  title: 'Output vs. Outcome AI Pricing Guide',
  description:
    'Plain-English advice on output versus outcome AI pricing. See when charging per finished result wins renewals and when flat fees protect your business.',
  alternates: {
    canonical: 'https://www.richardewing.io/compare/output-vs-outcome-ai-pricing',
  },
  openGraph: {
    title: 'Output vs. Outcome AI Pricing Guide | Richard Ewing',
    description:
      'Plain-English advice on output versus outcome AI pricing. See when charging per finished result wins renewals and when flat fees protect your business.',
    url: 'https://www.richardewing.io/compare/output-vs-outcome-ai-pricing',
    type: 'article',
    images: [{ url: 'https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Output vs. Outcome AI Pricing Guide | Richard Ewing',
    description:
      'Plain-English advice on output versus outcome AI pricing. See when charging per finished result wins renewals and when flat fees protect your business.',
    images: ['https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg'],
  },
};

const FAQ_ITEMS = [
  {
    q: 'Why do customers resist paying per AI draft or generated item?',
    a: 'Because a generated draft is still unfinished work. When a sales rep generates fifty cold emails and spends twenty minutes fixing forty of them, charging per draft feels like paying extra for chores your staff still have to finish.',
  },
  {
    q: 'When does outcome-based AI pricing actually hold up at renewal?',
    a: 'Outcome pricing works when both billing teams can confirm the finished result inside shared records without arguing. Resolved customer support tickets, recovered past-due invoices, and booked qualified meetings work well because finance leaders can audit every line item.',
  },
  {
    q: 'Why does pure per-output pricing turn into a price war with cheap chat tools?',
    a: 'When buyers can paste the same instructions into a twenty-dollar chat window, charging per generated paragraph leaves you with zero pricing defense. You only protect your margin when you own the messy workflow and charge for verified business completion.',
  },
  {
    q: 'Should I switch to outcome pricing or hire an advisor right away?',
    a: 'Keep your wallet closed if you have fewer than twenty paying accounts or if your software cannot prove finished work without asking customers to self-report. Keep a steady base seat fee with clear limits until real contract renewals depend on verified business proof.',
  },
];

export default function OutputVsOutcomeAiPricingPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Charging per click rewards slow software. Charging for finished work wins renewals.',
    description:
      'Output pricing bills customers for raw AI activity like generated drafts, messages, or hours saved. Outcome pricing bills only when a verified business result ships, such as a resolved support ticket, recovered invoice, or booked appointment.',
    datePublished: '2026-11-24',
    dateModified: '2026-11-24',
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
    mainEntityOfPage: 'https://www.richardewing.io/compare/output-vs-outcome-ai-pricing',
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
        name: 'Output vs. Outcome AI Pricing',
        item: 'https://www.richardewing.io/compare/output-vs-outcome-ai-pricing',
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
      <OutputVsOutcomeClient faqs={FAQ_ITEMS} />
    </>
  );
}
