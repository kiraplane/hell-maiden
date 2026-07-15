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
    title: 'Terms of Service | Hell Maiden Wiki',
    description:
      'Terms for using Hell Maiden Wiki, an independent game guide site.',
    locale,
    pathname: '/terms',
  });
}

export default function TermsOfServicePage() {
  return (
    <div className="bg-[#0d0710] py-12 text-[#fff3fb]">
      <Container className="max-w-3xl space-y-6 px-4">
        <h1 className="font-display text-4xl font-black">Terms of Service</h1>
        <p className="leading-8 text-[#cbb9ce]">
          This site provides independent Hell Maiden guides, source notes, and
          official-link guidance. It is not affiliated with, endorsed by,
          sponsored by, or operated by AstralShift, Valve, Steam, Discord, or
          YouTube.
        </p>
        <p className="leading-8 text-[#cbb9ce]">
          Card behavior, build advice, boss tactics, patch behavior, and
          platform support can change after game updates. Treat guide pages as
          community-oriented guidance and verify important details in your
          current game version.
        </p>
        <p className="leading-8 text-[#cbb9ce]">
          Do not use this site to distribute unauthorized game files, unsafe
          downloads, modified clients, copied roster databases, paid files,
          trainers, or automation scripts.
        </p>
        <p className="leading-8 text-[#cbb9ce]">
          Questions about these terms can be sent to hello@hell-maiden.wiki.
        </p>
      </Container>
    </div>
  );
}
