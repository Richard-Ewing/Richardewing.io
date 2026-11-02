import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { clerkClient } from '@clerk/nextjs/server';
import { supabaseAdmin } from '@/lib/supabase';
import { PRODUCTS } from '@/lib/products';

export const dynamic = 'force-dynamic';

const AI_ADVISOR_PRICE_IDS = new Set([
    'price_1Tb4CF5swlCTzLiTNiK2Tsoh',
    'price_1Tb4CF5swlCTzLiTwEzkPBTO',
]);

function generateSecureHex(byteLength = 6): string {
    const bytes = new Uint8Array(byteLength);
    globalThis.crypto.getRandomValues(bytes);
    return Array.from(bytes, (b) => b.toString(16).padStart(2, '0')).join('').toUpperCase();
}

function getMinimumExpectedCents(specificItemId: string): number {
    if (PRODUCTS[specificItemId]) {
        return Math.floor(PRODUCTS[specificItemId].price * 0.5);
    }
    if (specificItemId.startsWith('enterprise_')) {
        const baseId = specificItemId.replace(/^enterprise_/, '');
        return Math.floor((PRODUCTS[baseId]?.price || 150000) * 0.5);
    }
    if (specificItemId.startsWith('module_')) {
        return Math.floor(PRODUCTS.single_track.price * 0.5);
    }
    if (specificItemId.startsWith('skill_')) {
        return 1900;
    }
    return 2900;
}

