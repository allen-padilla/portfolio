# apadilla.ca

My personal site. Next.js 16 with the App Router, React 19, Tailwind 4, and MDX. Every route is prerendered and it deploys on Vercel.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run lint
npm test
```

## Content

- `content/site.ts` has the name, role, hero, about me paragraphs, socials, repo link, and site URL.
- `content/experience.ts` is the experience ledger on the home page.
- `content/projects.ts` is the source of truth for every project: title, org, year, status, stack, summary, role, timeline, team, images, and an optional `external` link.
- `content/projects/<slug>.mdx` is the case study body. Body only, no frontmatter. Only `##` headings show up in the table of contents.
- `content/resume.md` is the resume, in a small Markdown subset that `node scripts/build-resume.mjs` turns into the PDF and docx under `public/resume/`.

To add a project, add an entry to `content/projects.ts` and create `content/projects/<slug>.mdx`. The build fails if the MDX file is missing.

MDX components: `<Stack items={[...]} />`, `<Figure src alt width height caption />`, `<Gallery items={[...]} />`, `<Video src poster width height label caption />`, `<Callout title>…</Callout>`, `<Label>…</Label>`.

## Assets

- Resume PDF and docx at `public/resume/`, built from `content/resume.md`. The PDF is printed by headless Chrome and is what the nav and footer link.
- Project images under `public/projects/<slug>/`, referenced from `images` in `content/projects.ts`. Every project gets a card in the home page work grid. `components/home/WorkGrid.tsx` picks an animated card by slug and falls back to the first image.
- `assets/og/` holds the fonts for the Open Graph images. They're OFL licensed.

## Deploy

Vercel builds and deploys every push to `main`. The site URL for canonical links, the sitemap, and OG images is `https://apadilla.ca` unless `NEXT_PUBLIC_SITE_URL` is set in the Vercel project.
