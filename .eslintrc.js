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

        'curly': [2, 'all'],
        'brace-style': [2, '1tbs', { 'allowSingleLine': false }],

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
            'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
            'pathGroups': [
                {
                    'pattern': './*.module.scss',
                    'group': 'index',
                    'position': 'after',
                },
                {
                    'pattern': './*.scss',
                    'group': 'index',
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

        'react/jsx-props-no-spreading': [0],

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

        '@typescript-eslint/method-signature-style': ['error'],

        '@typescript-eslint/member-delimiter-style': ['error'],

        '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],

        '@typescript-eslint/class-literal-property-style': ['error', 'fields'],

        '@typescript-eslint/type-annotation-spacing': ['error'],

        'require-await': 'error',

        'promise/prefer-await-to-then': 'error',
        'promise/prefer-await-to-callbacks': 'error',

        '@typescript-eslint/naming-convention': [
            'error',
            {
                'selector': 'default',
                'format': ['strictCamelCase', 'StrictPascalCase', 'UPPER_CASE'],
            },
            {
                'selector': 'memberLike',
                'modifiers': ['private'],
                'format': ['strictCamelCase'],
                'leadingUnderscore': 'allow',
            },
            {
                'selector': 'variable',
                'modifiers': ['destructured'],
                'format': null,
            },
            {
                'selector': ['objectLiteralProperty', 'typeProperty'],
                'format': null,
            },
            {
                'selector': 'typeAlias',
                'prefix': ['T'],
                'format': ['StrictPascalCase'],
            },
            {
                'selector': 'interface',
                'prefix': ['I'],
                'format': ['StrictPascalCase'],
            },
            {
                'selector': 'typeLike',
                'format': ['StrictPascalCase'],
            },
        ],
    },

    settings: {
        'import/resolver': {
            typescript: {
                project: '.',
            },
        },
    },
};
