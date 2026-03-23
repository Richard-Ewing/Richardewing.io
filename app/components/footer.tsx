'use client';

import Link from 'next/link';
import { NewsletterSignup } from './NewsletterSignup';
import Image from 'next/image';

export function Footer() {
    return (
        <footer className="border-t border-white/10 pt-16 pb-12 mt-20 bg-black/20 backdrop-blur-sm">
            <div className="page-container">

                {/* Main footer grid */}
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 mb-12">

                    {/* Identity */}
                    <div className="col-span-2 md:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                                <span className="text-xl">RE</span>
                            </div>
                            <div>
                                <div className="font-semibold text-white font-grotesk">Richard Ewing</div>
                                <div className="text-xs text-gray-500 font-mono">Product Economist</div>
                            </div>
                        </div>
                        <p className="text-gray-500 text-sm">
                            I audit engineering spend and surface capital risks.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-xs text-gray-500 uppercase tracking-wide mb-4 font-mono">Intervention</h4>
                        <ul className="space-y-2 text-sm font-grotesk">
                            <li><Link href="/start-here" className="text-cyan-400 hover:text-white transition-colors font-bold">→ Start Here</Link></li>
                            <li><Link href="/advisory" className="text-gray-400 hover:text-white transition-colors">Advisory Services</Link></li>
                            <li><Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
                            <li><Link href="/case-studies" className="text-gray-400 hover:text-white transition-colors">Case Studies</Link></li>
                            <li><Link href="/briefings" className="text-gray-400 hover:text-white transition-colors">Briefings</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs text-gray-500 uppercase tracking-wide mb-4 font-mono">Intelligence</h4>
                        <ul className="space-y-2 text-sm font-grotesk">
                            <li><Link href="/doctrine" className="text-gray-400 hover:text-white transition-colors">Doctrine</Link></li>
                            <li><Link href="/articles" className="text-gray-400 hover:text-white transition-colors">Canonical Hub</Link></li>
                            <li><Link href="/glossary" className="text-gray-400 hover:text-white transition-colors">Glossary (350+)</Link></li>
                            <li><Link href="/curriculum" className="text-gray-400 hover:text-white transition-colors">Curriculum</Link></li>
                            <li><Link href="/resources" className="text-gray-400 hover:text-white transition-colors">Resource Hub</Link></li>
                            <li><Link href="/exogram" className="text-gray-400 hover:text-white transition-colors">Exogram</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs text-cyan-400 uppercase tracking-wide mb-4 font-mono">Free Tools</h4>
                        <ul className="space-y-2 text-sm font-grotesk">
                            <li><Link href="/tools/pdi" className="text-gray-400 hover:text-white transition-colors">Product Debt Index</Link></li>
                            <li><Link href="/tools/aueb" className="text-gray-400 hover:text-white transition-colors">AI Unit Economics</Link></li>
                            <li><Link href="/tools/audit-interview" className="text-gray-400 hover:text-white transition-colors">Audit Interview</Link></li>
                            <li><Link href="/tools/aper" className="text-gray-400 hover:text-white transition-colors">APER Diagnostic</Link></li>
                            <li><Link href="/tools/ev-se" className="text-gray-400 hover:text-white transition-colors">Evergreen Ratio</Link></li>
                            <li><Link href="/checklist" className="text-gray-400 hover:text-white transition-colors">R&D Audit Checklist</Link></li>
                            <li><Link href="/compare" className="text-gray-400 hover:text-white transition-colors">Tool Comparisons</Link></li>
                            <li><Link href="/industries" className="text-gray-400 hover:text-white transition-colors">Industry Verticals</Link></li>
                            <li><Link href="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
                        </ul>
                    </div>

                    {/* Stay Current */}
                    <div className="col-span-2 lg:col-span-1">
                        <h4 className="text-xs text-purple-400 uppercase tracking-wide mb-4 font-mono">Stay Current</h4>
                        <p className="text-gray-400 text-sm mb-4">
                            Monthly analysis of why products fail economically.
                        </p>
                        <NewsletterSignup variant="compact" />
                    </div>

                </div>

                {/* As Seen In */}
                <div className="py-8 border-y border-white/5 mb-8">
                    <p className="text-xs text-gray-500 uppercase tracking-widest text-center mb-6 font-mono">
                        Published In
                    </p>
                    <div className="flex items-center justify-center gap-8 flex-wrap">
                        <a href="https://www.cio.com/author/richard-ewing/" target="_blank" rel="noopener noreferrer" aria-label="CIO.com" className="opacity-50 hover:opacity-100 transition-all">
                            <Image src="/logos/cio-logo.svg" alt="CIO.com" width={60} height={20} className="h-6 w-auto" />
                        </a>
                        <a href="https://builtin.com/authors/richard-ewing" target="_blank" rel="noopener noreferrer" aria-label="Built In" className="opacity-50 hover:opacity-100 transition-all">
                            <Image src="/logos/builtin-logo.svg" alt="Built In" width={80} height={20} className="h-6 w-auto" />
                        </a>
                        <a href="https://www.mindtheproduct.com/author/richard-ewing/" target="_blank" rel="noopener noreferrer" aria-label="Mind the Product" className="opacity-50 hover:opacity-100 transition-all">
                            <Image src="/logos/mindtheproduct-logo.svg" alt="Mind the Product" width={50} height={20} className="h-6 w-auto" />
                        </a>
                        <a href="https://hackernoon.com/u/richardewing" target="_blank" rel="noopener noreferrer" aria-label="HackerNoon" className="opacity-50 hover:opacity-100 transition-all">
                            <Image src="/logos/hackernoon-logo.svg" alt="HackerNoon" width={100} height={20} className="h-6 w-auto" />
                        </a>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
                    <p>© 2026 Richard Ewing. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <Link href="/legal" className="hover:text-white transition-colors">Legal & Privacy</Link>
                        <Link href="https://linkedin.com/in/richard-ewing-mba" target="_blank" className="hover:text-white transition-colors">LinkedIn</Link>
                        <Link href="/exogram" className="hover:text-white transition-colors">Exogram System</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}
