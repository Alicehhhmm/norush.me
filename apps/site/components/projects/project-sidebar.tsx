'use client';

import { WithPageSidebar } from '@/components/WithPageSidebar';

import type { Sidebar } from '@/components/ui/sidebar';
import type { ComponentProps } from 'react';

export const ProjectSidebar = ({
  ...props
}: ComponentProps<typeof Sidebar>) => {
  return (
    <WithPageSidebar
      modelKey={['project']}
      sidebarProps={{
        collapsible: 'icon',
        ...props,
      }}
    />
  );
};
