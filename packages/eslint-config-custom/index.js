module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'turbo',
    'prettier',
  ],
  rules: {
    'no-console': 'warn',
    'react/react-in-jsx-scope': 'off',
    'turbo/no-undeclared-env-vars': 'off',
  },
  parserOptions: {
    ecmaVersion: 'latest',
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
};
