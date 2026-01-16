import type { Metadata } from "next";
import { EVSECalculator } from "@/components/EVSECalculator";
import { BentoGrid, BentoGridItem } from "@/components/magicui/bento-grid";
import Link from "next/link"; // For footer links if needed

export const metadata: Metadata = {
    title: "Advisory | Richard Ewing",
};

export default function Advisory() {
    return (
        <>
            <div className="mb-8 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <span className="text-zinc-400">Intervention</span>
                <span>/</span>
                <span className="text-white font-bold">Advisory</span>
            </div>

            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[128px] pointer-events-none" />

            <div className="mb-16 animate-fade-in-up">
                <span className="font-mono text-titanium text-xs uppercase tracking-[0.3em] mb-4 block">Access Levels</span>
                <h1 className="text-5xl lg:text-7xl font-bold text-white tracking-tight leading-none">
                    Intervention<br />Protocols
                </h1>
            </div>

            <BentoGrid className="max-w-none grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up delay-100 mb-20">
                {/* Level 1 */}
                <BentoGridItem
                    title="Diagnostic Sprint"
                    description="A 14-day forensic audit of your Product Organization. Delivering the 'brutal truth' about your burn rate and unit economics."
                    header={
                        <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-4 border-b border-zinc-800 pb-2">Level 01 &bull; Audit</div>
                    }
                    className="min-h-[320px] bg-surface/50 border-white/5"
                    icon={<div className="text-white font-bold text-lg block mt-4">$25k <span className="text-zinc-600 text-xs uppercase tracking-widest font-normal">Fixed Price</span></div>}
                />

                {/* Level 2 */}
                <BentoGridItem
                    title='The "Fractional" CPO'
                    description="For Series B/C companies needing turnaround leadership. I step in as interim CPO to restructure the team and reset the roadmap."
                    header={
                        <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-4 border-b border-zinc-800 pb-2">Level 02 &bull; Retainer</div>
                    }
                    className="min-h-[320px] bg-surface/50 border-white/5"
                    icon={<div className="text-white font-bold text-lg block mt-4">$18k <span className="text-zinc-600 text-xs uppercase tracking-widest font-normal">Per Month</span></div>}
                />

                {/* Level 3 */}
                <BentoGridItem
                    title="Board Observer"
                    description="I sit on your board as the 'Product Economist,' providing strategic oversight on engineering capital allocation."
                    header={
                        <div className="font-mono text-[10px] text-cyan uppercase tracking-widest mb-4 border-b border-zinc-800 pb-2">Level 03 &bull; Governance</div>
                    }
                    className="min-h-[320px] border-white/20 bg-surface/50"
                    icon={<div className="text-white font-bold text-lg block mt-4">Equity <span className="text-zinc-600 text-xs uppercase tracking-widest font-normal">Vesting Schedule</span></div>}
                />

                {/* Level 4 */}
                <BentoGridItem
                    title="Private Workshops"
                    description="Two-day intensive workshop for your exec team. 'How to stop burning cash and start building equity.'"
                    header={
                        <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-4 border-b border-zinc-800 pb-2">Level 04 &bull; Syllabus</div>
                    }
                    className="min-h-[320px] bg-surface/50 border-white/5"
                    icon={<div className="text-white font-bold text-lg block mt-4">$15k <span className="text-zinc-600 text-xs uppercase tracking-widest font-normal">Per Session</span></div>}
                />
            </BentoGrid>

            <EVSECalculator />

            <div className="mt-24 border-t border-white/5 pt-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    <div>
                        <span className="font-mono text-cobalt text-xs uppercase tracking-widest mb-2 block">Direct Line</span>
                        <h2 className="text-3xl font-bold text-white">Initiate Protocol</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-mono text-zinc-400">
                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-zinc-700 rounded-full"></span>
                            <a href="mailto:richardewing1@gmail.com" className="hover:text-white transition">richardewing1@gmail.com</a>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-zinc-700 rounded-full"></span>
                            <span>(360) 480-6052</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-zinc-700 rounded-full"></span>
                            <a href="https://www.linkedin.com/in/richard-ewing-mba" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">LinkedIn Profile</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
