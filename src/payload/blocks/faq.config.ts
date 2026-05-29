import { Block } from 'payload';
import { blockOptions } from '../fields/blockOptions';

export const FaqConfig: Block = {
	slug: 'faq',
	interfaceName: 'FaqBlock',
	labels: {
		singular: 'FAQ',
		plural: 'FAQ sections',
	},
	fields: [
		{
			name: 'title',
			type: 'text',
			label: 'Section Title (H2)',
			required: true,
			defaultValue: 'Frequently Asked Questions',
		},
		{
			name: 'description',
			type: 'text',
			label: 'Section description',
			defaultValue: 'Quick answers to common questions about our products and services.',
		},
		{
			name: 'items',
			type: 'array',
			label: 'FAQ Items',
			required: true,
			minRows: 1,
			fields: [
				{
					name: 'question',
					type: 'text',
					label: 'Question',
					required: true,
				},
				{
					name: 'answer',
					type: 'textarea',
					label: 'Answer',
					required: true,
					admin: {
						description: 'Answer to the question',
					},
				},
			],
		},
		{
			name: 'defaultOpenIndex',
			type: 'number',
			label: 'Default Open Item Index',
			defaultValue: 0,
			min: 0,
			admin: {
				description: 'Which accordion item should be open by default (0 = first item)',
			},
		},
		blockOptions(),
	],
};
