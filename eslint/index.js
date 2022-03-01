module.exports = {
	env: {
		browser: true,
		es6: true
	},
	extends: ['eslint:recommended', 'plugin:import/recommended', 'prettier'],
	plugins: ['html'],
	parser: '@babel/eslint-parser', // so dynamic `import` is recognized
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2018,
		requireConfigFile: false
	},
	rules: {
		'accessor-pairs': 'error',
		'array-callback-return': 'warn',
		'block-scoped-var': 'error',
		camelcase: 'error',
		complexity: ['warn', 20],
		'consistent-this': ['error', 'that'],
		'constructor-super': 'error',
		curly: ['error', 'all'],
		eqeqeq: ['error', 'smart'],
		'func-name-matching': ['error', 'always'],
		'func-names': ['error', 'never'],
		'func-style': ['error', 'expression'],
		'guard-for-in': 'error',
		'import/no-extraneous-dependencies': 'warn',
		'import/group-exports': 'error',
		'max-depth': ['error', 4],
		'max-len': [
			'warn',
			{
				code: 160,
				tabWidth: 2
			}
		],
		'max-lines': [
			'warn',
			{
				max: 350,
				skipBlankLines: true,
				skipComments: true
			}
		],
		'max-lines-per-function': [
			'warn',
			{
				max: 50,
				IIFEs: false,
				skipBlankLines: true,
				skipComments: true
			}
		],
		'max-nested-callbacks': ['error', 5],
		'max-params': ['error', 5],
		'max-statements': ['warn', 15],
		'max-statements-per-line': [
			'error',
			{
				max: 1
			}
		],
		'new-cap': [
			'error',
			{
				capIsNew: true,
				newIsCap: true
			}
		],
		'no-alert': 'error',
		'no-console': 'error',
		'no-debugger': 'error',
		'no-bitwise': 'error',
		'no-const-assign': 'error',
		'no-dupe-class-members': 'error',
		'no-duplicate-imports': 'error',
		'no-else-return': 'error',
		'no-empty': 'error',
		'no-empty-function': 'error',
		'no-eval': 'error',
		'no-extra-bind': 'error',
		'no-global-assign': 'error',
		'no-implicit-globals': 'error',
		'no-invalid-this': 'error',
		'no-labels': 'error',
		'no-lone-blocks': 'error',
		'no-lonely-if': 'error',
		'no-loop-func': 'error',
		'no-new': 'error',
		'no-new-func': 'error',
		'no-nested-ternary': 'error',
		'no-param-reassign': 'error',
		'no-redeclare': 'error',
		'no-return-assign': 'error',
		'no-self-compare': 'error',
		'no-sequences': 'error',
		'no-template-curly-in-string': 'error',
		'no-this-before-super': 'error',
		'no-throw-literal': 'error',
		'no-undef-init': 'error',
		'no-unmodified-loop-condition': 'error',
		'no-unneeded-ternary': 'error',
		'no-unused-expressions': 'error',
		'no-unused-vars': 'error',
		'no-use-before-define': 'error',
		'no-useless-call': 'error',
		'no-useless-computed-key': 'error',
		'no-useless-concat': 'error',
		'no-useless-return': 'error',
		'no-var': 'error',
		'no-void': 'error',
		'no-with': 'error',
		'object-shorthand': ['error', 'always'],
		'one-var': [
			'error',
			{
				const: 'consecutive',
				let: 'always',
				var: 'always'
			}
		],
		'prefer-arrow-callback': 'error',
		'prefer-const': 'error',
		quotes: ['error', 'single'],
		radix: 'error',
		'require-unicode-regexp': 'error',
		strict: 'error',
		'valid-jsdoc': 'error'
	},
	overrides: [
		{
			files: ['**/*.test.js'],
			extends: './test'
		}
	],
	settings: {
		'import/resolver': {
			[path.resolve('./eslint-plugin-import-resolver.js')]: { node: 1 },
		}
  }
};
