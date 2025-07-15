# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

| Command                  | Description                                |
| ------------------------ | ------------------------------------------ |
| `npm run dev`            | Start development server at localhost:4321 |
| `npm run build`          | Build production site to ./dist/           |
| `npm run preview`        | Preview production build locally           |
| `npm run check`          | Run all checks (Astro, ESLint, Prettier)   |
| `npm run check:astro`    | Check Astro files for errors               |
| `npm run check:eslint`   | Run ESLint linting                         |
| `npm run check:prettier` | Check Prettier formatting                  |
| `npm run fix`            | Auto-fix ESLint and Prettier issues        |
| `npm run fix:eslint`     | Auto-fix ESLint issues                     |
| `npm run fix:prettier`   | Auto-format with Prettier                  |

## Architecture Overview

This is an **AstroWind** template built with **Astro 5.0** and **Tailwind CSS**. The project follows Astro's file-based routing system and component architecture.

### Key Directories

- `src/pages/` - File-based routing (each file becomes a route)
- `src/components/` - Reusable Astro components organized by purpose:
  - `blog/` - Blog-specific components
  - `common/` - Shared utilities (Analytics, Meta, etc.)
  - `ui/` - Generic UI components
  - `widgets/` - Page section components (Header, Footer, Hero, etc.)
- `src/layouts/` - Page layouts (Layout, PageLayout, MarkdownLayout)
- `src/content/` - Content collections (blog posts in MDX/Markdown)
- `src/utils/` - Utility functions for blog, images, permalinks
- `src/assets/` - Static assets requiring processing
- `public/` - Static assets served directly

### Configuration

- **Main config**: `src/config.yaml` - Site metadata, blog settings, analytics, UI theme
- **Astro config**: `astro.config.ts` - Build configuration, integrations, plugins
- **Tailwind**: Custom styles in `src/components/CustomStyles.astro` and `src/assets/styles/tailwind.css`

### Blog System

The blog uses Astro's content collections with:

- Posts in `src/content/post/` (MDX/Markdown)
- Dynamic routing via `[...blog]/` directory
- Category and tag support
- RSS feed generation
- Related posts functionality

### Static Site Generation

- Output mode: `static` (prerendered)
- Blog requires `prerender = true`
- Image optimization via Astro Assets and Unpic
- Automatic sitemap generation

### Key Integrations

- **@astrojs/tailwind** - Tailwind CSS integration
- **@astrojs/sitemap** - Automatic sitemap generation
- **@astrojs/mdx** - MDX support for blog posts
- **astro-icon** - Icon system using Tabler and Flat Color Icons
- **astro-compress** - Asset compression for production

Always run `npm run check` before committing to ensure code quality.
