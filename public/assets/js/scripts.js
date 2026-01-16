document.addEventListener('DOMContentLoaded', () => {
    console.log('SURVEILLANCE ENGINE: ACTIVE [v15.0]');
    const trackEvent = (category, action, label) => {
        if (typeof gtag !== 'undefined') gtag('event', action, { 'event_category': category, 'event_label': label });
    };
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.endsWith('.pdf')) trackEvent('PDF', 'Download', href.split('/').pop());
            else if (link.innerText.includes('APER')) trackEvent('Conversion', 'APER_Click', href);

            if (href === '#' || href === '') {
                e.preventDefault();
                const toast = document.createElement('div');
                toast.innerText = 'ACCESS DENIED: CLEARANCE REQUIRED';
                toast.style.cssText = `position: fixed; bottom: 20px; right: 20px; background: #FF3333; color: white; padding: 12px 24px; font-family: monospace; font-weight: bold; border: 1px solid white; z-index: 9999;`;
                document.body.appendChild(toast);
                setTimeout(() => toast.remove(), 3000);
            }
        });
    });
});
