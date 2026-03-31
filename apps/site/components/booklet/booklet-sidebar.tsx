'use client';

import { WithPageSidebar } from '@/components/WithPageSidebar';

import type { Sidebar } from '@/components/ui/sidebar';
import type { ComponentProps } from 'react';

export const BookletSidebar = ({
  ...props
}: ComponentProps<typeof Sidebar>) => {
  return (
    <WithPageSidebar
      modelKey={['booklet']}
      sidebarProps={{
        collapsible: 'icon',
        ...props,
      }}
    />
  );
};
