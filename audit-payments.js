const fs = require('fs');
const path = require('path');


// Let's parse the products.ts directly if we can, or just read it as text
const productsCode = fs.readFileSync(path.join(__dirname, 'app/lib/products.ts'), 'utf8');
const products = {};
// primitive parsing of products object
const matches = [...productsCode.matchAll(/([a-zA-Z0-9_]+):\s*{[^}]*price:\s*([0-9]+),[^}]*paymentLink:\s*'([^']+)'/sg)];
matches.forEach(m => {
    products[m[1]] = { price: parseInt(m[2], 10), link: m[3] };
});

const DIRECTORIES = ['app', 'components'];
const filesToScan = [];

function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);
    arrayOfFiles = arrayOfFiles || [];
    files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
        } else {
            const ext = path.extname(file);
            if (['.tsx', '.jsx'].includes(ext)) {
                arrayOfFiles.push(path.join(dirPath, "/", file));
            }
        }
    });
    return arrayOfFiles;
}

DIRECTORIES.forEach(dir => {
    if (fs.existsSync(dir)) {
        getAllFiles(dir, filesToScan);
    }
});

const issues = [];

filesToScan.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    
    // Look for all <a href="/api/buy/...">...$XXX...</a>
    // We'll use a regex that captures href and surrounding button text
    const regex = /href="\/api\/buy\/([^"]+)"[^>]*>([^<]+)<\/a>/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
        const productKey = match[1];
        const text = match[2];
        
        // Find price string in text (e.g. $199)
        const priceMatch = text.match(/\$([0-9,]+)/);
        if (priceMatch) {
            const statedPriceText = priceMatch[1].replace(/,/g, '');
            const statedPriceCents = parseInt(statedPriceText, 10) * 100;
            
            const prod = products[productKey];
            if (prod) {
                if (prod.price !== statedPriceCents) {
                    issues.push({
                        file,
                        productKey,
                        text: text.trim(),
                        statedPrice: statedPriceCents / 100,
                        realPrice: prod.price / 100
                    });
                }
            } else {
                issues.push({
                    file,
                    productKey,
                    text: text.trim(),
                    error: "PRODUCT NOT FOUND IN products.ts"
                });
            }
        }
    }
    
    // Also look for direct Stripe links
    const stripeRegex = /href="(https:\/\/buy\.stripe\.com\/[^"]+)"[^>]*>([^<]+)<\/a>/g;
    while ((match = stripeRegex.exec(content)) !== null) {
        const directLink = match[1];
        const text = match[2];
        
        const priceMatch = text.match(/\$([0-9,]+)/);
        if (priceMatch) {
            const statedPrice = parseInt(priceMatch[1].replace(/,/g, ''), 10);
            
            // Find product with this link
            const prodKey = Object.keys(products).find(k => products[k].link === directLink);
            if (prodKey) {
                if (products[prodKey].price / 100 !== statedPrice) {
                    issues.push({
                        file,
                        link: directLink,
                        text: text.trim(),
                        statedPrice,
                        realPrice: products[prodKey].price / 100,
                        productKey: prodKey
                    });
                }
            } else {
                issues.push({
                    file,
                    link: directLink,
                    text: text.trim(),
                    statedPrice,
                    error: "STRIPE LINK NOT MATCHED TO ANY PRODUCT IN PRODUCTS.TS"
                });
            }
        }
    }
});

console.log(JSON.stringify(issues, null, 2));
