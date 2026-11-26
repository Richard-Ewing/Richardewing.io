import type { Metadata } from 'next';
import VsSvpgClient from './VsSvpgClient';

export const metadata: Metadata = {
  title: 'Richard Ewing vs. SVPG Coaching',
  description:
    'Compare Richard Ewing 14-day product P&L turnaround sprints against Silicon Valley Product Group (SVPG) operating model coaching.',
  alternates: {
    canonical: 'https://www.richardewing.io/compare/advisory-vs-svpg',
  },
  openGraph: {
    title: 'Richard Ewing vs. SVPG Coaching | Richard Ewing',
    description:
      'When your company needs long-term product culture coaching vs. a blunt 14-day P&L and backlog turnaround.',
    url: 'https://www.richardewing.io/compare/advisory-vs-svpg',
    type: 'article',
    images: [{ url: 'https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Richard Ewing vs. SVPG Coaching | Richard Ewing',
    description:
      'When your company needs long-term product culture coaching vs. a blunt 14-day P&L and backlog turnaround.',
    images: ['https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg'],
  },
};

const FAQ_ITEMS = [
  {
    q: 'When is SVPG or Product Institute clearly the better investment?',
    a: 'Hire SVPG or Product Institute when your gross margins are already healthy, nobody on the board is demanding immediate cost cuts, and your CEO wants a twelve-to-twenty-four-month cultural shift in how dozens of product managers run discovery.',
  },
  {
    q: 'Where does product coaching break down when a CFO steps into the room?',
    a: 'Product coaching focuses heavily on team empowerment and discovery habits, yet rarely solves bloated AI vendor bills, unprofitable customer tiers, or two hundred zombie backlog projects eating up payroll before next quarter.',
  },
  {
    q: 'Can we fix our financial math first and bring in product coaches later?',
    a: 'Yes, and that sequence saves companies hundreds of thousands of dollars. Cut the dead projects and fix customer margins in two weeks first so your product teams are actually working on profitable lines before investing in long-term craft coaching.',
  },
  {
    q: 'When should a founder skip both SVPG and my turnaround sprints?',
    a: 'Keep your wallet closed if you run a small five-person product team that still talks to customers every morning and hits profit goals effortlessly. Wait until real multi-product complexity shows up.',
  },
];

export default function AdvisoryVsSvpgPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Empowered product teams still stall when nobody cuts the dead projects.',
    description:
      'SVPG excels at multi-quarter product culture coaching for healthy organizations. Richard Ewing focuses on blunt P&L turnarounds, portfolio cuts, and AI pricing discipline inside 14 days for CEOs and CFOs under immediate board pressure.',
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
    mainEntityOfPage: 'https://www.richardewing.io/compare/advisory-vs-svpg',
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
        name: 'Richard Ewing vs. SVPG Coaching',
        item: 'https://www.richardewing.io/compare/advisory-vs-svpg',
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
      <VsSvpgClient faqs={FAQ_ITEMS} />
    </>
  );
}
