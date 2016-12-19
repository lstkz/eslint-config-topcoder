// https://github.com/babel/eslint-plugin-babel

module.exports = {
  rules: {
    // disable original rules
    'object-curly-spacing': 'off',
    'new-cap': 'off',
    'no-invalid-this': 'off',

    'babel/new-cap': ['error', {capIsNew: false}],
    'babel/object-curly-spacing': ['error', 'never'],
    'babel/no-invalid-this': 'error',

    'babel/flow-object-type': 'off',
    'babel/no-await-in-loop': 'error',
  },
};
