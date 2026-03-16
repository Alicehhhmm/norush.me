import { pluginReact } from '@rsbuild/plugin-react';
import { defineConfig } from '@rslib/core';

export default defineConfig({
  lib: [
    { format: 'esm', dts: true, output: { distPath: { root: 'dist/esm' } } },
    { format: 'cjs', dts: true, output: { distPath: { root: 'dist/cjs' } } },
  ],
  source: {
    entry: { index: './src/index.tsx' },
    exclude: ['**/stories/**', '**/*.stories.*', '**/*.test.*', '**/*.spec.*'],
  },
  output: {
    target: 'web',
    sourceMap: true,
  },
  plugins: [pluginReact()],
});
