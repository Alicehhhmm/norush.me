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
                <span className="text-foreground text-sm font-medium">
                  {item.name}
                </span>
                <span className="text-muted-foreground text-xs">
                  {item.css}
                </span>
              </div>
              <div
                className={`bg-background flex h-20 w-32 items-center justify-center shadow ${item.value} border-border border`}
              >
                <span className="text-muted-foreground text-xs">
                  {item.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Radius Tokens */}
      <Section title="圆角令牌">
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
                  计算值
                </th>
                <th className="border-border text-foreground border-b px-4 py-3 text-left font-medium">
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
                  className="border-border/50 border-b last:border-0"
                >
                  <td className="text-foreground/70 px-4 py-3 font-mono">
                    {item.token}
                  </td>
                  <td className="px-4 py-3">
                    <Code>{item.class}</Code>
                  </td>
                  <td className="text-muted-foreground px-4 py-3 font-mono text-xs">
                    {item.value}
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

      {/* Theme Configuration */}
      <Section title="主题配置">
        <Description>不同主题的默认圆角配置</Description>
        <div className="border-border bg-background overflow-hidden rounded-lg border">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="border-border text-foreground border-b px-4 py-3 text-left font-medium">
                  主题
                </th>
                <th className="border-border text-foreground border-b px-4 py-3 text-left font-medium">
                  --radius 值
                </th>
                <th className="border-border text-foreground border-b px-4 py-3 text-left font-medium">
                  风格特点
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-border/50 border-b last:border-0">
                <td className="text-foreground px-4 py-3 font-medium">
                  Claude
                </td>
                <td className="text-muted-foreground px-4 py-3 font-mono">
                  0.5rem
                </td>
                <td className="text-muted-foreground px-4 py-3">
                  标准圆角，平衡美观
                </td>
              </tr>
              <tr className="border-border/50 border-b last:border-0">
                <td className="text-foreground px-4 py-3 font-medium">Fluo</td>
                <td className="text-muted-foreground px-4 py-3 font-mono">
                  0.5rem
                </td>
                <td className="text-muted-foreground px-4 py-3">
                  标准圆角，自然风格
                </td>
              </tr>
              <tr className="border-border/50 border-b last:border-0">
                <td className="text-foreground px-4 py-3 font-medium">Warm</td>
                <td className="text-muted-foreground px-4 py-3 font-mono">
                  0.375rem
                </td>
                <td className="text-muted-foreground px-4 py-3">
                  较小圆角，精致感
                </td>
              </tr>
              <tr>
                <td className="text-foreground px-4 py-3 font-medium">Cool</td>
                <td className="text-muted-foreground px-4 py-3 font-mono">
                  0.5rem
                </td>
                <td className="text-muted-foreground px-4 py-3">
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
