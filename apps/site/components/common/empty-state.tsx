import type { FC, ReactNode } from 'react';
import { cn } from '@/lib/utils';

/* ------------------------------------------------------------------ */
/* 预置场景                                                         */
/* ------------------------------------------------------------------ */
type Variant =
  | 'default'
  | 'list'
  | 'search'
  | 'network'
  | 'forbidden'
  | 'signin';

const VARIANT_MAP: Record<
  Variant,
  { icon: ReactNode; title: string; description?: string }
> = {
  default: {
    icon: '📭',
    title: '暂无内容',
  },
  list: {
    icon: '📂',
    title: '列表为空',
    description: '暂时没有可显示的数据',
  },
  search: {
    icon: '🔍',
    title: '未找到匹配结果',
    description: '尝试调整关键词或过滤条件',
  },
  network: {
    icon: '📡',
    title: '网络错误',
    description: '请检查网络连接或稍后再试',
  },
  forbidden: {
    icon: '🚫',
    title: '无权限访问',
    description: '请联系管理员或切换账号',
  },
  signin: {
    icon: '🔒',
    title: '请先登录',
    description: '登录后即可查看内容',
  },
};

/* ------------------------------------------------------------------ */
/* Props 声明                                                       */
/* ------------------------------------------------------------------ */
interface EmptyStateProps {
  variant?: Variant;
  icon?: ReactNode;
  title?: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}

/**
 * <EmptyState />
 * --------------
 * 通用空态组件，支持多场景 `variant` + 插槽自定义。
 *
 * @example 列表为空
 * ```tsx
 * <EmptyState variant="list" />
 * ```
 *
 * @example 搜索无结果 + 自定义按钮
 * ```tsx
 * <EmptyState
 *   variant="search"
 *   action={<Button size="sm" onClick={resetFilter}>重置过滤</Button>}
 * />
 * ```
 */
export const EmptyState: FC<EmptyStateProps> = ({
  variant = 'default',
  icon,
  title,
  description,
  action,
  className,
}) => {
  const preset = VARIANT_MAP[variant];

  return (
    <div
      className={cn(
        'text-muted-foreground flex flex-col items-center justify-center py-10',
        className
      )}
    >
      <div className="mb-3 text-4xl">{icon ?? preset.icon}</div>

      <h3 className="text-foreground mb-1 text-base font-medium">
        {title ?? preset.title}
      </h3>

      {(description ?? preset.description) && (
        <p className="mb-3 text-center text-sm leading-relaxed">
          {description ?? preset.description}
        </p>
      )}

      {action}
    </div>
  );
};
