import { cache } from 'react';
import { draftMode } from 'next/headers';

import type { Page } from '@/payload/payload-types';
import { getPayloadClient } from '../utilities/getPayloadClient';

export const queryPageBySlug = cache(async ({ slug }: { slug: string }): Promise<Page | null> => {
	const { isEnabled: isDraft } = await draftMode();

	const payload = await getPayloadClient();

	const result = await payload.find({
		collection: 'pages',
		draft: isDraft,
		limit: 1,
		depth: 2,
		pagination: false,
		overrideAccess: isDraft,
		where: {
			slug: {
				equals: slug,
			},
		},
	});

	return result.docs?.[0] || null;
});
