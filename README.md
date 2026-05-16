# Backend + AI Engineer Portfolio

Modern personal portfolio built with Next.js App Router, React, TypeScript, Tailwind CSS, Framer Motion, and a data-first content structure.

## Structure

```text
app/                  App Router pages, metadata, sitemap, robots
components/common/    Navbar, footer, providers, scroll progress
components/sections/  Hero, about, skills, experience, projects, AI work, contact
components/ui/        Reusable buttons, cards, badges, icons, modal
data/                 Editable portfolio content
public/assets/        Profile, project, OG, icon, and resume assets
types/                Shared TypeScript data types
lib/                  Utility helpers
```

## Customize

- Update name, title, SEO, resume path, avatar, and section order in `data/profile.ts`.
- Add or remove skills in `data/skills.ts`.
- Add projects in `data/projects.ts` and put images in `public/assets`.
- Update jobs in `data/experience.ts`.
- Update certifications and awards in `data/achievements.ts`.
- Edit GitHub, testimonials, and blog-ready items in their matching `data/*.ts` files.

The homepage renders sections from `profile.sectionOrder`, so reordering sections does not require UI changes.

## Run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run typecheck
npm run build
npm run start
```

## Deploy to Vercel

1. Push the project to GitHub.
2. Import it in Vercel using the Next.js preset.
3. Update `seo.siteUrl` in `data/profile.ts` to your production URL.
4. Deploy.

The contact form uses `mailto:` by default. Set `profile.contact.formEndpoint` to use Formspree, Basin, or your own API endpoint.
