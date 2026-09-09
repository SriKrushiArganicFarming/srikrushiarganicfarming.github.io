# Agent Workflows

## Local Development

1. Run `npm install` if dependencies are missing.
2. Run `npm run dev` to start Vite.
3. Use the local Vite URL for browser verification.

## Verification

For most code changes:

1. Run `npm test`.
2. Run `npm run lint`.
3. Run `npm run build` before deployment-related or routing/asset changes.

If dependency installation or network access is unavailable, report which checks could not run.

## Adding Or Editing Products

1. Add imported image assets under `src/assets/` or the matching `src/assets/products/<category>/` folder.
2. Update category listing data in `src/App.tsx`.
3. Update detailed category and sub-product data in `src/ProductDetails.tsx`.
4. Confirm the `slug` used by the listing matches the slug in the detail data.
5. Confirm cart additions still include an image and sensible display detail such as price or pack size.

## Cart And Ordering

- Cart state lives only in memory through `CartProvider`.
- `addToCart` merges items by `name`.
- `removeFromCart` removes the whole matching item, despite the UI presenting it as a minus button.
- `Cart.tsx` composes order messages for Email, WhatsApp, and SMS.
- Required customer fields are name and phone.

## Styling And Responsiveness

- Global CSS lives in `src/App.css`.
- Product detail cards rely on class names plus inline styles from `src/ProductDetails.tsx`.
- Mobile layout switches gallery/cart controls using:
  - `.product-details-images-mobile`
  - `.product-details-images-desktop`
  - `.product-details-cart-mobile`
  - `.product-details-cart-desktop`
- Check very small screens when touching product cards, nav, order buttons, or image galleries.

## Content Editing

- Business contact information appears in `src/Contact.tsx` and `src/Cart.tsx`.
- Business factsheet content appears in `src/About.tsx`.
- Policy pages are React components in `src/PrivacyPolicy.tsx` and `src/SecurityPolicy.tsx`, with standalone markdown policy/security files also present at the repo root.

## Safer Refactors

Good candidates when requested:

- Extract shared product/category data into `src/products.ts`.
- Export and test cart message formatting from `src/Cart.tsx`.
- Replace inline repeated button styles with reusable CSS classes.
- Add local storage persistence for cart state.
