import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';

import { Button } from '../../src/button/Button';

/**
 * ## 概述
 *
 * `Button` 组件用于触发操作或提交表单。
 *
 * ## 使用场景
 *
 * - 提交表单
 * - 触发操作
 * - 导航链接
 *
 * ## 相关组件
 *
 * - [Link](./link.mdx) - 链接组件
 * - [IconButton](./icon-button.mdx) - 图标按钮
 */
const meta = {
  title: 'General/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Button 组件是用户界面中最常用的交互元素之一。它支持多种变体、尺寸和状态，可以满足不同的设计需求。

### 特点

- ✅ 支持多种变体（variant）
- ✅ 支持多种尺寸（size）
- ✅ 支持禁用状态
- ✅ 支持 asChild 属性
- ✅ 完整的 TypeScript 类型支持
- ✅ 无障碍访问支持
        `,
      },
    },
  },
  // 自动生成文档
  tags: ['autodocs'],
  // 参数类型
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'default',
        'destructive',
        'outline',
        'secondary',
        'ghost',
        'link',
      ],
      description: '按钮的变体样式',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg', 'icon'],
      description: '按钮的尺寸',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    asChild: {
      control: { type: 'boolean' },
      description: '如果为 true，将渲染子元素而不是 button',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: '禁用按钮',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    children: {
      control: { type: 'text' },
      description: '按钮内容',
    },
    onClick: {
      description: '点击事件处理函数',
    },
  },
  // 默认参数
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * ### 默认按钮
 *
 * 默认的按钮样式，适用于大多数场景。
 */
export const Default: Story = {
  args: {
    children: 'Default Button',
    variant: 'default',
    size: 'default',
  },
};

/**
 * ### 破坏性按钮
 *
 * 用于危险操作，如删除、取消等。使用红色背景以引起用户注意。
 */
export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive Button',
  },
};

/**
 * ### 边框按钮
 *
 * 只有边框的按钮，适用于次要操作或空间有限的场景。
 */
export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
};

/**
 * ### 次要按钮
 *
 * 次要操作的按钮，使用灰色背景。
 */
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

/**
 * ### 幽灵按钮
 *
 * 没有背景的按钮，鼠标悬停时显示背景。适用于工具栏或不显眼的操作。
 */
export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
};

/**
 * ### 链接按钮
 *
 * 看起来像链接的按钮，适用于导航场景。
 */
export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link Button',
  },
};

/**
 * ### 小尺寸按钮
 *
 * 适用于空间有限的场景。
 */
export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small Button',
  },
};

/**
 * ### 大尺寸按钮
 *
 * 适用于需要强调的主要操作。
 */
export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Button',
  },
};

/**
 * ### 图标按钮
 *
 * 只显示图标的正方形按钮。
 */
export const Icon: Story = {
  args: {
    size: 'icon',
    children: '🔍',
  },
};

/**
 * ### 禁用状态
 *
 * 禁用的按钮不可点击，样式会变灰。
 */
export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
};

/**
 * ### 作为链接使用
 *
 * 使用 `asChild` 属性可以将 Button 渲染为其他元素，如链接。
 */
export const AsLink: Story = {
  render: args => (
    <Button {...args} asChild>
      <a href="https://example.com" target="_blank" rel="noopener noreferrer">
        Link Button
      </a>
    </Button>
  ),
  args: {
    variant: 'default',
  },
};

/**
 * ### 带图标的按钮
 *
 * 在按钮中添加图标。
 */
export const WithIcon: Story = {
  args: {
    children: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
          <path d="M3 6h18" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
        Download
      </>
    ),
  },
};

/**
 * ### 按钮组
 *
 * 多个按钮组合使用。
 */
export const ButtonGroup: Story = {
  render: args => (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Button {...args} variant="default">
        Cancel
      </Button>
      <Button {...args} variant="destructive">
        Confirm
      </Button>
    </div>
  ),
};

/**
 * ### 全宽按钮
 *
 * 使用 Tailwind CSS 工具类实现全宽按钮。
 */
export const FullWidth: Story = {
  args: {
    children: 'Full Width Button',
    className: 'w-full',
  },
};

/**
 * ### 自定义样式
 *
 * 通过 className 添加自定义样式。
 */
export const Custom: Story = {
  args: {
    children: 'Custom Button',
    className: 'bg-purple-500 hover:bg-purple-600 text-white',
  },
};

// Props 文档表格
/**
 * ## Props
 *
 * Button 组件继承所有 `React.ButtonHTMLAttributes<HTMLButtonElement>` 属性。
 *
 * | 属性 | 类型 | 默认值 | 描述 |
 * |------|------|--------|------|
 * | `variant` | `'default' \\| 'destructive' \\| 'outline' \\| 'secondary' \\| 'ghost' \\| 'link'` | `'default'` | 按钮变体 |
 * | `size` | `'default' \\| 'sm' \\| 'lg' \\| 'icon'` | `'default'` | 按钮尺寸 |
 * | `asChild` | `boolean` | `false` | 渲染子元素 |
 * | `disabled` | `boolean` | `false` | 禁用状态 |
 * | `className` | `string` | - | 自定义类名 |
 * | `onClick` | `(e) => void` | - | 点击事件 |
 *
 * ## CSS API
 *
 * ### 类名
 *
 * | 类名 | 描述 |
 * |------|------|
 * | `.inline-flex` | 使用 flexbox 布局 |
 * | `.items-center` | 垂直居中 |
 * | `.justify-center` | 水平居中 |
 * | `.rounded-md` | 圆角 |
 *
 * ### CSS 变量
 *
 * | 变量 | 描述 |
 * |------|------|
 * | `--background` | 背景色 |
 * | `--foreground` | 前景色 |
 * | `--primary` | 主色调 |
 * | `--primary-foreground` | 主色调前景色 |
 */
