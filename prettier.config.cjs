/** @type {import("prettier").Config} */
module.exports = {
	printWidth: 120,
	tabWidth: 4,
	useTabs: true,
	semi: false,
	singleQuote: true,
	jsxSingleQuote: true,
	trailingComma: 'none',
	plugins: ['@ianvs/prettier-plugin-sort-imports', 'prettier-plugin-sort-json', 'prettier-plugin-tailwindcss'],
	importOrder: ['^node:', '', '<BUILT_IN_MODULES>', '<THIRD_PARTY_MODULES>', '', '^(@\\/)', '', '^[~]', '', '^[.]'],
	importOrderTypeScriptVersion: '5.3.2'
}
