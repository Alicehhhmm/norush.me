'use client';

import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { BookmarkSkeleton, BookmarkItems } from '@/components/bookmarks';

import type { BookmarkItemType } from '@/types';
import type { FC } from 'react';

type BookmarkListProps = {
  initialData: Array<BookmarkItemType>;
  pathname: string;
};

export const BookmarkList: FC<BookmarkListProps> = ({
  pathname,
  initialData,
}) => {
  return (
    <ErrorBoundary fallback={<p className="text-red-500">加载书签时出错</p>}>
      <Suspense fallback={<BookmarkSkeleton />}>
        <BookmarkItems pathname={pathname} />
      </Suspense>
    </ErrorBoundary>
  );
};
