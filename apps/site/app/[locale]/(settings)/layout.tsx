import React from 'react';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { WithPageSidebar } from '@/components/WithPageSidebar';
import { SiteHeader } from '@/components/theme-settings/site-header';

interface MainLayoutProps {
  children: React.ReactNode;
}

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
