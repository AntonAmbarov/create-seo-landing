import type { Contact } from '@/payload/payload-types';
import { getPayloadClient } from '../utilities/getPayloadClient';

export async function getContacts(): Promise<Contact> {
	const payload = await getPayloadClient();
	return payload.findGlobal({
		slug: 'contacts',
		draft: false,
	});
}
