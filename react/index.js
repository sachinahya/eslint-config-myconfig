module.exports = {
  plugins: ['react-hooks', 'jsx-a11y'],
  extends: ['plugin:react/recommended', 'prettier/react'],
  rules: {
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
      linkComponents: [
        'Hyperlink',
        {
          name: 'Link',
          linkAttribute: 'to',
        },
      ],
    },
  },
};
