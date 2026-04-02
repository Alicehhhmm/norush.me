import type { Locale } from '@nw/i18n/types';
import type {
  NamespaceKeys,
  MessageKeys,
  NestedValueOf,
  NestedKeyOf,
} from 'next-intl';

// Defines a generic type for all available i18n translation keys, by default not using any namespace
export type IntlMessageKeys<
  NestedKey extends NamespaceKeys<Locale, NestedKeyOf<Locale>> = never,
> = MessageKeys<
  NestedValueOf<
    { '!': Locale },
    [NestedKey] extends [never] ? '!' : `!.${NestedKey}`
  >,
  NestedKeyOf<
    NestedValueOf<
      { '!': Locale },
      [NestedKey] extends [never] ? '!' : `!.${NestedKey}`
    >
  >
>;
