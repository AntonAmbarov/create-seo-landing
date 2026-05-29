import { Block } from 'payload';
import { iconPickerField } from '../fields/iconPicker';
import { blockOptions } from '../fields/blockOptions';

export const FeautersConfig: Block = {
	slug: 'feauters',
	interfaceName: 'FeautersBlock',
	labels: {
		singular: 'Feauters',
		plural: 'Feauters section',
	},
	fields: [
		{ name: 'title', type: 'text', label: 'Section Title (H2)', required: true },
		{ name: 'description', type: 'text', label: 'Section description' },
		{
			name: 'features',
			type: 'array',
			label: 'Features',
			required: true,
			fields: [
				{ name: 'title', type: 'text', label: 'Feature Title (H3)', required: true },
				{ name: 'description', type: 'text', label: 'Feature description', required: true },
				iconPickerField(),
			],
		},
		blockOptions(),
	],
};
