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
  build: { format: 'file' },
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
