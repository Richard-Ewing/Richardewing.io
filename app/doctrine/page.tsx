import type { Metadata } from "next";
import Link from "next/link";
import { APICostCalculator } from "@/components/APICostCalculator";

export const metadata: Metadata = {
    title: "The Doctrine | Richard Ewing",
};

export default function Doctrine() {
    return (
        <div className="max-w-[1600px] mx-auto w-full">
            <span className="font-mono text-zinc-500 text-xs uppercase tracking-widest mb-4 block">The Vault</span>
            <h1 className="text-5xl font-bold text-white mb-16">Standard Operating <br />Procedures.</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                <div className="border border-zinc-800 bg-surface/50 p-8 hover:border-cobalt transition duration-300 group">
                    <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest mb-8 block">CP-001</span>
                    <h3 className="text-xl text-white font-bold mb-3 group-hover:text-cobalt transition">The Innovation Tax</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">Why your "Digital Transformation" is actually a tax on your gross margin. Calculating the carrying cost of legacy features.</p>
                </div>

                <div className="border border-zinc-800 bg-surface/50 p-8 hover:border-cobalt transition duration-300 group">
                    <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest mb-8 block">CP-002</span>
                    <h3 className="text-xl text-white font-bold mb-3 group-hover:text-cobalt transition">AI Margin Autopsy</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">Diagnosing the hidden cloud costs that are eating your AI product's profitability (Tokens vs. Revenue).</p>
                </div>

                <div className="border border-cyan/30 bg-cyan/5 p-8 relative overflow-hidden group hover:bg-cyan/10 transition duration-300">
                    <span className="font-mono text-[10px] text-cyan uppercase tracking-widest mb-8 block">PROTOCOL</span>
                    <h3 className="text-xl text-white font-bold mb-3">APER&trade; Diagnostic</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">The proprietary framework for auditing Product Engineering efficiency. Revenue Per Employee calculation.</p>
                    <div className="absolute bottom-0 right-0 w-12 h-12 bg-cyan/20 blur-xl"></div>
                </div>

                <div className="border border-zinc-800 bg-surface/50 p-8 hover:border-cobalt transition duration-300 group">
                    <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest mb-8 block">CP-004</span>
                    <h3 className="text-xl text-white font-bold mb-3 group-hover:text-cobalt transition">Governance of Subtraction</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">How to reward teams for deleting code. A framework for removing technical debt as a KPI.</p>
                </div>

                <div className="border border-zinc-800 bg-surface/50 p-8 hover:border-cobalt transition duration-300 group">
                    <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest mb-8 block">CP-005</span>
                    <h3 className="text-xl text-white font-bold mb-3 group-hover:text-cobalt transition">Kill Switch Governance</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">Automated triggers for deprecating underperforming features based on Unit Economics.</p>
                </div>

            </div>

            <APICostCalculator />

            <div className="mt-20 mb-8 border-t border-zinc-800 pt-8">
                <span className="font-mono text-zinc-500 text-xs uppercase tracking-widest block">External Intelligence</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <a href="https://medium.com/@richardewing1" target="_blank" className="block border border-zinc-800 bg-black p-6 hover:border-white transition duration-300">
                    <span className="text-xs text-zinc-500 font-mono block mb-2">PUBLICATION</span>
                    <h3 className="text-white font-bold mb-1">Medium &nearr;</h3>
                    <p className="text-[10px] text-zinc-400 uppercase tracking-widest">Essays & Philosophy</p>
                </a>
                <a href="https://hackernoon.com/u/richardewing1" target="_blank" className="block border border-zinc-800 bg-black p-6 hover:border-green-500 transition duration-300">
                    <span className="text-xs text-zinc-500 font-mono block mb-2">SYNDICATION</span>
                    <h3 className="text-white font-bold mb-1">HackerNoon &nearr;</h3>
                    <p className="text-[10px] text-zinc-400 uppercase tracking-widest">Tech Culture</p>
                </a>
                <a href="https://builtin.com/authors/richard-ewing" target="_blank" className="block border border-zinc-800 bg-black p-6 hover:border-blue-400 transition duration-300">
                    <span className="text-xs text-zinc-500 font-mono block mb-2">PROFILE</span>
                    <h3 className="text-white font-bold mb-1">BuiltIn &nearr;</h3>
                    <p className="text-[10px] text-zinc-400 uppercase tracking-widest">Expert Contributor</p>
                </a>
                <div className="block border border-zinc-800 bg-black p-6">
                    <span className="text-xs text-cyan font-mono block mb-2">NETWORK</span>
                    <h3 className="text-white font-bold mb-1">The Foundry</h3>
                    <p className="text-[10px] text-zinc-400 uppercase tracking-widest">Expert Network</p>
                </div>
            </div>

            <div className="mt-20 pt-10 border-t border-white/5">
                <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-8"> institutional validation </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <a href="https://builtin.com/editors-picks?i=08d8cc66-3dd4-4057-8e19-d79a11e32f55&utm_campaign=content_newsletter&utm_medium=email&utm_source=ses" target="_blank" className="block p-6 border border-white/10 bg-zinc-900/30 rounded-xl relative overflow-hidden hover:border-blue-400 transition duration-300 group">
                        <div className="absolute top-0 right-0 bg-blue-500/10 px-3 py-1 rounded-bl-xl text-[10px] font-mono text-blue-400 uppercase tracking-tighter">BuiltIn</div>
                        <div className="text-[10px] font-mono text-zinc-400 uppercase mb-2">Dec 2025 / Jan 2026</div>
                        <div className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-blue-400 transition">Expert Contributor & Editor's Pick</div>
                        <p className="text-xs text-zinc-400 leading-relaxed">January article selected by Built In editors and featured in the Editors Prizes newsletter.</p>
                    </a>
                    <div className="p-6 border border-white/10 bg-zinc-900/30 rounded-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-cyan/10 px-3 py-1 rounded-bl-xl text-[10px] font-mono text-cyan uppercase tracking-tighter">The Foundry</div>
                        <div className="text-[10px] font-mono text-zinc-400 uppercase mb-2">Dec 2025</div>
                        <div className="text-lg font-bold text-white mb-2 leading-tight">Expert Contributor</div>
                        <p className="text-xs text-zinc-400 leading-relaxed">Certified as a verified Expert Contributor for The Foundry, an elite network of industry operators.</p>
                    </div>
                    <div className="p-6 border border-white/10 bg-zinc-900/30 rounded-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-emerald-500/10 px-3 py-1 rounded-bl-xl text-[10px] font-mono text-emerald-400 uppercase tracking-tighter">Governor's Award</div>
                        <div className="text-[10px] font-mono text-zinc-400 uppercase mb-2">Washington State</div>
                        <div className="text-lg font-bold text-white mb-2 leading-tight">The Last Mile Award</div>
                        <p className="text-xs text-zinc-400 leading-relaxed">Selected from ~65,000 state employees by Gov. Jay Inslee for excellence in operational transformation.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
