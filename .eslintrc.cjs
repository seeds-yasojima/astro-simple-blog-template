module.exports = {
  root: true,
  /** env（環境）は、コードが実行される環境を指定します。 */
  env: { browser: true, es2020: true },
  /** parser（パーサー）は、コードを解析するためのパーサーを指定します。 */
  parser: "@typescript-eslint/parser",
  /** parserOptions（パーサーオプション）は、パーサーの設定を指定します。 */
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  /** ignorePatterns（無視パターン）は、指定されたファイルを無視します。 */
  ignorePatterns: [
    "dist",
    ".eslintrc.cjs",
    ".prettierrc.json",
    "tailwind.config.mjs",
  ],
  /** plugins（プラグイン）は、ESLintに追加の機能を提供するプラグインを指定します。 */
  plugins: ["@typescript-eslint", "import"],
  /** extends（拡張）は、指定された設定を拡張します。 */
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  /** rules（ルール）は、ESLintのルールを指定します。 */
  rules: {
    /**
     * インポートの順序を指定します。
     */
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          ["parent", "sibling"],
          "object",
          "type",
          "index",
        ],
        "newlines-between": "always",
        alphabetize: { order: "asc", caseInsensitive: true },
        pathGroupsExcludedImportTypes: ["builtin"],
        pathGroups: [
          {
            pattern: "{react,react-router-dom}",
            group: "builtin",
            position: "before",
          },
          {
            pattern: "{@/routes/**,@/pages/**,@/assets/**}",
            group: "internal",
            position: "before",
          },
          {
            pattern: "{@/components/**,@/features/**}",
            group: "internal",
            position: "before",
          },
          {
            pattern: "{@/libs/**,@/utils/**,@/hooks/**}",
            group: "internal",
            position: "before",
          },
          {
            pattern: "{@/services,@/services/**}",
            group: "internal",
            position: "before",
          },
          {
            pattern: "@/types/**",
            group: "internal",
            position: "before",
          },
        ],
      },
    ],
  },
  /** overrides（オーバーライド）は、指定されたファイルに対して別の設定を適用します。 */
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      extends: ["plugin:astro/recommended"],
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {},
    },
  ],
};
