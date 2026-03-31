'use client';

import { memo } from 'react';

import { SearchInput } from '@/components/common/search-input';
import { CategoryFilter } from '@/components/projects/category-filter';
import { SortDropdown } from '@/components/projects/sort-dropdown';
import { Skeleton } from '@/components/ui/skeleton';

import type { CategoryOption, SortOption } from '@/types/project';

type ProjectFiltersProps = {
  search: string;
  onSearchChange: (value: string) => void;
  category: CategoryOption;
  onCategoryChange: (category: CategoryOption) => void;
  sort: SortOption;
  onSortChange: (sort: SortOption) => void;
  totalProjects: number;
  shownProjects: number;
};

export const ProjectFilters = memo(
  ({
    search,
    onSearchChange,
    category,
    onCategoryChange,
    sort,
    onSortChange,
    totalProjects,
    shownProjects,
  }: ProjectFiltersProps) => {
    return (
      <>
        <div className="flex flex-col items-center gap-4 py-10">
          <div
            data-testid="community-tagline"
            className="font-heading max-w-[700px] text-center text-[29px] leading-tight font-semibold tracking-tighter text-pretty text-gray-900 sm:text-[32px] md:text-[40px]"
          >
            Discover the best apps, components and starters from the community.
          </div>
          <div className="mx-auto w-full max-w-3xl">
            <SearchInput
              value={search}
              onChange={onSearchChange}
              placeholder="Search projects..."
            />
          </div>

          <CategoryFilter
            activeCategory={category}
            onChange={onCategoryChange}
            className="mt-2"
          />
        </div>
        <div className="mb-4 flex items-center justify-between">
          <div className="text-sm text-gray-500">
            {`Showing ${shownProjects} of ${totalProjects} projects`}
          </div>
          <SortDropdown value={sort} onChange={onSortChange} />
        </div>
      </>
    );
  }
);
