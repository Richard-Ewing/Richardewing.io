import { modules } from './app/lib/curriculum-data';

console.log("Modules populated in registry: " + Object.keys(modules).length);
const ids = new Map<string, string[]>();
for (const [key, mod] of Object.entries(modules)) {
    if (!ids.has(mod.moduleId)) {
        ids.set(mod.moduleId, []);
    }
    ids.get(mod.moduleId)!.push(key);
}

console.log("\n--- Modules with multiple slugs in registry ---");
let dupCount = 0;
for (const [id, keys] of ids.entries()) {
    if (keys.length > 1) {
        dupCount++;
        console.log(`Module ID ${id} maps to keys:`, keys);
    }
}
console.log(`Total duplicate IDs: ${dupCount}`);
