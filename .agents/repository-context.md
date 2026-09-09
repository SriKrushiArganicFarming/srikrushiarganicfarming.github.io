# Repository Context

## Purpose

Sri Krushi Organic Farming's website presents organic farming products, business information, contact details, blog/news content, policies, and a lightweight order cart.

## Stack

- React 19
- TypeScript
- Vite 6
- React Router 7
- Vitest + Testing Library
- ESLint 9
- `gh-pages` deployment

## Important Files

- `package.json`: scripts and dependency versions.
- `vite.config.ts`: Vite build config.
- `vitest.config.ts`: Vitest config.
- `eslint.config.mjs`: ESLint config.
- `src/main.tsx`: app bootstrap and cart provider wiring.
- `src/App.tsx`: route table, nav, footer, product category listing.
- `src/ProductDetails.tsx`: product detail data, image gallery, cart controls.
- `src/CartContext.tsx`: cart context, item type, mutations.
- `src/Cart.tsx`: order form and outbound order links.
- `src/App.css`: global visual styling and responsive rules.

## Current Routes

- `/` and `/products`: product listing.
- `/product/:slug`: product detail page for a category.
- `/about`: business background and factsheet.
- `/blog`: blog content.
- `/news`: news content.
- `/contact`: contact people, phone links, address, map link.
- `/cart`: order form and current cart.
- `/privacy-policy`: privacy policy page.
- `/security-policy`: security policy page.

## Product Data Model

The listing in `src/App.tsx` uses simple category objects:

- `slug`
- `name`
- `description`
- `image`

The detail view in `src/ProductDetails.tsx` uses richer category objects with `subProducts`. Sub-products are flexible objects and may include:

- `name`
- `images`
- `price`
- `minOrder`
- `usage`
- `packType`
- `form`
- `packSize`
- `grade`
- `isOrganic`
- `type`
- `processingType`
- `packagingSizes`
- `brand`
- `color`
- `cultivationType`
- `variety`
- `quality`
- `description`

Cart additions pass `name`, optional `price`, first `image`, `quantity`, and optional `packSize`.

## Testing Baseline

The current test file is `src/App.test.tsx`. It checks that navigation links, the product heading, and footer text render. There are no dedicated tests for cart behavior, routing details, image gallery interactions, or order link generation.

## Deployment

The `deploy` script publishes `dist` with `gh-pages`. `predeploy` runs `npm run build` automatically before deployment.
