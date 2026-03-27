import type { Meta, StoryObj } from 'storybook-react-rsbuild';
import { Section, Description } from './components';

export default {
  title: 'Design System/Themes',
  parameters: {
    layout: 'padded',
  },
} as Meta;

export const Themes: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-12">
      {/* Theme Preview */}
      <Section title="预览">
        <Description>所有预设主题的视觉效果展示</Description>
        <div className="grid grid-cols-2 gap-6">
          {[
            { name: 'Fluo Light', value: 'fluo-light' },
            { name: 'Fluo Dark', value: 'fluo-dark' },
            { name: 'Claude Light', value: 'claude-light' },
            { name: 'Claude Dark', value: 'claude-dark' },
            { name: 'Warm Light', value: 'warm-light' },
            { name: 'Warm Dark', value: 'warm-dark' },
            { name: 'Cool Light', value: 'cool-light' },
            { name: 'Cool Dark', value: 'cool-dark' },
          ].map(theme => (
            <div
              key={theme.value}
              data-theme={theme.value}
              className="overflow-hidden rounded-xl border shadow-sm"
              style={{
                borderColor: 'var(--border)',
                backgroundColor: 'var(--background)',
              }}
            >
              <div
                className="border-b px-4 py-3"
                style={{ borderColor: 'var(--border)' }}
              >
                <span
                  className="text-sm font-medium"
                  style={{ color: 'var(--foreground)' }}
                >
                  {theme.name}
                </span>
              </div>
              <div className="p-4">
                <div className="flex gap-2">
                  {[
                    'background',
                    'foreground',
                    'primary',
                    'secondary',
                    'accent',
                    'muted',
                  ].map(color => (
                    <div
                      key={color}
                      className="h-10 w-10 rounded border border-(--border)"
                      style={{ backgroundColor: `var(--${color})` }}
                      title={color}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <div className="py-10"></div>
    </div>
  ),
};
