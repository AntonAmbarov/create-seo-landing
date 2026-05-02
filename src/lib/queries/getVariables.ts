import type { Sitevariable } from '@/payload/payload-types';
import { getPayloadClient } from '../utilities/getPayloadClient';

export async function getVariables(): Promise<Sitevariable> {
	const payload = await getPayloadClient();
	return payload.findGlobal({
		slug: 'sitevariables',
		draft: false,
	});
}
