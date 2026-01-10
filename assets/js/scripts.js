document.addEventListener('DOMContentLoaded', () => {
    console.log('SURVEILLANCE ENGINE: ACTIVE [v12.0 - INSTITUTIONAL]');

    const trackEvent = (category, action, label) => {
        console.log(`[TRACKING] ${category} | ${action} | ${label}`);
        if (typeof gtag !== 'undefined') gtag('event', action, { 'event_category': category, 'event_label': label });
        if (window.dataLayer) window.dataLayer.push({ event: 'custom_event', category, action, label });
    };

    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            // Track Funnels
            if (href === '/manifesto.html') trackEvent('Funnel', 'Enter', 'The Church');
            else if (href === '/academy.html') trackEvent('Funnel', 'Enter', 'The University');
            else if (href === '/methodology.html') trackEvent('Funnel', 'Enter', 'The System');
            else if (href === '/advisory.html') trackEvent('Funnel', 'Enter', 'The ER');

            // Track PDFs
            if (href && href.endsWith('.pdf')) {
                trackEvent('PDF', 'Download', href.split('/').pop());
            }

            // Kill Switch UX
            if (href === '#' || href === '') {
                e.preventDefault();
                const toast = document.createElement('div');
                toast.innerText = 'ACCESS DENIED: CLEARANCE REQUIRED';
                toast.style.cssText = `
                position: fixed; bottom: 20px; right: 20px; 
                background: #FF3333; color: white; padding: 12px 24px; 
                font-family: 'Menlo', monospace; font-weight: bold; font-size: 12px;
                border: 1px solid white; z-index: 9999; box-shadow: 0 0 20px rgba(255,51,51,0.4);
            `;
                document.body.appendChild(toast);
                setTimeout(() => toast.remove(), 3000);
            }
        });
    });

    // Throttled Scroll Tracking
    let scrollTimeout;
    let scrollTracked = { 25: false, 50: false, 75: false, 100: false };
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
        }, 100);
    });
});
