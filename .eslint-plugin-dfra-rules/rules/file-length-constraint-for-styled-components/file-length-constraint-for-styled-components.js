module.exports = {
  meta: {
    type: "problem",
    docs: {
      description:
        "This rule enforces a modular coding practice by limiting the declaration of styled-components in files that exceed a specified line count. When the number of lines in a file reaches the defined limit, any further declaration of styled-components within the same file is disallowed.",
    },
    fixable: "code",
    schema: [
      {
        type: "object",
        properties: {
          linesLimit: {
            type: "number",
          },
        },
        additionalProperties: false,
      },
    ],
  },
  create(context) {
    const configuration = context.options[0] || {};
    const linesLimit = configuration.linesLimit || 60;

    let isStyledComponentFunctionDeclared = false;
    const styledFunctionNodes = [];
    let isReactFile = false;

    return {
      ImportSpecifier(node) {
        if (isStyledComponentFunctionDeclared) {
          return;
        }

        const { imported, parent } = node;

        // validates if the imported is the styled function
        // example: import { styled } from "@mui/system";
        if (imported.name !== "styled") {
          return;
        }

        // validates if the source is from @mui or any other subdirectory
        // example: import { styled } from "@mui/system";
        if (
          parent &&
          parent.source &&
          parent.source.value &&
          parent.source.value.includes("@mui/")
        ) {
          isStyledComponentFunctionDeclared = true;
        }
      },
      CallExpression(node) {
        if (!isStyledComponentFunctionDeclared) {
          return;
        }

        const { callee } = node;

        // validates if the called function is the styled function
        // example: const StyledButton = styled(Button)();
        if (!callee || callee.name !== "styled") {
          return;
        }

        styledFunctionNodes.push(node);
      },
      JSXElement(node) {
        // the validation is only seen as a React file if it has a JSXElement
        // this validation can be improved in the future
        isReactFile = true;
      },
      "Program:exit"() {
        if (
          !isStyledComponentFunctionDeclared ||
          !isReactFile ||
          styledFunctionNodes.length === 0
        ) {
          return;
        }

        const fileLines = context.getSourceCode().lines.length;

        if (fileLines > linesLimit) {
          styledFunctionNodes.forEach((node) => {
            context.report({
              node,
              message: `The file has reached the limit of ${linesLimit} lines, please declare styled-components in another file.`,
            });
          });
        }
      },
    };
  },
};
