import fs from 'fs';

const file = 'd:/Antigravity_RichardEwing.io/app/tools/aueb/content.tsx';
let content = fs.readFileSync(file, 'utf8');

// Remove import PayGate
content = content.replace("import PayGate from '../../components/PayGate';\\n", "");

// Replace <PayGate open={showPaywall} ... /> with the inline Paywall
const payGateTag = '<PayGate open={showPaywall} onDismiss={() => setShowPaywall(false)} toolName="the AI Unit Economics Benchmark" />';

const inlinePaywall = \`
            {/* MONETIZATION ENGINE: PAYWALL MODAL */}
            {showPaywall && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" data-html2canvas-ignore>
                    <div className="bg-zinc-950 border border-zinc-800 rounded-3xl max-w-md w-full p-8 relative shadow-2xl overflow-hidden scale-100 animate-in zoom-in-95 duration-200">
                        {/* Lighting Fx */}
                        <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-violet-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                        
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mb-6 border border-red-500/20">
                                <Lock className="w-5 h-5 text-red-400" />
                            </div>
                            
                            <h3 className="text-3xl font-bold text-white mb-2 font-grotesk tracking-tight">Limit Reached.</h3>
                            <p className="text-zinc-400 text-sm mb-8 leading-relaxed">
                                You have consumed your allocation of 3 free diagnostic audits. Unlock the Full Library to save unlimited board-ready PDF reports directly to your Vault.
                            </p>
                            
                            <div className="space-y-3">
                                <Link 
                                    href="/api/buy/full_curriculum" 
                                    onClick={() => setShowPaywall(false)}
                                    className="flex items-center justify-center w-full py-4 bg-cyan-500 text-black font-bold uppercase tracking-widest text-xs rounded-xl transition-all shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:scale-[1.02]"
                                >
                                    Unlock Library for $199
                                </Link>
                                <button 
                                    onClick={() => setShowPaywall(false)} 
                                    className="flex items-center justify-center w-full py-3 bg-transparent hover:bg-white/5 text-zinc-400 font-bold uppercase tracking-widest text-xs rounded-xl transition-all"
                                >
                                    Dismiss
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
\`;

content = content.replace(payGateTag, inlinePaywall);

fs.writeFileSync(file, content);
console.log('Fixed Paywall issue in AUEB');
