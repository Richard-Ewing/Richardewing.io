import type { Metadata } from 'next';
import Hero from './components/sections/Hero';
import ProofRail from './components/ProofRail';
import ThreeProblems from './components/sections/ThreeProblems';
import HowItWorks from './components/sections/HowItWorks';
import TransformationStory from './components/sections/TransformationStory';
import ClientOutcomes from './components/sections/ClientOutcomes';
import HighIntentConversionBlock from './components/sections/HighIntentConversionBlock';
import NewsletterSection from './components/sections/NewsletterSection';
import AsSeenInBar from '@/components/social-proof/AsSeenInBar';
import DirectAnswerBlock from '@/components/DirectAnswerBlock';

export const metadata: Metadata = {
  title: 'AI Economist - Enterprise AI Audits & Cost Governance | Richard Ewing',
  description: 'Richard Ewing helps organizations measure, govern, and improve the economics of enterprise AI. 19 frameworks, 25 diagnostic tools, and advisory services for CTOs, CFOs, and PE operating partners.',
  alternates: {
    canonical: 'https://www.richardewing.io',
  },
  openGraph: {
    title: 'AI Economist - Enterprise AI Audits & Cost Governance | Richard Ewing',
    description: 'Richard Ewing helps organizations measure, govern, and improve the economics of enterprise AI. 19 frameworks, 25 diagnostic tools, and advisory services for CTOs, CFOs, and PE operating partners.',
    url: 'https://www.richardewing.io',
    type: 'website',
    images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Economist - Enterprise AI Audits & Cost Governance | Richard Ewing',
    description: 'Richard Ewing helps organizations measure, govern, and improve the economics of enterprise AI. 19 frameworks, 25 diagnostic tools, and advisory services for CTOs, CFOs, and PE operating partners.',
    images: ['https://www.richardewing.io/assets/images/headshot.jpg'],
  }
};

