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
        'no-await-in-loop': 'warn',
        'max-params': ['error', 6],
        camelcase: [
            'warn',
            {
                properties: 'never',
                allow: ['__test_only__'],
            },
        ],
        'no-underscore-dangle': [
            'error',
            {
                allowAfterThis: true,
                allow: ['__test_only__', '__meta__'],
            },
        ],
    },
};
