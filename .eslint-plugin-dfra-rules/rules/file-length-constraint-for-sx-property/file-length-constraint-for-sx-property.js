module.exports = {
  meta: {
    type: "problem",
    docs: {
      description:
        "This rule enfoces to limit the amount of in-line style properties (sx) that can be used in a single MUI component.",
    },
    fixable: "code",
    schema: [
      {
        type: "object",
        properties: {
          linesLimit: {
            type: "number",
          },
          sxPropertiesLimit: {
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
    const sxPropertiesLimit = configuration.sxPropertiesLimit || 4;

    let isMuiComponent = false;
    let isReactFile = false;
    const sxPropertyNodes = [];

    return {
      ImportDeclaration(node) {
        if (isMuiComponent) {
          return;
        }

        const { source } = node;

        // validates if the source is from @mui or any other subdirectory
        // this is a naive validation and can be improved in the future
        if (source.value.includes("@mui/material")) {
          isMuiComponent = true;
        }
      },
      JSXElement(node) {
        // the validation is only seen as a React file if it has a JSXElement
        // this validation can be improved in the future
        isReactFile = true;
      },
      JSXAttribute(node) {
        if (!isMuiComponent) {
          return;
        }

        const { name, value } = node;

        if (name.name !== "sx") {
          return;
        }

        if (value.type !== "JSXExpressionContainer") {
          return;
        }

        const { expression } = value;

        if (expression.type !== "ObjectExpression") {
          return;
        }

        if (expression.properties.length > sxPropertiesLimit) {
          sxPropertyNodes.push(node);
        }
      },
      "Program:exit"() {
        if (!isMuiComponent || !isReactFile || sxPropertyNodes.length === 0) {
          return;
        }

        const fileLines = context.getSourceCode().lines.length;

        if (fileLines > linesLimit) {
          sxPropertyNodes.forEach((node) => {
            context.report({
              node,
              message: `The file exceeds the ${linesLimit}-line limit for using extensive inline styles (sx properties) in MUI components. To improve code readability and maintainability, please refactor the sx properties exceeding the limit of ${sxPropertiesLimit} per component into separate styled components or external style sheets.`,
            });
          });
        }
      },
    };
  },
};
