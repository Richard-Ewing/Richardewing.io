"use client";

import { useScrollAnimation } from '@/app/hooks/useScrollAnimation';

const ClientOutcomes = () => {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section ref={ref} className={`py-24 px-6 border-b border-white/5 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="max-w-6xl mx-auto">
                <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-12 text-center">Recent Audit Findings</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <OutcomeCard
                        client="SERIES C PLATFORM"
                        date="Q4 2025"
                        metric="$1.2M"
                        metricDesc="Maintenance costs reported as 'innovation'"
                        finding="73% of 'new features' were actually debt payments."
                    />
                    <OutcomeCard
                        client="B2B SAAS"
                        date="Q3 2025"
                        metric="34%"
                        metricDesc="AI cost reduction achieved"
                        finding="Output maintained, CFO now requires framework for all AI initiatives."
                    />
                </div>
            </div>
        </section>
    );
};

const OutcomeCard = ({ client, date, metric, metricDesc, finding }: { client: string, date: string, metric: string, metricDesc: string, finding: string }) => {
    return (
        <div className="p-8 rounded-2xl bg-[var(--bg-secondary)] border border-white/5 hover:border-white/10 transition-colors">
            <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                <span className="font-mono text-sm text-[var(--accent-cyan)]">{client}</span>
                <span className="font-mono text-sm text-gray-500">{date}</span>
            </div>

            <div className="mb-6">
                <div className="text-4xl font-bold text-white mb-2">{metric}</div>
                <div className="text-gray-400">{metricDesc}</div>
            </div>

            <p className="text-lg text-gray-300 italic border-l-2 border-[var(--accent-purple)] pl-4">
                "{finding}"
            </p>
        </div>
    );
}

export default ClientOutcomes;
