'use client';

import type { FC, PropsWithChildren } from 'react';
import { TOCSharedContext, TOCProvider } from '@nw/ui/common';

export interface ArticleSharedContext extends TOCSharedContext {}

type ArticleContextType = PropsWithChildren<Partial<ArticleSharedContext>>;

export const ArticleProvider: FC<ArticleContextType> = props => {
  return <TOCProvider {...props} />;
};
