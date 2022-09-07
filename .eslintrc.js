module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'standard',
        // "plugin:node/recommended",
        'plugin:react/recommended',
        'plugin:prettier/recommended' // leave at bottom or it doesn't seem to work
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['react', 'react-hooks'],
    rules: {
        'react/prop-types': 'error',
        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'warn' // Checks effect dependencies
    },
    settings: {
        react: {
            version: 'detect'
        }
    }
};
