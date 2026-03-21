import type { FC, PropsWithChildren } from 'react';

/**
 * 代码组件 - 用于显示内联代码
 * 使用项目设计语言 CSS 变量
 */
export const Code: FC<PropsWithChildren> = ({ children }) => (
  <code
    className="font-ibm-plex-mono rounded text-sm font-medium"
    style={{
      backgroundColor: 'hsl(var(--muted))',
      color: 'hsl(var(--muted-foreground))',
      paddingLeft: '0.375rem',
      paddingRight: '0.375rem',
      paddingTop: '0.125rem',
      paddingBottom: '0.125rem',
    }}
  >
    {children}
  </code>
);

/**
 * 代码块组件 - 用于显示多行代码块
 * 使用项目设计语言 CSS 变量
 */
export const CodeBlock: FC<PropsWithChildren<{ title?: string }>> = ({
  children,
  title,
}) => (
  <div
    className="overflow-hidden rounded-lg border"
    style={{
      borderColor: 'hsl(var(--border))',
      backgroundColor: 'hsl(var(--muted))',
    }}
  >
    {title && (
      <div
        className="border-b px-4 py-2"
        style={{
          borderBottomColor: 'hsl(var(--border))',
          backgroundColor: 'hsl(var(--muted))',
        }}
      >
        <span
          className="text-xs font-medium"
          style={{ color: 'hsl(var(--muted-foreground))' }}
        >
          {title}
        </span>
      </div>
    )}
    <pre className="overflow-x-auto p-4">
      <code
        className="font-ibm-plex-mono text-sm"
        style={{ color: 'hsl(var(--foreground))' }}
      >
        {children}
      </code>
    </pre>
  </div>
);

/**
 * 字体大小展示组件
 * 使用项目设计语言 CSS 变量
 */
export const FontSizeBox: FC<{
  name: string;
  size: string;
  lineHeight?: string;
}> = ({ name, size, lineHeight }) => (
  <div className="flex items-baseline gap-4">
    <span
      className="w-20 text-xs"
      style={{ color: 'hsl(var(--muted-foreground))' }}
    >
      {name}
    </span>
    <p className={size} style={{ color: 'hsl(var(--foreground))' }}>
      This is a piece of text
    </p>
    {lineHeight && (
      <span
        className="text-xs"
        style={{ color: 'hsl(var(--muted-foreground))' }}
      >
        ({lineHeight})
      </span>
    )}
  </div>
);

/**
 * 文档章节组件
 * 使用项目设计语言 CSS 变量
 */
export const Section: FC<PropsWithChildren<{ title: string }>> = ({
  title,
  children,
}) => (
  <section className="flex flex-col gap-4">
    <h2
      className="text-2xl font-bold"
      style={{ color: 'hsl(var(--foreground))' }}
    >
      {title}
    </h2>
    {children}
  </section>
);

/**
 * 文档说明组件
 * 使用项目设计语言 CSS 变量
 */
export const Description: FC<PropsWithChildren> = ({ children }) => (
  <p className="text-sm" style={{ color: 'hsl(var(--muted-foreground))' }}>
    {children}
  </p>
);
