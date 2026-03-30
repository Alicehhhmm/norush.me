import type { Meta, StoryObj } from 'storybook-react-rsbuild';

import { Toc, TOCProvider, type TOCItem } from '#ui/common/Toc';

const meta = {
  title: 'Common/Toc',
  component: Toc,
  tags: ['autodocs'],
  argTypes: {
    maxLayer: {
      control: { type: 'number' },
      description: '最大层级，范围 1-6',
      table: {
        defaultValue: { summary: '4' },
      },
    },
    indent: {
      control: { type: 'number' },
      description: '每个层级的缩进像素值',
      table: {
        defaultValue: { summary: '16' },
      },
    },
    directories: {
      description: '目录数据集，包含 TOCItem 数组',
    },
  },
} satisfies Meta<typeof Toc>;

export default meta;
type Story = StoryObj<typeof meta>;

// Mock Data for TOC
const sampleDirectories: TOCItem[] = [
  {
    id: 'introduction',
    title: 'Introduction',
    level: 1,
    children: [
      {
        id: 'getting-started',
        title: 'Getting Started',
        level: 2,
      },
      {
        id: 'installation',
        title: 'Installation',
        level: 2,
        children: [
          {
            id: 'npm',
            title: 'NPM',
            level: 3,
          },
          {
            id: 'yarn',
            title: 'Yarn',
            level: 3,
          },
          {
            id: 'pnpm',
            title: 'PNPM',
            level: 3,
          },
        ],
      },
    ],
  },
  {
    id: 'components',
    title: 'Components',
    level: 1,
    children: [
      {
        id: 'button',
        title: 'Button',
        level: 2,
      },
      {
        id: 'input',
        title: 'Input',
        level: 2,
      },
      {
        id: 'modal',
        title: 'Modal',
        level: 2,
        children: [
          {
            id: 'modal-usage',
            title: 'Usage',
            level: 3,
          },
          {
            id: 'modal-props',
            title: 'Props',
            level: 3,
          },
        ],
      },
    ],
  },
  {
    id: 'advanced',
    title: 'Advanced',
    level: 1,
    children: [
      {
        id: 'customization',
        title: 'Customization',
        level: 2,
      },
      {
        id: 'theming',
        title: 'Theming',
        level: 2,
      },
    ],
  },
];

const DeepDirectories: TOCItem[] = [
  {
    id: 'level-1',
    title: 'Level 1',
    level: 1,
    children: [
      {
        id: 'level-2',
        title: 'Level 2',
        level: 2,
        children: [
          {
            id: 'level-3',
            title: 'Level 3',
            level: 3,
            children: [
              {
                id: 'level-4',
                title: 'Level 4',
                level: 4,
                children: [
                  {
                    id: 'level-5',
                    title: 'Level 5',
                    level: 5,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'level-1',
    title: 'Level 1',
    level: 1,
    children: [],
  },
  {
    id: 'level-1',
    title: 'Level 1',
    level: 1,
    children: [],
  },
];

const Preview = (args: any) => (
  <div className="bg-background w-(--nr-sidebar) overscroll-contain p-10 pt-10">
    <h3 className="text-foreground mb-4 pl-3 text-sm font-semibold">
      ON THIS PAGE
    </h3>
    <Toc {...args} />
  </div>
);

/**
 * > 基础用法：展示一个带有默认配置的目录组件。
 */
export const Default: Story = {
  args: {
    directories: sampleDirectories,
  },
  render: args => (
    <TOCProvider tocOptions={{ activeKey: 'introduction' }}>
      <Preview {...args} />
    </TOCProvider>
  ),
};

/**
 * > 自定义缩进值，设置每个层级的缩进为 24px。
 */
export const CustomIndent: Story = {
  args: {
    directories: sampleDirectories,
    indent: 24,
  },
  render: args => (
    <TOCProvider tocOptions={{ activeKey: 'components' }}>
      <Preview {...args} />
    </TOCProvider>
  ),
};

/**
 * > 限制最大层级为 2，只显示前两层目录。
 */
export const MaxLayer2: Story = {
  args: {
    directories: sampleDirectories,
    maxLayer: 2,
  },
  render: args => (
    <TOCProvider tocOptions={{ activeKey: 'button' }}>
      <Preview {...args} />
    </TOCProvider>
  ),
};

/**
 * > 限制最大层级为 3，显示前三层目录。
 */
export const MaxLayer3: Story = {
  args: {
    directories: sampleDirectories,
    maxLayer: 3,
  },
  render: args => (
    <TOCProvider tocOptions={{ activeKey: 'modal-usage' }}>
      <Preview {...args} />
    </TOCProvider>
  ),
};

/**
 * > 简单的单层目录结构。
 */
export const SimpleList: Story = {
  args: {
    directories: [
      { id: 'section-1', title: 'Section 1', level: 1 },
      { id: 'section-2', title: 'Section 2', level: 1 },
      { id: 'section-3', title: 'Section 3', level: 1 },
      { id: 'section-4', title: 'Section 4', level: 1 },
      { id: 'section-5', title: 'Section 5', level: 1 },
    ],
  },
  render: args => (
    <TOCProvider tocOptions={{ activeKey: 'section-2' }}>
      <Preview {...args} />
    </TOCProvider>
  ),
};

/**
 * > 深层嵌套的目录结构，展示完整的 4 层嵌套。
 */
export const DeepNesting: Story = {
  args: {
    directories: DeepDirectories,
  },
  render: args => (
    <TOCProvider tocOptions={{ activeKey: 'level-3' }}>
      <Preview {...args} />
    </TOCProvider>
  ),
};

/**
 * > 使用字符串类型的 maxLayer 参数。
 */
export const StringMaxLayer: Story = {
  args: {
    directories: sampleDirectories,
    maxLayer: '3' as any,
  },
  render: args => (
    <TOCProvider tocOptions={{ activeKey: 'npm' }}>
      <Preview {...args} />
    </TOCProvider>
  ),
};
