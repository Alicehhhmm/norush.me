import js from '@eslint/js';
import globals from 'globals';
import ts from 'typescript-eslint';
import storybook from 'eslint-plugin-storybook';

export default [
  { languageOptions: { globals: globals.browser } },
  js.configs.recommended,
  ...ts.configs.recommended,
  { ignores: ['dist/'] },
  storybook.configs['flat/recommended'],
];
