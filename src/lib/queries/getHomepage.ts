import type { Homepage as HomepageType } from '@/payload/payload-types';
import { getPayloadClient } from '../utilities/getPayloadClient';

export async function getHomepage(): Promise<HomepageType> {
	const payload = await getPayloadClient();
	return payload.findGlobal({
		slug: 'homepage',
		draft: false,
	});
}
