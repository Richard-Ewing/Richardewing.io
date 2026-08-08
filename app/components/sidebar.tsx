'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const NavItem = ({ href, children, isActive = false, onClick }: { href: string; children: React.ReactNode; isActive?: boolean; onClick?: () => void }) => (
    <Link
        href={href}
        onClick={onClick}
        className={`block text-sm font-semibold py-2 px-4 border-l-2 transition-all ${isActive
            ? 'text-zinc-900 border-purple-500 bg-purple-50'
            : 'text-zinc-950 border-transparent hover:text-zinc-900 hover:border-zinc-500'
            }`}
    >
        {children}
    </Link>
);

export function Sidebar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

    const navItems = [
        {
            label: 'Identity', items: [
                { href: '/', label: 'Home' },
                { href: '/manifesto', label: '01. Manifesto' },
                { href: '/about', label: '02. The Principal' },
            ]
        },
        {
            label: 'Intervention', labelClass: 'text-danger', items: [
                { href: '/services', label: '03. ADVISORY', highlight: true },
                { href: '/ai-integration', label: '04. AI INTEGRATION', highlight: true },
            ]
        },
        {
            label: 'Intelligence', items: [
                { href: '/system', label: '04. System' },
                { href: '/doctrine', label: '05. Doctrine' },
                { href: '/articles', label: '07. Canonical Hub' },
            ]
        },
        {
            label: 'Free Tools', labelClass: 'text-cyan-900 font-extrabold', items: [
                { href: '/tools', label: 'All Tools →' },
                { href: '/tools/pdi', label: 'Product Debt Audit', highlight: true },
                { href: '/tools/audit-interview', label: 'Audit Interview' },
                { href: '/tools/ev-se', label: 'Valuation Calculator' },
                { href: '/tools/aueb', label: 'AI Costs Calculator' },
                { href: '/tools/aper', label: 'Team Efficiency' },
            ]
        },
        {
            label: 'Signal', items: [
                { href: '/briefings', label: '08. Briefs' },
                { href: '/book', label: '09. Book' },
                { href: '/legal', label: '10. Legal' },
            ]
        },
    ];

    return (
        <>
            {/* Mobile Header */}
            <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-zinc-400 px-4 py-3 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-zinc-200 overflow-hidden">
                        <Image src="/assets/images/headshot.jpg" alt="RE" width={40} height={40} className="object-cover grayscale" />
                    </div>
                    <div>
                        <div className="text-zinc-900 font-bold text-sm">RICHARD EWING</div>
                        <div className="text-zinc-950 text-xs font-bold font-medium font-mono tracking-widest">PRODUCT ECONOMIST</div>
                    </div>
                </Link>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 text-zinc-900 hover:text-purple-900 font-extrabold transition"
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-zinc-100 z-40"
                    onClick={closeMenu}
                />
            )}

            {/* Sidebar */}
            <aside className={`
        fixed lg:sticky top-0 left-0 h-screen z-50
        bg-white/95 backdrop-blur-xl border-r border-zinc-400
        w-[280px] lg:w-auto
        transform transition-transform duration-300 ease-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        pt-20 lg:pt-0 p-6 lg:p-10
        flex flex-col justify-between overflow-y-auto
      `}>
                {/* Desktop Header */}
                <div className="hidden lg:block mb-8">
                    <Link href="/" className="block">
                        <div className="w-20 h-20 rounded-full border-2 border-zinc-500 mb-4 overflow-hidden grayscale hover:grayscale-0 transition duration-500">
                            <Image src="/assets/images/headshot.jpg" alt="Richard Ewing" width={80} height={80} className="object-cover" priority />
                        </div>
                        <h3 className="text-zinc-900 font-bold tracking-tight text-lg">RICHARD EWING</h3>
                        <span className="font-mono text-xs font-bold text-zinc-950 tracking-widest block mt-1">PRODUCT ECONOMIST</span>
                    </Link>
                </div>

                {/* Navigation */}
                <nav className="space-y-6 flex-1">
                    {navItems.map((section) => (
                        <div key={section.label}>
                            <div className={`text-xs font-bold font-medium font-mono uppercase mb-2 ml-4 tracking-widest ${section.labelClass || 'text-zinc-950'}`}>
                                {section.label}
                            </div>
                            <div className="space-y-1">
                                {section.items.map((item) => (
                                    <NavItem
                                        key={item.href}
                                        href={item.href}
                                        isActive={pathname === item.href}
                                        onClick={closeMenu}
                                    >
                                        {item.label}
                                    </NavItem>
                                ))}
                            </div>
                        </div>
                    ))}
                </nav>

                {/* Footer */}
                <div className="font-mono text-xs font-bold font-medium text-zinc-950 font-bold mt-8">&copy; 2026 Richard Ewing</div>
            </aside>

            {/* Mobile Spacer */}
            <div className="lg:hidden h-16" />
        </>
    );
}
