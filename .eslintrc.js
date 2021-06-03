const a11yOff = Object.keys(require('eslint-plugin-jsx-a11y').rules).reduce((acc, rule) => {
    acc[`jsx-a11y/${rule}`] = 'off';

    return acc;
}, {});

module.exports = {
    extends: [
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'plugin:promise/recommended',
        'plugin:sonarjs/recommended',
    ],

    rules: {
        ...a11yOff,

        'react/react-in-jsx-scope': 'off',

        'react/jsx-max-props-per-line': [
            2,
            { 'maximum': 1, 'when': 'multiline' },
        ],

        'max-len': ['error', { 'code': 145 }],

        '@typescript-eslint/indent': [2, 4],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],

        'arrow-parens': [2, 'as-needed', { 'requireForBlockBody': true }],

        'padding-line-between-statements': [
            'error',
            { blankLine: 'always', prev: '*', next: 'return' }
        ],

        'import/order': ['error', {
            'newlines-between': 'always',
            'groups': ['builtin', 'external', 'index', 'sibling'],
            'pathGroups': [
                {
                    'pattern': 'components',
                    'group': 'external',
                },
                {
                    'pattern': './*.module.scss',
                    'group': 'sibling',
                    'position': 'after',
                },
                {
                    'pattern': './*.scss',
                    'group': 'sibling',
                    'position': 'after',
                },
            ]
        }],

        'no-unused-vars': ['error'],

        'import/prefer-default-export': 'off',
        'import/no-default-export': 'error',

        'object-curly-newline': ['error', {
            'ImportDeclaration': { 'multiline': true, 'minProperties': 6 },
            'ExportDeclaration': { 'multiline': true, 'minProperties': 6 }
        }],

        'no-underscore-dangle': ['error', { 'allowAfterThis': true }],

        'react/require-default-props': [0],

        'react/jsx-props-no-spreading': ['error', { html: 'ignore' }],

        'generator-star-spacing': ['error', 'both'],

        '@typescript-eslint/naming-convention': [
            'error',
            {
                'selector': 'variable',
                'modifiers': ['destructured'],
                'format': null,
            },
        ],

        '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],

        '@typescript-eslint/explicit-member-accessibility': ['error'],
        '@typescript-eslint/member-ordering': ['error'],

        '@typescript-eslint/explicit-module-boundary-types': [0],

        '@typescript-eslint/method-signature-style': ['error', 'method'],

        '@typescript-eslint/member-delimiter-style': ['error'],

        '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],

        '@typescript-eslint/class-literal-property-style': ['error', 'fields'],

        '@typescript-eslint/type-annotation-spacing': ['error'],

        'require-await': 'error',

        'promise/prefer-await-to-then': 'error',
        'promise/prefer-await-to-callbacks': 'error',
    },
};
