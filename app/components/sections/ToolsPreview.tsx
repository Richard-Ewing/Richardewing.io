"use client";

import { useScrollAnimation } from '@/app/hooks/useScrollAnimation';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const ToolsPreview = () => {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section ref={ref} className={`py-24 px-6 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="max-w-6xl mx-auto">

                <div className="mb-12">
                    <h2 className="text-3xl font-bold mb-4">Proof of Methodology</h2>
                    <p className="text-gray-400">These are the tools I use in paid engagements. Try one free.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <ToolCard
                        name="PDI"
                        fullName="Product Debt Index"
                        shortDesc="Quantify technical debt in dollars."
                        href="/tools/pdi"
                    />
                    <ToolCard
                        name="EV-SE"
                        fullName="Valuation Scenario Engine"
                        shortDesc="Model R&D impact on exit valuation."
                        href="/tools/ev-se"
                    />
                    <ToolCard
                        name="AUEB"
                        fullName="AI Unit Economics"
                        shortDesc="Calculate true cost of AI features."
                        href="/tools/aueb"
                        highlight
                    />
                    <ToolCard
                        name="APER"
                        fullName="Engineering Ratio"
                        shortDesc="Measure Maintenance vs Innovation spend."
                        href="/tools/aper"
                    />
                    <ToolCard
                        name="Audit Interview"
                        fullName="Hiring Protocol"
                        shortDesc="Test candidates for economic thinking."
                        href="/tools/audit-interview"
                    />

                    {/* Link to all tools */}
                    <Link href="/tools" className="group flex flex-col items-center justify-center p-8 rounded-2xl border border-dashed border-white/20 hover:border-white/40 hover:bg-white/5 transition-all">
                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/20">
                            <ArrowRight className="text-white" />
                        </div>
                        <span className="font-semibold text-white">View All Tools</span>
                    </Link>
                </div>

            </div>
        </section>
    );
};

const ToolCard = ({ name, fullName, shortDesc, href, highlight = false }: { name: string, fullName: string, shortDesc: string, href: string, highlight?: boolean }) => {
    return (
        <Link
            href={href}
            className={`flex flex-col p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1
                ${highlight
                    ? 'bg-gradient-to-br from-[var(--bg-secondary)] to-purple-900/20 border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]'
                    : 'bg-[var(--glass-bg)] border-white/10 hover:border-white/30 hover:bg-white/5'
                }
            `}
        >
            <div className="flex justify-between items-start mb-4">
                <span className={`text-xs font-bold px-2 py-1 rounded bg-white/10 ${highlight ? 'text-purple-300' : 'text-gray-400'}`}>
                    {name}
                </span>
                {highlight && <span className="text-xs font-bold text-purple-400">POPULAR</span>}
            </div>

            <h3 className="text-xl font-bold text-white mb-2">{fullName}</h3>
            <p className="text-sm text-gray-400 mb-6 flex-grow">{shortDesc}</p>

            <div className="flex items-center text-sm font-semibold text-[var(--accent-cyan)] group-hover:text-white transition-colors">
                Try Free <ArrowRight className="w-4 h-4 ml-2" />
            </div>
        </Link>
    );
}

export default ToolsPreview;
