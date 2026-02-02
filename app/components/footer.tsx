'use client';

import Link from 'next/link';
import { NewsletterForm } from './newsletter-form';

export function Footer() {
    return (
        <footer className="border-t border-white/10 pt-16 pb-8 mt-20">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
                <div>
                    <h4 className="font-mono text-xs text-white uppercase tracking-widest mb-6">Identity</h4>
                    <ul className="space-y-4 text-sm text-zinc-500 font-grotesk">
                        <li><Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link></li>
                        <li><Link href="/manifesto" className="hover:text-cyan-400 transition-colors">Manifesto</Link></li>
                        <li><Link href="/principal" className="hover:text-cyan-400 transition-colors">The Principal</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-mono text-xs text-white uppercase tracking-widest mb-6">Intervention</h4>
                    <ul className="space-y-4 text-sm text-zinc-500 font-grotesk">
                        <li><Link href="/advisory" className="hover:text-cyan-400 transition-colors">Advisory Services</Link></li>
                        <li><Link href="/briefings" className="hover:text-cyan-400 transition-colors">Briefings</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-mono text-xs text-white uppercase tracking-widest mb-6">Intelligence</h4>
                    <ul className="space-y-4 text-sm text-zinc-500 font-grotesk">
                        <li><Link href="/system" className="hover:text-cyan-400 transition-colors">System</Link></li>
                        <li><Link href="/doctrine" className="hover:text-cyan-400 transition-colors">Doctrine</Link></li>
                        <li><Link href="/exogram" className="hover:text-cyan-400 transition-colors">Exogram (Active)</Link></li>
                        <li><Link href="/articles" className="hover:text-cyan-400 transition-colors">Canonical Hub</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-6">Free Tools</h4>
                    <ul className="space-y-4 text-sm text-zinc-500 font-grotesk">
                        <li><Link href="/tools/pdi" className="hover:text-white transition-colors">Product Debt Index</Link></li>
                        <li><Link href="/tools/ev-se" className="hover:text-white transition-colors">Valuation Simulator</Link></li>
                        <li><Link href="/tools/aueb" className="hover:text-white transition-colors">AI Unit Economics</Link></li>
                        <li><Link href="/tools/audit-interview" className="hover:text-white transition-colors">Audit Interview</Link></li>
                    </ul>
                </div>
                <div className="col-span-2 md:col-span-2">
                    <h4 className="font-mono text-xs text-emerald-400 uppercase tracking-widest mb-6">Stay Calibrated</h4>
                    <p className="text-xs text-zinc-500 mb-4">
                        Weekly analysis of why products fail and how to fix them.
                    </p>
                    <NewsletterForm
                        placeholder="email@company.com"
                        buttonText="Sub"
                        className="flex-col gap-2"
                        extraData={{ source: 'footer' }}
                    />
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
                <div className="flex items-center gap-2 mb-4 md:mb-0">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest">System Operational</span>
                </div>
                <div className="flex gap-6">
                    <Link href="/legal" className="text-xs text-zinc-600 hover:text-white transition-colors">Legal & Privacy</Link>
                    <Link href="https://twitter.com/richardewing" target="_blank" className="text-xs text-zinc-600 hover:text-white transition-colors">X / Twitter</Link>
                    <Link href="https://linkedin.com/in/richardewing" target="_blank" className="text-xs text-zinc-600 hover:text-white transition-colors">LinkedIn</Link>
                </div>
            </div>
        </footer>
    );
}
