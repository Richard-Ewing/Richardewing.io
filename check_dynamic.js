try {
    const { modules } = require('./app/lib/curriculum-data');
    const { tracks } = require('./app/lib/curriculum-tracks-ui');
    
    let dynModules = [];
    
    tracks.forEach(t => {
        t.modules.forEach(m => {
            let slug = m.href.replace('/vault/curriculum/tracks/', '').replace('/curriculum/tracks/', '');
            if (!modules[slug] || modules[slug].takeaways[0].includes('Master the mechanics of')) {
                dynModules.push({track: t.title, slug});
            }
        });
    });
    
    console.log(`TOTAL DYNAMIC: ${dynModules.length}`);
    console.log(dynModules);
} catch (e) {
    console.error(e);
}
