'use client';

import { TOCProvider } from '@nw/ui/common';

import type { TOCSharedContext } from '@nw/ui/common';
import type { FC, PropsWithChildren } from 'react';

export type ArticleSharedContext = {} & TOCSharedContext;

type ArticleContextType = PropsWithChildren<Partial<ArticleSharedContext>>;

export const ArticleProvider: FC<ArticleContextType> = props => {
  return <TOCProvider {...props} />;
};
