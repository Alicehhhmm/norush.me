import { pluginReact } from '@rsbuild/plugin-react';
import { defineConfig } from '@rslib/core';
import type { RsbuildPlugin } from '@rsbuild/core';

/**
 * 样式文件复制插件
 * 将 src/styles 目录的 CSS 文件复制到 dist 目录
 */
function pluginStylesCopy(): RsbuildPlugin {
  return {
    name: 'plugin-styles-copy',
    setup(api) {
      api.onAfterBuild(async () => {
        const fs = await import('fs');
        const path = await import('path');

        const srcStylesDir = path.join(process.cwd(), 'src', 'styles');
        const distEsmStylesDir = path.join(
          process.cwd(),
          'dist',
          'esm',
          'styles'
        );
        const distCjsStylesDir = path.join(
          process.cwd(),
          'dist',
          'cjs',
          'styles'
        );

        // 创建目标目录
        if (!fs.existsSync(distEsmStylesDir)) {
          fs.mkdirSync(distEsmStylesDir, { recursive: true });
        }
        if (!fs.existsSync(distCjsStylesDir)) {
          fs.mkdirSync(distCjsStylesDir, { recursive: true });
        }

        // 复制 CSS 文件
        if (fs.existsSync(srcStylesDir)) {
          const files = fs.readdirSync(srcStylesDir);
          files.forEach(file => {
            if (file.endsWith('.css')) {
              const srcFile = path.join(srcStylesDir, file);
              const esmDest = path.join(distEsmStylesDir, file);
              const cjsDest = path.join(distCjsStylesDir, file);
              fs.copyFileSync(srcFile, esmDest);
              fs.copyFileSync(srcFile, cjsDest);
            }
          });
        }
      });
    },
  };
}

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
    // 保留 CSS 文件
    emitAssets: true,
  },
  plugins: [pluginReact(), pluginStylesCopy()],
});
