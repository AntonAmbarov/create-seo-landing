import { GlobalConfig } from 'payload';

export const SiteVariables: GlobalConfig = {
	slug: 'sitevariables',
	label: 'SiteVariables',
	admin: {
		description: 'Global shortcodes and variables. Use {{key}} in any rich text field.',
	},
	access: {
		read: () => true,
	},
	fields: [
		{
			name: 'variables',
			label: 'Variables',
			type: 'array',
			minRows: 0,
			admin: {
				initCollapsed: false,
				description: 'Add any variable you want to use as {{variableKey}}',
			},
			fields: [
				{
					name: 'key',
					label: 'Key (without {{ }})',
					type: 'text',
					required: true,
					admin: { description: 'Example: companyName, pricePro, discountPercent' },
				},
				{
					name: 'value',
					type: 'text',
					required: true,
					label: 'Value',
				},
			],
		},
	],
};
