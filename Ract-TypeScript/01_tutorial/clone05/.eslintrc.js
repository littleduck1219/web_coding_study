module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'airbnb',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'prettier',
        'plugin:prettier/recommended',
    ],
    plugins: ['react', '@typescript-eslint', 'jsx-a11y', 'import', 'prettier'],
    env: {
        browser: true,
        jasmine: true,
        jest: true,
        node: true,
    },
    rules: {
        'prettier/prettier': [
            'error',
            {
                semi: true,
                trailingComma: 'all',
                singleQuote: true,
                printWidth: 100,
                tabWidth: 2,
            },
        ],
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'react/jsx-wrap-multilines': 0,
        'react/prop-types': 0,
        'react/react-in-jsx-scope': 0,
        'jsx-a11y/accessible-emoji': 0,
        'jsx-a11y/alt-text': 0,
        'import/prefer-default-export': 0,
        'import/no-extraneous-dependencies': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
