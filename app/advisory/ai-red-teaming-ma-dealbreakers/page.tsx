import type { Metadata } from 'next';
import MaRedTeamingClient from './MaRedTeamingClient';

export const metadata: Metadata = {
  title: 'AI Red-Team Tests & M&A Dealbreakers',
  description:
    'Pre-close AI stress-testing for buyers and General Counsel. Catch hidden data leaks, unapproved refund authority, and runaway vendor bills before closing.',
  alternates: {
    canonical: 'https://www.richardewing.io/advisory/ai-red-teaming-ma-dealbreakers',
  },
  openGraph: {
    title: 'AI Red-Team Tests & M&A Dealbreakers | Richard Ewing',
    description:
      'Pre-close AI stress-testing for buyers and General Counsel. Catch hidden data leaks, unapproved refund authority, and runaway vendor bills before closing.',
    url: 'https://www.richardewing.io/advisory/ai-red-teaming-ma-dealbreakers',
    type: 'article',
    images: [{ url: 'https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Red-Team Tests & M&A Dealbreakers | Richard Ewing',
    description:
      'Pre-close AI stress-testing for buyers and General Counsel. Catch hidden data leaks, unapproved refund authority, and runaway vendor bills before closing.',
    images: ['https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg'],
  },
};

const FAQ_ITEMS = [
  {
    q: 'What does pre-close AI red-teaming actually test before an acquisition closes?',
    a: "We try to break the target company's automated software the way an angry customer, a careless employee, or a clever competitor would. Instead of reading a slide deck, we test whether the tool leaks private customer spreadsheets, issues unapproved refunds, or runs up hidden vendor bills over a weekend.",
  },
  {
    q: 'Why can a standard software review not catch these M&A dealbreakers?',
    a: 'Standard reviews check whether software works when someone uses it politely. They rarely test what happens when a customer asks three tricky questions in a row to bypass a written refund rule, or when a stuck background job repeats a paid step forty times overnight.',
  },
  {
    q: 'What happens if pre-close testing uncovers a major data leak or pricing hole?',
    a: 'Buyers and General Counsel use the written proof before signing to hold back escrow cash, lower the purchase price to cover cleanup work, or require the seller to put hard human approval locks in place prior to close.',
  },
  {
    q: 'When should a buyer skip paid AI stress-testing completely?',
    a: 'Keep your diligence checkbook closed if the target company only uses AI internally for meeting summaries or rough email drafts and zero automated tools touch live customer files, refunds, pricing, or billing systems.',
  },
];

export default function MaRedTeamingPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "Never close an acquisition before trying to break the target company's AI tools.",
    description:
      "Pre-close AI stress-testing (red-teaming) tries to break a target company's automated software before an acquisition closes. It uncovers unapproved data sharing, missing human approval gates, and runaway vendor bills that lower purchase price or kill deals.",
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
    mainEntityOfPage: 'https://www.richardewing.io/advisory/ai-red-teaming-ma-dealbreakers',
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
        name: 'AI Red-Team Tests & M&A Dealbreakers',
        item: 'https://www.richardewing.io/advisory/ai-red-teaming-ma-dealbreakers',
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
      <MaRedTeamingClient faqs={FAQ_ITEMS} />
    </>
  );
}
