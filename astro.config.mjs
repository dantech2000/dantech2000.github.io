// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://drod.dev',
  output: 'static',
  trailingSlash: 'never',
  // Emit resume.html instead of resume/index.html so GitHub Pages serves /resume
  // directly, without a redirect to /resume/.
  build: {
    format: 'file',
    // The stylesheet is ~10KB gzipped; inlining it removes a render-blocking request.
    inlineStylesheets: 'always',
  },
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
