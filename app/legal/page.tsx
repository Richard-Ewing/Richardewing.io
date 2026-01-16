import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Legal & Disclaimers | Richard Ewing",
};

export default function Legal() {
    return (
        <>
            <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-zinc-800/20 rounded-full blur-[128px] pointer-events-none" />

            <div className="mb-16 animate-fade-in-up">
                <span className="font-mono text-titanium text-xs uppercase tracking-[0.3em] mb-4 block">Institutional Governance</span>
                <h1 className="text-5xl lg:text-7xl font-bold text-white tracking-tight leading-none">Terms, Privacy <br />& Disclaimers</h1>
            </div>

            <div className="mb-12 p-8 border border-white/5 bg-zinc-900/50 rounded-2xl">
                <div className="text-xs font-mono text-cyan uppercase mb-4">04. Automated Diagnostic Disclaimer</div>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                    <strong>Not a Financial Audit:</strong> The automated tools on this site (Product Debt Index™,
                    Enterprise Value Scenario Engine™, and AI Unit Economics Benchmark™) are heuristic simulations for
                    educational and strategic planning purposes only.
                </p>
                <p className="text-sm text-zinc-400 leading-relaxed">
                    <strong>No Guarantee of Results:</strong> "Verdicts" such as "Insolvent" or "Capital Destructive"
                    are based on user-inputted assumptions and generalized industry benchmarks. They do not constitute a
                    forensic accounting audit or legal insolvency opinion. Richard Ewing / The Product Economist accepts
                    no liability for business decisions made based on these automated outputs.
                </p>
            </div>

            <div className="space-y-6 animate-fade-in-up delay-100 max-w-4xl">

                {/* Section 01 */}
                <div className="capsule-container rounded-[2rem] p-10 group hover:bg-white/5 transition duration-500">
                    <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-3">
                        <span className="font-mono text-cobalt bg-cobalt/10 px-2 py-1 rounded text-xs">01</span> Not Financial Advice
                    </h3>
                    <div className="text-zinc-400 leading-relaxed space-y-4">
                        <p><strong className="text-white">"The Product Economist"</strong> is a conceptual framework for software management, not a financial institution.</p>
                        <p>All content provided on this site, including "Board Briefs," "Audits," and "Capital Allocation Strategies," is for educational and informational purposes only regarding operational efficiency and product management. Richard Ewing is not a registered investment advisor, broker/dealer, or financial analyst.</p>
                        <p>No material here constitutes a recommendation to buy or sell securities. When we discuss "Capital," we refer to <strong className="text-white">engineering bandwidth and operational expenses</strong>, not financial instruments.</p>
                    </div>
                </div>

                {/* Section 02 */}
                <div className="capsule-container rounded-[2rem] p-10 group hover:bg-white/5 transition duration-500">
                    <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-3">
                        <span className="font-mono text-cobalt bg-cobalt/10 px-2 py-1 rounded text-xs">02</span> Services & Engagement
                    </h3>
                    <div className="text-zinc-400 leading-relaxed space-y-4">
                        <p><strong className="text-white">Advisory Roles:</strong> Engagement in fractional or advisory capacities is subject to a separate Master Services Agreement (MSA) or Engagement Letter. The availability of services on this site does not constitute an offer to contract.</p>
                        <p><strong className="text-white">The "Audit":</strong> Our Unit Economics Audit is a diagnostic tool based on provided data. We do not audit your financial statements for GAAP compliance. We analyze the correlation between feature usage and operational cost.</p>
                    </div>
                </div>

                {/* Section 03 */}
                <div className="capsule-container rounded-[2rem] p-10 group hover:bg-white/5 transition duration-500">
                    <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-3">
                        <span className="font-mono text-cobalt bg-cobalt/10 px-2 py-1 rounded text-xs">03</span> Privacy & Data
                    </h3>
                    <div className="text-zinc-400 leading-relaxed space-y-4">
                        <p><strong className="text-white">Zero-Sale Policy:</strong> We do not sell, rent, or trade your email address to third parties. If you subscribe to the Board Brief, you are subscribing only to communications from Richard Ewing.</p>
                        <p><strong className="text-white">Analytics:</strong> This site uses basic surveillance (cookies) to track broad usage patterns (e.g., PDF downloads, page views) to improve the "Product Economist" system. By navigating this site, you consent to this monitoring.</p>
                    </div>
                </div>

                {/* Section 04 */}
                <div className="capsule-container rounded-[2rem] p-10 group hover:bg-white/5 transition duration-500">
                    <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-3">
                        <span className="font-mono text-cobalt bg-cobalt/10 px-2 py-1 rounded text-xs">04</span> Intellectual Property
                    </h3>
                    <div className="text-zinc-400 leading-relaxed space-y-4">
                        <p><strong className="text-white">Copyright &copy; 2026 Richard Ewing.</strong></p>
                        <p>The concepts "Product Economist," "Q-PEP Protocol," and "Unit Economics Audit" are proprietary frameworks. You may share excerpts of the "Board Brief" or "Doctrine" provided you attribute ownership to Richard Ewing and link back to <strong className="text-white">richardewing.io</strong>.</p>
                    </div>
                </div>

            </div>
        </>
    );
}
