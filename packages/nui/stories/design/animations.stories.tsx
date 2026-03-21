import type { Meta, StoryObj } from 'storybook-react-rsbuild';
import { Section, Description, Code } from './components';

export default {
  title: 'Design System/Animations',
  parameters: {
    layout: 'padded',
  },
} as Meta;

export const Animations: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-12">
      {/* Surf Animation */}
      <Section title="Surf 浮动动画">
        <Description>柔和的上下浮动效果，适用于图标、装饰元素</Description>
        <div className="flex items-center gap-6">
          <div className="animate-surf flex h-16 w-16 items-center justify-center rounded-lg bg-green-500 text-white">
            <svg
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </div>
          <div>
            <Code>animate-surf</Code>
            <p className="mt-1 text-xs text-neutral-500">
              1s infinite ease-in-out
            </p>
          </div>
        </div>
      </Section>

      {/* Pulse Animation */}
      <Section title="Pulse 脉冲动画">
        <Description>脉冲呼吸效果，适用于加载状态、活动指示器</Description>
        <div className="flex items-center gap-6">
          <div className="h-16 w-16 animate-pulse rounded-full bg-green-500" />
          <div>
            <Code>animate-pulse</Code>
            <p className="mt-1 text-xs text-neutral-500">
              500ms infinite alternate
            </p>
          </div>
        </div>
      </Section>

      {/* Dot Move Animation */}
      <Section title="Dot Move 三点加载">
        <Description>三点波浪加载动画，适用于页面加载、数据请求</Description>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1">
            <div className="animate-surf h-3 w-3 rounded-full bg-neutral-400" />
            <div
              className="animate-surf h-3 w-3 rounded-full bg-neutral-400"
              style={{ animationDelay: '200ms' }}
            />
            <div
              className="animate-surf h-3 w-3 rounded-full bg-neutral-400"
              style={{ animationDelay: '400ms' }}
            />
          </div>
          <div>
            <Code>animation-delay: 0/200/400ms</Code>
            <p className="mt-1 text-xs text-neutral-500">
              1.2s infinite ease-in-out
            </p>
          </div>
        </div>
      </Section>

      {/* Slide Animations */}
      <Section title="Slide 滑动动画">
        <Description>滑入滑出效果，适用于面板展开、内容切换</Description>
        <div className="flex gap-4">
          <div className="animate-slide-to-left flex h-16 w-32 items-center justify-center rounded-lg bg-blue-500 text-white">
            Slide Left
          </div>
          <div className="animate-slide-to-right flex h-16 w-32 items-center justify-center rounded-lg bg-purple-500 text-white">
            Slide Right
          </div>
        </div>
        <div className="mt-2 flex gap-2">
          <Code>animate-slide-to-left</Code>
          <Code>animate-slide-to-right</Code>
        </div>
      </Section>

      {/* Animation Properties */}
      <Section title="动画属性">
        <div className="overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800">
          <table className="w-full text-sm">
            <thead className="bg-neutral-50 dark:bg-neutral-900">
              <tr>
                <th className="border-b border-neutral-200 px-4 py-3 text-left font-medium text-neutral-900 dark:border-neutral-800 dark:text-white">
                  动画名称
                </th>
                <th className="border-b border-neutral-200 px-4 py-3 text-left font-medium text-neutral-900 dark:border-neutral-800 dark:text-white">
                  持续时间
                </th>
                <th className="border-b border-neutral-200 px-4 py-3 text-left font-medium text-neutral-900 dark:border-neutral-800 dark:text-white">
                  迭代方式
                </th>
                <th className="border-b border-neutral-200 px-4 py-3 text-left font-medium text-neutral-900 dark:border-neutral-800 dark:text-white">
                  使用场景
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: 'surf',
                  duration: '1s',
                  timing: 'infinite ease-in-out',
                  usage: '浮动图标、装饰元素',
                },
                {
                  name: 'pulse',
                  duration: '500ms',
                  timing: 'infinite alternate',
                  usage: '加载状态、活动指示器',
                },
                {
                  name: 'dot-move',
                  duration: '1.2s',
                  timing: 'infinite ease-in-out',
                  usage: '三点加载动画',
                },
                {
                  name: 'slide-to-left',
                  duration: '300ms',
                  timing: 'ease-in-out',
                  usage: '向左滑入',
                },
                {
                  name: 'slide-to-right',
                  duration: '300ms',
                  timing: 'ease-in-out',
                  usage: '向右滑入',
                },
              ].map(item => (
                <tr
                  key={item.name}
                  className="border-b border-neutral-100 last:border-0 dark:border-neutral-800/50"
                >
                  <td className="px-4 py-3 font-mono text-neutral-700 dark:text-neutral-300">
                    {item.name}
                  </td>
                  <td className="px-4 py-3 text-neutral-600 dark:text-neutral-400">
                    {item.duration}
                  </td>
                  <td className="px-4 py-3 text-neutral-600 dark:text-neutral-400">
                    {item.timing}
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
