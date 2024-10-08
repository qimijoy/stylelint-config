export default {
	rules: {
		// Stylelint Original Rules
		'no-descending-specificity': true,
		'declaration-block-no-duplicate-custom-properties': true,
		'declaration-block-no-duplicate-properties': true,
		'font-family-no-duplicate-names': true,
		'keyframe-block-no-duplicate-selectors': true,
		'no-duplicate-at-import-rules': true,
		'no-duplicate-selectors': true,
		'block-no-empty': [
			true,
			{
				ignore: ['comments'],
			},
		],
		'comment-no-empty': true,
		'no-empty-source': true,
		'color-no-invalid-hex': true,
		'function-calc-no-unspaced-operator': true,
		'keyframe-declaration-no-important': true,
		'media-query-no-invalid': null,
		'named-grid-areas-no-invalid': true,
		'no-invalid-double-slash-comments': true,
		'no-invalid-position-at-import-rule': true,
		'string-no-newline': true,
		'no-irregular-whitespace': true,
		'custom-property-no-missing-var-function': true,
		'font-family-no-missing-generic-family-keyword': true,
		'function-linear-gradient-no-nonstandard-direction': true,
		'declaration-block-no-shorthand-property-overrides': true,
		'selector-anb-no-unmatchable': true,
		'annotation-no-unknown': true,
		'at-rule-no-unknown': true,
		'declaration-property-value-no-unknown': null,
		'function-no-unknown': true,
		'media-feature-name-no-unknown': true,
		'media-feature-name-value-no-unknown': null,
		'no-unknown-animations': true,
		'no-unknown-custom-properties': true,
		'property-no-unknown': [
			true,
			{
				checkPrefixed: true,
			},
		],
		'selector-pseudo-class-no-unknown': true,
		'selector-pseudo-element-no-unknown': true,
		'selector-type-no-unknown': true,
		'unit-no-unknown': true,
		'at-rule-allowed-list': ['media', 'font-face', 'import', 'extend', 'keyframes'],
		'at-rule-disallowed-list': null,
		'at-rule-no-vendor-prefix': true,
		'at-rule-property-required-list': {
			'font-face': ['font-family', 'font-style', 'src'],
		},
		'color-hex-alpha': null,
		'color-named': 'never',
		'color-no-hex': null,
		'comment-word-disallowed-list': null,
		'declaration-no-important': true,
		'declaration-property-unit-allowed-list': null,
		'declaration-property-unit-disallowed-list': null,
		'declaration-property-value-allowed-list': null,
		'declaration-property-value-disallowed-list': null,
		'function-allowed-list': null,
		'function-disallowed-list': null,
		'function-url-no-scheme-relative': true,
		'function-url-scheme-allowed-list': null,
		'length-zero-no-unit': true,
		'media-feature-name-allowed-list': null,
		'media-feature-name-disallowed-list': null,
		'media-feature-name-no-vendor-prefix': true,
		'media-feature-name-unit-allowed-list': null,
		'media-feature-name-value-allowed-list': null,
		'property-allowed-list': null,
		'property-disallowed-list': null,
		'property-no-vendor-prefix': true,
		'rule-selector-property-disallowed-list': null,
		'selector-attribute-name-disallowed-list': null,
		'selector-attribute-operator-allowed-list': null,
		'selector-attribute-operator-disallowed-list': null,
		'selector-combinator-allowed-list': null,
		'selector-combinator-disallowed-list': null,
		'selector-disallowed-list': null,
		'selector-no-qualifying-type': true,
		'selector-no-vendor-prefix': true,
		'selector-pseudo-class-allowed-list': null,
		'selector-pseudo-class-disallowed-list': null,
		'selector-pseudo-element-allowed-list': null,
		'selector-pseudo-element-disallowed-list': null,
		'unit-allowed-list': ['px', '%', 'em', 'rem', 'fr', 'vh', 'vw', 'deg', 'ms', 's'],
		'unit-disallowed-list': null,
		'value-no-vendor-prefix': true,
		'function-name-case': 'lower',
		'selector-type-case': 'lower',
		'value-keyword-case': 'lower',
		'at-rule-empty-line-before': null,
		'comment-empty-line-before': null,
		'custom-property-empty-line-before': null,
		'declaration-empty-line-before': [
			'always',
			{
				ignore: ['after-comment', 'after-declaration', 'first-nested', 'inside-single-line-block'],
			},
		], // tweaked for 'order/properties-order'
		'rule-empty-line-before': null,
		'declaration-block-single-line-max-declarations': 1,
		'declaration-property-max-values': null,
		'max-nesting-depth': [
			3,
			{
				ignore: ['pseudo-classes'],
			},
		],
		'number-max-precision': 3,
		'selector-max-attribute': 2,
		'selector-max-class': 3,
		'selector-max-combinators': 2,
		'selector-max-compound-selectors': 3,
		'selector-max-id': 1,
		'selector-max-pseudo-class': 3,
		'selector-max-specificity': '1,2,1',
		'selector-max-type': 3,
		'selector-max-universal': 1,
		'time-min-milliseconds': null,
		'alpha-value-notation': 'number',
		'color-function-notation': 'modern',
		'color-hex-length': 'long',
		'font-weight-notation': 'numeric',
		'hue-degree-notation': 'angle',
		'import-notation': 'string',
		'keyframe-selector-notation': 'percentage',
		'media-feature-range-notation': 'prefix',
		'selector-not-notation': 'complex',
		'selector-pseudo-element-colon-notation': 'single',
		'comment-pattern': null,
		'custom-media-pattern': null,
		'custom-property-pattern': null,
		'keyframes-name-pattern': null,
		'selector-class-pattern': null,
		'selector-id-pattern': null,
		'selector-nested-pattern': null,
		'font-family-name-quotes': 'always-where-recommended',
		'function-url-quotes': 'always',
		'selector-attribute-quotes': 'always',
		'declaration-block-no-redundant-longhand-properties': null,
		'shorthand-property-no-redundant-values': true,
		'comment-whitespace-inside': 'always',

		// PLUGIN Prettier
		'prettier/prettier': true,

		// PLUGIN declaration-block-no-ignored-properties
		'plugin/declaration-block-no-ignored-properties': true,

		// PLUGIN Order
		'order/order': [
			'custom-properties',
			'dollar-variables',
			'at-variables',
			{ type: 'at-rule', name: 'include', hasBlock: false },
			'less-mixins',
			'declarations',
			{ type: 'at-rule', name: 'media' },
			{ type: 'rule', selector: '&::before' },
			{ type: 'rule', selector: '&::after' },
			{ type: 'rule', selector: '&:visited' },
			{ type: 'rule', selector: '&:focus' },
			{ type: 'rule', selector: '&:hover' },
			{ type: 'rule', selector: '&:active' },
			{ type: 'rule', selector: '&:disabled' },
			{ type: 'rule', selector: '&:first-child' },
			{ type: 'rule', selector: '&:last-child' },
			{ type: 'rule', selector: '&:nth-child.+' },
			{ type: 'rule', selector: '^&_' },
			{ type: 'rule', selector: '^.' },
			{ type: 'at-rule', name: 'include', hasBlock: true },
			'at-rules',
		],
		'order/properties-order': [
			{
				groupName: 'display',
				emptyLineBefore: 'always',
				properties: ['display', 'flex-flow', 'flex-direction', 'flex-wrap'],
			},
			{
				groupName: 'position',
				emptyLineBefore: 'always',
				properties: ['position', 'z-index', 'top', 'right', 'bottom', 'left'],
			},

			{
				groupName: 'box-model',
				emptyLineBefore: 'always',
				properties: [
					'width',
					'min-width',
					'max-width',
					'height',
					'min-height',
					'max-height',
					'margin',
					'margin-top',
					'margin-right',
					'margin-bottom',
					'margin-left',
					'padding',
					'padding-top',
					'padding-right',
					'padding-bottom',
					'padding-left',
				],
			},
			{
				groupName: 'Typography',
				emptyLineBefore: 'always',
				properties: [
					'font',
					'font-family',
					'font-size',
					'line-height',
					'font-weight',
					'font-style',
					'text-align',
					'src',
				],
			},
			{
				groupName: 'Visual',
				emptyLineBefore: 'always',
				properties: ['color', 'background', 'background-color', 'border', 'border-radius', 'opacity', 'outline'],
			},
			{
				groupName: 'Misc',
				emptyLineBefore: 'always',
				properties: ['cursor', 'overflow', 'box-sizing'],
			},
			{
				groupName: 'Animation',
				emptyLineBefore: 'always',
				properties: ['transition', 'animation'],
			},
		],
		'order/properties-alphabetical-order': null,

		// PLUGIN no-unsupported-browser-features
		'plugin/no-unsupported-browser-features': [
			true,
			{
				ignorePartialSupport: true,
				ignore: ['css-nesting', 'css-rrggbbaa'], // disabled for less-files
				severity: 'warning',
			},
		],
	},
};
