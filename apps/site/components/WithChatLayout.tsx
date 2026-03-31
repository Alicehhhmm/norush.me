'use client';

import { useRef } from 'react';

import { ChatLayout } from '@/components/chat/chat-layout';
import { Logon, ChatSidebarIconMap, ChannelsIconMap } from '@/components/icons';
import { useFullscreen } from '@/hooks/client';
import { useSiteNavigation } from '@/hooks/server';

import type {
  ChatSidebarType,
  ChatModleType,
  MessagesType,
  NavigationKeys,
} from '@/types';
import type { RichTranslationValues } from 'next-intl';
import type { ReactNode, FC } from 'react';

type WithChatLayoutProps = {
  modelKey: Array<ChatModleType>;
  messages: MessagesType;
  context?: Record<string, RichTranslationValues>;
  children: ReactNode;
};

const buildNavMain = (chatNavigationItems: Array<any>) => {
  return chatNavigationItems.map(([key, item]) => ({
    ...item,
    icon: ChatSidebarIconMap[key] ?? '',
    target: undefined,
  }));
};

const buildChannelItems = (
  navKeys: Array<NavigationKeys>,
  messages: MessagesType,
  mappedSidebarItems: Array<any>
) => {
  if (navKeys.includes('blog')) {
    return (messages.channels ?? []).map(item => ({
      ...item,
      icon: ChannelsIconMap[item.key] ?? '',
      desc: 'This is a new channel for discussion',
      isActive: false,
    }));
  }

  if (navKeys.includes('bookmarks')) {
    const channelMap = new Map(messages.channels?.map(c => [c.link, c]) ?? []);

    return (mappedSidebarItems ?? []).map(item => {
      const matched = channelMap.get(item.link);
      return {
        ...item,
        icon: ChannelsIconMap['all'] ?? '',
        desc: matched?.desc ?? `${item.count || 0} bookmarks`,
        isActive: false,
      };
    });
  }

  return messages.channels ?? [];
};

export const WithChatLayout: FC<WithChatLayoutProps> = ({
  modelKey,
  messages,
  context,
  children,
}) => {
  const { getSideNavigation, chatNavigationItems } = useSiteNavigation();
  const sidebarInsetRef = useRef(null);
  const [isFullscreen, { toggleFullscreen }] = useFullscreen(sidebarInsetRef);

  // Get site navigation
  const navKeys = modelKey as Array<NavigationKeys>;
  const mappedSidebarItems = getSideNavigation(navKeys, context).map(
    ([_, { label, items }]) => ({
      groupName: label,
      items: items.map(([, item]) => item),
    })
  );

  // Create navigation model

  const navMain: ChatSidebarType['navMain'] = buildNavMain(
    chatNavigationItems ?? []
  );

  const messagesGroups: ChatSidebarType['messages'] = {
    channels: buildChannelItems(navKeys, messages, mappedSidebarItems[0].items),
  };

  // Sidebar data model
  const sidebarGroups: ChatSidebarType = {
    user: {
      name: 'norush',
      email: 'm@example.com',
      avatar: '',
    },
    teams: [
      {
        name: 'Codeing Repository',
        logo: Logon,
        plan: 'free',
      },
    ],
    navMain,
    messages: messagesGroups,
  };

  return (
    <ChatLayout
      toggleScreen={toggleFullscreen}
      sidebarData={sidebarGroups}
      ref={sidebarInsetRef}
    >
      {children}
    </ChatLayout>
  );
};
