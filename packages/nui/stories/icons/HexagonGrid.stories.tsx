import type { Meta, StoryObj } from 'storybook-react-rsbuild';

import { HexagonGrid } from '#ui/icons';

const meta = {
  title: 'Icons/HexagonGrid',
  component: HexagonGrid,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    width: {
      control: { type: 'text' },
      description: 'SVG width',
      table: { defaultValue: { summary: 'undefined' } },
    },
    height: {
      control: { type: 'text' },
      description: 'SVG height',
      table: { defaultValue: { summary: 'undefined' } },
    },
    stopOpacity: {
      control: { type: 'number' },
      description: 'Stop opacity',
      table: { defaultValue: { summary: '0.1' } },
    },
    className: {
      control: { type: 'text' },
      description: 'Custom CSS class name',
    },
    style: {
      control: { type: 'object' },
      description: 'Inline styles',
    },
  },
} satisfies Meta<typeof HexagonGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: '100%',
    height: '100%',
  },
};

export const stopOpacity: Story = {
  args: {
    stopOpacity: 0.2,
  },
};

export const Opacity: Story = {
  args: {
    style: { opacity: 1 },
  },
};

export const DarkBackground: Story = {
  render: args => (
    <div className="bg-background border-foreground relative h-64 overflow-hidden rounded-lg border">
      <HexagonGrid
        className="absolute inset-0 size-full object-cover"
        {...args}
      />
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-foreground text-center">
          <h2 className="text-2xl font-bold">Hero Section</h2>
          <p className="text-foreground mt-1">
            Hexagon grid background decoration
          </p>
        </div>
      </div>
    </div>
  ),
  args: {
    style: { opacity: 1 },
  },
};
