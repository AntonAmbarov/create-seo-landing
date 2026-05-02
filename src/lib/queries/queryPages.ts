import type { Page } from '@/payload/payload-types';
import { getPayloadClient } from '../utilities/getPayloadClient';

export const queryPages = async (): Promise<Pick<Page, 'id' | 'title' | 'slug'>[]> => {
	const payload = await getPayloadClient();

	const pages = await payload.find({
		collection: 'pages',
		depth: 1,
		draft: false,
		limit: 1000,
		overrideAccess: false,
		pagination: false,
		sort: '-updatedAt',
		select: {
			id: true,
			slug: true,
			title: true,
		},
	});

	return pages.docs;
};
