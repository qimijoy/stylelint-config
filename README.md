# Description
A package with Stylelint configurations. The goal is to unify Stylelint configurations for my projects.

## Usage
1. Install packages via npm:
```
npm i -D @qimijoy/stylelint-config stylelint stylelint-config-standard stylelint-config-standard-less stylelint-config-standard-scss stylelint-config-standard-vue stylelint-prettier stylelint-declaration-block-no-ignored-properties stylelint-order stylelint-no-unsupported-browser-features postcss-html postcss-less
```

2. Add the required configuration in Stylelint configuration file in your project:
```
import primaryRules from '@qimijoy/stylelint-config/configs/primary.js';

export default {
	ignoreFiles: ['**/node_modules/**', '**/dist/**'],

	extends: [
		'stylelint-config-standard',
		'stylelint-config-standard-less',
		'stylelint-config-standard-scss'
	],

	plugins: [
		'stylelint-prettier',
		'stylelint-declaration-block-no-ignored-properties',
		'stylelint-order',
		'stylelint-no-unsupported-browser-features',
	],

	defaultSeverity: 'error',

	reportDescriptionlessDisables: true,
	reportInvalidScopeDisables: true,
	reportNeedlessDisables: true,
	configurationComment: 'stylelint', // --> /* stylelint-disable */
	ignoreDisables: true,

	overrides: [
		{
			files: ['**/*.html'],
			customSyntax: 'postcss-html',
		},
		{
			files: ['**/*.less'],
			customSyntax: 'postcss-less',
		},
		{
			files: ['**/*.vue'],
			extends: ['stylelint-config-standard-vue'],
		},
	],

	rules: {
		...primaryRules.rules,
	},
};
```

## Adding new configurations
Put the configurations in the configs folder. Each configuration is an ES-module that exports an object.
