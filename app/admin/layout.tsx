import { auth, currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

// Admin-only email allowlist
const ADMIN_EMAILS = [
    'richardewing1@gmail.com',
    'richardewing@exogram.ai',
];

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { userId } = await auth();

    // Not logged in → redirect to sign-in
    if (!userId) {
        redirect('/sign-in');
    }

    // Check email against allowlist
    const user = await currentUser();
    const userEmail = user?.emailAddresses?.[0]?.emailAddress?.toLowerCase();

    if (!userEmail || !ADMIN_EMAILS.includes(userEmail)) {
        // Not an admin — send to home page, NOT back to sign-in
        redirect('/');
    }

    return (
        <div>
            {/* Admin nav bar */}
            <div className="fixed top-16 left-0 right-0 z-40 bg-[#0a0a0f]/95 backdrop-blur border-b border-zinc-800/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-1 py-2">
                    <span className="text-xs font-mono text-zinc-600 mr-4 uppercase tracking-widest">Admin</span>
                    <a href="/admin/command-center" className="px-3 py-1.5 text-xs font-medium text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-md transition-colors">
                        Command Center
                    </a>
                    <a href="/admin/seo-performance" className="px-3 py-1.5 text-xs font-medium text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-md transition-colors">
                        SEO
                    </a>
                    <a href="/admin/agents" className="px-3 py-1.5 text-xs font-medium text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-md transition-colors">
                        Agents
                    </a>
                </div>
            </div>
            {children}
        </div>
    );
}
