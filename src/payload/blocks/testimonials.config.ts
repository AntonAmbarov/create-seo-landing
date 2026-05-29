import { Block } from 'payload';
import { blockOptions } from '../fields/blockOptions';

export const TestimonialsConfig: Block = {
	slug: 'testimonials',
	interfaceName: 'TestimonialsBlock',
	labels: {
		singular: 'Testimonials',
		plural: 'Testimonials sections',
	},
	fields: [
		{
			name: 'title',
			type: 'text',
			label: 'Section Title (H2)',
			required: true,
			defaultValue: 'Testimonials',
		},
		{
			name: 'description',
			type: 'text',
			label: 'Section description',
			defaultValue: 'What our customers say about us',
		},
		{
			name: 'testimonials',
			type: 'array',
			label: 'Testimonials',
			required: true,
			minRows: 1,
			maxRows: 12,
			fields: [
				{
					name: 'name',
					type: 'text',
					label: 'Name',
					required: true,
				},
				{
					name: 'role',
					type: 'text',
					label: 'Role / Position',
					required: true,
				},
				{
					name: 'avatar',
					type: 'upload',
					relationTo: 'media',
					label: 'Avatar Image',
					required: true,
					admin: {
						description: 'Profile picture of the person',
					},
				},
				{
					name: 'testimonial',
					type: 'textarea',
					label: 'Testimonial Text',
					required: true,
					admin: {
						description: 'What the person says about your product',
					},
				},
			],
		},
		blockOptions(),
	],
};
