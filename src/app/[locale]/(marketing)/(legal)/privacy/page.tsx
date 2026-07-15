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
    title: 'Privacy Policy | Hell Maiden Wiki',
    description:
      'Privacy policy for Hell Maiden Wiki, an independent guide site.',
    locale,
    pathname: '/privacy',
  });
}

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#0d0710] py-12 text-[#fff3fb]">
      <Container className="max-w-3xl space-y-6 px-4">
        <h1 className="font-display text-4xl font-black">Privacy Policy</h1>
        <p className="leading-8 text-[#cbb9ce]">
          Hell Maiden Wiki is an independent guide site. We do not require
          accounts for browsing the wiki, platform pages, roster guides, deck
          guides, character notes, or official-link pages.
        </p>
        <p className="leading-8 text-[#cbb9ce]">
          Standard analytics or hosting logs may record aggregate traffic data
          such as page views, referrers, device type, and approximate region. We
          use this to improve guides and fix broken pages.
        </p>
        <p className="leading-8 text-[#cbb9ce]">
          Remote media may be loaded from official storefronts or YouTube when a
          page embeds official artwork, store links, screenshots, or guide
          videos.
        </p>
        <p className="leading-8 text-[#cbb9ce]">
          Privacy questions can be sent to hello@hell-maiden.wiki.
        </p>
      </Container>
    </div>
  );
}
