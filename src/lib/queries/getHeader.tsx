import type { Header as HeaderType, Tenant } from '@/payload/payload-types';
import { getPayloadClient } from '../utilities/getPayloadClient';

export async function getHeader(tenantSlug: Pick<Tenant, 'slug'>): Promise<HeaderType> {
	const payload = await getPayloadClient();
	const headerData = await payload.find({
		collection: 'header',
		depth: 1,
		draft: false,
		select: {
			id: true,
			navItems: true,
			showCta: true,
			ctaLabel: true,
			ctaLink: true,
			updatedAt: true,
			createdAt: true,
		},
		where: {
			'tenant.slug': {
				equals: tenantSlug,
			},
		},
	});

	return headerData.docs[0];
}
