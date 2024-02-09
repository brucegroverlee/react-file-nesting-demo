## Install

```sh
npm install --save-dev eslint-plugin-dfra-rules@file:.eslint-plugin-dfra-rules
```

## References

- https://eslint.org/docs/latest/extend/custom-rules#runtime-rules
- https://medium.com/neighborhoods-com-engineering-blog/custom-eslint-rules-for-faster-refactoring-2095e69bde08
- https://medium.com/@brandongregoryscott/beginners-guide-to-custom-eslint-plugins-77aca43f05c6

## Tools

- https://astexplorer.net/

The code below can be used to debug the AST.

```js
export const meta = {
  type: "problem",
  hasSuggestions: true,
  fixable: true,
};

export function create(context) {
  return {
    ImportSpecifier(node) {
      console.log("ImportSpecifier", node);
    },
    ImportDeclaration(node) {
      console.log("ImportDeclaration", node);
    },
    VariableDeclarator(node) {
      console.log("VariableDeclarator", node);
    },
    CallExpression(node) {
      console.log("CallExpression", node);
    },
    JSXElement(node) {
      console.log("JSXElement", node);
    },
    JSXIdentifier(node) {
      console.log("JSXIdentifier", node);
    },
    JSXAttribute(node) {
      console.log("JSXAttribute", node);
    },
    "Program:exit"(node) {
      console.log("Program:exit", node);
    },
  };
}
```

## Testing (doesn't work)

execute the test file as follows:

```sh
node ./.eslint-plugin-dfra-rules/rules/file-length-constraint-for-styled-components/file-length-constraint-for-styled-components.test.js
```
