# Tech Hub (techhub-india.net)

Static site for Tech Hub, Godhra. Deployed on Vercel (no build step).

- `index.html` - home page (catalog, estimate advisor, offer pass, FAQ)
- `refurbished-laptops-godhra.html`, `new-laptops-godhra.html`, `custom-desktop-pc-godhra.html`, `computer-accessories-godhra.html` - category landing pages (served at clean URLs)
- `assets/` - compiled CSS, icon font, and the offer-pass QR/PDF code (lazy-loaded)
- `robots.txt`, `sitemap.xml`, `og-image.png`, `logo.png`, `vercel.json`

Asset links are root-absolute (`/assets/...`), so serve the folder from the web root.
