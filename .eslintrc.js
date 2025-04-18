module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'no-console': 'off',
    'import/prefer-default-export': 'off',
    'no-param-reassign': 'off',
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'linebreak-style': ['error', 'unix'],
    'comma-dangle': ['error', 'never'],
    'arrow-parens': ['error', 'as-needed']
  }
};
