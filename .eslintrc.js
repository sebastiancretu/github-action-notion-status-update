module.exports = {
  globals: {
    XYZ: true /** Add globals from a potential global.d.ts here **/,
  },
  env: {
    browser: false,
    commonjs: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['import', '@typescript-eslint'],
  rules: {
    indent: 'off',
    'import/order': [
      'error',
      {
        alphabetize: {
          caseInsensitive: false,
          order: 'asc',
        },
        groups: [
          'object',
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
      },
    ],
    'linebreak-style': ['error', 'unix'],
    'prettier/prettier': ['error', { singleQuote: true }],
    semi: ['error', 'always'],
  },
};
