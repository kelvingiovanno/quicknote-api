import { defineConfig, globalIgnores } from "eslint/config";
import js  from "@eslint/js";
import tseslint from "typescript-eslint"
import globals from "globals";

export default defineConfig([
    {
        files: ["**/*.ts"],
        languageOptions: {
            globals: globals.browser,
        },
    },
    js.configs.recommended,
    tseslint.configs.recommended,
    {
        files: ["**/*.ts"],
        rules: {
            "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
        },
    },
    globalIgnores(["dist", "node_modules"])
])