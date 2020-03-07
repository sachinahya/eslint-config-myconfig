module.exports = {
  plugins: ['sonarjs', 'jsdoc'],
  extends: [
    'eslint:recommended',
    'plugin:sonarjs/recommended',
    'plugin:jsdoc/recommended',
    'prettier',
  ],
  rules: {
    eqeqeq: ['error', 'smart'],
    'jsdoc/check-alignment': 'off',
    'jsdoc/require-jsdoc': 'off',
  },
};
