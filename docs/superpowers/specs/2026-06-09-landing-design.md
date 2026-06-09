# Design Spec: ДонРесурс Landing Page

## 1. Overview
A high-conversion, mobile-first landing page for "ДонРесурс" (water well drilling in DPR). The site implements the "Trust & Authority" UI/UX pattern with the Rock & Romi marketing algorithm to address user skepticism and highlight the "System 125" unique mechanism.

## 2. Architecture & Tech Stack
* **Framework:** React (Vite) for fast rendering and optimal developer experience.
* **Styling:** Vanilla CSS with custom properties (CSS variables) or CSS Modules for clean, modular scoping without the overhead of heavy frameworks.
* **State Management:** React Hooks (`useState`, `useReducer`, or Context API) tailored for the interactive quiz-calculator to track user progress, selections, and validation seamlessly.
* **Animations:** Framer Motion for modern, smooth step-by-step wizard transitions, scroll-reveals, and micro-interactions.
* **Icons:** Phosphor Icons or Heroicons (SVG React components). No emojis.

## 3. Visual Design System
* **Primary Color:** `#0284C7` (Trust Blue)
* **Secondary/Accent:** `#0891B2` (Action Cyan)
* **Background:** `#F0F9FF` (Light Blue/White)
* **Text:** `#0F172A` (Dark Slate)
* **Typography:** `Poppins` (Headings) / `Open Sans` (Body).
* **Components:** Cards with subtle shadows (`#E0F0F8` borders), large tap targets (min 44px) for mobile usability.

## 4. Key Components
1. **Hero Section:** Sticky CTA, provocative headline debunking the "double casing" myth, smooth fade-in animation.
2. **Benefit Cards:** 3-column on desktop, 1-column on mobile. Highlighting clean yard, maneuverability, and honest pipe diameter. Staggered reveal on scroll.
3. **Persuasion Blocks:** Alternating text/image blocks explaining the "System 125".
4. **Interactive Quiz-Calculator (React Component):** 
   - *State Management:* Managed via custom hook (`useQuizState`) to hold answers across steps and handle back/forward navigation.
   - *Step 1:* Location/Depth estimation.
   - *Step 2:* Site conditions (access width).
   - *Step 3:* Contact info for the free calculation & bonus.
   - *UX/Animations:* Progress bar, inline validation, slide-in/fade-out transitions between steps using Framer Motion `<AnimatePresence>`.
5. **Trust & Proof:** 1-year guarantee badge, "Pay only for clean water" highlight.

## 5. Performance & UX Rules
* Images will be optimized and lazy-loaded.
* Code splitting for the quiz component if necessary.
* Clickable elements must have clear hover states (150-300ms transition) and large hit areas.
* Forms validate inline on blur, providing clear error states without layout shifts.
