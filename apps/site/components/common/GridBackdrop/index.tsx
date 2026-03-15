import type { FC, CSSProperties } from 'react';

import { cn } from '@/lib/utils';
import { RectangleGrid } from '@/components/special-effects/RectangleGrid';

interface GridBackdropProps {
  className?: string;
  style?: CSSProperties;
}

export const GridBackdrop: FC = ({
  className = '',
  style = {},
}: GridBackdropProps) => {
  return (
    <div className={cn('size-full', className, style)} style={{ ...style }}>
      <RectangleGrid className="bg-background dark:bg-fluo-background size-full" />
    </div>
  );
};
