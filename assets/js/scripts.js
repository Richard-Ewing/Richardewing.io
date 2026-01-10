document.addEventListener('DOMContentLoaded', () => {
    console.log('SURVEILLANCE ENGINE: ACTIVE [v6.0]');

    // 1. GA4/GTM Event Pusher
    const trackEvent = (category, action, label) => {
        console.log(`[TRACKING] ${category} | ${action} | ${label}`);
        if (typeof gtag !== 'undefined') gtag('event', action, { 'event_category': category, 'event_label': label });
        if (window.dataLayer) window.dataLayer.push({ event: 'custom_event', category, action, label });
    };

    // 2. Automated Scroll Depth
    let scrollTracked = { 25: false, 50: false, 75: false, 100: false };
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY || window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = Math.round((scrollTop / docHeight) * 100);
        [25, 50, 75, 100].forEach(p => {
            if (scrollPercent >= p && !scrollTracked[p]) {
                scrollTracked[p] = true;
                trackEvent('Scroll Depth', 'Reached', `${p}%`);
            }
        });
    });

    // 3. Smart Link Handling
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            // Track PDF
            if (href && href.endsWith('.pdf')) {
                trackEvent('PDF', 'Download', href.split('/').pop());
            }
            // Track APER
            else if (link.innerText.includes('APER')) {
                trackEvent('Conversion', 'APER_Click', href);
            }
            // Track Nav
            else if (href && href.startsWith('/')) {
                trackEvent('Navigation', 'Click', link.innerText);
            }

            // Trap "Coming Soon" or empty links
            if (href === '#' || href === '') {
                e.preventDefault();
                alert('ACCESS DENIED: This asset is currently classified. Join the Board Brief for release updates.');
            }
        });
    });
});
