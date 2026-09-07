# Allen Padilla
Full-Stack Developer | Open to remote roles or relocating
Winnipeg, MB | allenjpadilla@gmail.com | apadilla.ca | linkedin.com/in/allen-padilla | github.com/allen-padilla

## Summary
Six years as the only developer at two organizations, taking each app from requirements to production and keeping it running. Most recently a member platform on Laravel and React, and an iOS app with an LLM scoring pipeline.

## Experience

### Web Developer | Manitoba Métis Federation
Winnipeg, MB | June 2022 – Present | Only developer in the IT department
- Built the member management and events platform (Laravel, Inertia, React, PostgreSQL), shipped 2026. System of record for 2,000+ members, their regional locals, and every event the department runs.
- Wired sign-in to Azure AD with directory groups mapped to app roles, so access changes when someone changes teams. Built the OAuth2 API that feeds member data to the public website so nobody types the same thing twice.
- Built and ran the graduation ceremony portal (SvelteKit, Convex) for the 2025 and 2026 ceremonies: barcode gown check-out, and a stage scanner that puts each graduate on the projector from a local copy of the roster so a Wi-Fi drop doesn't stop the ceremony. 150+ graduates, every gown came back.
- Building Homeland Map, a 3D relief map of Canada for a museum kiosk (Three.js, d3-geo, Express, SQLite). Terrain extruded from GMTED2010 elevation data, great-circle connections labelled with distance, marker clustering so nearby places stay tappable, and a pinch dead zone so a two-finger rotate doesn't zoom.
- Building the public website for the Métis Veterans Legacy Program (Next.js, React, Strapi, TipTap). Staff publish news, recipient profiles, and commemoration projects themselves, with drafts and no developer.
- Run the infrastructure, self-hosted Coolify on a VPS, Docker Compose, nginx, and firewall rules so internal apps stay internal, and handle fixes, enhancements, and vulnerabilities across every production app.

### Full-Stack Developer | Computers For Schools Manitoba
Winnipeg, MB | August 2020 – June 2022, then part-time contract to August 2024
- Replaced the Microsoft Access database with one Laravel app for donations, inventory, warehousing, orders, RMAs, and recycling, modelled with the Executive Director and the warehouse, refurbishment, and admin staff who use it. 100,000+ inventory records, thousands of orders, and it still runs the organization today.
- Added asset tracking with a chain-of-custody history, orders and RMAs with tax, payments, CSV import, and PDF invoices, and wrote the role and permission layer so admins, supervisors, and floor staff each see only their modules.

### IT Service Desk | Royal Canadian Mint | Winnipeg, MB | January 2019 – August 2019

## Projects

### Canopy | iOS app where an AI and other people score your ideas side by side, on TestFlight
2026 | Built solo in about a week | Expo, React Native, TypeScript, SQLite, Supabase, RevenueCat | joincanopy.app
- One router in front of Gemini, Anthropic, and OpenAI with key rotation and jittered retries, so a provider outage doesn't take scoring down. Each score takes a credit atomically and gives it back on failure.
- Moderation fails closed with crisis routing. Prompts are hardened against injection and covered by a red-team suite, and a circuit breaker with daily caps keeps a bug from running up the bill.
- Private ideas stay in SQLite on the phone. Sync uses cursors and server-time watermarks, last write wins with a conflicted copy on a real collision. Postgres RLS covered by a 67-check suite.

### Meridian | Guild operations portal with Pest tests and CI, source at github.com/allen-padilla/Meridian
Laravel, Inertia, React, and TypeScript, the same stack as the confidential member platform.

### apadilla.ca | Personal site, source at github.com/allen-padilla/portfolio
Next.js, React, Tailwind, and MDX on Vercel, with an agents file, conventional commits, and Vitest tests.

## Skills
- **Languages:** TypeScript, JavaScript, PHP, SQL
- **Front end:** React, Next.js, SvelteKit, React Native / Expo, Tailwind, Three.js, service workers / offline-first
- **Back end and data:** Laravel, Node.js, Express, PostgreSQL, MySQL, SQLite, Supabase, Convex, Strapi
- **Identity:** Azure AD / Entra ID SSO, OIDC / OAuth2, directory-group role mapping, Postgres RLS
- **Infrastructure:** Docker, Docker Compose, Coolify, nginx, VPS administration, CI, Git
- **AI:** Claude Code agent workflows, Gemini / Anthropic / OpenAI APIs, prompt-injection hardening, red-team testing

## Education
### Diploma, Business Information Technology | Red River College | Winnipeg, MB | 2017 – 2019
