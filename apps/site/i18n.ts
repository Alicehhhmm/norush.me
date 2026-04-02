import { defaultLocale, availableLocaleCodes, defaultMessages } from '@nw/i18n';
import { getRequestConfig } from 'next-intl/server';

import { deepMerge } from '#site/utils/objects';

// Loads the Application Locales/Translations Dynamically
const loadLocaleDictionary = async (locale: string) => {
  if (locale === defaultLocale.code) {
    return defaultMessages;
  }

  if (availableLocaleCodes.includes(locale)) {
    // Other languages don't really require HMR as they
    // will never be development languages so we can load them dynamically
    const { default: messages } = await import(
      `@nw/i18n/locales/${locale}.json`
    );

    // Use default messages as fallback
    return deepMerge(defaultMessages, messages);
  }

  throw new Error(`Unsupported locale: ${locale}`);
};

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !availableLocaleCodes.includes(locale)) {
    locale = defaultLocale.code;
  }

  return {
    locale,
    timeZone: 'Etc/UTC',
    messages: await loadLocaleDictionary(locale),
  };
});
