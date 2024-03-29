module.exports = {
  extends: [
    'next',
    'turbo',
    'prettier',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'no-console': 'warn',
    '@typescript-eslint/no-var-requires': 'off',
  },
}
