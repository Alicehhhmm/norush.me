import type { Meta, StoryObj } from 'storybook-react-rsbuild';

import { RectangleGrid } from '#ui/special-effects';

const meta = {
  title: 'Special Effects/RectangleGrid',
  component: RectangleGrid,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    smallGridSize: {
      control: { type: 'range', min: 10, max: 50, step: 5 },
      description: '小网格尺寸',
      table: { defaultValue: { summary: '20' } },
    },
    gridCount: {
      control: { type: 'range', min: 3, max: 10, step: 1 },
      description: '大网格倍数',
      table: { defaultValue: { summary: '5' } },
    },
    smallColor: { control: { type: 'color' }, description: '小网格颜色' },
    largeColor: { control: { type: 'color' }, description: '大网格颜色' },
    smallStroke: {
      control: { type: 'range', min: 0.1, max: 2, step: 0.1 },
      description: '小网格线宽',
    },
    largeStroke: {
      control: { type: 'range', min: 0.1, max: 2, step: 0.1 },
      description: '大网格线宽',
    },
  },
} satisfies Meta<typeof RectangleGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    smallColor: 'rgba(255,255,255,0.15)',
    largeColor: 'rgba(255,255,255,0.25)',
    style: { height: '400px', background: '#1a1a1a' },
  },
};

export const LightTheme: Story = {
  args: {
    smallColor: 'rgba(0,0,0,0.1)',
    largeColor: 'rgba(0,0,0,0.25)',
    style: { height: '400px', background: '#ffffff' },
  },
};

export const Example: Story = {
  render: args => (
    <div className="bg-background h-64 overflow-hidden rounded-md">
      <RectangleGrid
        {...args}
        style={{ height: '100%' }}
        className="bg-background dark:bg-fluo-background size-full"
      />
    </div>
  ),
  args: {
    smallColor: 'rgba(255,255,255,0.15)',
    largeColor: 'rgba(255,255,255,0.25)',
    style: { height: '400px', background: '#1a1a1a' },
  },
};
