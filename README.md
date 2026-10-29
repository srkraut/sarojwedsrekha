# Saroj ❤ Rekha — Wedding Website

Wedding website for **Saroj Raut & Rekha Budhathoki** — 17 Mangsir 2083 (3 December 2026), Itahari, Nepal.

Static Next.js 16 site (no backend). Lighthouse — mobile: Performance 93 · Accessibility 100 · Best Practices 100 · SEO 100; desktop: 99 · 100 · 100 · 100.

## Edit content
Everything (names, parents, dates, venues, event times, story, gallery list) lives in [`src/data/wedding.ts`](src/data/wedding.ts).

Images live in `public/images/` (all WebP, metadata stripped):
- `hero-800/1280/1920.webp` — cover (couple in colour, temple in sage duotone)
- `saroj-figure.webp`, `rekha-figure.webp` — figures leaning on the couple cards
- `gallery/NN.webp` (thumbnail) + `gallery/NN-full.webp` (viewer)

Original photos (`*.heic`, `*.CR2`) are git-ignored on purpose — they can contain GPS location data.

## Commands
```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static site in ./out
npm start       # preview ./out on http://localhost:3000
npm run lint    # type-check
```

## Deploy (Dokploy)
The repo ships a `Dockerfile`: Node 22 builds the static site, then **nginx** serves `out/` (gzip, long-cache for `/_next/static` and `/images`, no-cache for pages, health check). Final image ≈ 85 MB.

1. Dokploy → **Create Application** → Provider: GitHub → `srkraut/sarojwedsrekha`, branch `main`.
2. Build Type: **Dockerfile** (path `./Dockerfile`).
3. **Domains** → add `sarojwedsrekha.com` (and `www.`), container port **80**, HTTPS on (Let's Encrypt).
4. Point the domain's DNS `A` record at your Dokploy server's IP.
5. **Deploy**. Enable *Auto Deploy* so every push to `main` redeploys.

Test the image locally:
```bash
docker build -t sarojwedsrekha .
docker run --rm -p 8080:80 sarojwedsrekha   # http://localhost:8080
```

If you use a different domain, update `site.url` in `src/data/wedding.ts` (canonical URL, sitemap, share previews).

### After going live
- Google Search Console → add the domain → submit `https://sarojwedsrekha.com/sitemap.xml`.
- Test the WhatsApp/Facebook preview: https://developers.facebook.com/tools/debug/
