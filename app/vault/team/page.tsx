import { redirect } from 'next/navigation';
import { currentUser } from '@clerk/nextjs/server';
import Link from 'next/link';
import { ShieldCheck, Users, Copy, CheckCircle, ChevronLeft } from 'lucide-react';
import { CopyButton } from './CopyButton';

export const metadata = {
    title: 'Enterprise Team Portal | Manage Seats | Ewing',
    description: 'Manage your enterprise team seats, active members, and access permissions for the Client Vault advisory platform.',
};

export default async function TeamAdminPage() {
    const user = await currentUser();

    if (!user) {
        redirect('/sign-in?redirect_url=/vault/team');
    }

    // Ensure they have Admin rights
    const isAdmin = user.publicMetadata?.is_team_admin === true;
    if (!isAdmin) {
        redirect('/vault');
    }

    const inviteCode = (user.publicMetadata?.team_invite_code as string) || 'PENDING-GENERATION';
    const totalSeats = (user.publicMetadata?.team_seats_total as number) || 0;
    
    // Clerk metadata stores complex objects as unknowns, so we cast it safely
    const claimedMembers = Array.isArray(user.publicMetadata?.team_members_claimed) 
        ? user.publicMetadata?.team_members_claimed as Array<{ user_id: string; email: string; joined_at: string }>
        : [];
        
    // Available child seats
    const availableChildSeats = Math.max(0, totalSeats - 1);
    const seatsUsed = claimedMembers.length;
    
    const isAtCapacity = seatsUsed >= availableChildSeats;

    return (
        <main className="min-h-screen pt-32 pb-24 px-6">
            <div className="max-w-4xl mx-auto">
                
                <Link href="/vault" className="inline-flex items-center text-xs font-bold text-zinc-950 font-bold uppercase tracking-widest hover:text-zinc-900 transition-colors mb-8">
                    <ChevronLeft className="w-4 h-4 mr-1" /> Back to Vault
                </Link>

                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
                        <Users className="w-4 h-4 text-amber-500" />
                        <span className="text-xs font-bold font-medium font-mono text-amber-500 uppercase tracking-widest">Enterprise Administration</span>
                    </div>
                    
                    <h1 className="text-4xl font-grotesk font-bold text-zinc-950 mb-4">
                        Team License Management
                    </h1>
                    <p className="text-zinc-900 text-lg max-w-2xl">
                        You have unlocked an enterprise-tier license. Distribute your unique team code to colleagues to instantly grant them full subscription access.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {/* INVITE CODE WIDGET */}
                    <div className="card p-8 border-amber-500/30 bg-gradient-to-br from-amber-500/[0.05] to-transparent">
                        <h2 className="text-sm font-semibold font-bold text-zinc-950 uppercase tracking-widest mb-2">Your Team Invite Code</h2>
                        <p className="text-xs font-bold text-zinc-900 font-bold mb-6">Colleagues will enter this code inside their Vault to claim a seat.</p>
                        
                        <div className="flex items-center gap-3">
                            <code className="flex-1 block p-4 bg-white border border-amber-500/30 rounded-xl text-amber-400 font-mono text-lg font-bold text-center">
                                {inviteCode}
                            </code>
                            <CopyButton textToCopy={inviteCode} />
                        </div>
                    </div>

                    {/* SEAT CAPACITY WIDGET */}
                    <div className="card p-8 border-zinc-400 bg-white">
                        <div className="flex justify-between items-end mb-6">
                            <div>
                                <h2 className="text-sm font-semibold font-bold text-zinc-950 uppercase tracking-widest mb-1">Seating Capacity</h2>
                                <p className="text-xs font-bold text-zinc-900 font-bold">Total available invites</p>
                            </div>
                            <div className="text-right">
                                <span className={`text-3xl font-bold font-mono ${isAtCapacity ? 'text-red-900 font-extrabold font-semibold' : 'text-cyan-900 font-extrabold font-semibold'}`}>
                                    {seatsUsed}
                                </span>
                                <span className="text-zinc-950 text-lg"> / {availableChildSeats}</span>
                            </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full h-2 bg-zinc-50 rounded-full overflow-hidden mb-4">
                            { }
                            <div 
                                className={`h-full transition-all ${isAtCapacity ? 'bg-red-500' : 'bg-cyan-500'}`} 
                                style={{ width: `${Math.min(100, (seatsUsed / availableChildSeats) * 100)}%` }}
                            ></div>
                        </div>
                        
                        {isAtCapacity ? (
                            <p className="text-xs font-bold text-zinc-900 font-bold">Limit Reached. No further invites can be claimed.</p>
                        ) : (
                            <p className="text-xs font-bold font-medium text-cyan-900 font-extrabold font-semibold uppercase tracking-widest font-bold">{availableChildSeats - seatsUsed} Seats Remaining</p>
                        )}
                    </div>
                </div>

                {/* TEAM LEDGER */}
                <section>
                    <h2 className="text-xl font-bold text-zinc-950 mb-6 flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-zinc-950 font-bold" />
                        Active Team Members
                    </h2>
                    
                    {claimedMembers.length > 0 ? (
                        <div className="card overflow-hidden border-zinc-400">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-white/80 border-b border-zinc-400 text-xs font-bold font-medium uppercase tracking-widest text-zinc-900">
                                        <th className="p-4 font-bold">Email Address</th>
                                        <th className="p-4 font-bold hidden sm:table-cell">User ID</th>
                                        <th className="p-4 font-bold text-right">Date Claimed</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {claimedMembers.map((member, idx) => (
                                        <tr key={idx} className="border-b border-zinc-900/50 hover:bg-white/40 transition-colors">
                                            <td className="p-4 flex items-center gap-3 text-zinc-950 font-medium">
                                                <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center">
                                                    <span className="text-xs font-bold text-zinc-900 font-bold">{member.email.charAt(0).toUpperCase()}</span>
                                                </div>
                                                {member.email}
                                            </td>
                                            <td className="p-4 hidden sm:table-cell text-xs font-bold text-zinc-950 font-mono">
                                                {member.user_id.substring(0, 14)}...
                                            </td>
                                            <td className="p-4 text-right text-xs font-bold text-zinc-900 font-bold">
                                                {new Date(member.joined_at).toLocaleDateString()}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="p-12 rounded-2xl border border-dashed border-zinc-400 bg-white/20 text-center">
                            <Users className="w-8 h-8 text-zinc-950 font-bold mx-auto mb-3" />
                            <h3 className="text-lg font-bold text-zinc-950 mb-2">No Seats Claimed Yet</h3>
                            <p className="text-sm font-semibold text-zinc-950 max-w-md mx-auto">
                                Share your invite code with your team. As soon as they claim a seat, they will appear in this ledger and gain instant Full Curriculum access.
                            </p>
                        </div>
                    )}
                </section>

            </div>
        </main>
    );
}
