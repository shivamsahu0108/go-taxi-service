# Go Taxi — Vite + React

## Run development mode

Open one terminal in this folder and run:

```bash
npm install
npm run dev
```

`npm run dev` starts both Vite and the Express API server. Vite proxies `/api/*` requests to the API server on port 4173, while the Vite frontend can use 5173 or the next available port.

## Google Reviews

Create `.env` from `.env.example`:

```env
=your_google_places_api_key
=your_google_place_id
```

The API route is ``.

## Production

```bash
npm run build
npm start
```

## Common issues

- `@import statements must precede...`: the Google Fonts `@import` must be the first CSS statement. This project already has it fixed in `src/index.css`.
- `proxy error:  ECONNREFUSED`: this happens when the Express API is not running. Use `npm run dev`, which starts both the Vite client and API server together.
- `Port 5173 is in use`: Vite automatically chooses the next free port; this is not an application error.
