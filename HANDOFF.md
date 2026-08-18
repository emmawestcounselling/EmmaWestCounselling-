# Handoff: finish and publish Emma West Counselling

Use this if you are picking up the project. The site is already built. The remaining job is to check it, publish it, and point the existing domain at it.

## What this is

A free, static replacement for [emmawestcounselling.wixsite.com/mysite](https://emmawestcounselling.wixsite.com/mysite). Astro + Markdown, hosted on **personal** Cloudflare Pages. No forms, no trackers, no Google Fonts/Analytics. Contact is email only.

**Do not use Sparx, work, or other company GitHub/Cloudflare accounts.** Use a personal GitHub repo and a personal Cloudflare account.

## Where it lives

Local only, not on GitHub:

```text
~/Projects/emma-west-counselling
```

Git is initialised. There are no commits and no remote.

## Get running in two minutes

```sh
cd ~/Projects/emma-west-counselling
npm install
npm run dev
```

Open http://127.0.0.1:4321/

| Task | File |
| --- | --- |
| Page copy | `src/content/pages/*.md` |
| Homepage | `src/pages/index.astro` |
| Email, nav, testimonials | `src/site.ts` |
| Articles | `src/data/articles.ts` |
| Look and feel | `src/styles/global.css` |
| Security headers | `public/_headers` |
| Deploy notes | `README.md` |

## Decisions already made

- Stack: Astro 7, static HTML, almost no JavaScript
- Visual aim: match the current Wix site (centred type, pale blue-grey wash, same nav)
- Email aligned to `ewcounselling@tutanota.com` (Wix showed Gmail in the text and Tutanota in one mailto)
- Privacy policy updated for Cloudflare; cookie policy added
- Article PDFs and images are in `public/` so they do not depend on Wix
- Cookie-light Cloudflare settings: leave **off** Email Address Obfuscation, Rocket Loader, Bot Fight Mode

## Remaining work (the actual quote)

About **2–4 hours** for someone who already knows Git, Astro, and Cloudflare Pages.

1. Preview the site against the live Wix pages and fix anything that looks off (spacing, article cover pairing, missing testimonials — Wix had four slides, only one quote was copied).
2. Confirm the public email with Emma before launch.
3. Make the first git commit. Create a **personal** GitHub repo. Push.
4. Create a **personal** Cloudflare account, accept the [DPA](https://www.cloudflare.com/en-gb/cloudflare-customer-dpa/), and create a Pages project (`npm run build`, output `dist`).
5. Attach the existing custom domain (HTTPS is free on Pages). Update `siteUrl` in `src/site.ts` if it is not `emmawestcounselling.pages.dev`.
6. Keep the Wix site up until the domain is live, then unpublish Wix.

Legal sign-off of the privacy policy stays with Emma / her adviser. Do not change clinical copy except obvious typos.

## Out of scope unless asked

Contact form, booking, analytics, a visual CMS, Google Fonts, Google Analytics, cookie banners, Sparx infrastructure.
