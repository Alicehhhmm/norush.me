import { BookletContentMain } from '@/components/booklet/booklet-content-main';
import { BookletSidebar } from '@/components/booklet/booklet-sidebar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { WithBreadcrumbs } from '@/components/WithBreadcrumbs';

import type { FC, PropsWithChildren } from 'react';

export const BookletLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <SidebarProvider>
        <BookletSidebar />
        <SidebarInset>
          <WithBreadcrumbs navKeys={['booklet']} />
          <BookletContentMain>{children}</BookletContentMain>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
};
