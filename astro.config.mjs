import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://liri.io',
  build: {
    format: 'preserve',
  },
  integrations: [sitemap()],
});
