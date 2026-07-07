import type { Metadata } from 'next';
import Link from 'next/link';
import AdvisoryCTA from '@/components/AdvisoryCTA';

export const metadata: Metadata = {
    title: 'Advisory Pricing | R&D Audits & Retainers | Richard Ewing',
    description: 'Plain-language pricing for engineering economics advisory. The $2,500 R&D capital diagnostic and the $7,500 monthly fractional CTO retainer.',
    keywords: ['advisory pricing', 'fractional CTO cost', 'technology advisory', 'Richard Ewing pricing', 'AI economist'],
    alternates: { canonical: 'https://www.richardewing.io/pricing' },
    openGraph: { title: 'Advisory Pricing | Richard Ewing', description: 'Transparent pricing for technology advisory services.', url: 'https://www.richardewing.io/pricing', type: 'website' },
};

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <div className="page-container max-w-3xl mx-auto px-6">
                
                <header className="mb-16 border-b border-zinc-400 pb-12 text-center">
                    <span className="text-cyan-900 font-extrabold font-mono text-xs uppercase tracking-widest mb-4 block">Engagement Terms</span>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-6 leading-tight">
                        Advisory Economics.
                    </h1>
                    <p className="text-xl text-zinc-900 font-semibold leading-relaxed">
                        I do not sell billable hours. I sell financial visibility into your engineering organization.
                    </p>
                </header>

                <article className="prose prose-lg prose-zinc max-w-none prose-h2:font-grotesk prose-h2:text-3xl prose-h2:font-bold prose-h3:font-grotesk prose-h3:text-xl prose-h3:font-bold prose-strong:text-zinc-950 text-zinc-800 font-semibold leading-relaxed">
                    
                    <p>
                        Consulting models built on hourly billing are structurally misaligned. They incentivize the consultant to expand scope, prolong discovery, and withhold the actual mechanism of value. I operate differently.
                    </p>
                    <p>
                        I offer two distinct engagement paths. They are priced flat, scoped strictly, and designed to generate a return on investment that board members can measure.
                    </p>

                    <div className="my-16 bg-white border border-zinc-400 p-8 sm:p-12 shadow-sm rounded-xl">
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8 border-b border-zinc-200 pb-6">
                            <h2 className="text-3xl font-grotesk font-bold text-zinc-950 m-0">The Diagnostic</h2>
                            <div className="text-3xl font-mono font-bold text-zinc-900 mt-2 sm:mt-0">$2,500 <span className="text-lg text-zinc-600 font-medium">flat</span></div>
                        </div>
                        
                        <p className="text-zinc-800 font-semibold">
                            You suspect your engineering organization is burning capital, but you lack the data to prove it. The Diagnostic is a one-time, surgical audit of your software architecture, unit economics, and team structure.
                        </p>
                        
                        <h3 className="mt-8 mb-4">What happens:</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-8">
                            <li>We run your current architecture through the <strong>Product Debt Index (PDI)</strong> and the <strong>AI Unit Economics Benchmark (AUEB)</strong>.</li>
                            <li>We isolate the specific features, models, or legacy systems that are eroding your gross margin.</li>
                            <li>We calculate your Technical Insolvency Date—the quarter where maintenance costs will outpace your ability to ship new features.</li>
                            <li>I deliver a written executive brief and lead a 60-minute presentation with your leadership team.</li>
                        </ul>

                        <div className="bg-zinc-50 border border-zinc-200 p-6 rounded-lg text-sm">
                            <strong>The Outcome:</strong> You walk away with absolute financial clarity. You will know exactly which engineering initiatives are generating value and which are quietly destroying capital.
                        </div>

                        <div className="mt-8">
                            <a href="/api/buy/insolvency_diagnostic" className="inline-block px-8 py-4 bg-zinc-950 text-white font-bold font-mono text-sm uppercase tracking-widest hover:bg-zinc-800 transition-colors">
                                Book The Diagnostic
                            </a>
                        </div>
                    </div>

                    <div className="my-16 bg-zinc-950 border border-zinc-800 p-8 sm:p-12 shadow-xl rounded-xl text-zinc-300">
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8 border-b border-zinc-800 pb-6">
                            <h2 className="text-3xl font-grotesk font-bold text-white m-0">Fractional Advisory</h2>
                            <div className="text-3xl font-mono font-bold text-zinc-100 mt-2 sm:mt-0">$7,500 <span className="text-lg text-zinc-500 font-medium">/ month</span></div>
                        </div>
                        
                        <p className="font-semibold">
                            For Series B+ organizations and Private Equity portfolios that require ongoing structural repair. I integrate directly with your executive team to operationalize the findings of the Diagnostic and prevent margin collapse at scale.
                        </p>
                        
                        <h3 className="mt-8 mb-4 text-white">What it includes:</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-8 text-zinc-400">
                            <li><strong>Architectural Veto Power:</strong> I review major technical decisions to prevent catastrophic long-term technical debt.</li>
                            <li><strong>Board Defense:</strong> I prepare the engineering reporting for your board, translating technical progress into financial outcomes.</li>
                            <li><strong>Vendor Extraction:</strong> I guide the negotiations and architectural transitions required to exit hostile cloud or AI vendor lock-in.</li>
                            <li><strong>Direct Access:</strong> Dedicated asynchronous channels and weekly syncs with your CTO and CFO.</li>
                        </ul>

                        <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-lg text-sm text-zinc-400">
                            <strong>The Constraint:</strong> I strictly cap my advisory engagements to 4 active clients per quarter. This ensures I can provide the deep, structural attention required to actually fix the architecture.
                        </div>

                        <div className="mt-8">
                            <a href="mailto:richardewing@exogram.ai?subject=Fractional%20Advisory%20Inquiry" className="inline-block px-8 py-4 bg-white text-zinc-950 font-bold font-mono text-sm uppercase tracking-widest hover:bg-zinc-200 transition-colors">
                                Inquire About Availability
                            </a>
                        </div>
                    </div>

                    <hr className="border-zinc-300 my-16" />

                    <div className="mb-16">
                        <h2 className="text-3xl font-grotesk font-bold text-zinc-950 mb-8 border-b border-zinc-200 pb-4">Software & Curriculum Access</h2>
                        <p className="text-zinc-800 font-semibold mb-8">
                            For teams that want to execute the frameworks internally. Get immediate access to the <strong>Enterprise Vault</strong> — 218 technical modules, 18 curriculum tracks, and 4 proprietary diagnostic calculators.
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* Single User */}
                            <div className="bg-white border border-zinc-300 p-8 rounded-xl shadow-sm hover:border-violet-500/50 transition-colors">
                                <h3 className="text-xl font-grotesk font-bold text-zinc-950 mb-2 mt-0">Single Practitioner</h3>
                                <div className="text-2xl font-mono font-bold text-zinc-900 mb-4">$999 <span className="text-sm text-zinc-500 font-medium">lifetime</span></div>
                                <ul className="list-disc pl-5 space-y-2 mb-8 text-zinc-800 text-sm">
                                    <li>1 User License</li>
                                    <li>Full Curriculum Access (18 Tracks)</li>
                                    <li>3 Diagnostic Tool Runs per month</li>
                                    <li>Private Community Access</li>
                                </ul>
                                <a href="/api/buy/full_curriculum" className="block w-full text-center py-3 bg-zinc-100 hover:bg-violet-600 hover:text-white text-zinc-950 font-bold font-mono text-sm uppercase tracking-widest transition-colors rounded-lg">
                                    Get Started
                                </a>
                            </div>

                            {/* Team */}
                            <div className="bg-gradient-to-br from-cyan-50 to-emerald-50 border border-cyan-200 p-8 rounded-xl shadow-md hover:border-cyan-400 transition-colors relative">
                                <div className="absolute -top-3 right-6 bg-cyan-900 text-cyan-50 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                                    Enterprise
                                </div>
                                <h3 className="text-xl font-grotesk font-bold text-zinc-950 mb-2 mt-0">Team Access</h3>
                                <div className="text-2xl font-mono font-bold text-zinc-900 mb-4">$1,500 <span className="text-sm text-zinc-500 font-medium">/ 10 seats</span></div>
                                <ul className="list-disc pl-5 space-y-2 mb-8 text-zinc-800 text-sm">
                                    <li>10-Seat Team License</li>
                                    <li>Team Admin Dashboard</li>
                                    <li>Unlimited Diagnostic Tool Runs</li>
                                    <li>Centralized Billing & Reporting</li>
                                </ul>
                                <a href="/api/buy/enterprise/enterprise_curriculum_license" className="block w-full text-center py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-bold font-mono text-sm uppercase tracking-widest transition-colors rounded-lg shadow-sm">
                                    Team - Get Started
                                </a>
                            </div>
                        </div>
                    </div>

                    <hr className="border-zinc-300 my-16" />

                    <h2>Why this model works</h2>
                    <p>
                        When an engineering team builds a new feature, they focus on functionality. When I audit that same feature, I focus on the structural cost to maintain it over the next three years. 
                    </p>
                    <p>
                        The $2,500 Diagnostic forces us to align on reality immediately. If the Diagnostic reveals that your architecture is sound and your unit economics are healthy, our engagement ends there, and you have validated your engineering strategy. If it reveals severe margin erosion, you now have the exact blueprint required to fix it, whether you hire me for the ongoing retainer or execute it internally.
                    </p>

                </article>

                <div className="mt-20">
                    <AdvisoryCTA variant="educational" />
                </div>

            </div>
        </main>
    );
}
