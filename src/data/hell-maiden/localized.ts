import type { Locale } from 'next-intl';
import { featuredGuides, getGuide, guides } from './guides';
import { gameFacts, keywordMatrix, siteDescription } from './sources';
import type { GameFact, Guide, GuideFaq } from './types';

export interface HomeContent {
  badge: string;
  metadataTitle: string;
  title: string;
  intro: string;
  primaryCta: string;
  secondaryCta: string;
  scopeNote: string;
  routeLabels: Record<string, string>;
  keywordRoutes: Array<{
    keyword: string;
    route: string;
    label: string;
    intent: string;
  }>;
  faq: GuideFaq[];
}

export interface GuidesIndexContent {
  badge: string;
  title: string;
  intro: string;
  readGuide: string;
  faq: GuideFaq[];
}

export interface GuideArticleUi {
  videoPrefix: string;
  videoSuffix: string;
  officialTitle: string;
  officialBody: string;
  officialLinkLabel: string;
  faqTitle: string;
  categoryLabels: Record<Guide['category'], string>;
  difficultyLabels: Record<Guide['difficulty'], string>;
}

export const routeLabels: Record<string, string> = {
  '/': 'Hell Maiden Wiki',
  '/guides': 'Guide Hub',
  '/guides/beginner-guide': 'Beginner Guide',
  '/cards': 'Spirit Cards',
  '/guides/best-builds': 'Build Guide',
  '/guides/minos-boss-guide': 'Minos Boss Guide',
  '/guides/poets-of-limbo': 'Poets of Limbo',
  '/guides/demo-vs-early-access': 'Demo vs Early Access',
  '/guides/controls-and-first-run-tips': 'Controls & First-Run Tips',
  '/characters': 'Characters',
  '/release-date': 'Release Date',
  '/platforms': 'Platforms',
  '/steam-deck': 'Steam Deck Status',
  '/download': 'Official Download',
  '/soundtrack': 'Soundtrack',
  '/disclaimer': 'Disclaimer',
};

export function getLocalizedGuide(slug: string, _locale?: Locale | string) {
  return getGuide(slug);
}

export function getLocalizedGuides(_locale?: Locale | string) {
  return guides;
}

export function getLocalizedFeaturedGuides(_locale?: Locale | string) {
  return featuredGuides;
}

export function getLocalizedSiteDescription(_locale?: Locale | string) {
  return siteDescription;
}

export function getLocalizedGameFacts(_locale?: Locale | string): GameFact[] {
  return gameFacts;
}

export function getHomeContent(_locale?: Locale | string): HomeContent {
  const keywordRoutes = keywordMatrix
    .filter((item) => item.route !== 'none' && item.status === 'keep')
    .map((item) => ({
      keyword: item.keyword,
      route: item.route,
      label: routeLabels[item.route.split('#')[0]] ?? item.route,
      intent: item.intent,
    }));

  return {
    badge: 'Independent Early Access guide hub · Checked July 16, 2026',
    metadataTitle: 'Hell Maiden Wiki - Builds, Cards, Bosses & Release Help',
    title: 'Hell Maiden Wiki',
    intro:
      'Build a cleaner Spirit Card hand, survive Limbo, prepare for Minos and separate current Early Access facts from old demo advice.',
    primaryCta: 'Start the beginner guide',
    secondaryCta: 'Learn Spirit Cards',
    scopeNote:
      'Hell Maiden is changing in Early Access. Current Steam facts and in-game tooltips take priority over demo videos, old card values and community rankings.',
    routeLabels,
    keywordRoutes,
    faq: [
      {
        question: 'What is Hell Maiden?',
        answer:
          "Hell Maiden is AstralShift's action horde-survival deck-builder inspired by Dante's Divine Comedy. You aim and dash through enemy waves while Weapon Cards and Mod Cards shape the run.",
      },
      {
        question: 'When did Hell Maiden enter Early Access?',
        answer:
          'AstralShift announced July 16, 2026 as the Steam Early Access date. The full release does not have an exact announced date.',
      },
      {
        question: 'Is the Hell Maiden demo still useful?',
        answer:
          'Yes for learning Limbo, basic movement, card arrangement and the Minos fight. Do not assume demo balance, unlocks or progression are identical to the current Early Access build.',
      },
      {
        question: 'Does Hell Maiden have a best build?',
        answer:
          'There is no permanent best build yet. A reliable run balances crowd clearing, boss damage, movement safety and compatible Mod Cards instead of chasing one demo tier list.',
      },
      {
        question: 'Are there Hell Maiden codes?',
        answer:
          'No redeem-code system was found in the official Steam information or current game references, so this site does not publish a fake codes page.',
      },
    ],
  };
}

export function getGuidesIndexContent(
  _locale?: Locale | string
): GuidesIndexContent {
  return {
    badge: `${guides.length} focused answers`,
    title: 'Hell Maiden Guide Hub',
    intro:
      'Choose the decision in front of you: first-run movement, card placement, a coherent build, Minos, Poets, demo differences, platforms, Steam Deck or the safe install path.',
    readGuide: 'Open guide',
    faq: [
      {
        question: 'Are these guides for Early Access?',
        answer:
          'Yes. Current Steam scope and official media are the baseline. Demo footage is used only when the page clearly labels what may have changed.',
      },
      {
        question: 'Why is there no tier list?',
        answer:
          'Early Access launched with a changing ability pool and little version-stable evidence. Build principles are more useful than pretending one demo ranking is permanent.',
      },
      {
        question: 'Where should a new player begin?',
        answer:
          'Open the beginner guide, then read Spirit Cards before copying a build. Understanding placement and merging makes every later run easier to diagnose.',
      },
    ],
  };
}

export function getGuideArticleUi(_locale?: Locale | string): GuideArticleUi {
  return {
    videoPrefix: 'Visual cross-check:',
    videoSuffix:
      'Use it for pacing and interface context; current in-game values and official Early Access notes take priority.',
    officialTitle: 'Check the current Early Access build',
    officialBody:
      'Hell Maiden launched into an evolving Early Access period. Tooltips, patch notes and the live Steam build outrank demo-era card values, unlock routes and balance opinions.',
    officialLinkLabel: 'Open Hell Maiden on Steam',
    faqTitle: 'Hell Maiden FAQ',
    categoryLabels: {
      Start: 'Start',
      Cards: 'Cards',
      Builds: 'Builds',
      Bosses: 'Bosses',
      Characters: 'Characters',
      Release: 'Release',
      Platforms: 'Platforms',
      Reference: 'Reference',
      Music: 'Music',
      Safety: 'Safety',
      Status: 'Current status',
    },
    difficultyLabels: {
      Beginner: 'Beginner',
      Intermediate: 'Intermediate',
      Reference: 'Reference',
      Status: 'Current status',
    },
  };
}
