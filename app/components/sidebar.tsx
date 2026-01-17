
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const NavItem = ({ href, children, isLabel = false, isActive = false }: { href: string; children: React.ReactNode; isLabel?: boolean; isActive?: boolean }) => {
    if (isLabel) {
        return (
            <a href={href} className="block text-white font-bold text-xs py-3 px-3 border-l-2 border-white bg-white/5 transition-all">
                {children}
            </a>
        );
    }
    return (
        <Link
            href={href}
            className={cn(
                "block text-xs py-1.5 px-3 border-l border-transparent transition-all",
                isActive
                    ? "text-white border-white"
                    : "text-zinc-400 hover:text-white hover:border-white"
            )}
        >
            {children}
        </Link>
    );
};

export function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="bg-black/95 backdrop-blur-xl border-r border-white/5 p-8 lg:p-10 lg:sticky lg:top-0 lg:h-screen flex flex-col justify-between z-50">
            <div>
                <Link href="/" className="block">
                    {/* Placeholder for Headshot - usually local asset. Using a div fallback if image missing or standard placeholder */}
                    <div className="w-20 h-20 rounded-full border-2 border-[#333] mb-6 grayscale hover:grayscale-0 hover:border-[#C0C0C0] transition duration-300 overflow-hidden bg-zinc-800">
                        <Image src="/assets/images/headshot.jpg" alt="Richard Ewing" width={80} height={80} className="object-cover" />
                    </div>
                    <h3 className="text-white font-bold tracking-tight text-xl">RICHARD EWING</h3>
                    <span className="font-mono text-xs text-titanium tracking-widest block mt-1">PRODUCT ECONOMIST</span>
                </Link>
            </div>

            <nav className="space-y-8 mt-10">
                <div>
                    <div className="text-[9px] font-mono text-zinc-600 uppercase mb-3 ml-3 tracking-widest">Identity</div>
                    <div className="space-y-1">
                        <NavItem href="/" isActive={pathname === '/'}>Home</NavItem>
                        <NavItem href="/manifesto" isActive={pathname === '/manifesto'}>01. Manifesto</NavItem>
                        <NavItem href="/principal" isActive={pathname === '/principal'}>02. The Principal</NavItem>
                    </div>
                </div>

                <div>
                    <div className="text-[9px] font-mono text-danger uppercase mb-3 ml-3 tracking-widest">Intervention</div>
                    <NavItem href="/advisory" isActive={pathname === '/advisory'}>03. ADVISORY</NavItem>
                </div>

                <div>
                    <div className="text-[9px] font-mono text-zinc-600 uppercase mb-3 ml-3 tracking-widest">Intelligence</div>
                    <div className="space-y-1">
                        <NavItem href="/system" isActive={pathname === '/system'}>04. System</NavItem>
                        <NavItem href="/doctrine" isActive={pathname === '/doctrine'}>05. Doctrine</NavItem>
                    </div>
                </div>

                <div>
                    <div className="text-[9px] font-mono text-zinc-600 uppercase mb-3 ml-3 tracking-widest">Signal</div>
                    <div className="space-y-1">
                        <NavItem href="/briefings" isActive={pathname === '/briefings'}>06. Briefs</NavItem>
                        <NavItem href="/book" isActive={pathname === '/book'}>07. Book</NavItem>
                        <NavItem href="/legal" isActive={pathname === '/legal'}>08. Legal</NavItem>
                    </div>
                </div>
            </nav>

            <div className="font-mono text-[10px] text-zinc-600 mt-12 lg:mt-0">&copy; 2026 Richard Ewing</div>
        </aside>
    );
}
