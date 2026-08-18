# Editing the Emma West Counselling site

You do not need to use Wix. Change the text files below, then publish.

Preview while working: in a terminal, `npm install` then `npm run dev`, and open http://127.0.0.1:4321/

## What to edit

| What you want to change | File |
| --- | --- |
| Email address, navigation, testimonials | `src/site.ts` |
| Homepage (intro, fee, cards) | `src/pages/index.astro` |
| How can I help you? | `src/content/pages/how-can-i-help-you.md` |
| Why have online counselling? | `src/content/pages/why-have-online-counselling.md` |
| My approach | `src/content/pages/my-approach.md` |
| FAQs (fees, session length, etc.) | `src/content/pages/frequently-asked-questions.md` |
| About me | `src/content/pages/about-me.md` |
| Psychiatric drug support | `src/content/pages/psychiatric-drug-support.md` |
| Privacy policy | `src/content/pages/privacy-policy.md` |
| Cookie policy | `src/content/pages/cookie-policy.md` |
| Contact page | `src/content/pages/contact.md` |
| Article titles and links | `src/data/articles.ts` |
| Article PDFs | `public/articles/` |
| Photos | `public/images/` |

Markdown files are ordinary text. Headings start with `##`. Links look like `[text](https://…)`.

## Publish (once GitHub is connected)

1. Save the file.
2. Commit and push to GitHub (or ask Cursor: “commit this and push”).
3. Cloudflare Pages rebuilds automatically. After a minute, check https://emmawestcounselling.co.uk (or https://emma-west-counselling.pages.dev until the domain is live).

If GitHub is not connected yet, someone with the Cloudflare token can run:

```sh
npm run build
npx wrangler pages deploy dist --project-name emma-west-counselling
```

## Do not

- Put tracking or Google Fonts/Analytics on the site.
- Turn on Cloudflare Bot Fight Mode, email obfuscation, or Rocket Loader.
- Use a work/Sparx Cloudflare or GitHub account.
