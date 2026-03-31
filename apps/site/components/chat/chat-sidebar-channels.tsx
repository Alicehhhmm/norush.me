import * as React from 'react';

import { Sidebar } from '@/components/ui/sidebar';

import type { ChatSidebarType, ChannelType } from '@/types/chat';
import type { FC } from 'react';

import { ChannelsContent } from './channels/channel-content';
import { ChannelsHeader } from './channels/channel-header';

// TODO:
// 1. Add a loading state for channels
// 2. Add a no channels state

type ChatSidebarChannelsProps = {
  activeItem: ChatSidebarType['navMain'][0];
  channels: Array<ChannelType>;
  onChannelClick?: (channel: ChannelType) => void;
};

export const ChatSidebarChannels: FC<ChatSidebarChannelsProps> = ({
  activeItem,
  channels,
  onChannelClick,
}) => {
  return (
    <Sidebar
      collapsible="none"
      className="bg-sidebar-accent/50 text-sidebar-accent-foreground/60 hidden flex-1 md:flex"
    >
      <ChannelsHeader activeItem={activeItem} />
      <ChannelsContent channels={channels} onChannelClick={onChannelClick} />
    </Sidebar>
  );
};
