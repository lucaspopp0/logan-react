module.exports = {
    root: true,
    plugins: ['jest', 'prettier'],
    extends: ['eslint:recommended', 'plugin:jest/recommended', 'prettier'],
    env: {
        es6: true,
        node: true,
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules: {
        'prettier/prettier': 'error',
    },
};
