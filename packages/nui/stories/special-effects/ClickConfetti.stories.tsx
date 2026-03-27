import type { Meta, StoryObj } from 'storybook-react-rsbuild';
import { useState } from 'react';

import { ClickConfetti } from '#ui/special-effects';

const meta = {
  title: 'Special Effects/ClickConfetti',
  component: ClickConfetti,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    effectType: {
      control: { type: 'radio' },
      options: ['confetti', 'unicode'],
      description: '效果类型',
      table: { defaultValue: { summary: 'confetti' } },
    },
    particleCount: {
      control: { type: 'range', min: 10, max: 100, step: 5 },
      description: '粒子数量',
      table: { defaultValue: { summary: '30' } },
    },
    colors: { control: { type: 'object' }, description: '颜色池' },
  },
} satisfies Meta<typeof ClickConfetti>;

export default meta;
type Story = StoryObj<typeof meta>;

const Preview = (args: any) => (
  <div className="bg-background relative h-96 overflow-hidden rounded-lg border">
    <ClickConfetti {...args} />
    <div className="bg-accent text-muted-foreground absolute top-0 left-0 rounded px-2 py-3 text-sm">
      On Click to trigger
    </div>
  </div>
);

export const Default: Story = {
  render: Preview,
  args: { effectType: 'confetti', particleCount: 30 },
};

export const Unicode: Story = {
  render: Preview,
  args: {
    effectType: 'unicode',
    particleCount: 25,
    unicodeShapes: ['✦', '❋', '✻', '❄', '❁'],
  },
};

export const UnicodeIcon: Story = {
  render: Preview,
  args: {
    effectType: 'unicode',
    particleCount: 25,
    unicodeShapes: ['🎉', '🎁', '🎈', '🎁', '🎁'],
  },
};

export const Celebration: Story = {
  render: Preview,
  args: {
    particleCount: 50,
    colors: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeead'],
  },
};
