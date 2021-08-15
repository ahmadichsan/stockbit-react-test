module.exports = {
    "parser": "@typescript-eslint/parser",
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
        "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    ],
    "plugins": [
        "react-hooks",
    ],
    "parserOptions": {
        "ecmaVersion": 2018,  // Allows for the parsing of modern ECMAScript features
        "sourceType": "module",  // Allows for the use of imports
        "ecmaFeatures": {
            "tsx": true // Allows for the parsing of JSX
        },
    },
    "rules": {
        "camelcase": ["off", { "properties": "never" }],
        "import/extensions": "off",
        "import/no-unresolved": "off",
        "semi": 1,
        "react/jsx-wrap-multilines": 0,
        "react/jsx-filename-extension": 0,
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "no-use-before-define": 0,
        "max-len": ["off", { "code": 150, "tabWidth": 2 }],
        "import/prefer-default-export": "off",
        "no-underscore-dangle": "off",
        "comma-dangle": ["error", "only-multiline"],
        "operator-linebreak": "off",
        "indent": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/indent": ["error", 2, { "SwitchCase": 1 }],
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/explicit-member-accessibility": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/camelcase": "off",
        "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
        "react-hooks/exhaustive-deps": "off" // Checks effect dependencies
    },
    "settings": {
        "react": {
            "version": "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
        }
    },
    "env": {
        "browser": true,
        "node": true,
        "jest": true,
    },
};
