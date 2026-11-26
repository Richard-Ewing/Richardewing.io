import type { Metadata } from 'next';
import AgentBuyersClient from './AgentBuyersClient';

export const metadata: Metadata = {
  title: 'Pricing When AI Agents Buy Software',
  description:
    'What happens to per-seat software revenue when one automated buyer replaces fifty human logins? Plain-English pricing rules to stop seat shrinkage.',
  alternates: {
    canonical: 'https://www.richardewing.io/compare/pricing-when-ai-agents-buy',
  },
  openGraph: {
    title: 'Pricing When AI Agents Buy Software | Richard Ewing',
    description:
      'Protect recurring software revenue when customers consolidate fifty paid logins down to a handful of automated workers.',
    url: 'https://www.richardewing.io/compare/pricing-when-ai-agents-buy',
    type: 'article',
    images: [{ url: 'https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing When AI Agents Buy Software | Richard Ewing',
    description:
      'Protect recurring software revenue when customers consolidate fifty paid logins down to a handful of automated workers.',
    images: ['https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg'],
  },
};

const FAQ_ITEMS = [
  {
    q: 'Why does per-seat pricing break when customers use software automation?',
    a: 'Because automation removes human clicks while increasing how much work your software runs. When a client cuts fifty customer support logins down to five supervisors running automated workflows all day, your per-seat revenue drops ninety percent while your hosting bills climb.',
  },
  {
    q: 'Should I switch overnight from per-seat fees to pure transaction billing?',
    a: 'No. Customers still want a predictable annual baseline for their budget, and pure pay-per-click billing causes invoice fights in procurement. Keep a solid platform fee tied to company size or active accounts, then meter heavy automated volume above a fair ceiling.',
  },
  {
    q: 'How do automated purchasing tools compare software pricing?',
    a: 'Automated buying tools sort vendors by transparent published terms and predictable total cost. If your price sheet hides behind mystery credit math or requires three sales calls just to see starting rates, buyers pass you over for competitors with clear numbers.',
  },
  {
    q: 'When should a software company wait before changing its seat model?',
    a: 'Wait if your customers still log in individually every morning to click through screens by hand and less than ten percent of your account usage comes from automated runs. Repricing too early confuses healthy buyers for zero upside.',
  },
];

export default function PricingWhenAiAgentsBuyPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Your customer cut fifty seats down to three while running ten times more work.',
    description:
      'When automated software replaces human logins, per-seat pricing shrinks vendor revenue even as delivery bills surge. Pairing a predictable platform fee with clear automated volume bands protects recurring profit during seat consolidation.',
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
    mainEntityOfPage: 'https://www.richardewing.io/compare/pricing-when-ai-agents-buy',
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
        name: 'Pricing When AI Agents Buy Software',
        item: 'https://www.richardewing.io/compare/pricing-when-ai-agents-buy',
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
      <AgentBuyersClient faqs={FAQ_ITEMS} />
    </>
  );
}
