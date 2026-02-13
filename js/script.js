// Register GSAP Flip plugin to prevent visual jumps
// when the DOM structure changes (grid elements repositioning in this case)
gsap.registerPlugin(Flip);

// Main grid container element
const bentoContainer = document.getElementById('bento-box');

// DOM validation
if (!bentoContainer) {
    console.error('Error: #bento-box element not found.');
}

// Array of classes representing the different grid layouts
const gridLayouts = [
    'grid-about',
    'grid-projects',
    'grid-writing',
    'grid-contact'
];

// Map between navbar link IDs (keys)
// and the corresponding grid layout class to apply on click (values)
const buttonsMap = {
    'about-first-btn': 'grid-about',
    'projects-first-btn': 'grid-projects',
    'writing-first-btn': 'grid-writing',
    'contact-first-btn': 'grid-contact'
};

// Iterate over buttonsMap:
// for each key, select the link with the matching ID
Object.keys(buttonsMap).forEach(btnId => {
    const btn = document.getElementById(btnId);

    // Validate link existence
    if (!btn) return;

    // When a navbar link is clicked
    btn.addEventListener('click', () => {

        // Capture current state (including computed CSS properties)
        // of all .grid-element elements using GSAP Flip
        const state = Flip.getState('.grid-element');

        // Remove any previously applied grid layout class
        gridLayouts.forEach(layout => {
            bentoContainer.classList.remove(layout);
        });

        // Apply the grid class associated with the clicked link
        bentoContainer.classList.add(buttonsMap[btnId]);

        // Animate grid elements smoothly to their new layout using FLIP
        Flip.from(state, {
            duration: 0.6,
            ease: 'power2.inOut',
            stagger: 0.02,
            absolute: true
        });
    });
});


// Burger navigation (mobile)
const burger = document.querySelector('.burger-btn');
const nav = document.querySelector('.main-navbar');
const overlay = document.querySelector('.menu-overlay');

function toggleMenu() {
    const isActive = burger.classList.toggle('active');
    nav.classList.toggle('active');
    overlay.classList.toggle('active');

    // Update aria-expanded for accessibility
    burger.setAttribute('aria-expanded', isActive);
}

// Close menu helper function
function closeMenu() {
    burger.classList.remove('active');
    nav.classList.remove('active');
    overlay.classList.remove('active');
    burger.setAttribute('aria-expanded', false);
}

// Main event listeners
if (burger) burger.addEventListener('click', toggleMenu);
if (overlay) overlay.addEventListener('click', closeMenu);

// Close menu when pressing Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
});

// Accessibility improvement: close menu when any navbar link is clicked
document.querySelectorAll('.main-navbar a').forEach(link => {
    link.addEventListener('click', closeMenu);
});
