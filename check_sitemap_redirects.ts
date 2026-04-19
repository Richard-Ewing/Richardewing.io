import { NextConfig } from 'next';
import config from './next.config';

async function checkSitemap() {
    const sitemapMod = require('./app/sitemap');
    const sitemaps = sitemapMod.default();
    const redirects = await config.redirects();
    
    let count = 0;
    for (const entry of sitemaps) {
        let urlPath = entry.url.replace('https://www.richardewing.io', '');
        
        for (const rule of redirects) {
            // Simplified check: if rule.source exactly matches or simple wildcard
            let s = rule.source.replace(':slug*', '').replace(':slug', ''); // very naive
            if (s === urlPath || (rule.source.includes('*') && urlPath.startsWith(rule.source.replace(':slug*', '').replace('/*', '').replace('/:path*', '')))) {
               // Let's do a proper regex check
               let regexStr = rule.source
                 .replace(/:[a-zA-Z0-9_]+\*/g, '(.*)')
                 .replace(/:[a-zA-Z0-9_]+/g, '([^/]+)');
               let regex = new RegExp('^' + regexStr + '$');
               if (regex.test(urlPath)) {
                   console.log("MATCH FOUND in SITEMAP:", urlPath, "-> REDIRECTS WITH:", rule.source);
                   count++;
               }
            }
        }
    }
    console.log("Total sitemap URLs checked:", sitemaps.length);
    console.log("Total redirects matched:", count);
}
checkSitemap();
