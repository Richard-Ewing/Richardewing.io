import type { Metadata } from "next";
import Link from "next/link";
import { AUEBEngine } from "@/components/AUEBEngine";
import { BriefSubscriptionForm } from "@/components/BriefSubscriptionForm";

export const metadata: Metadata = {
    title: "Board Briefs | Richard Ewing",
};

export default function Briefs() {
    return (
        <>
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[128px] pointer-events-none" />

            <div className="mb-8 animate-fade-in-up">
                <span className="font-mono text-titanium text-xs uppercase tracking-[0.3em] mb-4 block">Intelligence Feed</span>
                <h1 className="text-5xl lg:text-7xl font-bold text-white tracking-tight leading-none">The Board<br />Brief</h1>
                <p className="text-zinc-400 mt-6 max-w-xl text-lg">Weekly dispatch on the "Math of Product." Bridging the gap between Engineering Reality and Financial Viability.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <BriefSubscriptionForm />

                <div className="space-y-4">
                    <h3 className="text-white font-bold text-xl mb-6 pl-4 border-l-4 border-zinc-800">Archive Access</h3>

                    <Link href="/briefs/cost-of-maybe.html" className="capsule-container p-6 rounded-2xl flex items-center justify-between group hover:bg-white/5 transition block border border-white/5 bg-black/40">
                        <div>
                            <div className="font-mono text-xs text-cobalt mb-1 group-hover:text-white transition">VOL. 014</div>
                            <h4 className="text-xl font-bold text-zinc-300 group-hover:text-white transition">The Cost of "Maybe"</h4>
                        </div>
                        <span className="text-zinc-600 group-hover:text-white transition">&rarr;</span>
                    </Link>

                    <Link href="/briefs/variance-analysis.html" className="capsule-container p-6 rounded-2xl flex items-center justify-between group hover:bg-white/5 transition block border border-white/5 bg-black/40">
                        <div>
                            <div className="font-mono text-xs text-cobalt mb-1 group-hover:text-white transition">VOL. 013</div>
                            <h4 className="text-xl font-bold text-zinc-300 group-hover:text-white transition">Variance Analysis for PMs</h4>
                        </div>
                        <span className="text-zinc-600 group-hover:text-white transition">&rarr;</span>
                    </Link>

                    <Link href="/briefs/zombie-feature-audit.html" className="capsule-container p-6 rounded-2xl flex items-center justify-between group hover:bg-white/5 transition block border border-white/5 bg-black/40">
                        <div>
                            <div className="font-mono text-xs text-cobalt mb-1 group-hover:text-white transition">VOL. 012</div>
                            <h4 className="text-xl font-bold text-zinc-300 group-hover:text-white transition">The "Zombie Feature" Audit</h4>
                        </div>
                        <span className="text-zinc-600 group-hover:text-white transition">&rarr;</span>
                    </Link>
                </div>
            </div>

            <AUEBEngine />
        </>
    );
}
