module.exports = {
  parser: 'babel-eslint',
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  ecmaFeatures: {
    jsx: true,
  },
  plugins: [
    'lodash',
    'import',
    'babel',
    'react',
  ],
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/es6',
    './rules/imports',
    './rules/lodash',
    './rules/strict',
    './rules/style',
    './rules/variables',
    './rules/react',
  ].map(require.resolve),
  rules: {
    'no-param-reassign': 'error',
    'no-extra-parens': 'off',
    'no-console': ["error", { allow: ["warn", "error"] }],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json'],
      }
    },
  },
};
