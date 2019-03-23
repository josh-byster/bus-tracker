module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  rules: {
    'comma-dangle': 0,
    'react/forbid-prop-types': 0,
    'react/no-array-index-key': 0,
    'react/no-did-update-set-state': 0,
    'no-plusplus': 0
  },
  parser: 'babel-eslint',
  env: {
    browser: true
  }
};
