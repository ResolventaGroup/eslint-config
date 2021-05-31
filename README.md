# Resolventa default React+TS eslint-config
1. `npm i @resolventagroup/eslint-config`
1. Extend `@resolventagroup` in your ESLint config
```js
// .eslintrc.js
module.exports = {
    extends: [
        '@resolventagroup',
    ],
    parserOptions: {
        project: './tsconfig.json',
    },
};
```
