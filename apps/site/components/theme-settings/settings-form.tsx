'use client';

import { useTranslations } from 'next-intl';

import { LangToggle } from '@/components/common';
import { useAppStore } from '@/stores/theme-store';

import { ModeSelector } from './mode-selector';
import { ThemeSelector } from './theme-selector';

export const SettingsForm = () => {
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
};
