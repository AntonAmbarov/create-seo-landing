import { Block } from 'payload';

export const FormBlock: Block = {
	slug: 'formBlock',
	interfaceName: 'FormBlock',
	labels: {
		singular: 'Form Block',
		plural: 'Form Blocks',
	},
	graphQL: {
		singularName: 'FormBlock',
	},
	fields: [
		{
			name: 'form',
			type: 'relationship',
			relationTo: 'forms',
			required: true,
		},
		{
			name: 'enableIntro',
			label: 'Enable Intro Content',
			type: 'checkbox',
		},
	],
};
