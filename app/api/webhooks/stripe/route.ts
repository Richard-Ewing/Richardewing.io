import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { clerkClient } from '@clerk/nextjs/server';
import { supabaseAdmin } from '@/lib/supabase';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_dummy_key_for_build_passing');

export async function POST(req: Request) {
    const body = await req.text();
    const signature = (await headers()).get('Stripe-Signature') as string;

    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET || ''
        );
    } catch (error: any) {
        console.error('Webhook signature verification failed.', error.message);
        return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 });
    }

    const session = event.data.object as Stripe.Checkout.Session;

    // Handle successful checkouts
    if (event.type === 'checkout.session.completed') {
        // We pass the Clerk UserID via standard Stripe client_reference_id, optionally with a specific item ID
        const rawReferenceId = session.client_reference_id;

        if (rawReferenceId) {
            const parts = rawReferenceId.split('::');
            const userId = parts[0];
            const specificItemId = parts.length > 1 ? parts[1] : null;

            try {
                // Determine what was purchased to set the right metadata grants
                // If it's a subscription mode checkout, grant universal access
                const isSubscription = session.mode === 'subscription';
                
                // Fetch the line items to determine the precise quantity purchased for B2B Team Licensing
                const lineItems = await stripe.checkout.sessions.listLineItems(session.id);
                const quantity = lineItems.data.reduce((total, item) => total + (item.quantity || 1), 0);
                const isTeamPurchase = quantity > 1;

                const client = await clerkClient();
                
                if (isSubscription) {
                    // Update Stripe Subscription to persistently store the Clerk User ID for downstream revocation hooks
                    if (session.subscription) {
                        try {
                            await stripe.subscriptions.update(session.subscription as string, {
                                metadata: { clerkUserId: userId }
                            });
                        } catch (e) {
                            console.error('Failed to attach metadata to Stripe Subscription', e);
                        }
                    }

                    // Base metadata grant
                    const metadataPayload: any = {
                        has_yearly_subscription: true,
                        subscription_status: 'active'
                    };

                    // Enterprise B2B Team Licensing injection
                    if (isTeamPurchase) {
                        // We embed the Clerk user ID into the code itself for instant O(1) backend lookups
                        const uniqueSuffix = Math.random().toString(36).substring(2, 8).toUpperCase();
                        const inviteCode = `REQ-${userId}-${uniqueSuffix}`;
                        
                        metadataPayload.is_team_admin = true;
                        metadataPayload.team_seats_total = quantity;
                        metadataPayload.team_invite_code = inviteCode;
                        metadataPayload.team_members_claimed = [];
                        
                        console.log(`Enterprise B2B License activated: ${quantity} seats granted to ${userId}`);
                    }

                    // AI Integration Advisor subscription detection
                    // Check line items for the AI Advisor product
                    try {
                        for (const item of lineItems.data) {
                            if (item.price?.id === 'price_1Tb4CF5swlCTzLiTNiK2Tsoh' || item.price?.id === 'price_1Tb4CF5swlCTzLiTwEzkPBTO' || item.description?.toLowerCase().includes('ai integration advisor')) {
                                metadataPayload.has_ai_advisor_access = true;
                                console.log(`AI Advisor access granted to ${userId}`);
                            }
                        }
                    } catch (e) {
                        console.error('Failed to check AI Advisor line items', e);
                    }

                    await client.users.updateUserMetadata(userId, {
                        publicMetadata: metadataPayload
                    });
                } else {
                    // One-off purchase handling (Guides/Diagnostics/Modules/Skills)
                    const userObj = await client.users.getUser(userId);
                    const existingUnlockedItems = (userObj.publicMetadata.unlocked_items as string[]) || [];
                    const existingUnlockedAssets = (userObj.publicMetadata.unlocked_assets as string[]) || [];
                    
                    let updatedUnlockedItems = [...existingUnlockedItems];
                    let updatedUnlockedAssets = [...existingUnlockedAssets];

                    if (specificItemId) {
                        if (specificItemId.startsWith('skill_')) {
                            const assetSlug = specificItemId.replace('skill_', '');
                            if (!existingUnlockedAssets.includes(assetSlug)) {
                                updatedUnlockedAssets.push(assetSlug);
                            }
                        } else {
                            if (!existingUnlockedItems.includes(specificItemId)) {
                                updatedUnlockedItems.push(specificItemId);
                            }
                        }
                    }

                    await client.users.updateUserMetadata(userId, {
                        publicMetadata: {
                            has_premium_guide_access: true,
                            unlocked_items: updatedUnlockedItems,
                            unlocked_assets: updatedUnlockedAssets
                        }
                    });

                    // Auto-Queue Curriculum in Vault
                    if (specificItemId) {
                        let startModule = null;
                        
                        if (specificItemId === 'module_engineering') startModule = '1-1';
                        else if (specificItemId === 'module_ai_economics') startModule = '2-1';
                        else if (specificItemId === 'module_rd_capital') startModule = '3-1';
                        else if (specificItemId === 'full_curriculum') startModule = '1-1';
                        else if (specificItemId.startsWith('module_track_')) {
                            const trackNum = specificItemId.replace('module_track_', '');
                            startModule = `${trackNum}-1`;
                        } else if (specificItemId.startsWith('module_')) {
                            const trackNum = specificItemId.replace('module_', '');
                            if (!isNaN(Number(trackNum))) startModule = `${trackNum}-1`;
                        }

                        if (startModule) {
                            try {
                                await supabaseAdmin.from('user_content_progress').upsert({
                                    user_id: userId,
                                    content_id: startModule,
                                    content_type: 'module',
                                    progress_percentage: 0,
                                    is_completed: false,
                                    last_accessed: new Date().toISOString()
                                }, {
                                    onConflict: 'user_id,content_id'
                                });
                                console.log(`Auto-queued module ${startModule} for user ${userId} in Vault.`);
                            } catch (error) {
                                console.error('Failed to auto-queue curriculum progress in Supabase:', error);
                            }
                        }
                    }
                }
                console.log(`Successfully provisioned access for Clerk User: ${userId} (Quantity: ${quantity}, Item: ${specificItemId || 'None'})`);
            } catch (error) {
                console.error('Failed to update Clerk user metadata:', error);
                return new NextResponse('Error updating user metadata', { status: 500 });
            }
        } else {
            console.warn('Checkout completed but no client_reference_id (Clerk User ID) was provided.');
        }
    }
    
    // Handle subscription cancellations unconditionally
    if (event.type === 'customer.subscription.deleted') {
        const subscription = event.data.object as Stripe.Subscription;
        const clerkUserId = subscription.metadata?.clerkUserId;
        
        if (clerkUserId) {
            try {
                const client = await clerkClient();
                await client.users.updateUserMetadata(clerkUserId, {
                    publicMetadata: {
                        has_yearly_subscription: false,
                        has_ai_advisor_access: false,
                        subscription_status: 'canceled'
                    }
                });
                console.log(`Access definitively revoked for Clerk User: ${clerkUserId}`);
            } catch (error) {
                console.error('Failed to enforce subscription revocation on Clerk metadata', error);
            }
        } else {
            console.log(`Subscription ${subscription.id} deleted, but no clerkUserId metadata was found.`);
        }
    }

    return new NextResponse('Webhook processed successfully', { status: 200 });
}
