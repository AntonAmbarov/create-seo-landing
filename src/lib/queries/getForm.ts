import { Form } from '@/payload/payload-types';
import { getPayloadClient } from '../utilities/getPayloadClient';

export async function getFormById(id: number): Promise<Form | null> {
	const payload = await getPayloadClient();
	const result = await payload.find({
		collection: 'forms',
		where: {
			id: { equals: id },
		},
		limit: 1,
	});
	return result?.docs[0] || null;
}
