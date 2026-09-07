# allenpadilla — portfolio

Personal site for Allen Padilla. Next.js 16 (App Router), React 19, Tailwind CSS v4, MDX. Fully static; deployed as a standalone Node server in Docker.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all routes prerendered)
npm run lint
```

## Content

- `content/site.ts` — name, role, hero line, socials, "How I work" paragraphs, site URL.
- `content/experience.ts` — the experience ledger on the home page.
- `content/projects.ts` — **source of truth** for every project: title, org, year, status, stack, summary, role/timeline/team, optional images, optional `external` link.
- `content/projects/<slug>.mdx` — the case-study body for each project without an `external` link. Body only, no frontmatter. Only `##` headings appear in the table of contents.

Adding a project: add an entry to `content/projects.ts`, then create `content/projects/<slug>.mdx`. The build fails if the MDX file is missing.

MDX components available in bodies: `<Stack items={[...]} />`, `<Figure src alt width height caption />`, `<Callout title>…</Callout>`, `<Label>…</Label>`.

## Assets

- Resume: `public/resume/Allen-Padilla-Resume.pdf` (linked from the nav and footer).
- Project images: `public/projects/<slug>/`, referenced from `images` in `content/projects.ts`. Projects marked `featured` with an image appear in the band above the work list.
- `assets/og/` holds the fonts used to render Open Graph images (OFL licensed).

## Deploy

`Dockerfile` builds a multi-stage image with `output: "standalone"`. The site URL (canonical links, sitemap, OG image URLs) comes from `NEXT_PUBLIC_SITE_URL` if set, otherwise from `COOLIFY_URL`, which Coolify injects at build time from the app's domain, otherwise `https://apadilla.ca`. On Coolify you don't need to set anything.

```bash
docker build --build-arg NEXT_PUBLIC_SITE_URL=https://example.com -t portfolio .
docker run -p 3000:3000 portfolio
```
