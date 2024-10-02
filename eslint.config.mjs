import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import playwright from 'eslint-plugin-playwright';
import globals from 'globals';

export default [
  {
    ...playwright.configs['flat/recommended'],
    files: ['src/**', 'tests/**'],
    ignores: ['**/node_modules/', '**/dist/'],
  },
  {
    plugins: {
      '@typescript-eslint': typescriptEslint,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },

      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },

    rules: {},
  },
];
