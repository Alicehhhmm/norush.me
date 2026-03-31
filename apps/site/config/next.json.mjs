'use strict';

import _bookmarks from './bookmarks.json' with { type: 'json' };
import _siteNavigation from './navigation.json' with { type: 'json' };
import _website from './website.json' with { type: 'json' };

/** @type {import('./types').SiteNavigation} */
export const siteNavigation = _siteNavigation;

/** @type {import('./types').SiteConfig}   */
export const siteConfig = _website;

/** @type {import('./types').SiteConfigBookmarks} */
export const bookmarksJSON = _bookmarks;
