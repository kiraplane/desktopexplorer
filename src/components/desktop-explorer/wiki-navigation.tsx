import { Badge } from '@/components/ui/badge';
import { routeLabels } from '@/data/desktop-explorer/localized';
import { LocaleLink } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import {
  ArrowRight,
  BookOpen,
  ChevronDown,
  Compass,
  Download,
  FileKey2,
  FolderSearch2,
  Menu,
  ShieldCheck,
  Trophy,
} from 'lucide-react';
import type { Locale } from 'next-intl';
import type { ReactNode } from 'react';

interface SectionLink {
  href: string;
  label: string;
}

const wikiNavRoutes = [
  {
    title: 'Start Here',
    icon: BookOpen,
    routes: ['/', '/guides', '/guides/beginner-spoiler-light-hints', '/review'],
  },
  {
    title: 'Full Investigation',
    icon: FolderSearch2,
    routes: [
      '/guides/full-walkthrough',
      '/guides/cave-puzzles-0-10',
      '/guides/temple-walkthrough',
      '/guides/m4x1mus-password-nextrooms',
      '/guides/mall-f1-puzzles',
      '/guides/mall-f2-admin-unlock',
      '/guides/admin-guppy-ending',
    ],
  },
  {
    title: 'Direct Answers',
    icon: FileKey2,
    routes: [
      '/guides/all-puzzle-solutions-passwords',
      '/guides/puzzle-0-prologue',
      '/guides/puzzle-1-fortuna-solution',
      '/guides/puzzle-2-inanna-solution',
      '/guides/puzzle-3-elephas-solution',
      '/guides/puzzle-4-salve-solution',
      '/guides/puzzle-5-portonus-solution',
      '/guides/puzzle-6-mmtt-solution',
      '/guides/puzzle-7-kassandra-solution',
      '/guides/puzzle-8-rubicon-solution',
      '/guides/puzzle-9-altar-solution',
      '/guides/puzzle-10-beyond-solution',
      '/guides/achievements-guide',
    ],
  },
  {
    title: 'Release & Install',
    icon: ShieldCheck,
    routes: [
      '/guides/demo-vs-full-game',
      '/guides/release-price-platforms',
      '/system-requirements',
      '/download',
      '/disclaimer',
    ],
  },
] as const;

const routeCount = wikiNavRoutes.reduce(
  (count, group) => count + group.routes.length,
  0
);

function isCurrentPath(currentPath: string | undefined, href: string) {
  return currentPath === href;
}

function WikiLink({
  currentPath,
  href,
}: { currentPath?: string; href: string }) {
  const active = isCurrentPath(currentPath, href);

  return (
    <LocaleLink
      href={href}
      aria-current={active ? 'page' : undefined}
      className={cn(
        'flex h-auto min-w-0 items-center justify-between gap-3 whitespace-normal rounded-lg border px-3 py-2 text-left text-sm leading-6 transition',
        active
          ? 'border-[#f0a23a] bg-[#f0a23a] font-semibold text-[#071615]'
          : 'border-[#536e69] bg-[#071615] text-[#a9c0bb] hover:border-[#8f92df] hover:bg-[#183837] hover:text-[#f4f1df]'
      )}
    >
      <span className="min-w-0 break-words">{routeLabels[href] ?? href}</span>
      <ArrowRight
        className={cn(
          'size-4 shrink-0',
          active ? 'text-[#071615]' : 'text-[#8f92df]'
        )}
      />
    </LocaleLink>
  );
}

