import Link from 'next/link';
import { Download, CheckCircle2, ChevronRight, FileSpreadsheet, Presentation, FileText, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import Navigation from '../components/Navigation';
import { Footer } from '../components/footer';
import { GooglePreferredBadge } from '../components/GooglePreferredBadge';

export const metadata = {
    title: 'Your Operating Kit Is Ready | Richard Ewing',
    description: 'Instant download center for The Product & AI Economist Operating Kit: 5 financial spreadsheets, CFO board deck blueprints, and executive turnaround runbooks.',
    robots: 'noindex, nofollow'
};

const individualFiles = [
    {
        name: '01. AI Feature Pricing & Margin Stress-Tester',
        description: 'Editable P50, P90, P99 token consumption models, hybrid tier pricing stress-testers, and architectural cost levers.',
        xlsxUrl: '/downloads/Product_and_AI_Economist_Operating_Kit/01_AI_Feature_Pricing_and_Margin_Stress_Tester.xlsx',
        csvUrl: '/downloads/Product_and_AI_Economist_Operating_Kit/01_AI_Feature_Pricing_and_Margin_Stress_Tester.csv',
        icon: FileSpreadsheet,
        badge: 'Excel + CSV',
    },
    {
        name: '02. Zombie Feature Kill-List & Capacity Matrix',
        description: 'The $5M product debt audit matrix used at Tyler Tech scale ($0-$25M ARR). Fully-loaded dev carry vs ARR attribution.',
        xlsxUrl: '/downloads/Product_and_AI_Economist_Operating_Kit/02_Zombie_Feature_Kill_List_and_Capacity_Matrix.xlsx',
        csvUrl: '/downloads/Product_and_AI_Economist_Operating_Kit/02_Zombie_Feature_Kill_List_and_Capacity_Matrix.csv',
        icon: FileSpreadsheet,
        badge: 'Excel + CSV',
    },
    {
        name: '03. 12-Slide CFO & Board Defense Blueprint',
        description: 'Slide-by-slide word-for-word executive scripts, EBITDA bridges, and CapEx vs OpEx software capitalization under ASC 350-40.',
        mdUrl: '/downloads/Product_and_AI_Economist_Operating_Kit/03_12_Slide_CFO_and_Board_Defense_Blueprint.md',
        icon: Presentation,
        badge: 'Executive Blueprint',
    },
    {
        name: '04. First-30-Days Product P&L Turnaround Runbook',
        description: 'Day-by-day tactical execution protocol, cloud bill forensics, weekly CEO/CFO flash report templates, and deprecation scripts.',
        mdUrl: '/downloads/Product_and_AI_Economist_Operating_Kit/04_First_30_Days_Product_PnL_Turnaround_Runbook.md',
        icon: FileText,
        badge: '30-Day Protocol',
    },
    {
        name: '05. Product Economist Executive Comp Playbook',
        description: 'Positioning for $250K-$450K+ CPO/VP Product roles: 12 resume bullet rewrites, 15 tough CEO/CFO interview Q&As, comp negotiation.',
        mdUrl: '/downloads/Product_and_AI_Economist_Operating_Kit/05_Product_Economist_Executive_Comp_Playbook.md',
        icon: Sparkles,
        badge: 'Career Dossier',
    },
];

export default function ToolkitSuccessPage() {
    return (
        <main className="min-h-screen bg-[#F5F0EB] text-zinc-950 font-sans selection:bg-violet-200">
            <Navigation />
            
            <div className="pt-32 pb-24 page-container max-w-4xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mb-6 border border-emerald-300">
                        <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div className="inline-block px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-mono font-bold uppercase tracking-wider mb-4">
                        Order Complete • Instant Access Granted
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-zinc-950 font-grotesk tracking-tight mb-4">
                        Your Operating Kit Is Ready.
                    </h1>
                    <p className="text-lg text-zinc-700 font-medium max-w-2xl mx-auto leading-relaxed">
                        Thank you for your order. A receipt has been sent to your email by Stripe. You can download the complete bundle as a single ZIP file or access individual files below.
                    </p>
                </div>

                {/* Step 1: Primary Master Download Card */}
                <div className="bg-white rounded-3xl border-2 border-zinc-900 shadow-xl overflow-hidden mb-8 p-8 sm:p-10">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-zinc-200">
                        <div>
                            <div className="text-xs font-mono font-bold uppercase tracking-wider text-violet-700 mb-1">
                                Step 1 • Master Download Package (Offline Spreadsheets &amp; Playbooks)
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 font-grotesk">
                                The Product &amp; AI Economist Operating Kit (2026 Edition)
                            </h2>
                        </div>
                        <div className="text-right shrink-0">
                            <span className="inline-block px-3 py-1 bg-zinc-100 rounded-full font-mono text-xs font-bold text-zinc-800">
                                ZIP • 3.95 MB
                            </span>
                        </div>
                    </div>

                    <p className="text-zinc-700 mb-8 font-medium leading-relaxed">
                        Contains all 5 core operating models (Excel spreadsheets with editable formulas + universal CSVs), the 12-slide CFO board blueprint, the 30-day turnaround runbook, the executive comp guide, plus 3 bonus high-resolution executive whitepapers (AI Margin Engineering Audit, Fractional AI Economist, Enterprise AI Risk Advisory).
                    </p>

                    <a 
                        href="/downloads/Product_and_AI_Economist_Operating_Kit.zip" 
                        download="Product_and_AI_Economist_Operating_Kit.zip"
                        className="w-full flex items-center justify-center gap-3 py-5 rounded-2xl bg-zinc-950 text-white font-bold text-lg hover:bg-violet-700 transition-all font-grotesk shadow-md hover:shadow-lg"
                    >
                        <Download className="w-6 h-6" /> Download Complete Operating Kit (.zip)
                    </a>
                    
                    <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-600 font-medium mt-4 font-mono">
                        <span>✓ Unzip on Windows, macOS, or Linux</span>
                        <span>✓ Compatible with Excel, Google Sheets, &amp; Notion</span>
                        <span>✓ Zero Expiration Date (Lifetime Access)</span>
                    </div>
                </div>

                {/* Step 2: Live Interactive Product Economist Workspace Card */}
                <div className="bg-zinc-950 text-white rounded-3xl border-2 border-violet-500 shadow-xl overflow-hidden mb-12 p-8 sm:p-10">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-zinc-800">
                        <div>
                            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 mb-1">
                                <Sparkles className="w-4 h-4" /> Step 2 • Live Browser Software (Included With Your Kit)
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-white font-grotesk">
                                Launch Your Interactive Product Economist Workspace
                            </h2>
                        </div>
                        <div className="text-right shrink-0">
                            <span className="inline-block px-3 py-1 bg-emerald-500/20 border border-emerald-500/40 rounded-full font-mono text-xs font-bold text-emerald-300">
                                Browser Studio • Local Save
                            </span>
                        </div>
                    </div>

                    <p className="text-zinc-300 mb-6 font-medium leading-relaxed">
                        Want to model your numbers right now in the browser alongside your Excel sheets? Open the <strong>Live Product Economist Workspace</strong> to plug in your company name, ARR, engineering headcount, and monthly AI spend, save multiple scenarios locally in your browser, run all 4 connected diagnostic calculators, and generate a customized Board &amp; CFO P&amp;L Report.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-6">
                        <Link
                            href="/workspace"
                            className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-violet-400 transition-colors block"
                        >
                            <div className="text-[10px] font-mono font-bold uppercase text-violet-400 mb-1">Command Center</div>
                            <div className="font-bold text-sm text-white font-grotesk">P&amp;L Scenario Studio &rarr;</div>
                        </Link>
                        <Link
                            href="/workspace/products"
                            className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-violet-400 transition-colors block"
                        >
                            <div className="text-[10px] font-mono font-bold uppercase text-emerald-400 mb-1">Module 02 Live</div>
                            <div className="font-bold text-sm text-white font-grotesk">Product Portfolio Matrix &rarr;</div>
                        </Link>
                        <Link
                            href="/workspace/finance"
                            className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-violet-400 transition-colors block"
                        >
                            <div className="text-[10px] font-mono font-bold uppercase text-amber-400 mb-1">Module 01 Live</div>
                            <div className="font-bold text-sm text-white font-grotesk">CFO &amp; Margin Ledger &rarr;</div>
                        </Link>
                        <Link
                            href="/workspace/engineering"
                            className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-violet-400 transition-colors block"
                        >
                            <div className="text-[10px] font-mono font-bold uppercase text-purple-400 mb-1">APER &amp; Capacity</div>
                            <div className="font-bold text-sm text-white font-grotesk">Engineering OS &rarr;</div>
                        </Link>
                        <Link
                            href="/workspace/board"
                            className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-violet-400 transition-colors block"
                        >
                            <div className="text-[10px] font-mono font-bold uppercase text-cyan-400 mb-1">Module 03 Live</div>
                            <div className="font-bold text-sm text-white font-grotesk">Board Packet Generator &rarr;</div>
                        </Link>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                        <Link
                            href="/workspace"
                            className="flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-base transition-all font-grotesk shadow-md"
                        >
                            Open Live Product Economist Workspace <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="/diagnose"
                            className="flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 font-bold text-sm transition-all font-grotesk"
                        >
                            Run Guided P&amp;L Diagnostic
                        </Link>
                    </div>
                </div>

                {/* Individual File Access */}
                <div className="mb-12">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h3 className="text-2xl font-bold font-grotesk text-zinc-950">
                                Individual File Downloads
                            </h3>
                            <p className="text-sm text-zinc-600 font-medium">
                                Prefer not to unzip? Download individual spreadsheets and runbooks directly:
                            </p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {individualFiles.map((file, idx) => {
                            const IconComponent = file.icon;
                            return (
                                <div 
                                    key={idx}
                                    className="bg-white border border-zinc-300 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-violet-400 transition-all"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-violet-100 text-violet-700 flex items-center justify-center shrink-0 mt-0.5">
                                            <IconComponent className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <h4 className="font-bold text-zinc-950 font-grotesk text-base">
                                                    {file.name}
                                                </h4>
                                                <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-zinc-100 text-zinc-700">
                                                    {file.badge}
                                                </span>
                                            </div>
                                            <p className="text-xs text-zinc-600 font-medium max-w-xl">
                                                {file.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 shrink-0">
                                        {file.xlsxUrl && (
                                            <a
                                                href={file.xlsxUrl}
                                                download
                                                className="px-3.5 py-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-900 font-mono text-xs font-bold transition-colors inline-flex items-center gap-1.5"
                                            >
                                                <Download className="w-3.5 h-3.5" /> .XLSX
                                            </a>
                                        )}
                                        {file.csvUrl && (
                                            <a
                                                href={file.csvUrl}
                                                download
                                                className="px-3.5 py-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-900 font-mono text-xs font-bold transition-colors inline-flex items-center gap-1.5"
                                            >
                                                <Download className="w-3.5 h-3.5" /> .CSV
                                            </a>
                                        )}
                                        {file.mdUrl && (
                                            <a
                                                href={file.mdUrl}
                                                download
                                                className="px-3.5 py-2 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-mono text-xs font-bold transition-colors inline-flex items-center gap-1.5"
                                            >
                                                <Download className="w-3.5 h-3.5" /> .MD Document
                                            </a>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Expense & Corporate Reimbursement Info */}
                <div className="bg-zinc-100 border border-zinc-300 rounded-2xl p-6 sm:p-8 mb-12">
                    <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-lg bg-zinc-950 text-white flex items-center justify-center shrink-0">
                            <ShieldCheck className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="font-bold text-zinc-950 font-grotesk text-lg mb-1">
                                Need to Expense This? (Corporate Reimbursement Guide)
                            </h4>
                            <p className="text-xs text-zinc-700 font-medium leading-relaxed mb-3">
                                Most enterprise buyers expense this toolkit under <strong>Professional Development</strong>, <strong>R&amp;D Tooling</strong>, or <strong>Software Subscriptions</strong>. A formal PDF invoice with tax details and transaction ID was automatically emailed to you via Stripe.
                            </p>
                            <div className="text-xs text-zinc-600 font-mono">
                                Vendor: Richard Ewing Consulting / RichardEwing.io • Classification: Executive Software &amp; Digital Operating Assets
                            </div>
                        </div>
                    </div>
                </div>

                {/* Advisory Next Step Banner */}
                <div className="bg-gradient-to-r from-zinc-950 to-violet-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
                    <div>
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-violet-300 block mb-2">
                            Need Richard to Review Your Actual Numbers?
                        </span>
                        <h3 className="text-2xl font-bold font-grotesk mb-2">
                            Book a $450 1-on-1 P&amp;L &amp; AI Tear-Down (or $2,500 Turnaround Sprint)
                        </h3>
                        <p className="text-zinc-300 text-sm font-medium max-w-xl">
                            Bring your completed spreadsheets or cloud/token invoices. In 60 minutes live on Zoom (or a 7-day forensic Turnaround Sprint), Richard personally audits your pricing tiers, Zombie Feature carry cost, and AI unit economics.
                        </p>
                    </div>
                    <div className="shrink-0 flex flex-col sm:flex-row gap-3">
                        <Link
                            href="/services#gut_check"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-zinc-950 font-bold hover:bg-zinc-100 transition-colors font-grotesk"
                        >
                            Book $450 Tear-Down <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

                {/* Google Preferred Source Retention Card */}
                <GooglePreferredBadge variant="card" className="mb-12" />
            </div>
            
            <Footer />
        </main>
    );
}
