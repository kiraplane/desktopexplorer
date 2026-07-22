import { FaqSection } from '@/components/desktop-explorer/faq-section';
import {
  MobileWikiNav,
  QuickWikiLinks,
  WikiRouteSidebar,
} from '@/components/desktop-explorer/wiki-navigation';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  getHomeContent,
  getLocalizedFeaturedGuides,
  getLocalizedGameFacts,
  getLocalizedPuzzleGuides,
} from '@/data/desktop-explorer/localized';
import { siteFacts } from '@/data/desktop-explorer/sources';
import { LocaleLink } from '@/i18n/navigation';
import {
  ArrowRight,
  BookOpen,
  ExternalLink,
  FileKey2,
  FolderSearch2,
  KeyRound,
  MonitorDot,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  Trophy,
} from 'lucide-react';
import type { Locale } from 'next-intl';
import Image from 'next/image';

const problemRoutes = [
  {
    title: 'I want hints, not passwords',
    text: 'Learn when to inspect Details, Source, hidden files and extensions.',
    href: '/guides/beginner-spoiler-light-hints',
    icon: ScanSearch,
    window: 'HINTS.TXT',
  },
  {
    title: 'I need the full route',
    text: 'Move from Halibut and the Cave through M4x1mus, Admin and Guppy.',
    href: '/guides/full-walkthrough',
    icon: FolderSearch2,
    window: 'ROUTE.EXE',
  },
  {
    title: 'I only need a password',
    text: 'Open the fast answer sheet for every named word, login and room code.',
    href: '/guides/all-puzzle-solutions-passwords',
    icon: KeyRound,
    window: 'PASSWORDS.DB',
  },
  {
    title: 'Puzzle 9 will not register',
    text: 'Reset the altar and stack Large, Medium and Small cleanly.',
    href: '/guides/puzzle-9-altar-solution',
    icon: FileKey2,
    window: 'ALTAR.ERR',
  },
  {
    title: 'Puzzle 10 needs answers',
    text: 'Use crocodile, 14, fire and Walleye in the matching Beyond prompts.',
    href: '/guides/puzzle-10-beyond-solution',
    icon: MonitorDot,
    window: 'BEYOND.DAT',
  },
  {
    title: 'One achievement is missing',
    text: 'Check all 23 unlocks, including terminal, pawn and screensaver secrets.',
    href: '/guides/achievements-guide',
    icon: Trophy,
    window: 'ACHIEVE.LOG',
  },
] as const;