function NavGroups({ currentPath }: { currentPath?: string }) {
  return wikiNavRoutes.map((group) => {
    const active = group.routes.some((route) =>
      isCurrentPath(currentPath, route)
    );

    return (
      <details
        key={group.title}
        open={active}
        className={cn(
          'group rounded-lg border p-3',
          active
            ? 'border-[#f0a23a]/70 bg-[#f0a23a]/8'
            : 'border-[#536e69] bg-[#071615]'
        )}
      >
        <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-sm font-semibold text-[#f4f1df] [&::-webkit-details-marker]:hidden">
          <span className="flex min-w-0 items-center gap-2">
            <group.icon className="size-4 shrink-0 text-[#8f92df]" />
            <span className="min-w-0 break-words">{group.title}</span>
            <span className="text-[#a9c0bb] text-xs">
              {group.routes.length}
            </span>
          </span>
          <ChevronDown className="size-4 shrink-0 text-[#f0a23a] transition group-open:rotate-180" />
        </summary>
        <div className="mt-3 grid gap-2">
          {group.routes.map((route) => (
            <WikiLink key={route} currentPath={currentPath} href={route} />
          ))}
        </div>
      </details>
    );
  });
}

export function WikiRouteSidebar({
  children,
  currentPath,
  sectionLinks = [],
}: {
  children?: ReactNode;
  currentPath?: string;
  locale?: Locale;
  sectionLinks?: SectionLink[];
}) {
  return (
    <aside className="sticky top-24 hidden w-[272px] shrink-0 self-start space-y-4 lg:block">
      <div className="rounded-xl border border-[#536e69] bg-[#102625] p-4">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8f92df]">
              Wiki Navigation
            </p>
            <h2 className="mt-1 break-words font-display text-lg font-bold text-[#f4f1df]">
              Desktop Explorer
            </h2>
          </div>
          <Compass className="size-5 shrink-0 text-[#f0a23a]" />
        </div>
        <div className="mt-4 space-y-3">
          <NavGroups currentPath={currentPath} />
        </div>
        <p className="mt-4 border-[#536e69] border-t pt-3 text-[#86a39e] text-xs">
          {routeCount} focused wiki routes
        </p>
      </div>

      {sectionLinks.length ? (
        <div className="rounded-xl border border-[#536e69] bg-[#102625] p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8f92df]">
            On this page
          </p>
          <div className="mt-3 grid gap-2">
            {sectionLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="min-w-0 break-words rounded-lg border border-[#536e69] bg-[#071615] px-3 py-2 text-[#a9c0bb] text-sm leading-6 hover:border-[#8f92df] hover:text-[#f4f1df]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}

      {children}
    </aside>
  );
}

export function MobileWikiNav({
  currentPath,
  sectionLinks = [],
}: {
  currentPath?: string;
  locale?: Locale;
  sectionLinks?: SectionLink[];
}) {
  return (
    <details className="group mt-5 rounded-xl border border-[#536e69] bg-[#102625] p-4 lg:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-[#f4f1df] [&::-webkit-details-marker]:hidden">
        <span className="flex items-center gap-2">
          <Menu className="size-4 text-[#8f92df]" />
          Open wiki menu
          <Badge className="bg-[#f0a23a] text-[#071615]">{routeCount}</Badge>
        </span>
        <ChevronDown className="size-4 text-[#f0a23a] transition group-open:rotate-180" />
      </summary>
      <div className="mt-4 space-y-3 border-[#536e69] border-t pt-4">
        <NavGroups currentPath={currentPath} />
        {sectionLinks.length ? (
          <details className="rounded-lg border border-[#536e69] bg-[#071615] p-3">
            <summary className="cursor-pointer text-sm font-semibold text-[#f4f1df]">
              On this page
            </summary>
            <div className="mt-3 grid gap-2">
              {sectionLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="break-words rounded-lg border border-[#536e69] px-3 py-2 text-[#a9c0bb] text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </details>
        ) : null}
      </div>
    </details>
  );
}

export function QuickWikiLinks({ className }: { className?: string }) {
  const routes = [
    {
      href: '/guides/beginner-spoiler-light-hints',
      label: 'Hints',
      icon: BookOpen,
    },
    {
      href: '/guides/full-walkthrough',
      label: 'Walkthrough',
      icon: FolderSearch2,
    },
    {
      href: '/guides/all-puzzle-solutions-passwords',
      label: 'Passwords',
      icon: FileKey2,
    },
    {
      href: '/guides/achievements-guide',
      label: 'Achievements',
      icon: Trophy,
    },
    { href: '/download', label: 'Steam', icon: Download },
  ];

  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {routes.map((route) => (
        <LocaleLink
          key={route.href}
          href={route.href}
          className="inline-flex h-auto items-center gap-1.5 rounded-lg border border-[#536e69] bg-[#071615]/85 px-2.5 py-1.5 text-[#f4f1df] text-xs transition hover:border-[#8f92df] hover:bg-[#183837] sm:text-sm"
        >
          <route.icon className="size-3.5 shrink-0 text-[#8f92df]" />
          {route.label}
        </LocaleLink>
      ))}
    </div>
  );
}
