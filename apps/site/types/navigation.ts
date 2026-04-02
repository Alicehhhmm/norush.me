import type {
  RIconType,
  UserType,
  FormattedMessage,
  IntlMessageKeys,
} from '@/types';
import type { HTMLAttributeAnchorTarget } from 'react';

export type NavigationKeys =
  | 'blog'
  | 'booklet'
  | 'project'
  | 'design'
  | 'bookmarks';

export type NavigationEntry = {
  label?: IntlMessageKeys;
  link?: string;
  icon?: RIconType;
  items?: Record<string, NavigationEntry>;
  target?: HTMLAttributeAnchorTarget | undefined;
};

export type MappedNavigationEntry = {
  label: FormattedMessage;
  link: string;
  icon?: RIconType;
  target?: HTMLAttributeAnchorTarget | undefined;
  items: Array<[string, MappedNavigationEntry]>;
};

export type NavItemsType = {
  isActive?: boolean;
} & MappedNavigationEntry;

export type TeamType = {
  name: string;
  logo: RIconType;
  plan: string;
};

export type PageSidebarType = {
  user: UserType;
  teams: Array<TeamType>;
  navMain: Array<NavItemsType>;
};

export type FooterConfig = {
  text: IntlMessageKeys;
  link: string;
};

export type SocialConfig = {
  icon: string;
  link: string;
  alt?: string;
};

export type SiteNavigation = {
  topNavigation: Record<NavigationKeys, NavigationEntry>;
  footerLinks: Array<FooterConfig>;
  socialLinks: Array<SocialConfig>;
  sideNavigation: Record<NavigationKeys, NavigationEntry>;
  sourceRepositoryNav: Record<string, NavigationEntry>;
};
