import Link from "next/link";

export function SidebarLink({ href, children, active = false }: { href: string, children: React.ReactNode, active?: boolean }) {
    return (
        <Link href={href} className={`block text-xs py-1.5 px-3 border-l transition-all ${active ? 'text-white border-white' : 'text-zinc-400 hover:text-white border-transparent hover:border-white'}`}>
            {children}
        </Link>
    );
}
