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


    // --- 3. SCROLL REVEAL (MAGIC UI) ---
    // Target elements: .scroll-reveal, .capsule-container
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once revealed
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const scrollElements = document.querySelectorAll('.scroll-reveal, .capsule-container');
    scrollElements.forEach(el => revealOnScroll.observe(el));


    // --- 4. NUMBER TICKER (MAGIC UI) ---
    // Usage: <span class="number-ticker" data-target="1000">0</span>
    const tickerObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.getAttribute('data-target') || '0', 10);
                animateValue(el, 0, target, 2000);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.number-ticker').forEach(el => tickerObserver.observe(el));

    // Expose for dynamic usage (Calculators)
    window.animateValue = function (obj, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            // EaseOutExpo or similar
            const easeProgress = 1 - Math.pow(2, -10 * progress);

            const value = Math.floor(easeProgress * (end - start) + start);
            obj.innerHTML = value.toLocaleString(); // Add commas

            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                obj.innerHTML = end.toLocaleString(); // Ensure final value is exact
            }
        };
        window.requestAnimationFrame(step);
    };


    // --- 5. BORDER SHINE HOVER EFFECT ---
    const cards = document.querySelectorAll('.card, .capsule-container, .bento-item, .btn-outline');
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
