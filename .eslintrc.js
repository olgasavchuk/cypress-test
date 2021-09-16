module.exports = {
  env: { 'cypress/globals': true },
  extends: [
    'eslint-config-standard',
    'plugin:cypress/recommended'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    semi: 'off',
    'space-before-function-paren': 'off'
  },
  plugins: ['json', 'cypress']
}
