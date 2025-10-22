import tsParser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist', 'node_modules', '.vite']),

  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-undef': 'off',
      quotes: ['error', 'single', { avoidEscape: true }],
      indent: ['error', 2],
      'jsx-quotes': ['error', 'prefer-double'],
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          tabWidth: 2,
          trailingComma: 'es5',
          semi: true,
          endOfLine: 'auto',
        },
      ],
    },
  },

  // JS / JSX файлы
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      quotes: ['error', 'single', { avoidEscape: true }],
      indent: ['error', 2],
      'jsx-quotes': ['error', 'prefer-double'],
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          tabWidth: 2,
          trailingComma: 'es5',
          semi: true,
          endOfLine: 'auto',
        },
      ],
      'comma-dangle': 'off',
    },
  },

  {
    files: ['**/*.json'],
    rules: {
      quotes: 'off',
      indent: ['error', 2],
    },
  },
]);
