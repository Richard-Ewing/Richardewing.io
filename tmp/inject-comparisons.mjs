import fs from 'fs';

const compsRaw = fs.readFileSync('tmp/comps.json', 'utf8');
const newComps = JSON.parse(compsRaw);

function injectComparisons(filePath) {
    const code = fs.readFileSync(filePath, "utf-8");
    const arrEndIndex = code.lastIndexOf("];");
    if (arrEndIndex === -1) {
        console.error("Could not find end of array in", filePath);
        return;
    }
    const before = code.substring(0, arrEndIndex);
    const after = code.substring(arrEndIndex);
    
    let cleanBefore = before.trimEnd();
    if (cleanBefore.endsWith(",")) {
        cleanBefore = cleanBefore.slice(0, -1);
    }
    
    // JSON is perfectly valid JavaScript and TypeScript.
    const newItemsStr = newComps.map(c => JSON.stringify(c, null, 4)).join(",\n") + "\n";
    const newCode = cleanBefore + ",\n" + newItemsStr + after;
    
    fs.writeFileSync(filePath, newCode);
    console.log("Successfully injected 10 items into", filePath);
}

injectComparisons("app/comparisons/page.tsx");
injectComparisons("app/comparisons/[slug]/page.tsx");
