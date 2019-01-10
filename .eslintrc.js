module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'max-len': 0,
    'prefer-const': 0,
    'import/no-extraneous-dependencies': 0,
    'global-require': 0,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
