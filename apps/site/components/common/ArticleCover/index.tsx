import { HexagonGrid, Kail } from '@nw/ui/icons';

import { cn } from '@/lib/utils';

import type { BlogCategory } from '@/types/blog';
import type { FC } from 'react';

import styles from './index.module.css';

type ArticleCoverProps = {
  title: string;
  type?: BlogCategory;
  className?: string;
};

const ArticleCover: FC<ArticleCoverProps> = ({
  type = '',
  title,
  className,
}) => (
  <div className={cn(styles.root, styles[type], className)}>
    <div className={styles.container} aria-hidden={true}>
      <HexagonGrid className={styles.hexagon} stopOpacity="0.2" />
      <Kail className={styles.logo} />
      <p className={styles.p}>{title}</p>
    </div>
  </div>
);

export default ArticleCover;
