import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Industry AI Economics & R&D Audits | Richard Ewing',
    description: 'Vertical-specific AI economics: how technical debt, AI costs, and R&D capital allocation differ across 15 industries from FinTech to GovTech.',
    keywords: ['industry advisory', 'fintech CTO advisor', 'healthtech engineering audit', 'AI company economics', 'vertical AI economics'],
    alternates: { canonical: 'https://www.richardewing.io/industries' },
};

const verticals = [
    {
        title: 'FinTech',
        subtitle: 'Regulated Financial Services',
        description: 'SOX, PCI-DSS, and regulations create the highest compliance-driven technical debt. Engineering capacity is consumed by compliance audits.',
        href: '/industries/fintech',
        color: 'emerald',
        icon: '💳',
    },
    {
        title: 'HealthTech',
        subtitle: 'Healthcare & Clinical AI',
        description: 'HIPAA, FDA SaMD, and CMS interoperability rules create unique engineering constraints. Clinical AI requires regulatory-grade validation.',
        href: '/industries/healthtech',
        color: 'blue',
        icon: '🏥',
    },
    {
        title: 'AI-First Companies',
        subtitle: 'LLM-Native Products',
        description: 'When your core product runs on LLMs, every query costs money. Margin erosion, model dependency, and hallucination liability are existential threats.',
        href: '/industries/ai-first',
        color: 'orange',
        icon: '🤖',
    },
    {
        title: 'SaaS & B2B',
        subtitle: 'Multi-Tenant Platforms',
        description: 'Technical debt attacks ARR growth, gross margin, and feature velocity simultaneously. The economic chain reaction is measurable and preventable.',
        href: '/industries/saas',
        color: 'violet',
        icon: '☁️',
    },
    {
        title: 'GovTech & Public Sector',
        subtitle: 'Government Technology',
        description: 'Legacy mainframes from the 1970s, FedRAMP compliance costs, and citizen-facing reliability requirements create unique engineering economics.',
        href: '/industries/govtech',
        color: 'sky',
        icon: '🏛️',
    },
    {
        title: 'EdTech',
        subtitle: 'Education Technology',
        description: 'Content delivery at scale, AI tutor governance, FERPA/COPPA compliance, and accessibility requirements create complex engineering economics.',
        href: '/industries/edtech',
        color: 'pink',
        icon: '📚',
    },
    {
        title: 'E-Commerce',
        subtitle: 'Online Retail & Marketplaces',
        description: 'Platform complexity, AI personalization costs, peak traffic scaling, and payment compliance create compounding technical debt.',
        href: '/industries/ecommerce',
        color: 'amber',
        icon: '🛒',
    },
    {
        title: 'Cybersecurity',
        subtitle: 'Security Products',
        description: 'Security debt compounds faster than other technical debt. AI detection costs, zero-day response, and compliance overhead create unique economics.',
        href: '/industries/cybersecurity',
        color: 'red',
        icon: '🛡️',
    },
    {
        title: 'Logistics & Supply Chain',
        subtitle: 'Real-Time Systems',
        description: 'Real-time tracking, IoT infrastructure, AI forecasting, and carrier integrations create layered technical debt at massive scale.',
        href: '/industries/logistics',
        color: 'lime',
        icon: '📦',
    },
    {
        title: 'InsurTech',
        subtitle: 'Insurance Technology',
        description: 'Legacy core systems, state compliance, AI underwriting economics, and claims processing debt that nobody fully understands.',
        href: '/industries/insurtech',
        color: 'yellow',
        icon: '🏦',
    },
    {
        title: 'PropTech',
        subtitle: 'Real Estate Technology',
        description: 'Property data integration debt, AI valuation model economics, legacy MLS systems, and smart building IoT infrastructure create unique R&D challenges.',
        href: '/industries/proptech',
        color: 'indigo',
        icon: '🏠',
    },
    {
        title: 'LegalTech',
        subtitle: 'Legal Technology',
        description: 'Document processing AI costs, jurisdictional regulatory data maintenance, contract analytics model drift, and highest-tier security requirements.',
        href: '/industries/legaltech',
        color: 'fuchsia',
        icon: '⚖️',
    },
    {
        title: 'AgriTech',
        subtitle: 'Agriculture Technology',
        description: 'Precision agriculture AI costs, IoT sensor infrastructure debt at scale, satellite imagery processing, and farm-to-fork supply chain traceability.',
        href: '/industries/agritech',
        color: 'teal',
        icon: '🌾',
    },
    {
        title: 'CleanTech',
        subtitle: 'Clean Energy & Climate',
        description: 'Energy grid integration debt, carbon accounting data complexity, cross-jurisdiction regulatory compliance, and massive IoT sensor deployments.',
        href: '/industries/cleantech',
        color: 'green',
        icon: '☀️',
    },
    {
        title: 'MediaTech',
        subtitle: 'Media & Entertainment',
        description: 'Streaming infrastructure at scale, content recommendation AI, DRM/rights management systems, and ad tech integration debt.',
        href: '/industries/mediatech',
        color: 'purple',
        icon: '🎥',
    },
];

