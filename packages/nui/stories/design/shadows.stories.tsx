import type { Meta, StoryObj } from 'storybook-react-rsbuild';

import { Section, Description, Code } from './components';

export default {
  title: 'Design System/Shadows',
  parameters: {
    layout: 'padded',
  },
} as Meta;

export const Shadows: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-12">
      {/* Shadow Levels */}
      <Section title="阴影等级">
        <Description>从细微到强烈的 6 级阴影</Description>
        <div className="space-y-6">
          {[
            { name: '2xs', value: 'shadow-2xs', desc: '最细微' },
            { name: 'xs', value: 'shadow-xs', desc: '非常细微' },
            { name: 'sm', value: 'shadow-sm', desc: '小' },
            { name: 'default', value: 'shadow', desc: '标准' },
            { name: 'md', value: 'shadow-md', desc: '中等' },
            { name: 'lg', value: 'shadow-lg', desc: '大' },
            { name: 'xl', value: 'shadow-xl', desc: '超大' },
            { name: '2xl', value: 'shadow-2xl', desc: '最强' },
          ].map(item => (
            <div key={item.name} className="flex items-center gap-4">
              <div className="flex w-20 flex-col">
                <span className="text-foreground text-sm font-medium">
                  {item.name}
                </span>
                <span className="text-muted-foreground text-xs">
                  {item.desc}
                </span>
              </div>
              <div
                className={`bg-background border-border flex h-20 w-48 items-center justify-center rounded-lg border ${item.value}`}
              >
                <span className="text-muted-foreground text-sm">
                  {item.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Usage Examples */}
      <Section title="使用场景">
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-background border-border rounded-lg border p-4 shadow">
            <p className="text-foreground text-sm font-medium">标准卡片</p>
            <p className="text-muted-foreground text-xs">shadow</p>
          </div>
          <div className="bg-background border-border rounded-md border p-4 shadow-md">
            <p className="text-foreground text-sm font-medium">下拉菜单</p>
            <p className="text-muted-foreground text-xs">shadow-md</p>
          </div>
          <div className="bg-background border-border rounded-lg border p-4 shadow-lg">
            <p className="text-foreground text-sm font-medium">悬浮卡片</p>
            <p className="text-muted-foreground text-xs">shadow-lg</p>
          </div>
          <div className="bg-background border-border rounded-lg border p-4 shadow-xl">
            <p className="text-foreground text-sm font-medium">模态框</p>
            <p className="text-muted-foreground text-xs">shadow-xl</p>
          </div>
          <div className="bg-background shadow-3dcard border-border rounded-lg border p-4">
            <p className="text-foreground text-sm font-medium">3D Card</p>
            <p className="text-muted-foreground text-xs">shadow-3dcard</p>
          </div>
        </div>
      </Section>

      {/* Shadow Tokens */}
      <Section title="阴影令牌">
        <div className="border-border bg-background overflow-hidden rounded-lg border">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="border-border text-foreground border-b px-4 py-3 text-left font-medium">
                  Token
                </th>
                <th className="border-border text-foreground border-b px-4 py-3 text-left font-medium">
                  CSS 类名
                </th>
                <th className="border-border text-foreground border-b px-4 py-3 text-left font-medium">
                  使用场景
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  token: '--shadow-2xs',
                  class: 'shadow-2xs',
                  usage: '极细微的边界分离',
                },
                {
                  token: '--shadow-xs',
                  class: 'shadow-xs',
                  usage: '轻微的层次分离',
                },
                {
                  token: '--shadow-sm',
                  class: 'shadow-sm',
                  usage: '小组件、按钮',
                },
                { token: '--shadow', class: 'shadow', usage: '标准卡片、容器' },
                {
                  token: '--shadow-md',
                  class: 'shadow-md',
                  usage: '下拉菜单、弹出层',
                },
                {
                  token: '--shadow-lg',
                  class: 'shadow-lg',
                  usage: '悬浮卡片、导航',
                },
                {
                  token: '--shadow-xl',
                  class: 'shadow-xl',
                  usage: '模态框、侧边栏',
                },
                {
                  token: '--shadow-2xl',
                  class: 'shadow-2xl',
                  usage: '强强调元素',
                },
              ].map(item => (
                <tr
                  key={item.token}
                  className="border-border/50 border-b last:border-0"
                >
                  <td className="text-foreground/70 px-4 py-3 font-mono">
                    {item.token}
                  </td>
                  <td className="px-4 py-3">
                    <Code>{item.class}</Code>
                  </td>
                  <td className="text-muted-foreground px-4 py-3">
                    {item.usage}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
    </div>
  ),
};
