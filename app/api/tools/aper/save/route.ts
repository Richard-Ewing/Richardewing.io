import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { currentUser } from '@clerk/nextjs/server';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
    try {
        const user = await currentUser();
        if (!user) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const body = await req.json();
        const { run_data, output_metrics } = body;

        const hasPremium = user.publicMetadata?.has_yearly_subscription === true;
        if (!hasPremium) {
            const { count, error: countError } = await supabaseAdmin
                .from('tool_runs')
                .select('*', { count: 'exact', head: true })
                .eq('user_id', user.id);

            if (countError) throw countError;

            if (count && count >= 3) {
                return NextResponse.json(
                    { error: 'PAYMENT_REQUIRED', message: 'You have reached your 3-audit free limit.' },
                    { status: 402 }
                );
            }
        }

        const { data, error } = await supabaseAdmin
            .from('tool_runs')
            .insert({
                user_id: user.id,
                tool_id: 'APER',
                run_data: run_data,
                output_metrics: output_metrics,
                financial_waste: output_metrics?.valuationGap || 0,
                score: Math.floor(output_metrics?.productivityIndex || 50)
            })
            .select()
            .single();

        if (error) throw error;

        return NextResponse.json({
            success: true,
            run: data
        });

    } catch (error: any) {
        console.error('APER Save Error:', error);
        return NextResponse.json(
            { error: error?.message || 'Unknown server error during APER save' },
            { status: 500 }
        );
    }
}
