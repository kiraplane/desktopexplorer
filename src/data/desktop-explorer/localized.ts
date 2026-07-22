import type { Locale } from 'next-intl';
import { featuredGuides, getGuide, getPuzzleGuides, guides } from './guides';
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
  '/': 'Desktop Explorer Wiki',
  '/guides': 'Guide Hub',
  '/guides/beginner-spoiler-light-hints': 'Spoiler-Light Beginner Hints',
  '/guides/full-walkthrough': 'Full Walkthrough',
  '/guides/all-puzzle-solutions-passwords': 'All Solutions & Passwords',
  '/guides/cave-puzzles-0-10': 'Cave Puzzles 0–10',
  '/guides/puzzle-0-prologue': 'Puzzle 0: Prologue',
  '/guides/puzzle-1-fortuna-solution': 'Puzzle 1: Fortuna',
  '/guides/puzzle-2-inanna-solution': 'Puzzle 2: Inanna',
  '/guides/puzzle-3-elephas-solution': 'Puzzle 3: Elephas',
  '/guides/puzzle-4-salve-solution': 'Puzzle 4: Salve',
  '/guides/puzzle-5-portonus-solution': 'Puzzle 5: PORTONUS',
  '/guides/puzzle-6-mmtt-solution': 'Puzzle 6: MMTT',
  '/guides/puzzle-7-kassandra-solution': 'Puzzle 7: Kassandra',
  '/guides/puzzle-8-rubicon-solution': 'Puzzle 8: Rubicon',
  '/guides/puzzle-9-altar-solution': 'Puzzle 9: Altar',
  '/guides/puzzle-10-beyond-solution': 'Puzzle 10: Beyond',
  '/guides/temple-walkthrough': 'Temple Walkthrough',
  '/guides/m4x1mus-password-nextrooms': 'M4x1mus & NextRooms',
  '/guides/mall-f1-puzzles': 'Sol Plaza Mall F1',
  '/guides/mall-f2-admin-unlock': 'Mall F2 & Admin Unlock',
  '/guides/admin-guppy-ending': 'Admin, Guppy & Ending',
  '/guides/achievements-guide': 'All 23 Achievements',
  '/guides/demo-vs-full-game': 'Demo vs Full Game',
  '/guides/release-price-platforms': 'Release, Price & Platforms',
  '/system-requirements': 'System Requirements',
  '/review': 'Spoiler-Light Review',
  '/download': 'Official Download',
  '/disclaimer': 'Disclaimer',
};

export function getLocalizedGuide(slug: string, _locale?: Locale | string) {
  return getGuide(slug);
}

export function getLocalizedGuides(_locale?: Locale | string) {
  return guides;
}

export function getLocalizedPuzzleGuides(_locale?: Locale | string) {
  return getPuzzleGuides();
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
    .filter((matrixItem) => ['keep', 'watch'].includes(matrixItem.status))
    .filter((matrixItem) => matrixItem.route !== 'none')
    .map((matrixItem) => ({
      keyword: matrixItem.keyword,
      route: matrixItem.route,
      label: routeLabels[matrixItem.route.split('#')[0]] ?? matrixItem.route,
      intent: matrixItem.intent,
    }));

  return {
    badge: 'Independent Steam puzzle wiki · Updated July 20, 2026',
    metadataTitle: 'Desktop Explorer Wiki - Walkthroughs & Puzzle Answers',
    title: 'Desktop Explorer Wiki',
    intro:
      'Explore every strange folder without losing the thread. Find spoiler-light hints, direct puzzle answers, passwords, achievement cleanup and a complete route from Halibut to Guppy.',
    primaryCta: 'Get spoiler-light hints',
    secondaryCta: 'Open all puzzle answers',
    scopeNote:
      'This is an independent fan guide. Current full-release evidence takes priority, demo material stays labeled and every answer page is marked for spoiler level.',
    routeLabels,
    keywordRoutes,
    faq: [
      {
        question: 'What is Desktop Explorer?',
        answer:
          'Desktop Explorer is a single-player puzzle mystery by Recurring Dream. You investigate a faux 1990s computer by manipulating files, source code, applications and hidden 3D spaces.',
      },
      {
        question: 'When did Desktop Explorer release?',
        answer:
          'It released on Steam on July 17, 2026. The full game is App 2527160.',
      },
      {
        question: 'Where should I start if I want fewer spoilers?',
        answer:
          'Use the spoiler-light beginner guide. It explains the puzzle vocabulary without listing every password.',
      },
      {
        question: 'Where are all Desktop Explorer passwords?',
        answer:
          'The All Puzzle Solutions and Passwords page collects Cave, Temple, NextRooms, Sol Plaza, Admin and Guppy answers in story order.',
      },
      {
        question: 'How many Steam achievements are there?',
        answer:
          'Steam currently lists 23 achievements, including story, creation, collection and secret interactions.',
      },
      {
        question: 'Is Desktop Explorer on Windows and Mac?',
        answer:
          'Yes. Steam currently lists Windows and macOS. No native Linux version is listed.',
      },
    ],
  };
}

export function getGuidesIndexContent(
  _locale?: Locale | string
): GuidesIndexContent {
  return {
    badge: `${guides.length} focused answer pages`,
    title: 'Desktop Explorer Guide Hub',
    intro:
      'Choose the clue in front of you. Start spoiler-light, follow the full route, jump to Cave or Temple, unlock Admin and Guppy, or clean up all 23 achievements.',
    readGuide: 'Open guide',
    faq: [
      {
        question: 'Which Desktop Explorer guide should I read first?',
        answer:
          'Start with Spoiler-Light Beginner Hints. Move to the full walkthrough or direct answer sheet only when you want explicit passwords.',
      },
      {
        question: 'Are these solutions for the full Steam release?',
        answer:
          'Yes. The July 17, 2026 full release is the primary scope. The separate demo page is clearly labeled.',
      },
      {
        question: 'Why do some puzzle numbers differ?',
        answer:
          'Some guides count OpenMe as Puzzle 0 and others as Puzzle 1. Our pages pair numbers with visible labels and locations.',
      },
    ],
  };
}

export function getGuideArticleUi(_locale?: Locale | string): GuideArticleUi {
  return {
    videoPrefix: 'Video cross-check:',
    videoSuffix:
      'Use the written steps above for searchable inputs and current caveats.',
    officialTitle: 'Verify the current build',
    officialBody:
      'Passwords and interfaces can change after an update. The official Steam listing and current in-game clue remain the authority for platform, build and safety information.',
    officialLinkLabel: 'Open the official Steam page',
    faqTitle: 'Frequently asked questions',
    categoryLabels: {
      Start: 'Start Here',
      Walkthrough: 'Walkthrough',
      Puzzle: 'Puzzle Solution',
      Achievements: 'Achievements',
      Reference: 'Reference',
      Review: 'Review',
      Safety: 'Official Links',
      Status: 'Status',
    },
    difficultyLabels: {
      'Spoiler-light': 'Spoiler-light',
      'Major spoilers': 'Major spoilers',
      Reference: 'Reference',
      Status: 'Status',
    },
  };
}
