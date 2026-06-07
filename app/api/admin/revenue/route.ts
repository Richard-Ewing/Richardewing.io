import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { auth } from '@clerk/nextjs/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_dummy_key_for_build_passing');

// ─── Product categorisation helpers ───────────────────────────────────────────

type RevenueCategory = 'advisory' | 'curriculum' | 'tools' | 'subscriptions' | 'other';

/**
 * Map a charge / payment-intent to a revenue category using:
 *  1. Product metadata (`category` field) — most reliable
 *  2. Product name substring matching
 *  3. Amount-based heuristics as fallback
 */
function categorisePayment(
    amountCents: number,
    productName: string | null,
    metadata: Record<string, string> | null,
    isRecurring: boolean
): RevenueCategory {
    // 1. Explicit metadata
    const metaCategory = metadata?.category?.toLowerCase();
    if (metaCategory) {
        if (['advisory', 'curriculum', 'tools', 'subscriptions'].includes(metaCategory)) {
            return metaCategory as RevenueCategory;
        }
    }

    // 2. Recurring → subscriptions
    if (isRecurring) return 'subscriptions';

    // 3. Product-name heuristics
    const name = (productName ?? '').toLowerCase();

    const advisoryKeywords = [
        'gut_check', 'gut check', 'insolvency', 'ai_cost', 'ai cost',
        'strategy', 'advisory', 'consulting', 'diagnostic'
    ];
    if (advisoryKeywords.some(kw => name.includes(kw))) return 'advisory';

    const subscriptionKeywords = ['ai_advisor', 'ai advisor', 'subscription', 'monthly', 'yearly'];
    if (subscriptionKeywords.some(kw => name.includes(kw))) return 'subscriptions';

    const toolsKeywords = ['tools_library', 'tools library', 'tool unlock', 'tools_unlock'];
    if (toolsKeywords.some(kw => name.includes(kw))) return 'tools';

    const curriculumKeywords = [
        'track', 'bundle', 'vault', 'curriculum', 'module', 'course', 'skill'
    ];
    if (curriculumKeywords.some(kw => name.includes(kw))) return 'curriculum';

    // 4. Amount-based fallback (amounts in cents)
    const dollars = amountCents / 100;
    if (dollars >= 450) return 'advisory';
    if (dollars >= 149 && dollars <= 999) return 'curriculum';
    if (Math.abs(dollars - 199) < 1) return 'tools';

    return 'other';
}

// ─── Main handler ─────────────────────────────────────────────────────────────

