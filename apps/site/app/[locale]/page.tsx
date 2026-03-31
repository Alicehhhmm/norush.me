import { notFound } from 'next/navigation';

import {
  ENABLE_STATIC_EXPORT,
  ENABLE_STATIC_EXPORT_LOCALE,
} from '@/core/dynamic-route-constants';
import * as basePage from '@/core/next.dynamic.page.mjs';
import { availableLocaleCodes, defaultLocale } from '@/core/next.locales.mjs';

import type { DynamicParams } from '@/types';
import type { FC } from 'react';

type PageParams = DynamicParams<{ path: Array<string> }>;

/**
 * This is the default Viewport Metadata
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-viewport#generateviewport-function
 */
export const generateViewport = basePage.generateViewport;

/**
 * This generates each page's HTML Metadata
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-metadata
 */
export const generateMetadata = basePage.generateMetadata;

/**
 * This generates the static paths for each locale
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-static-params
 */
export const generateStaticParams = async () => {
  // Return an empty array if static export is disabled
  if (!ENABLE_STATIC_EXPORT) {
    return [];
  }

  // Determine which locales to include in the static export
  const locales = ENABLE_STATIC_EXPORT_LOCALE
    ? availableLocaleCodes
    : [defaultLocale.code];

  const routes = await Promise.all(
    // Gets all mapped routes to the Next.js Routing Engine by Locale
    locales.map(locale => ({ locale }))
  );

  return routes.flat().sort();
};

/**
 * This is the main page component that renders the content based on the dynamic route parameters
 * @returns The rendered page or a 404 Not Found response if the page does not exist
 */
const RootPage: FC<PageParams> = async props => {
  const { path, locale: routeLocale } = await props.params;

  // Gets the current full pathname for a given path
  const [locale, pathname] = basePage.getLocaleAndPath(path, routeLocale);

  // Gets the Markdown content and context
  const [content, context] = await basePage.getMarkdownContext({
    locale,
    pathname,
  });

  // If we have a filename and layout then we have a page
  if (context.filename && context.frontmatter.layout) {
    return basePage.renderPage({
      content,
      layout: context.frontmatter.layout,
      context,
    });
  }

  return notFound();
};

// @see https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic
export const dynamic = 'force-static';

// @see https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#revalidate
export const revalidate = 300;

export default RootPage;
