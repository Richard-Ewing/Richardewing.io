import type { Metadata } from "next";
import { BriefSubscriptionForm } from "@/components/BriefSubscriptionForm";

export const metadata: Metadata = {
    title: "The Product Economist | New Book by Richard Ewing",
};

export default function Book() {
    return (
        <>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cobalt/10 rounded-full blur-[128px] pointer-events-none" />

            <div className="capsule-container rounded-[2rem] p-12 lg:p-20 max-w-5xl w-full text-center relative z-10 animate-fade-in-up border-white/10 shadow-2xl mx-auto">
                <span className="font-mono text-titanium text-xs uppercase tracking-[0.3em] mb-8 block">O'Reilly Media Proposal</span>

                <div className="inline-block border-2 border-white/20 p-2 mb-12 rounded bg-black shadow-2xl rotate-1 hover:rotate-0 transition duration-700">
                    <div className="bg-zinc-900 w-[200px] h-[300px] flex items-center justify-center text-center p-8 border border-white/5">
                        <span className="font-serif text-white text-2xl italic leading-tight">The<br />Product<br />Economist</span>
                    </div>
                </div>

                <h1 className="text-5xl lg:text-7xl font-bold text-white mb-4 tracking-tight leading-none">The Product<br />Economist</h1>
                <h2 className="text-xl lg:text-2xl text-zinc-300 font-light mb-8 max-w-3xl mx-auto">Financial Fluency, AI Unit Economics, and Capital Allocation for Aspiring Executives</h2>

                <div className="max-w-4xl mx-auto text-left space-y-12">
                    {/* Narrative Flow */}
                    <div className="space-y-8 bg-white/5 rounded-2xl p-8 lg:p-12 border border-white/10">
                        <p className="text-zinc-300 text-lg leading-relaxed">
                            <strong className="text-white">The Era of the "Happy Builder" is Over.</strong> In every tech
                            company, there is a "Senior Ceiling." High-performing leaders in Engineering, Product, and
                            Design hit a wall. You are elite at your craft, but to the C-Suite, you are still just a
                            "cost center."
                        </p>
                        <p className="text-zinc-300 text-lg leading-relaxed">
                            The language of the Executive Team is not Python, Jira, or Figma. <strong className="text-white">It is Finance.</strong>
                        </p>
                        <p className="text-zinc-300 text-lg leading-relaxed">
                            This is the manual for crossing the chasm from "Operator" to "Executive." Most leadership
                            books offer soft skills—empathy, influence, and culture. <strong className="text-white">The Product Economist</strong> offers hard financial science for non-finance leaders. It is the "Rosetta Stone" of business, teaching you how to translate technical decisions into financial outcomes and audit your roadmap for EBITDA impact.
                        </p>
                        <p className="text-zinc-300 leading-relaxed pt-8 border-t border-white/5">
                            Written for Senior Product Managers, Directors, and CTOs who are tired of "Agile Theater" and ready to own the P&L. If you are ambitious enough to want a Board seat but frustrated that your operational wins aren't translating into executive respect, this is your playbook.
                        </p>
                    </div>

                    {/* What You Will Learn */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                        <div>
                            <h4 className="text-white font-bold mb-2">The AI Tax & Unit Economics</h4>
                            <p className="text-zinc-400 text-sm">How to model the "Negative Margin Trap" of Generative AI before you write a single line of code. Stop building features where the cost of service exceeds the price.</p>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-2">Capital Allocation (CapEx vs. OpEx)</h4>
                            <p className="text-zinc-400 text-sm">Learn to treat Engineering Bandwidth as capital. Master the "Ruthless Prioritization Math" required to kill zombie features that do not have a calculated Return on Capital (ROC).</p>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-2">Financial Fluency</h4>
                            <p className="text-zinc-400 text-sm">Decrypt the "CFO Slap in the Face." Understand Gross Margin, COGS, and NRR to defend your headcount and budget in the boardroom.</p>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-2">The Governance Engine</h4>
                            <p className="text-zinc-400 text-sm">How to replace 15 weekly status meetings with a single "Canonical Document" that serves as the source of financial truth.</p>
                        </div>
                    </div>

                    <div className="max-w-md mx-auto">
                        <div className="capsule-container rounded-2xl p-2 bg-black/50 border-cobalt/30 p-2 pl-6">
                            <BriefSubscriptionForm
                                buttonText="Join Waitlist"
                                loadingText="PROCESSING..."
                                successText="JOINED"
                                successMessage="// YOU ARE ON THE LIST. REDIRECTING..."
                                title=""
                                description=""
                                showSocialProof={false}
                                className="w-full"
                            />
                            <div className="text-zinc-600 text-[10px] mt-4 uppercase tracking-widest text-center mb-4">Early Access Winter 2026</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
