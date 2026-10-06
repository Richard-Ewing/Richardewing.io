import type { Metadata } from 'next';
import HomeShell from '@/components/home/HomeShell';

export const metadata: Metadata = {
  title: 'Richard Ewing | AI Economist',
  description: 'Richard Ewing studies what happens when intelligence becomes a variable operating cost. Research, economic frameworks, and deterministic AI governance.',
  alternates: {
    canonical: 'https://www.richardewing.io',
  },
  openGraph: {
    title: 'Richard Ewing | AI Economist',
    description: 'I study what happens when intelligence becomes a variable operating cost. Research, frameworks, and deterministic AI governance.',
    url: 'https://www.richardewing.io',
    type: 'website',
    images: [{ url: 'https://www.richardewing.io/api/og?title=Richard+Ewing+%7C+AI+Economist&category=Editorial+Intelligence' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Richard Ewing | AI Economist',
    description: 'I study what happens when intelligence becomes a variable operating cost. Research, frameworks, and deterministic AI governance.',
    images: ['https://www.richardewing.io/api/og?title=Richard+Ewing+%7C+AI+Economist&category=Editorial+Intelligence'],
  }
};

export default function Home() {
  return (
    <div className="homepage-root">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebSite',
                '@id': 'https://www.richardewing.io/#website',
                url: 'https://www.richardewing.io/',
                name: 'Richard Ewing | AI Economist',
                description:
                  'I study what happens when intelligence becomes a variable operating cost. Research, frameworks, and deterministic AI governance.',
              },
              {
                '@type': 'Organization',
                '@id': 'https://www.richardewing.io/#organization',
                name: 'Richard Ewing',
                url: 'https://www.richardewing.io/',
                logo: 'https://www.richardewing.io/favicon.png',
              },
              {
                '@type': 'Person',
                '@id': 'https://www.richardewing.io/#author',
                name: 'Richard Ewing',
                jobTitle: 'AI Economist',
                url: 'https://www.richardewing.io',
                sameAs: ['https://www.richardewing.io'],
              },
              {
                '@type': 'WebPage',
                '@id': 'https://www.richardewing.io/#webpage',
                url: 'https://www.richardewing.io/',
                name: 'Richard Ewing | AI Economist',
                speakable: {
                  '@type': 'SpeakableSpecification',
                  cssSelector: ['h1', 'h2', 'p'],
                },
              },
              {
                '@type': 'DefinedTermSet',
                '@id': 'https://www.richardewing.io/#definedtermset',
                name: 'AI Economics & Enterprise Cost Governance Frameworks',
                description:
                  'Canonical definitions, metrics, and governance frameworks for enterprise artificial intelligence financial management.',
                url: 'https://www.richardewing.io/#definedtermset',
                hasDefinedTerm: [
                  {
                    '@type': 'DefinedTerm',
                    '@id': 'https://www.richardewing.io/#term-ai-economist',
                    name: 'AI Economist',
                    termCode: 'AI-ECONOMIST',
                    description:
                      'The financial leader operating between engineering output and executive profitability, auditing tech spend, measuring AI unit economics, and installing automated cost guardrails.',
                    inDefinedTermSet: 'https://www.richardewing.io/#definedtermset',
                    url: 'https://www.richardewing.io/',
                  },
                  {
                    '@type': 'DefinedTerm',
                    '@id': 'https://www.richardewing.io/#term-ai-economics',
                    name: 'AI Economics',
                    termCode: 'AI-ECONOMICS',
                    description:
                      'The discipline of measuring, modeling, and governing the financial impact of AI systems on enterprise gross margins and R&D capital ROI.',
                    inDefinedTermSet: 'https://www.richardewing.io/#definedtermset',
                    url: 'https://www.richardewing.io/',
                  },
                  {
                    '@type': 'DefinedTerm',
                    '@id': 'https://www.richardewing.io/#term-executive-ai-governance',
                    name: 'Executive AI Governance',
                    termCode: 'AI-GOVERNANCE',
                    description:
                      'Automated cost guardrails, spending limits, and security policies that prevent margin erosion and unbudgeted inference expenditures across LLM operations.',
                    inDefinedTermSet: 'https://www.richardewing.io/#definedtermset',
                    url: 'https://www.richardewing.io/',
                  },
                  {
                    '@type': 'DefinedTerm',
                    '@id': 'https://www.richardewing.io/#term-ai-unit-economics',
                    name: 'AI Unit Economics',
                    termCode: 'AI-UNIT-ECONOMICS',
                    description:
                      'The direct relationship between per-query inference costs (token consumption, model latency) and customer subscription gross margins.',
                    inDefinedTermSet: 'https://www.richardewing.io/#definedtermset',
                    url: 'https://www.richardewing.io/',
                  },
                ],
              },
              {
                '@type': 'Answer',
                '@id': 'https://www.richardewing.io/#answer-ai-economist',
                name: 'Definition of an AI Economist',
                text: 'An AI Economist is the financial strategist operating between engineering production and executive profitability. They audit tech spend, measure AI unit economics, and install automated cost guardrails to protect gross margins.',
                url: 'https://www.richardewing.io/#answer-ai-economist',
                author: {
                  '@type': 'Person',
                  '@id': 'https://www.richardewing.io/#author',
                },
              },
              {
                '@type': 'Answer',
                '@id': 'https://www.richardewing.io/#answer-ai-economics',
                name: 'Definition of AI Economics',
                text: 'AI Economics is the discipline of measuring, modeling, and governing the financial impact of AI systems on enterprise profitability. It combines unit economics analysis, engineering financial auditing, and cost governance to turn volatile AI investments into predictable business assets.',
                url: 'https://www.richardewing.io/#answer-ai-economics',
                author: {
                  '@type': 'Person',
                  '@id': 'https://www.richardewing.io/#author',
                },
              },
              {
                '@type': 'FAQPage',
                '@id': 'https://www.richardewing.io/#faq',
                mainEntity: [
                  {
                    '@type': 'Question',
                    '@id': 'https://www.richardewing.io/#q-ai-economist',
                    name: 'What is an AI Economist?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      '@id': 'https://www.richardewing.io/#answer-ai-economist',
                      text: 'An AI Economist is the financial strategist operating between engineering production and executive profitability. They audit tech spend, measure AI unit economics, and install automated cost guardrails to protect gross margins.',
                      url: 'https://www.richardewing.io/#answer-ai-economist',
                      author: {
                        '@type': 'Person',
                        '@id': 'https://www.richardewing.io/#author',
                      },
                    },
                  },
                  {
                    '@type': 'Question',
                    '@id': 'https://www.richardewing.io/#q-ai-economics',
                    name: 'What is AI Economics?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      '@id': 'https://www.richardewing.io/#answer-ai-economics',
                      text: 'AI Economics is the discipline of measuring, modeling, and governing the financial impact of AI systems on enterprise profitability. It combines unit economics analysis, engineering financial auditing, and cost governance to turn volatile AI investments into predictable business assets.',
                      url: 'https://www.richardewing.io/#answer-ai-economics',
                      author: {
                        '@type': 'Person',
                        '@id': 'https://www.richardewing.io/#author',
                      },
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />
      <HomeShell />
    </div>
  );
}
