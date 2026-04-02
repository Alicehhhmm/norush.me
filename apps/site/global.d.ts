import { Locale } from '@nw/i18n/types';

declare module 'next-intl' {
  interface AppConfig {
    Messages: Locale;
  }
}
