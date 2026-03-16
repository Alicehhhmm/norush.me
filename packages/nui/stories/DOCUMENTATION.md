# @nw/ui 文档结构说明

本文档说明了 @nw/ui 组件库的文档结构和组织方式。

## 📁 文档位置

**所有文档统一位于 `packages/nui/stories/` 目录下**

## 📂 目录结构

```
packages/nui/stories/
├── docs/                           # 文档目录
│   ├── README.mdx                  # 主入口文档（介绍）
│   ├── index.mdx                   # 文档索引和导航
│   ├── getting-started.mdx         # 快速开始指南
│   ├── theming.mdx                 # 主题定制指南
│   ├── components-overview.mdx     # 组件总览
│   ├── development.mdx             # 开发指南
│   └── contributing.mdx            # 贡献指南
│
├── general/                        # 通用组件故事
│   └── Button.stories.tsx          # Button 组件文档和故事
│
├── layout/                         # 布局组件故事
│   └── (未来组件).stories.tsx
│
└── navications/                    # 导航组件故事
    └── (未来组件).stories.tsx
```

## 📖 文档分类

### 1. 指南类文档（docs/）

这些文档提供使用 @nw/ui 的各种指南：

| 文件                      | 描述           | Storybook 路径                   |
| ------------------------- | -------------- | -------------------------------- |
| `README.mdx`              | 介绍和特性说明 | `/docs/docs-readme`              |
| `index.mdx`               | 文档导航首页   | `/docs/docs-overview`            |
| `getting-started.mdx`     | 安装和配置指南 | `/docs/docs-getting-started`     |
| `theming.mdx`             | 主题定制指南   | `/docs/docs-theming`             |
| `components-overview.mdx` | 组件列表和状态 | `/docs/docs-components-overview` |
| `development.mdx`         | 本地开发流程   | `/docs/docs-development`         |
| `contributing.mdx`        | 贡献指南       | `/docs/docs-contributing`        |

### 2. 组件文档（general/, layout/, etc.）

每个组件的 `.stories.tsx` 文件包含：

- 组件故事（各种用例）
- Props 文档表格
- CSS API 说明
- 使用示例

## 🎯 文档规范

### MDX 文件结构

```mdx
import { Meta } from '@storybook/blocks';

<Meta title="Docs/Category" />

# 标题

内容...

## 子标题

更多内容...
```

### Stories 文件结构

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Component } from '#ui/component';

/**
 * JSDoc 注释作为组件描述
 */
const meta = {
  title: 'Category/Component',
  component: Component,
  tags: ['autodocs'],
  argTypes: {
    // 参数控制
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 故事的 JSDoc 描述
 */
export const Variant: Story = {
  args: {
    // 参数
  },
};
```

## 🔍 文档内容规范

### 指南类文档应包含

1. **标题和简介** - 清晰说明文档主题
2. **前置要求** - 列出必要的依赖和环境
3. **步骤说明** - 分步骤的指导
4. **代码示例** - 完整的代码示例
5. **常见问题** - FAQ 部分
6. **相关链接** - 相关文档的链接

### 组件文档应包含

1. **组件描述** - JSDoc 注释
2. **使用场景** - 何时使用该组件
3. **Props 表格** - 完整的 Props 说明
4. **基础用法** - Default 故事
5. **各种变体** - 不同配置的故事
6. **CSS API** - 样式相关说明
7. **无障碍性** - ARIA 相关说明

## 📝 命名规范

### 文件命名

- 指南文档：`kebab-case.mdx` (e.g., `getting-started.mdx`)
- 组件故事：`ComponentName.stories.tsx` (e.g., `Button.stories.tsx`)

### 标题命名

- 指南文档：`Docs/xxx` (e.g., `Docs/Getting Started`)
- 组件文档：`Category/ComponentName` (e.g., `General/Button`)

## 🎨 Storybook 配置

### main.ts

配置故事文件位置：

```ts
const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  // ...
};
```

### preview.ts

配置全局参数和装饰器：

```ts
const preview: Preview = {
  parameters: {
    docs: {
      toc: true,
    },
    // ...
  },
  // ...
};
```

## 🚀 查看文档

1. 启动 Storybook：

   ```bash
   pnpm storybook --filter=@nw/ui
   ```

2. 访问 http://localhost:6006

3. 在左侧导航栏查看：
   - **Docs** - 指南类文档
   - **General** - 通用组件
   - **Layout** - 布局组件
   - **Navigations** - 导航组件

## 📦 添加新文档

### 添加指南文档

1. 在 `stories/docs/` 创建新的 `.mdx` 文件
2. 添加 `<Meta>` 标签
3. 编写文档内容

### 添加组件文档

1. 在对应的分类目录创建 `.stories.tsx` 文件
2. 添加 JSDoc 注释
3. 创建各种变体的故事
4. 添加 Props 表格

## 🔄 更新文档

### 更新组件文档

直接修改对应的 `.stories.tsx` 文件。

### 更新指南文档

直接修改 `stories/docs/` 下的 `.mdx` 文件。

## ✅ 文档检查清单

在提交文档更新前，确保：

- [ ] 拼写和语法正确
- [ ] 代码示例可以运行
- [ ] 链接都有效
- [ ] 图片/截图清晰
- [ ] 遵循了文档规范
- [ ] 更新了相关文件

## 📚 相关资源

- [Storybook 文档](https://storybook.js.org/docs)
- [MDX 文档](https://mdxjs.com/)
- [DocBlocks](https://storybook.js.org/docs/api/doc-blocks)
