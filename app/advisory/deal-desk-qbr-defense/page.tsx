import type { Metadata } from 'next';
import DealDeskQbrClient from './DealDeskQbrClient';

export const metadata: Metadata = {
  title: 'Deal Desk & Executive QBR Defense',
  description:
    'Stop losing renewals and board reviews over vague AI slides. Defend custom enterprise pricing, discount approvals, and quarterly profit math with your CFO.',
  alternates: {
    canonical: 'https://www.richardewing.io/advisory/deal-desk-qbr-defense',
  },
  openGraph: {
    title: 'Deal Desk & Executive QBR Defense | Richard Ewing',
    description:
      'Replace vague AI adoption slides with unit profit proof before custom contracts get signed or budgets get cut at renewal.',
    url: 'https://www.richardewing.io/advisory/deal-desk-qbr-defense',
    type: 'article',
    images: [{ url: 'https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deal Desk & Executive QBR Defense | Richard Ewing',
    description:
      'Replace vague AI adoption slides with unit profit proof before custom contracts get signed or budgets get cut at renewal.',
    images: ['https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg'],
  },
};

const FAQ_ITEMS = [
  {
    q: 'Why does Finance reject AI renewal decks that show high user activity?',
    a: 'Because a Director of Finance or CFO does not pay vendor invoices with click counts. When a QBR slide highlights hours saved or messages drafted without tying those numbers to net cash kept, cost avoided, or gross margin after vendor bills, Finance treats the tool as discretionary software waiting to be cut.',
  },
  {
    q: 'How do sales discounts break custom enterprise AI contracts?',
    a: 'Sales teams often price a custom enterprise deal from a five-user pilot and grant a twenty-five percent discount to close before quarter-end. Once fifty departments log in under an uncapped order form, your monthly delivery bill climbs past the discounted fee and turns your flagship logo into a cash drain.',
  },
  {
    q: 'What should a VP of Sales Ops put into an order form before signature?',
    a: 'Include a clear annual usage ceiling written directly into the order form, a published step-up price when a customer crosses that ceiling, and a hard minimum margin floor below which only the CFO can sign off. That single paragraph stops month-end spreadsheet fights between Sales Ops and Finance.',
  },
  {
    q: 'When should I skip outside Deal Desk and QBR Defense advisory?',
    a: 'Skip outside Deal Desk advisory whenever your average contract sits under $5,000 a year on standard self-serve checkout with zero custom sales discounts and zero formal board QBR reviews. A one-page monthly profit spreadsheet comparing customer revenue to vendor bills is enough at that stage.',
  },
];

export default function DealDeskQbrDefensePage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Finance already rejected your slide deck before the QBR started.',
    description:
      'Deal desk and QBR defense replace vague AI adoption slides with unit profit proof before contracts get signed or budgets get cut. It connects custom sales discounts, vendor bills, and renewal cash into numbers finance leaders approve.',
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
    mainEntityOfPage: 'https://www.richardewing.io/advisory/deal-desk-qbr-defense',
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
        name: 'Deal Desk & Executive QBR Defense',
        item: 'https://www.richardewing.io/advisory/deal-desk-qbr-defense',
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
      <DealDeskQbrClient faqs={FAQ_ITEMS} />
    </>
  );
}
