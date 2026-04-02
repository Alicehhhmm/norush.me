import type { IntlMessageKeys } from '@/types/i18n';

export type BookmarksCategory = IntlMessageKeys<'layouts.bookmarks.categories'>;

export type BookmarkItemType = {
  title: string;
  link: string;
  domain?: string;
  desc?: string;
  cover?: string;
  icon?: string;
  tags?: Array<string>;
  category?: BookmarksCategory;
};

export type SiteConfigBookmarks = Partial<
  Record<BookmarksCategory, Array<BookmarkItemType>>
>;

export type RaindropCollection = {
  _id: number;
  title: string;
  count?: number;
  slug?: string;
  description?: string;
  parent?: {
    $id: number;
    $ref: string;
  };
};

export type RaindropItem = {
  _id: number;
  title: string;
  excerpt?: string;
  link: string;
  tags?: Array<string>;
  cover?: string;
  created: string;
};

export type RaindropResponse = {
  items: Array<RaindropItem>;
  result: boolean;
};
