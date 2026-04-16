import { getPayload } from 'payload';
import configPromise from '@/payload/config';
import type { Sitevariable } from '@/payload/payload-types';

export async function getVariables(): Promise<Sitevariable> {
	const payload = await getPayload({ config: configPromise });
	return payload.findGlobal({
		slug: 'sitevariables',
		draft: false,
	});
}
