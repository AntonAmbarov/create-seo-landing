import type { GlobalConfig } from 'payload';

export const Footer: GlobalConfig = {
	slug: 'footer',
	label: 'Footer',
	access: {
		read: () => true,
	},
	fields: [
		{
			name: 'columns',
			type: 'array',
			label: 'Footer Columns',
			minRows: 1,
			maxRows: 4,
			admin: {
				initCollapsed: false,
				description: 'Add up to 4 columns',
			},
			fields: [
				{
					name: 'title',
					type: 'text',
					label: 'Column Title',
				},
				{
					name: 'links',
					type: 'array',
					label: 'Links',
					minRows: 0,
					maxRows: 8,
					fields: [
						{
							name: 'label',
							type: 'text',
							required: true,
						},
						{
							name: 'link',
							type: 'text',
							required: true,
						},
						{
							name: 'isExternal',
							type: 'checkbox',
							label: 'Open in new tab',
							defaultValue: false,
						},
					],
				},
			],
		},
		{
			name: 'copyright',
			type: 'text',
			label: 'Copyright Text',
			defaultValue: '© 2026 SEO Landing Constructor. All rights reserved.',
			admin: {
				description: 'Text displayed at the bottom of the footer',
			},
		},
	],
};
