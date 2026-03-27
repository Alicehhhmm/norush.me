'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

import { ThemeToggleBtn, ActionLink, LangToggle } from '@/components/common';
import { NavItem, MobileNav, NavLogo } from '@/components/navigation';
import { GitHub } from '@nw/ui/icons/social';

import { useSiteNavigation } from '@/hooks/server';
import { useIsMobile } from '@/hooks/use-mobile';
import { siteNavigation } from '@/config/next.json.mjs';
import { cn } from '@/lib/utils';

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

  // Effect motion
  const isMobile = useIsMobile();
  const { scrollY } = useScroll();
  const [scrollYAction, setScrollYAction] = useState(false);
  useMotionValueEvent(scrollY, 'change', latest => {
    setScrollYAction(latest > 60);
  });

  return (
    <motion.nav
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={cn(
        'fixed top-0 right-0 left-0 z-30 m-auto h-15 transition-all duration-200',
        scrollYAction
          ? isMobile
            ? 'bg-background/80 w-full shadow-2xs backdrop-blur-sm'
            : 'shadow-3dcard bg-background dark:bg-muted/20 top-1 w-[calc(100%-220px)] rounded-xl dark:backdrop-blur-xl dark:backdrop-saturate-180'
          : 'border-border/40 w-full border-b bg-transparent'
      )}
    >
      <div className="flex h-full items-center justify-between px-4 sm:px-6 lg:px-20">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <NavLogo />
          <h2 className="text-foreground hidden text-xl font-bold sm:text-2xl lg:inline-block">
            Norush website
          </h2>
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
    </motion.nav>
  );
};
