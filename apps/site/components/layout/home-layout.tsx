import type { FC, PropsWithChildren } from 'react';

import { NavHeader } from '@/components/navigation';
import WithFooter from '@/components/WithFooter';

export const HomeLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <NavHeader />
        <main className="flex-1 overflow-hidden pt-15">{children}</main>
        <div className="flex-none">
          <WithFooter />
        </div>
      </div>
    </>
  );
};
