import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Sidebar } from './components/sidebar';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });
const serif = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#050505',
};

export const metadata: Metadata = {
  title: 'Richard Ewing | Product Economist',
  description: 'I help boards stop bleeding money on AI they don\'t understand. Forensic product audits, capital allocation strategy, and AI unit economics.',
  keywords: ['Product Economist', 'AI Audit', 'Product Management', 'Capital Allocation', 'Tech Due Diligence'],
  authors: [{ name: 'Richard Ewing' }],
  openGraph: {
    title: 'Richard Ewing | Product Economist',
    description: 'I help boards stop bleeding money on AI they don\'t understand.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable} ${serif.variable}`}>
      <body className="overflow-x-hidden bg-obsidian text-gray-300 font-sans antialiased">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-[320px_1fr] min-h-screen">
          <Sidebar />
          <main className="p-4 sm:p-6 md:p-8 lg:p-16 xl:p-24 relative overflow-hidden min-h-screen">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
