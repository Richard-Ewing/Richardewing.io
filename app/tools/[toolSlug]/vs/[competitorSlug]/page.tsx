import { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import { COMBAT_SEO_MATRIX } from '../../../../lib/combat-seo';
import Link from 'next/link';
import { ArrowLeft, Target, ShieldCheck, Zap } from 'lucide-react';
import { BorderBeam } from '../../../../components/magicui/border-beam';
import ShineBorder from '../../../../components/magicui/shine-border';
import { Footer } from '../../../../components/footer';
import Navigation from '../../../../components/Navigation';

// Helper to find data
function getMatch(toolSlug: string, competitorSlug: string) {
    const tool = COMBAT_SEO_MATRIX.find(t => t.toolSlug === toolSlug);
    if (!tool) return null;
    const competitor = tool.competitors.find(c => c.slug === competitorSlug);
    if (!competitor) return null;
    return { tool, competitor };
}

// NextJS Dynamic Metadata
export async function generateMetadata(
    { params }: { params: Promise<{ toolSlug: string; competitorSlug: string }> },
    parent: ResolvingMetadata
): Promise<Metadata> {
    const resolvedParams = await params;
    const match = getMatch(resolvedParams.toolSlug, resolvedParams.competitorSlug);
    if (!match) return { title: 'Comparison Not Found' };

    const { tool, competitor } = match;

    return {
        title: `${tool.toolName} vs. ${competitor.name} (2026 Comparison)`,
        description: `Why enterprise leaders choose deterministic architecture over ${competitor.name}. Calculate literal Cost of Doing Nothing (CODN) and Board-Level Liability.`,
        keywords: [
            `${competitor.name} alternative`,
            `${tool.toolName} vs ${competitor.name}`,
            `${competitor.name} competitors`,
            'Enterprise AI security',
            'AI FinOps platform'
        ],
        alternates: {
            canonical: `https://www.richardewing.io/tools/${tool.toolSlug}/vs/${competitor.slug}`,
        },
    };
}

export default async function CombatComparisonPage({ params }: { params: Promise<{ toolSlug: string; competitorSlug: string }> }) {
    const resolvedParams = await params;
    const match = getMatch(resolvedParams.toolSlug, resolvedParams.competitorSlug);

    if (!match) {
        notFound();
    }

    const { tool, competitor } = match;

    // Structured JSON-LD Schema for Google/AI Overviews
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: `${tool.toolName} vs. ${competitor.name}`,
        description: `A technical and financial comparison between ${tool.toolName} and ${competitor.name}.`,
        publisher: {
            '@type': 'Organization',
            name: 'Exogram',
        },
        mainEntity: {
            '@type': 'SoftwareApplication',
            name: `Exogram ${tool.toolName}`,
            applicationCategory: 'SecurityApplication',
            offers: {
                '@type': 'Offer',
                price: '1495.00',
                priceCurrency: 'USD',
            }
        }
    };
    
    // Dynamic failure message based on competitor name
    const dynamicFailure = competitor.slug === 'gartner-magic-quadrant' 
        ? "They map theoretical market quadrants without calculating the underlying Cost of Doing Nothing (CODN) or the exact technical debt you inherit by buying 'Leaders'."
        : `They approach the problem as an operational symptom. They map basic telemetry without calculating the underlying Cost of Doing Nothing (CODN) or Board-level liability that destroys enterprise momentum.`;

    return (
        <div className="bg-white min-h-screen text-zinc-950 font-sans selection:bg-indigo-500/30">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            
            <Navigation />
            
            <main className="max-w-5xl mx-auto px-4 pt-32 mb-32 relative z-10">
                <Link href={`/tools/${tool.toolSlug}`} className="inline-flex items-center gap-2 text-zinc-950 font-bold hover:text-zinc-900 font-mono text-xs font-bold uppercase tracking-widest transition-colors mb-12">
                    <ArrowLeft size={14} /> Back to Diagnostic App
                </Link>

                <div className="text-center mb-24">
                     <div className="inline-block bg-red-500/10 border border-red-500/20 text-red-900 font-extrabold font-semibold px-3 py-1 rounded-full text-xs font-bold font-mono uppercase tracking-widest mb-6">
                        Architectural Comparison Analysis
                     </div>
                     <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter mb-6 leading-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">{tool.toolName}</span> <br/>
                        <span className="text-zinc-950 font-bold text-3xl sm:text-5xl border-t border-b border-zinc-800 py-2 inline-block my-4 w-32 lowercase font-serif italic">vs</span><br/>
                        {competitor.name}
                     </h1>
                     <p className="text-xl text-zinc-950 font-bold max-w-3xl mx-auto leading-relaxed">
                        If your goal is standard operational telemetry, {competitor.name} is sufficient. If you are a C-Suite executive quantifying millions in enterprise liability, deploy {tool.toolName}.
                     </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                     {/* Competitor Column */}
                     <div className="bg-white border border-zinc-400 rounded-[2rem] p-8 relative overflow-hidden group hover:border-red-500/20 transition-all opacity-80">
                          <div className="absolute top-0 right-0 p-6 opacity-10">
                              <Target size={120} />
                          </div>
                          <div className="mb-8">
                             <div className="text-xs font-bold font-mono text-zinc-950 font-bold uppercase tracking-widest mb-2">The Legacy Approach</div>
                             <h2 className="text-3xl font-bold text-zinc-950 mb-2">{competitor.name}</h2>
                          </div>
                          <div className="space-y-6">
                              <div>
                                  <h3 className="text-sm font-semibold font-bold text-zinc-950 font-bold uppercase tracking-widest mb-2">Core Philosophy</h3>
                                  <p className="text-zinc-950 font-bold leading-relaxed">{competitor.theirFocus}</p>
                              </div>
                              <div className="bg-red-500/5 border border-red-500/10 p-6 rounded-xl">
                                  <h3 className="text-xs font-bold font-mono text-red-900 font-extrabold font-semibold uppercase tracking-widest mb-2 flex items-center gap-2"><Target size={14}/> The Critical Failure</h3>
                                  <p className="text-sm font-semibold text-zinc-900 font-medium leading-relaxed">
                                      {dynamicFailure}
                                  </p>
                              </div>
                          </div>
                     </div>

                     {/* Exogram Column */}
                     <div className="bg-white border border-indigo-500/30 rounded-[2rem] p-8 relative overflow-hidden shadow-[0_0_50px_rgba(99,102,241,0.05)]">
                          <BorderBeam size={200} duration={12} delay={9} borderWidth={1.5} colorFrom="#6366f1" colorTo="#22d3ee" />
                          <div className="absolute top-0 right-0 p-6 opacity-10 text-indigo-500">
                              <ShieldCheck size={120} />
                          </div>
                          <div className="mb-8 relative z-10">
                             <div className="text-xs font-bold font-mono text-indigo-900 font-extrabold font-semibold uppercase tracking-widest mb-2">The Deterministic Standard</div>
                             <h2 className="text-3xl font-bold text-zinc-950 mb-2">{tool.toolName}</h2>
                          </div>
                          <div className="space-y-6 relative z-10">
                              <div>
                                  <h3 className="text-sm font-semibold font-bold text-zinc-950 font-bold uppercase tracking-widest mb-2">Core Philosophy</h3>
                                  <p className="text-zinc-950 font-bold leading-relaxed font-medium">{competitor.ourAdvantage}</p>
                              </div>
                              <div className="bg-indigo-500/10 border border-indigo-500/20 p-6 rounded-xl">
                                  <h3 className="text-xs font-bold font-mono text-indigo-900 font-extrabold font-semibold uppercase tracking-widest mb-2 flex items-center gap-2"><Zap size={14}/> Board-Level Valuation</h3>
                                  <p className="text-sm font-semibold text-zinc-900 font-medium leading-relaxed">
                                      Every <strong>{tool.toolName}</strong> computation terminates in an Executive Briefing PDF. We bypass generalized metrics to give you a deterministic, Board-ready artifact that maps directly to our Sovereign Enterprise Curriculum, explicitly training your teams to eradicate the exact vulnerability locally.
                                  </p>
                              </div>
                          </div>
                     </div>
                </div>

                {/* Actual Head-To-Head Comparison Matrix */}
                <div className="mb-24">
                    <div className="text-center mb-10">
                        <h3 className="text-3xl font-bold mb-3">Head-To-Head Architecture</h3>
                        <p className="text-zinc-900">Why {competitor.name} fails in the boardroom.</p>
                    </div>
                    <div className="bg-white border border-zinc-400 rounded-2xl overflow-hidden">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-white/5 border-b border-zinc-400">
                                    <th className="p-6 text-sm font-semibold font-bold text-zinc-950 font-bold uppercase tracking-widest w-1/2">Capability</th>
                                    <th className="p-6 text-sm font-semibold font-bold text-zinc-950 font-bold uppercase tracking-widest w-1/4 text-center border-l border-zinc-400">{competitor.name}</th>
                                    <th className="p-6 text-sm font-semibold font-bold text-indigo-900 font-extrabold font-semibold uppercase tracking-widest w-1/4 text-center border-l border-zinc-400">{tool.toolName}</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-200">
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="p-6 text-zinc-900">Deterministic Financial Translation (CODN)</td>
                                    <td className="p-6 text-center text-red-500 font-bold">❌</td>
                                    <td className="p-6 text-center text-emerald-500 font-bold">✅</td>
                                </tr>
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="p-6 text-zinc-900">C-Suite Executive PDF Briefing Generation</td>
                                    <td className="p-6 text-center text-red-500 font-bold">❌</td>
                                    <td className="p-6 text-center text-emerald-500 font-bold">✅</td>
                                </tr>
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="p-6 text-zinc-900">Sovereign Architecture / Local SLA Mapping</td>
                                    <td className="p-6 text-center text-red-500 font-bold">❌</td>
                                    <td className="p-6 text-center text-emerald-500 font-bold">✅</td>
                                </tr>
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="p-6 text-zinc-900">Surface-Level Telemetry / Industry Generalizations</td>
                                    <td className="p-6 text-center text-emerald-500 font-bold">✅</td>
                                    <td className="p-6 text-center text-red-500 font-bold">❌</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="text-center max-w-2xl mx-auto">
                    <h3 className="text-2xl font-bold mb-6">Stop playing with calculators. Calculate your liability.</h3>
                    <ShineBorder borderColor="rgba(99, 102, 241, 0.6)" duration={2}>
                        <Link 
                            href={`/tools/${tool.toolSlug}`}
                            className="w-full sm:w-auto px-8 py-5 bg-white text-black font-bold uppercase tracking-widest hover:bg-indigo-500 hover:text-zinc-900 transition-all flex items-center justify-center gap-3"
                        >
                            <Zap size={18}/> RUN THE EXECUTIVE AUDIT NOW
                        </Link>
                    </ShineBorder>
                </div>
            </main>

            <Footer />
        </div>
    );
}
