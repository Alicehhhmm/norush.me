'use client';

import { useEffect, useRef, useMemo, useCallback } from 'react';
import { useStore } from 'zustand';

import { projectsStore } from '@/stores/projects-store';

import type {
  ProjectsResponse,
  CategoryOption,
  SortOption,
} from '@/types/project';

type UseProjectsOptions = {
  initialProjects: ProjectsResponse;
};

export function useProjects({ initialProjects }: UseProjectsOptions) {
  const isInitialized = useRef(false);
  const observerRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  const store = useStore(projectsStore, state => state);

  useEffect(() => {
    if (!isInitialized.current) {
      store.initializeStore(initialProjects);
      isInitialized.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialProjects]);

  const handleFilterChange = useCallback(
    (search?: string, cat?: CategoryOption, sort?: SortOption) => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }

      const scrollY = window.scrollY;

      debounceRef.current = setTimeout(async () => {
        await store.fetchProjects(true);
        requestAnimationFrame(() => {
          window.scrollTo({ top: scrollY, behavior: 'auto' });
        });
      }, 300);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [store.fetchProjects]
  );

  const handleSearchChange = useCallback(
    (v: string) => {
      store.setSearch(v);
      handleFilterChange(v, store.category, store.sort);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [store.setSearch, store.category, store.sort, handleFilterChange]
  );

  const handleCategoryChange = useCallback(
    (v: CategoryOption) => {
      store.setCategory(v);
      handleFilterChange(store.search, v, store.sort);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [store.setCategory, store.search, store.sort, handleFilterChange]
  );

  const handleSortChange = useCallback(
    (v: SortOption) => {
      store.setSort(v);
      handleFilterChange(store.search, store.category, v);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [store.setSort, store.search, store.category, handleFilterChange]
  );

  useEffect(() => {
    if (store.initialLoading || !observerRef.current) {
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (
          entry.isIntersecting &&
          store.hasMore &&
          !store.loadingMore &&
          !store.loading
        ) {
          store.setPage(store.page + 1);
          store.fetchProjects(false);
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(observerRef.current);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    store.initialLoading,
    store.hasMore,
    store.loading,
    store.loadingMore,
    store.setPage,
    store.page,
    store.fetchProjects,
  ]);

  useEffect(() => {
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, []);

  return useMemo(
    () => ({
      projects: store.projects,
      loading: store.loading,
      loadingMore: store.loadingMore,
      initialLoading: store.initialLoading,
      hasMore: store.hasMore,
      total: store.total,
      search: store.search,
      setSearch: handleSearchChange,
      category: store.category,
      setCategory: handleCategoryChange,
      sort: store.sort,
      setSort: handleSortChange,
      observerRef,
    }),
    [
      store.projects,
      store.loading,
      store.loadingMore,
      store.initialLoading,
      store.hasMore,
      store.total,
      store.search,
      store.category,
      store.sort,
      handleSearchChange,
      handleCategoryChange,
      handleSortChange,
    ]
  );
}
