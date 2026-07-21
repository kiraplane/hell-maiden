import { guides } from '@/data/hell-maiden/guides';
import { Routes } from '@/routes';
import type { MetadataRoute } from 'next';
import { routing } from '../i18n/routing';
import { getCanonicalBaseUrl } from '../lib/urls/urls';

const coreRoutes = [
  Routes.Root,
  Routes.Guides,
  Routes.PrivacyPolicy,
  Routes.TermsOfService,
  Routes.CookiePolicy,
  Routes.Disclaimer,
];
const allRoutes = [
  ...new Set([...coreRoutes, ...guides.map((guide) => guide.path)]),
];
const stableLastModified = new Date('2026-07-21T00:00:00.000Z');

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getCanonicalBaseUrl();

  return routing.locales.flatMap((locale) =>
    allRoutes.map((route) => {
      const localizedRoute =
        locale === routing.defaultLocale ? route : `/${locale}${route}`;
      const isPrimary =
        route === Routes.Root ||
        route === Routes.Guides ||
        route === Routes.BeginnerGuide ||
        route === Routes.Cards ||
        route === Routes.BestBuilds ||
        route === Routes.MinosBoss;

      return {
        url: `${baseUrl}${localizedRoute}`,
        lastModified: stableLastModified,
        changeFrequency:
          route === Routes.Root || route === Routes.Guides
            ? ('daily' as const)
            : ('weekly' as const),
        priority: route === Routes.Root ? 1 : isPrimary ? 0.9 : 0.8,
      };
    })
  );
}
