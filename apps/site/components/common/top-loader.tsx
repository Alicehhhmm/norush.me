'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

type TopLoaderProps = {
  color?: string;
  crawlSpeed?: number;
  initialPosition?: number;
};

export const TopLoader = ({
  color = '#000',
  crawlSpeed = 800,
  initialPosition = 0.08,
}: TopLoaderProps) => {
  const [progress, setProgress] = useState(0);
  const animationRef = useRef<number>(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // 使用缓动函数优化动画效果
  const easeOutQuad = (t: number) => t * (2 - t);

  useEffect(() => {
    let startTime: number | undefined;
    let timer: NodeJS.Timeout;

    // 启动新动画前先取消旧动画
    cancelAnimationFrame(animationRef.current!);

    const animate = (timestamp: number) => {
      if (startTime === undefined) {
        startTime = timestamp;
        // 设置初始进度（异步）
        setProgress(initialPosition * 100);
      }
      const elapsed = timestamp - startTime;
      const currentProgress = Math.min(elapsed / crawlSpeed, 1);
      // 最高到95%，等待完成时再到100%
      setProgress(easeOutQuad(currentProgress) * 100);

      if (currentProgress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    // 清理函数
    return () => {
      cancelAnimationFrame(animationRef.current!);
      setProgress(100);
      timer = setTimeout(() => setProgress(0), 300);
      clearTimeout(timer);
    };
  }, [pathname, searchParams, crawlSpeed, initialPosition]);

  if (progress === 0) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 z-9999 w-full">
      <Progress
        value={progress}
        className={cn(
          'h-[1.5px] rounded-none bg-transparent',
          'transition-all duration-300 ease-in-out',
          progress >= 100 && 'opacity-0'
        )}
        style={
          {
            '--progress-foreground': color,
          } as React.CSSProperties
        }
      />
    </div>
  );
};
