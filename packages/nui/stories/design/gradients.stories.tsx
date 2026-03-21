import type { Meta, StoryObj } from 'storybook-react-rsbuild';

import { Section, Description, Code } from './components';

export default {
  title: 'Design System/Gradients',
  parameters: {
    layout: 'padded',
  },
} as Meta;

export const Gradients: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-12">
      {/* Background Gradients */}
      <Section title="背景渐变">
        <Description>使用 Tailwind CSS 工具类应用的渐变效果</Description>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {[
            {
              name: 'Radial',
              class: 'bg-gradient-radial',
              from: 'from-green-400',
              to: 'to-transparent',
            },
            { name: 'Fluo', class: 'bg-gradient-fluo', from: '', to: '' },
            { name: 'Fluo TR', class: 'bg-gradient-fluo-tr', from: '', to: '' },
            { name: 'Subtle', class: 'bg-gradient-subtle', from: '', to: '' },
            {
              name: 'Subtle Dark',
              class: 'bg-gradient-subtle-dark',
              from: '',
              to: '',
            },
            {
              name: 'Subtle Gray',
              class: 'bg-gradient-subtle-gray',
              from: '',
              to: '',
            },
            {
              name: 'Glow',
              class: 'bg-gradient-glow-backdrop',
              from: '',
              to: '',
            },
          ].map(item => (
            <div key={item.name} className="flex flex-col gap-2">
              <div
                className={`flex h-24 items-center justify-center rounded-lg ${item.class} ${item.from} ${item.to} text-white`}
              >
                <span className="text-xs font-medium">{item.name}</span>
              </div>
              <Code>{item.class}</Code>
            </div>
          ))}
        </div>
      </Section>

      {/* Multi-color Gradients */}
      <Section title="多色渐变">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
          {[
            {
              name: 'Three Colors',
              class: 'bg-gradient-four-c3',
              desc: '三色渐变',
            },
            {
              name: 'Four Colors',
              class: 'bg-gradient-four-c4',
              desc: '四色渐变',
            },
            {
              name: 'Article Cover',
              class: 'bg-gradient-article-cover',
              desc: '文章封面',
            },
          ].map(item => (
            <div key={item.name} className="flex flex-col gap-2">
              <div
                className={`flex h-24 items-center justify-center rounded-lg ${item.class} text-white`}
              >
                <div className="text-center">
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-xs opacity-70">{item.desc}</p>
                </div>
              </div>
              <Code>{item.class}</Code>
            </div>
          ))}
        </div>
      </Section>

      {/* Gradient Tokens */}
      <Section title="渐变令牌">
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
                  描述
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  token: '--background-image-gradient-radial',
                  class: 'bg-gradient-radial',
                  desc: '径向渐变',
                },
                {
                  token: '--background-image-gradient-subtle',
                  class: 'bg-gradient-subtle',
                  desc: '微妙渐变（亮色）',
                },
                {
                  token: '--background-image-gradient-subtle-dark',
                  class: 'bg-gradient-subtle-dark',
                  desc: '微妙渐变（暗色）',
                },
                {
                  token: '--background-image-gradient-fluo',
                  class: 'bg-gradient-fluo',
                  desc: 'Fluo 垂直渐变',
                },
                {
                  token: '--background-image-gradient-fluo-tr',
                  class: 'bg-gradient-fluo-tr',
                  desc: 'Fluo 横向渐变',
                },
                {
                  token: '--background-image-gradient-glow-backdrop',
                  class: 'bg-gradient-glow-backdrop',
                  desc: '光晕背景',
                },
                {
                  token: '--background-image-gradient-four-c3',
                  class: 'bg-gradient-four-c3',
                  desc: '三色渐变',
                },
                {
                  token: '--background-image-gradient-four-c4',
                  class: 'bg-gradient-four-c4',
                  desc: '四色渐变',
                },
              ].map(item => (
                <tr
                  key={item.class}
                  className="border-b border-neutral-100 last:border-0 dark:border-neutral-800/50"
                >
                  <td className="px-4 py-2 font-mono text-xs text-neutral-600 dark:text-neutral-400">
                    {item.token}
                  </td>
                  <td className="px-4 py-3">
                    <Code>{item.class}</Code>
                  </td>
                  <td className="px-4 py-3 text-neutral-600 dark:text-neutral-400">
                    {item.desc}
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
