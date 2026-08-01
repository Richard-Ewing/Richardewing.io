const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const APP_DIR = path.join(ROOT_DIR, 'src', 'app');
const APP_DIR_ALT = path.join(ROOT_DIR, 'app');

const actualAppDir = fs.existsSync(APP_DIR) ? APP_DIR : fs.existsSync(APP_DIR_ALT) ? APP_DIR_ALT : null;

let errors = 0;

function checkFileContains(filePath, patterns, description) {
    if (!fs.existsSync(filePath)) {
        console.error(`❌ Missing file for ${description}: ${filePath}`);
        errors++;
        return;
    }
    const content = fs.readFileSync(filePath, 'utf8');
    
    let passed = false;
    if (Array.isArray(patterns)) {
        passed = patterns.some(pattern => {
            if (pattern instanceof RegExp) return pattern.test(content);
            return content.includes(pattern);
        });
    } else {
        passed = patterns instanceof RegExp ? patterns.test(content) : content.includes(patterns);
    }
    
    if (passed) {
        console.log(`✅ Passed: ${description}`);
    } else {
        console.error(`❌ Failed: ${description} - Could not find expected content in ${filePath}`);
        errors++;
    }
}

function checkNextConfigForRedirect(source, destination, description) {
    const configPathTs = path.join(ROOT_DIR, 'next.config.ts');
    const configPathMjs = path.join(ROOT_DIR, 'next.config.mjs');
    const configPathJs = path.join(ROOT_DIR, 'next.config.js');
    
    let content = '';
    if (fs.existsSync(configPathTs)) content += fs.readFileSync(configPathTs, 'utf8');
    if (fs.existsSync(configPathMjs)) content += fs.readFileSync(configPathMjs, 'utf8');
    if (fs.existsSync(configPathJs)) content += fs.readFileSync(configPathJs, 'utf8');
    
    if (content.includes(source) && content.includes(destination)) {
        console.log(`✅ Passed: ${description} (found in config)`);
        return true;
    }
    return false;
}

function checkRedirect(pagePath, source, destination, description) {
    if (checkNextConfigForRedirect(source, destination, description)) {
        return;
    }
    
    checkFileContains(
        pagePath, 
        [
            new RegExp(`redirect\\(['"\`]${destination}['"\`]`),
            new RegExp(`permanentRedirect\\(['"\`]${destination}['"\`]`)
        ], 
        description
    );
}

if (!actualAppDir) {
    console.error('❌ Could not find app directory (src/app or app).');
    process.exit(1);
}

console.log('--- Starting Verification Audit ---');

// Redirects
checkRedirect(
    path.join(actualAppDir, 'advisory', 'page.tsx'), 
    '/advisory', 
    '/services', 
    '/advisory redirects to /services'
);

checkRedirect(
    path.join(actualAppDir, 'research', 'concepts', 'page.tsx'), 
    '/research/concepts', 
    '/concepts', 
    '/research/concepts redirects to /concepts'
);

// For dynamic route, checking if config has it or if page.tsx has it
const slugRedirectPath = path.join(actualAppDir, 'research', 'concepts', '[slug]', 'page.tsx');
if (!checkNextConfigForRedirect('/research/concepts/:slug', '/concepts/:slug', '/research/concepts/[slug] redirects to /concepts/[slug]')) {
    checkFileContains(
        slugRedirectPath,
        [
            /redirect\(`\/concepts\/\$\{.*?\}\`\)/,
            /permanentRedirect\(`\/concepts\/\$\{.*?\}\`\)/,
            /redirect\(['"]\/concepts\//,
            /permanentRedirect\(['"]\/concepts\//
        ],
        '/research/concepts/[slug] redirects to /concepts/[slug]'
    );
}

// JSON-LD Schemas
checkFileContains(path.join(actualAppDir, 'faq', 'page.tsx'), ['FAQPage', 'application/ld+json'], '/faq renders FAQPage schema');
checkFileContains(path.join(actualAppDir, 'blog', '[slug]', 'page.tsx'), ['Article', 'application/ld+json'], '/blog/[slug] renders Article schema');
checkFileContains(path.join(actualAppDir, 'assessment', 'page.tsx'), ['HowTo', 'application/ld+json'], '/assessment renders HowTo schema');
checkFileContains(path.join(actualAppDir, 'services', 'page.tsx'), ['BreadcrumbSchema', 'BreadcrumbList', 'application/ld+json'], '/services renders BreadcrumbList schema');

// Services Pages
const services = ['ai-cost-audit', 'technical-due-diligence', 'platform-consolidation'];
for (const service of services) {
    const pagePath = path.join(actualAppDir, 'services', service, 'page.tsx');
    checkFileContains(pagePath, ['BreadcrumbList', 'application/ld+json'], `/services/${service} renders BreadcrumbList`);
    checkFileContains(pagePath, ['export const metadata', 'export function generateMetadata'], `/services/${service} exports metadata`);
}

if (errors > 0) {
    console.error(`\n🚨 Verification failed with ${errors} errors.`);
    // Exit code 0 for now to prevent breaking build if files aren't created yet by other streams, 
    // but typically this should be process.exit(1). We'll keep it 1 as requested.
    process.exit(1);
} else {
    console.log(`\n🎉 All verifications passed successfully!`);
}
