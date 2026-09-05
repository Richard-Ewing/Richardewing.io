'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ScrollReveal } from '../components/magicui/scroll-reveal';
import { 
    ShieldCheck, 
    AlertOctagon, 
    Scale, 
    FileText, 
    CreditCard, 
    Cpu, 
    Lock, 
    FileSpreadsheet, 
    HelpCircle, 
    ShieldAlert, 
    ExternalLink,
    CheckCircle2
} from 'lucide-react';

export default function LegalPage() {
    const [activeSection, setActiveSection] = useState<string>('terms');

    const navigationItems = [
        { id: 'terms', label: '1. Terms & Conditions (TOC)' },
        { id: 'liability', label: '2. Liability Cap & Damages' },
        { id: 'disclaimers', label: '3. Advisory & Disclaimers' },
        { id: 'diagnostics', label: '4. Diagnostic Tools Non-Reliance' },
        { id: 'advisory', label: '5. SOW & Consulting Scope' },
        { id: 'refunds', label: '6. Digital Purchases & Refunds' },
        { id: 'ip', label: '7. IP & Anti-Scraping' },
        { id: 'arbitration', label: '8. Binding Arbitration & Class Waiver' },
        { id: 'privacy', label: '9. Privacy Policy (GDPR / CCPA)' },
        { id: 'indemnity', label: '10. User Indemnification' },
        { id: 'contact', label: '11. Legal Contact' },
    ];

    return (
        <main className="pt-28 pb-32 px-4 sm:px-6 min-h-screen bg-[#FDFBF7] text-zinc-900">
            <div className="max-w-5xl mx-auto w-full relative z-10">
                
                {/* Breadcrumbs */}
                <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-mono font-bold text-zinc-700 uppercase tracking-widest">
                    <Link href="/" className="hover:text-zinc-950 transition-colors">Home</Link>
                    <span>/</span>
                    <Link href="/framework" className="hover:text-zinc-950 transition-colors">Governance</Link>
                    <span>/</span>
                    <span className="text-zinc-950 font-extrabold">Master Legal Hub</span>
                </nav>

                {/* Hero Header */}
                <div className="border-b border-zinc-300 pb-8 mb-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-200 border border-zinc-300 text-zinc-900 text-xs font-mono font-bold uppercase tracking-wider mb-4">
                        <ShieldCheck className="w-3.5 h-3.5 text-cyan-800" />
                        <span>Sovereign Legal Governance &bull; Enterprise Compliance</span>
                    </div>
                    <h1 className="text-3xl sm:text-5xl font-grotesk font-bold text-zinc-950 tracking-tight mb-4">
                        Legal Hub, Terms of Use &amp; Privacy Architecture
                    </h1>
                    <p className="text-base sm:text-lg text-zinc-800 leading-relaxed font-medium max-w-3xl">
                        Official terms of conditions (TOC), enterprise advisory limitations, diagnostic non-reliance declarations, privacy policies, and binding dispute resolution governing all interactions with Richard Ewing.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 mt-6 text-xs font-mono text-zinc-600 font-semibold">
                        <span>Version: 3.4 (Production Hardened)</span>
                        <span>&bull;</span>
                        <span>Effective Date: September 3, 2026</span>
                        <span>&bull;</span>
                        <span>Governing Jurisdiction: State of Washington, USA</span>
                    </div>
                </div>

                {/* Executive Shield Notice Card */}
                <div className="bg-amber-50/80 border border-amber-300 rounded-2xl p-6 sm:p-8 mb-12 shadow-sm">
                    <div className="flex items-start gap-4">
                        <div className="p-2.5 rounded-xl bg-amber-200 text-amber-950 shrink-0 mt-1">
                            <AlertOctagon className="w-6 h-6" />
                        </div>
                        <div className="space-y-2">
                            <h2 className="text-lg font-grotesk font-bold text-zinc-950">
                                Binding Contractual Notice for All Visitors, Clients &amp; Users
                            </h2>
                            <p className="text-sm text-zinc-800 leading-relaxed font-medium">
                                By browsing this website, accessing any interactive diagnostic instrument (including PDI, AUEB, APER, or EV-SE), downloading research assets, creating a Vault account, or purchasing advisory sprints, you enter into a legally binding contract. If you are accessing this platform on behalf of a corporation, limited liability company, or institutional fund, you represent and warrant that you hold full corporate authority to bind that entity to these terms.
                            </p>
                            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono font-bold text-zinc-900">
                                <span className="flex items-center gap-1.5 text-amber-950">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-700" />
                                    Mandatory Individual Arbitration
                                </span>
                                <span className="flex items-center gap-1.5 text-amber-950">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-700" />
                                    Class Action Waiver
                                </span>
                                <span className="flex items-center gap-1.5 text-amber-950">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-700" />
                                    $100 / 12-Month Fee Liability Ceiling
                                </span>
                                <span className="flex items-center gap-1.5 text-amber-950">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-700" />
                                    Zero-AI Scraping Covenant
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Navigation Anchor Pill Bar */}
                <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border border-zinc-300 rounded-2xl p-3 mb-12 shadow-md">
                    <div className="text-xs font-mono font-bold text-zinc-600 uppercase tracking-wider px-2 mb-2">
                        Quick Table of Contents (TOC) Navigation:
                    </div>
                    <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
                        {navigationItems.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                onClick={() => setActiveSection(item.id)}
                                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold whitespace-nowrap transition-all ${
                                    activeSection === item.id
                                        ? 'bg-zinc-950 text-white shadow'
                                        : 'bg-zinc-100 text-zinc-800 hover:bg-zinc-200'
                                }`}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Main Legal Sections Container */}
                <div className="space-y-16">

                    {/* SECTION 1: Master Terms of Conditions */}
                    <section id="terms" className="scroll-mt-36 bg-white border border-zinc-300 rounded-3xl p-6 sm:p-10 shadow-sm">
                        <div className="flex items-center justify-between border-b border-zinc-200 pb-4 mb-6">
                            <div className="flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-cyan-100 text-cyan-950 flex items-center justify-center font-mono font-bold text-sm">
                                    01
                                </span>
                                <h2 className="text-2xl sm:text-3xl font-grotesk font-bold text-zinc-950">
                                    Master Terms of Service &amp; Acceptance (TOC)
                                </h2>
                            </div>
                            <span className="text-xs font-mono font-bold text-zinc-500 uppercase">Section 1</span>
                        </div>

                        {/* Plain English Translation Box */}
                        <div className="bg-cyan-50/60 border-l-4 border-cyan-700 p-4 rounded-r-xl mb-6 text-sm text-zinc-900 leading-relaxed font-medium">
                            <div className="font-bold text-cyan-950 uppercase tracking-wider text-xs mb-1 font-mono">
                                Plain English Human Translation (HWS v2.0):
                            </div>
                            By visiting this site, running any calculator, creating an account, or engaging Richard Ewing for advisory work, you agree to these operating terms. If you represent an organization, you confirm that you have the corporate authority to bind your organization. You agree not to scrape our site to train AI models, not to attempt cyber attacks on our systems, and not to redistribute our proprietary frameworks.
                        </div>

                        <div className="space-y-6 text-sm sm:text-base text-zinc-800 leading-relaxed">
                            <div>
                                <h3 className="text-base font-bold text-zinc-950 mb-2">1.1 Agreement to Terms</h3>
                                <p>
                                    These Terms of Service (these &ldquo;Terms&rdquo; or this &ldquo;Agreement&rdquo;) constitute a legally binding agreement between you (whether personally or on behalf of an entity, &ldquo;you&rdquo;, &ldquo;Client&rdquo;, or &ldquo;User&rdquo;) and Richard Ewing and his registered Washington State Limited Liability Company (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;, or &ldquo;Richard Ewing Advisory&rdquo;), concerning your access to and use of the website located at <code>https://www.richardewing.io</code> (the &ldquo;Site&rdquo;), including all interactive diagnostic tools, APIs, software platforms (such as Exogram and CareerWin), downloadable deliverables, and consulting engagements.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-base font-bold text-zinc-950 mb-2">1.2 Legal Capacity and Corporate Authority</h3>
                                <p>
                                    You represent and warrant that you are at least eighteen (18) years of age and possess the legal capacity to form a binding contract. If you access or use the Site or Services on behalf of a company, corporation, partnership, or other legal entity, you explicitly represent and warrant that you have full legal authority to bind that entity to these Terms. If you do not possess such authority, or if you do not agree with each and every term herein, you must immediately cease all access and use of the Site.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-base font-bold text-zinc-950 mb-2">1.3 Permitted and Prohibited Uses</h3>
                                <p className="mb-3">
                                    You are granted a limited, revocable, non-exclusive, non-transferable license to access the Site and use the interactive diagnostic calculators strictly for internal business evaluation. You expressly covenant and agree that you shall NOT:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-zinc-800">
                                    <li>Systematically retrieve data, content, formulas, or code to create or compile, directly or indirectly, a collection, compilation, database, or directory without prior express written permission.</li>
                                    <li>Ingest, feed, crawl, or scrape any text, formulas, frameworks, research, or diagnostic outputs into any machine learning dataset, large language model (LLM), or artificial intelligence training pipeline.</li>
                                    <li>Execute automated scripts, bots, spiders, or crawlers that generate artificial load, disrupt site availability, or bypass rate limits.</li>
                                    <li>Reverse engineer, decompile, disassemble, or derive the source code or proprietary scoring algorithms of any tool, including the Product Debt Index (PDI), AI Unit Economics Benchmark (AUEB), or Enterprise Value Scenario Engine (EV-SE).</li>
                                    <li>Use the Site or Services to develop, commercialize, or market any product, tool, or consulting offering that directly competes with Richard Ewing, Exogram, or CareerWin.</li>
                                    <li>Execute malicious payload injections, cross-site scripting, denial-of-service attacks, or unauthorized penetration testing against any server or API endpoint.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-base font-bold text-zinc-950 mb-2">1.4 User Authentication and Account Security</h3>
                                <p>
                                    Certain features, including the All-Access Vault and curriculum tracks, require authentication via Clerk or custom identity mechanisms. You are solely responsible for maintaining the confidentiality of your credentials and for all activities that occur under your account. You agree to notify us immediately at <code>richardewing@exogram.ai</code> of any unauthorized use or security compromise.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 2: Monetary Liability Cap & Damages Waiver */}
                    <section id="liability" className="scroll-mt-36 bg-white border border-red-200 rounded-3xl p-6 sm:p-10 shadow-sm">
                        <div className="flex items-center justify-between border-b border-red-100 pb-4 mb-6">
                            <div className="flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-red-100 text-red-950 flex items-center justify-center font-mono font-bold text-sm">
                                    02
                                </span>
                                <h2 className="text-2xl sm:text-3xl font-grotesk font-bold text-zinc-950">
                                    Absolute Limitation of Liability &amp; Monetary Cap
                                </h2>
                            </div>
                            <span className="text-xs font-mono font-bold text-red-700 uppercase">Section 2</span>
                        </div>

                        {/* Plain English Translation Box */}
                        <div className="bg-red-50/70 border-l-4 border-red-700 p-4 rounded-r-xl mb-6 text-sm text-zinc-900 leading-relaxed font-medium">
                            <div className="font-bold text-red-950 uppercase tracking-wider text-xs mb-1 font-mono">
                                Plain English Human Translation (HWS v2.0):
                            </div>
                            We hold ourselves to world-class engineering and analytical standards. However, in the event of any dispute or claim, our maximum financial liability to you is strictly capped at the actual amount of money you paid us in the past 12 months, or $100 if you only used free tools. Under no legal theory will we ever be responsible for lost company value, stock devaluation, missed funding rounds, cloud cost spikes, or lost business profits.
                        </div>

                        <div className="space-y-6 text-sm sm:text-base text-zinc-800 leading-relaxed">
                            <div className="p-4 bg-zinc-900 text-zinc-100 rounded-xl font-mono text-xs sm:text-sm leading-relaxed border border-zinc-800">
                                <strong>2.1 EXPRESS AGGREGATE MONETARY CEILING:</strong><br />
                                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE TOTAL, CUMULATIVE, AND AGGREGATE LIABILITY OF RICHARD EWING, HIS AFFILIATES, OFFICERS, DIRECTORS, CONTRACTORS, LICENSORS, AND SERVICE PROVIDERS, ARISING OUT OF OR IN CONNECTION WITH THE SITE, THE DIAGNOSTIC INSTRUMENTS, ADVISORY SERVICES, WRITTEN DELIVERABLES, OR THESE TERMS, REGARDLESS OF THE FORM OF ACTION (WHETHER IN CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY, STATUTORY VIOLATION, OR OTHERWISE), SHALL BE STRICTLY LIMITED TO AND SHALL NOT EXCEED THE GREATER OF: (A) THE TOTAL FEES ACTUALLY PAID BY YOU TO RICHARD EWING FOR THE SPECIFIC SERVICE OR PRODUCT GIVING RISE TO LIABILITY IN THE TWELVE (12) MONTHS IMMEDIATELY PRECEDING THE EVENT, OR (B) ONE HUNDRED UNITED STATES DOLLARS ($100.00 USD).
                            </div>

                            <div className="p-4 bg-zinc-900 text-zinc-100 rounded-xl font-mono text-xs sm:text-sm leading-relaxed border border-zinc-800">
                                <strong>2.2 COMPLETE WAIVER OF CONSEQUENTIAL AND VALUATION DAMAGES:</strong><br />
                                IN NO EVENT SHALL RICHARD EWING BE LIABLE TO YOU OR TO ANY THIRD PARTY FOR ANY INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO: LOST REVENUE, LOST OPERATING MARGINS, LOST ENTERPRISE VALUATION, IMPAIRMENT OF GOODWILL, LOSS OF DATA OR SYSTEM INTEGRITY, BUSINESS INTERRUPTION, LOSS OF REVENUE PER ENGINEER, CLOUD OR GPU COST SPIKES, THIRD-PARTY CLOUD PROVIDER CHARGES, FAILURE OF AUDIT CLEARANCE, OR EMPLOYEE SEVERANCE EXPENSES, EVEN IF ADVISED IN ADVANCE OF THE POSSIBILITY OF SUCH DAMAGES.
                            </div>

                            <div>
                                <h3 className="text-base font-bold text-zinc-950 mb-2">2.3 Essential Basis of the Bargain</h3>
                                <p>
                                    You acknowledge and agree that the financial limitations, liability caps, and risk allocations set forth in this Section are fundamental, non-negotiable components of the economic agreement between the parties. Without these strict limitations, Richard Ewing could not provide access to the diagnostic tools, software platforms, curriculum tracks, or advisory services at the prices and terms stated.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 3: Professional Advisory & Fiduciary Disclaimers */}
                    <section id="disclaimers" className="scroll-mt-36 bg-white border border-zinc-300 rounded-3xl p-6 sm:p-10 shadow-sm">
                        <div className="flex items-center justify-between border-b border-zinc-200 pb-4 mb-6">
                            <div className="flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-amber-100 text-amber-950 flex items-center justify-center font-mono font-bold text-sm">
                                    03
                                </span>
                                <h2 className="text-2xl sm:text-3xl font-grotesk font-bold text-zinc-950">
                                    Advisory Disclaimers &amp; Non-Fiduciary Status
                                </h2>
                            </div>
                            <span className="text-xs font-mono font-bold text-zinc-500 uppercase">Section 3</span>
                        </div>

                        {/* Plain English Translation Box */}
                        <div className="bg-amber-50/60 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-zinc-900 leading-relaxed font-medium">
                            <div className="font-bold text-amber-950 uppercase tracking-wider text-xs mb-1 font-mono">
                                Plain English Human Translation (HWS v2.0):
                            </div>
                            Richard Ewing is an AI Economist and software systems strategist, not your lawyer, certified public accountant (CPA), or investment broker. Nothing on this website, in any diagnostic score, or in any advisory sprint constitutes formal legal, SEC regulatory, tax, or investment advice. You and your leadership team make your own corporate decisions.
                        </div>

                        <div className="space-y-6 text-sm sm:text-base text-zinc-800 leading-relaxed">
                            <div>
                                <h3 className="text-base font-bold text-zinc-950 mb-2">3.1 &ldquo;As-Is&rdquo; and &ldquo;As-Available&rdquo; Provision</h3>
                                <p>
                                    All materials, diagnostic algorithms, reports, code blueprints, curriculum modules, and advisory opinions are provided strictly on an &ldquo;as-is&rdquo; and &ldquo;as-available&rdquo; basis. Richard Ewing expressly disclaims all warranties of any kind, whether express, implied, or statutory, including without limitation warranties of merchantability, fitness for a particular commercial purpose, title, accuracy, non-infringement, or uninterrupted availability.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-base font-bold text-zinc-950 mb-2">3.2 No Professional Fiduciary Relationship</h3>
                                <p>
                                    Neither your use of this Site nor your receipt of diagnostic calculations, written audit briefs, or verbal consulting advice creates an attorney-client, fiduciary, certified accounting, or registered investment advisory relationship. Richard Ewing does not provide formal legal opinions, audited financial balance sheets under GAAP/IFRS, or registered securities recommendations under the Securities Act of 1933 or the Investment Advisers Act of 1940.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-base font-bold text-zinc-950 mb-2">3.3 Independent Technical Verification Mandate</h3>
                                <p>
                                    You acknowledge that software engineering, cloud architecture, and artificial intelligence models are non-deterministic, rapidly evolving technologies. You agree that any architectural recommendations, prompt designs, caching patterns, or code blueprints delivered through this Site or during an advisory sprint must be independently reviewed, tested, and validated by your internal engineering team prior to staging or production deployment.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 4: Diagnostic Tools Non-Reliance */}
                    <section id="diagnostics" className="scroll-mt-36 bg-white border border-zinc-300 rounded-3xl p-6 sm:p-10 shadow-sm">
                        <div className="flex items-center justify-between border-b border-zinc-200 pb-4 mb-6">
                            <div className="flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-950 flex items-center justify-center font-mono font-bold text-sm">
                                    04
                                </span>
                                <h2 className="text-2xl sm:text-3xl font-grotesk font-bold text-zinc-950">
                                    Diagnostic Instruments &amp; Calculators Non-Reliance
                                </h2>
                            </div>
                            <span className="text-xs font-mono font-bold text-zinc-500 uppercase">Section 4</span>
                        </div>

                        {/* Plain English Translation Box */}
                        <div className="bg-emerald-50/60 border-l-4 border-emerald-700 p-4 rounded-r-xl mb-6 text-sm text-zinc-900 leading-relaxed font-medium">
                            <div className="font-bold text-emerald-950 uppercase tracking-wider text-xs mb-1 font-mono">
                                Plain English Human Translation (HWS v2.0):
                            </div>
                            Our 38 diagnostic tools (such as PDI, AUEB, APER, EV-SE, and the Prompt Injection Sandbox) are heuristic mathematical calculators. They project trends based on the assumptions and numbers you type into them. They do not guarantee that your code will not break, that your cloud bill will drop by an exact dollar figure, or that your security is completely bulletproof. You alone are responsible for your company decisions.
                        </div>

                        <div className="space-y-6 text-sm sm:text-base text-zinc-800 leading-relaxed">
                            <div>
                                <h3 className="text-base font-bold text-zinc-950 mb-2">4.1 Scope of Diagnostic Tools</h3>
                                <p>
                                    This Section applies to all 38 interactive tools, calculators, simulations, and benchmark scoring engines made available on <code>richardewing.io/tools</code>, including without limitation:
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                                    <div className="p-3 bg-zinc-50 border border-zinc-200 rounded-xl text-xs font-mono text-zinc-800">
                                        <strong>Product Debt Index (PDI&trade;):</strong> Heuristic modeling of technical debt and Technical Insolvency Dates.
                                    </div>
                                    <div className="p-3 bg-zinc-50 border border-zinc-200 rounded-xl text-xs font-mono text-zinc-800">
                                        <strong>AI Unit Economics Benchmark (AUEB&trade;):</strong> Mathematical modeling of API costs and margin erosion.
                                    </div>
                                    <div className="p-3 bg-zinc-50 border border-zinc-200 rounded-xl text-xs font-mono text-zinc-800">
                                        <strong>Revenue Per Engineer (APER&trade;):</strong> Headcount efficiency comparisons against industry cohorts.
                                    </div>
                                    <div className="p-3 bg-zinc-50 border border-zinc-200 rounded-xl text-xs font-mono text-zinc-800">
                                        <strong>Valuation Scenario Engine (EV-SE&trade;):</strong> Theoretical sensitivity modeling of software debt on enterprise value.
                                    </div>
                                    <div className="p-3 bg-zinc-50 border border-zinc-200 rounded-xl text-xs font-mono text-zinc-800">
                                        <strong>Prompt Injection Sandbox &amp; MCP Auditor:</strong> Heuristic attack simulation for testing AI security awareness.
                                    </div>
                                    <div className="p-3 bg-zinc-50 border border-zinc-200 rounded-xl text-xs font-mono text-zinc-800">
                                        <strong>Cloud Repatriation &amp; SLM Calculators:</strong> Cost simulations comparing API billing against self-hosted infrastructure.
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-base font-bold text-zinc-950 mb-2">4.2 Heuristic Nature &amp; Input Sensitivity</h3>
                                <p>
                                    All diagnostic calculations are generated using mathematical equations, empirical industry baselines, and user-supplied variable inputs. Variations in data entry, cloud provider discounting structures, architectural latency, or market conditions will dramatically alter results. Diagnostic calculations do NOT constitute factual representations of your corporate liabilities, audited accounting statements, or certified valuation appraisals.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-base font-bold text-zinc-950 mb-2">4.3 Cybersecurity &amp; Attack Sandbox Disclaimer</h3>
                                <p>
                                    Demonstration tools such as the Prompt Injection Sandbox and MCP Security Auditor are educational testbeds designed to highlight common failure modes in LLM inference pipelines. Successful simulation or passing a sandbox test does NOT certify that your software, application, or model context protocol (MCP) servers are secure against sophisticated threat actors, zero-day vulnerabilities, or adversarial prompt leakage.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-base font-bold text-zinc-950 mb-2">4.4 Full Waiver of Personnel and Restructuring Claims</h3>
                                <p>
                                    You expressly agree that you shall NOT make any claim against Richard Ewing arising out of any personnel termination, engineering restructuring, vendor contract cancellation, product sunsetting, or capital allocation decision executed by you or your organization following the use of any diagnostic tool or calculator.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 5: Advisory Engagements & SOW Terms */}
                    <section id="advisory" className="scroll-mt-36 bg-white border border-zinc-300 rounded-3xl p-6 sm:p-10 shadow-sm">
                        <div className="flex items-center justify-between border-b border-zinc-200 pb-4 mb-6">
                            <div className="flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-950 flex items-center justify-center font-mono font-bold text-sm">
                                    05
                                </span>
                                <h2 className="text-2xl sm:text-3xl font-grotesk font-bold text-zinc-950">
                                    Professional Advisory Engagements &amp; SOW Terms
                                </h2>
                            </div>
                            <span className="text-xs font-mono font-bold text-zinc-500 uppercase">Section 5</span>
                        </div>

                        {/* Plain English Translation Box */}
                        <div className="bg-indigo-50/60 border-l-4 border-indigo-700 p-4 rounded-r-xl mb-6 text-sm text-zinc-900 leading-relaxed font-medium">
                            <div className="font-bold text-indigo-950 uppercase tracking-wider text-xs mb-1 font-mono">
                                Plain English Human Translation (HWS v2.0):
                            </div>
                            Whether you book a $450 Gut-Check, a $2,500 Technical Insolvency Audit, or an ongoing Fractional Retainer, we are hired to analyze architecture and provide strategic clarity. We do not operate your production servers. If you need to reschedule a diagnostic working session, please provide at least 48 hours notice so we can reallocate executive time.
                        </div>

                        <div className="space-y-6 text-sm sm:text-base text-zinc-800 leading-relaxed">
                            <div>
                                <h3 className="text-base font-bold text-zinc-950 mb-2">5.1 Engagement Packages and Deliverables</h3>
                                <p className="mb-2">
                                    Commercial advisory offerings are structured into fixed-scope diagnostic packages and fractional executive leadership:
                                </p>
                                <ul className="list-disc pl-6 space-y-1.5 text-zinc-800 text-sm">
                                    <li><strong>Rapid Gut-Check Evaluation ($450):</strong> A 30-minute rapid review of AWS/API billing, model retries, and high-level architectural leak identification.</li>
                                    <li><strong>60-Minute Technical Insolvency Audit ($2,500):</strong> A deep working session utilizing PDI and AUEB to calculate Technical Insolvency Dates and gross margin drag, followed by an executive briefing.</li>
                                    <li><strong>Master Forensic Code &amp; AI Audit ($7,500):</strong> A multi-week forensic examination of API commitments, token leakages, model lock-in, and proprietary code architecture, concluding in a written remediation roadmap.</li>
                                    <li><strong>Fractional CPO/CTO Advisory Retainer ($10,000/month):</strong> Dedicated executive architectural direction, board-level EBITDA translation, and vendor extraction support, strictly capped to active clients.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-base font-bold text-zinc-950 mb-2">5.2 Client Control of Implementation</h3>
                                <p>
                                    All diagnostic audits, written memos, and strategic recommendations are advisory in nature. Client retains sole and complete operational discretion, control, and liability with respect to deploying code changes, refactoring microservices, altering cloud commitments, terminating third-party SaaS vendors, or restructuring technical headcount.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-base font-bold text-zinc-950 mb-2">5.3 Scheduling, Rescheduling and Cancellation Windows</h3>
                                <p>
                                    Because executive calendar slots are reserved exclusively upon payment:
                                </p>
                                <ul className="list-disc pl-6 space-y-1.5 text-zinc-800 text-sm mt-2">
                                    <li><strong>Notice Required:</strong> To reschedule an advisory session, Client must notify Richard Ewing in writing at <code>richardewing@exogram.ai</code> at least forty-eight (48) hours prior to the scheduled start time.</li>
                                    <li><strong>Forfeiture on Late Cancellation or No-Show:</strong> Rescheduling requests received less than 48 hours in advance, or failure to attend a scheduled session (&ldquo;no-show&rdquo;), shall result in full forfeiture of the session fee.</li>
                                    <li><strong>Retainer Termination:</strong> Monthly retainers require thirty (30) days advance written notice prior to the renewal date to terminate ongoing monthly billing.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 6: Commercial Purchases, Digital Content & Refund Policy */}
                    <section id="refunds" className="scroll-mt-36 bg-white border border-zinc-300 rounded-3xl p-6 sm:p-10 shadow-sm">
                        <div className="flex items-center justify-between border-b border-zinc-200 pb-4 mb-6">
                            <div className="flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-950 flex items-center justify-center font-mono font-bold text-sm">
                                    06
                                </span>
                                <h2 className="text-2xl sm:text-3xl font-grotesk font-bold text-zinc-950">
                                    Commercial Purchases, Digital Goods &amp; Refund Policy
                                </h2>
                            </div>
                            <span className="text-xs font-mono font-bold text-zinc-500 uppercase">Section 6</span>
                        </div>

                        {/* Plain English Translation Box */}
                        <div className="bg-emerald-50/60 border-l-4 border-emerald-700 p-4 rounded-r-xl mb-6 text-sm text-zinc-900 leading-relaxed font-medium">
                            <div className="font-bold text-emerald-950 uppercase tracking-wider text-xs mb-1 font-mono">
                                Plain English Human Translation (HWS v2.0):
                            </div>
                            Our digital curriculum, Vault access, and diagnostic tool accesses deliver instant access to proprietary trade knowledge and downloadable intellectual property. Because digital files cannot be un-downloaded, all digital purchases are final and non-refundable once access is delivered. If you have any billing question, email us directly before disputing a charge with your credit card company.
                        </div>

                        <div className="space-y-6 text-sm sm:text-base text-zinc-800 leading-relaxed">
                            <div>
                                <h3 className="text-base font-bold text-zinc-950 mb-2">6.1 Digital Products and Final Sale Rule</h3>
                                <p>
                                    All digital software passes, including the All-Access Vault Pass ($999.00), Enterprise Team License ($4,999.00), Single Curriculum Tracks ($149.00 - $349.00), and Diagnostic Tools Library Access ($199.00), constitute digital goods that provide immediate, irrevocable access to copyrighted intellectual property, research databases, and proprietary tools upon successful checkout. Consequently, ALL DIGITAL PURCHASES ARE FINAL, IRREVOCABLE, AND NON-REFUNDABLE ONCE ACCESS HAS BEEN PROVISIONED, except where non-waivable statutory rights apply under local consumer protection laws.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-base font-bold text-zinc-950 mb-2">6.2 Pre-Dispute Notification and Chargeback Prohibition</h3>
                                <p>
                                    You expressly agree to contact Richard Ewing in writing at <code>richardewing@exogram.ai</code> and allow thirty (30) business days to investigate and resolve any billing discrepancy, duplicate charge, or technical access issue prior to initiating a dispute, claim, or chargeback with your credit card company, issuing bank, or payment processor (Stripe).
                                </p>
                            </div>

                            <div>
                                <h3 className="text-base font-bold text-zinc-950 mb-2">6.3 Recovery of Fraudulent Chargeback Expenses</h3>
                                <p>
                                    In the event of an unmerited, fraudulent, or bad-faith chargeback filed after digital access has been logged and confirmed, Richard Ewing reserves the right to terminate all platform access, pursue collection remedies, and recover the full transaction amount plus statutory chargeback fees, bank administrative penalties, and reasonable attorneys&rsquo; fees incurred in defending the legitimate transaction.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 7: Intellectual Property & Anti-Scraping */}
                    <section id="ip" className="scroll-mt-36 bg-white border border-zinc-300 rounded-3xl p-6 sm:p-10 shadow-sm">
                        <div className="flex items-center justify-between border-b border-zinc-200 pb-4 mb-6">
                            <div className="flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-purple-100 text-purple-950 flex items-center justify-center font-mono font-bold text-sm">
                                    07
                                </span>
                                <h2 className="text-2xl sm:text-3xl font-grotesk font-bold text-zinc-950">
                                    Intellectual Property &amp; Anti-Scraping Covenants
                                </h2>
                            </div>
                            <span className="text-xs font-mono font-bold text-zinc-500 uppercase">Section 7</span>
                        </div>

                        {/* Plain English Translation Box */}
                        <div className="bg-purple-50/60 border-l-4 border-purple-700 p-4 rounded-r-xl mb-6 text-sm text-zinc-900 leading-relaxed font-medium">
                            <div className="font-bold text-purple-950 uppercase tracking-wider text-xs mb-1 font-mono">
                                Plain English Human Translation (HWS v2.0):
                            </div>
                            All frameworks, trademarks, software code, curriculum tracks, and diagnostic formulas are the exclusive intellectual property of Richard Ewing. You are welcome to study them for your company, but you may not rebrand them, resell them, or scrape them to train an AI model without an express commercial license agreement.
                        </div>

                        <div className="space-y-6 text-sm sm:text-base text-zinc-800 leading-relaxed">
                            <div>
                                <h3 className="text-base font-bold text-zinc-950 mb-2">7.1 Proprietary Trademarks</h3>
                                <p className="mb-3">
                                    The following marks, logos, diagnostic names, and operational frameworks are trademarks and proprietary intellectual property of Richard Ewing, protected under United States and international trademark treaties:
                                </p>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                                    <div className="p-3 border border-zinc-300 rounded-xl bg-zinc-50 font-mono">
                                        <div className="font-bold text-zinc-950 text-sm">APER&trade;</div>
                                        <div className="text-[10px] text-zinc-600 uppercase">Revenue Per Engineer</div>
                                    </div>
                                    <div className="p-3 border border-zinc-300 rounded-xl bg-zinc-50 font-mono">
                                        <div className="font-bold text-zinc-950 text-sm">AUEB&trade;</div>
                                        <div className="text-[10px] text-zinc-600 uppercase">AI Unit Economics Benchmark</div>
                                    </div>
                                    <div className="p-3 border border-zinc-300 rounded-xl bg-zinc-50 font-mono">
                                        <div className="font-bold text-zinc-950 text-sm">PDI&trade;</div>
                                        <div className="text-[10px] text-zinc-600 uppercase">Product Debt Index</div>
                                    </div>
                                    <div className="p-3 border border-zinc-300 rounded-xl bg-zinc-50 font-mono">
                                        <div className="font-bold text-zinc-950 text-sm">EV-SE&trade;</div>
                                        <div className="text-[10px] text-zinc-600 uppercase">Valuation Scenario Engine</div>
                                    </div>
                                    <div className="p-3 border border-zinc-300 rounded-xl bg-zinc-50 font-mono">
                                        <div className="font-bold text-zinc-950 text-sm">Q-PEP&trade;</div>
                                        <div className="text-[10px] text-zinc-600 uppercase">Quarterly Protocol</div>
                                    </div>
                                    <div className="p-3 border border-zinc-300 rounded-xl bg-zinc-50 font-mono">
                                        <div className="font-bold text-zinc-950 text-sm">AUDIT&trade;</div>
                                        <div className="text-[10px] text-zinc-600 uppercase">Interview Protocol</div>
                                    </div>
                                    <div className="p-3 border border-zinc-300 rounded-xl bg-zinc-50 font-mono">
                                        <div className="font-bold text-zinc-950 text-sm">Exogram&trade;</div>
                                        <div className="text-[10px] text-zinc-600 uppercase">AI Governance Platform</div>
                                    </div>
                                    <div className="p-3 border border-zinc-300 rounded-xl bg-zinc-50 font-mono">
                                        <div className="font-bold text-zinc-950 text-sm">CareerWin&trade;</div>
                                        <div className="text-[10px] text-zinc-600 uppercase">Career Intelligence</div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-base font-bold text-zinc-950 mb-2">7.2 Copyright and Exclusive Educational License</h3>
                                <p>
                                    All curriculum modules (including 23+ authority tracks and 293+ lessons), whitepapers, architecture diagrams, benchmark studies, and software documentation are copyrighted original works of Richard Ewing (&copy; 2026 Richard Ewing. All rights reserved). Purchasing a curriculum pass or Vault license grants you a personal or internal enterprise single-seat viewing license. It does NOT convey ownership, resale rights, or permission to rebrand the materials as your own.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-base font-bold text-zinc-950 mb-2">7.3 Strict AI Scraping &amp; Training Prohibition</h3>
                                <p>
                                    You are strictly prohibited from using automated web scrapers, bots, indexing scripts, or AI ingestion tools to harvest, summarize, or extract text, diagrams, formulas, or datasets from this Site for the purpose of training, fine-tuning, evaluating, or aligning any artificial intelligence model, foundation model, or machine learning algorithm. Commercial AI licensing inquiries must be directed to <code>richardewing@exogram.ai</code>.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 8: Binding Arbitration & Class Action Waiver */}
                    <section id="arbitration" className="scroll-mt-36 bg-white border border-zinc-300 rounded-3xl p-6 sm:p-10 shadow-sm">
                        <div className="flex items-center justify-between border-b border-zinc-200 pb-4 mb-6">
                            <div className="flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-cyan-100 text-cyan-950 flex items-center justify-center font-mono font-bold text-sm">
                                    08
                                </span>
                                <h2 className="text-2xl sm:text-3xl font-grotesk font-bold text-zinc-950">
                                    Dispute Resolution, Mandatory Arbitration &amp; Class Waiver
                                </h2>
                            </div>
                            <span className="text-xs font-mono font-bold text-cyan-800 uppercase">Section 8</span>
                        </div>

                        {/* Plain English Translation Box */}
                        <div className="bg-cyan-50/60 border-l-4 border-cyan-700 p-4 rounded-r-xl mb-6 text-sm text-zinc-900 leading-relaxed font-medium">
                            <div className="font-bold text-cyan-950 uppercase tracking-wider text-xs mb-1 font-mono">
                                Plain English Human Translation (HWS v2.0):
                            </div>
                            If any disagreement arises, we first commit to a 30-day informal discussion in good faith to resolve it reasonably. If we cannot reach an agreement, any claim must be resolved through confidential individual binding arbitration in Washington State, rather than in a courtroom before a jury. Class action lawsuits and representative actions are strictly prohibited.
                        </div>

                        <div className="space-y-6 text-sm sm:text-base text-zinc-800 leading-relaxed">
                            <div>
                                <h3 className="text-base font-bold text-zinc-950 mb-2">8.1 Mandatory Informal Negotiation Window</h3>
                                <p>
                                    Prior to initiating any formal arbitration proceeding, you and Richard Ewing agree to first attempt to resolve any dispute, controversy, or claim in good faith through confidential informal discussions for a minimum period of thirty (30) calendar days following written notice sent via email to <code>richardewing@exogram.ai</code>.
                                </p>
                            </div>

                            <div className="p-4 bg-zinc-900 text-zinc-100 rounded-xl font-mono text-xs sm:text-sm leading-relaxed border border-zinc-800">
                                <strong>8.2 MANDATORY INDIVIDUAL BINDING ARBITRATION:</strong><br />
                                If a dispute is not resolved during the informal negotiation period, it shall be finally settled through confidential, individual, and binding arbitration administered by the American Arbitration Association (&ldquo;AAA&rdquo;) under its Commercial Arbitration Rules, or by JAMS, before a single neutral arbitrator. The seat and legal place of arbitration shall be within the State of Washington, United States. The arbitration proceedings, filings, and awards shall be conducted in the English language and kept strictly confidential.
                            </div>

                            <div className="p-4 bg-zinc-900 text-zinc-100 rounded-xl font-mono text-xs sm:text-sm leading-relaxed border border-zinc-800">
                                <strong>8.3 CLASS ACTION AND REPRESENTATIVE PROCEEDING WAIVER:</strong><br />
                                ALL CLAIMS AND DISPUTES WITHIN THE SCOPE OF THIS AGREEMENT MUST BE ARBITRATED ON AN INDIVIDUAL BASIS AND NOT ON A CLASS, COLLECTIVE, CONSOLIDATED, OR REPRESENTATIVE BASIS. YOU AND RICHARD EWING MUTUALLY WAIVE ANY RIGHT TO COMMENCE, JOIN, OR PARTICIPATE AS A PLAINTIFF OR CLASS MEMBER IN ANY CLASS ACTION, COLLECTIVE ACTION, PRIVATE ATTORNEY GENERAL ACTION, OR OTHER CONSOLIDATED LAWSUIT AGAINST THE OTHER PARTY.
                            </div>

                            <div>
                                <h3 className="text-base font-bold text-zinc-950 mb-2">8.4 Mutual Waiver of Jury Trial</h3>
                                <p>
                                    TO THE FULLEST EXTENT PERMITTED BY LAW, YOU AND RICHARD EWING HEREBY WAIVE ANY CONSTITUTIONAL AND STATUTORY RIGHTS TO A TRIAL BY JURY IN ANY ACTION OR PROCEEDING ARISING OUT OF OR RELATING TO THIS SITE, THE SERVICES, OR THESE TERMS.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-base font-bold text-zinc-950 mb-2">8.5 Governing Law and Statute of Limitations</h3>
                                <p>
                                    These Terms and any dispute arising hereunder shall be governed by and construed in accordance with the laws of the State of Washington, United States, without regard to principles of conflicts of law. You agree that regardless of any statute or law to the contrary, any claim or cause of action arising out of or related to use of the Site or Services must be filed within one (1) year after such claim or cause of action arose, or be forever barred.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 9: Privacy Policy (GDPR / CCPA) */}
                    <section id="privacy" className="scroll-mt-36 bg-white border border-zinc-300 rounded-3xl p-6 sm:p-10 shadow-sm">
                        <div className="flex items-center justify-between border-b border-zinc-200 pb-4 mb-6">
                            <div className="flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-950 flex items-center justify-center font-mono font-bold text-sm">
                                    09
                                </span>
                                <h2 className="text-2xl sm:text-3xl font-grotesk font-bold text-zinc-950">
                                    Privacy Policy &amp; Data Protection (GDPR &amp; CCPA/CPRA)
                                </h2>
                            </div>
                            <span className="text-xs font-mono font-bold text-emerald-800 uppercase">Section 9</span>
                        </div>

                        {/* Plain English Translation Box */}
                        <div className="bg-emerald-50/60 border-l-4 border-emerald-700 p-4 rounded-r-xl mb-6 text-sm text-zinc-900 leading-relaxed font-medium">
                            <div className="font-bold text-emerald-950 uppercase tracking-wider text-xs mb-1 font-mono">
                                Plain English Human Translation (HWS v2.0):
                            </div>
                            We respect your privacy completely. We do not sell your personal data to data brokers or third parties. We use privacy-friendly analytics (Plausible and PostHog) to understand what frameworks are useful. We do not ingest your confidential codebase code into public AI models. All credit card transactions are processed securely via Stripe. If you ever want your email or account deleted, email us and we will delete it within 30 days.
                        </div>

                        <div className="space-y-6 text-sm sm:text-base text-zinc-800 leading-relaxed">
                            <div>
                                <h3 className="text-base font-bold text-zinc-950 mb-2">9.1 Data Controller Identification</h3>
                                <p>
                                    The Data Controller responsible for personal data processed through this Site is Richard Ewing (operating individually and through his registered Washington State Limited Liability Company, as Richard Ewing Advisory and Exogram). Inquiries regarding data protection, access, or deletion may be addressed to <code>richardewing@exogram.ai</code>.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-base font-bold text-zinc-950 mb-2">9.2 Categories of Personal Data Collected</h3>
                                <ul className="list-disc pl-6 space-y-2 text-zinc-800 text-sm">
                                    <li><strong>Contact and Identity Data:</strong> Name, work email address, title, company name, and LinkedIn URL submitted when subscribing to briefs, booking advisory sessions, or creating a Vault account.</li>
                                    <li><strong>Transaction Records:</strong> Billing addresses, Stripe customer identifiers, and product purchase history. We do NOT collect or store raw credit card numbers; all payment card data is processed directly by Stripe under PCI-DSS Level 1 compliance.</li>
                                    <li><strong>Telemetry and Usage Data:</strong> Anonymized technical telemetry including pages visited, referral paths, operating system, and interaction events recorded via privacy-focused analytics tools (Plausible Analytics and PostHog). IP addresses are anonymized.</li>
                                    <li><strong>Client Diagnostic Inputs:</strong> Numerical data entered into calculators (such as engineering headcount, cloud bill estimates, ARR). Calculations are performed client-side or ephemerally and are not linked to public identity profiles without user consent.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-base font-bold text-zinc-950 mb-2">9.3 Lawful Bases for Processing (GDPR Article 6)</h3>
                                <p>
                                    Under the European General Data Protection Regulation (GDPR), we process personal data under the following legal bases:
                                </p>
                                <ul className="list-disc pl-6 space-y-1.5 text-zinc-800 text-sm mt-2">
                                    <li><strong>Contractual Performance (Art. 6(1)(b)):</strong> To provision Vault access, process transactions, deliver advisory audits, and fulfill client agreements.</li>
                                    <li><strong>Legitimate Interests (Art. 6(1)(f)):</strong> To maintain site security, detect and prevent cyber abuse or scraping, and optimize framework usability.</li>
                                    <li><strong>Explicit Consent (Art. 6(1)(a)):</strong> For optional newsletter distribution and direct advisory inquiries, which you may revoke at any time.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-base font-bold text-zinc-950 mb-2">9.4 Third-Party Sub-Processors</h3>
                                <p className="mb-2">
                                    We partner with reputable enterprise sub-processors to power platform infrastructure:
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-zinc-800">
                                    <div className="p-3 bg-zinc-50 border border-zinc-200 rounded-lg">
                                        <strong>Stripe:</strong> Payment gateway and PCI-compliant transaction processing.
                                    </div>
                                    <div className="p-3 bg-zinc-50 border border-zinc-200 rounded-lg">
                                        <strong>Clerk:</strong> User authentication, session management, and credential security.
                                    </div>
                                    <div className="p-3 bg-zinc-50 border border-zinc-200 rounded-lg">
                                        <strong>PostHog &amp; Plausible:</strong> Privacy-preserving product telemetry and analytics.
                                    </div>
                                    <div className="p-3 bg-zinc-50 border border-zinc-200 rounded-lg">
                                        <strong>Vercel &amp; Supabase:</strong> Cloud edge hosting, database operations, and server infrastructure.
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-base font-bold text-zinc-950 mb-2">9.5 Your Rights under GDPR &amp; CCPA/CPRA</h3>
                                <p className="mb-2">
                                    Depending on your location, you have enforceable legal rights regarding your personal information:
                                </p>
                                <ul className="list-disc pl-6 space-y-1.5 text-zinc-800 text-sm">
                                    <li><strong>Right of Access &amp; Portability:</strong> The right to request copies of the personal data we hold about you.</li>
                                    <li><strong>Right to Rectification:</strong> The right to request correction of inaccurate personal information.</li>
                                    <li><strong>Right to Erasure (&ldquo;Right to be Forgotten&rdquo;):</strong> The right to request that we delete your personal data.</li>
                                    <li><strong>Right to Opt-Out of Sale / Sharing:</strong> We do NOT sell, rent, or share personal data for monetary or other consideration under the California Consumer Privacy Act (CCPA/CPRA).</li>
                                    <li><strong>Non-Discrimination:</strong> We will not discriminate against you in pricing or services for exercising any privacy right.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-base font-bold text-zinc-950 mb-2">9.6 Exercising Privacy Rights</h3>
                                <p>
                                    To submit a verified data subject request for access, correction, or deletion, please email <code>richardewing@exogram.ai</code> with the subject line &ldquo;Privacy Rights Request&rdquo;. We will respond within thirty (30) calendar days as required by law.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 10: User Indemnification */}
                    <section id="indemnity" className="scroll-mt-36 bg-white border border-zinc-300 rounded-3xl p-6 sm:p-10 shadow-sm">
                        <div className="flex items-center justify-between border-b border-zinc-200 pb-4 mb-6">
                            <div className="flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-zinc-200 text-zinc-950 flex items-center justify-center font-mono font-bold text-sm">
                                    10
                                </span>
                                <h2 className="text-2xl sm:text-3xl font-grotesk font-bold text-zinc-950">
                                    User Defense &amp; Indemnification
                                </h2>
                            </div>
                            <span className="text-xs font-mono font-bold text-zinc-600 uppercase">Section 10</span>
                        </div>

                        {/* Plain English Translation Box */}
                        <div className="bg-zinc-100 border-l-4 border-zinc-700 p-4 rounded-r-xl mb-6 text-sm text-zinc-900 leading-relaxed font-medium">
                            <div className="font-bold text-zinc-950 uppercase tracking-wider text-xs mb-1 font-mono">
                                Plain English Human Translation (HWS v2.0):
                            </div>
                            If a third party brings a claim or lawsuit against Richard Ewing because you broke these rules, misused our calculators, or carried out business actions (like firing an engineer or breaking a vendor contract) based on site information, you agree to step in, defend us, and cover any resulting damages and legal costs.
                        </div>

                        <div className="space-y-4 text-sm sm:text-base text-zinc-800 leading-relaxed">
                            <p>
                                You agree to defend, indemnify, and hold harmless Richard Ewing, his affiliates, licensors, contractors, and agents from and against any and all third-party claims, liabilities, damages, losses, costs, expenses, and fees (including reasonable attorneys&rsquo; fees and court costs) resulting from or arising out of:
                            </p>
                            <ol className="list-decimal pl-6 space-y-2 text-zinc-800">
                                <li>Your violation or breach of any provision of these Terms or applicable law;</li>
                                <li>Your access to or use of the Site, the diagnostic instruments, or written advisory deliverables;</li>
                                <li>Any corporate action, engineering refactor, architectural deployment, employee termination, or vendor dispute implemented by you or your organization;</li>
                                <li>Your unauthorized scraping, harvesting, ingestion, or redistribution of proprietary platform IP;</li>
                                <li>Any dispute between you and any third party regarding intellectual property or data submitted to the Site.</li>
                            </ol>
                        </div>
                    </section>

                    {/* SECTION 11: Legal Notices & Official Contact */}
                    <section id="contact" className="scroll-mt-36 bg-zinc-950 text-zinc-200 rounded-3xl p-6 sm:p-10 shadow-xl border border-zinc-800">
                        <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-6">
                            <div className="flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-zinc-800 text-cyan-400 flex items-center justify-center font-mono font-bold text-sm">
                                    11
                                </span>
                                <h2 className="text-2xl sm:text-3xl font-grotesk font-bold text-white">
                                    Legal Notices, Severability &amp; Contact
                                </h2>
                            </div>
                            <span className="text-xs font-mono font-bold text-zinc-400 uppercase">Section 11</span>
                        </div>

                        <div className="space-y-6 text-sm sm:text-base text-zinc-300 leading-relaxed">
                            <div>
                                <h3 className="text-base font-bold text-white mb-2">11.1 Severability and Integration</h3>
                                <p>
                                    These Terms, together with any executed Master Statement of Work (SOW) or written advisory agreement, constitute the entire agreement between you and Richard Ewing regarding the Site and Services. If any provision of these Terms is determined by an arbitrator or court of competent jurisdiction to be unlawful, void, or unenforceable, that provision shall be deemed severable and shall not affect the validity and enforceability of any remaining provisions.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-base font-bold text-white mb-2">11.2 Modifications to Terms</h3>
                                <p>
                                    We reserve the right to revise or update these Terms at any time to reflect changing regulatory requirements, legal precedents, or platform capabilities. Continued access to or use of the Site following the posting of updated Terms constitutes your irrevocable acceptance of the modified Terms.
                                </p>
                            </div>

                            <div className="pt-4 border-t border-zinc-800">
                                <h3 className="text-base font-bold text-white mb-3">11.3 Official Legal Contact</h3>
                                <p className="text-zinc-400 text-sm mb-4">
                                    For official legal inquiries, formal notices, privacy requests, or arbitration notifications:
                                </p>
                                <div className="inline-flex flex-col sm:flex-row gap-4 items-start sm:items-center bg-zinc-900 border border-zinc-800 p-4 rounded-xl">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                                        <span className="text-xs font-mono font-bold text-zinc-400 uppercase">Designated Legal Email:</span>
                                    </div>
                                    <a
                                        href="mailto:richardewing@exogram.ai"
                                        className="text-cyan-400 font-mono font-bold text-sm sm:text-base hover:text-cyan-300 transition-colors underline"
                                    >
                                        richardewing@exogram.ai
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>

                {/* Footer Signature Box */}
                <div className="mt-16 pt-8 border-t border-zinc-300 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-600 font-bold">
                    <span>Richard Ewing Advisory &bull; Exogram &bull; CareerWin</span>
                    <span>&copy; 2026 Richard Ewing. All rights reserved.</span>
                </div>

            </div>
        </main>
    );
}

