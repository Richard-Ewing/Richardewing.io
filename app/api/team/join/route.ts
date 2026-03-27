import { NextResponse } from 'next/server';
import { auth, clerkClient } from '@clerk/nextjs/server';

export async function POST(req: Request) {
    try {
        const { userId } = await auth();
        if (!userId) {
            return new NextResponse('Unauthorized', { status: 401 });
        }

        const body = await req.json();
        const { inviteCode } = body;

        if (!inviteCode || typeof inviteCode !== 'string') {
            return new NextResponse('Invalid invite code format.', { status: 400 });
        }

        // Expected format: REQ-{AdminUserId}-{RandomString}
        const parts = inviteCode.split('-');
        if (parts.length < 3 || parts[0] !== 'REQ') {
            return new NextResponse('Invalid invite code structure.', { status: 400 });
        }

        // Extract the admin ID (everything between REQ- and the final -suffix)
        const suffix = parts.pop();
        const adminId = parts.slice(1).join('-');

        if (!adminId || !suffix) {
            return new NextResponse('Corrupted invite code.', { status: 400 });
        }

        const client = await clerkClient();

        // Fetch both the Admin and the requesting User
        let adminUser;
        let currentUser;
        try {
            [adminUser, currentUser] = await Promise.all([
                client.users.getUser(adminId),
                client.users.getUser(userId)
            ]);
        } catch (e) {
            return new NextResponse('Team Administrator not found.', { status: 404 });
        }

        const adminMetadata = adminUser.publicMetadata as any;
        
        // 1. Verify Code Matches Admin's Actual Code
        if (adminMetadata.team_invite_code !== inviteCode) {
            return new NextResponse('Invalid or expired team invite code.', { status: 403 });
        }

        // 2. Initialize or fetch claimed members
        const claimedMembers = Array.isArray(adminMetadata.team_members_claimed) 
            ? adminMetadata.team_members_claimed 
            : [];
        const totalSeats = adminMetadata.team_seats_total || 0;

        // 3. Check for idempotency (is user already on the team?)
        const alreadyOnTeam = claimedMembers.some((member: any) => member.user_id === userId);
        if (alreadyOnTeam) {
            return NextResponse.json({ success: true, message: 'You are already on this team.' });
        }

        // 4. Check seat capacity 
        // Note: The admin themselves consumes 1 seat technically if they use it, 
        // but typically B2B means seats_total = number of invites they can send. 
        // We will assume team_seats_total is the total number of people on the team including admin? 
        // Stripe quantity = 5 means 5 users total. 1 Admin + 4 Child accounts.
        // Therefore, available child seats = totalSeats - 1.
        const availableChildSeats = Math.max(0, totalSeats - 1);

        if (claimedMembers.length >= availableChildSeats) {
            return new NextResponse('This team has reached its maximum seat capacity.', { status: 403 });
        }

        // 5. Build member record
        const memberEmail = currentUser.emailAddresses[0]?.emailAddress || 'unknown@email.com';
        const newMemberRecord = {
            user_id: userId,
            email: memberEmail,
            joined_at: new Date().toISOString()
        };

        const updatedMembersList = [...claimedMembers, newMemberRecord];

        // 6. Execute Metadata Updates
        // A) Update Admin's ledger
        await client.users.updateUserMetadata(adminId, {
            publicMetadata: {
                ...adminMetadata,
                team_members_claimed: updatedMembersList
            }
        });

        // B) Grant Subscription to Child User
        const currentUserMetadata = currentUser.publicMetadata as any;
        await client.users.updateUserMetadata(userId, {
            publicMetadata: {
                ...currentUserMetadata,
                has_yearly_subscription: true,
                team_member_of: adminId,
                team_joined_at: new Date().toISOString()
            }
        });

        console.log(`User ${userId} successfully consumed a seat on Team ${adminId}. (${updatedMembersList.length}/${availableChildSeats} seats used)`);

        return NextResponse.json({ 
            success: true, 
            message: 'Team invitation accepted. Enterprise access granted.' 
        });

    } catch (error: any) {
        console.error('Error processing team join request:', error);
        return new NextResponse('Internal server error', { status: 500 });
    }
}
