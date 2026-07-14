import sitemap from './app/sitemap';
import fs from 'fs';

async function run() {
    const data = await sitemap();
    fs.writeFileSync('tmp_sitemap.json', JSON.stringify(data, null, 2));
    console.log('Sitemap dumped! Length: ', data.length);
}
run();
