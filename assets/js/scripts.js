document.addEventListener('DOMContentLoaded', () => {

    // --- 1. MOBILE MENU TOGGLE ---
    const nav = document.querySelector('nav');

    // Create HAMBURGER button dynamically if it doesn't exist (unless .mobile-menu-btn exists)
    let menuBtn = document.querySelector('.mobile-menu-btn');

    if (!menuBtn && window.innerWidth <= 1024) {
        menuBtn = document.createElement('button');
        menuBtn.className = 'mobile-menu-btn';
        menuBtn.innerHTML = '☰ MENU';
        menuBtn.style.cssText = `
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

        // Insert after brand
        const brand = document.querySelector('.brand');
        if (brand) brand.appendChild(menuBtn);
    }

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            nav.classList.toggle('active');
            menuBtn.innerHTML = nav.classList.contains('active') ? '✕ CLOSE' : '☰ MENU';
        });
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
                el.textContent = words[index];
                el.style.opacity = '1';
            }, 300); // Wait for fade out logic (transition time)
        }, 3000);
    });

    // Also support class-based usage if data-words is not used but logic is hardcoded
    class WordRotate {
        constructor(element, words) {
            this.element = element;
            this.words = words;
            this.index = 0;
            this.interval = 2000;
            this.init();
        }

        init() {
            this.cycle();
        }

        cycle() {
            setInterval(() => {
                this.index = (this.index + 1) % this.words.length;
                this.element.style.opacity = 0;
                setTimeout(() => {
                    this.element.textContent = this.words[this.index];
                    this.element.style.opacity = 1;
                }, 500);
            }, this.interval);
        }
    }

    // Initialize specific Word Rotates if needed
    // Example: new WordRotate(document.querySelector('.hero-rotate'), ['A', 'B']);


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
