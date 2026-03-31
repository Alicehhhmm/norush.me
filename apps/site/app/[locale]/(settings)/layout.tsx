import { SiteHeader } from '@/components/theme-settings/site-header';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { WithPageSidebar } from '@/components/WithPageSidebar';

import type React from 'react';

type MainLayoutProps = {
  children: React.ReactNode;
};

const SettingRootLayout = async ({ children }: MainLayoutProps) => {
  return (
    <SidebarProvider>
      <WithPageSidebar
        modelKey={[]}
        sidebarProps={{
          variant: 'inset',
        }}
      />
      <SidebarInset>
        <SiteHeader />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
};

export default SettingRootLayout;
