import type { FC, PropsWithChildren } from 'react';

/**
 * 代码组件 - 用于显示内联代码
 * 使用 Tailwind CSS 语义化类
 */
export const Code: FC<PropsWithChildren> = ({ children }) => (
  <code className="bg-muted text-muted-foreground font-ibm-plex-mono rounded px-1.5 py-0.5 text-sm font-medium">
    {children}
  </code>
);

/**
 * 代码块组件 - 用于显示多行代码块
 * 使用 Tailwind CSS 语义化类
 */
export const CodeBlock: FC<PropsWithChildren<{ title?: string }>> = ({
  children,
  title,
}) => (
  <div className="border-border bg-muted overflow-hidden rounded-lg border">
    {title && (
      <div className="border-border bg-muted border-b px-4 py-2">
        <span className="text-muted-foreground text-xs font-medium">
          {title}
        </span>
      </div>
    )}
    <pre className="overflow-x-auto p-4">
      <code className="font-ibm-plex-mono text-foreground text-sm">
        {children}
      </code>
    </pre>
  </div>
);

/**
 * 字体大小展示组件
 * 使用 Tailwind CSS 语义化类
 */
export const FontSizeBox: FC<{
  name: string;
  size: string;
  lineHeight?: string;
}> = ({ name, size, lineHeight }) => (
  <div className="flex items-baseline gap-4">
    <span className="text-muted-foreground w-20 text-xs">{name}</span>
    <p className={`${size} text-foreground`}>This is a piece of text</p>
    {lineHeight && (
      <span className="text-muted-foreground text-xs">({lineHeight})</span>
    )}
  </div>
);

/**
 * 文档章节组件
 * 使用 Tailwind CSS 语义化类
 */
export const Section: FC<PropsWithChildren<{ title: string }>> = ({
  title,
  children,
}) => (
  <section className="flex flex-col gap-4">
    <h2 className="text-foreground text-2xl font-bold">{title}</h2>
    {children}
  </section>
);

/**
 * 文档说明组件
 * 使用 Tailwind CSS 语义化类
 */
export const Description: FC<PropsWithChildren> = ({ children }) => (
  <p className="text-muted-foreground text-sm">{children}</p>
);
