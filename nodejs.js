module.exports = {
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'script',
  },
  plugins: [
    'lodash',
    'import',
  ],
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/es6',
    './rules/imports',
    './rules/jsdoc',
    './rules/lodash',
    './rules/node',
    './rules/style',
    './rules/variables',
  ].map(require.resolve),
  rules: {
    strict: ['error', 'global'],
  },
};
