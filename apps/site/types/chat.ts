import type {
  LinkTab,
  UserType,
  TeamType,
  RIconType,
  NavigationKeys,
  NavItemsType,
  BookmarkItemType,
} from '@/types';

export type ChatModleType =
  | NavigationKeys
  | 'chat'
  | 'blog-chat'
  | 'booklet-chat'
  | 'project-chat'
  | 'design-chat'
  | 'bookmarks-chat';

export type ChatNavItemType = {} & NavItemsType;

export type ChatNavItemsType = Array<ChatNavItemType>;

export type ChannelType = {
  link: string;
  label: string;
  icon?: RIconType;
  desc?: string;
  count?: number;
  isActive?: boolean;
} & LinkTab;

export type MessagesType = {
  bookmarks?: Array<BookmarkItemType>;
  channels?: Array<ChannelType>;
};

export type ChatSidebarType = {
  user: UserType;
  teams: Array<TeamType>;
  navMain: ChatNavItemsType;
  messages: MessagesType;
};
