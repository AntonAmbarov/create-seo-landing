import type { Footer as FooterType } from '@/payload/payload-types';
import { getPayloadClient } from '../utilities/getPayloadClient';

export async function getFooter(): Promise<FooterType> {
	const payload = await getPayloadClient();
	const footerData = await payload.find({
		collection: 'footer',
		depth: 1,
		draft: false,
		select: {
			id: true,
			columns: true,
			copyright: true,
			updatedAt: true,
			createdAt: true,
		},
		where: {
			'tenant.slug': {
				equals: true,
			},
		},
	});
	return footerData.docs[0];
}
