'use client';

import Link from 'next/link';
import { LeadMagnetCTA } from './LeadMagnetCTA';
import Image from 'next/image';

export function Footer() {
    return (
        <footer className="border-t border-zinc-400 pt-16 pb-12 mt-20 bg-white/80">
            <div className="page-container">

                {/* Production AI Governance Framework Hook */}
                <div className="mb-12 pb-8 border-b border-zinc-300 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-zinc-900 font-medium text-sm">
                        Part of the <span className="text-zinc-950 font-bold font-semibold">Production AI Governance Framework</span>.
                    </p>
                    <Link 
                        href="/framework" 
                        className="inline-flex items-center gap-1.5 text-cyan-900 font-extrabold hover:text-cyan-950 transition-colors text-sm font-semibold uppercase tracking-wider font-bold"
                    >
                        Explore the Framework <span className="text-lg">→</span>
                    </Link>
                </div>

                {/* Main footer grid */}
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 mb-12">

                    {/* Identity */}
                    <div className="col-span-2 md:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                                <span className="text-xl">RE</span>
                            </div>
                            <div>
                                <div className="font-semibold text-zinc-900 font-grotesk">Richard Ewing</div>
                                <div className="text-xs font-bold text-zinc-950 font-mono">AI Economist</div>
                            </div>
                        </div>
                        <p className="text-zinc-950 text-sm">
                            I audit engineering spend and surface capital risks.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wide mb-4 font-mono">Operations</h4>
                        <ul className="space-y-2 text-sm font-semibold font-grotesk">
                            <li><Link href="/tools" className="text-zinc-950 hover:text-zinc-900 transition-colors">Diagnostics</Link></li>
                            <li><Link href="/framework" className="text-zinc-950 hover:text-zinc-900 transition-colors">Framework</Link></li>
                            <li><Link href="/research" className="text-zinc-950 hover:text-zinc-900 transition-colors">Research</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wide mb-4 font-mono">Enforcement</h4>
                        <ul className="space-y-2 text-sm font-semibold font-grotesk">
                            <li><Link href="/start-here" className="text-cyan-900 font-extrabold hover:text-zinc-900 transition-colors">Start Here</Link></li>
                            <li><Link href="/exogram" className="text-purple-900 font-extrabold hover:text-zinc-900 transition-colors">Exogram Platform</Link></li>
                            <li><Link href="/framework/runtime-governance" className="text-zinc-950 hover:text-zinc-900 transition-colors">Runtime Governance</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wide mb-4 font-mono">Advisory & Info</h4>
                        <ul className="space-y-2 text-sm font-semibold font-grotesk">
                            <li><Link href="/about" className="text-zinc-950 hover:text-zinc-900 transition-colors">About</Link></li>
                            <li><Link href="/articles" className="text-zinc-950 hover:text-zinc-900 transition-colors">Articles</Link></li>
                            <li><Link href="/curriculum" className="text-zinc-950 hover:text-zinc-900 transition-colors">Curriculum</Link></li>
                            <li><Link href="/contact" className="text-zinc-950 hover:text-zinc-900 transition-colors">Contact</Link></li>
                            <li><Link href="/partner" className="text-zinc-950 hover:text-zinc-900 transition-colors">Partner</Link></li>
                            <li><Link href="/services" className="text-[var(--accent-crimson)] font-bold hover:opacity-80 transition-colors">Book an Audit</Link></li>
                        </ul>
                    </div>

                    {/* Stay Current */}
                    <div className="col-span-2 lg:col-span-1">
                        <h4 className="text-xs font-bold text-zinc-900 font-bold uppercase tracking-wide mb-4 font-mono">Toolkit</h4>
                        <p className="text-zinc-950 text-sm font-semibold mb-4">
                            Get the Executive Diagnostic Toolkit and monthly analysis.
                        </p>
                        <LeadMagnetCTA variant="compact" />
                    </div>

                </div>

                {/* As Seen In */}
                <div className="py-8 border-y border-zinc-400 mb-8">
                    <p className="text-xs font-bold text-zinc-900 font-bold uppercase tracking-widest text-center mb-6 font-mono">
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
                        <a href="https://hackernoon.com/u/richardewing1" target="_blank" rel="noopener noreferrer" aria-label="HackerNoon" className="opacity-50 hover:opacity-100 transition-all">
                            <Image src="/logos/hackernoon-logo.svg" alt="HackerNoon" width={100} height={20} className="h-6 w-auto" />
                        </a>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-semibold text-zinc-900 font-medium">
                    <p>© 2026 Richard Ewing. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <Link href="/legal" className="hover:text-zinc-900 transition-colors">Legal & Privacy</Link>
                        <Link href="https://linkedin.com/in/richard-ewing-mba" target="_blank" className="hover:text-zinc-900 transition-colors">LinkedIn</Link>
                        <Link href="https://x.com/Richard85626233" target="_blank" className="hover:text-zinc-900 transition-colors">X (Twitter)</Link>
                        <Link href="https://github.com/Richard-Ewing" target="_blank" className="hover:text-zinc-900 transition-colors">GitHub (Profile)</Link>
                        <Link href="https://github.com/Richard-Ewing/synthetic-enterprise-cognition" target="_blank" className="hover:text-zinc-900 transition-colors">GitHub (SECS Repo)</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}
