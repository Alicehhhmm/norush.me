import { SettingsIcon } from 'lucide-react';
import Link from 'next/link';

import { ThemeToggleBtn } from '@/components/common/theme-toggle';
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

import type * as React from 'react';

export const ChatSidebarTools = ({
  ...props
}: {} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) => {
  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <ThemeToggleBtn IconClassname="size-4" />
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Link href={'/settings'} className="w-full">
              <SidebarMenuButton
                tooltip={{
                  children: 'Settings',
                  hidden: false,
                }}
              >
                <SettingsIcon />
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};
