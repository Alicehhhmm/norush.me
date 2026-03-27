import type { Meta, StoryObj } from 'storybook-react-rsbuild';

import { NpmIcon, PnpmIcon, YarnIcon, BunIcon } from '#ui/icons';
import { GitHub, JueJin, Twitter, LinkedIn } from '#ui/icons';
import { HexagonGrid, Kail, Logon } from '#ui/icons';

const meta = {
  title: 'Icons/Overview',
} satisfies Meta;

export default meta;
type Story = StoryObj;

interface IconData {
  name: string;
  component: React.ComponentType<any>;
  category: string;
  defaultSize?: string;
}

const allIcons: IconData[] = [
  // Package Manager Icons
  {
    name: 'NpmIcon',
    component: NpmIcon,
    category: 'Package Manager',
    defaultSize: '32x32',
  },
  {
    name: 'PnpmIcon',
    component: PnpmIcon,
    category: 'Package Manager',
    defaultSize: '32x32',
  },
  {
    name: 'YarnIcon',
    component: YarnIcon,
    category: 'Package Manager',
    defaultSize: '32x32',
  },
  {
    name: 'BunIcon',
    component: BunIcon,
    category: 'Package Manager',
    defaultSize: '32x32',
  },
  // Social Icons
  {
    name: 'GitHub',
    component: GitHub,
    category: 'Social',
    defaultSize: '20x20',
  },
  {
    name: 'JueJin',
    component: JueJin,
    category: 'Social',
    defaultSize: '200x200',
  },
  {
    name: 'Twitter',
    component: Twitter,
    category: 'Social',
    defaultSize: '24x24',
  },
  {
    name: 'LinkedIn',
    component: LinkedIn,
    category: 'Social',
    defaultSize: '24x24',
  },
  // Other Icons
  {
    name: 'HexagonGrid',
    component: HexagonGrid,
    category: 'Other',
  },
  {
    name: 'Kail',
    component: Kail,
    category: 'Other',
  },
  {
    name: 'Logon',
    component: Logon,
    category: 'Other',
  },
];

const IconGrid = ({
  icons,
  iconSize = 32,
  title,
}: {
  icons: IconData[];
  iconSize?: number;
  title?: string;
}) => (
  <section className="bg-card rounded-md border p-6 shadow-2xs">
    <div className="mb-4 flex items-center gap-3">
      <h3 className="text-foreground text-lg font-semibold">{title}</h3>
    </div>
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
      {icons.map(icon => (
        <div
          key={icon.name}
          className="group flex cursor-pointer flex-col items-center gap-1 rounded-md p-2 transition-all  hover:shadow-md"
        >
          <icon.component
            width={iconSize}
            height={iconSize}
            className="text-foreground transition-transform group-hover:scale-110"
          />
          <div className="text-center">
            <div className="text-muted-foreground text-xs font-medium">
              {icon.name}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export const Overview: Story = {
  render: () => {
    return (
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="border-b pb-6">
          <h1 className="text-foreground text-3xl font-bold">Icons Overview</h1>
          <p className="text-muted-foreground mt-2 text-base">@nw/ui/icons</p>
        </div>

        <div className="space-y-4">
          <IconGrid
            title="Package Manager"
            icons={allIcons.filter(i => i.category === 'Package Manager')}
            iconSize={40}
          />
          <IconGrid
            title="Social"
            icons={allIcons.filter(i => i.category === 'Social')}
            iconSize={40}
          />
          <IconGrid
            title="Other"
            icons={allIcons.filter(i => i.category === 'Other')}
            iconSize={40}
          />
        </div>
      </div>
    );
  },
};
