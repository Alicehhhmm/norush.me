import { memo } from 'react';
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';

import type { Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = memo(({ project }: ProjectCardProps) => {
  return (
    <Card className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 transition-shadow duration-200 hover:shadow-md">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={project.image || '/placeholder.svg'}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-lg font-medium">{project.title}</h3>
        <p className="mt-1 line-clamp-2 flex-1 text-sm text-gray-500">
          {project.description}
        </p>
        <div className="my-3 flex flex-wrap items-center gap-1">
          {project.technologies.map((tech, i) => (
            <div key={i}>
              <Badge
                variant="secondary"
                className="hover:bg-primary/10 transition-colors"
              >
                {tech}
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
});

export const ProjectCardSkeleton = memo(() => {
  return (
    <Card className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-200">
      <div className="aspect-video w-full">
        <Skeleton className="h-full w-full" />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <Skeleton className="mb-2 h-6 w-3/4" />
        <div className="flex-1">
          <Skeleton className="mb-1 h-4 w-full" />
        </div>
        <div className="my-3 flex items-center gap-1">
          <Skeleton className="h-4 w-10" />
          <Skeleton className="h-4 w-10" />
          <Skeleton className="h-4 w-10" />
        </div>
      </div>
    </Card>
  );
});
