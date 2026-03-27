import fs from 'fs';

const file = 'd:/Antigravity_RichardEwing.io/app/tools/aueb/content.tsx';
let content = fs.readFileSync(file, 'utf8');

const startMarker = '<div className="bg-zinc-900/30 p-8 rounded-3xl border border-white/10 backdrop-blur-sm shadow-2xl space-y-8">';
const endMarker = 'ToolGate toolName="the AI Unit Economics Benchmark"';

const startIndex = content.indexOf(startMarker);

// Find the end of the div that encapsulates the ToolGate
const endIndexTarget = '</div>\\n                                )}';
const afterToolGateIndex = content.indexOf(endIndexTarget, content.indexOf(endMarker));

if (startIndex === -1 || afterToolGateIndex === -1) {
    console.log("MARKERS NOT FOUND!");
    console.log("Start:", startIndex, "End:", afterToolGateIndex);
    process.exit(1);
}

// The complete chunk to remove, up through the closing </div> of the monolithic block
const exactEndIndex = content.indexOf('</div>', afterToolGateIndex + endIndexTarget.length) + 6;

const wizardReplacement = \`<div className="bg-zinc-900/30 p-8 rounded-3xl border border-white/10 backdrop-blur-sm shadow-2xl space-y-8 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-zinc-800">
                                    <div className="h-full bg-cyan-500 transition-all duration-500" style={{ width: \\\`\\\${\\t(step / 3) * 100}%\\\` }} />
                                </div>
                                
                                {step === 1 && (
                                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8 mt-2">
                                        <div>
                                            <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">Unit Economics</div>
                                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                                <div>
                                                    <label htmlFor="price" className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 block">Price/User/Month</label>
                                                    <div className="relative">
                                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">$</span>
                                                        <input id="price" type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="w-full bg-black/50 border border-zinc-800 rounded-xl px-4 py-3 pl-7 text-white font-mono focus:border-cyan-500 focus:outline-none" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label htmlFor="queries" className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 block">AI Queries/User/Mo</label>
                                                    <input id="queries" type="number" value={queries} onChange={(e) => setQueries(e.target.value)} className="w-full bg-black/50 border border-zinc-800 rounded-xl px-4 py-3 text-white font-mono focus:border-cyan-500 focus:outline-none" />
                                                </div>
                                                <div>
                                                    <label htmlFor="cost" className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 block">Cost/Query</label>
                                                    <div className="relative">
                                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">$</span>
                                                        <input id="cost" type="number" step="0.001" value={costPerQuery} onChange={(e) => setCostPerQuery(e.target.value)} className="w-full bg-black/50 border border-zinc-800 rounded-xl px-4 py-3 pl-7 text-white font-mono focus:border-cyan-500 focus:outline-none" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label htmlFor="users" className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 block">Active Users</label>
                                                    <input id="users" type="number" value={users} onChange={(e) => setUsers(e.target.value)} className="w-full bg-black/50 border border-zinc-800 rounded-xl px-4 py-3 text-white font-mono focus:border-cyan-500 focus:outline-none" />
                                                </div>
                                            </div>
                                        </div>
                                        <button onClick={() => setStep(2)} className="w-full mt-8 py-4 bg-white hover:bg-zinc-200 text-black font-bold uppercase tracking-widest rounded-xl transition-all">Next: Optimization →</button>
                                    </motion.div>
                                )}

                                {step === 2 && (
                                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8 mt-2">
                                        <div>
                                            <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">Growth & Optimization</div>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                                <div>
                                                    <label htmlFor="growth" className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 block">Monthly Growth Rate</label>
                                                    <div className="relative">
                                                        <input id="growth" type="number" value={growthRate} onChange={(e) => setGrowthRate(e.target.value)} className="w-full bg-black/50 border border-zinc-800 rounded-xl px-4 py-3 text-white font-mono focus:border-cyan-500 focus:outline-none" />
                                                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500">%</span>
                                                    </div>
                                                </div>
                                                <div className="md:col-span-2">
                                                    <label className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 block">Caching Strategy</label>
                                                    <button
                                                        onClick={() => setCachingEnabled(!cachingEnabled)}
                                                        className={\`w-full px-4 py-3 rounded-xl border transition-all flex items-center justify-between \${cachingEnabled
                                                            ? 'bg-emerald-500/10 border-emerald-500/50 text-emerald-400'
                                                            : 'bg-black/50 border-zinc-800 text-zinc-400'
                                                            }\`}
                                                    >
                                                        <span>{cachingEnabled ? 'Semantic caching enabled' : 'No caching implemented'}</span>
                                                        <span className="text-xs font-mono">{cachingEnabled ? '~40% savings' : 'Click to toggle'}</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pt-6 border-t border-white/5">
                                            <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">AI Feature Mix (% of queries)</div>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                                {features.map((f, i) => (
                                                    <div key={i}>
                                                        <label className="text-xs text-zinc-400 mb-1 block">{f.name}</label>
                                                        <div className="relative">
                                                            <input
                                                                type="number"
                                                                title={f.name}
                                                                aria-label={\`Enter percentage for \${f.name}\`}
                                                                value={f.queriesPercent}
                                                                onChange={(e) => {
                                                                    const newFeatures = [...features];
                                                                    newFeatures[i].queriesPercent = parseInt(e.target.value) || 0;
                                                                    setFeatures(newFeatures);
                                                                }}
                                                                className="w-full bg-black/50 border border-zinc-800 rounded-lg px-3 py-2 text-white font-mono text-sm focus:border-cyan-500 focus:outline-none"
                                                            />
                                                            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-600 text-xs">%</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                            <button onClick={() => setStep(1)} className="px-6 py-4 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl transition-all">← Back</button>
                                            <button onClick={() => setStep(3)} className="flex-1 py-4 bg-white hover:bg-zinc-200 text-black font-bold uppercase tracking-widest rounded-xl transition-all">Next: Infrastructure →</button>
                                        </div>
                                    </motion.div>
                                )}

                                {step === 3 && (
                                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8 mt-2">
                                        <div>
                                            <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">Infrastructure Costs (Monthly Per User)</div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <label htmlFor="hosting" className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 block">Hosting & Compute</label>
                                                    <div className="relative">
                                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">$</span>
                                                        <input id="hosting" type="number" step="0.01" value={hostingCostPerUser} onChange={(e) => setHostingCostPerUser(e.target.value)} className="w-full bg-black/50 border border-zinc-800 rounded-xl px-4 py-3 pl-7 text-white font-mono focus:border-cyan-500 focus:outline-none" />
                                                    </div>
                                                    <p className="text-[10px] text-zinc-600 mt-1">AWS/GCP/Vercel per user allocation</p>
                                                </div>
                                                <div>
                                                    <label className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 block">Third-Party APIs</label>
                                                    <div className="space-y-2">
                                                        {thirdPartyApis.map((api, i) => (
                                                            <button
                                                                key={i}
                                                                onClick={() => {
                                                                    const newApis = [...thirdPartyApis];
                                                                    newApis[i].enabled = !newApis[i].enabled;
                                                                    setThirdPartyApis(newApis);
                                                                }}
                                                                className={\`w-full px-3 py-2 rounded-lg border text-left flex items-center justify-between transition-all text-sm \${api.enabled
                                                                    ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400'
                                                                    : 'bg-black/30 border-zinc-800 text-zinc-500'
                                                                    }\`}
                                                            >
                                                                <span>{api.name}</span>
                                                                <span className="font-mono text-xs">$\${api.costPerUser.toFixed(2)}/user</span>
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                            <button onClick={() => setStep(2)} className="px-6 py-4 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl transition-all">← Back</button>
                                            <button onClick={() => setShowGate(true)} disabled={loading} className="flex-1 py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-bold uppercase tracking-widest rounded-xl transition-all disabled:opacity-50 flex items-center justify-center gap-2">
                                                {loading ? <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Calculating Collapse Point...</> : 'Calculate My Collapse Point →'}
                                            </button>
                                        </div>
                                    </motion.div>
                                )}

                                {showGate && (
                                    <div className="mt-6">
                                        <ToolGate toolName="the AI Unit Economics Benchmark" onUnlock={() => { setShowGate(false); calculate(); }}><></></ToolGate>
                                    </div>
                                )}
                            </div>\`;

const newContent = content.substring(0, startIndex) + wizardReplacement + content.substring(exactEndIndex);
fs.writeFileSync(file, newContent);
console.log("Successfully forced Wizard Component Injection!");
