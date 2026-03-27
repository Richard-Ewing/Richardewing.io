import fs from 'fs';
import path from 'path';

const file = 'd:/Antigravity_RichardEwing.io/app/tools/aueb/content.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Add Imports
content = content.replace(
    `import { QPEPRemediation } from '../../components/QPEPRemediation';`,
    `import { QPEPRemediation } from '../../components/QPEPRemediation';\nimport PayGate from '../../components/PayGate';\nimport jsPDF from 'jspdf';\nimport { toPng } from 'html-to-image';`
);

// 2. Add qpep_roadmap to Results
content = content.replace(
    `    totalInfraCost: number;\n}`,
    `    totalInfraCost: number;\n    qpep_roadmap?: Array<{ month: number; focus: string; action_items: string[] }>;\n}`
);

// 3. Add wizard state
content = content.replace(
    `    const [persona, setPersona] = useState<Persona>('Founder');`,
    `    const [persona, setPersona] = useState<Persona>('Founder');\n    const [step, setStep] = useState(1);\n    const [isSaving, setIsSaving] = useState(false);\n    const [showPaywall, setShowPaywall] = useState(false);`
);

// 4. Remove ExportToPDFButton from Results Action Header
content = content.replace(
    `                                    <ExportToPDFButton targetId="aueb-pdf-export-zone" fileName={\`AUEB_Assessment_\${persona}.pdf\`} />`,
    ``
);

// 5. Replace calculate function's Supabase fetch with NOTHING
const supabaseFetchBlock = `            // Silently persist to Supabase for longitudinal tracking
            fetch('/api/tools/runs', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    tool_id: 'AUEB',
                    run_data: { 
                        price: priceNum, queries: queriesNum, costPerQuery: costNum, users: usersNum, 
                        growthRate: growthRateNum, cachingEnabled, features, hostingCostPerUser: hostingNum, thirdPartyApis 
                    },
                    output_metrics: payload
                })
            }).catch(console.error);`;

content = content.replace(supabaseFetchBlock, '');

// 6. Inject handleSaveAndExport
const handleSaveAndExportBlock = `
    const handleSaveAndExport = async () => {
        setIsSaving(true);
        try {
            const priceNum = parseFloat(price) || 0;
            const queriesNum = parseFloat(queries) || 0;
            const costNum = parseFloat(costPerQuery) || 0;
            const usersNum = parseFloat(users) || 0;
            const growthRateNum = parseFloat(growthRate) || 15;
            const hostingNum = parseFloat(hostingCostPerUser) || 0;

            const payload = {
                run_data: { price: priceNum, queries: queriesNum, costPerQuery: costNum, users: usersNum, growthRate: growthRateNum, cachingEnabled, features, hostingCostPerUser: hostingNum, thirdPartyApis },
                output_metrics: results
            };
            const res = await fetch('/api/tools/aueb/save', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            const data = await res.json();
            
            if (res.status === 402 && data.error === 'PAYMENT_REQUIRED') {
                setShowPaywall(true);
                return;
            }
            if (!res.ok) throw new Error(data?.message || 'Failed to save');

            if (data.qpep_roadmap) {
                setResults((prev: any) => prev ? { ...prev, qpep_roadmap: data.qpep_roadmap } : null);
            }

            // Small delay to let React render the Q-PEP roadmap into the DOM
            await new Promise(r => setTimeout(r, 800));

            const element = document.getElementById('aueb-pdf-export-zone');
            if (!element) return;
            const dataUrl = await toPng(element, { quality: 1.0, backgroundColor: '#050505', pixelRatio: 2 });
            const pdf = new jsPDF({ orientation: 'p', unit: 'px', format: [element.offsetWidth, element.offsetHeight] });
            pdf.addImage(dataUrl, 'PNG', 0, 0, element.offsetWidth, element.offsetHeight);
            pdf.save(\`AUEB_Assessment_\${persona}.pdf\`);
        } catch (error: any) {
            console.error(error);
            alert(\`Export failed: \${error.message || "Unknown error"}\`);
        } finally {
            setIsSaving(false);
        }
    };
`;

content = content.replace(`    const calculate = () => {`, handleSaveAndExportBlock + `\n    const calculate = () => {`);

// 7. Inject PayGate into return layout
content = content.replace(
    `            <ToolCelebration show={!!results} toolName="AUEB" />`,
    `            <ToolCelebration show={!!results} toolName="AUEB" />\n            <PayGate open={showPaywall} onDismiss={() => setShowPaywall(false)} toolName="the AI Unit Economics Benchmark" />`
);

// 8. Replace Action Footer (Line 796-799)
const oldFooterText = `<button onClick={() => setResults(null)} className="text-zinc-500 text-sm hover:text-white underline underline-offset-4">← Run New Analysis</button>
                                    <Link href="/advisory" className={\`px-10 py-4 font-bold uppercase tracking-widest rounded-xl transition-all \${results.grossMargin < 50
                                        ? 'bg-red-600 hover:bg-red-500 text-white shadow-[0_0_30px_rgba(220,38,38,0.4)]'
                                        : 'bg-cyan-500 hover:bg-cyan-400 text-black shadow-[0_0_30px_rgba(34,211,238,0.3)]'
                                        }\`}>
                                        {results.grossMargin < 50 ? '🚨 Emergency Margin Audit' : 'Optimize My Margins'} →
                                    </Link>
                                    <Link href="/system" className="text-zinc-500 text-sm hover:text-white">Explore All Tools →</Link>`;

const newFooterText = `<button onClick={() => { setResults(null); setStep(1); }} className="text-zinc-500 text-sm hover:text-white underline underline-offset-4">← Run New Analysis</button>
                                    <button onClick={handleSaveAndExport} disabled={isSaving} className={\`px-10 py-4 font-bold uppercase tracking-widest rounded-xl transition-all flex items-center gap-2 \${results.grossMargin < 50
                                        ? 'bg-red-600 hover:bg-red-500 text-white shadow-[0_0_30px_rgba(220,38,38,0.4)] disabled:bg-red-800'
                                        : 'bg-cyan-500 hover:bg-cyan-400 text-black shadow-[0_0_30px_rgba(34,211,238,0.3)] disabled:bg-cyan-700'
                                        }\`}>
                                        {isSaving ? (
                                            <><div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" /> GENERATING...</>
                                        ) : '💾 SAVE TO VAULT & EXPORT PDF'}
                                    </button>
                                    <Link href="/system" className="text-zinc-500 text-sm hover:text-white">Explore All Tools →</Link>`;

content = content.replace(oldFooterText, newFooterText);

// 9. Rewrite the massive input div to use the 3 steps
const rawWizardRegex = /<div className="bg-zinc-900\/30 p-8 rounded-3xl border border-white\/10 backdrop-blur-sm shadow-2xl space-y-8">[\s\S]*?<\/div>\n                                <\/motion\.div>/;

let wizardReplacement = `<div className="bg-zinc-900/30 p-8 rounded-3xl border border-white/10 backdrop-blur-sm shadow-2xl space-y-8 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-zinc-800">
                                    <div className="h-full bg-cyan-500 transition-all duration-500" style={{ width: \`\${(step / 3) * 100}%\` }} />
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
                            </div>
                        </motion.div>`;

content = content.replace(rawWizardRegex, wizardReplacement);

fs.writeFileSync(file, content);
console.log('Successfully injected Wizard payload to content.tsx');
