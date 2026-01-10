document.addEventListener('DOMContentLoaded', () => {
    console.log('SURVEILLANCE ENGINE: ACTIVE [v10.1 - Optimized]');

    // 1. GA4/GTM Event Pusher
    const trackEvent = (category, action, label) => {
        console.log(`[TRACKING] ${category} | ${action} | ${label}`);
        if (typeof gtag !== 'undefined') gtag('event', action, { 'event_category': category, 'event_label': label });
        if (window.dataLayer) window.dataLayer.push({ event: 'custom_event', category, action, label });
    };

    // 2. Link Interceptor (PDFs, APER, Nav, Kill Switch)
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            // Track Specific Clicks
            if (href && href.endsWith('.pdf')) {
                trackEvent('PDF', 'Download', href.split('/').pop());
            } else if (link.innerText.includes('APER')) {
                trackEvent('Conversion', 'APER_Click', href);
            } else if (href && href.startsWith('/')) {
                trackEvent('Navigation', 'Click', link.innerText);
            }

            // Kill Switch UX (Toast Notification for Dead Links)
            if (href === '#' || href === '') {
                e.preventDefault();
                const toast = document.createElement('div');
                toast.innerText = 'ACCESS DENIED: CLEARANCE REQUIRED';
                toast.style.cssText = `
                position: fixed; bottom: 20px; right: 20px; 
                background: #FF3333; color: white; padding: 12px 24px; 
                font-family: 'Menlo', monospace; font-weight: bold; font-size: 12px;
                border: 1px solid white; z-index: 9999; box-shadow: 0 0 20px rgba(255,51,51,0.4);
                opacity: 0; transition: opacity 0.3s ease;
            `;
                document.body.appendChild(toast);

                // Fade in
                requestAnimationFrame(() => toast.style.opacity = '1');

                // Remove after 3 seconds
                setTimeout(() => {
                    toast.style.opacity = '0';
                    setTimeout(() => toast.remove(), 300);
                }, 3000);
            }
        });
    });

    // 3. Automated Scroll Depth (Throttled for Efficiency)
    let scrollTracked = { 25: false, 50: false, 75: false, 100: false };
    let scrollTimeout;

    window.addEventListener('scroll', () => {
        if (scrollTimeout) return;

        scrollTimeout = setTimeout(() => {
            const scrollTop = window.scrollY || window.pageYOffset;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const scrollPercent = Math.round((scrollTop / docHeight) * 100);

            [25, 50, 75, 100].forEach(p => {
                if (scrollPercent >= p && !scrollTracked[p]) {
                    scrollTracked[p] = true;
                    trackEvent('Scroll Depth', 'Reached', `${p}%`);
                }
            });
            scrollTimeout = null;
        }, 100); // Checks every 100ms (10 times/sec) instead of 60+
    });
});
