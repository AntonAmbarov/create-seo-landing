import { authenticated } from '@/access/authenticated';
import { authenticatedOrPublished } from '@/access/authenticatedOrPublished';
import { CollectionConfig } from 'payload';

export const Tenants: CollectionConfig<'tenants'> = {
	slug: 'tenants',
	access: {
		create: authenticated,
		delete: authenticated,
		read: authenticatedOrPublished,
		update: authenticated,
	},
	admin: {
		defaultColumns: ['title', 'domain'],
	},
	fields: [
		{
			name: 'name',
			type: 'text',
			required: true,
			admin: {
				description: 'Любое название сайта. Используется только в админке',
			},
		},
		{
			name: 'domain',
			type: 'text',
			required: true,
			unique: true,
			admin: {
				description: 'Домен аффилиата',
			},
		},
		{
			name: 'slug',
			type: 'text',
			required: true,
			unique: true,
			admin: {
				description:
					'Слаг нужен только для api роутов. Для удобства назовки как домен, но без доменной зоны',
			},
		},
	],
};