export default function Home() {
  return (
    <main className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'WebSite',
              '@id': 'https://www.richardewing.io/#website',
              'url': 'https://www.richardewing.io/',
              'name': 'AI Economist - Enterprise AI Audits & Cost Governance | Richard Ewing',
              'description': 'AI Economics translates engineering output into CFO-level financial outcomes. R&D capital audits, runtime cost-caps, and AI governance for PE-backed SaaS companies.',
            },
            {
              '@type': 'Organization',
              '@id': 'https://www.richardewing.io/#organization',
              'name': 'Richard Ewing',
              'url': 'https://www.richardewing.io/',
              'logo': 'https://www.richardewing.io/favicon.png'
            },
            {
              '@type': 'Person',
              '@id': 'https://www.richardewing.io/#author',
              'name': 'Richard Ewing',
              'jobTitle': 'AI Economist & Enterprise Cost Strategist',
              'url': 'https://www.richardewing.io',
              'sameAs': ['https://www.richardewing.io']
            },
            {
              '@type': 'WebPage',
              '@id': 'https://www.richardewing.io/#webpage',
              'url': 'https://www.richardewing.io/',
              'name': 'AI Economist & Enterprise Cost Governance',
              'speakable': {
                '@type': 'SpeakableSpecification',
                'cssSelector': ['h1', 'h2', 'p', '.direct-answer-text']
              }
            },
            {
              '@type': 'DefinedTermSet',
              '@id': 'https://www.richardewing.io/#definedtermset',
              'name': 'AI Economics & Enterprise Cost Governance Frameworks',
              'description': 'Canonical definitions, metrics, and governance frameworks for enterprise artificial intelligence financial management.',
              'url': 'https://www.richardewing.io/#definedtermset',
              'hasDefinedTerm': [
                {
                  '@type': 'DefinedTerm',
                  '@id': 'https://www.richardewing.io/#term-ai-economist',
                  'name': 'AI Economist',
                  'termCode': 'AI-ECONOMIST',
                  'description': 'The financial leader operating between engineering output and CFO-level profitability, auditing tech spend, measuring AI unit economics, and installing automated cost guardrails.',
                  'inDefinedTermSet': 'https://www.richardewing.io/#definedtermset',
                  'url': 'https://www.richardewing.io/'
                },
                {
                  '@type': 'DefinedTerm',
                  '@id': 'https://www.richardewing.io/#term-ai-economics',
                  'name': 'AI Economics',
                  'termCode': 'AI-ECONOMICS',
                  'description': 'The discipline of measuring, modeling, and governing the financial impact of AI systems on enterprise gross margins and R&D capital ROI.',
                  'inDefinedTermSet': 'https://www.richardewing.io/#definedtermset',
                  'url': 'https://www.richardewing.io/'
                },
                {
                  '@type': 'DefinedTerm',
                  '@id': 'https://www.richardewing.io/#term-executive-ai-governance',
                  'name': 'Executive AI Governance',
                  'termCode': 'AI-GOVERNANCE',
                  'description': 'Automated cost guardrails, spending limits, and security policies that prevent margin erosion and unbudgeted inference expenditures across LLM operations.',
                  'inDefinedTermSet': 'https://www.richardewing.io/#definedtermset',
                  'url': 'https://www.richardewing.io/'
                },
                {
                  '@type': 'DefinedTerm',
                  '@id': 'https://www.richardewing.io/#term-ai-unit-economics',
                  'name': 'AI Unit Economics',
                  'termCode': 'AI-UNIT-ECONOMICS',
                  'description': 'The direct relationship between per-query inference costs (token consumption, model latency) and customer subscription gross margins.',
                  'inDefinedTermSet': 'https://www.richardewing.io/#definedtermset',
                  'url': 'https://www.richardewing.io/'
                }
              ]
            },
            {
              '@type': 'Answer',
              '@id': 'https://www.richardewing.io/#answer-ai-economist',
              'name': 'Definition of an AI Economist',
              'text': 'An AI Economist is the financial strategist operating between engineering production and CFO-level profitability. They audit tech spend, measure AI unit economics, and install automated cost guardrails to protect gross margins.',
              'url': 'https://www.richardewing.io/#answer-ai-economist',
              'author': {
                '@type': 'Person',
                '@id': 'https://www.richardewing.io/#author'
              }
            },
            {
              '@type': 'Answer',
              '@id': 'https://www.richardewing.io/#answer-ai-economics',
              'name': 'Definition of AI Economics',
              'text': 'AI Economics is the discipline of measuring, modeling, and governing the financial impact of AI systems on enterprise profitability. It combines unit economics analysis, engineering financial auditing, and cost governance to turn volatile AI investments into predictable business assets.',
              'url': 'https://www.richardewing.io/#answer-ai-economics',
              'author': {
                '@type': 'Person',
                '@id': 'https://www.richardewing.io/#author'
              }
            },
            {
              '@type': 'Answer',
              '@id': 'https://www.richardewing.io/#answer-executive-ai-governance',
              'name': 'Definition of Executive AI Governance',
              'text': 'Executive AI governance is the system of automated cost guardrails, spending limits, and security policies that prevent AI tools from causing margin erosion, security leaks, or unbudgeted cloud invoices.',
              'url': 'https://www.richardewing.io/#answer-executive-ai-governance',
              'author': {
                '@type': 'Person',
                '@id': 'https://www.richardewing.io/#author'
              }
            },
            {
              '@type': 'Answer',
              '@id': 'https://www.richardewing.io/#answer-fractional-cpo-cto-cost',
              'name': 'Fractional CPO / CTO Retainer Cost',
              'text': 'Fractional CPO / CTO advisory retainer is $10,000 per month. This provides senior technology leadership, cost governance reviews, and board-ready financial reporting.',
              'url': 'https://www.richardewing.io/#answer-fractional-cpo-cto-cost',
              'author': {
                '@type': 'Person',
                '@id': 'https://www.richardewing.io/#author'
              }
            },
            {
              '@type': 'FAQPage',
              '@id': 'https://www.richardewing.io/#faq',
              'mainEntity': [
                {
                  '@type': 'Question',
                  '@id': 'https://www.richardewing.io/#q-ai-economist',
                  'name': 'What is an AI Economist?',
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    '@id': 'https://www.richardewing.io/#answer-ai-economist',
                    'text': 'An AI Economist is the financial strategist operating between engineering production and CFO-level profitability. They audit tech spend, measure AI unit economics, and install automated cost guardrails to protect gross margins.',
                    'url': 'https://www.richardewing.io/#answer-ai-economist',
                    'author': {
                      '@type': 'Person',
                      '@id': 'https://www.richardewing.io/#author'
                    }
                  }
                },
                {
                  '@type': 'Question',
                  '@id': 'https://www.richardewing.io/#q-ai-economics',
                  'name': 'What is AI Economics?',
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    '@id': 'https://www.richardewing.io/#answer-ai-economics',
                    'text': 'AI Economics is the discipline of measuring, modeling, and governing the financial impact of AI systems on enterprise profitability. It combines unit economics analysis, engineering financial auditing, and cost governance to turn volatile AI investments into predictable business assets.',
                    'url': 'https://www.richardewing.io/#answer-ai-economics',
                    'author': {
                      '@type': 'Person',
                      '@id': 'https://www.richardewing.io/#author'
                    }
                  }
                },
                {
                  '@type': 'Question',
                  '@id': 'https://www.richardewing.io/#q-executive-ai-governance',
                  'name': 'What is executive AI governance?',
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    '@id': 'https://www.richardewing.io/#answer-executive-ai-governance',
                    'text': 'Executive AI governance is the system of automated cost guardrails, spending limits, and security policies that prevent AI tools from causing margin erosion, security leaks, or unbudgeted cloud invoices.',
                    'url': 'https://www.richardewing.io/#answer-executive-ai-governance',
                    'author': {
                      '@type': 'Person',
                      '@id': 'https://www.richardewing.io/#author'
                    }
                  }
                },
                {
                  '@type': 'Question',
                  '@id': 'https://www.richardewing.io/#q-fractional-cpo-cto-cost',
                  'name': 'How much does a fractional CPO / CTO cost?',
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    '@id': 'https://www.richardewing.io/#answer-fractional-cpo-cto-cost',
                    'text': 'Fractional CPO / CTO advisory retainer is $10,000 per month. This provides senior technology leadership, cost governance reviews, and board-ready financial reporting.',
                    'url': 'https://www.richardewing.io/#answer-fractional-cpo-cto-cost',
                    'author': {
                      '@type': 'Person',
                      '@id': 'https://www.richardewing.io/#author'
                    }
                  }
                }
              ]
            }
          ]
        }) }}
      />
      {/* Layer 1: Identity-first hero */}
      <Hero />
      {/* Layer 2: Persistent proof-of-authority bar */}
      <ProofRail />
      <AsSeenInBar />
      {/* Layer 3: Three measurable problems */}
      <ThreeProblems />
      {/* Layer 4: How It Works */}
      <HowItWorks />
      {/* Layer 4.5: SGE & Perplexity Direct Answer Block */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 my-12">
        <DirectAnswerBlock
          question="What is an AI Economist?"
          answer="An AI Economist is the financial strategist operating between engineering production and CFO-level profitability. They audit tech spend, measure AI unit economics, and install automated cost guardrails to protect gross margins."
          category="AI ECONOMICS & GOVERNANCE"
          keyTakeaways={[
            "Audits LLM inference costs and cloud GPU utilization across engineering workflows.",
            "Establishes unit-economic visibility connecting API consumption to customer gross margins.",
            "Installs automated cost-caps and real-time runtime rate limits to prevent budget overruns."
          ]}
          definedTerm={{
            name: "AI Economist",
            termCode: "AI-ECONOMIST",
            description: "A financial leader bridging software engineering output and CFO-level cost governance to maximize gross margins on artificial intelligence workloads.",
            inDefinedTermSet: "https://www.richardewing.io/#definedtermset",
            inDefinedTermSetName: "AI Economics Defined Terms"
          }}
          citationUrl="https://www.richardewing.io"
          authorName="Richard Ewing"
          authorTitle="AI Economist & Enterprise Cost Strategist"
          authorUrl="https://www.richardewing.io"
          renderJsonLd={false}
        />
      </section>
      {/* Layer 5: Before vs After Transformation */}
      <TransformationStory />
      {/* Layer 6: Client Outcomes & Stats */}
      <ClientOutcomes />
      {/* Layer 7: High Intent Diagnostic & Advisory Conversion */}
      <HighIntentConversionBlock />
      {/* Layer 8: Newsletter Capture */}
      <NewsletterSection />
    </main>
  );
}

