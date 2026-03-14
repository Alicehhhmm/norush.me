import type { FC, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface NoMoreProps {
  icon?: ReactNode;
  text?: string;
  className?: string;
}

/**
 * <NoMore />
 * ---
 * 分页终点提示组件，用于展示“已经到底啦”类消息。
 *
 * @param icon 默认 🎉，可传入任意图标或 emoji
 * @param text 默认 “已经到底啦”
 * @param className 可追加样式类名
 *
 * @example
 * <NoMore />
 * <NoMore icon="📚" text="没有更多内容了" />
 * <NoMore icon={<CheckCircle className="w-4 h-4 text-green-500" />} />
 */
export const NoMore: FC<NoMoreProps> = ({
  icon = '🎉',
  text = '已经到底啦',
  className,
}) => {
  return (
    <div
      className={cn(
        'text-muted-foreground/80 my-6 flex items-center justify-center text-xs',
        className
      )}
    >
      <span className="inline-flex items-center gap-1">
        <span>{text}</span>
        {icon}
      </span>
    </div>
  );
};
