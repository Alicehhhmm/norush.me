'use client';

import { PostLayout } from '@/components/layout/posts';

import type { FC, PropsWithChildren } from 'react';

type ChatPostLayoutProps = {} & PropsWithChildren;

export const BlogChatPostLayout: FC<ChatPostLayoutProps> = ({ children }) => {
  // TODO: add bg-meash and update styles

  return (
    <div className="dark:bg-muted/30">
      <PostLayout>{children}</PostLayout>
    </div>
  );
};
