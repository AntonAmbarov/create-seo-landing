import { BasePayload, getPayload } from 'payload';
import configPromise from '@/payload/config';

let cashPayload: BasePayload | null = null;

export async function getPayloadClient(): Promise<BasePayload> {
	if (cashPayload) {
		return cashPayload;
	} else {
		try {
			const payload = await getPayload({ config: configPromise });
			return payload;
		} catch (error) {
			console.error('Payload initialization error: ', error);
			throw error;
		}
	}
}
