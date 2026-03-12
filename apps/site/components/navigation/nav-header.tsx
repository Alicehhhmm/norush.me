'use client';

import { useTranslations } from 'next-intl';

import { ThemeToggleBtn, ActionLink, LangToggle } from '@/components/common';
import { NavItem, MobileNav, NavLogo } from '@/components/navigation';
import { GitHub } from '@/components/icons/social';

import { useSiteNavigation } from '@/hooks/server';
import { siteNavigation } from '@/config/next.json.mjs';

export const NavHeader = () => {
  const { navigationItems } = useSiteNavigation();
  const { sourceRepositoryNav } = siteNavigation;

  // Transform the navigation items to the required format
  const transformNavData = (sourceData: any[]) =>
    sourceData.map(([key, items]) => ({
      key,
      ...items,
    }));

  const headmap = transformNavData(navigationItems);

  const t = useTranslations();
  const siteRepository = sourceRepositoryNav['site'].map((link: any) => ({
    ...link,
    label: t(link.label),
  }))[0];

  return (
    <div className="border-border/40 bg-background/95 supports-backdrop-filter:bg-background/80 fixed top-0 right-0 left-0 z-30 h-[60px] w-full border-b backdrop-blur-sm">
      <div className="flex h-full items-center justify-between px-4 sm:px-6 lg:px-20">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-2">
            <NavLogo />
            <h2 className="text-foreground hidden text-xl font-bold sm:text-2xl lg:inline-block">
              Norush website
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="mr-2 hidden items-center gap-2 md:flex">
            {headmap.map(hnav => (
              <NavItem key={hnav.key} label={hnav.label} link={hnav.link} />
            ))}
            <div className="bg-border/60 mx-2 h-6 w-px" />
            <LangToggle />
            <ThemeToggleBtn />
            <ActionLink
              href={siteRepository.link}
              label={siteRepository.label}
              icon={<GitHub />}
              target="_blank"
            />
          </div>
          <div className="flex items-center gap-1 md:hidden">
            <ThemeToggleBtn />
            <div className="bg-border/60 mx-1 h-5 w-px" />
            <MobileNav navigationList={headmap} />
          </div>
        </div>
      </div>
    </div>
  );
};
