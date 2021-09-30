module.exports = {
  root: true,
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  env: {
    node: true,
  },
  rules: {
    "react/jsx-closing-bracket-location": ['warn', 'line-aligned'],
    "object-curly-spacing": ['warn', 'always'],
    "comma-dangle": ['warn', "always-multiline"],
    "arrow-parens": ["warn", "as-needed"],
  },
};
