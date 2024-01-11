# github-api

GitHub Pages: https://joaohamerski.github.io/github-api/

## Tecnologias utilizadas
- Vue 3 (script setup).
- Vite
- TypeScript
- Pinia store para implementar notificações Toast.
- TailwindCSS.
- DaisyUI como biblioteca de componentes para TailwindCSS.
- Eslint e Prettier.

## Convenções adotadas
- Nomes de arquivos: Todos arquivos foram nomeados utilizando kebab-case, com exceção de componentes.
- Views: Os arquivos de entry-point das views começam sempre com "The" para indicar que é uma view não reutilizável.
- Componentes: O nome de componentes seguem a lógica de acordo com suas dependencias de componentes pais. Ex.: "Main" > "MainList" > "MainListItem" > "MainListItemSubitem".
- Componentes globais: Os componentes globais iniciam sempre com "App".
- Componentes reutilizáveis: Qualquer componente que é feito com a intenção de ser reutilizável é colocado no diretório "components".
- Tipos: Os tipos são definidos fora dos arquivos de implementação, no diretório "types", para deixar a lógica de implementação mais limpa e clara.

## Decisões de design
- Scrollbar é estilizada somente em telas pequenas (de celular), pois navegadores de celular já gerenciam o seu estilo de forma elegante.

## Preview
### Tema escuro
![Página inicial com tema escuro](https://github.com/JoaoHamerski/github-api/assets/32890601/6b81b79d-f548-4a5b-9c87-c183b9844f4b)
### Tema claro
![Página inicial com tema claro](https://github.com/JoaoHamerski/github-api/assets/32890601/2d1e7f12-b302-4b00-b3b5-ba0ab5fab83b)

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
