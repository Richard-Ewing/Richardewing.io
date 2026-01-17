
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Sidebar } from './components/sidebar';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });
const serif = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });

export const metadata: Metadata = {
  title: 'Richard Ewing | Product Economist',
  description: 'The Office of the Product Economist. Decoupling revenue growth from headcount.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable} ${serif.variable}`}>
      <body className="overflow-x-hidden bg-obsidian text-gray-300 font-sans antialiased bg-[url('/assets/images/noise.png')]">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-[320px_1fr] min-h-screen">
          <Sidebar />
          <main className="p-8 lg:p-24 relative overflow-hidden min-h-screen">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