export async function POST(req: Request) {
    const stripeKey = process.env.STRIPE_SECRET_KEY?.trim();
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET?.trim();
    if (!stripeKey || !webhookSecret || webhookSecret.length < 16) {
        console.error('Webhook fail-closed: missing Stripe secret configuration.');
        return new NextResponse('Server configuration error', { status: 503 });
    }

    const stripe = new Stripe(stripeKey, {
        httpClient: Stripe.createFetchHttpClient(),
    });
    const body = await req.text();
    const signature = (await headers()).get('Stripe-Signature');
    if (!signature) {
        return new NextResponse('Missing Stripe-Signature header', { status: 400 });
    }

    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch {
        console.error('Webhook signature verification failed.');
        return new NextResponse('Webhook signature verification failed', { status: 400 });
    }

    const session = event.data.object as Stripe.Checkout.Session;

    // Handle successful checkouts
    if (event.type === 'checkout.session.completed') {
        const hasValidCouponZero =
            session.payment_status === 'no_payment_required' &&
            (session.total_details?.amount_discount ?? 0) > 0;

        if (session.payment_status !== 'paid' && !hasValidCouponZero) {
            console.warn(`Checkout session ${session.id} completed with status ${session.payment_status}; skipping entitlement grant.`);
            return new NextResponse('Awaiting payment settlement', { status: 200 });
        }

        // ADR-0021: Record anonymous or authenticated Pay-to-Reveal tool run settlement
        const payToRevealRunId = session.metadata?.runId?.trim();
        const payToRevealSku = session.metadata?.payToRevealSku?.trim();
        if (payToRevealRunId && payToRevealSku) {
            try {
                await supabaseAdmin
                    .from('paid_tool_runs')
                    .update({
                        paid_sku: payToRevealSku,
                        stripe_session_id: session.id,
                        customer_email: session.customer_details?.email || null,
                        amount_cents: session.amount_total ?? session.amount_subtotal ?? null,
                        paid_at: new Date().toISOString(),
                    })
                    .eq('run_id', payToRevealRunId);
            } catch {
                // Non-blocking if paid_tool_runs migration is pending
            }
        }

        // We pass the Clerk UserID via standard Stripe client_reference_id, optionally with a specific item ID
        const rawReferenceId = session.client_reference_id;

        if (rawReferenceId) {
            const parts = rawReferenceId.split('::');
            const userId = parts[0]?.trim();
            const rawSpecificItemId = parts.length > 1 ? parts[1]?.trim() : null;
            const specificItemId =
                rawSpecificItemId && /^[a-zA-Z0-9_-]{1,80}$/.test(rawSpecificItemId)
                    ? rawSpecificItemId
                    : null;

            if (!userId || !/^user_[a-zA-Z0-9]+$/.test(userId)) {
                console.warn('Invalid Clerk userId format in client_reference_id.');
                return new NextResponse('Webhook processed', { status: 200 });
            }

            try {
                const isSubscription = session.mode === 'subscription';
                const client = await clerkClient();

                if (isSubscription) {
                    const lineItems = await stripe.checkout.sessions.listLineItems(session.id);
                    const quantity = lineItems.data.reduce((total, item) => total + (item.quantity || 1), 0);
                    const isTeamPurchase = quantity > 1;

                    if (session.subscription) {
                        try {
                            await stripe.subscriptions.update(session.subscription as string, {
                                metadata: { clerkUserId: userId }
                            });
                        } catch (e) {
                            console.error('Failed to attach metadata to Stripe Subscription', e);
                        }
                    }

                    let hasAiAdvisorItem =
                        specificItemId === 'ai_advisor_monthly' ||
                        specificItemId === 'ai_advisor_yearly';
                    let hasVaultOrRetainerItem = false;

                    for (const item of lineItems.data) {
                        const isAdvisorLine =
                            (item.price?.id && AI_ADVISOR_PRICE_IDS.has(item.price.id)) ||
                            Boolean(item.description?.toLowerCase().includes('ai integration advisor'));
                        if (isAdvisorLine) {
                            hasAiAdvisorItem = true;
                        } else {
                            hasVaultOrRetainerItem = true;
                        }
                    }

                    const metadataPayload: Record<string, unknown> = {
                        subscription_status: 'active',
                    };

                    if (hasVaultOrRetainerItem || !hasAiAdvisorItem) {
                        metadataPayload.has_yearly_subscription = true;
                    }

                    if (hasAiAdvisorItem) {
                        metadataPayload.has_ai_advisor_access = true;
                        console.log(`AI Advisor access granted to ${userId}`);
                    }

                    if (isTeamPurchase && (hasVaultOrRetainerItem || !hasAiAdvisorItem)) {
                        const uniqueSuffix = generateSecureHex(6);
                        const inviteCode = `REQ-${userId}-${uniqueSuffix}`;

                        metadataPayload.is_team_admin = true;
                        metadataPayload.team_seats_total = quantity;
                        metadataPayload.team_invite_code = inviteCode;
                        metadataPayload.team_members_claimed = [];

                        console.log(`Enterprise B2B License activated: ${quantity} seats granted to ${userId}`);
                    }

                    await client.users.updateUserMetadata(userId, {
                        publicMetadata: metadataPayload
                    });
                } else {
                    // One-off purchase handling (Guides/Diagnostics/Modules/Skills)
                    const userObj = await client.users.getUser(userId);
                    const existingUnlockedItems = Array.isArray(userObj.publicMetadata.unlocked_items)
                        ? (userObj.publicMetadata.unlocked_items as string[])
                        : [];
                    const existingUnlockedAssets = Array.isArray(userObj.publicMetadata.unlocked_assets)
                        ? (userObj.publicMetadata.unlocked_assets as string[])
                        : [];

                    const updatedUnlockedItems = [...existingUnlockedItems];
                    const updatedUnlockedAssets = [...existingUnlockedAssets];

                    // Compare pre-discount Stripe subtotal/total against product catalog price to block client_reference_id tier spoofing
                    const effectivePaidCents = Math.max(
                        session.amount_total ?? 0,
                        session.amount_subtotal ?? 0
                    );

                    let verifiedSpecificItemId: string | null = null;
                    if (specificItemId) {
                        const minRequiredCents = getMinimumExpectedCents(specificItemId);
                        if (effectivePaidCents >= minRequiredCents) {
                            verifiedSpecificItemId = specificItemId;
                        } else {
                            console.warn(
                                `Blocked client_reference_id price mismatch for ${userId}: claimed ${specificItemId} (min ${minRequiredCents}c) on ${effectivePaidCents}c checkout.`
                            );
                        }
                    }

                    if (verifiedSpecificItemId) {
                        if (verifiedSpecificItemId.startsWith('skill_')) {
                            const assetSlug = verifiedSpecificItemId.replace('skill_', '');
                            if (assetSlug && !existingUnlockedAssets.includes(assetSlug)) {
                                updatedUnlockedAssets.push(assetSlug);
                            }
                        } else if (!existingUnlockedItems.includes(verifiedSpecificItemId)) {
                            updatedUnlockedItems.push(verifiedSpecificItemId);
                        }
                    }

                    const oneOffMetadata: Record<string, unknown> = {
                        unlocked_items: updatedUnlockedItems,
                        unlocked_assets: updatedUnlockedAssets,
                    };

                    const isPayToRevealSku = Boolean(
                        payToRevealSku ||
                        (verifiedSpecificItemId &&
                            ['vibe_scan_29', 'vibe_scan_49', 'dept_playbook_39', 'dept_playbook_79'].includes(
                                verifiedSpecificItemId
                            ))
                    );

                    if (effectivePaidCents >= 2900 && !isPayToRevealSku) {
                        oneOffMetadata.has_premium_guide_access = true;
                    }

                    if (
                        verifiedSpecificItemId === 'all_access_pass' ||
                        verifiedSpecificItemId === 'full_curriculum'
                    ) {
                        oneOffMetadata.has_yearly_subscription = true;
                        oneOffMetadata.subscription_status = 'active';
                    }

                    if (
                        verifiedSpecificItemId === 'team_license_pass' ||
                        verifiedSpecificItemId === 'enterprise_team_license_pass' ||
                        verifiedSpecificItemId === 'enterprise_curriculum_license' ||
                        verifiedSpecificItemId === 'enterprise_enterprise_curriculum_license'
                    ) {
                        const uniqueSuffix = generateSecureHex(6);
                        oneOffMetadata.has_yearly_subscription = true;
                        oneOffMetadata.subscription_status = 'active';
                        oneOffMetadata.is_team_admin = true;
                        oneOffMetadata.team_seats_total = 10;
                        oneOffMetadata.team_invite_code = `REQ-${userId}-${uniqueSuffix}`;
                        oneOffMetadata.team_members_claimed = Array.isArray(userObj.publicMetadata.team_members_claimed)
                            ? userObj.publicMetadata.team_members_claimed
                            : [];
                    }

                    await client.users.updateUserMetadata(userId, {
                        publicMetadata: oneOffMetadata
                    });

                    // Auto-Queue Curriculum in Vault
                    if (verifiedSpecificItemId) {
                        let startModule = null;

                        if (verifiedSpecificItemId === 'module_engineering') startModule = '1-1';
                        else if (verifiedSpecificItemId === 'module_ai_economics') startModule = '2-1';
                        else if (verifiedSpecificItemId === 'module_rd_capital') startModule = '3-1';
                        else if (verifiedSpecificItemId === 'full_curriculum' || verifiedSpecificItemId === 'all_access_pass') startModule = '1-1';
                        else if (verifiedSpecificItemId.startsWith('module_track_')) {
                            const trackNum = verifiedSpecificItemId.replace('module_track_', '');
                            if (/^\d+$/.test(trackNum)) startModule = `${trackNum}-1`;
                        } else if (verifiedSpecificItemId.startsWith('module_')) {
                            const trackNum = verifiedSpecificItemId.replace('module_', '');
                            if (/^\d+$/.test(trackNum)) startModule = `${trackNum}-1`;
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
                console.log(`Successfully provisioned access for Clerk User: ${userId} (Item: ${specificItemId || 'Subscription'})`);
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
                const adminUser = await client.users.getUser(clerkUserId);
                const claimedMembers = Array.isArray(adminUser.publicMetadata?.team_members_claimed)
                    ? (adminUser.publicMetadata.team_members_claimed as string[])
                    : [];

                await client.users.updateUserMetadata(clerkUserId, {
                    publicMetadata: {
                        has_yearly_subscription: false,
                        has_ai_advisor_access: false,
                        is_team_admin: false,
                        team_invite_code: null,
                        subscription_status: 'canceled'
                    }
                });

                for (const memberId of claimedMembers) {
                    try {
                        const member = await client.users.getUser(memberId);
                        if (member.publicMetadata?.claimed_via_team_admin === clerkUserId) {
                            await client.users.updateUserMetadata(memberId, {
                                publicMetadata: {
                                    has_yearly_subscription: false,
                                    subscription_status: 'canceled'
                                }
                            });
                        }
                    } catch (memberErr) {
                        console.error(`Failed to revoke seat for team member ${memberId}`, memberErr);
                    }
                }

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
