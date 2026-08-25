import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';

import { locales, defaultLocale } from './src/i18n/routing';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || 'https://example.com',
  output: 'static',
  trailingSlash: 'never',
  image: {
    // Emit explicit width/height on responsive <Image> output to prevent CLS.
    responsiveStyles: true,
  },
  // Prefetch all internal links on hover — faster page transitions, no
  // View Transitions runtime needed. Adds a small IntersectionObserver script.
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
  i18n: {
    // Spread to convert readonly tuple to mutable array (Astro's Locales type).
    locales: [...locales],
    defaultLocale,
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    mdx(),
    sitemap({
      i18n: {
        defaultLocale,
        locales: Object.fromEntries(locales.map((l) => [l, l])),
      },
      // Localized article routes may intentionally serve an English fallback
      // for shared links. Keep those pages reachable, but do not advertise
      // fallback copies as indexable sitemap entries until a translation
      // exists for that locale.
      filter: (page) => {
        const path = new URL(page).pathname;
        if (!/^\/(de|ja|ko)\//.test(path)) return true;
        const segments = path.split('/').filter(Boolean);
        const publicSections = new Set(['guides', 'buildings', 'updates', 'faq', 'about', 'privacy-policy', 'terms-of-service', 'copyright', 'contact']);
        return segments.length === 1 || (segments.length === 2 && publicSections.has(segments[1]));
      },
    }),
    tailwind({ applyBaseStyles: false }),
    icon(),
  ],
  vite: {
    resolve: {
      alias: {
        '~': '/src',
      },
    },
  },
});
