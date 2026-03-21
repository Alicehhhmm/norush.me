import type { Meta, StoryObj } from 'storybook-react-rsbuild';
import { Section, Description, Code } from './components';

export default {
  title: 'Design System/Radius',
  parameters: {
    layout: 'padded',
  },
} as Meta;

export const Radius: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-12">
      {/* Radius Sizes */}
      <Section title="圆角尺寸">
        <Description>从细微到强烈的 4 级圆角尺寸</Description>
        <div className="space-y-6">
          {[
            { name: 'none', value: 'rounded-none', css: '0' },
            {
              name: 'sm',
              value: 'rounded-sm',
              css: 'calc(var(--radius) - 4px)',
            },
            {
              name: 'md',
              value: 'rounded-md',
              css: 'calc(var(--radius) - 2px)',
            },
            { name: 'default', value: 'rounded-lg', css: 'var(--radius)' },
            { name: 'full', value: 'rounded-full', css: '9999px' },
          ].map(item => (
            <div key={item.name} className="flex items-center gap-4">
              <div className="flex w-20 flex-col">
                <span className="text-sm font-medium text-neutral-900 dark:text-white">
                  {item.name}
                </span>
                <span className="text-xs text-neutral-500">{item.css}</span>
              </div>
              <div
                className={`flex h-20 w-32 items-center justify-center bg-white shadow ${item.value}`}
              >
                <span className="text-xs text-neutral-600">{item.value}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Radius Tokens */}
      <Section title="圆角令牌">
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
                  计算值
                </th>
                <th className="border-b border-neutral-200 px-4 py-3 text-left font-medium text-neutral-900 dark:border-neutral-800 dark:text-white">
                  使用场景
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  token: '--radius-sm',
                  class: 'rounded-sm',
                  value: 'calc(var(--radius) - 4px)',
                  usage: '小按钮、徽章',
                },
                {
                  token: '--radius-md',
                  class: 'rounded-md',
                  value: 'calc(var(--radius) - 2px)',
                  usage: '输入框、卡片',
                },
                {
                  token: '--radius-lg',
                  class: 'rounded-lg',
                  value: 'var(--radius)',
                  usage: '大卡片、模态框',
                },
                {
                  token: '-',
                  class: 'rounded-full',
                  value: '9999px',
                  usage: '头像、圆形按钮',
                },
              ].map(item => (
                <tr
                  key={item.class}
                  className="border-b border-neutral-100 last:border-0 dark:border-neutral-800/50"
                >
                  <td className="px-4 py-3 font-mono text-neutral-700 dark:text-neutral-300">
                    {item.token}
                  </td>
                  <td className="px-4 py-3">
                    <Code>{item.class}</Code>
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-neutral-500">
                    {item.value}
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

      {/* Theme Configuration */}
      <Section title="主题配置">
        <Description>不同主题的默认圆角配置</Description>
        <div className="overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800">
          <table className="w-full text-sm">
            <thead className="bg-neutral-50 dark:bg-neutral-900">
              <tr>
                <th className="border-b border-neutral-200 px-4 py-3 text-left font-medium text-neutral-900 dark:border-neutral-800 dark:text-white">
                  主题
                </th>
                <th className="border-b border-neutral-200 px-4 py-3 text-left font-medium text-neutral-900 dark:border-neutral-800 dark:text-white">
                  --radius 值
                </th>
                <th className="border-b border-neutral-200 px-4 py-3 text-left font-medium text-neutral-900 dark:border-neutral-800 dark:text-white">
                  风格特点
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-neutral-100 last:border-0 dark:border-neutral-800/50">
                <td className="px-4 py-3 font-medium text-neutral-900 dark:text-white">
                  Claude
                </td>
                <td className="px-4 py-3 font-mono text-neutral-600 dark:text-neutral-400">
                  0.5rem
                </td>
                <td className="px-4 py-3 text-neutral-600 dark:text-neutral-400">
                  标准圆角，平衡美观
                </td>
              </tr>
              <tr className="border-b border-neutral-100 last:border-0 dark:border-neutral-800/50">
                <td className="px-4 py-3 font-medium text-neutral-900 dark:text-white">
                  Fluo
                </td>
                <td className="px-4 py-3 font-mono text-neutral-600 dark:text-neutral-400">
                  0.5rem
                </td>
                <td className="px-4 py-3 text-neutral-600 dark:text-neutral-400">
                  标准圆角，自然风格
                </td>
              </tr>
              <tr className="border-b border-neutral-100 last:border-0 dark:border-neutral-800/50">
                <td className="px-4 py-3 font-medium text-neutral-900 dark:text-white">
                  Warm
                </td>
                <td className="px-4 py-3 font-mono text-neutral-600 dark:text-neutral-400">
                  0.375rem
                </td>
                <td className="px-4 py-3 text-neutral-600 dark:text-neutral-400">
                  较小圆角，精致感
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-neutral-900 dark:text-white">
                  Cool
                </td>
                <td className="px-4 py-3 font-mono text-neutral-600 dark:text-neutral-400">
                  0.5rem
                </td>
                <td className="px-4 py-3 text-neutral-600 dark:text-neutral-400">
                  标准圆角，专业感
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>
    </div>
  ),
};
