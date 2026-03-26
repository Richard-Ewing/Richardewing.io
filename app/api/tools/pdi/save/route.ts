import { NextResponse } from 'next/server';
import { supabaseAdmin } from '../../../../../lib/supabase';
import { currentUser } from '@clerk/nextjs/server';

export async function POST(req: Request) {
    try {
        const user = await currentUser();
        if (!user || !user.id) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const hasSubscription = user.publicMetadata?.has_yearly_subscription === true;

        // --- ENFORCE PAYWALL FOR FREE USERS ---
        if (!hasSubscription) {
            const { count, error: countError } = await supabaseAdmin
                .from('tool_runs')
                .select('*', { count: 'exact', head: true })
                .eq('user_id', user.id);

            if (countError) {
                console.error('Usage Check Error:', countError);
                return NextResponse.json({ error: 'Failed to verify usage limits' }, { status: 500 });
            }

            if (count !== null && count >= 3) {
                return NextResponse.json({ 
                    error: 'Free diagnostic limit reached. Please upgrade to Full Library Access to generate unlimited board-ready reports.',
                    code: 'PAYWALL_TRIGGERED'
                }, { status: 402 });
            }
        }
        // ----------------------------------------

        const body = await req.json();
        
        if (body.score === undefined || body.financial_waste === undefined) {
            return NextResponse.json({ error: 'Missing required payload fields' }, { status: 400 });
        }

        const { error } = await supabaseAdmin
            .from('tool_runs')
            .insert({
                user_id: user.id,
                tool_id: 'pdi',
                score: body.score,
                financial_waste: body.financial_waste,
                inputs: body.inputs || {},
                created_at: new Date().toISOString()
            });

        if (error) {
            console.error('Supabase Insert Error:', error);
            return NextResponse.json({ error: `Supabase Error: ${error.message}` }, { status: 500 });
        }

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error('Save Tool Run Error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
