import { pluginReact } from '@rsbuild/plugin-react';
import { defineConfig } from '@rslib/core';

export default defineConfig({
  lib: [
    { format: 'esm', dts: true, output: { distPath: { root: 'dist/esm' } } },
    { format: 'cjs', dts: true, output: { distPath: { root: 'dist/cjs' } } },
  ],
  resolve: {
    conditionNames: ['rolldown', '...'],
  },
  source: {
    entry: { index: './src/index.ts' },
    exclude: ['**/stories/**', '**/*.stories.*', '**/*.test.*', '**/*.spec.*'],
  },
  output: {
    target: 'web',
    sourceMap: true,
    emitAssets: true,
  },
  plugins: [pluginReact()],
});
