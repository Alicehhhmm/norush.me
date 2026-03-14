'use client';

import { SidebarTrigger } from '@/components/ui/sidebar';
import { NavLogo } from '@/components/navigation';
import { ToggleLayout, ThemeToggleBtn } from '@/components/common';

export function ContentHeader() {
  return (
    <header className="bg-background sticky top-0 z-50 flex h-[60px] items-center justify-between gap-1 p-4">
      <div className="flex items-center gap-2 px-4 max-sm:hidden">
        <SidebarTrigger className="-ml-1" />
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
}
