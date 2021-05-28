module.exports = {
  extends: ['alloy', 'alloy/react', 'alloy/typescript'],
  plugins: ['react-hooks'],
  rules: {
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/prefer-for-of': 'off',
    '@typescript-eslint/no-loss-of-precision': 'off',
    '@typescript-eslint/no-invalid-this': 'off',

    'no-undef': 'off',
    'no-useless-constructor': 'off',
    'max-params': 'off',
    'default-case-last': 'off',
    'no-promise-executor-return': 'off',
    'no-unreachable-loop': 'off',
    'no-useless-backreference': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },
}
