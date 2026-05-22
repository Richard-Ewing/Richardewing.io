import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ExecutiveSummaryBoxProps {
    whatBreaks: string;
    whatItCosts: string;
    whatCausesIt: string;
    whatFixesIt: { label: string; href: string };
    ctaLabel?: string;
    ctaHref?: string;
}

const ExecutiveSummaryBox = ({
    whatBreaks,
    whatItCosts,
    whatCausesIt,
    whatFixesIt,
    ctaLabel = "Run a Free Diagnosis",
    ctaHref = "/tools/pdi",
}: ExecutiveSummaryBoxProps) => {
    return (
        <div className="max-w-3xl mx-auto mb-12 rounded-2xl border-2 border-rose-200 bg-gradient-to-br from-rose-50/80 to-violet-50/40 p-8 relative overflow-hidden">
            {/* Top accent bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-400 via-violet-400 to-purple-500"></div>

            <div className="flex items-center gap-2 mb-5">
                <span className="text-lg">⚡</span>
                <span className="text-xs font-bold text-rose-600 uppercase tracking-[0.2em] font-mono">The Bottom Line</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                    <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1 font-mono">What Breaks</div>
                    <p className="text-zinc-900 font-semibold text-sm">{whatBreaks}</p>
                </div>
                <div>
                    <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1 font-mono">What It Costs</div>
                    <p className="text-zinc-900 font-semibold text-sm">{whatItCosts}</p>
                </div>
                <div>
                    <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1 font-mono">Root Cause</div>
                    <p className="text-zinc-900 font-semibold text-sm">{whatCausesIt}</p>
                </div>
                <div>
                    <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1 font-mono">The Fix</div>
                    <Link href={whatFixesIt.href} className="text-violet-700 font-bold text-sm hover:text-violet-500 transition-colors underline decoration-dotted underline-offset-2">
                        {whatFixesIt.label} →
                    </Link>
                </div>
            </div>

            <Link href={ctaHref} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-rose-500 to-violet-500 text-white font-bold text-sm hover:opacity-90 transition-opacity shadow-md shadow-rose-500/20">
                {ctaLabel} <ArrowRight className="w-4 h-4" />
            </Link>
        </div>
    );
};

export default ExecutiveSummaryBox;
