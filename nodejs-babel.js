module.exports = {
  parser: 'babel-eslint',
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  plugins: [
    'lodash',
    'import',
    'babel',
  ],
  extends: [
    './nodejs.js',
    './rules/strict',
  ].map(require.resolve),
  rules: {
  },
};
