import { ScrollArea } from '@/components/ui/scroll-area';

import type { FC, ReactNode } from 'react';

type ChatContentMainProps = {
  children: ReactNode;
};

export const ChatContentMain: FC<ChatContentMainProps> = ({ children }) => {
  return (
    <ScrollArea className="dark:bg-muted/60 flex flex-1 flex-col gap-4 p-4">
      {children}
    </ScrollArea>
  );
};
