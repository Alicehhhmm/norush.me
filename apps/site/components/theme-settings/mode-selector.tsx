'use client';

import { useThemeManager, type Mode } from '@/hooks/client/use-theme-manager';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';

const modes: { id: Mode; name: Mode; icon: typeof Sun }[] = [
  {
    id: 'light',
    name: 'light',
    icon: Sun,
  },
  {
    id: 'dark',
    name: 'dark',
    icon: Moon,
  },
  {
    id: 'system',
    name: 'system',
    icon: Monitor,
  },
];

export function ModeSelector() {
  const { mode, updateMode } = useThemeManager();

  const t = useTranslations();

  return (
    <div className="space-y-4">
      <h3 className="text-muted-foreground mb-3 text-sm font-semibold">
        {t('system.settings.facadePatterns.label')}
      </h3>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {modes.map(({ id, name, icon: Icon }) => {
          const selected = id === mode;

          return (
            <button
              key={id}
              onClick={() => updateMode(id)}
              className={cn(
                'group relative rounded-lg border p-4 text-left shadow-xs transition-colors duration-300',
                selected
                  ? 'border-primary bg-primary/5 shadow-md'
                  : 'border-border hover:border-primary/40 hover:bg-accent/40 hover:shadow-md'
              )}
            >
              <div className="flex items-start gap-3">
                <div
                  className={cn(
                    'rounded-lg p-2 transition-colors duration-200',
                    selected
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary'
                  )}
                >
                  <Icon className="size-4" />
                </div>

                <div className="min-w-0 flex-1">
                  <div
                    className={cn(
                      'text-sm font-medium transition-colors duration-200',
                      selected ? 'text-primary' : 'text-foreground'
                    )}
                  >
                    {t(`system.settings.facadePatterns.options.${name}.label`)}
                  </div>
                  <div className="text-muted-foreground mt-1 text-xs leading-snug">
                    {t(`system.settings.facadePatterns.options.${name}.desc`)}
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
