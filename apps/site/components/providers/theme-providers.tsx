'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export function RThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="data-theme"
      defaultTheme="default-light"
      enableSystem
      storageKey="rose-theme"
      themes={[
        'default-light',
        'default-dark',
        'warm-light',
        'warm-dark',
        'cool-light',
        'cool-dark',
        'fluo-light',
        'fluo-dark',
      ]}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
