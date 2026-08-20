/**
 * Site configuration — the single source of truth for game-specific metadata.
 */
 
export interface SiteConfig {
  name: string;
  shortName: string;
  description: string;
  domain: string;
  tagline: string;
  legalNotice: string;
  social: {
    official?: string;
    discord?: string;
    youtube?: string;
    twitter?: string;
    reddit?: string;
  };
  game: {
    name: string;
    platform: string;
    developer: string;
    publisher: string;
    genre: string;
    releaseDate?: string;
  };
  ogImageWidth: number;
  ogImageHeight: number;
  defaultAuthor?: string;
}

export const site: SiteConfig = {
  name: 'GAME_NAME Wiki',
  shortName: 'GAME',
  description: 'GAME_NAME Wiki with practical guides, strategy references, and essential information for players.',
  domain: 'example.com',
  tagline: 'Practical guides for every player.',
  legalNotice: 'GAME_NAME Wiki is a fan-made community resource and is not affiliated with the game developers or publishers.',
  social: {},
  game: {
    name: 'GAME_NAME',
    platform: 'Platform',
    developer: 'Developer',
    publisher: 'Publisher',
    genre: 'Genre',
    releaseDate: '',
  },
  ogImageWidth: 1200,
  ogImageHeight: 630,
  defaultAuthor: 'GAME_NAME Wiki Team',
};

/** Absolute site URL (no trailing slash). Set by deployment or defaults to placeholder. */
export const siteUrl: string = `https://${site.domain}`;

/** GA4 measurement ID — set by deployment tool. Placeholder for template use. */
export const ga4MeasurementId = '';

/** Google Search Console verification string — set by deployment tool. */
export const googleSiteVerification = '';
