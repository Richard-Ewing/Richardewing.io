"use client";

import { useScrollAnimation } from '@/app/hooks/useScrollAnimation';

const FourHorsemen = () => {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section ref={ref} className={`py-24 px-6 bg-[var(--bg-secondary)] relative border-y border-white/5 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="max-w-6xl mx-auto">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">The Four Horsemen of Technical Insolvency</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        These are the silent killers of R&D efficiency that most metrics fail to capture.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <HorsemanCard
                        number="1"
                        title="Zombie Infrastructure"
                        description="Legacy systems consuming 80%+ of engineering capacity silently. Teams are 'busy' but shipping nothing of value."
                        color="border-red-500/30"
                    />
                    <HorsemanCard
                        number="2"
                        title="Feature Bloat"
                        description="Features nobody uses but everyone maintains. The complexity tax that compounds with every sprint."
                        color="border-orange-500/30"
                    />
                    <HorsemanCard
                        number="3"
                        title="AI Hallucination Debt"
                        description="AI costs scaling faster than value created. Prototypes that work in demos but fail in production economics."
                        color="border-purple-500/30"
                    />
                    <HorsemanCard
                        number="4"
                        title="Capital Misallocation"
                        description="60% of R&D budget going to maintenance, mistakenly reported as 'innovation' to the board."
                        color="border-blue-500/30"
                    />
                </div>

            </div>
        </section>
    );
};

const HorsemanCard = ({ number, title, description, color }: { number: string, title: string, description: string, color: string }) => {
    return (
        <div className={`p-8 rounded-2xl bg-[var(--bg-primary)] border ${color} hover:border-opacity-100 transition-colors group relative overflow-hidden`}>
            <div className="absolute top-0 right-0 p-4 opacity-10 font-bold text-6xl select-none group-hover:opacity-20 transition-opacity">
                {number}
            </div>
            <h3 className="text-xl font-bold text-white mb-3 relative z-10">{title}</h3>
            <p className="text-gray-400 leading-relaxed relative z-10">{description}</p>
        </div>
    );
}

export default FourHorsemen;
