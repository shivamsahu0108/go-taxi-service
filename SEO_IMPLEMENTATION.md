# Go Taxi Jabalpur — SEO implementation notes

## Implemented in the React project

- One canonical homepage URL: `https://gotaxi.in/`
- Search-friendly title and meta description focused on Jabalpur taxi intent
- Canonical, Open Graph and Twitter metadata
- `TaxiService` + `WebSite` JSON-LD structured data
- FAQ content plus FAQPage JSON-LD
- Consistent business address and phone configuration in `src/config/contact.js`
- Jabalpur-focused H1 and service copy
- FAQ section and navigation link
- `robots.txt` with sitemap reference
- `sitemap.xml` for the currently published homepage
- Render preview allowed hosts for the Render URL and planned custom domain
- Removed the old duplicate phone number from active website contact data

## Important Google Business Profile step

The website code cannot edit Google Business Profile. In GBP, verify that the real business information matches the website:

- Business name
- Primary phone number
- Website: `https://gotaxi.in/`
- Address/service area
- Primary category: Taxi service
- Services, hours and photos

The active website contact configuration uses **+91 7722900823**. If the verified Google Business Profile uses a different primary phone number, update `src/config/contact.js` to the real GBP number before deployment so the website and GBP stay consistent.

Do not add keywords to the GBP business name unless they are genuinely part of the real-world business name.

## After deployment

1. Add/connect `gotaxi.in` in Google Search Console.
2. Submit `https://gotaxi.in/sitemap.xml`.
3. Inspect the homepage URL and request indexing.
4. In Google Business Profile, set the website to `https://gotaxi.in/`.
5. Keep the NAP (name, address, phone) consistent across legitimate business directories.
6. Ask real customers for genuine reviews; do not buy or fabricate reviews.
7. Add genuine business/vehicle/location photos and keep the profile active.

## SEO limitation of this version

This is still a single-page React site. The sitemap intentionally contains only `/` because the project does not currently have separate crawlable route pages. Do not put fake or fragment URLs into the sitemap.

For stronger organic growth, the next phase should create real pages such as:

- `/taxi-service-jabalpur`
- `/airport-taxi-jabalpur`
- `/outstation-taxi-jabalpur`
- `/car-rental-jabalpur`
- `/jabalpur-to-kanha-taxi`
- `/jabalpur-to-bandhavgarh-taxi`

Each page should contain unique, useful content and real service information.
