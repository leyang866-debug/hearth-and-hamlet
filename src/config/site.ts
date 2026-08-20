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
  name: 'Hearth and Hamlet Wiki',
  shortName: 'Hearth & Hamlet',
  description: 'Hearth and Hamlet Wiki with beginner guides, buildings, research, magic, resources, policies, trade, and kingdom-building tips for the medieval pixel citybuilder.',
  domain: 'hearthhamlet.site',
  tagline: 'Build a frontier kingdom one thoughtful choice at a time.',
  legalNotice: 'Hearth and Hamlet Wiki is an independent fan-made resource and is not affiliated with Phorust Studios, Runic Forge, or Gamersky Games.',
  social: {
    official: 'https://store.steampowered.com/app/4315040/Hearth_and_Hamlet/',
    discord: 'https://discord.gg/yhGSE3nE',
    youtube: 'https://www.youtube.com/watch?v=OidnO9knPR8',
  },
  game: {
    name: 'Hearth and Hamlet',
    platform: 'PC / Steam',
    developer: 'Phorust Studios',
    publisher: 'Runic Forge / Gamersky Games',
    genre: 'City Builder / Incremental / Strategy',
    releaseDate: 'August 19, 2026',
  },
  ogImageWidth: 1200,
  ogImageHeight: 630,
  defaultAuthor: 'Hearth and Hamlet Wiki Team',
};

/** Absolute site URL (no trailing slash). Set by deployment or defaults to placeholder. */
export const siteUrl: string = `https://${site.domain}`;

/** GA4 measurement ID — set by deployment tool. Placeholder for template use. */
export const ga4MeasurementId = '';

/** Google Search Console verification string — set by deployment tool. */
export const googleSiteVerification = '';
