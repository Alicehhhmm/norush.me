'use client';

import { useAppStore } from '@/stores/theme-store';
import { ThemeSelector } from './theme-selector';
import { ModeSelector } from './mode-selector';
import { LangToggle } from '@/components/common';
import { useTranslations } from 'next-intl';

export function SettingsForm() {
  const {
    language,
    setLanguage,
    fontSize,
    setFontSize,
    viewMode,
    setViewMode,
    sortBy,
    setSortBy,
    showThumbnails,
    setShowThumbnails,
    enableAI,
    setEnableAI,
  } = useAppStore();

  const t = useTranslations();

  return (
    <div className="space-y-8 p-6">
      {/* Lang Selection */}
      <div className="space-y-4">
        <h3 className="text-foreground text-sm font-medium">
          {t('system.settings.languagePattern.label')}
        </h3>
        <LangToggle showLabel onChange={lang => setLanguage(lang)} />
      </div>

      {/* Mode Selection */}
      <ModeSelector />

      {/* Theme Selection */}
      <ThemeSelector />

      {/* TODO: Font Size */}
    </div>
  );
}
