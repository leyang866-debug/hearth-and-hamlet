export interface NavigationItem {
  key: string;
  path: string;
  icon: string;
  isContentType: true;
  order?: number;
}

export const NAVIGATION_CONFIG: NavigationItem[] = [
  { key: 'guides', path: '/guides', icon: 'lucide:book-open', isContentType: true, order: 1 },
  { key: 'buildings', path: '/buildings', icon: 'lucide:building-2', isContentType: true, order: 2 },
  { key: 'updates', path: '/updates', icon: 'lucide:scroll-text', isContentType: true, order: 3 },
];

export const CONTENT_TYPES: string[] = ['guides', 'buildings', 'updates'];
export const NAV_BY_KEY: Record<string, NavigationItem> = Object.fromEntries(
  NAVIGATION_CONFIG.map((item) => [item.key, item]),
);
