'use client';

import type { FC } from 'react';
import { FullscreenIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { SidebarTrigger } from '@/components/ui/sidebar';

import { NavLogo } from '@/components/navigation';
import { ToggleLayout, ThemeToggleBtn } from '@/components/common';
import WithBreadcrumbs from '@/components/WithBreadcrumbs';

import { useSidebarStore } from '@/hooks';

type ChatNavHeaderProps = {
  fullScreen: () => void;
};

export const ChatNavHeader: FC<ChatNavHeaderProps> = ({ fullScreen }) => {
  const { postLayout, togglePostLayout } = useSidebarStore();

  return (
    <header className="bg-background dark:bg-sidebar shadow-inset-md sticky top-0 z-50 flex h-[60px] items-center justify-between gap-1 border-b p-4">
      <div className="flex shrink-0 items-center gap-1 max-sm:hidden">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="h-4" />
        <WithBreadcrumbs navKeys={['blog']} />
      </div>
      <div className="flex shrink-0 items-center gap-1 max-sm:hidden">
        <Button
          onClick={fullScreen}
          variant="ghost"
          size="icon"
          className="size-7"
        >
          <FullscreenIcon />
        </Button>
        <ToggleLayout layout={postLayout[0]} onToggle={togglePostLayout} />
      </div>

      {/* Mobile */}
      <div className="hidden max-sm:block">
        <NavLogo />
      </div>
      <div className="hidden max-sm:block">
        <ThemeToggleBtn className="size-8" />
        <SidebarTrigger className="size-8" />
      </div>
    </header>
  );
};
