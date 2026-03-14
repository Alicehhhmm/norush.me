import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {} from 'next-intl';
import type { Locale } from '@/i18n/routing';
import { getDefaultLocale } from '@/i18n/lib';

export type ColorTheme = 'default' | 'warm' | 'cool' | 'fluo' | 'claude';
export type ViewMode = 'list' | 'grid' | 'card' | 'masonry';
export type FontSize = 'small' | 'medium' | 'large';
export type Language = Locale;

interface AppState {
  // Remove theme management from store - let next-themes handle it

  // View settings
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;

  // Font settings
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;

  // Language settings
  language: Language;
  setLanguage: (lang: Language) => void;

  // UI settings
  sidebarCollapsed: boolean;
  setSidebarCollapsed: (collapsed: boolean) => void;

  // Other settings
  showThumbnails: boolean;
  setShowThumbnails: (show: boolean) => void;

  sortBy: 'name' | 'date' | 'count';
  setSortBy: (sort: 'name' | 'date' | 'count') => void;

  enableAI: boolean;
  setEnableAI: (enable: boolean) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    set => ({
      // View settings
      viewMode: 'list',
      setViewMode: viewMode => set({ viewMode }),

      // Font settings
      fontSize: 'medium',
      setFontSize: fontSize => set({ fontSize }),

      // Language settings
      language: getDefaultLocale()?.code || 'zh',
      setLanguage: language => set({ language }),

      // UI settings
      sidebarCollapsed: false,
      setSidebarCollapsed: sidebarCollapsed => set({ sidebarCollapsed }),

      // Other settings
      showThumbnails: true,
      setShowThumbnails: showThumbnails => set({ showThumbnails }),

      sortBy: 'name',
      setSortBy: sortBy => set({ sortBy }),

      enableAI: true,
      setEnableAI: enableAI => set({ enableAI }),
    }),
    {
      name: 'theme-settings',
    }
  )
);
