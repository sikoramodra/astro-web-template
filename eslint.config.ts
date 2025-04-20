import globals from 'globals';
import js from '@eslint/js';
import ts from 'typescript-eslint';
import astro from 'eslint-plugin-astro';
import astroParser from 'astro-eslint-parser';
import prettier from 'eslint-plugin-prettier';
import * as pluginImportX from 'eslint-plugin-import-x';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default ts.config(
  js.configs.recommended,
  // eslint-disable-next-line import-x/no-named-as-default-member
  ts.configs.recommended,
  // eslint-disable-next-line import-x/no-named-as-default-member
  astro.configs.recommended,
  pluginImportX.flatConfigs.recommended,
  pluginImportX.flatConfigs.typescript,
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
  },
  {
    plugins: { 'prettier': prettier, 'simple-import-sort': simpleImportSort },
  },
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        // eslint-disable-next-line import-x/no-named-as-default-member
        parser: ts.parser,
        extraFileExtensions: ['.astro'],
        sourceType: 'module',
        ecmaVersion: 'latest',
        project: './tsconfig.json',
      },
    },
    // rules: {
    //   "no-undef": "off", // Disable "not defined" errors for specific Astro types that are globally available (ImageMetadata)
    // },
  },
  {
    ignores: ['dist/**', '**/*.d.ts', '.github/'],
  },
);
