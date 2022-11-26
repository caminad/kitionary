/** @type {import("eslint").Linter.Config} */
const eslintConfig = {
	root: true,
	extends: ["eslint:recommended"],
	plugins: ["svelte3"],
	overrides: [{ files: ["*.svelte"], processor: "svelte3/svelte3" }],
	parserOptions: {
		sourceType: "module",
		ecmaVersion: "latest",
	},
	env: {
		browser: true,
		es2017: true,
		node: true,
	},
};

module.exports = eslintConfig;
