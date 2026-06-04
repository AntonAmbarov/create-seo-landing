import type { CollectionConfig } from 'payload';
import path from 'path';
import { authenticated } from '@/access/authenticated';

export const Media: CollectionConfig = {
	slug: 'media',
	labels: {
		singular: 'Media',
		plural: 'Media',
	},
	access: {
		create: authenticated,
		read: () => true,
		update: authenticated,
		delete: authenticated,
	},
	upload: {
		disableLocalStorage: true,
		adminThumbnail: 'thumbnail',
		focalPoint: true,
	},
	fields: [
		{
			name: 'alt',
			type: 'text',
			required: true,
		},
	],
};
