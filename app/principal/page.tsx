import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Me | Richard Ewing",
};

export default function Principal() {
    return (
        <>
            <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-cobalt/5 rounded-full blur-[128px] pointer-events-none" />

            <div className="capsule-container rounded-[2rem] p-12 w-full mb-8 animate-fade-in-up flex flex-col lg:flex-row gap-12 items-center">
                <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-tr from-cobalt to-cyan blur-2xl opacity-20 rounded-full" />
                    <img src="/assets/images/headshot.jpg" className="relative w-48 h-48 rounded-full border-4 border-obsidian shadow-2xl grayscale hover:grayscale-0 transition duration-700 object-cover" alt="Richard Ewing" />
                </div>
                <div>
                    <span className="font-mono text-cobalt text-xs uppercase tracking-widest mb-4 block">The Principal</span>
                    <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">The Office of the <br /><span className="text-white">Product Economist.</span></h1>
                    <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
                        Product Management is not an art form; it is <strong>Capital Allocation</strong>.
                        <br /><br />
                        Richard Ewing is the Principal of Product Economics Consulting. He bridges the gap between "Agile Theater" and the financial reality of the C-Suite, helping operators transition from Ticket Managers to P&L Owners.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up delay-100">
                <div className="capsule-container p-8 rounded-3xl backdrop-blur-md bg-surface/50 border border-white/5">
                    <div className="font-mono text-zinc-500 text-[10px] uppercase tracking-widest mb-2">Track Record</div>
                    <div className="text-4xl font-bold text-white mb-1">$2B+</div>
                    <div className="text-sm text-zinc-400">Market Cap Created</div>
                </div>
                <div className="capsule-container p-8 rounded-3xl backdrop-blur-md bg-surface/50 border border-white/5">
                    <div className="font-mono text-zinc-500 text-[10px] uppercase tracking-widest mb-2">Experience</div>
                    <div className="text-4xl font-bold text-white mb-1">15y</div>
                    <div className="text-sm text-zinc-400">Product & Engineering</div>
                </div>
                <div className="capsule-container p-8 rounded-3xl backdrop-blur-md bg-surface/50 border border-white/5">
                    <div className="font-mono text-zinc-500 text-[10px] uppercase tracking-widest mb-2">Specialty</div>
                    <div className="text-4xl font-bold text-white mb-1">B2B</div>
                    <div className="text-sm text-zinc-400">Enterprise SaaS</div>
                </div>
                <div className="capsule-container p-8 rounded-3xl backdrop-blur-md bg-surface/50 border border-white/5">
                    <div className="font-mono text-zinc-500 text-[10px] uppercase tracking-widest mb-2">Focus</div>
                    <div className="text-4xl font-bold text-white mb-1">ROI</div>
                    <div className="text-sm text-zinc-400">Capital Efficiency</div>
                </div>
            </div>

            <div className="mt-8 capsule-container p-12 rounded-[2rem] animate-fade-in-up delay-200">
                <h3 className="text-white font-bold mb-8 flex items-center gap-3">
                    <span className="w-1 h-6 bg-cobalt rounded-full"></span>
                    Career Arc
                </h3>
                <div className="space-y-12 border-l border-zinc-800 ml-3 pl-8 relative">

                    <div className="relative group">
                        <span className="absolute -left-[39px] top-2 w-3 h-3 bg-cobalt rounded-full ring-4 ring-obsidian group-hover:scale-125 transition duration-300"></span>
                        <h4 className="text-white font-bold text-lg">Director of Product Operations</h4>
                        <span className="font-mono text-xs text-zinc-500 mb-2 block">2025 - Present • High-Growth AI Startup</span>
                        <p className="text-zinc-400 text-sm max-w-2xl leading-relaxed">
                            Established the Product Management function from scratch. Pivoted strategy to an AI-centric platform and successfully delivered an MVP conversational agent, driving radical efficiency across Finance & Ops.
                        </p>
                    </div>

                    <div className="relative group">
                        <span className="absolute -left-[39px] top-2 w-3 h-3 bg-zinc-800 rounded-full ring-4 ring-obsidian group-hover:bg-white transition duration-300"></span>
                        <h4 className="text-zinc-300 font-bold text-lg">Group Product Manager</h4>
                        <span className="font-mono text-xs text-zinc-500 mb-2 block">2022 - 2024 • Top 10 Consulting Firm</span>
                        <p className="text-zinc-400 text-sm max-w-2xl leading-relaxed">
                            Led a strategic On-Prem to Azure migration, securing a <strong>$5M cost reduction</strong>. Operationalized a 16-person org, doubling development velocity and clearing a 200-item backlog.
                        </p>
                    </div>

                    <div className="relative group">
                        <span className="absolute -left-[39px] top-2 w-3 h-3 bg-zinc-800 rounded-full ring-4 ring-obsidian group-hover:bg-white transition duration-300"></span>
                        <h4 className="text-zinc-300 font-bold text-lg">Product Manager</h4>
                        <span className="font-mono text-xs text-zinc-500 mb-2 block">2021 - 2022 • Public Sector</span>
                        <p className="text-zinc-400 text-sm max-w-2xl leading-relaxed">
                            Managed critical services for <strong>7.7M users</strong>. Achieved 98% on-time delivery for a massive tech overhaul throughout a high-risk cloud migration.
                        </p>
                    </div>

                    <div className="relative group">
                        <span className="absolute -left-[39px] top-2 w-3 h-3 bg-zinc-800 rounded-full ring-4 ring-obsidian group-hover:bg-white transition duration-300"></span>
                        <h4 className="text-zinc-300 font-bold text-lg">Director of Operations</h4>
                        <span className="font-mono text-xs text-zinc-500 mb-2 block">2014 - 2017 • Design & Manufacturing</span>
                        <p className="text-zinc-400 text-sm max-w-2xl leading-relaxed">
                            Turnaround Executive role. Drove <strong>200% YoY growth</strong> to $20M revenue by restructuring the P&L and installing high-speed delivery protocols.
                        </p>
                    </div>

                    <div className="relative group">
                        <span className="absolute -left-[39px] top-2 w-3 h-3 bg-zinc-800 rounded-full ring-4 ring-obsidian group-hover:bg-white transition duration-300"></span>
                        <h4 className="text-zinc-300 font-bold text-lg">Principal Product Manager</h4>
                        <span className="font-mono text-xs text-zinc-500 mb-2 block">2008 - 2014 • Enterprise ERP SaaS</span>
                        <p className="text-zinc-400 text-sm max-w-2xl leading-relaxed">
                            Owned the 0-to-1 lifecycle, scaling a flagship SaaS product to <strong>$25M ARR</strong>. Slashed churn by 20% through a strategic GTM pivot.
                        </p>
                    </div>

                </div>
            </div>
        </>
    );
}
