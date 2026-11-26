import type { Metadata } from 'next';
import SellSideDdClient from './SellSideDdClient';

export const metadata: Metadata = {
  title: 'Sell-Side Tech Due Diligence Guide',
  description:
    'Prepare your software company for buyer scrutiny thirty days before diligence opens. Stop valuation haircuts from messy vendor bills and dead backlog.',
  alternates: {
    canonical: 'https://www.richardewing.io/advisory/sell-side-technical-due-diligence',
  },
  openGraph: {
    title: 'Sell-Side Tech Due Diligence Guide | Richard Ewing',
    description:
      'Prepare your software company for buyer scrutiny thirty days before diligence opens and protect your final sale price.',
    url: 'https://www.richardewing.io/advisory/sell-side-technical-due-diligence',
    type: 'article',
    images: [{ url: 'https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sell-Side Tech Due Diligence Guide | Richard Ewing',
    description:
      'Prepare your software company for buyer scrutiny thirty days before diligence opens and protect your final sale price.',
    images: ['https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg'],
  },
};

const FAQ_ITEMS = [
  {
    q: 'When should a founder run sell-side technical due diligence before listing?',
    a: 'Run your own dry-run audit sixty to ninety days before bankers open the data room. Once a buyer signs a letter of intent and brings in outside auditors, any surprise you left sitting in your cloud bill or product backlog becomes an immediate excuse to cut your sale price.',
  },
  {
    q: 'What actually causes buyers to drop their offer during tech diligence?',
    a: 'Buyers rarely slash price over minor code style. They slash price when your top accounts quietly cost more to serve than they pay, when half your engineering payroll maintains old features nobody opens, or when one lead builder holds all system passwords and product knowledge in their head.',
  },
  {
    q: 'How does a $15,000 fixed sell-side check compare to a full Big Four readiness study?',
    a: 'Large firms assign a team of junior analysts to hand you a hundred-page binder four weeks before close, leaving you zero time to fix anything. In two weeks I give your CEO and CFO the exact four fixes that defend your valuation multiple before a buyer ever sees your files.',
  },
  {
    q: 'Should every founder preparing to sell pay for sell-side tech diligence?',
    a: 'Hold onto your cash if your software company clears under two million dollars in annual revenue or if an acquirer is buying you purely for your customer list. Put your money toward basic financial cleanup until real valuation multiples depend on software gross margin.',
  },
];

export default function SellSideTechnicalDueDiligencePage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'A buyer found a four-million-dollar leak two weeks before closing day.',
    description:
      'Sell-side technical due diligence prepares a software company for buyer scrutiny sixty days before a sale opens. Fixing hidden customer margin leaks, overgrown roadmaps, and key-person dependencies upfront prevents late-stage price cuts and escrow holdbacks.',
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
    mainEntityOfPage: 'https://www.richardewing.io/advisory/sell-side-technical-due-diligence',
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
        name: 'Sell-Side Tech Due Diligence',
        item: 'https://www.richardewing.io/advisory/sell-side-technical-due-diligence',
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
      <SellSideDdClient faqs={FAQ_ITEMS} />
    </>
  );
}
