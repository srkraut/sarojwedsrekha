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

## Deploy
**Vercel (recommended, free):** vercel.com → Add New → Project → import `srkraut/sarojwedsrekha` → Deploy. No settings needed; `vercel.json` adds image caching headers. Every push to `main` redeploys.

**Cloudflare Pages:** build command `npm run build`, output directory `out`, env `NODE_VERSION=22`.

### Custom domain
1. Buy `sarojwedsrekha.com` (Cloudflare Registrar / Namecheap).
2. Vercel → Project → Settings → Domains → add `sarojwedsrekha.com` and `www.sarojwedsrekha.com`, then set the DNS records it shows.
3. If you use a different domain, update `site.url` in `src/data/wedding.ts` (used for canonical URL, sitemap and share previews).

### After going live
- Google Search Console → add the domain → submit `https://sarojwedsrekha.com/sitemap.xml`.
- Test the WhatsApp/Facebook preview: https://developers.facebook.com/tools/debug/
