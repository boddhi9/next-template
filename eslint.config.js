import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import typescriptEslintParser from '@typescript-eslint/parser';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat();

const config = [
    ...compat.extends('next', 'next/core-web-vitals', 'prettier'),
    {
      files: ['**/*.ts', '**/*.tsx'],
      languageOptions: {
        parser: typescriptEslintParser,
        parserOptions: {
          ecmaVersion: 'latest',
          sourceType: 'module',
          ecmaFeatures: { jsx: true },
        },
      },
      plugins: {
        '@typescript-eslint': typescriptEslintPlugin,
      },
      rules: {
        '@typescript-eslint/no-unused-expressions': [
          'error',
          {
            allowShortCircuit: true,
            allowTernary: true,
            allowTaggedTemplates: true,
          },
        ],
      },
    },
  ]
export default config;
