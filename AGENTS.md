# Agent Guide

This repository is the static website for Sri Krushi Organic Farming. It is a Vite + React + TypeScript app deployed to GitHub Pages.

## Working Commands

- Install dependencies: `npm install`
- Start local development: `npm run dev`
- Build production assets: `npm run build`
- Preview production build: `npm run preview`
- Run tests: `npm test`
- Run lint: `npm run lint`
- Deploy to GitHub Pages: `npm run deploy`

## Project Shape

- `src/main.tsx` mounts the React app and wraps it in `CartProvider`.
- `src/App.tsx` defines top-level routes, navigation, footer, and the main product listing.
- `src/ProductDetails.tsx` defines the detailed product catalog, sub-products, gallery behavior, and add/remove cart controls.
- `src/CartContext.tsx` owns in-memory cart state and exposes `useCart`.
- `src/Cart.tsx` renders the order form and builds Email, WhatsApp, and SMS order links.
- `src/App.css` contains the global styles and responsive layout rules.
- `src/assets/` contains product and page imagery imported directly by React components.
- `public/` contains static browser assets such as `robots.txt`, manifest, and favicon.

## Architecture Notes

- Routing uses `react-router-dom` with client-side routes for products, content pages, policies, and cart.
- The cart is not persisted. Refreshing the page clears it.
- Cart items are keyed by `name`; changing sub-product names affects cart merge/remove behavior.
- Product category data appears in both `src/App.tsx` and `src/ProductDetails.tsx`. Keep names, slugs, descriptions, and images in sync when editing catalog content.
- Most product detail styles are inline in `src/ProductDetails.tsx`; broader layout and breakpoints are in `src/App.css`.
- Imported asset paths are part of the build graph. Prefer importing images from `src/assets` instead of referencing them by string path.

## Change Guidelines

- Keep changes small and consistent with the existing simple React component style.
- Before adding a new product or category, update both the listing data in `src/App.tsx` and the detailed data in `src/ProductDetails.tsx`.
- Preserve existing contact/order channels unless the business details are explicitly changed.
- Check small-screen layout after product card, gallery, nav, cart, or form changes; the CSS has dedicated breakpoints at `320px`, `321px-599px`, and `600px+`.
- Run `npm test` and `npm run lint` for code changes when dependencies are available.

## Known Follow-Up Opportunities

- Move duplicated product data into a shared typed module.
- Persist cart state to local storage if users should keep orders across refreshes.
- Replace the custom `useMemo` helper in `src/App.tsx` with React's built-in `useMemo`.
- Expand tests around cart operations, order message generation, and product detail rendering.