export async function GET(req: Request) {
    try {
        // ── Auth: CRON_SECRET bearer OR Clerk session ─────────────────────
        const authHeader = req.headers.get('authorization');
        const hasCronAuth = authHeader === `Bearer ${process.env.CRON_SECRET}`;

        if (!hasCronAuth) {
            const { userId } = await auth();
            if (!userId) {
                return NextResponse.json(
                    { error: 'Unauthorized. Provide Bearer CRON_SECRET or sign in.' },
                    { status: 401 }
                );
            }
        }

        // ── Parse query params ────────────────────────────────────────────
        const { searchParams } = new URL(req.url);
        const daysParam = parseInt(searchParams.get('days') || '30', 10);
        const days = [30, 60, 90].includes(daysParam) ? daysParam : 30;
        const since = Math.floor(Date.now() / 1000) - days * 86_400;

        // ── Fetch successful payment intents from Stripe ──────────────────
        const allPayments: Stripe.PaymentIntent[] = [];
        let hasMore = true;
        let startingAfter: string | undefined;

        while (hasMore) {
            const batch: Stripe.ApiList<Stripe.PaymentIntent> =
                await stripe.paymentIntents.list({
                    created: { gte: since },
                    limit: 100,
                    ...(startingAfter ? { starting_after: startingAfter } : {}),
                });

            allPayments.push(...batch.data);
            hasMore = batch.has_more;
            if (batch.data.length > 0) {
                startingAfter = batch.data[batch.data.length - 1].id;
            }
        }

        // Only count succeeded payments
        const succeeded = allPayments.filter(pi => pi.status === 'succeeded');

        // ── Fetch active subscriptions for MRR ────────────────────────────
        const subscriptions: Stripe.Subscription[] = [];
        let subHasMore = true;
        let subStartingAfter: string | undefined;

        while (subHasMore) {
            const subBatch: Stripe.ApiList<Stripe.Subscription> =
                await stripe.subscriptions.list({
                    status: 'active',
                    limit: 100,
                    ...(subStartingAfter ? { starting_after: subStartingAfter } : {}),
                });

            subscriptions.push(...subBatch.data);
            subHasMore = subBatch.has_more;
            if (subBatch.data.length > 0) {
                subStartingAfter = subBatch.data[subBatch.data.length - 1].id;
            }
        }

        // Calculate MRR from active subscriptions
        let mrrCents = 0;
        for (const sub of subscriptions) {
            for (const item of sub.items.data) {
                const unitAmount = item.price?.unit_amount ?? 0;
                const quantity = item.quantity ?? 1;
                const interval = item.price?.recurring?.interval;
                const intervalCount = item.price?.recurring?.interval_count ?? 1;

                // Normalise everything to monthly
                if (interval === 'month') {
                    mrrCents += (unitAmount * quantity) / intervalCount;
                } else if (interval === 'year') {
                    mrrCents += (unitAmount * quantity) / (12 * intervalCount);
                } else if (interval === 'week') {
                    mrrCents += (unitAmount * quantity * 4.33) / intervalCount;
                } else if (interval === 'day') {
                    mrrCents += (unitAmount * quantity * 30) / intervalCount;
                }
            }
        }

        // ── Aggregate revenue by category ─────────────────────────────────
        const revenueByCategory: Record<RevenueCategory, number> = {
            advisory: 0,
            curriculum: 0,
            tools: 0,
            subscriptions: 0,
            other: 0,
        };

        let totalRevenueCents = 0;

        for (const pi of succeeded) {
            const amount = pi.amount ?? 0;
            totalRevenueCents += amount;

            const productName = pi.metadata?.product_name ?? pi.description ?? null;
            const isRecurring = pi.metadata?.recurring === 'true';

            const category = categorisePayment(amount, productName, pi.metadata ?? null, isRecurring);
            revenueByCategory[category] += amount / 100;
        }

        const totalRevenue = totalRevenueCents / 100;
        const transactionCount = succeeded.length;
        const avgOrderValue = transactionCount > 0
            ? Math.round((totalRevenue / transactionCount) * 100) / 100
            : 0;

        // ── Recent transactions (last 20) ─────────────────────────────────
        const recentTransactions = succeeded
            .sort((a, b) => (b.created ?? 0) - (a.created ?? 0))
            .slice(0, 20)
            .map(pi => ({
                id: pi.id,
                amount: (pi.amount ?? 0) / 100,
                currency: pi.currency,
                productName: pi.metadata?.product_name ?? pi.description ?? 'Unknown',
                date: new Date((pi.created ?? 0) * 1000).toISOString(),
                status: pi.status,
            }));

        // ── Response ──────────────────────────────────────────────────────
        return NextResponse.json({
            success: true,
            period: { days, since: new Date(since * 1000).toISOString() },
            totalRevenue,
            transactionCount,
            avgOrderValue,
            mrr: Math.round(mrrCents) / 100,
            revenueByCategory,
            recentTransactions,
            generatedAt: new Date().toISOString(),
        });
    } catch (error) {
        console.error('[ADMIN:REVENUE] Error:', error);
        return NextResponse.json(
            {
                error: 'Failed to fetch revenue data.',
                details: error instanceof Error ? error.message : String(error),
            },
            { status: 500 }
        );
    }
}
