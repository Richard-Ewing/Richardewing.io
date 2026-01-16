document.addEventListener('DOMContentLoaded', () => {

    // --- 1. MOBILE MENU TOGGLE ---
    const aside = document.querySelector('aside');
    const nav = document.querySelector('nav');

    // Create HAMBURGER button dynamically if it doesn't exist
    if (window.innerWidth <= 1024) {
        const toggleBtn = document.createElement('button');
        toggleBtn.innerHTML = '☰ MENU';
        toggleBtn.style.cssText = `
            background: transparent; 
            border: 1px solid #333; 
            color: #fff; 
            padding: 0.5rem 1rem; 
            font-family: var(--mono); 
            font-size: 0.7rem; 
            cursor: pointer;
            width: 100%;
            margin-top: 1rem;
        `;

        toggleBtn.addEventListener('click', () => {
            nav.classList.toggle('active');
            toggleBtn.innerHTML = nav.classList.contains('active') ? '✕ CLOSE' : '☰ MENU';
        });

        // Insert after brand
        const brand = document.querySelector('.brand');
        if (brand) brand.appendChild(toggleBtn);
    }

    // --- 2. WORD ROTATE EFFECT ---
    const rotateElements = document.querySelectorAll('.word-rotate');
    rotateElements.forEach(el => {
        const words = JSON.parse(el.getAttribute('data-words') || '[]');
        if (words.length === 0) return;

        let index = 0;
        setInterval(() => {
            index = (index + 1) % words.length;
            el.style.opacity = '0';
            setTimeout(() => {
                el.innerText = words[index];
                el.style.opacity = '1';
            }, 300);
        }, 3000);
    });

    // --- 3. BORDER SHINE HOVER EFFECT ---
    const cards = document.querySelectorAll('.card, .capsule-container');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

});
