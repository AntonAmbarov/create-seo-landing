import type { Header as HeaderType } from '@/payload/payload-types';
import { getPayloadClient } from '../utilities/getPayloadClient';

export async function getHeader(): Promise<HeaderType> {
	const payload = await getPayloadClient();
	return payload.findGlobal({
		slug: 'header',
		draft: false,
	});
}
