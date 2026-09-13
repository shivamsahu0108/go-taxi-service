# Go Taxi Jabalpur â€” Production SEO Checklist

## Current production URL
https://gotaxiservice.netlify.app/

## Website completed
- Canonical, Open Graph, Twitter and schema URLs use the current Netlify domain.
- `robots.txt` points to the current sitemap.
- Sitemap includes the homepage, six local service pages and ten route pages.
- Six service and ten route landing pages are crawlable under `public/`.
- Fleet image poster references use files that actually exist in `public/images/Cars/`.
- Placeholder Facebook/Instagram/YouTube links were removed.
- Vite preview allows the current Netlify hostname.
- Business phone/address/email are centralized in `src/config/contact.js`.

## Google Business Profile (outside the code)
1. Use the exact real business name; do not add keyword stuffing.
2. Primary category should accurately describe the business (for example, Taxi service).
3. Keep phone, address/service area and website consistent with the website.
4. Set the website URL to https://gotaxiservice.netlify.app/ until a custom domain is connected.
5. Add genuine vehicle, office/location and service photos.
6. Collect genuine customer reviews and reply to them.

## Google Search Console
1. Verify `gotaxiservice.netlify.app` or the final custom domain.
2. Submit `/sitemap.xml`.
3. Inspect the homepage and each local landing page.
4. Request indexing after deployment.

## Future recommendation
Move from the Render subdomain to a custom business domain when available. Keep the Render URL as the hosting target and configure the custom domain in Render. Then update the canonical, sitemap, robots, schema and GBP website URL to the custom domain and use a permanent redirect from the old URL where supported.
