import { getPayload } from 'payload';

import configPromise from '@/payload/config';
import type { Page } from '@/payload/payload-types';

export const queryPages = async (): Promise<Pick<Page, 'id' | 'title' | 'slug'>[]> => {
	const payload = await getPayload({ config: configPromise });

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
