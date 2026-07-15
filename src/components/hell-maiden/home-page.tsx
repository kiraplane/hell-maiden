import { FaqSection } from '@/components/hell-maiden/faq-section';
import {
  MobileWikiNav,
  QuickWikiLinks,
  WikiRouteSidebar,
} from '@/components/hell-maiden/wiki-navigation';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  getHomeContent,
  getLocalizedFeaturedGuides,
  getLocalizedGameFacts,
} from '@/data/hell-maiden/localized';
import { siteFacts } from '@/data/hell-maiden/sources';
import { LocaleLink } from '@/i18n/navigation';
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Download,
  ExternalLink,
  Gamepad2,
  Layers3,
  Music2,
  ShieldCheck,
  Skull,
  Sparkles,
  Users,
} from 'lucide-react';
import type { Locale } from 'next-intl';
import Image from 'next/image';

const problemRoutes = [
  {
    title: 'I am starting my first run',
    text: 'Learn safe movement, dash timing and the order for building a useful hand.',
    href: '/guides/beginner-guide',
    icon: Gamepad2,
  },
  {
    title: 'Spirit Cards feel confusing',
    text: 'Separate Weapon and Mod roles, then use merging and placement deliberately.',
    href: '/cards',
    icon: Layers3,
  },
  {
    title: 'My build falls apart',
    text: 'Balance crowd clear, boss uptime, status application and positional effects.',
    href: '/guides/best-builds',
    icon: Sparkles,
  },
  {
    title: 'Minos ends every run',
    text: 'Prepare a boss-capable hand and preserve the dash for committed patterns.',
    href: '/guides/minos-boss-guide',
    icon: Skull,
  },
  {
    title: 'I only played the demo',
    text: 'Compare content, card pools and the non-transferable save status.',
    href: '/guides/demo-vs-early-access',
    icon: CalendarDays,
  },
  {
    title: 'Will it run on my device?',
    text: 'Check Windows, controller, console and Steam Deck status without rumors.',
    href: '/platforms',
    icon: ShieldCheck,
  },
] as const;

