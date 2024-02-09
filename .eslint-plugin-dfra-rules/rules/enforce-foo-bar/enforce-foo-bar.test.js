const { RuleTester } = require("eslint");
const fs = require("fs");
const path = require("path");

const fooBarRule = require("./enforce-foo-bar");

const goodExampleFilePath = path.join(__dirname, "./examples/foo.good.js");
const goodExampleFile = fs.readFileSync(goodExampleFilePath, {
  encoding: "utf-8",
});

const badExampleFilePath = path.join(__dirname, "./examples/foo.bad.js");
const badExampleFile = fs.readFileSync(badExampleFilePath, {
  encoding: "utf-8",
});

const ruleTester = new RuleTester({
  parserOptions: { ecmaVersion: 2015 },
});

// Throws error if the tests in ruleTester.run() do not pass
ruleTester.run(
  "enforce-foo-bar", // rule name
  fooBarRule, // rule code
  {
    // checks
    // 'valid' checks cases that should pass
    valid: [
      {
        code: goodExampleFile,
      },
    ],
    // 'invalid' checks cases that should not pass
    invalid: [
      {
        code: badExampleFile,
        output: goodExampleFile,
        errors: 1,
      },
    ],
  }
);

console.log("All tests passed!");
