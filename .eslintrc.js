module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  // required to lint *.vue files
  plugins: [
    'vue',
  ],
  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
    'plugin:cypress/recommended',
    '@vue/airbnb',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // avoid resolution issues for Vue components
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'no-unused-vars': [1, { argsIgnorePattern: '^_' }],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.vue'],
      },
    },
  },
};
