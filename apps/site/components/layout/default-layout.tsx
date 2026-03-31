import { NavHeader } from '@/components/navigation/nav-header';
import WithFooter from '@/components/WithFooter';

import type { FC, PropsWithChildren } from 'react';

export const DefaultLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <NavHeader />
      <main className="min-h-[calc(100vh-86.4px)] pt-[60px]">{children}</main>
      <WithFooter />
    </>
  );
};
