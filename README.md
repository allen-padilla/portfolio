# apadilla.ca

My personal site. Next.js 16 with the App Router, React 19, Tailwind 4, and MDX. Every route is prerendered and it ships as a standalone Node server in Docker.

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

To add a project, add an entry to `content/projects.ts` and create `content/projects/<slug>.mdx`. The build fails if the MDX file is missing.

MDX components: `<Stack items={[...]} />`, `<Figure src alt width height caption />`, `<Gallery items={[...]} />`, `<Video src poster width height label caption />`, `<Callout title>…</Callout>`, `<Label>…</Label>`.

## Assets

- Resume at `public/resume/Allen-Padilla-Resume.pdf`, linked from the nav and footer.
- Project images under `public/projects/<slug>/`, referenced from `images` in `content/projects.ts`. Every project gets a card in the home page work grid. `components/home/WorkGrid.tsx` picks an animated card by slug and falls back to the first image.
- `assets/og/` holds the fonts for the Open Graph images. They're OFL licensed.

## Deploy

The Dockerfile is a multi-stage build with `output: "standalone"`. The site URL for canonical links, the sitemap, and OG images comes from `NEXT_PUBLIC_SITE_URL` if set, then `COOLIFY_URL`, which Coolify injects at build time, then `https://apadilla.ca`. On Coolify nothing needs setting.

```bash
docker build --build-arg NEXT_PUBLIC_SITE_URL=https://example.com -t portfolio .
docker run -p 3000:3000 portfolio
```
