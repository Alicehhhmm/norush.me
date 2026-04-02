import { availableLocales, defaultLocale } from '@nw/i18n';
import { getTranslations } from 'next-intl/server';

import { TopLoader } from '@/components/common';
import {
  RThemeProvider,
  LocaleProvider,
  QueryProvider,
} from '@/components/providers';
import { TailwindIndicator } from '@/components/tailwind-indicator';
import { Toaster } from '@/components/ui/sonner';
import { siteConfig } from '@/config/next.json.mjs';
import { IBM_PLEX_MONO, OPEN_SANS } from '@/lib/next.fonts';
import { cn } from '@/lib/utils';

// TODO: Use dynamic routing configuration uniformly

import '#site/styles/globals.css';

type RootProps = {
  children: React.ReactNode;
  params: { locale: string };
};

export async function generateMetadata({
  params,
}: Omit<RootProps, 'children'>) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'common' });

  return {
    title: t('title'),
    description: t('description'),
    icons: { icon: siteConfig.favicon },
  };
}

const RootLayout = async ({ children, params }: RootProps) => {
  const { locale } = await params;

  const { langDir, hrefLang } =
    availableLocales.find(l => l.code === locale) || defaultLocale;

  return (
    <html lang={hrefLang} dir={langDir} suppressHydrationWarning>
      <body
        className={cn(OPEN_SANS.variable, IBM_PLEX_MONO.variable)}
        suppressHydrationWarning
      >
        <TailwindIndicator />
        <Toaster />
        <LocaleProvider>
          <RThemeProvider>
            <TopLoader />
            <QueryProvider>{children}</QueryProvider>
          </RThemeProvider>
        </LocaleProvider>
      </body>
    </html>
  );
};

export default RootLayout;