const colorMap: Record<string, string> = {
    emerald: 'border-emerald-500/20 hover:border-emerald-500/50',
    blue: 'border-blue-500/20 hover:border-blue-500/50',
    orange: 'border-orange-500/20 hover:border-orange-500/50',
    violet: 'border-violet-500/20 hover:border-violet-500/50',
    sky: 'border-sky-500/20 hover:border-sky-500/50',
    pink: 'border-pink-500/20 hover:border-pink-500/50',
    amber: 'border-amber-500/20 hover:border-amber-500/50',
    red: 'border-red-500/20 hover:border-red-500/50',
    lime: 'border-lime-500/20 hover:border-lime-500/50',
    yellow: 'border-yellow-500/20 hover:border-yellow-500/50',
    indigo: 'border-indigo-500/20 hover:border-indigo-500/50',
    fuchsia: 'border-fuchsia-500/20 hover:border-fuchsia-500/50',
    teal: 'border-teal-500/20 hover:border-teal-500/50',
    green: 'border-green-500/20 hover:border-green-500/50',
    purple: 'border-purple-500/20 hover:border-purple-500/50',
};
const textMap: Record<string, string> = { emerald: 'text-emerald-900 font-extrabold font-semibold', blue: 'text-blue-900 font-extrabold font-semibold', orange: 'text-orange-900 font-extrabold font-semibold', violet: 'text-violet-400', sky: 'text-sky-400', pink: 'text-pink-400', amber: 'text-amber-400', red: 'text-red-900 font-extrabold font-semibold', lime: 'text-lime-400', yellow: 'text-yellow-900 font-extrabold font-semibold', indigo: 'text-indigo-900 font-extrabold font-semibold', fuchsia: 'text-zinc-950 font-semibolduchsia-400', teal: 'text-teal-400', green: 'text-green-400', purple: 'text-purple-900 font-extrabold font-semibold' };

export default function IndustriesPage() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-6">
                        Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-orange-400">Serve</span>
                    </h1>
                    <p className="text-lg text-zinc-900 mb-12 max-w-2xl">
                        Product economics principles are universal. The application is vertical-specific. Each industry carries unique debt profiles, regulatory burdens, and AI risk factors.
                    </p>

                    <div className="space-y-6 mb-16">
                        {verticals.map((v) => (
                            <Link key={v.href} href={v.href} className="group block">
                                <div className={`rounded-2xl border ${colorMap[v.color]} p-8 transition-all hover:bg-zinc-50`}>
                                    <div className="flex items-start gap-4">
                                        <div className="text-3xl">{v.icon}</div>
                                        <div>
                                            <div className={`text-xs font-bold font-mono uppercase tracking-widest mb-1 ${textMap[v.color]}`}>{v.subtitle}</div>
                                            <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-3">{v.title}</h2>
                                            <p className="text-zinc-900 mb-4">{v.description}</p>
                                            <span className={`text-sm font-semibold font-bold uppercase tracking-widest ${textMap[v.color]}`}>Learn More →</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="text-center py-12 border-t border-zinc-400">
                        <p className="text-zinc-900 mb-4">Don&apos;t see your industry?</p>
                        <Link href="/advisory" className="text-cyan-900 font-extrabold font-semibold hover:text-cyan-900 font-extrabold font-semibold font-bold uppercase tracking-widest text-sm">
                            Book a Custom Assessment →
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
