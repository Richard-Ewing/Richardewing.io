# Implementation Plan - Global Magic UI & Cyber-Financial Polish

We will implement a site-wide "Magic UI" overhaul using Vanilla JS and Tailwind CSS equivalents to achieve a high-end, fluid, "sticky" user experience.

## Goal
To make the UI look like a "billion dollars" with fluid animations, reactive elements, and a cohesive cyber-financial aesthetic.

## 1. Global Assets Upgrade (Vanilla JS Magic UI)
We will add reusable classes and JS logic to `assets/css/style.css` and `assets/js/scripts.js`.

### A. Scroll Reveal (Capsule Animation)
-   **Effect**: Elements fade in and slide up as they enter the viewport.
-   **Implementation**: Intersection Observer in `scripts.js`.
-   **Class**: `.scroll-reveal` (base opacity 0, transform Y).
-   **Variant**: `.capsule-hover` for the "frosted glass + glow" effect on hover.

### B. Number Ticker
-   **Effect**: Numbers count up rapidly to their final value.
-   **Target**: Calculator results, stat boxes.
-   **Implementation**: JS class `NumberTicker` in `scripts.js`. CSS class `number-ticker`.

### C. Bento Grid Layouts
-   **Effect**: Asymmetrical, clean grid layouts for content.
-   **Implementation**: CSS Grid utility classes in `style.css` (`.bento-grid`, `.bento-item`).

### D. Floating Dock / Navbar Polish
-   **Effect**: A cleaner, more interactive navigation experience.
-   **Implementation**: Enhance the existing Sidebar to be "sticky" with individual item hover effects (already partially done, will refine). Add a "Mobile Bottom Dock" or enhance the mobile menu to be more "app-like".

## 2. Page-by-Page Polish

### 1. Global Sidebar
-   **Action**: Apply `.nav-item` hover effects (glow/slide).
-   **Visual**: Ensure the "Headshot" has the "border beam" effect on hover.

### 2. Landing Page (`index.html`) & Principal (`principal.html`)
-   **Hero**: Ensure `WordRotate` and `BlurIn` are active (already done).
-   **Content**: Wrap main content sections in `.scroll-reveal` to animate on scroll.
-   **Stats**: If any stats exist, apply `NumberTicker`.

### 3. System (`system.html`)
-   **Diagnostic Tool**:
    -   Result output: Apply `NumberTicker` to the PDI Score.
    -   Container: Ensure `ShineBorder` is active.
-   **Grid**: Convert "APER" listing to a **Bento Grid** layout.

### 4. Advisory (`advisory.html`)
-   **Calculator**:
    -   Input fields: Add "focus glow" (cyber-financial style).
    -   Result: `NumberTicker` for ROI/Savings.
    -   Container: `BorderBeam`.
-   **Service List**: Use **Bento Grid** for "Fractional CPO", "Due Diligence", "Turnaround".

### 5. Doctrine (`doctrine.html`), Briefings (`briefings.html`), Book (`book.html`)
-   **Listings**: Convert standard lists to **Bento Grid** cards with `capsule-style` hover effects.
-   **Headers**: Apply `BlurIn` to page titles to set the mood.

## 3. Technical Execution Steps
1.  **Update `style.css`**: Add `bento-grid`, `scroll-reveal` states, and refined `capsule` styles.
2.  **Update `scripts.js`**: Add `IntersectionObserver` for scroll animations and `NumberTicker` logic.
3.  **Apply to Pages**: Systematically edit HTML files to add the new classes.
4.  **Verify**: Check all animations and responsiveness.
