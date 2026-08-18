# Emma West Counselling

Static website for Emma West Counselling. Content lives in Markdown. Hosting is intended for a **personal** Cloudflare Pages account — not a work or Sparx account.

If you are taking this over, start with [HANDOFF.md](HANDOFF.md).

## Edit the site

Page copy is in `src/content/pages/`. The homepage is `src/pages/index.astro`. Shared details (email, navigation) are in `src/site.ts`.

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

Output is in `dist/`.

## Deploy (personal Cloudflare only)

1. Create a free Cloudflare account at [dash.cloudflare.com](https://dash.cloudflare.com) using a personal email.
2. Accept the [Cloudflare DPA](https://www.cloudflare.com/en-gb/cloudflare-customer-dpa/) in the dashboard.
3. Create a Pages project named `emma-west-counselling` (direct upload from `dist/`, or connect a **personal** GitHub repo).
4. Build command: `npm run build`. Output directory: `dist`.
5. In the zone / Pages settings, leave **off**: Email Address Obfuscation, Rocket Loader, Bot Fight Mode.
6. Use Always HTTPS. Attach the existing domain when ready.


```sh
npx wrangler login
npx wrangler pages deploy dist --project-name emma-west-counselling
```
