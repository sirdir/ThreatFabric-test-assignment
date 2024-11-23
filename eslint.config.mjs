import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: ['**/playwright-report/*', '**/test-results/*', '.husky/*'],
  },
  ...compat.extends(
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:playwright/playwright-test',
    'plugin:prettier/recommended',
    'prettier',
  ),
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        $: true,
        $$: true,
        page: true,
      },

      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',

      parserOptions: {
        project: './tsconfig.json',
      },
    },

    rules: {
      'prettier/prettier': 'error',
      'comma-dangle': ['error', 'only-multiline'],
      indent: [
        'error',
        2,
        {
          SwitchCase: 1,
        },
      ],

      quotes: [
        'error',
        'single',
        {
          avoidEscape: true,
          allowTemplateLiterals: true,
        },
      ],

      semi: ['error', 'always'],

      'function-call-argument-newline': ['error', 'consistent'],
      eqeqeq: ['error', 'always'],
      curly: ['error', 'all'],
      'constructor-super': ['error'],
      'no-var': ['error'],
      'spaced-comment': ['error', 'always'],
    },
  },
];
