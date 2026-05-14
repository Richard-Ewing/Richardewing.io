import { NextResponse } from 'next/server';
import { supabaseAdmin } from '../../../../lib/supabase';
import { auth } from '@clerk/nextjs/server';

/**
 * This endpoint is designed to be triggered by a Cron Job (or admin manually)
 * to generate the quarterly benchmark reports.
 * It synthesizes raw data from 'benchmark_distributions' and logs a historical snapshot.
 */
export async function POST(req: Request) {
    try {
        // 1. Authenticate (Ensure only Admins or Cron can trigger this)
        // For a production Cron job, you would use a secure CRON_SECRET header instead of Clerk auth.
        const authHeader = req.headers.get('authorization');
        if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
            const { userId } = await auth();
            // Optional: Check if userId is Richard Ewing's specific ID
            if (!userId) {
                return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });
            }
        }

        // 2. Determine Snapshot Period (e.g. 'Q2-2026')
        const date = new Date();
        const quarter = Math.floor((date.getMonth() + 3) / 3);
        const year = date.getFullYear();
        const snapshotPeriod = `Q${quarter}-${year}`;

        // 3. Fetch Current Benchmarks
        const { data: currentBenchmarks, error: fetchError } = await supabaseAdmin
            .from('benchmark_distributions')
            .select('*');

        if (fetchError) throw fetchError;
        if (!currentBenchmarks || currentBenchmarks.length === 0) {
            return NextResponse.json({ message: 'No benchmark data available to synthesize.' });
        }

        // 4. Preserve into Historical Snapshots
        const snapshotRecords = currentBenchmarks.map(b => ({
            diagnostic_id: b.diagnostic_id,
            industry: b.industry,
            sample_size: b.sample_size,
            top_quartile: b.top_quartile,
            median: b.median,
            bottom_quartile: b.bottom_quartile,
            snapshot_period: snapshotPeriod
        }));

        const { error: snapshotError } = await supabaseAdmin
            .from('benchmark_snapshots')
            .insert(snapshotRecords);

        if (snapshotError) throw snapshotError;

        // 5. Trigger PDF Engine (Stubbed for now, eventually connects to a service like React-PDF or Puppeteer)
        // await generatePDFReport(snapshotPeriod, currentBenchmarks);

        return NextResponse.json({ 
            success: true, 
            message: `Successfully synthesized ${snapshotRecords.length} benchmark distributions into historical snapshot ${snapshotPeriod}.` 
        });

    } catch (error) {
        console.error('[REPORT_GENERATION_ERROR]', error);
        return NextResponse.json({ error: 'Internal server error during report generation.' }, { status: 500 });
    }
}
