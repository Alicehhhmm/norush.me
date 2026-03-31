'use strict';

import { join } from 'node:path';

import { siteConfig } from '@/config/next.json.mjs';

import { BASE_PATH, BASE_URL } from './next.constants.mjs';
import { defaultLocale } from './next.locales.mjs';
import { provideBlogCategories } from './providers/blogData';
import { provideBookmarksCategories } from './providers/bookmarks.data';

/**
 * This is a list of all static routes or pages from the Website that we do not
 * want to allow to be statically built on our Static Export Build.
 *
 * @type {Array<((route: import('./types').RouteSegment) => boolean)>} A list of Ignored Routes by Regular Expressions
 */
export const IGNORED_ROUTES = [
  // 此选项用于忽略除: 默认语言(zh) 之外的所有博客路由
  ({ locale, pathname }) =>
    locale !== defaultLocale.code && /^blog/.test(pathname),
  // 忽略所有空的路径名
  ({ locale, pathname }) => locale.length && !pathname.length,
];

/**
 * This constant is used to create static routes on-the-fly that do not have a file-system
 * counterpart route. This is useful for providing routes with matching Layout Names
 * but that do not have Markdown content and a matching file for the route
 *
 * @type {Map<string, import('./types').Layouts>} A Map of pathname and Layout Name
 * @returns Map([
 *      ['blog\\new', 'pages\\en\\blog\\new']
 * ])
 */
export const DYNAMIC_ROUTES = new Map([
  // Provides Routes for all Blog Categories
  ['blog', 'blog-category'],
  ...provideBlogCategories().map(c => [`blog/${c}`, 'blog-category']),
  ...provideBlogCategories().map(c => [join('blog', c), 'blog-category']),
  // Provides Routes for all Bookmarks Categories
  ['bookmarks', 'bookmarks-category'],
  ...provideBookmarksCategories().map(c => [
    `bookmarks/${c}`,
    'bookmarks-category',
  ]),
  ...provideBookmarksCategories().map(c => [
    join('bookmarks', c),
    'bookmarks-category',
  ]),
]);

/**
 * This is the default Next.js Viewport Metadata for all pages
 *
 * @return {import('next').Viewport}
 */
export const PAGE_VIEWPORT = {
  themeColor: [
    {
      color: siteConfig.lightAccentColor,
      media: '(prefers-color-scheme: light)',
    },
    {
      color: siteConfig.darkAccentColor,
      media: '(prefers-color-scheme: dark)',
    },
  ],
  width: 'device-width',
  initialScale: '1.0',
};

/**
 * This is the default Next.js Page Metadata for all pages
 *
 * @type {import('next').Metadata}
 */
export const PAGE_METADATA = {
  metadataBase: new URL(`${BASE_URL}${BASE_PATH}`),
  title: siteConfig.title,
  description: siteConfig.description,
  robots: { index: true, follow: true },
  icons: { icon: siteConfig.favicon },
  alternates: {
    canonical: '',
    languages: { 'x-default': '' },
    types: {
      'application/rss+xml': `${BASE_URL}${BASE_PATH}/zh/feed/blog.xml`,
    },
  },
};
