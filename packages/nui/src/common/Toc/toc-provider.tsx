'use client';

import { createContext, useContext } from 'react';
import type { FC, PropsWithChildren } from 'react';

export interface TOCSharedContext {
  href: string;
  label: string;
  title: string;
  tocOptions: {
    activeKey?: string;
    onClick?: (id: string) => void;
  };
}

type TOCContextType = PropsWithChildren<Partial<TOCSharedContext>>;

export const TOCContext = createContext<TOCContextType>({});

export const TOCProvider: FC<TOCContextType> = ({ children, ...props }) => {
  return (
    <TOCContext.Provider value={{ ...props }}>{children}</TOCContext.Provider>
  );
};

export const useTOCContext = () => useContext(TOCContext);
