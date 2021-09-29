module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'no-console': 'off',
    'no-alert': 'off',
    'prefer-arrow-callback': 'off',
    'func-names': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/prefer-stateless-function': 0,
    'arrow-parens': [2, 'always'],
    'jsx-a11y/label-has-associated-control': 0,
  },
};
