import { defineConfig } from 'eslint/config';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

export default defineConfig([
  {
    ignores: [
      'build/',
      'node_modules/',
      '.cache/',
      'public/',
      '.netlify/',
      'src/gatsby-types.d.ts',
    ],
  },
  ...compat.extends('eslint:recommended'),
  ...compat.extends('plugin:@typescript-eslint/recommended'),
  ...compat.extends('plugin:react/recommended'),
  ...compat.extends('plugin:prettier/recommended'),
  {
    settings: {
      react: {
        version: '18.3',
      },
    },
    rules: {
      'react/prop-types': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
      'prettier/prettier': 'error',
    },
  },
  {
    files: ['gatsby-browser.ts', 'gatsby-config.ts', 'gatsby-node.ts'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  {
    files: ['netlify/functions/**/*.ts', 'netlify/functions/**/*.mts'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  {
    files: [
      'src/templates/**/*.tsx',
      'src/components/Seo.tsx',
      'src/components/Layout/index.tsx',
      'src/components/RelatedPosts/index.tsx',
      'src/pages/blog.tsx',
      'src/pages/dicas.tsx',
      'src/pages/projetos.tsx',
      'src/pages/viagens.tsx',
    ],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      'react/no-danger': 'off',
    },
  },
]);
