import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'AI Economics for E-Commerce — Platform Debt & AI Per...',
    description: 'Product economics advisory for e-commerce companies. Platform technical debt, AI recommendation economics, checkout optimization, and peak traffic engin...',
    keywords: ['ecommerce technical debt', 'ecommerce platform engineering', 'AI recommendation cost', 'checkout optimization', 'ecommerce CTO advisor', 'peak traffic scaling'],
    alternates: { canonical: 'https://www.richardewing.io/industries/ecommerce' },
    openGraph: { title: 'AI Economics for E-Commerce', description: 'Platform debt, AI personalization economics, and peak traffic scaling for e-commerce.', url: 'https://www.richardewing.io/industries/ecommerce', type: 'website' },
};

const challenges = [
    { icon: '🛒', title: 'Platform Complexity', description: 'Catalog management, inventory sync, payment processing, shipping integrations, and marketplace APIs create layered integration debt that compounds with ...' },
    { icon: '🎯', title: 'AI Personalization Cost', description: 'Recommendation engines, dynamic pricing, and personalized search all cost money per interaction. At scale, AI personalization COGS can exceed the margin...' },
    { icon: '📈', title: 'Peak Traffic Debt', description: 'Black Friday, Prime Day, and flash sales require 10-100x capacity that sits idle 364 days a year. Over-provisioning wastes money; under-provisioning los...' },
    { icon: '💳', title: 'Payment & Fraud', description: 'Payment compliance (PCI-DSS), multi-currency support, and fraud detection create security-driven technical debt with direct financial consequences.' },
];

export default function EcommercePage() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-xs font-bold font-medium font-mono text-zinc-950 font-bold uppercase tracking-widest">
                        <Link href="/industries" className="hover:text-cyan-900 font-extrabold font-semibold">Industries</Link><span>/</span><span className="text-amber-400 font-bold">E-Commerce</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-6">
                        AI Economics for{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">E-Commerce</span>
                    </h1>
                    <p className="text-lg text-zinc-900 mb-12 max-w-2xl">
                        E-commerce platforms face the unique challenge of managing massive product catalogs, complex integrations, and extreme traffic spikes — all while AI personalization adds variable cost to every interaction.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                        {challenges.map((c, i) => (
                            <div key={i} className="rounded-xl border border-zinc-400 p-6 hover:border-amber-500/30 transition-colors">
                                <div className="text-2xl mb-3">{c.icon}</div>
                                <h3 className="text-lg font-grotesk font-bold text-zinc-950 mb-2">{c.title}</h3>
                                <p className="text-zinc-900 text-sm">{c.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-8 mb-16">
                        <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-4">How I Help E-Commerce Companies</h2>
                        <ul className="space-y-3 text-zinc-950 mb-8">
                            <li className="flex items-start gap-3"><span className="text-amber-400 mt-1">→</span> <span>Quantify platform integration debt and its impact on checkout conversion</span></li>
                            <li className="flex items-start gap-3"><span className="text-amber-400 mt-1">→</span> <span>Model AI personalization COGS to ensure recommendation features are margin-positive</span></li>
                            <li className="flex items-start gap-3"><span className="text-amber-400 mt-1">→</span> <span>Optimize peak traffic architecture to minimize idle infrastructure costs</span></li>
                            <li className="flex items-start gap-3"><span className="text-amber-400 mt-1">→</span> <span>Calculate the ROI of platform modernization vs continued patchwork maintenance</span></li>
                        </ul>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/tools/aueb" className="px-6 py-3 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-600 text-zinc-950 font-semibold font-bold hover:opacity-90">Free AUEB Calculator →</Link>
                            <Link href="/advisory" className="px-6 py-3 rounded-lg border border-zinc-500 text-zinc-950 font-bold hover:bg-white/5">Book Advisory →</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
