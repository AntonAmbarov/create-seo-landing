import { Block } from 'payload';

export const PricingConfig: Block = {
	slug: 'pricing',
	interfaceName: 'PricingBlock',
	labels: {
		singular: 'Pricing',
		plural: 'Pricing sections',
	},
	fields: [
		{
			name: 'title',
			type: 'text',
			label: 'Section Title (H2)',
			required: true,
			defaultValue: 'Our Plans',
		},
		{
			name: 'description',
			type: 'text',
			label: 'Section description',
			defaultValue: 'Choose the plan that fits your needs',
		},
		{
			name: 'plans',
			type: 'array',
			label: 'Pricing Plans',
			required: true,
			minRows: 1,
			maxRows: 4,
			fields: [
				{
					name: 'name',
					type: 'text',
					label: 'Plan Name',
					required: true,
				},
				{
					name: 'price',
					type: 'number',
					label: 'Price (USD)',
					required: true,
					min: 0,
				},
				{
					name: 'description',
					type: 'textarea',
					label: 'Plan Description',
					required: true,
				},
				{
					name: 'isPopular',
					type: 'checkbox',
					label: 'Mark as Popular',
					defaultValue: false,
					admin: {
						description: 'Highlights this plan with a badge and primary styling',
					},
				},
				{
					name: 'buttonText',
					type: 'text',
					label: 'Button Text',
					required: true,
				},
				{
					name: 'buttonLink',
					type: 'text',
					label: 'Button Link',
					required: true,
				},
				{
					name: 'features',
					type: 'array',
					label: 'Features List',
					required: true,
					minRows: 1,
					fields: [
						{
							name: 'feature',
							type: 'text',
							label: 'Feature',
							required: true,
						},
					],
				},
			],
		},
	],
};
