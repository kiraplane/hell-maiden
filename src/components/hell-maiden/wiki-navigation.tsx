import { Badge } from '@/components/ui/badge';
import { routeLabels } from '@/data/hell-maiden/localized';
import { LocaleLink } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  ChevronDown,
  Download,
  Gamepad2,
  Layers3,
  Menu,
  Music2,
  ShieldCheck,
  Skull,
  Sparkles,
  Users,
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
    icon: Gamepad2,
    routes: [
      '/',
      '/guides',
      '/guides/beginner-guide',
      '/guides/controls-and-first-run-tips',
    ],
  },
  {
    title: 'Cards & Builds',
    icon: Layers3,
    routes: ['/cards', '/guides/best-builds', '/guides/poets-of-limbo'],
  },
  {
    title: 'Boss & Characters',
    icon: Skull,
    routes: ['/guides/minos-boss-guide', '/characters'],
  },
  {
    title: 'Release & Play',
    icon: CalendarDays,
    routes: [
      '/release-date',
      '/guides/demo-vs-early-access',
      '/platforms',
      '/steam-deck',
      '/download',
      '/soundtrack',
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
        'flex min-w-0 items-center justify-between gap-3 rounded-lg border px-3 py-2 text-sm leading-6 transition',
        active
          ? 'border-[#f6cc6b] bg-[#f6cc6b] font-semibold text-[#0d0710]'
          : 'border-[#4c2d52] bg-[#0d0710] text-[#cbb9ce] hover:border-[#e89ab8] hover:bg-[#2b1931] hover:text-[#fff3fb]'
      )}
    >
      <span className="min-w-0 break-words">{routeLabels[href] ?? href}</span>
      <ArrowRight
        className={cn(
          'size-4 shrink-0',
          active ? 'text-[#0d0710]' : 'text-[#e89ab8]'
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
            ? 'border-[#f6cc6b]/70 bg-[#f6cc6b]/8'
            : 'border-[#4c2d52] bg-[#0d0710]'
        )}
      >
        <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-sm font-semibold text-[#fff3fb] [&::-webkit-details-marker]:hidden">
          <span className="flex min-w-0 items-center gap-2">
            <group.icon className="size-4 shrink-0 text-[#e89ab8]" />
            <span className="min-w-0 break-words">{group.title}</span>
            <span className="text-[#cbb9ce] text-xs">
              {group.routes.length}
            </span>
          </span>
          <ChevronDown className="size-4 shrink-0 text-[#f6cc6b] transition group-open:rotate-180" />
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
      <div className="rounded-xl border border-[#4c2d52] bg-[#1a1020] p-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e89ab8]">
              Wiki Navigation
            </p>
            <h2 className="mt-1 font-display text-xl font-bold text-[#fff3fb]">
              Hell Maiden
            </h2>
          </div>
          <Sparkles className="size-5 text-[#f6cc6b]" />
        </div>
        <div className="mt-4 space-y-3">
          <NavGroups currentPath={currentPath} />
        </div>
      </div>

      {sectionLinks.length > 0 ? (
        <details className="group rounded-xl border border-[#4c2d52] bg-[#1a1020] p-4">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 [&::-webkit-details-marker]:hidden">
            <span className="flex items-center gap-2 font-display text-lg font-bold text-[#fff3fb]">
              <BookOpen className="size-4 text-[#e89ab8]" />
              On this page
            </span>
            <ChevronDown className="size-4 text-[#f6cc6b] transition group-open:rotate-180" />
          </summary>
          <div className="mt-3 grid gap-2 border-[#4c2d52] border-t pt-3">
            {sectionLinks.slice(0, 7).map((section) => (
              <a
                key={section.href}
                href={section.href}
                className="rounded-lg border border-[#4c2d52] bg-[#0d0710] px-3 py-2 text-sm leading-6 text-[#cbb9ce] hover:border-[#e89ab8] hover:text-[#fff3fb]"
              >
                {section.label}
              </a>
            ))}
          </div>
        </details>
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
    <details className="group mt-5 rounded-xl border border-[#4c2d52] bg-[#0d0710] p-4 lg:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
        <span className="flex items-center gap-2 font-display text-lg font-bold text-[#fff3fb]">
          <Menu className="size-5 text-[#e89ab8]" />
          Wiki Menu
        </span>
        <Badge className="bg-[#f6cc6b] text-[#0d0710]">
          {routeCount} links
        </Badge>
      </summary>

      {sectionLinks.length > 0 ? (
        <div className="mt-4 border-[#4c2d52] border-t pt-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e89ab8]">
            On this page
          </p>
          <div className="mt-2 flex gap-2 overflow-x-auto pb-1">
            {sectionLinks.slice(0, 7).map((section) => (
              <a
                key={section.href}
                href={section.href}
                className="shrink-0 rounded-lg border border-[#4c2d52] bg-[#1a1020] px-3 py-2 text-sm text-[#cbb9ce]"
              >
                {section.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}

      <div className="mt-4 grid gap-3 border-[#4c2d52] border-t pt-4">
        <NavGroups currentPath={currentPath} />
      </div>
    </details>
  );
}

export function QuickWikiLinks({ className }: { className?: string }) {
  const routes = [
    { href: '/guides/beginner-guide', label: 'Beginner', icon: BookOpen },
    { href: '/cards', label: 'Cards', icon: Layers3 },
    { href: '/guides/best-builds', label: 'Builds', icon: Sparkles },
    { href: '/guides/minos-boss-guide', label: 'Minos', icon: Skull },
    { href: '/characters', label: 'Cast', icon: Users },
    { href: '/release-date', label: 'Release', icon: CalendarDays },
    { href: '/steam-deck', label: 'Steam Deck', icon: ShieldCheck },
    { href: '/download', label: 'Download', icon: Download },
    { href: '/soundtrack', label: 'Music', icon: Music2 },
  ];

  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {routes.map((route) => (
        <LocaleLink
          key={route.href}
          href={route.href}
          className="inline-flex h-auto items-center gap-1.5 rounded-lg border border-[#4c2d52] bg-[#0d0710]/85 px-2.5 py-1.5 text-[#fff3fb] text-xs transition hover:border-[#e89ab8] hover:bg-[#2b1931] sm:text-sm"
        >
          <route.icon className="size-3.5 shrink-0 text-[#e89ab8]" />
          {route.label}
        </LocaleLink>
      ))}
    </div>
  );
}
