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
                <span className="text-sm font-medium text-neutral-900 dark:text-white">
                  {item.name}
                </span>
                <span className="text-xs text-neutral-500">{item.desc}</span>
              </div>
              <div
                className={`flex h-20 w-48 items-center justify-center rounded-lg bg-white ${item.value}`}
              >
                <span className="text-sm text-neutral-600">{item.value}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Usage Examples */}
      <Section title="使用场景">
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-background rounded-lg p-4 shadow">
            <p className="text-sm font-medium text-neutral-900 dark:text-white">
              标准卡片
            </p>
            <p className="text-xs text-neutral-500">shadow</p>
          </div>
          <div className="bg-background rounded-md p-4 shadow-md">
            <p className="text-sm font-medium text-neutral-900 dark:text-white">
              下拉菜单
            </p>
            <p className="text-xs text-neutral-500">shadow-md</p>
          </div>
          <div className="bg-background rounded-lg p-4 shadow-lg">
            <p className="text-sm font-medium text-neutral-900 dark:text-white">
              悬浮卡片
            </p>
            <p className="text-xs text-neutral-500">shadow-lg</p>
          </div>
          <div className="bg-background rounded-lg p-4 shadow-xl">
            <p className="text-sm font-medium text-neutral-900 dark:text-white">
              模态框
            </p>
            <p className="text-xs text-neutral-500">shadow-xl</p>
          </div>
          <div className="bg-background shadow-3dcard rounded-lg p-4">
            <p className="text-sm font-medium text-neutral-900 dark:text-white">
              3D Card
            </p>
            <p className="text-xs text-neutral-500">shadow-3dcard</p>
          </div>
        </div>
      </Section>

      {/* Shadow Tokens */}
      <Section title="阴影令牌">
        <div className="overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800">
          <table className="w-full text-sm">
            <thead className="bg-neutral-50 dark:bg-neutral-900">
              <tr>
                <th className="border-b border-neutral-200 px-4 py-3 text-left font-medium text-neutral-900 dark:border-neutral-800 dark:text-white">
                  Token
                </th>
                <th className="border-b border-neutral-200 px-4 py-3 text-left font-medium text-neutral-900 dark:border-neutral-800 dark:text-white">
                  CSS 类名
                </th>
                <th className="border-b border-neutral-200 px-4 py-3 text-left font-medium text-neutral-900 dark:border-neutral-800 dark:text-white">
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
                  className="border-b border-neutral-100 last:border-0 dark:border-neutral-800/50"
                >
                  <td className="px-4 py-3 font-mono text-neutral-700 dark:text-neutral-300">
                    {item.token}
                  </td>
                  <td className="px-4 py-3">
                    <Code>{item.class}</Code>
                  </td>
                  <td className="px-4 py-3 text-neutral-600 dark:text-neutral-400">
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
