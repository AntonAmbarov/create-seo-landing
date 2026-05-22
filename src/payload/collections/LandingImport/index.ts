import { type CollectionConfig } from 'payload';
import { authenticated } from '@/access/authenticated';

import { generateCheatsheet } from './generateCheatsheet';
import { createPage } from './hooks/createPage';

export const LandingImport: CollectionConfig = {
	slug: 'landing-import',
	labels: {
		singular: 'Landing Import',
		plural: 'Landings Import',
	},
	access: {
		create: authenticated,
		read: authenticated,
		update: () => false,
		delete: authenticated,
	},
	admin: {
		defaultColumns: ['importedSlug', 'status', 'createdAt'],
		description: 'Create landing pages by pasting a JSON object.',
	},
	fields: [
		{
			name: 'json',
			type: 'json',
			required: true,
			label: 'Landing JSON',
			admin: {
				description: generateCheatsheet(),
			},
		},
		{
			name: 'result',
			type: 'textarea',
			label: 'Result',
			admin: {
				readOnly: true,
			},
		},
	],
	hooks: {
		afterChange: [createPage],
	},
};
