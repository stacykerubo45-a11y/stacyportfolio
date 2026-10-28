# Stacy Gekara Portfolio (React + Vite)

A personal developer portfolio with a homepage and a dedicated Services page at `/services`. Its visual direction takes inspiration from the reference website's dark utility strip, clean white navigation, orange split hero, image-led layout, and clear calls to action, adapted for a personal developer portfolio.

## Run locally

1. Install a current Node.js LTS release.
2. Open a terminal in this folder.
3. Run:

```bash
npm install
npm run dev
```

4. Open the local URL shown by Vite.

To create a production build:

```bash
npm run build
npm run preview
```

## Pages

- `/` — Portfolio homepage
- `/services` — Dedicated Services page

The project includes a Vercel rewrite and a Netlify `_redirects` file so the `/services` route can load on those hosts.

## Responsive behaviour

Responsive CSS is included in `src/App.css`, `src/Services.css`, and `src/index.css` for:

- Wide desktop displays (1600px and above)
- Standard desktops and laptops (1200px and below)
- Compact laptop/tablet navigation (980px and below)
- Tablet and narrow landscape layouts (820px and below)
- Mobile layouts (760px and below)
- Small phones (560px and below)
- Compact phone widths around 390px and below

The navigation changes to a menu button before the desktop links become crowded. Hero layouts, service cards, project grids, contact sections, buttons, spacing, and typography adapt as the viewport narrows.

## Before publishing

1. Open `src/App.jsx` and `src/ServicesPage.jsx`.
2. Replace `https://wa.me/2547XXXXXXXX` with your actual WhatsApp number in international format (Kenya: `2547XXXXXXXX`, without the leading zero or `+`).
3. Check your LinkedIn and GitHub links.
4. Review all project descriptions to ensure they accurately describe your contribution.
5. Replace external Unsplash photographs with your own or appropriately licensed images if desired.
6. Test both `/` and `/services` using browser developer tools at widths such as 320, 375, 430, 768, 820, 980, 1024, 1280, and 1440 pixels before sharing the website.

## Notes

- The WhatsApp URL is a placeholder until you update it.
- Project preview panels on the homepage are CSS illustrations rather than screenshots of private client systems.
- Google Fonts and Unsplash images load from external URLs, so an internet connection is required for those assets.
