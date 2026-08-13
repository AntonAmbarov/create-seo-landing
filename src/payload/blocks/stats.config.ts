import type { Block } from 'payload';
import { blockOptions } from '../fields/blockOptions';

export const StatsConfig: Block = {
	slug: 'stats',
	interfaceName: 'StatsBlock',
	labels: { singular: 'Stats', plural: 'Stats Sections' },
	fields: [
		{ name: 'theme', type: 'select', defaultValue: 'dark', options: ['light', 'dark'] },
		{ name: 'eyebrow', type: 'text' },
		{ name: 'heading', type: 'text' },
		{ name: 'subheading', type: 'textarea' },
		{
			name: 'layout',
			type: 'select',
			defaultValue: 'row',
			options: [
				{ label: 'Row (plain numbers)', value: 'row' },
				{ label: 'Grid (cards)', value: 'grid' },
			],
		},
		{
			name: 'stats',
			type: 'array',
			required: true,
			minRows: 2,
			maxRows: 6,
			fields: [
				{ name: 'value', type: 'text', required: true, admin: { description: 'e.g. 50K' } },
				{ name: 'suffix', type: 'text', admin: { description: 'e.g. + or %' } },
				{ name: 'label', type: 'text', required: true },
				{ name: 'description', type: 'text' },
				{
					name: 'icon',
					type: 'select',
					options: ['trending', 'users', 'star', 'zap', 'globe', 'chart'],
				},
			],
		},
		blockOptions(),
	],
};
