module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:storybook/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "react", "dfra-rules"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/no-multi-comp": "error",
    "dfra-rules/file-length-constraint-for-styled-components": [
      "error",
      {
        linesLimit: 60,
      },
    ],
    "dfra-rules/file-length-constraint-for-sx-property": [
      "error",
      {
        linesLimit: 60,
        sxPropertiesLimit: 4,
      },
    ],
  },
};
