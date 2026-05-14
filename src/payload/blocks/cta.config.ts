import { Block } from 'payload';

export const CTAConfig: Block = {
	slug: 'cta',
	interfaceName: 'CTABlock',
	labels: {
		singular: 'CTA',
		plural: 'CTA section',
	},
	fields: [
		{ name: 'title', type: 'text', label: 'Section Title (H2)', required: true },
		{ name: 'description', type: 'text', label: 'Section description' },
		{ name: 'button', type: 'text', label: 'Text button' },
		{ name: 'href', type: 'text', label: 'Link button' },
	],
};
