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
import { PHProvider } from '@/lib/telemetry/posthog';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-grotesk' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });
const serif = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.richardewing.io'),
  title: {
    default: 'Richard Ewing — AI Economist | R&D Capital Audits & AI Governance',
    template: '%s | Richard Ewing'
  },
  description: 'The AI Economist: R&D capital audits, AI unit economics, and technical debt quantification for enterprises. Free diagnostic tools and frameworks.',
  keywords: homepageKeywords,
  authors: [{ name: 'Richard Ewing', url: 'https://www.richardewing.io' }],
  creator: 'Richard Ewing',
  publisher: 'Richard Ewing',
  // Canonical
  alternates: {
    canonical: 'https://www.richardewing.io',
  },

  // Open Graph
  openGraph: {
    title: 'Richard Ewing | R&D Capital Audits & AI Governance',
    description: 'Most AI failures are not model failures. They are operational failures. I audit R&D capital, diagnose AI unit economics, and build deterministic governance infrastructure that protects your margins.',
    url: 'https://www.richardewing.io',
    siteName: 'Richard Ewing',
    type: 'website',
    locale: 'en_US',
    images: [{ url: 'https://www.richardewing.io/og-image-home.png' }],
  },

  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'Richard Ewing — AI Economist | R&D Capital Audits & AI Governance',
    description: 'Most AI failures are not model failures. They are operational failures. I audit R&D capital, diagnose AI unit economics, and build deterministic governance infrastructure that protects your margins.',
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
            description: 'AI Economist specializing in AI unit economics. R&D capital audit, technical debt diagnostics, and AI margin engineering.',
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
            description: 'AI Economics advisory firm specializing in R&D capital audits, technical debt diagnostics, and AI unit economics.',
            founder: {
              '@type': 'Person',
              '@id': 'https://www.richardewing.io/#person',
              name: 'Richard Ewing',
              jobTitle: 'AI Economist (AI Economics Domain)',
              url: 'https://www.richardewing.io/principal',
            },
            sameAs: [
              'https://linkedin.com/in/richard-ewing-mba',
              'https://www.cio.com/author/richard-ewing/',
              'https://builtin.com/authors/richard-ewing',
              'https://hackernoon.com/u/richardewing',
              'https://www.mindtheproduct.com/author/richard-ewing/',
              'https://www.mindtheproduct.com/profile/richard-ewing',
              'https://github.com/Richard-Ewing',
              'https://medium.com/@richardewing',
              'https://substack.com/@richardewing',
              'https://www.amazon.com/author/richardewing',
              'https://aws.amazon.com/startups/showcase/startup-details/3340d267-ae86-4467-8775-4f0e60a3edc5',
              'https://www.linkedin.com/company/exogram-ai/'
            ],
          }) }}
        />

        <PHProvider>
          <ClerkProvider 
            appearance={{ 
              variables: { 
                colorPrimary: '#0891B2', 
                colorBackground: '#FFFFFF', 
                colorText: '#1A1A1A', 
                colorInputBackground: '#FFFFFF',
                colorInputText: '#1A1A1A',
                colorDanger: '#DC2626'
              },
              elements: {
                card: 'border border-zinc-200 shadow-xl bg-white rounded-2xl',
                formFieldLabel: 'text-zinc-900 font-sans font-bold',
                socialButtonsBlockButton: 'bg-zinc-50 border-zinc-200 text-zinc-900 hover:bg-zinc-100 transition-all font-sans font-bold',
                formButtonPrimary: 'font-bold tracking-widest uppercase hover:opacity-90 transition-opacity',
                headerTitle: 'font-sans font-bold text-zinc-900 text-2xl',
                headerSubtitle: 'font-sans text-zinc-600',
                dividerLine: 'bg-zinc-200',
                dividerText: 'text-zinc-800 font-mono text-xs uppercase tracking-widest'
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
        </PHProvider>
      </body>
    </html>
  );
}
