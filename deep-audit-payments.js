const fs = require('fs');
const path = require('path');

const productsCode = fs.readFileSync(path.join(__dirname, 'app/lib/products.ts'), 'utf8');
const products = {};
const matches = [...productsCode.matchAll(/([a-zA-Z0-9_]+):\s*{[^}]*price:\s*([0-9]+),[^}]*paymentLink:\s*'([^']+)'/sg)];
matches.forEach(m => {
    products[m[1]] = { price: parseInt(m[2], 10) / 100, link: m[3] };
});

const filesToScan = [];
function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);
    arrayOfFiles = arrayOfFiles || [];
    files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
        } else {
            if (['.tsx', '.jsx'].includes(path.extname(file))) {
                arrayOfFiles.push(path.join(dirPath, "/", file));
            }
        }
    });
    return arrayOfFiles;
}
['app', 'components'].forEach(dir => { if (fs.existsSync(dir)) getAllFiles(dir, filesToScan); });

const map = [];

filesToScan.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    
    // Scan for any /api/buy/ routing
    const buyRegex = /(?:href|action)=["'`]\/api\/buy\/([a-zA-Z0-9_]+)["'`]/g;
    let buyMatch;
    
    while ((buyMatch = buyRegex.exec(content)) !== null) {
        const productKey = buyMatch[1];
        const ctxStart = Math.max(0, buyMatch.index - 800);
        const ctxEnd = Math.min(content.length, buyMatch.index + 800);
        const context = content.substring(ctxStart, ctxEnd);
        
        // Find $ prices in context
        const pricesBlock = [...context.matchAll(/\$([0-9,]+)/g)]
                             .map(m => parseInt(m[1].replace(/,/g, ''), 10));
        
        // Identify the most likely price (closest to the link, or largest number, or exact match)
        const uniquePrices = [...new Set(pricesBlock)];
        
        const realPrice = products[productKey] ? products[productKey].price : 'NOT_FOUND';
        
        map.push({
            file,
            productKey,
            internalStripePrice: realPrice,
            uiPricesFoundAroundLink: uniquePrices
        });
    }

    // Direct Stripe links
    const stripeRegex = /https:\/\/buy\.stripe\.com\/([^"'\s]+)/g;
    let stMatch;
    while ((stMatch = stripeRegex.exec(content)) !== null) {
        // Exclude products.ts
        if (file.includes('products.ts')) continue;
        
        const fullLink = 'https://buy.stripe.com/' + stMatch[1];
        const prodKey = Object.keys(products).find(k => products[k].link === fullLink);
        const realPrice = prodKey ? products[prodKey].price : 'UNKNOWN_STRIPE_LINK';
        
        const ctxStart = Math.max(0, stMatch.index - 500);
        const ctxEnd = Math.min(content.length, stMatch.index + 500);
        const context = content.substring(ctxStart, ctxEnd);
        const uniquePrices = [...new Set([...context.matchAll(/\$([0-9,]+)/g)].map(m => parseInt(m[1].replace(/,/g, ''), 10)))];
        
        map.push({
            file,
            directStripeLink: fullLink,
            productKey: prodKey || 'UNMAPPED',
            internalStripePrice: realPrice,
            uiPricesFoundAroundLink: uniquePrices
        });
    }
});

console.log(JSON.stringify(map, null, 2));
