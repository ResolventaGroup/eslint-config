# Resolventa default React+TS eslint-config
1. `npm i @resolventa/eslint-config`
1. Extend `@resolventa` in your ESLint config
```js
// .eslintrc.js
module.exports = {
    extends: [
        '@resolventa',
    ],
    parserOptions: {
        project: './tsconfig.json',
    },
};
```
