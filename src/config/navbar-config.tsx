'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';
import {
  BookOpen,
  CalendarDays,
  Download,
  Gamepad2,
  Layers3,
  ShieldCheck,
  Skull,
  Sparkles,
  Users,
} from 'lucide-react';

export function useNavbarLinks(): NestedMenuItem[] {
  return [
    {
      title: 'Guides',
      href: Routes.Guides,
      external: false,
      icon: <BookOpen className="size-4" />,
      items: [
        {
          title: 'Guide hub',
          description: 'Every current Hell Maiden answer in one index.',
          href: Routes.Guides,
          external: false,
          icon: <BookOpen className="size-4" />,
        },
        {
          title: 'Beginner guide',
          description: 'Build a useful hand and survive the first runs.',
          href: Routes.BeginnerGuide,
          external: false,
          icon: <Gamepad2 className="size-4" />,
        },
        {
          title: 'Controls',
          description: 'Aim, move and preserve the dash for real danger.',
          href: Routes.Controls,
          external: false,
          icon: <Gamepad2 className="size-4" />,
        },
      ],
    },
    {
      title: 'Cards & Builds',
      href: Routes.Cards,
      external: false,
      icon: <Layers3 className="size-4" />,
      items: [
        {
          title: 'Spirit Cards',
          description: 'Weapon Cards, Mod Cards, merging and positioning.',
          href: Routes.Cards,
          external: false,
          icon: <Layers3 className="size-4" />,
        },
        {
          title: 'Best builds',
          description:
            'Use a patch-safe build framework, not a fake tier list.',
          href: Routes.BestBuilds,
          external: false,
          icon: <Sparkles className="size-4" />,
        },
        {
          title: 'Poets of Limbo',
          description: 'Understand how rescued Poets expand card choices.',
          href: Routes.PoetsOfLimbo,
          external: false,
          icon: <Users className="size-4" />,
        },
      ],
    },
    {
      title: 'Boss & Cast',
      href: Routes.MinosBoss,
      external: false,
      icon: <Skull className="size-4" />,
      items: [
        {
          title: 'Minos boss guide',
          description: 'Prepare the hand and learn the Limbo finale safely.',
          href: Routes.MinosBoss,
          external: false,
          icon: <Skull className="size-4" />,
        },
        {
          title: 'Characters',
          description: 'Dante, Virgil, Beatrice, Minos and the Poets.',
          href: Routes.Characters,
          external: false,
          icon: <Users className="size-4" />,
        },
        {
          title: 'Demo vs Early Access',
          description: 'Compare content and non-transferable progress.',
          href: Routes.DemoVsEarlyAccess,
          external: false,
          icon: <CalendarDays className="size-4" />,
        },
      ],
    },
    {
      title: 'Release & Play',
      href: Routes.ReleaseDate,
      external: false,
      icon: <CalendarDays className="size-4" />,
      items: [
        {
          title: 'Release date',
          description: 'Early Access and full-release status.',
          href: Routes.ReleaseDate,
          external: false,
          icon: <CalendarDays className="size-4" />,
        },
        {
          title: 'Platforms & Steam Deck',
          description: 'Windows, consoles, multiplayer and Valve rating.',
          href: Routes.Platforms,
          external: false,
          icon: <ShieldCheck className="size-4" />,
        },
        {
          title: 'Official download',
          description: 'Use the Steam game or the separate free demo.',
          href: Routes.Download,
          external: false,
          icon: <Download className="size-4" />,
        },
      ],
    },
  ];
}
