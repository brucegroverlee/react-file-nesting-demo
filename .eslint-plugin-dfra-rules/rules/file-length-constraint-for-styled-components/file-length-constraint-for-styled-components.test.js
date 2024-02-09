const { RuleTester } = require("eslint");
const fs = require("fs");
const path = require("path");

const rule = require("./file-length-constraint-for-styled-components");

const example1ValidFilePath = path.join(
  __dirname,
  "./examples/example-1.valid.tsx"
);
const example1ValidFile = fs.readFileSync(example1ValidFilePath, {
  encoding: "utf-8",
});

const example1InvalidFilePath = path.join(
  __dirname,
  "./examples/example-1.invalid.tsx"
);
const example1InvalidFile = fs.readFileSync(example1InvalidFilePath, {
  encoding: "utf-8",
});

const ruleTester = new RuleTester({
  parser: require.resolve("@typescript-eslint/parser"),
  parserOptions: { ecmaVersion: 2015, sourceType: "module" },
});

// Throws error if the tests in ruleTester.run() do not pass
ruleTester.run(
  "file-length-constraint-for-styled-components", // rule name
  rule, // rule code
  {
    // checks
    // 'valid' checks cases that should pass
    valid: [
      {
        code: example1ValidFile,
      },
    ],
    // 'invalid' checks cases that should not pass
    invalid: [
      {
        code: example1InvalidFile,
        errors: 1,
      },
    ],
  }
);

console.log("All tests passed!");
