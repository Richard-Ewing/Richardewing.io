import Link from 'next/link';
import { getAllSpokeRoutes } from '@/lib/spoke-data';
import { HelpCircle, ChevronRight } from 'lucide-react';

interface Props {
    title?: string;
    maxCount?: number;
    // Optional deterministic seed to prevent hydration mismatch on randomized renders.
    // If you pass the current page slug, it acts as a stable hash seed.
    seed?: string;
}

export default function ProgrammaticAnswersRelated({ title = "Explore Related Economic Architecture", maxCount = 2, seed }: Props) {
    const allRoutes = getAllSpokeRoutes();
    
    // Deterministic shuffle based on seed, or fallback to length-based stable sort for SSR safety
    // This ensures SSR and Client render exactly the same items to prevent React hydration errors
    let shuffled = [...allRoutes];
    if (seed) {
        let hash = 0;
        for (let i = 0; i < seed.length; i++) {
            hash = seed.charCodeAt(i) + ((hash << 5) - hash);
        }
        shuffled = shuffled.sort((a, b) => {
            const aVal = (hash ^ a.topic.length ^ a.questionSlug.charCodeAt(0)) % 100;
            const bVal = (hash ^ b.topic.length ^ b.questionSlug.charCodeAt(0)) % 100;
            return aVal - bVal;
        });
    } else {
        // Fallback static "shuffle" by string lengths so it never changes randomly per-render
        shuffled = shuffled.sort((a, b) => (a.questionHeadline.length % 5) - (b.questionHeadline.length % 5));
    }

    const selected = shuffled.slice(0, maxCount);

    if (selected.length === 0) return null;

    return (
        <section className="mt-16 w-full border-t border-zinc-200/50 pt-16">
            <div className="flex items-center gap-2 mb-8">
                <HelpCircle className="w-5 h-5 text-indigo-500" />
                <h3 className="text-xl font-bold font-grotesk text-zinc-900 tracking-tight">{title}</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
                {selected.map((route, i) => (
                    <Link
                        key={i}
                        href={`/answers/${route.topic}/${route.persona}/${route.questionSlug}`}
                        className="group flex flex-col justify-between p-6 bg-white border border-zinc-200 shadow-sm rounded-2xl hover:border-indigo-500/30 hover:shadow-[0_4px_20px_-4px_rgba(99,102,241,0.1)] transition-all duration-300"
                    >
                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <span className="px-2 py-0.5 rounded text-[10px] font-bold font-mono uppercase tracking-widest bg-zinc-100 text-zinc-600 border border-zinc-200">
                                    {route.topicName}
                                </span>
                            </div>
                            <h4 className="text-lg font-bold text-zinc-900 group-hover:text-indigo-600 transition-colors line-clamp-3">
                                {route.questionHeadline}
                            </h4>
                        </div>
                        
                        <div className="mt-6 flex items-center text-xs font-bold font-mono tracking-widest text-indigo-600 uppercase">
                            Read Answer <ChevronRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
