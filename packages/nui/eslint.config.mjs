import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import globals from 'globals';
import ts from 'typescript-eslint';
import storybook from 'eslint-plugin-storybook';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.nodeBuiltin,
      },
    },
  },
  js.configs.recommended,
  ...ts.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: ts.parser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
    },
  },
  {
    ignores: [
      'dist/',
      'node_modules/',
      '**/*.d.ts',
      'coverage/',
      '.turbo/',
      '*.config.*',
      '.storybook/**/*',
      'vitest.setup.ts',
      'storybook-static/**/*',
      '**/*.stories.*',
    ],
  },
  ...storybook.configs['flat/recommended'],
  {
    files: ['**/*.stories.*'],
    rules: {
      'storybook/no-renderer-packages': 'off',
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
    },
  },
];
