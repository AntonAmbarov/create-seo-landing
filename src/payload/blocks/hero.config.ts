import type { Block } from 'payload';

export const HeroConfig: Block = {
	slug: 'hero',
	interfaceName: 'HeroBlock',
	labels: {
		singular: 'Hero',
		plural: 'Hero Sections',
	},
	fields: [
		{
			name: 'title',
			type: 'text',
			label: 'Main Title (H1)',
			required: true,
			admin: {
				description: 'Main headline — keep it clear and benefit-oriented',
			},
		},
		{
			name: 'description',
			type: 'text',
			label: 'Description',
			admin: {
				description: 'Short supporting text under the title',
			},
		},
		{
			name: 'bullets',
			type: 'array',
			label: 'Key Benefits',
			minRows: 0,
			maxRows: 5,
			fields: [
				{
					name: 'text',
					type: 'text',
					required: true,
				},
			],
		},
		{
			name: 'image',
			type: 'upload',
			relationTo: 'media',
			label: 'Hero Image',
			admin: {
				description: 'Main visual for the hero section',
			},
		},
		{
			name: 'primaryCta',
			type: 'group',
			label: 'Primary Button',
			fields: [
				{ name: 'label', type: 'text', required: true },
				{ name: 'link', type: 'text', required: true },
			],
		},
		{
			name: 'secondaryCta',
			type: 'group',
			label: 'Secondary Button (optional)',
			admin: {
				condition: (_, siblingData) => !!siblingData.primaryCta?.label,
			},
			fields: [
				{ name: 'label', type: 'text' },
				{ name: 'link', type: 'text' },
			],
		},
	],
};
