'use client';
import { useRef, useMemo } from 'react';

import { ArticleAside } from '@/components/common/ArticleAside';
import { ArticleProvider } from '@/components/providers';
import { useGlobClientContext, useActiveHeading } from '@/hooks';
import { transformHeadingsToTOC } from '@/utils';

import type { FC, PropsWithChildren } from 'react';

export const PostLayout: FC<PropsWithChildren> = ({ children }) => {
  const { headings } = useGlobClientContext();
  const articleRef = useRef<HTMLDivElement>(null);

  const tocData = useMemo(
    () => transformHeadingsToTOC(headings, 2),
    [headings]
  );

  // 获取当前文章置顶标题ID
  const activeId = useActiveHeading(articleRef, {
    topBoundary: 120,
    threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
  });

  return (
    <ArticleProvider
      tocOptions={{
        activeKey: activeId,
      }}
    >
      <div className="grid lg:grid-cols-[minmax(0,1fr)_var(--nr-sidebar)]">
        <div className="scrollbar-hide max-h-[calc(100vh-60px)] overflow-y-auto lg:max-w-[calc(100vw-var(--nr-sidebar))]">
          <article
            ref={articleRef}
            className="text-muted-foreground flex flex-col gap-6 overflow-hidden px-16 py-10 max-sm:px-6"
          >
            {children}
          </article>
        </div>

        {/* Sidebar TOC*/}
        <div
          className="scrollbar-hide dark:bg-muted/30 sticky top-[60px] hidden
                        max-h-[calc(100vh-60px)] w-(--nr-sidebar) shrink-0 overflow-hidden overflow-y-auto lg:block"
        >
          <aside className="flex flex-col">
            <ArticleAside toc={tocData} />
          </aside>
        </div>
      </div>
    </ArticleProvider>
  );
};
