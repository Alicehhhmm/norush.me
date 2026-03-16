import type { StorybookConfig } from 'storybook-react-rsbuild';

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-onboarding',
    'storybook-addon-rslib',
  ],
  framework: {
    name: 'storybook-react-rsbuild',
    options: {},
  },
  typescript: { reactDocgen: 'react-docgen-typescript' },
};

export default config;
