module.exports = {
    overrides: [
        {
            files: 'pages/**/*',
            rules: {
                'import/prefer-default-export': 'error',
                'import/no-default-export': 'off',
                'import/no-anonymous-default-export': 'error',
            },
        },
    ],

    settings: {
        'import/resolver': {
            typescript: {
                project: '.',
            },
        },
    },
};
