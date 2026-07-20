'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';

export function useFooterLinks(): NestedMenuItem[] {
  return [
    {
      title: 'Start',
      items: [
        {
          title: 'Spoiler-Light Hints',
          href: Routes.BeginnerGuide,
          external: false,
        },
        { title: 'Guide Hub', href: Routes.Guides, external: false },
        { title: 'Review', href: Routes.Review, external: false },
      ],
    },
    {
      title: 'Walkthrough',
      items: [
        {
          title: 'Full Walkthrough',
          href: Routes.FullWalkthrough,
          external: false,
        },
        { title: 'Cave Puzzles', href: Routes.CavePuzzles, external: false },
        { title: 'Temple', href: Routes.TempleWalkthrough, external: false },
      ],
    },
    {
      title: 'Answers',
      items: [
        { title: 'All Passwords', href: Routes.AllSolutions, external: false },
        { title: 'Puzzle 9', href: Routes.Puzzle9, external: false },
        { title: 'Achievements', href: Routes.Achievements, external: false },
      ],
    },
    {
      title: 'Steam',
      items: [
        {
          title: 'Release & Platforms',
          href: Routes.PlatformsReleasePrice,
          external: false,
        },
        {
          title: 'System Requirements',
          href: Routes.SystemRequirements,
          external: false,
        },
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
