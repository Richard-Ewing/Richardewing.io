document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            console.log('Engagement:', e.target.innerText, e.target.href);
            // GA4 Hook: gtag('event', 'click', { 'event_category': 'CTA', 'event_label': e.target.innerText });
        });
    });
});
