import type { StorybookConfig } from 'storybook-react-rsbuild';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import { mergeRsbuildConfig } from '@rsbuild/core';

function getAbsolutePath(value: string): any {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
}

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@storybook/addon-themes'),
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('storybook-addon-rslib'),
  ],
  framework: {
    name: getAbsolutePath('storybook-react-rsbuild'),
    options: {},
  },
  async rsbuildFinal(config) {
    const tailwindcssPostcssPlugin = (await import('@tailwindcss/postcss'))
      .default;

    return mergeRsbuildConfig(config, {
      tools: {
        postcss: (opts, { addPlugins }) => {
          addPlugins([tailwindcssPostcssPlugin]);
        },
      },
    });
  },
  typescript: { reactDocgen: false, check: false },
};

export default config;
