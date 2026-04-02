import type zhMessages from './locales/zh.json';

export type LocaleConfig = {
  code: string;
  localName: string;
  name: string;
  langDir: string;
  dateFormat: string;
  hrefLang: string;
  enabled: boolean;
  default: boolean;
};

export type Locale = typeof zhMessages;
