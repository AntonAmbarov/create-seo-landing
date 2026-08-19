import type { CollectionConfig } from 'payload';

export const Footer: CollectionConfig = {
	slug: 'footer',
	access: {
		read: () => true,
	},
	admin: {
		group: 'Глобалы',
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
				description: 'Укажи колонки от 1 до 4',
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
				description: 'Ты знаешь что это',
			},
		},
	],
};
