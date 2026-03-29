import type { FC } from 'react';

import { HexagonGrid } from '#ui/icons';
import styles from './index.module.css';

export const GlowingBackdrop: FC = () => {
  return (
    <div className={styles.glowingBackdrop}>
      <HexagonGrid className="size-full" />
    </div>
  );
};

export default GlowingBackdrop;
