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
    { params }: { params: { toolSlug: string; competitorSlug: string } },
    parent: ResolvingMetadata
): Promise<Metadata> {
    const match = getMatch(params.toolSlug, params.competitorSlug);
    if (!match) return { title: 'Comparison Not Found' };

    const { tool, competitor } = match;

    return {
        title: `Exogram ${tool.toolName} vs. ${competitor.name} (2026 Comparison)`,
        description: `Why enterprise leaders choose Exogram's deterministic architecture over ${competitor.name}. Calculate literal Cost of Doing Nothing (CODN) and Board-Level Liability.`,
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

export default function CombatComparisonPage({ params }: { params: { toolSlug: string; competitorSlug: string } }) {
    const match = getMatch(params.toolSlug, params.competitorSlug);

    if (!match) {
        notFound();
    }

    const { tool, competitor } = match;

    // Structured JSON-LD Schema for Google/AI Overviews
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: `Exogram ${tool.toolName} vs. ${competitor.name}`,
        description: `A technical and financial comparison between Exogram's ${tool.toolName} and ${competitor.name}.`,
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

    return (
        <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-indigo-500/30">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            
            <Navigation />
            
            <main className="max-w-5xl mx-auto px-4 pt-32 mb-32 relative z-10">
                <Link href={`/tools/${tool.toolSlug}`} className="inline-flex items-center gap-2 text-zinc-500 hover:text-white font-mono text-xs uppercase tracking-widest transition-colors mb-12">
                    <ArrowLeft size={14} /> Back to Diagnostic App
                </Link>

                <div className="text-center mb-24">
                     <div className="inline-block bg-red-500/10 border border-red-500/20 text-red-400 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest mb-6">
                        Architectural Comparison Analysis
                     </div>
                     <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter mb-6 leading-tight">
                        Exogram <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">{tool.toolName}</span> <br/>
                        <span className="text-zinc-500 text-3xl sm:text-5xl border-t border-b border-zinc-800 py-2 inline-block my-4 w-32 lowercase font-serif italic">vs</span><br/>
                        {competitor.name}
                     </h1>
                     <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
                        If you are an engineer optimizing latency, use {competitor.name}. If you are a C-Suite executive quantifying millions in enterprise liability and SEC exposure, deploy Exogram.
                     </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                     {/* Competitor Column */}
                     <div className="bg-[#0a0a0b] border border-white/5 rounded-[2rem] p-8 relative overflow-hidden group hover:border-red-500/20 transition-all opacity-80">
                          <div className="absolute top-0 right-0 p-6 opacity-10">
                              <Target size={120} />
                          </div>
                          <div className="mb-8">
                             <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">The Legacy Approach</div>
                             <h2 className="text-3xl font-bold text-white mb-2">{competitor.name}</h2>
                          </div>
                          <div className="space-y-6">
                              <div>
                                  <h3 className="text-sm font-bold text-zinc-300 uppercase tracking-widest mb-2">Core Philosophy</h3>
                                  <p className="text-zinc-500 leading-relaxed">{competitor.theirFocus}</p>
                              </div>
                              <div className="bg-red-500/5 border border-red-500/10 p-6 rounded-xl">
                                  <h3 className="text-xs font-mono text-red-400 uppercase tracking-widest mb-2 flex items-center gap-2"><Target size={14}/> The Critical Failure</h3>
                                  <p className="text-sm text-zinc-400 leading-relaxed">
                                      They treat AI as just another software endpoint. They map tokens and API routes without calculating the underlying Cost of Doing Nothing (CODN) or Board-level liability that destroys enterprise momentum.
                                  </p>
                              </div>
                          </div>
                     </div>

                     {/* Exogram Column */}
                     <div className="bg-[#0a0a0b] border border-indigo-500/30 rounded-[2rem] p-8 relative overflow-hidden shadow-[0_0_50px_rgba(99,102,241,0.05)]">
                          <BorderBeam size={200} duration={12} delay={9} borderWidth={1.5} colorFrom="#6366f1" colorTo="#22d3ee" />
                          <div className="absolute top-0 right-0 p-6 opacity-10 text-indigo-500">
                              <ShieldCheck size={120} />
                          </div>
                          <div className="mb-8 relative z-10">
                             <div className="text-xs font-mono text-indigo-400 uppercase tracking-widest mb-2">The Deterministic Standard</div>
                             <h2 className="text-3xl font-bold text-white mb-2">Exogram</h2>
                          </div>
                          <div className="space-y-6 relative z-10">
                              <div>
                                  <h3 className="text-sm font-bold text-zinc-300 uppercase tracking-widest mb-2">Core Philosophy</h3>
                                  <p className="text-zinc-300 leading-relaxed font-medium">{competitor.ourAdvantage}</p>
                              </div>
                              <div className="bg-indigo-500/10 border border-indigo-500/20 p-6 rounded-xl">
                                  <h3 className="text-xs font-mono text-indigo-400 uppercase tracking-widest mb-2 flex items-center gap-2"><Zap size={14}/> Board-Level Valuation</h3>
                                  <p className="text-sm text-zinc-300 leading-relaxed">
                                      Every Exogram diagnostic terminates in an Executive Briefing PDF and directly maps to our Sovereign Enterprise Curriculum, explicitly training your teams to eradicate the vulnerability locally.
                                  </p>
                              </div>
                          </div>
                     </div>
                </div>

                <div className="text-center max-w-2xl mx-auto">
                    <h3 className="text-2xl font-bold mb-6">Stop playing with calculators. Calculate your liability.</h3>
                    <ShineBorder borderColor="rgba(99, 102, 241, 0.6)" duration={2}>
                        <Link 
                            href={`/tools/${tool.toolSlug}`}
                            className="w-full sm:w-auto px-8 py-5 bg-white text-black font-bold uppercase tracking-widest hover:bg-indigo-500 hover:text-white transition-all flex items-center justify-center gap-3"
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
