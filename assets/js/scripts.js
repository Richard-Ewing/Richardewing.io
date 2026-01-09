document.addEventListener('DOMContentLoaded', () => {
    const trackEvent = (category, action, label) => {
        console.log(`SURVEILLANCE: ${category} | ${action} | ${label}`);
        if (typeof gtag !== 'undefined') gtag('event', action, { 'event_category': category, 'event_label': label });
        if (window.dataLayer) window.dataLayer.push({ event: 'custom_event', category, action, label });
    };

    document.querySelectorAll('a[href$=".pdf"]').forEach(pdf => {
        pdf.addEventListener('click', () => trackEvent('PDF', 'Download', pdf.getAttribute('href').split('/').pop()));
    });

    document.querySelectorAll('.btn, .btn-outline').forEach(btn => {
        if (btn.innerText.includes('APER')) btn.addEventListener('click', () => trackEvent('APER™', 'Click', btn.innerText));
    });

    document.querySelectorAll('.card a').forEach(link => {
        link.addEventListener('click', () => trackEvent('Related Paper', 'Click', link.href));
    });

    let scrollTracked = { 25: false, 50: false, 75: false, 100: false };
    window.addEventListener('scroll', () => {
        const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
        [25, 50, 75, 100].forEach(p => {
            if (scrollPercent >= p && !scrollTracked[p]) {
                scrollTracked[p] = true;
                trackEvent('Scroll Depth', 'Reached', `${p}%`);
            }
        });
    });
    console.log('SURVEILLANCE ENGINE: ACTIVE');
});
