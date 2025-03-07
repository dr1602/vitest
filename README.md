# Starter with Vite, React Testing Library and Vitest

Created for the Udemy course [React Testing Library with Jest / Vitest](https://www.udemy.com/course/react-testing-library)

## How this project was created

This project was created using this command:

```sh
npm create vite@latest vite-starter -- --template react
```

and then following all of the steps below.

I also removed a few unnecessary files, and updated

- App.jsx
- this README file 😄

## Installing Vitest and React Testing Library in a Vite project

### Install dependencies

```sh
npm install -D vitest @vitest/ui eslint-plugin-vitest
npm install -D jsdom @testing-library/jest-dom @testing-library/react
```

## Add test script to package.json `test` object

```json
  "test": "vitest --watch",
```

## Add a setup file

To make [jest-dom matchers](https://github.com/testing-library/jest-dom#custom-matchers) available in all test files:

1. create new file _src/setupTests.js_
1. add these contents:

```js
import "@testing-library/jest-dom";
```

## Add Vitest plugin to ESLint

This step avoids linting errors when using the `test` and `expect` Vitest globals without importing them first.

In _.eslintrc.cjs_:

1. Add this to to the `extends` array:

```js
   'plugin:vitest/recommended',
```

1. This step avoids linting errors when using the `test` and `expect` Vitest globals without importing them first.

At the top, require the Vitest plugin:

```js
const vitest = require("eslint-plugin-vitest");
```

Then Add this property / value to the top-level `module.exports` object:

```js
    globals: {
      ...vitest.environments.env.globals,
    },
```

## Update a few ESLint rules

Add these to the `rules` object in _.eslintrc.cjs_:

```js
    "no-unused-vars": "warn", // warning, not error
    "vitest/expect-expect": "off", // eliminate distracting red squiggles while writing tests
    "react/prop-types": "off", // turn off props validation
```

**Note**: if you're having issues getting ESLint to work properly with VSCode, please see [this troubleshooting guide](https://dev.to/bonnie/eslint-prettier-and-vscode-troubleshooting-ljh).

## Update vite configuration for tests

Update _vite.config.js_ based on the [Vitest Testing Library example](https://github.com/vitest-dev/vitest/blob/main/examples/react-testing-lib/vite.config.ts). Add this property / value to the `defineConfig` argument:

```js
  test: {
    globals: true,
    environment: "jsdom",
    // this points to the setup file that we created earlier
    setupFiles: "./src/setup.js",
    // you might want to disable the `css: true` line, since we don't have
    // tests that rely on CSS -- and parsing CSS is slow.
    // I'm leaving it in here becasue often people want to parse CSS in tests.
    css: true,
  },
```

## Command to run tests

```sh
npm test
```

## Reference

- [creating a Vite project](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)
- [Vitest Testing Library example](https://github.com/vitest-dev/vitest/tree/main/examples/react-testing-lib)
- [Vitest ESLint plugin](https://www.npmjs.com/package/eslint-plugin-vitest)


# Notes

## 23. Unit Testing Functions

### Unit Testing Functions

* Functions separte from componentes
- Used by several components
- Complex Logic

* Unit test if
- Complex logic difficult to test via functional tests
- Too many edge 

## 25. When to Unit Test

### Discussion: When to Unit Test?

* WHen to unit test?
- kebabCaseToTilteCase is prettz simple
- could be covered functional tests on button

* For more complicated functions, unit test help with:
- covering all posible edge cases
- determining what caused functional tests to fail

* Issue with functional tests:
- high-level makes them resistant to refactors
- high-level makes them difficult to diagnose, is more an art than a science

## 26 Review: Simple App
* Test interactivity usin **fireEvent**

* jest-don assertions:
- **toBeEnabled()**
- **toBeDisabled()**
- **toBeChecked()**

* **getByRole** option **{ name: }**
* Jest/Vitest **describe** to group tests
* Unit testing functions

## 27. ESLint and Prettier

### ESLint and Prettier
* ESLint: *Linter*
* Prettier: *Formater*

### ESLint

* Popular **linter** for JavaScript

* **Linter:** analyzes static text and marks syntax that breaks rules
* **Static:** analyze code as written, not what happens when code is run

* *Linting* keeps code style consistent, especially for multi-en projects
* Also catches errors in code
- Using variable before defining
- importing from nonexisting file
- etc

### Linging vs. Formatting

* Formatters(like prettier) automatically format code (idents, spacing)
- Example spaces around curly braces

* Linters address formant and code style
- example: preferred assertion method

**From**
*expect(checkbox).toHaveAttribute(checked);*

**To**
*expect(checkbox).toBeChecked();*

### ESLint Plugins

* Plug-ins extend ESLint
* Testing Library and jest-dom ESLint plugins, to enforce best practices
*** Github testing library/ eslint-plugin-testing-library

### Vitest ESLint Plugin

* Vitest ESLing plugin:
a. enforces best practices
b. make sure test 'experiments' don't make it into CI
c. *Prevents* ESLint from *flagging* Vitest globals like **test** and **describe**

*** Github testing library/ eslint-plugin-jest
*** Exactly the same as vitests
