import fs from 'fs';

function fixFile(filePath) {
    let source = fs.readFileSync(filePath, 'utf8');
    
    // Find the end of `dbt-vs-airflow` item which is the legitimate 40th item (or 39th in page.tsx).
    // But wait, page.tsx didn't have dbt-vs-airflow! The 39th item was `supabase-vs-firebase`!
    let lastValidSlug = filePath.includes('[slug]') ? 'dbt-vs-airflow' : 'supabase-vs-firebase';
    
    let lastSlugIndex = source.indexOf(lastValidSlug);
    if (lastSlugIndex === -1) {
        console.log("Could not find last slug in", filePath);
        // Maybe page.tsx DOES have dbt-vs-airflow if I injected it earlier? 
        // Let's just find the first instance of 'rust-vs-go' and slice there!
        let firstRust = source.indexOf('rust-vs-go');
        if (firstRust !== -1) {
            let slicePoint = source.lastIndexOf('},', firstRust);
            if (slicePoint !== -1) {
                let tail = source.substring(source.indexOf('];', firstRust));
                source = source.substring(0, slicePoint + 1) + '\n' + tail;
            }
        }
    } else {
        // Find the end of its object literal `}`
        let objStartIndex = source.lastIndexOf('{', lastSlugIndex);
        let objEndIndex = source.indexOf('}', lastSlugIndex);
        
        // It might have nested objects (like left/right/rows). We need to find the top-level `}` before the next `{` or `]`.
        // A simpler way: we know 'rust-vs-go' is the FIRST bad injection.
        let firstBad = source.indexOf('rust-vs-go');
        if (firstBad !== -1) {
            // Find the `{` that contains 'rust-vs-go'
            let badObjStart = source.lastIndexOf('{', firstBad);
            // It's preceded by `},\n` or similar. We slice exactly at badObjStart.
            let beforeBad = source.substring(0, badObjStart);
            
            // Clean up trailing commas and spaces
            beforeBad = beforeBad.trimEnd();
            if (beforeBad.endsWith(',')) beforeBad = beforeBad.slice(0, -1);
            
            // Now find the final `];` in the file to preserve the footer!
            let footerIndex = source.indexOf('];', firstBad);
            let footer = source.substring(footerIndex);
            
            source = beforeBad + '\n' + footer;
        }
    }
    
    fs.writeFileSync(filePath, source);
    console.log("Truncated garbage from", filePath);
}

fixFile("app/comparisons/page.tsx");
fixFile("app/comparisons/[slug]/page.tsx");

// Now we have perfectly clean 39/40 item arrays.
// Next, we append the 10 new items exactly ONCE.

const newComps = JSON.parse(fs.readFileSync('tmp/comps.json', 'utf8'));
const newItemsStr = newComps.map(c => JSON.stringify(c, null, 4)).join(",\n");

function inject(filePath) {
    let source = fs.readFileSync(filePath, 'utf8');
    let arrEnd = source.lastIndexOf('];');
    let before = source.substring(0, arrEnd).trimEnd();
    let after = source.substring(arrEnd);
    
    if (!before.endsWith(',')) before += ',';
    
    source = before + '\n' + newItemsStr + '\n' + after;
    fs.writeFileSync(filePath, source);
    console.log("Injected 10 items perfectly into", filePath);
}

inject("app/comparisons/page.tsx");
inject("app/comparisons/[slug]/page.tsx");

