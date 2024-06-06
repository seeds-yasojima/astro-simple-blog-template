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
  plugins: ["@typescript-eslint"],
  /** extends（拡張）は、指定された設定を拡張します。 */
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  /** rules（ルール）は、ESLintのルールを指定します。 */
  rules: {},
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
