'use client';

import { memo } from 'react';

import { cn } from '@/lib/utils';

import type { ReactNode } from 'react';

type ContentMainProps = {
  children: ReactNode;
};

export const BookletContentMain = memo(({ children }: ContentMainProps) => {
  return (
    <div className="content-wrapper flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="bg-muted/50 min-h-screen flex-1 rounded-xl md:min-h-min">
        {children}
      </div>
    </div>
  );
});
