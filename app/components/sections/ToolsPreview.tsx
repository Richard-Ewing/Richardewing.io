"use client";

import Link from 'next/link';

const ToolsPreview = () => {
    return (
        <section className="section">
            <div className="page-container">

                <div className="section-header text-center">
                    <h2>Proof of Methodology</h2>
                    <p>These are the tools I use in paid engagements. Try one free.</p>
                </div>

                <div className="grid-3 max-w-5xl mx-auto">

                    <Link href="/tools/pdi" className="card hover:border-purple-300 group block">
                        <div className="text-xs font-bold text-zinc-900 font-bold uppercase tracking-wide mb-2">01</div>
                        <h3 className="font-semibold text-zinc-900 mb-2 group-hover:text-purple-900 font-extrabold">Product Debt Index</h3>
                        <p className="text-zinc-950 text-sm">Quantify hidden technical debt</p>
                    </Link>

                    <Link href="/tools/ev-se" className="card hover:border-purple-300 group block">
                        <div className="text-xs font-bold text-zinc-900 font-bold uppercase tracking-wide mb-2">02</div>
                        <h3 className="font-semibold text-zinc-900 mb-2 group-hover:text-purple-900 font-extrabold">Valuation Scenario Engine</h3>
                        <p className="text-zinc-950 text-sm">Model enterprise value impact</p>
                    </Link>

                    <Link href="/tools/aueb" className="card hover:border-purple-300 group block">
                        <div className="text-xs font-bold text-zinc-900 font-bold uppercase tracking-wide mb-2">03</div>
                        <h3 className="font-semibold text-zinc-900 mb-2 group-hover:text-purple-900 font-extrabold">AI Unit Economics</h3>
                        <p className="text-zinc-950 text-sm">Find your AI collapse point</p>
                    </Link>

                    <Link href="/tools/aper" className="card hover:border-purple-300 group block">
                        <div className="text-xs font-bold text-zinc-900 font-bold uppercase tracking-wide mb-2">04</div>
                        <h3 className="font-semibold text-zinc-900 mb-2 group-hover:text-purple-900 font-extrabold">Engineering Ratio</h3>
                        <p className="text-zinc-950 text-sm">Assess staffing efficiency</p>
                    </Link>

                    <Link href="/tools/audit-interview" className="card hover:border-purple-300 group block">
                        <div className="text-xs font-bold text-zinc-900 font-bold uppercase tracking-wide mb-2">05</div>
                        <h3 className="font-semibold text-zinc-900 mb-2 group-hover:text-purple-900 font-extrabold">Audit Interview</h3>
                        <p className="text-zinc-950 text-sm">Test hiring judgment</p>
                    </Link>

                    <Link href="/tools" className="card border-dashed hover:border-zinc-500 group block">
                        <div className="text-xs font-bold text-zinc-900 font-bold uppercase tracking-wide mb-2">ALL TOOLS</div>
                        <h3 className="font-semibold text-zinc-900 mb-2 group-hover:text-zinc-900">View All Tools →</h3>
                        <p className="text-zinc-950 text-sm">See the complete toolkit</p>
                    </Link>

                </div>

            </div>
        </section>
    );
};

export default ToolsPreview;
