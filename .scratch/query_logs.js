const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
    'https://axljcglgyintykjygwlt.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4bGpjZ2xneWludHlranlnd2x0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NDQ5NTEzMSwiZXhwIjoyMDkwMDcxMTMxfQ.YMl5rBO4hgwF1Di1L25YclpD-G8TMD0NUds-iAO0kfk'
);

async function run() {
    try {
        console.log('Querying agent_runs...');
        const { data: runs, error: runsError } = await supabase
            .from('agent_runs')
            .select('*')
            .order('created_at', { ascending: false })
            .limit(5);

        if (runsError) console.error('runsError:', runsError);
        else console.log('runs:', JSON.stringify(runs, null, 2));

        console.log('\nQuerying seo_rewrites...');
        const { data: rewrites, error: rewritesError } = await supabase
            .from('seo_rewrites')
            .select('*')
            .order('created_at', { ascending: false })
            .limit(5);

        if (rewritesError) console.error('rewritesError:', rewritesError);
        else console.log('rewrites:', JSON.stringify(rewrites, null, 2));
    } catch (e) {
        console.error(e);
    }
}

run();
