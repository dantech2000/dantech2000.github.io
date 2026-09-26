# drod.dev

Personal site of Daniel Rodriguez, DevOps engineer. Built with [Astro](https://astro.build) and Tailwind CSS v4, deployed to GitHub Pages at [drod.dev](https://drod.dev).

- Mockups: https://claude.ai/artifact/NWtuo7YNoSgkYLHVgqot8L
- Design system (DR//DEV): https://claude.ai/artifact/DDrKZpnYhcvun1eMz4Z9jF

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run check    # type-check .astro and .ts files
npm run build    # static output in dist/
```

Pushing to `main` builds and deploys through `.github/workflows/actions.yaml`.

## Where things live

| Path | What |
| --- | --- |
| `src/styles/global.css` | Design tokens (`@theme`), type utilities (`t-display-1` … `t-meta`), components and glitch effects (`dr-*`) |
| `src/data/site.ts` | Site name, nav and contact channels |
| `src/data/resume.ts` | Jobs, skills, certifications and languages |
| `src/data/projects.ts` | Featured projects on the homepage |
| `src/components/diagrams/` | Animated SVG diagram for each project card |
| `src/content/posts/` | Blog posts (Markdown or MDX) |

## Blog

The blog is off until a post is published. To add one:

1. Create a Markdown or MDX file in `src/content/posts/`. The file name becomes the URL (`/blog/<name>`).
2. Start the file with this frontmatter:

   ```yaml
   ---
   title: Post title
   description: One or two sentences for the post list and link previews.
   date: 2026-10-01
   tags: [devops]
   draft: true
   ---
   ```

3. Set `draft: false` to publish.

The first published post adds the `[05] Log` nav link, the `/blog` index and a "Writing" section on the homepage. Drafts show in `npm run dev` only.

## Content rules

- The email address and phone number stay off the site. Contact goes through GitHub and LinkedIn.
- All animation turns off when the visitor sets `prefers-reduced-motion`.
