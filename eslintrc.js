module.exports = {
  extends: [
    "airbnb-base",
    "prettier"
  ],
  parser: "@babel/eslint-parser",
  "plugins": [
    "react",
    "prettier"
  ],
  env: { browser: true, es6: true, jest: true },
  rules: {
    "prettier/prettier": "error",
    "react/prop-types": 0,
    "no-console": 0,
    "import/prefer-default-export": 0,
    "prefer-template": 0,
  },
};