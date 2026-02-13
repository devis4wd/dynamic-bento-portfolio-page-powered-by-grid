# Dynamic Bento Grid Portfolio Page

A creative single-page portfolio concept built around a dynamic CSS Grid system.

This project explores layout reconfiguration, visual identity design, and smooth UI transitions using JavaScript and GSAP Flip. The goal was to create a futuristic, tech-inspired “bento-style” portfolio that dynamically reorganizes itself based on user interaction.

## Screenshots and live project

You can see the online project [here]( https://devis4wd.github.io/dynamic-bento-portfolio-page-powered-by-grid/). 

Some screenshots here: 
- [screenshot-1](screenshots/screenshot-1.jpg)
- [screenshot-2](screenshots/screenshot-2.jpg)
- [screenshot-3](screenshots/screenshot-3.jpg)

---

## Project Overview

This is a single-page portfolio concept structured around a central grid container.  
The layout consists of multiple “tiles” (grid elements), grouped into four main categories:

- About  
- Projects  
- Writing  
- Contact  

Each group has its own visual identity inspired by:
- Space aesthetics  
- Cyberpunk UI  
- Retrofuturism  
- Neon / Tech interfaces  

All visual elements — including backgrounds, decorative assets, and graphical details — were designed and assembled by me (with custom assets created in Figma), then implemented in HTML, CSS, and JavaScript.

---

## Core Concept

The core idea behind this project is **dynamic layout transformation**.

Instead of navigating between pages, the layout itself changes.

When a user clicks a navigation link:

1. JavaScript applies a different `grid-template-areas` class to the main grid container.
2. The grid reorganizes so that the selected section moves to the top.
3. The remaining sections are repositioned below, still grouped by category.
4. GSAP Flip animates the transition to avoid visual jumps and create a smooth layout shift.

This approach keeps the experience on a single page while creating the perception of structured navigation and hierarchy.

---

## Technologies Used

- HTML5 (semantic structure)
- CSS3 (Grid, Flexbox, custom properties, animations)
- JavaScript (DOM manipulation, state management)
- GSAP Flip plugin (smooth layout transitions)
- Figma (custom visual assets and design work)

---

## Layout Architecture

- A central container (`#bento-box`) uses CSS Grid.
- Each tile shares a base `.grid-element` class.
- Tiles are grouped using additional classes like:
  - `.about-el`
  - `.projects-el`
  - `.writing-el`
  - `.contact-el`
- Different grid layout classes (`grid-about`, `grid-projects`, etc.) redefine `grid-template-areas` dynamically.
- Inside individual tiles, Flexbox and nested grid compositions are used for internal alignment.

---

## Accessibility & UX Considerations

- Semantic HTML structure
- Descriptive `alt` attributes
- ARIA attributes (`aria-expanded`) for mobile navigation
- Keyboard support (Escape closes mobile menu)
- `:focus-visible` styles for accessibility
- Responsive layout via media queries
- Lazy loading for images
- External links use `rel="noopener noreferrer"`

---

## Responsive Design

The layout adapts at different breakpoints:

- Desktop: Full 3-column dynamic grid
- Tablet: Reduced column structure
- Mobile: Single-column stacked layout
- Burger navigation with modal-style slide-in menu

Grid layouts are redefined per breakpoint to maintain visual coherence while preserving the dynamic reordering logic.

---

## What This Project Demonstrates

- Advanced CSS Grid usage with dynamic `grid-template-areas`
- Smooth layout animation using GSAP Flip
- Ability to create custom visual assets with Figma
- Ability to translate a custom design into a working front-end implementation
- Strong visual direction and thematic consistency
- Responsive architecture without layout duplication
- Clean, modular styling structure
- Accessibility-aware implementation

---

## Purpose

This project was created to demonstrate:

- Creative front-end thinking
- Layout experimentation beyond standard section-based portfolios
- Visual storytelling through UI
- The ability to design in Figma and implement pixel-accurate results in code

It reflects both technical execution and design sensitivity within a cohesive, futuristic aesthetic.

## Legal Credits

This project was created for educational and portfolio purposes only.
Some visual references were sourced from publicly available design material (e.g., Pinterest) for stylistic inspiration.  
No claim of ownership is made over third-party reference content.


---

If you're reviewing this project as a recruiter or collaborator, feel free to explore the code structure and layout logic — the dynamic grid behavior is the core of the implementation.

