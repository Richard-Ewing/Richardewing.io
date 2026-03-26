import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { clerkClient } from '@clerk/nextjs/server';

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
        // We pass the Clerk UserID via standard Stripe client_reference_id
        const userId = session.client_reference_id;

        if (userId) {
            try {
                // Determine what was purchased to set the right metadata grants
                // If it's a subscription mode checkout, grant universal access
                const isSubscription = session.mode === 'subscription';
                
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

                    await client.users.updateUserMetadata(userId, {
                        publicMetadata: {
                            has_yearly_subscription: true,
                            subscription_status: 'active'
                        }
                    });
                } else {
                    // For single guide purchases, we would normally parse the line items.
                    // For now, any one-off purchase triggers general premium guide access.
                    await client.users.updateUserMetadata(userId, {
                        publicMetadata: {
                            has_premium_guide_access: true,
                        }
                    });
                }
                console.log(`Successfully provisioned access for Clerk User: ${userId}`);
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
