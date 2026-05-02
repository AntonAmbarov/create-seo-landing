import type { Footer as FooterType } from '@/payload/payload-types';
import { getPayloadClient } from '../utilities/getPayloadClient';

export async function getFooter(): Promise<FooterType> {
	const payload = await getPayloadClient();
	return payload.findGlobal({
		slug: 'footer',
		draft: false,
	});
}
