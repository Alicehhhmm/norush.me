'use client';

import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  FadeInWhenVisible,
  ScaleInWhenVisible,
} from '@/components/motions/scroll-animation';
import { DemoProjectCard } from '@/components/projects/demo-project-card';
import { demo_projects } from '@/fatch-data/data/projects-data';
import type { DemoProjectType } from '@/types/project';

const projects = [...demo_projects];

export function ProjectsSection() {
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setColumns(1);
      } else if (window.innerWidth < 1024) {
        setColumns(2);
      } else {
        setColumns(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const projectColumns = Array.from(
    { length: columns },
    () => [] as DemoProjectType[]
  );
  projects.forEach((project, index) => {
    const columnIndex = index % columns;
    projectColumns[columnIndex].push(project);
  });

  return (
    <section id="work" className="overflow-x-hidden px-20 py-20">
      <div className="container px-4 sm:px-6 md:px-8">
        <FadeInWhenVisible className="mb-16 text-center">
          <Button
            variant="outline"
            className="text-fluo-500 bg-muted/30 mb-1 rounded-full text-xl font-medium dark:bg-black"
          >
            Projects
          </Button>
          <h2 className="mb-4 text-3xl font-bold">Featured Projects</h2>
          <p className="text-muted-foreground mx-auto max-w-2xl">
            A selection of my recent work. These projects showcase my skills and
            expertise in different areas.
          </p>
        </FadeInWhenVisible>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projectColumns.map((column, colIndex) => (
            <div key={colIndex} className="flex flex-col space-y-6">
              {column.map((project, projIndex) => (
                <ScaleInWhenVisible
                  key={projIndex}
                  delay={(projIndex * 0.1) % 0.3}
                >
                  <DemoProjectCard
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    technologies={project.technologies}
                  />
                </ScaleInWhenVisible>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
