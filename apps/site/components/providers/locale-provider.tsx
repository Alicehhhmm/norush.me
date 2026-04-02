import { NextIntlClientProvider } from 'next-intl';

import type { FC, PropsWithChildren } from 'react';

type LocaleProviderProps = {} & PropsWithChildren;

export const LocaleProvider: FC<LocaleProviderProps> = ({ children }) => {
  return <NextIntlClientProvider>{children}</NextIntlClientProvider>;
};
