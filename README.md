# Resolventa default React+TS eslint-config
1. `npm i @resolventa/eslint-config`
1. Extend `@resolventa` in your ESLint config
```js
// .eslintrc.js
module.exports = {
    extends: [
        '@resolventa',

        // If you're using Next.js
        '@resolventa/eslint-config/next',

        // If you're using storybook
        '@resolventa/eslint-config/storybook',
    ],
    parserOptions: {
        project: './tsconfig.json',
    },
};
```
