import { pluginReact } from '@rsbuild/plugin-react';
import { defineConfig } from '@rslib/core';

export default defineConfig({
  lib: [
    {
      format: 'esm',
      dts: true,
      output: {
        distPath: { root: 'dist/esm' },
        minify: false,
      },
    },
    {
      format: 'cjs',
      dts: true,
      output: {
        distPath: { root: 'dist/cjs' },
        minify: false,
      },
    },
  ],
  source: {
    entry: {
      index: './src/index.tsx',
    },
    exclude: [
      '**/stories/**',
      '**/*.stories.*',
      '**/__tests__/**',
      '**/*.test.*',
    ],
  },
  output: {
    target: 'web',
  },
  plugins: [pluginReact()],
});
