module.exports = {
  parser: '@typescript-eslint/parser',
  ignorePatterns: [
    'node_modules/*',
    'dist/*',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: [
    '@typescript-eslint',
    'react-hooks',
    'jsx-a11y',
  ],
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': [ 'error' ],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/type-annotation-spacing': [ 'error', { 'before': false, 'after': true } ],
    '@typescript-eslint/member-delimiter-style': [ 'error', {
      'multiline': {
        'delimiter': 'comma',
        'requireLast': true,
      },
      'singleline': {
        'delimiter': 'comma',
        'requireLast': false,
      },
    } ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'newline-after-var': [ 2, 'always' ],
    'one-var': [ 'error', 'never' ],
    'no-multiple-empty-lines': [ 'error', { 'max': 1, 'maxBOF': 1 } ],
    'jsx-quotes': [ 'error', 'prefer-double' ],
    'quotes': [ 'error', 'single' ],
    '@typescript-eslint/semi': [ 'error', 'always' ],
    'no-var': 'error',
    'object-curly-spacing': [ 'error', 'always' ],
    'curly': 'error',
    'function-paren-newline': [ 'error', 'multiline-arguments' ],
    'max-len': [ 'error', { 'code': 120 } ],
    'space-unary-ops': 'error',
    'no-console': [ 'error', { allow: [ 'warn', 'error' ] } ],
    'keyword-spacing': [ 'error', { 'before': true } ],
    'space-in-parens': [ 'error', 'never' ],
    'comma-spacing': [ 'error', { 'before': false, 'after': true } ],
    'comma-dangle': [ 'error', 'always-multiline' ],
    'indent': [ 'error', 2, { 'SwitchCase': 1 } ],
    'space-infix-ops': 'error',
    'eol-last': [ 'error', 'always' ],
    'newline-before-return': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
