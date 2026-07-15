'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';

export function useFooterLinks(): NestedMenuItem[] {
  return [
    {
      title: 'Start',
      items: [
        {
          title: 'Beginner Guide',
          href: Routes.BeginnerGuide,
          external: false,
        },
        { title: 'Guide Hub', href: Routes.Guides, external: false },
        { title: 'Controls', href: Routes.Controls, external: false },
      ],
    },
    {
      title: 'Cards & Bosses',
      items: [
        { title: 'Spirit Cards', href: Routes.Cards, external: false },
        { title: 'Best Builds', href: Routes.BestBuilds, external: false },
        { title: 'Minos Boss', href: Routes.MinosBoss, external: false },
      ],
    },
    {
      title: 'Game',
      items: [
        { title: 'Characters', href: Routes.Characters, external: false },
        { title: 'Release Date', href: Routes.ReleaseDate, external: false },
        { title: 'Soundtrack', href: Routes.Soundtrack, external: false },
      ],
    },
    {
      title: 'Play',
      items: [
        { title: 'Platforms', href: Routes.Platforms, external: false },
        { title: 'Steam Deck', href: Routes.SteamDeck, external: false },
        { title: 'Official Download', href: Routes.Download, external: false },
      ],
    },
    {
      title: 'Legal',
      items: [
        { title: 'Disclaimer', href: Routes.Disclaimer, external: false },
        { title: 'Privacy', href: Routes.PrivacyPolicy, external: false },
        { title: 'Terms', href: Routes.TermsOfService, external: false },
        { title: 'Cookies', href: Routes.CookiePolicy, external: false },
      ],
    },
  ];
}
