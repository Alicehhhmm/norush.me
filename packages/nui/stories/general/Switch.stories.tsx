import Switch from '#ui/Switch';

import type { Meta as MetaObj, StoryObj } from 'storybook-react-rsbuild';

type Story = StoryObj<typeof Switch>;
type Meta = MetaObj<typeof Switch>;

export const WithLabel: Story = {
  args: {
    label: 'Enable Feature',
  },
};

export const WithoutLabel: Story = {};

export default {
  component: Switch,
  parameters: {
    layout: 'centered',
  },
} as Meta;
