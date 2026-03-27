import type { Meta, StoryObj } from 'storybook-react-rsbuild';

import { CelebrationEffect } from '#ui/special-effects';

const meta = {
  title: 'Special Effects/CelebrationEffect',
  component: CelebrationEffect,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    particleCount: {
      control: { type: 'range', min: 20, max: 100, step: 5 },
      description: '粒子数量',
      table: { defaultValue: { summary: '60' } },
    },
    explosionForce: {
      control: { type: 'range', min: 5, max: 30, step: 1 },
      description: '爆炸力度',
      table: { defaultValue: { summary: '15' } },
    },
    colors: { control: { type: 'object' }, description: '颜色池' },
  },
} satisfies Meta<typeof CelebrationEffect>;

export default meta;
type Story = StoryObj<typeof meta>;

const Preview = (args: any) => (
  <div className="bg-background relative h-96 overflow-hidden rounded-lg border">
    <CelebrationEffect {...args} />
    <div className="bg-accent text-muted-foreground absolute top-0 left-0 rounded px-2 py-3 text-sm">
      On Click to trigger
    </div>
  </div>
);

export const Default: Story = {
  render: Preview,
  args: { particleCount: 60, explosionForce: 15 },
};

export const Soft: Story = {
  render: Preview,
  args: { particleCount: 30, explosionForce: 10 },
};

export const Intense: Story = {
  render: Preview,
  args: { particleCount: 80, explosionForce: 20 },
};

export const Pink: Story = {
  render: Preview,
  args: {
    particleCount: 50,
    explosionForce: 12,
    colors: ['#ff6b9d', '#ff8fa8', '#ffb3c6'],
  },
};
