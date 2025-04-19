/** @type import("prettier").Config} */
export default {
  $schema: 'https://json.schemastore.org/prettierrc',
  semi: true,
  tabWidth: 2,
  singleQuote: true,
  printWidth: 80,
  trailingComma: 'all',
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  overrides: [
    {
      files: ['**/*.astro'],
      options: {
        parser: 'astro',
      },
    },
  ],
};
