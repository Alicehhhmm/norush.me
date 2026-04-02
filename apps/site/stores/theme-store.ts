import { defaultLocale } from '@nw/i18n';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type ColorTheme = 'default' | 'warm' | 'cool' | 'fluo' | 'claude';
export type ViewMode = 'list' | 'grid' | 'card' | 'masonry';
export type FontSize = 'small' | 'medium' | 'large';

type AppState = {
  // Remove theme management from store - let next-themes handle it

  // View settings
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;

  // Font settings
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;

  // Language settings
  language: string;
  setLanguage: (lang: string) => void;

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
};

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
      language: defaultLocale.code || 'zh',
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
