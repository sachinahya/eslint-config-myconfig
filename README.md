# eslint-config-myconfig

An ESLint config that I use in all of my projects. Contains rules for JavaScript, TypeScript and
React.

## Installation

```
npm install --save-dev @sachinahya/eslint-config-myconfig
```

## Usage

Extend one or more of the presets below in your ESLint config file.

```json
{
  "extends": ["myconfig/typescript", "myconfig/react"]
}
```

## Presets

### `myconfig` or `myconfig/javascript`

Enables JavaScript-related rules.

Peer dependencies: [eslint-plugin-sonarjs](https://github.com/SonarSource/eslint-plugin-sonarjs),
[eslint-plugin-jsdoc](https://github.com/gajus/eslint-plugin-jsdoc)

### `myconfig/typescript`

Enables TypeScript linting rules. Also enables the `myconfig/javascript` preset.

Peer dependencies: [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser),
[@typescript-eslint/eslint-parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)

### `myconfig/typescript-type-checking`

Used in addition with `myconfig/typescript`, adds rules requiring type checking. Does not require
any additional dependencies.

Assumes your
`tsconfig.json` is located in the same directory as your ESLint config. You can
[customise this](https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/TYPED_LINTING.md)
if you need to.

### `myconfig/react`

Enables rules for linting React code.

Peer dependencies: [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react),
[eslint-plugin-react-hooks](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks),
[eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)
