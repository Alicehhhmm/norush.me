import type { Meta, StoryObj } from 'storybook-react-rsbuild';

import { GitHub, JueJin, Twitter, LinkedIn } from '#ui/icons';

const meta = {
  title: 'Icons/Social',
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: () => (
    <div className="grid grid-cols-4 gap-4">
      <GitHub width={64} height={64} />
      <JueJin width={64} height={64} />
      <Twitter width={64} height={64} />
      <LinkedIn width={64} height={64} />
    </div>
  ),
};
