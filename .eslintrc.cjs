/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        singleQuote: true,
        semi: false,
        useTabs: false,
        quoteProps: 'consistent',
        singleAttributePerLine: true,
        tabWidth: 2,
      },
    ],
    'vue/html-self-closing': [
      'error',
      { html: { component: 'always', void: 'always' } },
    ],
  },
}
