import { Block } from 'payload';
import { blockOptions } from '../fields/blockOptions';

export const ContactSection: Block = {
	slug: 'contactSection',
	interfaceName: 'ContactSectionBlock',
	labels: {
		singular: 'Contact Section',
		plural: 'Contact Section',
	},
	graphQL: {
		singularName: 'ContactSection',
	},
	fields: [
		{ name: 'title', type: 'text', required: true },
		{ name: 'text', type: 'text', required: true },
		{
			name: 'form',
			type: 'relationship',
			relationTo: 'forms',
			required: true,
		},
		blockOptions(),
	],
};
