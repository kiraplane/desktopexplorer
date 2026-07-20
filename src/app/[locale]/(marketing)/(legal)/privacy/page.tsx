import Container from '@/components/layout/container';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Privacy Policy | Desktop Explorer Wiki',
    description:
      'Privacy policy for Desktop Explorer Wiki, an independent guide site.',
    locale,
    pathname: '/privacy',
  });
}

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#071615] py-12 text-[#f4f1df]">
      <Container className="max-w-3xl space-y-6 px-4">
        <h1 className="font-display text-4xl font-black">Privacy Policy</h1>
        <p className="leading-8 text-[#a9c0bb]">
          Desktop Explorer Wiki is an independent guide site. We do not require
          accounts for browsing walkthroughs, puzzle answers, achievement help
          or official-link pages.
        </p>
        <p className="leading-8 text-[#a9c0bb]">
          Standard analytics or hosting logs may record aggregate traffic data
          such as page views, referrers, device type, and approximate region. We
          use this to improve guides and fix broken pages.
        </p>
        <p className="leading-8 text-[#a9c0bb]">
          Remote media may be loaded from official storefronts or YouTube when a
          page embeds official artwork, store links, screenshots, or guide
          videos.
        </p>
        <p className="leading-8 text-[#a9c0bb]">
          Privacy questions can be sent to hello@desktopexplorer.wiki.
        </p>
      </Container>
    </div>
  );
}
