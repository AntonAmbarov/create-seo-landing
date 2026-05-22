import type { CollectionAfterChangeHook } from 'payload';
import type { LandingImport } from '@/payload/payload-types';
import { importLanding } from '@/components/modules/landingImporter/importer';

export const createPage: CollectionAfterChangeHook<LandingImport> = async ({
	doc,
	req,
	operation,
}) => {
	if (operation !== 'create') return;

	try {
		const items = Array.isArray(doc.json) ? doc.json : [doc.json];
		const validItems = items.filter((item) => typeof item === 'object');

		if (validItems.length === 0) {
			throw new Error('No valid import data found');
		}

		const importPromises = validItems.map((item) => importLanding(item, req.payload));

		await Promise.all(importPromises);
	} catch (err: unknown) {
		const message = err instanceof Error ? err.message : 'Unknown error';
		console.error(message);
	}
};
