import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'AI Economics for Logistics & Supply Chain — Real-Tim...',
    description: 'Product economics advisory for logistics and supply chain tech. Real-time tracking system debt, IoT infrastructure costs, demand forecasting AI, and int...',
    keywords: ['logistics technical debt', 'supply chain technology', 'logistics AI cost', 'IoT infrastructure debt', 'logistics CTO advisor'],
    alternates: { canonical: 'https://www.richardewing.io/industries/logistics' },
    openGraph: { title: 'AI Economics for Logistics', description: 'Real-time systems, IoT scale, and AI forecasting create unique engineering economics.', url: 'https://www.richardewing.io/industries/logistics', type: 'website' },
};

const challenges = [
    { icon: '📦', title: 'Real-Time System Debt', description: 'Tracking millions of packages, vehicles, and warehouse operations in real-time creates latency requirements that compound infrastructure complexity expo...' },
    { icon: '📡', title: 'IoT Scale', description: 'Thousands of sensors, GPS trackers, and RFID readers generate billions of data points daily. IoT infrastructure debt grows silently as sensor networks e...' },
    { icon: '🤖', title: 'AI Forecasting Economics', description: 'Demand forecasting, route optimization, and inventory prediction are AI-intensive features where inference costs scale directly with the number of SKUs,...' },
    { icon: '🔗', title: 'Integration Complexity', description: 'ERP systems, WMS, TMS, carrier APIs, and customs platforms create layered integration debt. Each new partner adds API maintenance cost forever.' },
];

export default function LogisticsPage() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-xs font-bold font-medium font-mono text-zinc-950 font-bold uppercase tracking-widest">
                        <Link href="/industries" className="hover:text-cyan-900 font-extrabold font-semibold">Industries</Link><span>/</span><span className="text-lime-400 font-bold">Logistics</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-6">
                        AI Economics for{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-400">Logistics &amp; Supply Chain</span>
                    </h1>
                    <p className="text-lg text-zinc-900 mb-12 max-w-2xl">
                        Logistics technology operates at the intersection of real-time systems, IoT scale, and AI forecasting. Each dimension creates distinct engineering economics.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                        {challenges.map((c, i) => (
                            <div key={i} className="rounded-xl border border-zinc-400 p-6 hover:border-lime-500/30 transition-colors">
                                <div className="text-2xl mb-3">{c.icon}</div>
                                <h3 className="text-lg font-grotesk font-bold text-zinc-950 mb-2">{c.title}</h3>
                                <p className="text-zinc-900 text-sm">{c.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="rounded-2xl border border-lime-500/30 bg-lime-500/5 p-8 mb-16">
                        <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-4">How I Help Logistics Companies</h2>
                        <ul className="space-y-3 text-zinc-950 mb-8">
                            <li className="flex items-start gap-3"><span className="text-lime-400 mt-1">→</span> <span>Model real-time system infrastructure costs as tracking volume scales</span></li>
                            <li className="flex items-start gap-3"><span className="text-lime-400 mt-1">→</span> <span>Calculate AI forecasting COGS per SKU/route to optimize model economics</span></li>
                            <li className="flex items-start gap-3"><span className="text-lime-400 mt-1">→</span> <span>Quantify integration debt from carrier/ERP/WMS API maintenance</span></li>
                        </ul>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/tools/aueb" className="px-6 py-3 rounded-lg bg-gradient-to-r from-lime-500 to-green-600 text-zinc-950 font-semibold font-bold hover:opacity-90">Free AUEB Calculator →</Link>
                            <Link href="/advisory" className="px-6 py-3 rounded-lg border border-zinc-500 text-zinc-950 font-bold hover:bg-white/5">Book Advisory →</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
