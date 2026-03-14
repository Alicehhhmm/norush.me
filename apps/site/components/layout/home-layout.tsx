'use client';

import type { FC, PropsWithChildren } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

import { NavHeader } from '@/components/navigation';
import WithFooter from '@/components/WithFooter';

const FOOTER_HEIGHT = 80;
const HIDE_START = 0.0; // 开始隐藏
const HIDE_END = 0.1; // 完全隐藏
const SHOW_START = 0.95; // 开始显示（底部前95%）
const SHOW_END = 0.98; // 完全显示

export const HomeLayout: FC<PropsWithChildren> = ({ children }) => {
  const { scrollYProgress } = useScroll();

  const y = useSpring(
    useTransform(
      scrollYProgress,
      [0, HIDE_START, HIDE_END, SHOW_START, SHOW_END, 1],
      [0, 0, FOOTER_HEIGHT, FOOTER_HEIGHT, 0, 0]
    ),
    { stiffness: 100, damping: 20 }
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, HIDE_START, HIDE_END, SHOW_START, SHOW_END, 1],
    [1, 1, 0, 0, 1, 1]
  );

  return (
    <div className="flex min-h-screen flex-col">
      <NavHeader />
      <main className="flex-1 overflow-hidden pt-15 pb-20">{children}</main>

      <motion.footer
        className="fixed right-0 bottom-0 left-0 flex-none"
        style={{
          y,
          opacity,
          pointerEvents: useTransform(opacity, v =>
            v > 0.4 ? 'auto' : 'none'
          ),
        }}
      >
        <WithFooter />
      </motion.footer>
    </div>
  );
};
