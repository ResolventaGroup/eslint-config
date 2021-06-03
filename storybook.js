module.exports = {
    overrides: [
        {
            'files': ['storybook/**/*'],
            'rules': {
                'import/no-default-export': 'off',
                'import/no-extraneous-dependencies': 'off',
                'react/jsx-props-no-spreading': 'off',
            },
        },
    ],
};
