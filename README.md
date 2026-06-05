# Aliaa — Premium Art Portfolio

A luxury museum-inspired portfolio for a traditional handmade artist.

## Stack

- React + TypeScript + Vite
- Tailwind CSS v4
- React Router

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Customize

| What | Where |
|------|--------|
| Artworks & categories | `src/data/artworks.ts` |
| Contact info | `src/data/artworks.ts` → `contactInfo` |
| Artist stats | `src/data/artworks.ts` → `artistStats` |
| Colors & fonts | `src/index.css` |

Replace Unsplash placeholder images with your own artwork photos in `public/` or external URLs.

## Pages

- `/` — Home (Hero, About, Gallery, Process, Contact, Footer)
- `/artwork/:id` — Artwork detail with story, close-ups, prev/next

## Build for production

```bash
npm run build
npm run preview
```
