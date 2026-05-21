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
		await importLanding(doc.json, req.payload);
	} catch (err: unknown) {
		const message = err instanceof Error ? err.message : 'Unknown error';

		await req.payload.update({
			collection: 'landing-import',
			id: doc.id,
			data: {
				result: message,
			},
		});
	}
};