export function DesktopExplorerHomePage({ locale }: { locale?: Locale }) {
  const content = getHomeContent(locale);
  const featured = getLocalizedFeaturedGuides(locale);
  const facts = getLocalizedGameFacts(locale);
  const puzzleGuides = getLocalizedPuzzleGuides(locale);
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        name: siteFacts.siteName,
        url: siteFacts.domain,
        description: content.intro,
        inLanguage: 'en',
      },
      {
        '@type': 'Organization',
        name: siteFacts.siteName,
        url: siteFacts.domain,
        logo: `${siteFacts.domain}/logo.svg`,
      },
      {
        '@type': 'VideoGame',
        name: siteFacts.gameName,
        url: siteFacts.officialSteamUrl,
        image: `${siteFacts.domain}${siteFacts.officialCoverImage}`,
        datePublished: '2026-07-17',
        gamePlatform: ['Windows', 'macOS'],
        author: { '@type': 'Organization', name: siteFacts.creator },
        publisher: siteFacts.publishers.map((name) => ({
          '@type': 'Organization',
          name,
        })),
      },
      {
        '@type': 'VideoObject',
        name: 'Desktop Explorer - Release Date Trailer',
        thumbnailUrl: `${siteFacts.domain}/desktop-explorer/guides/official-trailer.jpg`,
        uploadDate: '2026-06-04',
        embedUrl: `https://www.youtube-nocookie.com/embed/${siteFacts.officialTrailerId}`,
      },
      {
        '@type': 'FAQPage',
        mainEntity: content.faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen overflow-x-clip bg-[#071615] text-[#f4f1df]">
      <JsonLd data={graph} />

      <section className="relative overflow-hidden border-[#536e69] border-b">
        <Image
          src={siteFacts.officialHeroImage}
          alt="Desktop Explorer faux 1990s computer interface"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,22,21,.99)_0%,rgba(7,22,21,.9)_50%,rgba(7,22,21,.45)_100%)]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(244,241,223,.55)_1px,transparent_1px),linear-gradient(90deg,rgba(244,241,223,.55)_1px,transparent_1px)] [background-size:24px_24px]" />

        <Container className="relative px-4 py-8 lg:py-11">
          <div className="grid items-center gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(360px,.72fr)]">
            <div className="min-w-0">
              <Badge className="rounded-none border border-[#f0a23a] bg-[#102625] text-[#f0a23a]">
                {content.badge}
              </Badge>
              <h1 className="mt-5 max-w-4xl font-display text-5xl font-black leading-[.94] tracking-[-.04em] md:text-7xl">
                <span className="text-[#c4d0b8]">Desktop</span>{' '}
                <span className="text-[#d44aa4]">Explorer</span>{' '}
                <span className="text-[#8f92df]">Wiki</span>
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-[#a9c0bb] md:text-lg">
                {content.intro}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  asChild
                  className="h-auto rounded-none border border-[#f0a23a] bg-[#f0a23a] px-5 py-3 text-[#071615] shadow-[4px_4px_0_#d44aa4] hover:bg-[#c4d0b8]"
                >
                  <LocaleLink href="/guides/beginner-spoiler-light-hints">
                    {content.primaryCta}
                    <ArrowRight className="size-4 shrink-0" />
                  </LocaleLink>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-auto rounded-none border-[#8f92df] bg-[#102625]/80 px-5 py-3 text-[#f4f1df] hover:bg-[#183837]"
                >
                  <LocaleLink href="/guides/all-puzzle-solutions-passwords">
                    {content.secondaryCta}
                  </LocaleLink>
                </Button>
              </div>
              <QuickWikiLinks className="mt-6" />
              <p className="mt-4 max-w-3xl text-sm leading-6 text-[#86a39e]">
                {content.scopeNote}
              </p>
            </div>

            <div className="border-2 border-[#c4d0b8] bg-[#102625] shadow-[8px_8px_0_rgba(212,74,164,.55)]">
              <div className="flex items-center justify-between border-[#c4d0b8] border-b bg-[#8f92df] px-3 py-2 text-[#071615]">
                <span className="font-mono text-xs font-black tracking-wider">
                  OFFICIAL_TRAILER.MOV
                </span>
                <span className="flex gap-1">
                  <i className="size-3 border border-[#071615] bg-[#c4d0b8]" />
                  <i className="size-3 border border-[#071615] bg-[#f0a23a]" />
                  <i className="size-3 border border-[#071615] bg-[#d44aa4]" />
                </span>
              </div>
              <iframe
                className="aspect-video w-full"
                src={`https://www.youtube-nocookie.com/embed/${siteFacts.officialTrailerId}?rel=0`}
                title="Official Desktop Explorer release date trailer"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </Container>
      </section>

      <Container className="px-4 py-9 lg:py-12">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_272px]">
          <main className="min-w-0 space-y-9">
            <MobileWikiNav currentPath="/" locale={locale} />

            <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {facts.map((fact, index) => (
                <div
                  key={fact.label}
                  className="border border-[#536e69] bg-[#102625] p-4 shadow-[3px_3px_0_#183837]"
                >
                  <p
                    className={
                      index % 3 === 0
                        ? 'font-mono text-xs font-bold uppercase tracking-[.14em] text-[#f0a23a]'
                        : index % 3 === 1
                          ? 'font-mono text-xs font-bold uppercase tracking-[.14em] text-[#8f92df]'
                          : 'font-mono text-xs font-bold uppercase tracking-[.14em] text-[#d44aa4]'
                    }
                  >
                    {fact.label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#a9c0bb]">
                    {fact.value}
                  </p>
                </div>
              ))}
            </section>

            <section className="border border-[#8f92df] bg-[#102625] p-5 md:p-7">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="font-mono text-xs font-semibold uppercase tracking-[.18em] text-[#d44aa4]">
                    CAVE_INDEX
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-black">
                    Desktop Explorer Puzzle 0–10
                  </h2>
                  <p className="mt-2 max-w-3xl text-sm leading-7 text-[#a9c0bb]">
                    Open the exact number shown in your Cave folder for the
                    answer, clue method and numbering note.
                  </p>
                </div>
                <LocaleLink
                  href="/guides/cave-puzzles-0-10"
                  className="inline-flex items-center gap-2 text-[#f0a23a] text-sm underline underline-offset-4"
                >
                  Browse Cave hub <ArrowRight className="size-4" />
                </LocaleLink>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4 xl:grid-cols-6">
                {puzzleGuides.map((guide) => (
                  <LocaleLink
                    key={guide.path}
                    href={guide.path}
                    className="group border border-[#536e69] bg-[#071615] px-3 py-3 hover:border-[#f0a23a] hover:bg-[#183837]"
                  >
                    <span className="block font-mono text-xs font-black text-[#8f92df] group-hover:text-[#f0a23a]">
                      PUZZLE {guide.puzzleNumber}
                    </span>
                    <span className="mt-1 block truncate text-[#a9c0bb] text-xs">
                      {guide.tags[1] ?? guide.tags[0]}
                    </span>
                  </LocaleLink>
                ))}
              </div>
            </section>

            <section className="border border-[#536e69] bg-[#102625] p-5 md:p-7">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="font-mono text-xs font-semibold uppercase tracking-[.18em] text-[#d44aa4]">
                    OPEN A FILE
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-black">
                    What stopped your investigation?
                  </h2>
                </div>
                <LocaleLink
                  href="/guides"
                  className="inline-flex items-center gap-2 text-[#f0a23a] text-sm underline underline-offset-4"
                >
                  Browse every guide <ArrowRight className="size-4" />
                </LocaleLink>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {problemRoutes.map((item) => (
                  <LocaleLink
                    key={item.href}
                    href={item.href}
                    className="group border border-[#536e69] bg-[#071615] transition hover:-translate-y-1 hover:border-[#8f92df] hover:shadow-[4px_4px_0_#d44aa4]"
                  >
                    <div className="flex items-center justify-between border-[#536e69] border-b bg-[#183837] px-3 py-2">
                      <span className="font-mono text-[11px] text-[#c4d0b8]">
                        {item.window}
                      </span>
                      <item.icon className="size-4 text-[#f0a23a]" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-display text-lg font-bold group-hover:text-[#f0a23a]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-[#a9c0bb]">
                        {item.text}
                      </p>
                    </div>
                  </LocaleLink>
                ))}
              </div>
            </section>

            <section className="border border-[#536e69] bg-[#102625] p-5 md:p-7">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="font-mono text-xs font-semibold uppercase tracking-[.18em] text-[#8f92df]">
                    PINNED_GUIDES
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-black">
                    Start with the right spoiler level
                  </h2>
                </div>
                <BookOpen className="size-7 text-[#f0a23a]" />
              </div>
              <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {featured.map((guide) => (
                  <article
                    key={guide.slug}
                    className="overflow-hidden border border-[#536e69] bg-[#071615]"
                  >
                    <div className="relative aspect-video border-[#536e69] border-b">
                      <Image
                        src={guide.coverImageUrl}
                        alt={`${guide.title} cover`}
                        fill
                        sizes="(min-width: 1280px) 320px, (min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#071615]/90 to-transparent" />
                      <Badge className="absolute bottom-3 left-3 rounded-none bg-[#d44aa4] text-white">
                        {guide.difficulty}
                      </Badge>
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-xl font-bold">
                        {guide.title}
                      </h3>
                      <p className="mt-2 line-clamp-3 text-sm leading-6 text-[#a9c0bb]">
                        {guide.summary}
                      </p>
                      <LocaleLink
                        href={guide.path}
                        className="mt-4 inline-flex items-center gap-2 text-[#8f92df] text-sm font-semibold"
                      >
                        Open file <ArrowRight className="size-4" />
                      </LocaleLink>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="grid gap-5 md:grid-cols-2">
              <div className="border border-[#536e69] bg-[#102625] p-6">
                <ShieldCheck className="size-7 text-[#f0a23a]" />
                <h2 className="mt-4 font-display text-2xl font-black">
                  Released-build facts
                </h2>
                <div className="mt-4 grid gap-2 text-sm leading-6 text-[#a9c0bb]">
                  <p>Released July 17, 2026 on Steam.</p>
                  <p>Windows and macOS · Single-player · 23 achievements.</p>
                  <p>Full game App 2527160 · Demo App 2533590.</p>
                </div>
                <LocaleLink
                  href="/guides/release-price-platforms"
                  className="mt-4 inline-flex items-center gap-2 text-[#f0a23a] text-sm font-semibold"
                >
                  Check release and platforms <ArrowRight className="size-4" />
                </LocaleLink>
              </div>
              <div className="border border-[#536e69] bg-[#102625] p-6">
                <Sparkles className="size-7 text-[#d44aa4]" />
                <h2 className="mt-4 font-display text-2xl font-black">
                  Official records
                </h2>
                <div className="mt-4 grid gap-2">
                  {[
                    ['Steam store', siteFacts.officialSteamUrl],
                    ['Steam achievements', siteFacts.officialAchievementsUrl],
                    ['Recurring Dream', siteFacts.officialWebsiteUrl],
                  ].map(([label, href]) => (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between border border-[#536e69] bg-[#071615] px-4 py-3 text-sm text-[#f4f1df] hover:border-[#8f92df]"
                    >
                      {label} <ExternalLink className="size-4 text-[#8f92df]" />
                    </a>
                  ))}
                </div>
              </div>
            </section>

            <section className="border border-[#536e69] bg-[#102625] p-5 md:p-7">
              <p className="font-mono text-xs font-semibold uppercase tracking-[.18em] text-[#d44aa4]">
                SEARCH_INDEX
              </p>
              <h2 className="mt-2 font-display text-2xl font-black">
                Every query maps to an answer page
              </h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {content.keywordRoutes.slice(0, 20).map((item) => (
                  <LocaleLink
                    key={`${item.keyword}-${item.route}`}
                    href={item.route}
                    className="border border-[#536e69] bg-[#071615] px-3 py-2 text-[#a9c0bb] text-xs hover:border-[#8f92df] hover:text-[#f4f1df]"
                  >
                    {item.keyword}
                  </LocaleLink>
                ))}
              </div>
            </section>

            <FaqSection items={content.faq} title="Desktop Explorer FAQ" />
          </main>

          <WikiRouteSidebar currentPath="/" locale={locale} />
        </div>
      </Container>
    </div>
  );
}
