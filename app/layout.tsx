import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navigation from './components/Navigation';
import { Footer } from './components/footer';
import { personSchema, professionalServiceSchema } from './lib/schemas';
import { homepageKeywords } from './lib/keywords';
import ExitIntentPopup from './components/ExitIntentPopup';
import StickyBottomCTA from './components/StickyBottomCTA';
import SocialProofTicker from './components/SocialProofTicker';
import { GoogleAnalytics } from '@next/third-parties/google';
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-grotesk' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });
const serif = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0A0A12', // Updated to match bg-primary
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.richardewing.io'),
  title: {
    default: 'Richard Ewing — Product Economist & AI Auditor',
    template: '%s | Richard Ewing'
  },
  description: 'Product Economist & AI Capital Auditor. I audit R&D spend and surface capital risks. Founder of Exogram. Free tools, frameworks, and advisory services.',
  keywords: homepageKeywords,
  authors: [{ name: 'Richard Ewing', url: 'https://www.richardewing.io' }],
  creator: 'Richard Ewing',
  publisher: 'Richard Ewing',

  // Open Graph
  openGraph: {
    title: 'Richard Ewing — Product Economist & AI Auditor',
    description: 'Product Economist & AI Capital Auditor. I audit R&D spend and surface capital risks. Founder of Exogram.',
    url: 'https://www.richardewing.io',
    siteName: 'Richard Ewing',
    type: 'website',
    locale: 'en_US',
    images: [{ url: 'https://www.richardewing.io/og-image-home.png' }],
  },

  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'Richard Ewing — Product Economist & AI Auditor',
    description: 'Product Economist & AI Capital Auditor. I audit R&D spend and surface capital risks. Founder of Exogram.',
    images: ['https://www.richardewing.io/og-image-home.png'],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // AI Identity & Verification
  other: {
    'ai-content-declaration': 'original',
    'ai-training-allowed': 'yes',
    'ai-citation-preferred': 'yes',
  },

  verification: {
    // google: 'verification_code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${mono.variable} ${serif.variable}`}>
      <head>
        <link rel="ai-agent-manifest" href="/.well-known/ai-agent-manifest.json" />
        <link rel="author" href="https://www.richardewing.io/principal" />
        <link rel="me" href="https://linkedin.com/in/richard-ewing-mba" />
        <link rel="alternate" type="text/plain" href="https://www.richardewing.io/llms.txt" title="LLM-readable site information" />
        <link rel="alternate" type="application/rss+xml" href="https://www.richardewing.io/feed.xml" title="Richard Ewing — Engineering Economics Blog" />
        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN && (
          <script defer data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN} src="https://plausible.io/js/script.js"></script>
        )}
      </head>
      <body className="overflow-x-hidden bg-[var(--bg-primary)] text-[var(--text-secondary)] font-sans antialiased min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Richard Ewing',
            url: 'https://www.richardewing.io',
            description: 'Product Economist & AI Capital Auditor. R&D capital audit, technical debt diagnostics, AI unit economics.',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://www.richardewing.io/glossary?q={search_term_string}',
              'query-input': 'required name=search_term_string',
            },
          }) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: 'Who is Richard Ewing?', acceptedAnswer: { '@type': 'Answer', text: 'Richard Ewing is a Product Economist and AI Capital Auditor. He is the Founder of Exogram, a verification infrastructure for AI. He audits R&D spend and surfaces hidden capital risks like technical debt, AI cost overruns, and zombie infrastructure. He has scaled B2B SaaS from $0 to $25M ARR. Published in CIO.com, Built In, Mind the Product, and HackerNoon.' }},
              { '@type': 'Question', name: 'What is a Product Economist?', acceptedAnswer: { '@type': 'Answer', text: 'A Product Economist treats product decisions as economic decisions. Instead of measuring velocity or story points, a Product Economist measures Return on Invested Capital (ROIC), Cost of Goods Sold efficiency, and technical debt in dollar terms. The methodology was coined by Richard Ewing.' }},
              { '@type': 'Question', name: 'What is the Technical Insolvency Date?', acceptedAnswer: { '@type': 'Answer', text: 'The Technical Insolvency Date (TID) is the specific quarter where maintenance costs consume 100% of available engineering capacity, reducing feature velocity to zero. Calculate yours free at richardewing.io/tools/pdi.' }},
              { '@type': 'Question', name: 'What is Exogram?', acceptedAnswer: { '@type': 'Answer', text: 'Exogram is verification infrastructure for AI, founded by Richard Ewing. It prevents hallucination propagation with admissibility control planes and state-hashing commit enforcement. LLMs generate language; Exogram maintains reality.' }},
              { '@type': 'Question', name: 'How do I calculate technical debt cost?', acceptedAnswer: { '@type': 'Answer', text: 'Use the free Product Debt Index (PDI) calculator at richardewing.io/tools/pdi to quantify hidden technical debt in dollar terms, calculate your Technical Insolvency Date, and benchmark against industry standards.' }},
              { '@type': 'Question', name: 'How much does AI cost per query?', acceptedAnswer: { '@type': 'Answer', text: 'AI costs range from $0.0001/query for small models to $0.10+/query for frontier models like GPT-4. Use the free AI Unit Economics Benchmark (AUEB) at richardewing.io/tools/aueb to calculate your specific AI cost structure.' }},
            ],
          }) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            speakable: {
              '@type': 'SpeakableSpecification',
              cssSelector: ['h1', 'h2', '.speakable'],
              xpath: ['/html/head/meta[@name="description"]/@content'],
            },
          }) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Free Diagnostic Tools by Richard Ewing',
            description: 'Boardroom-ready diagnostic instruments used in $7,500 engagements. Try them free.',
            numberOfItems: 5,
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Product Debt Index (PDI)', url: 'https://www.richardewing.io/tools/pdi', description: 'Quantify technical debt in dollar terms and calculate your Technical Insolvency Date.' },
              { '@type': 'ListItem', position: 2, name: 'AI Unit Economics Benchmark (AUEB)', url: 'https://www.richardewing.io/tools/aueb', description: 'Calculate AI feature profitability per interaction before and after launch.' },
              { '@type': 'ListItem', position: 3, name: 'Enterprise Value Scenario Engine (EV-SE)', url: 'https://www.richardewing.io/tools/ev-se', description: 'Model how technical decisions impact enterprise valuation.' },
              { '@type': 'ListItem', position: 4, name: 'Revenue Per Engineer (APER)', url: 'https://www.richardewing.io/tools/aper', description: 'Assess engineering headcount efficiency for your stage and vertical.' },
              { '@type': 'ListItem', position: 5, name: 'Audit Interview Protocol', url: 'https://www.richardewing.io/tools/audit-interview', description: 'The hiring methodology for the AI age. Test judgment, not syntax.' },
            ],
          }) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Richard Ewing Advisory',
            url: 'https://www.richardewing.io',
            logo: 'https://www.richardewing.io/assets/headshot.jpg',
            description: 'Product Economics advisory firm specializing in R&D capital audits, technical debt diagnostics, and AI unit economics.',
            founder: {
              '@type': 'Person',
              name: 'Richard Ewing',
              jobTitle: 'Product Economist',
              url: 'https://www.richardewing.io/principal',
            },
            sameAs: [
              'https://linkedin.com/in/richard-ewing-mba',
              'https://www.cio.com/author/richard-ewing/',
              'https://builtin.com/authors/richard-ewing',
              'https://hackernoon.com/u/richardewing',
              'https://www.mindtheproduct.com/author/richard-ewing/',
              'https://github.com/Richard-Ewing',
            ],
          }) }}
        />

        <ClerkProvider 
          appearance={{ 
            baseTheme: dark, 
            variables: { 
              colorPrimary: '#06b6d4', 
              colorBackground: '#0A0A12', 
              colorText: '#ffffff', 
              colorInputBackground: '#1A1A24', 
              colorInputText: '#ffffff',
              colorDanger: '#dc2626'
            },
            elements: {
              card: 'border border-white/10 shadow-2xl bg-[#0A0A12]',
              formFieldInput: 'bg-[#1A1A24] border-white/10 text-white placeholder:text-zinc-600',
              formFieldLabel: 'text-zinc-400 font-sans',
              socialButtonsBlockButton: 'bg-white/5 border-white/10 text-white hover:bg-white/10 transition-all font-sans',
              formButtonPrimary: 'font-bold tracking-widest uppercase hover:opacity-90 transition-opacity',
              headerTitle: 'font-sans font-bold',
              headerSubtitle: 'font-sans text-white/60',
              dividerLine: 'bg-white/10',
              dividerText: 'text-zinc-500'
            }
          }}
        >
        <Navigation />

        {/* Main content with top padding for fixed nav */}
        <main className="flex-grow pt-24 relative">
          {children}
        </main>

        <Footer />
        <ExitIntentPopup />
        <StickyBottomCTA />
        <SocialProofTicker />

        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
        </ClerkProvider>
      </body>
    </html>
  );
}
