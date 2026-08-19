import type { Homepage as HomepageType, Tenant } from '@/payload/payload-types';
import { getPayloadClient } from '../utilities/getPayloadClient';
import { draftMode } from 'next/headers';

export async function getHomepage(tenantSlug: Pick<Tenant, 'slug'>): Promise<HomepageType | null> {
	const payload = await getPayloadClient();
	const { isEnabled: isDraft } = await draftMode();

	const homepageData = await payload.find({
		collection: 'homepage',
		depth: 1,
		draft: false,
		select: {
			id: true,
			draft: isDraft,
			limit: 1,
			depth: 2,
			pagination: false,
			overrideAccess: isDraft,
			updatedAt: true,
			createdAt: true,
		},
		where: {
			'tenant.slug': {
				equals: tenantSlug,
			},
		},
	});

	return homepageData.docs?.[0] || null;
}
