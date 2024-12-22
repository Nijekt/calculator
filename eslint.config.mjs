import globals from "globals";
import eslintPluginPrettier from "eslint-plugin-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
            },
        },
    },
    {
        plugins: { prettier: eslintPluginPrettier },
        ignores: ["build/*", "node_modules/"],
        rules: {
            "prettier/prettier": "error",
            "no-unused-vars": "error",
            "prefer-const": "warn",
            eqeqeq: "error",
            curly: "error",
            "arrow-spacing": ["error", { before: true, after: true }],
            "no-console": "error",
            "comma-dangle": [
                "error",
                {
                    arrays: "ignore",
                    objects: "always-multiline",
                    imports: "never",
                    exports: "never",
                    functions: "ignore",
                },
            ],
            quotes: [
                "error",
                "double",
                {
                    avoidEscape: true,
                },
            ],
        },
    },
];
