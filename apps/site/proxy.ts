import { availableLocaleCodes, defaultLocale } from '@nw/i18n';
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: availableLocaleCodes,
  defaultLocale: defaultLocale.code,
  localePrefix: 'always',
  // providing alternate links on 'site/core/dynamic-route.mjs'
  alternateLinks: false,
  pathnames: {
    // 明确所有路由的本地化路径
    '/': '/',
    '/about': '/about',
  },
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
