# Resolventa default React+TS eslint-config
1. Install it `npm i @resolventagroup/eslint-config`
2. Add `.eslintrc.js` to your project
```js
module.exports = {
    extends: [
        '@resolventagroup',
    ],
    parserOptions: {
        project: './tsconfig.json',
    },
};
```
