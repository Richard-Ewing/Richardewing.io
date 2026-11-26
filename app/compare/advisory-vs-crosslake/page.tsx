import type { Metadata } from 'next';
import VsCrosslakeClient from './VsCrosslakeClient';

export const metadata: Metadata = {
  title: 'Richard Ewing vs. Crosslake PE Audit',
  description:
    'Compare Richard Ewing $15,000 fixed-scope PE diligence against Crosslake multi-team technical due diligence for mid-market software deals.',
  alternates: {
    canonical: 'https://www.richardewing.io/compare/advisory-vs-crosslake',
  },
  openGraph: {
    title: 'Richard Ewing vs. Crosslake PE Audit | Richard Ewing',
    description:
      'Compare fast 14-day $15,000 fixed PE diligence against institutional multi-squad diligence engagements.',
    url: 'https://www.richardewing.io/compare/advisory-vs-crosslake',
    type: 'article',
    images: [{ url: 'https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Richard Ewing vs. Crosslake PE Audit | Richard Ewing',
    description:
      'Compare fast 14-day $15,000 fixed PE diligence against institutional multi-squad diligence engagements.',
    images: ['https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg'],
  },
};

const FAQ_ITEMS = [
  {
    q: 'When should a Private Equity firm hire Crosslake instead of Richard Ewing?',
    a: 'Hire Crosslake if you are executing a complex two-hundred-million-dollar corporate carve-out across six countries that needs fifteen specialists auditing codebases, infrastructure, and security simultaneously over four weeks.',
  },
  {
    q: 'Why do lower-middle-market PE funds and search funds pick a $15,000 fixed audit?',
    a: 'On deals between five and eighty million dollars, a sixty-thousand-dollar institutional diligence fee eats straight into deal economics. My $15,000 fixed audit gives your Investment Committee clear answers on customer margin leaks, AI vendor exposure, and bloated roadmaps inside two weeks.',
  },
  {
    q: 'Can you work alongside our existing legal and quality-of-earnings accountants?',
    a: 'Yes. Quality-of-earnings firms verify historical GAAP revenue, yet rarely inspect whether heavy AI usage will compress future gross margin or whether half the engineering backlog is dead weight. My readout drops straight into your Investment Committee packet.',
  },
  {
    q: 'When should a deal team skip technical diligence altogether?',
    a: 'Skip paid technical diligence when you are buying a purely service-heavy business where off-the-shelf cloud tools handle accounting and zero proprietary software value sits inside the purchase multiple.',
  },
];

export default function AdvisoryVsCrosslakePage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'A sixty-thousand-dollar diligence binder arrives after your deal terms already locked.',
    description:
      'Crosslake serves large institutional buyouts with multi-specialist diligence teams and six-figure scopes. Richard Ewing delivers $15,000 fixed-fee 14-day PE diligence focused on software profit margins, AI spend traps, and 100-day product execution.',
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
    mainEntityOfPage: 'https://www.richardewing.io/compare/advisory-vs-crosslake',
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
        name: 'Richard Ewing vs. Crosslake',
        item: 'https://www.richardewing.io/compare/advisory-vs-crosslake',
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
      <VsCrosslakeClient faqs={FAQ_ITEMS} />
    </>
  );
}
