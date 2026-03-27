import type { Meta, StoryObj } from 'storybook-react-rsbuild';

import { NpmIcon, PnpmIcon, YarnIcon, BunIcon } from '#ui/icons';

const meta = {
  title: 'Icons/Package Manager',
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: () => (
    <div className="grid grid-cols-4 gap-4">
      <NpmIcon width={64} height={64} />
      <PnpmIcon width={64} height={64} />
      <YarnIcon width={64} height={64} />
      <BunIcon width={64} height={64} />
    </div>
  ),
};
