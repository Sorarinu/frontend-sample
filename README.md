# Vue 3 + TypeScript + Vite

https://miyauchi.dev/ja/posts/vite-vue3-typescript/

## Requirements

- node v16.1.0
- yarn v1.22.19

## Create Vue3 + TypeScript Project

```bash
$ yarn create @vitejs/app <project name> --template vue-ts
```

- vite.config.ts

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: true,
  },
})
```

## Install ESLint

```bash
$ yarn add -D eslint eslint-plugin-vue @vue/eslint-config-typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

- .eslintrc

```json
{
  "root": true,
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint"
  ],
  "parserOptions": {
    "ecmaVersion": 2021
  },
  "globals": {
    "defineProps": "readonly",
    "defineEmits": "readonly",
    "defineExpose": "readonly",
    "withDefaults": "readonly"
  },
  "plugins": [],
  "rules": {}
}
```

- src/shims-vue.d.ts

```typescript
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<
    Record<string, unknown>,
    Record<string, unknown>,
    unknown
  >
  export default component
}
```

- package.json

```json
"scripts": {
  "lint:script": "eslint --ext .ts,vue --ignore-path .gitignore ."
}
```

## Install Prettier

```bash
$ yarn add -D prettier eslint-plugin-prettier @vue/eslint-config-prettier
```

- .prettierrc

```json
{
  "singleQuote": true,
  "semi": false,
  "vueIndentScriptAndStyle": true
}
```

## Install Stylelint

```bash
$ yarn add -D stylelint stylelint-config-recommended stylelint-config-standard
```

- .stylelintrc

```json
{
  "extends": ["stylelint-config-recommended", "stylelint-config-standard"]
}
```

## Install vue-router

```bash
$ yarn add -D vue-router
```

## Configure Lint to package.json

```json
{
  :
  :
  "lint-staged": {
    "*.{ts,vue}": "eslint --fix",
    "*.{css,scss,vue}": "stylelint --fix",
    "*": "prettier -w -u"
  }
}
```
