module.exports = {
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    '../javascript',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
  ],
  rules: {
    'no-undef': 'off',
    'jsdoc/check-alignment': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-empty-interface': ['error', { allowSingleExtends: true }],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { ignoreRestSiblings: true }],
  },
  overrides: [
    {
      files: '**/*.ts?(x)',
      rules: {
        'jsdoc/require-param-type': 'off',
        'jsdoc/require-returns-type': 'off',
      },
    },
    {
      files: '**/*.js?(x)',
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
  settings: {
    jsdoc: { mode: 'typescript' },
  },
};
