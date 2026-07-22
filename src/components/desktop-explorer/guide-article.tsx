import { FaqSection } from '@/components/desktop-explorer/faq-section';
import {
  MobileWikiNav,
  WikiRouteSidebar,
} from '@/components/desktop-explorer/wiki-navigation';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  getGuideArticleUi,
  getLocalizedPuzzleGuides,
  routeLabels,
} from '@/data/desktop-explorer/localized';
import { siteFacts } from '@/data/desktop-explorer/sources';
import type { Guide } from '@/data/desktop-explorer/types';
import { LocaleLink } from '@/i18n/navigation';
import { ArrowRight, ExternalLink, ShieldCheck } from 'lucide-react';
import type { Locale } from 'next-intl';
import Image from 'next/image';

function toSectionId(heading: string) {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function getAbsoluteUrl(url: string) {
  return url.startsWith('http') ? url : `${siteFacts.domain}${url}`;
}

function getVideoEmbedUrl(video: NonNullable<Guide['video']>) {
  const searchParams = new URLSearchParams({ rel: '0' });

  if (video.startSeconds) {
    searchParams.set('start', String(video.startSeconds));
  }

  return `https://www.youtube-nocookie.com/embed/${video.id}?${searchParams.toString()}`;
}

function formatVideoStart(startSeconds: number) {
  const minutes = Math.floor(startSeconds / 60);
  const seconds = startSeconds % 60;

  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function getRouteLabel(route: string) {
  return (
    routeLabels[route] ??
    route
      .replace(/^\/+/, '')
      .split('/')
      .filter(Boolean)
      .map((segment) =>
        segment
          .split('-')
          .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
          .join(' ')
      )
      .join(' ')
  );
}

function PuzzleDirectory({
  currentPath,
  locale,
}: {
  currentPath: string;
  locale?: Locale;
}) {
  const puzzleGuides = getLocalizedPuzzleGuides(locale);

  return (
    <section className="rounded-xl border border-[#8f92df]/70 bg-[#102625] p-5 md:p-7">
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#d44aa4]">
        CAVE_DIRECTORY
      </p>
      <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="font-display text-2xl font-bold md:text-3xl">
            Cave Puzzle 0–10 directory
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-[#a9c0bb]">
            Match the number visible in your folder. Each page gives the direct
            answer, the desktop action that reveals it and the alternate
            community numbering.
          </p>
        </div>
        {currentPath !== '/guides/cave-puzzles-0-10' ? (
          <LocaleLink
            href="/guides/cave-puzzles-0-10"
            className="text-[#f0a23a] text-sm underline underline-offset-4"
          >
            Open Cave hub
          </LocaleLink>
        ) : null}
      </div>
      <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4 xl:grid-cols-6">
        {puzzleGuides.map((puzzleGuide) => {
          const active = puzzleGuide.path === currentPath;

          return (
            <LocaleLink
              key={puzzleGuide.path}
              href={puzzleGuide.path}
              aria-current={active ? 'page' : undefined}
              className={
                active
                  ? 'border border-[#f0a23a] bg-[#f0a23a] px-3 py-3 text-[#071615]'
                  : 'border border-[#536e69] bg-[#071615] px-3 py-3 text-[#f4f1df] hover:border-[#8f92df] hover:bg-[#183837]'
              }
            >
              <span className="block font-mono text-xs font-black uppercase">
                Puzzle {puzzleGuide.puzzleNumber}
              </span>
              <span className="mt-1 block truncate text-xs opacity-80">
                {routeLabels[puzzleGuide.path]?.replace(
                  `Puzzle ${puzzleGuide.puzzleNumber}: `,
                  ''
                )}
              </span>
            </LocaleLink>
          );
        })}
      </div>
    </section>
  );
}

function PuzzleSequenceNavigation({
  guide,
  locale,
}: {
  guide: Guide & { puzzleNumber: number };
  locale?: Locale;
}) {
  const puzzleGuides = getLocalizedPuzzleGuides(locale);
  const currentIndex = puzzleGuides.findIndex(
    (puzzleGuide) => puzzleGuide.puzzleNumber === guide.puzzleNumber
  );
  const previous = currentIndex > 0 ? puzzleGuides[currentIndex - 1] : null;
  const next =
    currentIndex >= 0 && currentIndex < puzzleGuides.length - 1
      ? puzzleGuides[currentIndex + 1]
      : null;

  return (
    <nav
      aria-label="Adjacent Cave puzzles"
      className="grid gap-3 sm:grid-cols-2"
    >
      {previous ? (
        <LocaleLink
          href={previous.path}
          className="border border-[#536e69] bg-[#102625] p-4 text-[#f4f1df] hover:border-[#8f92df]"
        >
          <span className="font-mono text-xs uppercase text-[#8f92df]">
            Previous puzzle
          </span>
          <span className="mt-1 block font-display text-lg font-bold">
            Puzzle {previous.puzzleNumber}
          </span>
        </LocaleLink>
      ) : (
        <LocaleLink
          href="/guides/cave-puzzles-0-10"
          className="border border-[#536e69] bg-[#102625] p-4 text-[#f4f1df] hover:border-[#8f92df]"
        >
          <span className="font-mono text-xs uppercase text-[#8f92df]">
            Cave directory
          </span>
          <span className="mt-1 block font-display text-lg font-bold">
            Puzzle 0–10 hub
          </span>
        </LocaleLink>
      )}
      {next ? (
        <LocaleLink
          href={next.path}
          className="border border-[#536e69] bg-[#102625] p-4 text-right text-[#f4f1df] hover:border-[#8f92df]"
        >
          <span className="font-mono text-xs uppercase text-[#8f92df]">
            Next puzzle
          </span>
          <span className="mt-1 block font-display text-lg font-bold">
            Puzzle {next.puzzleNumber}
          </span>
        </LocaleLink>
      ) : (
        <LocaleLink
          href="/guides/temple-walkthrough"
          className="border border-[#536e69] bg-[#102625] p-4 text-right text-[#f4f1df] hover:border-[#8f92df]"
        >
          <span className="font-mono text-xs uppercase text-[#8f92df]">
            Continue the story
          </span>
          <span className="mt-1 block font-display text-lg font-bold">
            Temple walkthrough
          </span>
        </LocaleLink>
      )}
    </nav>
  );
}

export function GuideArticle({
  guide,
  locale,
  pathname,
}: {
  guide: Guide;
  locale?: Locale;
  pathname: string;
}) {
  const ui = getGuideArticleUi(locale);
  const canonicalUrl = `${siteFacts.domain}${pathname}`;
  const isGuideRoute = pathname.startsWith('/guides/');
  const breadcrumbItems: Record<string, unknown>[] = [
    {
      '@type': 'ListItem',
      position: 1,
      name: siteFacts.siteName,
      item: siteFacts.domain,
    },
  ];

  if (isGuideRoute) {
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: 'Guides',
      item: `${siteFacts.domain}/guides`,
    });
  }

  breadcrumbItems.push({
    '@type': 'ListItem',
    position: breadcrumbItems.length + 1,
    name: guide.title,
    item: canonicalUrl,
  });

  const graph: Record<string, unknown>[] = [
    {
      '@type': 'Article',
      headline: guide.title,
      description: guide.summary,
      datePublished: guide.publishedAt,
      dateModified: guide.updatedAt,
      image: `${siteFacts.domain}${guide.coverImageUrl}`,
      mainEntityOfPage: canonicalUrl,
      isPartOf: {
        '@type': 'WebSite',
        name: siteFacts.siteName,
        url: siteFacts.domain,
      },
      author: { '@type': 'Organization', name: siteFacts.siteName },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbItems,
    },
    {
      '@type': 'FAQPage',
      mainEntity: guide.faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    },
  ];

  if (guide.video) {
    graph.push({
      '@type': 'VideoObject',
      name: guide.video.title,
      thumbnailUrl: getAbsoluteUrl(guide.video.thumbnailUrl),
      uploadDate: guide.video.publishedAt,
      embedUrl: getVideoEmbedUrl(guide.video),
      contentUrl: guide.video.url,
    });
  }

  const sectionLinks = guide.body.map((section) => ({
    href: `#${toSectionId(section.heading)}`,
    label: section.heading,
  }));

  return (
    <div className="min-h-screen bg-[#071615] py-8 text-[#f4f1df] md:py-10">
      <JsonLd data={{ '@context': 'https://schema.org', '@graph': graph }} />
      <Container className="px-4">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_272px]">
          <article className="min-w-0 space-y-6">
            <header className="overflow-hidden rounded-xl border border-[#536e69] bg-[#102625]">
              <div className="relative aspect-[4/3] border-[#536e69] border-b sm:aspect-[16/7] sm:min-h-[220px]">
                <Image
                  src={guide.coverImageUrl}
                  alt={`${guide.title} cover`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 900px, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,13,11,0.05)_0%,rgba(8,13,11,0.95)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-2 p-5 md:p-7">
                  <Badge className="bg-[#f0a23a] text-[#071615]">
                    {ui.categoryLabels[guide.category]}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-[#8f92df]/60 bg-[#071615]/80 text-[#f4f1df]"
                  >
                    {ui.difficultyLabels[guide.difficulty]}
                  </Badge>
                  {guide.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="border-white/20 bg-[#071615]/80 text-[#f4f1df]"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="p-5 md:p-7">
                <h1 className="max-w-4xl font-display text-4xl font-black leading-tight md:text-5xl">
                  {guide.title}
                </h1>
                <p className="mt-4 max-w-3xl text-base leading-8 text-[#a9c0bb] md:text-lg">
                  {guide.summary}
                </p>
                <p className="mt-4 text-sm leading-6 text-[#a9c0bb]">
                  Published {guide.publishedAt} · Updated {guide.updatedAt}
                </p>
                <MobileWikiNav
                  currentPath={pathname}
                  locale={locale}
                  sectionLinks={sectionLinks}
                />
              </div>
            </header>

            {guide.answerSummary ? (
              <section className="rounded-xl border border-[#f0a23a] bg-[#f0a23a]/10 p-5 md:p-6">
                <p className="font-mono text-xs font-black uppercase tracking-[0.18em] text-[#f0a23a]">
                  Puzzle answer
                </p>
                <p className="mt-3 text-base font-semibold leading-8 text-[#f4f1df] md:text-lg">
                  {guide.answerSummary}
                </p>
              </section>
            ) : null}

            {guide.slug === 'cave-puzzles-0-10' ? (
              <PuzzleDirectory currentPath={pathname} locale={locale} />
            ) : null}

            {typeof guide.puzzleNumber === 'number' ? (
              <PuzzleSequenceNavigation
                guide={guide as Guide & { puzzleNumber: number }}
                locale={locale}
              />
            ) : null}

            <div className="rounded-xl border border-[#536e69] bg-[#102625] p-5 md:p-8">
              <div className="space-y-10">
                {guide.body.map((section, sectionIndex) => (
                  <div key={section.heading} className="space-y-8">
                    <section id={toSectionId(section.heading)}>
                      <h2 className="font-display text-2xl font-bold md:text-3xl">
                        {section.heading}
                      </h2>
                      <div className="mt-3 space-y-4 text-base leading-8 text-[#a9c0bb]">
                        {section.paragraphs.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                      {section.bullets ? (
                        <ul className="mt-5 grid gap-2 text-sm leading-7 text-[#d7e3df]">
                          {section.bullets.map((bullet) => (
                            <li
                              key={bullet}
                              className="rounded-lg border border-[#536e69] bg-[#071615] px-4 py-3"
                            >
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </section>

                    {sectionIndex === 0 && guide.video ? (
                      <section className="overflow-hidden rounded-xl border border-[#536e69] bg-black">
                        <iframe
                          className="aspect-video w-full"
                          src={getVideoEmbedUrl(guide.video)}
                          title={guide.video.title}
                          loading="lazy"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                        <p className="bg-[#071615] px-4 py-3 text-sm leading-6 text-[#a9c0bb]">
                          {ui.videoPrefix}{' '}
                          <a
                            href={guide.video.url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-[#8f92df] underline underline-offset-4"
                          >
                            {guide.video.title}
                          </a>{' '}
                          by {guide.video.channel}
                          {guide.video.startSeconds
                            ? ` · starts at ${formatVideoStart(guide.video.startSeconds)}`
                            : ''}
                          . {ui.videoSuffix}
                        </p>
                      </section>
                    ) : null}
                  </div>
                ))}
              </div>

              <section className="mt-10 rounded-xl border border-[#536e69] bg-[#071615] p-5">
                <div className="flex gap-3">
                  <ShieldCheck className="mt-1 size-5 shrink-0 text-[#8f92df]" />
                  <div>
                    <h2 className="font-display text-xl font-bold">
                      {ui.officialTitle}
                    </h2>
                    <p className="mt-2 text-sm leading-7 text-[#a9c0bb]">
                      {ui.officialBody}
                    </p>
                    <a
                      href={siteFacts.officialSteamUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex items-center gap-1 text-[#8f92df] text-sm underline underline-offset-4"
                    >
                      {ui.officialLinkLabel}
                      <ExternalLink className="size-3" />
                    </a>
                  </div>
                </div>
              </section>

              <section className="mt-10 rounded-xl border border-[#536e69] bg-[#071615] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8f92df]">
                  Next decisions
                </p>
                <h2 className="mt-1 font-display text-xl font-bold">
                  Continue through the wiki
                </h2>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {guide.relatedRoutes.slice(0, 4).map((route) => (
                    <Button
                      key={route}
                      asChild
                      variant="outline"
                      className="h-auto min-w-0 justify-between gap-3 whitespace-normal border-[#536e69] bg-[#102625] px-3 py-3 text-left text-[#f4f1df] hover:border-[#8f92df] hover:bg-[#183837]"
                    >
                      <LocaleLink href={route}>
                        <span className="min-w-0 break-words">
                          {getRouteLabel(route)}
                        </span>
                        <ArrowRight className="size-4 shrink-0 text-[#8f92df]" />
                      </LocaleLink>
                    </Button>
                  ))}
                </div>
              </section>

              <FaqSection
                className="mt-10"
                items={guide.faq}
                title={ui.faqTitle}
              />
            </div>
          </article>

          <WikiRouteSidebar
            currentPath={pathname}
            locale={locale}
            sectionLinks={sectionLinks}
          />
        </div>
      </Container>
    </div>
  );
}
