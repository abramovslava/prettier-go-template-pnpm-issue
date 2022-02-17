module.exports = {
  proseWrap: 'never',
  parser: 'typescript',
  tabWidth: 2,
  useTabs: false,
  singleQuote: true,
  trailingComma: 'none',
  bracketSpacing: true,
  arrowParens: 'always',
  semi: true,
  printWidth: 120,
  endOfLine: 'lf',
  overrides: [
    {
      files: ['*.html'],
      options: {
        parser: 'go-template'
      }
    }
  ],
};
