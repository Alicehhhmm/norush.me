'use client';

import { Loader2 } from 'lucide-react';
import { memo, useRef, useEffect } from 'react';

import { EmptyState } from '@/components/projects/empty-state';
import { ProjectCard } from '@/components/projects/project-card';
import { ProjectCardSkeleton } from '@/components/projects/project-card';
import { DEFAULT_PAGE_SIZE } from '@/lib/constants';

import type { Project } from '@/types/project';
import type React from 'react';

type ProjectGridProps = {
  projects: Array<Project>;
  loading: boolean;
  loadingMore: boolean;
  initialLoading?: boolean;
  searchTerm?: string;
  category?: string;
  observerRef?: React.RefObject<HTMLDivElement | null>;
};

export const ProjectGrid = memo(function ProjectGrid({
  projects,
  loading,
  loadingMore,
  initialLoading = false,
  searchTerm,
  category,
  observerRef,
}: ProjectGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);
  const prevHeightRef = useRef<number>(0);

  // Store the grid height before loading to prevent layout shifts
  useEffect(() => {
    if (!loading && gridRef.current) {
      prevHeightRef.current = gridRef.current.getBoundingClientRect().height;
    }
  }, [loading]);

  // Show skeleton during initial loading
  if (initialLoading) {
    return <ProjectGridSkeleton />;
  }

  // Show spinner for subsequent loading states (filtering, etc.)
  if (loading && !initialLoading) {
    return (
      <div
        ref={gridRef}
        className="grid auto-rows-min gap-6 md:grid-cols-2 lg:grid-cols-3"
        style={{
          minHeight:
            prevHeightRef.current > 0
              ? `${prevHeightRef.current}px`
              : undefined,
        }}
      >
        <div className="col-span-full flex items-center justify-center py-20">
          <Loader2
            className="h-8 w-8 animate-spin text-gray-400"
            aria-label="Loading projects"
          />
        </div>
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div
        ref={gridRef}
        style={{
          minHeight:
            prevHeightRef.current > 0
              ? `${prevHeightRef.current}px`
              : undefined,
        }}
      >
        <EmptyState searchTerm={searchTerm} category={category} />
      </div>
    );
  }

  return (
    <>
      <div
        ref={gridRef}
        className="grid auto-rows-min gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Infinite scroll observer target */}
      <div ref={observerRef} className="h-4 w-full" />

      {loadingMore && (
        <div className="flex items-center justify-center py-8">
          <Loader2
            className="h-6 w-6 animate-spin text-gray-400"
            aria-label="Loading more projects"
          />
        </div>
      )}
    </>
  );
});

type ProjectGridSkeletonProps = {
  count?: number;
};

export const ProjectGridSkeleton = memo(
  ({ count = DEFAULT_PAGE_SIZE }: ProjectGridSkeletonProps) => {
    return (
      <div className="grid min-h-[600px] auto-rows-min gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: count }).map((_, index) => (
          <ProjectCardSkeleton key={index} />
        ))}
      </div>
    );
  }
);
