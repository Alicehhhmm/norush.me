import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { mergeRsbuildConfig } from '@rsbuild/core';
import type { StorybookConfig } from 'storybook-react-rsbuild';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
const getAbsolutePath = (value: string): any => {
  return resolve(
    fileURLToPath(
      new URL(import.meta.resolve(`${value}/package.json`, import.meta.url))
    ),
    '..'
  );
};

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-onboarding',
    {
      name: getAbsolutePath('storybook-addon-rslib'),
    },
  ],
  framework: {
    name: getAbsolutePath('storybook-react-rsbuild'),
    options: {},
  },
  async rsbuildFinal(config) {
    // 根据 Tailwind CSS Rspack 指南配置，使用 ES 模块兼容方式
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
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    check: true,
  },
};

export default config;
