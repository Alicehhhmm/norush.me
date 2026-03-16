import js from '@eslint/js';
import globals from 'globals';
import ts from 'typescript-eslint';
import storybook from 'eslint-plugin-storybook';

export default [
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  js.configs.recommended,
  ...ts.configs.recommended,
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
