'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';
import {
  BookOpen,
  Download,
  FileKey2,
  FolderSearch2,
  Gamepad2,
  KeyRound,
  Trophy,
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
          description: 'All current walkthroughs and puzzle answer pages.',
          href: Routes.Guides,
          external: false,
          icon: <BookOpen className="size-4" />,
        },
        {
          title: 'Spoiler-light hints',
          description:
            'Learn the desktop puzzle grammar before seeing answers.',
          href: Routes.BeginnerGuide,
          external: false,
          icon: <FolderSearch2 className="size-4" />,
        },
        {
          title: 'Full walkthrough',
          description: 'Follow Halibut, M4x1mus, Admin and Guppy in order.',
          href: Routes.FullWalkthrough,
          external: false,
          icon: <FolderSearch2 className="size-4" />,
        },
      ],
    },
    {
      title: 'Answers',
      href: Routes.AllSolutions,
      external: false,
      icon: <FileKey2 className="size-4" />,
      items: [
        {
          title: 'All passwords',
          description: 'Quick answers for Cave, Temple, Mall, Admin and Guppy.',
          href: Routes.AllSolutions,
          external: false,
          icon: <KeyRound className="size-4" />,
        },
        {
          title: 'Cave puzzles 0–10',
          description: 'Every early answer, action and numbering caveat.',
          href: Routes.CavePuzzles,
          external: false,
          icon: <FileKey2 className="size-4" />,
        },
        {
          title: 'All 23 achievements',
          description: 'Story, creation, collection and secret unlocks.',
          href: Routes.Achievements,
          external: false,
          icon: <Trophy className="size-4" />,
        },
      ],
    },
    {
      title: 'Steam',
      href: Routes.PlatformsReleasePrice,
      external: false,
      icon: <Gamepad2 className="size-4" />,
      items: [
        {
          title: 'Release & platforms',
          description: 'Check the release date, current price and Mac support.',
          href: Routes.PlatformsReleasePrice,
          external: false,
          icon: <Gamepad2 className="size-4" />,
        },
        {
          title: 'Demo vs full game',
          description: 'Separate Steam App 2533590 from full App 2527160.',
          href: Routes.DemoFullGame,
          external: false,
          icon: <Gamepad2 className="size-4" />,
        },
        {
          title: 'Official download',
          description: 'Use Steam App 2527160 and avoid unsafe mirrors.',
          href: Routes.Download,
          external: false,
          icon: <Download className="size-4" />,
        },
      ],
    },
  ];
}
