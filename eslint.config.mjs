import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import playwright from 'eslint-plugin-playwright';

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ...playwright.configs['flat/recommended'],
    files: ['src/**', 'tests/**'],
    rules: {
      ...playwright.configs['flat/recommended'].rules,
    },
  },
  {
    ignores: ['**/node_modules/', '**/dist/'],
  },
];
