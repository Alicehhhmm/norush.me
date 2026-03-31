'use client';

import { useTranslations } from 'next-intl';

import {
  useThemeManager,
  type ColorTheme,
} from '@/hooks/client/use-theme-manager';
import { cn } from '@/lib/utils';

const colorThemes: ReadonlyArray<{
  id: ColorTheme;
  name: ColorTheme;
  layout: {
    window: string;
    sidebar: string;
    content: string;
    accent: string;
  };
}> = [
  {
    id: 'default',
    name: 'default',
    layout: {
      window: 'bg-slate-100',
      sidebar: 'bg-slate-200',
      content: 'bg-back-100',
      accent: 'bg-back-500',
    },
  },
  {
    id: 'warm',
    name: 'warm',
    layout: {
      window: 'bg-amber-100',
      sidebar: 'bg-yellow-200',
      content: 'bg-yellow-100',
      accent: 'bg-yellow-500',
    },
  },
  {
    id: 'cool',
    name: 'cool',
    layout: {
      window: 'bg-sky-100',
      sidebar: 'bg-cyan-200',
      content: 'bg-cyan-100',
      accent: 'bg-cyan-500',
    },
  },
  {
    id: 'fluo',
    name: 'fluo',
    layout: {
      window: 'bg-lime-100',
      sidebar: 'bg-emerald-200',
      content: 'bg-green-100',
      accent: 'bg-green-500',
    },
  },
  {
    id: 'claude',
    name: 'claude',
    layout: {
      window: 'bg-amber-100',
      sidebar: 'bg-orange-200',
      content: 'bg-orange-100',
      accent: 'bg-orange-500',
    },
  },
];

export const ThemeSelector = () => {
  const { colorTheme, updateColorTheme } = useThemeManager();
  const t = useTranslations();

  return (
    <section className="space-y-4">
      <h3 className="text-muted-foreground text-sm font-semibold">
        {t(`system.settings.colorTheme.label`)}
      </h3>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {colorThemes.map(({ id, name, layout }) => {
          const selected = colorTheme === id;

          return (
            <div
              key={id}
              onClick={() => updateColorTheme(id)}
              className={cn(
                'group relative rounded-lg border p-4 text-left shadow-xs transition-colors duration-300',
                selected
                  ? 'border-primary bg-primary/5 shadow-md'
                  : 'border-border hover:border-primary/40 hover:bg-accent/40 hover:shadow-md'
              )}
            >
              <div
                className={cn(
                  'w-full overflow-hidden rounded-md',
                  layout.window
                )}
              >
                <div className="flex items-center gap-1 px-3 py-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
                  <div className="ml-auto h-2 w-24 rounded bg-white/40" />
                </div>
                <div className="flex h-16">
                  <div className={cn('w-1/4', layout.sidebar)} />
                  <div
                    className={cn(
                      'flex flex-1 flex-col justify-center gap-1.5 px-3',
                      layout.content
                    )}
                  >
                    <div className="h-2.5 w-3/4 rounded bg-white/30" />
                    <div className="h-2 w-1/2 rounded bg-white/20" />
                  </div>
                </div>
              </div>

              <div className="mt-3 space-y-1">
                <div className="flex items-center gap-2">
                  <div className="text-foreground truncate text-sm font-medium">
                    {t(`system.settings.colorTheme.options.${name}.label`)}
                  </div>
                  <div
                    className={cn('h-4 w-4 shrink-0 rounded-md', layout.accent)}
                  />
                </div>
                <div className="text-muted-foreground line-clamp-2 text-xs leading-snug">
                  {t(`system.settings.colorTheme.options.${name}.desc`)}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
