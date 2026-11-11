// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://vivimoves-site.vercel.app',
  integrations: [mdx(), sitemap()],

  // Repli statique hors Vercel ; en production, vercel.json émet des redirections HTTP 308.
  redirects: {
    '/services': '/entreprises/',
    '/tarifs-coaching': '/entreprises/',
    '/pilates-plein-air': '/le-pr-club/',
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
