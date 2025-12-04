# DevOps Dan

Personal website and blog built with **[Astro 5.0](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/)**.

**Live Site:** [https://drod.dev](https://drod.dev)

## Features

- Fast, SEO-friendly blog with RSS feed, MDX support, categories & tags
- Resume page with employment history, skills, and certifications
- About page with projects and social links
- Dark mode support
- Image optimization
- Automatic sitemap generation

## Quick Start

```shell
npm install
npm run dev
```

Visit `http://localhost:4321` to see the site.

## Project Structure

```
/
├── public/              # Static assets served directly
├── src/
│   ├── assets/          # Images, styles, favicons
│   ├── components/      # Astro components
│   │   ├── blog/        # Blog-specific components
│   │   ├── common/      # Shared utilities
│   │   ├── ui/          # Generic UI components
│   │   └── widgets/     # Page section components
│   ├── content/
│   │   └── post/        # Blog posts (Markdown/MDX)
│   ├── data/            # Data files (resume.ts)
│   ├── layouts/         # Page layouts
│   ├── pages/           # File-based routing
│   ├── utils/           # Utility functions
│   ├── config.yaml      # Site configuration
│   └── navigation.ts    # Navigation links
├── astro.config.ts      # Astro configuration
└── tailwind.config.js   # Tailwind configuration
```

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start dev server at `localhost:4321`        |
| `npm run build`   | Build production site to `./dist/`          |
| `npm run preview` | Preview production build locally            |
| `npm run check`   | Run all checks (Astro, ESLint, Prettier)    |
| `npm run fix`     | Auto-fix ESLint and Prettier issues         |

## Configuration

Main configuration is in `src/config.yaml`:

- Site name and URL
- SEO metadata (title, description, OpenGraph, Twitter)
- Blog settings (posts per page, permalinks)
- Analytics (Google Analytics)
- UI theme (system, light, dark)

## Writing Blog Posts

Add new posts to `src/content/post/` as Markdown or MDX files:

```markdown
---
publishDate: 2025-01-01T00:00:00Z
author: Daniel Rodriguez
title: My Post Title
excerpt: A brief description of the post
image: https://example.com/image.jpg
category: DevOps
tags:
  - aws
  - kubernetes
---

Your content here...
```

## License

MIT License - see [LICENSE.md](./LICENSE.md)