export function HellMaidenHomePage({ locale }: { locale?: Locale }) {
  const content = getHomeContent(locale);
  const featured = getLocalizedFeaturedGuides(locale);
  const facts = getLocalizedGameFacts(locale);
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
        datePublished: '2026-07-16',
        gamePlatform: ['Windows'],
        author: { '@type': 'Organization', name: siteFacts.creator },
      },
      {
        '@type': 'VideoObject',
        name: 'Hell Maiden Release Date Trailer',
        thumbnailUrl: `${siteFacts.domain}/hell-maiden/guides/release.jpg`,
        uploadDate: '2026-06-23',
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
    <div className="min-h-screen overflow-x-clip bg-[#0d0710] text-[#fff3fb]">
      <JsonLd data={graph} />
      <section className="relative overflow-hidden border-[#4c2d52] border-b">
        <Image
          src={siteFacts.officialHeroImage}
          alt="Hell Maiden Dante and the Circles of Hell"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,7,16,.98)_0%,rgba(13,7,16,.88)_48%,rgba(13,7,16,.62)_100%)]" />
        <Container className="relative px-4 py-8 lg:py-10">
          <div className="grid items-center gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(380px,.78fr)]">
            <div className="min-w-0">
              <Badge className="w-fit bg-[#f6cc6b] text-[#0d0710]">
                {content.badge}
              </Badge>
              <h1 className="mt-4 max-w-4xl font-display text-4xl font-black leading-[1.03] md:text-6xl">
                {content.title}
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-8 text-[#cbb9ce] md:text-lg">
                {content.intro}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button
                  asChild
                  className="h-auto whitespace-normal bg-[#f6cc6b] px-4 py-3 text-[#0d0710] hover:bg-[#e89ab8]"
                >
                  <LocaleLink href="/guides/beginner-guide">
                    {content.primaryCta}
                    <ArrowRight className="size-4 shrink-0" />
                  </LocaleLink>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-auto whitespace-normal border-[#e89ab8] bg-[#0d0710]/60 px-4 py-3 text-[#fff3fb] hover:bg-[#2b1931]"
                >
                  <LocaleLink href="/cards">{content.secondaryCta}</LocaleLink>
                </Button>
              </div>
              <QuickWikiLinks className="mt-5" />
            </div>

            <div className="overflow-hidden rounded-xl border border-[#4c2d52] bg-black shadow-2xl shadow-black/40">
              <iframe
                className="aspect-video w-full"
                src={`https://www.youtube-nocookie.com/embed/${siteFacts.officialTrailerId}?rel=0`}
                title="Official Hell Maiden release date trailer"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              <p className="bg-[#1a1020] px-4 py-3 text-sm text-[#cbb9ce]">
                Official release-date trailer from AstralShift.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <Container className="px-4 py-8 lg:py-10">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_272px]">
          <main className="min-w-0 space-y-8">
            <MobileWikiNav currentPath="/" locale={locale} />

            <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-xl border border-[#4c2d52] bg-[#1a1020] p-4"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#e89ab8]">
                    {fact.label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#cbb9ce]">
                    {fact.value}
                  </p>
                </div>
              ))}
            </section>

            <section className="rounded-2xl border border-[#4c2d52] bg-[#1a1020] p-5 md:p-7">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e89ab8]">
                    Start with the problem
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-black">
                    What is stopping the next run?
                  </h2>
                </div>
                <LocaleLink
                  href="/guides"
                  className="inline-flex items-center gap-2 text-[#f6cc6b] text-sm underline underline-offset-4"
                >
                  Browse all guides <ArrowRight className="size-4" />
                </LocaleLink>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {problemRoutes.map((item) => (
                  <LocaleLink
                    key={item.href}
                    href={item.href}
                    className="group rounded-xl border border-[#4c2d52] bg-[#0d0710] p-5 transition hover:-translate-y-0.5 hover:border-[#e89ab8] hover:bg-[#2b1931]"
                  >
                    <item.icon className="size-6 text-[#f6cc6b]" />
                    <h3 className="mt-4 font-display text-xl font-bold group-hover:text-[#f6cc6b]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[#cbb9ce]">
                      {item.text}
                    </p>
                  </LocaleLink>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-[#4c2d52] bg-[#1a1020] p-5 md:p-7">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e89ab8]">
                    Essential reading
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-black">
                    Build knowledge in the right order
                  </h2>
                </div>
                <BookOpen className="size-7 text-[#f6cc6b]" />
              </div>
              <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {featured.map((guide) => (
                  <article
                    key={guide.slug}
                    className="overflow-hidden rounded-xl border border-[#4c2d52] bg-[#0d0710]"
                  >
                    <div className="relative aspect-video border-[#4c2d52] border-b">
                      <Image
                        src={guide.coverImageUrl}
                        alt={`${guide.title} cover`}
                        fill
                        sizes="(min-width: 1280px) 320px, (min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0710]/85 to-transparent" />
                      <Badge className="absolute bottom-3 left-3 bg-[#f6cc6b] text-[#0d0710]">
                        {guide.category}
                      </Badge>
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-xl font-bold">
                        {guide.title}
                      </h3>
                      <p className="mt-2 line-clamp-3 text-sm leading-6 text-[#cbb9ce]">
                        {guide.summary}
                      </p>
                      <LocaleLink
                        href={guide.path}
                        className="mt-4 inline-flex items-center gap-2 text-[#e89ab8] text-sm font-semibold"
                      >
                        Open guide <ArrowRight className="size-4" />
                      </LocaleLink>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-[#4c2d52] bg-[#1a1020] p-6">
                <ShieldCheck className="size-7 text-[#f07a8d]" />
                <h2 className="mt-4 font-display text-2xl font-black">
                  Early Access advice stays dated
                </h2>
                <p className="mt-3 leading-7 text-[#cbb9ce]">
                  Demo card values, unlock order and build rankings can change.
                  Current Steam facts and live tooltips take priority, and
                  uncertain platform states are labeled instead of guessed.
                </p>
                <LocaleLink
                  href="/release-date"
                  className="mt-4 inline-flex items-center gap-2 text-[#f6cc6b] text-sm font-semibold"
                >
                  Check release status <ArrowRight className="size-4" />
                </LocaleLink>
              </div>
              <div className="rounded-2xl border border-[#4c2d52] bg-[#1a1020] p-6">
                <Users className="size-7 text-[#e89ab8]" />
                <h2 className="mt-4 font-display text-2xl font-black">
                  Official destinations
                </h2>
                <div className="mt-4 grid gap-3 text-sm">
                  {[
                    ['Steam store', siteFacts.officialSteamUrl],
                    ['Free demo', siteFacts.officialDemoUrl],
                    ['Official wiki', siteFacts.officialWikiUrl],
                    ['AstralShift YouTube', siteFacts.officialYouTubeUrl],
                    ['Official Discord', siteFacts.officialDiscordUrl],
                  ].map(([label, href]) => (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between rounded-lg border border-[#4c2d52] bg-[#0d0710] px-4 py-3 text-[#fff3fb] hover:border-[#e89ab8]"
                    >
                      {label} <ExternalLink className="size-4 text-[#e89ab8]" />
                    </a>
                  ))}
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-[#4c2d52] bg-[#1a1020] p-5 md:p-7">
              <div className="flex items-center gap-3">
                <Music2 className="size-6 text-[#f6cc6b]" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e89ab8]">
                    Search routes covered at launch
                  </p>
                  <h2 className="mt-1 font-display text-3xl font-black">
                    One focused answer for each real question
                  </h2>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {content.keywordRoutes.slice(0, 28).map((item) => (
                  <LocaleLink
                    key={`${item.keyword}-${item.route}`}
                    href={item.route}
                    title={item.intent}
                    className="rounded-full border border-[#4c2d52] bg-[#0d0710] px-3 py-2 text-[#cbb9ce] text-xs hover:border-[#e89ab8] hover:text-[#fff3fb]"
                  >
                    {item.keyword}
                  </LocaleLink>
                ))}
              </div>
              <p className="mt-5 border-[#4c2d52] border-t pt-4 text-sm leading-7 text-[#cbb9ce]">
                {content.scopeNote}
              </p>
            </section>

            <FaqSection items={content.faq} title="Hell Maiden FAQ" />
          </main>

          <WikiRouteSidebar currentPath="/" locale={locale} />
        </div>
      </Container>
    </div>
  );
}
